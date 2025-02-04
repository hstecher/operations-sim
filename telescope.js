// Constants
const STAR_COUNT = 200;
const TELESCOPE_FOV = 5;  // degrees
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

// Planet colors
const PLANET_COLORS = {
    'Mars': '#FF6400',
    'Jupiter': '#FFC864',
    'Saturn': '#FFDC96',
    'Venus': '#FFFFC8'
};

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
        this.spectra = starConfig.spectra || {
            type: 'G2',  // Default to solar type
            peaks: [
                393.4 + Math.random() * 2, // Ca K
                396.8 + Math.random() * 2, // Ca H
                410.2 + Math.random() * 2, // Hδ
                434.0 + Math.random() * 2, // Hγ
                486.1 + Math.random() * 2, // Hβ
                516.7 + Math.random() * 2, // Mg
                656.3 + Math.random() * 2  // Hα
            ],
            intensities: [
                0.7 + Math.random() * 0.3,  // Ca K
                0.75 + Math.random() * 0.25, // Ca H
                0.6 + Math.random() * 0.3,  // Hδ
                0.7 + Math.random() * 0.3,  // Hγ
                0.8 + Math.random() * 0.2,  // Hβ
                0.65 + Math.random() * 0.25, // Mg
                0.85 + Math.random() * 0.15  // Hα
            ]
        };
    }

    draw(ctx, pos, scale = 1.0) {
        const radius = Math.max(1, (4 - this.magnitude) * scale);
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = '#FFFFFF';
        ctx.fill();
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

class Planet extends CelestialObject {
    constructor(config) {
        super(config.ra, config.dec, config.magnitude);
        this.name = config.name;
        this.color = PLANET_COLORS[config.name];
        this.spectra = config.spectra || {
            type: 'Reflected',
            peaks: [486.1, 656.3],
            intensities: [0.7, 0.8]
        };
        this.moons = config.moons.map(moonConfig => new Moon(this, moonConfig));
    }

    draw(ctx, pos, canvas, fov, scale = 1.0) {
        const radius = Math.max(2, (6 - this.magnitude) * scale);
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();

        // Draw moons
        this.moons.forEach(moon => moon.draw(ctx, pos, canvas, fov, scale));
    }

    update(elapsedSeconds) {
        this.moons.forEach(moon => moon.update(elapsedSeconds));
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

        // Initialize celestial objects from configuration
        this.objects = [];
        
        // Add stars from configuration
        skyConfig.stars.forEach(starConfig => {
            this.objects.push(new Star(starConfig));
        });

        // Add planets from configuration
        skyConfig.planets.forEach(planetConfig => {
            this.objects.push(new Planet(planetConfig));
        });

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
        const guidingButton = document.getElementById('guiding-button');  // Add guiding button

        // Update tracking button text
        const updateTrackingButton = () => {
            trackingButton.textContent = `Follow: ${this.tracking ? 'ON' : 'OFF'}`;
        };

        // Update guiding button text
        const updateGuidingButton = () => {
            guidingButton.textContent = `Guide: ${this.guiding ? 'ON' : 'OFF'}`;
        };

        // Initial button states
        updateTrackingButton();
        updateGuidingButton();

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
                // Disable tracking and guiding when manually moving
                this.tracking = false;
                this.guiding = false;
                updateTrackingButton();
                updateGuidingButton();
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

        // Draw objects
        this.objects.forEach(obj => {
            const pos = obj.getScreenPosition(this.telescopeRa, this.telescopeDec, fov, ctx.canvas);
            if (pos.x >= 0 && pos.x <= ctx.canvas.width && 
                pos.y >= 0 && pos.y <= ctx.canvas.height) {
                if (obj instanceof Planet) {
                    if (isExposure) {
                        ctx.globalAlpha = 0.05;  // Very faint for planets too
                    }
                    obj.draw(ctx, pos, ctx.canvas, fov, scale);
                    if (isExposure) {
                        ctx.globalAlpha = 1.0;
                    }
                } else {
                    // For exposure, draw stars with very reduced opacity
                    if (isExposure) {
                        ctx.globalAlpha = 0.02;  // Much fainter, will build up over time
                    }
                    obj.draw(ctx, pos, scale);
                    if (isExposure) {
                        ctx.globalAlpha = 1.0;
                    }
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
                        if (obj instanceof Planet) {
                            obj.draw(ctx, adjustedPos, ctx.canvas, TELESCOPE_FOV, 0.5);
                        } else {
                            obj.draw(ctx, adjustedPos, 0.5);
                        }
                    }
                });

                ctx.restore();
            }
        }
    }

    // Add new method to handle continuous movement
    updateManualMovement(elapsedSeconds) {
        const moveSpeed = 15 * elapsedSeconds;  // degrees per second

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
            visibleObjects.forEach(obj => {
                const pos = obj.getScreenPosition(this.telescopeRa, this.telescopeDec, TELESCOPE_FOV, this.exposureBuffer);
                if (obj instanceof Planet) {
                    this.exposureBufferCtx.globalAlpha = 0.05;
                    obj.draw(this.exposureBufferCtx, pos, this.exposureBuffer, TELESCOPE_FOV, 1.0);
                } else {
                    this.exposureBufferCtx.globalAlpha = 0.02;
                    obj.draw(this.exposureBufferCtx, pos, 1.0);
                }
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

        // Update
        this.updateSlew(elapsedSeconds);
        this.updateManualMovement(elapsedSeconds);
        this.updateEarthRotation(elapsedSeconds);
        this.updateDrift(elapsedSeconds);
        this.objects.forEach(obj => {
            if (obj instanceof Planet) {
                obj.update(elapsedSeconds);
            }
        });

        // Draw
        this.drawPanel(this.telescopeCtx, TELESCOPE_FOV, 1.0);
        this.drawPanel(this.acquisitionCtx, ACQUISITION_FOV, 0.5);
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