// Sky configuration with fixed positions for all celestial objects
const skyConfig = {
    stars: [
        // Bright stars with spectral data
        { ra: 78.6, dec: 45.9, magnitude: 0.5, spectra: { type: 'G0', peaks: [410.2, 434.0, 486.1, 656.3, 587.6], intensities: [0.6, 0.8, 0.9, 1.0, 0.7] } },  // Capella
        { ra: 116.3, dec: 28.0, magnitude: 1.0, spectra: { type: 'K0', peaks: [393.4, 396.8, 486.1, 656.3, 516.7], intensities: [0.9, 0.85, 0.7, 0.9, 0.8] } }, // Pollux
        { ra: 114.8, dec: 5.2, magnitude: 0.4, spectra: { type: 'F5', peaks: [410.2, 434.0, 486.1, 656.3, 434.0], intensities: [0.7, 0.9, 0.9, 0.95, 0.85] } },  // Procyon
        { ra: 95.9, dec: -52.7, magnitude: 0.4, spectra: { type: 'F0', peaks: [434.0, 486.1, 656.3, 410.2, 397.0], intensities: [0.95, 1.0, 0.9, 0.85, 0.8] } }, // Canopus
        { ra: 101.3, dec: -16.7, magnitude: 0.5, spectra: { type: 'A1', peaks: [393.4, 396.8, 434.0, 486.1, 656.3], intensities: [1.0, 0.95, 0.9, 0.95, 0.85] } },// Sirius
        { ra: 88.8, dec: 7.4, magnitude: 0.9, spectra: { type: 'M2', peaks: [393.4, 396.8, 422.7, 430.8, 516.7], intensities: [0.5, 0.6, 0.8, 1.0, 0.9] } },   // Betelgeuse
        { ra: 279.2, dec: 38.8, magnitude: 0.1, spectra: { type: 'A0', peaks: [397.0, 410.2, 434.0, 486.1, 656.3], intensities: [1.0, 0.95, 0.9, 1.0, 0.8] } }, // Vega
        { ra: 297.7, dec: 8.9, magnitude: 0.8, spectra: { type: 'A7', peaks: [393.4, 396.8, 434.0, 486.1, 656.3], intensities: [0.9, 0.85, 0.9, 0.85, 0.85] } }, // Altair
        { ra: 310.4, dec: 45.3, magnitude: 0.7, spectra: { type: 'A2', peaks: [393.4, 396.8, 434.0, 486.1, 656.3], intensities: [0.95, 0.9, 0.95, 0.8, 0.8] } }, // Deneb
        
        // Medium brightness field stars
        { ra: 45.6, dec: 24.1, magnitude: 2.1, spectra: { type: 'G5', peaks: [
            393.4, 396.8, 410.2, 434.0, 447.1, 471.3, 486.1, 492.2,
            501.6, 515.3, 541.2, 588.9, 656.3, 670.8, 706.5
        ], intensities: [
            0.95, 0.92, 0.80, 0.85, 0.88, 0.90, 0.82, 0.95,
            0.90, 0.85, 0.88, 0.95, 0.80, 0.85, 0.82
        ] } },
        { ra: 89.9, dec: -1.9, magnitude: 2.3, spectra: { type: 'K2', peaks: [
            393.4, 396.8, 410.2, 434.0, 447.1, 471.3, 486.1, 492.2,
            501.6, 515.3, 541.2, 588.9, 656.3, 670.8, 706.5
        ], intensities: [
            1.00, 0.98, 0.75, 0.70, 0.92, 0.95, 0.78, 0.98,
            0.95, 0.90, 0.92, 0.98, 0.75, 0.88, 0.85
        ] } },
        { ra: 123.4, dec: 12.8, magnitude: 2.2, spectra: { type: 'F8', peaks: [
            393.4, 396.8, 410.2, 434.0, 447.1, 471.3, 486.1, 492.2,
            501.6, 515.3, 541.2, 588.9, 656.3, 670.8, 706.5
        ], intensities: [
            0.80, 0.78, 0.85, 0.90, 0.75, 0.82, 0.88, 0.90,
            0.85, 0.80, 0.78, 0.92, 0.85, 0.80, 0.75
        ] } },
        { ra: 156.7, dec: -8.4, magnitude: 2.4, spectra: { type: 'G2', peaks: [
            393.4, 396.8, 410.2, 434.0, 447.1, 471.3, 486.1, 492.2,
            501.6, 515.3, 541.2, 588.9, 656.3, 670.8, 706.5
        ], intensities: [
            0.95, 0.92, 0.80, 0.85, 0.88, 0.90, 0.82, 0.95,
            0.90, 0.85, 0.88, 0.95, 0.80, 0.85, 0.82
        ] } },
        { ra: 187.2, dec: 15.6, magnitude: 2.1, spectra: { type: 'K5', peaks: [
            393.4, 396.8, 410.2, 434.0, 447.1, 471.3, 486.1, 492.2,
            501.6, 515.3, 541.2, 588.9, 656.3, 670.8, 706.5
        ], intensities: [
            1.00, 0.98, 0.75, 0.70, 0.92, 0.95, 0.78, 0.98,
            0.95, 0.90, 0.92, 0.98, 0.75, 0.88, 0.85
        ] } },
        { ra: 205.4, dec: -12.9, magnitude: 2.3, spectra: { type: 'M0', peaks: [
            393.4, 396.8, 410.2, 434.0, 447.1, 471.3, 486.1, 492.2,
            501.6, 515.3, 541.2, 588.9, 656.3, 670.8, 706.5
        ], intensities: [
            0.95, 0.92, 0.70, 0.65, 0.95, 0.98, 0.72, 1.00,
            0.98, 0.95, 0.96, 1.00, 0.70, 0.90, 0.88
        ] } },
        { ra: 234.8, dec: 28.7, magnitude: 2.2, spectra: { type: 'G8', peaks: [
            393.4, 396.8, 410.2, 434.0, 447.1, 471.3, 486.1, 492.2,
            501.6, 515.3, 541.2, 588.9, 656.3, 670.8, 706.5
        ], intensities: [
            0.95, 0.92, 0.80, 0.85, 0.88, 0.90, 0.82, 0.95,
            0.90, 0.85, 0.88, 0.95, 0.80, 0.85, 0.82
        ] } },
        { ra: 267.1, dec: -5.6, magnitude: 2.4, spectra: { type: 'K3', peaks: [
            393.4, 396.8, 410.2, 434.0, 447.1, 471.3, 486.1, 492.2,
            501.6, 515.3, 541.2, 588.9, 656.3, 670.8, 706.5
        ], intensities: [
            1.00, 0.98, 0.75, 0.70, 0.92, 0.95, 0.78, 0.98,
            0.95, 0.90, 0.92, 0.98, 0.75, 0.88, 0.85
        ] } },
        { ra: 289.5, dec: 18.3, magnitude: 2.1, spectra: { type: 'F2', peaks: [
            393.4, 396.8, 410.2, 434.0, 447.1, 471.3, 486.1, 492.2,
            501.6, 515.3, 541.2, 588.9, 656.3, 670.8, 706.5
        ], intensities: [
            0.80, 0.78, 0.85, 0.90, 0.75, 0.82, 0.88, 0.90,
            0.85, 0.80, 0.78, 0.92, 0.85, 0.80, 0.75
        ] } },
        { ra: 312.8, dec: -9.2, magnitude: 2.3, spectra: { type: 'A5', peaks: [
            393.4, 396.8, 410.2, 434.0, 447.1, 471.3, 486.1, 492.2,
            501.6, 515.3, 541.2, 588.9, 656.3, 670.8, 706.5
        ], intensities: [
            0.85, 0.82, 0.88, 1.00, 0.80, 0.75, 0.95, 0.78,
            0.80, 0.72, 0.70, 0.85, 0.90, 0.70, 0.65
        ] } },
        { ra: 345.2, dec: 22.5, magnitude: 2.2, spectra: { type: 'G0', peaks: [
            393.4, 396.8, 410.2, 434.0, 447.1, 471.3, 486.1, 492.2,
            501.6, 515.3, 541.2, 588.9, 656.3, 670.8, 706.5
        ], intensities: [
            0.95, 0.92, 0.80, 0.85, 0.88, 0.90, 0.82, 0.95,
            0.90, 0.85, 0.88, 0.95, 0.80, 0.85, 0.82
        ] } },

        // Field stars with improved distribution
        ...Array.from({ length: 200 }, (_, i) => {
            const phi = Math.acos(2 * Math.random() - 1);
            const theta = Math.random() * 2 * Math.PI;
            
            // Randomly assign spectral type and corresponding features
            const types = ['O', 'B', 'A', 'F', 'G', 'K', 'M'];
            const typeIdx = Math.floor(Math.random() * types.length);
            const type = types[typeIdx];
            
            // Define spectral features based on type
            let peaks, intensities;
            switch(type) {
                case 'O':  // Hot blue stars - strong helium lines, weak hydrogen
                    peaks = [
                        393.4, 396.8, 410.2, 434.0, 447.1, 471.3, 486.1, 492.2, 
                        501.6, 515.3, 541.2, 588.9, 656.3, 670.8, 706.5
                    ];
                    intensities = [
                        0.95, 0.92, 0.88, 0.85, 0.90, 0.82, 0.75, 0.88,
                        0.92, 0.85, 0.78, 0.72, 0.65, 0.70, 0.68
                    ];
                    break;
                case 'B':  // Very hot stars - strong hydrogen, some helium
                    peaks = [
                        393.4, 396.8, 410.2, 434.0, 447.1, 471.3, 486.1, 492.2,
                        501.6, 515.3, 541.2, 588.9, 656.3, 670.8, 706.5
                    ];
                    intensities = [
                        0.90, 0.88, 0.92, 0.95, 0.85, 0.80, 0.88, 0.82,
                        0.85, 0.78, 0.75, 0.70, 0.82, 0.75, 0.72
                    ];
                    break;
                case 'A':  // Hot stars - strongest hydrogen lines
                    peaks = [
                        393.4, 396.8, 410.2, 434.0, 447.1, 471.3, 486.1, 492.2,
                        501.6, 515.3, 541.2, 588.9, 656.3, 670.8, 706.5
                    ];
                    intensities = [
                        0.85, 0.82, 0.88, 1.00, 0.80, 0.75, 0.95, 0.78,
                        0.80, 0.72, 0.70, 0.85, 0.90, 0.70, 0.65
                    ];
                    break;
                case 'F':  // Warm stars - strong hydrogen, increasing metals
                    peaks = [
                        393.4, 396.8, 410.2, 434.0, 447.1, 471.3, 486.1, 492.2,
                        501.6, 515.3, 541.2, 588.9, 656.3, 670.8, 706.5
                    ];
                    intensities = [
                        0.80, 0.78, 0.85, 0.90, 0.75, 0.82, 0.88, 0.90,
                        0.85, 0.80, 0.78, 0.92, 0.85, 0.80, 0.75
                    ];
                    break;
                case 'G':  // Solar type - mix of metals and hydrogen
                    peaks = [
                        393.4, 396.8, 410.2, 434.0, 447.1, 471.3, 486.1, 492.2,
                        501.6, 515.3, 541.2, 588.9, 656.3, 670.8, 706.5
                    ];
                    intensities = [
                        0.95, 0.92, 0.80, 0.85, 0.88, 0.90, 0.82, 0.95,
                        0.90, 0.85, 0.88, 0.95, 0.80, 0.85, 0.82
                    ];
                    break;
                case 'K':  // Cool stars - strong metal lines
                    peaks = [
                        393.4, 396.8, 410.2, 434.0, 447.1, 471.3, 486.1, 492.2,
                        501.6, 515.3, 541.2, 588.9, 656.3, 670.8, 706.5
                    ];
                    intensities = [
                        1.00, 0.98, 0.75, 0.70, 0.92, 0.95, 0.78, 0.98,
                        0.95, 0.90, 0.92, 0.98, 0.75, 0.88, 0.85
                    ];
                    break;
                case 'M':  // Very cool stars - molecular bands, strong metals
                    peaks = [
                        393.4, 396.8, 410.2, 434.0, 447.1, 471.3, 486.1, 492.2,
                        501.6, 515.3, 541.2, 588.9, 656.3, 670.8, 706.5
                    ];
                    intensities = [
                        0.95, 0.92, 0.70, 0.65, 0.95, 0.98, 0.72, 1.00,
                        0.98, 0.95, 0.96, 1.00, 0.70, 0.90, 0.88
                    ];
                    break;
            }

            // Add some random variation to make each star slightly unique
            intensities = intensities.map(i => i * (0.9 + Math.random() * 0.2));

            return {
                ra: (theta * 180 / Math.PI + 360) % 360,
                dec: 90 - (phi * 180 / Math.PI),
                magnitude: 3 + Math.random() * 2.5,
                spectra: {
                    type: type + Math.floor(Math.random() * 10),
                    peaks: peaks,
                    intensities: intensities
                }
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
            spectra: { 
                type: 'Reflected',
                peaks: [
                    438.5, 447.1, 486.1, 515.3, 526.5, 532.8, 553.5, 
                    588.9, 600.0, 619.7, 634.0, 656.3, 670.8
                ],
                intensities: [
                    0.6, 0.65, 0.7, 0.85, 0.9, 0.95, 0.88,
                    0.82, 0.8, 0.75, 0.7, 0.9, 0.85
                ],
                features: ['CO2', 'Fe2O3', 'H2O', 'O2']
            },
            moons: [
                { 
                    orbitRadius: 2.5, 
                    orbitPeriod: 7.7, 
                    magnitude: 4.5,
                    spectra: {
                        type: 'Reflected',
                        peaks: [438.5, 447.1, 486.1, 515.3, 526.5, 532.8, 553.5, 
                               588.9, 600.0, 619.7, 634.0, 656.3, 670.8],
                        intensities: [0.5, 0.55, 0.6, 0.7, 0.75, 0.8, 0.75,
                                    0.7, 0.65, 0.6, 0.55, 0.7, 0.65],
                        features: ['Fe2O3', 'SiO2']
                    }
                },
                { 
                    orbitRadius: 3.8, 
                    orbitPeriod: 30.3, 
                    magnitude: 4.8,
                    spectra: {
                        type: 'Reflected',
                        peaks: [438.5, 447.1, 486.1, 515.3, 526.5, 532.8, 553.5, 
                               588.9, 600.0, 619.7, 634.0, 656.3, 670.8],
                        intensities: [0.45, 0.5, 0.55, 0.65, 0.7, 0.75, 0.7,
                                    0.65, 0.6, 0.55, 0.5, 0.65, 0.6],
                        features: ['Fe2O3', 'SiO2']
                    }
                }
            ]
        },
        {
            name: 'Jupiter',
            ra: 235.6,
            dec: -12.8,
            magnitude: -1.8,
            spectra: {
                type: 'Reflected',
                peaks: [
                    438.5, 447.1, 486.1, 515.3, 543.5, 576.9, 588.9,
                    619.7, 634.0, 656.3, 667.8, 686.7, 706.5
                ],
                intensities: [
                    0.7, 0.75, 0.8, 0.85, 1.0, 0.95, 0.9,
                    0.92, 0.88, 0.85, 0.8, 0.75, 0.7
                ],
                features: ['CH4', 'NH3', 'H2', 'He', 'C2H2']
            },
            moons: [
                { 
                    orbitRadius: 2.2, 
                    orbitPeriod: 1.8, 
                    magnitude: 3.8,
                    spectra: {
                        type: 'Reflected',
                        peaks: [438.5, 447.1, 486.1, 515.3, 526.5, 532.8, 553.5, 
                               588.9, 600.0, 619.7, 634.0, 656.3, 670.8],
                        intensities: [0.6, 0.65, 0.7, 0.8, 0.85, 0.9, 0.85,
                                    0.8, 0.75, 0.7, 0.65, 0.8, 0.75],
                        features: ['H2O', 'SiO2']
                    }
                },
                { 
                    orbitRadius: 3.1, 
                    orbitPeriod: 3.6, 
                    magnitude: 3.9,
                    spectra: {
                        type: 'Reflected',
                        peaks: [438.5, 447.1, 486.1, 515.3, 526.5, 532.8, 553.5, 
                               588.9, 600.0, 619.7, 634.0, 656.3, 670.8],
                        intensities: [0.55, 0.6, 0.65, 0.75, 0.8, 0.85, 0.8,
                                    0.75, 0.7, 0.65, 0.6, 0.75, 0.7],
                        features: ['H2O', 'SO2']
                    }
                },
                { 
                    orbitRadius: 3.9, 
                    orbitPeriod: 7.2, 
                    magnitude: 4.0,
                    spectra: {
                        type: 'Reflected',
                        peaks: [438.5, 447.1, 486.1, 515.3, 526.5, 532.8, 553.5, 
                               588.9, 600.0, 619.7, 634.0, 656.3, 670.8],
                        intensities: [0.5, 0.55, 0.6, 0.7, 0.75, 0.8, 0.75,
                                    0.7, 0.65, 0.6, 0.55, 0.7, 0.65],
                        features: ['H2O', 'CO2']
                    }
                },
                { 
                    orbitRadius: 4.8, 
                    orbitPeriod: 16.7, 
                    magnitude: 4.1,
                    spectra: {
                        type: 'Reflected',
                        peaks: [438.5, 447.1, 486.1, 515.3, 526.5, 532.8, 553.5, 
                               588.9, 600.0, 619.7, 634.0, 656.3, 670.8],
                        intensities: [0.45, 0.5, 0.55, 0.65, 0.7, 0.75, 0.7,
                                    0.65, 0.6, 0.55, 0.5, 0.65, 0.6],
                        features: ['H2O', 'CH4']
                    }
                }
            ]
        },
        {
            name: 'Saturn',
            ra: 298.3,
            dec: -21.4,
            magnitude: 0.5,
            spectra: {
                type: 'Reflected',
                peaks: [
                    438.5, 447.1, 486.1, 515.3, 543.5, 576.9, 580.0,
                    619.7, 634.0, 656.3, 667.8, 686.7, 706.5
                ],
                intensities: [
                    0.75, 0.8, 0.85, 0.9, 0.95, 0.98, 1.0,
                    0.95, 0.9, 0.85, 0.8, 0.75, 0.7
                ],
                features: ['CH4', 'NH3', 'C2H6', 'H2', 'He']
            },
            moons: [
                { 
                    orbitRadius: 2.4, 
                    orbitPeriod: 4.5, 
                    magnitude: 4.2,
                    spectra: {
                        type: 'Reflected',
                        peaks: [438.5, 447.1, 486.1, 515.3, 526.5, 532.8, 553.5, 
                               588.9, 600.0, 619.7, 634.0, 656.3, 670.8],
                        intensities: [0.55, 0.6, 0.65, 0.75, 0.8, 0.85, 0.8,
                                    0.75, 0.7, 0.65, 0.6, 0.75, 0.7],
                        features: ['H2O', 'CH4']
                    }
                },
                { 
                    orbitRadius: 3.3, 
                    orbitPeriod: 15.9, 
                    magnitude: 4.3,
                    spectra: {
                        type: 'Reflected',
                        peaks: [438.5, 447.1, 486.1, 515.3, 526.5, 532.8, 553.5, 
                               588.9, 600.0, 619.7, 634.0, 656.3, 670.8],
                        intensities: [0.5, 0.55, 0.6, 0.7, 0.75, 0.8, 0.75,
                                    0.7, 0.65, 0.6, 0.55, 0.7, 0.65],
                        features: ['H2O', 'NH3']
                    }
                },
                { 
                    orbitRadius: 4.2, 
                    orbitPeriod: 21.3, 
                    magnitude: 4.4,
                    spectra: {
                        type: 'Reflected',
                        peaks: [438.5, 447.1, 486.1, 515.3, 526.5, 532.8, 553.5, 
                               588.9, 600.0, 619.7, 634.0, 656.3, 670.8],
                        intensities: [0.45, 0.5, 0.55, 0.65, 0.7, 0.75, 0.7,
                                    0.65, 0.6, 0.55, 0.5, 0.65, 0.6],
                        features: ['H2O', 'CO2']
                    }
                }
            ]
        },
        {
            name: 'Venus',
            ra: 45.7,
            dec: 8.9,
            magnitude: -3.9,
            spectra: {
                type: 'Reflected',
                peaks: [
                    438.5, 447.1, 486.1, 515.3, 520.0, 543.5, 567.0,
                    588.9, 619.7, 634.0, 656.3, 667.8, 686.7
                ],
                intensities: [
                    0.9, 0.85, 0.9, 0.95, 0.85, 0.9, 0.95,
                    1.0, 0.95, 0.9, 0.95, 0.9, 0.85
                ],
                features: ['CO2', 'SO2', 'H2SO4', 'CO', 'HCl']
            },
            moons: [] // Venus has no moons
        }
    ]
}; 