// Constants
const SATELLITE_COUNT = 3;  // Add a few satellites
const TELESCOPE_FOV = 0.5;  // degrees - zoomed in to focus on single objects
const FINDER_ZOOMS = [90, 40, 15];  // Sky Map field of view choices, degrees
const DEFAULT_FINDER_ZOOM = 1;
const WAVELENGTH_MIN = 380;  // nm
const WAVELENGTH_MAX = 780;  // nm
const DEG = Math.PI / 180;

// The real sky drifts 0.004 deg/s. ~15x faster makes the Earth's spin easy to notice,
// while giving kids ~4 s to press Follow before a centered target leaves the 0.5 deg view.
const SKY_DRIFT_RATE = 0.06;  // degrees per second

// Arrow keys: a tap is a tiny nudge; holding doubles the speed every NUDGE_DOUBLING_TIME
const NUDGE_MIN_SPEED = 0.05;        // deg/s (~35 px/s in the telescope view)
const NUDGE_MAX_SPEED = 20;          // deg/s
const NUDGE_STEADY_MAX_SPEED = 0.3;  // deg/s cap while guiding, for fine-tuning
const NUDGE_DOUBLING_TIME = 0.4;     // seconds

// Go-to: speeds up for long trips and eases in near the target
const SLEW_MAX_SPEED = 60;  // deg/s
const SLEW_MIN_SPEED = 0.5; // deg/s
const SLEW_GAIN = 4;        // 1/s

// Mount wobble whenever guiding is off: wanders around the target but stays nearby
const WOBBLE_SIZE = 0.03;  // degrees, typical offset
const WOBBLE_TIME = 0.6;   // seconds before the wobble "forgets" its direction

// Adaptive optics (AO): the air is a bumpy sheet of waves blowing across the telescope.
// The wavefront sensor (WFS) measures the bumps; AO bends a mirror to cancel them.
const WFS_LENSLETS = 12;        // lenslets across the telescope opening
const TURBULENCE_WAVES = 24;    // wave components that make up the bumpy air
const TURBULENCE_K_MIN = 2;     // wave sizes, in radians per pupil radius
const TURBULENCE_K_MAX = 12;
const WIND_SPEED = 0.6;         // pupil radii per second the air blows across
// Telescope view with AO off: light bends through the bumpy air like looking through
// rippling water. Exaggerated well beyond real seeing so the bending is easy to see.
const WARP_PX = 22;             // typical push of each bit of the image, in px
const WARP_GRID = 24;           // the bending is worked out on this grid, then smoothed
const WARP_FIELD_SCALE = 1.4;   // how many ripples fit across the view
const TWINKLE_STRENGTH = 1.0;   // brightening/dimming where the air focuses or spreads light
const SEEING_BLUR_PX = 1.5;     // slight softening on top of the ripples
const AO_RESIDUAL = 0.08;       // fraction of the blur left once AO has locked
const AO_LOCK_TIME = 0.5;       // seconds for the AO loop to settle
const WFS_SPOT_GAIN = 5;        // px of spot motion per unit of wavefront slope

const EXPOSURE_SECONDS = 4;
const EXPOSURE_RATE = 1.2;  // how fast light builds up, per second
// Blend a frame into the picture this often. Fewer, stronger blends avoid the speckle that
// tiny per-frame alphas leave behind on an 8-bit canvas.
const EXPOSURE_SAMPLE_SECONDS = 0.1;
const SPECTRUM_POINTS = 300;

// Add satellite parameters
const SATELLITE_SPEED = 0.5;  // degrees per second
const SATELLITE_MAGNITUDE = 2;  // Fairly bright

const COLLECTED_KEY = 'telescopeExplorer.collected';
const SEEN_KEY = 'telescopeExplorer.seen';
const HELP_SEEN_KEY = 'telescopeExplorer.helpSeen';
const TEACHER_TOKEN_KEY = 'telescopeExplorer.teacherToken';  // signed in as teacher on this device
const APPLIED_RESET_KEY = 'telescopeExplorer.appliedReset';  // last class reset this device has done
const CLASS_POLL_MS = 10000;  // how often to check the teacher's class-wide switches

// Planet colors (for future use)
const PLANET_COLORS = {
    'Mercury': '#B7B8B9',
    'Venus': '#FFF5E1',
    'Mars': '#CD5C5C',
    'Jupiter': '#DAA520',
    'Saturn': '#F4E4C1',
    'Uranus': '#4FD0E7',
    'Neptune': '#4169E1',
    'Moon': '#DDDDDD',
    'Pluto': '#E8D5B5'
};

// UFO image path
const UFO_IMAGE = 'planets/ufo.png';

const KIND_LABELS = {
    planet: 'Planet', galaxy: 'Galaxy', nebula: 'Nebula', cluster: 'Star cluster', star: 'Star',
    machine: 'Space machine', probe: 'Space probe', mystery: 'Mystery'
};

// Tabs over the target list
const CATEGORIES = [
    { key: 'all', label: 'All' },
    { key: 'solar', label: '🪐 Solar System', kinds: ['planet'] },
    { key: 'stars', label: '⭐ Stars', kinds: ['star'] },
    { key: 'galaxies', label: '🌌 Galaxies', kinds: ['galaxy'] },
    { key: 'nebulae', label: '☁️ Nebulae', kinds: ['nebula'] },
    { key: 'clusters', label: '✨ Clusters', kinds: ['cluster'] },
    { key: 'machines', label: '🛰️ Space Machines', kinds: ['machine', 'probe'] }
];

const STARLINK_SPACING = 0.03;  // degrees between satellites in a Starlink train

// What each kind of light looks like, in kid words (keyed by spectra.type)
const SPECTRUM_CAPTIONS = {
    'O': 'a super-hot blue star',
    'B': 'a very hot blue-white star',
    'A': 'a hot white star',
    'F': 'a warm yellow-white star',
    'G': 'a yellow star like our Sun',
    'K': 'a cooler orange star',
    'M': 'a cool red star',
    'Reflected': 'sunlight bouncing off a planet',
    'Galaxy': 'billions of stars mixed together',
    'Nebula': 'glowing gas in space',
    'Cluster': 'thousands of stars shining together',
    'Machine': 'sunlight bouncing off a spacecraft',
    'Unknown': 'something nobody has seen before! 👽'
};

const RAINBOW_STOPS = [
    [380, '#7f00ff'], [440, '#2a2aff'], [490, '#00d0ff'], [530, '#00ff40'],
    [580, '#ffff00'], [620, '#ff8000'], [680, '#ff0000'], [780, '#700000']
];

// Helper function to format RA from degrees to HH:MM
function formatRADegrees(raDegrees) {
    const hours = raDegrees / 15;  // Convert to hours
    const h = Math.floor(hours);
    const m = Math.floor((hours - h) * 60);
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
}

function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}

function gaussianRandom() {
    return Math.sqrt(-2 * Math.log(1 - Math.random())) * Math.cos(2 * Math.PI * Math.random());
}

// Gnomonic (tangent-plane) projection, like a real camera. Returns offsets from the
// center in degrees (x grows with RA, y grows with Dec), or null if behind the view.
function projectSky(ra, dec, centerRa, centerDec) {
    const dRa = (ra - centerRa) * DEG;
    const d = dec * DEG;
    const d0 = centerDec * DEG;
    const cosC = Math.sin(d0) * Math.sin(d) + Math.cos(d0) * Math.cos(d) * Math.cos(dRa);
    if (cosC <= 0.05) return null;
    return {
        x: Math.cos(d) * Math.sin(dRa) / cosC / DEG,
        y: (Math.cos(d0) * Math.sin(d) - Math.sin(d0) * Math.cos(d) * Math.cos(dRa)) / cosC / DEG
    };
}

function unprojectSky(x, y, centerRa, centerDec) {
    x *= DEG;
    y *= DEG;
    const d0 = centerDec * DEG;
    const rho = Math.hypot(x, y);
    if (rho === 0) return { ra: centerRa, dec: centerDec };
    const c = Math.atan(rho);
    const dec = Math.asin(Math.cos(c) * Math.sin(d0) + y * Math.sin(c) * Math.cos(d0) / rho) / DEG;
    const ra = centerRa + Math.atan2(x * Math.sin(c), rho * Math.cos(d0) * Math.cos(c) - y * Math.sin(d0) * Math.sin(c)) / DEG;
    return { ra: (ra + 360) % 360, dec };
}

function loadSet(key) {
    try {
        return new Set(JSON.parse(localStorage.getItem(key)) || []);
    } catch (e) {
        return new Set();
    }
}

function saveSet(key, set) {
    try {
        localStorage.setItem(key, JSON.stringify([...set]));
    } catch (e) {
        // Storage can be unavailable (private windows); progress just won't persist
    }
}

// Loads a picture the first time it's needed and fades its edges to clear, so
// rectangular photos blend into the sky instead of showing up as boxes
class SoftImage {
    constructor(path) {
        this.path = path;
        this.canvas = null;
        this.requested = false;
    }

    ready() {
        if (!this.requested && this.path) {
            this.requested = true;
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                canvas.width = img.width;
                canvas.height = img.height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0);
                // Pictures with a see-through background (spacecraft renders) need no fade
                if (ctx.getImageData(0, 0, 1, 1).data[3] < 250) {
                    this.canvas = canvas;
                    return;
                }
                // Oval fade: a unit-circle gradient stretched to the picture's shape
                ctx.globalCompositeOperation = 'destination-in';
                ctx.setTransform(img.width / 2, 0, 0, img.height / 2, img.width / 2, img.height / 2);
                const fade = ctx.createRadialGradient(0, 0, 0, 0, 0, 1);
                fade.addColorStop(0, 'rgba(0, 0, 0, 1)');
                fade.addColorStop(0.7, 'rgba(0, 0, 0, 1)');
                fade.addColorStop(1, 'rgba(0, 0, 0, 0)');
                ctx.fillStyle = fade;
                ctx.fillRect(-1, -1, 2, 2);
                this.canvas = canvas;
            };
            img.onerror = () => console.warn(`Image not found: ${this.path}`);
            img.src = this.path;
        }
        return !!this.canvas;
    }

    // Draw centered on pos, with the longer side `size` px
    draw(ctx, pos, size, composite = 'source-over') {
        const aspect = this.canvas.width / this.canvas.height;
        const w = aspect >= 1 ? size : size * aspect;
        const h = aspect >= 1 ? size / aspect : size;
        ctx.save();
        ctx.globalCompositeOperation = composite;
        ctx.drawImage(this.canvas, pos.x - w / 2, pos.y - h / 2, w, h);
        ctx.restore();
    }
}

class CelestialObject {
    constructor(ra, dec, magnitude) {
        this.ra = ra;
        this.dec = dec;
        this.magnitude = magnitude;
    }

    getScreenPosition(centerRa, centerDec, fov, canvas) {
        const offset = projectSky(this.ra, this.dec, centerRa, centerDec);
        if (!offset) return null;
        return {
            x: canvas.width / 2 + (offset.x / fov) * canvas.width,
            y: canvas.height / 2 - (offset.y / fov) * canvas.height
        };
    }

    draw(ctx, pos, scale = 1.0) {}
}

class Star extends CelestialObject {
    constructor(starConfig) {
        super(starConfig.ra, starConfig.dec, starConfig.magnitude);
        // Add color based on spectral type
        const spectralColors = {
            'O': '#9BB0FF',  // Blue
            'B': '#AAC0FF',  // Blue-white
            'A': '#CAD7FF',  // White
            'F': '#F8F7FF',  // Yellow-white
            'G': '#FFF4EA',  // Yellow (Sun-like)
            'K': '#FFD2A1',  // Orange
            'M': '#FFB56C'   // Red
        };
        
        this.spectralType = starConfig.spectralType || 'G';
        this.color = spectralColors[this.spectralType] || spectralColors['G'];
        this.name = starConfig.name || null;
        
        // Add twinkle effect
        this.twinklePhase = Math.random() * Math.PI * 2;
        this.twinkleSpeed = 2 + Math.random() * 2;

        // Generate spectral data based on spectral type
        this.spectra = this.generateSpectra(this.spectralType);
    }

