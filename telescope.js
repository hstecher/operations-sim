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
    constructor() {
        const ra = Math.random() * 360;
        const dec = Math.random() * 180 - 90;
        const magnitude = Math.random() * 5 + 1;
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
    constructor(planet) {
        super(planet.ra, planet.dec, Math.random() * 2 + 3);
        this.planet = planet;
        this.baseOrbitRadius = Math.random() * 2 + 2;
        this.orbitAngle = Math.random() * 360;
        this.orbitSpeed = Math.random() + 1.0;
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
    constructor(name, ra, dec) {
        const magnitude = Math.random() * 2;
        super(ra, dec, magnitude);
        this.name = name;
        this.color = PLANET_COLORS[name];
        this.moons = [];
        this.orbitSpeed = Math.random() * 0.4 + 0.1;

        const numMoons = Math.floor(Math.random() * 4) + 1;
        for (let i = 0; i < numMoons; i++) {
            this.moons.push(new Moon(this));
        }
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

        // Get contexts
        this.telescopeCtx = this.telescopeCanvas.getContext('2d');
        this.acquisitionCtx = this.acquisitionCanvas.getContext('2d');
        this.shwfsCtx = this.shwfsCanvas.getContext('2d');

        // Initialize celestial objects
        this.objects = [];
        
        // Add stars
        for (let i = 0; i < STAR_COUNT; i++) {
            this.objects.push(new Star());
        }

        // Add planets
        const planetNames = ['Mars', 'Jupiter', 'Saturn', 'Venus'];
        planetNames.forEach(name => {
            const ra = Math.random() * 360;
            const dec = Math.random() * 120 - 60;  // Keep near ecliptic
            this.objects.push(new Planet(name, ra, dec));
        });

        // Initialize telescope position
        this.telescopeRa = 180;
        this.telescopeDec = 0;
        this.targetRa = null;
        this.targetDec = null;
        this.slewing = false;
        this.tracking = false;

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

        slewButton.addEventListener('click', () => {
            const raValue = this.parseRA(raInput.value);
            const decValue = parseFloat(decInput.value);

            if (!isNaN(raValue) && !isNaN(decValue)) {
                this.targetRa = raValue;
                this.targetDec = decValue;
                this.slewing = true;
            }
        });

        // Add keyboard controls
        document.addEventListener('keydown', (e) => {
            // Prevent default scrolling for arrow keys
            if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key)) {
                e.preventDefault();
            }
            
            const moveSpeed = 1;
            switch(e.key) {
                case 'ArrowLeft':
                case 'ArrowRight':
                case 'ArrowUp':
                case 'ArrowDown':
                    // Any manual movement disables tracking
                    this.tracking = false;
                    switch(e.key) {
                        case 'ArrowLeft':
                            this.telescopeRa = (this.telescopeRa + moveSpeed) % 360;
                            break;
                        case 'ArrowRight':
                            this.telescopeRa = (this.telescopeRa - moveSpeed + 360) % 360;
                            break;
                        case 'ArrowUp':
                            this.telescopeDec = Math.min(90, this.telescopeDec + moveSpeed);
                            break;
                        case 'ArrowDown':
                            this.telescopeDec = Math.max(-90, this.telescopeDec - moveSpeed);
                            break;
                    }
                    break;
                case ' ': // Space key
                    e.preventDefault();
                    this.tracking = !this.tracking;
                    break;
            }
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
        coordsDiv.textContent = `RA: ${this.formatRA(this.telescopeRa)} | Dec: ${this.formatDec(this.telescopeDec)} | ${this.tracking ? 'TRACKING' : 'SIDEREAL'}`;
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

    drawPanel(ctx, fov, scale = 1.0) {
        // Clear canvas
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        // Draw objects
        this.objects.forEach(obj => {
            const pos = obj.getScreenPosition(this.telescopeRa, this.telescopeDec, fov, ctx.canvas);
            if (pos.x >= 0 && pos.x <= ctx.canvas.width && 
                pos.y >= 0 && pos.y <= ctx.canvas.height) {
                if (obj instanceof Planet) {
                    obj.draw(ctx, pos, ctx.canvas, fov, scale);
                } else {
                    obj.draw(ctx, pos, scale);
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

    animate() {
        const now = performance.now();
        const elapsedSeconds = (now - this.lastUpdate) / 1000;
        this.lastUpdate = now;
        this.simulationTime += elapsedSeconds;

        // Update
        this.updateSlew(elapsedSeconds);
        this.updateEarthRotation(elapsedSeconds);
        this.objects.forEach(obj => {
            if (obj instanceof Planet) {
                obj.update(elapsedSeconds);
            }
        });

        // Draw
        this.drawPanel(this.telescopeCtx, TELESCOPE_FOV, 1.0);
        this.drawPanel(this.acquisitionCtx, ACQUISITION_FOV, 0.5);
        this.drawSHWFS();
        this.updateCoordinates();

        requestAnimationFrame(() => this.animate());
    }
}

// Start the simulator when the page loads
window.addEventListener('load', () => {
    new TelescopeSimulator();
}); 