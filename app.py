from flask import Flask, request, jsonify, send_from_directory, send_file
import os
from datetime import datetime
import zipfile
import io
from werkzeug.utils import secure_filename

app = Flask(__name__)

# Create uploads directory if it doesn't exist
UPLOAD_FOLDER = 'exposures'
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

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
    return send_from_directory(UPLOAD_FOLDER, filename)

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