    generateSpectra(type) {
        // Define spectral line peaks and intensities for each spectral type
        const spectralData = {
            'O': {  // Hot blue stars - strong helium lines
                peaks: [393.4, 396.8, 410.2, 434.0, 447.1, 471.3, 486.1, 656.3],
                intensities: [0.95, 0.92, 0.88, 0.85, 0.90, 0.82, 0.75, 0.65]
            },
            'B': {  // Very hot stars - strong hydrogen
                peaks: [393.4, 396.8, 410.2, 434.0, 486.1, 656.3],
                intensities: [0.90, 0.88, 0.92, 0.95, 0.88, 0.82]
            },
            'A': {  // Hot stars - strongest hydrogen lines
                peaks: [393.4, 396.8, 410.2, 434.0, 486.1, 656.3],
                intensities: [0.85, 0.82, 0.88, 1.00, 0.95, 0.90]
            },
            'F': {  // Warm stars - strong hydrogen, increasing metals
                peaks: [393.4, 396.8, 410.2, 434.0, 486.1, 516.7, 656.3],
                intensities: [0.80, 0.78, 0.85, 0.90, 0.88, 0.85, 0.85]
            },
            'G': {  // Solar type - mix of metals and hydrogen
                peaks: [393.4, 396.8, 410.2, 434.0, 486.1, 516.7, 588.9, 656.3],
                intensities: [0.95, 0.92, 0.80, 0.85, 0.82, 0.90, 0.95, 0.80]
            },
            'K': {  // Cool stars - strong metal lines
                peaks: [393.4, 396.8, 410.2, 434.0, 486.1, 516.7, 588.9, 656.3],
                intensities: [1.00, 0.98, 0.75, 0.70, 0.78, 0.95, 0.98, 0.75]
            },
            'M': {  // Very cool stars - molecular bands
                peaks: [410.2, 434.0, 447.1, 486.1, 516.7, 656.3, 706.5],
                intensities: [0.70, 0.65, 0.95, 0.72, 0.95, 0.70, 0.88]
            }
        };

        const data = spectralData[type] || spectralData['G'];
        
        // Add small random variations to make each star unique
        const peaks = data.peaks.map(p => p + (Math.random() - 0.5) * 1);
        const intensities = data.intensities.map(i => i * (0.95 + Math.random() * 0.1));

        return {
            type: type,
            peaks: peaks,
            intensities: intensities
        };
    }

    draw(ctx, pos, scale = 1.0) {
        const baseRadius = Math.max(1.5, (6 - this.magnitude) * scale);
        
        // Only twinkle in acquisition/SHWFS views (small scale), not in telescope/exposure views
        const shouldTwinkle = scale < 3;
        const twinkle = shouldTwinkle ? (Math.sin(this.twinklePhase) * 0.3 + 0.8) : 1.0;
        const radius = baseRadius * twinkle;
        
        // For zoomed telescope view (large scale), add an impressive glow halo
        if (scale > 3) {
            const haloGradient = ctx.createRadialGradient(
                pos.x, pos.y, 0,
                pos.x, pos.y, radius * 3
            );
            // Parse color to add alpha
            const colorMatch = this.color.match(/#([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})/i);
            if (colorMatch) {
                const r = parseInt(colorMatch[1], 16);
                const g = parseInt(colorMatch[2], 16);
                const b = parseInt(colorMatch[3], 16);
                haloGradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0.4)`);
                haloGradient.addColorStop(0.3, `rgba(${r}, ${g}, ${b}, 0.2)`);
                haloGradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
            } else {
                haloGradient.addColorStop(0, this.color);
                haloGradient.addColorStop(1, 'rgba(255,255,255,0)');
            }
            ctx.fillStyle = haloGradient;
            ctx.beginPath();
            ctx.arc(pos.x, pos.y, radius * 3, 0, Math.PI * 2);
            ctx.fill();
        }
        
        // Draw main star
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, radius, 0, Math.PI * 2);
        
        // Create gradient for more realistic star appearance
        const gradient = ctx.createRadialGradient(
            pos.x, pos.y, 0,
            pos.x, pos.y, radius * 1.5
        );
        gradient.addColorStop(0, '#FFFFFF');  // Bright white core
        gradient.addColorStop(0.3, this.color);  // Star color
        gradient.addColorStop(0.7, this.color);
        gradient.addColorStop(1, 'rgba(0,0,0,0)');
        
        ctx.fillStyle = gradient;
        ctx.fill();

        // Only update twinkle phase for acquisition/SHWFS views (simulates atmospheric turbulence)
        if (shouldTwinkle) {
        this.twinklePhase += this.twinkleSpeed * 0.05;
        }
    }
}

class Moon extends CelestialObject {
    constructor(planet, config) {
        super(planet.ra, planet.dec, config.magnitude);
        this.planet = planet;
        this.baseOrbitRadius = config.orbitRadius;
        this.orbitAngle = Math.random() * 360;  // Random starting position
        // Convert period from hours to seconds and calculate degrees per second
        // Multiply by 100 to make the motion much more visible
        this.orbitSpeed = (360 / (config.orbitPeriod * 3600)) * 100;
    }

    getPosition(planetPos, canvas, fov) {
        const orbitRadius = (this.baseOrbitRadius / fov) * canvas.width;
        const angle = this.orbitAngle * Math.PI / 180;
        return {
            x: planetPos.x + orbitRadius * Math.cos(angle),
            y: planetPos.y + orbitRadius * Math.sin(angle)
        };
    }

    draw(ctx, planetPos, canvas, fov, scale = 1.0) {
        const pos = this.getPosition(planetPos, canvas, fov);
        const radius = Math.max(1, (3 - this.magnitude) * scale);
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = '#FFFFFF';
        ctx.fill();
    }

    update(elapsedSeconds) {
        this.orbitAngle = (this.orbitAngle + this.orbitSpeed * elapsedSeconds) % 360;
    }
}

class Satellite extends CelestialObject {
    constructor() {
        // Random starting position near the ecliptic
        const ra = Math.random() * 360;
        const dec = (Math.random() - 0.5) * 40;  // Within 20 degrees of ecliptic
        super(ra, dec, SATELLITE_MAGNITUDE);
        
        // Random direction of motion
        this.direction = Math.random() * Math.PI * 2;
        this.speed = SATELLITE_SPEED * (0.8 + Math.random() * 0.4);  // Varying speeds
        
        // Flashing effect
        this.flashPhase = Math.random() * Math.PI * 2;
        this.flashPeriod = 1 + Math.random() * 2;  // 1-3 second period
    }

    update(elapsedSeconds) {
        // Update position based on direction and speed
        const distance = this.speed * elapsedSeconds;
        this.ra = (this.ra + distance * Math.cos(this.direction) + 360) % 360;
        this.dec = Math.max(-90, Math.min(90, 
            this.dec + distance * Math.sin(this.direction)
        ));

        // Update flash phase
        this.flashPhase += (Math.PI * 2 * elapsedSeconds) / this.flashPeriod;
    }

    draw(ctx, pos, scale = 1.0) {
        // Calculate flash intensity (creates blinking effect)
        const flash = Math.sin(this.flashPhase) * 0.5 + 0.5;
        
        // Draw satellite
        const radius = Math.max(1, 2 * scale);
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, radius, 0, Math.PI * 2);
        
        // Create gradient with flash effect
        const gradient = ctx.createRadialGradient(
            pos.x, pos.y, 0,
            pos.x, pos.y, radius * 2
        );
        const color = `rgba(255, 255, 255, ${flash})`;
        gradient.addColorStop(0, color);
        gradient.addColorStop(0.5, color);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.fillStyle = gradient;
        ctx.fill();
    }
}

class DeepSkyObject extends CelestialObject {
    constructor(name, ra, dec, magnitude, type, imagePath, sizeArcmin) {
        super(ra, dec, magnitude);
        this.name = name;
        this.type = type;  // 'galaxy', 'nebula' or 'cluster'
        this.sizeArcmin = sizeArcmin || 10;
        this.picture = new SoftImage(imagePath);

        const spectraTypes = { galaxy: 'Galaxy', nebula: 'Nebula', cluster: 'Cluster' };
        this.spectra = {
            type: spectraTypes[type] || 'Nebula',
            peaks: [450, 550, 650],
            intensities: [0.6, 0.7, 0.6]
        };
    }

    draw(ctx, pos, scale = 1.0) {
        // In telescope/exposure view, use the picture at its real size, but never so
        // small that kids miss it or bigger than the view
        if (scale > 3 && this.picture.ready()) {
            const width = ctx.canvas.width;
            const size = clamp(this.sizeArcmin * width / (TELESCOPE_FOV * 60), width * 0.37, width * 0.94);
            ctx.save();
            ctx.globalAlpha *= 0.9;
            this.picture.draw(ctx, pos, size, 'lighter');  // Light adds to the stars behind
            ctx.restore();
            return;
        }

        // In the Sky Map, draw as a fuzzy patch
        const fuzzRadius = Math.max(8, (12 - this.magnitude) * scale) * 1.2;
        const colors = { nebula: '255, 180, 200', galaxy: '220, 220, 255', cluster: '255, 240, 210' };
        const color = colors[this.type] || colors.galaxy;
        for (let i = 3; i > 0; i--) {
            ctx.beginPath();
            ctx.arc(pos.x, pos.y, fuzzRadius * i * 0.5, 0, Math.PI * 2);
            const gradient = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, fuzzRadius * i * 0.5);
            const alpha = 0.25 / i;
            gradient.addColorStop(0, `rgba(${color}, ${alpha * 3})`);
            gradient.addColorStop(1, `rgba(${color}, 0)`);
            ctx.fillStyle = gradient;
            ctx.fill();
        }
    }
}

// Satellites, space stations and rocket stages circling Earth. Real ones cross the
// sky in a few minutes; these are slowed way down so kids can catch them.
class SpaceMachine extends CelestialObject {
    constructor(target, angle) {
        super(0, 0, 2);
        this.name = target.id;
        this.orbit = target.orbit;
        this.angle = angle;  // degrees along the orbit
        this.picture = target.orbit.size && !target.orbit.tumble ? new SoftImage(target.image) : null;
        this.flashPhase = Math.random() * Math.PI * 2;
        this.spectra = {
            type: 'Machine',
            peaks: [430, 486.1, 550, 656.3],
            intensities: [0.7, 0.8, 0.9, 0.7]
        };
        this.updatePosition();
    }

    update(elapsedSeconds) {
        this.angle += this.orbit.speed * elapsedSeconds;
        this.flashPhase += elapsedSeconds * (this.orbit.tumble ? 2.5 : 1.5);
        this.updatePosition();
    }

    // A tilted circle around the sky: node turns it, incl tips it
    updatePosition() {
        const node = this.orbit.node * DEG;
        const incl = this.orbit.incl * DEG;
        const a = this.angle * DEG;
        const x = Math.cos(node) * Math.cos(a) - Math.sin(node) * Math.sin(a) * Math.cos(incl);
        const y = Math.sin(node) * Math.cos(a) + Math.cos(node) * Math.sin(a) * Math.cos(incl);
        const z = Math.sin(a) * Math.sin(incl);
        this.ra = (Math.atan2(y, x) / DEG + 360) % 360;
        this.dec = Math.asin(clamp(z, -1, 1)) / DEG;
    }

    draw(ctx, pos, scale = 1.0) {
        const zoomed = scale > 3;
        if (zoomed && this.orbit.tumble) {
            this.drawRocketStage(ctx, pos, this.orbit.size * scale / 8);
            return;
        }
        if (zoomed && this.picture && this.picture.ready()) {
            this.picture.draw(ctx, pos, this.orbit.size * scale / 8);
            return;
        }

        // A sunlit dot: Sky Map view, and each Starlink satellite
        const flash = this.orbit.tumble ? 0.4 + 0.6 * Math.abs(Math.sin(this.flashPhase)) : 0.85 + 0.15 * Math.sin(this.flashPhase);
        const radius = zoomed ? 5 * scale / 8 : 2.5;
        const gradient = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, radius * 2);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${flash})`);
        gradient.addColorStop(0.4, `rgba(255, 255, 240, ${flash * 0.8})`);
        gradient.addColorStop(1, 'rgba(255, 255, 240, 0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, radius * 2, 0, Math.PI * 2);
        ctx.fill();
    }

    // An empty rocket stage, slowly tumbling and flashing as the Sun glints off it
    drawRocketStage(ctx, pos, size) {
        const glint = 0.45 + 0.55 * Math.abs(Math.sin(this.flashPhase));
        const w = size * 0.28;
        const h = size;
        ctx.save();
        ctx.translate(pos.x, pos.y);
        ctx.rotate(this.flashPhase * 0.4);
        ctx.globalAlpha *= glint;
        const body = ctx.createLinearGradient(-w / 2, 0, w / 2, 0);
        body.addColorStop(0, '#6d7078');
        body.addColorStop(0.45, '#f4f4f4');
        body.addColorStop(1, '#4a4c52');
        ctx.fillStyle = body;
        ctx.fillRect(-w / 2, -h / 2, w, h * 0.82);
        ctx.fillStyle = '#2b2d33';
        ctx.fillRect(-w / 2, -h / 2 + h * 0.12, w, h * 0.06);  // Painted band
        ctx.fillStyle = '#3a3c42';
        ctx.beginPath();  // Engine nozzle
        ctx.moveTo(-w * 0.22, h * 0.32);
        ctx.lineTo(w * 0.22, h * 0.32);
        ctx.lineTo(w * 0.38, h / 2);
        ctx.lineTo(-w * 0.38, h / 2);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    }
}

// Spacecraft far beyond Earth. Real telescopes can't see them, so the view shows a
// picture of the probe at the spot where it really is.
class SpaceProbe extends CelestialObject {
    constructor(target) {
        super(target.ra || 0, target.dec || 0, 30);
        this.name = target.id;
        this.antiSun = !!target.antiSun;
        this.invisible = true;  // Gives the wavefront sensor and spectrum nothing to measure
        this.picture = new SoftImage(target.image);
        this.pulse = 0;
    }

    updatePosition(date) {
        if (!this.antiSun) return;
        // JWST sits about 1.5 million km straight away from the Sun
        const sun = Astronomy.EquatorFromVector(Astronomy.GeoVector('Sun', date, true));
        this.ra = (sun.ra * 15 + 180) % 360;
        this.dec = -sun.dec;
    }

    draw(ctx, pos, scale = 1.0) {
        this.pulse += 0.04;
        const alpha = 0.55 + 0.3 * Math.sin(this.pulse);
        if (scale > 3 && this.picture.ready()) {
            this.picture.draw(ctx, pos, 170 * scale / 8);
            return;
        }
        ctx.fillStyle = `rgba(110, 220, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, scale > 3 ? 1.5 : 2, 0, Math.PI * 2);
        ctx.fill();
    }
}

class UFO extends CelestialObject {
    constructor(ra, dec) {
        // UFO has a magnitude similar to Mars for visibility
        super(ra, dec, 1.0);
        
        // Load UFO image
        this.image = null;
        this.imageLoaded = false;
        this.loadImage();
        
        // Add a pulsing glow effect
        this.glowPhase = Math.random() * Math.PI * 2;
        this.glowSpeed = 3;
        
        // Simple spectra (mysterious!)
        this.spectra = {
            type: 'Unknown',
            peaks: [400, 500, 600, 700],
            intensities: [0.8, 0.9, 0.8, 0.7]
        };
    }
    
    loadImage() {
        const img = new Image();
        img.onload = () => {
            this.image = img;
            this.imageLoaded = true;
        };
        img.onerror = () => {
            console.warn(`UFO image not found: ${UFO_IMAGE}`);
            this.imageLoaded = false;
        };
        img.src = UFO_IMAGE;
    }
    
    draw(ctx, pos, scale = 1.0) {
        // Calculate size similar to Mars
        let baseRadius = Math.max(3, (6 - this.magnitude) * scale);
        const radius = baseRadius;
        
        // Update glow phase
        this.glowPhase += this.glowSpeed * 0.05;
        const glow = Math.sin(this.glowPhase) * 0.3 + 0.7;
        
        // In telescope/exposure view, use the image
        if (scale > 3 && this.imageLoaded && this.image) {
            ctx.save();
            
            // Calculate aspect ratio
            const imgWidth = this.image.width;
            const imgHeight = this.image.height;
            const aspectRatio = imgWidth / imgHeight;
            
            let displayWidth, displayHeight;
            if (aspectRatio > 1) {
                displayWidth = radius * 2 * aspectRatio;
                displayHeight = radius * 2;
            } else {
                displayWidth = radius * 2;
                displayHeight = radius * 2 / aspectRatio;
            }
            
            // Draw the UFO image
            ctx.globalAlpha = glow;
            ctx.drawImage(
                this.image, 
                pos.x - displayWidth / 2, 
                pos.y - displayHeight / 2, 
                displayWidth, 
                displayHeight
            );
            ctx.globalAlpha = 1.0;
            
            ctx.restore();
            
            // Add mysterious pulsing glow
            const haloGradient = ctx.createRadialGradient(
                pos.x, pos.y, radius,
                pos.x, pos.y, radius * 2
            );
            haloGradient.addColorStop(0, `rgba(0, 255, 100, ${glow * 0.4})`);
            haloGradient.addColorStop(1, 'rgba(0, 255, 100, 0)');
            ctx.fillStyle = haloGradient;
            ctx.beginPath();
            ctx.arc(pos.x, pos.y, radius * 2, 0, Math.PI * 2);
            ctx.fill();
        } else {
            // In acquisition view, draw as mysterious green dot
            const glowRadius = radius * glow;
            
            ctx.beginPath();
            ctx.arc(pos.x, pos.y, glowRadius, 0, Math.PI * 2);
            
            const gradient = ctx.createRadialGradient(
                pos.x, pos.y, 0,
                pos.x, pos.y, glowRadius * 1.5
            );
            gradient.addColorStop(0, '#00FF88');
            gradient.addColorStop(0.5, '#00FF88');
            gradient.addColorStop(1, 'rgba(0, 255, 136, 0)');
            
            ctx.fillStyle = gradient;
            ctx.fill();
        }
    }
}

class Planet extends CelestialObject {
    constructor(name, imagePath) {
        // Start with default position, will be updated by ephemeris
        super(0, 0, 0);
        this.name = name;
        this.color = PLANET_COLORS[name] || '#FFFFFF';
        this.imagePath = imagePath;
        
        // Simple spectra for reflected sunlight
        this.spectra = {
            type: 'Reflected',
            peaks: [430, 486.1, 550, 656.3],
            intensities: [0.7, 0.8, 0.9, 0.7]
        };
        
        // Load planet image
        this.image = null;
        this.imageLoaded = false;
        this.loadImage();
    }
    
    loadImage() {
        // Load the local image
        const img = new Image();
        img.onload = () => {
            this.image = img;
            this.imageLoaded = true;
        };
        img.onerror = () => {
            console.warn(`Planet image not found: ${this.imagePath} - using colored circle fallback`);
            this.imageLoaded = false;
        };
        img.src = this.imagePath;
    }
    
    updatePosition(date) {
        try {
            // Use astronomy-engine to calculate planet position
            // Note: astronomy-engine expects capitalized planet names
            const body = this.name;  // Keep the capital name!
            
            // Geocentric position (as seen from Earth), converted to equatorial
            const vector = Astronomy.GeoVector(body, date, true);
            const equator = Astronomy.EquatorFromVector(vector);
            
            // Convert from hours to degrees for RA
            this.ra = equator.ra * 15.0;
            this.dec = equator.dec;
            
            // Get illumination for magnitude
            const illum = Astronomy.Illumination(body, date);
            this.magnitude = illum.mag;
        } catch (e) {
            console.error(`Error calculating position for ${this.name}:`, e);
        }
    }

    draw(ctx, pos, scale = 1.0) {
        // Calculate radius based on magnitude and scale
        let baseRadius = Math.max(3, (6 - this.magnitude) * scale);
        
        // Boost size for outer planets so kids can see them better
        if (scale > 3) {  // Only in telescope/exposure view
            if (this.name === 'Uranus') {
                baseRadius *= 7;  // Make Uranus easier to see
            } else if (this.name === 'Neptune' || this.name === 'Pluto') {
                baseRadius *= 5;  // Make Neptune (and tiny Pluto) easier to see
            }
        }
        if (this.name === 'Moon') {
            baseRadius = 22 * scale;  // The Moon just about fills the telescope view
        }
        
        const radius = baseRadius;
        
        // In telescope/exposure view (large scale), use real image if loaded
        if (scale > 3 && this.imageLoaded && this.image) {
            // Draw planet image maintaining aspect ratio
            ctx.save();
            
            // Calculate aspect ratio and dimensions
            const imgWidth = this.image.width;
            const imgHeight = this.image.height;
            const aspectRatio = imgWidth / imgHeight;
            
            // Determine display size based on aspect ratio
            let displayWidth, displayHeight;
            if (aspectRatio > 1) {
                // Wider than tall (like Saturn with rings)
                displayWidth = radius * 2 * aspectRatio;
                displayHeight = radius * 2;
            } else {
                // Taller than wide or square
                displayWidth = radius * 2;
                displayHeight = radius * 2 / aspectRatio;
            }
            
            // Draw the image centered (no clipping for non-circular planets like Saturn)
            ctx.drawImage(
                this.image, 
                pos.x - displayWidth / 2, 
                pos.y - displayHeight / 2, 
                displayWidth, 
                displayHeight
            );
            
            ctx.restore();
            
            // Add subtle glow around the planet
            const haloGradient = ctx.createRadialGradient(
                pos.x, pos.y, radius,
                pos.x, pos.y, radius * 1.5
            );
            haloGradient.addColorStop(0, 'rgba(255, 255, 255, 0.3)');
            haloGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
            ctx.fillStyle = haloGradient;
            ctx.beginPath();
            ctx.arc(pos.x, pos.y, radius * 1.5, 0, Math.PI * 2);
            ctx.fill();
        } else {
            // For acquisition view or if image not loaded, draw simple colored circle
            
            // Add a glow for telescope view (large scale)
            if (scale > 3) {
                const haloGradient = ctx.createRadialGradient(
                    pos.x, pos.y, 0,
                    pos.x, pos.y, radius * 3
                );
                const colorMatch = this.color.match(/#([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})/i);
                if (colorMatch) {
                    const r = parseInt(colorMatch[1], 16);
                    const g = parseInt(colorMatch[2], 16);
                    const b = parseInt(colorMatch[3], 16);
                    haloGradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0.4)`);
                    haloGradient.addColorStop(0.3, `rgba(${r}, ${g}, ${b}, 0.2)`);
                    haloGradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
                } else {
                    haloGradient.addColorStop(0, this.color);
                    haloGradient.addColorStop(1, 'rgba(255,255,255,0)');
                }
                ctx.fillStyle = haloGradient;
                ctx.beginPath();
                ctx.arc(pos.x, pos.y, radius * 3, 0, Math.PI * 2);
                ctx.fill();
            }
            
