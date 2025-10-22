// Constants
const STAR_COUNT = 1000;
const SATELLITE_COUNT = 3;  // Add a few satellites
const TELESCOPE_FOV = 0.5;  // degrees - zoomed in to focus on single objects
const ACQUISITION_FOV = 120;  // degrees
const SHWFS_SIZE = 500;
const LENSLET_COUNT = 2;
const SPOT_DEVIATION_MAX = 5;
const SIDEREAL_RATE = (360.0 / (24 * 60 * 60)) * 500;  // degrees per second
const SLEW_SPEED = 30;  // degrees per second
const SPECTRA_WIDTH = 500;  // Width of spectral display
const SPECTRA_HEIGHT = 200;  // Height of spectral display
const WAVELENGTH_MIN = 380;  // nm
const WAVELENGTH_MAX = 780;  // nm

// Add satellite parameters
const SATELLITE_SPEED = 0.5;  // degrees per second
const SATELLITE_MAGNITUDE = 2;  // Fairly bright

// Planet colors (for future use)
const PLANET_COLORS = {
    'Mercury': '#B7B8B9',
    'Venus': '#FFF5E1',
    'Mars': '#CD5C5C',
    'Jupiter': '#DAA520',
    'Saturn': '#F4E4C1',
    'Uranus': '#4FD0E7',
    'Neptune': '#4169E1'
};

// Local planet image paths - replace these PNG files with real planet images
const PLANET_IMAGES = {
    'Mercury': 'planets/mercury.png',
    'Venus': 'planets/venus.png',
    'Mars': 'planets/mars.png',
    'Jupiter': 'planets/jupiter.png',
    'Saturn': 'planets/saturn.png',
    'Uranus': 'planets/uranus.png',
    'Neptune': 'planets/neptune.png'
};

// Helper function to format RA from degrees to HH:MM
function formatRADegrees(raDegrees) {
    const hours = raDegrees / 15;  // Convert to hours
    const h = Math.floor(hours);
    const m = Math.floor((hours - h) * 60);
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
}

class CelestialObject {
    constructor(ra, dec, magnitude) {
        this.ra = ra;
        this.dec = dec;
        this.magnitude = magnitude;
    }

