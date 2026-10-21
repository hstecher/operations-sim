from flask import Flask, abort, request, jsonify, send_from_directory, send_file
import hashlib
import hmac
import json
import os
import secrets
import threading
from datetime import datetime
import zipfile
import io
from werkzeug.utils import secure_filename

app = Flask(__name__)

# Teacher code that unlocks every target name in the browser. Set UNLOCK_CODE on Cloud Run;
# the default is only for local runs (this source is downloadable from the site).
UNLOCK_CODE = os.environ.get('UNLOCK_CODE', 'telescope')

# Create uploads directory if it doesn't exist
UPLOAD_FOLDER = 'exposures'
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

# Class-wide switches the teacher controls. Kept beside the gallery so they persist if that
# folder is a mounted bucket. Clients remember the last ids they acted on:
#   resetId  - new on "reset everyone": clients clear their collection
#   classId  - new on "new class": clients also forget the student's name
#   unlockAll - show every name to everyone
CLASS_STATE_FILE = os.path.join(UPLOAD_FOLDER, 'class_state.json')
# Leaderboard: {student id: {"name": str, "found": int}}, filled by each page's check-in
LEADERBOARD_FILE = os.path.join(UPLOAD_FOLDER, 'leaderboard.json')
state_lock = threading.Lock()  # gunicorn runs one process with 8 threads

def teacher_token():
    """Proof of the teacher code, handed out by /unlock and required for class changes."""
    return hmac.new(UNLOCK_CODE.lower().encode(), b'teacher', hashlib.sha256).hexdigest()

def is_teacher(token):
    return hmac.compare_digest(str(token or '').encode(), teacher_token().encode())

def load_json(path, default):
    try:
        with open(path) as f:
            return json.load(f)
    except (OSError, ValueError):
        return default

def save_json(path, data):
    with open(path, 'w') as f:
        json.dump(data, f)

def load_class_state():
    return {'resetId': None, 'classId': None, 'unlockAll': False, **load_json(CLASS_STATE_FILE, {})}

# Serve the main page
@app.route('/')
def serve_index():
    return send_from_directory('.', 'index.html')

# Serve static files (CSS, JS)
@app.route('/<path:filename>')
def serve_static(filename):
    return send_from_directory('.', filename)

@app.route('/exposures/<path:filename>')
def serve_exposure(filename):
    if not filename.endswith('.png'):  # keep leaderboard.json (student names) private
        abort(404)
    return send_from_directory(UPLOAD_FOLDER, filename)

@app.route('/unlock', methods=['POST'])
def unlock():
    code = str((request.get_json(silent=True) or {}).get('code', '')).strip().lower()
    if not hmac.compare_digest(code.encode(), UNLOCK_CODE.lower().encode()):
        return jsonify({'success': False})
    return jsonify({'success': True, 'token': teacher_token()})

@app.route('/class_state', methods=['GET'])
def get_class_state():
    return jsonify(load_class_state())

@app.route('/class_state', methods=['POST'])
def set_class_state():
    data = request.get_json(silent=True) or {}
    if not is_teacher(data.get('token')):
        return jsonify({'success': False, 'error': 'Not signed in as teacher'}), 403
    action = data.get('action')
    with state_lock:
        state = load_class_state()
        if action == 'unlockAll':
            state['unlockAll'] = True
        elif action == 'lockAll':
            state['unlockAll'] = False
        elif action == 'resetAll':
            # Everyone's collection clears; names stay on the leaderboard at 0
            state.update(resetId=secrets.token_hex(4), unlockAll=False)
            board = load_json(LEADERBOARD_FILE, {})
            for entry in board.values():
                entry['found'] = 0
            save_json(LEADERBOARD_FILE, board)
        elif action == 'newClass':
            # Fresh start: collections, student names, leaderboard and the whole Gallery
            state.update(resetId=secrets.token_hex(4), classId=secrets.token_hex(4), unlockAll=False)
            save_json(LEADERBOARD_FILE, {})
            for filename in os.listdir(UPLOAD_FOLDER):
                if filename.endswith('.png'):
                    os.remove(os.path.join(UPLOAD_FOLDER, filename))
        else:
            return jsonify({'success': False, 'error': 'Unknown action'}), 400
        save_json(CLASS_STATE_FILE, state)
    return jsonify({'success': True, **state})