            // Draw main planet
            ctx.beginPath();
            ctx.arc(pos.x, pos.y, radius, 0, Math.PI * 2);
            
            // Create gradient
            const gradient = ctx.createRadialGradient(
                pos.x, pos.y, 0,
                pos.x, pos.y, radius * 1.5
            );
            gradient.addColorStop(0, '#FFFFFF');  // Bright core
            gradient.addColorStop(0.3, this.color);
            gradient.addColorStop(0.7, this.color);
            gradient.addColorStop(1, 'rgba(0,0,0,0)');
            
            ctx.fillStyle = gradient;
            ctx.fill();
        }
    }

    generateFeatures() {
        const features = [];
        switch(this.name) {
            case 'Jupiter':
                // Generate bands
                for (let i = 0; i < 4; i++) {
                    features.push({
                        type: 'band',
                        y: -0.6 + i * 0.4,
                        width: 0.2,
                        color: `rgba(255, 200, 100, ${0.3 + Math.random() * 0.3})`
                    });
                }
                // Add Great Red Spot
                features.push({
                    type: 'spot',
                    x: 0.3,
                    y: -0.2,
                    size: 0.3,
                    color: '#FF6B4A'
                });
                break;
            case 'Saturn':
                // Ring parameters
                features.push({
                    type: 'rings',
                    innerRadius: 1.2,
                    outerRadius: 2.0,
                    color: '#FFDC96'
                });
                break;
            case 'Mars':
                // Add polar caps and dark regions
                features.push({
                    type: 'cap',
                    y: -0.8,
                    size: 0.2,
                    color: '#FFFFFF'
                });
                features.push({
                    type: 'cap',
                    y: 0.8,
                    size: 0.2,
                    color: '#FFFFFF'
                });
                // Dark regions
                for (let i = 0; i < 3; i++) {
                    features.push({
                        type: 'region',
                        x: Math.random() * 1.6 - 0.8,
                        y: Math.random() * 1.2 - 0.6,
                        size: 0.2 + Math.random() * 0.3,
                        color: '#AA4400'
                    });
                }
                break;
        }
        return features;
    }
}


// Frozen-flow turbulence: a sum of waves with a Kolmogorov-like size mix, blown by the wind
// and slowly "boiling". Units are normalized so the slope has an RMS of about 1.
class Atmosphere {
    constructor() {
        const windAngle = Math.random() * Math.PI * 2;
        this.wind = { x: Math.cos(windAngle) * WIND_SPEED, y: Math.sin(windAngle) * WIND_SPEED };
        this.time = 0;
        this.waves = [];
        for (let i = 0; i < TURBULENCE_WAVES; i++) {
            const k = TURBULENCE_K_MIN * Math.pow(TURBULENCE_K_MAX / TURBULENCE_K_MIN, Math.random());
            const angle = Math.random() * Math.PI * 2;
            this.waves.push({
                kx: k * Math.cos(angle),
                ky: k * Math.sin(angle),
                amp: Math.pow(k, -11 / 6),
                phase: Math.random() * Math.PI * 2,
                boil: (Math.random() - 0.5) * 1.5
            });
        }
        const slopeRms = Math.sqrt(this.waves.reduce((sum, w) => sum + Math.pow(w.amp * Math.hypot(w.kx, w.ky), 2) / 2, 0));
        this.waves.forEach(w => { w.amp /= slopeRms; });
        this.heightRms = Math.sqrt(this.waves.reduce((sum, w) => sum + w.amp * w.amp / 2, 0));
    }

    update(elapsedSeconds) {
        this.time += elapsedSeconds;
    }

    // Wavefront height and slope at pupil point (x, y), each in [-1, 1]
    sample(x, y) {
        const t = this.time;
        let h = 0, gx = 0, gy = 0;
        this.waves.forEach(w => {
            const arg = w.kx * (x - this.wind.x * t) + w.ky * (y - this.wind.y * t) + w.phase + w.boil * t;
            h += w.amp * Math.sin(arg);
            const slope = w.amp * Math.cos(arg);
            gx += slope * w.kx;
            gy += slope * w.ky;
        });
        return { h, gx, gy };
    }
}

