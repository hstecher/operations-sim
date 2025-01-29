// Constants
const STAR_COUNT = 200;
const TELESCOPE_FOV = 5;  // degrees
const ACQUISITION_FOV = 120;  // degrees
const SHWFS_SIZE = 500;
const LENSLET_COUNT = 2;
const SPOT_DEVIATION_MAX = 5;
const SIDEREAL_RATE = (360.0 / (24 * 60 * 60)) * 500;  // degrees per second
const SLEW_SPEED = 30;  // degrees per second

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
    constructor(ra, dec, magnitude) {
        super(ra, dec, magnitude);
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
        this.orbitSpeed = 360 / (config.orbitPeriod * 3600);  // Convert period to degrees/second
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
            this.objects.push(new Star(starConfig.ra, starConfig.dec, starConfig.magnitude));
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

        // Add drift parameters
        this.driftRa = 0;
        this.driftDec = 0;
        this.driftPhaseRa = Math.random() * Math.PI * 2;
        this.driftPhaseDec = Math.random() * Math.PI * 2;
        
        // Add key state tracking
        this.pressedKeys = new Set();
        
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

        // Update tracking button text
        const updateTrackingButton = () => {
            trackingButton.textContent = `Follow: ${this.tracking ? 'ON' : 'OFF'}`;
        };

        // Initial button state
        updateTrackingButton();

        // Exposure button handler
        exposureButton.addEventListener('click', () => {
            // Clear the exposure buffer
            this.exposureBufferCtx.fillStyle = '#000000';
            this.exposureBufferCtx.fillRect(0, 0, this.exposureBuffer.width, this.exposureBuffer.height);
            
            // Update button text
            exposureButton.textContent = 'Clear Exposure';
        });

        trackingButton.addEventListener('click', () => {
            this.tracking = !this.tracking;
            updateTrackingButton();
        });

        slewButton.addEventListener('click', () => {
            const raValue = this.parseRA(raInput.value);
            const decValue = parseFloat(decInput.value);

            if (!isNaN(raValue) && !isNaN(decValue)) {
                this.targetRa = raValue;
                this.targetDec = decValue;
                this.slewing = true;
            }
        });

        // Track keydown
        document.addEventListener('keydown', (e) => {
            // Prevent default scrolling for arrow keys
            if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key)) {
                e.preventDefault();
                this.pressedKeys.add(e.key);
                // Disable tracking when manually moving
                this.tracking = false;
                updateTrackingButton();
            } else if (e.key === ' ') {
                e.preventDefault();
                this.tracking = !this.tracking;
                updateTrackingButton();
            }
        });

        // Track keyup
        document.addEventListener('keyup', (e) => {
            this.pressedKeys.delete(e.key);
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
        if (this.tracking) {
            // Pure random jitter with increased frequency but small amplitude
            const jitterAmount = 0.04;  // doubled from 0.02 to 0.04
            
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

        // Get visible stars and draw their spots
        const visibleStars = this.objects.filter(obj => {
            if (obj instanceof Star) {
                const pos = obj.getScreenPosition(this.telescopeRa, this.telescopeDec, 
                                                TELESCOPE_FOV, this.telescopeCanvas);
                return pos.x >= 0 && pos.x <= this.telescopeCanvas.width && 
                       pos.y >= 0 && pos.y <= this.telescopeCanvas.height;
            }
            return false;
        });

        visibleStars.forEach(star => {
            const basePos = star.getScreenPosition(this.telescopeRa, this.telescopeDec, 
                                                 TELESCOPE_FOV, ctx.canvas, true);
            // Add random deviation
            const deviation = {
                x: (Math.random() - 0.5) * SPOT_DEVIATION_MAX,
                y: (Math.random() - 0.5) * SPOT_DEVIATION_MAX
            };
            
            ctx.beginPath();
            ctx.arc(basePos.x + deviation.x, basePos.y + deviation.y, 2, 0, Math.PI * 2);
            ctx.fillStyle = '#FFFFFF';
            ctx.fill();
        });
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

    updateExposure() {
        // Draw current telescope view onto exposure buffer
        this.drawPanel(this.exposureBufferCtx, TELESCOPE_FOV, 1.0, true);
        
        // Copy buffer to visible canvas
        this.exposureCtx.clearRect(0, 0, this.exposureCanvas.width, this.exposureCanvas.height);
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