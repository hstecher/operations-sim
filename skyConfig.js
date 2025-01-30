// Sky configuration with fixed positions for all celestial objects
const skyConfig = {
    stars: [
        // Bright stars
        { ra: 78.6, dec: 45.9, magnitude: 0.5 },  // Capella
        { ra: 116.3, dec: 28.0, magnitude: 1.0 }, // Pollux
        { ra: 114.8, dec: 5.2, magnitude: 0.4 },  // Procyon
        { ra: 95.9, dec: -52.7, magnitude: 0.4 }, // Canopus
        { ra: 101.3, dec: -16.7, magnitude: 0.5 },// Sirius
        { ra: 88.8, dec: 7.4, magnitude: 0.9 },   // Betelgeuse
        { ra: 279.2, dec: 38.8, magnitude: 0.1 }, // Vega
        { ra: 297.7, dec: 8.9, magnitude: 0.8 },  // Altair
        { ra: 310.4, dec: 45.3, magnitude: 0.7 }, // Deneb
        
        // Medium brightness field stars
        { ra: 45.6, dec: 24.1, magnitude: 2.1 },
        { ra: 89.9, dec: -1.9, magnitude: 2.3 },
        { ra: 123.4, dec: 12.8, magnitude: 2.2 },
        { ra: 156.7, dec: -8.4, magnitude: 2.4 },
        { ra: 187.2, dec: 15.6, magnitude: 2.1 },
        { ra: 205.4, dec: -12.9, magnitude: 2.3 },
        { ra: 234.8, dec: 28.7, magnitude: 2.2 },
        { ra: 267.1, dec: -5.6, magnitude: 2.4 },
        { ra: 289.5, dec: 18.3, magnitude: 2.1 },
        { ra: 312.8, dec: -9.2, magnitude: 2.3 },
        { ra: 345.2, dec: 22.5, magnitude: 2.2 },

        // Field stars with improved distribution
        ...Array.from({ length: 200 }, (_, i) => {
            // Use spherical coordinates for better distribution
            const phi = Math.acos(2 * Math.random() - 1); // Better declination distribution
            const theta = Math.random() * 2 * Math.PI;    // Random RA
            return {
                ra: (theta * 180 / Math.PI + 360) % 360,
                dec: 90 - (phi * 180 / Math.PI),
                magnitude: 3 + Math.random() * 2.5  // Magnitudes between 3 and 5.5
            };
        }),

        // Milky Way disk stars (concentrated near galactic plane)
        ...Array.from({ length: 300 }, (_, i) => {
            // Galactic plane is tilted ~63° to celestial equator
            // Center at RA ~266°, Dec ~-29°
            const galacticCenter = { ra: 266, dec: -29 };
            const galacticTilt = 63 * Math.PI / 180;
            
            // Generate position in galactic coordinates
            const r = Math.random() * Math.random() * 60; // Concentrated towards center
            const theta = Math.random() * 2 * Math.PI;
            const height = Math.random() * Math.random() * 10 * (Math.random() < 0.5 ? 1 : -1); // Thin disk

            // Convert to celestial coordinates (approximate conversion)
            const x = r * Math.cos(theta);
            const y = r * Math.sin(theta);
            const z = height;

            // Rotate by galactic tilt and translate
            const dec = galacticCenter.dec + (x * Math.sin(galacticTilt) + z * Math.cos(galacticTilt));
            const ra = (galacticCenter.ra + (y / Math.cos(dec * Math.PI / 180)) + 360) % 360;

            return {
                ra: ra,
                dec: Math.max(-90, Math.min(90, dec)),
                magnitude: 4 + Math.random() * Math.random() * 2  // Mostly dimmer stars, some brighter
            };
        }),

        // Galaxy clusters
        // M31 (Andromeda Galaxy) - large nearby spiral
        ...Array.from({ length: 100 }, (_, i) => {
            const baseRa = 10.7;  // Andromeda center
            const baseDec = 41.3;
            const r = Math.random() * Math.random() * 0.5; // Concentrated within 0.5 degrees
            const theta = Math.random() * 2 * Math.PI;
            return {
                ra: baseRa + r * Math.cos(theta),
                dec: baseDec + r * Math.sin(theta),
                magnitude: 6 + Math.random() * 1.5  // Very dim stars
            };
        }),

        // M87 (Virgo Cluster core) - elliptical galaxy
        ...Array.from({ length: 50 }, (_, i) => {
            const baseRa = 187.7;
            const baseDec = 12.4;
            const r = Math.random() * Math.random() * 0.2; // More compact
            const theta = Math.random() * 2 * Math.PI;
            return {
                ra: baseRa + r * Math.cos(theta),
                dec: baseDec + r * Math.sin(theta),
                magnitude: 7 + Math.random()  // Even dimmer
            };
        }),

        // M13 (Hercules Globular Cluster) - dense star cluster
        ...Array.from({ length: 75 }, (_, i) => {
            const baseRa = 250.4;
            const baseDec = 36.5;
            const r = Math.random() * Math.random() * Math.random() * 0.15; // Very concentrated
            const theta = Math.random() * 2 * Math.PI;
            return {
                ra: baseRa + r * Math.cos(theta),
                dec: baseDec + r * Math.sin(theta),
                magnitude: 6.5 + Math.random() * 1.0  // Mix of brightnesses
            };
        }),

        // Pleiades (M45) - open cluster
        ...Array.from({ length: 40 }, (_, i) => {
            const baseRa = 56.7;
            const baseDec = 24.1;
            const r = Math.random() * 0.8; // More spread out
            const theta = Math.random() * 2 * Math.PI;
            return {
                ra: baseRa + r * Math.cos(theta),
                dec: baseDec + r * Math.sin(theta),
                magnitude: 5 + Math.random() * 2  // Mix of bright and dim
            };
        }),

        // Coma Berenices Cluster - loose open cluster
        ...Array.from({ length: 30 }, (_, i) => {
            const baseRa = 186.0;
            const baseDec = 26.1;
            const r = Math.random() * 1.0; // Very spread out
            const theta = Math.random() * 2 * Math.PI;
            return {
                ra: baseRa + r * Math.cos(theta),
                dec: baseDec + r * Math.sin(theta),
                magnitude: 5.5 + Math.random() * 1.5
            };
        })
    ],

    planets: [
        {
            name: 'Mars',
            ra: 125.4,
            dec: 18.2,
            magnitude: 1.2,
            moons: [
                { orbitRadius: 2.5, orbitPeriod: 7.7, magnitude: 4.5 },
                { orbitRadius: 3.8, orbitPeriod: 30.3, magnitude: 4.8 }
            ]
        },
        {
            name: 'Jupiter',
            ra: 235.6,
            dec: -12.8,
            magnitude: -1.8,
            moons: [
                { orbitRadius: 2.2, orbitPeriod: 1.8, magnitude: 3.8 },
                { orbitRadius: 3.1, orbitPeriod: 3.6, magnitude: 3.9 },
                { orbitRadius: 3.9, orbitPeriod: 7.2, magnitude: 4.0 },
                { orbitRadius: 4.8, orbitPeriod: 16.7, magnitude: 4.1 }
            ]
        },
        {
            name: 'Saturn',
            ra: 298.3,
            dec: -21.4,
            magnitude: 0.5,
            moons: [
                { orbitRadius: 2.4, orbitPeriod: 4.5, magnitude: 4.2 },
                { orbitRadius: 3.3, orbitPeriod: 15.9, magnitude: 4.3 },
                { orbitRadius: 4.2, orbitPeriod: 21.3, magnitude: 4.4 }
            ]
        },
        {
            name: 'Venus',
            ra: 45.7,
            dec: 8.9,
            magnitude: -3.9,
            moons: [] // Venus has no moons
        }
    ]
}; 