    getScreenPosition(centerRa, centerDec, fov, canvas, isLenslet = false) {
        let raDiff = (this.ra - centerRa);
        if (raDiff > 180) raDiff -= 360;
        else if (raDiff < -180) raDiff += 360;
        
        const decDiff = this.dec - centerDec;
        
        if (isLenslet) {
            const x = ((raDiff + fov/2) / fov) * canvas.width;
            const y = ((-decDiff + fov/2) / fov) * canvas.height;
            return { x, y };
        } else {
            const x = canvas.width/2 + (raDiff / fov) * canvas.width;
            const y = canvas.height/2 - (decDiff / fov) * canvas.height;
            return { x, y };
        }
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

class Planet extends CelestialObject {
    constructor(name) {
        // Start with default position, will be updated by ephemeris
        super(0, 0, 0);
        this.name = name;
        this.color = PLANET_COLORS[name] || '#FFFFFF';
        
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
            console.warn(`Planet image not found: ${PLANET_IMAGES[this.name]} - using colored circle fallback`);
            this.imageLoaded = false;
        };
        img.src = PLANET_IMAGES[this.name];
    }
    
    updatePosition(date) {
        try {
            // Use astronomy-engine to calculate planet position
            // Note: astronomy-engine expects capitalized planet names
            const body = this.name;  // Keep the capital name!
            
            // Get heliocentric position first, then convert to equatorial
            const vector = Astronomy.HelioVector(body, date);
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
        const baseRadius = Math.max(3, (6 - this.magnitude) * scale);
        const radius = baseRadius;
        
        // In telescope/exposure view (large scale), use real image if loaded
        if (scale > 3 && this.imageLoaded && this.image) {
            // Draw planet image as a circular disk
            ctx.save();
            
            // Create circular clipping path
            ctx.beginPath();
            ctx.arc(pos.x, pos.y, radius, 0, Math.PI * 2);
            ctx.clip();
            
            // Draw the image centered
            const imgSize = radius * 2;
            ctx.drawImage(this.image, pos.x - radius, pos.y - radius, imgSize, imgSize);
            
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
        
        // Clear the exposure buffer
        this.exposureBufferCtx.fillStyle = '#000000';
        this.exposureBufferCtx.fillRect(0, 0, this.exposureBuffer.width, this.exposureBuffer.height);

        // Initialize simulation date
        this.simulationDate = new Date();
        
        // Initialize celestial objects from configuration
        this.objects = [];
        
        // Add stars from configuration
        skyConfig.stars.forEach(starConfig => {
            this.objects.push(new Star(starConfig));
        });

        // Add all planets
        const planetNames = ['Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
        planetNames.forEach(name => {
            const planet = new Planet(name);
            planet.updatePosition(this.simulationDate);
            this.objects.push(planet);
            console.log(`${name}: RA=${formatRADegrees(planet.ra)}, Dec=${planet.dec.toFixed(2)}°, Mag=${planet.magnitude.toFixed(1)}`);
        });

        // Add satellites
        for (let i = 0; i < SATELLITE_COUNT; i++) {
            this.objects.push(new Satellite());
        }

        // Initialize telescope position
        this.telescopeRa = 180;
        this.telescopeDec = 0;
        this.targetRa = null;
        this.targetDec = null;
        this.slewing = false;
        this.tracking = false;
        this.guiding = false;  // Add guiding state

        // Add drift parameters
        this.driftRa = 0;
        this.driftDec = 0;
        this.driftPhaseRa = Math.random() * Math.PI * 2;
        this.driftPhaseDec = Math.random() * Math.PI * 2;
        
        // Add key state tracking
        this.pressedKeys = new Set();
        
        // Add view mode state
        this.viewMode = 'image'; // 'image' or 'spectra'
        
        // Setup input handlers
        this.setupInputHandlers();

        // Start the animation loop
        this.lastUpdate = performance.now();
        this.simulationTime = 0;
        this.animate();
    }

    setupInputHandlers() {
        const raInput = document.getElementById('ra-input');
        const decInput = document.getElementById('dec-input');
        const slewButton = document.getElementById('slew-button');
        const trackingButton = document.getElementById('tracking-button');
        const exposureButton = document.getElementById('exposure-button');
        const viewModeButton = document.getElementById('view-mode-button');
        const guidingButton = document.getElementById('guiding-button');
        const saveExposureButton = document.getElementById('save-exposure-button');
        const telescopeViewButton = document.getElementById('telescope-view-button');
        const galleryViewButton = document.getElementById('gallery-view-button');
        const telescopeView = document.getElementById('telescope-view');
        const galleryView = document.getElementById('gallery-view');
        const exposureGallery = document.getElementById('exposure-gallery');

        // Function to load gallery
        const loadGallery = () => {
            fetch('/list_exposures')
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        exposureGallery.innerHTML = data.files.map(file => `
                            <div class="gallery-item">
                                <img src="${file.url}" alt="${file.filename}">
                                <div class="info">
                                    ${new Date(file.created).toLocaleString()}
                                </div>
                            </div>
                        `).join('');
                    }
                })
                .catch(error => console.error('Error loading gallery:', error));
        };

        // View toggle handlers
        telescopeViewButton.addEventListener('click', () => {
            telescopeView.style.display = 'block';
            galleryView.style.display = 'none';
            telescopeViewButton.classList.add('active');
            galleryViewButton.classList.remove('active');
        });

        galleryViewButton.addEventListener('click', () => {
            telescopeView.style.display = 'none';
            galleryView.style.display = 'block';
            telescopeViewButton.classList.remove('active');
            galleryViewButton.classList.add('active');
            loadGallery();  // Load gallery when switching to gallery view
        });

        // Update tracking button text
        const updateTrackingButton = () => {
            trackingButton.textContent = `Follow: ${this.tracking ? 'ON' : 'OFF'}`;
        };

        // Update guiding button text
        const updateGuidingButton = () => {
            guidingButton.textContent = `Guide: ${this.guiding ? 'ON' : 'OFF'}`;
        };

        // Update view mode button text
        const updateViewModeButton = () => {
            viewModeButton.textContent = `View: ${this.viewMode.charAt(0).toUpperCase() + this.viewMode.slice(1)}`;
        };

        // Initial button states
        updateTrackingButton();
        updateGuidingButton();
        updateViewModeButton();

        // Add save exposure handler
        saveExposureButton.addEventListener('click', () => {
            // Create a temporary canvas to add coordinates
            const tempCanvas = document.createElement('canvas');
            tempCanvas.width = this.exposureCanvas.width;
            tempCanvas.height = this.exposureCanvas.height + 30; // Extra height for coordinates
            const tempCtx = tempCanvas.getContext('2d');

            // Fill background
            tempCtx.fillStyle = '#000000';
            tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);

            // Copy the exposure
            tempCtx.drawImage(this.exposureCanvas, 0, 0);

            // Add coordinates text
            tempCtx.font = '14px monospace';
            tempCtx.fillStyle = '#FFFFFF';
            tempCtx.textAlign = 'center';
            tempCtx.fillText(
                `RA: ${this.formatRA(this.telescopeRa)} | Dec: ${this.formatDec(this.telescopeDec)}`,
                tempCanvas.width / 2,
                tempCanvas.height - 10
            );

            // Generate a random filename with timestamp
            const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
            const randomStr = Math.random().toString(36).substring(2, 8);
            const filename = `exposure_${timestamp}_${randomStr}.png`;

            // Get the temporary canvas data
            tempCanvas.toBlob((blob) => {
                // Create form data
                const formData = new FormData();
                formData.append('file', blob, filename);

                // Send to server
                fetch('/save_exposure', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        saveExposureButton.textContent = 'Saved!';
                        setTimeout(() => {
                            saveExposureButton.textContent = 'Save Exposure';
                        }, 2000);
                        // Refresh gallery if it's visible
                        if (galleryView.style.display === 'block') {
                            loadGallery();
                        }
                    } else {
                        saveExposureButton.textContent = 'Error!';
                        setTimeout(() => {
                            saveExposureButton.textContent = 'Save Exposure';
                        }, 2000);
                    }
                })
                .catch(error => {
                    console.error('Error saving exposure:', error);
                    saveExposureButton.textContent = 'Error!';
                    setTimeout(() => {
                        saveExposureButton.textContent = 'Save Exposure';
                    }, 2000);
                });
            }, 'image/png');
        });

        // Add guiding button handler
        guidingButton.addEventListener('click', () => {
            if (this.tracking) {  // Only allow guiding when tracking is on
                this.guiding = !this.guiding;
                updateGuidingButton();
            }
        });

        // Modify tracking button to handle guiding state
        trackingButton.addEventListener('click', () => {
            this.tracking = !this.tracking;
            if (!this.tracking) {
                this.guiding = false;  // Turn off guiding when tracking is off
                updateGuidingButton();
            }
            updateTrackingButton();
        });

        // Modify exposure button handler to reset spectrum data
        exposureButton.addEventListener('click', () => {
            // Clear the exposure buffer
            this.exposureBufferCtx.fillStyle = '#000000';
            this.exposureBufferCtx.fillRect(0, 0, this.exposureBuffer.width, this.exposureBuffer.height);
            this.spectralAxesDrawn = false;
            this.spectrumData = new Array(SPECTRA_WIDTH - 100).fill(0);  // Reset spectrum data
            
            // Update button text
            exposureButton.textContent = 'Clear Exposure';
        });

        slewButton.addEventListener('click', () => {
            const raValue = this.parseRA(raInput.value);
            const decValue = parseFloat(decInput.value);

            if (!isNaN(raValue) && !isNaN(decValue)) {
                this.targetRa = raValue;
                this.targetDec = decValue;
                this.slewing = true;
                this.guiding = false;  // Turn off guiding when slewing starts
                updateGuidingButton();
            }
        });

        // Track keydown
        document.addEventListener('keydown', (e) => {
            // Prevent default scrolling for arrow keys
            if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key)) {
                e.preventDefault();
                this.pressedKeys.add(e.key);
                // Allow manual adjustments while tracking/guiding is active
                // This enables fine-tuning without disabling automatic tracking
            } else if (e.key === ' ') {
                e.preventDefault();
                this.tracking = !this.tracking;
                this.guiding = false;  // Turn off guiding when tracking state changes
                updateTrackingButton();
                updateGuidingButton();
            }
        });

        // Track keyup
        document.addEventListener('keyup', (e) => {
            this.pressedKeys.delete(e.key);
        });

        // View mode button handler
        viewModeButton.addEventListener('click', () => {
            this.viewMode = this.viewMode === 'image' ? 'spectra' : 'image';
            updateViewModeButton();
            
            // Clear the exposure buffer when switching modes
            this.exposureBufferCtx.fillStyle = '#000000';
            this.exposureBufferCtx.fillRect(0, 0, this.exposureBuffer.width, this.exposureBuffer.height);
        });
    }

    parseRA(raString) {
        const parts = raString.split(':');
        if (parts.length === 2) {
            const hours = parseFloat(parts[0]);
            const minutes = parseFloat(parts[1]);
            if (!isNaN(hours) && !isNaN(minutes)) {
                return (hours + minutes/60) * 15;  // Convert to degrees
            }
        }
        return NaN;
    }

    formatRA(ra) {
        const hours = ra / 15;  // Convert to hours
        const h = Math.floor(hours);
        const m = Math.floor((hours - h) * 60);
        return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
    }

    formatDec(dec) {
        const sign = dec >= 0 ? '+' : '-';
        const absDec = Math.abs(dec);
        const d = Math.floor(absDec);
        const m = Math.floor((absDec - d) * 60);
        return `${sign}${d.toString().padStart(2, '0')}°${m.toString().padStart(2, '0')}'`;
    }

    updateCoordinates() {
        const coordsDiv = document.getElementById('current-coords');
        coordsDiv.textContent = `RA: ${this.formatRA(this.telescopeRa)} | Dec: ${this.formatDec(this.telescopeDec)} | ${this.tracking ? 'FOLLOWING' : 'SIDEREAL'}`;
    }

    updateSlew(elapsedSeconds) {
        if (this.slewing && this.targetRa !== null && this.targetDec !== null) {
            let raDiff = this.targetRa - this.telescopeRa;
            if (raDiff > 180) raDiff -= 360;
            else if (raDiff < -180) raDiff += 360;

            const decDiff = this.targetDec - this.telescopeDec;
            const maxMove = SLEW_SPEED * elapsedSeconds;

            // Move RA
            if (Math.abs(raDiff) > maxMove) {
                this.telescopeRa = (this.telescopeRa + Math.sign(raDiff) * maxMove + 360) % 360;
            } else {
                this.telescopeRa = this.targetRa;
            }

            // Move Dec
            if (Math.abs(decDiff) > maxMove) {
                this.telescopeDec += Math.sign(decDiff) * maxMove;
            } else {
                this.telescopeDec = this.targetDec;
            }

            // Check if we've reached the target
            if (Math.abs(raDiff) < 0.1 && Math.abs(decDiff) < 0.1) {
                this.slewing = false;
                // Don't automatically set tracking
            }
        }
    }

    updateEarthRotation(elapsedSeconds) {
        if (!this.tracking) {
            this.telescopeRa = (this.telescopeRa + SIDEREAL_RATE * elapsedSeconds + 360) % 360;
        }
    }

    updateDrift(elapsedSeconds) {
        if (this.tracking && !this.guiding) {  // Only apply jitter if tracking but not guiding
            // Pure random jitter with increased frequency but small amplitude
            const jitterAmount = 0.08;  // doubled from 0.04 to 0.08
            
            // Generate random jitter with gaussian-like distribution
            const getJitter = () => {
                return ((Math.random() + Math.random()) / 2 - 0.5) * jitterAmount;
            };
            
            // Apply jitter every frame regardless of elapsed time
            this.telescopeRa = (this.telescopeRa + getJitter() + 360) % 360;
            this.telescopeDec = Math.max(-90, Math.min(90, this.telescopeDec + getJitter()));
        }
    }

    drawPanel(ctx, fov, scale = 1.0, isExposure = false) {
        // Clear canvas if not exposure
        if (!isExposure) {
            ctx.fillStyle = '#000000';
            ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        }

        // Check if this is the telescope view (narrow FOV)
        const isTelescopeView = (fov === TELESCOPE_FOV);

        // Draw objects
        this.objects.forEach(obj => {
            const pos = obj.getScreenPosition(this.telescopeRa, this.telescopeDec, fov, ctx.canvas);
            if (pos.x >= 0 && pos.x <= ctx.canvas.width && 
                pos.y >= 0 && pos.y <= ctx.canvas.height) {
                // For exposure, draw with reduced opacity
                if (isExposure) {
                    ctx.globalAlpha = 0.04;
                }
                
                // Use much larger scale for telescope view to make objects more impressive
                const drawScale = isTelescopeView ? scale * 8 : scale;
                obj.draw(ctx, pos, drawScale);
                
                if (isExposure) {
                    ctx.globalAlpha = 1.0;
                }
            }
        });
    }

    drawSHWFS() {
        const ctx = this.shwfsCtx;
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        // Draw grid
        ctx.strokeStyle = '#333333';
        const cellSize = ctx.canvas.width / LENSLET_COUNT;
        for (let i = 1; i < LENSLET_COUNT; i++) {
            const pos = i * cellSize;
            ctx.beginPath();
            ctx.moveTo(pos, 0);
            ctx.lineTo(pos, ctx.canvas.height);
            ctx.moveTo(0, pos);
            ctx.lineTo(ctx.canvas.width, pos);
            ctx.stroke();
        }

        // Draw telescope view in each quadrant
        for (let i = 0; i < LENSLET_COUNT; i++) {
            for (let j = 0; j < LENSLET_COUNT; j++) {
                // Calculate the quadrant boundaries
                const quadX = i * cellSize;
                const quadY = j * cellSize;

                // Save context to clip to quadrant
                ctx.save();
                ctx.beginPath();
                ctx.rect(quadX, quadY, cellSize, cellSize);
                ctx.clip();

                // Draw objects in this quadrant
                this.objects.forEach(obj => {
                    const pos = obj.getScreenPosition(this.telescopeRa, this.telescopeDec, TELESCOPE_FOV, ctx.canvas);
                    
                    // Add random deviation for atmospheric effects
                    const deviation = {
                        x: (Math.random() - 0.5) * SPOT_DEVIATION_MAX,
                        y: (Math.random() - 0.5) * SPOT_DEVIATION_MAX
                    };

                    // Adjust position for this quadrant
                    const adjustedPos = {
                        x: pos.x - (ctx.canvas.width/2 - quadX - cellSize/2) + deviation.x,
                        y: pos.y - (ctx.canvas.height/2 - quadY - cellSize/2) + deviation.y
                    };

                    // Only draw if within the quadrant bounds
                    if (adjustedPos.x >= quadX && adjustedPos.x <= quadX + cellSize &&
                        adjustedPos.y >= quadY && adjustedPos.y <= quadY + cellSize) {
                        obj.draw(ctx, adjustedPos, 0.5);
                    }
                });

                ctx.restore();
            }
        }
    }

    // Add new method to handle continuous movement
    updateManualMovement(elapsedSeconds) {
        // Use much slower speed when guiding is active for fine-tuning
        const baseMoveSpeed = this.guiding ? 0.5 : 15;  // 0.5 deg/s when guiding, 15 deg/s normally
        const moveSpeed = baseMoveSpeed * elapsedSeconds;

        this.pressedKeys.forEach(key => {
            switch(key) {
                case 'ArrowLeft':
                    this.telescopeRa = (this.telescopeRa - moveSpeed + 360) % 360;  // reversed direction
                    break;
                case 'ArrowRight':
                    this.telescopeRa = (this.telescopeRa + moveSpeed) % 360;  // reversed direction
                    break;
                case 'ArrowUp':
                    this.telescopeDec = Math.min(90, this.telescopeDec + moveSpeed);
                    break;
                case 'ArrowDown':
                    this.telescopeDec = Math.max(-90, this.telescopeDec - moveSpeed);
                    break;
            }
        });
    }

    drawReticle(ctx) {
        const centerX = ctx.canvas.width / 2;
        const centerY = ctx.canvas.height / 2;
        const reticleSize = 30;
        const gap = 10;

        ctx.strokeStyle = '#00FF00';
        ctx.lineWidth = 1.5;
        ctx.setLineDash([]);

        // Draw crosshair lines
        // Top line
        ctx.beginPath();
        ctx.moveTo(centerX, centerY - gap);
        ctx.lineTo(centerX, centerY - reticleSize);
        ctx.stroke();

        // Bottom line
        ctx.beginPath();
        ctx.moveTo(centerX, centerY + gap);
        ctx.lineTo(centerX, centerY + reticleSize);
        ctx.stroke();

        // Left line
        ctx.beginPath();
        ctx.moveTo(centerX - gap, centerY);
        ctx.lineTo(centerX - reticleSize, centerY);
        ctx.stroke();

        // Right line
        ctx.beginPath();
        ctx.moveTo(centerX + gap, centerY);
        ctx.lineTo(centerX + reticleSize, centerY);
        ctx.stroke();

        // Draw center circle
        ctx.beginPath();
        ctx.arc(centerX, centerY, gap - 2, 0, Math.PI * 2);
        ctx.stroke();

        // Draw outer circle
        ctx.beginPath();
        ctx.arc(centerX, centerY, reticleSize + 10, 0, Math.PI * 2);
        ctx.stroke();

        // Add corner brackets
        const bracketSize = 15;
        const bracketOffset = 50;

        // Top-left
        ctx.beginPath();
        ctx.moveTo(centerX - bracketOffset, centerY - bracketOffset + bracketSize);
        ctx.lineTo(centerX - bracketOffset, centerY - bracketOffset);
        ctx.lineTo(centerX - bracketOffset + bracketSize, centerY - bracketOffset);
        ctx.stroke();

        // Top-right
        ctx.beginPath();
        ctx.moveTo(centerX + bracketOffset - bracketSize, centerY - bracketOffset);
        ctx.lineTo(centerX + bracketOffset, centerY - bracketOffset);
        ctx.lineTo(centerX + bracketOffset, centerY - bracketOffset + bracketSize);
        ctx.stroke();

        // Bottom-left
        ctx.beginPath();
        ctx.moveTo(centerX - bracketOffset, centerY + bracketOffset - bracketSize);
        ctx.lineTo(centerX - bracketOffset, centerY + bracketOffset);
        ctx.lineTo(centerX - bracketOffset + bracketSize, centerY + bracketOffset);
        ctx.stroke();

        // Bottom-right
        ctx.beginPath();
        ctx.moveTo(centerX + bracketOffset - bracketSize, centerY + bracketOffset);
        ctx.lineTo(centerX + bracketOffset, centerY + bracketOffset);
        ctx.lineTo(centerX + bracketOffset, centerY + bracketOffset - bracketSize);
        ctx.stroke();
    }

    drawSpectralLine(ctx, object, x, y, width, height) {
        if (!object.spectra) return;

        // Draw wavelength axis
        ctx.strokeStyle = '#444444';
        ctx.beginPath();
        ctx.moveTo(x, y + height);
        ctx.lineTo(x + width, y + height);
        ctx.stroke();

        // Draw intensity axis
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x, y + height);
        ctx.stroke();

        // Draw spectral peaks
        ctx.strokeStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.moveTo(x, y + height);

        // Draw the spectral line
        for (let i = 0; i < width; i++) {
            const wavelength = WAVELENGTH_MIN + (i / width) * (WAVELENGTH_MAX - WAVELENGTH_MIN);
            let intensity = 0;

            // Calculate intensity based on peaks
            object.spectra.peaks.forEach((peak, idx) => {
                const peakIntensity = object.spectra.intensities[idx];
                const sigma = 2; // Width of spectral lines
                intensity += peakIntensity * Math.exp(-Math.pow(wavelength - peak, 2) / (2 * sigma * sigma));
            });

            const px = x + i;
            const py = y + height - (intensity * height);
            if (i === 0) {
                ctx.moveTo(px, py);
            } else {
                ctx.lineTo(px, py);
            }
        }
        ctx.stroke();

        // Draw spectral type and features if available
        ctx.fillStyle = '#FFFFFF';
        ctx.font = '12px Arial';
        if (object.spectra.type) {
            ctx.fillText(`Type: ${object.spectra.type}`, x + 5, y + 15);
        }
        if (object.spectra.features) {
            ctx.fillText(`Features: ${object.spectra.features.join(', ')}`, x + 5, y + 30);
        }
    }

    // New method to calculate combined spectrum
    drawCombinedSpectrum(ctx, objects, x, y, width, height) {
        if (objects.length === 0) return;

        // Calculate spectrum contribution from all objects
        const intensityData = new Array(width).fill(0);

        // First calculate the base continuum level
        objects.forEach(obj => {
            const brightness = Math.pow(10, -obj.magnitude/2.5);
            // Add a small continuum contribution from each object
            for (let i = 0; i < width; i++) {
                intensityData[i] += brightness * 0.01;
            }
        });

        // Then add spectral lines at full height
        objects.forEach(obj => {
            if (!obj.spectra) return;
            
            const brightness = Math.pow(10, -obj.magnitude/2.5);
            
            obj.spectra.peaks.forEach((peak, idx) => {
                const peakIntensity = obj.spectra.intensities[idx];
                const peakPos = Math.floor(((peak - WAVELENGTH_MIN) / (WAVELENGTH_MAX - WAVELENGTH_MIN)) * width);
                
                // Add gaussian profile around each peak
                for (let i = Math.max(0, peakPos - 10); i < Math.min(width, peakPos + 10); i++) {
                    const wavelength = WAVELENGTH_MIN + (i / width) * (WAVELENGTH_MAX - WAVELENGTH_MIN);
                    const sigma = 1; // Narrower lines
                    const lineProfile = Math.exp(-Math.pow(wavelength - peak, 2) / (2 * sigma * sigma));
                    intensityData[i] += brightness * peakIntensity * lineProfile;
                }
            });
        });

        // Draw the spectral line
        ctx.strokeStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.moveTo(x, y + height);

        intensityData.forEach((intensity, i) => {
            const px = x + i;
            const py = y + height - (intensity * height * 0.5); // Adjust scale factor for better visibility
            if (i === 0) {
                ctx.moveTo(px, py);
            } else {
                ctx.lineTo(px, py);
            }
        });
        ctx.stroke();
    }

    updateExposure() {
        const visibleObjects = this.objects.filter(obj => {
            const pos = obj.getScreenPosition(this.telescopeRa, this.telescopeDec, TELESCOPE_FOV, this.telescopeCanvas);
            return pos.x >= 0 && pos.x < this.telescopeCanvas.width && 
                   pos.y >= 0 && pos.y < this.telescopeCanvas.height;
        });

        if (this.viewMode === 'image') {
            // Draw current telescope view onto exposure buffer with low opacity
            // Use same scale as telescope view (8x) to match what's seen
            visibleObjects.forEach(obj => {
                const pos = obj.getScreenPosition(this.telescopeRa, this.telescopeDec, TELESCOPE_FOV, this.exposureBuffer);
                this.exposureBufferCtx.globalAlpha = 0.02;
                obj.draw(this.exposureBufferCtx, pos, 8.0);  // Match telescope view scale
                this.exposureBufferCtx.globalAlpha = 1.0;
            });
        } else {
            // Initialize the spectrum data array if it doesn't exist
            if (!this.spectrumData) {
                this.spectrumData = new Array(SPECTRA_WIDTH - 100).fill(0);
            }

            // Draw simple axes if buffer is empty
            if (!this.spectralAxesDrawn) {
                this.exposureBufferCtx.fillStyle = '#000000';
                this.exposureBufferCtx.fillRect(0, 0, this.exposureBuffer.width, this.exposureBuffer.height);
                
                // Draw basic wavelength axis - moved closer to bottom (changed from SPECTRA_HEIGHT - 50 to SPECTRA_HEIGHT - 20)
                this.exposureBufferCtx.strokeStyle = '#333333';
                this.exposureBufferCtx.beginPath();
                this.exposureBufferCtx.moveTo(50, SPECTRA_HEIGHT - 20);
                this.exposureBufferCtx.lineTo(SPECTRA_WIDTH - 50, SPECTRA_HEIGHT - 20);
                this.exposureBufferCtx.stroke();
                
                this.spectralAxesDrawn = true;
            }

            // Add each object's contribution to the spectrum data
            visibleObjects.forEach(obj => {
                // Every object contributes to the spectrum
                const brightness = Math.pow(10, -obj.magnitude/2.5);
                
                // Add spectral lines
                obj.spectra.peaks.forEach((peak, idx) => {
                    const peakIntensity = obj.spectra.intensities[idx] * brightness;
                    const peakPos = Math.floor(((peak - WAVELENGTH_MIN) / (WAVELENGTH_MAX - WAVELENGTH_MIN)) * (SPECTRA_WIDTH - 100));
                    
                    // Add gaussian profile around each peak
                    for (let i = Math.max(0, peakPos - 5); i < Math.min(SPECTRA_WIDTH - 100, peakPos + 5); i++) {
                        const wavelength = WAVELENGTH_MIN + (i / (SPECTRA_WIDTH - 100)) * (WAVELENGTH_MAX - WAVELENGTH_MIN);
                        const sigma = 0.5; // Narrower lines for better definition
                        const contribution = Math.exp(-Math.pow(wavelength - peak, 2) / (2 * sigma * sigma));
                        this.spectrumData[i] += contribution * 0.0005; // Reduced from 0.005 to 0.0005 for slower growth
                    }
                });
            });

            // Clear and redraw the spectrum
            this.exposureBufferCtx.fillStyle = '#000000';
            this.exposureBufferCtx.fillRect(0, 0, this.exposureBuffer.width, this.exposureBuffer.height);
            
            // Draw the wavelength axis - moved closer to bottom
            this.exposureBufferCtx.strokeStyle = '#333333';
            this.exposureBufferCtx.beginPath();
            this.exposureBufferCtx.moveTo(50, SPECTRA_HEIGHT - 20);
            this.exposureBufferCtx.lineTo(SPECTRA_WIDTH - 50, SPECTRA_HEIGHT - 20);
            this.exposureBufferCtx.stroke();

            // Draw the accumulated spectrum - moved closer to bottom
            this.exposureBufferCtx.strokeStyle = '#FFFFFF';
            this.exposureBufferCtx.beginPath();
            this.exposureBufferCtx.moveTo(50, SPECTRA_HEIGHT - 20);

            for (let i = 0; i < this.spectrumData.length; i++) {
                const x = 50 + i;
                const y = SPECTRA_HEIGHT - 20 - (this.spectrumData[i] * (SPECTRA_HEIGHT - 40));
                if (i === 0) {
                    this.exposureBufferCtx.moveTo(x, y);
                } else {
                    this.exposureBufferCtx.lineTo(x, y);
                }
            }
            this.exposureBufferCtx.stroke();
        }

        // Copy buffer to visible canvas
        this.exposureCtx.drawImage(this.exposureBuffer, 0, 0);
    }

    animate() {
        const now = performance.now();
        const elapsedSeconds = (now - this.lastUpdate) / 1000;
        this.lastUpdate = now;
        this.simulationTime += elapsedSeconds;

        // Update simulation date slowly (1 minute of real time per second)
        this.simulationDate = new Date(this.simulationDate.getTime() + elapsedSeconds * 60 * 1000);

        // Update
        this.updateSlew(elapsedSeconds);
        this.updateManualMovement(elapsedSeconds);
        this.updateEarthRotation(elapsedSeconds);
        this.updateDrift(elapsedSeconds);
        
        // Update dynamic objects
        this.objects.forEach(obj => {
            if (obj instanceof Planet) {
                // Update planet positions every frame (they move slowly)
                obj.updatePosition(this.simulationDate);
            } else if (obj instanceof Satellite) {
                obj.update(elapsedSeconds);
            }
        });

        // Draw
        this.drawPanel(this.telescopeCtx, TELESCOPE_FOV, 1.0);
        this.drawPanel(this.acquisitionCtx, ACQUISITION_FOV, 0.5);
        this.drawReticle(this.acquisitionCtx);  // Add reticle to acquisition view
        this.drawSHWFS();
        this.updateExposure();
        this.updateCoordinates();

        requestAnimationFrame(() => this.animate());
    }
}

// Start the simulator when the page loads
window.addEventListener('load', () => {
    new TelescopeSimulator();
}); 