class TelescopeSimulator {
    constructor() {
        // Get canvas elements
        this.telescopeCanvas = document.getElementById('telescope-panel');
        this.acquisitionCanvas = document.getElementById('acquisition-panel');
        this.shwfsCanvas = document.getElementById('shwfs-panel');
        this.exposureCanvas = document.getElementById('exposure-panel');

        // Get contexts
        this.telescopeCtx = this.telescopeCanvas.getContext('2d');
        this.acquisitionCtx = this.acquisitionCanvas.getContext('2d');
        this.shwfsCtx = this.shwfsCanvas.getContext('2d');
        this.exposureCtx = this.exposureCanvas.getContext('2d');

        // Create an off-screen canvas for exposure accumulation
        this.exposureBuffer = document.createElement('canvas');
        this.exposureBuffer.width = this.exposureCanvas.width;
        this.exposureBuffer.height = this.exposureCanvas.height;
        this.exposureBufferCtx = this.exposureBuffer.getContext('2d', { willReadFrequently: true });
        this.clearExposureBuffer();

        // What the telescope sees this frame, without overlays; the camera averages these
        this.skyFrame = document.createElement('canvas');
        this.skyFrame.width = this.telescopeCanvas.width;
        this.skyFrame.height = this.telescopeCanvas.height;
        this.skyFrameCtx = this.skyFrame.getContext('2d', { willReadFrequently: true });
        // The same view after the air has blurred it (and AO has fixed what it can)
        this.seeingFrame = document.createElement('canvas');
        this.seeingFrame.width = this.telescopeCanvas.width;
        this.seeingFrame.height = this.telescopeCanvas.height;
        this.seeingCtx = this.seeingFrame.getContext('2d');
        // Scratch canvas holding the rippled pixels before softening
        this.warpFrame = document.createElement('canvas');
        this.warpFrame.width = this.telescopeCanvas.width;
        this.warpFrame.height = this.telescopeCanvas.height;
        this.warpCtx = this.warpFrame.getContext('2d');
        this.warpImage = this.warpCtx.createImageData(this.warpFrame.width, this.warpFrame.height);
        const nodes = (WARP_GRID + 1) * (WARP_GRID + 1);
        this.warpField = { dx: new Float32Array(nodes), dy: new Float32Array(nodes), gain: new Float32Array(nodes) };

        this.atmosphere = new Atmosphere();
        this.ao = false;
        this.aoLevel = 0;  // 0 = AO off, 1 = fully locked
        this.aoResidual = 1;
        this.subapertures = [];
        for (let j = 0; j < WFS_LENSLETS; j++) {
            for (let i = 0; i < WFS_LENSLETS; i++) {
                const x = ((i + 0.5) / WFS_LENSLETS) * 2 - 1;
                const y = 1 - ((j + 0.5) / WFS_LENSLETS) * 2;
                const r = Math.hypot(x, y);
                // Round mirror with the secondary mirror blocking the middle
                if (r <= 1.0 && r >= 0.22) this.subapertures.push({ i, j, x, y, h: 0, gx: 0, gy: 0 });
            }
        }


        // Initialize simulation date
        this.simulationDate = new Date();

        // Initialize celestial objects from configuration
        this.objects = [];
        skyConfig.stars.forEach(starConfig => {
            this.objects.push(new Star(starConfig));
        });

        // Targets whose position changes, by target id
        this.movers = {};
        TARGETS.forEach(t => {
            if (t.kind === 'planet') {
                const planet = new Planet(t.id, t.image);
                planet.updatePosition(this.simulationDate);
                this.objects.push(planet);
                this.movers[t.id] = planet;
            } else if (t.kind === 'galaxy' || t.kind === 'nebula' || t.kind === 'cluster') {
                this.objects.push(new DeepSkyObject(t.id, t.ra, t.dec, t.mag, t.kind, t.image, t.size));
            } else if (t.kind === 'probe') {
                const probe = new SpaceProbe(t);
                probe.updatePosition(this.simulationDate);
                this.objects.push(probe);
                this.movers[t.id] = probe;
            } else if (t.kind === 'machine') {
                // Some ride along behind another: Crew Dragon chasing the ISS
                const leader = t.orbit.follows ? this.movers[t.orbit.follows] : null;
                const angle = leader ? leader.angle - t.orbit.gap : Math.random() * 360;
                const machine = new SpaceMachine(t, angle);
                this.objects.push(machine);
                this.movers[t.id] = machine;
                // A Starlink "train" is a line of satellites on the same orbit
                for (let i = 1; i < (t.orbit.train || 0); i++) {
                    this.objects.push(new SpaceMachine(t, angle - i * STARLINK_SPACING));
                }
            } else if (t.kind === 'mystery') {
                // The secret UFO, in Leo
                this.objects.push(new UFO(t.ra, t.dec));
            }
        });
        this.lockPrevious = null;

        for (let i = 0; i < SATELLITE_COUNT; i++) {
            this.objects.push(new Satellite());
        }

        // Telescope pointing. view = pointing plus mount wobble; it's what the camera sees.
        this.telescopeRa = 180;
        this.telescopeDec = 0;
        this.viewRa = this.telescopeRa;
        this.viewDec = this.telescopeDec;
        this.targetRa = null;
        this.targetDec = null;
        this.pickedCoords = null;  // Sky Map click waiting for Go
        this.slewing = false;
        this.tracking = false;
        this.guiding = false;
        this.wobble = { x: 0, y: 0 };

        // Held movement directions from keyboard or on-screen pad
        this.held = new Set();
        this.nudgeTime = 0;

        this.viewMode = 'image'; // 'image' or 'spectra'
        this.finderZoom = DEFAULT_FINDER_ZOOM;

        this.selectedTarget = null;
        this.currentTarget = null;
        this.lostTarget = null;
        this.nearby = [];
        this.inView = [];

        this.exposure = { state: 'idle', elapsed: 0, sinceSample: 0, target: null, saved: false, stale: false };
        this.spectrumData = new Array(SPECTRUM_POINTS).fill(0);
        this.spectrumCaption = '';

        this.collected = loadSet(COLLECTED_KEY);
        this.seen = loadSet(SEEN_KEY);
        this.teacherToken = null;
        this.appliedReset = null;
        try {
            this.teacherToken = localStorage.getItem(TEACHER_TOKEN_KEY);
            this.appliedReset = localStorage.getItem(APPLIED_RESET_KEY);
        } catch (e) {}
        this.unlocked = !!this.teacherToken;  // teacher: every name shown on this device
        this.classUnlocked = false;           // teacher unlocked every name for the whole class
        this.classStateLoaded = false;
        this.uiCache = {};

        this.setupInputHandlers();
        this.buildTargetList();
        this.pollClassState();
        setInterval(() => this.pollClassState(), CLASS_POLL_MS);
        document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'visible') this.pollClassState();
        });

        let helpSeen = false;
        try { helpSeen = localStorage.getItem(HELP_SEEN_KEY) === '1'; } catch (e) {}
        // Skip the welcome screen when driven by automation (telescope_control.py)
        if (!helpSeen && !navigator.webdriver) this.showHelp();

        // Start the animation loop
        this.lastUpdate = performance.now();
        this.simulationTime = 0;
        this.animate();
    }

    // ---------- Setup ----------

    setupInputHandlers() {
        this.ui = {
            raInput: document.getElementById('ra-input'),
            decInput: document.getElementById('dec-input'),
            coordError: document.getElementById('coord-error'),
            slewButton: document.getElementById('slew-button'),
            trackingButton: document.getElementById('tracking-button'),
            guidingButton: document.getElementById('guiding-button'),
            aoButton: document.getElementById('ao-button'),
            exposureButton: document.getElementById('exposure-button'),
            viewModeButton: document.getElementById('view-mode-button'),
            saveButton: document.getElementById('save-exposure-button'),
            targets: document.getElementById('targets'),
            targetList: document.getElementById('target-list'),
            targetTabs: document.getElementById('target-tabs'),
            collectionCount: document.getElementById('collection-count'),
            hint: document.getElementById('hint'),
            steps: document.querySelectorAll('#steps li'),
            caption: document.getElementById('telescope-caption'),
            coords: document.getElementById('current-coords'),
            toast: document.getElementById('toast'),
            helpOverlay: document.getElementById('help-overlay'),
            gallery: document.getElementById('exposure-gallery'),
            telescopeView: document.getElementById('telescope-view'),
            galleryView: document.getElementById('gallery-view'),
            telescopeViewButton: document.getElementById('telescope-view-button'),
            galleryViewButton: document.getElementById('gallery-view-button')
        };
        const ui = this.ui;

        ui.telescopeViewButton.addEventListener('click', () => this.showView('telescope'));
        ui.galleryViewButton.addEventListener('click', () => this.showView('gallery'));
        document.getElementById('help-button').addEventListener('click', () => this.showHelp());
        document.getElementById('help-close').addEventListener('click', () => this.hideHelp());
        this.setupTeacher();
        ui.helpOverlay.addEventListener('click', (e) => {
            if (e.target === ui.helpOverlay) this.hideHelp();
        });

        ui.trackingButton.addEventListener('click', () => this.toggleTracking());
        ui.guidingButton.addEventListener('click', () => this.toggleGuiding());
        ui.aoButton.addEventListener('click', () => this.toggleAO());
        ui.exposureButton.addEventListener('click', () => this.startExposure());
        ui.saveButton.addEventListener('click', () => this.saveExposure());
        ui.viewModeButton.addEventListener('click', () => {
            this.viewMode = this.viewMode === 'image' ? 'spectra' : 'image';
            this.resetExposure();
        });

        ui.slewButton.addEventListener('click', () => this.goToCoordinates());
        [ui.raInput, ui.decInput].forEach(input => {
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') this.goToCoordinates();
            });
            input.addEventListener('input', () => { this.pickedCoords = null; });
        });

        document.getElementById('reset-collection').addEventListener('click', () => {
            if (confirm('Start the collection over? All checkmarks will be cleared.')) {
                this.collected.clear();
                this.seen.clear();
                saveSet(COLLECTED_KEY, this.collected);
                saveSet(SEEN_KEY, this.seen);
                this.refreshTargetCards();
            }
        });

        // Sky Map: click fills in RA/Dec (snapping to a nearby named target) so kids press Go themselves
        this.acquisitionCanvas.addEventListener('click', (e) => {
            const canvas = this.acquisitionCanvas;
            const rect = canvas.getBoundingClientRect();
            const fov = FINDER_ZOOMS[this.finderZoom];
            const x = (e.clientX - rect.left) * canvas.width / rect.width;
            const y = (e.clientY - rect.top) * canvas.height / rect.height;
            const sky = unprojectSky(
                (x / canvas.width - 0.5) * fov,
                (0.5 - y / canvas.height) * fov,
                this.telescopeRa, this.telescopeDec
            );
            const snapRadius = fov * 0.04;
            let best = null;
            let bestDist = Infinity;
            this.targets.forEach(t => {
                if (t.kind === 'mystery') return;
                const pos = this.targetPosition(t);
                const offset = projectSky(pos.ra, pos.dec, sky.ra, sky.dec);
                const dist = offset ? Math.hypot(offset.x, offset.y) : Infinity;
                if (dist < snapRadius && dist < bestDist) {
                    best = t;
                    bestDist = dist;
                }
            });
            // Anonymous: no name or selection, so what's there stays a surprise
            this.selectedTarget = null;
            this.refreshTargetCards();
            this.fillCoordinates(best ? this.targetPosition(best) : sky, null);
        });

        document.getElementById('finder-zoom-in').addEventListener('click', () => {
            this.finderZoom = Math.min(FINDER_ZOOMS.length - 1, this.finderZoom + 1);
        });
        document.getElementById('finder-zoom-out').addEventListener('click', () => {
            this.finderZoom = Math.max(0, this.finderZoom - 1);
        });

        // On-screen arrow pad (works with mouse and touch)
        document.querySelectorAll('.dpad button').forEach(button => {
            const dir = button.dataset.dir;
            button.addEventListener('pointerdown', (e) => {
                e.preventDefault();
                button.setPointerCapture(e.pointerId);
                this.held.add(dir);
            });
            ['pointerup', 'pointercancel', 'lostpointercapture'].forEach(type => {
                button.addEventListener(type, () => this.held.delete(dir));
            });
        });

        const keyDirections = {
            ArrowLeft: 'left', ArrowRight: 'right', ArrowUp: 'up', ArrowDown: 'down',
            a: 'left', d: 'right', w: 'up', s: 'down'
        };

        document.addEventListener('keydown', (e) => {
            if (e.target.tagName === 'INPUT') return;  // typing coordinates
            if (!ui.helpOverlay.hidden) {
                if (e.key === 'Escape' || e.key === 'Enter') this.hideHelp();
                return;
            }
            if (e.metaKey || e.ctrlKey || e.altKey) return;
            const dir = keyDirections[e.key.length === 1 ? e.key.toLowerCase() : e.key];
            if (dir) {
                e.preventDefault();
                this.held.add(dir);
            } else if (e.key === ' ') {
                e.preventDefault();
                if (!e.repeat) this.toggleTracking();
            } else if (e.key === 'g' || e.key === 'G') {
                if (!e.repeat) this.toggleGuiding();
            } else if (e.key === 'o' || e.key === 'O') {
                if (!e.repeat) this.toggleAO();
            } else if (e.key === 'p' || e.key === 'P') {
                if (!e.repeat) this.startExposure();
            }
        });

        document.addEventListener('keyup', (e) => {
            const dir = keyDirections[e.key.length === 1 ? e.key.toLowerCase() : e.key];
            if (dir) this.held.delete(dir);
        });

        window.addEventListener('blur', () => this.held.clear());
    }

    // Teacher sign-in: the server checks the code and returns a token. Signed in, this device shows
    // every name, and the teacher controls can unlock, hide or reset for the whole class.
    setupTeacher() {
        const button = document.getElementById('unlock-button');
        const login = document.getElementById('unlock-overlay');
        const form = document.getElementById('unlock-form');
        const code = document.getElementById('unlock-code');
        const loginError = document.getElementById('unlock-error');
        const panel = document.getElementById('teacher-overlay');
        const panelError = document.getElementById('teacher-error');
        const status = document.getElementById('class-status');

        const closeLogin = () => { login.hidden = true; code.value = ''; loginError.textContent = ''; };
        const closePanel = () => { panel.hidden = true; panelError.textContent = ''; };
        this.renderTeacher = () => {
            button.textContent = this.unlocked ? '🎓 Teacher' : '🔒 Teacher';
            status.textContent = this.classUnlocked ? 'all names unlocked' : 'names hidden until photographed';
        };
        const setToken = (token) => {
            this.teacherToken = token;
            this.unlocked = !!token;
            try {
                if (token) localStorage.setItem(TEACHER_TOKEN_KEY, token);
                else localStorage.removeItem(TEACHER_TOKEN_KEY);
            } catch (e) {}
            this.renderTeacher();
            this.refreshTargetCards();
        };
        this.renderTeacher();

        button.addEventListener('click', () => {
            if (this.unlocked) {
                panel.hidden = false;
                return;
            }
            login.hidden = false;
            code.focus();
        });
        document.getElementById('unlock-cancel').addEventListener('click', closeLogin);
        document.getElementById('teacher-close').addEventListener('click', closePanel);
        document.getElementById('teacher-logout').addEventListener('click', () => {
            closePanel();
            setToken(null);
            this.showToast('🔒 Signed out. Names are hidden again on this screen.');
        });
        [[login, closeLogin], [panel, closePanel]].forEach(([overlay, close]) => {
            overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });
            overlay.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
        });

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            fetch('/unlock', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ code: code.value })
            })
                .then(response => response.json())
                .then(data => {
                    if (!data.success) {
                        loginError.textContent = 'That code is not right.';
                        code.select();
                        return;
                    }
                    closeLogin();
                    setToken(data.token);
                    panel.hidden = false;
                })
                .catch(() => { loginError.textContent = 'Could not check the code. Try again.'; });
        });

        const classAction = (action, message) => {
            panelError.textContent = '';
            fetch('/class_state', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ token: this.teacherToken, action })
            })
                .then(response => {
                    if (response.status === 403) {
                        // Code changed on the server since this device signed in
                        closePanel();
                        setToken(null);
                        this.showToast('🔒 Please sign in again.');
                        return;
                    }
                    return response.json().then(data => {
                        if (!data.success) {
                            panelError.textContent = data.error || 'That did not work. Try again.';
                            return;
                        }
                        this.applyClassState(data);
                        this.showToast(message);
                    });
                })
                .catch(() => { panelError.textContent = 'Could not reach the server. Try again.'; });
        };
        document.getElementById('class-unlock').addEventListener('click', () =>
            classAction('unlockAll', '🔓 Every name is unlocked for everyone.'));
        document.getElementById('class-lock').addEventListener('click', () =>
            classAction('lockAll', '🔒 Names are hidden again for everyone.'));
        document.getElementById('class-reset').addEventListener('click', () => {
            if (confirm("Reset everyone's collection? Every student's checkmarks will be cleared. The Gallery stays.")) {
                classAction('resetAll', "♻️ Everyone's collection was reset.");
            }
        });
    }

    // Class-wide switches from the teacher. Every device checks every CLASS_POLL_MS.
    pollClassState() {
        fetch('/class_state', { cache: 'no-store' })
            .then(response => response.json())
            .then(state => this.applyClassState(state))
            .catch(() => {});  // offline: keep the last known state
    }

    applyClassState(state) {
        let changed = false;
        // A new resetId means the teacher reset everyone: clear this device's collection once
        if (state.resetId && state.resetId !== this.appliedReset) {
            const hadProgress = this.collected.size > 0;
            this.appliedReset = state.resetId;
            this.collected.clear();
            this.seen.clear();
            saveSet(COLLECTED_KEY, this.collected);
            saveSet(SEEN_KEY, this.seen);
            try { localStorage.setItem(APPLIED_RESET_KEY, state.resetId); } catch (e) {}
            if (hadProgress) this.showToast('♻️ Your teacher started a fresh collection!', 5000);
            changed = true;
        }
        const unlockAll = !!state.unlockAll;
        if (unlockAll !== this.classUnlocked) {
            if (unlockAll && this.classStateLoaded && !this.unlocked) {
                this.showToast('🔓 Your teacher unlocked every name!', 5000);
            }
            this.classUnlocked = unlockAll;
            changed = true;
        }
        this.classStateLoaded = true;
        if (changed) this.refreshTargetCards();
        this.renderTeacher();
    }

    buildTargetList() {
        this.targets = TARGETS;
        this.category = 'all';
        this.tabButtons = new Map();
        CATEGORIES.forEach(cat => {
            const tab = document.createElement('button');
            tab.type = 'button';
            tab.className = 'target-tab';
            tab.addEventListener('click', () => {
                this.category = cat.key;
                this.refreshTargetCards();
                this.ui.targetList.scrollTop = 0;
            });
            this.ui.targetTabs.appendChild(tab);
            this.tabButtons.set(cat.key, tab);
        });
        this.targetButtons = new Map();
        this.targets.forEach(t => {
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'target-card';
            button.addEventListener('click', () => this.pickTarget(t));
            this.ui.targetList.appendChild(button);
            this.targetButtons.set(t.id, button);
        });
        this.refreshTargetCards();
    }

    refreshTargetCards() {
        this.targets.forEach(t => {
            const button = this.targetButtons.get(t.id);
            const hidden = this.isHidden(t);
            const collected = this.collected.has(t.id);
            const mystery = t.kind === 'mystery';
            let thumb;
            if (hidden) thumb = '<span class="thumb thumb-emoji">❓</span>';
            else if (t.image) thumb = `<img class="thumb" src="${t.image}" alt="" loading="lazy">`;
            else thumb = '<span class="thumb thumb-emoji">⭐</span>';
            let name = t.name;
            let kind = t.label || KIND_LABELS[t.kind];
            if (hidden) {
                name = mystery ? 'Mystery object' : '???';
                kind = mystery ? 'Click for a clue' : KIND_LABELS[t.kind];
            } else if (this.unlocked && !t.orbit) {
                // Teacher view: coordinates to read out (orbiting machines move too fast to list)
                const pos = this.targetPosition(t);
                kind += ` · ${this.formatRA(pos.ra)} ${this.formatDec(pos.dec)}`;
            }
            button.innerHTML = `${thumb}
                <span class="card-text">
                    <span class="card-name">${name}</span>
                    <span class="card-kind">${kind}</span>
                </span>
                <span class="card-check">${collected ? '✓' : ''}</span>`;
            button.title = hidden ? (mystery ? t.clue : '') : t.fact;
            button.classList.toggle('collected', collected);
            button.classList.toggle('selected', this.selectedTarget === t);
            button.hidden = !this.inCategory(t, this.category);
        });
        CATEGORIES.forEach(cat => {
            const members = this.targets.filter(t => this.inCategory(t, cat.key));
            const found = members.filter(t => this.collected.has(t.id)).length;
            const tab = this.tabButtons.get(cat.key);
            tab.textContent = `${cat.label} ${found}/${members.length}`;
            tab.classList.toggle('active', cat.key === this.category);
        });
        this.ui.collectionCount.textContent = `${this.collected.size} / ${this.targets.length} collected`;
    }

    inCategory(target, key) {
        const cat = CATEGORIES.find(c => c.key === key);
        return !cat.kinds || cat.kinds.includes(target.kind);
    }

    // Names and pictures stay secret until photographed (or the teacher unlocks)
    isHidden(target) {
        return !this.unlocked && !this.classUnlocked && !this.collected.has(target.id);
    }

    nameOf(target, fallback) {
        return this.isHidden(target) ? fallback : target.name;
    }

    targetPosition(target) {
        const mover = this.movers[target.id];
        if (mover) return { ra: mover.ra, dec: mover.dec };
        return { ra: target.ra, dec: target.dec };
    }

    // ---------- Actions ----------

    // List click: fill in RA/Dec so kids press Go themselves
    pickTarget(target) {
        if (target.kind === 'mystery' && this.isHidden(target)) {
            this.showToast('🕵️ Clue: ' + target.clue, 7000);
            this.ui.raInput.focus();
            return;
        }
        this.selectedTarget = target;
        this.refreshTargetCards();
        this.fillCoordinates(this.targetPosition(target), target);
    }

    // target is kept so Go can chase moving things (satellites); null for anonymous Sky Map picks
    fillCoordinates(pos, target) {
        this.pickedCoords = { ra: pos.ra, dec: pos.dec, target };
        this.ui.raInput.value = this.formatRA(pos.ra);
        this.ui.decInput.value = this.formatDec(pos.dec);
        this.ui.coordError.textContent = '';
        this.showToast('📍 RA and Dec filled in. Press Go to point there!');
    }

    goToCoordinates() {
        const ra = this.parseRA(this.ui.raInput.value);
        const dec = this.parseDec(this.ui.decInput.value);
        if (isNaN(ra) || isNaN(dec)) {
            this.ui.coordError.textContent = 'Try RA like 10:00 (0 to 23:59) and Dec like +25 (-90 to +90).';
            return;
        }
        this.ui.coordError.textContent = '';
        this.selectedTarget = this.pickedCoords ? this.pickedCoords.target : null;
        this.refreshTargetCards();
        this.startSlew(ra, dec);
    }

    startSlew(ra, dec) {
        this.targetRa = (ra + 360) % 360;
        this.targetDec = clamp(dec, -90, 90);
        this.slewing = true;
        this.pickedCoords = null;
        this.guiding = false;  // Turn off guiding and AO when slewing starts
        this.ao = false;
        this.lostTarget = null;
        if (this.exposure.state !== 'running') this.exposure.stale = true;
    }

    toggleTracking() {
        this.tracking = !this.tracking;
        if (!this.tracking) this.guiding = false;  // Guiding needs tracking
    }

    toggleGuiding() {
        if (!this.tracking) {
            this.showToast('🌍 Turn on Follow first!');
            this.ui.trackingButton.classList.add('attention');
            return;
        }
        this.guiding = !this.guiding;
    }

    toggleAO() {
        this.ao = !this.ao;
    }

    clearExposureBuffer() {
        this.exposureBufferCtx.fillStyle = '#000000';
        this.exposureBufferCtx.fillRect(0, 0, this.exposureBuffer.width, this.exposureBuffer.height);
    }

    resetExposure() {
        this.clearExposureBuffer();
        this.spectrumData.fill(0);
        this.exposure = { state: 'idle', elapsed: 0, sinceSample: 0, target: null, saved: false, stale: false };
    }

    startExposure() {
        this.resetExposure();
        this.exposure.state = 'running';
        this.exposure.target = this.currentTarget;
    }

    finishExposure() {
        const ex = this.exposure;
        ex.state = 'done';
        ex.target = this.currentTarget || ex.target;
        const target = ex.target;
        if (target && !this.collected.has(target.id)) {
            this.collected.add(target.id);
            saveSet(COLLECTED_KEY, this.collected);
            this.refreshTargetCards();
            this.showToast(`📸 You photographed ${target.name}! ⭐ ${this.collected.size} of ${this.targets.length} collected`, 4500);
        }
    }

    saveExposure() {
        const ex = this.exposure;
        if (ex.state === 'idle') return;
        const button = this.ui.saveButton;

        // Copy the picture and add a label strip at the bottom
        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = this.exposureCanvas.width;
        tempCanvas.height = this.exposureCanvas.height + 30;
        const tempCtx = tempCanvas.getContext('2d');
        tempCtx.fillStyle = '#000000';
        tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
        tempCtx.drawImage(this.viewMode === 'image' ? this.exposureBuffer : this.exposureCanvas, 0, 0);
        tempCtx.font = '13px monospace';
        tempCtx.fillStyle = '#FFFFFF';
        tempCtx.textAlign = 'center';
        // No name in the picture: the Gallery is shared and names stay secret until each kid unlocks them
        tempCtx.fillText(
            `RA: ${this.formatRA(this.telescopeRa)} | Dec: ${this.formatDec(this.telescopeDec)}`,
            tempCanvas.width / 2,
            tempCanvas.height - 10
        );

        const slug = ex.target ? ex.target.id.toLowerCase() : 'exposure';
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const randomStr = Math.random().toString(36).substring(2, 8);
        // RA/Dec ride along in the name (e.g. _ra0535_decm0523) so the Gallery can show them
        const raTag = this.formatRA(this.telescopeRa).replace(':', '');
        const decTag = this.formatDec(this.telescopeDec).replace(/[°']/g, '').replace('+', 'p').replace('-', 'm');
        const filename = `${slug}_${timestamp}_${randomStr}_ra${raTag}_dec${decTag}.png`;

        const flash = (text) => {
            button.textContent = text;
            setTimeout(() => { button.textContent = '💾 Save to Gallery'; }, 2000);
        };

        tempCanvas.toBlob((blob) => {
            const formData = new FormData();
            formData.append('file', blob, filename);
            fetch('/save_exposure', { method: 'POST', body: formData })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        ex.saved = true;
                        flash('✓ Saved!');
                        this.showToast('💾 Saved! See it in the Gallery.');
                    } else {
                        flash('Could not save');
                    }
                })
                .catch(error => {
                    console.error('Error saving exposure:', error);
                    flash('Could not save');
                });
        }, 'image/png');
    }

    showView(name) {
        const isGallery = name === 'gallery';
        this.ui.telescopeView.style.display = isGallery ? 'none' : 'block';
        this.ui.galleryView.style.display = isGallery ? 'block' : 'none';
        this.ui.telescopeViewButton.classList.toggle('active', !isGallery);
        this.ui.galleryViewButton.classList.toggle('active', isGallery);
        if (isGallery) this.loadGallery();
    }

    loadGallery() {
        const gallery = this.ui.gallery;
        fetch('/list_exposures')
            .then(response => response.json())
            .then(data => {
                if (!data.success) return;
                gallery.innerHTML = '';
                if (data.files.length === 0) {
                    gallery.innerHTML = '<p class="gallery-empty">No pictures yet. Go take some! 📸</p>';
                    return;
                }
                data.files.forEach(file => {
                    const slug = file.filename.split('_')[0];
                    const target = TARGETS.find(t => t.id.toLowerCase() === slug);
                    const item = document.createElement('div');
                    item.className = 'gallery-item';
                    const img = document.createElement('img');
                    img.src = file.url;
                    // Shared with the class: only name things this viewer has unlocked
                    const label = !target ? 'Sky picture' : this.isHidden(target) ? '❓ ???' : target.name;
                    img.alt = label;
                    const nameEl = document.createElement('div');
                    nameEl.className = 'name';
                    nameEl.textContent = label;
                    const info = document.createElement('div');
                    info.className = 'info';
                    info.textContent = new Date(file.created).toLocaleString();
                    item.append(img, nameEl);
                    const c = file.filename.match(/_ra(\d{2})(\d{2})_dec([pm])(\d{2})(\d{2})\.png$/);
                    if (c) {
                        const coords = document.createElement('div');
                        coords.className = 'coords';
                        coords.textContent = `RA ${c[1]}:${c[2]}   Dec ${c[3] === 'p' ? '+' : '-'}${c[4]}°${c[5]}'`;
                        item.append(coords);
                    }
                    item.append(info);
                    gallery.appendChild(item);
                });
            })
            .catch(error => console.error('Error loading gallery:', error));
    }

    showHelp() {
        this.ui.helpOverlay.hidden = false;
        document.getElementById('help-close').focus();
    }

    hideHelp() {
        this.ui.helpOverlay.hidden = true;
        try { localStorage.setItem(HELP_SEEN_KEY, '1'); } catch (e) {}
    }

    showToast(message, duration = 3000) {
        const toast = this.ui.toast;
        toast.textContent = message;
        toast.classList.add('show');
        clearTimeout(this.toastTimer);
        this.toastTimer = setTimeout(() => toast.classList.remove('show'), duration);
    }

    // ---------- Coordinates ----------

    // Accepts "10:00", "10 00", "10h00m" or decimal hours like "10.5"
    parseRA(raString) {
        const m = raString.trim().match(/^(\d{1,2}(?:\.\d+)?)(?:\s*[:h\s]\s*(\d{1,2}(?:\.\d+)?)\s*m?)?$/i);
        if (!m) return NaN;
        const hours = parseFloat(m[1]);
        const minutes = m[2] ? parseFloat(m[2]) : 0;
        if (hours >= 24 || minutes >= 60) return NaN;
        return (hours + minutes / 60) * 15;  // Convert to degrees
    }

    // Accepts "+25", "-13.39" or degrees and minutes like "+25:30" / "25°30'"
    parseDec(decString) {
        const m = decString.trim().match(/^([+-]?)\s*(\d{1,2}(?:\.\d+)?)(?:\s*[:°\s]\s*(\d{1,2}(?:\.\d+)?)\s*'?)?°?$/);
        if (!m) return NaN;
        const value = parseFloat(m[2]) + (m[3] ? parseFloat(m[3]) / 60 : 0);
        if (value > 90 || (m[3] && parseFloat(m[3]) >= 60)) return NaN;
        return m[1] === '-' ? -value : value;
    }

    // Rounded (not truncated) so typing the shown value back lands within the 0.5° telescope view
    formatRA(ra) {
        const totalMin = Math.round(((ra % 360 + 360) % 360) / 15 * 60) % (24 * 60);
        const h = Math.floor(totalMin / 60);
        const m = totalMin % 60;
        return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
    }

    formatDec(dec) {
        const sign = dec >= 0 ? '+' : '-';
        const totalMin = Math.round(Math.abs(dec) * 60);
        const d = Math.floor(totalMin / 60);
        const m = totalMin % 60;
        return `${sign}${d.toString().padStart(2, '0')}°${m.toString().padStart(2, '0')}'`;
    }

    // ---------- Motion ----------

    updateSlew(elapsedSeconds) {
        if (!this.slewing) return;
        // Chase targets that move, like satellites
        if (this.selectedTarget && this.movers[this.selectedTarget.id]) {
            const pos = this.targetPosition(this.selectedTarget);
            this.targetRa = pos.ra;
            this.targetDec = pos.dec;
        }
        let raDiff = this.targetRa - this.telescopeRa;
        if (raDiff > 180) raDiff -= 360;
        else if (raDiff < -180) raDiff += 360;
        const decDiff = this.targetDec - this.telescopeDec;

        // Move in a straight line, fast when far away and gently near the end
        const distance = Math.hypot(raDiff * Math.cos(this.telescopeDec * DEG), decDiff);
        const step = clamp(distance * SLEW_GAIN, SLEW_MIN_SPEED, SLEW_MAX_SPEED) * elapsedSeconds;
        if (step >= distance) {
            this.telescopeRa = this.targetRa;
            this.telescopeDec = this.targetDec;
            this.slewing = false;
        } else {
            const fraction = step / distance;
            this.telescopeRa = (this.telescopeRa + raDiff * fraction + 360) % 360;
            this.telescopeDec += decDiff * fraction;
        }
    }

    updateManualMovement(elapsedSeconds) {
        if (this.held.size === 0) {
            this.nudgeTime = 0;
            return;
        }
        this.slewing = false;  // Taking the controls cancels a go-to
        this.nudgeTime += elapsedSeconds;
        const maxSpeed = this.guiding ? NUDGE_STEADY_MAX_SPEED : NUDGE_MAX_SPEED;
        const speed = Math.min(maxSpeed, NUDGE_MIN_SPEED * Math.pow(2, this.nudgeTime / NUDGE_DOUBLING_TIME));
        const step = speed * elapsedSeconds;
        // RA lines bunch up near the poles, so take bigger RA steps there to keep screen speed even
        const raStep = step / Math.max(Math.cos(this.telescopeDec * DEG), 0.05);

        if (this.held.has('left')) this.telescopeRa = (this.telescopeRa - raStep + 360) % 360;
        if (this.held.has('right')) this.telescopeRa = (this.telescopeRa + raStep) % 360;
        if (this.held.has('up')) this.telescopeDec = Math.min(90, this.telescopeDec + step);
        if (this.held.has('down')) this.telescopeDec = Math.max(-90, this.telescopeDec - step);
    }

    updateEarthRotation(elapsedSeconds) {
        if (!this.tracking && !this.slewing) {
            this.telescopeRa = (this.telescopeRa + SKY_DRIFT_RATE * elapsedSeconds) % 360;
        }
    }

    // While following, stay locked on a target that moves on its own (satellites, the Moon)
    updateTargetLock() {
        const target = this.tracking && !this.slewing ? this.currentTarget : null;
        if (!target || !this.movers[target.id]) {
            this.lockPrevious = null;
            return;
        }
        const pos = this.targetPosition(target);
        const prev = this.lockPrevious;
        if (prev && prev.id === target.id) {
            let dRa = pos.ra - prev.ra;
            if (dRa > 180) dRa -= 360;
            else if (dRa < -180) dRa += 360;
            this.telescopeRa = (this.telescopeRa + dRa + 360) % 360;
            this.telescopeDec = clamp(this.telescopeDec + pos.dec - prev.dec, -90, 90);
        }
        this.lockPrevious = { id: target.id, ra: pos.ra, dec: pos.dec };
    }

    updateWobble(elapsedSeconds) {
        const w = this.wobble;
        if (!this.guiding && !this.slewing) {
            // Random wander that keeps getting pulled back to center (Ornstein-Uhlenbeck)
            const kick = WOBBLE_SIZE * Math.sqrt(2 * elapsedSeconds / WOBBLE_TIME);
            w.x += -w.x * elapsedSeconds / WOBBLE_TIME + kick * gaussianRandom();
            w.y += -w.y * elapsedSeconds / WOBBLE_TIME + kick * gaussianRandom();
        } else {
            // Guiding locks on quickly
            const decay = Math.exp(-elapsedSeconds / 0.15);
            w.x *= decay;
            w.y *= decay;
        }
        this.viewRa = (this.telescopeRa + w.x / Math.max(Math.cos(this.telescopeDec * DEG), 0.05) + 360) % 360;
        this.viewDec = clamp(this.telescopeDec + w.y, -90, 90);
    }

    updateAtmosphere(elapsedSeconds) {
        this.atmosphere.update(elapsedSeconds);
        this.aoLevel += ((this.ao ? 1 : 0) - this.aoLevel) * (1 - Math.exp(-elapsedSeconds / AO_LOCK_TIME));
        this.aoResidual = 1 - (1 - AO_RESIDUAL) * this.aoLevel;

        this.subapertures.forEach(sub => {
            Object.assign(sub, this.atmosphere.sample(sub.x, sub.y));
        });
    }

    // Objects within ~1 degree of the view; only these can appear in the telescope and camera
    updateNearby() {
        const half = TELESCOPE_FOV / 2;
        this.nearby = [];
        this.inView = [];
        this.objects.forEach(obj => {
            if (Math.abs(obj.dec - this.viewDec) > 1.5) return;
            const offset = projectSky(obj.ra, obj.dec, this.viewRa, this.viewDec);
            if (!offset || Math.abs(offset.x) > 1 || Math.abs(offset.y) > 1) return;
            this.nearby.push(obj);
            if (Math.abs(offset.x) <= half && Math.abs(offset.y) <= half) this.inView.push(obj);
        });
    }

    updateCurrentTarget() {
        let best = null;
        let bestDist = TELESCOPE_FOV * 0.45;
        this.targets.forEach(t => {
            const pos = this.targetPosition(t);
            const offset = projectSky(pos.ra, pos.dec, this.viewRa, this.viewDec);
            if (!offset) return;
            const dist = Math.hypot(offset.x, offset.y);
            if (dist < bestDist) {
                best = t;
                bestDist = dist;
            }
        });

        if (this.currentTarget && !best && !this.slewing && !this.tracking && this.held.size === 0) {
            this.lostTarget = { target: this.currentTarget, time: this.simulationTime };
        }
        if (best) this.lostTarget = null;
        this.currentTarget = best;

        if (best && best.kind === 'mystery' && !this.slewing && !this.seen.has(best.id)) {
            this.seen.add(best.id);
            saveSet(SEEN_KEY, this.seen);
            this.showToast('🛸 Whoa! What is THAT?! Take a picture, quick!', 5000);
        }
    }

    // ---------- Drawing ----------

    isOnCanvas(pos, canvas, margin) {
        return pos && pos.x >= -margin && pos.x <= canvas.width + margin &&
            pos.y >= -margin && pos.y <= canvas.height + margin;
    }

    drawTelescope() {
        const sky = this.skyFrameCtx;
        sky.fillStyle = '#000000';
        sky.fillRect(0, 0, this.skyFrame.width, this.skyFrame.height);
        this.nearby.forEach(obj => {
            const pos = obj.getScreenPosition(this.viewRa, this.viewDec, TELESCOPE_FOV, this.skyFrame);
            // Generous margin: planets and galaxies are big images centered off-screen
            if (this.isOnCanvas(pos, this.skyFrame, 250)) obj.draw(sky, pos, 8.0);
        });

        this.composeSeeing();

        const ctx = this.telescopeCtx;
        const canvas = this.telescopeCanvas;
        ctx.drawImage(this.seeingFrame, 0, 0);

        // Faint center mark to help with centering
        const cx = canvas.width / 2;
        const cy = canvas.height / 2;
        ctx.strokeStyle = 'rgba(0, 255, 0, 0.35)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        [[1, 0], [-1, 0], [0, 1], [0, -1]].forEach(([dx, dy]) => {
            ctx.moveTo(cx + dx * 8, cy + dy * 8);
            ctx.lineTo(cx + dx * 18, cy + dy * 18);
        });
        ctx.stroke();
    }

    // Bend the sharp view the way the air does: each part of the image is pushed by the
    // local slope of the bumpy air, so it ripples like the bottom of a pool. Where the bends
    // squeeze light together it gets brighter, where they spread it, dimmer (twinkling).
    composeSeeing() {
        const r = this.aoResidual;
        const amp = WARP_PX * r;
        const ctx = this.seeingCtx;
        const w = this.skyFrame.width;
        const h = this.skyFrame.height;

        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, w, h);
        if (amp < 0.5) {
            ctx.drawImage(this.skyFrame, 0, 0);
            return;
        }

        // Displacement and brightness on a coarse grid
        const n = WARP_GRID + 1;
        const { dx, dy, gain } = this.warpField;
        for (let j = 0; j < n; j++) {
            for (let i = 0; i < n; i++) {
                const s = this.atmosphere.sample((i / WARP_GRID * 2 - 1) * WARP_FIELD_SCALE, (1 - j / WARP_GRID * 2) * WARP_FIELD_SCALE);
                dx[j * n + i] = s.gx * amp;
                dy[j * n + i] = -s.gy * amp;
            }
        }
        const spacingX = w / WARP_GRID;
        const spacingY = h / WARP_GRID;
        for (let j = 0; j < n; j++) {
            for (let i = 0; i < n; i++) {
                const iL = Math.max(0, i - 1), iR = Math.min(WARP_GRID, i + 1);
                const jU = Math.max(0, j - 1), jD = Math.min(WARP_GRID, j + 1);
                const divergence = (dx[j * n + iR] - dx[j * n + iL]) / ((iR - iL) * spacingX) +
                                   (dy[jD * n + i] - dy[jU * n + i]) / ((jD - jU) * spacingY);
                gain[j * n + i] = clamp(1 + divergence * TWINKLE_STRENGTH, 0.3, 2.2);
            }
        }

        // Each output pixel looks up where its light really came from
        const src = this.skyFrameCtx.getImageData(0, 0, w, h).data;
        const out = this.warpImage.data;
        for (let y = 0; y < h; y++) {
            const gy = y / spacingY;
            const j0 = Math.min(WARP_GRID - 1, Math.floor(gy));
            const fy = gy - j0;
            for (let x = 0; x < w; x++) {
                const gx = x / spacingX;
                const i0 = Math.min(WARP_GRID - 1, Math.floor(gx));
                const fx = gx - i0;
                const a = j0 * n + i0, b = a + 1, c2 = a + n, d = c2 + 1;
                const w00 = (1 - fx) * (1 - fy), w10 = fx * (1 - fy), w01 = (1 - fx) * fy, w11 = fx * fy;
                const sx = x + dx[a] * w00 + dx[b] * w10 + dx[c2] * w01 + dx[d] * w11;
                const sy = y + dy[a] * w00 + dy[b] * w10 + dy[c2] * w01 + dy[d] * w11;
                const g = gain[a] * w00 + gain[b] * w10 + gain[c2] * w01 + gain[d] * w11;
                const o = (y * w + x) * 4;
                out[o + 3] = 255;

                // Bilinear sample of the sharp image; outside it is black sky
                const x0 = Math.floor(sx), y0 = Math.floor(sy);
                if (x0 < 0 || y0 < 0 || x0 >= w - 1 || y0 >= h - 1) {
                    out[o] = out[o + 1] = out[o + 2] = 0;
                    continue;
                }
                const tx = sx - x0, ty = sy - y0;
                const p00 = (y0 * w + x0) * 4, p10 = p00 + 4, p01 = p00 + w * 4, p11 = p01 + 4;
                const k00 = (1 - tx) * (1 - ty) * g, k10 = tx * (1 - ty) * g, k01 = (1 - tx) * ty * g, k11 = tx * ty * g;
                out[o] = src[p00] * k00 + src[p10] * k10 + src[p01] * k01 + src[p11] * k11;
                out[o + 1] = src[p00 + 1] * k00 + src[p10 + 1] * k10 + src[p01 + 1] * k01 + src[p11 + 1] * k11;
                out[o + 2] = src[p00 + 2] * k00 + src[p10 + 2] * k10 + src[p01 + 2] * k01 + src[p11 + 2] * k11;
            }
        }
        this.warpCtx.putImageData(this.warpImage, 0, 0);

        const blur = SEEING_BLUR_PX * r;
        ctx.filter = blur > 0.3 ? `blur(${blur.toFixed(1)}px)` : 'none';
        ctx.drawImage(this.warpFrame, 0, 0);
        ctx.filter = 'none';
    }

    drawFinder() {
        const ctx = this.acquisitionCtx;
        const canvas = this.acquisitionCanvas;
        const fov = FINDER_ZOOMS[this.finderZoom];
        const scale = 0.5 + (90 - fov) / 150;  // Bigger dots when zoomed in
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        this.objects.forEach(obj => {
            const pos = obj.getScreenPosition(this.telescopeRa, this.telescopeDec, fov, canvas);
            if (this.isOnCanvas(pos, canvas, 10)) obj.draw(ctx, pos, scale);
        });

        // No name labels, so finding things is a surprise. Ring the target picked from the list.
        if (this.selectedTarget) {
            const pos = this.targetPosition(this.selectedTarget);
            const offset = projectSky(pos.ra, pos.dec, this.telescopeRa, this.telescopeDec);
            if (offset) {
                ctx.strokeStyle = '#ffd84d';
                ctx.lineWidth = 1.5;
                ctx.beginPath();
                ctx.arc(canvas.width / 2 + (offset.x / fov) * canvas.width,
                        canvas.height / 2 - (offset.y / fov) * canvas.height, 9, 0, Math.PI * 2);
                ctx.stroke();
            }
        }

        // Spot picked on the map, waiting for Go
        if (this.pickedCoords && !this.slewing) {
            const offset = projectSky(this.pickedCoords.ra, this.pickedCoords.dec, this.telescopeRa, this.telescopeDec);
            if (offset) {
                const x = canvas.width / 2 + (offset.x / fov) * canvas.width;
                const y = canvas.height / 2 - (offset.y / fov) * canvas.height;
                ctx.strokeStyle = '#4dd2ff';
                ctx.lineWidth = 1.5;
                ctx.beginPath();
                ctx.arc(x, y, 7, 0, Math.PI * 2);
                [[1, 0], [-1, 0], [0, 1], [0, -1]].forEach(([dx, dy]) => {
                    ctx.moveTo(x + dx * 4, y + dy * 4);
                    ctx.lineTo(x + dx * 11, y + dy * 11);
                });
                ctx.stroke();
            }
        }

        // Where the go-to is heading
        if (this.slewing) {
            const offset = projectSky(this.targetRa, this.targetDec, this.telescopeRa, this.telescopeDec);
            if (offset) {
                ctx.strokeStyle = 'rgba(255, 216, 77, 0.6)';
                ctx.setLineDash([4, 4]);
                ctx.beginPath();
                ctx.moveTo(canvas.width / 2, canvas.height / 2);
                ctx.lineTo(canvas.width / 2 + (offset.x / fov) * canvas.width,
                           canvas.height / 2 - (offset.y / fov) * canvas.height);
                ctx.stroke();
                ctx.setLineDash([]);
            }
        }

        // Telescope view box, plus crosshair lines leading to it
        const cx = canvas.width / 2;
        const cy = canvas.height / 2;
        const box = Math.max(8, (TELESCOPE_FOV / fov) * canvas.width);
        ctx.strokeStyle = '#ffd84d';
        ctx.lineWidth = 2;
        ctx.strokeRect(cx - box / 2, cy - box / 2, box, box);
        ctx.strokeStyle = 'rgba(0, 255, 0, 0.5)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        [[1, 0], [-1, 0], [0, 1], [0, -1]].forEach(([dx, dy]) => {
            ctx.moveTo(cx + dx * (box / 2 + 6), cy + dy * (box / 2 + 6));
            ctx.lineTo(cx + dx * (box / 2 + 30), cy + dy * (box / 2 + 30));
        });
        ctx.stroke();

        ctx.fillStyle = 'rgba(154, 163, 199, 0.8)';
        ctx.textAlign = 'right';
        ctx.fillText(`${fov}° wide`, canvas.width - 6, canvas.height - 6);
    }

    drawSHWFS() {
        const ctx = this.shwfsCtx;
        const canvas = ctx.canvas;
        const cell = canvas.width / WFS_LENSLETS;
        const r = this.aoResidual;
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // The WFS needs light: use the brightest thing in the telescope view
        let star = null;
        this.inView.forEach(obj => {
            if (obj.invisible) return;
            if (!star || obj.magnitude < star.magnitude) star = obj;
        });
        const spotBrightness = star ? clamp((9 - star.magnitude) / 8, 0.35, 1) : 0;

        // Mount wobble moves every dot the same way (guiding fixes that);
        // the air moves each dot differently (AO fixes that)
        const common = {
            x: (this.wobble.x / TELESCOPE_FOV) * canvas.width * 0.25,
            y: -(this.wobble.y / TELESCOPE_FOV) * canvas.height * 0.25
        };
        const maxShift = cell / 2 - 3;

        this.subapertures.forEach(sub => {
            const x0 = sub.i * cell;
            const y0 = sub.j * cell;
            const cx = x0 + cell / 2;
            const cy = y0 + cell / 2;

            // Tint shows how bumpy the air is here: orange = ahead, blue = behind
            const height = clamp((sub.h * r) / (this.atmosphere.heightRms * 1.5), -1, 1);
            ctx.fillStyle = height > 0
                ? `rgba(255, 140, 60, ${0.35 * height})`
                : `rgba(60, 140, 255, ${-0.35 * height})`;
            ctx.fillRect(x0 + 1, y0 + 1, cell - 2, cell - 2);
            ctx.strokeStyle = '#2a2f45';
            ctx.lineWidth = 1;
            ctx.strokeRect(x0 + 0.5, y0 + 0.5, cell - 1, cell - 1);

            // Reference mark: where the dot sits when the air is perfectly flat
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
            ctx.beginPath();
            ctx.moveTo(cx - 3, cy);
            ctx.lineTo(cx + 3, cy);
            ctx.moveTo(cx, cy - 3);
            ctx.lineTo(cx, cy + 3);
            ctx.stroke();

            if (!star) return;
            const sx = cx + clamp(sub.gx * r * WFS_SPOT_GAIN + common.x + (Math.random() - 0.5) * 0.6, -maxShift, maxShift);
            const sy = cy + clamp(-sub.gy * r * WFS_SPOT_GAIN + common.y + (Math.random() - 0.5) * 0.6, -maxShift, maxShift);
            const spot = ctx.createRadialGradient(sx, sy, 0, sx, sy, 3.5);
            spot.addColorStop(0, `rgba(255, 255, 255, ${spotBrightness})`);
            spot.addColorStop(0.5, `rgba(180, 255, 200, ${spotBrightness * 0.7})`);
            spot.addColorStop(1, 'rgba(180, 255, 200, 0)');
            ctx.fillStyle = spot;
            ctx.beginPath();
            ctx.arc(sx, sy, 3.5, 0, Math.PI * 2);
            ctx.fill();
        });

        ctx.font = '12px system-ui, sans-serif';
        ctx.textAlign = 'left';
        if (this.ao) {
            ctx.fillStyle = '#3ddc84';
            ctx.fillText(this.aoLevel > 0.9 ? '✨ AO locked: mirror is fixing the air' : '✨ AO locking on…', 6, 16);
        } else {
            ctx.fillStyle = 'rgba(154, 163, 199, 0.9)';
            ctx.fillText('AO off', 6, 16);
        }
        if (!star) {
            ctx.textAlign = 'center';
            ctx.fillStyle = 'rgba(154, 163, 199, 0.9)';
            ctx.fillText('Point at a star so the sensor has light to measure', canvas.width / 2, canvas.height - 8);
        }
    }

    updateExposure(elapsedSeconds) {
        const ex = this.exposure;
        if (ex.state !== 'running') return;
        ex.elapsed += elapsedSeconds;

        if (this.viewMode === 'image') {
            // Blend in the telescope's view; anything that moved (wobble, drifting sky) smears
            ex.sinceSample += elapsedSeconds;
            if (ex.sinceSample >= EXPOSURE_SAMPLE_SECONDS) {
                this.exposureBufferCtx.globalAlpha = 1 - Math.exp(-ex.sinceSample * EXPOSURE_RATE);
                this.exposureBufferCtx.drawImage(this.seeingFrame, 0, 0);
                this.exposureBufferCtx.globalAlpha = 1.0;
                ex.sinceSample = 0;
            }
        } else {
            let brightest = null;
            this.inView.forEach(obj => {
                if (!obj.spectra) return;  // Satellites have no spectrum
                if (!brightest || obj.magnitude < brightest.magnitude) brightest = obj;
                const brightness = Math.min(Math.pow(10, -obj.magnitude / 2.5), 50);
                for (let i = 0; i < SPECTRUM_POINTS; i++) {
                    this.spectrumData[i] += brightness * 0.15 * elapsedSeconds;  // Smooth glow under the lines
                }
                obj.spectra.peaks.forEach((peak, idx) => {
                    const strength = obj.spectra.intensities[idx] * brightness * elapsedSeconds;
                    const center = Math.round((peak - WAVELENGTH_MIN) / (WAVELENGTH_MAX - WAVELENGTH_MIN) * (SPECTRUM_POINTS - 1));
                    for (let i = Math.max(0, center - 8); i < Math.min(SPECTRUM_POINTS, center + 9); i++) {
                        const wavelength = WAVELENGTH_MIN + (i / (SPECTRUM_POINTS - 1)) * (WAVELENGTH_MAX - WAVELENGTH_MIN);
                        const sigma = 2;
                        this.spectrumData[i] += strength * Math.exp(-Math.pow(wavelength - peak, 2) / (2 * sigma * sigma));
                    }
                });
            });
            if (brightest) {
                this.spectrumCaption = `Light from ${SPECTRUM_CAPTIONS[brightest.spectra.type] || 'space'}`;
            }
        }

        if (ex.elapsed >= EXPOSURE_SECONDS) this.finishExposure();
    }

    drawExposure() {
        const ctx = this.exposureCtx;
        const canvas = this.exposureCanvas;
        const ex = this.exposure;

        if (this.viewMode === 'image') {
            ctx.drawImage(this.exposureBuffer, 0, 0);
        } else {
            this.drawSpectrum(ctx);
        }

        ctx.textAlign = 'center';
        if (ex.state === 'idle') {
            ctx.fillStyle = 'rgba(154, 163, 199, 0.9)';
            ctx.font = '16px system-ui, sans-serif';
            ctx.fillText(this.viewMode === 'image' ? 'Press 📸 Take Picture' : 'Press 📸 to catch a rainbow',
                canvas.width / 2, canvas.height / 2);
        } else if (ex.state === 'running') {
            const progress = Math.min(1, ex.elapsed / EXPOSURE_SECONDS);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
            ctx.fillRect(10, canvas.height - 16, canvas.width - 20, 8);
            ctx.fillStyle = '#ffd84d';
            ctx.fillRect(10, canvas.height - 16, (canvas.width - 20) * progress, 8);
        }
    }

    drawSpectrum(ctx) {
        const canvas = ctx.canvas;
        const ex = this.exposure;
        const left = 25;
        const right = canvas.width - 25;
        const top = 60;
        const base = canvas.height - 70;

        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const rainbow = ctx.createLinearGradient(left, 0, right, 0);
        RAINBOW_STOPS.forEach(([wavelength, color]) => {
            rainbow.addColorStop((wavelength - WAVELENGTH_MIN) / (WAVELENGTH_MAX - WAVELENGTH_MIN), color);
        });

        // Color key under the graph
        ctx.fillStyle = rainbow;
        ctx.fillRect(left, base + 8, right - left, 10);
        ctx.fillStyle = '#9aa3c7';
        ctx.font = '12px system-ui, sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('violet', left, base + 34);
        ctx.textAlign = 'right';
        ctx.fillText('red', right, base + 34);

        const max = Math.max(...this.spectrumData);
        if (ex.state === 'idle' || max <= 0) return;

        // Grows in as light is collected
        const growth = ex.state === 'running' ? Math.min(1, ex.elapsed / EXPOSURE_SECONDS) : 1;
        const height = (base - top) * growth;
        ctx.beginPath();
        ctx.moveTo(left, base);
        this.spectrumData.forEach((value, i) => {
            ctx.lineTo(left + (i / (SPECTRUM_POINTS - 1)) * (right - left), base - (value / max) * height);
        });
        ctx.lineTo(right, base);
        ctx.closePath();
        ctx.globalAlpha = 0.85;
        ctx.fillStyle = rainbow;
        ctx.fill();
        ctx.globalAlpha = 1.0;
        ctx.strokeStyle = '#FFFFFF';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.fillStyle = '#FFFFFF';
        ctx.font = '14px system-ui, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(this.spectrumCaption, canvas.width / 2, 30);
    }

    // ---------- Guidance UI ----------

    // Which of the 6 steps the player is on (7 = all done)
    computeStep() {
        const ex = this.exposure;
        if (!ex.stale && ex.state === 'done') return ex.saved ? 7 : 6;
        if (!ex.stale && ex.state === 'running') return 5;
        if (this.slewing || (!this.currentTarget && this.inView.length === 0)) return 1;
        if (!this.tracking) return 2;
        if (!this.guiding) return 3;
        if (!this.ao) return 4;
        return 5;
    }

    computeHint(step) {
        const name = this.currentTarget ? this.nameOf(this.currentTarget, 'it') : 'the stars';
        if (this.slewing) {
            const dest = this.selectedTarget ? this.nameOf(this.selectedTarget, '') : '';
            return `🚀 Moving the telescope${dest ? ' to ' + dest : ''}…`;
        }
        switch (step) {
            case 1:
                if (this.lostTarget && this.simulationTime - this.lostTarget.time < 8) {
                    return `😮 Oops! The sky drifted and ${this.nameOf(this.lostTarget.target, 'your target')} slid away. Click it again, then press Follow right away.`;
                }
                return '👉 Click something in the list or a spot on the Sky Map, then press Go.';
            case 2:
                return `🌍 The Earth is spinning, so ${name} is drifting away! Press <b>Follow</b> (or the Space bar).`;
            case 3:
                return `🎯 ${this.currentTarget && !this.isHidden(this.currentTarget) ? name + ' is' : 'The view is'} wobbling a little. Press <b>Guiding</b> to hold it still.`;
            case 4:
                return `✨ The air is making ${name} blurry and shimmery. Press <b>AO</b> to sharpen it!`;
            case 5:
                return this.exposure.state === 'running' && !this.exposure.stale
                    ? '⏳ Hold still… the camera is collecting light.'
                    : '📸 Perfect! Press <b>Take Picture</b>.';
            case 6:
                return '💾 Nice shot! Press <b>Save to Gallery</b> to keep it.';
            default:
                return '🎉 Saved! Pick something new from the list to keep exploring.';
        }
    }

    // Only touch the DOM when something changed
    setIfChanged(key, apply, value) {
        if (this.uiCache[key] !== value) {
            this.uiCache[key] = value;
            apply(value);
        }
    }

    updateUI() {
        const ui = this.ui;
        const ex = this.exposure;
        const step = this.computeStep();

        this.setIfChanged('hint', v => { ui.hint.innerHTML = v; }, this.computeHint(step));
        this.setIfChanged('step', () => {
            ui.steps.forEach(li => {
                const n = Number(li.dataset.step);
                li.classList.toggle('done', n < step);
                li.classList.toggle('current', n === step);
            });
            const attentionFor = { 1: ui.targets, 2: ui.trackingButton, 3: ui.guidingButton, 4: ui.aoButton, 5: ui.exposureButton, 6: ui.saveButton };
            [ui.targets, ui.trackingButton, ui.guidingButton, ui.aoButton, ui.exposureButton, ui.saveButton].forEach(el => el.classList.remove('attention'));
            const running = ex.state === 'running' && !ex.stale;
            if (attentionFor[step] && !this.slewing && !running && step !== 1) attentionFor[step].classList.add('attention');
        }, `${step}|${this.slewing}|${ex.state}`);

        this.setIfChanged('tracking', on => {
            ui.trackingButton.textContent = `🌍 Follow: ${on ? 'ON' : 'OFF'}`;
            ui.trackingButton.classList.toggle('on', on);
            ui.trackingButton.title = 'Keep up with the spinning sky (Space)';
        }, this.tracking);
        this.setIfChanged('guiding', state => {
            ui.guidingButton.textContent = `🎯 Guiding: ${this.guiding ? 'ON' : 'OFF'}`;
            ui.guidingButton.classList.toggle('on', this.guiding);
            ui.guidingButton.classList.toggle('unavailable', !this.tracking);
            ui.guidingButton.title = this.tracking ? 'Stop the wobble (G)' : 'Turn on Follow first';
        }, `${this.guiding}|${this.tracking}`);

        this.setIfChanged('ao', on => {
            ui.aoButton.textContent = `✨ AO: ${on ? 'ON' : 'OFF'}`;
            ui.aoButton.classList.toggle('on', on);
            ui.aoButton.title = 'Adaptive optics: a bendy mirror that un-blurs the wobbly air (O)';
        }, this.ao);

        let exposureLabel = '📸 Take Picture';
        if (ex.state === 'running') exposureLabel = `⏳ Taking… ${Math.max(0, EXPOSURE_SECONDS - ex.elapsed).toFixed(1)}s`;
        else if (ex.state === 'done') exposureLabel = '📸 Take Another';
        this.setIfChanged('exposure', v => { ui.exposureButton.textContent = v; }, exposureLabel);
        this.setIfChanged('save', idle => { ui.saveButton.disabled = idle; }, ex.state === 'idle');
        this.setIfChanged('mode', mode => {
            ui.viewModeButton.textContent = mode === 'image' ? 'Camera: 📷 Photo' : 'Camera: 🌈 Rainbow';
            ui.viewModeButton.title = 'Switch between a normal photo and a rainbow (spectrum) of the light';
        }, this.viewMode);

        let caption;
        if (this.slewing) caption = '🚀 On the way…';
        else if (this.currentTarget && this.isHidden(this.currentTarget)) {
            caption = `<strong>${this.currentTarget.kind === 'mystery' ? '🛸' : '❓'} Something is here!</strong> Take a picture to find out what it is.`;
        }
        else if (this.currentTarget && this.currentTarget.kind === 'mystery') caption = `<strong>🛸 ${this.currentTarget.name}</strong> ${this.currentTarget.fact}`;
        else if (this.currentTarget) {
            caption = `<strong>${this.currentTarget.name}</strong> — ${this.currentTarget.fact}`;
            if (this.currentTarget.credit) caption += ` <span class="credit">Picture: ${this.currentTarget.credit}</span>`;
        }
        else if (this.inView.length > 0) caption = 'Just some stars here. Pick a target from the list to find something amazing!';
        else caption = 'Empty sky. Pick a target from the list!';
        this.setIfChanged('caption', v => { ui.caption.innerHTML = v; }, caption);

        // Keep this exact format: telescope_control.py parses it
        this.setIfChanged('coords', v => { ui.coords.textContent = v; },
            `RA: ${this.formatRA(this.telescopeRa)} | Dec: ${this.formatDec(this.telescopeDec)} | ${this.tracking ? 'FOLLOWING' : 'NOT FOLLOWING'}`);
    }

    animate() {
        const now = performance.now();
        // Cap the step so a background tab doesn't jump the sky when you come back
        const elapsedSeconds = Math.min(0.1, (now - this.lastUpdate) / 1000);
        this.lastUpdate = now;
        this.simulationTime += elapsedSeconds;

        // Update simulation date slowly (1 minute of real time per second)
        this.simulationDate = new Date(this.simulationDate.getTime() + elapsedSeconds * 60 * 1000);

        this.updateSlew(elapsedSeconds);
        this.updateManualMovement(elapsedSeconds);
        this.updateEarthRotation(elapsedSeconds);

        this.objects.forEach(obj => {
            if (obj instanceof Planet || obj instanceof SpaceProbe) {
                obj.updatePosition(this.simulationDate);
            } else if (obj instanceof Satellite || obj instanceof SpaceMachine) {
                obj.update(elapsedSeconds);
            }
        });

        this.updateTargetLock();
        this.updateWobble(elapsedSeconds);
        this.updateAtmosphere(elapsedSeconds);

        this.updateNearby();
        this.updateCurrentTarget();

        this.drawTelescope();
        this.drawFinder();
        this.drawSHWFS();
        this.updateExposure(elapsedSeconds);
        this.drawExposure();
        this.updateUI();

        requestAnimationFrame(() => this.animate());
    }
}

// Start the simulator when the page loads
window.addEventListener('load', () => {
    new TelescopeSimulator();
});