@app.route('/checkin', methods=['POST'])
def checkin():
    """Each page reports its student's name and count every few seconds; returns the class state."""
    data = request.get_json(silent=True) or {}
    student_id = str(data.get('id', ''))[:40]
    name = ' '.join(str(data.get('name', '')).split())[:20]
    try:
        found = max(0, int(data.get('found', 0)))
    except (TypeError, ValueError):
        found = 0
    with state_lock:
        state = load_class_state()
        # Ignore pages that haven't caught up with the latest reset/new class yet, so an
        # in-flight check-in can't put old names or counts back on a cleared leaderboard
        current = data.get('resetId') == state['resetId'] and data.get('classId') == state['classId']
        if student_id and name and current:
            board = load_json(LEADERBOARD_FILE, {})
            entry = {'name': name, 'found': found}
            if board.get(student_id) != entry:  # only write when something changed
                board[student_id] = entry
                save_json(LEADERBOARD_FILE, board)
    return jsonify(state)

@app.route('/leaderboard')
def leaderboard():
    if not is_teacher(request.headers.get('X-Teacher-Token')):
        return jsonify({'success': False, 'error': 'Not signed in as teacher'}), 403
    students = sorted(load_json(LEADERBOARD_FILE, {}).values(),
                      key=lambda s: (-s['found'], s['name'].lower()))
    return jsonify({'success': True, 'students': students})

@app.route('/list_exposures')
def list_exposures():
    try:
        files = []
        for filename in os.listdir(UPLOAD_FOLDER):
            if filename.endswith('.png'):
                filepath = os.path.join(UPLOAD_FOLDER, filename)
                stat = os.stat(filepath)
                files.append({
                    'filename': filename,
                    'url': f'/exposures/{filename}',
                    'size': stat.st_size,
                    'created': datetime.fromtimestamp(stat.st_ctime).isoformat()
                })
        return jsonify({
            'success': True,
            'files': sorted(files, key=lambda x: x['created'], reverse=True)
        })
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        })

@app.route('/save_exposure', methods=['POST'])
def save_exposure():
    if 'file' not in request.files:
        return jsonify({'success': False, 'error': 'No file part'})
    
    file = request.files['file']
    if file.filename == '':
        return jsonify({'success': False, 'error': 'No selected file'})
    
    try:
        # Save the file (sanitized so a crafted name can't write outside the folder)
        filename = secure_filename(file.filename)
        if not filename.endswith('.png'):
            return jsonify({'success': False, 'error': 'Only PNG files can be saved'})
        filepath = os.path.join(UPLOAD_FOLDER, filename)
        file.save(filepath)
        return jsonify({
            'success': True,
            'filename': filename,
            'path': filepath
        })
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        })

@app.route('/download_project')
def download_project():
    try:
        # Create a BytesIO object to store the zip file
        memory_file = io.BytesIO()
        
        # Create the zip file
        with zipfile.ZipFile(memory_file, 'w', zipfile.ZIP_DEFLATED) as zf:
            # Add all files in the current directory except the exposures folder and __pycache__
            skip_dirs = {'__pycache__', 'exposures', '.git', '.venv', 'venv'}
            for root, dirs, files in os.walk('.'):
                dirs[:] = [d for d in dirs if d not in skip_dirs]
                for file in files:
                    filepath = os.path.join(root, file)
                    arcname = os.path.relpath(filepath, '.')
                    zf.write(filepath, arcname)
        
        # Move to the beginning of the BytesIO buffer
        memory_file.seek(0)
        
        return send_file(
            memory_file,
            mimetype='application/zip',
            as_attachment=True,
            download_name='telescope-simulator.zip'
        )
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        })

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=8000) 