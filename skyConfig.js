// Real star catalog data from Yale Bright Star Catalog (BSC5)
// Contains ~9000 stars with accurate positions, magnitudes, and spectral types
const skyConfig = {
    stars: [
        { ra: 1.2913, dec: 45.2292, magnitude: 6.7, spectralType: 'A' },
        { ra: 1.2658, dec: -0.5031, magnitude: 6.29, spectralType: 'G' },
        { ra: 1.3337, dec: -5.7075, magnitude: 4.61, spectralType: 'K' },  // 33 Psc
        { ra: 1.425, dec: 13.3961, magnitude: 5.51, spectralType: 'G' },  // 86 Peg
        { ra: 1.5667, dec: 58.4367, magnitude: 5.96, spectralType: 'G' },
        { ra: 1.5792, dec: -49.075, magnitude: 5.7, spectralType: 'G' },
        { ra: 1.6104, dec: 64.1961, magnitude: 5.59, spectralType: 'B' },  // 10 Cas
        { ra: 1.6533, dec: 29.0214, magnitude: 6.13, spectralType: 'K' },
        { ra: 1.7087, dec: -23.1075, magnitude: 6.18, spectralType: 'A' },
        { ra: 1.8258, dec: -17.3864, magnitude: 6.19, spectralType: 'A' },
        { ra: 1.9338, dec: -2.5489, magnitude: 6.43, spectralType: 'B' },
        { ra: 1.945, dec: -22.5089, magnitude: 5.94, spectralType: 'A' },
        { ra: 2.0146, dec: -33.5294, magnitude: 5.68, spectralType: 'K' },
        { ra: 2.0504, dec: -2.4478, magnitude: 6.07, spectralType: 'K' },
        { ra: 2.0971, dec: 29.0906, magnitude: 2.06, spectralType: 'B' },  // 21Alp And
        { ra: 2.0725, dec: -8.8239, magnitude: 5.99, spectralType: 'G' },
        { ra: 2.1708, dec: 36.6267, magnitude: 6.19, spectralType: 'F' },
        { ra: 2.1392, dec: -17.5775, magnitude: 6.06, spectralType: 'M' },
        { ra: 2.2175, dec: 25.4628, magnitude: 6.23, spectralType: 'K' },
        { ra: 2.3342, dec: 79.7147, magnitude: 6.01, spectralType: 'A' },
        { ra: 2.2946, dec: 59.1497, magnitude: 2.27, spectralType: 'F' },  // 11Bet Cas
        { ra: 2.26, dec: 18.2119, magnitude: 5.53, spectralType: 'G' },  // 87 Peg
        { ra: 2.26, dec: -54.0019, magnitude: 6.33, spectralType: 'G' },
        { ra: 2.3375, dec: -27.9878, magnitude: 5.42, spectralType: 'F' },  // Kap1Scl
        { ra: 2.3529, dec: -45.7475, magnitude: 3.88, spectralType: 'K' },  // Eps Phe
        { ra: 2.5096, dec: 11.1456, magnitude: 5.51, spectralType: 'B' },  // 34 Psc
        { ra: 2.5804, dec: 46.0722, magnitude: 5.03, spectralType: 'F' },  // 22 And
        { ra: 2.6237, dec: 57.1656, magnitude: 6.74, spectralType: 'B' },
        { ra: 2.5783, dec: -5.2486, magnitude: 5.84, spectralType: 'K' },
        { ra: 2.5087, dec: -82.2239, magnitude: 5.28, spectralType: 'G' },  // Gam3Oct
        { ra: 2.6783, dec: -12.58, magnitude: 5.85, spectralType: 'K' },
        { ra: 2.6608, dec: -73.2244, magnitude: 6.64, spectralType: 'F' },
        { ra: 2.8163, dec: -15.4681, magnitude: 4.89, spectralType: 'F' },  // 6 Cet
        { ra: 2.8933, dec: -27.7997, magnitude: 5.41, spectralType: 'K' },  // Kap2Scl
        { ra: 2.9333, dec: -35.1331, magnitude: 5.25, spectralType: 'F' },  // The Scl
        { ra: 2.9962, dec: 48.1525, magnitude: 6.16, spectralType: 'K' },
        { ra: 3.0417, dec: -17.9383, magnitude: 5.25, spectralType: 'K' },
        { ra: 3.21, dec: 37.6933, magnitude: 6.73, spectralType: 'B' },
        { ra: 3.3092, dec: 15.1836, magnitude: 2.83, spectralType: 'B' },  // 88Gam Peg
        { ra: 3.35, dec: 26.9872, magnitude: 6.3, spectralType: 'G' },
        { ra: 3.3783, dec: 41.0353, magnitude: 5.72, spectralType: 'F' },  // 23 And
        { ra: 3.4254, dec: -26.0219, magnitude: 5.94, spectralType: 'K' },
        { ra: 3.4342, dec: -26.2847, magnitude: 6.31, spectralType: 'K' },
        { ra: 3.5096, dec: 33.2061, magnitude: 6.25, spectralType: 'A' },
        { ra: 3.6508, dec: 20.2067, magnitude: 4.8, spectralType: 'M' },  // 89Chi Peg
        { ra: 3.615, dec: -7.7806, magnitude: 5.12, spectralType: 'M' },
        { ra: 3.3308, dec: -84.9942, magnitude: 5.77, spectralType: 'M' },
        { ra: 3.66, dec: -18.9328, magnitude: 4.44, spectralType: 'M' },  // 7 Cet
        { ra: 3.7338, dec: 22.2842, magnitude: 6.24, spectralType: 'A' },
        { ra: 3.745, dec: 8.8208, magnitude: 5.79, spectralType: 'F' },  // 35 Psc
        { ra: 3.7271, dec: -9.5697, magnitude: 5.75, spectralType: 'B' },
        { ra: 3.7792, dec: 31.5358, magnitude: 6.45, spectralType: 'K' },
        { ra: 3.7942, dec: 27.2831, magnitude: 6.35, spectralType: 'A' },
        { ra: 3.7425, dec: -34.9044, magnitude: 6.17, spectralType: 'K' },
        { ra: 4.0583, dec: 76.9508, magnitude: 6.35, spectralType: 'B' },
        { ra: 4.09, dec: 43.5947, magnitude: 6.15, spectralType: 'A' },
        { ra: 4.0371, dec: -31.4464, magnitude: 5.67, spectralType: 'K' },
        { ra: 3.98, dec: -75.9114, magnitude: 6.49, spectralType: 'G' },
        { ra: 4.1421, dec: 8.24, magnitude: 6.11, spectralType: 'G' },  // 36 Psc
        { ra: 4.2379, dec: 61.5333, magnitude: 5.74, spectralType: 'G' },
        { ra: 4.1771, dec: -20.2106, magnitude: 6.47, spectralType: 'B' },
        { ra: 4.2879, dec: 47.9475, magnitude: 5.89, spectralType: 'B' },
        { ra: 4.2729, dec: 38.6817, magnitude: 4.61, spectralType: 'A' },  // 24The And
        { ra: 4.2042, dec: -78.7806, magnitude: 6.77, spectralType: 'F' },
        { ra: 4.4292, dec: 51.4331, magnitude: 6.14, spectralType: 'O' },
        { ra: 4.3858, dec: -19.0511, magnitude: 6.45, spectralType: 'F' },
        { ra: 4.4487, dec: 1.6889, magnitude: 6.17, spectralType: 'K' },
        { ra: 4.5821, dec: 36.7853, magnitude: 4.52, spectralType: 'A' },  // 25Sig And
        { ra: 4.5717, dec: 11.2058, magnitude: 6.05, spectralType: 'K' },
        { ra: 4.6754, dec: 43.7911, magnitude: 6.11, spectralType: 'B' },  // 26 And
        { ra: 4.6596, dec: 31.5172, magnitude: 5.87, spectralType: 'A' },
        { ra: 4.6742, dec: -8.0528, magnitude: 6.46, spectralType: 'G' },
        { ra: 4.6775, dec: -43.2353, magnitude: 6.33, spectralType: 'K' },
        { ra: 4.8571, dec: -8.8239, magnitude: 3.56, spectralType: 'K' },  // 8Iot Cet
        { ra: 4.9233, dec: 40.7297, magnitude: 6.33, spectralType: 'K' },
        { ra: 5.0217, dec: 48.8653, magnitude: 6.52, spectralType: 'A' },
        { ra: 5.0179, dec: -64.8747, magnitude: 4.23, spectralType: 'F' },  // Zet Tuc
        { ra: 5.1017, dec: 30.9358, magnitude: 5.9, spectralType: 'B' },
        { ra: 5.1896, dec: 32.9114, magnitude: 5.79, spectralType: 'K' },
        { ra: 5.1496, dec: 8.1903, magnitude: 5.37, spectralType: 'K' },  // 41 Psc
        { ra: 5.2271, dec: 10.9769, magnitude: 6.56, spectralType: 'A' },
        { ra: 5.2804, dec: 37.9686, magnitude: 5.18, spectralType: 'F' },  // 27Rho And
        { ra: 5.1625, dec: -69.625, magnitude: 5.51, spectralType: 'B' },  // Pi Tuc
        { ra: 5.38, dec: -28.9817, magnitude: 5.18, spectralType: 'G' },  // Iot Scl
        { ra: 5.4429, dec: -20.0578, magnitude: 5.12, spectralType: 'M' },
        { ra: 5.6062, dec: 13.4825, magnitude: 6.23, spectralType: 'K' },  // 42 Psc
        { ra: 5.3692, dec: -77.4269, magnitude: 5.97, spectralType: 'K' },
        { ra: 5.7158, dec: -12.2094, magnitude: 6.39, spectralType: 'G' },  // 9 Cet
        { ra: 5.8025, dec: -31.0361, magnitude: 6.55, spectralType: 'B' },
        { ra: 6.0083, dec: 38.5772, magnitude: 7.39, spectralType: 'G' },
        { ra: 6.065, dec: 52.02, magnitude: 5.57, spectralType: 'B' },
        { ra: 6.1979, dec: 61.8311, magnitude: 5.4, spectralType: 'B' },  // 12 Cas
        { ra: 6.1238, dec: -2.2192, magnitude: 6.07, spectralType: 'K' },
        { ra: 6.2767, dec: 53.0469, magnitude: 5.74, spectralType: 'B' },
        { ra: 6.3508, dec: 1.9397, magnitude: 5.77, spectralType: 'G' },  // 44 Psc
        { ra: 6.4379, dec: -77.2542, magnitude: 2.8, spectralType: 'G' },  // Bet Hyi
        { ra: 6.5708, dec: -42.3061, magnitude: 2.39, spectralType: 'K' },  // Alp Phe
        { ra: 6.5508, dec: -43.68, magnitude: 3.94, spectralType: 'A' },  // Kap Phe
        { ra: 6.6558, dec: -0.0497, magnitude: 6.19, spectralType: 'G' },  // 10 Cet
        { ra: 6.8113, dec: -25.5472, magnitude: 5.98, spectralType: 'G' },
        { ra: 7.0121, dec: 17.8931, magnitude: 5.06, spectralType: 'M' },  // 47 Psc
        { ra: 7.0571, dec: 44.3944, magnitude: 5.17, spectralType: 'A' },
        { ra: 6.9821, dec: -33.0072, magnitude: 4.81, spectralType: 'M' },  // Eta Scl
        { ra: 7.0529, dec: 16.445, magnitude: 6.06, spectralType: 'K' },  // 48 Psc
        { ra: 7.0838, dec: 10.1897, magnitude: 6.04, spectralType: 'F' },
        { ra: 7.0879, dec: -20.335, magnitude: 6.43, spectralType: 'G' },
        { ra: 7.11, dec: -39.915, magnitude: 5.43, spectralType: 'M' },
        { ra: 7.2358, dec: 36.9, magnitude: 6.26, spectralType: 'G' },
        { ra: 7.1796, dec: -50.5328, magnitude: 6.26, spectralType: 'K' },
        { ra: 7.7292, dec: 77.0194, magnitude: 6.21, spectralType: 'K' },
        { ra: 7.5829, dec: 59.9772, magnitude: 5.94, spectralType: 'B' },
        { ra: 7.5304, dec: 29.7517, magnitude: 5.23, spectralType: 'A' },  // 28 And
        { ra: 7.4663, dec: -14.8642, magnitude: 6.14, spectralType: 'F' },
        { ra: 7.4538, dec: -32.1167, magnitude: 6.57, spectralType: 'K' },
        { ra: 7.51, dec: -3.9572, magnitude: 5.72, spectralType: 'M' },  // 12 Cet
        { ra: 7.5946, dec: -23.7878, magnitude: 5.19, spectralType: 'A' },
        { ra: 7.6158, dec: -40.9394, magnitude: 6.19, spectralType: 'F' },
        { ra: 7.6087, dec: -48.215, magnitude: 5.69, spectralType: 'F' },
        { ra: 7.8554, dec: 66.5194, magnitude: 6.18, spectralType: 'B' },  // 13 Cas
        { ra: 7.8567, dec: 33.5817, magnitude: 5.87, spectralType: 'K' },
        { ra: 7.9433, dec: 54.5222, magnitude: 4.73, spectralType: 'B' },  // 14Lam Cas
        { ra: 7.9217, dec: 52.8394, magnitude: 5.6, spectralType: 'K' },
        { ra: 7.8542, dec: -48.8036, magnitude: 4.77, spectralType: 'A' },  // Lam1Phe
        { ra: 7.8863, dec: -62.9581, magnitude: 4.37, spectralType: 'B' },  // Bet1Tuc
        { ra: 7.89, dec: -62.9658, magnitude: 4.54, spectralType: 'A' },  // Bet2Tuc
        { ra: 8.1117, dec: 43.4947, magnitude: 6.7, spectralType: 'A' },
        { ra: 8.3304, dec: 70.9817, magnitude: 6.42, spectralType: 'A' },
        { ra: 8.25, dec: 62.9317, magnitude: 4.16, spectralType: 'B' },  // 15Kap Cas
        { ra: 8.1479, dec: 20.2944, magnitude: 5.38, spectralType: 'K' },  // 52 Psc
        { ra: 8.0992, dec: 6.9556, magnitude: 5.67, spectralType: 'B' },  // 51 Psc
        { ra: 8.1438, dec: 27.5806, magnitude: 6.67, spectralType: 'A' },
        { ra: 8.2046, dec: 28.2803, magnitude: 6.3, spectralType: 'K' },
        { ra: 8.2933, dec: 54.895, magnitude: 5.93, spectralType: 'K' },
        { ra: 8.1825, dec: -63.0311, magnitude: 5.09, spectralType: 'A' },  // Bet3Tuc
        { ra: 8.6037, dec: 66.7503, magnitude: 6.48, spectralType: 'B' },  // 16 Cas
        { ra: 8.4213, dec: -29.5583, magnitude: 5.55, spectralType: 'K' },
        { ra: 8.3471, dec: -71.2661, magnitude: 6.13, spectralType: 'A' },  // The Tuc
        { ra: 8.6158, dec: -52.3731, magnitude: 5.57, spectralType: 'F' },
        { ra: 8.7304, dec: 13.3711, magnitude: 6.4, spectralType: 'K' },
        { ra: 8.8121, dec: -3.5928, magnitude: 5.2, spectralType: 'F' },  // 13 Cet
        { ra: 8.8867, dec: -0.5056, magnitude: 5.93, spectralType: 'F' },  // 14 Cet
        { ra: 9.0346, dec: 54.1686, magnitude: 5.08, spectralType: 'B' },
        { ra: 8.9779, dec: 13.2067, magnitude: 6.41, spectralType: 'F' },
        { ra: 9.1137, dec: 60.3261, magnitude: 5.79, spectralType: 'A' },
        { ra: 8.9213, dec: -48.0008, magnitude: 5.51, spectralType: 'F' },  // Lam2Phe
        { ra: 8.8892, dec: -54.8219, magnitude: 6.06, spectralType: 'K' },
        { ra: 9.0833, dec: 27.2547, magnitude: 6.5, spectralType: 'B' },
        { ra: 9.0125, dec: -14.9736, magnitude: 6.45, spectralType: 'G' },
        { ra: 9.0288, dec: -22.8425, magnitude: 6.06, spectralType: 'A' },
        { ra: 9.1942, dec: 44.4886, magnitude: 5.13, spectralType: 'K' },
        { ra: 9.2429, dec: 53.8969, magnitude: 3.66, spectralType: 'B' },  // 17Zet Cas
        { ra: 9.2204, dec: 33.7194, magnitude: 4.36, spectralType: 'B' },  // 29Pi And
        { ra: 9.1971, dec: 15.2317, magnitude: 5.89, spectralType: 'B' },  // 53 Psc
        { ra: 9.28, dec: 24.0142, magnitude: 6.47, spectralType: 'K' },
        { ra: 9.3379, dec: 35.3994, magnitude: 5.48, spectralType: 'G' },
        { ra: 9.9471, dec: 82.4939, magnitude: 6.4, spectralType: 'F' },
        { ra: 9.3363, dec: -24.7672, magnitude: 5.57, spectralType: 'G' },
        { ra: 9.1558, dec: -65.1247, magnitude: 6.42, spectralType: 'K' },
        { ra: 9.3771, dec: 3.1353, magnitude: 6.39, spectralType: 'K' },
        { ra: 9.3254, dec: -54.3942, magnitude: 6.41, spectralType: 'K' },
        { ra: 9.6387, dec: 29.3117, magnitude: 4.37, spectralType: 'G' },  // 30Eps And
        { ra: 9.7913, dec: 49.3544, magnitude: 5.43, spectralType: 'K' },
        { ra: 9.8321, dec: 30.8608, magnitude: 3.27, spectralType: 'K' },  // 31Del And
        { ra: 9.8408, dec: 21.2506, magnitude: 5.87, spectralType: 'K' },  // 54 Psc
        { ra: 9.9817, dec: 21.4383, magnitude: 5.36, spectralType: 'K' },  // 55 Psc
        { ra: 10.1271, dec: 56.5372, magnitude: 2.23, spectralType: 'K' },  // 18Alp Cas
        { ra: 9.67, dec: -73.1372, magnitude: 6.85, spectralType: 'A' },
        { ra: 9.9913, dec: -33.9617, magnitude: 6.69, spectralType: 'F' },
        { ra: 9.9667, dec: -44.7967, magnitude: 6.01, spectralType: 'K' },
        { ra: 10.1192, dec: -16.5169, magnitude: 6.49, spectralType: 'G' },
        { ra: 10.1371, dec: -23.8044, magnitude: 6.14, spectralType: 'G' },
        { ra: 10.1767, dec: -4.3519, magnitude: 5.91, spectralType: 'K' },
        { ra: 10.28, dec: 39.4586, magnitude: 5.33, spectralType: 'G' },  // 32 And
        { ra: 10.11, dec: -59.4544, magnitude: 5.89, spectralType: 'G' },
        { ra: 10.5142, dec: 66.1475, magnitude: 5.83, spectralType: 'G' },
        { ra: 10.4, dec: 24.6292, magnitude: 6.04, spectralType: 'A' },
        { ra: 10.5162, dec: 50.5125, magnitude: 4.8, spectralType: 'B' },  // 19Xi Cas
        { ra: 10.3317, dec: -46.085, magnitude: 4.59, spectralType: 'G' },  // Mu Phe
        { ra: 10.6296, dec: 58.7533, magnitude: 6.17, spectralType: 'B' },
        { ra: 10.4433, dec: -56.5017, magnitude: 5.7, spectralType: 'A' },  // Xi Phe
        { ra: 10.8671, dec: 47.0247, magnitude: 4.94, spectralType: 'A' },  // 20Pi Cas
        { ra: 10.6787, dec: -38.4633, magnitude: 6.06, spectralType: 'A' },  // Lam1Scl
        { ra: 10.6742, dec: -60.2625, magnitude: 5.98, spectralType: 'K' },
        { ra: 10.6183, dec: -65.4681, magnitude: 5.39, spectralType: 'F' },  // Rho Tuc
        { ra: 10.8975, dec: -17.9867, magnitude: 2.04, spectralType: 'G' },  // 16Bet Cet
        { ra: 11.11, dec: 47.8642, magnitude: 5.67, spectralType: 'B' },
        { ra: 10.9592, dec: -12.0117, magnitude: 6.02, spectralType: 'K' },
        { ra: 10.8383, dec: -57.4631, magnitude: 4.36, spectralType: 'A' },  // Eta Phe
        { ra: 11.4125, dec: 74.9881, magnitude: 5.66, spectralType: 'A' },  // 21 Cas
        { ra: 11.1812, dec: 48.2844, magnitude: 4.54, spectralType: 'B' },  // 22Omi Cas
        { ra: 11.0475, dec: -10.6094, magnitude: 4.76, spectralType: 'K' },  // 17Phi1Cet
        { ra: 11.0504, dec: -38.4217, magnitude: 5.9, spectralType: 'K' },  // Lam2Scl
        { ra: 11.3217, dec: 55.2217, magnitude: 5.42, spectralType: 'A' },
        { ra: 11.185, dec: -22.0061, magnitude: 5.24, spectralType: 'F' },
        { ra: 11.2379, dec: -42.6767, magnitude: 5.94, spectralType: 'F' },
        { ra: 11.1346, dec: -62.4978, magnitude: 6.07, spectralType: 'F' },
        { ra: 11.6625, dec: 69.325, magnitude: 6.33, spectralType: 'F' },
        { ra: 11.3504, dec: -4.6292, magnitude: 6.15, spectralType: 'M' },
        { ra: 11.25, dec: -53.715, magnitude: 6.15, spectralType: 'F' },
        { ra: 11.3696, dec: -12.8808, magnitude: 6.15, spectralType: 'G' },  // 18 Cet
        { ra: 11.5629, dec: 55.3053, magnitude: 6.52, spectralType: 'A' },
        { ra: 11.5454, dec: 44.8614, magnitude: 6.05, spectralType: 'B' },
        { ra: 11.4237, dec: -16.4242, magnitude: 6.47, spectralType: 'F' },
        { ra: 11.6767, dec: 59.5744, magnitude: 6.39, spectralType: 'G' },
        { ra: 11.9421, dec: 74.8475, magnitude: 5.41, spectralType: 'B' },  // 23 Cas
        { ra: 11.44, dec: -47.5517, magnitude: 5.8, spectralType: 'G' },
        { ra: 11.5492, dec: -22.5219, magnitude: 5.5, spectralType: 'G' },
        { ra: 11.6375, dec: 15.4756, magnitude: 5.38, spectralType: 'M' },  // 57 Psc
        { ra: 12.0379, dec: 72.675, magnitude: 5.87, spectralType: 'K' },
        { ra: 11.7562, dec: 11.9739, magnitude: 5.5, spectralType: 'G' },  // 58 Psc
        { ra: 11.8067, dec: 19.5789, magnitude: 6.13, spectralType: 'F' },  // 59 Psc
        { ra: 11.8346, dec: 24.2672, magnitude: 4.06, spectralType: 'K' },  // 34Zet And
        { ra: 11.8483, dec: 6.7408, magnitude: 5.99, spectralType: 'G' },  // 60 Psc
        { ra: 11.9783, dec: 20.9253, magnitude: 6.54, spectralType: 'F' },  // 61 Psc
        { ra: 11.9304, dec: -18.0614, magnitude: 5.7, spectralType: 'K' },
        { ra: 12.275, dec: 57.8158, magnitude: 3.44, spectralType: 'F' },  // 24Eta Cas
        { ra: 12.0046, dec: -21.7225, magnitude: 5.57, spectralType: 'B' },
        { ra: 12.0725, dec: 7.3, magnitude: 5.93, spectralType: 'G' },  // 62 Psc
        { ra: 12.0958, dec: 5.2806, magnitude: 5.75, spectralType: 'K' },
        { ra: 12.2088, dec: 50.9683, magnitude: 4.89, spectralType: 'B' },  // 25Nu Cas
        { ra: 12.1708, dec: 7.585, magnitude: 4.43, spectralType: 'K' },  // 63Del Psc
        { ra: 12.2446, dec: 16.9406, magnitude: 5.07, spectralType: 'F' },  // 64 Psc
        { ra: 12.4533, dec: 41.0789, magnitude: 4.53, spectralType: 'B' },  // 35Nu And
        { ra: 12.3567, dec: -13.5614, magnitude: 5.59, spectralType: 'K' },
        { ra: 12.3079, dec: -24.1364, magnitude: 5.9, spectralType: 'K' },
        { ra: 12.2363, dec: -46.6978, magnitude: 6.27, spectralType: 'G' },
        { ra: 12.47, dec: 27.7108, magnitude: 7.0, spectralType: 'F' },  // 65 Psc
        { ra: 12.4717, dec: 27.7103, magnitude: 7.1, spectralType: 'F' },  // 65 Psc
        { ra: 12.3892, dec: -23.3617, magnitude: 6.28, spectralType: 'A' },
        { ra: 12.6817, dec: 64.2475, magnitude: 5.39, spectralType: 'G' },
        { ra: 12.5762, dec: 45.0022, magnitude: 6.15, spectralType: 'A' },
        { ra: 12.5317, dec: -10.6444, magnitude: 5.19, spectralType: 'F' },  // 19Phi2Cet
        { ra: 12.1475, dec: -74.9233, magnitude: 5.07, spectralType: 'K' },  // Lam Hyi
        { ra: 12.8183, dec: 61.8058, magnitude: 6.07, spectralType: 'K' },
        { ra: 12.7392, dec: 51.5081, magnitude: 6.39, spectralType: 'F' },
        { ra: 12.5154, dec: -43.3947, magnitude: 6.48, spectralType: 'A' },
        { ra: 13.7213, dec: 83.7072, magnitude: 5.62, spectralType: 'A' },
        { ra: 12.8904, dec: 51.5711, magnitude: 6.21, spectralType: 'B' },
        { ra: 12.6717, dec: -50.9869, magnitude: 5.22, spectralType: 'F' },  // Rho Phe
        { ra: 12.8262, dec: 3.385, magnitude: 6.37, spectralType: 'K' },
        { ra: 13.2671, dec: 61.1242, magnitude: 4.82, spectralType: 'F' },
        { ra: 12.9671, dec: -43.7092, magnitude: 6.9, spectralType: 'F' },
        { ra: 13.2225, dec: 38.5486, magnitude: 6.69, spectralType: 'A' },
        { ra: 13.1692, dec: -24.0058, magnitude: 5.46, spectralType: 'K' },
        { ra: 13.2521, dec: -1.1442, magnitude: 4.77, spectralType: 'M' },  // 20 Cet
        { ra: 13.3675, dec: 37.4181, magnitude: 6.06, spectralType: 'K' },
        { ra: 13.4483, dec: 52.6892, magnitude: 6.27, spectralType: 'A' },
        { ra: 13.3017, dec: -24.7769, magnitude: 6.46, spectralType: 'F' },
        { ra: 13.1013, dec: -69.5044, magnitude: 6.22, spectralType: 'F' },  // Lam1Tuc
        { ra: 13.7504, dec: 58.9728, magnitude: 4.83, spectralType: 'K' },  // 26Ups1Cas
        { ra: 13.6467, dec: 19.1883, magnitude: 5.74, spectralType: 'A' },  // 66 Psc
        { ra: 13.5733, dec: -8.7408, magnitude: 6.16, spectralType: 'G' },  // 21 Cet
        { ra: 13.7717, dec: 48.6786, magnitude: 6.27, spectralType: 'M' },
        { ra: 13.4079, dec: -62.8714, magnitude: 5.7, spectralType: 'M' },
        { ra: 13.7417, dec: 23.6283, magnitude: 5.47, spectralType: 'K' },  // 36 And
        { ra: 13.8112, dec: 24.5569, magnitude: 6.2, spectralType: 'M' },
        { ra: 14.0538, dec: 57.9967, magnitude: 6.21, spectralType: 'K' },
        { ra: 14.2317, dec: 68.7761, magnitude: 6.37, spectralType: 'F' },
        { ra: 13.9937, dec: 27.2094, magnitude: 6.09, spectralType: 'A' },  // 67 Psc
        { ra: 13.9267, dec: -7.3472, magnitude: 5.85, spectralType: 'K' },
        { ra: 14.1771, dec: 60.7167, magnitude: 2.47, spectralType: 'B' },  // 27Gam Cas
        { ra: 14.1658, dec: 59.1811, magnitude: 4.63, spectralType: 'G' },  // 28Ups2Cas
        { ra: 14.1963, dec: 60.3628, magnitude: 5.55, spectralType: 'B' },
        { ra: 14.0062, dec: -11.2667, magnitude: 5.31, spectralType: 'K' },  // 22Phi3Cet
        { ra: 13.9812, dec: -27.7756, magnitude: 6.1, spectralType: 'M' },
        { ra: 14.1883, dec: 38.4994, magnitude: 3.87, spectralType: 'A' },  // 37Mu And
        { ra: 13.7512, dec: -69.5269, magnitude: 5.45, spectralType: 'K' },  // Lam2Tuc
        { ra: 14.3017, dec: 23.4175, magnitude: 4.42, spectralType: 'G' },  // 38Eta And
        { ra: 14.4154, dec: 45.8397, magnitude: 6.12, spectralType: 'K' },
        { ra: 14.6296, dec: 66.3522, magnitude: 5.97, spectralType: 'A' },
        { ra: 14.4592, dec: 28.9922, magnitude: 5.42, spectralType: 'G' },  // 68 Psc
        { ra: 14.5592, dec: 33.9508, magnitude: 5.98, spectralType: 'K' },
        { ra: 14.4771, dec: 13.6958, magnitude: 6.32, spectralType: 'G' },
        { ra: 14.5787, dec: 21.4044, magnitude: 6.37, spectralType: 'A' },
        { ra: 15.1292, dec: 70.9831, magnitude: 6.39, spectralType: 'A' },
        { ra: 14.6829, dec: -11.38, magnitude: 5.61, spectralType: 'G' },  // 23Phi4Cet
        { ra: 14.6517, dec: -29.3575, magnitude: 4.31, spectralType: 'B' },  // Alp Scl
        { ra: 14.5933, dec: -60.6964, magnitude: 6.23, spectralType: 'A' },
        { ra: 15.0142, dec: 44.7111, magnitude: 6.84, spectralType: 'A' },
        { ra: 15.015, dec: 44.7133, magnitude: 6.04, spectralType: 'B' },
        { ra: 14.9571, dec: 6.4831, magnitude: 6.11, spectralType: 'M' },
        { ra: 17.1863, dec: 86.2569, magnitude: 4.25, spectralType: 'K' },
        { ra: 23.46, dec: 89.0156, magnitude: 6.46, spectralType: 'A' },
        { ra: 15.5767, dec: 51.035, magnitude: 6.47, spectralType: 'A' },
        { ra: 15.3262, dec: -38.9167, magnitude: 5.59, spectralType: 'K' },  // Xi Scl
        { ra: 15.7563, dec: 47.3761, magnitude: 6.45, spectralType: 'A' },
        { ra: 15.7263, dec: 41.345, magnitude: 5.98, spectralType: 'A' },  // 39 And
        { ra: 15.7046, dec: 31.8044, magnitude: 5.5, spectralType: 'B' },  // 69Sig Psc
        { ra: 15.9042, dec: 61.075, magnitude: 5.92, spectralType: 'F' },
        { ra: 15.61, dec: -31.5519, magnitude: 5.5, spectralType: 'A' },  // Sig Scl
        { ra: 15.7358, dec: 7.89, magnitude: 4.28, spectralType: 'K' },  // 71Eps Psc
        { ra: 15.5075, dec: -57.0025, magnitude: 6.11, spectralType: 'G' },  // Ome Phe
        { ra: 15.7608, dec: -4.8367, magnitude: 5.43, spectralType: 'K' },  // 25 Cet
        { ra: 16.0817, dec: 61.5803, magnitude: 5.84, spectralType: 'F' },
        { ra: 16.01, dec: 52.5022, magnitude: 5.99, spectralType: 'K' },
        { ra: 15.705, dec: -46.3975, magnitude: 5.36, spectralType: 'G' },
        { ra: 15.8233, dec: -29.5258, magnitude: 6.29, spectralType: 'G' },
        { ra: 15.9542, dec: 1.3667, magnitude: 6.04, spectralType: 'F' },  // 26 Cet
        { ra: 16.195, dec: 51.01, magnitude: 6.54, spectralType: 'B' },
        { ra: 16.115, dec: 29.6586, magnitude: 6.19, spectralType: 'F' },
        { ra: 15.6788, dec: -65.4561, magnitude: 6.21, spectralType: 'M' },
        { ra: 16.1517, dec: 39.9911, magnitude: 6.72, spectralType: 'F' },
        { ra: 19.0562, dec: 87.1453, magnitude: 6.25, spectralType: 'K' },
        { ra: 16.2192, dec: 5.6564, magnitude: 6.0, spectralType: 'K' },  // 73 Psc
        { ra: 16.2725, dec: 14.9461, magnitude: 5.68, spectralType: 'F' },  // 72 Psc
        { ra: 16.595, dec: 62.7617, magnitude: 6.54, spectralType: 'A' },
        { ra: 16.4204, dec: 21.4733, magnitude: 5.34, spectralType: 'A' },  // 74Psi1Psc
        { ra: 16.4237, dec: 21.4653, magnitude: 5.56, spectralType: 'A' },  // 74Psi1Psc
        { ra: 17.3012, dec: 80.0117, magnitude: 6.29, spectralType: 'G' },
        { ra: 16.455, dec: 4.9083, magnitude: 6.35, spectralType: 'F' },  // 77 Psc
        { ra: 16.4642, dec: 4.9094, magnitude: 7.25, spectralType: 'F' },  // 77 Psc
        { ra: 16.4033, dec: -9.9792, magnitude: 6.12, spectralType: 'K' },  // 27 Cet
        { ra: 16.7508, dec: 56.935, magnitude: 6.43, spectralType: 'K' },
        { ra: 16.5213, dec: -9.8394, magnitude: 5.58, spectralType: 'A' },  // 28 Cet
        { ra: 16.7896, dec: 53.4983, magnitude: 6.38, spectralType: 'K' },
        { ra: 16.64, dec: 12.9561, magnitude: 6.12, spectralType: 'G' },  // 75 Psc
        { ra: 16.5321, dec: -23.9925, magnitude: 6.14, spectralType: 'G' },
        { ra: 17.0683, dec: 54.9203, magnitude: 5.17, spectralType: 'G' },  // 30Mu Cas
        { ra: 16.5208, dec: -46.7186, magnitude: 3.31, spectralType: 'G' },  // Bet Phe
        { ra: 16.6104, dec: -35.6608, magnitude: 6.61, spectralType: 'A' },
        { ra: 17.0038, dec: 43.9419, magnitude: 5.03, spectralType: 'A' },  // 41 And
        { ra: 16.8046, dec: -23.9964, magnitude: 6.37, spectralType: 'A' },
        { ra: 17.1387, dec: 58.2636, magnitude: 5.79, spectralType: 'B' },
        { ra: 17.0054, dec: 32.0122, magnitude: 6.25, spectralType: 'F' },  // 78 Psc
        { ra: 16.9883, dec: 20.7392, magnitude: 5.55, spectralType: 'A' },  // 79Psi2Psc
        { ra: 16.9425, dec: -9.7856, magnitude: 5.82, spectralType: 'F' },  // 30 Cet
        { ra: 17.0925, dec: 5.6497, magnitude: 5.52, spectralType: 'F' },  // 80 Psc
        { ra: 16.9496, dec: -41.4869, magnitude: 5.21, spectralType: 'A' },  // Ups Phe
        { ra: 16.8279, dec: -61.7753, magnitude: 5.37, spectralType: 'G' },  // Iot Tuc
        { ra: 18.0696, dec: 79.6739, magnitude: 5.64, spectralType: 'A' },
        { ra: 17.1475, dec: -10.1822, magnitude: 3.45, spectralType: 'K' },  // 31Eta Cet
        { ra: 17.3758, dec: 47.2419, magnitude: 4.25, spectralType: 'B' },  // 42Phi And
        { ra: 17.6638, dec: 68.7786, magnitude: 5.29, spectralType: 'A' },  // 31 Cas
        { ra: 17.4329, dec: 35.6206, magnitude: 2.06, spectralType: 'M' },  // 43Bet And
        { ra: 17.0963, dec: -55.2458, magnitude: 3.92, spectralType: 'B' },  // Zet Phe
        { ra: 17.455, dec: 19.6586, magnitude: 5.55, spectralType: 'G' },  // 81Psi3Psc
        { ra: 17.5783, dec: 42.0814, magnitude: 5.65, spectralType: 'F' },  // 44 And
        { ra: 17.5808, dec: 25.4578, magnitude: 5.8, spectralType: 'K' },
        { ra: 17.8567, dec: 64.2028, magnitude: 5.55, spectralType: 'B' },
        { ra: 17.7758, dec: 55.1497, magnitude: 4.33, spectralType: 'A' },  // 33The Cas
        { ra: 17.5479, dec: 15.6742, magnitude: 6.06, spectralType: 'M' },
        { ra: 17.9225, dec: 65.0189, magnitude: 5.57, spectralType: 'B' },  // 32 Cas
        { ra: 17.55, dec: -8.9061, magnitude: 6.4, spectralType: 'K' },  // 32 Cet
        { ra: 17.64, dec: 2.4456, magnitude: 5.95, spectralType: 'K' },  // 33 Cet
        { ra: 17.7929, dec: 37.7242, magnitude: 5.81, spectralType: 'B' },  // 45 And
        { ra: 17.7783, dec: 31.4247, magnitude: 5.16, spectralType: 'F' },  // 82 Psc
        { ra: 17.5308, dec: -57.6944, magnitude: 6.41, spectralType: 'G' },
        { ra: 17.8633, dec: 21.0347, magnitude: 4.66, spectralType: 'G' },  // 84Chi Psc
        { ra: 17.915, dec: 30.0897, magnitude: 4.51, spectralType: 'K' },  // 83Tau Psc
        { ra: 17.9312, dec: -2.2511, magnitude: 5.94, spectralType: 'K' },  // 34 Cet
        { ra: 18.2913, dec: 61.7058, magnitude: 6.41, spectralType: 'B' },
        { ra: 18.1417, dec: 45.3378, magnitude: 6.11, spectralType: 'M' },
        { ra: 18.2479, dec: 30.0642, magnitude: 6.19, spectralType: 'G' },
        { ra: 19.1279, dec: 79.91, magnitude: 6.26, spectralType: 'F' },
        { ra: 18.0975, dec: -30.8022, magnitude: 6.52, spectralType: 'F' },
        { ra: 18.1892, dec: -37.8564, magnitude: 5.92, spectralType: 'F' },
        { ra: 18.4371, dec: 24.5836, magnitude: 4.65, spectralType: 'K' },  // 85Phi Psc
        { ra: 18.4329, dec: 7.5753, magnitude: 5.24, spectralType: 'A' },  // 86Zet Psc
        { ra: 18.4388, dec: 7.5783, magnitude: 6.3, spectralType: 'F' },  // 86Zet Psc
        { ra: 18.5208, dec: 28.5297, magnitude: 6.43, spectralType: 'G' },
        { ra: 18.5317, dec: 16.1336, magnitude: 5.98, spectralType: 'B' },  // 87 Psc
        { ra: 19.0504, dec: 71.7439, magnitude: 7.83, spectralType: 'K' },
        { ra: 18.6, dec: -7.9231, magnitude: 5.13, spectralType: 'F' },  // 37 Cet
        { ra: 18.6767, dec: 6.9953, magnitude: 6.03, spectralType: 'G' },  // 88 Psc
        { ra: 18.705, dec: -0.9739, magnitude: 5.7, spectralType: 'F' },  // 38 Cet
        { ra: 19.1021, dec: 48.0822, magnitude: 6.61, spectralType: 'B' },
        { ra: 18.7963, dec: -45.5314, magnitude: 4.96, spectralType: 'F' },  // Nu Phe
        { ra: 19.0783, dec: 33.1147, magnitude: 6.02, spectralType: 'K' },
        { ra: 19.2712, dec: 44.9019, magnitude: 6.34, spectralType: 'K' },
        { ra: 19.1512, dec: -2.5003, magnitude: 5.41, spectralType: 'G' },  // 39 Cet
        { ra: 19.3504, dec: 31.7447, magnitude: 6.73, spectralType: 'K' },
        { ra: 20.0812, dec: 77.5706, magnitude: 6.31, spectralType: 'G' },
        { ra: 19.5425, dec: 47.4197, magnitude: 6.25, spectralType: 'K' },
        { ra: 18.9421, dec: -68.8761, magnitude: 4.86, spectralType: 'F' },  // Kap Tuc
        { ra: 19.45, dec: 3.6144, magnitude: 5.16, spectralType: 'A' },  // 89 Psc
        { ra: 19.6958, dec: 37.3861, magnitude: 6.46, spectralType: 'A' },
        { ra: 19.265, dec: -66.3981, magnitude: 6.24, spectralType: 'A' },
        { ra: 20.4963, dec: 76.2389, magnitude: 6.38, spectralType: 'F' },
        { ra: 20.0204, dec: 58.2317, magnitude: 4.98, spectralType: 'F' },  // 34Phi Cas
        { ra: 19.8667, dec: 27.2642, magnitude: 4.76, spectralType: 'A' },  // 90Ups Psc
        { ra: 20.2717, dec: 64.6583, magnitude: 6.34, spectralType: 'A' },  // 35 Cas
        { ra: 19.9512, dec: -0.5089, magnitude: 5.87, spectralType: 'G' },  // 42 Cet
        { ra: 20.945, dec: 78.7258, magnitude: 6.07, spectralType: 'A' },
        { ra: 20.1437, dec: -3.2469, magnitude: 6.23, spectralType: 'K' },
        { ra: 20.1158, dec: -11.2389, magnitude: 6.15, spectralType: 'K' },
        { ra: 20.2808, dec: 28.7381, magnitude: 5.23, spectralType: 'K' },  // 91 Psc
        { ra: 20.585, dec: 45.5289, magnitude: 4.88, spectralType: 'K' },  // 46Xi And
        { ra: 20.84, dec: 58.1431, magnitude: 6.45, spectralType: 'F' },
        { ra: 20.6542, dec: 1.7264, magnitude: 6.2, spectralType: 'K' },
        { ra: 20.645, dec: -0.4497, magnitude: 6.49, spectralType: 'K' },  // 43 Cet
        { ra: 20.6271, dec: -19.0814, magnitude: 6.35, spectralType: 'F' },
        { ra: 20.9192, dec: 37.715, magnitude: 5.58, spectralType: 'A' },  // 47 And
        { ra: 20.9062, dec: 34.2458, magnitude: 6.29, spectralType: 'G' },
        { ra: 20.8537, dec: 20.4689, magnitude: 5.97, spectralType: 'K' },
        { ra: 21.4438, dec: 70.98, magnitude: 6.49, spectralType: 'A' },
        { ra: 21.4833, dec: 68.13, magnitude: 4.74, spectralType: 'K' },  // 36Psi Cas
        { ra: 20.8792, dec: -30.9456, magnitude: 5.84, spectralType: 'K' },
        { ra: 21.0104, dec: -8.0075, magnitude: 6.21, spectralType: 'F' },  // 44 Cet
        { ra: 21.0058, dec: -8.1833, magnitude: 3.6, spectralType: 'K' },  // 45The Cet
        { ra: 21.4542, dec: 60.2353, magnitude: 2.68, spectralType: 'A' },  // 37Del Cas
        { ra: 21.0858, dec: -6.9147, magnitude: 5.91, spectralType: 'F' },
        { ra: 21.1658, dec: -15.6603, magnitude: 6.14, spectralType: 'G' },
        { ra: 21.2029, dec: -2.8486, magnitude: 6.15, spectralType: 'G' },
        { ra: 21.3987, dec: 23.5117, magnitude: 6.18, spectralType: 'F' },
        { ra: 21.17, dec: -41.4925, magnitude: 5.42, spectralType: 'K' },
        { ra: 21.5775, dec: 43.4578, magnitude: 5.96, spectralType: 'F' },
        { ra: 21.5363, dec: 34.5797, magnitude: 6.31, spectralType: 'F' },
        { ra: 21.1746, dec: -44.5283, magnitude: 6.26, spectralType: 'K' },
        { ra: 21.405, dec: -14.5989, magnitude: 4.9, spectralType: 'K' },  // 46 Cet
        { ra: 21.5638, dec: 19.1722, magnitude: 5.38, spectralType: 'F' },  // 93Rho Psc
        { ra: 21.6737, dec: 19.2403, magnitude: 5.5, spectralType: 'K' },  // 94 Psc
        { ra: 21.7758, dec: 34.3775, magnitude: 6.27, spectralType: 'F' },
        { ra: 21.6137, dec: -0.3986, magnitude: 6.41, spectralType: 'K' },
        { ra: 21.9142, dec: 45.4067, magnitude: 4.83, spectralType: 'F' },  // 48Ome And
        { ra: 21.8608, dec: 41.1006, magnitude: 6.46, spectralType: 'A' },
        { ra: 21.7229, dec: 3.5353, magnitude: 6.58, spectralType: 'B' },
        { ra: 21.2721, dec: -64.3694, magnitude: 5.93, spectralType: 'K' },
        { ra: 21.715, dec: -13.0567, magnitude: 5.66, spectralType: 'F' },  // 47 Cet
        { ra: 21.9458, dec: 40.3356, magnitude: 6.6, spectralType: 'A' },
        { ra: 21.7421, dec: -32.5431, magnitude: 5.79, spectralType: 'G' },
        { ra: 37.9529, dec: 89.2642, magnitude: 2.02, spectralType: 'F' },  // 1Alp UMi
        { ra: 21.9442, dec: -10.9017, magnitude: 6.13, spectralType: 'K' },
        { ra: 22.0954, dec: 7.9614, magnitude: 6.2, spectralType: 'K' },
        { ra: 22.8075, dec: 70.2647, magnitude: 5.81, spectralType: 'F' },  // 38 Cas
        { ra: 22.7179, dec: 66.0981, magnitude: 6.14, spectralType: 'A' },
        { ra: 22.0913, dec: -43.3183, magnitude: 3.41, spectralType: 'M' },  // Gam Phe
        { ra: 22.5258, dec: 47.0072, magnitude: 5.27, spectralType: 'K' },  // 49 And
        { ra: 22.1804, dec: -33.7636, magnitude: 6.58, spectralType: 'F' },
        { ra: 22.4704, dec: 18.3556, magnitude: 6.02, spectralType: 'A' },  // 97 Psc
        { ra: 22.4004, dec: -21.6294, magnitude: 5.12, spectralType: 'A' },  // 48 Cet
        { ra: 22.5463, dec: 6.1439, magnitude: 4.84, spectralType: 'K' },  // 98Mu Psc
        { ra: 22.3767, dec: -46.7564, magnitude: 6.31, spectralType: 'M' },
        { ra: 22.5954, dec: -26.2078, magnitude: 5.93, spectralType: 'K' },
        { ra: 22.8708, dec: 15.3458, magnitude: 3.62, spectralType: 'G' },  // 99Eta Psc
        { ra: 23.0317, dec: 34.8, magnitude: 6.39, spectralType: 'B' },
        { ra: 23.3575, dec: 58.3275, magnitude: 5.7, spectralType: 'K' },
        { ra: 22.8129, dec: -49.0728, magnitude: 3.95, spectralType: 'K' },  // Del Phe
        { ra: 22.9304, dec: -30.2833, magnitude: 5.82, spectralType: 'K' },
        { ra: 23.4829, dec: 59.2319, magnitude: 4.71, spectralType: 'G' },  // 39Chi Cas
        { ra: 22.9129, dec: -45.5756, magnitude: 6.17, spectralType: 'A' },
        { ra: 23.2646, dec: -9.0147, magnitude: 6.59, spectralType: 'A' },
        { ra: 23.2333, dec: -36.8653, magnitude: 5.51, spectralType: 'K' },
        { ra: 23.5692, dec: 37.2372, magnitude: 5.88, spectralType: 'B' },
        { ra: 23.1512, dec: -49.7278, magnitude: 6.28, spectralType: 'F' },
        { ra: 23.4288, dec: -7.0253, magnitude: 5.76, spectralType: 'G' },
        { ra: 24.3438, dec: 74.3008, magnitude: 6.58, spectralType: 'B' },
        { ra: 23.7046, dec: 18.4606, magnitude: 5.89, spectralType: 'M' },
        { ra: 23.6575, dec: -15.6761, magnitude: 5.63, spectralType: 'A' },  // 49 Cet
        { ra: 23.9688, dec: 41.0764, magnitude: 6.38, spectralType: 'K' },
        { ra: 23.7112, dec: -31.8922, magnitude: 6.12, spectralType: 'K' },
        { ra: 24.1133, dec: 48.7228, magnitude: 5.92, spectralType: 'K' },
        { ra: 23.9433, dec: 14.6614, magnitude: 6.22, spectralType: 'B' },  // 101 Psc
        { ra: 24.6288, dec: 73.04, magnitude: 5.28, spectralType: 'G' },  // 40 Cas
        { ra: 23.9783, dec: 17.4336, magnitude: 5.8, spectralType: 'F' },
        { ra: 24.1992, dec: 41.4056, magnitude: 4.09, spectralType: 'F' },  // 50Ups And
        { ra: 23.9958, dec: -15.4003, magnitude: 5.42, spectralType: 'K' },  // 50 Cet
        { ra: 23.8133, dec: -58.1394, magnitude: 6.01, spectralType: 'F' },
        { ra: 24.5317, dec: 57.9775, magnitude: 5.56, spectralType: 'G' },
        { ra: 24.035, dec: -29.9075, magnitude: 5.69, spectralType: 'F' },  // Tau Scl
        { ra: 24.2746, dec: 12.1417, magnitude: 5.57, spectralType: 'F' },  // 102Pi Psc
        { ra: 24.4983, dec: 48.6283, magnitude: 3.57, spectralType: 'K' },  // 51 And
        { ra: 24.6321, dec: 45.4, magnitude: 6.36, spectralType: 'B' },
        { ra: 24.4071, dec: -9.4039, magnitude: 6.24, spectralType: 'F' },
        { ra: 23.4133, dec: -78.5047, magnitude: 6.11, spectralType: 'K' },
        { ra: 24.1867, dec: -58.2708, magnitude: 6.18, spectralType: 'M' },
        { ra: 24.8375, dec: 44.3861, magnitude: 4.98, spectralType: 'G' },  // 52Chi And
        { ra: 25.0546, dec: 53.8683, magnitude: 6.39, spectralType: 'K' },
        { ra: 24.6142, dec: -36.5283, magnitude: 5.94, spectralType: 'K' },
        { ra: 24.4288, dec: -57.2367, magnitude: 0.46, spectralType: 'B' },  // Alp Eri
        { ra: 24.7158, dec: -21.2753, magnitude: 5.58, spectralType: 'A' },
        { ra: 24.7083, dec: -25.0219, magnitude: 6.7, spectralType: 'B' },
        { ra: 24.92, dec: 16.4058, magnitude: 5.97, spectralType: 'K' },  // 105 Psc
        { ra: 25.1658, dec: 43.2978, magnitude: 5.61, spectralType: 'A' },
        { ra: 25.145, dec: 40.5769, magnitude: 4.94, spectralType: 'B' },  // 53Tau And
        { ra: 25.5854, dec: 68.0431, magnitude: 5.59, spectralType: 'A' },  // 43 Cas
        { ra: 24.7008, dec: -53.4389, magnitude: 6.84, spectralType: 'F' },
        { ra: 25.7329, dec: 70.6225, magnitude: 5.18, spectralType: 'B' },  // 42 Cas
        { ra: 25.5125, dec: 61.0383, magnitude: 6.71, spectralType: 'B' },
        { ra: 25.5742, dec: 58.6278, magnitude: 6.37, spectralType: 'B' },
        { ra: 25.4467, dec: 42.6136, magnitude: 4.95, spectralType: 'G' },
        { ra: 25.3267, dec: 25.7458, magnitude: 6.17, spectralType: 'F' },
        { ra: 25.4133, dec: 30.0472, magnitude: 5.99, spectralType: 'K' },
        { ra: 24.9475, dec: -56.1981, magnitude: 5.87, spectralType: 'K' },
        { ra: 24.9492, dec: -56.1947, magnitude: 5.76, spectralType: 'K' },
        { ra: 25.7433, dec: 61.4217, magnitude: 6.34, spectralType: 'B' },
        { ra: 25.3579, dec: 5.4875, magnitude: 4.44, spectralType: 'K' },  // 106Nu Psc
        { ra: 25.5146, dec: 35.2456, magnitude: 5.64, spectralType: 'B' },
        { ra: 25.8321, dec: 60.5511, magnitude: 5.78, spectralType: 'B' },  // 44 Cas
        { ra: 25.4363, dec: -11.3247, magnitude: 5.75, spectralType: 'F' },
        { ra: 25.6242, dec: 20.2686, magnitude: 5.24, spectralType: 'K' },  // 107 Psc
        { ra: 25.3637, dec: -38.1331, magnitude: 6.17, spectralType: 'F' },
        { ra: 25.8188, dec: 45.3222, magnitude: 6.34, spectralType: 'K' },
        { ra: 25.915, dec: 50.6886, magnitude: 4.07, spectralType: 'B' },  // Phi Per
        { ra: 25.5358, dec: -32.3269, magnitude: 5.25, spectralType: 'K' },  // Pi Scl
        { ra: 25.5125, dec: -36.8325, magnitude: 5.72, spectralType: 'A' },
        { ra: 26.0746, dec: 57.5364, magnitude: 6.21, spectralType: 'A' },
        { ra: 25.6812, dec: -3.6903, magnitude: 4.99, spectralType: 'K' },
        { ra: 25.4213, dec: -50.0389, magnitude: 6.64, spectralType: 'A' },
        { ra: 26.1921, dec: 57.0892, magnitude: 6.25, spectralType: 'A' },
        { ra: 25.9583, dec: 32.1917, magnitude: 6.34, spectralType: 'G' },
        { ra: 26.1104, dec: 46.1397, magnitude: 6.35, spectralType: 'K' },
        { ra: 25.45, dec: -60.7894, magnitude: 5.71, spectralType: 'K' },
        { ra: 25.6221, dec: -53.7406, magnitude: 5.52, spectralType: 'F' },
        { ra: 25.9783, dec: -4.7656, magnitude: 6.19, spectralType: 'K' },
        { ra: 26.2325, dec: 20.0831, magnitude: 6.27, spectralType: 'G' },  // 109 Psc
        { ra: 26.0171, dec: -15.9375, magnitude: 3.5, spectralType: 'G' },  // 52Tau Cet
        { ra: 26.3483, dec: 9.1578, magnitude: 4.26, spectralType: 'G' },  // 110Omi Psc
        { ra: 26.9367, dec: 63.8522, magnitude: 5.63, spectralType: 'K' },
        { ra: 24.4817, dec: -82.975, magnitude: 5.87, spectralType: 'G' },
        { ra: 26.4971, dec: -5.7333, magnitude: 5.34, spectralType: 'K' },
        { ra: 26.4117, dec: -25.0525, magnitude: 5.31, spectralType: 'F' },  // Eps Scl
        { ra: 26.6471, dec: 17.4131, magnitude: 6.55, spectralType: 'A' },
        { ra: 25.3387, dec: -79.1483, magnitude: 6.33, spectralType: 'G' },  // Tau1Hyi
        { ra: 26.5042, dec: -27.3492, magnitude: 6.39, spectralType: 'F' },
        { ra: 26.95, dec: 46.2297, magnitude: 6.32, spectralType: 'F' },
        { ra: 26.5242, dec: -50.8164, magnitude: 5.49, spectralType: 'M' },
        { ra: 26.5262, dec: -53.5219, magnitude: 5.04, spectralType: 'A' },
        { ra: 27.1621, dec: 37.9528, magnitude: 5.94, spectralType: 'K' },
        { ra: 27.0454, dec: 16.9556, magnitude: 5.84, spectralType: 'B' },  // 4 Ari
        { ra: 27.1733, dec: 32.6903, magnitude: 5.79, spectralType: 'F' },
        { ra: 26.82, dec: -41.76, magnitude: 6.18, spectralType: 'K' },
        { ra: 24.3667, dec: -84.7697, magnitude: 5.69, spectralType: 'G' },
        { ra: 27.3154, dec: 47.8969, magnitude: 5.82, spectralType: 'A' },
        { ra: 27.1083, dec: 3.6856, magnitude: 5.91, spectralType: 'G' },
        { ra: 26.9492, dec: -37.1597, magnitude: 6.32, spectralType: 'K' },
        { ra: 27.7379, dec: 51.9333, magnitude: 5.9, spectralType: 'F' },
        { ra: 27.5354, dec: 22.2753, magnitude: 5.86, spectralType: 'K' },  // 1 Ari
        { ra: 27.3962, dec: -10.6864, magnitude: 4.67, spectralType: 'F' },  // 53Chi Cet
        { ra: 27.3313, dec: -31.0728, magnitude: 6.34, spectralType: 'K' },
        { ra: 27.9971, dec: 55.1475, magnitude: 5.52, spectralType: 'B' },  // 1 Per
        { ra: 27.7167, dec: 11.0433, magnitude: 5.94, spectralType: 'F' },
        { ra: 27.4533, dec: -38.4039, magnitude: 6.37, spectralType: 'F' },
        { ra: 28.0392, dec: 50.7928, magnitude: 5.79, spectralType: 'B' },  // 2 Per
        { ra: 27.5842, dec: -47.8164, magnitude: 6.14, spectralType: 'K' },
        { ra: 28.2117, dec: 51.4747, magnitude: 6.26, spectralType: 'A' },
        { ra: 27.865, dec: -10.335, magnitude: 3.73, spectralType: 'K' },  // 55Zet Cet
        { ra: 28.4521, dec: 55.5981, magnitude: 6.45, spectralType: 'A' },
        { ra: 27.7271, dec: -50.2061, magnitude: 5.94, spectralType: 'A' },
        { ra: 28.5987, dec: 63.67, magnitude: 3.38, spectralType: 'B' },  // 45Eps Cas
        { ra: 28.3221, dec: 40.7297, magnitude: 5.4, spectralType: 'K' },  // 55 And
        { ra: 28.2704, dec: 29.5789, magnitude: 3.41, spectralType: 'F' },  // 2Alp Tri
        { ra: 28.3825, dec: 19.2958, magnitude: 4.83, spectralType: 'B' },  // 5Gam1Ari
        { ra: 28.3825, dec: 19.2936, magnitude: 4.75, spectralType: 'A' },  // 5Gam2Ari
        { ra: 28.2171, dec: -16.9292, magnitude: 5.8, spectralType: 'F' },
        { ra: 29.0, dec: 68.6853, magnitude: 4.99, spectralType: 'B' },  // 46Ome Cas
        { ra: 28.3887, dec: 3.1875, magnitude: 4.62, spectralType: 'K' },  // 111Xi Psc
        { ra: 26.9437, dec: -80.1767, magnitude: 6.06, spectralType: 'F' },  // Tau2Hyi
        { ra: 28.7242, dec: 40.7019, magnitude: 6.24, spectralType: 'K' },
        { ra: 28.7396, dec: 37.1283, magnitude: 6.26, spectralType: 'K' },
        { ra: 28.66, dec: 20.8081, magnitude: 2.64, spectralType: 'A' },  // 6Bet Ari
        { ra: 28.3467, dec: -38.5947, magnitude: 6.1, spectralType: 'K' },
        { ra: 28.4117, dec: -46.3025, magnitude: 4.41, spectralType: 'M' },  // Psi Phe
        { ra: 28.9767, dec: 37.2778, magnitude: 5.89, spectralType: 'M' },
        { ra: 29.0388, dec: 37.2517, magnitude: 5.67, spectralType: 'K' },  // 56 And
        { ra: 28.5917, dec: -42.4969, magnitude: 5.11, spectralType: 'A' },  // Phi Phe
        { ra: 28.9625, dec: 23.5772, magnitude: 5.74, spectralType: 'K' },  // 7 Ari
        { ra: 28.9742, dec: 1.8497, magnitude: 6.01, spectralType: 'F' },
        { ra: 29.6388, dec: 61.6981, magnitude: 6.02, spectralType: 'B' },
        { ra: 29.485, dec: 41.6944, magnitude: 6.78, spectralType: 'B' },
        { ra: 29.3379, dec: 17.8175, magnitude: 5.1, spectralType: 'K' },  // 8Iot Ari
        { ra: 29.4325, dec: 27.8044, magnitude: 5.82, spectralType: 'M' },
        { ra: 29.1675, dec: -22.5269, magnitude: 4.85, spectralType: 'K' },  // 56 Cet
        { ra: 28.9896, dec: -51.6089, magnitude: 3.7, spectralType: 'G' },  // Chi Eri
        { ra: 29.9083, dec: 64.6214, magnitude: 5.26, spectralType: 'A' },
        { ra: 29.64, dec: 49.2042, magnitude: 5.69, spectralType: 'K' },  // 3 Per
        { ra: 29.4821, dec: 23.5961, magnitude: 4.79, spectralType: 'F' },  // 9Lam Ari
        { ra: 28.7337, dec: -67.6472, magnitude: 4.69, spectralType: 'G' },  // Eta2Hyi
        { ra: 28.9433, dec: -60.8614, magnitude: 6.06, spectralType: 'F' },
        { ra: 30.7383, dec: 77.9164, magnitude: 6.04, spectralType: 'K' },
        { ra: 29.2504, dec: -51.7661, magnitude: 6.1, spectralType: 'F' },
        { ra: 29.2917, dec: -47.385, magnitude: 4.83, spectralType: 'G' },
        { ra: 30.4892, dec: 70.9069, magnitude: 4.54, spectralType: 'A' },  // 48 Cas
        { ra: 29.6113, dec: -33.0667, magnitude: 6.35, spectralType: 'K' },
        { ra: 29.8987, dec: 21.0583, magnitude: 5.87, spectralType: 'K' },
        { ra: 29.8579, dec: 12.2947, magnitude: 6.09, spectralType: 'A' },
        { ra: 30.7937, dec: 73.8506, magnitude: 6.23, spectralType: 'A' },
        { ra: 30.8587, dec: 72.4214, magnitude: 3.98, spectralType: 'A' },  // 50 Cas
        { ra: 31.2808, dec: 77.2814, magnitude: 5.38, spectralType: 'F' },  // 47 Cas
        { ra: 30.0383, dec: 3.0972, magnitude: 5.88, spectralType: 'G' },  // 112 Psc
        { ra: 29.9421, dec: -20.8244, magnitude: 5.41, spectralType: 'M' },  // 57 Cet
        { ra: 29.4733, dec: -65.4247, magnitude: 6.37, spectralType: 'G' },
        { ra: 30.0013, dec: -21.0778, magnitude: 4.0, spectralType: 'M' },  // 59Ups Cet
        { ra: 30.7196, dec: 64.9014, magnitude: 6.0, spectralType: 'A' },  // 52 Cas
        { ra: 30.1121, dec: -8.5236, magnitude: 5.51, spectralType: 'M' },
        { ra: 29.9117, dec: -42.0306, magnitude: 5.57, spectralType: 'K' },
        { ra: 30.7512, dec: 64.39, magnitude: 5.58, spectralType: 'B' },  // 53 Cas
        { ra: 30.5754, dec: 54.4875, magnitude: 5.04, spectralType: 'B' },  // 4 Per
        { ra: 29.6925, dec: -61.5697, magnitude: 2.86, spectralType: 'F' },  // Alp Hyi
        { ra: 31.38, dec: 76.115, magnitude: 5.22, spectralType: 'G' },  // 49 Cas
        { ra: 28.9604, dec: -78.3483, magnitude: 6.16, spectralType: 'F' },  // Sig Hyi
        { ra: 30.3113, dec: -30.0017, magnitude: 5.35, spectralType: 'G' },  // Pi For
        { ra: 30.5117, dec: 2.7636, magnitude: 5.23, spectralType: 'A' },  // 113Alp Psc
        { ra: 30.5117, dec: 2.7636, magnitude: 4.33, spectralType: 'A' },  // 113Alp Psc
        { ra: 32.3554, dec: 81.2958, magnitude: 6.05, spectralType: 'A' },
        { ra: 31.1671, dec: 65.1033, magnitude: 6.52, spectralType: 'A' },
        { ra: 30.7417, dec: 33.2839, magnitude: 5.5, spectralType: 'A' },  // 3Eps Tri
        { ra: 29.9213, dec: -66.0664, magnitude: 6.1, spectralType: 'K' },
        { ra: 30.6467, dec: 13.4767, magnitude: 5.94, spectralType: 'M' },
        { ra: 30.4267, dec: -44.7136, magnitude: 5.14, spectralType: 'K' },  // Chi Phe
        { ra: 30.975, dec: 42.3297, magnitude: 2.26, spectralType: 'K' },  // 57Gam1And
        { ra: 30.9779, dec: 42.3308, magnitude: 4.84, spectralType: 'B' },  // 57Gam2And
        { ra: 30.9137, dec: 25.9356, magnitude: 5.63, spectralType: 'F' },  // 10 Ari
        { ra: 30.6171, dec: -29.665, magnitude: 6.42, spectralType: 'A' },
        { ra: 30.7987, dec: 0.1283, magnitude: 5.43, spectralType: 'A' },  // 60 Cet
        { ra: 30.7442, dec: -15.3058, magnitude: 5.86, spectralType: 'G' },
        { ra: 30.9275, dec: 18.2533, magnitude: 6.21, spectralType: 'K' },
        { ra: 30.9508, dec: -0.3403, magnitude: 5.93, spectralType: 'G' },  // 61 Cet
        { ra: 30.9187, dec: -4.1036, magnitude: 5.62, spectralType: 'K' },
        { ra: 31.1225, dec: -29.2969, magnitude: 4.69, spectralType: 'B' },  // Nu For
        { ra: 31.6412, dec: 22.6483, magnitude: 5.03, spectralType: 'A' },  // 12Kap Ari
        { ra: 31.5513, dec: 8.2475, magnitude: 6.31, spectralType: 'M' },
        { ra: 31.705, dec: 25.7047, magnitude: 6.15, spectralType: 'B' },  // 11 Ari
        { ra: 31.6221, dec: 0.035, magnitude: 6.28, spectralType: 'K' },
        { ra: 31.7933, dec: 23.4625, magnitude: 2.0, spectralType: 'K' },  // 13Alp Ari
        { ra: 32.1688, dec: 58.4236, magnitude: 5.67, spectralType: 'A' },
        { ra: 32.14, dec: 44.4594, magnitude: 6.42, spectralType: 'G' },
        { ra: 32.1221, dec: 37.8592, magnitude: 4.82, spectralType: 'A' },  // 58 And
        { ra: 32.5325, dec: 53.8431, magnitude: 6.31, spectralType: 'G' },
        { ra: 32.3858, dec: 34.9872, magnitude: 3.0, spectralType: 'A' },  // 4Bet Tri
        { ra: 32.3554, dec: 25.9397, magnitude: 4.98, spectralType: 'F' },  // 14 Ari
        { ra: 32.3462, dec: 17.2244, magnitude: 6.43, spectralType: 'F' },
        { ra: 32.1904, dec: -17.7794, magnitude: 6.1, spectralType: 'M' },
        { ra: 33.3383, dec: 74.0278, magnitude: 6.29, spectralType: 'G' },
        { ra: 32.8708, dec: 57.6458, magnitude: 6.36, spectralType: 'B' },  // 5 Per
        { ra: 32.72, dec: 39.0394, magnitude: 5.63, spectralType: 'B' },  // 59 And
        { ra: 32.7237, dec: 39.0431, magnitude: 6.1, spectralType: 'A' },  // 59 And
        { ra: 32.395, dec: -24.3458, magnitude: 6.48, spectralType: 'F' },
        { ra: 32.6567, dec: 19.5003, magnitude: 5.7, spectralType: 'M' },  // 15 Ari
        { ra: 32.2888, dec: -43.5167, magnitude: 5.85, spectralType: 'K' },
        { ra: 32.8, dec: 25.9369, magnitude: 6.02, spectralType: 'K' },  // 16 Ari
        { ra: 32.8542, dec: 31.5264, magnitude: 6.23, spectralType: 'A' },  // 5 Tri
        { ra: 32.8379, dec: 8.5697, magnitude: 5.63, spectralType: 'G' },  // 64 Cet
        { ra: 32.5204, dec: -43.8156, magnitude: 6.32, spectralType: 'G' },
        { ra: 32.6067, dec: -50.8244, magnitude: 6.12, spectralType: 'K' },
        { ra: 32.8425, dec: -10.0522, magnitude: 6.01, spectralType: 'F' },
        { ra: 32.8992, dec: -1.8253, magnitude: 5.93, spectralType: 'G' },  // 63 Cet
        { ra: 33.6213, dec: 66.5244, magnitude: 6.07, spectralType: 'G' },  // 55 Cas
        { ra: 33.4229, dec: 58.5611, magnitude: 6.44, spectralType: 'A' },
        { ra: 33.0929, dec: 30.3031, magnitude: 4.94, spectralType: 'G' },  // 6 Tri
        { ra: 33.3054, dec: 44.2317, magnitude: 4.83, spectralType: 'K' },  // 60 And
        { ra: 33.1562, dec: 24.1678, magnitude: 5.96, spectralType: 'K' },
        { ra: 33.4012, dec: 51.0658, magnitude: 5.31, spectralType: 'G' },
        { ra: 33.2004, dec: 21.2108, magnitude: 5.27, spectralType: 'F' },  // 17Eta Ari
        { ra: 33.5108, dec: 47.4842, magnitude: 6.06, spectralType: 'F' },
        { ra: 33.2638, dec: 15.2797, magnitude: 5.71, spectralType: 'M' },  // 19 Ari
        { ra: 33.25, dec: 8.8467, magnitude: 4.37, spectralType: 'G' },  // 65Xi 1Cet
        { ra: 33.1979, dec: -2.3936, magnitude: 5.54, spectralType: 'F' },  // 66 Cet
        { ra: 33.2537, dec: -21.0003, magnitude: 5.86, spectralType: 'G' },
        { ra: 33.2271, dec: -30.7239, magnitude: 5.28, spectralType: 'B' },  // Mu For
        { ra: 33.9913, dec: 47.8114, magnitude: 6.33, spectralType: 'G' },
        { ra: 34.2154, dec: 57.0553, magnitude: 6.48, spectralType: 'B' },
        { ra: 33.9842, dec: 33.3589, magnitude: 5.28, spectralType: 'A' },  // 7 Tri
        { ra: 33.9417, dec: 25.7831, magnitude: 5.79, spectralType: 'F' },  // 20 Ari
        { ra: 33.9283, dec: 25.0431, magnitude: 5.58, spectralType: 'F' },  // 21 Ari
        { ra: 33.8679, dec: -9.4656, magnitude: 6.55, spectralType: 'A' },
        { ra: 33.6333, dec: -41.1667, magnitude: 5.91, spectralType: 'G' },
        { ra: 34.2633, dec: 34.2242, magnitude: 4.87, spectralType: 'G' },  // 8Del Tri
        { ra: 34.4996, dec: 57.8997, magnitude: 5.75, spectralType: 'K' },  // 8 Per
        { ra: 34.5187, dec: 57.5167, magnitude: 5.98, spectralType: 'G' },  // 7 Per
        { ra: 34.3892, dec: 44.3069, magnitude: 6.7, spectralType: 'M' },
        { ra: 34.3287, dec: 33.8472, magnitude: 4.01, spectralType: 'A' },  // 9Gam Tri
        { ra: 34.2933, dec: 23.7678, magnitude: 6.55, spectralType: 'G' },
        { ra: 34.2458, dec: -6.4222, magnitude: 5.51, spectralType: 'G' },  // 67 Cet
        { ra: 33.5613, dec: -67.8417, magnitude: 5.55, spectralType: 'M' },  // Pi 1Hyi
        { ra: 35.0538, dec: 64.3372, magnitude: 6.6, spectralType: 'B' },
        { ra: 34.5312, dec: 19.9011, magnitude: 5.62, spectralType: 'A' },  // 22The Ari
        { ra: 34.82, dec: 47.38, magnitude: 5.3, spectralType: 'A' },  // 62 And
        { ra: 34.7954, dec: 46.4725, magnitude: 6.21, spectralType: 'A' },
        { ra: 34.5058, dec: 1.7578, magnitude: 5.58, spectralType: 'G' },
        { ra: 34.8446, dec: 48.9553, magnitude: 6.37, spectralType: 'F' },
        { ra: 34.1275, dec: -51.5122, magnitude: 3.56, spectralType: 'B' },  // Phi Eri
        { ra: 34.7375, dec: 28.6425, magnitude: 5.03, spectralType: 'A' },  // 10 Tri
        { ra: 34.7417, dec: 23.1678, magnitude: 6.46, spectralType: 'A' },
        { ra: 34.9054, dec: 39.835, magnitude: 6.63, spectralType: 'B' },
        { ra: 33.8687, dec: -67.7464, magnitude: 5.69, spectralType: 'K' },  // Pi 2Hyi
        { ra: 35.1725, dec: 47.3108, magnitude: 6.11, spectralType: 'B' },
        { ra: 35.0183, dec: 30.1883, magnitude: 6.47, spectralType: 'K' },
        { ra: 34.8362, dec: -2.9775, magnitude: 3.04, spectralType: 'M' },  // 68Omi Cet
        { ra: 35.2425, dec: 50.1514, magnitude: 5.59, spectralType: 'B' },  // 63 And
        { ra: 34.7437, dec: -25.9456, magnitude: 6.34, spectralType: 'G' },
        { ra: 34.92, dec: -4.3456, magnitude: 6.5, spectralType: 'A' },
        { ra: 35.5892, dec: 55.8456, magnitude: 5.17, spectralType: 'A' },  // 9 Per
        { ra: 34.8529, dec: -41.8483, magnitude: 6.37, spectralType: 'K' },
        { ra: 35.7096, dec: 41.3964, magnitude: 5.82, spectralType: 'F' },
        { ra: 34.9762, dec: -55.9447, magnitude: 5.81, spectralType: 'K' },
        { ra: 35.4858, dec: 0.3958, magnitude: 5.28, spectralType: 'M' },  // 69 Cet
        { ra: 35.9658, dec: 55.3644, magnitude: 6.28, spectralType: 'F' },
        { ra: 35.5517, dec: -0.885, magnitude: 5.42, spectralType: 'F' },  // 70 Cet
        { ra: 35.5058, dec: -10.7778, magnitude: 5.46, spectralType: 'F' },
        { ra: 35.5208, dec: -17.6622, magnitude: 5.87, spectralType: 'K' },
        { ra: 36.1037, dec: 50.0067, magnitude: 5.19, spectralType: 'G' },  // 64 And
        { ra: 35.6358, dec: -23.8164, magnitude: 5.2, spectralType: 'G' },  // Kap For
        { ra: 36.3167, dec: 56.61, magnitude: 6.25, spectralType: 'B' },  // 10 Per
        { ra: 35.7408, dec: -18.3544, magnitude: 6.22, spectralType: 'G' },
        { ra: 35.5492, dec: -43.2, magnitude: 6.31, spectralType: 'K' },
        { ra: 36.4058, dec: 50.2786, magnitude: 4.71, spectralType: 'K' },  // 65 And
        { ra: 35.7771, dec: -37.5764, magnitude: 6.53, spectralType: 'K' },
        { ra: 35.7275, dec: -51.0922, magnitude: 5.92, spectralType: 'A' },
        { ra: 36.2042, dec: 10.6106, magnitude: 5.47, spectralType: 'B' },  // 24Xi Ari
        { ra: 36.0838, dec: -25.8475, magnitude: 6.44, spectralType: 'K' },
        { ra: 36.2433, dec: -2.78, magnitude: 6.33, spectralType: 'A' },  // 71 Cet
        { ra: 35.4371, dec: -68.6594, magnitude: 4.09, spectralType: 'A' },  // Del Hyi
        { ra: 36.1408, dec: -40.8406, magnitude: 6.18, spectralType: 'G' },
        { ra: 37.2667, dec: 67.4025, magnitude: 4.52, spectralType: 'A' },  // Iot Cas
        { ra: 36.4875, dec: -12.2906, magnitude: 4.89, spectralType: 'B' },  // 72Rho Cet
        { ra: 36.9658, dec: 50.5697, magnitude: 6.12, spectralType: 'F' },  // 66 And
        { ra: 36.5013, dec: -15.3411, magnitude: 5.83, spectralType: 'A' },
        { ra: 36.7792, dec: 27.0133, magnitude: 6.18, spectralType: 'K' },
        { ra: 36.8654, dec: 31.8014, magnitude: 5.54, spectralType: 'K' },  // 11 Tri
        { ra: 36.6467, dec: -20.0428, magnitude: 5.88, spectralType: 'K' },
        { ra: 36.2246, dec: -60.3119, magnitude: 5.35, spectralType: 'F' },  // Lam Hor
        { ra: 35.7179, dec: -73.6458, magnitude: 5.01, spectralType: 'K' },  // Kap Hyi
        { ra: 37.3542, dec: 55.5364, magnitude: 6.51, spectralType: 'A' },
        { ra: 37.0417, dec: 29.6694, magnitude: 5.29, spectralType: 'F' },  // 12 Tri
        { ra: 37.0396, dec: 8.46, magnitude: 4.28, spectralType: 'B' },  // 73Xi 2Cet
        { ra: 37.0, dec: 1.9608, magnitude: 6.45, spectralType: 'K' },
        { ra: 37.2021, dec: 29.9319, magnitude: 5.89, spectralType: 'G' },  // 13 Tri
        { ra: 36.7463, dec: -47.7039, magnitude: 4.25, spectralType: 'B' },  // Kap Eri
        { ra: 36.3596, dec: -66.4947, magnitude: 6.41, spectralType: 'M' },
        { ra: 37.3067, dec: 23.4689, magnitude: 6.19, spectralType: 'A' },
        { ra: 37.0071, dec: -33.8111, magnitude: 5.14, spectralType: 'A' },  // Phi For
        { ra: 37.3971, dec: 9.5658, magnitude: 6.07, spectralType: 'K' },
        { ra: 37.5692, dec: 33.8339, magnitude: 6.25, spectralType: 'K' },
        { ra: 37.1475, dec: -31.1025, magnitude: 6.11, spectralType: 'K' },
        { ra: 37.635, dec: 25.235, magnitude: 5.92, spectralType: 'F' },
        { ra: 37.66, dec: 19.8553, magnitude: 6.15, spectralType: 'A' },  // 26 Ari
        { ra: 37.4808, dec: -22.6828, magnitude: 6.77, spectralType: 'A' },
        { ra: 37.7267, dec: 17.7039, magnitude: 6.23, spectralType: 'G' },  // 27 Ari
        { ra: 37.6883, dec: 0.2553, magnitude: 6.0, spectralType: 'A' },
        { ra: 37.5575, dec: -25.1864, magnitude: 6.51, spectralType: 'A' },
        { ra: 37.0183, dec: -64.2997, magnitude: 6.37, spectralType: 'A' },
        { ra: 37.6367, dec: -22.5456, magnitude: 6.1, spectralType: 'M' },
        { ra: 38.0258, dec: 36.1472, magnitude: 5.15, spectralType: 'K' },  // 14 Tri
        { ra: 37.8754, dec: 2.2672, magnitude: 5.25, spectralType: 'K' },
        { ra: 38.2188, dec: 34.5425, magnitude: 5.83, spectralType: 'K' },
        { ra: 38.0392, dec: -1.035, magnitude: 5.35, spectralType: 'G' },  // 75 Cet
        { ra: 38.0217, dec: -15.2447, magnitude: 4.75, spectralType: 'F' },  // 76Sig Cet
        { ra: 38.2254, dec: 15.0347, magnitude: 6.04, spectralType: 'F' },  // 29 Ari
        { ra: 38.0617, dec: -36.4275, magnitude: 6.3, spectralType: 'G' },
        { ra: 39.5083, dec: 72.8183, magnitude: 5.16, spectralType: 'G' },
        { ra: 38.2792, dec: -34.65, magnitude: 5.9, spectralType: 'K' },  // Lam1For
        { ra: 38.4175, dec: -20.0019, magnitude: 6.21, spectralType: 'K' },
        { ra: 38.8663, dec: 39.6644, magnitude: 6.36, spectralType: 'B' },
        { ra: 39.4004, dec: 65.7456, magnitude: 5.78, spectralType: 'K' },
        { ra: 38.9117, dec: 37.3122, magnitude: 5.71, spectralType: 'K' },
        { ra: 38.4612, dec: -28.2325, magnitude: 4.9, spectralType: 'B' },  // Ome For
        { ra: 38.945, dec: 34.6875, magnitude: 5.35, spectralType: 'M' },  // 15 Tri
        { ra: 38.7671, dec: 7.4714, magnitude: 6.18, spectralType: 'G' },
        { ra: 38.6779, dec: -7.8594, magnitude: 5.75, spectralType: 'K' },  // 77 Cet
        { ra: 39.0204, dec: 6.8869, magnitude: 5.82, spectralType: 'K' },
        { ra: 38.9688, dec: 5.5933, magnitude: 4.86, spectralType: 'G' },  // 78Nu Cet
        { ra: 38.4775, dec: -51.0936, magnitude: 6.24, spectralType: 'F' },
        { ra: 39.2383, dec: 38.7328, magnitude: 5.9, spectralType: 'F' },
        { ra: 39.1788, dec: 31.6075, magnitude: 6.1, spectralType: 'K' },
        { ra: 39.2604, dec: 34.2639, magnitude: 5.3, spectralType: 'M' },
        { ra: 39.0, dec: -7.8317, magnitude: 5.53, spectralType: 'M' },  // 80 Cet
        { ra: 39.3367, dec: 39.8958, magnitude: 6.54, spectralType: 'B' },
        { ra: 39.2767, dec: 32.8919, magnitude: 6.25, spectralType: 'F' },
        { ra: 38.39, dec: -62.5869, magnitude: 6.77, spectralType: 'B' },
        { ra: 39.1579, dec: 12.4475, magnitude: 5.68, spectralType: 'F' },  // 31 Ari
        { ra: 39.2404, dec: 24.6483, magnitude: 7.09, spectralType: 'F' },  // 30 Ari
        { ra: 39.2521, dec: 24.6475, magnitude: 6.5, spectralType: 'F' },  // 30 Ari
        { ra: 39.1463, dec: 7.7297, magnitude: 5.81, spectralType: 'K' },
        { ra: 39.0388, dec: -30.0447, magnitude: 5.75, spectralType: 'G' },  // Iot1For
        { ra: 39.5742, dec: 37.7267, magnitude: 6.18, spectralType: 'F' },
        { ra: 39.6158, dec: 38.0894, magnitude: 6.3, spectralType: 'B' },
        { ra: 39.5033, dec: 7.6953, magnitude: 6.39, spectralType: 'F' },
        { ra: 39.4242, dec: -3.3961, magnitude: 5.65, spectralType: 'G' },  // 81 Cet
        { ra: 39.2442, dec: -34.5783, magnitude: 5.79, spectralType: 'G' },  // Lam2For
        { ra: 39.7042, dec: 21.9614, magnitude: 5.43, spectralType: 'A' },  // 32Nu Ari
        { ra: 41.9483, dec: 81.4483, magnitude: 5.78, spectralType: 'G' },
        { ra: 39.6538, dec: 3.4431, magnitude: 6.21, spectralType: 'G' },
        { ra: 37.9187, dec: -79.1094, magnitude: 5.28, spectralType: 'G' },  // Mu Hyi
        { ra: 39.5779, dec: -30.1942, magnitude: 5.83, spectralType: 'F' },  // Iot2For
        { ra: 39.3517, dec: -52.5431, magnitude: 5.31, spectralType: 'A' },  // Eta Hor
        { ra: 39.8708, dec: 0.3286, magnitude: 4.07, spectralType: 'B' },  // 82Del Cet
        { ra: 39.6033, dec: -37.9906, magnitude: 6.49, spectralType: 'G' },
        { ra: 39.8908, dec: -11.8722, magnitude: 4.84, spectralType: 'F' },  // 83Eps Cet
        { ra: 40.1713, dec: 27.0608, magnitude: 5.3, spectralType: 'A' },  // 33 Ari
        { ra: 40.0654, dec: 6.1119, magnitude: 6.25, spectralType: 'F' },
        { ra: 40.0513, dec: -9.4531, magnitude: 5.78, spectralType: 'F' },
        { ra: 40.7617, dec: 55.1058, magnitude: 5.77, spectralType: 'B' },  // 11 Per
        { ra: 40.0104, dec: -30.6339, magnitude: 6.52, spectralType: 'K' },
        { ra: 40.7488, dec: 53.5261, magnitude: 5.84, spectralType: 'K' },
        { ra: 40.5621, dec: 40.1939, magnitude: 4.91, spectralType: 'F' },  // 12 Per
        { ra: 39.95, dec: -42.8917, magnitude: 4.75, spectralType: 'A' },
        { ra: 40.3079, dec: -0.6958, magnitude: 5.71, spectralType: 'F' },  // 84 Cet
        { ra: 41.2071, dec: 67.8247, magnitude: 5.95, spectralType: 'A' },
        { ra: 40.7579, dec: 48.2656, magnitude: 6.48, spectralType: 'G' },
        { ra: 40.5917, dec: 20.0117, magnitude: 5.69, spectralType: 'A' },  // 34Mu Ari
        { ra: 40.1667, dec: -39.8556, magnitude: 4.11, spectralType: 'K' },  // Iot Eri
        { ra: 40.4513, dec: -3.2133, magnitude: 6.05, spectralType: 'G' },
        { ra: 40.3917, dec: -14.5494, magnitude: 5.98, spectralType: 'F' },
        { ra: 40.6204, dec: 10.7417, magnitude: 6.3, spectralType: 'A' },
        { ra: 39.8821, dec: -64.2819, magnitude: 6.55, spectralType: 'B' },
        { ra: 41.05, dec: 49.2283, magnitude: 4.12, spectralType: 'F' },  // 13The Per
        { ra: 41.0217, dec: 44.2969, magnitude: 5.43, spectralType: 'G' },  // 14 Per
        { ra: 40.8629, dec: 27.7072, magnitude: 4.66, spectralType: 'B' },  // 35 Ari
        { ra: 40.165, dec: -54.55, magnitude: 5.21, spectralType: 'F' },  // Zet Hor
        { ra: 40.9633, dec: 25.6381, magnitude: 6.35, spectralType: 'A' },
        { ra: 40.825, dec: 3.2358, magnitude: 3.47, spectralType: 'A' },  // 86Gam Cet
        { ra: 40.5275, dec: -38.3839, magnitude: 6.01, spectralType: 'G' },
        { ra: 39.8975, dec: -68.2669, magnitude: 4.11, spectralType: 'B' },  // Eps Hyi
        { ra: 40.5354, dec: -46.5244, magnitude: 6.1, spectralType: 'K' },
        { ra: 41.0796, dec: 17.7639, magnitude: 6.46, spectralType: 'K' },  // 36 Ari
        { ra: 41.1371, dec: 15.3117, magnitude: 5.77, spectralType: 'B' },  // 37Omi Ari
        { ra: 40.6396, dec: -50.8003, magnitude: 5.41, spectralType: 'G' },  // Iot Hor
        { ra: 41.0308, dec: -13.8586, magnitude: 4.25, spectralType: 'B' },  // 89Pi Cet
        { ra: 41.24, dec: 12.4458, magnitude: 5.18, spectralType: 'A' },  // 38 Ari
        { ra: 41.2354, dec: 10.1142, magnitude: 4.27, spectralType: 'F' },  // 87Mu Cet
        { ra: 40.8346, dec: -40.5275, magnitude: 6.36, spectralType: 'B' },
        { ra: 42.2313, dec: 69.6342, magnitude: 6.18, spectralType: 'A' },
        { ra: 41.3371, dec: 4.7117, magnitude: 6.03, spectralType: 'F' },
        { ra: 41.0854, dec: -32.525, magnitude: 6.22, spectralType: 'A' },
        { ra: 41.2758, dec: -18.5725, magnitude: 4.47, spectralType: 'F' },  // 1Tau1Eri
        { ra: 41.7429, dec: 35.9836, magnitude: 6.25, spectralType: 'G' },
        { ra: 41.7646, dec: 35.555, magnitude: 6.3, spectralType: 'A' },
        { ra: 41.0446, dec: -52.5706, magnitude: 6.15, spectralType: 'A' },
        { ra: 41.3187, dec: -46.2872, magnitude: 6.85, spectralType: 'K' },
        { ra: 40.8608, dec: -66.7144, magnitude: 6.26, spectralType: 'F' },
        { ra: 41.9771, dec: 29.2472, magnitude: 4.51, spectralType: 'K' },  // 39 Ari
        { ra: 42.3783, dec: 57.0842, magnitude: 6.25, spectralType: 'A' },
        { ra: 41.6883, dec: -21.6397, magnitude: 6.49, spectralType: 'F' },
        { ra: 41.7967, dec: -22.4856, magnitude: 6.47, spectralType: 'F' },
        { ra: 42.1337, dec: 18.2836, magnitude: 5.82, spectralType: 'K' },  // 40 Ari
        { ra: 42.9946, dec: 68.8886, magnitude: 5.8, spectralType: 'F' },
        { ra: 42.1912, dec: 25.1881, magnitude: 5.86, spectralType: 'A' },
        { ra: 42.3629, dec: 37.3261, magnitude: 6.45, spectralType: 'F' },
        { ra: 41.9833, dec: -12.4606, magnitude: 6.9, spectralType: 'M' },
        { ra: 41.3646, dec: -63.7044, magnitude: 5.74, spectralType: 'G' },  // Gam Hor
        { ra: 42.6742, dec: 55.8956, magnitude: 3.76, spectralType: 'K' },  // 15Eta Per
        { ra: 41.8904, dec: -35.5508, magnitude: 6.51, spectralType: 'K' },  // Eta1For
        { ra: 42.3229, dec: 17.4642, magnitude: 5.22, spectralType: 'B' },  // 42Pi Ari
        { ra: 41.3858, dec: -67.6167, magnitude: 4.84, spectralType: 'A' },  // Zet Hyi
        { ra: 42.4958, dec: 27.2606, magnitude: 3.63, spectralType: 'B' },  // 41 Ari
        { ra: 42.9396, dec: 58.3147, magnitude: 6.45, spectralType: 'A' },
        { ra: 42.6463, dec: 38.3186, magnitude: 4.23, spectralType: 'F' },  // 16 Per
        { ra: 42.2725, dec: -32.4058, magnitude: 4.46, spectralType: 'K' },  // Bet For
        { ra: 42.9237, dec: 46.8419, magnitude: 5.88, spectralType: 'G' },
        { ra: 42.8783, dec: 35.0597, magnitude: 4.53, spectralType: 'K' },  // 17 Per
        { ra: 42.4625, dec: -24.5603, magnitude: 6.14, spectralType: 'K' },  // Gam1For
        { ra: 42.4758, dec: -27.9417, magnitude: 5.39, spectralType: 'A' },  // Gam2For
        { ra: 43.2167, dec: 52.9978, magnitude: 6.36, spectralType: 'B' },
        { ra: 42.8733, dec: 15.0819, magnitude: 5.49, spectralType: 'B' },  // 43Sig Ari
        { ra: 42.5617, dec: -35.8436, magnitude: 5.92, spectralType: 'K' },  // Eta2For
        { ra: 43.3383, dec: 48.5694, magnitude: 6.26, spectralType: 'G' },
        { ra: 42.7596, dec: -21.0042, magnitude: 4.75, spectralType: 'K' },  // 2Tau2Eri
        { ra: 42.6683, dec: -35.6761, magnitude: 5.47, spectralType: 'K' },  // Eta3For
        { ra: 42.2562, dec: -62.8067, magnitude: 5.26, spectralType: 'A' },  // Nu Hor
        { ra: 42.6996, dec: -39.9317, magnitude: 6.36, spectralType: 'A' },
        { ra: 43.5646, dec: 52.7625, magnitude: 3.95, spectralType: 'G' },  // 18Tau Per
        { ra: 43.4275, dec: 38.3375, magnitude: 5.33, spectralType: 'F' },  // 20 Per
        { ra: 43.2987, dec: 16.4833, magnitude: 6.31, spectralType: 'F' },
        { ra: 43.1337, dec: -12.7694, magnitude: 6.04, spectralType: 'K' },
        { ra: 42.9804, dec: -30.8144, magnitude: 6.4, spectralType: 'F' },
        { ra: 43.2104, dec: -9.4411, magnitude: 6.32, spectralType: 'A' },
        { ra: 43.9871, dec: 61.5211, magnitude: 5.59, spectralType: 'F' },
        { ra: 44.1033, dec: 64.3325, magnitude: 6.24, spectralType: 'K' },
        { ra: 43.3971, dec: -22.3764, magnitude: 5.95, spectralType: 'K' },
        { ra: 43.3933, dec: -38.4369, magnitude: 5.92, spectralType: 'F' },  // Psi For
        { ra: 44.2108, dec: 51.2608, magnitude: 6.22, spectralType: 'K' },
        { ra: 44.1392, dec: 47.1639, magnitude: 6.02, spectralType: 'K' },
        { ra: 43.08, dec: -62.9097, magnitude: 6.03, spectralType: 'K' },
        { ra: 43.9521, dec: 18.3317, magnitude: 5.91, spectralType: 'M' },  // 45Rho2Ari
        { ra: 43.4704, dec: -49.8903, magnitude: 4.0, spectralType: 'M' },
        { ra: 44.1088, dec: 18.0231, magnitude: 5.63, spectralType: 'F' },  // 46Rho3Ari
        { ra: 44.0575, dec: 8.3817, magnitude: 5.97, spectralType: 'F' },
        { ra: 43.5271, dec: -50.8714, magnitude: 6.21, spectralType: 'K' },
        { ra: 42.6187, dec: -75.0669, magnitude: 4.75, spectralType: 'K' },  // Nu Hyi
        { ra: 44.3221, dec: 31.9342, magnitude: 5.11, spectralType: 'B' },  // 21 Per
        { ra: 44.1071, dec: -8.8981, magnitude: 3.89, spectralType: 'K' },  // 3Eta Eri
        { ra: 44.1558, dec: -3.7122, magnitude: 5.17, spectralType: 'A' },
        { ra: 44.5096, dec: 38.615, magnitude: 6.04, spectralType: 'K' },
        { ra: 44.2692, dec: 4.5011, magnitude: 6.11, spectralType: 'M' },
        { ra: 44.5217, dec: 20.6686, magnitude: 5.8, spectralType: 'F' },  // 47 Ari
        { ra: 44.6904, dec: 39.6628, magnitude: 4.7, spectralType: 'A' },  // 22Pi Per
        { ra: 43.5871, dec: -64.4356, magnitude: 6.56, spectralType: 'K' },
        { ra: 46.5325, dec: 79.4186, magnitude: 5.49, spectralType: 'M' },
        { ra: 44.7654, dec: 35.1831, magnitude: 4.93, spectralType: 'K' },  // 24 Per
        { ra: 44.3488, dec: -23.8619, magnitude: 5.45, spectralType: 'A' },  // 4 Eri
        { ra: 44.3046, dec: -29.8553, magnitude: 6.29, spectralType: 'A' },
        { ra: 44.9579, dec: 47.2208, magnitude: 5.47, spectralType: 'G' },
        { ra: 44.9162, dec: 41.0331, magnitude: 5.89, spectralType: 'K' },
        { ra: 44.8029, dec: 21.3403, magnitude: 4.63, spectralType: 'A' },  // 48Eps Ari
        { ra: 44.8029, dec: 21.3403, magnitude: 4.63, spectralType: 'A' },  // 48Eps Ari
        { ra: 44.5238, dec: -23.6061, magnitude: 5.84, spectralType: 'K' },  // 6 Eri
        { ra: 45.2175, dec: 52.3517, magnitude: 5.28, spectralType: 'B' },
        { ra: 45.2225, dec: 52.3522, magnitude: 6.74, spectralType: 'B' },
        { ra: 44.675, dec: -2.7825, magnitude: 5.23, spectralType: 'A' },
        { ra: 44.3863, dec: -38.1911, magnitude: 6.41, spectralType: 'A' },
        { ra: 45.0492, dec: 38.1317, magnitude: 6.11, spectralType: 'B' },
        { ra: 44.6975, dec: -9.7764, magnitude: 6.14, spectralType: 'A' },
        { ra: 44.9288, dec: 8.9075, magnitude: 4.7, spectralType: 'B' },  // 91Lam Cet
        { ra: 44.5654, dec: -40.3047, magnitude: 3.24, spectralType: 'A' },  // The1Eri
        { ra: 44.5679, dec: -40.3044, magnitude: 4.35, spectralType: 'A' },  // The2Eri
        { ra: 44.9217, dec: -2.465, magnitude: 5.56, spectralType: 'B' },  // 5 Eri
        { ra: 44.7775, dec: -28.9069, magnitude: 6.14, spectralType: 'K' },
        { ra: 44.9004, dec: -25.2742, magnitude: 5.71, spectralType: 'F' },  // Zet For
        { ra: 45.1837, dec: 10.8703, magnitude: 5.95, spectralType: 'K' },
        { ra: 44.9096, dec: -32.5072, magnitude: 6.31, spectralType: 'A' },
        { ra: 45.2125, dec: -2.8786, magnitude: 6.11, spectralType: 'M' },  // 7 Eri
        { ra: 45.4754, dec: 26.4622, magnitude: 5.9, spectralType: 'A' },  // 49 Ari
        { ra: 47.9283, dec: 81.4706, magnitude: 5.95, spectralType: 'A' },
        { ra: 45.2917, dec: -7.6628, magnitude: 5.75, spectralType: 'K' },  // 8Rho1Eri
        { ra: 45.4679, dec: 5.3361, magnitude: 6.25, spectralType: 'K' },
        { ra: 44.6992, dec: -64.0714, magnitude: 4.99, spectralType: 'A' },  // Bet Hor
        { ra: 45.5938, dec: 4.3528, magnitude: 5.61, spectralType: 'B' },  // 93 Cet
        { ra: 45.57, dec: 4.0897, magnitude: 2.53, spectralType: 'M' },  // 92Alp Cet
        { ra: 45.4838, dec: -9.9614, magnitude: 5.83, spectralType: 'G' },
        { ra: 45.5388, dec: -6.4947, magnitude: 6.19, spectralType: 'G' },
        { ra: 45.4071, dec: -28.0917, magnitude: 5.89, spectralType: 'G' },  // Eps For
        { ra: 46.1992, dec: 53.5064, magnitude: 2.93, spectralType: 'G' },  // 23Gam Per
        { ra: 45.8762, dec: 28.2697, magnitude: 6.36, spectralType: 'F' },
        { ra: 45.6763, dec: -7.6853, magnitude: 5.32, spectralType: 'K' },  // 9Rho2Eri
        { ra: 46.385, dec: 56.7058, magnitude: 4.76, spectralType: 'G' },
        { ra: 45.5979, dec: -23.6244, magnitude: 4.09, spectralType: 'A' },  // 11Tau3Eri
        { ra: 46.4162, dec: 56.0686, magnitude: 6.11, spectralType: 'G' },
        { ra: 46.2942, dec: 38.8403, magnitude: 3.39, spectralType: 'M' },  // 25Rho Per
        { ra: 46.8292, dec: 64.0578, magnitude: 5.89, spectralType: 'B' },
        { ra: 46.3367, dec: 40.5825, magnitude: 6.05, spectralType: 'K' },
        { ra: 46.1696, dec: 15.8561, magnitude: 6.49, spectralType: 'K' },
        { ra: 46.0683, dec: -7.6008, magnitude: 5.26, spectralType: 'A' },  // 10Rho3Eri
        { ra: 46.1588, dec: 1.8636, magnitude: 6.05, spectralType: 'K' },
        { ra: 46.3613, dec: 25.2553, magnitude: 6.8, spectralType: 'B' },  // 52 Ari
        { ra: 46.3613, dec: 25.2553, magnitude: 7.0, spectralType: 'B' },  // 52 Ari
        { ra: 45.7329, dec: -46.975, magnitude: 5.82, spectralType: 'K' },
        { ra: 47.0162, dec: 52.2133, magnitude: 6.31, spectralType: 'B' },
        { ra: 46.5988, dec: 13.1872, magnitude: 5.62, spectralType: 'K' },
        { ra: 47.9846, dec: 74.3936, magnitude: 4.87, spectralType: 'A' },
        { ra: 46.9475, dec: 47.3083, magnitude: 6.41, spectralType: 'A' },
        { ra: 45.9033, dec: -59.7378, magnitude: 5.11, spectralType: 'F' },  // Mu Hor
        { ra: 46.6396, dec: -6.0886, magnitude: 5.27, spectralType: 'M' },
        { ra: 47.0421, dec: 40.9556, magnitude: 2.12, spectralType: 'B' },  // 26Bet Per
        { ra: 47.2667, dec: 49.6133, magnitude: 4.05, spectralType: 'G' },  // Iot Per
        { ra: 46.8571, dec: 17.88, magnitude: 6.11, spectralType: 'B' },  // 53 Ari
        { ra: 45.5642, dec: -71.9025, magnitude: 5.53, spectralType: 'B' },  // The Hyi
        { ra: 47.0883, dec: 18.795, magnitude: 6.27, spectralType: 'M' },  // 54 Ari
        { ra: 47.3742, dec: 44.8572, magnitude: 3.8, spectralType: 'K' },  // 27Kap Per
        { ra: 47.1612, dec: 8.4708, magnitude: 6.28, spectralType: 'G' },
        { ra: 46.9621, dec: -27.8311, magnitude: 6.19, spectralType: 'A' },
        { ra: 47.4029, dec: 29.0769, magnitude: 5.72, spectralType: 'B' },  // 55 Ari
        { ra: 47.5367, dec: 27.82, magnitude: 6.42, spectralType: 'A' },
        { ra: 47.6125, dec: 26.8964, magnitude: 6.02, spectralType: 'K' },
        { ra: 47.8225, dec: 39.6117, magnitude: 4.63, spectralType: 'K' },  // 28Ome Per
        { ra: 47.6621, dec: 11.8725, magnitude: 5.98, spectralType: 'B' },
        { ra: 48.11, dec: 47.7258, magnitude: 6.33, spectralType: 'K' },
        { ra: 48.04, dec: 42.3761, magnitude: 6.15, spectralType: 'B' },
        { ra: 47.9075, dec: 19.7267, magnitude: 4.35, spectralType: 'K' },  // 57Del Ari
        { ra: 47.8412, dec: 13.0478, magnitude: 6.12, spectralType: 'K' },
        { ra: 47.6475, dec: -23.7383, magnitude: 6.38, spectralType: 'K' },
        { ra: 48.0592, dec: 27.2569, magnitude: 5.79, spectralType: 'B' },  // 56 Ari
        { ra: 47.8283, dec: -3.8117, magnitude: 6.05, spectralType: 'M' },
        { ra: 48.35, dec: 48.1769, magnitude: 5.9, spectralType: 'G' },
        { ra: 47.82, dec: -16.0253, magnitude: 6.26, spectralType: 'K' },
        { ra: 48.11, dec: 6.6608, magnitude: 5.56, spectralType: 'K' },
        { ra: 46.955, dec: -69.2656, magnitude: 6.15, spectralType: 'K' },
        { ra: 47.6142, dec: -48.7342, magnitude: 6.12, spectralType: 'K' },
        { ra: 50.0821, dec: 77.7347, magnitude: 5.45, spectralType: 'A' },
        { ra: 48.1933, dec: -1.1961, magnitude: 5.06, spectralType: 'F' },  // 94 Cet
        { ra: 48.0179, dec: -28.9869, magnitude: 3.87, spectralType: 'F' },  // Alp For
        { ra: 48.95, dec: 57.1408, magnitude: 5.79, spectralType: 'A' },
        { ra: 53.0838, dec: 84.9111, magnitude: 5.61, spectralType: 'G' },
        { ra: 48.7363, dec: 42.5039, magnitude: 6.07, spectralType: 'K' },
        { ra: 49.3817, dec: 65.6586, magnitude: 6.36, spectralType: 'A' },
        { ra: 48.1075, dec: -44.4197, magnitude: 5.93, spectralType: 'F' },
        { ra: 49.0508, dec: 50.9378, magnitude: 5.03, spectralType: 'G' },
        { ra: 48.2563, dec: -35.9439, magnitude: 6.27, spectralType: 'B' },
        { ra: 48.8354, dec: 30.5567, magnitude: 5.52, spectralType: 'A' },
        { ra: 48.7254, dec: 21.0444, magnitude: 4.89, spectralType: 'A' },  // 58Zet Ari
        { ra: 49.0196, dec: 45.3458, magnitude: 6.16, spectralType: 'M' },
        { ra: 48.4083, dec: -29.8042, magnitude: 6.16, spectralType: 'K' },
        { ra: 48.9458, dec: 32.8564, magnitude: 6.31, spectralType: 'F' },
        { ra: 49.0079, dec: 34.6886, magnitude: 6.25, spectralType: 'A' },
        { ra: 48.1383, dec: -57.3217, magnitude: 5.74, spectralType: 'G' },
        { ra: 49.1462, dec: 32.1836, magnitude: 6.06, spectralType: 'G' },
        { ra: 49.2975, dec: 40.4833, magnitude: 6.45, spectralType: 'B' },
        { ra: 48.7508, dec: -26.1003, magnitude: 6.25, spectralType: 'A' },
        { ra: 46.8833, dec: -78.9894, magnitude: 5.57, spectralType: 'F' },
        { ra: 49.4475, dec: 44.025, magnitude: 5.47, spectralType: 'B' },  // 30 Per
        { ra: 49.0037, dec: -5.9186, magnitude: 6.17, spectralType: 'B' },
        { ra: 48.9583, dec: -8.8197, magnitude: 4.8, spectralType: 'A' },  // 13Zet Eri
        { ra: 49.9975, dec: 65.6522, magnitude: 4.84, spectralType: 'B' },
        { ra: 49.4408, dec: 39.2833, magnitude: 5.96, spectralType: 'A' },
        { ra: 49.6575, dec: 50.2222, magnitude: 5.15, spectralType: 'B' },  // 29 Per
        { ra: 49.1487, dec: -9.1544, magnitude: 6.14, spectralType: 'F' },  // 14 Eri
        { ra: 49.7817, dec: 50.095, magnitude: 5.03, spectralType: 'B' },  // 31 Per
        { ra: 49.0471, dec: -30.8275, magnitude: 6.65, spectralType: 'A' },
        { ra: 49.6825, dec: 34.2228, magnitude: 4.82, spectralType: 'K' },
        { ra: 49.5933, dec: -0.9303, magnitude: 5.38, spectralType: 'G' },  // 95 Cet
        { ra: 49.5117, dec: -28.7969, magnitude: 5.91, spectralType: 'F' },
        { ra: 49.5921, dec: -22.5114, magnitude: 4.88, spectralType: 'G' },  // 15 Eri
        { ra: 49.9825, dec: 27.0711, magnitude: 5.9, spectralType: 'G' },  // 59 Ari
        { ra: 49.8404, dec: 3.3703, magnitude: 4.83, spectralType: 'G' },  // 96Kap1Cet
        { ra: 49.6717, dec: -18.5597, magnitude: 5.71, spectralType: 'F' },
        { ra: 49.3608, dec: -47.7517, magnitude: 5.85, spectralType: 'K' },
        { ra: 50.085, dec: 29.0483, magnitude: 4.47, spectralType: 'K' },
        { ra: 50.1067, dec: 25.6628, magnitude: 6.12, spectralType: 'K' },  // 60 Ari
        { ra: 50.4692, dec: 49.0708, magnitude: 5.93, spectralType: 'F' },
        { ra: 50.3604, dec: 43.3294, magnitude: 4.95, spectralType: 'A' },  // 32 Per
        { ra: 49.8792, dec: -21.7578, magnitude: 3.69, spectralType: 'M' },  // 16Tau4Eri
        { ra: 49.895, dec: -24.1231, magnitude: 5.61, spectralType: 'M' },
        { ra: 50.3067, dec: 21.1469, magnitude: 5.28, spectralType: 'B' },  // 61Tau1Ari
        { ra: 49.4425, dec: -62.5753, magnitude: 5.54, spectralType: 'G' },  // Zet1Ret
        { ra: 50.2783, dec: 3.6756, magnitude: 5.69, spectralType: 'G' },  // 97Kap2Cet
        { ra: 49.9821, dec: -43.0697, magnitude: 4.27, spectralType: 'G' },
        { ra: 51.1687, dec: 64.5861, magnitude: 5.23, spectralType: 'M' },
        { ra: 49.5537, dec: -62.5064, magnitude: 5.24, spectralType: 'G' },  // Zet2Ret
        { ra: 50.805, dec: 49.2133, magnitude: 5.29, spectralType: 'B' },
        { ra: 50.5496, dec: 27.6075, magnitude: 5.52, spectralType: 'G' },  // 62 Ari
        { ra: 50.1883, dec: -26.6064, magnitude: 6.39, spectralType: 'F' },
        { ra: 49.4958, dec: -66.9269, magnitude: 6.05, spectralType: 'A' },
        { ra: 50.6883, dec: 20.7419, magnitude: 5.09, spectralType: 'K' },  // 63Tau2Ari
        { ra: 50.35, dec: -23.6353, magnitude: 5.52, spectralType: 'G' },
        { ra: 51.0808, dec: 49.8611, magnitude: 1.79, spectralType: 'F' },  // 33Alp Per
        { ra: 50.5679, dec: -25.5878, magnitude: 6.35, spectralType: 'A' },
        { ra: 51.1237, dec: 33.5358, magnitude: 5.61, spectralType: 'A' },
        { ra: 51.4517, dec: 53.9217, magnitude: 6.51, spectralType: 'A' },
        { ra: 50.3888, dec: -47.7769, magnitude: 6.39, spectralType: 'K' },
        { ra: 51.0771, dec: 24.7242, magnitude: 5.5, spectralType: 'K' },  // 64 Ari
        { ra: 50.9129, dec: 4.8819, magnitude: 6.38, spectralType: 'G' },
        { ra: 50.8242, dec: -7.7942, magnitude: 6.2, spectralType: 'G' },
        { ra: 48.99, dec: -77.3883, magnitude: 5.52, spectralType: 'F' },  // Iot Hyi
        { ra: 51.2892, dec: 41.2572, magnitude: 6.51, spectralType: 'A' },
        { ra: 51.1088, dec: 20.8036, magnitude: 6.08, spectralType: 'A' },  // 65 Ari
        { ra: 51.0421, dec: 12.6294, magnitude: 6.04, spectralType: 'K' },
        { ra: 51.4892, dec: 49.1208, magnitude: 6.09, spectralType: 'B' },
        { ra: 51.2033, dec: 9.0289, magnitude: 3.6, spectralType: 'G' },  // 1Omi Tau
        { ra: 50.9358, dec: -32.7072, magnitude: 6.5, spectralType: 'K' },
        { ra: 52.5812, dec: 71.8639, magnitude: 6.32, spectralType: 'M' },
        { ra: 52.0983, dec: 60.2556, magnitude: 6.49, spectralType: 'B' },
        { ra: 52.0129, dec: 49.0628, magnitude: 4.98, spectralType: 'B' },
        { ra: 52.2671, dec: 59.9403, magnitude: 4.21, spectralType: 'B' },
        { ra: 51.7633, dec: 18.7564, magnitude: 6.57, spectralType: 'A' },
        { ra: 52.2183, dec: 49.8483, magnitude: 5.58, spectralType: 'B' },
        { ra: 51.7925, dec: 9.7328, magnitude: 3.74, spectralType: 'B' },  // 2Xi Tau
        { ra: 51.8279, dec: 12.735, magnitude: 6.28, spectralType: 'A' },
        { ra: 52.4787, dec: 58.8786, magnitude: 4.54, spectralType: 'A' },
        { ra: 52.0867, dec: 33.8075, magnitude: 5.61, spectralType: 'A' },
        { ra: 51.4825, dec: -35.9208, magnitude: 6.39, spectralType: 'A' },  // Chi1For
        { ra: 52.5471, dec: 59.3661, magnitude: 6.13, spectralType: 'A' },
        { ra: 52.3421, dec: 49.5089, magnitude: 4.67, spectralType: 'B' },  // 34 Per
        { ra: 51.5938, dec: -27.3175, magnitude: 5.93, spectralType: 'G' },
        { ra: 52.5008, dec: 55.4519, magnitude: 5.09, spectralType: 'A' },
        { ra: 52.3592, dec: 46.9378, magnitude: 6.24, spectralType: 'B' },
        { ra: 52.1108, dec: 22.8042, magnitude: 6.03, spectralType: 'K' },  // 66 Ari
        { ra: 51.5488, dec: -41.6369, magnitude: 6.32, spectralType: 'A' },
        { ra: 52.0042, dec: -11.2867, magnitude: 5.73, spectralType: 'K' },
        { ra: 52.6542, dec: 48.1036, magnitude: 5.82, spectralType: 'B' },
        { ra: 52.6438, dec: 47.9953, magnitude: 4.36, spectralType: 'K' },  // 35Sig Per
        { ra: 51.0104, dec: -69.6247, magnitude: 6.15, spectralType: 'G' },
        { ra: 51.8892, dec: -35.6814, magnitude: 5.71, spectralType: 'K' },  // Chi2For
        { ra: 53.8017, dec: 73.3469, magnitude: 6.57, spectralType: 'A' },
        { ra: 52.8725, dec: 49.2097, magnitude: 6.29, spectralType: 'A' },
        { ra: 52.0479, dec: -35.8533, magnitude: 6.5, spectralType: 'A' },  // Chi3For
        { ra: 52.9546, dec: 49.4008, magnitude: 6.39, spectralType: 'B' },
        { ra: 52.4129, dec: -6.805, magnitude: 5.99, spectralType: 'G' },
        { ra: 52.6021, dec: 11.3364, magnitude: 5.14, spectralType: 'A' },  // 4 Tau
        { ra: 52.4, dec: -12.6747, magnitude: 5.59, spectralType: 'A' },
        { ra: 53.0358, dec: 48.0236, magnitude: 5.47, spectralType: 'B' },
        { ra: 51.4008, dec: -69.3364, magnitude: 5.96, spectralType: 'F' },
        { ra: 52.8367, dec: 27.5719, magnitude: 5.96, spectralType: 'A' },
        { ra: 52.7183, dec: 12.9367, magnitude: 4.11, spectralType: 'K' },  // 5 Tau
        { ra: 52.6892, dec: 6.1886, magnitude: 5.94, spectralType: 'G' },
        { ra: 53.3837, dec: 58.765, magnitude: 6.4, spectralType: 'A' },
        { ra: 53.1096, dec: 46.0569, magnitude: 5.31, spectralType: 'F' },  // 36 Per
        { ra: 52.6546, dec: -5.0753, magnitude: 4.73, spectralType: 'B' },  // 17 Eri
        { ra: 53.4217, dec: 57.8689, magnitude: 6.37, spectralType: 'F' },
        { ra: 53.1629, dec: 44.8556, magnitude: 6.41, spectralType: 'B' },
        { ra: 53.4125, dec: 54.9747, magnitude: 5.98, spectralType: 'A' },
        { ra: 53.1667, dec: 35.4617, magnitude: 5.9, spectralType: 'B' },
        { ra: 52.4792, dec: -42.6342, magnitude: 5.78, spectralType: 'A' },
        { ra: 52.5567, dec: -41.37, magnitude: 6.12, spectralType: 'F' },
        { ra: 53.7533, dec: 60.0411, magnitude: 6.46, spectralType: 'F' },
        { ra: 53.3962, dec: 39.8994, magnitude: 5.81, spectralType: 'A' },
        { ra: 53.15, dec: 9.3736, magnitude: 5.77, spectralType: 'B' },  // 6 Tau
        { ra: 54.8533, dec: 75.7397, magnitude: 6.27, spectralType: 'G' },
        { ra: 52.6542, dec: -47.3753, magnitude: 5.99, spectralType: 'A' },
        { ra: 52.9746, dec: -25.6142, magnitude: 6.38, spectralType: 'A' },
        { ra: 52.3446, dec: -62.9375, magnitude: 4.72, spectralType: 'F' },  // Kap Ret
        { ra: 53.2325, dec: -9.4583, magnitude: 3.73, spectralType: 'K' },  // 18Eps Eri
        { ra: 53.5346, dec: 17.8328, magnitude: 6.17, spectralType: 'K' },
        { ra: 53.6108, dec: 24.4644, magnitude: 5.92, spectralType: 'A' },  // 7 Tau
        { ra: 54.1225, dec: 48.1928, magnitude: 4.23, spectralType: 'B' },  // 37Psi Per
        { ra: 53.4471, dec: -21.6328, magnitude: 4.27, spectralType: 'B' },  // 19Tau5Eri
        { ra: 53.705, dec: 6.4178, magnitude: 6.49, spectralType: 'G' },
        { ra: 53.145, dec: -50.3786, magnitude: 5.68, spectralType: 'K' },
        { ra: 53.6558, dec: -9.8686, magnitude: 6.25, spectralType: 'A' },
        { ra: 52.715, dec: -66.4897, magnitude: 5.83, spectralType: 'B' },
        { ra: 53.4867, dec: -31.0803, magnitude: 6.2, spectralType: 'F' },
        { ra: 54.5821, dec: 56.9328, magnitude: 6.3, spectralType: 'B' },
        { ra: 53.6396, dec: -31.8747, magnitude: 6.4, spectralType: 'K' },
        { ra: 53.215, dec: -61.0169, magnitude: 6.41, spectralType: 'K' },
        { ra: 54.5008, dec: 42.5831, magnitude: 6.42, spectralType: 'B' },
        { ra: 53.9904, dec: -11.1936, magnitude: 5.57, spectralType: 'G' },
        { ra: 54.1971, dec: 0.5878, magnitude: 5.71, spectralType: 'G' },
        { ra: 54.0725, dec: -17.4669, magnitude: 5.23, spectralType: 'B' },  // 20 Eri
        { ra: 54.2183, dec: 0.4017, magnitude: 4.28, spectralType: 'F' },  // 10 Tau
        { ra: 54.4492, dec: 15.4308, magnitude: 6.39, spectralType: 'A' },
        { ra: 54.7504, dec: 20.9158, magnitude: 6.5, spectralType: 'A' },
        { ra: 53.6029, dec: -65.7644, magnitude: 6.75, spectralType: 'A' },
        { ra: 55.5388, dec: 63.2167, magnitude: 5.1, spectralType: 'G' },
        { ra: 54.2737, dec: -40.2747, magnitude: 4.58, spectralType: 'K' },
        { ra: 62.5063, dec: 86.6261, magnitude: 5.86, spectralType: 'F' },
        { ra: 54.6217, dec: -7.3917, magnitude: 5.85, spectralType: 'G' },
        { ra: 52.495, dec: -78.3519, magnitude: 5.7, spectralType: 'G' },
        { ra: 54.8571, dec: 16.5367, magnitude: 6.16, spectralType: 'K' },
        { ra: 54.7546, dec: -5.6261, magnitude: 5.96, spectralType: 'K' },  // 21 Eri
        { ra: 55.6779, dec: 59.9694, magnitude: 5.76, spectralType: 'K' },
        { ra: 55.2829, dec: 37.58, magnitude: 5.57, spectralType: 'B' },
        { ra: 54.6988, dec: -27.9431, magnitude: 6.01, spectralType: 'A' },  // Tau For
        { ra: 54.9629, dec: 3.0569, magnitude: 5.57, spectralType: 'G' },  // 12 Tau
        { ra: 54.9096, dec: -3.3931, magnitude: 6.23, spectralType: 'G' },
        { ra: 54.8558, dec: -10.4372, magnitude: 6.19, spectralType: 'G' },
        { ra: 55.1929, dec: 25.3294, magnitude: 6.11, spectralType: 'A' },  // 11 Tau
        { ra: 54.9979, dec: -1.1206, magnitude: 6.12, spectralType: 'K' },
        { ra: 55.0475, dec: -15.2267, magnitude: 6.33, spectralType: 'G' },
        { ra: 55.1596, dec: -5.2106, magnitude: 5.53, spectralType: 'B' },  // 22 Eri
        { ra: 55.7313, dec: 47.7875, magnitude: 3.01, spectralType: 'B' },  // 39Del Per
        { ra: 55.5938, dec: 33.965, magnitude: 4.97, spectralType: 'B' },  // 40 Per
        { ra: 56.5037, dec: 67.2017, magnitude: 5.8, spectralType: 'F' },
        { ra: 55.3075, dec: -11.8031, magnitude: 6.49, spectralType: 'F' },
        { ra: 55.5788, dec: 19.7003, magnitude: 5.69, spectralType: 'B' },  // 13 Tau
        { ra: 56.0267, dec: 48.5236, magnitude: 6.06, spectralType: 'K' },
        { ra: 55.3433, dec: -19.5847, magnitude: 6.59, spectralType: 'A' },
        { ra: 56.5096, dec: 63.345, magnitude: 4.8, spectralType: 'G' },
        { ra: 56.1704, dec: 46.0997, magnitude: 6.11, spectralType: 'A' },
        { ra: 56.0796, dec: 32.2883, magnitude: 3.83, spectralType: 'B' },  // 38Omi Per
        { ra: 55.9467, dec: 19.665, magnitude: 6.14, spectralType: 'G' },  // 14 Tau
        { ra: 56.1308, dec: 36.46, magnitude: 5.59, spectralType: 'A' },
        { ra: 55.5621, dec: -31.9383, magnitude: 5.0, spectralType: 'B' },  // Del For
        { ra: 56.2983, dec: 42.5786, magnitude: 3.77, spectralType: 'F' },  // 41Nu Per
        { ra: 55.8121, dec: -9.7633, magnitude: 3.54, spectralType: 'K' },  // 23Del Eri
        { ra: 56.1171, dec: 20.9286, magnitude: 6.1, spectralType: 'A' },
        { ra: 57.3075, dec: 70.8711, magnitude: 5.44, spectralType: 'A' },
        { ra: 55.8908, dec: -10.4856, magnitude: 5.6, spectralType: 'A' },
        { ra: 56.2008, dec: 24.2894, magnitude: 5.46, spectralType: 'B' },  // 16 Tau
        { ra: 56.4971, dec: 45.6819, magnitude: 5.66, spectralType: 'B' },
        { ra: 56.2188, dec: 24.1133, magnitude: 3.7, spectralType: 'B' },  // 17 Tau
        { ra: 55.7088, dec: -37.3136, magnitude: 4.59, spectralType: 'K' },
        { ra: 56.2904, dec: 24.8392, magnitude: 5.64, spectralType: 'B' },  // 18 Tau
        { ra: 56.3021, dec: 24.4672, magnitude: 4.3, spectralType: 'B' },  // 19 Tau
        { ra: 56.1271, dec: -1.1631, magnitude: 5.25, spectralType: 'B' },  // 24 Eri
        { ra: 56.8842, dec: 55.9225, magnitude: 6.1, spectralType: 'B' },
        { ra: 57.5896, dec: 71.3322, magnitude: 4.63, spectralType: 'A' },  // Gam Cam
        { ra: 56.4567, dec: 24.3678, magnitude: 3.87, spectralType: 'B' },  // 20 Tau
        { ra: 56.2354, dec: -0.2967, magnitude: 5.55, spectralType: 'K' },  // 25 Eri
        { ra: 56.4767, dec: 24.5547, magnitude: 5.76, spectralType: 'B' },  // 21 Tau
        { ra: 56.5121, dec: 24.5281, magnitude: 6.43, spectralType: 'A' },  // 22 Tau
        { ra: 56.4183, dec: 6.05, magnitude: 5.35, spectralType: 'B' },  // 29 Tau
        { ra: 54.125, dec: -78.3231, magnitude: 6.29, spectralType: 'K' },
        { ra: 57.38, dec: 65.5261, magnitude: 4.47, spectralType: 'M' },
        { ra: 56.5817, dec: 23.9483, magnitude: 4.18, spectralType: 'B' },  // 23 Tau
        { ra: 56.0258, dec: -40.6603, magnitude: 6.45, spectralType: 'K' },
        { ra: 57.4029, dec: 63.2972, magnitude: 5.85, spectralType: 'A' },
        { ra: 56.5396, dec: 6.8031, magnitude: 5.91, spectralType: 'G' },
        { ra: 57.0762, dec: 50.7367, magnitude: 6.14, spectralType: 'B' },
        { ra: 57.3317, dec: 57.1181, magnitude: 6.46, spectralType: 'A' },
        { ra: 56.5354, dec: -12.1017, magnitude: 4.42, spectralType: 'M' },  // 26Pi Eri
        { ra: 56.9692, dec: 33.6, magnitude: 6.57, spectralType: 'B' },
        { ra: 56.9537, dec: 32.195, magnitude: 6.25, spectralType: 'G' },
        { ra: 56.8713, dec: 24.105, magnitude: 2.87, spectralType: 'B' },  // 25Eta Tau
        { ra: 57.9242, dec: 68.5075, magnitude: 6.32, spectralType: 'B' },
        { ra: 56.2108, dec: -48.0614, magnitude: 6.49, spectralType: 'G' },
        { ra: 56.1408, dec: -54.2739, magnitude: 6.3, spectralType: 'K' },
        { ra: 56.3158, dec: -47.3597, magnitude: 5.73, spectralType: 'K' },
        { ra: 57.2842, dec: 43.9631, magnitude: 6.02, spectralType: 'A' },
        { ra: 56.6142, dec: -29.3381, magnitude: 5.9, spectralType: 'A' },  // Sig For
        { ra: 57.0871, dec: 23.4211, magnitude: 5.45, spectralType: 'B' },
        { ra: 56.7121, dec: -23.2497, magnitude: 4.23, spectralType: 'F' },  // 27Tau6Eri
        { ra: 57.0679, dec: 11.1433, magnitude: 5.07, spectralType: 'B' },  // 30 Tau
        { ra: 56.05, dec: -64.8069, magnitude: 3.85, spectralType: 'K' },  // Bet Ret
        { ra: 57.5188, dec: 44.9678, magnitude: 5.66, spectralType: 'G' },
        { ra: 57.3858, dec: 33.0914, magnitude: 5.11, spectralType: 'A' },  // 42 Per
        { ra: 57.2904, dec: 24.0533, magnitude: 3.63, spectralType: 'B' },  // 27 Tau
        { ra: 56.8338, dec: -29.9019, magnitude: 6.55, spectralType: 'F' },
        { ra: 57.2967, dec: 24.1367, magnitude: 5.09, spectralType: 'B' },  // 28 Tau
        { ra: 56.915, dec: -23.8747, magnitude: 5.24, spectralType: 'A' },  // 28Tau7Eri
        { ra: 57.1621, dec: 0.2278, magnitude: 5.91, spectralType: 'K' },
        { ra: 57.4312, dec: 23.7117, magnitude: 6.17, spectralType: 'B' },
        { ra: 56.9833, dec: -30.1678, magnitude: 5.54, spectralType: 'G' },  // Rho For
        { ra: 57.4792, dec: 22.2444, magnitude: 6.07, spectralType: 'B' },
        { ra: 56.9567, dec: -36.1058, magnitude: 6.21, spectralType: 'B' },
        { ra: 57.1492, dec: -20.9031, magnitude: 5.81, spectralType: 'K' },
        { ra: 57.5788, dec: 25.5794, magnitude: 5.26, spectralType: 'A' },
        { ra: 57.1475, dec: -37.6222, magnitude: 5.4, spectralType: 'A' },
        { ra: 57.1496, dec: -37.6206, magnitude: 4.73, spectralType: 'B' },
        { ra: 57.9738, dec: 34.3592, magnitude: 5.77, spectralType: 'B' },
        { ra: 58.4304, dec: 57.975, magnitude: 5.8, spectralType: 'A' },
        { ra: 57.9025, dec: 22.0317, magnitude: 6.83, spectralType: 'K' },
        { ra: 57.8158, dec: 13.0458, magnitude: 6.3, spectralType: 'B' },
        { ra: 57.3637, dec: -36.2003, magnitude: 4.17, spectralType: 'G' },
        { ra: 59.1258, dec: 71.8217, magnitude: 6.34, spectralType: 'A' },
        { ra: 58.0179, dec: 31.1683, magnitude: 6.25, spectralType: 'A' },
        { ra: 58.4112, dec: 48.6506, magnitude: 5.76, spectralType: 'K' },
        { ra: 58.0008, dec: 6.5347, magnitude: 5.67, spectralType: 'B' },  // 31 Tau
        { ra: 57.6567, dec: -36.4253, magnitude: 6.86, spectralType: 'B' },
        { ra: 58.2917, dec: 17.3269, magnitude: 5.97, spectralType: 'F' },
        { ra: 58.1733, dec: -5.3614, magnitude: 5.48, spectralType: 'B' },  // 30 Eri
        { ra: 58.5329, dec: 31.8836, magnitude: 2.85, spectralType: 'B' },  // 44Zet Per
        { ra: 59.3563, dec: 63.0722, magnitude: 5.03, spectralType: 'B' },
        { ra: 59.2846, dec: 61.1089, magnitude: 5.0, spectralType: 'K' },
        { ra: 58.3042, dec: -18.4344, magnitude: 6.22, spectralType: 'K' },
        { ra: 58.9925, dec: 47.8714, magnitude: 5.37, spectralType: 'B' },
        { ra: 56.8096, dec: -74.2389, magnitude: 3.24, spectralType: 'M' },  // Gam Hyi
        { ra: 58.8458, dec: 31.0458, magnitude: 6.1, spectralType: 'O' },
        { ra: 59.1521, dec: 50.6953, magnitude: 5.28, spectralType: 'F' },  // 43 Per
        { ra: 58.5725, dec: -2.9528, magnitude: 6.14, spectralType: 'A' },  // 32 Eri
        { ra: 58.5729, dec: -2.9547, magnitude: 4.79, spectralType: 'G' },  // 32 Eri
        { ra: 58.4275, dec: -24.6125, magnitude: 4.65, spectralType: 'B' },  // 33Tau8Eri
        { ra: 58.4121, dec: -34.7322, magnitude: 5.11, spectralType: 'B' },
        { ra: 59.1196, dec: 35.0811, magnitude: 5.49, spectralType: 'B' },
        { ra: 58.3888, dec: -46.8936, magnitude: 5.93, spectralType: 'K' },
        { ra: 58.8179, dec: -12.0992, magnitude: 6.0, spectralType: 'A' },
        { ra: 59.2171, dec: 22.4781, magnitude: 5.63, spectralType: 'F' },  // 32 Tau
        { ra: 58.5967, dec: -40.3572, magnitude: 5.71, spectralType: 'K' },
        { ra: 59.4633, dec: 40.0103, magnitude: 2.89, spectralType: 'B' },  // 45Eps Per
        { ra: 59.2658, dec: 23.1756, magnitude: 6.06, spectralType: 'B' },  // 33 Tau
        { ra: 59.36, dec: 24.4619, magnitude: 6.16, spectralType: 'K' },
        { ra: 59.5129, dec: 34.8144, magnitude: 6.53, spectralType: 'A' },
        { ra: 59.2571, dec: 6.04, magnitude: 6.09, spectralType: 'A' },
        { ra: 59.1579, dec: -9.7508, magnitude: 6.19, spectralType: 'F' },
        { ra: 59.6213, dec: 38.8403, magnitude: 6.3, spectralType: 'K' },
        { ra: 58.6417, dec: -52.6906, magnitude: 6.46, spectralType: 'A' },
        { ra: 59.7413, dec: 35.7911, magnitude: 4.04, spectralType: 'O' },  // 46Xi Per
        { ra: 59.9167, dec: 38.8206, magnitude: 6.38, spectralType: 'A' },
        { ra: 62.5117, dec: 80.6986, magnitude: 5.1, spectralType: 'G' },
        { ra: 59.5075, dec: -13.5086, magnitude: 2.95, spectralType: 'M' },  // 34Gam Eri
        { ra: 59.7179, dec: -5.47, magnitude: 5.83, spectralType: 'G' },
        { ra: 59.9196, dec: 10.3308, magnitude: 6.37, spectralType: 'F' },
        { ra: 60.3112, dec: 36.99, magnitude: 6.41, spectralType: 'A' },
        { ra: 59.8754, dec: -12.5742, magnitude: 5.6, spectralType: 'K' },
        { ra: 59.0167, dec: -63.4636, magnitude: 6.14, spectralType: 'K' },
        { ra: 60.1538, dec: 17.2967, magnitude: 6.32, spectralType: 'A' },
        { ra: 60.2033, dec: 18.1939, magnitude: 5.89, spectralType: 'F' },
        { ra: 60.17, dec: 12.4903, magnitude: 3.47, spectralType: 'B' },  // 35Lam Tau
        { ra: 59.9813, dec: -24.0164, magnitude: 4.66, spectralType: 'B' },  // 36Tau9Eri
        { ra: 61.5129, dec: 68.68, magnitude: 5.87, spectralType: 'K' },
        { ra: 61.1133, dec: 59.1556, magnitude: 5.06, spectralType: 'F' },
        { ra: 60.4421, dec: 9.9978, magnitude: 5.67, spectralType: 'B' },
        { ra: 60.3833, dec: -1.5497, magnitude: 5.28, spectralType: 'B' },  // 35 Eri
        { ra: 59.6788, dec: -57.1025, magnitude: 6.05, spectralType: 'F' },
        { ra: 60.1696, dec: -30.4908, magnitude: 5.93, spectralType: 'A' },
        { ra: 59.6863, dec: -61.4003, magnitude: 4.56, spectralType: 'M' },  // Del Ret
        { ra: 61.6625, dec: 65.5208, magnitude: 6.17, spectralType: 'A' },
        { ra: 60.6529, dec: -0.2689, magnitude: 5.38, spectralType: 'F' },
        { ra: 60.0654, dec: -51.5647, magnitude: 6.51, spectralType: 'M' },
        { ra: 60.7892, dec: 5.9892, magnitude: 3.91, spectralType: 'A' },  // 38Nu Tau
        { ra: 61.0904, dec: 24.1058, magnitude: 5.47, spectralType: 'G' },  // 36 Tau
        { ra: 60.9358, dec: 5.4356, magnitude: 5.33, spectralType: 'B' },  // 40 Tau
        { ra: 60.9858, dec: 8.1972, magnitude: 5.46, spectralType: 'F' },
        { ra: 61.6525, dec: 54.0086, magnitude: 6.31, spectralType: 'K' },
        { ra: 61.1737, dec: 22.0819, magnitude: 4.36, spectralType: 'K' },  // 37 Tau
        { ra: 61.0412, dec: 2.8269, magnitude: 5.36, spectralType: 'F' },
        { ra: 60.8529, dec: -20.1442, magnitude: 6.46, spectralType: 'B' },
        { ra: 60.9033, dec: -20.1583, magnitude: 7.01, spectralType: 'K' },
        { ra: 61.9629, dec: 62.33, magnitude: 6.99, spectralType: 'B' },
        { ra: 61.6458, dec: 50.3514, magnitude: 4.29, spectralType: 'A' },  // 47Lam Per
        { ra: 61.3342, dec: 22.0089, magnitude: 5.9, spectralType: 'G' },  // 39 Tau
        { ra: 61.0363, dec: -16.5889, magnitude: 6.39, spectralType: 'K' },
        { ra: 60.2242, dec: -62.1594, magnitude: 4.51, spectralType: 'M' },  // Gam Ret
        { ra: 61.0946, dec: -12.7925, magnitude: 5.61, spectralType: 'K' },
        { ra: 60.3258, dec: -61.0789, magnitude: 4.97, spectralType: 'K' },  // Iot Ret
        { ra: 61.1708, dec: -20.3817, magnitude: 6.13, spectralType: 'K' },
        { ra: 61.6517, dec: 27.6, magnitude: 5.2, spectralType: 'B' },  // 41 Tau
        { ra: 61.7521, dec: 29.0014, magnitude: 5.23, spectralType: 'F' },  // 42Psi Tau
        { ra: 62.365, dec: 59.9081, magnitude: 6.28, spectralType: 'G' },
        { ra: 55.6337, dec: -85.2622, magnitude: 6.41, spectralType: 'B' },
        { ra: 61.4854, dec: -8.8561, magnitude: 6.26, spectralType: 'A' },
        { ra: 62.1654, dec: 47.7125, magnitude: 4.04, spectralType: 'B' },  // 48 Per
        { ra: 61.4446, dec: -20.5122, magnitude: 6.34, spectralType: 'G' },
        { ra: 61.4058, dec: -27.6517, magnitude: 5.59, spectralType: 'F' },
        { ra: 62.3433, dec: 54.8289, magnitude: 6.18, spectralType: 'F' },
        { ra: 62.0638, dec: 37.7278, magnitude: 6.09, spectralType: 'K' },  // 49 Per
        { ra: 62.1525, dec: 38.0397, magnitude: 5.51, spectralType: 'F' },  // 50 Per
        { ra: 61.925, dec: 15.1628, magnitude: 6.01, spectralType: 'F' },
        { ra: 61.9975, dec: 17.3397, magnitude: 5.89, spectralType: 'K' },
        { ra: 63.4371, dec: 72.1264, magnitude: 6.03, spectralType: 'K' },
        { ra: 63.215, dec: 68.5017, magnitude: 6.32, spectralType: 'K' },
        { ra: 62.2917, dec: 19.6092, magnitude: 5.5, spectralType: 'K' },  // 43Ome1Tau
        { ra: 62.2567, dec: 13.3983, magnitude: 5.95, spectralType: 'B' },
        { ra: 61.8546, dec: -42.9169, magnitude: 6.59, spectralType: 'K' },
        { ra: 62.7458, dec: 33.5867, magnitude: 5.72, spectralType: 'K' },
        { ra: 62.7079, dec: 26.4808, magnitude: 5.41, spectralType: 'F' },  // 44 Tau
        { ra: 62.3242, dec: -16.3858, magnitude: 5.37, spectralType: 'B' },
        { ra: 67.0542, dec: 83.8078, magnitude: 5.57, spectralType: 'B' },
        { ra: 62.5938, dec: -6.9239, magnitude: 5.44, spectralType: 'G' },  // 37 Eri
        { ra: 62.1413, dec: -45.8647, magnitude: 6.59, spectralType: 'F' },
        { ra: 62.8346, dec: 5.5231, magnitude: 5.72, spectralType: 'F' },  // 45 Tau
        { ra: 62.6988, dec: -8.8197, magnitude: 5.7, spectralType: 'G' },
        { ra: 61.84, dec: -64.2225, magnitude: 6.38, spectralType: 'G' },
        { ra: 63.1308, dec: 17.2775, magnitude: 6.09, spectralType: 'K' },
        { ra: 63.7575, dec: 57.4603, magnitude: 6.08, spectralType: 'A' },
        { ra: 63.2133, dec: 22.4136, magnitude: 6.12, spectralType: 'B' },
        { ra: 62.9663, dec: -6.8375, magnitude: 4.04, spectralType: 'F' },  // 38Omi1Eri
        { ra: 62.6908, dec: -35.2739, magnitude: 6.44, spectralType: 'K' },
        { ra: 62.9008, dec: -20.3561, magnitude: 5.79, spectralType: 'A' },
        { ra: 63.4983, dec: 37.9669, magnitude: 6.45, spectralType: 'G' },
        { ra: 62.7108, dec: -41.9936, magnitude: 4.93, spectralType: 'A' },  // Del Hor
        { ra: 63.7246, dec: 48.4094, magnitude: 4.14, spectralType: 'G' },  // 51Mu Per
        { ra: 67.5004, dec: 83.3406, magnitude: 5.46, spectralType: 'G' },
        { ra: 64.2233, dec: 61.8503, magnitude: 5.7, spectralType: 'B' },
        { ra: 63.7221, dec: 40.4836, magnitude: 4.71, spectralType: 'G' },  // 52 Per
        { ra: 63.395, dec: 10.2122, magnitude: 6.23, spectralType: 'B' },
        { ra: 63.3804, dec: 8.8906, magnitude: 6.51, spectralType: 'A' },
        { ra: 63.3879, dec: 7.7161, magnitude: 5.29, spectralType: 'F' },  // 46 Tau
        { ra: 63.4579, dec: 12.7533, magnitude: 6.25, spectralType: 'K' },
        { ra: 63.485, dec: 9.2636, magnitude: 4.84, spectralType: 'G' },  // 47 Tau
        { ra: 63.4092, dec: -1.1497, magnitude: 6.44, spectralType: 'B' },
        { ra: 64.2842, dec: 57.8606, magnitude: 5.71, spectralType: 'K' },
        { ra: 64.1796, dec: 53.6119, magnitude: 5.19, spectralType: 'A' },
        { ra: 63.6512, dec: 10.0111, magnitude: 5.22, spectralType: 'B' },
        { ra: 63.1317, dec: -44.3683, magnitude: 6.71, spectralType: 'K' },
        { ra: 66.7617, dec: 80.8242, magnitude: 5.43, spectralType: 'G' },
        { ra: 63.5988, dec: -10.2564, magnitude: 4.87, spectralType: 'K' },  // 39 Eri
        { ra: 63.9429, dec: 15.4006, magnitude: 6.32, spectralType: 'F' },  // 48 Tau
        { ra: 63.8838, dec: 8.8922, magnitude: 4.29, spectralType: 'B' },  // 49Mu Tau
        { ra: 63.8575, dec: 6.1997, magnitude: 6.93, spectralType: 'G' },
        { ra: 63.8717, dec: 6.1867, magnitude: 6.31, spectralType: 'G' },
        { ra: 63.3987, dec: -40.3578, magnitude: 6.37, spectralType: 'K' },
        { ra: 64.5608, dec: 50.2956, magnitude: 4.61, spectralType: 'A' },
        { ra: 63.8179, dec: -7.6528, magnitude: 4.43, spectralType: 'K' },  // 40Omi2Eri
        { ra: 63.5004, dec: -42.2944, magnitude: 3.86, spectralType: 'K' },  // Alp Hor
        { ra: 65.1679, dec: 65.1406, magnitude: 5.27, spectralType: 'G' },
        { ra: 64.5342, dec: 42.1411, magnitude: 6.22, spectralType: 'B' },
        { ra: 64.315, dec: 20.5786, magnitude: 4.94, spectralType: 'A' },  // 50Ome2Tau
        { ra: 64.8054, dec: 50.0489, magnitude: 5.45, spectralType: 'A' },
        { ra: 64.5967, dec: 21.5792, magnitude: 5.65, spectralType: 'F' },  // 51 Tau
        { ra: 64.33, dec: -6.4719, magnitude: 5.94, spectralType: 'G' },
        { ra: 65.0479, dec: 50.9208, magnitude: 5.55, spectralType: 'B' },
        { ra: 64.6021, dec: 9.4867, magnitude: 6.54, spectralType: 'A' },
        { ra: 65.4483, dec: 60.7356, magnitude: 5.39, spectralType: 'M' },
        { ra: 63.6062, dec: -62.4739, magnitude: 3.35, spectralType: 'G' },  // Alp Ret
        { ra: 65.06, dec: 41.8081, magnitude: 5.92, spectralType: 'K' },
        { ra: 64.0067, dec: -51.4867, magnitude: 4.25, spectralType: 'F' },  // Gam Dor
        { ra: 64.8588, dec: 21.1422, magnitude: 5.35, spectralType: 'B' },  // 53 Tau
        { ra: 63.7029, dec: -62.1919, magnitude: 5.45, spectralType: 'K' },
        { ra: 64.9029, dec: 21.7736, magnitude: 5.38, spectralType: 'A' },  // 56 Tau
        { ra: 65.4658, dec: 56.5067, magnitude: 5.88, spectralType: 'A' },
        { ra: 65.1025, dec: 34.5667, magnitude: 4.93, spectralType: 'G' },  // 54 Per
        { ra: 65.0417, dec: 31.9533, magnitude: 6.16, spectralType: 'K' },
        { ra: 64.5662, dec: -20.7156, magnitude: 6.0, spectralType: 'G' },
        { ra: 64.9483, dec: 15.6275, magnitude: 3.65, spectralType: 'K' },  // 54Gam Tau
        { ra: 64.4737, dec: -33.7983, magnitude: 3.56, spectralType: 'B' },  // 41Ups4Eri
        { ra: 65.0888, dec: 27.3508, magnitude: 4.95, spectralType: 'K' },  // 52Phi Tau
        { ra: 64.9062, dec: 10.1214, magnitude: 6.31, spectralType: 'K' },
        { ra: 65.3883, dec: 46.4989, magnitude: 4.85, spectralType: 'B' },  // 53 Per
        { ra: 64.9904, dec: 14.0353, magnitude: 5.59, spectralType: 'F' },  // 57 Tau
        { ra: 65.7412, dec: 59.6164, magnitude: 6.19, spectralType: 'A' },
        { ra: 64.6558, dec: -22.9703, magnitude: 6.07, spectralType: 'A' },
        { ra: 65.1046, dec: 18.7425, magnitude: 6.12, spectralType: 'F' },
        { ra: 64.1204, dec: -59.3019, magnitude: 4.44, spectralType: 'K' },  // Eps Ret
        { ra: 65.1512, dec: 15.0953, magnitude: 5.26, spectralType: 'F' },  // 58 Tau
        { ra: 64.0879, dec: -60.9486, magnitude: 6.37, spectralType: 'A' },
        { ra: 65.22, dec: 13.8642, magnitude: 6.17, spectralType: 'F' },
        { ra: 64.7625, dec: -33.905, magnitude: 6.37, spectralType: 'A' },
        { ra: 65.1717, dec: 6.1308, magnitude: 5.77, spectralType: 'G' },
        { ra: 65.2042, dec: 9.2256, magnitude: 6.53, spectralType: 'A' },
        { ra: 65.1612, dec: -6.2456, magnitude: 6.27, spectralType: 'G' },
        { ra: 65.1783, dec: -7.5925, magnitude: 5.85, spectralType: 'B' },
        { ra: 64.8192, dec: -44.2681, magnitude: 5.34, spectralType: 'K' },
        { ra: 64.6667, dec: -52.86, magnitude: 6.09, spectralType: 'F' },
        { ra: 65.3629, dec: -0.0981, magnitude: 5.86, spectralType: 'K' },
        { ra: 65.1625, dec: -20.6397, magnitude: 5.38, spectralType: 'A' },
        { ra: 65.5146, dec: 14.0772, magnitude: 5.72, spectralType: 'A' },  // 60 Tau
        { ra: 65.6454, dec: 25.6292, magnitude: 5.37, spectralType: 'B' },  // 59Chi Tau
        { ra: 65.595, dec: 20.8214, magnitude: 5.91, spectralType: 'M' },
        { ra: 65.8996, dec: 42.4281, magnitude: 6.23, spectralType: 'A' },
        { ra: 64.4175, dec: -63.2556, magnitude: 5.87, spectralType: 'B' },  // The Ret
        { ra: 65.7338, dec: 17.5425, magnitude: 3.76, spectralType: 'K' },  // 61Del1Tau
        { ra: 65.3804, dec: -25.7283, magnitude: 6.01, spectralType: 'F' },
        { ra: 65.885, dec: 20.9822, magnitude: 5.99, spectralType: 'B' },
        { ra: 65.8542, dec: 16.7772, magnitude: 5.64, spectralType: 'A' },  // 63 Tau
        { ra: 66.1217, dec: 34.1306, magnitude: 5.73, spectralType: 'B' },  // 55 Per
        { ra: 65.9992, dec: 24.3011, magnitude: 6.36, spectralType: 'B' },  // 62 Tau
        { ra: 66.1558, dec: 33.9597, magnitude: 5.76, spectralType: 'F' },  // 56 Per
        { ra: 66.0242, dec: 17.4439, magnitude: 4.8, spectralType: 'A' },  // 64Del2Tau
        { ra: 65.9663, dec: 9.4608, magnitude: 5.12, spectralType: 'A' },  // 66 Tau
        { ra: 66.7538, dec: 57.5853, magnitude: 6.32, spectralType: 'A' },
        { ra: 65.92, dec: -3.7456, magnitude: 5.17, spectralType: 'A' },  // 42Xi Eri
        { ra: 65.7738, dec: -24.8922, magnitude: 5.83, spectralType: 'K' },
        { ra: 66.2379, dec: 19.0417, magnitude: 5.98, spectralType: 'F' },
        { ra: 65.7821, dec: -35.545, magnitude: 6.39, spectralType: 'K' },
        { ra: 66.3421, dec: 22.2939, magnitude: 4.22, spectralType: 'A' },  // 65Kap1Tau
        { ra: 66.3542, dec: 22.1997, magnitude: 5.28, spectralType: 'A' },  // 67Kap2Tau
        { ra: 66.3725, dec: 17.9281, magnitude: 4.29, spectralType: 'A' },  // 68Del3Tau
        { ra: 66.5263, dec: 31.4389, magnitude: 5.28, spectralType: 'K' },
        { ra: 66.4054, dec: 15.9408, magnitude: 6.46, spectralType: 'F' },  // 70 Tau
        { ra: 66.5771, dec: 22.8136, magnitude: 4.28, spectralType: 'A' },  // 69Ups Tau
        { ra: 66.0092, dec: -34.0169, magnitude: 3.96, spectralType: 'K' },  // 43 Eri
        { ra: 66.5867, dec: 15.6183, magnitude: 4.49, spectralType: 'F' },  // 71 Tau
        { ra: 65.4721, dec: -63.3864, magnitude: 5.24, spectralType: 'G' },  // Eta Ret
        { ra: 66.6517, dec: 14.7136, magnitude: 4.69, spectralType: 'G' },  // 73Pi Tau
        { ra: 66.5879, dec: 8.5903, magnitude: 6.06, spectralType: 'B' },
        { ra: 66.235, dec: -34.7578, magnitude: 6.55, spectralType: 'F' },
        { ra: 66.8229, dec: 22.9964, magnitude: 5.53, spectralType: 'B' },  // 72 Tau
        { ra: 66.7529, dec: 2.0794, magnitude: 6.23, spectralType: 'K' },
        { ra: 68.3779, dec: 72.5286, magnitude: 5.94, spectralType: 'A' },
        { ra: 66.87, dec: 11.2125, magnitude: 5.88, spectralType: 'B' },
        { ra: 67.0033, dec: 21.62, magnitude: 5.72, spectralType: 'A' },
        { ra: 66.3296, dec: -44.1608, magnitude: 6.39, spectralType: 'F' },
        { ra: 66.0508, dec: -57.0714, magnitude: 6.29, spectralType: 'G' },
        { ra: 67.2163, dec: 30.3614, magnitude: 6.4, spectralType: 'F' },
        { ra: 67.11, dec: 16.3597, magnitude: 4.97, spectralType: 'K' },  // 75 Tau
        { ra: 67.0975, dec: 14.7408, magnitude: 5.9, spectralType: 'F' },  // 76 Tau
        { ra: 67.1542, dec: 19.1803, magnitude: 3.53, spectralType: 'G' },  // 74Eps Tau
        { ra: 66.7375, dec: -24.0814, magnitude: 6.11, spectralType: 'A' },
        { ra: 67.1438, dec: 15.9622, magnitude: 3.84, spectralType: 'K' },  // 77The1Tau
        { ra: 67.1654, dec: 15.8708, magnitude: 3.4, spectralType: 'A' },  // 78The2Tau
        { ra: 67.015, dec: 1.8586, magnitude: 6.15, spectralType: 'G' },
        { ra: 67.2092, dec: 13.0475, magnitude: 5.03, spectralType: 'A' },  // 79 Tau
        { ra: 67.1338, dec: 1.3808, magnitude: 5.55, spectralType: 'B' },
        { ra: 66.2721, dec: -61.2383, magnitude: 5.94, spectralType: 'K' },
        { ra: 68.0075, dec: 53.9108, magnitude: 5.77, spectralType: 'B' },  // 1 Cam
        { ra: 66.775, dec: -46.9475, magnitude: 6.1, spectralType: 'F' },
        { ra: 67.6596, dec: 32.4581, magnitude: 6.21, spectralType: 'B' },
        { ra: 67.4288, dec: 10.5217, magnitude: 6.79, spectralType: 'B' },
        { ra: 67.1625, dec: -19.4583, magnitude: 5.96, spectralType: 'K' },
        { ra: 67.5358, dec: 15.6381, magnitude: 5.58, spectralType: 'F' },  // 80 Tau
        { ra: 67.2788, dec: -13.0483, magnitude: 5.6, spectralType: 'B' },
        { ra: 67.85, dec: 40.0103, magnitude: 6.26, spectralType: 'B' },
        { ra: 67.51, dec: 10.2625, magnitude: 6.48, spectralType: 'G' },
        { ra: 64.4962, dec: -80.2139, magnitude: 5.69, spectralType: 'K' },  // Del Men
        { ra: 67.6404, dec: 16.1939, magnitude: 4.78, spectralType: 'A' },
        { ra: 67.6621, dec: 15.6919, magnitude: 5.48, spectralType: 'A' },  // 81 Tau
        { ra: 67.0392, dec: -41.96, magnitude: 6.44, spectralType: 'M' },
        { ra: 67.6554, dec: 13.7244, magnitude: 5.4, spectralType: 'F' },  // 83 Tau
        { ra: 67.5404, dec: -13.5922, magnitude: 6.24, spectralType: 'G' },
        { ra: 67.9658, dec: 15.8517, magnitude: 6.02, spectralType: 'F' },  // 85 Tau
        { ra: 67.3333, dec: -46.5153, magnitude: 6.16, spectralType: 'K' },
        { ra: 68.3537, dec: 43.0639, magnitude: 6.09, spectralType: 'F' },  // 57 Per
        { ra: 66.9412, dec: -62.5208, magnitude: 5.75, spectralType: 'K' },
        { ra: 68.02, dec: 5.41, magnitude: 6.39, spectralType: 'F' },
        { ra: 67.9696, dec: -0.0439, magnitude: 4.91, spectralType: 'K' },  // 45 Eri
        { ra: 67.8579, dec: -13.645, magnitude: 6.21, spectralType: 'A' },
        { ra: 67.6679, dec: -35.6536, magnitude: 5.96, spectralType: 'K' },
        { ra: 69.1008, dec: 64.2617, magnitude: 5.94, spectralType: 'A' },
        { ra: 68.1558, dec: -3.2092, magnitude: 5.81, spectralType: 'B' },
        { ra: 68.3871, dec: 18.0167, magnitude: 6.25, spectralType: 'B' },
        { ra: 67.7088, dec: -44.9539, magnitude: 5.07, spectralType: 'B' },  // Del Cae
        { ra: 68.4621, dec: 14.8444, magnitude: 4.65, spectralType: 'A' },  // 86Rho Tau
        { ra: 68.6583, dec: 28.9611, magnitude: 5.88, spectralType: 'B' },
        { ra: 68.4504, dec: 9.4131, magnitude: 6.01, spectralType: 'G' },
        { ra: 68.3417, dec: -10.7858, magnitude: 6.06, spectralType: 'K' },
        { ra: 68.5346, dec: 5.5686, magnitude: 5.68, spectralType: 'A' },
        { ra: 68.4783, dec: -6.7389, magnitude: 5.72, spectralType: 'B' },  // 46 Eri
        { ra: 68.5592, dec: -6.8378, magnitude: 6.09, spectralType: 'K' },
        { ra: 68.5483, dec: -8.2314, magnitude: 5.11, spectralType: 'M' },  // 47 Eri
        { ra: 68.5487, dec: -8.9703, magnitude: 5.26, spectralType: 'K' },
        { ra: 68.3775, dec: -29.7667, magnitude: 4.51, spectralType: 'K' },  // 50Ups1Eri
        { ra: 69.1725, dec: 41.2647, magnitude: 4.25, spectralType: 'K' },  // 58 Per
        { ra: 68.9279, dec: 19.8817, magnitude: 6.36, spectralType: 'G' },
        { ra: 65.2412, dec: -81.58, magnitude: 5.79, spectralType: 'F' },  // Nu Men
        { ra: 68.98, dec: 16.5092, magnitude: 0.85, spectralType: 'K' },  // 87Alp Tau
        { ra: 68.9137, dec: 10.1608, magnitude: 4.25, spectralType: 'A' },  // 88 Tau
        { ra: 69.1217, dec: 23.3408, magnitude: 6.02, spectralType: 'F' },
        { ra: 68.8083, dec: -9.7367, magnitude: 6.37, spectralType: 'A' },
        { ra: 68.7521, dec: -19.9206, magnitude: 6.13, spectralType: 'K' },
        { ra: 69.0067, dec: -3.6119, magnitude: 6.33, spectralType: 'B' },
        { ra: 69.0796, dec: -3.3525, magnitude: 3.93, spectralType: 'B' },  // 48Nu Eri
        { ra: 68.8875, dec: -30.5622, magnitude: 3.82, spectralType: 'G' },  // 52Ups2Eri
        { ra: 68.4992, dec: -55.045, magnitude: 3.27, spectralType: 'A' },  // Alp Dor
        { ra: 69.9921, dec: 53.4731, magnitude: 5.35, spectralType: 'A' },  // 2 Cam
        { ra: 69.9779, dec: 53.0797, magnitude: 5.05, spectralType: 'K' },  // 3 Cam
        { ra: 71.5012, dec: 76.6111, magnitude: 6.49, spectralType: 'F' },
        { ra: 69.3071, dec: 0.9983, magnitude: 5.31, spectralType: 'B' },
        { ra: 69.6233, dec: 26.94, magnitude: 6.47, spectralType: 'F' },
        { ra: 69.5658, dec: 20.6847, magnitude: 5.92, spectralType: 'B' },
        { ra: 69.5392, dec: 16.0333, magnitude: 5.79, spectralType: 'F' },  // 89 Tau
        { ra: 69.5396, dec: 12.5108, magnitude: 4.27, spectralType: 'A' },  // 90 Tau
        { ra: 69.4004, dec: -2.4733, magnitude: 5.23, spectralType: 'F' },  // 51 Eri
        { ra: 68.3917, dec: -62.8236, magnitude: 5.79, spectralType: 'K' },
        { ra: 69.2121, dec: -30.7167, magnitude: 6.3, spectralType: 'B' },
        { ra: 69.8462, dec: 25.2183, magnitude: 6.22, spectralType: 'A' },
        { ra: 69.7883, dec: 15.7997, magnitude: 5.07, spectralType: 'A' },  // 91Sig1Tau
        { ra: 69.8188, dec: 15.9181, magnitude: 4.69, spectralType: 'A' },  // 92Sig2Tau
        { ra: 69.7758, dec: 7.8708, magnitude: 5.39, spectralType: 'A' },
        { ra: 69.545, dec: -14.3039, magnitude: 3.87, spectralType: 'K' },  // 53 Eri
        { ra: 70.3504, dec: 48.3008, magnitude: 5.67, spectralType: 'A' },
        { ra: 69.7233, dec: -12.1231, magnitude: 5.01, spectralType: 'A' },
        { ra: 70.0142, dec: 12.1978, magnitude: 5.46, spectralType: 'B' },  // 93 Tau
        { ra: 65.7121, dec: -82.8992, magnitude: 6.76, spectralType: 'A' },
        { ra: 70.8254, dec: 59.5208, magnitude: 6.5, spectralType: 'A' },
        { ra: 69.8321, dec: -14.3592, magnitude: 5.45, spectralType: 'K' },
        { ra: 69.9467, dec: -1.0528, magnitude: 6.1, spectralType: 'K' },
        { ra: 70.4596, dec: 38.2803, magnitude: 5.99, spectralType: 'G' },
        { ra: 70.3325, dec: 28.615, magnitude: 5.78, spectralType: 'A' },
        { ra: 72.2096, dec: 75.9411, magnitude: 6.06, spectralType: 'A' },
        { ra: 69.19, dec: -62.0775, magnitude: 5.4, spectralType: 'M' },
        { ra: 70.84, dec: 49.9739, magnitude: 5.87, spectralType: 'B' },
        { ra: 70.7262, dec: 43.365, magnitude: 5.29, spectralType: 'A' },  // 59 Per
        { ra: 70.0283, dec: -24.4825, magnitude: 5.58, spectralType: 'G' },
        { ra: 70.1104, dec: -19.6717, magnitude: 4.32, spectralType: 'M' },  // 54 Eri
        { ra: 70.5613, dec: 22.9569, magnitude: 4.28, spectralType: 'B' },  // 94Tau Tau
        { ra: 69.7679, dec: -51.6728, magnitude: 6.44, spectralType: 'K' },
        { ra: 70.8075, dec: 24.0889, magnitude: 6.13, spectralType: 'F' },  // 95 Tau
        { ra: 71.0537, dec: 40.7869, magnitude: 6.08, spectralType: 'B' },
        { ra: 70.9513, dec: 32.8653, magnitude: 6.45, spectralType: 'A' },
        { ra: 70.1404, dec: -41.8639, magnitude: 4.45, spectralType: 'F' },  // Alp Cae
        { ra: 70.5146, dec: -37.1444, magnitude: 5.05, spectralType: 'F' },  // Bet Cae
        { ra: 70.0763, dec: -58.9436, magnitude: 6.53, spectralType: 'G' },
        { ra: 70.8942, dec: -8.7936, magnitude: 6.82, spectralType: 'F' },  // 55 Eri
        { ra: 70.8963, dec: -8.7961, magnitude: 6.7, spectralType: 'G' },  // 55 Eri
        { ra: 71.1075, dec: 11.1461, magnitude: 5.4, spectralType: 'F' },
        { ra: 71.0221, dec: -8.5036, magnitude: 5.9, spectralType: 'B' },  // 56 Eri
        { ra: 70.7887, dec: -30.7656, magnitude: 5.68, spectralType: 'K' },
        { ra: 72.6517, dec: 70.9417, magnitude: 6.37, spectralType: 'A' },
        { ra: 72.0012, dec: 56.7572, magnitude: 5.3, spectralType: 'A' },  // 4 Cam
        { ra: 71.4271, dec: 23.6281, magnitude: 6.35, spectralType: 'B' },
        { ra: 71.0333, dec: -18.6667, magnitude: 5.53, spectralType: 'A' },
        { ra: 71.685, dec: 40.3128, magnitude: 5.97, spectralType: 'G' },
        { ra: 72.0292, dec: 55.6025, magnitude: 6.26, spectralType: 'F' },
        { ra: 70.6933, dec: -50.4814, magnitude: 5.31, spectralType: 'K' },  // Lam Pic
        { ra: 71.57, dec: 18.735, magnitude: 6.01, spectralType: 'K' },
        { ra: 70.9342, dec: -41.0647, magnitude: 6.25, spectralType: 'K' },
        { ra: 71.5071, dec: 11.7056, magnitude: 5.37, spectralType: 'A' },
        { ra: 71.3754, dec: -3.2547, magnitude: 4.02, spectralType: 'B' },  // 57Mu Eri
        { ra: 71.2675, dec: -21.2836, magnitude: 5.72, spectralType: 'K' },
        { ra: 71.6004, dec: -2.9544, magnitude: 6.33, spectralType: 'A' },
        { ra: 75.0862, dec: 81.1939, magnitude: 5.07, spectralType: 'K' },
        { ra: 71.4567, dec: -34.005, magnitude: 6.86, spectralType: 'A' },
        { ra: 71.6075, dec: -28.0875, magnitude: 6.19, spectralType: 'A' },
        { ra: 71.4808, dec: -39.3567, magnitude: 6.05, spectralType: 'K' },
        { ra: 73.0217, dec: 63.5053, magnitude: 5.44, spectralType: 'M' },
        { ra: 72.3292, dec: 32.5883, magnitude: 5.86, spectralType: 'A' },
        { ra: 72.3033, dec: 31.4372, magnitude: 5.58, spectralType: 'K' },
        { ra: 71.0879, dec: -59.7328, magnitude: 5.27, spectralType: 'A' },  // Kap Dor
        { ra: 69.5904, dec: -77.6561, magnitude: 6.05, spectralType: 'K' },
        { ra: 71.9012, dec: -16.9344, magnitude: 5.51, spectralType: 'G' },  // 58 Eri
        { ra: 72.4775, dec: 37.4883, magnitude: 4.88, spectralType: 'K' },
        { ra: 72.1858, dec: 3.5883, magnitude: 6.03, spectralType: 'K' },
        { ra: 72.7887, dec: 48.7408, magnitude: 5.66, spectralType: 'G' },
        { ra: 72.1512, dec: -5.6739, magnitude: 5.78, spectralType: 'F' },
        { ra: 72.4337, dec: 15.9042, magnitude: 6.08, spectralType: 'K' },  // 96 Tau
        { ra: 72.1354, dec: -16.3294, magnitude: 5.77, spectralType: 'F' },  // 59 Eri
        { ra: 71.9567, dec: -30.0203, magnitude: 6.37, spectralType: 'K' },  // Zet Cae
        { ra: 71.2413, dec: -63.2297, magnitude: 6.46, spectralType: 'K' },
        { ra: 70.7663, dec: -70.9311, magnitude: 5.54, spectralType: 'B' },  // Mu Men
        { ra: 73.5125, dec: 66.3428, magnitude: 4.29, spectralType: 'O' },  // 9Alp Cam
        { ra: 72.46, dec: 6.9614, magnitude: 3.19, spectralType: 'F' },  // 1Pi 3Ori
        { ra: 72.6529, dec: 8.9003, magnitude: 4.36, spectralType: 'A' },  // 2Pi 2Ori
        { ra: 72.4258, dec: -13.7697, magnitude: 6.26, spectralType: 'F' },
        { ra: 73.2908, dec: 52.8408, magnitude: 6.41, spectralType: 'A' },
        { ra: 72.8437, dec: 18.8397, magnitude: 5.1, spectralType: 'A' },  // 97 Tau
        { ra: 72.1408, dec: -43.98, magnitude: 6.72, spectralType: 'G' },
        { ra: 72.5483, dec: -16.2172, magnitude: 5.03, spectralType: 'K' },  // 60 Eri
        { ra: 73.1992, dec: 42.5867, magnitude: 5.71, spectralType: 'A' },
        { ra: 73.1583, dec: 36.7031, magnitude: 4.78, spectralType: 'K' },  // 2 Aur
        { ra: 72.8017, dec: 5.605, magnitude: 3.69, spectralType: 'B' },  // 3Pi 4Ori
        { ra: 72.9308, dec: 9.975, magnitude: 6.11, spectralType: 'B' },
        { ra: 73.1963, dec: 27.8975, magnitude: 5.97, spectralType: 'F' },
        { ra: 73.7629, dec: 55.2592, magnitude: 5.52, spectralType: 'B' },  // 5 Cam
        { ra: 73.1333, dec: 14.2506, magnitude: 4.74, spectralType: 'G' },  // 4Omi1Ori
        { ra: 72.5675, dec: -41.3208, magnitude: 6.07, spectralType: 'F' },
        { ra: 73.7138, dec: 44.0608, magnitude: 6.08, spectralType: 'A' },
        { ra: 72.8675, dec: -34.9064, magnitude: 5.86, spectralType: 'A' },
        { ra: 73.2237, dec: -5.4528, magnitude: 4.39, spectralType: 'F' },  // 61Ome Eri
        { ra: 74.0296, dec: 52.8694, magnitude: 5.75, spectralType: 'A' },
        { ra: 73.345, dec: 2.5081, magnitude: 5.33, spectralType: 'M' },  // 5 Ori
        { ra: 72.73, dec: -53.4614, magnitude: 5.61, spectralType: 'F' },  // Iot Pic
        { ra: 72.7346, dec: -53.4597, magnitude: 6.42, spectralType: 'F' },  // Iot Pic
        { ra: 73.4825, dec: 1.5694, magnitude: 6.61, spectralType: 'A' },
        { ra: 73.7429, dec: 19.4853, magnitude: 6.37, spectralType: 'F' },
        { ra: 73.5629, dec: 2.4406, magnitude: 3.72, spectralType: 'B' },  // 8Pi 5Ori
        { ra: 74.3217, dec: 53.7522, magnitude: 4.47, spectralType: 'A' },  // 7 Cam
        { ra: 73.6954, dec: 11.4261, magnitude: 5.19, spectralType: 'A' },  // 6 Ori
        { ra: 73.7242, dec: 10.1508, magnitude: 4.65, spectralType: 'A' },  // 7Pi 1Ori
        { ra: 73.6992, dec: 7.7792, magnitude: 5.33, spectralType: 'K' },
        { ra: 75.5837, dec: 74.2692, magnitude: 6.06, spectralType: 'K' },
        { ra: 74.0829, dec: 36.1689, magnitude: 6.07, spectralType: 'B' },
        { ra: 73.7113, dec: 0.4675, magnitude: 5.99, spectralType: 'B' },
        { ra: 74.065, dec: 24.5922, magnitude: 6.37, spectralType: 'F' },
        { ra: 73.9596, dec: 15.04, magnitude: 5.81, spectralType: 'B' },
        { ra: 74.2483, dec: 33.1661, magnitude: 2.69, spectralType: 'K' },  // 3Iot Aur
        { ra: 73.9933, dec: 5.3992, magnitude: 6.5, spectralType: 'A' },
        { ra: 73.7783, dec: -16.7406, magnitude: 5.7, spectralType: 'G' },
        { ra: 74.0929, dec: 13.5144, magnitude: 4.07, spectralType: 'K' },  // 9Omi2Ori
        { ra: 73.8275, dec: -16.4178, magnitude: 5.72, spectralType: 'G' },
        { ra: 74.1008, dec: -5.1714, magnitude: 5.51, spectralType: 'B' },  // 62 Eri
        { ra: 73.8758, dec: -25.7278, magnitude: 6.72, spectralType: 'F' },
        { ra: 73.7283, dec: -39.6286, magnitude: 6.1, spectralType: 'K' },
        { ra: 74.3429, dec: 17.1536, magnitude: 5.48, spectralType: 'K' },
        { ra: 74.4529, dec: 23.9486, magnitude: 5.79, spectralType: 'G' },  // 99 Tau
        { ra: 76.0542, dec: 73.7639, magnitude: 6.66, spectralType: 'K' },
        { ra: 74.9429, dec: 53.1556, magnitude: 6.08, spectralType: 'K' },  // 8 Cam
        { ra: 76.1658, dec: 74.0669, magnitude: 5.96, spectralType: 'A' },
        { ra: 74.5392, dec: 25.0503, magnitude: 5.81, spectralType: 'A' },  // 98 Tau
        { ra: 74.3217, dec: -1.0672, magnitude: 6.23, spectralType: 'F' },
        { ra: 74.8142, dec: 37.8903, magnitude: 4.94, spectralType: 'A' },  // 4Ome Aur
        { ra: 75.3996, dec: 61.0781, magnitude: 6.03, spectralType: 'F' },
        { ra: 75.71, dec: 66.8228, magnitude: 6.19, spectralType: 'F' },
        { ra: 74.4367, dec: -14.2314, magnitude: 6.15, spectralType: 'B' },
        { ra: 74.545, dec: -2.2125, magnitude: 6.35, spectralType: 'A' },
        { ra: 73.7208, dec: -58.5472, magnitude: 6.12, spectralType: 'F' },
        { ra: 73.3771, dec: -66.6756, magnitude: 6.41, spectralType: 'M' },
        { ra: 75.0763, dec: 39.3947, magnitude: 5.95, spectralType: 'F' },  // 5 Aur
        { ra: 74.7475, dec: 14.5428, magnitude: 6.09, spectralType: 'B' },
        { ra: 74.6371, dec: 1.7142, magnitude: 4.47, spectralType: 'K' },  // 10Pi 6Ori
        { ra: 75.0967, dec: 39.655, magnitude: 6.58, spectralType: 'K' },  // 6 Aur
        { ra: 75.8546, dec: 60.4422, magnitude: 4.03, spectralType: 'G' },  // 10Bet Cam
        { ra: 74.7554, dec: -16.3758, magnitude: 5.66, spectralType: 'F' },
        { ra: 75.4921, dec: 43.8233, magnitude: 2.99, spectralType: 'F' },  // 7Eps Aur
        { ra: 73.2729, dec: -72.4075, magnitude: 6.28, spectralType: 'F' },
        { ra: 74.9021, dec: -14.8058, magnitude: 7.71, spectralType: 'G' },
        { ra: 74.96, dec: -10.2633, magnitude: 5.38, spectralType: 'G' },  // 63 Eri
        { ra: 75.1358, dec: 3.6153, magnitude: 7.03, spectralType: 'B' },
        { ra: 75.1412, dec: 3.6161, magnitude: 6.66, spectralType: 'B' },
        { ra: 74.9825, dec: -12.5375, magnitude: 4.79, spectralType: 'F' },  // 64 Eri
        { ra: 75.6196, dec: 41.0758, magnitude: 3.75, spectralType: 'K' },  // 8Zet Aur
        { ra: 75.1658, dec: -2.0656, magnitude: 6.32, spectralType: 'A' },
        { ra: 75.2042, dec: -5.7533, magnitude: 6.22, spectralType: 'K' },
        { ra: 75.8275, dec: 41.4417, magnitude: 6.14, spectralType: 'A' },
        { ra: 82.95, dec: 85.9386, magnitude: 6.51, spectralType: 'A' },
        { ra: 75.3596, dec: -7.1739, magnitude: 4.81, spectralType: 'B' },  // 65Psi Eri
        { ra: 75.4596, dec: 0.7222, magnitude: 5.92, spectralType: 'K' },
        { ra: 75.5, dec: 1.6089, magnitude: 6.24, spectralType: 'B' },
        { ra: 75.7738, dec: 21.59, magnitude: 4.64, spectralType: 'A' },  // 102Iot Tau
        { ra: 75.3567, dec: -20.0519, magnitude: 4.91, spectralType: 'B' },
        { ra: 76.5354, dec: 58.9725, magnitude: 5.08, spectralType: 'B' },  // 11 Cam
        { ra: 76.5508, dec: 59.0211, magnitude: 6.08, spectralType: 'K' },  // 12 Cam
        { ra: 76.6238, dec: 61.17, magnitude: 6.04, spectralType: 'K' },
        { ra: 75.6896, dec: -4.2097, magnitude: 5.85, spectralType: 'K' },
        { ra: 76.0604, dec: 30.4947, magnitude: 6.14, spectralType: 'K' },
        { ra: 76.1538, dec: 32.3203, magnitude: 6.62, spectralType: 'A' },
        { ra: 75.5408, dec: -26.275, magnitude: 5.02, spectralType: 'K' },
        { ra: 73.7967, dec: -74.9369, magnitude: 5.47, spectralType: 'K' },  // Eta Men
        { ra: 76.5917, dec: 54.4058, magnitude: 7.24, spectralType: 'G' },
        { ra: 75.3937, dec: -39.7181, magnitude: 6.03, spectralType: 'G' },
        { ra: 76.1579, dec: 27.6961, magnitude: 6.6, spectralType: 'F' },
        { ra: 76.09, dec: 21.2781, magnitude: 6.19, spectralType: 'K' },
        { ra: 75.6871, dec: -22.795, magnitude: 5.75, spectralType: 'K' },  // 1 Lep
        { ra: 75.595, dec: -31.7714, magnitude: 5.94, spectralType: 'G' },
        { ra: 77.4029, dec: 69.6394, magnitude: 6.41, spectralType: 'K' },
        { ra: 76.6692, dec: 51.5978, magnitude: 5.0, spectralType: 'F' },  // 9 Aur
        { ra: 76.1421, dec: 15.4042, magnitude: 4.68, spectralType: 'A' },  // 11 Ori
        { ra: 76.5037, dec: 35.9364, magnitude: 6.52, spectralType: 'A' },
        { ra: 75.9667, dec: -14.3694, magnitude: 6.41, spectralType: 'B' },
        { ra: 76.6287, dec: 41.2344, magnitude: 3.17, spectralType: 'B' },  // 10Eta Aur
        { ra: 76.3837, dec: 19.8064, magnitude: 6.44, spectralType: 'A' },
        { ra: 78.0933, dec: 73.9467, magnitude: 5.43, spectralType: 'B' },
        { ra: 76.7067, dec: 43.1747, magnitude: 6.2, spectralType: 'F' },
        { ra: 75.9721, dec: -24.3878, magnitude: 5.61, spectralType: 'A' },
        { ra: 76.2271, dec: -3.0397, magnitude: 6.05, spectralType: 'B' },
        { ra: 77.4354, dec: 64.9194, magnitude: 6.41, spectralType: 'F' },
        { ra: 76.3487, dec: 1.1775, magnitude: 6.17, spectralType: 'G' },
        { ra: 75.7025, dec: -49.1514, magnitude: 5.38, spectralType: 'F' },  // Eta1Pic
        { ra: 78.6483, dec: 76.4728, magnitude: 6.37, spectralType: 'A' },
        { ra: 75.975, dec: -41.745, magnitude: 6.31, spectralType: 'F' },
        { ra: 76.1017, dec: -35.4833, magnitude: 4.55, spectralType: 'K' },  // Gam1Cae
        { ra: 76.1088, dec: -35.7053, magnitude: 6.34, spectralType: 'F' },  // Gam2Cae
        { ra: 76.3654, dec: -22.3711, magnitude: 3.19, spectralType: 'K' },  // 2Eps Lep
        { ra: 76.3175, dec: -26.1525, magnitude: 5.73, spectralType: 'K' },
        { ra: 76.8625, dec: 18.645, magnitude: 5.0, spectralType: 'G' },  // 104 Tau
        { ra: 76.6904, dec: -4.655, magnitude: 5.12, spectralType: 'B' },  // 66 Eri
        { ra: 76.9517, dec: 20.4183, magnitude: 5.3, spectralType: 'A' },  // 106 Tau
        { ra: 77.0275, dec: 24.2653, magnitude: 5.5, spectralType: 'B' },  // 103 Tau
        { ra: 76.9813, dec: 21.7047, magnitude: 5.89, spectralType: 'B' },  // 105 Tau
        { ra: 76.6529, dec: -13.1219, magnitude: 6.05, spectralType: 'A' },
        { ra: 76.9096, dec: 9.4719, magnitude: 6.17, spectralType: 'G' },  // 13 Ori
        { ra: 76.2417, dec: -49.5778, magnitude: 5.03, spectralType: 'K' },  // Eta2Pic
        { ra: 76.9704, dec: 8.4983, magnitude: 5.34, spectralType: 'A' },  // 14 Ori
        { ra: 76.8542, dec: -12.4906, magnitude: 5.97, spectralType: 'F' },
        { ra: 76.9625, dec: -5.0864, magnitude: 2.79, spectralType: 'A' },  // 67Bet Eri
        { ra: 76.2525, dec: -54.4075, magnitude: 6.27, spectralType: 'M' },
        { ra: 77.6788, dec: 46.9622, magnitude: 5.68, spectralType: 'F' },
        { ra: 77.5788, dec: 37.3019, magnitude: 6.02, spectralType: 'K' },
        { ra: 77.4379, dec: 28.0306, magnitude: 6.01, spectralType: 'A' },
        { ra: 77.0842, dec: -8.665, magnitude: 5.78, spectralType: 'B' },
        { ra: 77.3317, dec: 9.8294, magnitude: 5.43, spectralType: 'A' },  // 16 Ori
        { ra: 77.1817, dec: -4.4561, magnitude: 5.12, spectralType: 'F' },  // 68 Eri
        { ra: 76.3775, dec: -57.4728, magnitude: 4.72, spectralType: 'F' },  // Zet Dor
        { ra: 78.2633, dec: 61.85, magnitude: 6.17, spectralType: 'A' },
        { ra: 77.425, dec: 15.5972, magnitude: 4.82, spectralType: 'F' },  // 15 Ori
        { ra: 75.6792, dec: -71.3144, magnitude: 5.31, spectralType: 'G' },  // Bet Men
        { ra: 78.3804, dec: 62.6914, magnitude: 6.5, spectralType: 'A' },  // 14 Cam
        { ra: 77.2867, dec: -8.7542, magnitude: 4.27, spectralType: 'B' },  // 69Lam Eri
        { ra: 77.0617, dec: -35.7183, magnitude: 6.52, spectralType: 'K' },
        { ra: 77.5133, dec: -0.5653, magnitude: 6.1, spectralType: 'K' },
        { ra: 75.055, dec: -78.3003, magnitude: 6.29, spectralType: 'K' },
        { ra: 79.5554, dec: 73.2681, magnitude: 5.74, spectralType: 'A' },
        { ra: 77.9233, dec: 16.0456, magnitude: 5.18, spectralType: 'K' },
        { ra: 77.7417, dec: -2.2539, magnitude: 6.25, spectralType: 'K' },
        { ra: 80.6396, dec: 79.2311, magnitude: 5.05, spectralType: 'F' },
        { ra: 77.83, dec: -2.4908, magnitude: 5.9, spectralType: 'F' },
        { ra: 78.7971, dec: 59.4056, magnitude: 6.15, spectralType: 'K' },
        { ra: 78.3571, dec: 38.4844, magnitude: 4.86, spectralType: 'A' },  // 11Mu Aur
        { ra: 77.9225, dec: 0.5147, magnitude: 6.67, spectralType: 'B' },
        { ra: 77.9388, dec: 1.0369, magnitude: 5.89, spectralType: 'G' },
        { ra: 78.6846, dec: 53.2139, magnitude: 6.2, spectralType: 'A' },
        { ra: 77.845, dec: -11.8492, magnitude: 5.68, spectralType: 'M' },
        { ra: 77.6854, dec: -25.9094, magnitude: 6.41, spectralType: 'K' },
        { ra: 76.8917, dec: -63.3997, magnitude: 5.2, spectralType: 'M' },
        { ra: 78.0746, dec: -11.8692, magnitude: 4.45, spectralType: 'B' },  // 3Iot Lep
        { ra: 78.2008, dec: -6.0572, magnitude: 5.91, spectralType: 'G' },
        { ra: 78.3229, dec: 2.8611, magnitude: 4.46, spectralType: 'K' },  // 17Rho Ori
        { ra: 77.8996, dec: -37.3953, magnitude: 6.57, spectralType: 'K' },
        { ra: 76.5387, dec: -73.0378, magnitude: 6.27, spectralType: 'A' },
        { ra: 78.3817, dec: 1.9681, magnitude: 6.09, spectralType: 'A' },
        { ra: 78.2329, dec: -16.2056, magnitude: 3.31, spectralType: 'B' },  // 5Mu Lep
        { ra: 78.4467, dec: 0.5603, magnitude: 6.32, spectralType: 'M' },
        { ra: 78.3888, dec: -8.1478, magnitude: 6.37, spectralType: 'B' },
        { ra: 78.3079, dec: -12.9414, magnitude: 4.36, spectralType: 'B' },  // 4Kap Lep
        { ra: 78.8517, dec: 32.6878, magnitude: 5.02, spectralType: 'A' },  // 14 Aur
        { ra: 79.3242, dec: 53.5861, magnitude: 6.5, spectralType: 'M' },
        { ra: 79.1725, dec: 45.9981, magnitude: 0.08, spectralType: 'G' },  // 13Alp Aur
        { ra: 78.6838, dec: 5.1561, magnitude: 5.5, spectralType: 'K' },
        { ra: 78.4996, dec: -14.6067, magnitude: 6.21, spectralType: 'F' },
        { ra: 78.8654, dec: 22.2847, magnitude: 6.27, spectralType: 'A' },  // 108 Tau
        { ra: 79.0758, dec: 34.3119, magnitude: 5.96, spectralType: 'O' },
        { ra: 78.6346, dec: -8.2017, magnitude: 0.12, spectralType: 'B' },  // 19Bet Ori
        { ra: 85.9529, dec: 85.6681, magnitude: 6.6, spectralType: 'A' },
        { ra: 78.4437, dec: -35.8256, magnitude: 6.98, spectralType: 'K' },
        { ra: 74.7121, dec: -82.4706, magnitude: 5.85, spectralType: 'G' },  // Xi Men
        { ra: 78.8267, dec: -1.4092, magnitude: 6.15, spectralType: 'F' },
        { ra: 79.0171, dec: 11.3414, magnitude: 5.56, spectralType: 'A' },  // 18 Ori
        { ra: 79.8658, dec: 58.1172, magnitude: 6.13, spectralType: 'B' },  // 15 Cam
        { ra: 80.0942, dec: 62.6536, magnitude: 5.61, spectralType: 'K' },
        { ra: 78.62, dec: -35.9772, magnitude: 5.76, spectralType: 'G' },
        { ra: 79.5662, dec: 42.7922, magnitude: 5.48, spectralType: 'M' },
        { ra: 78.8513, dec: -26.9433, magnitude: 5.07, spectralType: 'B' },
        { ra: 79.1713, dec: 1.9472, magnitude: 6.42, spectralType: 'A' },
        { ra: 79.6683, dec: 40.465, magnitude: 6.18, spectralType: 'K' },
        { ra: 79.5446, dec: 33.3717, magnitude: 4.54, spectralType: 'K' },  // 16 Aur
        { ra: 78.4721, dec: -52.0311, magnitude: 6.05, spectralType: 'K' },
        { ra: 79.5787, dec: 33.7672, magnitude: 6.14, spectralType: 'B' },  // 17 Aur
        { ra: 79.7854, dec: 40.0992, magnitude: 4.71, spectralType: 'G' },  // 15Lam Aur
        { ra: 78.9458, dec: -34.9267, magnitude: 6.66, spectralType: 'A' },
        { ra: 79.2004, dec: -17.1417, magnitude: 6.56, spectralType: 'B' },
        { ra: 79.75, dec: 33.7483, magnitude: 5.41, spectralType: 'A' },
        { ra: 80.0096, dec: 44.4256, magnitude: 6.62, spectralType: 'K' },
        { ra: 79.8483, dec: 33.9856, magnitude: 6.49, spectralType: 'A' },  // 18 Aur
        { ra: 79.4017, dec: -6.8444, magnitude: 3.6, spectralType: 'B' },  // 20Tau Ori
        { ra: 80.1637, dec: 46.9639, magnitude: 6.54, spectralType: 'G' },
        { ra: 79.4175, dec: -13.5197, magnitude: 5.5, spectralType: 'G' },
        { ra: 80.0617, dec: 41.0861, magnitude: 5.52, spectralType: 'A' },
        { ra: 79.8192, dec: 22.0964, magnitude: 4.94, spectralType: 'G' },  // 109 Tau
        { ra: 80.0037, dec: 33.9581, magnitude: 5.03, spectralType: 'A' },  // 19 Aur
        { ra: 79.8112, dec: 20.1347, magnitude: 6.08, spectralType: 'G' },
        { ra: 78.9121, dec: -52.1819, magnitude: 6.49, spectralType: 'K' },
        { ra: 79.3713, dec: -34.8953, magnitude: 4.83, spectralType: 'K' },  // Omi Col
        { ra: 78.4392, dec: -67.1853, magnitude: 4.83, spectralType: 'K' },  // The Dor
        { ra: 82.3571, dec: 77.9775, magnitude: 6.56, spectralType: 'A' },
        { ra: 79.7967, dec: 2.5958, magnitude: 5.34, spectralType: 'F' },  // 21 Ori
        { ra: 79.71, dec: -18.13, magnitude: 5.96, spectralType: 'G' },
        { ra: 79.8967, dec: -1.4122, magnitude: 6.34, spectralType: 'B' },
        { ra: 80.4517, dec: 41.8044, magnitude: 5.23, spectralType: 'B' },  // 20Rho Aur
        { ra: 80.2471, dec: 27.9572, magnitude: 6.33, spectralType: 'B' },
        { ra: 80.8658, dec: 57.5444, magnitude: 5.28, spectralType: 'A' },  // 16 Cam
        { ra: 80.3029, dec: 29.57, magnitude: 5.76, spectralType: 'A' },
        { ra: 79.8229, dec: -18.52, magnitude: 6.36, spectralType: 'B' },
        { ra: 79.8263, dec: -18.5097, magnitude: 6.54, spectralType: 'B' },
        { ra: 80.2358, dec: 19.8142, magnitude: 6.18, spectralType: 'K' },
        { ra: 79.8937, dec: -13.1767, magnitude: 4.29, spectralType: 'B' },  // 6Lam Lep
        { ra: 79.9962, dec: -12.3156, magnitude: 5.3, spectralType: 'B' },  // 7Nu Lep
        { ra: 79.8487, dec: -27.3689, magnitude: 5.99, spectralType: 'A' },
        { ra: 80.11, dec: -5.3667, magnitude: 6.39, spectralType: 'B' },
        { ra: 80.7096, dec: 41.0294, magnitude: 5.54, spectralType: 'A' },
        { ra: 80.3304, dec: 4.0119, magnitude: 6.57, spectralType: 'B' },
        { ra: 80.1121, dec: -21.2394, magnitude: 4.71, spectralType: 'A' },
        { ra: 80.4317, dec: 8.4286, magnitude: 5.8, spectralType: 'B' },
        { ra: 80.3825, dec: -0.4164, magnitude: 5.68, spectralType: 'B' },
        { ra: 80.4404, dec: -0.3825, magnitude: 4.73, spectralType: 'B' },  // 22 Ori
        { ra: 80.0858, dec: -34.6989, magnitude: 6.34, spectralType: 'F' },
        { ra: 79.8421, dec: -50.6061, magnitude: 5.45, spectralType: 'F' },  // Zet Pic
        { ra: 80.8454, dec: 28.9367, magnitude: 6.46, spectralType: 'B' },  // 22 Aur
        { ra: 80.4625, dec: -13.7561, magnitude: 6.56, spectralType: 'B' },
        { ra: 80.7083, dec: 3.5444, magnitude: 5.0, spectralType: 'B' },  // 23 Ori
        { ra: 80.4425, dec: -24.7731, magnitude: 5.06, spectralType: 'G' },
        { ra: 80.3204, dec: -34.3453, magnitude: 6.09, spectralType: 'B' },
        { ra: 81.1633, dec: 37.3856, magnitude: 4.99, spectralType: 'K' },  // 21Sig Aur
        { ra: 80.9071, dec: 16.6994, magnitude: 6.08, spectralType: 'A' },  // 110 Tau
        { ra: 81.1596, dec: 31.2239, magnitude: 6.28, spectralType: 'K' },
        { ra: 81.1604, dec: 31.1431, magnitude: 5.94, spectralType: 'B' },
        { ra: 80.8796, dec: 5.3225, magnitude: 6.35, spectralType: 'A' },
        { ra: 80.8271, dec: -8.4158, magnitude: 5.9, spectralType: 'B' },
        { ra: 81.3042, dec: 34.8553, magnitude: 6.55, spectralType: 'K' },
        { ra: 81.1058, dec: 17.3833, magnitude: 4.99, spectralType: 'F' },  // 111 Tau
        { ra: 80.9263, dec: -0.1597, magnitude: 5.7, spectralType: 'B' },
        { ra: 80.9642, dec: -0.8672, magnitude: 6.11, spectralType: 'F' },
        { ra: 80.8758, dec: -13.9272, magnitude: 5.25, spectralType: 'B' },  // 8 Lep
        { ra: 80.9867, dec: -7.8081, magnitude: 4.14, spectralType: 'G' },  // 29 Ori
        { ra: 80.8, dec: -26.7058, magnitude: 6.49, spectralType: 'F' },
        { ra: 81.1508, dec: 2.3528, magnitude: 6.32, spectralType: 'B' },
        { ra: 81.1204, dec: -0.8914, magnitude: 5.08, spectralType: 'G' },  // 27 Ori
        { ra: 81.1192, dec: -2.3969, magnitude: 3.36, spectralType: 'B' },  // 28Eta Ori
        { ra: 81.1867, dec: 1.8464, magnitude: 4.95, spectralType: 'B' },  // 25Psi1Ori
        { ra: 81.2829, dec: 6.3497, magnitude: 1.64, spectralType: 'B' },  // 24Gam Ori
        { ra: 81.5729, dec: 28.6075, magnitude: 1.65, spectralType: 'B' },  // 112Bet Tau
        { ra: 81.1183, dec: -16.9761, magnitude: 5.65, spectralType: 'A' },
        { ra: 80.85, dec: -39.6786, magnitude: 5.71, spectralType: 'M' },
        { ra: 81.7262, dec: 35.4572, magnitude: 6.15, spectralType: 'K' },
        { ra: 81.7037, dec: 34.3917, magnitude: 5.94, spectralType: 'A' },
        { ra: 81.7138, dec: 33.2628, magnitude: 6.15, spectralType: 'K' },
        { ra: 80.9125, dec: -37.3367, magnitude: 6.82, spectralType: 'K' },
        { ra: 81.5238, dec: 16.7003, magnitude: 6.25, spectralType: 'B' },  // 113 Tau
        { ra: 81.2567, dec: -10.3292, magnitude: 5.61, spectralType: 'K' },
        { ra: 81.38, dec: -0.5442, magnitude: 6.57, spectralType: 'B' },
        { ra: 80.5921, dec: -56.1344, magnitude: 6.11, spectralType: 'B' },  // Kap Pic
        { ra: 82.5425, dec: 63.0672, magnitude: 5.42, spectralType: 'M' },  // 17 Cam
        { ra: 81.4458, dec: 0.5208, magnitude: 6.16, spectralType: 'B' },
        { ra: 81.7846, dec: 30.2086, magnitude: 5.74, spectralType: 'B' },
        { ra: 81.9121, dec: 34.4758, magnitude: 5.07, spectralType: 'K' },  // 24Phi Aur
        { ra: 81.51, dec: -5.5183, magnitude: 6.23, spectralType: 'B' },
        { ra: 81.6617, dec: 6.8692, magnitude: 6.42, spectralType: 'A' },
        { ra: 81.7921, dec: 17.9622, magnitude: 5.42, spectralType: 'B' },  // 115 Tau
        { ra: 81.8075, dec: 15.2578, magnitude: 6.16, spectralType: 'A' },
        { ra: 81.9087, dec: 21.9369, magnitude: 4.88, spectralType: 'B' },  // 114 Tau
        { ra: 81.7092, dec: 3.0956, magnitude: 4.59, spectralType: 'B' },  // 30Psi2Ori
        { ra: 81.4992, dec: -19.6956, magnitude: 5.89, spectralType: 'F' },
        { ra: 81.2317, dec: -44.2258, magnitude: 6.08, spectralType: 'K' },
        { ra: 81.94, dec: 15.8742, magnitude: 5.5, spectralType: 'B' },  // 116 Tau
        { ra: 78.1071, dec: -81.5417, magnitude: 6.51, spectralType: 'K' },
        { ra: 82.0067, dec: 17.2389, magnitude: 5.77, spectralType: 'M' },  // 117 Tau
        { ra: 81.77, dec: -11.9008, magnitude: 6.35, spectralType: 'F' },
        { ra: 81.1925, dec: -52.3164, magnitude: 6.27, spectralType: 'A' },  // The Pic
        { ra: 82.145, dec: 13.6789, magnitude: 6.35, spectralType: 'A' },
        { ra: 82.0067, dec: 1.2983, magnitude: 6.41, spectralType: 'B' },
        { ra: 82.3188, dec: 25.1506, magnitude: 5.47, spectralType: 'B' },  // 118 Tau
        { ra: 82.4192, dec: 29.1864, magnitude: 6.24, spectralType: 'F' },
        { ra: 81.9021, dec: -21.3756, magnitude: 6.07, spectralType: 'G' },
        { ra: 82.7025, dec: 41.4619, magnitude: 6.0, spectralType: 'K' },
        { ra: 82.6879, dec: 39.8258, magnitude: 6.37, spectralType: 'G' },
        { ra: 82.2362, dec: -3.3075, magnitude: 6.39, spectralType: 'A' },
        { ra: 81.7721, dec: -40.9436, magnitude: 5.87, spectralType: 'A' },
        { ra: 83.1408, dec: 57.2211, magnitude: 6.48, spectralType: 'F' },  // 18 Cam
        { ra: 82.0613, dec: -20.7594, magnitude: 2.84, spectralType: 'G' },  // 9Bet Lep
        { ra: 82.3483, dec: -3.4464, magnitude: 5.79, spectralType: 'K' },
        { ra: 82.6808, dec: 22.4625, magnitude: 6.29, spectralType: 'K' },
        { ra: 82.6088, dec: 15.3603, magnitude: 5.94, spectralType: 'A' },
        { ra: 82.4783, dec: 1.7892, magnitude: 5.78, spectralType: 'B' },
        { ra: 82.4333, dec: -1.0922, magnitude: 4.71, spectralType: 'K' },  // 31 Ori
        { ra: 82.0637, dec: -37.2306, magnitude: 5.57, spectralType: 'A' },
        { ra: 81.5804, dec: -58.9125, magnitude: 5.14, spectralType: 'G' },  // Lam Dor
        { ra: 82.5825, dec: 4.2042, magnitude: 6.21, spectralType: 'K' },
        { ra: 82.2779, dec: -30.1167, magnitude: 6.75, spectralType: 'G' },
        { ra: 82.6963, dec: 5.9481, magnitude: 4.2, spectralType: 'B' },  // 32 Ori
        { ra: 82.5862, dec: -7.4347, magnitude: 6.33, spectralType: 'B' },
        { ra: 82.8104, dec: 3.2922, magnitude: 5.46, spectralType: 'B' },  // 33 Ori
        { ra: 83.1821, dec: 32.1919, magnitude: 4.76, spectralType: 'B' },  // 25Chi Aur
        { ra: 84.9321, dec: 75.0439, magnitude: 6.17, spectralType: 'M' },
        { ra: 83.0533, dec: 18.5944, magnitude: 4.38, spectralType: 'M' },  // 119 Tau
        { ra: 83.3696, dec: 42.1089, magnitude: 6.55, spectralType: 'B' },
        { ra: 83.0592, dec: 17.0581, magnitude: 5.46, spectralType: 'B' },
        { ra: 82.8371, dec: -6.7083, magnitude: 6.22, spectralType: 'B' },
        { ra: 82.7817, dec: -20.8636, magnitude: 5.55, spectralType: 'A' },  // 10 Lep
        { ra: 83.3646, dec: 32.8011, magnitude: 6.48, spectralType: 'A' },
        { ra: 83.0021, dec: -0.2844, magnitude: 6.85, spectralType: 'B' },  // 34Del Ori
        { ra: 83.0017, dec: -0.2992, magnitude: 2.23, spectralType: 'O' },  // 34Del Ori
        { ra: 84.3175, dec: 66.6961, magnitude: 6.26, spectralType: 'A' },
        { ra: 83.4083, dec: 34.7258, magnitude: 6.27, spectralType: 'A' },
        { ra: 82.9825, dec: -7.3014, magnitude: 4.62, spectralType: 'B' },  // 36Ups Ori
        { ra: 82.5396, dec: -47.0778, magnitude: 5.46, spectralType: 'G' },
        { ra: 84.3129, dec: 64.1547, magnitude: 6.15, spectralType: 'A' },  // 19 Cam
        { ra: 83.3817, dec: 18.5403, magnitude: 5.69, spectralType: 'B' },  // 120 Tau
        { ra: 81.75, dec: -68.6228, magnitude: 6.03, spectralType: 'F' },
        { ra: 83.4117, dec: 20.4742, magnitude: 6.18, spectralType: 'B' },
        { ra: 83.1721, dec: -1.5919, magnitude: 5.35, spectralType: 'B' },
        { ra: 82.8029, dec: -35.4706, magnitude: 3.87, spectralType: 'K' },  // Eps Col
        { ra: 83.28, dec: -1.7183, magnitude: 6.46, spectralType: 'B' },
        { ra: 83.4762, dec: 14.3056, magnitude: 5.64, spectralType: 'B' },  // 35 Ori
        { ra: 83.1825, dec: -17.8222, magnitude: 2.58, spectralType: 'F' },  // 11Alp Lep
        { ra: 84.1467, dec: 54.4289, magnitude: 5.73, spectralType: 'M' },
        { ra: 82.3225, dec: -62.3144, magnitude: 6.59, spectralType: 'K' },
        { ra: 83.3808, dec: -1.1561, magnitude: 5.34, spectralType: 'B' },
        { ra: 84.0662, dec: 47.7153, magnitude: 6.11, spectralType: 'F' },
        { ra: 82.9004, dec: -45.9253, magnitude: 5.86, spectralType: 'K' },
        { ra: 83.49, dec: 1.4078, magnitude: 6.59, spectralType: 'B' },
        { ra: 83.5696, dec: 3.7669, magnitude: 5.36, spectralType: 'A' },  // 38 Ori
        { ra: 83.5162, dec: -1.0356, magnitude: 6.22, spectralType: 'B' },
        { ra: 83.5167, dec: -1.4706, magnitude: 5.93, spectralType: 'K' },
        { ra: 83.8629, dec: 24.0394, magnitude: 5.38, spectralType: 'B' },  // 121 Tau
        { ra: 83.705, dec: 9.4894, magnitude: 4.41, spectralType: 'B' },  // 37Phi1Ori
        { ra: 83.2137, dec: -38.5131, magnitude: 5.48, spectralType: 'K' },
        { ra: 83.9813, dec: 27.6622, magnitude: 6.27, spectralType: 'K' },
        { ra: 83.7846, dec: 9.9342, magnitude: 3.54, spectralType: 'O' },  // 39Lam Ori
        { ra: 83.7854, dec: 9.935, magnitude: 5.61, spectralType: 'B' },  // 39Lam Ori
        { ra: 83.2808, dec: -35.1397, magnitude: 5.78, spectralType: 'K' },
        { ra: 82.5662, dec: -63.9278, magnitude: 6.19, spectralType: 'F' },
        { ra: 83.8058, dec: 10.24, magnitude: 5.6, spectralType: 'B' },
        { ra: 84.2183, dec: 40.1822, magnitude: 6.09, spectralType: 'G' },
        { ra: 90.3342, dec: 85.1822, magnitude: 6.11, spectralType: 'M' },
        { ra: 83.7537, dec: -6.0092, magnitude: 5.67, spectralType: 'B' },
        { ra: 83.7612, dec: -6.0019, magnitude: 4.78, spectralType: 'B' },
        { ra: 83.4671, dec: -29.8489, magnitude: 6.53, spectralType: 'A' },
        { ra: 84.1258, dec: 25.9394, magnitude: 6.49, spectralType: 'F' },
        { ra: 83.8408, dec: -4.4933, magnitude: 6.56, spectralType: 'B' },
        { ra: 83.8437, dec: -4.4253, magnitude: 6.24, spectralType: 'B' },
        { ra: 83.8467, dec: -4.8383, magnitude: 4.59, spectralType: 'B' },  // 42 Ori
        { ra: 83.8162, dec: -5.3872, magnitude: 6.73, spectralType: 'B' },  // 41The1Ori
        { ra: 83.8171, dec: -5.3853, magnitude: 7.96, spectralType: 'B' },  // 41The1Ori
        { ra: 83.8187, dec: -5.3897, magnitude: 5.13, spectralType: 'O' },  // 41The1Ori
        { ra: 83.8221, dec: -5.3878, magnitude: 6.7, spectralType: 'B' },  // 41The1Ori
        { ra: 83.8454, dec: -5.4161, magnitude: 5.08, spectralType: 'O' },  // 43The2Ori
        { ra: 83.8796, dec: -4.3647, magnitude: 6.38, spectralType: 'B' },
        { ra: 83.8583, dec: -5.91, magnitude: 2.77, spectralType: 'O' },  // 44Iot Ori
        { ra: 83.8992, dec: -3.2528, magnitude: 6.4, spectralType: 'B' },
        { ra: 83.9146, dec: -4.8558, magnitude: 5.26, spectralType: 'F' },  // 45 Ori
        { ra: 84.2867, dec: 26.9242, magnitude: 5.83, spectralType: 'B' },
        { ra: 84.0533, dec: -1.2019, magnitude: 1.7, spectralType: 'B' },  // 46Eps Ori
        { ra: 84.4404, dec: 33.5592, magnitude: 6.33, spectralType: 'K' },
        { ra: 84.2658, dec: 17.0403, magnitude: 5.54, spectralType: 'F' },  // 122 Tau
        { ra: 84.0625, dec: -5.6481, magnitude: 6.54, spectralType: 'B' },
        { ra: 84.2262, dec: 9.2906, magnitude: 4.09, spectralType: 'K' },  // 40Phi2Ori
        { ra: 84.2683, dec: 11.035, magnitude: 5.94, spectralType: 'K' },
        { ra: 83.8142, dec: -33.08, magnitude: 5.78, spectralType: 'K' },
        { ra: 84.4113, dec: 21.1425, magnitude: 3.0, spectralType: 'B' },  // 123Zet Tau
        { ra: 84.1487, dec: -6.065, magnitude: 5.72, spectralType: 'B' },
        { ra: 83.435, dec: -54.9022, magnitude: 6.43, spectralType: 'F' },
        { ra: 84.3304, dec: 8.9519, magnitude: 6.12, spectralType: 'B' },
        { ra: 84.6587, dec: 30.4925, magnitude: 5.4, spectralType: 'F' },  // 26 Aur
        { ra: 84.0429, dec: -28.7078, magnitude: 6.26, spectralType: 'A' },
        { ra: 85.61, dec: 65.6978, magnitude: 5.6, spectralType: 'K' },
        { ra: 83.2483, dec: -64.2275, magnitude: 5.34, spectralType: 'G' },
        { ra: 84.3642, dec: -5.9383, magnitude: 6.05, spectralType: 'B' },
        { ra: 84.2867, dec: -11.7756, magnitude: 6.11, spectralType: 'A' },
        { ra: 84.5046, dec: 7.5414, magnitude: 5.88, spectralType: 'B' },
        { ra: 84.7392, dec: 26.6178, magnitude: 6.37, spectralType: 'G' },
        { ra: 83.4062, dec: -62.4897, magnitude: 3.76, spectralType: 'F' },  // Bet Dor
        { ra: 84.4725, dec: -4.8136, magnitude: 6.19, spectralType: 'B' },
        { ra: 84.8267, dec: 29.2153, magnitude: 5.96, spectralType: 'B' },
        { ra: 85.3346, dec: 53.4811, magnitude: 6.23, spectralType: 'K' },
        { ra: 84.3188, dec: -27.8714, magnitude: 6.16, spectralType: 'F' },  // Nu 1Col
        { ra: 84.0112, dec: -47.3139, magnitude: 6.11, spectralType: 'K' },
        { ra: 84.9342, dec: 25.8969, magnitude: 5.18, spectralType: 'B' },  // 125 Tau
        { ra: 84.8625, dec: 21.7628, magnitude: 6.34, spectralType: 'A' },
        { ra: 83.76, dec: -58.8711, magnitude: 6.75, spectralType: 'K' },
        { ra: 84.6867, dec: -2.6, magnitude: 3.81, spectralType: 'O' },  // 48Sig Ori
        { ra: 84.6962, dec: -2.5942, magnitude: 6.65, spectralType: 'B' },
        { ra: 84.6575, dec: -6.5739, magnitude: 5.96, spectralType: 'B' },
        { ra: 84.7963, dec: 4.1214, magnitude: 4.57, spectralType: 'B' },  // 47Ome Ori
        { ra: 84.4358, dec: -28.6894, magnitude: 5.31, spectralType: 'F' },  // Nu 2Col
        { ra: 83.74, dec: -61.1758, magnitude: 6.32, spectralType: 'G' },
        { ra: 84.7212, dec: -7.2131, magnitude: 4.8, spectralType: 'A' },  // 49 Ori
        { ra: 85.1496, dec: 31.3581, magnitude: 6.04, spectralType: 'B' },
        { ra: 85.1754, dec: 31.9208, magnitude: 6.11, spectralType: 'M' },
        { ra: 84.88, dec: -3.5647, magnitude: 6.0, spectralType: 'A' },
        { ra: 85.7567, dec: 56.5817, magnitude: 6.05, spectralType: 'K' },  // 24 Cam
        { ra: 84.8783, dec: -9.7067, magnitude: 6.5, spectralType: 'B' },
        { ra: 86.0358, dec: 61.4767, magnitude: 6.15, spectralType: 'G' },  // 23 Cam
        { ra: 84.8179, dec: -17.8494, magnitude: 6.38, spectralType: 'B' },
        { ra: 85.3375, dec: 29.4875, magnitude: 6.43, spectralType: 'B' },
        { ra: 85.3238, dec: 16.5339, magnitude: 4.86, spectralType: 'B' },  // 126 Tau
        { ra: 84.6817, dec: -40.7075, magnitude: 5.82, spectralType: 'B' },
        { ra: 85.1896, dec: -1.9428, magnitude: 2.05, spectralType: 'O' },  // 50Zet Ori
        { ra: 85.19, dec: -1.9428, magnitude: 4.21, spectralType: 'B' },  // 50Zet Ori
        { ra: 85.1554, dec: -2.825, magnitude: 6.22, spectralType: 'B' },
        { ra: 85.4775, dec: 23.3264, magnitude: 6.59, spectralType: 'B' },
        { ra: 85.2108, dec: -1.1289, magnitude: 4.95, spectralType: 'B' },
        { ra: 82.9704, dec: -76.3411, magnitude: 5.19, spectralType: 'K' },  // Gam Men
        { ra: 85.5163, dec: 22.6603, magnitude: 6.36, spectralType: 'K' },
        { ra: 85.2733, dec: 0.3378, magnitude: 5.93, spectralType: 'F' },
        { ra: 84.9121, dec: -34.0742, magnitude: 2.64, spectralType: 'B' },  // Alp Col
        { ra: 85.1917, dec: -10.4094, magnitude: 6.52, spectralType: 'B' },
        { ra: 84.9575, dec: -32.6292, magnitude: 5.45, spectralType: 'G' },
        { ra: 85.4179, dec: -2.8961, magnitude: 6.42, spectralType: 'A' },
        { ra: 84.2279, dec: -66.5603, magnitude: 6.31, spectralType: 'B' },
        { ra: 85.8313, dec: 23.2042, magnitude: 6.21, spectralType: 'B' },
        { ra: 85.4229, dec: -16.7256, magnitude: 6.21, spectralType: 'B' },
        { ra: 85.6192, dec: 1.4747, magnitude: 4.91, spectralType: 'K' },  // 51 Ori
        { ra: 83.6863, dec: -73.7414, magnitude: 5.78, spectralType: 'M' },
        { ra: 85.5596, dec: -17.5303, magnitude: 6.15, spectralType: 'K' },
        { ra: 85.3625, dec: -33.4006, magnitude: 6.34, spectralType: 'A' },
        { ra: 85.7242, dec: -6.7961, magnitude: 6.02, spectralType: 'F' },
        { ra: 85.5579, dec: -22.3736, magnitude: 5.87, spectralType: 'A' },  // 12 Lep
        { ra: 86.6267, dec: 56.1156, magnitude: 5.94, spectralType: 'A' },  // 26 Cam
        { ra: 85.7887, dec: -1.6131, magnitude: 6.31, spectralType: 'K' },
        { ra: 86.475, dec: 49.8264, magnitude: 5.47, spectralType: 'A' },  // 27Omi Aur
        { ra: 85.5483, dec: -30.5356, magnitude: 6.19, spectralType: 'A' },
        { ra: 85.5629, dec: -34.6678, magnitude: 5.29, spectralType: 'B' },
        { ra: 86.4562, dec: 40.5072, magnitude: 6.58, spectralType: 'A' },
        { ra: 85.84, dec: -18.5575, magnitude: 5.73, spectralType: 'A' },
        { ra: 87.2704, dec: 62.8081, magnitude: 6.13, spectralType: 'A' },
        { ra: 86.4142, dec: 20.695, magnitude: 6.95, spectralType: 'G' },
        { ra: 86.2579, dec: 4.0081, magnitude: 6.09, spectralType: 'F' },
        { ra: 86.8112, dec: 42.5267, magnitude: 6.29, spectralType: 'K' },
        { ra: 86.1183, dec: -20.1264, magnitude: 6.34, spectralType: 'G' },
        { ra: 85.8758, dec: -39.4069, magnitude: 6.25, spectralType: 'F' },
        { ra: 86.1104, dec: -22.4217, magnitude: 6.15, spectralType: 'K' },
        { ra: 86.1158, dec: -22.4483, magnitude: 3.6, spectralType: 'F' },  // 13Gam Lep
        { ra: 85.9213, dec: -45.8331, magnitude: 6.39, spectralType: 'A' },
        { ra: 86.6896, dec: 15.8225, magnitude: 6.0, spectralType: 'B' },  // 129 Tau
        { ra: 86.5117, dec: -4.2683, magnitude: 6.34, spectralType: 'K' },
        { ra: 86.7171, dec: 9.5222, magnitude: 5.79, spectralType: 'G' },
        { ra: 86.6458, dec: 1.1681, magnitude: 5.95, spectralType: 'G' },
        { ra: 86.805, dec: 14.4883, magnitude: 5.72, spectralType: 'A' },  // 131 Tau
        { ra: 86.8592, dec: 17.7292, magnitude: 5.49, spectralType: 'F' },  // 130 Tau
        { ra: 83.9012, dec: -78.8208, magnitude: 6.05, spectralType: 'B' },  // Iot Men
        { ra: 87.6417, dec: 56.9189, magnitude: 6.54, spectralType: 'A' },  // 29 Cam
        { ra: 86.9288, dec: 13.8997, magnitude: 5.29, spectralType: 'B' },  // 133 Tau
        { ra: 88.2313, dec: 68.4714, magnitude: 6.2, spectralType: 'G' },
        { ra: 87.2938, dec: 39.1811, magnitude: 4.52, spectralType: 'G' },  // 29Tau Aur
        { ra: 86.4996, dec: -32.3064, magnitude: 5.17, spectralType: 'O' },  // Mu Col
        { ra: 87.0933, dec: 20.8694, magnitude: 6.07, spectralType: 'B' },
        { ra: 86.7387, dec: -14.8219, magnitude: 3.55, spectralType: 'A' },  // 14Zet Lep
        { ra: 87.0008, dec: 6.4542, magnitude: 5.27, spectralType: 'A' },  // 52 Ori
        { ra: 86.7817, dec: -16.2378, magnitude: 6.17, spectralType: 'G' },
        { ra: 86.8612, dec: -10.5331, magnitude: 6.03, spectralType: 'A' },
        { ra: 87.2542, dec: 24.5675, magnitude: 4.86, spectralType: 'G' },  // 132 Tau
        { ra: 87.735, dec: 51.5147, magnitude: 6.29, spectralType: 'K' },
        { ra: 86.9392, dec: -9.6697, magnitude: 2.06, spectralType: 'B' },  // 53Kap Ori
        { ra: 86.7696, dec: -28.6392, magnitude: 6.22, spectralType: 'B' },
        { ra: 88.0725, dec: 58.9642, magnitude: 6.14, spectralType: 'A' },  // 30 Cam
        { ra: 87.1454, dec: -4.0947, magnitude: 5.97, spectralType: 'G' },
        { ra: 86.6142, dec: -46.5972, magnitude: 5.31, spectralType: 'K' },
        { ra: 86.8275, dec: -35.6747, magnitude: 6.32, spectralType: 'K' },
        { ra: 87.3871, dec: 12.6511, magnitude: 4.91, spectralType: 'B' },  // 134 Tau
        { ra: 87.76, dec: 37.3056, magnitude: 4.74, spectralType: 'M' },  // 31Ups Aur
        { ra: 87.8725, dec: 39.1486, magnitude: 3.97, spectralType: 'G' },  // 32Nu Aur
        { ra: 87.7421, dec: 27.9678, magnitude: 5.56, spectralType: 'G' },
        { ra: 87.5108, dec: 9.8711, magnitude: 5.8, spectralType: 'G' },
        { ra: 86.1933, dec: -65.7356, magnitude: 4.35, spectralType: 'A' },  // Del Dor
        { ra: 87.6204, dec: 14.3056, magnitude: 5.52, spectralType: 'G' },  // 135 Tau
        { ra: 86.9921, dec: -40.6525, magnitude: 6.61, spectralType: 'K' },
        { ra: 87.8571, dec: 32.125, magnitude: 6.25, spectralType: 'M' },
        { ra: 87.5546, dec: 4.4233, magnitude: 5.97, spectralType: 'K' },
        { ra: 86.8212, dec: -51.0664, magnitude: 3.85, spectralType: 'A' },  // Bet Pic
        { ra: 87.4021, dec: -14.4836, magnitude: 5.49, spectralType: 'G' },
        { ra: 84.2908, dec: -80.4692, magnitude: 5.65, spectralType: 'G' },  // Pi Men
        { ra: 86.8042, dec: -54.3608, magnitude: 6.18, spectralType: 'K' },
        { ra: 87.625, dec: 2.0244, magnitude: 5.98, spectralType: 'G' },
        { ra: 88.1646, dec: 39.5744, magnitude: 6.45, spectralType: 'A' },
        { ra: 87.4729, dec: -22.9717, magnitude: 5.87, spectralType: 'A' },
        { ra: 88.7408, dec: 59.8883, magnitude: 5.2, spectralType: 'A' },  // 31 Cam
        { ra: 88.1671, dec: 33.9175, magnitude: 5.98, spectralType: 'M' },
        { ra: 88.7117, dec: 55.7069, magnitude: 4.99, spectralType: 'A' },  // 30Xi Aur
        { ra: 88.0975, dec: 19.8681, magnitude: 6.06, spectralType: 'G' },
        { ra: 87.8417, dec: -7.5181, magnitude: 5.35, spectralType: 'B' },  // 55 Ori
        { ra: 87.3921, dec: -44.8753, magnitude: 6.38, spectralType: 'K' },
        { ra: 88.0929, dec: 14.1717, magnitude: 5.59, spectralType: 'B' },  // 137 Tau
        { ra: 88.3317, dec: 27.6122, magnitude: 4.58, spectralType: 'A' },  // 136 Tau
        { ra: 87.8304, dec: -20.8792, magnitude: 3.81, spectralType: 'K' },  // 15Del Lep
        { ra: 87.8692, dec: -22.9261, magnitude: 6.17, spectralType: 'K' },
        { ra: 88.11, dec: 1.855, magnitude: 4.78, spectralType: 'K' },  // 56 Ori
        { ra: 88.3296, dec: 20.2992, magnitude: 6.71, spectralType: 'B' },
        { ra: 88.0317, dec: -9.0414, magnitude: 5.97, spectralType: 'A' },
        { ra: 87.74, dec: -35.7683, magnitude: 3.12, spectralType: 'K' },  // Bet Col
        { ra: 89.3958, dec: 66.0961, magnitude: 6.25, spectralType: 'K' },
        { ra: 87.4571, dec: -56.1667, magnitude: 4.51, spectralType: 'K' },  // Gam Pic
        { ra: 87.9979, dec: -29.4486, magnitude: 6.45, spectralType: 'K' },
        { ra: 87.6192, dec: -52.7678, magnitude: 6.35, spectralType: 'K' },
        { ra: 89.06, dec: 51.8039, magnitude: 6.49, spectralType: 'A' },
        { ra: 88.7458, dec: 31.7017, magnitude: 5.9, spectralType: 'A' },
        { ra: 88.5954, dec: 20.2761, magnitude: 4.41, spectralType: 'G' },  // 54Chi1Ori
        { ra: 88.5558, dec: 10.5869, magnitude: 6.12, spectralType: 'G' },
        { ra: 87.7217, dec: -52.1089, magnitude: 5.17, spectralType: 'G' },
        { ra: 88.6342, dec: 11.7625, magnitude: 6.59, spectralType: 'A' },
        { ra: 88.5654, dec: 3.2253, magnitude: 6.31, spectralType: 'K' },
        { ra: 88.7362, dec: 19.7497, magnitude: 5.92, spectralType: 'B' },  // 57 Ori
        { ra: 88.1383, dec: -37.6311, magnitude: 5.63, spectralType: 'K' },
        { ra: 89.2704, dec: 49.0294, magnitude: 6.47, spectralType: 'G' },
        { ra: 88.1988, dec: -38.5258, magnitude: 6.7, spectralType: 'K' },
        { ra: 88.2787, dec: -33.8014, magnitude: 4.87, spectralType: 'B' },  // Lam Col
        { ra: 88.6838, dec: 0.9683, magnitude: 6.0, spectralType: 'K' },
        { ra: 88.6446, dec: -4.0639, magnitude: 6.57, spectralType: 'B' },
        { ra: 82.5579, dec: -84.785, magnitude: 6.2, spectralType: 'B' },
        { ra: 88.4892, dec: -19.6383, magnitude: 6.69, spectralType: 'A' },
        { ra: 88.7929, dec: 7.4069, magnitude: 0.5, spectralType: 'M' },  // 58Alp Ori
        { ra: 86.9504, dec: -72.7022, magnitude: 6.53, spectralType: 'K' },  // Lam Men
        { ra: 88.9554, dec: 20.175, magnitude: 5.4, spectralType: 'M' },
        { ra: 87.4733, dec: -66.9011, magnitude: 5.11, spectralType: 'B' },  // Eps Dor
        { ra: 88.6817, dec: -11.7739, magnitude: 5.66, spectralType: 'K' },
        { ra: 89.1408, dec: 28.9422, magnitude: 6.32, spectralType: 'A' },
        { ra: 89.0146, dec: 13.9253, magnitude: 6.6, spectralType: 'G' },
        { ra: 88.5588, dec: -29.1478, magnitude: 6.36, spectralType: 'F' },
        { ra: 88.3454, dec: -42.9214, magnitude: 6.55, spectralType: 'K' },
        { ra: 88.8762, dec: -4.6164, magnitude: 5.87, spectralType: 'K' },
        { ra: 88.8975, dec: -4.7883, magnitude: 6.28, spectralType: 'A' },
        { ra: 88.0846, dec: -57.1561, magnitude: 5.94, spectralType: 'F' },
        { ra: 87.8458, dec: -64.0336, magnitude: 6.36, spectralType: 'G' },
        { ra: 89.2338, dec: 24.2497, magnitude: 6.02, spectralType: 'A' },
        { ra: 89.1167, dec: 9.5097, magnitude: 5.99, spectralType: 'A' },
        { ra: 89.2062, dec: 11.5211, magnitude: 5.87, spectralType: 'K' },
        { ra: 89.8817, dec: 54.2847, magnitude: 3.72, spectralType: 'K' },  // 33Del Aur
        { ra: 91.2887, dec: 75.5858, magnitude: 6.4, spectralType: 'K' },
        { ra: 89.9404, dec: 55.3208, magnitude: 6.44, spectralType: 'A' },
        { ra: 89.9504, dec: 54.5472, magnitude: 6.14, spectralType: 'K' },
        { ra: 89.8408, dec: 49.9244, magnitude: 5.89, spectralType: 'G' },
        { ra: 88.7188, dec: -39.9581, magnitude: 5.57, spectralType: 'M' },
        { ra: 88.5446, dec: -50.3619, magnitude: 6.52, spectralType: 'G' },
        { ra: 89.4988, dec: 25.9539, magnitude: 4.82, spectralType: 'B' },  // 139 Tau
        { ra: 89.1013, dec: -14.1678, magnitude: 3.71, spectralType: 'F' },  // 16Eta Lep
        { ra: 89.0596, dec: -22.8403, magnitude: 5.96, spectralType: 'K' },
        { ra: 88.8746, dec: -37.1208, magnitude: 4.97, spectralType: 'K' },  // Xi Col
        { ra: 89.8821, dec: 44.9475, magnitude: 1.9, spectralType: 'A' },  // 34Bet Aur
        { ra: 88.6713, dec: -49.6269, magnitude: 6.1, spectralType: 'B' },
        { ra: 89.1438, dec: -23.2156, magnitude: 6.36, spectralType: 'K' },
        { ra: 89.9838, dec: 45.9369, magnitude: 4.26, spectralType: 'M' },  // 35Pi Aur
        { ra: 89.0871, dec: -31.3825, magnitude: 5.5, spectralType: 'F' },  // Sig Col
        { ra: 89.4758, dec: 1.2244, magnitude: 6.22, spectralType: 'M' },
        { ra: 88.7092, dec: -52.6353, magnitude: 5.29, spectralType: 'F' },
        { ra: 89.9304, dec: 37.2125, magnitude: 2.62, spectralType: 'A' },  // 37The Aur
        { ra: 90.0792, dec: 44.5919, magnitude: 6.22, spectralType: 'K' },
        { ra: 89.5488, dec: -0.9942, magnitude: 6.22, spectralType: 'K' },
        { ra: 89.2042, dec: -31.9761, magnitude: 6.44, spectralType: 'G' },
        { ra: 89.7217, dec: 12.8086, magnitude: 5.7, spectralType: 'K' },
        { ra: 89.6017, dec: 1.8369, magnitude: 5.9, spectralType: 'A' },  // 59 Ori
        { ra: 90.2442, dec: 47.9019, magnitude: 5.73, spectralType: 'B' },  // 36 Aur
        { ra: 88.5254, dec: -63.09, magnitude: 4.65, spectralType: 'K' },
        { ra: 89.7067, dec: 0.5531, magnitude: 5.22, spectralType: 'A' },  // 60 Ori
        { ra: 88.5496, dec: -64.4822, magnitude: 6.63, spectralType: 'F' },
        { ra: 90.4296, dec: 48.9594, magnitude: 5.96, spectralType: 'K' },
        { ra: 89.3842, dec: -35.2833, magnitude: 4.36, spectralType: 'B' },  // Gam Col
        { ra: 89.7542, dec: -9.3822, magnitude: 6.12, spectralType: 'F' },  // 1 Mon
        { ra: 89.7679, dec: -9.5583, magnitude: 5.03, spectralType: 'A' },  // 2 Mon
        { ra: 89.9071, dec: -1.4444, magnitude: 6.63, spectralType: 'B' },
        { ra: 90.2925, dec: 31.0347, magnitude: 5.98, spectralType: 'A' },
        { ra: 90.2517, dec: 27.5722, magnitude: 6.05, spectralType: 'B' },
        { ra: 90.7029, dec: 49.9056, magnitude: 6.05, spectralType: 'B' },
        { ra: 90.0142, dec: -3.0742, magnitude: 4.53, spectralType: 'K' },
        { ra: 89.31, dec: -53.4261, magnitude: 6.45, spectralType: 'K' },
        { ra: 90.7233, dec: 43.3786, magnitude: 6.42, spectralType: 'K' },
        { ra: 90.4233, dec: 22.4008, magnitude: 6.37, spectralType: 'B' },
        { ra: 89.6567, dec: -44.0344, magnitude: 5.81, spectralType: 'G' },
        { ra: 90.0737, dec: -12.8997, magnitude: 6.22, spectralType: 'F' },
        { ra: 90.825, dec: 42.9117, magnitude: 6.1, spectralType: 'K' },  // 38 Aur
        { ra: 89.7867, dec: -42.8153, magnitude: 3.96, spectralType: 'K' },  // Eta Col
        { ra: 91.2846, dec: 59.3931, magnitude: 6.34, spectralType: 'K' },
        { ra: 90.7296, dec: 32.6358, magnitude: 6.24, spectralType: 'F' },
        { ra: 91.1213, dec: 51.5733, magnitude: 6.45, spectralType: 'A' },
        { ra: 90.5958, dec: 9.6475, magnitude: 4.12, spectralType: 'A' },  // 61Mu Ori
        { ra: 87.5696, dec: -79.3614, magnitude: 5.47, spectralType: 'B' },  // Kap Men
        { ra: 91.6633, dec: 63.4536, magnitude: 6.39, spectralType: 'K' },
        { ra: 90.5712, dec: 1.6944, magnitude: 6.59, spectralType: 'B' },
        { ra: 90.46, dec: -10.5981, magnitude: 4.95, spectralType: 'B' },  // 3 Mon
        { ra: 90.3046, dec: -25.4178, magnitude: 6.05, spectralType: 'A' },
        { ra: 90.8638, dec: 19.6906, magnitude: 5.14, spectralType: 'B' },  // 64 Ori
        { ra: 90.3183, dec: -33.9117, magnitude: 5.55, spectralType: 'K' },
        { ra: 91.2642, dec: 42.9817, magnitude: 5.87, spectralType: 'F' },  // 39 Aur
        { ra: 90.8529, dec: 11.6808, magnitude: 6.08, spectralType: 'A' },
        { ra: 91.03, dec: 23.2633, magnitude: 4.16, spectralType: 'G' },  // 1 Gem
        { ra: 90.98, dec: 20.1383, magnitude: 4.63, spectralType: 'B' },  // 62Chi2Ori
        { ra: 90.6408, dec: -14.4972, magnitude: 6.2, spectralType: 'G' },
        { ra: 91.2608, dec: 37.9642, magnitude: 6.34, spectralType: 'K' },
        { ra: 90.205, dec: -51.2164, magnitude: 5.67, spectralType: 'A' },
        { ra: 91.3917, dec: 33.5992, magnitude: 6.23, spectralType: 'B' },
        { ra: 90.8146, dec: -26.2844, magnitude: 5.04, spectralType: 'K' },
        { ra: 91.5354, dec: 35.3875, magnitude: 6.12, spectralType: 'G' },
        { ra: 91.0563, dec: -6.7092, magnitude: 5.21, spectralType: 'B' },
        { ra: 91.6462, dec: 38.4828, magnitude: 5.36, spectralType: 'A' },  // 40 Aur
        { ra: 91.2425, dec: 5.42, magnitude: 5.67, spectralType: 'G' },  // 63 Ori
        { ra: 91.2433, dec: 4.1586, magnitude: 5.63, spectralType: 'G' },  // 66 Ori
        { ra: 91.5937, dec: 29.5125, magnitude: 6.08, spectralType: 'M' },
        { ra: 91.8621, dec: 41.8542, magnitude: 6.12, spectralType: 'K' },
        { ra: 91.2462, dec: -16.4844, magnitude: 4.93, spectralType: 'A' },  // 17 Lep
        { ra: 91.0846, dec: -32.1725, magnitude: 5.65, spectralType: 'B' },
        { ra: 91.3625, dec: -10.2428, magnitude: 5.87, spectralType: 'F' },
        { ra: 90.5383, dec: -60.0969, magnitude: 6.45, spectralType: 'M' },
        { ra: 92.4963, dec: 58.9358, magnitude: 5.36, spectralType: 'G' },  // 37 Cam
        { ra: 92.0958, dec: 41.0556, magnitude: 6.36, spectralType: 'G' },
        { ra: 91.6612, dec: -4.1939, magnitude: 5.38, spectralType: 'B' },
        { ra: 91.5387, dec: -14.9353, magnitude: 4.67, spectralType: 'A' },  // 18The Lep
        { ra: 91.4404, dec: -24.1956, magnitude: 6.95, spectralType: 'M' },
        { ra: 91.1183, dec: -45.0367, magnitude: 6.35, spectralType: 'G' },
        { ra: 91.1675, dec: -45.0789, magnitude: 5.93, spectralType: 'F' },
        { ra: 91.8929, dec: 14.7683, magnitude: 4.42, spectralType: 'B' },  // 67Nu Ori
        { ra: 91.3629, dec: -35.5136, magnitude: 5.8, spectralType: 'A' },
        { ra: 91.7162, dec: -11.1736, magnitude: 6.66, spectralType: 'B' },
        { ra: 91.1954, dec: -48.4586, magnitude: 6.58, spectralType: 'G' },
        { ra: 91.6333, dec: -23.1106, magnitude: 5.47, spectralType: 'A' },
        { ra: 91.5229, dec: -29.7586, magnitude: 5.81, spectralType: 'A' },
        { ra: 93.2129, dec: 65.7183, magnitude: 5.32, spectralType: 'K' },  // 36 Cam
        { ra: 91.74, dec: -21.8128, magnitude: 5.78, spectralType: 'M' },
        { ra: 92.1967, dec: 8.67, magnitude: 6.55, spectralType: 'B' },
        { ra: 91.9233, dec: -19.1658, magnitude: 5.31, spectralType: 'M' },  // 19 Lep
        { ra: 92.385, dec: 22.19, magnitude: 5.93, spectralType: 'K' },
        { ra: 91.7654, dec: -34.3119, magnitude: 5.83, spectralType: 'B' },
        { ra: 91.6708, dec: -42.2986, magnitude: 6.12, spectralType: 'A' },  // Pi 1Col
        { ra: 92.9417, dec: 52.6472, magnitude: 6.3, spectralType: 'A' },
        { ra: 92.4333, dec: 23.1133, magnitude: 5.75, spectralType: 'B' },  // 3 Gem
        { ra: 92.2413, dec: 2.4994, magnitude: 5.73, spectralType: 'A' },
        { ra: 92.9021, dec: 48.7131, magnitude: 6.82, spectralType: 'A' },  // 41 Aur
        { ra: 92.9025, dec: 48.7111, magnitude: 6.09, spectralType: 'A' },  // 41 Aur
        { ra: 91.8817, dec: -37.2531, magnitude: 5.02, spectralType: 'B' },  // The Col
        { ra: 91.7579, dec: -45.0914, magnitude: 6.51, spectralType: 'K' },
        { ra: 92.4008, dec: -5.7111, magnitude: 6.17, spectralType: 'F' },
        { ra: 92.2413, dec: -22.4275, magnitude: 5.5, spectralType: 'A' },
        { ra: 91.9704, dec: -42.1539, magnitude: 5.5, spectralType: 'A' },  // Pi 2Col
        { ra: 92.3346, dec: -18.1261, magnitude: 6.35, spectralType: 'B' },
        { ra: 92.3929, dec: -14.5842, magnitude: 5.56, spectralType: 'K' },
        { ra: 92.7575, dec: 18.1294, magnitude: 6.33, spectralType: 'K' },
        { ra: 92.8846, dec: 24.4203, magnitude: 5.8, spectralType: 'K' },  // 5 Gem
        { ra: 92.4496, dec: -22.7742, magnitude: 5.71, spectralType: 'F' },
        { ra: 92.1442, dec: -44.3561, magnitude: 6.27, spectralType: 'B' },
        { ra: 93.4387, dec: 51.1725, magnitude: 6.04, spectralType: 'K' },
        { ra: 93.0837, dec: 32.6933, magnitude: 5.78, spectralType: 'M' },
        { ra: 92.9642, dec: 21.8686, magnitude: 6.56, spectralType: 'M' },
        { ra: 92.8662, dec: 13.6386, magnitude: 6.04, spectralType: 'A' },
        { ra: 92.4467, dec: -26.7008, magnitude: 6.27, spectralType: 'G' },
        { ra: 93.0054, dec: 19.7906, magnitude: 5.75, spectralType: 'B' },  // 68 Ori
        { ra: 91.5392, dec: -66.0397, magnitude: 5.71, spectralType: 'A' },  // Eta1Dor
        { ra: 92.7554, dec: -6.7542, magnitude: 6.15, spectralType: 'A' },
        { ra: 91.7642, dec: -62.1547, magnitude: 5.05, spectralType: 'K' },
        { ra: 93.0796, dec: 22.9083, magnitude: 6.39, spectralType: 'M' },  // 6 Gem
        { ra: 93.0138, dec: 16.1306, magnitude: 4.95, spectralType: 'B' },  // 69 Ori
        { ra: 92.985, dec: 14.2089, magnitude: 4.48, spectralType: 'B' },  // 70Xi Ori
        { ra: 92.6442, dec: -27.1542, magnitude: 5.72, spectralType: 'K' },
        { ra: 93.9192, dec: 59.9992, magnitude: 5.35, spectralType: 'K' },  // 40 Cam
        { ra: 92.9321, dec: -4.6656, magnitude: 6.18, spectralType: 'B' },
        { ra: 92.5429, dec: -40.3536, magnitude: 5.58, spectralType: 'M' },
        { ra: 92.3471, dec: -49.5628, magnitude: 6.49, spectralType: 'F' },
        { ra: 92.9658, dec: -6.5503, magnitude: 5.05, spectralType: 'B' },
        { ra: 92.8063, dec: -26.4822, magnitude: 6.09, spectralType: 'A' },
        { ra: 93.3892, dec: 18.6803, magnitude: 6.58, spectralType: 'B' },
        { ra: 93.3025, dec: 10.6275, magnitude: 6.45, spectralType: 'G' },
        { ra: 94.7117, dec: 69.3197, magnitude: 4.8, spectralType: 'A' },
        { ra: 93.185, dec: -2.5044, magnitude: 6.62, spectralType: 'A' },
        { ra: 92.6663, dec: -45.2819, magnitude: 6.31, spectralType: 'A' },
        { ra: 92.5746, dec: -54.9686, magnitude: 4.81, spectralType: 'B' },  // Del Pic
        { ra: 93.1929, dec: -17.7631, magnitude: 6.52, spectralType: 'B' },
        { ra: 93.6192, dec: 17.9064, magnitude: 5.88, spectralType: 'A' },
        { ra: 94.4783, dec: 61.5153, magnitude: 4.98, spectralType: 'M' },  // 1 Lyn
        { ra: 93.7192, dec: 22.5067, magnitude: 3.28, spectralType: 'M' },  // 7Eta Gem
        { ra: 93.9125, dec: 36.1486, magnitude: 6.92, spectralType: 'F' },
        { ra: 93.4762, dec: -3.7414, magnitude: 5.83, spectralType: 'G' },
        { ra: 93.8446, dec: 29.4981, magnitude: 4.35, spectralType: 'G' },  // 44Kap Aur
        { ra: 93.7121, dec: 19.1564, magnitude: 5.2, spectralType: 'F' },  // 71 Ori
        { ra: 92.1842, dec: -68.8433, magnitude: 5.06, spectralType: 'B' },  // Nu Dor
        { ra: 93.7854, dec: 13.8511, magnitude: 5.91, spectralType: 'B' },
        { ra: 93.8546, dec: 16.1431, magnitude: 5.3, spectralType: 'B' },  // 72 Ori
        { ra: 93.6529, dec: -4.5683, magnitude: 5.83, spectralType: 'B' },
        { ra: 93.4379, dec: -23.8619, magnitude: 6.39, spectralType: 'G' },
        { ra: 93.3888, dec: -29.3961, magnitude: 6.54, spectralType: 'B' },
        { ra: 93.7137, dec: -6.2747, magnitude: 3.98, spectralType: 'K' },  // 5Gam Mon
        { ra: 94.3946, dec: 46.4242, magnitude: 6.52, spectralType: 'F' },  // 42 Aur
        { ra: 93.9375, dec: 12.5511, magnitude: 5.33, spectralType: 'B' },  // 73 Ori
        { ra: 94.0792, dec: 23.97, magnitude: 6.08, spectralType: 'G' },  // 8 Gem
        { ra: 93.9171, dec: 6.0661, magnitude: 6.07, spectralType: 'B' },
        { ra: 93.9458, dec: 4.2836, magnitude: 6.64, spectralType: 'B' },
        { ra: 93.8929, dec: -0.5122, magnitude: 5.65, spectralType: 'F' },
        { ra: 93.8738, dec: -4.9153, magnitude: 5.99, spectralType: 'A' },
        { ra: 94.0992, dec: 17.1814, magnitude: 6.39, spectralType: 'K' },
        { ra: 93.975, dec: 1.1692, magnitude: 6.37, spectralType: 'F' },
        { ra: 93.8583, dec: -9.0353, magnitude: 6.1, spectralType: 'B' },
        { ra: 94.9058, dec: 59.0108, magnitude: 4.48, spectralType: 'A' },  // 2 Lyn
        { ra: 94.5704, dec: 46.3606, magnitude: 6.38, spectralType: 'K' },  // 43 Aur
        { ra: 94.2446, dec: 23.7408, magnitude: 6.25, spectralType: 'B' },  // 9 Gem
        { ra: 94.1108, dec: 12.2722, magnitude: 5.04, spectralType: 'F' },  // 74 Ori
        { ra: 93.785, dec: -20.2722, magnitude: 5.91, spectralType: 'K' },
        { ra: 93.8229, dec: -18.4767, magnitude: 5.99, spectralType: 'K' },
        { ra: 93.9371, dec: -13.7183, magnitude: 5.01, spectralType: 'B' },
        { ra: 92.8125, dec: -65.5894, magnitude: 5.01, spectralType: 'M' },  // Eta2Dor
        { ra: 94.0883, dec: 1.0803, magnitude: 6.63, spectralType: 'B' },
        { ra: 94.2775, dec: 9.9425, magnitude: 5.39, spectralType: 'A' },  // 75 Ori
        { ra: 94.2433, dec: 7.0531, magnitude: 6.57, spectralType: 'B' },
        { ra: 94.0321, dec: -16.6178, magnitude: 5.92, spectralType: 'B' },
        { ra: 94.3887, dec: 14.0583, magnitude: 6.59, spectralType: 'A' },
        { ra: 94.3171, dec: 5.1003, magnitude: 5.71, spectralType: 'F' },
        { ra: 93.9883, dec: -29.7883, magnitude: 6.67, spectralType: 'K' },
        { ra: 94.5233, dec: 14.3828, magnitude: 6.16, spectralType: 'A' },
        { ra: 94.2646, dec: -22.715, magnitude: 6.07, spectralType: 'G' },
        { ra: 94.3967, dec: -10.7253, magnitude: 6.75, spectralType: 'F' },  // 6 Mon
        { ra: 94.1379, dec: -35.1406, magnitude: 4.37, spectralType: 'K' },  // Kap Col
        { ra: 95.515, dec: 59.3722, magnitude: 5.94, spectralType: 'A' },  // 4 Lyn
        { ra: 94.7575, dec: 17.325, magnitude: 6.32, spectralType: 'B' },
        { ra: 94.6688, dec: 9.0472, magnitude: 6.24, spectralType: 'K' },
        { ra: 94.4237, dec: -16.8158, magnitude: 5.14, spectralType: 'K' },
        { ra: 92.56, dec: -74.7531, magnitude: 5.09, spectralType: 'G' },  // Alp Men
        { ra: 94.1483, dec: -39.2644, magnitude: 6.0, spectralType: 'A' },
        { ra: 94.255, dec: -37.7375, magnitude: 5.53, spectralType: 'K' },
        { ra: 95.4421, dec: 53.4522, magnitude: 5.36, spectralType: 'F' },  // 45 Aur
        { ra: 94.2896, dec: -37.2531, magnitude: 5.87, spectralType: 'A' },
        { ra: 94.5571, dec: -19.9669, magnitude: 5.52, spectralType: 'B' },
        { ra: 94.7108, dec: -9.3903, magnitude: 5.36, spectralType: 'K' },
        { ra: 94.7033, dec: -15.0247, magnitude: 6.06, spectralType: 'M' },
        { ra: 95.0175, dec: 14.6511, magnitude: 5.69, spectralType: 'K' },
        { ra: 94.7829, dec: -8.5864, magnitude: 6.22, spectralType: 'B' },
        { ra: 94.7458, dec: -20.9261, magnitude: 5.81, spectralType: 'B' },
        { ra: 95.3004, dec: 29.5411, magnitude: 6.43, spectralType: 'A' },
        { ra: 94.9283, dec: -7.8231, magnitude: 5.27, spectralType: 'B' },  // 7 Mon
        { ra: 94.0771, dec: -59.2136, magnitude: 6.43, spectralType: 'G' },
        { ra: 94.9983, dec: -2.9444, magnitude: 4.9, spectralType: 'M' },
        { ra: 95.2179, dec: 11.7564, magnitude: 6.54, spectralType: 'B' },
        { ra: 95.3579, dec: 17.7636, magnitude: 6.35, spectralType: 'G' },
        { ra: 94.4654, dec: -52.7331, magnitude: 6.41, spectralType: 'K' },
        { ra: 94.9208, dec: -34.3967, magnitude: 5.78, spectralType: 'B' },
        { ra: 95.3575, dec: 2.2686, magnitude: 6.31, spectralType: 'A' },
        { ra: 94.695, dec: -50.3592, magnitude: 7.04, spectralType: 'G' },
        { ra: 95.0783, dec: -30.0633, magnitude: 3.02, spectralType: 'B' },  // 1Zet CMa
        { ra: 93.7746, dec: -71.7028, magnitude: 6.64, spectralType: 'F' },
        { ra: 95.3529, dec: -11.7733, magnitude: 5.64, spectralType: 'B' },
        { ra: 97.0608, dec: 70.5356, magnitude: 5.97, spectralType: 'A' },
        { ra: 95.74, dec: 22.5136, magnitude: 2.88, spectralType: 'M' },  // 13Mu Gem
        { ra: 95.6521, dec: 12.57, magnitude: 6.0, spectralType: 'F' },
        { ra: 95.1512, dec: -34.1439, magnitude: 5.53, spectralType: 'B' },
        { ra: 96.2246, dec: 49.2881, magnitude: 4.91, spectralType: 'K' },  // 46Psi1Aur
        { ra: 95.0254, dec: -48.7411, magnitude: 6.6, spectralType: 'G' },
        { ra: 96.6075, dec: 56.285, magnitude: 5.64, spectralType: 'A' },
        { ra: 95.8271, dec: 3.7644, magnitude: 6.4, spectralType: 'B' },
        { ra: 96.7037, dec: 58.4172, magnitude: 5.21, spectralType: 'K' },  // 5 Lyn
        { ra: 95.675, dec: -17.9558, magnitude: 1.98, spectralType: 'B' },  // 2Bet CMa
        { ra: 95.8446, dec: -4.6872, magnitude: 6.67, spectralType: 'A' },
        { ra: 95.5283, dec: -33.4364, magnitude: 3.85, spectralType: 'G' },  // Del Col
        { ra: 96.2192, dec: 29.7072, magnitude: 6.71, spectralType: 'B' },
        { ra: 95.9421, dec: 4.5928, magnitude: 4.44, spectralType: 'A' },  // 8Eps Mon
        { ra: 95.9438, dec: 4.5956, magnitude: 6.72, spectralType: 'F' },
        { ra: 96.0096, dec: 8.8847, magnitude: 6.26, spectralType: 'B' },
        { ra: 95.9, dec: -9.8744, magnitude: 6.19, spectralType: 'K' },
        { ra: 96.2204, dec: 16.0569, magnitude: 6.33, spectralType: 'G' },
        { ra: 95.9417, dec: -15.0717, magnitude: 6.24, spectralType: 'K' },
        { ra: 96.3871, dec: 23.3269, magnitude: 6.06, spectralType: 'A' },
        { ra: 96.0429, dec: -11.5303, magnitude: 5.22, spectralType: 'K' },
        { ra: 95.9483, dec: -19.7853, magnitude: 6.6, spectralType: 'B' },
        { ra: 95.81, dec: -31.79, magnitude: 6.34, spectralType: 'G' },
        { ra: 96.3671, dec: 14.7219, magnitude: 6.24, spectralType: 'G' },
        { ra: 96.0854, dec: -12.9625, magnitude: 6.12, spectralType: 'B' },
        { ra: 96.3046, dec: 7.0858, magnitude: 5.98, spectralType: 'F' },
        { ra: 95.9829, dec: -25.5778, magnitude: 5.63, spectralType: 'K' },
        { ra: 96.3267, dec: 1.5011, magnitude: 6.66, spectralType: 'B' },
        { ra: 96.3183, dec: -0.9461, magnitude: 5.87, spectralType: 'F' },
        { ra: 96.9629, dec: 47.4053, magnitude: 6.56, spectralType: 'A' },
        { ra: 96.4442, dec: 2.2722, magnitude: 6.51, spectralType: 'A' },
        { ra: 96.0042, dec: -36.7078, magnitude: 5.62, spectralType: 'G' },
        { ra: 96.4463, dec: -3.8892, magnitude: 6.35, spectralType: 'G' },
        { ra: 96.1829, dec: -28.78, magnitude: 6.39, spectralType: 'G' },
        { ra: 96.8979, dec: 32.5631, magnitude: 6.43, spectralType: 'K' },
        { ra: 95.7325, dec: -56.37, magnitude: 5.61, spectralType: 'A' },  // Nu Pic
        { ra: 96.495, dec: -7.8942, magnitude: 6.4, spectralType: 'A' },
        { ra: 95.9071, dec: -52.1811, magnitude: 5.98, spectralType: 'G' },
        { ra: 96.1854, dec: -40.2842, magnitude: 6.31, spectralType: 'B' },
        { ra: 96.665, dec: -1.5072, magnitude: 5.87, spectralType: 'A' },
        { ra: 96.6438, dec: -4.5972, magnitude: 6.15, spectralType: 'B' },
        { ra: 95.9879, dec: -52.6958, magnitude: -0.72, spectralType: 'F' },  // Alp Car
        { ra: 96.7446, dec: 0.8408, magnitude: 6.71, spectralType: 'A' },
        { ra: 96.6871, dec: -7.5114, magnitude: 6.27, spectralType: 'A' },
        { ra: 96.3746, dec: -35.0639, magnitude: 6.25, spectralType: 'K' },
        { ra: 96.9858, dec: 20.4961, magnitude: 6.22, spectralType: 'A' },  // 16 Gem
        { ra: 97.6967, dec: 58.1628, magnitude: 5.88, spectralType: 'K' },  // 6 Lyn
        { ra: 97.1421, dec: 30.4931, magnitude: 5.55, spectralType: 'F' },  // 48 Aur
        { ra: 96.835, dec: 2.9081, magnitude: 5.55, spectralType: 'G' },
        { ra: 96.8075, dec: 0.2992, magnitude: 5.2, spectralType: 'K' },
        { ra: 96.815, dec: -0.2761, magnitude: 5.55, spectralType: 'K' },
        { ra: 95.9454, dec: -58.5439, magnitude: 6.48, spectralType: 'A' },
        { ra: 95.7554, dec: -63.6831, magnitude: 6.27, spectralType: 'M' },
        { ra: 97.5125, dec: 46.6856, magnitude: 5.9, spectralType: 'K' },  // 47 Aur
        { ra: 97.2358, dec: 26.9678, magnitude: 6.47, spectralType: 'F' },
        { ra: 97.1167, dec: 16.2383, magnitude: 6.23, spectralType: 'G' },
        { ra: 96.2008, dec: -52.8064, magnitude: 6.51, spectralType: 'K' },
        { ra: 97.0783, dec: 10.3039, magnitude: 6.15, spectralType: 'K' },
        { ra: 97.2408, dec: 20.2122, magnitude: 4.15, spectralType: 'B' },  // 18Nu Gem
        { ra: 96.99, dec: -4.7622, magnitude: 5.06, spectralType: 'B' },  // 10 Mon
        { ra: 96.0571, dec: -60.2811, magnitude: 5.8, spectralType: 'A' },
        { ra: 100.07, dec: 79.5994, magnitude: 6.54, spectralType: 'A' },
        { ra: 97.07, dec: 1.9122, magnitude: 6.48, spectralType: 'B' },
        { ra: 96.4317, dec: -48.1772, magnitude: 5.76, spectralType: 'B' },
        { ra: 96.7967, dec: -25.8567, magnitude: 6.07, spectralType: 'F' },
        { ra: 101.1258, dec: 82.1153, magnitude: 6.65, spectralType: 'A' },
        { ra: 97.25, dec: 11.0194, magnitude: 6.59, spectralType: 'A' },
        { ra: 95.6592, dec: -69.9842, magnitude: 5.56, spectralType: 'K' },  // Pi 1Dor
        { ra: 96.7812, dec: -37.8956, magnitude: 6.48, spectralType: 'F' },
        { ra: 96.1096, dec: -63.4289, magnitude: 6.46, spectralType: 'G' },
        { ra: 97.3121, dec: 2.6461, magnitude: 6.16, spectralType: 'M' },
        { ra: 97.2042, dec: -7.0328, magnitude: 4.6, spectralType: 'B' },  // 11Bet Mon
        { ra: 97.2062, dec: -7.0344, magnitude: 5.4, spectralType: 'B' },  // 11Bet Mon
        { ra: 97.2062, dec: -7.0344, magnitude: 5.6, spectralType: 'B' },  // 11Bet Mon
        { ra: 97.1554, dec: -17.4661, magnitude: 5.77, spectralType: 'G' },
        { ra: 96.2317, dec: -63.8278, magnitude: 6.27, spectralType: 'B' },
        { ra: 97.0421, dec: -32.58, magnitude: 4.48, spectralType: 'B' },  // Lam CMa
        { ra: 97.5229, dec: 9.0292, magnitude: 6.57, spectralType: 'A' },
        { ra: 100.12, dec: 77.9958, magnitude: 5.73, spectralType: 'K' },
        { ra: 97.1633, dec: -32.3711, magnitude: 5.74, spectralType: 'B' },
        { ra: 99.4788, dec: 73.6956, magnitude: 6.24, spectralType: 'F' },
        { ra: 97.7921, dec: 16.9386, magnitude: 6.2, spectralType: 'K' },
        { ra: 97.5471, dec: -10.0814, magnitude: 5.93, spectralType: 'K' },
        { ra: 97.1763, dec: -41.0744, magnitude: 6.32, spectralType: 'F' },
        { ra: 96.7667, dec: -58.0022, magnitude: 5.82, spectralType: 'K' },
        { ra: 97.7896, dec: 11.2508, magnitude: 6.14, spectralType: 'B' },
        { ra: 97.9058, dec: 15.9033, magnitude: 6.4, spectralType: 'A' },  // 19 Gem
        { ra: 98.1133, dec: 32.4547, magnitude: 5.87, spectralType: 'A' },
        { ra: 97.6446, dec: -13.1481, magnitude: 6.16, spectralType: 'B' },
        { ra: 97.9133, dec: 11.7922, magnitude: 6.65, spectralType: 'B' },
        { ra: 97.9513, dec: 11.5444, magnitude: 5.23, spectralType: 'A' },
        { ra: 98.6367, dec: 55.3531, magnitude: 6.45, spectralType: 'K' },  // 7 Lyn
        { ra: 96.3692, dec: -69.6903, magnitude: 5.38, spectralType: 'G' },  // Pi 2Dor
        { ra: 98.0971, dec: 11.6736, magnitude: 6.03, spectralType: 'K' },
        { ra: 97.8458, dec: -12.3917, magnitude: 5.15, spectralType: 'K' },
        { ra: 97.6929, dec: -27.7694, magnitude: 5.93, spectralType: 'B' },
        { ra: 97.9587, dec: -8.1581, magnitude: 5.43, spectralType: 'K' },
        { ra: 98.08, dec: 4.8558, magnitude: 5.84, spectralType: 'K' },  // 12 Mon
        { ra: 98.4279, dec: 33.0242, magnitude: 6.42, spectralType: 'A' },
        { ra: 97.4546, dec: -50.2392, magnitude: 5.27, spectralType: 'F' },
        { ra: 98.2258, dec: 7.3331, magnitude: 4.5, spectralType: 'A' },  // 13 Mon
        { ra: 98.0962, dec: -5.8689, magnitude: 5.6, spectralType: 'F' },
        { ra: 97.9637, dec: -23.4183, magnitude: 4.33, spectralType: 'B' },  // 4Xi 1CMa
        { ra: 97.8042, dec: -35.2592, magnitude: 5.84, spectralType: 'G' },
        { ra: 97.3688, dec: -56.8528, magnitude: 5.22, spectralType: 'K' },
        { ra: 97.7492, dec: -40.9164, magnitude: 6.2, spectralType: 'K' },
        { ra: 98.4004, dec: 14.1553, magnitude: 5.53, spectralType: 'K' },
        { ra: 98.1954, dec: -11.1664, magnitude: 6.24, spectralType: 'G' },
        { ra: 97.8958, dec: -36.94, magnitude: 6.34, spectralType: 'M' },
        { ra: 99.4225, dec: 61.4811, magnitude: 5.94, spectralType: 'G' },  // 8 Lyn
        { ra: 98.4079, dec: -1.2203, magnitude: 5.1, spectralType: 'B' },
        { ra: 100.1342, dec: 71.7489, magnitude: 5.92, spectralType: 'K' },
        { ra: 98.1625, dec: -32.0306, magnitude: 5.69, spectralType: 'B' },
        { ra: 98.8004, dec: 28.0222, magnitude: 5.27, spectralType: 'A' },  // 49 Aur
        { ra: 98.0888, dec: -37.6967, magnitude: 5.24, spectralType: 'G' },
        { ra: 97.8263, dec: -51.8261, magnitude: 5.6, spectralType: 'F' },
        { ra: 101.5588, dec: 79.5647, magnitude: 5.45, spectralType: 'F' },
        { ra: 99.4104, dec: 56.8575, magnitude: 5.85, spectralType: 'A' },  // 11 Lyn
        { ra: 98.3608, dec: -20.9239, magnitude: 6.4, spectralType: 'G' },
        { ra: 98.6933, dec: 7.5725, magnitude: 6.45, spectralType: 'A' },  // 14 Mon
        { ra: 99.1371, dec: 38.4453, magnitude: 5.29, spectralType: 'G' },
        { ra: 98.8233, dec: 9.9883, magnitude: 5.88, spectralType: 'K' },
        { ra: 98.2929, dec: -38.6253, magnitude: 6.44, spectralType: 'G' },
        { ra: 97.5125, dec: -65.5683, magnitude: 6.29, spectralType: 'F' },
        { ra: 98.8158, dec: 0.89, magnitude: 5.8, spectralType: 'B' },
        { ra: 97.7942, dec: -61.8797, magnitude: 6.15, spectralType: 'B' },
        { ra: 98.4562, dec: -36.2322, magnitude: 5.42, spectralType: 'K' },
        { ra: 97.9933, dec: -58.7542, magnitude: 5.7, spectralType: 'B' },  // Mu Pic
        { ra: 99.0, dec: 4.4975, magnitude: 6.55, spectralType: 'B' },
        { ra: 98.7642, dec: -22.9647, magnitude: 4.54, spectralType: 'A' },  // 5Xi 2CMa
        { ra: 98.6471, dec: -32.7164, magnitude: 5.62, spectralType: 'B' },
        { ra: 98.3588, dec: -52.3289, magnitude: 6.19, spectralType: 'G' },
        { ra: 99.3633, dec: 24.5908, magnitude: 6.44, spectralType: 'A' },
        { ra: 99.1471, dec: -5.2111, magnitude: 5.52, spectralType: 'B' },
        { ra: 99.6646, dec: 39.3908, magnitude: 5.69, spectralType: 'K' },  // 51 Aur
        { ra: 99.705, dec: 39.9025, magnitude: 5.2, spectralType: 'B' },  // 52Psi3Aur
        { ra: 99.4279, dec: 16.3992, magnitude: 1.93, spectralType: 'A' },  // 24Gam Gem
        { ra: 99.3504, dec: 6.1353, magnitude: 6.06, spectralType: 'O' },
        { ra: 99.095, dec: -18.66, magnitude: 5.7, spectralType: 'G' },  // 6Nu 1CMa
        { ra: 98.8504, dec: -36.78, magnitude: 5.59, spectralType: 'A' },
        { ra: 99.5958, dec: 28.9842, magnitude: 5.79, spectralType: 'B' },  // 53 Aur
        { ra: 99.4038, dec: 10.8531, magnitude: 6.38, spectralType: 'K' },
        { ra: 99.8329, dec: 42.4889, magnitude: 4.79, spectralType: 'K' },  // 50Psi2Aur
        { ra: 99.1946, dec: -13.3208, magnitude: 5.97, spectralType: 'K' },
        { ra: 99.1708, dec: -19.2558, magnitude: 3.95, spectralType: 'K' },  // 7Nu 2CMa
        { ra: 99.4179, dec: 2.7042, magnitude: 6.17, spectralType: 'K' },
        { ra: 98.975, dec: -36.0889, magnitude: 6.35, spectralType: 'G' },
        { ra: 99.4696, dec: 4.9572, magnitude: 6.15, spectralType: 'B' },
        { ra: 99.1704, dec: -22.615, magnitude: 6.35, spectralType: 'B' },
        { ra: 99.9917, dec: 44.0139, magnitude: 6.41, spectralType: 'K' },
        { ra: 98.7442, dec: -52.9756, magnitude: 4.39, spectralType: 'A' },
        { ra: 99.7721, dec: 22.0308, magnitude: 6.04, spectralType: 'G' },
        { ra: 99.4204, dec: -12.985, magnitude: 6.12, spectralType: 'K' },
        { ra: 99.8879, dec: 28.2631, magnitude: 6.03, spectralType: 'B' },  // 54 Aur
        { ra: 99.8808, dec: 24.6, magnitude: 6.38, spectralType: 'F' },
        { ra: 99.5854, dec: -2.5436, magnitude: 6.14, spectralType: 'K' },
        { ra: 99.7062, dec: 4.7006, magnitude: 6.57, spectralType: 'B' },
        { ra: 99.6587, dec: 1.6136, magnitude: 6.21, spectralType: 'O' },
        { ra: 99.4725, dec: -18.2375, magnitude: 4.43, spectralType: 'K' },  // 8Nu 3CMa
        { ra: 99.2579, dec: -38.1467, magnitude: 6.04, spectralType: 'K' },
        { ra: 99.2137, dec: -41.5569, magnitude: 6.34, spectralType: 'K' },
        { ra: 99.3075, dec: -36.9906, magnitude: 5.71, spectralType: 'B' },
        { ra: 99.4483, dec: -32.3397, magnitude: 5.27, spectralType: 'K' },
        { ra: 99.6475, dec: -16.8736, magnitude: 6.03, spectralType: 'A' },
        { ra: 99.9483, dec: 12.9831, magnitude: 5.97, spectralType: 'A' },
        { ra: 99.8196, dec: -14.1458, magnitude: 4.82, spectralType: 'K' },
        { ra: 99.4404, dec: -43.1961, magnitude: 3.17, spectralType: 'B' },  // Nu Pup
        { ra: 100.4071, dec: 35.9319, magnitude: 6.46, spectralType: 'F' },
        { ra: 100.3375, dec: 28.1964, magnitude: 6.42, spectralType: 'G' },  // 25 Gem
        { ra: 100.1325, dec: 6.3717, magnitude: 6.51, spectralType: 'B' },
        { ra: 99.9013, dec: -23.6956, magnitude: 6.05, spectralType: 'A' },
        { ra: 100.2446, dec: 9.8956, magnitude: 4.66, spectralType: 'O' },  // 15 Mon
        { ra: 100.3408, dec: 16.3975, magnitude: 6.28, spectralType: 'A' },
        { ra: 100.3217, dec: 11.0033, magnitude: 6.11, spectralType: 'M' },
        { ra: 100.7708, dec: 44.5244, magnitude: 5.02, spectralType: 'K' },  // 55Psi4Aur
        { ra: 99.9279, dec: -30.4703, magnitude: 5.71, spectralType: 'K' },
        { ra: 100.2725, dec: 0.4953, magnitude: 5.79, spectralType: 'B' },
        { ra: 99.6567, dec: -48.2203, magnitude: 4.93, spectralType: 'G' },
        { ra: 101.0483, dec: 53.2964, magnitude: 6.27, spectralType: 'K' },
        { ra: 100.8075, dec: 37.1469, magnitude: 6.19, spectralType: 'K' },
        { ra: 99.9871, dec: -38.1589, magnitude: 6.58, spectralType: 'K' },
        { ra: 100.6013, dec: 17.6453, magnitude: 5.21, spectralType: 'A' },  // 26 Gem
        { ra: 100.4971, dec: 6.345, magnitude: 6.37, spectralType: 'O' },
        { ra: 99.5025, dec: -61.5331, magnitude: 6.18, spectralType: 'G' },
        { ra: 100.485, dec: -9.1672, magnitude: 5.19, spectralType: 'M' },
        { ra: 101.5588, dec: 59.4417, magnitude: 4.87, spectralType: 'A' },  // 12 Lyn
        { ra: 101.0525, dec: 36.1097, magnitude: 6.31, spectralType: 'A' },
        { ra: 100.9829, dec: 25.1311, magnitude: 2.98, spectralType: 'G' },  // 27Eps Gem
        { ra: 100.7771, dec: 3.0333, magnitude: 6.19, spectralType: 'K' },
        { ra: 100.3088, dec: -40.3497, magnitude: 6.12, spectralType: 'B' },
        { ra: 100.2054, dec: -47.6747, magnitude: 6.65, spectralType: 'M' },
        { ra: 101.7062, dec: 57.1692, magnitude: 5.35, spectralType: 'K' },  // 13 Lyn
        { ra: 100.9971, dec: 13.2278, magnitude: 4.49, spectralType: 'K' },  // 30 Gem
        { ra: 100.9112, dec: 3.9322, magnitude: 5.9, spectralType: 'B' },
        { ra: 101.1896, dec: 28.9708, magnitude: 5.44, spectralType: 'K' },  // 28 Gem
        { ra: 100.6908, dec: -22.4492, magnitude: 6.13, spectralType: 'F' },
        { ra: 100.5683, dec: -38.3986, magnitude: 6.29, spectralType: 'A' },
        { ra: 101.6846, dec: 43.5775, magnitude: 5.25, spectralType: 'G' },  // 56Psi5Aur
        { ra: 101.3225, dec: 12.8956, magnitude: 3.36, spectralType: 'F' },  // 31Xi Gem
        { ra: 102.0537, dec: 55.7044, magnitude: 6.33, spectralType: 'F' },
        { ra: 102.0512, dec: 55.7044, magnitude: 6.28, spectralType: 'F' },
        { ra: 101.915, dec: 48.7894, magnitude: 5.22, spectralType: 'K' },  // 57Psi6Aur
        { ra: 100.8471, dec: -39.1933, magnitude: 6.3, spectralType: 'A' },
        { ra: 101.4758, dec: 12.6936, magnitude: 6.46, spectralType: 'A' },  // 32 Gem
        { ra: 102.7379, dec: 67.5719, magnitude: 5.14, spectralType: 'B' },  // 42 Cam
        { ra: 101.2871, dec: -16.7161, magnitude: -1.46, spectralType: 'A' },  // 9Alp CMa
        { ra: 101.1183, dec: -31.0706, magnitude: 5.2, spectralType: 'B' },  // 10 CMa
        { ra: 101.2163, dec: -27.3414, magnitude: 6.45, spectralType: 'G' },
        { ra: 101.635, dec: 8.5872, magnitude: 5.93, spectralType: 'B' },  // 16 Mon
        { ra: 101.3471, dec: -23.4619, magnitude: 6.05, spectralType: 'K' },
        { ra: 101.26, dec: -30.5861, magnitude: 6.54, spectralType: 'B' },
        { ra: 101.4971, dec: -14.7961, magnitude: 5.32, spectralType: 'A' },
        { ra: 101.8479, dec: 18.1933, magnitude: 6.2, spectralType: 'A' },
        { ra: 101.345, dec: -31.7936, magnitude: 5.92, spectralType: 'F' },
        { ra: 101.3804, dec: -30.9489, magnitude: 5.8, spectralType: 'B' },
        { ra: 101.6625, dec: -10.1072, magnitude: 5.66, spectralType: 'B' },
        { ra: 101.8325, dec: 8.0372, magnitude: 4.77, spectralType: 'K' },  // 17 Mon
        { ra: 101.7129, dec: -14.4258, magnitude: 5.29, spectralType: 'B' },  // 11 CMa
        { ra: 100.2408, dec: -71.7756, magnitude: 6.51, spectralType: 'K' },
        { ra: 101.965, dec: 2.4122, magnitude: 4.47, spectralType: 'K' },  // 18 Mon
        { ra: 101.5138, dec: -39.54, magnitude: 6.62, spectralType: 'B' },
        { ra: 101.9046, dec: -8.9983, magnitude: 5.07, spectralType: 'M' },
        { ra: 101.7562, dec: -21.0156, magnitude: 6.08, spectralType: 'B' },  // 12 CMa
        { ra: 101.5504, dec: -37.7756, magnitude: 6.21, spectralType: 'B' },
        { ra: 103.4258, dec: 68.8883, magnitude: 5.12, spectralType: 'B' },  // 43 Cam
        { ra: 102.4221, dec: 32.6067, magnitude: 5.71, spectralType: 'K' },
        { ra: 101.3588, dec: -52.2011, magnitude: 6.57, spectralType: 'G' },
        { ra: 102.0792, dec: -1.3192, magnitude: 5.75, spectralType: 'F' },
        { ra: 101.4737, dec: -52.41, magnitude: 5.8, spectralType: 'K' },
        { ra: 102.6912, dec: 41.7814, magnitude: 5.02, spectralType: 'K' },  // 58Psi7Aur
        { ra: 102.2654, dec: 1.0019, magnitude: 6.15, spectralType: 'B' },
        { ra: 101.8392, dec: -37.9297, magnitude: 5.26, spectralType: 'B' },
        { ra: 102.4575, dec: 16.2028, magnitude: 5.85, spectralType: 'B' },  // 33 Gem
        { ra: 103.2712, dec: 59.4486, magnitude: 5.33, spectralType: 'G' },  // 14 Lyn
        { ra: 102.3183, dec: -2.2719, magnitude: 5.74, spectralType: 'B' },
        { ra: 102.2408, dec: -15.1447, magnitude: 5.39, spectralType: 'B' },
        { ra: 101.72, dec: -51.2658, magnitude: 5.4, spectralType: 'K' },
        { ra: 101.6729, dec: -54.6947, magnitude: 6.46, spectralType: 'G' },
        { ra: 102.6062, dec: 13.4133, magnitude: 5.65, spectralType: 'K' },  // 35 Gem
        { ra: 101.8279, dec: -55.54, magnitude: 5.61, spectralType: 'K' },
        { ra: 105.0167, dec: 76.9775, magnitude: 4.55, spectralType: 'K' },
        { ra: 102.4333, dec: -24.0758, magnitude: 6.33, spectralType: 'A' },
        { ra: 102.8875, dec: 21.7611, magnitude: 5.27, spectralType: 'A' },  // 36 Gem
        { ra: 102.7079, dec: -0.5408, magnitude: 5.77, spectralType: 'F' },
        { ra: 100.9033, dec: -73.1181, magnitude: 6.37, spectralType: 'G' },
        { ra: 103.2817, dec: 44.8394, magnitude: 6.26, spectralType: 'A' },
        { ra: 103.0, dec: 23.6017, magnitude: 5.65, spectralType: 'K' },
        { ra: 102.6762, dec: -8.0411, magnitude: 6.29, spectralType: 'A' },
        { ra: 102.5913, dec: -17.0839, magnitude: 5.79, spectralType: 'K' },
        { ra: 101.2338, dec: -70.4339, magnitude: 6.11, spectralType: 'K' },
        { ra: 102.525, dec: -27.3339, magnitude: 7.04, spectralType: 'B' },
        { ra: 102.4604, dec: -32.5086, magnitude: 3.96, spectralType: 'B' },  // 13Kap CMa
        { ra: 103.2562, dec: 38.8692, magnitude: 6.12, spectralType: 'F' },  // 59 Aur
        { ra: 103.1971, dec: 33.9611, magnitude: 3.6, spectralType: 'A' },  // 34The Gem
        { ra: 103.3058, dec: 38.4381, magnitude: 6.3, spectralType: 'F' },  // 60 Aur
        { ra: 103.2642, dec: 35.7886, magnitude: 6.01, spectralType: 'K' },
        { ra: 102.9137, dec: 3.0417, magnitude: 6.38, spectralType: 'A' },
        { ra: 102.6538, dec: -25.7781, magnitude: 6.33, spectralType: 'B' },
        { ra: 102.5971, dec: -31.7061, magnitude: 5.7, spectralType: 'B' },
        { ra: 102.4908, dec: -45.45, magnitude: 6.55, spectralType: 'K' },
        { ra: 103.4875, dec: 38.505, magnitude: 6.48, spectralType: 'B' },  // 61Psi8Aur
        { ra: 102.4775, dec: -46.6147, magnitude: 5.14, spectralType: 'F' },
        { ra: 102.7183, dec: -34.3672, magnitude: 4.99, spectralType: 'K' },
        { ra: 102.0475, dec: -61.9414, magnitude: 3.27, spectralType: 'A' },  // Alp Pic
        { ra: 103.2058, dec: 8.3803, magnitude: 5.77, spectralType: 'F' },
        { ra: 103.0954, dec: -5.3161, magnitude: 6.3, spectralType: 'K' },
        { ra: 102.4842, dec: -50.6147, magnitude: 2.93, spectralType: 'K' },  // Tau Pup
        { ra: 102.4637, dec: -53.6222, magnitude: 4.4, spectralType: 'G' },
        { ra: 103.3437, dec: 10.9964, magnitude: 6.24, spectralType: 'K' },
        { ra: 103.8133, dec: 45.8264, magnitude: 6.34, spectralType: 'K' },
        { ra: 103.8113, dec: 43.91, magnitude: 6.13, spectralType: 'A' },
        { ra: 102.9262, dec: -36.2303, magnitude: 5.96, spectralType: 'A' },
        { ra: 100.0113, dec: -80.8136, magnitude: 5.64, spectralType: 'A' },  // Zet Men
        { ra: 104.3188, dec: 58.4225, magnitude: 4.35, spectralType: 'G' },  // 15 Lyn
        { ra: 104.305, dec: 57.5633, magnitude: 6.05, spectralType: 'K' },
        { ra: 102.5046, dec: -60.2492, magnitude: 6.11, spectralType: 'F' },
        { ra: 102.8867, dec: -48.2925, magnitude: 6.42, spectralType: 'K' },
        { ra: 103.6612, dec: 13.1778, magnitude: 4.65, spectralType: 'F' },  // 38 Gem
        { ra: 103.3283, dec: -19.0328, magnitude: 5.64, spectralType: 'F' },
        { ra: 103.3404, dec: -18.9333, magnitude: 6.14, spectralType: 'A' },
        { ra: 103.2504, dec: -26.9575, magnitude: 6.4, spectralType: 'M' },
        { ra: 104.1346, dec: 46.2742, magnitude: 5.87, spectralType: 'B' },  // Psi9Aur
        { ra: 103.8275, dec: 25.3756, magnitude: 5.73, spectralType: 'G' },  // 37 Gem
        { ra: 103.5354, dec: -5.8525, magnitude: 6.41, spectralType: 'A' },
        { ra: 103.3871, dec: -20.2242, magnitude: 4.83, spectralType: 'B' },  // 15 CMa
        { ra: 103.6025, dec: -1.1269, magnitude: 5.45, spectralType: 'A' },
        { ra: 104.2333, dec: 46.705, magnitude: 5.86, spectralType: 'K' },
        { ra: 103.5475, dec: -12.0386, magnitude: 4.07, spectralType: 'K' },  // 14The CMa
        { ra: 103.1654, dec: -42.5044, magnitude: 6.52, spectralType: 'F' },
        { ra: 103.3912, dec: -28.5397, magnitude: 6.04, spectralType: 'G' },
        { ra: 103.6754, dec: -1.7564, magnitude: 6.21, spectralType: 'B' },
        { ra: 103.4804, dec: -24.5392, magnitude: 6.21, spectralType: 'A' },
        { ra: 103.1963, dec: -43.9758, magnitude: 6.46, spectralType: 'B' },
        { ra: 103.5329, dec: -24.1839, magnitude: 3.87, spectralType: 'K' },  // 16Omi1CMa
        { ra: 105.3396, dec: 70.8081, magnitude: 5.68, spectralType: 'K' },
        { ra: 103.745, dec: -2.8036, magnitude: 6.04, spectralType: 'G' },
        { ra: 103.5542, dec: -23.9283, magnitude: 6.91, spectralType: 'G' },
        { ra: 103.8942, dec: 8.3247, magnitude: 6.29, spectralType: 'A' },
        { ra: 104.4046, dec: 45.0942, magnitude: 4.9, spectralType: 'A' },  // 16 Lyn
        { ra: 104.2521, dec: 33.6811, magnitude: 5.89, spectralType: 'G' },
        { ra: 103.1954, dec: -54.09, magnitude: 6.57, spectralType: 'G' },
        { ra: 103.7613, dec: -20.4047, magnitude: 5.74, spectralType: 'A' },  // 17 CMa
        { ra: 104.1075, dec: 9.9564, magnitude: 5.92, spectralType: 'B' },
        { ra: 103.9058, dec: -20.1364, magnitude: 4.68, spectralType: 'F' },  // 19Pi CMa
        { ra: 103.6113, dec: -42.3656, magnitude: 6.32, spectralType: 'G' },
        { ra: 103.1892, dec: -59.3411, magnitude: 6.41, spectralType: 'A' },
        { ra: 104.0275, dec: -14.0436, magnitude: 5.0, spectralType: 'G' },  // 18Mu CMa
        { ra: 103.5096, dec: -50.6117, magnitude: 6.26, spectralType: 'K' },
        { ra: 103.945, dec: -22.9414, magnitude: 5.3, spectralType: 'B' },
        { ra: 104.0342, dec: -17.0542, magnitude: 4.37, spectralType: 'B' },  // 20Iot CMa
        { ra: 104.3571, dec: 11.9075, magnitude: 6.27, spectralType: 'F' },
        { ra: 103.9783, dec: -31.79, magnitude: 6.36, spectralType: 'B' },
        { ra: 104.2504, dec: -8.1789, magnitude: 6.34, spectralType: 'K' },
        { ra: 104.7617, dec: 38.0522, magnitude: 6.0, spectralType: 'K' },  // 62 Aur
        { ra: 104.6975, dec: 26.0811, magnitude: 6.1, spectralType: 'F' },  // 39 Gem
        { ra: 102.8625, dec: -70.9633, magnitude: 5.4, spectralType: 'B' },  // Iot Vol
        { ra: 104.3117, dec: -22.2033, magnitude: 6.61, spectralType: 'B' },
        { ra: 104.1904, dec: -35.3417, magnitude: 6.29, spectralType: 'K' },
        { ra: 104.8662, dec: 25.9142, magnitude: 6.4, spectralType: 'B' },  // 40 Gem
        { ra: 104.6625, dec: 7.6219, magnitude: 6.27, spectralType: 'A' },
        { ra: 104.3912, dec: -24.6306, magnitude: 5.46, spectralType: 'F' },
        { ra: 104.0667, dec: -48.7211, magnitude: 4.95, spectralType: 'M' },
        { ra: 115.1271, dec: 87.02, magnitude: 5.07, spectralType: 'M' },
        { ra: 104.7375, dec: 3.6022, magnitude: 5.97, spectralType: 'G' },
        { ra: 104.4267, dec: -27.5375, magnitude: 6.23, spectralType: 'B' },
        { ra: 104.3233, dec: -35.5075, magnitude: 6.23, spectralType: 'F' },
        { ra: 104.8337, dec: 7.3169, magnitude: 6.35, spectralType: 'B' },
        { ra: 104.5317, dec: -27.1647, magnitude: 6.37, spectralType: 'B' },
        { ra: 105.0658, dec: 16.0789, magnitude: 5.68, spectralType: 'K' },  // 41 Gem
        { ra: 104.6496, dec: -25.4139, magnitude: 5.59, spectralType: 'B' },
        { ra: 106.4658, dec: 70.7319, magnitude: 6.5, spectralType: 'K' },
        { ra: 104.6562, dec: -28.9722, magnitude: 1.5, spectralType: 'B' },  // 21Eps CMa
        { ra: 104.6046, dec: -34.1117, magnitude: 5.06, spectralType: 'B' },
        { ra: 105.3217, dec: 32.4144, magnitude: 6.59, spectralType: 'A' },
        { ra: 104.6825, dec: -30.9978, magnitude: 6.42, spectralType: 'B' },
        { ra: 105.075, dec: -5.3669, magnitude: 6.3, spectralType: 'G' },
        { ra: 104.9138, dec: -21.6033, magnitude: 6.26, spectralType: 'B' },
        { ra: 105.0987, dec: -8.4069, magnitude: 5.96, spectralType: 'B' },
        { ra: 105.0337, dec: -20.1589, magnitude: 6.31, spectralType: 'B' },
        { ra: 104.6742, dec: -45.7681, magnitude: 6.22, spectralType: 'A' },
        { ra: 105.1637, dec: -9.2031, magnitude: 6.49, spectralType: 'B' },
        { ra: 105.0804, dec: -22.1194, magnitude: 6.53, spectralType: 'B' },
        { ra: 105.4225, dec: 4.8181, magnitude: 6.63, spectralType: 'A' },
        { ra: 105.6033, dec: 24.2153, magnitude: 5.18, spectralType: 'G' },  // 42Ome Gem
        { ra: 105.6062, dec: 17.7556, magnitude: 5.94, spectralType: 'M' },
        { ra: 105.5725, dec: 15.3361, magnitude: 5.74, spectralType: 'K' },
        { ra: 105.4792, dec: 5.5575, magnitude: 6.59, spectralType: 'B' },
        { ra: 104.665, dec: -55.7294, magnitude: 6.27, spectralType: 'K' },
        { ra: 105.6396, dec: 16.6742, magnitude: 5.82, spectralType: 'M' },
        { ra: 105.4704, dec: -1.3456, magnitude: 6.17, spectralType: 'G' },
        { ra: 105.1775, dec: -28.4894, magnitude: 6.27, spectralType: 'F' },
        { ra: 104.6508, dec: -56.3947, magnitude: 6.45, spectralType: 'F' },
        { ra: 105.485, dec: -5.7222, magnitude: 5.2, spectralType: 'M' },
        { ra: 105.2746, dec: -25.2153, magnitude: 5.63, spectralType: 'B' },
        { ra: 105.2075, dec: -33.4653, magnitude: 6.4, spectralType: 'G' },
        { ra: 106.5054, dec: 59.8019, magnitude: 6.44, spectralType: 'G' },
        { ra: 105.8767, dec: 29.3372, magnitude: 5.93, spectralType: 'G' },
        { ra: 106.4158, dec: 52.7581, magnitude: 6.12, spectralType: 'A' },
        { ra: 106.2875, dec: 47.775, magnitude: 6.38, spectralType: 'B' },
        { ra: 105.4296, dec: -27.9347, magnitude: 3.47, spectralType: 'K' },  // 22Sig CMa
        { ra: 105.8246, dec: 9.1383, magnitude: 5.97, spectralType: 'A' },
        { ra: 105.7283, dec: -4.2392, magnitude: 4.99, spectralType: 'B' },  // 19 Mon
        { ra: 105.9083, dec: 10.9517, magnitude: 5.13, spectralType: 'K' },
        { ra: 106.0271, dec: 20.5703, magnitude: 3.79, spectralType: 'F' },  // 43Zet Gem
        { ra: 105.965, dec: 12.5944, magnitude: 5.98, spectralType: 'K' },
        { ra: 105.2146, dec: -51.4025, magnitude: 5.14, spectralType: 'M' },
        { ra: 105.7562, dec: -23.8333, magnitude: 3.02, spectralType: 'B' },  // 24Omi2CMa
        { ra: 106.0842, dec: 1.4883, magnitude: 6.57, spectralType: 'A' },
        { ra: 106.0217, dec: -5.3236, magnitude: 5.62, spectralType: 'K' },
        { ra: 105.9887, dec: -10.1242, magnitude: 6.45, spectralType: 'B' },
        { ra: 105.9396, dec: -15.6333, magnitude: 4.12, spectralType: 'B' },  // 23Gam CMa
        { ra: 105.565, dec: -43.4042, magnitude: 6.43, spectralType: 'A' },
        { ra: 106.3267, dec: 22.6372, magnitude: 6.02, spectralType: 'B' },  // 44 Gem
        { ra: 106.5483, dec: 34.4739, magnitude: 5.55, spectralType: 'G' },
        { ra: 105.2712, dec: -58.94, magnitude: 6.02, spectralType: 'A' },
        { ra: 104.9604, dec: -67.9161, magnitude: 5.17, spectralType: 'K' },
        { ra: 106.4129, dec: 9.1858, magnitude: 5.78, spectralType: 'M' },
        { ra: 106.1962, dec: -22.0322, magnitude: 6.09, spectralType: 'K' },
        { ra: 106.8429, dec: 34.0094, magnitude: 5.91, spectralType: 'K' },
        { ra: 106.0117, dec: -42.3372, magnitude: 5.2, spectralType: 'A' },
        { ra: 105.9887, dec: -43.6081, magnitude: 5.54, spectralType: 'G' },
        { ra: 105.995, dec: -43.6117, magnitude: 6.79, spectralType: 'K' },
        { ra: 106.8542, dec: 28.1772, magnitude: 6.48, spectralType: 'B' },
        { ra: 106.4571, dec: -10.6611, magnitude: 6.49, spectralType: 'B' },
        { ra: 106.8392, dec: 22.7036, magnitude: 7.68, spectralType: 'G' },
        { ra: 105.9737, dec: -49.5839, magnitude: 4.93, spectralType: 'A' },
        { ra: 107.0554, dec: 33.8322, magnitude: 6.28, spectralType: 'K' },
        { ra: 105.815, dec: -59.1781, magnitude: 5.5, spectralType: 'B' },
        { ra: 107.1513, dec: 37.445, magnitude: 6.16, spectralType: 'K' },
        { ra: 106.7767, dec: 4.9103, magnitude: 6.11, spectralType: 'B' },
        { ra: 106.3833, dec: -34.7778, magnitude: 6.14, spectralType: 'F' },
        { ra: 106.6696, dec: -11.2942, magnitude: 5.39, spectralType: 'B' },
        { ra: 106.6496, dec: -12.3939, magnitude: 6.48, spectralType: 'O' },
        { ra: 106.5025, dec: -30.6556, magnitude: 6.34, spectralType: 'B' },
        { ra: 108.4921, dec: 71.8167, magnitude: 6.35, spectralType: 'K' },
        { ra: 106.9562, dec: 7.4711, magnitude: 5.75, spectralType: 'K' },
        { ra: 106.0763, dec: -56.7497, magnitude: 5.17, spectralType: 'A' },
        { ra: 107.0917, dec: 15.9308, magnitude: 5.44, spectralType: 'G' },  // 45 Gem
        { ra: 106.5096, dec: -38.3828, magnitude: 6.11, spectralType: 'G' },
        { ra: 106.7179, dec: -24.9606, magnitude: 6.08, spectralType: 'K' },
        { ra: 106.3187, dec: -50.3603, magnitude: 6.46, spectralType: 'K' },
        { ra: 106.7504, dec: -26.6578, magnitude: 6.62, spectralType: 'B' },
        { ra: 104.1433, dec: -79.4203, magnitude: 5.45, spectralType: 'B' },  // The Men
        { ra: 106.8442, dec: -23.8403, magnitude: 5.71, spectralType: 'B' },
        { ra: 106.7796, dec: -40.8933, magnitude: 5.79, spectralType: 'B' },
        { ra: 107.5279, dec: 21.2469, magnitude: 6.43, spectralType: 'G' },
        { ra: 107.0979, dec: -26.3933, magnitude: 1.84, spectralType: 'F' },  // 25Del CMa
        { ra: 107.3346, dec: -10.3472, magnitude: 6.21, spectralType: 'O' },
        { ra: 107.2054, dec: -24.0442, magnitude: 6.65, spectralType: 'B' },
        { ra: 107.9138, dec: 39.3206, magnitude: 4.9, spectralType: 'K' },  // 63 Aur
        { ra: 107.785, dec: 30.2453, magnitude: 4.41, spectralType: 'K' },  // 46Tau Gem
        { ra: 106.8054, dec: -51.9678, magnitude: 5.96, spectralType: 'K' },
        { ra: 107.3883, dec: -16.2347, magnitude: 6.03, spectralType: 'B' },
        { ra: 107.8462, dec: 26.8567, magnitude: 5.78, spectralType: 'A' },  // 47 Gem
        { ra: 107.5571, dec: -4.2372, magnitude: 4.92, spectralType: 'K' },  // 20 Mon
        { ra: 107.2129, dec: -39.6558, magnitude: 4.83, spectralType: 'B' },
        { ra: 108.3475, dec: 51.4289, magnitude: 5.47, spectralType: 'M' },
        { ra: 107.4288, dec: -25.2311, magnitude: 5.69, spectralType: 'B' },
        { ra: 107.5387, dec: -18.6853, magnitude: 6.23, spectralType: 'F' },
        { ra: 108.11, dec: 24.1283, magnitude: 5.85, spectralType: 'F' },  // 48 Gem
        { ra: 107.8483, dec: -0.3019, magnitude: 5.45, spectralType: 'A' },  // 21 Mon
        { ra: 107.5808, dec: -27.4914, magnitude: 5.46, spectralType: 'G' },
        { ra: 111.3413, dec: 81.2575, magnitude: 6.31, spectralType: 'A' },
        { ra: 107.9638, dec: 5.6547, magnitude: 6.09, spectralType: 'A' },
        { ra: 108.2042, dec: 27.2247, magnitude: 6.43, spectralType: 'F' },
        { ra: 106.5588, dec: -68.8372, magnitude: 6.47, spectralType: 'K' },
        { ra: 108.0308, dec: 5.4747, magnitude: 6.16, spectralType: 'K' },
        { ra: 107.9663, dec: -0.4928, magnitude: 4.15, spectralType: 'A' },  // 22Del Mon
        { ra: 108.9788, dec: 59.6375, magnitude: 5.2, spectralType: 'K' },  // 18 Lyn
        { ra: 107.9233, dec: -20.8831, magnitude: 5.84, spectralType: 'A' },
        { ra: 108.3429, dec: 16.1589, magnitude: 5.0, spectralType: 'M' },  // 51 Gem
        { ra: 108.0508, dec: -25.9425, magnitude: 5.92, spectralType: 'B' },  // 26 CMa
        { ra: 107.6979, dec: -48.9322, magnitude: 5.14, spectralType: 'K' },
        { ra: 108.0171, dec: -30.8217, magnitude: 6.1, spectralType: 'A' },
        { ra: 108.9588, dec: 47.24, magnitude: 5.58, spectralType: 'G' },
        { ra: 108.6108, dec: 24.7108, magnitude: 6.89, spectralType: 'A' },
        { ra: 108.28, dec: -11.2514, magnitude: 5.78, spectralType: 'K' },
        { ra: 108.1004, dec: -27.4742, magnitude: 6.59, spectralType: 'A' },
        { ra: 108.6746, dec: 24.885, magnitude: 5.82, spectralType: 'M' },  // 52 Gem
        { ra: 108.1071, dec: -36.5444, magnitude: 5.96, spectralType: 'B' },
        { ra: 108.0658, dec: -40.4989, magnitude: 5.31, spectralType: 'A' },
        { ra: 108.6358, dec: 12.1158, magnitude: 5.62, spectralType: 'G' },
        { ra: 108.5833, dec: 3.1114, magnitude: 5.35, spectralType: 'K' },
        { ra: 108.3496, dec: -22.6733, magnitude: 6.01, spectralType: 'K' },
        { ra: 108.5458, dec: -3.9014, magnitude: 5.75, spectralType: 'K' },
        { ra: 108.5646, dec: -9.9475, magnitude: 5.9, spectralType: 'K' },
        { ra: 108.4513, dec: -22.9064, magnitude: 6.36, spectralType: 'B' },
        { ra: 108.4013, dec: -27.3564, magnitude: 6.12, spectralType: 'B' },
        { ra: 107.1758, dec: -70.4972, magnitude: 5.69, spectralType: 'F' },  // Gam1Vol
        { ra: 107.1871, dec: -70.4989, magnitude: 3.78, spectralType: 'K' },  // Gam2Vol
        { ra: 109.3904, dec: 52.1308, magnitude: 5.92, spectralType: 'K' },
        { ra: 108.9879, dec: 27.8975, magnitude: 5.71, spectralType: 'M' },  // 53 Gem
        { ra: 108.6175, dec: -10.3167, magnitude: 6.03, spectralType: 'B' },
        { ra: 108.14, dec: -46.7594, magnitude: 4.49, spectralType: 'F' },
        { ra: 108.4463, dec: -31.0839, magnitude: 6.6, spectralType: 'B' },
        { ra: 112.7683, dec: 82.4114, magnitude: 4.96, spectralType: 'M' },
        { ra: 108.4883, dec: -30.34, magnitude: 6.33, spectralType: 'B' },
        { ra: 108.8304, dec: -0.1614, magnitude: 6.41, spectralType: 'G' },  // 24 Mon
        { ra: 108.5633, dec: -26.3525, magnitude: 4.66, spectralType: 'B' },  // 27 CMa
        { ra: 108.3058, dec: -45.1831, magnitude: 4.89, spectralType: 'A' },
        { ra: 108.9142, dec: 7.9778, magnitude: 5.82, spectralType: 'M' },
        { ra: 108.385, dec: -44.6397, magnitude: 5.1, spectralType: 'M' },
        { ra: 108.7029, dec: -26.7728, magnitude: 3.85, spectralType: 'B' },  // 28Ome CMa
        { ra: 108.7129, dec: -27.0381, magnitude: 5.58, spectralType: 'K' },
        { ra: 109.6329, dec: 49.465, magnitude: 5.05, spectralType: 'A' },
        { ra: 108.9296, dec: -10.5839, magnitude: 5.95, spectralType: 'K' },
        { ra: 109.5092, dec: 40.8833, magnitude: 5.78, spectralType: 'A' },  // 64 Aur
        { ra: 108.0083, dec: -63.19, magnitude: 6.02, spectralType: 'A' },
        { ra: 108.9479, dec: -23.7406, magnitude: 6.32, spectralType: 'A' },
        { ra: 108.8375, dec: -30.6864, magnitude: 5.36, spectralType: 'B' },
        { ra: 109.5171, dec: 30.9558, magnitude: 6.24, spectralType: 'A' },
        { ra: 109.0604, dec: -15.5858, magnitude: 5.46, spectralType: 'A' },
        { ra: 108.7379, dec: -41.4258, magnitude: 5.94, spectralType: 'B' },
        { ra: 109.3242, dec: 6.6806, magnitude: 6.65, spectralType: 'B' },
        { ra: 108.6912, dec: -46.8497, magnitude: 5.72, spectralType: 'A' },
        { ra: 108.6592, dec: -48.2717, magnitude: 4.76, spectralType: 'B' },
        { ra: 109.5233, dec: 16.5403, magnitude: 3.58, spectralType: 'A' },  // 54Lam Gem
        { ra: 109.1533, dec: -23.3156, magnitude: 4.79, spectralType: 'K' },
        { ra: 109.3821, dec: -6.68, magnitude: 6.29, spectralType: 'K' },
        { ra: 109.1458, dec: -27.8811, magnitude: 4.64, spectralType: 'M' },
        { ra: 108.8375, dec: -52.4997, magnitude: 5.97, spectralType: 'K' },
        { ra: 109.2383, dec: -30.8967, magnitude: 6.32, spectralType: 'A' },
        { ra: 109.1325, dec: -38.3189, magnitude: 5.8, spectralType: 'B' },
        { ra: 109.2062, dec: -36.5928, magnitude: 5.03, spectralType: 'B' },
        { ra: 109.0646, dec: -46.7744, magnitude: 5.66, spectralType: 'K' },
        { ra: 110.5717, dec: 59.9019, magnitude: 6.35, spectralType: 'A' },  // 47 Cam
        { ra: 109.2858, dec: -37.0975, magnitude: 2.7, spectralType: 'K' },  // Pi Pup
        { ra: 109.4496, dec: -26.7975, magnitude: 6.46, spectralType: 'B' },
        { ra: 110.2629, dec: 42.6556, magnitude: 6.35, spectralType: 'K' },
        { ra: 110.3229, dec: 45.2281, magnitude: 5.77, spectralType: 'A' },
        { ra: 110.0308, dec: 21.9822, magnitude: 3.53, spectralType: 'F' },  // 55Del Gem
        { ra: 109.8433, dec: 2.7406, magnitude: 5.89, spectralType: 'G' },
        { ra: 109.9483, dec: 7.1428, magnitude: 5.91, spectralType: 'F' },
        { ra: 110.0287, dec: 15.1428, magnitude: 6.45, spectralType: 'A' },
        { ra: 109.6679, dec: -24.5589, magnitude: 4.98, spectralType: 'O' },  // 29 CMa
        { ra: 109.6767, dec: -24.9542, magnitude: 4.4, spectralType: 'O' },  // 30Tau CMa
        { ra: 110.7121, dec: 55.2844, magnitude: 6.53, spectralType: 'B' },  // 19 Lyn
        { ra: 110.7171, dec: 55.2814, magnitude: 5.45, spectralType: 'B' },  // 19 Lyn
        { ra: 109.7583, dec: -19.2803, magnitude: 6.09, spectralType: 'F' },
        { ra: 109.7133, dec: -26.5858, magnitude: 5.28, spectralType: 'G' },
        { ra: 109.5767, dec: -36.7342, magnitude: 4.66, spectralType: 'B' },
        { ra: 109.8671, dec: -16.395, magnitude: 5.7, spectralType: 'F' },
        { ra: 109.5175, dec: -43.9867, magnitude: 5.85, spectralType: 'B' },
        { ra: 109.6592, dec: -36.7428, magnitude: 5.11, spectralType: 'B' },
        { ra: 109.64, dec: -39.2103, magnitude: 5.25, spectralType: 'A' },
        { ra: 110.5558, dec: 38.9961, magnitude: 6.4, spectralType: 'K' },
        { ra: 110.5108, dec: 36.7606, magnitude: 5.13, spectralType: 'K' },  // 65 Aur
        { ra: 109.8071, dec: -33.7272, magnitude: 6.3, spectralType: 'K' },
        { ra: 110.4867, dec: 20.4436, magnitude: 5.1, spectralType: 'M' },  // 56 Gem
        { ra: 110.2425, dec: -14.36, magnitude: 5.45, spectralType: 'G' },
        { ra: 113.6654, dec: 80.8967, magnitude: 6.41, spectralType: 'G' },
        { ra: 110.3204, dec: -8.8783, magnitude: 6.55, spectralType: 'F' },
        { ra: 110.2217, dec: -22.8517, magnitude: 6.61, spectralType: 'B' },
        { ra: 110.2292, dec: -26.9636, magnitude: 6.01, spectralType: 'B' },
        { ra: 110.5146, dec: 0.1772, magnitude: 5.99, spectralType: 'B' },
        { ra: 110.2679, dec: -25.8914, magnitude: 5.87, spectralType: 'M' },
        { ra: 109.2075, dec: -67.9572, magnitude: 3.98, spectralType: 'F' },  // Del Vol
        { ra: 111.2383, dec: 51.8872, magnitude: 5.8, spectralType: 'K' },
        { ra: 111.0354, dec: 40.6722, magnitude: 5.19, spectralType: 'K' },  // 66 Aur
        { ra: 110.5083, dec: -8.9792, magnitude: 6.43, spectralType: 'O' },
        { ra: 110.5771, dec: -2.9789, magnitude: 6.23, spectralType: 'F' },
        { ra: 110.8688, dec: 25.0506, magnitude: 5.03, spectralType: 'G' },  // 57 Gem
        { ra: 111.8575, dec: 66.3317, magnitude: 6.47, spectralType: 'B' },
        { ra: 110.8675, dec: 22.9453, magnitude: 6.02, spectralType: 'A' },  // 58 Gem
        { ra: 110.6058, dec: -5.9828, magnitude: 5.82, spectralType: 'F' },
        { ra: 110.5562, dec: -19.0167, magnitude: 4.96, spectralType: 'B' },
        { ra: 110.0892, dec: -52.3117, magnitude: 6.05, spectralType: 'F' },
        { ra: 110.0904, dec: -52.3097, magnitude: 6.6, spectralType: 'G' },
        { ra: 110.1612, dec: -52.0861, magnitude: 5.39, spectralType: 'B' },
        { ra: 111.1392, dec: 27.6381, magnitude: 5.76, spectralType: 'G' },  // 59 Gem
        { ra: 111.1154, dec: 15.5172, magnitude: 6.41, spectralType: 'B' },
        { ra: 111.6783, dec: 49.2114, magnitude: 4.64, spectralType: 'A' },  // 21 Lyn
        { ra: 110.7525, dec: -31.9239, magnitude: 5.43, spectralType: 'B' },
        { ra: 111.2425, dec: 11.6697, magnitude: 5.3, spectralType: 'A' },  // 1 CMi
        { ra: 111.4317, dec: 27.7981, magnitude: 3.79, spectralType: 'G' },  // 60Iot Gem
        { ra: 110.8713, dec: -27.8342, magnitude: 5.38, spectralType: 'K' },
        { ra: 110.8829, dec: -32.2022, magnitude: 5.39, spectralType: 'B' },
        { ra: 110.9763, dec: -30.2169, magnitude: 6.6, spectralType: 'B' },
        { ra: 111.1671, dec: -16.2011, magnitude: 5.33, spectralType: 'B' },
        { ra: 111.0717, dec: -22.9128, magnitude: 6.19, spectralType: 'B' },
        { ra: 111.0238, dec: -29.3031, magnitude: 2.45, spectralType: 'B' },  // 31Eta CMa
        { ra: 111.4121, dec: 9.2761, magnitude: 4.99, spectralType: 'G' },  // 2Eps CMi
        { ra: 110.9929, dec: -35.8378, magnitude: 6.31, spectralType: 'B' },
        { ra: 112.7196, dec: 68.4656, magnitude: 5.64, spectralType: 'K' },
        { ra: 111.2113, dec: -19.0122, magnitude: 6.24, spectralType: 'A' },
        { ra: 111.2846, dec: -13.7519, magnitude: 5.78, spectralType: 'F' },
        { ra: 111.4625, dec: -5.775, magnitude: 5.97, spectralType: 'G' },
        { ra: 111.1825, dec: -31.8089, magnitude: 5.35, spectralType: 'G' },
        { ra: 111.7092, dec: 21.5358, magnitude: 6.54, spectralType: 'F' },
        { ra: 111.6162, dec: 10.6083, magnitude: 6.37, spectralType: 'A' },
        { ra: 111.7346, dec: 20.2572, magnitude: 5.93, spectralType: 'F' },  // 61 Gem
        { ra: 111.5146, dec: -4.5375, magnitude: 6.76, spectralType: 'A' },
        { ra: 111.3329, dec: -21.9828, magnitude: 6.05, spectralType: 'A' },
        { ra: 111.6721, dec: 11.0092, magnitude: 6.41, spectralType: 'B' },
        { ra: 111.3554, dec: -25.2178, magnitude: 5.78, spectralType: 'B' },
        { ra: 111.1967, dec: -37.29, magnitude: 6.97, spectralType: 'F' },
        { ra: 111.1971, dec: -37.2908, magnitude: 6.84, spectralType: 'F' },
        { ra: 112.215, dec: 48.1839, magnitude: 5.72, spectralType: 'B' },
        { ra: 111.7875, dec: 8.2894, magnitude: 2.9, spectralType: 'B' },  // 3Bet CMi
        { ra: 111.935, dec: 21.445, magnitude: 5.22, spectralType: 'F' },  // 63 Gem
        { ra: 111.4292, dec: -31.7386, magnitude: 6.31, spectralType: 'B' },
        { ra: 101.7446, dec: -87.025, magnitude: 6.47, spectralType: 'F' },
        { ra: 112.4833, dec: 49.6725, magnitude: 5.36, spectralType: 'F' },  // 22 Lyn
        { ra: 111.6696, dec: -23.7122, magnitude: 6.56, spectralType: 'A' },
        { ra: 112.0087, dec: 6.9419, magnitude: 5.25, spectralType: 'F' },  // 5Eta CMi
        { ra: 112.2779, dec: 31.7844, magnitude: 4.18, spectralType: 'F' },  // 62Rho Gem
        { ra: 111.7833, dec: -17.8644, magnitude: 5.63, spectralType: 'A' },
        { ra: 112.0408, dec: 8.9256, magnitude: 4.32, spectralType: 'K' },  // 4Gam CMi
        { ra: 111.7475, dec: -23.0861, magnitude: 5.61, spectralType: 'B' },
        { ra: 111.6763, dec: -34.1408, magnitude: 5.9, spectralType: 'B' },
        { ra: 112.335, dec: 28.1181, magnitude: 5.05, spectralType: 'A' },  // 64 Gem
        { ra: 112.1971, dec: 15.1094, magnitude: 6.22, spectralType: 'B' },
        { ra: 111.9654, dec: -11.5569, magnitude: 5.79, spectralType: 'G' },
        { ra: 111.9288, dec: -22.8597, magnitude: 5.95, spectralType: 'B' },
        { ra: 112.4529, dec: 27.9161, magnitude: 5.01, spectralType: 'K' },  // 65 Gem
        { ra: 111.5913, dec: -51.0183, magnitude: 5.1, spectralType: 'K' },
        { ra: 111.9967, dec: -29.1558, magnitude: 5.54, spectralType: 'B' },
        { ra: 112.4492, dec: 12.0067, magnitude: 4.54, spectralType: 'K' },  // 6 CMi
        { ra: 112.3279, dec: -1.9053, magnitude: 5.59, spectralType: 'K' },
        { ra: 112.3571, dec: -7.5511, magnitude: 5.86, spectralType: 'F' },
        { ra: 112.3421, dec: -10.3267, magnitude: 5.75, spectralType: 'K' },
        { ra: 112.3413, dec: -14.9992, magnitude: 6.05, spectralType: 'F' },
        { ra: 112.095, dec: -37.8103, magnitude: 6.58, spectralType: 'A' },
        { ra: 112.2137, dec: -31.8483, magnitude: 6.38, spectralType: 'B' },
        { ra: 112.2146, dec: -31.8469, magnitude: 7.13, spectralType: 'B' },
        { ra: 112.9821, dec: 38.8964, magnitude: 6.54, spectralType: 'A' },
        { ra: 112.2704, dec: -31.4564, magnitude: 5.77, spectralType: 'B' },
        { ra: 112.4642, dec: -23.0244, magnitude: 4.85, spectralType: 'A' },
        { ra: 112.2738, dec: -38.8122, magnitude: 5.43, spectralType: 'B' },
        { ra: 112.7129, dec: -5.2264, magnitude: 6.24, spectralType: 'K' },
        { ra: 112.9517, dec: 17.0861, magnitude: 5.42, spectralType: 'K' },
        { ra: 112.3075, dec: -43.3014, magnitude: 3.25, spectralType: 'K' },  // Sig Pup
        { ra: 113.2108, dec: 22.8878, magnitude: 6.54, spectralType: 'K' },
        { ra: 113.0246, dec: 1.9144, magnitude: 5.25, spectralType: 'F' },  // 7Del1CMi
        { ra: 112.6771, dec: -30.9622, magnitude: 4.65, spectralType: 'G' },
        { ra: 112.6767, dec: -37.3397, magnitude: 6.65, spectralType: 'G' },
        { ra: 113.0242, dec: -8.8808, magnitude: 5.9, spectralType: 'F' },
        { ra: 112.4983, dec: -52.6511, magnitude: 5.87, spectralType: 'K' },
        { ra: 112.8575, dec: -36.1528, magnitude: 6.68, spectralType: 'B' },
        { ra: 113.4021, dec: 15.8267, magnitude: 5.25, spectralType: 'A' },  // 68 Gem
        { ra: 113.2983, dec: 3.2903, magnitude: 5.59, spectralType: 'F' },  // 8Del2CMi
        { ra: 112.2137, dec: -64.51, magnitude: 6.39, spectralType: 'K' },
        { ra: 112.9283, dec: -35.8878, magnitude: 6.61, spectralType: 'A' },
        { ra: 113.65, dec: 31.8886, magnitude: 2.88, spectralType: 'A' },  // 66Alp Gem
        { ra: 113.65, dec: 31.8883, magnitude: 1.98, spectralType: 'A' },  // 66Alp Gem
        { ra: 112.6287, dec: -54.3994, magnitude: 5.96, spectralType: 'M' },
        { ra: 113.5212, dec: 10.5683, magnitude: 6.28, spectralType: 'A' },
        { ra: 114.1958, dec: 55.7553, magnitude: 5.92, spectralType: 'K' },
        { ra: 113.0929, dec: -35.9614, magnitude: 6.3, spectralType: 'B' },
        { ra: 113.7862, dec: 30.9611, magnitude: 5.33, spectralType: 'K' },
        { ra: 113.3421, dec: -14.3383, magnitude: 6.21, spectralType: 'B' },
        { ra: 113.9833, dec: 43.0311, magnitude: 6.3, spectralType: 'F' },
        { ra: 113.3312, dec: -19.4125, magnitude: 5.66, spectralType: 'K' },
        { ra: 113.2904, dec: -24.7108, magnitude: 5.85, spectralType: 'A' },
        { ra: 113.5658, dec: 3.3714, magnitude: 5.81, spectralType: 'A' },  // 9Del3CMi
        { ra: 113.4496, dec: -14.5239, magnitude: 4.97, spectralType: 'M' },
        { ra: 114.1317, dec: 46.1803, magnitude: 5.65, spectralType: 'M' },
        { ra: 113.6917, dec: 2.725, magnitude: 6.55, spectralType: 'A' },
        { ra: 113.9804, dec: 26.8958, magnitude: 4.06, spectralType: 'M' },  // 69Ups Gem
        { ra: 113.5133, dec: -22.2961, magnitude: 4.45, spectralType: 'F' },
        { ra: 113.3063, dec: -40.0589, magnitude: 6.26, spectralType: 'B' },
        { ra: 113.3054, dec: -43.0864, magnitude: 6.52, spectralType: 'G' },
        { ra: 113.5775, dec: -23.4736, magnitude: 5.83, spectralType: 'F' },
        { ra: 113.5796, dec: -23.4747, magnitude: 5.87, spectralType: 'F' },
        { ra: 113.4625, dec: -36.3383, magnitude: 5.54, spectralType: 'B' },
        { ra: 113.62, dec: -26.1167, magnitude: 6.65, spectralType: 'A' },
        { ra: 113.5533, dec: -33.4633, magnitude: 6.11, spectralType: 'A' },
        { ra: 114.4746, dec: 48.7736, magnitude: 5.92, spectralType: 'A' },
        { ra: 114.3242, dec: 40.0253, magnitude: 6.38, spectralType: 'M' },
        { ra: 113.6454, dec: -27.0119, magnitude: 5.77, spectralType: 'K' },
        { ra: 113.4938, dec: -39.9058, magnitude: 6.76, spectralType: 'K' },
        { ra: 114.1446, dec: 5.8617, magnitude: 5.91, spectralType: 'G' },
        { ra: 111.4083, dec: -79.0942, magnitude: 5.53, spectralType: 'K' },  // Eps Men
        { ra: 114.0692, dec: -8.3114, magnitude: 6.27, spectralType: 'K' },
        { ra: 114.0162, dec: -14.4928, magnitude: 5.7, spectralType: 'B' },
        { ra: 113.845, dec: -28.3694, magnitude: 4.64, spectralType: 'B' },
        { ra: 114.0325, dec: -22.1606, magnitude: 6.34, spectralType: 'G' },
        { ra: 114.6367, dec: 35.0486, magnitude: 5.56, spectralType: 'K' },  // 70 Gem
        { ra: 113.6646, dec: -51.4747, magnitude: 6.28, spectralType: 'A' },
        { ra: 114.5604, dec: 24.3603, magnitude: 6.27, spectralType: 'F' },
        { ra: 114.3196, dec: -4.1111, magnitude: 5.13, spectralType: 'F' },  // 25 Mon
        { ra: 114.1708, dec: -19.7022, magnitude: 5.74, spectralType: 'B' },
        { ra: 115.2062, dec: 57.0828, magnitude: 6.06, spectralType: 'K' },  // 23 Lyn
        { ra: 114.7913, dec: 34.5842, magnitude: 4.9, spectralType: 'F' },  // 71Omi Gem
        { ra: 114.7996, dec: 24.2225, magnitude: 6.17, spectralType: 'A' },
        { ra: 114.4121, dec: -14.4411, magnitude: 6.53, spectralType: 'B' },
        { ra: 114.32, dec: -23.775, magnitude: 6.37, spectralType: 'F' },
        { ra: 113.9154, dec: -52.5339, magnitude: 4.94, spectralType: 'K' },
        { ra: 115.0608, dec: 38.3444, magnitude: 5.73, spectralType: 'M' },
        { ra: 114.9754, dec: 32.0097, magnitude: 6.17, spectralType: 'F' },
        { ra: 114.3421, dec: -34.9686, magnitude: 4.53, spectralType: 'B' },
        { ra: 114.8692, dec: 17.6747, magnitude: 5.05, spectralType: 'K' },  // 74 Gem
        { ra: 115.3017, dec: 48.1317, magnitude: 5.56, spectralType: 'K' },
        { ra: 114.1829, dec: -48.8303, magnitude: 5.72, spectralType: 'B' },
        { ra: 114.0071, dec: -55.8875, magnitude: 6.39, spectralType: 'K' },
        { ra: 114.4367, dec: -35.2772, magnitude: 6.6, spectralType: 'K' },
        { ra: 114.8254, dec: 5.225, magnitude: 0.38, spectralType: 'F' },  // 10Alp CMi
        { ra: 114.575, dec: -25.3647, magnitude: 4.7, spectralType: 'B' },
        { ra: 114.4383, dec: -38.0106, magnitude: 6.38, spectralType: 'K' },
        { ra: 115.7517, dec: 58.7103, magnitude: 4.99, spectralType: 'A' },  // 24 Lyn
        { ra: 114.7796, dec: -18.6792, magnitude: 6.72, spectralType: 'B' },
        { ra: 114.7054, dec: -26.8017, magnitude: 4.5, spectralType: 'B' },
        { ra: 114.7075, dec: -26.8036, magnitude: 4.62, spectralType: 'B' },
        { ra: 115.0292, dec: 5.2308, magnitude: 6.02, spectralType: 'A' },
        { ra: 115.2438, dec: 23.0186, magnitude: 5.89, spectralType: 'K' },
        { ra: 114.6008, dec: -39.9914, magnitude: 6.59, spectralType: 'A' },
        { ra: 115.1971, dec: 13.7708, magnitude: 6.24, spectralType: 'K' },
        { ra: 114.6829, dec: -36.4969, magnitude: 5.8, spectralType: 'B' },
        { ra: 114.6358, dec: -38.7811, magnitude: 6.19, spectralType: 'G' },
        { ra: 114.8621, dec: -26.8631, magnitude: 6.5, spectralType: 'B' },
        { ra: 114.5758, dec: -48.6011, magnitude: 5.68, spectralType: 'F' },
        { ra: 115.1479, dec: -8.1858, magnitude: 6.01, spectralType: 'A' },
        { ra: 115.0967, dec: -15.2636, magnitude: 4.94, spectralType: 'K' },
        { ra: 115.0567, dec: -19.6608, magnitude: 5.93, spectralType: 'K' },
        { ra: 114.8642, dec: -38.3083, magnitude: 4.84, spectralType: 'B' },
        { ra: 115.6812, dec: 34.0003, magnitude: 6.02, spectralType: 'F' },
        { ra: 114.9325, dec: -38.1394, magnitude: 5.73, spectralType: 'B' },
        { ra: 114.9492, dec: -38.2608, magnitude: 5.76, spectralType: 'B' },
        { ra: 115.4658, dec: 13.4806, magnitude: 5.77, spectralType: 'M' },
        { ra: 115.3967, dec: 3.6247, magnitude: 5.94, spectralType: 'A' },
        { ra: 115.5133, dec: 14.2083, magnitude: 5.56, spectralType: 'M' },
        { ra: 114.9917, dec: -37.5794, magnitude: 6.0, spectralType: 'B' },
        { ra: 116.0175, dec: 50.4339, magnitude: 5.27, spectralType: 'A' },
        { ra: 115.3117, dec: -9.5511, magnitude: 3.93, spectralType: 'K' },  // 26Alp Mon
        { ra: 114.7517, dec: -53.2733, magnitude: 6.06, spectralType: 'B' },
        { ra: 115.1808, dec: -27.9458, magnitude: 6.76, spectralType: 'B' },
        { ra: 115.8279, dec: 28.8836, magnitude: 4.28, spectralType: 'K' },  // 75Sig Gem
        { ra: 115.2196, dec: -31.6608, magnitude: 6.56, spectralType: 'G' },
        { ra: 116.6671, dec: 65.4558, magnitude: 5.92, spectralType: 'K' },  // 51 Cam
        { ra: 115.3483, dec: -22.3372, magnitude: 6.18, spectralType: 'M' },
        { ra: 116.6142, dec: 62.8306, magnitude: 6.49, spectralType: 'F' },  // 49 Cam
        { ra: 115.8425, dec: 22.3994, magnitude: 6.21, spectralType: 'K' },
        { ra: 113.8404, dec: -74.2756, magnitude: 7.16, spectralType: 'B' },
        { ra: 113.8408, dec: -74.2756, magnitude: 7.26, spectralType: 'B' },
        { ra: 115.3158, dec: -38.5336, magnitude: 5.42, spectralType: 'B' },
        { ra: 115.7725, dec: 0.1894, magnitude: 6.19, spectralType: 'K' },
        { ra: 116.0288, dec: 25.7842, magnitude: 5.31, spectralType: 'K' },  // 76 Gem
        { ra: 115.3408, dec: -44.6322, magnitude: 6.41, spectralType: 'B' },
        { ra: 116.1117, dec: 24.3981, magnitude: 3.57, spectralType: 'G' },  // 77Kap Gem
        { ra: 115.4917, dec: -38.5289, magnitude: 6.54, spectralType: 'B' },
        { ra: 116.0583, dec: 12.8594, magnitude: 6.43, spectralType: 'K' },
        { ra: 115.7004, dec: -26.3511, magnitude: 5.64, spectralType: 'K' },
        { ra: 116.0308, dec: 2.405, magnitude: 6.47, spectralType: 'F' },
        { ra: 116.3287, dec: 28.0261, magnitude: 1.14, spectralType: 'K' },  // 78Bet Gem
        { ra: 116.2887, dec: 20.3164, magnitude: 6.33, spectralType: 'A' },  // 79 Gem
        { ra: 115.9129, dec: -25.5039, magnitude: 6.55, spectralType: 'A' },
        { ra: 115.885, dec: -28.4111, magnitude: 4.59, spectralType: 'K' },  // 1 Pup
        { ra: 115.8, dec: -36.0503, magnitude: 5.6, spectralType: 'B' },
        { ra: 115.7792, dec: -38.8642, magnitude: 6.89, spectralType: 'G' },
        { ra: 115.9521, dec: -28.9547, magnitude: 3.96, spectralType: 'A' },  // 3 Pup
        { ra: 119.0721, dec: 80.2656, magnitude: 6.56, spectralType: 'G' },
        { ra: 115.7383, dec: -45.1733, magnitude: 5.06, spectralType: 'G' },
        { ra: 116.6637, dec: 37.5175, magnitude: 5.18, spectralType: 'M' },
        { ra: 114.0175, dec: -77.6342, magnitude: 6.18, spectralType: 'M' },
        { ra: 115.9288, dec: -38.2019, magnitude: 6.4, spectralType: 'B' },
        { ra: 115.9246, dec: -40.9339, magnitude: 5.17, spectralType: 'K' },
        { ra: 116.5308, dec: 18.51, magnitude: 4.88, spectralType: 'K' },  // 81 Gem
        { ra: 116.1417, dec: -24.6739, magnitude: 5.62, spectralType: 'B' },
        { ra: 115.7788, dec: -49.9928, magnitude: 6.57, spectralType: 'A' },
        { ra: 115.5425, dec: -58.6308, magnitude: 6.43, spectralType: 'B' },
        { ra: 116.04, dec: -36.0628, magnitude: 5.8, spectralType: 'F' },
        { ra: 116.5675, dec: 10.7683, magnitude: 5.3, spectralType: 'A' },  // 11 CMi
        { ra: 116.3696, dec: -14.6861, magnitude: 6.89, spectralType: 'A' },  // 2 Pup
        { ra: 116.3713, dec: -14.6908, magnitude: 6.07, spectralType: 'A' },  // 2 Pup
        { ra: 116.1425, dec: -37.9431, magnitude: 5.88, spectralType: 'B' },
        { ra: 115.7221, dec: -58.23, magnitude: 6.21, spectralType: 'K' },
        { ra: 116.8762, dec: 33.4156, magnitude: 5.14, spectralType: 'M' },  // 80Pi Gem
        { ra: 116.5092, dec: -6.7725, magnitude: 5.49, spectralType: 'K' },
        { ra: 116.4871, dec: -14.5639, magnitude: 5.04, spectralType: 'F' },  // 4 Pup
        { ra: 116.2692, dec: -37.8878, magnitude: 6.54, spectralType: 'B' },
        { ra: 116.3137, dec: -37.9686, magnitude: 3.61, spectralType: 'K' },
        { ra: 116.3958, dec: -34.1731, magnitude: 5.37, spectralType: 'G' },
        { ra: 116.6871, dec: -12.6753, magnitude: 6.39, spectralType: 'A' },
        { ra: 116.3254, dec: -43.7522, magnitude: 6.03, spectralType: 'B' },
        { ra: 117.14, dec: 23.1411, magnitude: 6.18, spectralType: 'G' },  // 82 Gem
        { ra: 116.5433, dec: -37.9339, magnitude: 5.88, spectralType: 'B' },
        { ra: 116.8021, dec: -22.5197, magnitude: 5.9, spectralType: 'B' },
        { ra: 115.455, dec: -72.6061, magnitude: 3.95, spectralType: 'K' },  // Zet Vol
        { ra: 116.6392, dec: -40.0597, magnitude: 6.57, spectralType: 'B' },
        { ra: 116.9104, dec: -15.9908, magnitude: 6.34, spectralType: 'K' },
        { ra: 116.9383, dec: -16.0144, magnitude: 6.43, spectralType: 'M' },
        { ra: 117.7737, dec: 54.1292, magnitude: 6.02, spectralType: 'F' },
        { ra: 116.9862, dec: -12.1931, magnitude: 5.48, spectralType: 'F' },  // 5 Pup
        { ra: 117.2583, dec: 13.3708, magnitude: 6.04, spectralType: 'K' },
        { ra: 116.3983, dec: -56.7225, magnitude: 6.12, spectralType: 'F' },
        { ra: 116.7742, dec: -39.3314, magnitude: 6.31, spectralType: 'B' },
        { ra: 117.2454, dec: 4.3328, magnitude: 6.53, spectralType: 'G' },
        { ra: 117.0217, dec: -25.9372, magnitude: 4.5, spectralType: 'B' },  // Omi Pup
        { ra: 116.8542, dec: -38.5111, magnitude: 5.08, spectralType: 'B' },
        { ra: 116.1829, dec: -66.0719, magnitude: 6.38, spectralType: 'G' },
        { ra: 116.8812, dec: -46.6086, magnitude: 5.23, spectralType: 'B' },
        { ra: 116.0542, dec: -69.8214, magnitude: 6.18, spectralType: 'A' },
        { ra: 118.1525, dec: 55.2094, magnitude: 6.38, spectralType: 'A' },
        { ra: 117.7596, dec: 33.2336, magnitude: 6.03, spectralType: 'A' },
        { ra: 117.0354, dec: -40.6522, magnitude: 6.14, spectralType: 'M' },
        { ra: 117.3692, dec: -13.3533, magnitude: 6.23, spectralType: 'B' },
        { ra: 117.2571, dec: -24.9122, magnitude: 5.33, spectralType: 'G' },
        { ra: 117.4217, dec: -17.2283, magnitude: 5.18, spectralType: 'K' },  // 6 Pup
        { ra: 117.3237, dec: -24.8597, magnitude: 3.34, spectralType: 'G' },  // 7Xi Pup
        { ra: 117.0846, dec: -47.0778, magnitude: 4.71, spectralType: 'K' },
        { ra: 117.5442, dec: -9.1833, magnitude: 5.61, spectralType: 'K' },
        { ra: 117.4383, dec: -20.2069, magnitude: 6.56, spectralType: 'G' },
        { ra: 117.3112, dec: -35.2433, magnitude: 5.93, spectralType: 'B' },
        { ra: 117.6975, dec: 3.2772, magnitude: 6.18, spectralType: 'K' },
        { ra: 117.5237, dec: -19.5236, magnitude: 6.12, spectralType: 'K' },
        { ra: 117.3975, dec: -33.2889, magnitude: 5.6, spectralType: 'K' },
        { ra: 117.9862, dec: 19.3253, magnitude: 5.99, spectralType: 'K' },
        { ra: 117.73, dec: -11.1286, magnitude: 6.16, spectralType: 'K' },
        { ra: 117.3096, dec: -46.3733, magnitude: 4.11, spectralType: 'B' },
        { ra: 117.08, dec: -56.4711, magnitude: 6.33, spectralType: 'K' },
        { ra: 117.3675, dec: -44.7519, magnitude: 6.32, spectralType: 'K' },
        { ra: 117.3037, dec: -46.8578, magnitude: 5.84, spectralType: 'B' },
        { ra: 117.925, dec: 1.7669, magnitude: 5.14, spectralType: 'B' },  // 13Zet CMi
        { ra: 117.75, dec: -24.5283, magnitude: 6.45, spectralType: 'A' },
        { ra: 118.03, dec: 3.2772, magnitude: 6.31, spectralType: 'M' },
        { ra: 117.2779, dec: -56.4106, magnitude: 5.59, spectralType: 'G' },
        { ra: 117.9204, dec: -12.8194, magnitude: 6.36, spectralType: 'F' },  // 8 Pup
        { ra: 117.9429, dec: -13.8981, magnitude: 5.17, spectralType: 'G' },  // 9 Pup
        { ra: 118.6221, dec: 47.3861, magnitude: 6.25, spectralType: 'K' },  // 25 Lyn
        { ra: 118.6779, dec: 47.5647, magnitude: 5.45, spectralType: 'K' },  // 26 Lyn
        { ra: 118.3742, dec: 26.7658, magnitude: 4.97, spectralType: 'A' },  // 83Phi Gem
        { ra: 117.9287, dec: -21.1739, magnitude: 5.63, spectralType: 'G' },
        { ra: 117.6767, dec: -44.5797, magnitude: 6.45, spectralType: 'G' },
        { ra: 117.3037, dec: -60.2836, magnitude: 5.78, spectralType: 'F' },
        { ra: 117.5996, dec: -50.5097, magnitude: 5.91, spectralType: 'K' },
        { ra: 118.1996, dec: -5.4281, magnitude: 5.76, spectralType: 'F' },
        { ra: 118.0788, dec: -14.8464, magnitude: 5.69, spectralType: 'F' },  // 10 Pup
        { ra: 117.8354, dec: -43.0956, magnitude: 6.32, spectralType: 'B' },
        { ra: 120.0487, dec: 73.9181, magnitude: 5.41, spectralType: 'K' },
        { ra: 117.4783, dec: -60.0511, magnitude: 6.72, spectralType: 'K' },
        { ra: 119.1117, dec: 56.5044, magnitude: 6.72, spectralType: 'A' },
        { ra: 117.9179, dec: -42.8883, magnitude: 6.04, spectralType: 'B' },
        { ra: 118.0654, dec: -34.7053, magnitude: 5.01, spectralType: 'F' },
        { ra: 118.0542, dec: -40.5758, magnitude: 3.73, spectralType: 'K' },
        { ra: 117.4208, dec: -66.1958, magnitude: 5.79, spectralType: 'B' },
        { ra: 121.1962, dec: 79.4797, magnitude: 5.42, spectralType: 'A' },
        { ra: 118.92, dec: 35.4128, magnitude: 6.23, spectralType: 'A' },
        { ra: 118.1613, dec: -38.8631, magnitude: 4.49, spectralType: 'B' },
        { ra: 118.2646, dec: -36.3639, magnitude: 5.43, spectralType: 'K' },
        { ra: 118.9163, dec: 19.8839, magnitude: 5.35, spectralType: 'A' },  // 85 Gem
        { ra: 118.8808, dec: 8.8628, magnitude: 5.86, spectralType: 'F' },
        { ra: 118.1238, dec: -54.3672, magnitude: 5.7, spectralType: 'B' },
        { ra: 118.2654, dec: -49.6131, magnitude: 4.63, spectralType: 'B' },
        { ra: 118.3258, dec: -48.1031, magnitude: 4.24, spectralType: 'B' },
        { ra: 118.5458, dec: -35.8775, magnitude: 5.49, spectralType: 'B' },
        { ra: 118.6663, dec: -34.8469, magnitude: 6.15, spectralType: 'K' },
        { ra: 119.0996, dec: 4.4858, magnitude: 6.17, spectralType: 'G' },
        { ra: 119.5692, dec: 43.9775, magnitude: 6.34, spectralType: 'K' },
        { ra: 119.2475, dec: 15.7903, magnitude: 5.78, spectralType: 'K' },  // 1 Cnc
        { ra: 118.8071, dec: -30.9175, magnitude: 6.44, spectralType: 'K' },
        { ra: 119.3162, dec: 8.6414, magnitude: 6.05, spectralType: 'K' },
        { ra: 119.3175, dec: 1.1269, magnitude: 6.35, spectralType: 'F' },
        { ra: 119.095, dec: -30.2853, magnitude: 6.33, spectralType: 'M' },
        { ra: 118.7521, dec: -52.5831, magnitude: 6.38, spectralType: 'B' },
        { ra: 118.9437, dec: -43.845, magnitude: 6.02, spectralType: 'B' },
        { ra: 119.2146, dec: -22.88, magnitude: 4.2, spectralType: 'F' },  // 11 Pup
        { ra: 119.5242, dec: 7.2136, magnitude: 6.41, spectralType: 'A' },
        { ra: 119.6313, dec: 16.5186, magnitude: 5.99, spectralType: 'K' },
        { ra: 118.7217, dec: -57.3031, magnitude: 5.63, spectralType: 'K' },
        { ra: 120.3363, dec: 59.0475, magnitude: 5.77, spectralType: 'G' },
        { ra: 119.1013, dec: -40.7364, magnitude: 6.78, spectralType: 'B' },
        { ra: 124.2242, dec: 84.0578, magnitude: 6.49, spectralType: 'A' },
        { ra: 120.4267, dec: 60.3244, magnitude: 6.01, spectralType: 'A' },  // 53 Cam
        { ra: 119.5858, dec: 2.2247, magnitude: 5.29, spectralType: 'K' },  // 14 CMi
        { ra: 119.2413, dec: -42.4061, magnitude: 6.09, spectralType: 'K' },
        { ra: 120.6283, dec: 63.0903, magnitude: 6.4, spectralType: 'G' },
        { ra: 119.4171, dec: -30.3347, magnitude: 4.79, spectralType: 'A' },
        { ra: 119.2413, dec: -43.5003, magnitude: 5.35, spectralType: 'B' },
        { ra: 119.8963, dec: 13.2422, magnitude: 6.02, spectralType: 'K' },
        { ra: 119.3267, dec: -44.1097, magnitude: 5.09, spectralType: 'B' },
        { ra: 119.1946, dec: -52.9822, magnitude: 3.47, spectralType: 'B' },  // Chi Car
        { ra: 119.3333, dec: -47.8903, magnitude: 6.22, spectralType: 'B' },
        { ra: 120.6492, dec: 57.2736, magnitude: 6.49, spectralType: 'F' },
        { ra: 119.0775, dec: -60.5264, magnitude: 5.74, spectralType: 'K' },
        { ra: 119.4658, dec: -45.5778, magnitude: 5.17, spectralType: 'K' },
        { ra: 119.9338, dec: -3.6797, magnitude: 4.93, spectralType: 'K' },  // 27 Mon
        { ra: 119.7738, dec: -23.3106, magnitude: 5.11, spectralType: 'K' },  // 12 Pup
        { ra: 120.2329, dec: 25.3928, magnitude: 5.83, spectralType: 'G' },  // 2Ome1Cnc
        { ra: 120.2, dec: 19.8161, magnitude: 6.25, spectralType: 'K' },
        { ra: 119.2113, dec: -59.1264, magnitude: 6.25, spectralType: 'M' },
        { ra: 120.2529, dec: 23.5831, magnitude: 6.34, spectralType: 'K' },
        { ra: 120.1971, dec: 17.3086, magnitude: 5.55, spectralType: 'K' },  // 3 Cnc
        { ra: 119.56, dec: -49.245, magnitude: 4.41, spectralType: 'B' },
        { ra: 120.4796, dec: 35.4131, magnitude: 6.34, spectralType: 'K' },
        { ra: 119.9667, dec: -18.3992, magnitude: 4.61, spectralType: 'A' },
        { ra: 120.4325, dec: 25.0897, magnitude: 6.31, spectralType: 'A' },  // 4Ome2Cnc
        { ra: 119.5892, dec: -51.4486, magnitude: 6.44, spectralType: 'A' },
        { ra: 120.3763, dec: 16.4553, magnitude: 5.99, spectralType: 'B' },  // 5 Cnc
        { ra: 120.1838, dec: -2.8817, magnitude: 6.51, spectralType: 'B' },
        { ra: 120.3075, dec: 4.8797, magnitude: 5.65, spectralType: 'A' },
        { ra: 119.7575, dec: -45.2161, magnitude: 5.99, spectralType: 'B' },
        { ra: 119.4454, dec: -60.3033, magnitude: 5.6, spectralType: 'G' },
        { ra: 119.3021, dec: -63.2969, magnitude: 6.14, spectralType: 'B' },
        { ra: 119.8683, dec: -39.2972, magnitude: 5.24, spectralType: 'F' },
        { ra: 120.3054, dec: -1.3925, magnitude: 4.68, spectralType: 'K' },  // 28 Mon
        { ra: 119.8012, dec: -49.9767, magnitude: 6.32, spectralType: 'B' },
        { ra: 119.8058, dec: -49.9736, magnitude: 6.34, spectralType: 'B' },
        { ra: 120.4613, dec: 8.9139, magnitude: 6.22, spectralType: 'G' },
        { ra: 120.5662, dec: 2.3344, magnitude: 4.39, spectralType: 'K' },
        { ra: 120.0817, dec: -45.4569, magnitude: 6.61, spectralType: 'K' },
        { ra: 119.7104, dec: -60.8244, magnitude: 5.81, spectralType: 'B' },
        { ra: 120.0621, dec: -48.9814, magnitude: 6.02, spectralType: 'A' },
        { ra: 120.8796, dec: 27.7942, magnitude: 4.94, spectralType: 'K' },  // Chi Gem
        { ra: 120.6083, dec: -6.3372, magnitude: 6.33, spectralType: 'G' },
        { ra: 120.1204, dec: -48.8714, magnitude: 6.12, spectralType: 'A' },
        { ra: 119.9175, dec: -60.2075, magnitude: 6.33, spectralType: 'B' },
        { ra: 119.9067, dec: -60.5869, magnitude: 5.17, spectralType: 'M' },
        { ra: 120.4058, dec: -37.2836, magnitude: 5.95, spectralType: 'A' },
        { ra: 120.5258, dec: -37.0506, magnitude: 6.34, spectralType: 'M' },
        { ra: 120.2079, dec: -54.1514, magnitude: 5.87, spectralType: 'B' },
        { ra: 120.3454, dec: -54.515, magnitude: 6.1, spectralType: 'B' },
        { ra: 121.1883, dec: 18.8422, magnitude: 6.15, spectralType: 'B' },
        { ra: 120.0833, dec: -63.5675, magnitude: 4.82, spectralType: 'B' },
        { ra: 120.7671, dec: -32.4639, magnitude: 5.82, spectralType: 'K' },
        { ra: 120.3812, dec: -55.455, magnitude: 6.28, spectralType: 'B' },
        { ra: 120.6867, dec: -41.31, magnitude: 5.52, spectralType: 'B' },
        { ra: 121.2688, dec: 13.1181, magnitude: 5.12, spectralType: 'A' },  // 8 Cnc
        { ra: 121.4042, dec: 27.5297, magnitude: 6.21, spectralType: 'A' },
        { ra: 120.8963, dec: -40.0033, magnitude: 2.25, spectralType: 'O' },  // Zet Pup
        { ra: 120.8729, dec: -42.9486, magnitude: 6.29, spectralType: 'G' },
        { ra: 121.7913, dec: 43.2603, magnitude: 6.26, spectralType: 'A' },  // 28 Lyn
        { ra: 121.1729, dec: -19.7281, magnitude: 6.13, spectralType: 'B' },  // 14 Pup
        { ra: 121.5767, dec: 22.6356, magnitude: 5.99, spectralType: 'M' },  // 9Mu 1Cnc
        { ra: 121.0675, dec: -32.675, magnitude: 5.31, spectralType: 'M' },
        { ra: 119.8171, dec: -73.2447, magnitude: 6.34, spectralType: 'A' },
        { ra: 121.4567, dec: -0.5736, magnitude: 6.41, spectralType: 'K' },
        { ra: 122.1142, dec: 51.5067, magnitude: 4.84, spectralType: 'A' },  // 27 Lyn
        { ra: 121.6146, dec: -9.245, magnitude: 6.23, spectralType: 'B' },
        { ra: 122.5158, dec: 58.2481, magnitude: 5.93, spectralType: 'K' },
        { ra: 121.9408, dec: 21.5817, magnitude: 5.3, spectralType: 'G' },  // 10Mu 2Cnc
        { ra: 121.4371, dec: -33.5692, magnitude: 6.14, spectralType: 'G' },
        { ra: 121.1767, dec: -50.5906, magnitude: 5.95, spectralType: 'G' },
        { ra: 121.335, dec: -46.9789, magnitude: 6.19, spectralType: 'B' },
        { ra: 121.2667, dec: -53.1081, magnitude: 5.53, spectralType: 'K' },
        { ra: 122.3462, dec: 42.4306, magnitude: 6.27, spectralType: 'K' },
        { ra: 123.2033, dec: 68.4742, magnitude: 5.32, spectralType: 'G' },
        { ra: 121.825, dec: -20.5547, magnitude: 5.38, spectralType: 'A' },
        { ra: 122.1767, dec: 13.6408, magnitude: 6.27, spectralType: 'F' },  // 12 Cnc
        { ra: 121.8858, dec: -24.3042, magnitude: 2.81, spectralType: 'F' },  // 15Rho Pup
        { ra: 121.1787, dec: -62.8361, magnitude: 6.3, spectralType: 'B' },
        { ra: 121.6683, dec: -45.2664, magnitude: 5.05, spectralType: 'K' },
        { ra: 122.1483, dec: -2.9839, magnitude: 4.34, spectralType: 'G' },  // 29Zet Mon
        { ra: 122.2371, dec: -11.3397, magnitude: 6.32, spectralType: 'A' },
        { ra: 122.1812, dec: -20.3631, magnitude: 6.36, spectralType: 'A' },
        { ra: 122.6133, dec: 25.5072, magnitude: 5.73, spectralType: 'G' },  // 14Psi Cnc
        { ra: 122.2567, dec: -19.245, magnitude: 4.4, spectralType: 'B' },  // 16 Pup
        { ra: 122.84, dec: 38.7314, magnitude: 6.58, spectralType: 'G' },
        { ra: 122.3688, dec: -16.2489, magnitude: 5.68, spectralType: 'B' },
        { ra: 122.1567, dec: -37.6814, magnitude: 6.37, spectralType: 'B' },
        { ra: 122.2779, dec: -30.3225, magnitude: 6.65, spectralType: 'K' },
        { ra: 126.1371, dec: 82.4308, magnitude: 6.32, spectralType: 'A' },
        { ra: 122.745, dec: 14.6294, magnitude: 6.23, spectralType: 'A' },
        { ra: 122.2925, dec: -35.455, magnitude: 6.2, spectralType: 'G' },
        { ra: 123.4592, dec: 56.4522, magnitude: 5.85, spectralType: 'G' },
        { ra: 122.8192, dec: 9.8211, magnitude: 6.07, spectralType: 'B' },
        { ra: 122.6658, dec: -13.7992, magnitude: 5.54, spectralType: 'F' },  // 18 Pup
        { ra: 122.29, dec: -48.6844, magnitude: 5.7, spectralType: 'B' },
        { ra: 122.3996, dec: -44.1228, magnitude: 5.21, spectralType: 'B' },
        { ra: 122.4487, dec: -42.6406, magnitude: 6.26, spectralType: 'B' },
        { ra: 122.3721, dec: -47.3458, magnitude: 4.27, spectralType: 'B' },  // Gam1Vel
        { ra: 122.3833, dec: -47.3367, magnitude: 1.78, spectralType: 'G' },  // Gam2Vel
        { ra: 123.0529, dec: 17.6478, magnitude: 5.63, spectralType: 'F' },  // 16Zet1Cnc
        { ra: 123.0529, dec: 17.6478, magnitude: 6.02, spectralType: 'F' },  // 16Zet1Cnc
        { ra: 123.0554, dec: 17.6478, magnitude: 6.2, spectralType: 'G' },  // 16Zet2Cnc
        { ra: 122.8179, dec: -12.9269, magnitude: 4.72, spectralType: 'G' },  // 19 Pup
        { ra: 122.8875, dec: -7.7725, magnitude: 5.36, spectralType: 'G' },
        { ra: 122.43, dec: -47.9375, magnitude: 5.23, spectralType: 'B' },
        { ra: 123.0921, dec: 14.0039, magnitude: 6.54, spectralType: 'A' },
        { ra: 123.2871, dec: 29.6567, magnitude: 5.64, spectralType: 'B' },  // 15 Cnc
        { ra: 124.8842, dec: 75.7569, magnitude: 5.54, spectralType: 'G' },
        { ra: 122.1021, dec: -63.8011, magnitude: 6.28, spectralType: 'B' },
        { ra: 122.39, dec: -56.0856, magnitude: 5.66, spectralType: 'A' },
        { ra: 122.7567, dec: -37.2922, magnitude: 6.44, spectralType: 'O' },
        { ra: 122.2529, dec: -61.3025, magnitude: 4.76, spectralType: 'F' },
        { ra: 123.9604, dec: 60.3806, magnitude: 6.45, spectralType: 'A' },
        { ra: 123.2492, dec: 16.5142, magnitude: 6.01, spectralType: 'G' },
        { ra: 121.9825, dec: -68.6172, magnitude: 4.35, spectralType: 'B' },  // Eps Vol
        { ra: 123.4238, dec: 23.1378, magnitude: 6.56, spectralType: 'A' },
        { ra: 122.8396, dec: -39.6186, magnitude: 4.45, spectralType: 'K' },
        { ra: 122.8579, dec: -42.9872, magnitude: 4.75, spectralType: 'A' },
        { ra: 122.7962, dec: -48.4619, magnitude: 5.82, spectralType: 'B' },
        { ra: 123.5462, dec: 17.6758, magnitude: 6.47, spectralType: 'A' },
        { ra: 123.3333, dec: -15.7883, magnitude: 4.99, spectralType: 'G' },  // 20 Pup
        { ra: 123.1917, dec: -29.9108, magnitude: 6.52, spectralType: 'A' },
        { ra: 123.5875, dec: 13.0483, magnitude: 6.38, spectralType: 'G' },
        { ra: 123.0, dec: -46.6442, magnitude: 5.76, spectralType: 'F' },
        { ra: 123.2146, dec: -37.9244, magnitude: 6.43, spectralType: 'A' },
        { ra: 123.1287, dec: -46.2642, magnitude: 6.03, spectralType: 'B' },
        { ra: 124.46, dec: 59.5711, magnitude: 5.64, spectralType: 'A' },  // 29 Lyn
        { ra: 125.1679, dec: 72.4072, magnitude: 5.98, spectralType: 'M' },
        { ra: 123.3733, dec: -35.8997, magnitude: 4.78, spectralType: 'B' },
        { ra: 123.4213, dec: -33.5692, magnitude: 6.37, spectralType: 'K' },
        { ra: 123.5458, dec: -32.1408, magnitude: 6.06, spectralType: 'B' },
        { ra: 123.4933, dec: -36.3225, magnitude: 5.08, spectralType: 'B' },
        { ra: 123.495, dec: -36.3411, magnitude: 6.11, spectralType: 'B' },
        { ra: 123.555, dec: -35.4906, magnitude: 5.78, spectralType: 'K' },
        { ra: 123.5121, dec: -40.3481, magnitude: 4.44, spectralType: 'K' },
        { ra: 123.4008, dec: -46.9919, magnitude: 5.13, spectralType: 'B' },
        { ra: 124.8221, dec: 62.5072, magnitude: 5.71, spectralType: 'G' },
        { ra: 124.5658, dec: 54.1436, magnitude: 6.27, spectralType: 'K' },
        { ra: 123.3921, dec: -50.1961, magnitude: 5.51, spectralType: 'M' },
        { ra: 124.1413, dec: 11.7264, magnitude: 7.13, spectralType: 'M' },
        { ra: 124.1288, dec: 9.1856, magnitude: 3.52, spectralType: 'K' },  // 17Bet Cnc
        { ra: 123.5996, dec: -45.8344, magnitude: 5.83, spectralType: 'B' },
        { ra: 123.9687, dec: -30.9258, magnitude: 6.21, spectralType: 'G' },
        { ra: 124.3821, dec: 8.8661, magnitude: 6.29, spectralType: 'G' },
        { ra: 123.9954, dec: -35.9028, magnitude: 6.16, spectralType: 'K' },
        { ra: 125.1088, dec: 57.7433, magnitude: 5.89, spectralType: 'F' },  // 30 Lyn
        { ra: 124.2258, dec: -21.3203, magnitude: 6.6, spectralType: 'A' },
        { ra: 123.8471, dec: -50.4494, magnitude: 6.44, spectralType: 'K' },
        { ra: 124.3462, dec: -16.285, magnitude: 6.16, spectralType: 'A' },  // 21 Pup
        { ra: 125.1213, dec: 53.5744, magnitude: 6.49, spectralType: 'F' },
        { ra: 124.5996, dec: -12.6319, magnitude: 5.98, spectralType: 'G' },
        { ra: 123.8162, dec: -62.9158, magnitude: 5.16, spectralType: 'A' },
        { ra: 124.4929, dec: -30.0033, magnitude: 6.45, spectralType: 'K' },
        { ra: 125.0163, dec: 27.2178, magnitude: 5.14, spectralType: 'F' },  // 18Chi Cnc
        { ra: 125.6838, dec: 60.6311, magnitude: 6.41, spectralType: 'K' },
        { ra: 125.0875, dec: 20.7478, magnitude: 5.83, spectralType: 'K' },
        { ra: 124.8129, dec: -10.1658, magnitude: 6.32, spectralType: 'F' },
        { ra: 124.5725, dec: -35.4517, magnitude: 5.58, spectralType: 'K' },
        { ra: 124.5525, dec: -37.3742, magnitude: 6.7, spectralType: 'A' },
        { ra: 125.1337, dec: 24.0222, magnitude: 5.98, spectralType: 'B' },  // 19Lam Cnc
        { ra: 124.9579, dec: 3.9478, magnitude: 6.05, spectralType: 'G' },
        { ra: 124.6388, dec: -36.6594, magnitude: 4.45, spectralType: 'A' },
        { ra: 125.0546, dec: -0.9094, magnitude: 6.18, spectralType: 'F' },
        { ra: 125.0713, dec: -5.3292, magnitude: 6.13, spectralType: 'K' },
        { ra: 124.8725, dec: -34.5903, magnitude: 6.43, spectralType: 'B' },
        { ra: 124.4825, dec: -59.1669, magnitude: 6.42, spectralType: 'F' },
        { ra: 125.7088, dec: 43.1881, magnitude: 4.25, spectralType: 'K' },  // 31 Lyn
        { ra: 125.1142, dec: -22.9247, magnitude: 6.13, spectralType: 'K' },
        { ra: 125.9521, dec: 53.2197, magnitude: 5.51, spectralType: 'A' },
        { ra: 125.3342, dec: -1.6022, magnitude: 6.5, spectralType: 'A' },
        { ra: 125.3383, dec: -20.0792, magnitude: 5.58, spectralType: 'G' },
        { ra: 124.5788, dec: -65.6133, magnitude: 5.07, spectralType: 'K' },
        { ra: 125.4775, dec: -17.5864, magnitude: 5.75, spectralType: 'K' },
        { ra: 125.3458, dec: -33.0544, magnitude: 4.83, spectralType: 'K' },
        { ra: 125.3375, dec: -36.4844, magnitude: 5.2, spectralType: 'B' },
        { ra: 125.8408, dec: 18.3322, magnitude: 5.95, spectralType: 'A' },  // 20 Cnc
        { ra: 125.6258, dec: -6.1792, magnitude: 6.15, spectralType: 'A' },
        { ra: 125.3508, dec: -39.6208, magnitude: 6.16, spectralType: 'A' },
        { ra: 126.1783, dec: 42.005, magnitude: 6.02, spectralType: 'K' },
        { ra: 125.725, dec: -7.5433, magnitude: 5.96, spectralType: 'M' },
        { ra: 125.695, dec: -13.0547, magnitude: 6.11, spectralType: 'G' },  // 22 Pup
        { ra: 125.98, dec: 10.6319, magnitude: 6.08, spectralType: 'M' },  // 21 Cnc
        { ra: 125.7079, dec: -26.3481, magnitude: 5.9, spectralType: 'F' },
        { ra: 126.2704, dec: 35.0114, magnitude: 6.06, spectralType: 'K' },
        { ra: 125.3, dec: -57.9731, magnitude: 5.97, spectralType: 'B' },
        { ra: 125.6317, dec: -48.4903, magnitude: 4.82, spectralType: 'B' },
        { ra: 126.1517, dec: -4.7169, magnitude: 6.01, spectralType: 'F' },
        { ra: 125.8217, dec: -38.2858, magnitude: 6.32, spectralType: 'M' },
        { ra: 126.1458, dec: -3.7511, magnitude: 5.61, spectralType: 'F' },  // 1 Hya
        { ra: 125.2821, dec: -64.1061, magnitude: 6.12, spectralType: 'G' },
        { ra: 126.4579, dec: 17.0461, magnitude: 6.14, spectralType: 'F' },  // 25 Cnc
        { ra: 125.73, dec: -52.1239, magnitude: 5.85, spectralType: 'A' },
        { ra: 124.9542, dec: -71.515, magnitude: 5.37, spectralType: 'B' },  // Kap1Vol
        { ra: 125.0029, dec: -71.5053, magnitude: 5.65, spectralType: 'A' },  // Kap2Vol
        { ra: 127.4425, dec: 67.2975, magnitude: 5.88, spectralType: 'G' },
        { ra: 126.6154, dec: 27.8936, magnitude: 5.57, spectralType: 'K' },  // 22Phi1Cnc
        { ra: 126.3979, dec: 2.1022, magnitude: 5.73, spectralType: 'K' },
        { ra: 126.4783, dec: 7.5644, magnitude: 5.13, spectralType: 'G' },
        { ra: 125.6283, dec: -59.5097, magnitude: 1.86, spectralType: 'K' },  // Eps Car
        { ra: 126.2296, dec: -23.1536, magnitude: 5.68, spectralType: 'A' },
        { ra: 126.9033, dec: 45.6531, magnitude: 6.32, spectralType: 'G' },
        { ra: 126.695, dec: 26.9344, magnitude: 6.32, spectralType: 'A' },  // 23Phi2Cnc
        { ra: 126.6958, dec: 26.9353, magnitude: 6.3, spectralType: 'A' },  // 23Phi2Cnc
        { ra: 126.6658, dec: 24.5342, magnitude: 7.02, spectralType: 'F' },  // 24 Cnc
        { ra: 126.6671, dec: 24.5353, magnitude: 7.81, spectralType: 'F' },  // 24 Cnc
        { ra: 126.415, dec: -3.9064, magnitude: 3.9, spectralType: 'A' },
        { ra: 126.2654, dec: -24.0461, magnitude: 5.28, spectralType: 'K' },
        { ra: 126.3296, dec: -21.0458, magnitude: 6.01, spectralType: 'F' },
        { ra: 126.4142, dec: -17.4394, magnitude: 6.44, spectralType: 'K' },
        { ra: 124.6317, dec: -76.9197, magnitude: 4.07, spectralType: 'F' },  // Alp Cha
        { ra: 126.6829, dec: 12.6544, magnitude: 5.5, spectralType: 'M' },  // 27 Cnc
        { ra: 126.4817, dec: -14.9297, magnitude: 5.98, spectralType: 'A' },
        { ra: 126.6133, dec: -3.9875, magnitude: 5.59, spectralType: 'A' },  // 2 Hya
        { ra: 126.2383, dec: -42.7694, magnitude: 5.98, spectralType: 'B' },
        { ra: 127.5662, dec: 60.7181, magnitude: 3.36, spectralType: 'G' },  // 1Omi UMa
        { ra: 126.6746, dec: -12.5344, magnitude: 5.54, spectralType: 'K' },
        { ra: 126.8217, dec: -6.4097, magnitude: 6.59, spectralType: 'F' },
        { ra: 126.4663, dec: -42.1533, magnitude: 5.47, spectralType: 'B' },
        { ra: 126.5733, dec: -39.0594, magnitude: 6.53, spectralType: 'B' },
        { ra: 126.5758, dec: -39.0603, magnitude: 7.25, spectralType: 'A' },
        { ra: 127.1533, dec: 24.1447, magnitude: 6.1, spectralType: 'F' },  // 28 Cnc
        { ra: 126.3792, dec: -51.7281, magnitude: 5.17, spectralType: 'B' },
        { ra: 126.7117, dec: -29.2153, magnitude: 6.73, spectralType: 'B' },
        { ra: 128.2225, dec: 69.32, magnitude: 6.31, spectralType: 'K' },
        { ra: 127.1554, dec: 14.2108, magnitude: 5.95, spectralType: 'A' },  // 29 Cnc
        { ra: 125.5183, dec: -73.4, magnitude: 5.29, spectralType: 'A' },  // Eta Vol
        { ra: 126.8887, dec: -20.8439, magnitude: 6.56, spectralType: 'A' },
        { ra: 126.8183, dec: -31.6731, magnitude: 6.33, spectralType: 'G' },
        { ra: 127.1217, dec: -2.5172, magnitude: 6.39, spectralType: 'A' },
        { ra: 127.0821, dec: -8.8161, magnitude: 6.43, spectralType: 'K' },
        { ra: 126.9729, dec: -26.1325, magnitude: 6.62, spectralType: 'A' },
        { ra: 125.1604, dec: -77.4844, magnitude: 4.35, spectralType: 'K' },  // The Cha
        { ra: 126.605, dec: -52.8075, magnitude: 6.05, spectralType: 'A' },
        { ra: 127.2121, dec: -9.7483, magnitude: 6.0, spectralType: 'F' },
        { ra: 126.9971, dec: -35.1139, magnitude: 5.75, spectralType: 'B' },
        { ra: 127.1496, dec: -23.0717, magnitude: 6.51, spectralType: 'A' },
        { ra: 127.2221, dec: -20.9503, magnitude: 6.67, spectralType: 'B' },
        { ra: 126.465, dec: -64.6008, magnitude: 5.97, spectralType: 'G' },
        { ra: 126.4342, dec: -66.1369, magnitude: 3.77, spectralType: 'K' },  // Bet Vol
        { ra: 127.8329, dec: 37.2658, magnitude: 6.18, spectralType: 'A' },
        { ra: 126.8642, dec: -55.0117, magnitude: 6.53, spectralType: 'A' },
        { ra: 126.9021, dec: -53.0886, magnitude: 5.09, spectralType: 'A' },
        { ra: 128.1396, dec: 53.1147, magnitude: 6.24, spectralType: 'K' },
        { ra: 129.2029, dec: 74.7236, magnitude: 6.31, spectralType: 'A' },
        { ra: 127.365, dec: -27.3325, magnitude: 6.7, spectralType: 'B' },
        { ra: 128.6508, dec: 65.145, magnitude: 5.47, spectralType: 'A' },  // 2 UMa
        { ra: 127.8771, dec: 24.0811, magnitude: 5.75, spectralType: 'F' },  // 30Ups1Cnc
        { ra: 127.2817, dec: -44.1606, magnitude: 5.79, spectralType: 'B' },
        { ra: 127.8988, dec: 18.0944, magnitude: 5.35, spectralType: 'K' },  // 31The Cnc
        { ra: 127.2696, dec: -47.9292, magnitude: 5.33, spectralType: 'B' },
        { ra: 127.365, dec: -44.725, magnitude: 4.99, spectralType: 'B' },
        { ra: 128.2292, dec: 38.0164, magnitude: 5.9, spectralType: 'K' },
        { ra: 127.9775, dec: 9.8144, magnitude: 6.83, spectralType: 'B' },
        { ra: 127.6192, dec: -32.1594, magnitude: 5.65, spectralType: 'K' },
        { ra: 127.44, dec: -46.3319, magnitude: 5.99, spectralType: 'B' },
        { ra: 127.6233, dec: -36.7211, magnitude: 6.69, spectralType: 'M' },
        { ra: 128.3408, dec: 36.4364, magnitude: 6.24, spectralType: 'F' },  // 32 Lyn
        { ra: 128.1771, dec: 20.4411, magnitude: 5.33, spectralType: 'K' },  // 33Eta Cnc
        { ra: 127.8788, dec: -19.5775, magnitude: 5.42, spectralType: 'A' },
        { ra: 127.4013, dec: -55.1911, magnitude: 6.36, spectralType: 'G' },
        { ra: 128.2504, dec: 24.0847, magnitude: 6.36, spectralType: 'G' },  // 32Ups2Cnc
        { ra: 126.8204, dec: -70.0933, magnitude: 5.53, spectralType: 'A' },
        { ra: 127.6633, dec: -44.7372, magnitude: 6.3, spectralType: 'B' },
        { ra: 128.1662, dec: 10.0661, magnitude: 6.46, spectralType: 'A' },  // 34 Cnc
        { ra: 127.8525, dec: -39.0642, magnitude: 6.31, spectralType: 'B' },
        { ra: 128.1387, dec: -15.0294, magnitude: 6.38, spectralType: 'F' },
        { ra: 127.795, dec: -47.8667, magnitude: 6.39, spectralType: 'B' },
        { ra: 128.4379, dec: 13.2572, magnitude: 6.28, spectralType: 'K' },
        { ra: 128.6825, dec: 36.4194, magnitude: 5.78, spectralType: 'A' },  // 33 Lyn
        { ra: 128.4313, dec: 4.7567, magnitude: 5.87, spectralType: 'G' },
        { ra: 129.9275, dec: 73.6297, magnitude: 6.15, spectralType: 'G' },
        { ra: 128.5554, dec: 8.4519, magnitude: 6.03, spectralType: 'F' },
        { ra: 128.27, dec: -24.6064, magnitude: 6.19, spectralType: 'A' },
        { ra: 127.8733, dec: -54.3942, magnitude: 6.34, spectralType: 'K' },
        { ra: 128.5067, dec: -2.1517, magnitude: 5.81, spectralType: 'A' },
        { ra: 128.2146, dec: -31.5008, magnitude: 6.38, spectralType: 'K' },
        { ra: 128.2442, dec: -34.6339, magnitude: 6.36, spectralType: 'K' },
        { ra: 128.02, dec: -53.2122, magnitude: 5.69, spectralType: 'K' },
        { ra: 128.8308, dec: 19.59, magnitude: 6.58, spectralType: 'G' },  // 35 Cnc
        { ra: 128.3329, dec: -38.3711, magnitude: 6.49, spectralType: 'B' },
        { ra: 128.4096, dec: -38.8489, magnitude: 5.96, spectralType: 'B' },
        { ra: 128.3767, dec: -46.9711, magnitude: 6.24, spectralType: 'K' },
        { ra: 129.7987, dec: 65.0208, magnitude: 5.64, spectralType: 'G' },  // 3Pi 1UMa
        { ra: 128.8538, dec: 2.7436, magnitude: 6.33, spectralType: 'G' },
        { ra: 126.0825, dec: -80.9142, magnitude: 5.69, spectralType: 'G' },
        { ra: 129.0321, dec: 15.3136, magnitude: 6.32, spectralType: 'F' },
        { ra: 128.9625, dec: 6.62, magnitude: 5.99, spectralType: 'F' },
        { ra: 128.9638, dec: 6.6225, magnitude: 7.25, spectralType: 'G' },
        { ra: 128.6321, dec: -32.5986, magnitude: 6.43, spectralType: 'G' },
        { ra: 128.8675, dec: -7.9822, magnitude: 5.72, spectralType: 'A' },  // 3 Hya
        { ra: 128.6221, dec: -37.6114, magnitude: 6.3, spectralType: 'K' },
        { ra: 129.5925, dec: 53.4014, magnitude: 5.66, spectralType: 'G' },
        { ra: 129.7925, dec: 59.9394, magnitude: 6.48, spectralType: 'A' },
        { ra: 128.87, dec: -26.8436, magnitude: 5.96, spectralType: 'A' },
        { ra: 130.0533, dec: 64.3278, magnitude: 4.6, spectralType: 'K' },  // 4Pi 2UMa
        { ra: 128.8025, dec: -39.97, magnitude: 6.47, spectralType: 'G' },
        { ra: 129.75, dec: 52.925, magnitude: 6.42, spectralType: 'K' },
        { ra: 129.2742, dec: 9.6556, magnitude: 5.88, spectralType: 'A' },  // 36 Cnc
        { ra: 128.6817, dec: -49.9442, magnitude: 5.01, spectralType: 'K' },
        { ra: 129.8233, dec: 52.7117, magnitude: 5.91, spectralType: 'K' },
        { ra: 129.5792, dec: 32.8019, magnitude: 5.94, spectralType: 'K' },
        { ra: 129.4142, dec: 5.7036, magnitude: 4.16, spectralType: 'A' },  // 4Del Hya
        { ra: 129.3629, dec: -4.9336, magnitude: 6.19, spectralType: 'K' },
        { ra: 129.5217, dec: 9.5747, magnitude: 6.53, spectralType: 'A' },  // 37 Cnc
        { ra: 128.9671, dec: -50.97, magnitude: 5.8, spectralType: 'B' },
        { ra: 128.8317, dec: -58.0092, magnitude: 4.86, spectralType: 'K' },
        { ra: 128.8142, dec: -58.225, magnitude: 5.26, spectralType: 'B' },
        { ra: 129.5846, dec: -6.6625, magnitude: 6.51, spectralType: 'A' },
        { ra: 128.1758, dec: -73.3567, magnitude: 6.12, spectralType: 'G' },
        { ra: 129.6892, dec: 3.3414, magnitude: 4.44, spectralType: 'K' },  // 5Sig Hya
        { ra: 129.3738, dec: -33.7458, magnitude: 6.48, spectralType: 'F' },
        { ra: 129.4675, dec: -26.255, magnitude: 5.27, spectralType: 'A' },  // Eta Pyx
        { ra: 129.3329, dec: -40.1475, magnitude: 6.55, spectralType: 'G' },
        { ra: 130.2546, dec: 45.8339, magnitude: 5.37, spectralType: 'G' },  // 34 Lyn
        { ra: 130.0762, dec: 31.9419, magnitude: 6.1, spectralType: 'F' },
        { ra: 129.8525, dec: 8.0172, magnitude: 6.45, spectralType: 'K' },
        { ra: 129.6679, dec: -19.7369, magnitude: 6.33, spectralType: 'K' },
        { ra: 129.4112, dec: -42.9892, magnitude: 4.14, spectralType: 'A' },
        { ra: 130.0267, dec: 20.0078, magnitude: 6.39, spectralType: 'G' },  // 39 Cnc
        { ra: 130.0921, dec: 19.67, magnitude: 6.44, spectralType: 'G' },
        { ra: 130.1125, dec: 19.545, magnitude: 6.3, spectralType: 'A' },  // 41Eps Cnc
        { ra: 129.7833, dec: -22.6619, magnitude: 5.05, spectralType: 'G' },
        { ra: 130.0062, dec: -12.4753, magnitude: 4.98, spectralType: 'K' },  // 6 Hya
        { ra: 129.3283, dec: -62.8536, magnitude: 5.47, spectralType: 'K' },
        { ra: 129.9271, dec: -29.5611, magnitude: 4.89, spectralType: 'G' },  // Zet Pyx
        { ra: 129.8421, dec: -36.6069, magnitude: 6.13, spectralType: 'F' },
        { ra: 129.6871, dec: -53.0906, magnitude: 6.47, spectralType: 'B' },
        { ra: 130.7508, dec: 46.9011, magnitude: 6.22, spectralType: 'G' },
        { ra: 130.2567, dec: -9.0519, magnitude: 6.63, spectralType: 'A' },
        { ra: 130.0258, dec: -35.3083, magnitude: 3.97, spectralType: 'G' },  // Bet Pyx
        { ra: 130.0804, dec: -40.2642, magnitude: 5.2, spectralType: 'B' },
        { ra: 129.8492, dec: -53.4397, magnitude: 5.48, spectralType: 'B' },
        { ra: 130.4304, dec: -15.9433, magnitude: 4.88, spectralType: 'G' },  // 9 Hya
        { ra: 129.99, dec: -53.055, magnitude: 5.19, spectralType: 'B' },
        { ra: 129.805, dec: -60.3172, magnitude: 6.36, spectralType: 'A' },
        { ra: 130.1471, dec: -45.1914, magnitude: 5.71, spectralType: 'M' },
        { ra: 130.1567, dec: -46.6489, magnitude: 3.84, spectralType: 'F' },
        { ra: 130.5408, dec: -11.9661, magnitude: 6.45, spectralType: 'A' },
        { ra: 130.0733, dec: -52.9219, magnitude: 3.62, spectralType: 'B' },
        { ra: 130.0725, dec: -53.0153, magnitude: 5.61, spectralType: 'B' },
        { ra: 130.8212, dec: 21.4686, magnitude: 4.66, spectralType: 'A' },  // 43Gam Cnc
        { ra: 130.8013, dec: 12.6808, magnitude: 5.64, spectralType: 'A' },  // 45 Cnc
        { ra: 131.0421, dec: 36.9181, magnitude: 6.33, spectralType: 'F' },
        { ra: 130.3046, dec: -47.3169, magnitude: 4.77, spectralType: 'A' },
        { ra: 130.2721, dec: -48.9225, magnitude: 5.9, spectralType: 'B' },
        { ra: 130.8063, dec: 3.3986, magnitude: 4.3, spectralType: 'B' },  // 7Eta Hya
        { ra: 130.1817, dec: -57.5453, magnitude: 6.34, spectralType: 'A' },
        { ra: 130.4871, dec: -45.4108, magnitude: 5.23, spectralType: 'B' },
        { ra: 130.1542, dec: -59.7611, magnitude: 4.33, spectralType: 'B' },
        { ra: 130.9988, dec: 4.3347, magnitude: 6.37, spectralType: 'B' },
        { ra: 130.9183, dec: -7.2336, magnitude: 4.62, spectralType: 'G' },
        { ra: 129.7717, dec: -70.3869, magnitude: 5.2, spectralType: 'A' },  // The Vol
        { ra: 131.1712, dec: 18.1542, magnitude: 3.94, spectralType: 'K' },  // 47Del Cnc
        { ra: 130.5667, dec: -48.0992, magnitude: 5.51, spectralType: 'B' },
        { ra: 130.7375, dec: -35.9433, magnitude: 6.42, spectralType: 'A' },
        { ra: 131.3392, dec: 30.6978, magnitude: 6.13, spectralType: 'G' },  // 46 Cnc
        { ra: 131.1875, dec: 10.0817, magnitude: 5.66, spectralType: 'A' },  // 49 Cnc
        { ra: 130.5787, dec: -53.1, magnitude: 5.52, spectralType: 'B' },
        { ra: 130.6062, dec: -53.1139, magnitude: 4.86, spectralType: 'B' },
        { ra: 130.8979, dec: -33.1864, magnitude: 3.68, spectralType: 'B' },  // Alp Pyx
        { ra: 131.2554, dec: 5.6806, magnitude: 6.13, spectralType: 'A' },  // 10 Hya
        { ra: 132.2058, dec: 66.7081, magnitude: 6.2, spectralType: 'B' },
        { ra: 130.5871, dec: -55.7742, magnitude: 6.29, spectralType: 'K' },
        { ra: 131.3367, dec: -2.6008, magnitude: 6.41, spectralType: 'F' },
        { ra: 131.23, dec: -21.1678, magnitude: 6.11, spectralType: 'A' },
        { ra: 131.6667, dec: 28.7653, magnitude: 6.57, spectralType: 'A' },  // 48Iot Cnc
        { ra: 131.6742, dec: 28.76, magnitude: 4.02, spectralType: 'G' },  // 48Iot Cnc
        { ra: 130.9179, dec: -49.8228, magnitude: 5.16, spectralType: 'B' },
        { ra: 131.1, dec: -42.6492, magnitude: 4.07, spectralType: 'G' },
        { ra: 131.5104, dec: -2.0489, magnitude: 5.7, spectralType: 'K' },
        { ra: 131.2163, dec: -37.1472, magnitude: 5.76, spectralType: 'B' },
        { ra: 131.5288, dec: -11.0064, magnitude: 6.25, spectralType: 'K' },
        { ra: 131.7333, dec: 12.11, magnitude: 5.87, spectralType: 'A' },  // 50 Cnc
        { ra: 131.6942, dec: 6.4189, magnitude: 3.38, spectralType: 'G' },  // 11Eps Hya
        { ra: 131.4554, dec: -25.3875, magnitude: 6.1, spectralType: 'A' },
        { ra: 131.5938, dec: -13.5478, magnitude: 4.32, spectralType: 'G' },  // 12 Hya
        { ra: 131.1758, dec: -54.7083, magnitude: 1.96, spectralType: 'A' },  // Del Vel
        { ra: 131.8125, dec: -1.8972, magnitude: 5.29, spectralType: 'A' },
        { ra: 131.5071, dec: -46.0417, magnitude: 3.91, spectralType: 'A' },
        { ra: 131.5992, dec: -41.1256, magnitude: 6.21, spectralType: 'B' },
        { ra: 131.2721, dec: -58.725, magnitude: 6.21, spectralType: 'B' },
        { ra: 131.705, dec: -34.6228, magnitude: 6.37, spectralType: 'B' },
        { ra: 130.9762, dec: -68.2117, magnitude: 6.32, spectralType: 'K' },
        { ra: 132.1083, dec: 5.8378, magnitude: 4.36, spectralType: 'A' },  // 13Rho Hya
        { ra: 132.0204, dec: -6.5586, magnitude: 6.09, spectralType: 'K' },
        { ra: 131.6275, dec: -45.9128, magnitude: 5.46, spectralType: 'B' },
        { ra: 131.125, dec: -65.8256, magnitude: 6.05, spectralType: 'A' },
        { ra: 131.8288, dec: -46.1556, magnitude: 5.75, spectralType: 'F' },
        { ra: 131.9188, dec: -41.7372, magnitude: 6.36, spectralType: 'G' },
        { ra: 131.6771, dec: -56.7697, magnitude: 4.49, spectralType: 'B' },
        { ra: 132.6342, dec: 33.2853, magnitude: 6.25, spectralType: 'F' },
        { ra: 132.3404, dec: -3.4431, magnitude: 5.31, spectralType: 'B' },  // 14 Hya
        { ra: 132.0367, dec: -42.4639, magnitude: 6.43, spectralType: 'B' },
        { ra: 130.3313, dec: -78.9633, magnitude: 5.47, spectralType: 'B' },  // Eta Cha
        { ra: 132.0008, dec: -52.8506, magnitude: 6.3, spectralType: 'B' },
        { ra: 132.6879, dec: 18.8322, magnitude: 6.16, spectralType: 'A' },
        { ra: 133.3442, dec: 61.9622, magnitude: 5.73, spectralType: 'F' },  // 5 UMa
        { ra: 133.2746, dec: 59.0561, magnitude: 6.25, spectralType: 'F' },
        { ra: 132.4371, dec: -21.0486, magnitude: 6.47, spectralType: 'A' },
        { ra: 132.9867, dec: 43.7267, magnitude: 5.15, spectralType: 'K' },  // 35 Lyn
        { ra: 133.0483, dec: 45.3125, magnitude: 5.99, spectralType: 'K' },
        { ra: 132.7562, dec: 15.3506, magnitude: 6.38, spectralType: 'G' },  // 54 Cnc
        { ra: 133.0417, dec: 42.0025, magnitude: 5.99, spectralType: 'K' },
        { ra: 132.4646, dec: -32.7806, magnitude: 5.21, spectralType: 'G' },
        { ra: 132.5092, dec: -29.4631, magnitude: 5.87, spectralType: 'G' },
        { ra: 132.4133, dec: -40.3206, magnitude: 5.48, spectralType: 'A' },
        { ra: 132.59, dec: -28.6181, magnitude: 6.17, spectralType: 'B' },
        { ra: 132.4683, dec: -39.1417, magnitude: 6.39, spectralType: 'A' },
        { ra: 132.6329, dec: -27.71, magnitude: 4.01, spectralType: 'K' },  // Gam Pyx
        { ra: 133.1442, dec: 32.4742, magnitude: 5.66, spectralType: 'A' },  // 51Sig1Cnc
        { ra: 132.4487, dec: -45.3081, magnitude: 4.93, spectralType: 'A' },
        { ra: 133.1192, dec: 28.2592, magnitude: 6.23, spectralType: 'M' },  // 53 Cnc
        { ra: 133.1492, dec: 28.3308, magnitude: 5.95, spectralType: 'G' },  // 55Rho1Cnc
        { ra: 132.8938, dec: -7.1772, magnitude: 5.54, spectralType: 'A' },  // 15 Hya
        { ra: 130.8017, dec: -79.0697, magnitude: 6.05, spectralType: 'A' },
        { ra: 132.5875, dec: -42.09, magnitude: 6.0, spectralType: 'B' },
        { ra: 133.1008, dec: 5.34, magnitude: 6.33, spectralType: 'A' },
        { ra: 132.6396, dec: -46.5292, magnitude: 5.1, spectralType: 'B' },
        { ra: 133.4821, dec: 35.5383, magnitude: 6.14, spectralType: 'A' },
        { ra: 133.1279, dec: -13.2336, magnitude: 6.13, spectralType: 'K' },
        { ra: 132.8662, dec: -42.5044, magnitude: 6.55, spectralType: 'A' },
        { ra: 134.1562, dec: 64.6039, magnitude: 5.58, spectralType: 'G' },  // 6 UMa
        { ra: 133.5613, dec: 30.5794, magnitude: 5.39, spectralType: 'G' },  // 57 Cnc
        { ra: 133.1088, dec: -32.5092, magnitude: 6.5, spectralType: 'K' },
        { ra: 133.1608, dec: -36.5456, magnitude: 6.42, spectralType: 'G' },
        { ra: 133.2, dec: -38.7242, magnitude: 5.82, spectralType: 'M' },
        { ra: 132.9025, dec: -57.6336, magnitude: 5.59, spectralType: 'B' },
        { ra: 132.645, dec: -66.7931, magnitude: 5.35, spectralType: 'F' },
        { ra: 133.5746, dec: -5.4344, magnitude: 6.0, spectralType: 'G' },
        { ra: 133.1608, dec: -48.3592, magnitude: 5.91, spectralType: 'B' },
        { ra: 133.9154, dec: 27.9275, magnitude: 5.22, spectralType: 'G' },  // 58Rho2Cnc
        { ra: 133.8454, dec: 17.2314, magnitude: 6.64, spectralType: 'G' },
        { ra: 133.17, dec: -52.1292, magnitude: 6.39, spectralType: 'A' },
        { ra: 131.48, dec: -79.5044, magnitude: 5.79, spectralType: 'K' },
        { ra: 132.4596, dec: -72.5508, magnitude: 6.11, spectralType: 'A' },
        { ra: 134.2083, dec: 45.6319, magnitude: 5.74, spectralType: 'K' },
        { ra: 134.1271, dec: 40.2017, magnitude: 5.89, spectralType: 'F' },
        { ra: 133.8483, dec: 5.9456, magnitude: 3.11, spectralType: 'G' },  // 16Zet Hya
        { ra: 133.4613, dec: -40.4475, magnitude: 6.47, spectralType: 'K' },
        { ra: 133.2658, dec: -56.6494, magnitude: 6.03, spectralType: 'A' },
        { ra: 133.9817, dec: 11.6261, magnitude: 5.41, spectralType: 'K' },  // 60 Cnc
        { ra: 133.4613, dec: -47.5208, magnitude: 5.33, spectralType: 'A' },
        { ra: 133.8729, dec: -7.9703, magnitude: 6.91, spectralType: 'A' },  // 17 Hya
        { ra: 133.8733, dec: -7.9711, magnitude: 6.67, spectralType: 'A' },  // 17 Hya
        { ra: 133.8017, dec: -18.2414, magnitude: 5.75, spectralType: 'K' },
        { ra: 134.2358, dec: 32.9103, magnitude: 5.45, spectralType: 'A' },  // 59Sig2Cnc
        { ra: 133.8812, dec: -27.6819, magnitude: 4.89, spectralType: 'A' },  // Del Pyx
        { ra: 134.1538, dec: 4.2367, magnitude: 6.14, spectralType: 'G' },
        { ra: 134.2842, dec: 17.1439, magnitude: 6.17, spectralType: 'K' },
        { ra: 133.9829, dec: -23.8183, magnitude: 6.39, spectralType: 'A' },
        { ra: 133.4529, dec: -60.3542, magnitude: 5.78, spectralType: 'B' },
        { ra: 134.3121, dec: 15.3228, magnitude: 5.2, spectralType: 'A' },  // 62Omi1Cnc
        { ra: 133.8304, dec: -45.0417, magnitude: 6.26, spectralType: 'B' },
        { ra: 134.4946, dec: 30.2336, magnitude: 6.29, spectralType: 'F' },  // 61 Cnc
        { ra: 134.1421, dec: -16.7094, magnitude: 5.96, spectralType: 'K' },
        { ra: 134.3967, dec: 15.5814, magnitude: 5.67, spectralType: 'F' },  // 63Omi2Cnc
        { ra: 134.6146, dec: 35.8025, magnitude: 6.51, spectralType: 'A' },
        { ra: 134.425, dec: 9.3878, magnitude: 6.19, spectralType: 'G' },
        { ra: 133.725, dec: -58.24, magnitude: 6.38, spectralType: 'B' },
        { ra: 134.8017, dec: 48.0417, magnitude: 3.14, spectralType: 'A' },  // 9Iot UMa
        { ra: 133.7996, dec: -54.9656, magnitude: 5.71, spectralType: 'F' },
        { ra: 133.7617, dec: -60.6447, magnitude: 3.84, spectralType: 'B' },
        { ra: 134.6217, dec: 11.8578, magnitude: 4.25, spectralType: 'A' },  // 65Alp Cnc
        { ra: 134.5342, dec: 1.5417, magnitude: 6.59, spectralType: 'A' },
        { ra: 134.0808, dec: -52.7236, magnitude: 4.69, spectralType: 'B' },
        { ra: 134.8858, dec: 32.4186, magnitude: 5.2, spectralType: 'G' },  // 64Sig3Cnc
        { ra: 135.6362, dec: 67.6297, magnitude: 4.76, spectralType: 'M' },  // 8Rho UMa
        { ra: 134.795, dec: 18.1347, magnitude: 6.38, spectralType: 'M' },
        { ra: 134.6829, dec: -16.1328, magnitude: 5.86, spectralType: 'F' },
        { ra: 135.16, dec: 41.7828, magnitude: 3.97, spectralType: 'F' },
        { ra: 135.1283, dec: 37.6044, magnitude: 6.44, spectralType: 'K' },
        { ra: 138.8383, dec: 84.1811, magnitude: 6.33, spectralType: 'F' },
        { ra: 134.2433, dec: -59.2294, magnitude: 4.92, spectralType: 'B' },
        { ra: 134.4825, dec: -48.5733, magnitude: 5.87, spectralType: 'G' },
        { ra: 134.9162, dec: -19.2081, magnitude: 6.18, spectralType: 'F' },
        { ra: 134.8154, dec: -28.8061, magnitude: 6.25, spectralType: 'G' },
        { ra: 135.4192, dec: 39.7133, magnitude: 6.36, spectralType: 'A' },
        { ra: 135.3504, dec: 32.2525, magnitude: 5.82, spectralType: 'A' },  // 66 Cnc
        { ra: 134.7179, dec: -47.2347, magnitude: 5.18, spectralType: 'A' },
        { ra: 135.4538, dec: 27.9028, magnitude: 6.07, spectralType: 'A' },  // 67 Cnc
        { ra: 135.3808, dec: 5.6408, magnitude: 6.07, spectralType: 'K' },
        { ra: 135.0225, dec: -41.2539, magnitude: 4.45, spectralType: 'G' },
        { ra: 136.0017, dec: 54.2839, magnitude: 5.75, spectralType: 'A' },
        { ra: 135.0925, dec: -43.1733, magnitude: 6.07, spectralType: 'B' },
        { ra: 135.9062, dec: 47.1567, magnitude: 3.6, spectralType: 'A' },  // 12Kap UMa
        { ra: 135.6846, dec: 24.4528, magnitude: 5.45, spectralType: 'A' },  // 69Nu Cnc
        { ra: 135.4917, dec: -0.4828, magnitude: 5.67, spectralType: 'K' },
        { ra: 135.2975, dec: -26.6639, magnitude: 6.2, spectralType: 'K' },
        { ra: 134.8504, dec: -59.0836, magnitude: 5.16, spectralType: 'F' },
        { ra: 135.6867, dec: 7.2981, magnitude: 5.85, spectralType: 'K' },
        { ra: 135.3367, dec: -41.8644, magnitude: 5.55, spectralType: 'B' },
        { ra: 136.0413, dec: 27.8983, magnitude: 6.38, spectralType: 'A' },  // 70 Cnc
        { ra: 135.5267, dec: -39.4025, magnitude: 6.27, spectralType: 'K' },
        { ra: 136.3504, dec: 48.5303, magnitude: 5.95, spectralType: 'F' },
        { ra: 135.1904, dec: -60.9639, magnitude: 5.79, spectralType: 'G' },
        { ra: 135.4358, dec: -52.1883, magnitude: 5.23, spectralType: 'B' },
        { ra: 136.23, dec: 32.3769, magnitude: 6.46, spectralType: 'A' },
        { ra: 135.7867, dec: -25.5044, magnitude: 6.74, spectralType: 'B' },
        { ra: 136.6796, dec: 59.3444, magnitude: 6.45, spectralType: 'A' },
        { ra: 137.0983, dec: 66.8733, magnitude: 5.14, spectralType: 'K' },  // 11Sig1UMa
        { ra: 135.2854, dec: -68.6839, magnitude: 5.88, spectralType: 'M' },
        { ra: 135.7717, dec: -53.5497, magnitude: 6.4, spectralType: 'B' },
        { ra: 136.6325, dec: 38.4522, magnitude: 4.56, spectralType: 'G' },
        { ra: 136.4933, dec: 5.0922, magnitude: 4.97, spectralType: 'K' },  // 18Ome Hya
        { ra: 136.0387, dec: -47.0978, magnitude: 3.75, spectralType: 'K' },
        { ra: 135.6117, dec: -66.3961, magnitude: 4.0, spectralType: 'A' },  // Alp Vol
        { ra: 137.5967, dec: 67.1347, magnitude: 4.8, spectralType: 'F' },  // 13Sig2UMa
        { ra: 136.8621, dec: 22.9811, magnitude: 6.4, spectralType: 'F' },
        { ra: 136.7496, dec: 1.4628, magnitude: 6.17, spectralType: 'M' },
        { ra: 137.2179, dec: 51.6047, magnitude: 4.48, spectralType: 'F' },  // 15 UMa
        { ra: 137.0171, dec: 32.5406, magnitude: 6.5, spectralType: 'F' },
        { ra: 137.0004, dec: 29.6542, magnitude: 5.43, spectralType: 'G' },  // 72Tau Cnc
        { ra: 136.2, dec: -57.8525, magnitude: 6.44, spectralType: 'A' },
        { ra: 136.9367, dec: 10.6681, magnitude: 5.24, spectralType: 'B' },  // 76Kap Cnc
        { ra: 137.7296, dec: 63.5136, magnitude: 4.67, spectralType: 'F' },  // 14Tau UMa
        { ra: 137.2129, dec: 33.8822, magnitude: 5.93, spectralType: 'F' },
        { ra: 137.1971, dec: 26.6292, magnitude: 5.98, spectralType: 'G' },  // 75 Cnc
        { ra: 137.3396, dec: 22.0456, magnitude: 5.14, spectralType: 'G' },  // 77Xi Cnc
        { ra: 137.0121, dec: -25.8583, magnitude: 4.58, spectralType: 'K' },  // Kap Pyx
        { ra: 136.6417, dec: -55.8033, magnitude: 6.11, spectralType: 'B' },
        { ra: 137.1758, dec: -8.5894, magnitude: 5.6, spectralType: 'B' },  // 19 Hya
        { ra: 136.8113, dec: -51.2119, magnitude: 6.73, spectralType: 'K' },
        { ra: 136.5317, dec: -64.4997, magnitude: 6.37, spectralType: 'K' },
        { ra: 138.5133, dec: 71.6558, magnitude: 6.55, spectralType: 'G' },
        { ra: 136.9992, dec: -43.4325, magnitude: 2.21, spectralType: 'K' },  // Lam Vel
        { ra: 137.4433, dec: 11.5644, magnitude: 6.48, spectralType: 'F' },
        { ra: 137.2979, dec: -12.3578, magnitude: 5.77, spectralType: 'G' },
        { ra: 137.1812, dec: -26.7678, magnitude: 6.15, spectralType: 'A' },
        { ra: 137.2679, dec: -18.3286, magnitude: 5.73, spectralType: 'A' },
        { ra: 137.6612, dec: 30.9631, magnitude: 5.95, spectralType: 'M' },
        { ra: 137.5871, dec: 21.9964, magnitude: 6.01, spectralType: 'G' },  // 79 Cnc
        { ra: 137.3979, dec: -8.7878, magnitude: 5.46, spectralType: 'G' },  // 20 Hya
        { ra: 136.4096, dec: -70.5389, magnitude: 4.71, spectralType: 'B' },
        { ra: 136.2867, dec: -72.6028, magnitude: 4.48, spectralType: 'F' },
        { ra: 137.485, dec: -30.3653, magnitude: 5.59, spectralType: 'A' },  // Eps Pyx
        { ra: 138.9692, dec: 72.9461, magnitude: 5.96, spectralType: 'F' },
        { ra: 137.5958, dec: -23.1767, magnitude: 6.53, spectralType: 'A' },
        { ra: 137.4379, dec: -49.4247, magnitude: 6.48, spectralType: 'A' },
        { ra: 138.5858, dec: 61.4233, magnitude: 5.13, spectralType: 'F' },  // 16 UMa
        { ra: 137.9817, dec: 5.4683, magnitude: 6.35, spectralType: 'A' },
        { ra: 138.0733, dec: 14.9961, magnitude: 6.51, spectralType: 'G' },  // 81Pi 1Cnc
        { ra: 138.0537, dec: 3.8672, magnitude: 6.14, spectralType: 'A' },
        { ra: 138.4508, dec: 43.2178, magnitude: 5.32, spectralType: 'B' },  // 36 Lyn
        { ra: 137.9946, dec: -19.7478, magnitude: 5.73, spectralType: 'G' },
        { ra: 137.7683, dec: -44.8681, magnitude: 5.0, spectralType: 'B' },
        { ra: 138.1083, dec: -7.1097, magnitude: 6.11, spectralType: 'A' },  // 21 Hya
        { ra: 137.9208, dec: -39.2589, magnitude: 6.0, spectralType: 'B' },
        { ra: 138.4054, dec: 21.2833, magnitude: 6.48, spectralType: 'A' },
        { ra: 137.8883, dec: -46.5839, magnitude: 5.79, spectralType: 'B' },
        { ra: 137.7417, dec: -58.9669, magnitude: 3.44, spectralType: 'B' },
        { ra: 138.9579, dec: 56.7414, magnitude: 5.27, spectralType: 'K' },  // 17 UMa
        { ra: 138.1275, dec: -43.6136, magnitude: 5.57, spectralType: 'B' },
        { ra: 139.0471, dec: 54.0219, magnitude: 4.83, spectralType: 'A' },  // 18 UMa
        { ra: 137.8192, dec: -62.3172, magnitude: 3.97, spectralType: 'B' },
        { ra: 138.8096, dec: 34.6336, magnitude: 5.97, spectralType: 'G' },
        { ra: 138.5912, dec: 2.3142, magnitude: 3.88, spectralType: 'B' },  // 22The Hya
        { ra: 139.9825, dec: 74.0164, magnitude: 6.5, spectralType: 'G' },
        { ra: 138.3579, dec: -38.6164, magnitude: 6.31, spectralType: 'A' },
        { ra: 138.3275, dec: -42.2736, magnitude: 6.29, spectralType: 'K' },
        { ra: 138.8075, dec: 14.9414, magnitude: 5.34, spectralType: 'K' },  // 82Pi 2Cnc
        { ra: 138.3938, dec: -47.3386, magnitude: 5.92, spectralType: 'B' },
        { ra: 138.5342, dec: -44.1458, magnitude: 5.85, spectralType: 'B' },
        { ra: 138.2317, dec: -59.4144, magnitude: 5.54, spectralType: 'G' },
        { ra: 138.6021, dec: -43.2275, magnitude: 5.25, spectralType: 'B' },
        { ra: 138.8538, dec: -15.0247, magnitude: 6.35, spectralType: 'A' },
        { ra: 139.38, dec: 46.8172, magnitude: 5.97, spectralType: 'A' },
        { ra: 138.7383, dec: -37.6025, magnitude: 5.86, spectralType: 'G' },
        { ra: 134.1713, dec: -85.6631, magnitude: 5.42, spectralType: 'A' },  // Zet Oct
        { ra: 138.575, dec: -55.5697, magnitude: 5.27, spectralType: 'G' },
        { ra: 138.8108, dec: -45.5556, magnitude: 6.25, spectralType: 'B' },
        { ra: 139.1738, dec: -6.3531, magnitude: 5.24, spectralType: 'K' },  // 23 Hya
        { ra: 138.9029, dec: -38.57, magnitude: 4.94, spectralType: 'K' },
        { ra: 139.1721, dec: -8.7447, magnitude: 5.47, spectralType: 'B' },  // 24 Hya
        { ra: 138.9379, dec: -37.4133, magnitude: 4.62, spectralType: 'F' },
        { ra: 138.3, dec: -69.7172, magnitude: 1.68, spectralType: 'A' },  // Bet Car
        { ra: 139.6083, dec: 35.3642, magnitude: 5.75, spectralType: 'A' },
        { ra: 139.2812, dec: -14.5736, magnitude: 5.84, spectralType: 'K' },
        { ra: 139.0175, dec: -44.8986, magnitude: 6.04, spectralType: 'A' },
        { ra: 139.4642, dec: 11.5011, magnitude: 6.41, spectralType: 'A' },
        { ra: 139.7113, dec: 36.8025, magnitude: 3.82, spectralType: 'A' },  // 38 Lyn
        { ra: 138.8229, dec: -58.3886, magnitude: 6.02, spectralType: 'B' },
        { ra: 139.0962, dec: -44.2658, magnitude: 5.12, spectralType: 'K' },
        { ra: 138.8958, dec: -57.5781, magnitude: 6.32, spectralType: 'G' },
        { ra: 139.2383, dec: -39.4014, magnitude: 5.33, spectralType: 'K' },
        { ra: 138.0512, dec: -76.6631, magnitude: 6.14, spectralType: 'K' },
        { ra: 139.0508, dec: -57.5414, magnitude: 4.34, spectralType: 'M' },
        { ra: 140.1825, dec: 51.2661, magnitude: 6.13, spectralType: 'F' },
        { ra: 140.4304, dec: 56.6992, magnitude: 5.47, spectralType: 'M' },
        { ra: 139.2725, dec: -59.2753, magnitude: 2.25, spectralType: 'A' },  // Iot Car
        { ra: 139.4262, dec: -54.4953, magnitude: 6.33, spectralType: 'K' },
        { ra: 140.2471, dec: 38.1883, magnitude: 6.12, spectralType: 'F' },
        { ra: 139.8904, dec: -11.3142, magnitude: 6.62, spectralType: 'A' },
        { ra: 139.5242, dec: -51.0511, magnitude: 5.26, spectralType: 'B' },
        { ra: 139.8883, dec: -15.8344, magnitude: 5.78, spectralType: 'K' },
        { ra: 140.2637, dec: 34.3925, magnitude: 3.13, spectralType: 'K' },  // 40Alp Lyn
        { ra: 139.9433, dec: -11.975, magnitude: 4.79, spectralType: 'G' },  // 26 Hya
        { ra: 140.3633, dec: 32.9019, magnitude: 6.16, spectralType: 'K' },
        { ra: 139.6758, dec: -51.5606, magnitude: 5.87, spectralType: 'B' },
        { ra: 140.1208, dec: -9.5558, magnitude: 4.8, spectralType: 'G' },  // 27 Hya
        { ra: 139.9496, dec: -34.1033, magnitude: 6.39, spectralType: 'B' },
        { ra: 140.3142, dec: 15.3711, magnitude: 6.53, spectralType: 'A' },
        { ra: 139.3217, dec: -68.6894, magnitude: 5.39, spectralType: 'F' },
        { ra: 139.4654, dec: -67.0508, magnitude: 6.11, spectralType: 'K' },
        { ra: 140.2313, dec: -15.6178, magnitude: 6.33, spectralType: 'F' },
        { ra: 140.1842, dec: -31.7606, magnitude: 6.82, spectralType: 'B' },
        { ra: 140.1233, dec: -37.5814, magnitude: 6.05, spectralType: 'K' },
        { ra: 139.8858, dec: -55.1867, magnitude: 6.28, spectralType: 'B' },
        { ra: 140.3733, dec: -25.9656, magnitude: 4.72, spectralType: 'M' },  // The Pyx
        { ra: 141.965, dec: 75.0983, magnitude: 6.29, spectralType: 'A' },
        { ra: 139.3558, dec: -74.8944, magnitude: 5.29, spectralType: 'A' },
        { ra: 139.3642, dec: -74.7347, magnitude: 5.86, spectralType: 'A' },
        { ra: 141.4342, dec: 63.9408, magnitude: 6.28, spectralType: 'K' },
        { ra: 140.8825, dec: 25.1831, magnitude: 6.41, spectralType: 'G' },
        { ra: 140.7121, dec: -9.8389, magnitude: 6.53, spectralType: 'A' },
        { ra: 141.2321, dec: 51.5739, magnitude: 6.31, spectralType: 'G' },
        { ra: 140.4621, dec: -42.195, magnitude: 5.58, spectralType: 'M' },
        { ra: 141.0938, dec: 36.5869, magnitude: 6.67, spectralType: 'F' },
        { ra: 140.2367, dec: -62.4047, magnitude: 4.81, spectralType: 'G' },
        { ra: 140.6529, dec: -39.7747, magnitude: 6.54, spectralType: 'K' },
        { ra: 140.6, dec: -46.0475, magnitude: 5.75, spectralType: 'G' },
        { ra: 141.1637, dec: 26.1822, magnitude: 4.46, spectralType: 'K' },  // 1Kap Leo
        { ra: 140.4583, dec: -55.515, magnitude: 5.63, spectralType: 'A' },
        { ra: 140.8012, dec: -28.8339, magnitude: 4.69, spectralType: 'G' },  // Lam Pyx
        { ra: 140.5283, dec: -55.0108, magnitude: 2.5, spectralType: 'B' },  // Kap Vel
        { ra: 140.9367, dec: -37.7572, magnitude: 6.48, spectralType: 'A' },
        { ra: 141.3854, dec: 16.5856, magnitude: 6.29, spectralType: 'G' },
        { ra: 141.0679, dec: -39.4258, magnitude: 6.06, spectralType: 'A' },
        { ra: 141.35, dec: -5.1175, magnitude: 5.59, spectralType: 'K' },  // 28 Hya
        { ra: 140.9979, dec: -51.7372, magnitude: 6.08, spectralType: 'A' },
        { ra: 140.8642, dec: -60.3025, magnitude: 6.3, spectralType: 'K' },
        { ra: 141.5929, dec: -1.4639, magnitude: 6.01, spectralType: 'K' },
        { ra: 141.0238, dec: -61.6489, magnitude: 5.99, spectralType: 'K' },
        { ra: 142.1667, dec: 45.6014, magnitude: 5.41, spectralType: 'K' },
        { ra: 141.8108, dec: -9.2236, magnitude: 6.54, spectralType: 'A' },  // 29 Hya
        { ra: 141.6867, dec: -28.7875, magnitude: 6.1, spectralType: 'B' },
        { ra: 141.6188, dec: -40.5019, magnitude: 6.2, spectralType: 'A' },
        { ra: 142.4483, dec: 55.7456, magnitude: 6.45, spectralType: 'F' },
        { ra: 141.8967, dec: -8.6586, magnitude: 1.98, spectralType: 'K' },  // 30Alp Hya
        { ra: 141.8267, dec: -22.3439, magnitude: 4.69, spectralType: 'K' },
        { ra: 141.945, dec: -6.0711, magnitude: 5.38, spectralType: 'G' },
        { ra: 144.2717, dec: 81.3264, magnitude: 4.29, spectralType: 'K' },
        { ra: 141.3629, dec: -61.9503, magnitude: 5.77, spectralType: 'A' },
        { ra: 141.5754, dec: -53.3792, magnitude: 5.11, spectralType: 'B' },
        { ra: 142.1146, dec: 9.0567, magnitude: 5.41, spectralType: 'F' },  // 2Ome Leo
        { ra: 142.1217, dec: 8.1883, magnitude: 5.71, spectralType: 'K' },  // 3 Leo
        { ra: 141.91, dec: -35.0078, magnitude: 6.65, spectralType: 'A' },
        { ra: 142.8821, dec: 63.0619, magnitude: 3.67, spectralType: 'F' },  // 23 UMa
        { ra: 142.2592, dec: -1.2569, magnitude: 6.27, spectralType: 'F' },
        { ra: 142.2871, dec: -2.7689, magnitude: 4.6, spectralType: 'F' },  // 31Tau1Hya
        { ra: 142.3521, dec: -2.2053, magnitude: 6.14, spectralType: 'F' },
        { ra: 141.6842, dec: -64.9297, magnitude: 6.05, spectralType: 'A' },
        { ra: 142.385, dec: -4.2472, magnitude: 6.26, spectralType: 'G' },
        { ra: 142.3025, dec: -20.7486, magnitude: 5.66, spectralType: 'M' },
        { ra: 142.68, dec: 33.6556, magnitude: 5.85, spectralType: 'G' },  // 7 LMi
        { ra: 142.3113, dec: -35.9514, magnitude: 4.51, spectralType: 'K' },  // Eps Ant
        { ra: 142.3179, dec: -38.4039, magnitude: 6.19, spectralType: 'A' },
        { ra: 142.4579, dec: -23.3453, magnitude: 6.24, spectralType: 'K' },
        { ra: 143.7233, dec: 72.2056, magnitude: 5.72, spectralType: 'F' },  // 22 UMa
        { ra: 142.885, dec: 35.1031, magnitude: 5.37, spectralType: 'M' },  // 8 LMi
        { ra: 142.4771, dec: -26.5897, magnitude: 5.48, spectralType: 'K' },
        { ra: 143.6204, dec: 69.8303, magnitude: 4.56, spectralType: 'G' },  // 24 UMa
        { ra: 142.5942, dec: -15.5772, magnitude: 5.85, spectralType: 'K' },
        { ra: 142.93, dec: 22.9681, magnitude: 4.31, spectralType: 'K' },  // 4Lam Leo
        { ra: 144.0283, dec: 74.3178, magnitude: 6.46, spectralType: 'B' },
        { ra: 143.2142, dec: 51.6772, magnitude: 3.17, spectralType: 'F' },  // 25The UMa
        { ra: 142.1958, dec: -62.2731, magnitude: 5.92, spectralType: 'K' },
        { ra: 141.7767, dec: -71.6022, magnitude: 5.47, spectralType: 'K' },
        { ra: 143.28, dec: 49.4386, magnitude: 6.76, spectralType: 'A' },
        { ra: 142.99, dec: 9.7158, magnitude: 5.07, spectralType: 'K' },  // 6 Leo
        { ra: 142.6892, dec: -31.8914, magnitude: 7.0, spectralType: 'A' },  // Zet1Ant
        { ra: 142.6921, dec: -31.8894, magnitude: 6.18, spectralType: 'A' },  // Zet1Ant
        { ra: 142.9863, dec: 11.2997, magnitude: 4.97, spectralType: 'K' },  // 5Xi Leo
        { ra: 142.1275, dec: -66.7019, magnitude: 5.91, spectralType: 'A' },
        { ra: 142.5217, dec: -51.5172, magnitude: 5.45, spectralType: 'B' },
        { ra: 142.9121, dec: -10.5522, magnitude: 6.14, spectralType: 'F' },
        { ra: 142.675, dec: -40.4667, magnitude: 3.6, spectralType: 'F' },  // Psi Vel
        { ra: 142.9954, dec: -1.185, magnitude: 4.57, spectralType: 'A' },  // 32Tau2Hya
        { ra: 142.9825, dec: -10.3706, magnitude: 6.13, spectralType: 'K' },
        { ra: 142.8842, dec: -31.8719, magnitude: 5.93, spectralType: 'A' },  // Zet2Ant
        { ra: 142.8871, dec: -35.715, magnitude: 5.87, spectralType: 'K' },
        { ra: 143.3763, dec: 36.4869, magnitude: 6.18, spectralType: 'K' },  // 9 LMi
        { ra: 143.3263, dec: 28.3681, magnitude: 6.53, spectralType: 'A' },
        { ra: 142.5975, dec: -58.3617, magnitude: 5.88, spectralType: 'M' },
        { ra: 143.1725, dec: 1.8642, magnitude: 6.11, spectralType: 'F' },
        { ra: 141.0379, dec: -80.7869, magnitude: 5.36, spectralType: 'F' },  // Iot Cha
        { ra: 143.085, dec: -19.4003, magnitude: 5.74, spectralType: 'A' },
        { ra: 143.5817, dec: 46.9022, magnitude: 6.52, spectralType: 'F' },
        { ra: 143.0771, dec: -28.6281, magnitude: 6.46, spectralType: 'A' },
        { ra: 143.7062, dec: 52.0514, magnitude: 4.5, spectralType: 'A' },  // 26 UMa
        { ra: 143.5558, dec: 36.3975, magnitude: 4.55, spectralType: 'G' },  // 10 LMi
        { ra: 143.2588, dec: -8.5053, magnitude: 6.12, spectralType: 'K' },
        { ra: 143.2325, dec: -13.5169, magnitude: 5.94, spectralType: 'K' },
        { ra: 142.8054, dec: -57.0344, magnitude: 3.13, spectralType: 'K' },
        { ra: 143.4963, dec: 23.4539, magnitude: 6.25, spectralType: 'K' },
        { ra: 143.3338, dec: -7.19, magnitude: 6.24, spectralType: 'K' },
        { ra: 144.4842, dec: 73.0806, magnitude: 6.42, spectralType: 'F' },
        { ra: 143.0804, dec: -40.6494, magnitude: 5.35, spectralType: 'G' },
        { ra: 143.3021, dec: -21.1158, magnitude: 5.01, spectralType: 'K' },
        { ra: 143.7658, dec: 39.6214, magnitude: 4.81, spectralType: 'G' },
        { ra: 143.3592, dec: -22.8639, magnitude: 5.91, spectralType: 'A' },
        { ra: 143.8433, dec: 39.9633, magnitude: 6.76, spectralType: 'F' },
        { ra: 143.2825, dec: -39.1289, magnitude: 6.43, spectralType: 'F' },
        { ra: 142.8871, dec: -66.7194, magnitude: 6.27, spectralType: 'K' },
        { ra: 143.6362, dec: -5.915, magnitude: 5.56, spectralType: 'K' },  // 33 Hya
        { ra: 143.915, dec: 35.8103, magnitude: 5.41, spectralType: 'G' },  // 11 LMi
        { ra: 143.0608, dec: -62.7889, magnitude: 6.1, spectralType: 'M' },
        { ra: 143.4354, dec: -49.005, magnitude: 5.12, spectralType: 'B' },
        { ra: 143.9704, dec: 14.3797, magnitude: 6.36, spectralType: 'A' },  // 7 Leo
        { ra: 143.5367, dec: -51.2553, magnitude: 5.01, spectralType: 'B' },
        { ra: 144.1787, dec: 31.1617, magnitude: 5.56, spectralType: 'M' },
        { ra: 142.9013, dec: -73.0808, magnitude: 5.47, spectralType: 'K' },
        { ra: 143.8904, dec: -19.5836, magnitude: 6.31, spectralType: 'A' },
        { ra: 143.7992, dec: -35.8239, magnitude: 6.49, spectralType: 'F' },
        { ra: 144.8663, dec: 67.2722, magnitude: 5.94, spectralType: 'K' },
        { ra: 143.6112, dec: -59.2294, magnitude: 4.08, spectralType: 'B' },
        { ra: 144.2608, dec: 16.4378, magnitude: 5.69, spectralType: 'K' },  // 8 Leo
        { ra: 144.3029, dec: 6.8358, magnitude: 5.0, spectralType: 'K' },  // 10 Leo
        { ra: 144.1404, dec: -24.7028, magnitude: 6.53, spectralType: 'F' },
        { ra: 144.5904, dec: 40.2397, magnitude: 5.25, spectralType: 'F' },  // 42 Lyn
        { ra: 144.2508, dec: -25.2967, magnitude: 5.7, spectralType: 'K' },
        { ra: 144.1054, dec: -48.7514, magnitude: 6.17, spectralType: 'A' },
        { ra: 144.4646, dec: -9.4244, magnitude: 6.4, spectralType: 'A' },  // 34 Hya
        { ra: 144.2913, dec: -32.1786, magnitude: 5.63, spectralType: 'K' },
        { ra: 144.6137, dec: 4.6492, magnitude: 4.68, spectralType: 'K' },
        { ra: 144.3679, dec: -36.0958, magnitude: 5.98, spectralType: 'K' },
        { ra: 144.2067, dec: -49.3553, magnitude: 4.35, spectralType: 'A' },
        { ra: 144.1929, dec: -52.9442, magnitude: 6.19, spectralType: 'K' },
        { ra: 145.5617, dec: 69.2375, magnitude: 5.69, spectralType: 'G' },
        { ra: 145.7383, dec: 72.2525, magnitude: 5.17, spectralType: 'K' },  // 27 UMa
        { ra: 144.3013, dec: -53.6686, magnitude: 5.45, spectralType: 'A' },
        { ra: 144.0213, dec: -64.9506, magnitude: 6.56, spectralType: 'A' },
        { ra: 144.5062, dec: -43.1911, magnitude: 5.5, spectralType: 'G' },
        { ra: 146.3783, dec: 78.1347, magnitude: 6.23, spectralType: 'K' },
        { ra: 144.6696, dec: -39.6142, magnitude: 6.7, spectralType: 'F' },
        { ra: 144.9642, dec: -1.1428, magnitude: 3.91, spectralType: 'K' },  // 35Iot Hya
        { ra: 144.9475, dec: -10.5703, magnitude: 6.31, spectralType: 'A' },  // 37 Hya
        { ra: 146.825, dec: 79.1367, magnitude: 6.17, spectralType: 'F' },
        { ra: 145.0838, dec: -10.7692, magnitude: 6.37, spectralType: 'A' },
        { ra: 145.0767, dec: -14.3322, magnitude: 5.06, spectralType: 'B' },  // 38Kap Hya
        { ra: 145.3967, dec: 31.2781, magnitude: 5.89, spectralType: 'K' },
        { ra: 145.5012, dec: 39.7578, magnitude: 5.62, spectralType: 'G' },  // 43 Lyn
        { ra: 145.2875, dec: 9.8922, magnitude: 3.52, spectralType: 'F' },  // 14Omi Leo
        { ra: 145.4104, dec: 25.9128, magnitude: 6.24, spectralType: 'K' },  // 13 Leo
        { ra: 145.6796, dec: 48.4311, magnitude: 6.39, spectralType: 'A' },
        { ra: 145.7792, dec: 54.3636, magnitude: 6.47, spectralType: 'A' },
        { ra: 144.8375, dec: -61.3281, magnitude: 4.52, spectralType: 'B' },
        { ra: 145.6779, dec: 35.0933, magnitude: 6.14, spectralType: 'F' },  // 13 LMi
        { ra: 145.3208, dec: -23.5917, magnitude: 4.77, spectralType: 'B' },
        { ra: 146.1529, dec: 64.9839, magnitude: 6.17, spectralType: 'F' },
        { ra: 143.4717, dec: -80.9414, magnitude: 5.11, spectralType: 'B' },  // Zet Cha
        { ra: 145.8887, dec: 29.9744, magnitude: 5.64, spectralType: 'A' },  // 15 Leo
        { ra: 145.56, dec: -23.9156, magnitude: 4.94, spectralType: 'F' },
        { ra: 145.1771, dec: -57.9836, magnitude: 5.32, spectralType: 'A' },
        { ra: 145.2592, dec: -57.2597, magnitude: 5.8, spectralType: 'K' },
        { ra: 146.4808, dec: 63.6533, magnitude: 6.34, spectralType: 'F' },  // 28 UMa
        { ra: 145.9329, dec: 14.0217, magnitude: 5.35, spectralType: 'M' },  // 16Psi Leo
        { ra: 145.6725, dec: -35.5017, magnitude: 6.41, spectralType: 'A' },
        { ra: 145.4492, dec: -55.2142, magnitude: 6.0, spectralType: 'B' },
        { ra: 146.125, dec: 18.8636, magnitude: 6.5, spectralType: 'K' },
        { ra: 146.6321, dec: 57.1281, magnitude: 5.2, spectralType: 'M' },
        { ra: 146.0504, dec: -27.7694, magnitude: 4.79, spectralType: 'A' },  // The Ant
        { ra: 145.8646, dec: -51.2283, magnitude: 6.15, spectralType: 'B' },
        { ra: 146.4629, dec: 23.7742, magnitude: 2.98, spectralType: 'G' },  // 17Eps Leo
        { ra: 146.0658, dec: -39.5711, magnitude: 6.82, spectralType: 'F' },
        { ra: 145.9258, dec: -53.8917, magnitude: 5.56, spectralType: 'A' },
        { ra: 146.5417, dec: 6.7086, magnitude: 5.79, spectralType: 'M' },
        { ra: 146.5971, dec: 11.81, magnitude: 5.63, spectralType: 'K' },  // 18 Leo
        { ra: 146.3408, dec: -30.2028, magnitude: 6.45, spectralType: 'B' },
        { ra: 146.5983, dec: 1.7856, magnitude: 5.65, spectralType: 'F' },
        { ra: 146.8579, dec: 11.5683, magnitude: 6.45, spectralType: 'A' },  // 19 Leo
        { ra: 147.1475, dec: 46.0211, magnitude: 5.09, spectralType: 'G' },
        { ra: 146.8896, dec: 11.4289, magnitude: 6.02, spectralType: 'M' },
        { ra: 146.4188, dec: -57.1856, magnitude: 6.46, spectralType: 'B' },
        { ra: 146.3117, dec: -62.5078, magnitude: 3.69, spectralType: 'G' },
        { ra: 147.5987, dec: 65.5933, magnitude: 6.31, spectralType: 'A' },
        { ra: 146.6267, dec: -44.755, magnitude: 5.55, spectralType: 'B' },
        { ra: 146.4808, dec: -58.7942, magnitude: 6.22, spectralType: 'F' },
        { ra: 147.7475, dec: 59.0386, magnitude: 3.8, spectralType: 'F' },  // 29Ups UMa
        { ra: 147.4588, dec: 21.1794, magnitude: 6.09, spectralType: 'A' },  // 20 Leo
        { ra: 146.7754, dec: -65.0719, magnitude: 3.01, spectralType: 'A' },  // Ups Car
        { ra: 146.7779, dec: -65.0725, magnitude: 6.26, spectralType: 'B' },  // Ups Car
        { ra: 147.3671, dec: -37.1864, magnitude: 5.97, spectralType: 'K' },
        { ra: 147.6254, dec: 4.3436, magnitude: 6.24, spectralType: 'F' },  // 4 Sex
        { ra: 148.0267, dec: 54.0644, magnitude: 4.59, spectralType: 'A' },  // 30Phi UMa
        { ra: 147.1667, dec: -56.4119, magnitude: 6.06, spectralType: 'K' },
        { ra: 147.7583, dec: 13.0661, magnitude: 6.46, spectralType: 'M' },  // 23 Leo
        { ra: 147.4638, dec: -36.2686, magnitude: 6.37, spectralType: 'K' },
        { ra: 147.4879, dec: -45.7328, magnitude: 5.08, spectralType: 'B' },
        { ra: 147.8083, dec: -4.2433, magnitude: 6.01, spectralType: 'A' },  // 6 Sex
        { ra: 147.9708, dec: 24.3953, magnitude: 5.32, spectralType: 'A' },  // 22 Leo
        { ra: 147.84, dec: -6.1817, magnitude: 6.42, spectralType: 'F' },
        { ra: 146.5858, dec: -76.7761, magnitude: 5.45, spectralType: 'G' },  // Nu Cha
        { ra: 147.8696, dec: -14.8467, magnitude: 4.12, spectralType: 'G' },  // 39Ups1Hya
        { ra: 147.675, dec: -46.9344, magnitude: 5.73, spectralType: 'K' },
        { ra: 148.1908, dec: 26.0069, magnitude: 3.88, spectralType: 'K' },  // 24Mu Leo
        { ra: 148.0508, dec: 2.4542, magnitude: 6.02, spectralType: 'A' },  // 7 Sex
        { ra: 148.05, dec: 0.0756, magnitude: 6.35, spectralType: 'G' },
        { ra: 147.9983, dec: -16.5347, magnitude: 6.08, spectralType: 'K' },
        { ra: 148.1267, dec: -8.105, magnitude: 5.05, spectralType: 'A' },  // 8Gam Sex
        { ra: 147.8325, dec: -46.1939, magnitude: 5.62, spectralType: 'K' },
        { ra: 148.7642, dec: 61.1161, magnitude: 6.27, spectralType: 'K' },
        { ra: 147.92, dec: -46.5478, magnitude: 4.58, spectralType: 'G' },
        { ra: 147.8004, dec: -59.4258, magnitude: 5.79, spectralType: 'K' },
        { ra: 147.7321, dec: -62.7453, magnitude: 5.57, spectralType: 'K' },
        { ra: 148.4287, dec: 5.9583, magnitude: 5.95, spectralType: 'M' },
        { ra: 148.2417, dec: -27.3322, magnitude: 6.3, spectralType: 'G' },
        { ra: 148.9292, dec: 49.82, magnitude: 5.27, spectralType: 'A' },  // 31 UMa
        { ra: 149.595, dec: 72.8794, magnitude: 5.83, spectralType: 'K' },
        { ra: 148.5513, dec: -25.9325, magnitude: 4.88, spectralType: 'K' },
        { ra: 148.25, dec: -55.3733, magnitude: 6.48, spectralType: 'B' },
        { ra: 148.6321, dec: -22.4883, magnitude: 6.24, spectralType: 'A' },
        { ra: 149.3067, dec: 57.4183, magnitude: 5.93, spectralType: 'G' },
        { ra: 148.7175, dec: -19.0094, magnitude: 4.94, spectralType: 'M' },
        { ra: 148.4592, dec: -51.1469, magnitude: 5.93, spectralType: 'B' },
        { ra: 148.5733, dec: -45.2839, magnitude: 5.71, spectralType: 'B' },
        { ra: 149.1083, dec: 8.9331, magnitude: 5.85, spectralType: 'K' },
        { ra: 148.7138, dec: -50.2439, magnitude: 5.72, spectralType: 'A' },
        { ra: 149.4212, dec: 41.0556, magnitude: 5.14, spectralType: 'F' },  // 19 LMi
        { ra: 149.4871, dec: 45.4144, magnitude: 6.3, spectralType: 'K' },
        { ra: 149.0225, dec: -40.8247, magnitude: 6.41, spectralType: 'M' },
        { ra: 149.1938, dec: -26.5503, magnitude: 6.28, spectralType: 'A' },
        { ra: 149.1479, dec: -33.4186, magnitude: 5.84, spectralType: 'K' },
        { ra: 149.225, dec: -27.475, magnitude: 6.32, spectralType: 'A' },
        { ra: 152.1429, dec: 83.9183, magnitude: 6.37, spectralType: 'K' },
        { ra: 149.0913, dec: -51.3361, magnitude: 6.37, spectralType: 'B' },
        { ra: 149.6088, dec: 27.7589, magnitude: 6.3, spectralType: 'F' },
        { ra: 149.5558, dec: 12.4447, magnitude: 5.26, spectralType: 'B' },  // 27Nu Leo
        { ra: 149.5317, dec: 8.3142, magnitude: 6.04, spectralType: 'K' },
        { ra: 149.9654, dec: 56.8119, magnitude: 5.48, spectralType: 'K' },
        { ra: 149.2158, dec: -54.5678, magnitude: 3.54, spectralType: 'B' },  // Phi Vel
        { ra: 149.2954, dec: -52.6389, magnitude: 6.12, spectralType: 'B' },
        { ra: 149.9008, dec: 29.6453, magnitude: 5.73, spectralType: 'G' },
        { ra: 149.4271, dec: -48.4144, magnitude: 6.05, spectralType: 'B' },
        { ra: 149.0404, dec: -71.3894, magnitude: 6.35, spectralType: 'B' },
        { ra: 149.9296, dec: 3.3847, magnitude: 6.7, spectralType: 'F' },  // 12 Sex
        { ra: 149.7754, dec: -23.9503, magnitude: 6.21, spectralType: 'B' },
        { ra: 149.7179, dec: -35.8911, magnitude: 5.23, spectralType: 'F' },  // Eta Ant
        { ra: 149.3133, dec: -64.4894, magnitude: 6.58, spectralType: 'K' },
        { ra: 149.2488, dec: -69.1019, magnitude: 6.2, spectralType: 'B' },
        { ra: 150.0533, dec: 8.0442, magnitude: 4.7, spectralType: 'M' },  // 29Pi Leo
        { ra: 150.2529, dec: 31.9236, magnitude: 5.36, spectralType: 'G' },  // 20 LMi
        { ra: 150.7037, dec: 21.9492, magnitude: 5.66, spectralType: 'B' },
        { ra: 150.1433, dec: -56.9467, magnitude: 6.52, spectralType: 'K' },
        { ra: 151.1513, dec: 53.8917, magnitude: 5.74, spectralType: 'F' },
        { ra: 150.4188, dec: -53.3644, magnitude: 6.2, spectralType: 'B' },
        { ra: 150.7054, dec: -30.5775, magnitude: 6.54, spectralType: 'K' },
        { ra: 150.4917, dec: -57.3497, magnitude: 6.2, spectralType: 'K' },
        { ra: 151.2937, dec: 52.3708, magnitude: 6.14, spectralType: 'A' },
        { ra: 150.9208, dec: -9.5739, magnitude: 6.12, spectralType: 'K' },
        { ra: 150.5, dec: -60.4208, magnitude: 5.94, spectralType: 'A' },
        { ra: 151.035, dec: 3.2011, magnitude: 6.45, spectralType: 'F' },  // 13 Sex
        { ra: 150.9225, dec: -25.3167, magnitude: 6.7, spectralType: 'A' },
        { ra: 151.0121, dec: -18.1017, magnitude: 5.86, spectralType: 'A' },
        { ra: 150.8354, dec: -46.6361, magnitude: 6.12, spectralType: 'A' },
        { ra: 151.0875, dec: -24.2856, magnitude: 5.7, spectralType: 'A' },
        { ra: 150.7496, dec: -60.1786, magnitude: 6.19, spectralType: 'A' },
        { ra: 150.7058, dec: -62.1564, magnitude: 6.42, spectralType: 'K' },
        { ra: 151.0975, dec: -39.9758, magnitude: 6.43, spectralType: 'K' },
        { ra: 151.4204, dec: 15.7575, magnitude: 6.37, spectralType: 'F' },
        { ra: 151.2812, dec: -13.0647, magnitude: 4.6, spectralType: 'B' },  // 40Ups2Hya
        { ra: 150.8929, dec: -61.8839, magnitude: 6.14, spectralType: 'B' },
        { ra: 151.3133, dec: -36.3839, magnitude: 6.27, spectralType: 'K' },
        { ra: 151.6975, dec: 5.6114, magnitude: 6.21, spectralType: 'K' },  // 14 Sex
        { ra: 151.8575, dec: 35.2447, magnitude: 4.48, spectralType: 'A' },  // 21 LMi
        { ra: 151.8333, dec: 16.7628, magnitude: 3.52, spectralType: 'A' },  // 30Eta Leo
        { ra: 151.5471, dec: -47.37, magnitude: 5.08, spectralType: 'K' },
        { ra: 151.7896, dec: -17.1417, magnitude: 5.6, spectralType: 'K' },
        { ra: 151.5296, dec: -52.1881, magnitude: 6.52, spectralType: 'K' },
        { ra: 152.0662, dec: 31.6042, magnitude: 6.24, spectralType: 'F' },
        { ra: 151.9762, dec: 9.9975, magnitude: 4.37, spectralType: 'K' },  // 31 Leo
        { ra: 151.9846, dec: -0.3717, magnitude: 4.49, spectralType: 'A' },  // 15Alp Sex
        { ra: 152.0929, dec: 11.9672, magnitude: 1.35, spectralType: 'B' },  // 32Alp Leo
        { ra: 150.1821, dec: -82.2147, magnitude: 5.52, spectralType: 'A' },  // Mu 1Cha
        { ra: 152.0071, dec: -37.3336, magnitude: 6.36, spectralType: 'K' },
        { ra: 152.1904, dec: -10.8847, magnitude: 6.53, spectralType: 'A' },
        { ra: 152.1479, dec: -15.6117, magnitude: 6.27, spectralType: 'A' },
        { ra: 152.7454, dec: 40.6614, magnitude: 6.32, spectralType: 'K' },
        { ra: 152.4854, dec: -12.0958, magnitude: 6.24, spectralType: 'A' },
        { ra: 152.5312, dec: -8.4083, magnitude: 5.91, spectralType: 'A' },  // 17 Sex
        { ra: 152.2346, dec: -51.8111, magnitude: 4.86, spectralType: 'B' },
        { ra: 152.5246, dec: -12.8161, magnitude: 5.31, spectralType: 'F' },
        { ra: 152.3825, dec: -35.8567, magnitude: 6.13, spectralType: 'F' },
        { ra: 152.8033, dec: 37.4019, magnitude: 5.85, spectralType: 'K' },
        { ra: 152.6471, dec: -12.3542, magnitude: 3.61, spectralType: 'K' },  // 41Lam Hya
        { ra: 152.1775, dec: -65.8153, magnitude: 5.28, spectralType: 'K' },
        { ra: 152.7325, dec: -8.4183, magnitude: 5.65, spectralType: 'K' },  // 18 Sex
        { ra: 151.0317, dec: -81.5658, magnitude: 6.6, spectralType: 'G' },  // Mu 2Cha
        { ra: 152.9092, dec: 13.355, magnitude: 6.44, spectralType: 'F' },  // 34 Leo
        { ra: 152.3413, dec: -61.5492, magnitude: 5.6, spectralType: 'M' },
        { ra: 152.8242, dec: -7.3167, magnitude: 6.25, spectralType: 'A' },
        { ra: 152.6579, dec: -41.715, magnitude: 5.98, spectralType: 'K' },
        { ra: 152.3771, dec: -68.6833, magnitude: 5.81, spectralType: 'A' },
        { ra: 153.0121, dec: -28.6064, magnitude: 6.28, spectralType: 'A' },
        { ra: 153.2012, dec: 4.6147, magnitude: 5.77, spectralType: 'K' },  // 19 Sex
        { ra: 153.1575, dec: -19.1536, magnitude: 6.44, spectralType: 'F' },
        { ra: 153.4575, dec: 27.1358, magnitude: 6.04, spectralType: 'G' },
        { ra: 152.8967, dec: -58.8281, magnitude: 6.4, spectralType: 'M' },
        { ra: 153.7821, dec: 59.9856, magnitude: 6.25, spectralType: 'M' },
        { ra: 152.9438, dec: -58.0606, magnitude: 5.72, spectralType: 'B' },
        { ra: 153.0958, dec: -52.1633, magnitude: 6.16, spectralType: 'K' },
        { ra: 153.3308, dec: -27.0289, magnitude: 6.25, spectralType: 'A' },
        { ra: 153.6238, dec: 21.1678, magnitude: 6.02, spectralType: 'F' },
        { ra: 153.3533, dec: -33.0319, magnitude: 6.38, spectralType: 'G' },
        { ra: 153.7763, dec: 31.4681, magnitude: 6.46, spectralType: 'G' },  // 22 LMi
        { ra: 153.4412, dec: -40.3458, magnitude: 5.9, spectralType: 'K' },
        { ra: 154.5046, dec: 73.0733, magnitude: 6.4, spectralType: 'F' },
        { ra: 153.345, dec: -51.2333, magnitude: 5.28, spectralType: 'A' },
        { ra: 153.2554, dec: -59.9181, magnitude: 6.1, spectralType: 'B' },
        { ra: 153.4858, dec: -40.3106, magnitude: 6.35, spectralType: 'G' },
        { ra: 153.3667, dec: -51.7561, magnitude: 5.78, spectralType: 'A' },
        { ra: 154.4608, dec: 71.0606, magnitude: 6.66, spectralType: 'A' },
        { ra: 153.3383, dec: -61.6589, magnitude: 6.41, spectralType: 'B' },
        { ra: 153.6842, dec: -42.1219, magnitude: 3.85, spectralType: 'A' },
        { ra: 154.06, dec: 29.3106, magnitude: 5.35, spectralType: 'A' },  // 23 LMi
        { ra: 153.3775, dec: -66.3731, magnitude: 5.16, spectralType: 'A' },
        { ra: 154.5083, dec: 65.1083, magnitude: 5.82, spectralType: 'A' },  // 32 UMa
        { ra: 154.1171, dec: 28.6825, magnitude: 6.49, spectralType: 'G' },  // 24 LMi
        { ra: 154.0671, dec: 17.7403, magnitude: 6.55, spectralType: 'A' },
        { ra: 153.8371, dec: -36.5181, magnitude: 6.19, spectralType: 'K' },
        { ra: 154.1346, dec: 23.5031, magnitude: 5.97, spectralType: 'G' },  // 35 Leo
        { ra: 154.1725, dec: 23.4172, magnitude: 3.44, spectralType: 'F' },  // 36Zet Leo
        { ra: 154.1746, dec: 25.3714, magnitude: 5.84, spectralType: 'K' },
        { ra: 154.2742, dec: 42.9144, magnitude: 3.45, spectralType: 'A' },  // 33Lam UMa
        { ra: 154.0379, dec: -11.2033, magnitude: 6.08, spectralType: 'K' },
        { ra: 154.1696, dec: 13.7283, magnitude: 5.41, spectralType: 'M' },  // 37 Leo
        { ra: 153.8812, dec: -43.1125, magnitude: 5.6, spectralType: 'K' },
        { ra: 153.4342, dec: -70.0381, magnitude: 3.32, spectralType: 'B' },  // Ome Car
        { ra: 153.8192, dec: -54.9742, magnitude: 6.16, spectralType: 'B' },
        { ra: 154.3108, dec: 23.1061, magnitude: 5.82, spectralType: 'F' },  // 39 Leo
        { ra: 154.19, dec: -20.6706, magnitude: 6.57, spectralType: 'F' },
        { ra: 154.5429, dec: 27.4153, magnitude: 6.52, spectralType: 'A' },
        { ra: 154.4075, dec: -8.0689, magnitude: 5.24, spectralType: 'F' },  // 22Eps Sex
        { ra: 154.0129, dec: -59.9033, magnitude: 6.22, spectralType: 'A' },
        { ra: 154.7458, dec: 46.7608, magnitude: 6.43, spectralType: 'K' },
        { ra: 154.1675, dec: -51.205, magnitude: 6.3, spectralType: 'M' },
        { ra: 154.8617, dec: 48.3969, magnitude: 6.0, spectralType: 'K' },
        { ra: 155.2642, dec: 68.7475, magnitude: 5.96, spectralType: 'A' },
        { ra: 154.7529, dec: 24.7117, magnitude: 6.4, spectralType: 'K' },
        { ra: 154.5317, dec: -28.9919, magnitude: 5.34, spectralType: 'A' },
        { ra: 154.2708, dec: -61.3322, magnitude: 3.4, spectralType: 'K' },
        { ra: 155.0617, dec: 53.7792, magnitude: 6.45, spectralType: 'F' },
        { ra: 155.13, dec: 54.2169, magnitude: 6.0, spectralType: 'K' },
        { ra: 154.6575, dec: -36.8047, magnitude: 6.3, spectralType: 'K' },
        { ra: 154.9338, dec: 19.4708, magnitude: 4.79, spectralType: 'F' },  // 40 Leo
        { ra: 154.82, dec: -12.5281, magnitude: 6.0, spectralType: 'A' },
        { ra: 154.6175, dec: -41.6683, magnitude: 5.96, spectralType: 'B' },
        { ra: 154.9929, dec: 19.8417, magnitude: 2.61, spectralType: 'K' },  // 41Gam1Leo
        { ra: 154.9942, dec: 19.8406, magnitude: 3.8, spectralType: 'G' },  // 41Gam2Leo
        { ra: 154.8842, dec: -5.1058, magnitude: 6.37, spectralType: 'K' },
        { ra: 154.9975, dec: -9.0589, magnitude: 6.32, spectralType: 'F' },
        { ra: 154.6567, dec: -56.11, magnitude: 5.81, spectralType: 'F' },
        { ra: 157.4229, dec: 84.2522, magnitude: 5.5, spectralType: 'F' },
        { ra: 154.9033, dec: -55.0294, magnitude: 4.57, spectralType: 'K' },
        { ra: 155.2583, dec: 2.2897, magnitude: 6.66, spectralType: 'B' },  // 23 Sex
        { ra: 154.77, dec: -64.6764, magnitude: 5.67, spectralType: 'A' },
        { ra: 155.0696, dec: -47.6992, magnitude: 5.65, spectralType: 'K' },
        { ra: 155.5437, dec: 41.2294, magnitude: 5.76, spectralType: 'F' },
        { ra: 155.2825, dec: -17.985, magnitude: 6.51, spectralType: 'F' },
        { ra: 155.5821, dec: 41.4994, magnitude: 3.05, spectralType: 'M' },  // 34Mu UMa
        { ra: 155.4596, dec: 14.9756, magnitude: 6.12, spectralType: 'A' },  // 42 Leo
        { ra: 155.3696, dec: -23.7108, magnitude: 6.5, spectralType: 'A' },
        { ra: 156.0329, dec: 65.5664, magnitude: 4.97, spectralType: 'A' },
        { ra: 155.4, dec: -22.5283, magnitude: 6.51, spectralType: 'A' },
        { ra: 155.2283, dec: -56.0431, magnitude: 4.5, spectralType: 'B' },
        { ra: 155.7762, dec: 33.9081, magnitude: 5.9, spectralType: 'A' },  // 27 LMi
        { ra: 155.5538, dec: -19.8669, magnitude: 6.13, spectralType: 'A' },
        { ra: 155.7517, dec: 6.5425, magnitude: 6.07, spectralType: 'K' },  // 43 Leo
        { ra: 155.9242, dec: 29.6158, magnitude: 6.39, spectralType: 'G' },
        { ra: 155.8108, dec: 5.6942, magnitude: 6.54, spectralType: 'F' },
        { ra: 155.5817, dec: -41.65, magnitude: 4.83, spectralType: 'K' },
        { ra: 156.0358, dec: 33.7186, magnitude: 5.5, spectralType: 'K' },  // 28 LMi
        { ra: 155.8604, dec: -4.0742, magnitude: 5.97, spectralType: 'B' },  // 25 Sex
        { ra: 155.8046, dec: -30.1622, magnitude: 6.27, spectralType: 'F' },
        { ra: 157.7692, dec: 82.5586, magnitude: 5.26, spectralType: 'F' },
        { ra: 156.0546, dec: 2.3681, magnitude: 6.32, spectralType: 'G' },
        { ra: 155.8721, dec: -38.01, magnitude: 5.33, spectralType: 'A' },
        { ra: 155.9183, dec: -41.9533, magnitude: 6.27, spectralType: 'G' },
        { ra: 156.3133, dec: 8.7847, magnitude: 5.61, spectralType: 'M' },  // 44 Leo
        { ra: 155.7421, dec: -66.9017, magnitude: 4.99, spectralType: 'B' },
        { ra: 156.4787, dec: 33.7961, magnitude: 4.74, spectralType: 'F' },  // 30 LMi
        { ra: 155.9621, dec: -57.9539, magnitude: 6.35, spectralType: 'K' },
        { ra: 156.4346, dec: -7.0597, magnitude: 5.57, spectralType: 'K' },
        { ra: 156.3217, dec: -42.4681, magnitude: 6.18, spectralType: 'G' },
        { ra: 156.5225, dec: -16.8364, magnitude: 3.81, spectralType: 'K' },  // 42Mu Hya
        { ra: 156.2475, dec: -58.5764, magnitude: 5.95, spectralType: 'F' },
        { ra: 156.8667, dec: 41.6008, magnitude: 6.02, spectralType: 'A' },
        { ra: 156.7521, dec: 19.3644, magnitude: 6.15, spectralType: 'K' },
        { ra: 157.0158, dec: 48.7847, magnitude: 6.44, spectralType: 'F' },
        { ra: 156.5396, dec: -42.7389, magnitude: 6.13, spectralType: 'K' },
        { ra: 156.9708, dec: 36.7072, magnitude: 4.21, spectralType: 'G' },  // 31Bet LMi
        { ra: 156.9125, dec: 9.7625, magnitude: 6.04, spectralType: 'A' },  // 45 Leo
        { ra: 156.0987, dec: -74.0317, magnitude: 4.0, spectralType: 'F' },
        { ra: 157.1521, dec: 45.2122, magnitude: 6.35, spectralType: 'K' },
        { ra: 156.7879, dec: -31.0678, magnitude: 4.25, spectralType: 'K' },  // Alp Ant
        { ra: 156.1846, dec: -73.9717, magnitude: 6.19, spectralType: 'A' },
        { ra: 157.4762, dec: 65.6261, magnitude: 6.32, spectralType: 'K' },  // 35 UMa
        { ra: 156.7042, dec: -54.8775, magnitude: 5.58, spectralType: 'K' },
        { ra: 157.6108, dec: 64.2575, magnitude: 6.12, spectralType: 'A' },
        { ra: 157.1833, dec: -3.7425, magnitude: 6.05, spectralType: 'A' },
        { ra: 156.8517, dec: -57.6389, magnitude: 4.66, spectralType: 'A' },
        { ra: 157.0079, dec: -49.4056, magnitude: 6.1, spectralType: 'K' },
        { ra: 157.6567, dec: 55.9806, magnitude: 4.84, spectralType: 'F' },  // 36 UMa
        { ra: 157.5267, dec: 38.9253, magnitude: 5.77, spectralType: 'A' },  // 32 LMi
        { ra: 156.9696, dec: -58.7394, magnitude: 3.82, spectralType: 'F' },
        { ra: 156.8554, dec: -65.7047, magnitude: 6.01, spectralType: 'A' },
        { ra: 157.3696, dec: -2.7392, magnitude: 5.21, spectralType: 'B' },  // 29Del Sex
        { ra: 157.3708, dec: -29.6636, magnitude: 5.58, spectralType: 'K' },
        { ra: 157.3975, dec: -30.6072, magnitude: 5.56, spectralType: 'B' },  // Del Ant
        { ra: 157.5729, dec: -0.6369, magnitude: 5.09, spectralType: 'B' },  // 30Bet Sex
        { ra: 157.2192, dec: -64.1722, magnitude: 5.29, spectralType: 'M' },
        { ra: 159.0071, dec: 80.4944, magnitude: 6.52, spectralType: 'G' },
        { ra: 157.7446, dec: -7.6375, magnitude: 6.2, spectralType: 'K' },
        { ra: 157.7492, dec: -13.5883, magnitude: 5.58, spectralType: 'B' },
        { ra: 157.9642, dec: 32.3794, magnitude: 5.9, spectralType: 'A' },  // 33 LMi
        { ra: 157.7142, dec: -26.4839, magnitude: 6.51, spectralType: 'F' },
        { ra: 158.7729, dec: 75.7131, magnitude: 4.84, spectralType: 'G' },
        { ra: 158.0492, dec: 14.1372, magnitude: 5.46, spectralType: 'M' },  // 46 Leo
        { ra: 157.6633, dec: -61.3561, magnitude: 6.43, spectralType: 'M' },
        { ra: 157.5362, dec: -66.985, magnitude: 6.19, spectralType: 'B' },
        { ra: 157.9525, dec: -28.2375, magnitude: 6.05, spectralType: 'F' },
        { ra: 158.4317, dec: 53.4975, magnitude: 6.45, spectralType: 'A' },
        { ra: 158.3079, dec: 40.4256, magnitude: 4.75, spectralType: 'A' },
        { ra: 158.2029, dec: 9.3067, magnitude: 3.85, spectralType: 'B' },  // 47Rho Leo
        { ra: 157.8408, dec: -53.7156, magnitude: 4.89, spectralType: 'F' },
        { ra: 157.9896, dec: -45.0667, magnitude: 5.74, spectralType: 'B' },
        { ra: 157.9858, dec: -45.0694, magnitude: 6.09, spectralType: 'B' },
        { ra: 158.3788, dec: 34.9886, magnitude: 5.58, spectralType: 'A' },  // 34 LMi
        { ra: 157.5838, dec: -71.9931, magnitude: 4.74, spectralType: 'A' },
        { ra: 158.14, dec: -44.6189, magnitude: 5.91, spectralType: 'G' },
        { ra: 158.0058, dec: -61.6853, magnitude: 3.32, spectralType: 'B' },
        { ra: 158.7904, dec: 57.0828, magnitude: 5.16, spectralType: 'F' },  // 37 UMa
        { ra: 157.7583, dec: -73.2217, magnitude: 4.93, spectralType: 'K' },
        { ra: 158.2371, dec: -47.0033, magnitude: 5.02, spectralType: 'K' },
        { ra: 158.1983, dec: -58.6669, magnitude: 6.0, spectralType: 'A' },
        { ra: 158.5037, dec: -23.7453, magnitude: 5.08, spectralType: 'K' },  // 44 Hya
        { ra: 158.7, dec: 6.9536, magnitude: 5.08, spectralType: 'G' },  // 48 Leo
        { ra: 158.3554, dec: -58.1903, magnitude: 6.14, spectralType: 'B' },
        { ra: 158.7592, dec: 8.6503, magnitude: 5.67, spectralType: 'A' },  // 49 Leo
        { ra: 158.7404, dec: -23.1761, magnitude: 6.1, spectralType: 'F' },
        { ra: 159.0892, dec: 36.3269, magnitude: 6.28, spectralType: 'F' },  // 35 LMi
        { ra: 158.5538, dec: -60.9878, magnitude: 6.23, spectralType: 'K' },
        { ra: 158.9121, dec: -18.5692, magnitude: 6.49, spectralType: 'A' },
        { ra: 158.8038, dec: -39.5628, magnitude: 5.38, spectralType: 'G' },
        { ra: 158.7937, dec: -43.6647, magnitude: 6.08, spectralType: 'G' },
        { ra: 159.0725, dec: -10.5833, magnitude: 6.57, spectralType: 'F' },
        { ra: 159.0696, dec: -16.3444, magnitude: 6.03, spectralType: 'M' },  // Phi2Hya
        { ra: 159.0192, dec: -26.675, magnitude: 6.29, spectralType: 'F' },
        { ra: 159.135, dec: -12.2303, magnitude: 5.7, spectralType: 'F' },
        { ra: 158.8971, dec: -57.5578, magnitude: 4.45, spectralType: 'K' },
        { ra: 159.2983, dec: -11.7486, magnitude: 6.52, spectralType: 'F' },
        { ra: 157.9625, dec: -81.9211, magnitude: 7.07, spectralType: 'B' },
        { ra: 159.3071, dec: -27.4125, magnitude: 4.89, spectralType: 'M' },
        { ra: 159.3883, dec: -13.3844, magnitude: 4.82, spectralType: 'G' },
        { ra: 159.0846, dec: -59.5647, magnitude: 5.08, spectralType: 'K' },
        { ra: 159.7738, dec: 53.6683, magnitude: 5.52, spectralType: 'K' },
        { ra: 159.68, dec: 31.9761, magnitude: 4.71, spectralType: 'G' },  // 37 LMi
        { ra: 159.3254, dec: -48.2258, magnitude: 3.84, spectralType: 'F' },
        { ra: 159.7817, dec: 37.91, magnitude: 5.85, spectralType: 'F' },  // 38 LMi
        { ra: 159.3617, dec: -58.7333, magnitude: 5.45, spectralType: 'A' },
        { ra: 158.8533, dec: -76.3092, magnitude: 6.3, spectralType: 'K' },
        { ra: 159.6458, dec: -16.8767, magnitude: 4.91, spectralType: 'G' },  // Phi3Hya
        { ra: 159.71, dec: -12.4436, magnitude: 6.04, spectralType: 'A' },
        { ra: 159.5104, dec: -57.2564, magnitude: 5.91, spectralType: 'B' },
        { ra: 158.8671, dec: -78.6078, magnitude: 4.11, spectralType: 'M' },  // Gam Cha
        { ra: 159.7096, dec: -42.7536, magnitude: 6.11, spectralType: 'A' },
        { ra: 160.4512, dec: 68.4433, magnitude: 5.75, spectralType: 'K' },
        { ra: 159.6879, dec: -59.1831, magnitude: 4.66, spectralType: 'K' },
        { ra: 160.4858, dec: 65.7164, magnitude: 5.12, spectralType: 'K' },  // 38 UMa
        { ra: 159.7475, dec: -58.8169, magnitude: 5.92, spectralType: 'M' },
        { ra: 159.8267, dec: -55.6033, magnitude: 4.28, spectralType: 'G' },
        { ra: 160.7671, dec: 69.0761, magnitude: 5.0, spectralType: 'K' },
        { ra: 160.3508, dec: -1.7417, magnitude: 6.26, spectralType: 'K' },  // 33 Sex
        { ra: 160.215, dec: -35.7417, magnitude: 6.37, spectralType: 'G' },
        { ra: 160.5471, dec: 31.6969, magnitude: 6.02, spectralType: 'M' },
        { ra: 160.0471, dec: -65.1006, magnitude: 5.52, spectralType: 'B' },
        { ra: 159.8192, dec: -74.4936, magnitude: 6.07, spectralType: 'K' },
        { ra: 160.9304, dec: 57.1992, magnitude: 5.8, spectralType: 'A' },  // 39 UMa
        { ra: 160.3233, dec: -59.6769, magnitude: 6.42, spectralType: 'G' },
        { ra: 160.7575, dec: 26.3256, magnitude: 5.51, spectralType: 'A' },  // 40 LMi
        { ra: 160.6304, dec: -13.975, magnitude: 6.24, spectralType: 'K' },
        { ra: 160.8871, dec: 46.2039, magnitude: 5.18, spectralType: 'F' },
        { ra: 160.8542, dec: 23.1883, magnitude: 5.08, spectralType: 'A' },  // 41 LMi
        { ra: 160.8371, dec: 4.7478, magnitude: 5.79, spectralType: 'K' },  // 35 Sex
        { ra: 160.68, dec: -32.7158, magnitude: 5.64, spectralType: 'A' },
        { ra: 161.2667, dec: 67.4114, magnitude: 6.0, spectralType: 'G' },
        { ra: 160.5583, dec: -64.4664, magnitude: 4.82, spectralType: 'B' },
        { ra: 161.0604, dec: 19.7586, magnitude: 6.27, spectralType: 'A' },
        { ra: 160.6692, dec: -59.2158, magnitude: 5.38, spectralType: 'B' },
        { ra: 160.7392, dec: -64.3944, magnitude: 2.76, spectralType: 'B' },  // The Car
        { ra: 160.8837, dec: -60.5667, magnitude: 4.57, spectralType: 'K' },
        { ra: 161.2892, dec: 2.4881, magnitude: 6.28, spectralType: 'K' },  // 36 Sex
        { ra: 161.5938, dec: 57.3658, magnitude: 6.34, spectralType: 'M' },  // 41 UMa
        { ra: 161.4663, dec: 30.6822, magnitude: 5.24, spectralType: 'A' },  // 42 LMi
        { ra: 160.9633, dec: -64.2489, magnitude: 5.77, spectralType: 'B' },
        { ra: 161.0287, dec: -63.9611, magnitude: 4.82, spectralType: 'B' },
        { ra: 160.4638, dec: -79.7833, magnitude: 5.97, spectralType: 'B' },
        { ra: 161.5238, dec: 6.3731, magnitude: 6.37, spectralType: 'K' },
        { ra: 161.6021, dec: 18.8914, magnitude: 5.49, spectralType: 'K' },  // 51 Leo
        { ra: 161.6054, dec: 14.1947, magnitude: 5.48, spectralType: 'G' },  // 52 Leo
        { ra: 161.265, dec: -59.6842, magnitude: 6.21, spectralType: 'G' },  // Eta Car
        { ra: 161.0808, dec: -70.86, magnitude: 6.26, spectralType: 'A' },
        { ra: 161.1337, dec: -70.855, magnitude: 6.46, spectralType: 'A' },
        { ra: 161.1104, dec: -72.4439, magnitude: 6.27, spectralType: 'F' },
        { ra: 161.7167, dec: -17.2967, magnitude: 5.42, spectralType: 'A' },
        { ra: 162.2083, dec: 65.1322, magnitude: 6.39, spectralType: 'A' },
        { ra: 161.6925, dec: -49.42, magnitude: 2.69, spectralType: 'G' },  // Mu Vel
        { ra: 161.57, dec: -60.6033, magnitude: 6.25, spectralType: 'A' },
        { ra: 161.9083, dec: -15.2619, magnitude: 6.67, spectralType: 'A' },
        { ra: 161.5687, dec: -64.515, magnitude: 5.34, spectralType: 'B' },
        { ra: 161.6238, dec: -64.2633, magnitude: 5.23, spectralType: 'B' },
        { ra: 161.7396, dec: -56.7572, magnitude: 5.23, spectralType: 'B' },
        { ra: 161.7133, dec: -64.3833, magnitude: 4.85, spectralType: 'B' },
        { ra: 162.2383, dec: 29.4158, magnitude: 6.15, spectralType: 'K' },  // 43 LMi
        { ra: 162.1692, dec: -1.9589, magnitude: 5.93, spectralType: 'M' },
        { ra: 162.0592, dec: -31.6883, magnitude: 5.88, spectralType: 'A' },
        { ra: 161.9112, dec: -57.4678, magnitude: 6.36, spectralType: 'M' },
        { ra: 162.3142, dec: 10.5453, magnitude: 5.34, spectralType: 'A' },  // 53 Leo
        { ra: 162.0225, dec: -59.9192, magnitude: 6.0, spectralType: 'A' },
        { ra: 162.3221, dec: -4.0242, magnitude: 6.61, spectralType: 'A' },  // 40 Sex
        { ra: 162.4737, dec: 27.9739, magnitude: 6.04, spectralType: 'F' },  // 44 LMi
        { ra: 161.3154, dec: -80.4697, magnitude: 5.47, spectralType: 'K' },  // Del1Cha
        { ra: 162.4062, dec: -16.1936, magnitude: 3.11, spectralType: 'K' },  // Nu Hya
        { ra: 162.4312, dec: -9.8528, magnitude: 5.86, spectralType: 'G' },
        { ra: 161.445, dec: -80.5403, magnitude: 4.45, spectralType: 'B' },  // Del2Cha
        { ra: 162.7962, dec: 56.5822, magnitude: 5.67, spectralType: 'K' },  // 43 UMa
        { ra: 162.8487, dec: 59.32, magnitude: 5.58, spectralType: 'K' },  // 42 UMa
        { ra: 162.5754, dec: -8.8978, magnitude: 5.79, spectralType: 'A' },  // 41 Sex
        { ra: 162.4875, dec: -34.0581, magnitude: 5.61, spectralType: 'A' },
        { ra: 162.3504, dec: -59.3236, magnitude: 5.91, spectralType: 'B' },
        { ra: 162.7725, dec: -3.0925, magnitude: 5.95, spectralType: 'K' },
        { ra: 163.1283, dec: 52.5653, magnitude: 6.65, spectralType: 'G' },
        { ra: 163.1329, dec: 52.5036, magnitude: 6.44, spectralType: 'K' },
        { ra: 163.3779, dec: 69.8539, magnitude: 5.93, spectralType: 'G' },
        { ra: 163.0571, dec: 1.0253, magnitude: 6.38, spectralType: 'A' },
        { ra: 163.1504, dec: -0.2014, magnitude: 6.31, spectralType: 'K' },
        { ra: 163.3937, dec: 54.585, magnitude: 5.1, spectralType: 'K' },  // 44 UMa
        { ra: 163.3279, dec: 34.215, magnitude: 3.83, spectralType: 'K' },  // 46 LMi
        { ra: 163.4946, dec: 43.19, magnitude: 4.71, spectralType: 'A' },  // 45Ome UMa
        { ra: 163.3537, dec: -2.2553, magnitude: 6.12, spectralType: 'K' },
        { ra: 163.1288, dec: -57.2406, magnitude: 5.25, spectralType: 'B' },
        { ra: 163.3729, dec: -20.1389, magnitude: 5.24, spectralType: 'F' },
        { ra: 163.3871, dec: -15.4456, magnitude: 6.38, spectralType: 'K' },
        { ra: 163.4321, dec: -2.1292, magnitude: 5.45, spectralType: 'G' },
        { ra: 163.6758, dec: 25.4908, magnitude: 6.2, spectralType: 'A' },  // 48 LMi
        { ra: 163.5742, dec: -13.7581, magnitude: 5.66, spectralType: 'G' },
        { ra: 163.7425, dec: 34.0347, magnitude: 5.72, spectralType: 'G' },
        { ra: 163.3733, dec: -58.8533, magnitude: 3.78, spectralType: 'K' },
        { ra: 163.935, dec: 33.5069, magnitude: 5.03, spectralType: 'K' },  // 46 UMa
        { ra: 163.9033, dec: 24.7497, magnitude: 4.5, spectralType: 'A' },  // 54 Leo
        { ra: 163.9054, dec: 24.7489, magnitude: 6.3, spectralType: 'A' },  // 54 Leo
        { ra: 163.7983, dec: -20.665, magnitude: 6.44, spectralType: 'K' },
        { ra: 163.425, dec: -70.7203, magnitude: 5.99, spectralType: 'B' },
        { ra: 163.7542, dec: -42.2511, magnitude: 6.11, spectralType: 'A' },
        { ra: 164.0604, dec: 42.0083, magnitude: 6.03, spectralType: 'K' },
        { ra: 163.9267, dec: 0.7369, magnitude: 5.91, spectralType: 'F' },  // 55 Leo
        { ra: 163.6233, dec: -61.8267, magnitude: 5.93, spectralType: 'K' },
        { ra: 164.0062, dec: 6.1853, magnitude: 5.81, spectralType: 'M' },  // 56 Leo
        { ra: 163.1146, dec: -79.5594, magnitude: 6.33, spectralType: 'K' },
        { ra: 164.0704, dec: 22.3517, magnitude: 6.14, spectralType: 'K' },
        { ra: 164.1433, dec: 25.5, magnitude: 6.35, spectralType: 'K' },  // 50 LMi
        { ra: 163.8217, dec: -60.5169, magnitude: 5.92, spectralType: 'K' },
        { ra: 164.9867, dec: 77.77, magnitude: 6.2, spectralType: 'G' },
        { ra: 164.1796, dec: -37.1378, magnitude: 4.6, spectralType: 'K' },  // Iot Ant
        { ra: 164.2829, dec: -50.765, magnitude: 5.91, spectralType: 'A' },
        { ra: 164.8246, dec: 51.8822, magnitude: 6.17, spectralType: 'K' },
        { ra: 164.4517, dec: -59.7319, magnitude: 6.11, spectralType: 'G' },
        { ra: 164.8667, dec: 40.4303, magnitude: 5.05, spectralType: 'G' },  // 47 UMa
        { ra: 164.8867, dec: 36.0931, magnitude: 6.0, spectralType: 'M' },
        { ra: 164.3154, dec: -75.0997, magnitude: 6.13, spectralType: 'K' },
        { ra: 165.0613, dec: 45.5261, magnitude: 5.47, spectralType: 'K' },
        { ra: 164.9212, dec: 11.7058, magnitude: 6.55, spectralType: 'F' },
        { ra: 164.8079, dec: -33.7372, magnitude: 5.71, spectralType: 'F' },
        { ra: 165.1067, dec: 51.5019, magnitude: 6.43, spectralType: 'G' },
        { ra: 164.8787, dec: -16.3539, magnitude: 5.89, spectralType: 'M' },
        { ra: 165.0858, dec: 42.9114, magnitude: 6.02, spectralType: 'F' },
        { ra: 165.2742, dec: 63.4211, magnitude: 6.39, spectralType: 'A' },
        { ra: 164.9437, dec: -18.2989, magnitude: 4.08, spectralType: 'K' },  // 7Alp Crt
        { ra: 165.21, dec: 39.2122, magnitude: 5.08, spectralType: 'F' },  // 49 UMa
        { ra: 165.0483, dec: -14.0833, magnitude: 5.88, spectralType: 'K' },
        { ra: 164.8083, dec: -61.3203, magnitude: 6.16, spectralType: 'B' },
        { ra: 165.14, dec: 3.6175, magnitude: 4.84, spectralType: 'K' },  // 58 Leo
        { ra: 164.9975, dec: -43.8072, magnitude: 5.81, spectralType: 'B' },
        { ra: 165.0387, dec: -42.2258, magnitude: 4.39, spectralType: 'A' },
        { ra: 165.1867, dec: 6.1014, magnitude: 4.99, spectralType: 'A' },  // 59 Leo
        { ra: 165.4604, dec: 56.3825, magnitude: 2.37, spectralType: 'A' },  // 48Bet UMa
        { ra: 165.0358, dec: -51.8178, magnitude: 6.15, spectralType: 'A' },
        { ra: 165.2383, dec: -15.7928, magnitude: 6.34, spectralType: 'K' },
        { ra: 165.17, dec: -31.8394, magnitude: 6.07, spectralType: 'F' },
        { ra: 165.4571, dec: -2.4847, magnitude: 4.74, spectralType: 'M' },  // 61 Leo
        { ra: 165.5825, dec: 20.1797, magnitude: 4.42, spectralType: 'A' },  // 60 Leo
        { ra: 165.9321, dec: 61.7508, magnitude: 1.79, spectralType: 'K' },  // 50Alp UMa
        { ra: 165.6017, dec: -26.8314, magnitude: 6.23, spectralType: 'F' },
        { ra: 165.8108, dec: -0.7525, magnitude: 6.14, spectralType: 'F' },
        { ra: 164.8037, dec: -81.5561, magnitude: 6.71, spectralType: 'F' },
        { ra: 165.8121, dec: -11.3036, magnitude: 5.5, spectralType: 'G' },
        { ra: 165.9025, dec: -0.0008, magnitude: 5.95, spectralType: 'K' },  // 62 Leo
        { ra: 165.8171, dec: -31.9608, magnitude: 6.46, spectralType: 'M' },
        { ra: 165.9021, dec: -13.4344, magnitude: 6.34, spectralType: 'G' },
        { ra: 166.13, dec: 38.2414, magnitude: 6.0, spectralType: 'A' },  // 51 UMa
        { ra: 166.2542, dec: 7.3361, magnitude: 4.63, spectralType: 'F' },  // 63Chi Leo
        { ra: 166.13, dec: -47.6792, magnitude: 5.67, spectralType: 'A' },
        { ra: 164.8075, dec: -84.5939, magnitude: 6.19, spectralType: 'A' },  // Eta Oct
        { ra: 166.2258, dec: -35.8047, magnitude: 5.43, spectralType: 'A' },
        { ra: 166.3329, dec: -27.2936, magnitude: 4.94, spectralType: 'F' },  // Chi1Hya
        { ra: 166.3917, dec: -11.0889, magnitude: 6.09, spectralType: 'F' },
        { ra: 166.2675, dec: -49.3925, magnitude: 6.13, spectralType: 'B' },
        { ra: 166.49, dec: -27.2878, magnitude: 5.71, spectralType: 'A' },  // Chi2Hya
        { ra: 166.5242, dec: -51.2125, magnitude: 6.3, spectralType: 'G' },
        { ra: 166.7258, dec: 1.9556, magnitude: 5.52, spectralType: 'G' },  // 65 Leo
        { ra: 166.6612, dec: -28.7278, magnitude: 6.77, spectralType: 'A' },
        { ra: 166.6142, dec: -50.9567, magnitude: 6.32, spectralType: 'K' },
        { ra: 166.9154, dec: 23.3236, magnitude: 6.46, spectralType: 'A' },  // 64 Leo
        { ra: 166.6221, dec: -58.6753, magnitude: 6.02, spectralType: 'K' },
        { ra: 166.785, dec: -32.5872, magnitude: 6.59, spectralType: 'F' },
        { ra: 166.635, dec: -62.4242, magnitude: 4.61, spectralType: 'G' },
        { ra: 166.6008, dec: -64.8397, magnitude: 6.41, spectralType: 'A' },
        { ra: 166.8192, dec: -42.6386, magnitude: 5.15, spectralType: 'A' },
        { ra: 166.9767, dec: -30.1747, magnitude: 6.54, spectralType: 'G' },
        { ra: 166.7079, dec: -70.8781, magnitude: 5.57, spectralType: 'B' },
        { ra: 167.4163, dec: 67.2103, magnitude: 6.06, spectralType: 'F' },
        { ra: 167.0658, dec: -29.9728, magnitude: 6.49, spectralType: 'A' },
        { ra: 167.2046, dec: 24.6583, magnitude: 5.68, spectralType: 'A' },  // 67 Leo
        { ra: 167.3296, dec: 36.3094, magnitude: 5.74, spectralType: 'M' },
        { ra: 167.1829, dec: -28.0806, magnitude: 5.44, spectralType: 'A' },
        { ra: 167.4158, dec: 44.4986, magnitude: 3.01, spectralType: 'K' },  // 52Psi UMa
        { ra: 167.4104, dec: 43.2075, magnitude: 5.89, spectralType: 'M' },
        { ra: 167.1475, dec: -58.975, magnitude: 3.91, spectralType: 'G' },
        { ra: 167.1417, dec: -61.9472, magnitude: 5.13, spectralType: 'B' },
        { ra: 167.4725, dec: -32.3675, magnitude: 5.81, spectralType: 'A' },
        { ra: 168.0458, dec: 68.2719, magnitude: 6.4, spectralType: 'A' },
        { ra: 167.9321, dec: 14.4003, magnitude: 6.3, spectralType: 'A' },
        { ra: 167.7279, dec: -58.4553, magnitude: 6.88, spectralType: 'B' },
        { ra: 167.9146, dec: -22.8258, magnitude: 4.48, spectralType: 'A' },  // 11Bet Crt
        { ra: 168.1854, dec: 54.8942, magnitude: 6.63, spectralType: 'A' },
        { ra: 168.1342, dec: 35.8136, magnitude: 6.41, spectralType: 'G' },
        { ra: 168.0617, dec: -32.4339, magnitude: 6.38, spectralType: 'M' },
        { ra: 168.1267, dec: -18.5, magnitude: 6.13, spectralType: 'A' },  // Psi Crt
        { ra: 168.1442, dec: -21.7492, magnitude: 6.4, spectralType: 'K' },
        { ra: 167.8729, dec: -71.4364, magnitude: 6.35, spectralType: 'K' },
        { ra: 168.1379, dec: -49.1011, magnitude: 5.36, spectralType: 'A' },
        { ra: 168.4175, dec: 41.0886, magnitude: 6.33, spectralType: 'K' },
        { ra: 168.15, dec: -60.3175, magnitude: 4.6, spectralType: 'A' },
        { ra: 168.2371, dec: -49.7364, magnitude: 6.11, spectralType: 'G' },
        { ra: 168.3113, dec: -44.3722, magnitude: 5.8, spectralType: 'K' },
        { ra: 168.1883, dec: -64.1697, magnitude: 5.23, spectralType: 'B' },
        { ra: 168.44, dec: -0.0697, magnitude: 5.42, spectralType: 'A' },  // 69 Leo
        { ra: 168.5271, dec: 20.5236, magnitude: 2.56, spectralType: 'A' },  // 68Del Leo
        { ra: 168.5075, dec: 8.0606, magnitude: 5.79, spectralType: 'K' },
        { ra: 168.56, dec: 15.4294, magnitude: 3.34, spectralType: 'A' },  // 70The Leo
        { ra: 168.4137, dec: -53.2317, magnitude: 5.76, spectralType: 'K' },
        { ra: 168.3783, dec: -59.6194, magnitude: 5.74, spectralType: 'B' },
        { ra: 168.8008, dec: 23.0956, magnitude: 4.63, spectralType: 'M' },  // 72 Leo
        { ra: 169.0167, dec: 52.7731, magnitude: 6.5, spectralType: 'F' },
        { ra: 168.725, dec: -43.7342, magnitude: 6.21, spectralType: 'K' },
        { ra: 168.9663, dec: 13.3075, magnitude: 5.32, spectralType: 'K' },  // 73 Leo
        { ra: 168.9908, dec: 12.8447, magnitude: 6.67, spectralType: 'A' },
        { ra: 169.1746, dec: 49.4764, magnitude: 5.88, spectralType: 'K' },
        { ra: 169.1654, dec: -3.6517, magnitude: 4.47, spectralType: 'A' },  // 74Phi Leo
        { ra: 169.2425, dec: -7.1347, magnitude: 6.14, spectralType: 'A' },
        { ra: 169.1154, dec: -45.88, magnitude: 6.31, spectralType: 'F' },
        { ra: 169.3225, dec: 2.0106, magnitude: 5.18, spectralType: 'M' },  // 75 Leo
        { ra: 169.2992, dec: -38.0144, magnitude: 6.27, spectralType: 'A' },
        { ra: 169.4133, dec: -34.7372, magnitude: 6.45, spectralType: 'F' },
        { ra: 169.5454, dec: 31.5292, magnitude: 4.87, spectralType: 'G' },  // 53Xi UMa
        { ra: 169.5458, dec: 31.5292, magnitude: 4.41, spectralType: 'G' },  // 53Xi UMa
        { ra: 169.4292, dec: -36.5344, magnitude: 6.68, spectralType: 'G' },
        { ra: 169.6196, dec: 33.0942, magnitude: 3.48, spectralType: 'K' },  // 54Nu UMa
        { ra: 169.5875, dec: 11.9847, magnitude: 6.66, spectralType: 'A' },
        { ra: 169.3292, dec: -67.8236, magnitude: 6.06, spectralType: 'M' },
        { ra: 169.7829, dec: 38.1856, magnitude: 4.78, spectralType: 'A' },  // 55 UMa
        { ra: 169.7292, dec: 1.6506, magnitude: 5.91, spectralType: 'K' },  // 76 Leo
        { ra: 169.8354, dec: -14.7786, magnitude: 3.56, spectralType: 'G' },  // 12Del Crt
        { ra: 170.2242, dec: 67.1006, magnitude: 6.21, spectralType: 'G' },
        { ra: 169.8187, dec: -64.5825, magnitude: 5.99, spectralType: 'F' },
        { ra: 169.6429, dec: -79.6686, magnitude: 6.35, spectralType: 'A' },
        { ra: 170.2842, dec: 6.0294, magnitude: 4.05, spectralType: 'B' },  // 77Sig Leo
        { ra: 169.9013, dec: -75.1425, magnitude: 6.27, spectralType: 'B' },
        { ra: 170.4554, dec: 57.075, magnitude: 6.43, spectralType: 'A' },
        { ra: 170.0163, dec: -71.9944, magnitude: 6.41, spectralType: 'B' },
        { ra: 170.2517, dec: -54.4911, magnitude: 3.89, spectralType: 'B' },  // Pi Cen
        { ra: 170.7138, dec: 64.3306, magnitude: 6.02, spectralType: 'A' },
        { ra: 170.7067, dec: 43.4828, magnitude: 4.99, spectralType: 'G' },  // 56 UMa
        { ra: 170.5962, dec: -44.6458, magnitude: 6.12, spectralType: 'G' },
        { ra: 170.825, dec: 0.1317, magnitude: 6.05, spectralType: 'K' },
        { ra: 170.8412, dec: -18.78, magnitude: 5.09, spectralType: 'F' },  // 13Lam Crt
        { ra: 170.8029, dec: -36.1647, magnitude: 5.0, spectralType: 'K' },
        { ra: 170.4879, dec: -77.6083, magnitude: 6.43, spectralType: 'A' },
        { ra: 170.7837, dec: -56.7794, magnitude: 5.79, spectralType: 'A' },
        { ra: 170.9812, dec: 10.5292, magnitude: 3.94, spectralType: 'F' },  // 78Iot Leo
        { ra: 171.0096, dec: 1.4078, magnitude: 5.39, spectralType: 'G' },  // 79 Leo
        { ra: 170.8408, dec: -64.955, magnitude: 5.11, spectralType: 'B' },
        { ra: 171.1525, dec: -10.8594, magnitude: 4.83, spectralType: 'K' },  // 14Eps Crt
        { ra: 171.0921, dec: -42.6692, magnitude: 6.12, spectralType: 'B' },
        { ra: 171.2454, dec: 11.4303, magnitude: 5.8, spectralType: 'K' },
        { ra: 171.2204, dec: -17.6839, magnitude: 4.08, spectralType: 'A' },  // 15Gam Crt
        { ra: 171.0462, dec: -72.2567, magnitude: 5.59, spectralType: 'B' },
        { ra: 171.4879, dec: 55.8506, magnitude: 5.75, spectralType: 'K' },
        { ra: 171.4017, dec: 16.4564, magnitude: 5.57, spectralType: 'F' },  // 81 Leo
        { ra: 171.3725, dec: -36.0631, magnitude: 5.22, spectralType: 'K' },
        { ra: 171.4583, dec: 3.86, magnitude: 6.37, spectralType: 'F' },  // 80 Leo
        { ra: 171.3879, dec: -37.7478, magnitude: 5.89, spectralType: 'M' },
        { ra: 171.6063, dec: 33.4506, magnitude: 6.32, spectralType: 'F' },
        { ra: 171.43, dec: -63.9728, magnitude: 5.17, spectralType: 'F' },
        { ra: 171.6887, dec: 3.0131, magnitude: 6.5, spectralType: 'K' },  // 83 Leo
        { ra: 171.6471, dec: -61.1153, magnitude: 5.3, spectralType: 'B' },
        { ra: 171.7896, dec: -12.3567, magnitude: 5.94, spectralType: 'F' },  // 16Kap Crt
        { ra: 171.6971, dec: -53.16, magnitude: 5.81, spectralType: 'K' },
        { ra: 171.9842, dec: 2.8561, magnitude: 4.95, spectralType: 'G' },  // 84Tau Leo
        { ra: 171.9737, dec: -1.7, magnitude: 6.25, spectralType: 'K' },
        { ra: 171.9937, dec: -35.3286, magnitude: 6.45, spectralType: 'K' },
        { ra: 172.2692, dec: 61.7783, magnitude: 5.83, spectralType: 'F' },
        { ra: 172.2675, dec: 39.3369, magnitude: 5.31, spectralType: 'A' },  // 57 UMa
        { ra: 172.1463, dec: -42.6742, magnitude: 5.08, spectralType: 'B' },
        { ra: 172.4312, dec: 56.7375, magnitude: 6.28, spectralType: 'A' },
        { ra: 172.0758, dec: -72.4744, magnitude: 6.09, spectralType: 'B' },
        { ra: 172.4246, dec: 15.4133, magnitude: 5.74, spectralType: 'K' },  // 85 Leo
        { ra: 172.5538, dec: 54.3617, magnitude: 6.41, spectralType: 'K' },
        { ra: 172.4108, dec: -24.4633, magnitude: 5.76, spectralType: 'A' },
        { ra: 172.96, dec: 81.1272, magnitude: 6.15, spectralType: 'A' },
        { ra: 172.6042, dec: 46.6575, magnitude: 6.35, spectralType: 'K' },
        { ra: 172.6296, dec: 43.1733, magnitude: 5.94, spectralType: 'F' },  // 58 UMa
        { ra: 172.5788, dec: -3.0036, magnitude: 4.77, spectralType: 'K' },  // 87 Leo
        { ra: 172.6208, dec: 18.4097, magnitude: 5.52, spectralType: 'K' },  // 86 Leo
        { ra: 172.8508, dec: 69.3311, magnitude: 3.84, spectralType: 'M' },  // 1Lam Dra
        { ra: 172.7204, dec: 47.9292, magnitude: 6.42, spectralType: 'G' },
        { ra: 172.7925, dec: 48.7892, magnitude: 6.56, spectralType: 'G' },
        { ra: 172.9371, dec: 14.3644, magnitude: 6.2, spectralType: 'G' },  // 88 Leo
        { ra: 172.8125, dec: -61.2783, magnitude: 6.38, spectralType: 'A' },
        { ra: 173.0867, dec: 61.0825, magnitude: 5.48, spectralType: 'F' },
        { ra: 172.9483, dec: -20.7767, magnitude: 6.24, spectralType: 'F' },
        { ra: 172.9421, dec: -59.4422, magnitude: 5.13, spectralType: 'G' },  // Omi1Cen
        { ra: 172.9533, dec: -59.5158, magnitude: 5.15, spectralType: 'A' },  // Omi2Cen
        { ra: 173.0671, dec: -29.2633, magnitude: 5.81, spectralType: 'F' },
        { ra: 173.0679, dec: -29.2611, magnitude: 5.64, spectralType: 'F' },
        { ra: 173.0971, dec: -26.7467, magnitude: 6.16, spectralType: 'M' },
        { ra: 173.1979, dec: -7.8275, magnitude: 5.95, spectralType: 'K' },
        { ra: 173.2004, dec: -40.4364, magnitude: 5.64, spectralType: 'K' },
        { ra: 173.0829, dec: -66.9622, magnitude: 5.9, spectralType: 'K' },
        { ra: 173.2254, dec: -31.0872, magnitude: 5.04, spectralType: 'M' },
        { ra: 173.2504, dec: -31.8578, magnitude: 3.54, spectralType: 'G' },  // Xi Hya
        { ra: 173.3108, dec: -16.2806, magnitude: 6.05, spectralType: 'F' },
        { ra: 173.4846, dec: 36.8156, magnitude: 6.4, spectralType: 'K' },
        { ra: 173.4054, dec: -40.5869, magnitude: 5.39, spectralType: 'A' },
        { ra: 173.5417, dec: 11.0236, magnitude: 6.55, spectralType: 'A' },
        { ra: 173.5917, dec: 3.06, magnitude: 5.77, spectralType: 'F' },  // 89 Leo
        { ra: 173.6771, dec: 16.7969, magnitude: 5.95, spectralType: 'B' },  // 90 Leo
        { ra: 173.7704, dec: 54.7853, magnitude: 5.63, spectralType: 'K' },
        { ra: 173.6229, dec: -32.8314, magnitude: 5.98, spectralType: 'K' },
        { ra: 173.7658, dec: 20.4414, magnitude: 6.45, spectralType: 'G' },
        { ra: 173.6904, dec: -54.2642, magnitude: 4.62, spectralType: 'B' },
        { ra: 174.0117, dec: 69.3228, magnitude: 5.2, spectralType: 'K' },  // 2 Dra
        { ra: 173.7367, dec: -49.1367, magnitude: 5.5, spectralType: 'K' },
        { ra: 173.805, dec: -47.3725, magnitude: 5.71, spectralType: 'M' },
        { ra: 173.9308, dec: 10.9111, magnitude: 6.56, spectralType: 'A' },
        { ra: 174.0746, dec: 27.7811, magnitude: 5.8, spectralType: 'F' },
        { ra: 173.9817, dec: -47.6417, magnitude: 5.25, spectralType: 'A' },
        { ra: 173.945, dec: -63.0197, magnitude: 3.13, spectralType: 'B' },  // Lam Cen
        { ra: 174.1704, dec: -9.8022, magnitude: 4.7, spectralType: 'B' },  // 21The Crt
        { ra: 174.1458, dec: -33.57, magnitude: 5.74, spectralType: 'K' },
        { ra: 174.17, dec: -37.2378, magnitude: 6.31, spectralType: 'A' },
        { ra: 174.2371, dec: -0.8239, magnitude: 4.3, spectralType: 'G' },  // 91Ups Leo
        { ra: 174.0929, dec: -61.0522, magnitude: 5.83, spectralType: 'B' },
        { ra: 174.255, dec: -32.9881, magnitude: 6.29, spectralType: 'F' },
        { ra: 174.4708, dec: 50.6183, magnitude: 6.14, spectralType: 'G' },
        { ra: 174.2525, dec: -61.2833, magnitude: 5.15, spectralType: 'K' },
        { ra: 174.3913, dec: -47.7472, magnitude: 5.44, spectralType: 'K' },
        { ra: 174.5858, dec: 43.6256, magnitude: 5.59, spectralType: 'F' },  // 59 UMa
        { ra: 174.5408, dec: 8.8842, magnitude: 6.17, spectralType: 'K' },
        { ra: 174.315, dec: -75.8967, magnitude: 5.65, spectralType: 'F' },  // Pi Cha
        { ra: 174.6396, dec: 46.8342, magnitude: 6.1, spectralType: 'F' },  // 60 UMa
        { ra: 174.705, dec: 64.3469, magnitude: 6.46, spectralType: 'A' },
        { ra: 174.6342, dec: 33.6256, magnitude: 6.27, spectralType: 'K' },
        { ra: 174.615, dec: 8.1342, magnitude: 5.36, spectralType: 'M' },  // 1Ome Vir
        { ra: 174.6004, dec: -2.4361, magnitude: 6.22, spectralType: 'G' },
        { ra: 174.4517, dec: -67.6203, magnitude: 5.96, spectralType: 'K' },
        { ra: 174.6871, dec: 45.1086, magnitude: 6.44, spectralType: 'G' },
        { ra: 174.5304, dec: -61.8264, magnitude: 5.15, spectralType: 'A' },
        { ra: 174.6671, dec: -13.2019, magnitude: 5.48, spectralType: 'F' },  // 24Iot Crt
        { ra: 174.7517, dec: -24.7211, magnitude: 6.42, spectralType: 'G' },
        { ra: 174.9629, dec: -14.4686, magnitude: 6.21, spectralType: 'A' },
        { ra: 174.96, dec: -16.6203, magnitude: 6.19, spectralType: 'M' },
        { ra: 174.8725, dec: -65.3978, magnitude: 5.17, spectralType: 'G' },
        { ra: 175.1142, dec: 57.9706, magnitude: 6.37, spectralType: 'B' },
        { ra: 175.0533, dec: -34.7447, magnitude: 4.7, spectralType: 'B' },  // Omi Hya
        { ra: 175.1962, dec: 21.3528, magnitude: 5.26, spectralType: 'K' },  // 92 Leo
        { ra: 175.2625, dec: 34.2017, magnitude: 5.33, spectralType: 'G' },  // 61 UMa
        { ra: 175.1775, dec: -53.9686, magnitude: 5.96, spectralType: 'M' },
        { ra: 175.285, dec: -29.1964, magnitude: 6.44, spectralType: 'G' },
        { ra: 175.2233, dec: -62.09, magnitude: 4.94, spectralType: 'G' },
        { ra: 175.4317, dec: 55.1725, magnitude: 6.27, spectralType: 'K' },
        { ra: 175.3929, dec: 31.7461, magnitude: 5.73, spectralType: 'F' },  // 62 UMa
        { ra: 175.3325, dec: -43.0958, magnitude: 5.55, spectralType: 'A' },
        { ra: 175.4333, dec: -32.4997, magnitude: 5.22, spectralType: 'K' },
        { ra: 175.6183, dec: 66.745, magnitude: 5.3, spectralType: 'K' },  // 3 Dra
        { ra: 175.5217, dec: 22.2108, magnitude: 6.59, spectralType: 'F' },
        { ra: 175.5146, dec: -20.2939, magnitude: 6.22, spectralType: 'K' },
        { ra: 175.255, dec: -83.1, magnitude: 6.33, spectralType: 'K' },
        { ra: 175.8633, dec: -37.1903, magnitude: 5.98, spectralType: 'K' },
        { ra: 175.7308, dec: -79.3064, magnitude: 6.39, spectralType: 'K' },
        { ra: 175.9796, dec: -6.6772, magnitude: 6.07, spectralType: 'G' },
        { ra: 175.88, dec: -62.4894, magnitude: 5.03, spectralType: 'G' },
        { ra: 176.055, dec: 25.2183, magnitude: 6.02, spectralType: 'K' },
        { ra: 175.9704, dec: -62.8783, magnitude: 6.1, spectralType: 'A' },
        { ra: 176.1908, dec: -18.3508, magnitude: 4.73, spectralType: 'G' },  // 27Zet Crt
        { ra: 176.3212, dec: 8.2583, magnitude: 4.85, spectralType: 'A' },  // 2Xi Vir
        { ra: 176.3025, dec: -49.0697, magnitude: 6.26, spectralType: 'K' },
        { ra: 176.465, dec: 6.5294, magnitude: 4.03, spectralType: 'M' },  // 3Nu Vir
        { ra: 176.5125, dec: 47.7794, magnitude: 3.71, spectralType: 'K' },  // 63Chi UMa
        { ra: 176.4329, dec: -45.69, magnitude: 5.29, spectralType: 'B' },
        { ra: 176.4017, dec: -66.7286, magnitude: 3.64, spectralType: 'A' },  // Lam Mus
        { ra: 176.7317, dec: 55.6283, magnitude: 5.27, spectralType: 'K' },
        { ra: 176.6283, dec: -61.1783, magnitude: 4.11, spectralType: 'G' },
        { ra: 176.6296, dec: -40.5006, magnitude: 4.91, spectralType: 'G' },
        { ra: 176.7792, dec: -35.9069, magnitude: 6.17, spectralType: 'G' },
        { ra: 176.8154, dec: -30.2869, magnitude: 6.48, spectralType: 'G' },
        { ra: 176.8296, dec: -57.6964, magnitude: 5.41, spectralType: 'K' },
        { ra: 176.9963, dec: 20.2189, magnitude: 4.53, spectralType: 'G' },  // 93 Leo
        { ra: 176.9787, dec: 8.2458, magnitude: 5.32, spectralType: 'A' },  // 4 Vir
        { ra: 177.0979, dec: -10.3133, magnitude: 6.26, spectralType: 'F' },
        { ra: 177.0596, dec: -66.8147, magnitude: 4.72, spectralType: 'K' },  // Mu Mus
        { ra: 177.1612, dec: 14.2842, magnitude: 5.88, spectralType: 'F' },
        { ra: 177.1879, dec: -26.7497, magnitude: 5.11, spectralType: 'M' },
        { ra: 177.255, dec: -0.3186, magnitude: 6.15, spectralType: 'F' },
        { ra: 177.265, dec: 14.5719, magnitude: 2.14, spectralType: 'A' },  // 94Bet Leo
        { ra: 177.3121, dec: 16.2428, magnitude: 6.04, spectralType: 'A' },
        { ra: 177.4238, dec: 34.9317, magnitude: 5.7, spectralType: 'F' },
        { ra: 177.4213, dec: -63.7883, magnitude: 4.32, spectralType: 'B' },
        { ra: 177.4858, dec: -70.2258, magnitude: 4.97, spectralType: 'G' },
        { ra: 177.5813, dec: -15.8639, magnitude: 6.13, spectralType: 'K' },
        { ra: 177.6738, dec: 1.7647, magnitude: 3.61, spectralType: 'F' },  // 5Bet Vir
        { ra: 177.6133, dec: -62.6494, magnitude: 5.7, spectralType: 'A' },
        { ra: 177.6546, dec: -27.2778, magnitude: 6.48, spectralType: 'G' },
        { ra: 177.7304, dec: 12.2789, magnitude: 6.35, spectralType: 'F' },
        { ra: 177.7592, dec: -5.3333, magnitude: 5.64, spectralType: 'K' },
        { ra: 177.7892, dec: 33.375, magnitude: 6.27, spectralType: 'A' },
        { ra: 177.7862, dec: -45.1736, magnitude: 4.46, spectralType: 'K' },
        { ra: 177.8412, dec: -12.1878, magnitude: 6.35, spectralType: 'F' },
        { ra: 177.9233, dec: -30.835, magnitude: 5.85, spectralType: 'F' },
        { ra: 177.9633, dec: -65.2061, magnitude: 4.9, spectralType: 'B' },
        { ra: 178.245, dec: 37.7186, magnitude: 6.45, spectralType: 'G' },
        { ra: 178.0421, dec: -56.9878, magnitude: 5.57, spectralType: 'A' },
        { ra: 178.2275, dec: -33.9081, magnitude: 4.28, spectralType: 'B' },  // Bet Hya
        { ra: 178.3617, dec: -35.0667, magnitude: 6.17, spectralType: 'A' },
        { ra: 178.4575, dec: 53.6947, magnitude: 2.44, spectralType: 'A' },  // 64Gam UMa
        { ra: 178.4596, dec: 0.5519, magnitude: 6.3, spectralType: 'F' },
        { ra: 178.5479, dec: -57.41, magnitude: 6.06, spectralType: 'A' },
        { ra: 178.6075, dec: -37.7489, magnitude: 6.46, spectralType: 'F' },
        { ra: 178.6771, dec: -25.7139, magnitude: 5.3, spectralType: 'G' },
        { ra: 178.7629, dec: 8.4439, magnitude: 5.58, spectralType: 'K' },  // 6 Vir
        { ra: 178.7737, dec: 46.4769, magnitude: 6.54, spectralType: 'A' },  // 65 UMa
        { ra: 178.7967, dec: 46.4697, magnitude: 7.03, spectralType: 'A' },  // 65 UMa
        { ra: 178.8088, dec: 36.7564, magnitude: 6.49, spectralType: 'M' },
        { ra: 178.7492, dec: -63.2789, magnitude: 5.91, spectralType: 'A' },
        { ra: 178.9187, dec: 15.6467, magnitude: 5.53, spectralType: 'A' },  // 95 Leo
        { ra: 178.9171, dec: -28.4769, magnitude: 5.93, spectralType: 'K' },
        { ra: 178.9933, dec: 56.5986, magnitude: 5.84, spectralType: 'K' },  // 66 UMa
        { ra: 179.0037, dec: -17.1508, magnitude: 5.18, spectralType: 'A' },  // 30Eta Crt
        { ra: 178.9779, dec: -39.6892, magnitude: 6.13, spectralType: 'K' },
        { ra: 179.2217, dec: 61.5492, magnitude: 6.22, spectralType: 'G' },
        { ra: 179.1829, dec: -47.0725, magnitude: 6.26, spectralType: 'F' },
        { ra: 179.2654, dec: -33.3153, magnitude: 6.21, spectralType: 'A' },
        { ra: 179.3108, dec: 40.3436, magnitude: 6.62, spectralType: 'F' },
        { ra: 179.4171, dec: -62.4489, magnitude: 5.57, spectralType: 'B' },
        { ra: 179.53, dec: 32.2739, magnitude: 6.42, spectralType: 'A' },
        { ra: 179.5858, dec: 61.4647, magnitude: 6.76, spectralType: 'K' },
        { ra: 179.5633, dec: -56.3172, magnitude: 5.44, spectralType: 'B' },
        { ra: 179.5846, dec: -40.9472, magnitude: 6.79, spectralType: 'K' },
        { ra: 179.6987, dec: -64.3392, magnitude: 5.61, spectralType: 'A' },
        { ra: 179.7267, dec: -25.9089, magnitude: 6.43, spectralType: 'A' },
        { ra: 179.7642, dec: 0.5306, magnitude: 6.17, spectralType: 'K' },
        { ra: 179.8233, dec: 33.1675, magnitude: 5.96, spectralType: 'K' },
        { ra: 179.7954, dec: -51.6967, magnitude: 6.05, spectralType: 'K' },
        { ra: 179.9054, dec: -78.2219, magnitude: 4.91, spectralType: 'B' },  // Eps Cha
        { ra: 179.9883, dec: 34.035, magnitude: 6.5, spectralType: 'A' },
        { ra: 179.9871, dec: 3.6553, magnitude: 5.37, spectralType: 'A' },  // 7 Vir
        { ra: 180.0775, dec: 80.8531, magnitude: 6.17, spectralType: 'M' },
        { ra: 180.1854, dec: -10.4461, magnitude: 5.55, spectralType: 'G' },
        { ra: 180.1771, dec: -21.8372, magnitude: 6.28, spectralType: 'K' },
        { ra: 180.2183, dec: 6.6142, magnitude: 4.66, spectralType: 'A' },  // 8Pi Vir
        { ra: 180.2133, dec: -19.6589, magnitude: 5.26, spectralType: 'B' },
        { ra: 180.2575, dec: -1.7681, magnitude: 6.31, spectralType: 'G' },
        { ra: 180.3708, dec: -57.5036, magnitude: 6.16, spectralType: 'A' },
        { ra: 180.4146, dec: 36.0419, magnitude: 5.59, spectralType: 'K' },
        { ra: 180.5283, dec: 43.0456, magnitude: 5.21, spectralType: 'F' },  // 67 UMa
        { ra: 180.5838, dec: -85.6317, magnitude: 6.05, spectralType: 'K' },
        { ra: 180.6192, dec: -71.4889, magnitude: 6.42, spectralType: 'K' },
        { ra: 180.6571, dec: -69.1922, magnitude: 5.89, spectralType: 'B' },
        { ra: 180.715, dec: -7.6836, magnitude: 6.22, spectralType: 'K' },
        { ra: 180.7562, dec: -63.3128, magnitude: 4.33, spectralType: 'A' },  // The1Cru
        { ra: 180.915, dec: -42.4342, magnitude: 5.15, spectralType: 'F' },
        { ra: 180.9346, dec: -74.2139, magnitude: 6.44, spectralType: 'G' },
        { ra: 181.0692, dec: 21.4592, magnitude: 5.87, spectralType: 'F' },  // 2 Com
        { ra: 181.08, dec: -63.1656, magnitude: 4.72, spectralType: 'B' },  // The2Cru
        { ra: 181.1612, dec: -68.3292, magnitude: 5.35, spectralType: 'A' },
        { ra: 181.1937, dec: -76.5192, magnitude: 5.04, spectralType: 'K' },  // Kap Cha
        { ra: 181.1171, dec: 85.5872, magnitude: 6.27, spectralType: 'F' },
        { ra: 181.2379, dec: -60.9692, magnitude: 5.96, spectralType: 'M' },
        { ra: 181.3021, dec: 8.7331, magnitude: 4.12, spectralType: 'G' },  // 9Omi Vir
        { ra: 181.3129, dec: 76.9058, magnitude: 5.8, spectralType: 'G' },
        { ra: 181.4154, dec: 62.9331, magnitude: 6.13, spectralType: 'K' },
        { ra: 181.4717, dec: -65.5472, magnitude: 6.33, spectralType: 'B' },
        { ra: 181.4863, dec: -35.6939, magnitude: 6.23, spectralType: 'B' },
        { ra: 181.4992, dec: -3.1317, magnitude: 6.37, spectralType: 'G' },
        { ra: 181.5825, dec: -68.6508, magnitude: 6.23, spectralType: 'G' },
        { ra: 181.5962, dec: -65.7092, magnitude: 6.06, spectralType: 'G' },
        { ra: 181.7204, dec: -64.6136, magnitude: 4.15, spectralType: 'F' },  // Eta Cru
        { ra: 181.9575, dec: -75.3669, magnitude: 5.18, spectralType: 'K' },
        { ra: 182.0217, dec: -50.6614, magnitude: 4.47, spectralType: 'B' },
        { ra: 182.02, dec: -50.7633, magnitude: 6.37, spectralType: 'B' },
        { ra: 182.0613, dec: -48.6928, magnitude: 5.34, spectralType: 'B' },
        { ra: 182.0896, dec: -50.7225, magnitude: 2.6, spectralType: 'B' },  // Del Cen
        { ra: 182.1025, dec: -60.8472, magnitude: 6.22, spectralType: 'K' },
        { ra: 182.1033, dec: -24.7289, magnitude: 4.02, spectralType: 'F' },  // 1Alp Crv
        { ra: 182.2242, dec: -44.3261, magnitude: 5.75, spectralType: 'A' },
        { ra: 182.2271, dec: -41.2314, magnitude: 5.48, spectralType: 'B' },
        { ra: 182.4221, dec: 1.8978, magnitude: 5.95, spectralType: 'K' },  // 10 Vir
        { ra: 182.4471, dec: 74.6614, magnitude: 6.35, spectralType: 'F' },
        { ra: 182.5104, dec: -34.705, magnitude: 6.17, spectralType: 'A' },
        { ra: 182.5142, dec: 5.8069, magnitude: 5.72, spectralType: 'F' },  // 11 Vir
        { ra: 182.5312, dec: -22.6197, magnitude: 3.0, spectralType: 'K' },  // 2Eps Crv
        { ra: 182.6408, dec: -37.8703, magnitude: 6.06, spectralType: 'A' },
        { ra: 182.6317, dec: 16.8092, magnitude: 6.39, spectralType: 'A' },  // 3 Com
        { ra: 182.6921, dec: 27.2814, magnitude: 6.01, spectralType: 'A' },
        { ra: 182.7704, dec: -61.2775, magnitude: 6.08, spectralType: 'F' },
        { ra: 182.7663, dec: -23.6025, magnitude: 5.46, spectralType: 'A' },  // 3 Crv
        { ra: 182.7621, dec: -45.4228, magnitude: 6.61, spectralType: 'K' },
        { ra: 182.8808, dec: -51.3594, magnitude: 6.23, spectralType: 'G' },
        { ra: 182.9129, dec: -52.3686, magnitude: 3.96, spectralType: 'B' },  // Rho Cen
        { ra: 182.75, dec: 81.71, magnitude: 6.0, spectralType: 'K' },
        { ra: 182.9633, dec: 25.8703, magnitude: 5.66, spectralType: 'K' },  // 4 Com
        { ra: 182.9371, dec: 57.0544, magnitude: 6.43, spectralType: 'K' },  // 68 UMa
        { ra: 183.005, dec: 28.5361, magnitude: 6.49, spectralType: 'F' },
        { ra: 183.0387, dec: 20.5419, magnitude: 5.57, spectralType: 'K' },  // 5 Com
        { ra: 183.0917, dec: -62.9508, magnitude: 5.92, spectralType: 'B' },
        { ra: 183.195, dec: -70.1519, magnitude: 6.17, spectralType: 'F' },
        { ra: 183.0496, dec: 77.6164, magnitude: 5.14, spectralType: 'A' },
        { ra: 183.3042, dec: -34.1256, magnitude: 6.5, spectralType: 'M' },
        { ra: 183.3554, dec: -38.9292, magnitude: 5.76, spectralType: 'B' },
        { ra: 183.4821, dec: -78.5736, magnitude: 6.35, spectralType: 'K' },
        { ra: 183.3579, dec: 10.2622, magnitude: 5.85, spectralType: 'A' },  // 12 Vir
        { ra: 183.4029, dec: -33.7928, magnitude: 6.33, spectralType: 'A' },
        { ra: 183.5108, dec: -45.7239, magnitude: 5.31, spectralType: 'K' },
        { ra: 183.57, dec: -64.4086, magnitude: 6.22, spectralType: 'B' },
        { ra: 183.6808, dec: 53.4347, magnitude: 6.16, spectralType: 'K' },
        { ra: 183.7483, dec: -20.8442, magnitude: 5.83, spectralType: 'G' },
        { ra: 183.7862, dec: -58.7489, magnitude: 2.8, spectralType: 'B' },  // Del Cru
        { ra: 183.7942, dec: -10.3125, magnitude: 6.11, spectralType: 'F' },
        { ra: 183.8771, dec: -41.9131, magnitude: 6.26, spectralType: 'K' },
        { ra: 183.7854, dec: 70.2, magnitude: 5.71, spectralType: 'K' },
        { ra: 183.8567, dec: 57.0325, magnitude: 3.31, spectralType: 'A' },  // 69Del UMa
        { ra: 183.9458, dec: -23.3536, magnitude: 6.54, spectralType: 'F' },
        { ra: 183.9517, dec: -17.5419, magnitude: 2.59, spectralType: 'B' },  // 4Gam Crv
        { ra: 184.0008, dec: 14.8989, magnitude: 5.1, spectralType: 'A' },  // 6 Com
        { ra: 184.0979, dec: -72.6147, magnitude: 6.22, spectralType: 'A' },
        { ra: 183.9225, dec: 72.5508, magnitude: 6.29, spectralType: 'K' },
        { ra: 184.0317, dec: 40.6603, magnitude: 5.66, spectralType: 'M' },  // 2 CVn
        { ra: 184.0854, dec: 23.9453, magnitude: 4.95, spectralType: 'G' },  // 7 Com
        { ra: 184.1254, dec: 33.0614, magnitude: 5.0, spectralType: 'K' },
        { ra: 184.275, dec: -65.6928, magnitude: 6.06, spectralType: 'A' },
        { ra: 184.2638, dec: -16.6936, magnitude: 6.05, spectralType: 'A' },
        { ra: 184.3921, dec: -67.9608, magnitude: 4.11, spectralType: 'M' },  // Eps Mus
        { ra: 184.3729, dec: 53.1911, magnitude: 5.81, spectralType: 'K' },
        { ra: 184.3771, dec: 28.9372, magnitude: 5.7, spectralType: 'A' },
        { ra: 184.5863, dec: -79.3122, magnitude: 4.26, spectralType: 'B' },  // Bet Cha
        { ra: 184.4471, dec: -36.0939, magnitude: 6.15, spectralType: 'A' },
        { ra: 184.4346, dec: 15.1442, magnitude: 6.34, spectralType: 'K' },
        { ra: 184.5379, dec: -3.9544, magnitude: 6.99, spectralType: 'F' },
        { ra: 184.54, dec: -3.9486, magnitude: 6.54, spectralType: 'F' },
        { ra: 184.6088, dec: -64.0031, magnitude: 4.04, spectralType: 'B' },  // Zet Cru
        { ra: 184.6317, dec: 30.2492, magnitude: 6.23, spectralType: 'A' },
        { ra: 184.6679, dec: -0.7872, magnitude: 5.9, spectralType: 'A' },  // 13 Vir
        { ra: 184.7488, dec: -55.1431, magnitude: 5.0, spectralType: 'M' },
        { ra: 184.2142, dec: 86.4361, magnitude: 6.33, spectralType: 'F' },
        { ra: 184.7587, dec: 26.0078, magnitude: 6.48, spectralType: 'A' },
        { ra: 184.8296, dec: 23.0347, magnitude: 6.27, spectralType: 'A' },  // 8 Com
        { ra: 183.8346, dec: 87.7, magnitude: 6.28, spectralType: 'F' },
        { ra: 184.7079, dec: 75.1606, magnitude: 5.38, spectralType: 'A' },
        { ra: 184.8733, dec: 28.1569, magnitude: 6.33, spectralType: 'F' },  // 9 Com
        { ra: 184.9767, dec: -0.6669, magnitude: 3.89, spectralType: 'A' },  // 15Eta Vir
        { ra: 184.9529, dec: 48.9842, magnitude: 5.29, spectralType: 'M' },  // 3 CVn
        { ra: 185.0446, dec: -22.1756, magnitude: 5.97, spectralType: 'G' },
        { ra: 185.1167, dec: -65.8428, magnitude: 6.21, spectralType: 'B' },
        { ra: 185.0821, dec: 26.6194, magnitude: 5.54, spectralType: 'K' },
        { ra: 185.0738, dec: 26.0019, magnitude: 6.15, spectralType: 'F' },
        { ra: 185.0875, dec: 3.3125, magnitude: 4.96, spectralType: 'K' },  // 16 Vir
        { ra: 185.1404, dec: -22.2158, magnitude: 5.21, spectralType: 'B' },  // 5Zet Crv
        { ra: 185.1792, dec: 17.7928, magnitude: 4.74, spectralType: 'G' },  // 11 Com
        { ra: 185.1721, dec: 27.0547, magnitude: 7.13, spectralType: 'F' },
        { ra: 185.2321, dec: -13.5656, magnitude: 5.14, spectralType: 'K' },
        { ra: 185.34, dec: -60.4011, magnitude: 3.59, spectralType: 'K' },  // Eps Cru
        { ra: 185.2117, dec: 57.8639, magnitude: 5.55, spectralType: 'K' },  // 70 UMa
        { ra: 185.4896, dec: -56.3747, magnitude: 5.92, spectralType: 'K' },
        { ra: 185.5304, dec: -67.5219, magnitude: 5.15, spectralType: 'A' },  // Zet2Mus
        { ra: 185.5496, dec: -68.3075, magnitude: 5.74, spectralType: 'K' },  // Zet1Mus
        { ra: 185.545, dec: 24.7739, magnitude: 6.19, spectralType: 'A' },
        { ra: 185.7054, dec: -57.6761, magnitude: 5.39, spectralType: 'B' },
        { ra: 185.6263, dec: 25.8461, magnitude: 4.81, spectralType: 'G' },  // 12 Com
        { ra: 185.6333, dec: 5.3056, magnitude: 6.4, spectralType: 'F' },  // 17 Vir
        { ra: 186.4062, dec: -86.1506, magnitude: 6.33, spectralType: 'K' },
        { ra: 185.8075, dec: -67.6317, magnitude: 6.36, spectralType: 'G' },
        { ra: 185.84, dec: -24.8406, magnitude: 5.68, spectralType: 'K' },  // 6 Crv
        { ra: 185.8975, dec: -35.4128, magnitude: 5.32, spectralType: 'B' },
        { ra: 185.9037, dec: -39.3031, magnitude: 6.4, spectralType: 'F' },
        { ra: 185.9371, dec: -38.9111, magnitude: 5.79, spectralType: 'B' },
        { ra: 185.9458, dec: 42.5428, magnitude: 6.06, spectralType: 'F' },  // 4 CVn
        { ra: 186.0062, dec: 51.5622, magnitude: 4.8, spectralType: 'G' },  // 5 CVn
        { ra: 186.0771, dec: 26.0986, magnitude: 5.18, spectralType: 'A' },  // 13 Com
        { ra: 186.1863, dec: -41.3842, magnitude: 6.25, spectralType: 'K' },
        { ra: 186.1112, dec: 25.5828, magnitude: 6.42, spectralType: 'A' },
        { ra: 186.3221, dec: -65.7706, magnitude: 6.3, spectralType: 'G' },
        { ra: 186.2854, dec: -42.5144, magnitude: 6.11, spectralType: 'G' },
        { ra: 186.2987, dec: -11.6103, magnitude: 5.95, spectralType: 'A' },
        { ra: 186.3267, dec: -27.7492, magnitude: 6.09, spectralType: 'K' },
        { ra: 186.3408, dec: -35.1864, magnitude: 5.73, spectralType: 'B' },
        { ra: 186.3129, dec: 23.9261, magnitude: 6.03, spectralType: 'K' },
        { ra: 186.2633, dec: 56.7775, magnitude: 5.81, spectralType: 'M' },  // 71 UMa
        { ra: 186.2767, dec: 63.8028, magnitude: 6.32, spectralType: 'G' },
        { ra: 186.4621, dec: 39.0186, magnitude: 5.02, spectralType: 'G' },  // 6 CVn
        { ra: 186.6288, dec: -63.1225, magnitude: 4.86, spectralType: 'B' },
        { ra: 186.6496, dec: -63.0992, magnitude: 1.33, spectralType: 'B' },  // Alp1Cru
        { ra: 186.6521, dec: -63.0994, magnitude: 1.73, spectralType: 'B' },  // Alp2Cru
        { ra: 186.6317, dec: -51.4508, magnitude: 4.82, spectralType: 'B' },
        { ra: 186.6004, dec: 27.2683, magnitude: 4.95, spectralType: 'F' },  // 14 Com
        { ra: 186.7008, dec: -48.9133, magnitude: 6.26, spectralType: 'G' },
        { ra: 186.7154, dec: -32.83, magnitude: 5.55, spectralType: 'B' },
        { ra: 186.8525, dec: -63.7892, magnitude: 6.0, spectralType: 'B' },
        { ra: 186.7346, dec: 28.2683, magnitude: 4.36, spectralType: 'K' },  // 15Gam Com
        { ra: 186.7471, dec: 26.8256, magnitude: 5.0, spectralType: 'A' },  // 16 Com
        { ra: 186.8696, dec: -58.9919, magnitude: 5.5, spectralType: 'M' },
        { ra: 186.6008, dec: 71.9297, magnitude: 6.24, spectralType: 'G' },
        { ra: 186.9254, dec: 8.6103, magnitude: 6.37, spectralType: 'G' },
        { ra: 186.9558, dec: -16.6319, magnitude: 6.35, spectralType: 'G' },
        { ra: 187.01, dec: -50.2306, magnitude: 3.91, spectralType: 'B' },  // Sig Cen
        { ra: 187.0788, dec: -64.3414, magnitude: 6.04, spectralType: 'A' },
        { ra: 186.8963, dec: 55.7128, magnitude: 5.7, spectralType: 'M' },  // 73 UMa
        { ra: 186.965, dec: -4.6153, magnitude: 6.22, spectralType: 'A' },
        { ra: 187.1063, dec: -61.7953, magnitude: 6.22, spectralType: 'K' },
        { ra: 187.0938, dec: -39.0414, magnitude: 5.44, spectralType: 'B' },
        { ra: 187.1392, dec: -56.4078, magnitude: 6.15, spectralType: 'K' },
        { ra: 187.1587, dec: 26.2267, magnitude: 6.54, spectralType: 'A' },
        { ra: 187.1858, dec: 25.8992, magnitude: 6.65, spectralType: 'A' },
        { ra: 187.2279, dec: 25.9128, magnitude: 5.29, spectralType: 'A' },  // 17 Com
        { ra: 187.3621, dec: 24.1089, magnitude: 5.48, spectralType: 'F' },  // 18 Com
        { ra: 187.4746, dec: -56.5247, magnitude: 5.8, spectralType: 'M' },
        { ra: 187.4912, dec: -41.7361, magnitude: 6.02, spectralType: 'M' },
        { ra: 187.43, dec: 20.8961, magnitude: 5.69, spectralType: 'A' },  // 20 Com
        { ra: 187.4663, dec: -16.5156, magnitude: 2.95, spectralType: 'B' },  // 7Del Crv
        { ra: 187.52, dec: -13.3931, magnitude: 6.35, spectralType: 'G' },
        { ra: 187.5729, dec: -23.6967, magnitude: 5.63, spectralType: 'M' },
        { ra: 187.4888, dec: 58.4058, magnitude: 5.35, spectralType: 'A' },  // 74 UMa
        { ra: 187.5121, dec: 51.5356, magnitude: 6.21, spectralType: 'F' },  // 7 CVn
        { ra: 187.5179, dec: 58.7675, magnitude: 6.08, spectralType: 'G' },  // 75 UMa
        { ra: 187.7913, dec: -57.1133, magnitude: 1.63, spectralType: 'M' },  // Gam Cru
        { ra: 187.8196, dec: -57.0811, magnitude: 6.42, spectralType: 'A' },  // Gam Cru
        { ra: 187.5279, dec: 69.2011, magnitude: 4.95, spectralType: 'M' },  // 4 Dra
        { ra: 187.7525, dec: 24.5672, magnitude: 5.46, spectralType: 'A' },  // 21 Com
        { ra: 187.7088, dec: 53.0767, magnitude: 6.21, spectralType: 'F' },
        { ra: 187.9179, dec: -59.4239, magnitude: 5.48, spectralType: 'F' },
        { ra: 188.0417, dec: -73.0017, magnitude: 5.88, spectralType: 'K' },
        { ra: 187.8392, dec: 7.6042, magnitude: 6.05, spectralType: 'K' },
        { ra: 187.9825, dec: -63.5061, magnitude: 5.95, spectralType: 'A' },
        { ra: 187.9112, dec: -5.0525, magnitude: 6.19, spectralType: 'G' },
        { ra: 188.1167, dec: -72.1331, magnitude: 3.87, spectralType: 'B' },  // Gam Mus
        { ra: 188.0188, dec: -32.5336, magnitude: 6.46, spectralType: 'A' },
        { ra: 188.0175, dec: -16.1961, magnitude: 4.31, spectralType: 'F' },  // 8Eta Crv
        { ra: 188.15, dec: -13.8592, magnitude: 5.74, spectralType: 'F' },
        { ra: 188.2621, dec: 10.2956, magnitude: 6.26, spectralType: 'G' },  // 20 Vir
        { ra: 188.3433, dec: -19.7919, magnitude: 6.26, spectralType: 'F' },
        { ra: 188.3929, dec: -12.8303, magnitude: 5.58, spectralType: 'G' },
        { ra: 188.3925, dec: 24.2831, magnitude: 6.29, spectralType: 'A' },  // 22 Com
        { ra: 188.445, dec: -9.4519, magnitude: 5.48, spectralType: 'A' },  // 21 Vir
        { ra: 188.4967, dec: -49.9094, magnitude: 6.38, spectralType: 'F' },
        { ra: 188.4121, dec: 33.2475, magnitude: 5.42, spectralType: 'K' },
        { ra: 188.4475, dec: 33.3847, magnitude: 6.24, spectralType: 'K' },
        { ra: 188.4354, dec: 41.3575, magnitude: 4.26, spectralType: 'G' },  // 8Bet CVn
        { ra: 188.5967, dec: -23.3967, magnitude: 2.65, spectralType: 'G' },  // 9Bet Crv
        { ra: 188.3708, dec: 69.7883, magnitude: 3.87, spectralType: 'B' },  // 5Kap Dra
        { ra: 188.6762, dec: -44.6733, magnitude: 5.77, spectralType: 'G' },
        { ra: 188.7129, dec: 22.6292, magnitude: 4.81, spectralType: 'A' },  // 23 Com
        { ra: 188.8708, dec: -61.8419, magnitude: 6.22, spectralType: 'G' },
        { ra: 188.7763, dec: 18.3772, magnitude: 6.56, spectralType: 'A' },  // 24 Com
        { ra: 188.7825, dec: 18.3769, magnitude: 5.02, spectralType: 'K' },  // 24 Com
        { ra: 188.7837, dec: 21.8814, magnitude: 5.85, spectralType: 'K' },
        { ra: 188.9396, dec: -41.0219, magnitude: 5.13, spectralType: 'A' },
        { ra: 188.6833, dec: 70.0219, magnitude: 4.94, spectralType: 'K' },  // 6 Dra
        { ra: 189.005, dec: -39.87, magnitude: 5.8, spectralType: 'A' },
        { ra: 188.9942, dec: -20.5272, magnitude: 6.2, spectralType: 'F' },
        { ra: 189.2958, dec: -69.1356, magnitude: 2.69, spectralType: 'B' },  // Alp Mus
        { ra: 189.1975, dec: -5.8319, magnitude: 5.87, spectralType: 'A' },  // 25 Vir
        { ra: 189.0971, dec: 59.4869, magnitude: 5.5, spectralType: 'M' },
        { ra: 189.2429, dec: 17.0894, magnitude: 5.68, spectralType: 'K' },  // 25 Com
        { ra: 189.4258, dec: -48.5411, magnitude: 3.86, spectralType: 'A' },  // Tau Cen
        { ra: 189.4258, dec: -27.1389, magnitude: 5.45, spectralType: 'F' },
        { ra: 189.8104, dec: -75.3694, magnitude: 6.49, spectralType: 'B' },
        { ra: 189.5183, dec: 3.2825, magnitude: 6.33, spectralType: 'A' },
        { ra: 189.7187, dec: -67.1931, magnitude: 6.25, spectralType: 'B' },
        { ra: 189.5933, dec: 1.8547, magnitude: 5.71, spectralType: 'M' },
        { ra: 189.625, dec: 6.9883, magnitude: 7.08, spectralType: 'M' },
        { ra: 189.6858, dec: -18.2503, magnitude: 6.0, spectralType: 'A' },
        { ra: 189.7646, dec: -30.4222, magnitude: 5.89, spectralType: 'K' },
        { ra: 189.6929, dec: 40.8744, magnitude: 6.37, spectralType: 'A' },  // 9 CVn
        { ra: 189.7587, dec: 22.6594, magnitude: 6.38, spectralType: 'K' },
        { ra: 189.8117, dec: -7.9956, magnitude: 4.66, spectralType: 'K' },  // 26Chi Vir
        { ra: 189.9817, dec: -66.5117, magnitude: 6.26, spectralType: 'B' },
        { ra: 189.7804, dec: 21.0625, magnitude: 5.46, spectralType: 'G' },  // 26 Com
        { ra: 189.8204, dec: 35.9519, magnitude: 6.45, spectralType: 'A' },
        { ra: 189.9688, dec: -39.9875, magnitude: 4.64, spectralType: 'B' },
        { ra: 190.3458, dec: -46.1456, magnitude: 5.84, spectralType: 'K' },
        { ra: 190.3792, dec: -48.9597, magnitude: 2.17, spectralType: 'A' },  // Gam Cen
        { ra: 190.5213, dec: -69.4075, magnitude: 6.33, spectralType: 'F' },
        { ra: 190.3167, dec: -13.0136, magnitude: 6.08, spectralType: 'F' },
        { ra: 190.3175, dec: -13.015, magnitude: 5.98, spectralType: 'F' },
        { ra: 190.4858, dec: -59.6858, magnitude: 4.93, spectralType: 'B' },
        { ra: 190.3933, dec: 10.4264, magnitude: 6.19, spectralType: 'A' },  // 27 Vir
        { ra: 190.415, dec: -1.4494, magnitude: 3.65, spectralType: 'F' },  // 29Gam Vir
        { ra: 190.415, dec: -1.4494, magnitude: 3.68, spectralType: 'F' },  // 29Gam Vir
        { ra: 190.455, dec: -19.7586, magnitude: 6.03, spectralType: 'F' },
        { ra: 190.4712, dec: 10.2356, magnitude: 4.88, spectralType: 'A' },  // 30Rho Vir
        { ra: 190.4879, dec: 6.8067, magnitude: 5.59, spectralType: 'A' },  // 31 Vir
        { ra: 190.7096, dec: -63.0586, magnitude: 5.31, spectralType: 'B' },
        { ra: 190.6475, dec: -48.8131, magnitude: 4.66, spectralType: 'K' },
        { ra: 190.7067, dec: -55.9472, magnitude: 6.08, spectralType: 'B' },
        { ra: 190.3913, dec: 62.7131, magnitude: 6.07, spectralType: 'A' },  // 76 UMa
        { ra: 190.7879, dec: -56.1761, magnitude: 6.0, spectralType: 'B' },
        { ra: 190.8675, dec: -58.9031, magnitude: 6.4, spectralType: 'K' },
        { ra: 190.8596, dec: -40.1778, magnitude: 6.44, spectralType: 'A' },
        { ra: 190.9087, dec: -1.5769, magnitude: 5.93, spectralType: 'G' },
        { ra: 190.9946, dec: -36.3492, magnitude: 6.39, spectralType: 'A' },
        { ra: 191.0021, dec: -28.3239, magnitude: 5.48, spectralType: 'K' },
        { ra: 190.7675, dec: 61.1556, magnitude: 6.38, spectralType: 'K' },
        { ra: 191.2571, dec: -68.8311, magnitude: 6.16, spectralType: 'F' },
        { ra: 191.4079, dec: -60.9811, magnitude: 4.69, spectralType: 'K' },  // Iot Cru
        { ra: 191.1129, dec: 44.1031, magnitude: 6.33, spectralType: 'F' },
        { ra: 191.5704, dec: -68.1081, magnitude: 3.05, spectralType: 'B' },  // Bet Mus
        { ra: 191.2479, dec: 39.2789, magnitude: 5.95, spectralType: 'G' },  // 10 CVn
        { ra: 191.2825, dec: 45.4403, magnitude: 4.99, spectralType: 'G' },
        { ra: 191.4046, dec: 7.6733, magnitude: 5.22, spectralType: 'F' },  // 32 Vir
        { ra: 191.5946, dec: -56.4889, magnitude: 4.65, spectralType: 'B' },
        { ra: 191.5938, dec: 9.54, magnitude: 5.67, spectralType: 'K' },  // 33 Vir
        { ra: 191.6917, dec: -33.3156, magnitude: 5.86, spectralType: 'K' },
        { ra: 191.6612, dec: 16.5775, magnitude: 5.12, spectralType: 'K' },  // 27 Com
        { ra: 191.1083, dec: 80.6211, magnitude: 6.4, spectralType: 'A' },
        { ra: 191.93, dec: -59.6886, magnitude: 1.25, spectralType: 'B' },  // Bet Cru
        { ra: 191.7596, dec: 5.9508, magnitude: 6.34, spectralType: 'A' },
        { ra: 191.8067, dec: 11.9581, magnitude: 6.07, spectralType: 'A' },  // 34 Vir
        { ra: 191.8892, dec: -6.3019, magnitude: 6.26, spectralType: 'F' },
        { ra: 191.9737, dec: -24.8517, magnitude: 6.44, spectralType: 'B' },
        { ra: 191.9642, dec: 3.5728, magnitude: 6.41, spectralType: 'M' },  // 35 Vir
        { ra: 191.8288, dec: 62.7808, magnitude: 5.89, spectralType: 'A' },
        { ra: 192.11, dec: -27.5975, magnitude: 5.66, spectralType: 'G' },
        { ra: 192.0596, dec: 13.5531, magnitude: 6.56, spectralType: 'A' },  // 28 Com
        { ra: 192.4371, dec: -71.9864, magnitude: 5.55, spectralType: 'G' },
        { ra: 191.8933, dec: 66.7903, magnitude: 5.43, spectralType: 'K' },  // 7 Dra
        { ra: 192.1958, dec: 24.8403, magnitude: 6.31, spectralType: 'G' },
        { ra: 192.2258, dec: 14.1225, magnitude: 5.7, spectralType: 'A' },  // 29 Com
        { ra: 192.1742, dec: 48.4669, magnitude: 6.27, spectralType: 'A' },  // 11 CVn
        { ra: 192.1642, dec: 60.32, magnitude: 5.85, spectralType: 'F' },
        { ra: 192.55, dec: -60.4008, magnitude: 6.75, spectralType: 'A' },
        { ra: 192.3225, dec: 27.5522, magnitude: 5.78, spectralType: 'A' },  // 30 Com
        { ra: 193.7442, dec: -85.1233, magnitude: 5.46, spectralType: 'K' },  // Iot Oct
        { ra: 192.5817, dec: -48.4597, magnitude: 6.24, spectralType: 'A' },
        { ra: 192.7413, dec: -52.7875, magnitude: 5.73, spectralType: 'A' },
        { ra: 192.5725, dec: 22.8633, magnitude: 6.43, spectralType: 'K' },
        { ra: 192.6717, dec: -33.9994, magnitude: 4.91, spectralType: 'A' },
        { ra: 192.5446, dec: 37.5169, magnitude: 5.89, spectralType: 'A' },
        { ra: 192.8242, dec: -60.3297, magnitude: 5.72, spectralType: 'A' },
        { ra: 192.8454, dec: -10.3383, magnitude: 6.41, spectralType: 'G' },
        { ra: 192.9037, dec: 3.0567, magnitude: 6.02, spectralType: 'K' },  // 37 Vir
        { ra: 192.9867, dec: -39.6808, magnitude: 5.98, spectralType: 'B' },
        { ra: 193.0221, dec: -48.0942, magnitude: 6.33, spectralType: 'A' },
        { ra: 192.9912, dec: -26.7381, magnitude: 6.15, spectralType: 'A' },
        { ra: 193.1025, dec: -53.8294, magnitude: 6.24, spectralType: 'G' },
        { ra: 192.9246, dec: 27.5406, magnitude: 4.94, spectralType: 'G' },  // 31 Com
        { ra: 193.0513, dec: 17.0739, magnitude: 6.32, spectralType: 'M' },  // 32 Com
        { ra: 193.2663, dec: -54.9525, magnitude: 5.93, spectralType: 'K' },
        { ra: 193.115, dec: 16.1225, magnitude: 6.3, spectralType: 'A' },
        { ra: 193.3408, dec: -60.3286, magnitude: 5.76, spectralType: 'B' },
        { ra: 193.2788, dec: -48.9433, magnitude: 4.33, spectralType: 'K' },
        { ra: 193.3592, dec: -40.1789, magnitude: 4.27, spectralType: 'A' },
        { ra: 193.4546, dec: -60.3769, magnitude: 5.9, spectralType: 'B' },  // Kap Cru
        { ra: 193.2967, dec: -3.5531, magnitude: 6.11, spectralType: 'F' },  // 38 Vir
        { ra: 192.2775, dec: 83.4181, magnitude: 5.85, spectralType: 'A' },
        { ra: 192.3067, dec: 83.4128, magnitude: 5.28, spectralType: 'A' },
        { ra: 193.3242, dec: 21.245, magnitude: 4.9, spectralType: 'G' },  // 35 Com
        { ra: 193.5917, dec: -58.4306, magnitude: 6.58, spectralType: 'F' },
        { ra: 193.4087, dec: -4.2239, magnitude: 6.44, spectralType: 'K' },
        { ra: 193.6633, dec: -59.1467, magnitude: 4.62, spectralType: 'B' },  // Lam Cru
        { ra: 193.6483, dec: -57.1778, magnitude: 4.03, spectralType: 'B' },  // Mu 1Cru
        { ra: 193.6533, dec: -57.1683, magnitude: 5.17, spectralType: 'B' },  // Mu 2Cru
        { ra: 193.4571, dec: 12.4186, magnitude: 6.25, spectralType: 'A' },  // 41 Vir
        { ra: 193.5779, dec: -11.6486, magnitude: 6.0, spectralType: 'A' },
        { ra: 193.5883, dec: -9.5389, magnitude: 4.79, spectralType: 'M' },  // 40Psi Vir
        { ra: 193.7438, dec: -44.1519, magnitude: 5.89, spectralType: 'G' },
        { ra: 193.5546, dec: 33.5344, magnitude: 6.26, spectralType: 'A' },
        { ra: 193.5071, dec: 55.9597, magnitude: 1.77, spectralType: 'A' },  // 77Eps UMa
        { ra: 193.8308, dec: -42.9158, magnitude: 5.47, spectralType: 'M' },
        { ra: 194.1312, dec: -72.1853, magnitude: 5.93, spectralType: 'G' },
        { ra: 193.9875, dec: -56.8361, magnitude: 5.32, spectralType: 'O' },
        { ra: 193.7354, dec: 47.1967, magnitude: 5.84, spectralType: 'M' },
        { ra: 193.9008, dec: 3.3975, magnitude: 3.38, spectralType: 'M' },  // 43Del Vir
        { ra: 193.9721, dec: -15.3269, magnitude: 6.17, spectralType: 'A' },
        { ra: 194.1254, dec: -26.4603, magnitude: 6.62, spectralType: 'F' },
        { ra: 194.2683, dec: -51.1986, magnitude: 5.16, spectralType: 'B' },
        { ra: 194.0017, dec: 38.3147, magnitude: 5.6, spectralType: 'F' },  // 12Alp1CVn
        { ra: 194.0071, dec: 38.3183, magnitude: 2.9, spectralType: 'A' },  // 12Alp2CVn
        { ra: 193.8687, dec: 65.4386, magnitude: 5.24, spectralType: 'F' },  // 8 Dra
        { ra: 194.0733, dec: 54.0994, magnitude: 5.82, spectralType: 'A' },
        { ra: 194.3883, dec: -22.7539, magnitude: 6.31, spectralType: 'G' },
        { ra: 194.2821, dec: 46.1769, magnitude: 6.12, spectralType: 'K' },
        { ra: 194.7308, dec: 17.4094, magnitude: 4.78, spectralType: 'M' },  // 36 Com
        { ra: 194.9146, dec: -3.8119, magnitude: 5.79, spectralType: 'A' },  // 44 Vir
        { ra: 195.1358, dec: -33.5053, magnitude: 6.02, spectralType: 'F' },
        { ra: 195.5675, dec: -71.5489, magnitude: 3.62, spectralType: 'K' },  // Del Mus
        { ra: 195.0687, dec: 30.785, magnitude: 4.9, spectralType: 'G' },  // 37 Com
        { ra: 195.1496, dec: -3.3686, magnitude: 5.99, spectralType: 'K' },  // 46 Vir
        { ra: 195.1617, dec: 18.3731, magnitude: 6.2, spectralType: 'F' },
        { ra: 194.6971, dec: 75.4725, magnitude: 6.01, spectralType: 'K' },
        { ra: 194.9796, dec: 66.5972, magnitude: 5.32, spectralType: 'K' },  // 9 Dra
        { ra: 195.29, dec: 17.1231, magnitude: 5.96, spectralType: 'K' },  // 38 Com
        { ra: 195.7717, dec: -71.4761, magnitude: 6.03, spectralType: 'B' },
        { ra: 195.1825, dec: 56.3664, magnitude: 4.93, spectralType: 'F' },  // 78 UMa
        { ra: 195.5442, dec: 10.9592, magnitude: 2.83, spectralType: 'G' },  // 47Eps Vir
        { ra: 195.8883, dec: -49.5272, magnitude: 4.85, spectralType: 'A' },  // Xi 1Cen
        { ra: 195.445, dec: 63.6103, magnitude: 6.0, spectralType: 'F' },
        { ra: 195.9421, dec: -20.5831, magnitude: 5.58, spectralType: 'F' },
        { ra: 195.6683, dec: 59.7161, magnitude: 6.53, spectralType: 'A' },
        { ra: 195.9767, dec: -3.6633, magnitude: 6.59, spectralType: 'F' },  // 48 Vir
        { ra: 196.2004, dec: -41.1967, magnitude: 6.26, spectralType: 'M' },
        { ra: 196.3783, dec: -52.115, magnitude: 6.43, spectralType: 'M' },
        { ra: 196.5696, dec: -48.4636, magnitude: 4.71, spectralType: 'B' },
        { ra: 196.6463, dec: -41.5886, magnitude: 5.59, spectralType: 'K' },
        { ra: 196.7275, dec: -49.9061, magnitude: 4.27, spectralType: 'B' },  // Xi 2Cen
        { ra: 196.4354, dec: 35.7989, magnitude: 5.25, spectralType: 'B' },  // 14 CVn
        { ra: 196.8508, dec: -59.8606, magnitude: 5.99, spectralType: 'F' },
        { ra: 196.4679, dec: 45.2686, magnitude: 5.63, spectralType: 'K' },
        { ra: 196.5883, dec: 21.1533, magnitude: 5.99, spectralType: 'F' },  // 39 Com
        { ra: 196.7262, dec: -35.8619, magnitude: 6.54, spectralType: 'A' },
        { ra: 196.5425, dec: 29.0294, magnitude: 6.54, spectralType: 'A' },
        { ra: 196.5942, dec: 22.6161, magnitude: 5.6, spectralType: 'M' },  // 40 Com
        { ra: 196.2071, dec: 73.0253, magnitude: 6.31, spectralType: 'F' },
        { ra: 196.9096, dec: -53.4597, magnitude: 5.71, spectralType: 'B' },
        { ra: 197.0292, dec: -65.3064, magnitude: 5.51, spectralType: 'B' },  // The Mus
        { ra: 196.5946, dec: 62.0419, magnitude: 6.14, spectralType: 'G' },
        { ra: 196.7946, dec: 27.6247, magnitude: 4.8, spectralType: 'K' },  // 41 Com
        { ra: 196.9742, dec: -10.7403, magnitude: 5.19, spectralType: 'K' },  // 49 Vir
        { ra: 196.9733, dec: 27.5558, magnitude: 6.19, spectralType: 'K' },
        { ra: 197.1354, dec: -8.9844, magnitude: 5.55, spectralType: 'K' },
        { ra: 197.2638, dec: -23.1181, magnitude: 4.95, spectralType: 'K' },  // 45Psi Hya
        { ra: 197.31, dec: -9.5383, magnitude: 6.32, spectralType: 'K' },
        { ra: 197.3017, dec: 10.0222, magnitude: 5.78, spectralType: 'K' },
        { ra: 197.4387, dec: -10.3294, magnitude: 5.94, spectralType: 'K' },  // 50 Vir
        { ra: 197.4492, dec: 16.8486, magnitude: 5.91, spectralType: 'K' },
        { ra: 197.4875, dec: -5.5389, magnitude: 4.38, spectralType: 'A' },  // 51The Vir
        { ra: 197.4112, dec: 37.4231, magnitude: 6.02, spectralType: 'K' },
        { ra: 197.7433, dec: -52.5669, magnitude: 6.06, spectralType: 'A' },
        { ra: 197.965, dec: -69.9419, magnitude: 5.91, spectralType: 'F' },
        { ra: 197.425, dec: 38.5339, magnitude: 6.28, spectralType: 'B' },  // 15 CVn
        { ra: 197.4971, dec: 17.5294, magnitude: 5.22, spectralType: 'F' },  // 42Alp Com
        { ra: 197.4971, dec: 17.5294, magnitude: 5.22, spectralType: 'F' },  // 42Alp Com
        { ra: 197.7867, dec: -42.2331, magnitude: 5.79, spectralType: 'F' },
        { ra: 197.5133, dec: 38.4989, magnitude: 5.91, spectralType: 'A' },  // 17 CVn
        { ra: 197.9712, dec: -63.3028, magnitude: 6.33, spectralType: 'A' },
        { ra: 197.8467, dec: -43.3689, magnitude: 5.25, spectralType: 'K' },
        { ra: 197.4592, dec: 62.2292, magnitude: 6.54, spectralType: 'A' },
        { ra: 198.0725, dec: -59.9208, magnitude: 4.6, spectralType: 'B' },
        { ra: 198.5717, dec: -78.4472, magnitude: 5.85, spectralType: 'F' },
        { ra: 198.2037, dec: -66.2269, magnitude: 5.9, spectralType: 'A' },
        { ra: 197.9133, dec: -26.5517, magnitude: 6.5, spectralType: 'A' },
        { ra: 198.0133, dec: -37.8031, magnitude: 4.85, spectralType: 'G' },
        { ra: 198.2333, dec: -59.8167, magnitude: 6.16, spectralType: 'G' },
        { ra: 198.0146, dec: -16.1986, magnitude: 5.04, spectralType: 'F' },  // 53 Vir
        { ra: 198.2121, dec: -42.6997, magnitude: 6.22, spectralType: 'K' },
        { ra: 197.9683, dec: 27.8781, magnitude: 4.26, spectralType: 'F' },  // 43Bet Com
        { ra: 198.035, dec: 24.2581, magnitude: 6.33, spectralType: 'K' },
        { ra: 198.3479, dec: -50.7, magnitude: 5.89, spectralType: 'B' },
        { ra: 198.1371, dec: 11.5561, magnitude: 5.77, spectralType: 'M' },
        { ra: 198.1496, dec: 18.7517, magnitude: 6.53, spectralType: 'G' },
        { ra: 198.5504, dec: -58.6839, magnitude: 5.89, spectralType: 'K' },
        { ra: 198.5617, dec: -59.1033, magnitude: 4.92, spectralType: 'F' },
        { ra: 198.3617, dec: -18.8267, magnitude: 6.28, spectralType: 'B' },  // 54 Vir
        { ra: 198.4896, dec: -43.1389, magnitude: 6.16, spectralType: 'K' },
        { ra: 198.3017, dec: 18.7269, magnitude: 6.11, spectralType: 'G' },
        { ra: 198.8121, dec: -67.8944, magnitude: 4.8, spectralType: 'B' },  // Eta Mus
        { ra: 198.8571, dec: -69.6797, magnitude: 6.37, spectralType: 'K' },
        { ra: 198.5454, dec: -19.9308, magnitude: 5.33, spectralType: 'G' },  // 55 Vir
        { ra: 198.6796, dec: -48.9567, magnitude: 5.89, spectralType: 'K' },
        { ra: 198.4292, dec: 40.1528, magnitude: 4.92, spectralType: 'G' },
        { ra: 198.6304, dec: 11.3317, magnitude: 5.67, spectralType: 'M' },
        { ra: 198.7904, dec: -36.3711, magnitude: 6.19, spectralType: 'K' },
        { ra: 199.1867, dec: -65.1383, magnitude: 6.07, spectralType: 'F' },
        { ra: 198.995, dec: -19.9431, magnitude: 5.22, spectralType: 'K' },  // 57 Vir
        { ra: 199.3042, dec: -66.7836, magnitude: 4.87, spectralType: 'K' },
        { ra: 198.3833, dec: 72.7989, magnitude: 6.59, spectralType: 'A' },
        { ra: 198.8833, dec: 40.8553, magnitude: 5.79, spectralType: 'A' },  // 19 CVn
        { ra: 199.1063, dec: -1.3906, magnitude: 6.68, spectralType: 'F' },
        { ra: 199.2212, dec: -31.5061, magnitude: 5.1, spectralType: 'K' },
        { ra: 199.0596, dec: 19.0517, magnitude: 6.45, spectralType: 'G' },
        { ra: 199.3079, dec: -43.9794, magnitude: 5.84, spectralType: 'A' },
        { ra: 198.1058, dec: 80.4714, magnitude: 6.25, spectralType: 'K' },
        { ra: 199.1346, dec: 19.7853, magnitude: 6.45, spectralType: 'F' },
        { ra: 199.1938, dec: 9.4242, magnitude: 5.22, spectralType: 'G' },  // 59 Vir
        { ra: 199.8288, dec: -72.0356, magnitude: 6.04, spectralType: 'K' },
        { ra: 199.315, dec: 13.6756, magnitude: 5.33, spectralType: 'K' },
        { ra: 199.3746, dec: -0.6767, magnitude: 6.37, spectralType: 'F' },
        { ra: 199.4013, dec: 5.4697, magnitude: 4.8, spectralType: 'M' },  // 60Sig Vir
        { ra: 199.6442, dec: -51.2861, magnitude: 6.19, spectralType: 'A' },
        { ra: 199.3854, dec: 40.5725, magnitude: 4.73, spectralType: 'F' },  // 20 CVn
        { ra: 199.1192, dec: 68.4081, magnitude: 6.2, spectralType: 'B' },
        { ra: 199.6013, dec: -18.3114, magnitude: 4.74, spectralType: 'G' },  // 61 Vir
        { ra: 199.7304, dec: -23.1717, magnitude: 3.0, spectralType: 'G' },  // 46Gam Hya
        { ra: 199.7129, dec: 3.6878, magnitude: 6.62, spectralType: 'A' },
        { ra: 199.6158, dec: 34.0981, magnitude: 5.82, spectralType: 'K' },
        { ra: 199.5604, dec: 49.6819, magnitude: 5.15, spectralType: 'A' },  // 21 CVn
        { ra: 200.1454, dec: -59.7733, magnitude: 6.18, spectralType: 'F' },
        { ra: 199.7675, dec: 35.1281, magnitude: 6.02, spectralType: 'F' },
        { ra: 200.1575, dec: -52.7481, magnitude: 5.48, spectralType: 'B' },
        { ra: 200.2013, dec: -55.8006, magnitude: 6.02, spectralType: 'B' },
        { ra: 200.1492, dec: -36.7122, magnitude: 2.75, spectralType: 'A' },  // Iot Cen
        { ra: 200.2404, dec: -46.8806, magnitude: 5.77, spectralType: 'K' },
        { ra: 200.7192, dec: -72.1467, magnitude: 6.05, spectralType: 'B' },
        { ra: 200.1733, dec: 2.9417, magnitude: 6.26, spectralType: 'A' },
        { ra: 200.0792, dec: 40.1506, magnitude: 5.6, spectralType: 'K' },  // 23 CVn
        { ra: 200.3746, dec: -19.4889, magnitude: 6.21, spectralType: 'A' },
        { ra: 200.6488, dec: -60.9722, magnitude: 6.18, spectralType: 'B' },
        { ra: 200.6579, dec: -60.9883, magnitude: 4.53, spectralType: 'B' },
        { ra: 200.5675, dec: -52.1831, magnitude: 5.83, spectralType: 'B' },
        { ra: 200.4233, dec: 2.0872, magnitude: 5.69, spectralType: 'A' },
        { ra: 200.7196, dec: -47.9431, magnitude: 6.16, spectralType: 'A' },
        { ra: 200.7608, dec: -48.5628, magnitude: 6.38, spectralType: 'B' },
        { ra: 200.5404, dec: 5.1547, magnitude: 5.87, spectralType: 'A' },  // 64 Vir
        { ra: 201.0021, dec: -64.5358, magnitude: 4.53, spectralType: 'G' },
        { ra: 201.2796, dec: -74.8878, magnitude: 5.05, spectralType: 'K' },  // Iot1Mus
        { ra: 200.7862, dec: -33.19, magnitude: 6.22, spectralType: 'M' },
        { ra: 200.7546, dec: -17.7353, magnitude: 5.37, spectralType: 'K' },  // 63 Vir
        { ra: 200.5158, dec: 43.9031, magnitude: 6.35, spectralType: 'A' },
        { ra: 200.9679, dec: -49.8231, magnitude: 6.48, spectralType: 'G' },
        { ra: 200.8287, dec: -4.9244, magnitude: 5.89, spectralType: 'K' },  // 65 Vir
        { ra: 201.3079, dec: -64.4853, magnitude: 5.31, spectralType: 'F' },
        { ra: 201.4587, dec: -70.6275, magnitude: 5.67, spectralType: 'A' },
        { ra: 201.1383, dec: -5.1639, magnitude: 5.75, spectralType: 'F' },  // 66 Vir
        { ra: 201.8262, dec: -74.6919, magnitude: 6.63, spectralType: 'B' },  // Iot2Mus
        { ra: 200.975, dec: 37.0339, magnitude: 6.07, spectralType: 'M' },
        { ra: 201.1271, dec: 12.4319, magnitude: 6.44, spectralType: 'K' },
        { ra: 200.9812, dec: 54.9253, magnitude: 2.27, spectralType: 'A' },  // 79Zet UMa
        { ra: 200.985, dec: 54.9217, magnitude: 3.95, spectralType: 'A' },  // 79Zet UMa
        { ra: 201.2983, dec: -11.1614, magnitude: 0.98, spectralType: 'B' },  // 67Alp Vir
        { ra: 201.2779, dec: 23.8544, magnitude: 5.78, spectralType: 'A' },
        { ra: 201.5325, dec: -39.7553, magnitude: 5.09, spectralType: 'K' },
        { ra: 201.5475, dec: -1.1925, magnitude: 5.97, spectralType: 'A' },
        { ra: 201.7338, dec: -41.4981, magnitude: 5.69, spectralType: 'K' },
        { ra: 201.7762, dec: -49.1439, magnitude: 6.31, spectralType: 'A' },
        { ra: 201.3063, dec: 54.9881, magnitude: 4.01, spectralType: 'A' },  // 80 UMa
        { ra: 201.8367, dec: -49.3808, magnitude: 6.28, spectralType: 'B' },
        { ra: 201.68, dec: -12.7078, magnitude: 5.25, spectralType: 'M' },  // 68 Vir
        { ra: 201.8113, dec: -40.1631, magnitude: 6.4, spectralType: 'G' },
        { ra: 202.1933, dec: -69.6281, magnitude: 6.2, spectralType: 'A' },
        { ra: 201.5692, dec: 46.0281, magnitude: 5.88, spectralType: 'K' },
        { ra: 201.8633, dec: -15.9736, magnitude: 4.76, spectralType: 'K' },  // 69 Vir
        { ra: 202.2817, dec: -64.6758, magnitude: 6.11, spectralType: 'A' },
        { ra: 201.4996, dec: 63.2611, magnitude: 6.5, spectralType: 'G' },
        { ra: 202.355, dec: -51.1653, magnitude: 5.06, spectralType: 'A' },
        { ra: 202.1075, dec: 13.7789, magnitude: 4.98, spectralType: 'G' },  // 70 Vir
        { ra: 201.5337, dec: 72.3914, magnitude: 5.79, spectralType: 'M' },
        { ra: 201.7692, dec: 64.7356, magnitude: 6.66, spectralType: 'F' },
        { ra: 201.7946, dec: 64.7194, magnitude: 7.04, spectralType: 'F' },
        { ra: 201.9979, dec: 52.7458, magnitude: 6.34, spectralType: 'F' },
        { ra: 202.1092, dec: 40.7297, magnitude: 6.47, spectralType: 'G' },
        { ra: 202.3121, dec: -1.3644, magnitude: 6.43, spectralType: 'K' },
        { ra: 202.0487, dec: 50.5872, magnitude: 6.8, spectralType: 'F' },
        { ra: 202.4283, dec: -23.2814, magnitude: 4.97, spectralType: 'M' },
        { ra: 202.3042, dec: 10.8183, magnitude: 5.65, spectralType: 'K' },  // 71 Vir
        { ra: 203.3117, dec: -77.5683, magnitude: 6.48, spectralType: 'F' },
        { ra: 202.1904, dec: 50.7183, magnitude: 6.43, spectralType: 'F' },
        { ra: 205.2312, dec: -85.7861, magnitude: 5.58, spectralType: 'A' },  // Kap Oct
        { ra: 202.1129, dec: 59.9458, magnitude: 5.4, spectralType: 'A' },
        { ra: 202.5004, dec: 7.1789, magnitude: 6.17, spectralType: 'K' },
        { ra: 202.49, dec: 6.0133, magnitude: 6.51, spectralType: 'K' },
        { ra: 202.6071, dec: -6.4703, magnitude: 6.09, spectralType: 'F' },  // 72 Vir
        { ra: 202.7613, dec: -39.4075, magnitude: 3.88, spectralType: 'G' },
        { ra: 202.8888, dec: -28.1128, magnitude: 6.47, spectralType: 'A' },
        { ra: 201.7363, dec: 78.6439, magnitude: 5.77, spectralType: 'G' },
        { ra: 203.0221, dec: -38.3992, magnitude: 6.16, spectralType: 'K' },
        { ra: 203.3988, dec: -65.6325, magnitude: 6.37, spectralType: 'A' },
        { ra: 203.0117, dec: -18.7289, magnitude: 6.01, spectralType: 'F' },  // 73 Vir
        { ra: 202.9913, dec: -6.2558, magnitude: 4.69, spectralType: 'M' },  // 74 Vir
        { ra: 202.8158, dec: 42.1061, magnitude: 6.08, spectralType: 'K' },
        { ra: 203.1496, dec: -28.6928, magnitude: 5.69, spectralType: 'A' },
        { ra: 203.1438, dec: -29.5653, magnitude: 6.45, spectralType: 'F' },
        { ra: 203.2154, dec: -15.3631, magnitude: 5.55, spectralType: 'K' },  // 75 Vir
        { ra: 203.2421, dec: -10.165, magnitude: 5.21, spectralType: 'K' },  // 76 Vir
        { ra: 203.2529, dec: -7.195, magnitude: 6.68, spectralType: 'M' },
        { ra: 203.2004, dec: 24.3464, magnitude: 6.11, spectralType: 'G' },
        { ra: 203.6204, dec: -48.2722, magnitude: 6.33, spectralType: 'B' },
        { ra: 203.6817, dec: -33.3108, magnitude: 6.44, spectralType: 'K' },
        { ra: 203.5329, dec: 3.6589, magnitude: 4.94, spectralType: 'A' },  // 78 Vir
        { ra: 203.6687, dec: -13.2144, magnitude: 5.91, spectralType: 'A' },
        { ra: 203.6733, dec: -0.5958, magnitude: 3.37, spectralType: 'A' },  // 79Zet Vir
        { ra: 203.5908, dec: 38.7892, magnitude: 6.37, spectralType: 'F' },
        { ra: 203.5304, dec: 55.3486, magnitude: 5.6, spectralType: 'A' },  // 81 UMa
        { ra: 203.6992, dec: 37.1825, magnitude: 4.98, spectralType: 'F' },
        { ra: 203.8804, dec: -5.3961, magnitude: 5.73, spectralType: 'G' },  // 80 Vir
        { ra: 203.6137, dec: 49.0161, magnitude: 4.7, spectralType: 'A' },  // 24 CVn
        { ra: 204.3008, dec: -61.6919, magnitude: 5.63, spectralType: 'F' },
        { ra: 203.8888, dec: 10.2047, magnitude: 6.49, spectralType: 'K' },
        { ra: 204.7996, dec: -75.6839, magnitude: 6.34, spectralType: 'B' },
        { ra: 203.8088, dec: 44.1969, magnitude: 6.84, spectralType: 'A' },
        { ra: 204.2104, dec: -34.4678, magnitude: 6.5, spectralType: 'K' },
        { ra: 204.275, dec: -44.1433, magnitude: 5.98, spectralType: 'G' },
        { ra: 204.6904, dec: -70.445, magnitude: 6.1, spectralType: 'K' },
        { ra: 204.2017, dec: -26.495, magnitude: 5.78, spectralType: 'A' },
        { ra: 204.3487, dec: -46.4283, magnitude: 5.9, spectralType: 'B' },
        { ra: 204.5317, dec: -58.415, magnitude: 6.42, spectralType: 'K' },
        { ra: 204.2462, dec: 24.6133, magnitude: 5.74, spectralType: 'M' },
        { ra: 204.7046, dec: -57.6231, magnitude: 6.01, spectralType: 'G' },
        { ra: 205.0025, dec: -70.7883, magnitude: 6.59, spectralType: 'K' },
        { ra: 204.1658, dec: 49.4867, magnitude: 6.49, spectralType: 'K' },
        { ra: 204.365, dec: 36.295, magnitude: 4.82, spectralType: 'A' },  // 25 CVn
        { ra: 204.675, dec: -29.5608, magnitude: 5.83, spectralType: 'F' },
        { ra: 204.5329, dec: 14.3017, magnitude: 6.52, spectralType: 'A' },
        { ra: 205.0454, dec: -64.5769, magnitude: 5.79, spectralType: 'F' },
        { ra: 203.6783, dec: 76.5467, magnitude: 6.57, spectralType: 'K' },
        { ra: 204.9717, dec: -53.4664, magnitude: 2.3, spectralType: 'B' },  // Eps Cen
        { ra: 204.4292, dec: 50.7147, magnitude: 6.48, spectralType: 'M' },
        { ra: 204.9988, dec: -49.9503, magnitude: 6.0, spectralType: 'M' },
        { ra: 204.92, dec: -39.7481, magnitude: 6.27, spectralType: 'M' },
        { ra: 204.9525, dec: -40.0519, magnitude: 5.6, spectralType: 'K' },
        { ra: 204.7596, dec: 18.2653, magnitude: 6.48, spectralType: 'K' },
        { ra: 204.8942, dec: 10.7461, magnitude: 5.57, spectralType: 'F' },
        { ra: 204.2958, dec: 71.2422, magnitude: 5.5, spectralType: 'K' },
        { ra: 205.5046, dec: -58.7872, magnitude: 5.38, spectralType: 'B' },
        { ra: 205.4363, dec: -54.56, magnitude: 5.01, spectralType: 'B' },
        { ra: 204.8767, dec: 52.9214, magnitude: 5.46, spectralType: 'A' },  // 82 UMa
        { ra: 205.065, dec: 31.0119, magnitude: 6.21, spectralType: 'G' },
        { ra: 205.1687, dec: 19.9556, magnitude: 5.75, spectralType: 'A' },  // 1 Boo
        { ra: 205.1629, dec: 28.0653, magnitude: 6.23, spectralType: 'K' },
        { ra: 205.3788, dec: -23.4497, magnitude: 6.59, spectralType: 'A' },
        { ra: 205.4404, dec: -33.5969, magnitude: 6.05, spectralType: 'K' },
        { ra: 205.0967, dec: 50.5194, magnitude: 6.32, spectralType: 'F' },
        { ra: 205.2596, dec: 22.4958, magnitude: 5.62, spectralType: 'G' },  // 2 Boo
        { ra: 205.4033, dec: -8.7031, magnitude: 5.01, spectralType: 'M' },  // 82 Vir
        { ra: 205.7337, dec: -56.7681, magnitude: 6.0, spectralType: 'B' },
        { ra: 205.7275, dec: -50.7906, magnitude: 6.41, spectralType: 'M' },
        { ra: 205.0887, dec: 57.2075, magnitude: 6.29, spectralType: 'A' },
        { ra: 205.1846, dec: 54.6817, magnitude: 4.66, spectralType: 'M' },  // 83 UMa
        { ra: 205.7292, dec: -41.4011, magnitude: 5.98, spectralType: 'K' },
        { ra: 205.5529, dec: 8.3883, magnitude: 6.16, spectralType: 'F' },
        { ra: 205.9167, dec: -42.0675, magnitude: 5.98, spectralType: 'B' },
        { ra: 206.0662, dec: -51.0131, magnitude: 6.47, spectralType: 'A' },
        { ra: 205.7654, dec: 3.5381, magnitude: 5.36, spectralType: 'K' },  // 84 Vir
        { ra: 205.62, dec: 41.6742, magnitude: 6.3, spectralType: 'G' },
        { ra: 205.6808, dec: 34.9889, magnitude: 5.98, spectralType: 'G' },
        { ra: 205.3746, dec: 64.8225, magnitude: 5.85, spectralType: 'A' },
        { ra: 205.9762, dec: -5.4989, magnitude: 6.51, spectralType: 'A' },
        { ra: 205.9383, dec: 22.7003, magnitude: 6.13, spectralType: 'K' },
        { ra: 206.1242, dec: -16.1792, magnitude: 5.6, spectralType: 'G' },  // 83 Vir
        { ra: 206.1904, dec: -25.5008, magnitude: 6.21, spectralType: 'K' },
        { ra: 206.4038, dec: -26.1161, magnitude: 5.81, spectralType: 'A' },
        { ra: 206.4217, dec: -33.0439, magnitude: 4.23, spectralType: 'F' },  // 1 Cen
        { ra: 205.9779, dec: 52.0644, magnitude: 6.02, spectralType: 'A' },
        { ra: 206.3963, dec: -15.7675, magnitude: 6.19, spectralType: 'A' },  // 85 Vir
        { ra: 206.7946, dec: -62.59, magnitude: 6.51, spectralType: 'K' },
        { ra: 206.6638, dec: -51.4328, magnitude: 4.65, spectralType: 'G' },
        { ra: 206.4846, dec: -12.4267, magnitude: 5.51, spectralType: 'G' },  // 86 Vir
        { ra: 206.735, dec: -36.2519, magnitude: 5.15, spectralType: 'A' },
        { ra: 206.865, dec: -50.2494, magnitude: 5.91, spectralType: 'A' },
        { ra: 206.91, dec: -50.3211, magnitude: 5.45, spectralType: 'K' },
        { ra: 206.305, dec: 55.8794, magnitude: 6.5, spectralType: 'F' },
        { ra: 206.8063, dec: -9.7092, magnitude: 6.05, spectralType: 'K' },
        { ra: 206.5563, dec: 41.0886, magnitude: 5.87, spectralType: 'A' },
        { ra: 206.5792, dec: 38.5039, magnitude: 5.94, spectralType: 'G' },
        { ra: 206.8558, dec: -17.86, magnitude: 5.43, spectralType: 'M' },  // 87 Vir
        { ra: 206.6804, dec: 25.7022, magnitude: 5.95, spectralType: 'G' },  // 3 Boo
        { ra: 206.7379, dec: 6.3506, magnitude: 6.33, spectralType: 'G' },
        { ra: 205.6637, dec: 78.0644, magnitude: 5.91, spectralType: 'G' },
        { ra: 206.8154, dec: 17.4567, magnitude: 4.5, spectralType: 'F' },  // 4Tau Boo
        { ra: 206.7492, dec: 38.5428, magnitude: 5.5, spectralType: 'K' },
        { ra: 206.6488, dec: 54.4328, magnitude: 5.7, spectralType: 'B' },  // 84 UMa
        { ra: 208.9112, dec: -82.6661, magnitude: 5.95, spectralType: 'K' },
        { ra: 207.2296, dec: -35.7039, magnitude: 6.53, spectralType: 'G' },
        { ra: 207.3762, dec: -41.6878, magnitude: 3.41, spectralType: 'B' },  // Nu Cen
        { ra: 206.885, dec: 49.3133, magnitude: 1.86, spectralType: 'B' },  // 85Eta UMa
        { ra: 207.3612, dec: -34.4508, magnitude: 4.19, spectralType: 'M' },  // 2 Cen
        { ra: 207.4042, dec: -42.4739, magnitude: 3.04, spectralType: 'B' },  // Mu Cen
        { ra: 207.9475, dec: -69.4014, magnitude: 5.75, spectralType: 'K' },
        { ra: 207.1612, dec: 31.1903, magnitude: 5.62, spectralType: 'K' },
        { ra: 207.4679, dec: -18.1342, magnitude: 4.97, spectralType: 'K' },  // 89 Vir
        { ra: 207.5271, dec: -29.0814, magnitude: 6.18, spectralType: 'A' },
        { ra: 207.5808, dec: -39.9011, magnitude: 6.44, spectralType: 'K' },
        { ra: 207.2383, dec: 39.5428, magnitude: 7.4, spectralType: 'M' },
        { ra: 207.3692, dec: 15.7978, magnitude: 4.07, spectralType: 'K' },  // 5Ups Boo
        { ra: 207.4283, dec: 21.2642, magnitude: 4.91, spectralType: 'K' },  // 6 Boo
        { ra: 207.6438, dec: -19.8972, magnitude: 6.53, spectralType: 'G' },
        { ra: 205.5962, dec: 82.7525, magnitude: 5.98, spectralType: 'G' },
        { ra: 207.4375, dec: 36.6328, magnitude: 6.38, spectralType: 'A' },
        { ra: 207.6029, dec: 5.4972, magnitude: 6.01, spectralType: 'K' },
        { ra: 207.9467, dec: -46.8992, magnitude: 5.77, spectralType: 'B' },
        { ra: 208.02, dec: -52.8117, magnitude: 5.25, spectralType: 'B' },
        { ra: 207.9025, dec: -36.4333, magnitude: 6.35, spectralType: 'F' },
        { ra: 207.835, dec: -24.3908, magnitude: 6.45, spectralType: 'G' },
        { ra: 207.9567, dec: -32.9944, magnitude: 4.56, spectralType: 'B' },  // 3 Cen
        { ra: 207.9588, dec: -32.9947, magnitude: 6.06, spectralType: 'B' },  // 3 Cen
        { ra: 208.0037, dec: -31.6194, magnitude: 6.12, spectralType: 'F' },
        { ra: 207.4396, dec: 61.4892, magnitude: 5.96, spectralType: 'G' },
        { ra: 207.7688, dec: 34.7725, magnitude: 6.65, spectralType: 'A' },
        { ra: 207.7883, dec: 34.6644, magnitude: 5.87, spectralType: 'M' },
        { ra: 207.6154, dec: 58.5394, magnitude: 6.46, spectralType: 'A' },
        { ra: 208.4296, dec: -53.3736, magnitude: 5.89, spectralType: 'B' },
        { ra: 208.7038, dec: -67.6525, magnitude: 5.71, spectralType: 'K' },
        { ra: 207.9479, dec: 34.4442, magnitude: 4.74, spectralType: 'K' },
        { ra: 208.0767, dec: 12.1653, magnitude: 6.04, spectralType: 'A' },
        { ra: 208.3021, dec: -31.9278, magnitude: 4.73, spectralType: 'B' },  // 4 Cen
        { ra: 208.3867, dec: -35.6642, magnitude: 5.54, spectralType: 'F' },
        { ra: 208.4871, dec: -47.1281, magnitude: 6.1, spectralType: 'B' },
        { ra: 208.4675, dec: -35.3144, magnitude: 6.19, spectralType: 'K' },
        { ra: 208.3037, dec: 17.9328, magnitude: 5.7, spectralType: 'G' },  // 7 Boo
        { ra: 207.8579, dec: 64.7233, magnitude: 4.65, spectralType: 'M' },  // 10 Dra
        { ra: 207.7467, dec: 68.3153, magnitude: 6.4, spectralType: 'K' },
        { ra: 208.5692, dec: -28.5697, magnitude: 6.04, spectralType: 'K' },
        { ra: 208.2929, dec: 28.6481, magnitude: 5.9, spectralType: 'A' },
        { ra: 208.8008, dec: -52.1611, magnitude: 5.71, spectralType: 'B' },
        { ra: 208.885, dec: -47.2883, magnitude: 2.55, spectralType: 'B' },  // Zet Cen
        { ra: 208.6754, dec: -1.5031, magnitude: 5.15, spectralType: 'K' },  // 90 Vir
        { ra: 208.7425, dec: -8.0589, magnitude: 6.19, spectralType: 'F' },
        { ra: 209.0825, dec: -54.1319, magnitude: 6.14, spectralType: 'A' },
        { ra: 208.6713, dec: 18.3978, magnitude: 2.68, spectralType: 'G' },  // 8Eta Boo
        { ra: 209.1375, dec: -54.7044, magnitude: 6.0, spectralType: 'G' },
        { ra: 208.9354, dec: -31.285, magnitude: 6.51, spectralType: 'G' },
        { ra: 208.4625, dec: 53.7286, magnitude: 5.7, spectralType: 'A' },  // 86 UMa
        { ra: 209.0813, dec: -46.5925, magnitude: 5.83, spectralType: 'K' },
        { ra: 210.1367, dec: -78.59, magnitude: 6.09, spectralType: 'B' },
        { ra: 209.4121, dec: -63.6867, magnitude: 4.71, spectralType: 'K' },
        { ra: 209.63, dec: -65.8006, magnitude: 6.2, spectralType: 'K' },
        { ra: 208.9583, dec: 14.0564, magnitude: 6.16, spectralType: 'F' },
        { ra: 209.1163, dec: 1.0506, magnitude: 5.91, spectralType: 'A' },  // 92 Vir
        { ra: 209.0437, dec: 32.0325, magnitude: 6.32, spectralType: 'F' },
        { ra: 209.3654, dec: -23.0228, magnitude: 6.14, spectralType: 'K' },
        { ra: 209.1425, dec: 27.4919, magnitude: 5.01, spectralType: 'K' },  // 9 Boo
        { ra: 209.5679, dec: -42.1008, magnitude: 3.83, spectralType: 'B' },  // Phi Cen
        { ra: 209.67, dec: -44.8036, magnitude: 3.87, spectralType: 'B' },  // Ups1Cen
        { ra: 209.6296, dec: -24.9722, magnitude: 5.15, spectralType: 'B' },  // 47 Hya
        { ra: 209.8221, dec: -50.37, magnitude: 5.91, spectralType: 'G' },
        { ra: 210.0721, dec: -61.4814, magnitude: 6.49, spectralType: 'F' },
        { ra: 210.2175, dec: -66.2686, magnitude: 5.97, spectralType: 'F' },
        { ra: 209.6662, dec: 14.6494, magnitude: 6.0, spectralType: 'K' },
        { ra: 209.6621, dec: 21.6961, magnitude: 5.76, spectralType: 'A' },  // 10 Boo
        { ra: 209.3837, dec: 61.4928, magnitude: 6.37, spectralType: 'K' },
        { ra: 210.0004, dec: -25.0103, magnitude: 5.77, spectralType: 'F' },  // 48 Hya
        { ra: 209.9554, dec: -3.5497, magnitude: 6.4, spectralType: 'F' },
        { ra: 210.3292, dec: -40.2222, magnitude: 6.13, spectralType: 'K' },
        { ra: 210.4308, dec: -45.6036, magnitude: 4.34, spectralType: 'F' },  // Ups2Cen
        { ra: 211.3325, dec: -76.7967, magnitude: 5.5, spectralType: 'M' },  // The Aps
        { ra: 210.335, dec: 8.8947, magnitude: 5.99, spectralType: 'A' },
        { ra: 210.2937, dec: 27.3867, magnitude: 6.23, spectralType: 'A' },  // 11 Boo
        { ra: 210.4117, dec: 1.5444, magnitude: 4.26, spectralType: 'A' },  // 93Tau Vir
        { ra: 210.595, dec: -27.43, magnitude: 5.48, spectralType: 'K' },
        { ra: 210.8592, dec: -56.2136, magnitude: 5.92, spectralType: 'K' },
        { ra: 210.9558, dec: -60.3731, magnitude: 0.61, spectralType: 'B' },  // Bet Cen
        { ra: 210.7571, dec: -31.6839, magnitude: 6.18, spectralType: 'F' },
        { ra: 210.8646, dec: -41.4233, magnitude: 6.11, spectralType: 'A' },
        { ra: 210.6325, dec: 9.6864, magnitude: 6.2, spectralType: 'F' },
        { ra: 210.5508, dec: 45.7536, magnitude: 6.27, spectralType: 'K' },
        { ra: 210.9712, dec: -22.4217, magnitude: 6.3, spectralType: 'F' },
        { ra: 210.8846, dec: 10.7867, magnitude: 6.3, spectralType: 'G' },
        { ra: 210.9033, dec: 7.5464, magnitude: 6.26, spectralType: 'G' },
        { ra: 210.9825, dec: 4.9008, magnitude: 6.24, spectralType: 'F' },
        { ra: 211.0608, dec: -5.3814, magnitude: 6.39, spectralType: 'K' },
        { ra: 211.1125, dec: -14.9717, magnitude: 6.28, spectralType: 'G' },
        { ra: 211.4438, dec: -54.6694, magnitude: 6.17, spectralType: 'A' },
        { ra: 212.1129, dec: -74.8503, magnitude: 6.02, spectralType: 'G' },
        { ra: 210.7488, dec: 50.9719, magnitude: 6.15, spectralType: 'A' },
        { ra: 211.6046, dec: -59.7156, magnitude: 6.42, spectralType: 'B' },
        { ra: 210.4608, dec: 68.6786, magnitude: 6.34, spectralType: 'K' },
        { ra: 211.1562, dec: 2.2975, magnitude: 6.28, spectralType: 'K' },
        { ra: 211.3083, dec: -16.3358, magnitude: 6.56, spectralType: 'A' },
        { ra: 211.5117, dec: -41.1797, magnitude: 4.36, spectralType: 'B' },  // Chi Cen
        { ra: 211.5454, dec: -43.0919, magnitude: 6.2, spectralType: 'G' },
        { ra: 211.5929, dec: -26.6825, magnitude: 3.27, spectralType: 'K' },  // 49Pi Hya
        { ra: 211.6708, dec: -36.37, magnitude: 2.06, spectralType: 'K' },  // 5The Cen
        { ra: 212.0596, dec: -63.2081, magnitude: 6.4, spectralType: 'G' },
        { ra: 211.6783, dec: -9.3133, magnitude: 5.46, spectralType: 'F' },  // 95 Vir
        { ra: 211.0971, dec: 64.3758, magnitude: 3.65, spectralType: 'A' },  // 11Alp Dra
        { ra: 212.2346, dec: -59.2767, magnitude: 6.34, spectralType: 'B' },
        { ra: 212.6287, dec: -70.3056, magnitude: 6.05, spectralType: 'K' },
        { ra: 212.2163, dec: -43.4711, magnitude: 6.17, spectralType: 'B' },
        { ra: 212.7579, dec: -69.7197, magnitude: 6.06, spectralType: 'A' },
        { ra: 212.3958, dec: -51.5047, magnitude: 6.0, spectralType: 'B' },
        { ra: 212.4783, dec: -53.4392, magnitude: 4.75, spectralType: 'G' },
        { ra: 212.2525, dec: -10.3344, magnitude: 6.47, spectralType: 'G' },  // 96 Vir
        { ra: 211.9825, dec: 43.8544, magnitude: 5.27, spectralType: 'M' },
        { ra: 212.0721, dec: 49.4581, magnitude: 5.25, spectralType: 'M' },  // 13 Boo
        { ra: 212.7104, dec: -16.3019, magnitude: 4.91, spectralType: 'M' },
        { ra: 212.1917, dec: 59.3378, magnitude: 6.46, spectralType: 'K' },
        { ra: 214.5575, dec: -81.0078, magnitude: 4.91, spectralType: 'A' },  // Eta Aps
        { ra: 212.5996, dec: 25.0917, magnitude: 4.83, spectralType: 'F' },  // 12 Boo
        { ra: 211.735, dec: 74.5936, magnitude: 6.45, spectralType: 'A' },  // 3 UMi
        { ra: 214.2288, dec: -77.6639, magnitude: 6.47, spectralType: 'K' },
        { ra: 212.88, dec: 1.3622, magnitude: 6.43, spectralType: 'F' },
        { ra: 213.3183, dec: -53.6658, magnitude: 5.56, spectralType: 'K' },
        { ra: 213.1021, dec: -24.3642, magnitude: 6.34, spectralType: 'K' },
        { ra: 212.8129, dec: 32.2956, magnitude: 6.11, spectralType: 'K' },
        { ra: 213.4162, dec: -54.6258, magnitude: 6.11, spectralType: 'B' },
        { ra: 213.1917, dec: -27.2611, magnitude: 5.08, spectralType: 'K' },  // 50 Hya
        { ra: 213.0658, dec: 2.4094, magnitude: 5.01, spectralType: 'A' },
        { ra: 213.305, dec: -26.6122, magnitude: 6.24, spectralType: 'K' },
        { ra: 213.2242, dec: -10.2736, magnitude: 4.19, spectralType: 'K' },  // 98Kap Vir
        { ra: 213.7375, dec: -57.0858, magnitude: 5.07, spectralType: 'B' },
        { ra: 213.42, dec: -0.8456, magnitude: 5.91, spectralType: 'F' },
        { ra: 213.6775, dec: -41.8375, magnitude: 5.61, spectralType: 'G' },
        { ra: 213.8383, dec: -53.5097, magnitude: 6.39, spectralType: 'K' },
        { ra: 214.1608, dec: -66.5878, magnitude: 5.75, spectralType: 'B' },
        { ra: 212.2121, dec: 77.5475, magnitude: 4.82, spectralType: 'K' },  // 4 UMi
        { ra: 213.5887, dec: -5.9475, magnitude: 6.36, spectralType: 'F' },
        { ra: 213.5217, dec: 12.9594, magnitude: 5.54, spectralType: 'F' },  // 14 Boo
        { ra: 213.7554, dec: -29.2819, magnitude: 6.08, spectralType: 'A' },
        { ra: 213.9117, dec: -45.0008, magnitude: 6.31, spectralType: 'F' },
        { ra: 214.1425, dec: -59.9139, magnitude: 6.39, spectralType: 'M' },
        { ra: 216.0971, dec: -82.8486, magnitude: 6.42, spectralType: 'B' },
        { ra: 213.3654, dec: 51.7878, magnitude: 6.69, spectralType: 'F' },  // 17Kap1Boo
        { ra: 213.3708, dec: 51.7903, magnitude: 4.54, spectralType: 'A' },  // 17Kap2Boo
        { ra: 213.7117, dec: 10.1006, magnitude: 5.29, spectralType: 'K' },  // 15 Boo
        { ra: 213.7208, dec: 3.3361, magnitude: 6.45, spectralType: 'M' },
        { ra: 213.8504, dec: -18.2008, magnitude: 5.43, spectralType: 'A' },
        { ra: 213.6708, dec: 21.8733, magnitude: 6.39, spectralType: 'A' },
        { ra: 213.0167, dec: 69.4325, magnitude: 5.24, spectralType: 'M' },
        { ra: 213.5979, dec: 41.5189, magnitude: 6.24, spectralType: 'K' },
        { ra: 215.5946, dec: -80.1089, magnitude: 5.06, spectralType: 'B' },  // Eps Aps
        { ra: 214.0763, dec: -33.2414, magnitude: 6.55, spectralType: 'F' },
        { ra: 214.0037, dec: -6.0006, magnitude: 4.08, spectralType: 'F' },  // 99Iot Vir
        { ra: 216.7287, dec: -83.6678, magnitude: 4.32, spectralType: 'K' },  // Del Oct
        { ra: 213.9154, dec: 19.1825, magnitude: -0.04, spectralType: 'K' },  // 16Alp Boo
        { ra: 214.0896, dec: -6.6219, magnitude: 6.44, spectralType: 'A' },
        { ra: 214.1254, dec: -3.1964, magnitude: 6.15, spectralType: 'A' },
        { ra: 214.0175, dec: 18.9119, magnitude: 5.98, spectralType: 'A' },
        { ra: 214.2658, dec: -18.5853, magnitude: 6.22, spectralType: 'G' },
        { ra: 213.8204, dec: 52.5358, magnitude: 6.58, spectralType: 'A' },
        { ra: 214.1367, dec: 20.1214, magnitude: 6.25, spectralType: 'F' },
        { ra: 214.1008, dec: 39.7447, magnitude: 6.38, spectralType: 'F' },
        { ra: 214.5992, dec: -33.2206, magnitude: 6.54, spectralType: 'F' },
        { ra: 214.9646, dec: -61.2731, magnitude: 5.23, spectralType: 'A' },
        { ra: 214.0413, dec: 51.3672, magnitude: 4.75, spectralType: 'A' },  // 21Iot Boo
        { ra: 214.0958, dec: 46.0883, magnitude: 4.18, spectralType: 'A' },  // 19Lam Boo
        { ra: 214.3683, dec: 15.2633, magnitude: 5.8, spectralType: 'M' },
        { ra: 214.5025, dec: -7.5425, magnitude: 6.47, spectralType: 'G' },
        { ra: 214.8508, dec: -46.0578, magnitude: 3.55, spectralType: 'B' },  // Iot Lup
        { ra: 214.6596, dec: -18.7161, magnitude: 5.9, spectralType: 'A' },
        { ra: 214.7533, dec: -25.8156, magnitude: 5.87, spectralType: 'F' },
        { ra: 214.8496, dec: -37.0036, magnitude: 5.94, spectralType: 'A' },
        { ra: 215.0813, dec: -56.3867, magnitude: 4.33, spectralType: 'B' },
        { ra: 214.7775, dec: -13.3711, magnitude: 4.52, spectralType: 'A' },  // 100Lam Vir
        { ra: 214.3379, dec: 51.3072, magnitude: 6.2, spectralType: 'A' },
        { ra: 214.4992, dec: 35.5094, magnitude: 4.81, spectralType: 'K' },
        { ra: 215.0404, dec: -43.0589, magnitude: 5.56, spectralType: 'G' },
        { ra: 214.455, dec: 48.0017, magnitude: 6.32, spectralType: 'F' },
        { ra: 215.1771, dec: -45.1872, magnitude: 4.77, spectralType: 'F' },
        { ra: 214.8179, dec: 13.0042, magnitude: 5.41, spectralType: 'F' },  // 18 Boo
        { ra: 214.8854, dec: -2.2656, magnitude: 5.14, spectralType: 'G' },  // 102Ups Vir
        { ra: 215.1392, dec: -37.8853, magnitude: 4.05, spectralType: 'A' },  // Psi Cen
        { ra: 214.9204, dec: 0.3842, magnitude: 6.19, spectralType: 'A' },
        { ra: 214.7321, dec: 38.7675, magnitude: 6.86, spectralType: 'G' },
        { ra: 214.9383, dec: 16.3069, magnitude: 4.86, spectralType: 'K' },  // 20 Boo
        { ra: 215.6542, dec: -58.4594, magnitude: 4.92, spectralType: 'G' },
        { ra: 214.7325, dec: 54.8642, magnitude: 6.53, spectralType: 'A' },
        { ra: 214.9487, dec: 38.7939, magnitude: 6.33, spectralType: 'A' },
        { ra: 215.0363, dec: 30.4292, magnitude: 6.44, spectralType: 'A' },
        { ra: 215.6612, dec: -48.3203, magnitude: 6.09, spectralType: 'B' },
        { ra: 215.5821, dec: -34.7869, magnitude: 5.56, spectralType: 'B' },
        { ra: 215.8346, dec: -50.7722, magnitude: 6.02, spectralType: 'K' },
        { ra: 215.7592, dec: -39.5122, magnitude: 4.42, spectralType: 'B' },
        { ra: 216.2762, dec: -68.1953, magnitude: 5.61, spectralType: 'A' },
        { ra: 215.9517, dec: -53.1767, magnitude: 6.0, spectralType: 'K' },
        { ra: 215.7742, dec: -27.7539, magnitude: 4.77, spectralType: 'K' },  // 51 Hya
        { ra: 216.4146, dec: -66.1733, magnitude: 6.36, spectralType: 'A' },
        { ra: 215.8567, dec: -11.7142, magnitude: 6.21, spectralType: 'G' },  // 2 Lib
        { ra: 215.8137, dec: 1.2417, magnitude: 6.27, spectralType: 'G' },
        { ra: 215.8442, dec: 8.445, magnitude: 6.86, spectralType: 'F' },
        { ra: 215.8446, dec: 8.4467, magnitude: 5.12, spectralType: 'A' },
        { ra: 215.7783, dec: 25.3381, magnitude: 6.22, spectralType: 'F' },
        { ra: 216.0037, dec: 8.2436, magnitude: 5.95, spectralType: 'A' },
        { ra: 217.4033, dec: -76.7292, magnitude: 6.07, spectralType: 'K' },
        { ra: 216.2025, dec: -24.8064, magnitude: 5.32, spectralType: 'G' },
        { ra: 216.7796, dec: -65.8217, magnitude: 5.85, spectralType: 'K' },
        { ra: 216.0471, dec: 5.82, magnitude: 5.1, spectralType: 'A' },
        { ra: 216.1704, dec: -11.6697, magnitude: 6.49, spectralType: 'F' },
        { ra: 216.0763, dec: 8.085, magnitude: 6.19, spectralType: 'K' },
        { ra: 216.5342, dec: -45.2214, magnitude: 4.56, spectralType: 'B' },  // Tau1Lup
        { ra: 216.545, dec: -45.3794, magnitude: 4.35, spectralType: 'F' },  // Tau2Lup
        { ra: 216.3742, dec: -19.9697, magnitude: 6.61, spectralType: 'A' },
        { ra: 216.5558, dec: -42.3192, magnitude: 6.32, spectralType: 'K' },
        { ra: 216.4487, dec: -26.8525, magnitude: 6.48, spectralType: 'G' },
        { ra: 216.7079, dec: -39.8739, magnitude: 6.35, spectralType: 'B' },
        { ra: 216.8008, dec: -46.1344, magnitude: 5.83, spectralType: 'A' },
        { ra: 216.3717, dec: 38.3931, magnitude: 6.27, spectralType: 'K' },
        { ra: 217.1813, dec: -59.1978, magnitude: 6.45, spectralType: 'A' },
        { ra: 216.2992, dec: 51.8508, magnitude: 4.05, spectralType: 'F' },  // 23The Boo
        { ra: 216.6142, dec: 19.2269, magnitude: 5.39, spectralType: 'F' },  // 22 Boo
        { ra: 216.8517, dec: -6.1203, magnitude: 6.17, spectralType: 'A' },  // 104 Vir
        { ra: 217.0433, dec: -29.4917, magnitude: 4.97, spectralType: 'B' },  // 52 Hya
        { ra: 217.8187, dec: -67.7172, magnitude: 5.83, spectralType: 'K' },
        { ra: 217.0504, dec: -2.2281, magnitude: 4.81, spectralType: 'G' },  // 105Phi Vir
        { ra: 217.1738, dec: -6.9006, magnitude: 5.42, spectralType: 'K' },  // 106 Vir
        { ra: 216.8637, dec: 41.025, magnitude: 6.63, spectralType: 'F' },
        { ra: 217.5358, dec: -45.3217, magnitude: 5.5, spectralType: 'B' },
        { ra: 217.5871, dec: -49.5192, magnitude: 5.37, spectralType: 'A' },
        { ra: 217.1312, dec: 28.2892, magnitude: 7.62, spectralType: 'A' },
        { ra: 217.1387, dec: 28.2908, magnitude: 7.12, spectralType: 'A' },
        { ra: 217.0683, dec: 36.1969, magnitude: 6.1, spectralType: 'K' },
        { ra: 217.7354, dec: -40.845, magnitude: 6.39, spectralType: 'K' },
        { ra: 217.4604, dec: 0.8289, magnitude: 5.94, spectralType: 'A' },
        { ra: 217.795, dec: -38.8697, magnitude: 5.97, spectralType: 'K' },
        { ra: 217.1575, dec: 49.8447, magnitude: 5.59, spectralType: 'G' },  // 24 Boo
        { ra: 218.1371, dec: -56.8878, magnitude: 6.93, spectralType: 'F' },
        { ra: 217.4571, dec: 31.7911, magnitude: 6.06, spectralType: 'A' },
        { ra: 217.4033, dec: 41.7958, magnitude: 6.35, spectralType: 'G' },
        { ra: 217.6892, dec: 4.7722, magnitude: 6.02, spectralType: 'K' },
        { ra: 218.1537, dec: -50.4569, magnitude: 4.42, spectralType: 'B' },  // Sig Lup
        { ra: 218.385, dec: -54.9983, magnitude: 5.87, spectralType: 'F' },
        { ra: 218.3746, dec: -52.68, magnitude: 5.87, spectralType: 'K' },
        { ra: 218.29, dec: -30.7142, magnitude: 6.09, spectralType: 'K' },
        { ra: 217.9575, dec: 30.3714, magnitude: 3.58, spectralType: 'K' },  // 25Rho Boo
        { ra: 216.8812, dec: 75.6961, magnitude: 4.25, spectralType: 'K' },  // 5 UMi
        { ra: 218.5333, dec: -42.0997, magnitude: 6.6, spectralType: 'A' },
        { ra: 218.8217, dec: -60.0158, magnitude: 6.4, spectralType: 'K' },
        { ra: 218.0842, dec: 26.6772, magnitude: 6.01, spectralType: 'A' },
        { ra: 218.1354, dec: 22.26, magnitude: 5.92, spectralType: 'F' },  // 26 Boo
        { ra: 218.0196, dec: 38.3083, magnitude: 3.03, spectralType: 'A' },  // 27Gam Boo
        { ra: 217.6921, dec: 63.1856, magnitude: 6.09, spectralType: 'F' },
        { ra: 217.9283, dec: 60.2256, magnitude: 6.27, spectralType: 'F' },
        { ra: 218.7113, dec: -20.4392, magnitude: 6.5, spectralType: 'A' },
        { ra: 218.8812, dec: -41.5172, magnitude: 5.87, spectralType: 'B' },
        { ra: 218.8767, dec: -42.1578, magnitude: 2.31, spectralType: 'B' },  // Eta Cen
        { ra: 218.3346, dec: 36.9594, magnitude: 6.43, spectralType: 'F' },
        { ra: 218.1287, dec: 55.3978, magnitude: 5.76, spectralType: 'K' },
        { ra: 219.4429, dec: -67.9322, magnitude: 6.04, spectralType: 'F' },
        { ra: 219.0792, dec: -46.2453, magnitude: 5.55, spectralType: 'K' },
        { ra: 218.5487, dec: 32.5344, magnitude: 6.33, spectralType: 'F' },
        { ra: 219.1008, dec: -39.5972, magnitude: 6.13, spectralType: 'K' },
        { ra: 218.67, dec: 29.745, magnitude: 4.46, spectralType: 'F' },  // 28Sig Boo
        { ra: 218.6604, dec: 36.6258, magnitude: 6.03, spectralType: 'K' },
        { ra: 219.1842, dec: -40.2117, magnitude: 5.74, spectralType: 'B' },
        { ra: 219.3338, dec: -46.1339, magnitude: 5.41, spectralType: 'G' },
        { ra: 218.5662, dec: 57.0653, magnitude: 6.48, spectralType: 'F' },
        { ra: 218.665, dec: 49.3683, magnitude: 5.74, spectralType: 'M' },
        { ra: 219.4717, dec: -49.4258, magnitude: 4.05, spectralType: 'B' },  // Rho Lup
        { ra: 219.0288, dec: 23.2503, magnitude: 6.38, spectralType: 'K' },
        { ra: 219.2492, dec: -12.3053, magnitude: 6.2, spectralType: 'F' },
        { ra: 219.5817, dec: -38.7942, magnitude: 6.02, spectralType: 'K' },
        { ra: 219.7958, dec: -46.5842, magnitude: 6.07, spectralType: 'F' },
        { ra: 219.8529, dec: -49.0556, magnitude: 6.39, spectralType: 'F' },
        { ra: 219.8996, dec: -60.8353, magnitude: -0.01, spectralType: 'G' },  // Alp1Cen
        { ra: 219.9004, dec: -60.8356, magnitude: 1.33, spectralType: 'K' },  // Alp2Cen
        { ra: 220.1367, dec: -56.4408, magnitude: 6.3, spectralType: 'K' },
        { ra: 219.5583, dec: 18.2983, magnitude: 5.91, spectralType: 'K' },
        { ra: 220.6267, dec: -64.9753, magnitude: 3.19, spectralType: 'A' },  // Alp Cir
        { ra: 219.5521, dec: 43.6419, magnitude: 5.7, spectralType: 'K' },
        { ra: 220.4821, dec: -58.6161, magnitude: 6.22, spectralType: 'F' },
        { ra: 220.2558, dec: -36.135, magnitude: 5.67, spectralType: 'A' },
        { ra: 219.5633, dec: 54.0233, magnitude: 5.85, spectralType: 'A' },
        { ra: 219.7092, dec: 44.4044, magnitude: 5.39, spectralType: 'A' },  // 33 Boo
        { ra: 220.4825, dec: -47.3883, magnitude: 2.3, spectralType: 'B' },  // Alp Lup
        { ra: 221.965, dec: -79.0447, magnitude: 3.83, spectralType: 'K' },  // Alp Aps
        { ra: 220.49, dec: -37.7936, magnitude: 4.0, spectralType: 'B' },
        { ra: 220.0912, dec: 21.9756, magnitude: 6.1, spectralType: 'G' },
        { ra: 220.1767, dec: 13.5342, magnitude: 5.91, spectralType: 'F' },
        { ra: 220.4629, dec: -30.9333, magnitude: 6.37, spectralType: 'A' },
        { ra: 220.1817, dec: 16.4183, magnitude: 4.94, spectralType: 'B' },  // 29Pi 1Boo
        { ra: 220.1829, dec: 16.4178, magnitude: 5.88, spectralType: 'A' },  // 29Pi 2Boo
        { ra: 220.2871, dec: 13.7283, magnitude: 4.83, spectralType: 'A' },  // 30Zet Boo
        { ra: 220.2871, dec: 13.7283, magnitude: 4.43, spectralType: 'A' },  // 30Zet Boo
        { ra: 218.4096, dec: 79.6603, magnitude: 6.26, spectralType: 'K' },
        { ra: 220.4117, dec: 8.1617, magnitude: 4.86, spectralType: 'G' },  // 31 Boo
        { ra: 220.4313, dec: 11.6606, magnitude: 5.56, spectralType: 'G' },  // 32 Boo
        { ra: 221.3221, dec: -62.8758, magnitude: 5.36, spectralType: 'A' },
        { ra: 220.4758, dec: 21.1236, magnitude: 6.38, spectralType: 'G' },
        { ra: 220.8067, dec: -24.9975, magnitude: 5.73, spectralType: 'B' },  // 4 Lib
        { ra: 220.9142, dec: -35.1736, magnitude: 4.05, spectralType: 'K' },
        { ra: 221.2312, dec: -58.4778, magnitude: 6.11, spectralType: 'K' },
        { ra: 220.765, dec: -5.6583, magnitude: 3.88, spectralType: 'F' },  // 107Mu Vir
        { ra: 221.2954, dec: -55.6019, magnitude: 6.1, spectralType: 'B' },
        { ra: 221.2467, dec: -35.1919, magnitude: 4.92, spectralType: 'A' },
        { ra: 220.8558, dec: 26.5278, magnitude: 4.81, spectralType: 'M' },  // 34 Boo
        { ra: 232.0796, dec: -88.1331, magnitude: 6.48, spectralType: 'A' },
        { ra: 220.5133, dec: 61.2619, magnitude: 6.25, spectralType: 'F' },
        { ra: 220.935, dec: 40.4592, magnitude: 5.73, spectralType: 'K' },
        { ra: 221.6213, dec: -47.4411, magnitude: 5.74, spectralType: 'A' },
        { ra: 221.7554, dec: -52.3836, magnitude: 5.21, spectralType: 'G' },
        { ra: 221.2987, dec: -1.4178, magnitude: 6.07, spectralType: 'M' },
        { ra: 221.5004, dec: -25.4431, magnitude: 4.94, spectralType: 'F' },  // 54 Hya
        { ra: 221.8012, dec: -52.2056, magnitude: 6.07, spectralType: 'A' },
        { ra: 221.5283, dec: -23.1531, magnitude: 5.81, spectralType: 'G' },
        { ra: 222.185, dec: -66.5939, magnitude: 5.91, spectralType: 'B' },
        { ra: 221.3758, dec: 0.7172, magnitude: 5.69, spectralType: 'B' },  // 108 Vir
        { ra: 221.3104, dec: 16.9644, magnitude: 4.6, spectralType: 'G' },  // 35Omi Boo
        { ra: 221.4908, dec: -15.4597, magnitude: 6.33, spectralType: 'K' },  // 5 Lib
        { ra: 221.5454, dec: -21.1761, magnitude: 6.4, spectralType: 'F' },
        { ra: 221.2467, dec: 27.075, magnitude: 5.12, spectralType: 'A' },  // 36Eps Boo
        { ra: 221.2467, dec: 27.0742, magnitude: 2.7, spectralType: 'K' },  // 36Eps Boo
        { ra: 221.3363, dec: 18.8847, magnitude: 6.13, spectralType: 'K' },
        { ra: 221.7713, dec: -38.2908, magnitude: 5.94, spectralType: 'K' },
        { ra: 221.8837, dec: -43.5575, magnitude: 6.3, spectralType: 'G' },
        { ra: 221.3071, dec: 32.7883, magnitude: 6.28, spectralType: 'M' },
        { ra: 221.5621, dec: 1.8928, magnitude: 3.72, spectralType: 'A' },  // 109 Vir
        { ra: 221.525, dec: 15.1319, magnitude: 5.63, spectralType: 'M' },
        { ra: 221.8071, dec: -21.3247, magnitude: 6.06, spectralType: 'K' },
        { ra: 221.8438, dec: -25.6244, magnitude: 5.63, spectralType: 'A' },  // 55 Hya
        { ra: 222.2788, dec: -56.6678, magnitude: 6.23, spectralType: 'K' },
        { ra: 221.9367, dec: -26.0875, magnitude: 5.24, spectralType: 'G' },  // 56 Hya
        { ra: 221.9896, dec: -26.6464, magnitude: 5.77, spectralType: 'B' },  // 57 Hya
        { ra: 221.9787, dec: -12.8397, magnitude: 6.35, spectralType: 'K' },
        { ra: 222.1587, dec: -36.6347, magnitude: 6.04, spectralType: 'M' },
        { ra: 223.3071, dec: -73.19, magnitude: 5.6, spectralType: 'G' },
        { ra: 222.3279, dec: -24.2517, magnitude: 5.68, spectralType: 'K' },
        { ra: 222.2254, dec: -0.8478, magnitude: 6.14, spectralType: 'B' },
        { ra: 222.3296, dec: -14.1489, magnitude: 5.31, spectralType: 'A' },  // 7Mu Lib
        { ra: 222.0971, dec: 24.3667, magnitude: 6.14, spectralType: 'F' },
        { ra: 225.4617, dec: -83.2278, magnitude: 5.65, spectralType: 'G' },  // Pi 1Oct
        { ra: 222.5721, dec: -27.9603, magnitude: 4.41, spectralType: 'K' },  // 58 Hya
        { ra: 223.1458, dec: -63.81, magnitude: 5.87, spectralType: 'G' },
        { ra: 222.91, dec: -43.5756, magnitude: 4.32, spectralType: 'B' },  // Omi Lup
        { ra: 222.2779, dec: 37.8111, magnitude: 6.16, spectralType: 'F' },
        { ra: 222.6717, dec: -15.9972, magnitude: 5.15, spectralType: 'F' },  // 8Alp1Lib
        { ra: 222.7196, dec: -16.0417, magnitude: 2.75, spectralType: 'A' },  // 9Alp2Lib
        { ra: 222.4933, dec: 28.6158, magnitude: 5.8, spectralType: 'A' },
        { ra: 222.3279, dec: 46.1161, magnitude: 5.74, spectralType: 'F' },  // 38 Boo
        { ra: 222.5658, dec: 23.9119, magnitude: 5.85, spectralType: 'G' },
        { ra: 222.7542, dec: -2.2992, magnitude: 4.94, spectralType: 'G' },  // 11 Lib
        { ra: 222.7504, dec: -0.2572, magnitude: 6.18, spectralType: 'K' },
        { ra: 222.3846, dec: 51.3747, magnitude: 6.51, spectralType: 'F' },
        { ra: 222.4221, dec: 48.7206, magnitude: 5.69, spectralType: 'F' },  // 39 Boo
        { ra: 223.6767, dec: -65.9914, magnitude: 6.09, spectralType: 'B' },  // Zet Cir
        { ra: 224.4704, dec: -76.6628, magnitude: 5.34, spectralType: 'K' },
        { ra: 222.6233, dec: 37.2719, magnitude: 5.48, spectralType: 'K' },
        { ra: 223.1379, dec: -30.5769, magnitude: 6.29, spectralType: 'G' },
        { ra: 223.2129, dec: -37.8033, magnitude: 5.03, spectralType: 'B' },
        { ra: 222.8471, dec: 19.1011, magnitude: 4.55, spectralType: 'G' },  // 37Xi Boo
        { ra: 226.1946, dec: -83.0383, magnitude: 5.65, spectralType: 'G' },  // Pi 2Oct
        { ra: 223.8942, dec: -60.1142, magnitude: 5.2, spectralType: 'K' },
        { ra: 225.0492, dec: -77.1603, magnitude: 5.93, spectralType: 'G' },
        { ra: 223.5838, dec: -24.6422, magnitude: 5.3, spectralType: 'K' },  // 12 Lib
        { ra: 223.6583, dec: -33.3006, magnitude: 5.82, spectralType: 'K' },
        { ra: 223.3471, dec: 15.7044, magnitude: 6.4, spectralType: 'F' },
        { ra: 224.1833, dec: -62.7808, magnitude: 5.11, spectralType: 'B' },  // The Cir
        { ra: 222.86, dec: 59.2939, magnitude: 5.46, spectralType: 'K' },
        { ra: 223.3487, dec: 19.1528, magnitude: 6.01, spectralType: 'K' },
        { ra: 223.5954, dec: -11.8983, magnitude: 5.8, spectralType: 'G' },  // 13Xi 1Lib
        { ra: 224.9833, dec: -75.0325, magnitude: 6.2, spectralType: 'B' },
        { ra: 224.0721, dec: -52.8097, magnitude: 5.38, spectralType: 'A' },
        { ra: 227.7846, dec: -84.7875, magnitude: 5.91, spectralType: 'B' },  // Ome Oct
        { ra: 223.9363, dec: -33.8558, magnitude: 5.32, spectralType: 'A' },
        { ra: 224.1333, dec: -47.8792, magnitude: 5.64, spectralType: 'B' },
        { ra: 224.2558, dec: -51.4469, magnitude: 6.64, spectralType: 'M' },
        { ra: 224.1492, dec: -39.4161, magnitude: 6.36, spectralType: 'A' },
        { ra: 224.1288, dec: -32.6367, magnitude: 6.06, spectralType: 'K' },
        { ra: 222.6763, dec: 74.1556, magnitude: 2.08, spectralType: 'K' },  // 7Bet UMi
        { ra: 224.1921, dec: -11.4097, magnitude: 5.46, spectralType: 'K' },  // 15Xi 2Lib
        { ra: 224.3067, dec: -29.1578, magnitude: 6.29, spectralType: 'B' },
        { ra: 224.5367, dec: -48.8631, magnitude: 6.35, spectralType: 'G' },
        { ra: 224.055, dec: 14.4464, magnitude: 5.77, spectralType: 'A' },
        { ra: 224.3667, dec: -21.4156, magnitude: 5.74, spectralType: 'K' },
        { ra: 223.9946, dec: 32.3003, magnitude: 6.12, spectralType: 'A' },
        { ra: 224.2958, dec: -4.3464, magnitude: 4.49, spectralType: 'F' },  // 16 Lib
        { ra: 224.6329, dec: -43.1339, magnitude: 2.68, spectralType: 'B' },  // Bet Lup
        { ra: 224.6533, dec: -39.9067, magnitude: 6.15, spectralType: 'K' },
        { ra: 224.3887, dec: -0.1675, magnitude: 5.53, spectralType: 'K' },
        { ra: 224.265, dec: 21.5553, magnitude: 6.49, spectralType: 'A' },
        { ra: 224.2987, dec: 16.3883, magnitude: 5.71, spectralType: 'G' },
        { ra: 224.7904, dec: -42.1042, magnitude: 3.13, spectralType: 'B' },  // Kap Cen
        { ra: 224.6633, dec: -27.6572, magnitude: 5.65, spectralType: 'A' },  // 59 Hya
        { ra: 224.5558, dec: -11.155, magnitude: 6.6, spectralType: 'A' },  // 17 Lib
        { ra: 224.8079, dec: -37.8814, magnitude: 6.47, spectralType: 'B' },
        { ra: 224.8629, dec: -43.16, magnitude: 6.1, spectralType: 'F' },
        { ra: 224.0958, dec: 49.6286, magnitude: 5.63, spectralType: 'F' },
        { ra: 224.7233, dec: -11.1442, magnitude: 5.87, spectralType: 'K' },  // 18 Lib
        { ra: 224.72, dec: -4.9892, magnitude: 6.09, spectralType: 'F' },
        { ra: 224.8462, dec: 4.5678, magnitude: 5.93, spectralType: 'M' },
        { ra: 225.3042, dec: -38.0583, magnitude: 5.89, spectralType: 'K' },
        { ra: 225.2433, dec: -8.5189, magnitude: 4.92, spectralType: 'B' },  // 19Del Lib
        { ra: 225.4921, dec: -34.3589, magnitude: 6.22, spectralType: 'A' },
        { ra: 224.9037, dec: 39.2653, magnitude: 5.64, spectralType: 'F' },  // 40 Boo
        { ra: 224.3958, dec: 65.9325, magnitude: 4.6, spectralType: 'M' },
        { ra: 225.3325, dec: -2.755, magnitude: 5.52, spectralType: 'M' },
        { ra: 225.5267, dec: -28.0606, magnitude: 5.85, spectralType: 'A' },  // 60 Hya
        { ra: 225.2183, dec: 22.0456, magnitude: 6.38, spectralType: 'K' },
        { ra: 226.2008, dec: -64.0317, magnitude: 5.17, spectralType: 'G' },  // Eta Cir
        { ra: 225.4538, dec: -0.1406, magnitude: 5.71, spectralType: 'M' },
        { ra: 225.7471, dec: -32.6433, magnitude: 5.44, spectralType: 'B' },
        { ra: 222.585, dec: 82.5119, magnitude: 5.64, spectralType: 'F' },
        { ra: 225.1612, dec: 47.2778, magnitude: 6.37, spectralType: 'B' },
        { ra: 226.7863, dec: -71.9053, magnitude: 6.52, spectralType: 'K' },
        { ra: 225.6871, dec: -3.0314, magnitude: 6.61, spectralType: 'A' },
        { ra: 225.5271, dec: 25.0081, magnitude: 4.81, spectralType: 'K' },  // 41Ome Boo
        { ra: 225.725, dec: 2.0914, magnitude: 4.4, spectralType: 'K' },  // 110 Vir
        { ra: 225.4867, dec: 40.3906, magnitude: 3.5, spectralType: 'G' },  // 42Bet Boo
        { ra: 226.0175, dec: -25.2819, magnitude: 3.29, spectralType: 'M' },  // 20Sig Lib
        { ra: 226.1787, dec: -40.8614, magnitude: 6.41, spectralType: 'M' },
        { ra: 226.28, dec: -47.0511, magnitude: 4.72, spectralType: 'B' },  // Pi Lup
        { ra: 226.28, dec: -47.0511, magnitude: 4.82, spectralType: 'B' },  // Pi Lup
        { ra: 226.3296, dec: -41.0672, magnitude: 5.15, spectralType: 'G' },
        { ra: 225.3629, dec: 60.2044, magnitude: 5.93, spectralType: 'A' },
        { ra: 225.7754, dec: 35.2058, magnitude: 5.51, spectralType: 'G' },
        { ra: 226.0267, dec: 5.4925, magnitude: 6.5, spectralType: 'F' },
        { ra: 226.9867, dec: -65.2756, magnitude: 6.17, spectralType: 'K' },
        { ra: 225.7775, dec: 44.6444, magnitude: 6.65, spectralType: 'F' },
        { ra: 225.9021, dec: 34.5661, magnitude: 6.59, spectralType: 'G' },
        { ra: 226.4487, dec: -25.7897, magnitude: 6.67, spectralType: 'B' },
        { ra: 226.5579, dec: -36.2642, magnitude: 6.27, spectralType: 'K' },
        { ra: 226.1112, dec: 26.9475, magnitude: 4.54, spectralType: 'K' },  // 43Psi Boo
        { ra: 226.8579, dec: -49.0883, magnitude: 5.77, spectralType: 'G' },
        { ra: 225.9475, dec: 47.6544, magnitude: 4.76, spectralType: 'F' },  // 44 Boo
        { ra: 226.6387, dec: -30.9189, magnitude: 5.96, spectralType: 'A' },
        { ra: 226.6129, dec: -22.0319, magnitude: 6.17, spectralType: 'K' },
        { ra: 227.3746, dec: -67.0842, magnitude: 5.76, spectralType: 'F' },
        { ra: 226.6567, dec: -16.2569, magnitude: 5.2, spectralType: 'K' },  // 21Nu Lib
        { ra: 227.3563, dec: -63.6428, magnitude: 6.28, spectralType: 'A' },
        { ra: 227.0504, dec: -40.5839, magnitude: 5.79, spectralType: 'B' },
        { ra: 227.1629, dec: -42.8678, magnitude: 5.85, spectralType: 'B' },
        { ra: 227.2108, dec: -45.2797, magnitude: 4.05, spectralType: 'B' },  // Lam Lup
        { ra: 226.3575, dec: 48.1511, magnitude: 5.57, spectralType: 'A' },  // 47 Boo
        { ra: 228.1408, dec: -72.7703, magnitude: 6.01, spectralType: 'B' },
        { ra: 225.9908, dec: 65.9197, magnitude: 6.13, spectralType: 'A' },
        { ra: 226.6463, dec: 36.4556, magnitude: 6.35, spectralType: 'F' },
        { ra: 226.9179, dec: 5.4981, magnitude: 6.16, spectralType: 'K' },
        { ra: 227.6858, dec: -61.4225, magnitude: 6.3, spectralType: 'G' },
        { ra: 226.835, dec: 18.4417, magnitude: 6.02, spectralType: 'A' },
        { ra: 226.8254, dec: 24.8692, magnitude: 4.93, spectralType: 'F' },  // 45 Boo
        { ra: 226.5696, dec: 54.5564, magnitude: 5.25, spectralType: 'G' },
        { ra: 227.5312, dec: -38.7925, magnitude: 5.98, spectralType: 'G' },
        { ra: 227.8167, dec: -55.3461, magnitude: 5.54, spectralType: 'G' },
        { ra: 227.0992, dec: 26.3011, magnitude: 5.67, spectralType: 'K' },  // 46 Boo
        { ra: 227.2225, dec: 13.235, magnitude: 6.1, spectralType: 'G' },
        { ra: 227.1479, dec: 25.1086, magnitude: 5.81, spectralType: 'K' },
        { ra: 227.5775, dec: -26.3328, magnitude: 5.76, spectralType: 'K' },
        { ra: 227.8954, dec: -45.2775, magnitude: 6.44, spectralType: 'K' },
        { ra: 227.8829, dec: -45.2794, magnitude: 7.39, spectralType: 'K' },
        { ra: 228.5796, dec: -70.0794, magnitude: 5.81, spectralType: 'G' },
        { ra: 228.2542, dec: -61.7439, magnitude: 6.32, spectralType: 'K' },
        { ra: 227.9838, dec: -48.7378, magnitude: 3.87, spectralType: 'B' },  // Kap1Lup
        { ra: 227.99, dec: -48.7436, magnitude: 5.69, spectralType: 'A' },  // Kap2Lup
        { ra: 227.0813, dec: 50.055, magnitude: 6.39, spectralType: 'K' },
        { ra: 228.0712, dec: -52.0992, magnitude: 3.41, spectralType: 'G' },  // Zet Lup
        { ra: 228.1304, dec: -48.2186, magnitude: 6.33, spectralType: 'K' },
        { ra: 228.2062, dec: -44.5006, magnitude: 4.82, spectralType: 'B' },
        { ra: 228.0554, dec: -19.7917, magnitude: 4.54, spectralType: 'A' },  // 24Iot1Lib
        { ra: 228.2808, dec: -36.0914, magnitude: 6.1, spectralType: 'B' },
        { ra: 228.0179, dec: 18.9758, magnitude: 5.89, spectralType: 'M' },
        { ra: 228.3229, dec: -24.0083, magnitude: 6.47, spectralType: 'B' },
        { ra: 228.33, dec: -19.6475, magnitude: 6.08, spectralType: 'A' },  // 25Iot2Lib
        { ra: 228.3696, dec: -25.3092, magnitude: 6.45, spectralType: 'G' },  // 23 Lib
        { ra: 228.4721, dec: -26.1936, magnitude: 5.84, spectralType: 'G' },
        { ra: 228.1812, dec: 19.2858, magnitude: 6.68, spectralType: 'G' },
        { ra: 228.6554, dec: -31.5192, magnitude: 4.91, spectralType: 'F' },  // 1 Lup
        { ra: 229.1517, dec: -60.9039, magnitude: 5.73, spectralType: 'B' },
        { ra: 228.6404, dec: -17.7686, magnitude: 6.17, spectralType: 'B' },  // 26 Lib
        { ra: 228.9742, dec: -48.0742, magnitude: 5.95, spectralType: 'A' },
        { ra: 229.2363, dec: -60.9575, magnitude: 5.09, spectralType: 'O' },  // Del Cir
        { ra: 228.3829, dec: 22.9833, magnitude: 6.3, spectralType: 'A' },
        { ra: 229.4121, dec: -63.6106, magnitude: 4.86, spectralType: 'K' },  // Eps Cir
        { ra: 229.0167, dec: -41.4911, magnitude: 5.16, spectralType: 'G' },
        { ra: 229.0437, dec: -43.4847, magnitude: 6.04, spectralType: 'B' },
        { ra: 228.7113, dec: -5.5028, magnitude: 6.28, spectralType: 'K' },
        { ra: 229.3783, dec: -58.8011, magnitude: 4.07, spectralType: 'A' },  // Bet Cir
        { ra: 229.7275, dec: -68.6794, magnitude: 2.89, spectralType: 'A' },  // Gam TrA
        { ra: 227.6837, dec: 67.7814, magnitude: 6.17, spectralType: 'A' },
        { ra: 228.3983, dec: 38.2647, magnitude: 6.2, spectralType: 'K' },
        { ra: 228.5254, dec: 31.7881, magnitude: 5.99, spectralType: 'K' },
        { ra: 228.7975, dec: 4.9394, magnitude: 5.33, spectralType: 'K' },  // 3 Ser
        { ra: 228.6217, dec: 29.1642, magnitude: 5.26, spectralType: 'A' },  // 48Chi Boo
        { ra: 228.5429, dec: 42.1714, magnitude: 6.13, spectralType: 'M' },
        { ra: 229.0958, dec: -22.3994, magnitude: 5.5, spectralType: 'K' },
        { ra: 228.9546, dec: 0.3722, magnitude: 5.63, spectralType: 'A' },  // 4 Ser
        { ra: 229.7038, dec: -60.4964, magnitude: 5.46, spectralType: 'O' },
        { ra: 228.8758, dec: 33.3147, magnitude: 3.47, spectralType: 'G' },  // 49Del Boo
        { ra: 229.5392, dec: -41.0608, magnitude: 6.28, spectralType: 'A' },
        { ra: 229.6333, dec: -47.875, magnitude: 4.27, spectralType: 'B' },  // Mu Lup
        { ra: 230.1696, dec: -67.4814, magnitude: 6.28, spectralType: 'B' },
        { ra: 229.2517, dec: -9.3831, magnitude: 2.61, spectralType: 'B' },  // 27Bet Lib
        { ra: 229.4579, dec: -30.1489, magnitude: 4.34, spectralType: 'G' },  // 2 Lup
        { ra: 229.735, dec: -40.7883, magnitude: 5.59, spectralType: 'B' },
        { ra: 229.6721, dec: -31.2094, magnitude: 6.18, spectralType: 'G' },
        { ra: 229.8817, dec: -37.0967, magnitude: 6.2, spectralType: 'G' },
        { ra: 229.6092, dec: -0.4614, magnitude: 5.89, spectralType: 'K' },
        { ra: 228.6596, dec: 67.3467, magnitude: 5.13, spectralType: 'F' },
        { ra: 229.6021, dec: 20.5728, magnitude: 5.7, spectralType: 'G' },
        { ra: 228.7163, dec: 68.9453, magnitude: 6.51, spectralType: 'A' },
        { ra: 229.8283, dec: 1.7653, magnitude: 5.06, spectralType: 'F' },  // 5 Ser
        { ra: 230.3429, dec: -40.6475, magnitude: 3.22, spectralType: 'B' },  // Del Lup
        { ra: 230.3971, dec: -40.7497, magnitude: 6.2, spectralType: 'A' },
        { ra: 230.3754, dec: -38.2192, magnitude: 6.48, spectralType: 'A' },
        { ra: 230.5346, dec: -47.9278, magnitude: 5.0, spectralType: 'F' },  // Nu 1Lup
        { ra: 230.4508, dec: -48.3178, magnitude: 5.65, spectralType: 'G' },  // Nu 2Lup
        { ra: 230.7933, dec: -60.6569, magnitude: 5.67, spectralType: 'F' },
        { ra: 230.2237, dec: -18.1586, magnitude: 6.17, spectralType: 'G' },  // 28 Lib
        { ra: 229.8758, dec: 32.5153, magnitude: 6.32, spectralType: 'A' },
        { ra: 230.2558, dec: -15.5483, magnitude: 6.3, spectralType: 'F' },  // 29Omi Lib
        { ra: 230.8446, dec: -59.3208, magnitude: 4.51, spectralType: 'B' },  // Gam Cir
        { ra: 230.4517, dec: -36.2614, magnitude: 3.56, spectralType: 'K' },  // Phi1Lup
        { ra: 230.1962, dec: -2.4133, magnitude: 6.35, spectralType: 'K' },
        { ra: 230.2817, dec: -5.8247, magnitude: 5.54, spectralType: 'K' },
        { ra: 230.6704, dec: -44.6894, magnitude: 3.37, spectralType: 'B' },  // Eps Lup
        { ra: 230.0354, dec: 29.6161, magnitude: 5.51, spectralType: 'K' },  // 1Omi CrB
        { ra: 230.2583, dec: 0.7153, magnitude: 5.35, spectralType: 'K' },  // 6 Ser
        { ra: 230.2788, dec: 24.9578, magnitude: 6.39, spectralType: 'K' },
        { ra: 230.7892, dec: -36.8586, magnitude: 4.54, spectralType: 'B' },  // Phi2Lup
        { ra: 231.5613, dec: -68.3092, magnitude: 5.89, spectralType: 'G' },
        { ra: 229.2746, dec: 71.8239, magnitude: 5.02, spectralType: 'K' },  // 11 UMi
        { ra: 230.0217, dec: 51.9586, magnitude: 5.66, spectralType: 'A' },
        { ra: 230.1733, dec: 44.4342, magnitude: 6.19, spectralType: 'F' },
        { ra: 230.5967, dec: 12.5675, magnitude: 6.28, spectralType: 'A' },  // 7 Ser
        { ra: 230.4525, dec: 32.9339, magnitude: 5.37, spectralType: 'B' },  // 50 Boo
        { ra: 231.1871, dec: -39.7103, magnitude: 5.37, spectralType: 'A' },  // Ups Lup
        { ra: 230.9675, dec: -12.3694, magnitude: 5.72, spectralType: 'G' },
        { ra: 230.9321, dec: -1.0225, magnitude: 6.12, spectralType: 'F' },  // 8 Ser
        { ra: 231.2775, dec: -38.1694, magnitude: 7.03, spectralType: 'A' },
        { ra: 231.0496, dec: -10.3222, magnitude: 4.94, spectralType: 'F' },  // 31Eps Lib
        { ra: 231.3342, dec: -38.7336, magnitude: 4.6, spectralType: 'A' },
        { ra: 231.8879, dec: -64.5314, magnitude: 5.71, spectralType: 'K' },
        { ra: 230.6558, dec: 39.5814, magnitude: 5.5, spectralType: 'K' },
        { ra: 230.8012, dec: 30.2878, magnitude: 5.58, spectralType: 'G' },  // 2Eta CrB
        { ra: 230.8012, dec: 30.2878, magnitude: 6.08, spectralType: 'G' },  // 2Eta CrB
        { ra: 235.82, dec: -84.4653, magnitude: 5.57, spectralType: 'A' },  // Rho Oct
        { ra: 232.8783, dec: -73.3894, magnitude: 5.49, spectralType: 'B' },  // Kap1Aps
        { ra: 230.6554, dec: 62.0472, magnitude: 5.98, spectralType: 'A' },
        { ra: 231.0213, dec: 45.2711, magnitude: 6.01, spectralType: 'K' },
        { ra: 231.1225, dec: 37.3772, magnitude: 4.31, spectralType: 'F' },  // 51Mu 1Boo
        { ra: 231.1288, dec: 37.3478, magnitude: 6.5, spectralType: 'G' },  // 51Mu 2Boo
        { ra: 230.1821, dec: 71.8339, magnitude: 3.05, spectralType: 'A' },  // 13Gam UMi
        { ra: 231.8258, dec: -36.7678, magnitude: 5.45, spectralType: 'B' },
        { ra: 230.66, dec: 63.3414, magnitude: 5.79, spectralType: 'K' },
        { ra: 232.1133, dec: -51.5975, magnitude: 6.1, spectralType: 'G' },
        { ra: 231.4475, dec: 15.4281, magnitude: 5.17, spectralType: 'M' },  // 9Tau1Ser
        { ra: 231.4721, dec: 19.4808, magnitude: 6.27, spectralType: 'G' },
        { ra: 231.5725, dec: 34.3358, magnitude: 5.46, spectralType: 'K' },
        { ra: 232.3512, dec: -46.7328, magnitude: 5.24, spectralType: 'K' },
        { ra: 232.0642, dec: -16.7164, magnitude: 5.64, spectralType: 'K' },  // 32Zet1Lib
        { ra: 231.2325, dec: 58.9661, magnitude: 3.29, spectralType: 'K' },  // 12Iot Dra
        { ra: 231.9121, dec: 25.1017, magnitude: 6.02, spectralType: 'M' },
        { ra: 232.1592, dec: 1.8422, magnitude: 5.17, spectralType: 'A' },  // 10 Ser
        { ra: 231.9571, dec: 29.1058, magnitude: 3.68, spectralType: 'F' },  // 3Bet CrB
        { ra: 231.6354, dec: 54.02, magnitude: 6.45, spectralType: 'A' },
        { ra: 232.6513, dec: -20.7283, magnitude: 6.22, spectralType: 'A' },
        { ra: 232.6683, dec: -16.6094, magnitude: 5.82, spectralType: 'G' },  // 34Zet3Lib
        { ra: 233.0183, dec: -38.6231, magnitude: 6.25, spectralType: 'A' },
        { ra: 232.1854, dec: 47.2014, magnitude: 6.15, spectralType: 'A' },
        { ra: 232.9596, dec: -32.8811, magnitude: 6.46, spectralType: 'B' },
        { ra: 231.92, dec: 62.2756, magnitude: 6.5, spectralType: 'A' },
        { ra: 231.9642, dec: 60.6703, magnitude: 5.9, spectralType: 'K' },
        { ra: 232.9308, dec: -20.1647, magnitude: 6.22, spectralType: 'A' },
        { ra: 234.8263, dec: -77.9181, magnitude: 6.18, spectralType: 'K' },
        { ra: 232.7308, dec: 8.5792, magnitude: 6.57, spectralType: 'F' },
        { ra: 232.2367, dec: 55.195, magnitude: 6.43, spectralType: 'A' },
        { ra: 232.5946, dec: 31.2861, magnitude: 6.46, spectralType: 'A' },
        { ra: 232.6163, dec: 36.8042, magnitude: 6.37, spectralType: 'K' },
        { ra: 233.1529, dec: -19.6706, magnitude: 5.52, spectralType: 'A' },
        { ra: 232.7325, dec: 40.8331, magnitude: 5.02, spectralType: 'K' },  // 52Nu 1Boo
        { ra: 233.23, dec: -16.8528, magnitude: 5.5, spectralType: 'B' },  // 35Zet4Lib
        { ra: 233.2879, dec: -24.4894, magnitude: 7.0, spectralType: 'A' },
        { ra: 234.0725, dec: -65.6133, magnitude: 6.51, spectralType: 'F' },
        { ra: 233.5067, dec: -40.0661, magnitude: 5.82, spectralType: 'M' },
        { ra: 232.3383, dec: 62.0997, magnitude: 6.38, spectralType: 'K' },
        { ra: 232.8433, dec: 36.6164, magnitude: 6.38, spectralType: 'F' },
        { ra: 233.0404, dec: 16.0561, magnitude: 6.22, spectralType: 'B' },  // 12Tau2Ser
        { ra: 234.18, dec: -66.3169, magnitude: 4.11, spectralType: 'K' },  // Eps TrA
        { ra: 233.2412, dec: -1.1864, magnitude: 5.51, spectralType: 'K' },  // 11 Ser
        { ra: 233.5871, dec: -39.3494, magnitude: 6.36, spectralType: 'B' },
        { ra: 232.9458, dec: 40.8994, magnitude: 5.02, spectralType: 'A' },  // 53Nu 2Boo
        { ra: 233.6554, dec: -28.0469, magnitude: 5.15, spectralType: 'K' },  // 36 Lib
        { ra: 233.7854, dec: -41.1669, magnitude: 2.78, spectralType: 'B' },  // Gam Lup
        { ra: 233.5446, dec: -10.0644, magnitude: 4.62, spectralType: 'K' },  // 37 Lib
        { ra: 233.2325, dec: 31.3592, magnitude: 4.14, spectralType: 'B' },  // 4The CrB
        { ra: 233.5867, dec: -5.695, magnitude: 6.51, spectralType: 'F' },
        { ra: 233.6108, dec: -9.1833, magnitude: 5.17, spectralType: 'B' },
        { ra: 233.9717, dec: -44.9586, magnitude: 4.54, spectralType: 'B' },
        { ra: 235.0883, dec: -73.4467, magnitude: 5.65, spectralType: 'B' },  // Kap2Aps
        { ra: 233.47, dec: 17.1378, magnitude: 6.45, spectralType: 'F' },
        { ra: 234.0504, dec: -44.3969, magnitude: 5.43, spectralType: 'K' },
        { ra: 232.7321, dec: 64.2086, magnitude: 5.79, spectralType: 'K' },
        { ra: 235.4775, dec: -76.0819, magnitude: 5.95, spectralType: 'B' },
        { ra: 233.8817, dec: -14.7894, magnitude: 3.91, spectralType: 'G' },  // 38Gam Lib
        { ra: 233.7004, dec: 10.5375, magnitude: 3.8, spectralType: 'F' },  // 13Del Ser
        { ra: 233.7004, dec: 10.5392, magnitude: 3.8, spectralType: 'F' },  // 13Del Ser
        { ra: 234.0475, dec: -33.0928, magnitude: 6.24, spectralType: 'B' },
        { ra: 233.7692, dec: 1.6689, magnitude: 6.56, spectralType: 'F' },
        { ra: 235.0479, dec: -70.2278, magnitude: 6.44, spectralType: 'A' },
        { ra: 233.6721, dec: 26.7147, magnitude: 2.23, spectralType: 'A' },  // 5Alp CrB
        { ra: 234.2562, dec: -28.135, magnitude: 3.58, spectralType: 'K' },  // 39Ups Lib
        { ra: 233.8883, dec: 17.6556, magnitude: 6.12, spectralType: 'G' },  // 15Tau3Ser
        { ra: 233.9725, dec: 11.2656, magnitude: 6.07, spectralType: 'K' },
        { ra: 234.5133, dec: -42.5675, magnitude: 4.33, spectralType: 'K' },  // Ome Lup
        { ra: 234.7062, dec: -52.3728, magnitude: 5.44, spectralType: 'A' },
        { ra: 234.1404, dec: -0.5617, magnitude: 6.51, spectralType: 'G' },  // 14 Ser
        { ra: 233.8125, dec: 39.01, magnitude: 5.11, spectralType: 'M' },  // 6Mu CrB
        { ra: 234.3688, dec: -26.28, magnitude: 6.19, spectralType: 'B' },
        { ra: 234.1233, dec: 10.01, magnitude: 5.26, spectralType: 'K' },  // 16 Ser
        { ra: 234.9854, dec: -59.9083, magnitude: 5.95, spectralType: 'F' },
        { ra: 234.1221, dec: 16.1189, magnitude: 5.93, spectralType: 'F' },  // 18Tau5Ser
        { ra: 234.6362, dec: -39.1608, magnitude: 6.57, spectralType: 'B' },
        { ra: 234.4504, dec: -23.1417, magnitude: 5.78, spectralType: 'K' },
        { ra: 234.6762, dec: -39.1281, magnitude: 6.04, spectralType: 'A' },
        { ra: 233.9554, dec: 38.3739, magnitude: 6.42, spectralType: 'K' },
        { ra: 234.5654, dec: -28.2067, magnitude: 6.32, spectralType: 'K' },
        { ra: 234.5679, dec: -21.0161, magnitude: 5.84, spectralType: 'G' },
        { ra: 233.8179, dec: 53.9219, magnitude: 5.97, spectralType: 'K' },
        { ra: 234.6642, dec: -29.7778, magnitude: 3.66, spectralType: 'B' },  // 40Tau Lib
        { ra: 234.2225, dec: 29.9911, magnitude: 6.52, spectralType: 'F' },
        { ra: 234.7271, dec: -19.3019, magnitude: 5.38, spectralType: 'G' },  // 41 Lib
        { ra: 234.6667, dec: -8.7944, magnitude: 6.5, spectralType: 'F' },
        { ra: 234.6671, dec: -8.7911, magnitude: 6.48, spectralType: 'F' },
        { ra: 234.0171, dec: 52.0697, magnitude: 6.74, spectralType: 'F' },
        { ra: 233.9879, dec: 54.6306, magnitude: 5.74, spectralType: 'A' },
        { ra: 234.8388, dec: -23.1503, magnitude: 6.34, spectralType: 'A' },
        { ra: 234.9417, dec: -34.4119, magnitude: 4.67, spectralType: 'G' },  // 3Psi1Lup
        { ra: 235.2429, dec: -47.7356, magnitude: 6.23, spectralType: 'K' },
        { ra: 235.0642, dec: -31.2136, magnitude: 6.34, spectralType: 'K' },
        { ra: 234.4567, dec: 40.3533, magnitude: 5.24, spectralType: 'G' },  // 54Phi Boo
        { ra: 235.0704, dec: -23.8181, magnitude: 4.96, spectralType: 'K' },  // 42 Lib
        { ra: 235.2971, dec: -44.6611, magnitude: 4.64, spectralType: 'F' },
        { ra: 232.8538, dec: 77.3494, magnitude: 4.96, spectralType: 'K' },  // 15The UMi
        { ra: 234.7037, dec: 34.675, magnitude: 6.11, spectralType: 'K' },
        { ra: 234.3833, dec: 54.5089, magnitude: 5.87, spectralType: 'K' },
        { ra: 232.2958, dec: 80.4486, magnitude: 6.58, spectralType: 'G' },
        { ra: 234.5675, dec: 46.7978, magnitude: 5.75, spectralType: 'F' },
        { ra: 235.0433, dec: 12.0531, magnitude: 6.25, spectralType: 'G' },
        { ra: 235.655, dec: -49.4894, magnitude: 6.04, spectralType: 'K' },
        { ra: 234.8425, dec: 36.6367, magnitude: 6.0, spectralType: 'B' },  // 7Zet1CrB
        { ra: 234.8446, dec: 36.6358, magnitude: 5.07, spectralType: 'B' },  // 7Zet2CrB
        { ra: 234.6429, dec: 50.4233, magnitude: 5.84, spectralType: 'G' },
        { ra: 235.9796, dec: -60.2872, magnitude: 6.48, spectralType: 'G' },
        { ra: 235.6596, dec: -37.425, magnitude: 5.24, spectralType: 'G' },
        { ra: 235.4867, dec: -19.6789, magnitude: 4.74, spectralType: 'M' },  // 43Kap Lib
        { ra: 235.6708, dec: -34.7106, magnitude: 4.75, spectralType: 'B' },  // 4Psi2Lup
        { ra: 235.2467, dec: 16.0247, magnitude: 6.01, spectralType: 'G' },  // 19Tau6Ser
        { ra: 234.7896, dec: 57.9244, magnitude: 6.45, spectralType: 'K' },
        { ra: 235.3879, dec: 19.6703, magnitude: 4.52, spectralType: 'A' },  // 21Iot Ser
        { ra: 235.4475, dec: 12.8475, magnitude: 5.33, spectralType: 'A' },  // 20Chi Ser
        { ra: 234.4129, dec: 69.2833, magnitude: 5.62, spectralType: 'K' },
        { ra: 235.4779, dec: 18.4639, magnitude: 5.81, spectralType: 'A' },  // 22Tau7Ser
        { ra: 236.0942, dec: -41.8194, magnitude: 5.94, spectralType: 'A' },
        { ra: 235.8538, dec: -15.0433, magnitude: 6.31, spectralType: 'K' },
        { ra: 236.0183, dec: -15.6728, magnitude: 5.41, spectralType: 'F' },  // 44Eta Lib
        { ra: 235.6858, dec: 26.2956, magnitude: 3.84, spectralType: 'B' },  // 8Gam CrB
        { ra: 235.7942, dec: 13.6678, magnitude: 6.48, spectralType: 'G' },
        { ra: 236.9733, dec: -65.4425, magnitude: 6.18, spectralType: 'A' },
        { ra: 236.9737, dec: -65.4425, magnitude: 6.39, spectralType: 'F' },
        { ra: 236.0075, dec: 2.515, magnitude: 5.88, spectralType: 'G' },  // 23Psi Ser
        { ra: 236.0671, dec: 6.4256, magnitude: 2.65, spectralType: 'K' },  // 24Alp Ser
        { ra: 235.9971, dec: 32.5158, magnitude: 5.56, spectralType: 'G' },  // 9Pi CrB
        { ra: 236.5533, dec: -28.0617, magnitude: 6.51, spectralType: 'F' },
        { ra: 235.7113, dec: 52.3608, magnitude: 5.51, spectralType: 'B' },
        { ra: 236.1754, dec: 17.2642, magnitude: 6.14, spectralType: 'A' },  // 26Tau8Ser
        { ra: 236.3479, dec: 5.4469, magnitude: 5.58, spectralType: 'A' },
        { ra: 236.6842, dec: -34.6825, magnitude: 5.61, spectralType: 'B' },
        { ra: 236.4154, dec: 0.8914, magnitude: 6.33, spectralType: 'K' },
        { ra: 236.8558, dec: -40.1942, magnitude: 6.42, spectralType: 'G' },
        { ra: 236.5233, dec: -1.8044, magnitude: 5.4, spectralType: 'B' },  // 25 Ser
        { ra: 236.8708, dec: -37.9164, magnitude: 6.01, spectralType: 'G' },
        { ra: 237.2096, dec: -52.4381, magnitude: 6.07, spectralType: 'K' },
        { ra: 236.6892, dec: -6.1203, magnitude: 6.24, spectralType: 'K' },
        { ra: 236.5471, dec: 15.4219, magnitude: 3.67, spectralType: 'A' },  // 28Bet Ser
        { ra: 236.6108, dec: 7.3531, magnitude: 4.43, spectralType: 'G' },  // 27Lam Ser
        { ra: 237.5288, dec: -53.2094, magnitude: 5.77, spectralType: 'B' },
        { ra: 236.8221, dec: 14.1153, magnitude: 5.71, spectralType: 'A' },  // 31Ups Ser
        { ra: 237.4896, dec: -48.9119, magnitude: 5.84, spectralType: 'A' },
        { ra: 237.5679, dec: -45.4017, magnitude: 6.12, spectralType: 'A' },
        { ra: 237.7783, dec: -55.0558, magnitude: 5.73, spectralType: 'B' },
        { ra: 237.0554, dec: 13.7886, magnitude: 6.0, spectralType: 'K' },
        { ra: 237.2367, dec: -3.8186, magnitude: 5.53, spectralType: 'A' },
        { ra: 238.2363, dec: -65.1525, magnitude: 6.54, spectralType: 'A' },
        { ra: 237.0083, dec: 31.7358, magnitude: 6.44, spectralType: 'K' },
        { ra: 236.645, dec: 55.4747, magnitude: 5.92, spectralType: 'K' },
        { ra: 237.185, dec: 18.1417, magnitude: 4.09, spectralType: 'M' },  // 35Kap Ser
        { ra: 237.1433, dec: 28.1567, magnitude: 5.85, spectralType: 'G' },
        { ra: 237.405, dec: -3.4303, magnitude: 3.53, spectralType: 'A' },  // 32Mu Ser
        { ra: 237.8812, dec: -47.0606, magnitude: 6.01, spectralType: 'K' },
        { ra: 237.7396, dec: -33.6272, magnitude: 3.95, spectralType: 'B' },  // 5Chi Lup
        { ra: 238.345, dec: -62.6069, magnitude: 6.19, spectralType: 'K' },
        { ra: 237.7446, dec: -25.7514, magnitude: 4.64, spectralType: 'B' },  // 1 Sco
        { ra: 236.6667, dec: 62.5994, magnitude: 5.19, spectralType: 'A' },
        { ra: 236.9083, dec: 55.3767, magnitude: 5.86, spectralType: 'A' },
        { ra: 237.5729, dec: 2.1964, magnitude: 5.23, spectralType: 'G' },  // 34Ome Ser
        { ra: 237.3988, dec: 26.0683, magnitude: 4.63, spectralType: 'G' },  // 10Del CrB
        { ra: 238.2146, dec: -50.6153, magnitude: 6.6, spectralType: 'K' },
        { ra: 238.8733, dec: -68.6031, magnitude: 5.09, spectralType: 'G' },  // Kap TrA
        { ra: 237.7042, dec: 4.4778, magnitude: 3.71, spectralType: 'A' },  // 37Eps Ser
        { ra: 238.0533, dec: -29.8867, magnitude: 6.4, spectralType: 'K' },
        { ra: 237.6738, dec: 15.1336, magnitude: 5.2, spectralType: 'M' },
        { ra: 237.815, dec: -3.0906, magnitude: 5.11, spectralType: 'A' },  // 36 Ser
        { ra: 237.91, dec: -14.1336, magnitude: 6.19, spectralType: 'G' },
        { ra: 238.7854, dec: -63.4306, magnitude: 2.85, spectralType: 'F' },  // Bet TrA
        { ra: 238.7192, dec: -60.7433, magnitude: 6.15, spectralType: 'B' },
        { ra: 237.8162, dec: 20.9778, magnitude: 4.76, spectralType: 'K' },  // 38Rho Ser
        { ra: 238.8846, dec: -60.1778, magnitude: 5.77, spectralType: 'G' },
        { ra: 237.8079, dec: 35.6575, magnitude: 4.82, spectralType: 'K' },  // 11Kap CrB
        { ra: 238.3338, dec: -20.1672, magnitude: 5.03, spectralType: 'B' },  // 45Lam Lib
        { ra: 236.0146, dec: 77.7944, magnitude: 4.32, spectralType: 'A' },  // 16Zet UMi
        { ra: 238.4029, dec: -25.3272, magnitude: 4.59, spectralType: 'B' },  // 2 Sco
        { ra: 239.025, dec: -60.4828, magnitude: 5.76, spectralType: 'A' },
        { ra: 238.4742, dec: -24.5331, magnitude: 5.39, spectralType: 'B' },
        { ra: 238.4825, dec: -23.9781, magnitude: 5.42, spectralType: 'B' },
        { ra: 238.4562, dec: -16.7294, magnitude: 4.15, spectralType: 'G' },  // 46The Lib
        { ra: 238.2342, dec: 17.4036, magnitude: 6.36, spectralType: 'K' },
        { ra: 238.625, dec: -27.3386, magnitude: 6.14, spectralType: 'B' },
        { ra: 238.3004, dec: 13.1967, magnitude: 6.1, spectralType: 'G' },  // 39 Ser
        { ra: 238.6646, dec: -25.2436, magnitude: 5.87, spectralType: 'B' },  // 3 Sco
        { ra: 238.3954, dec: 16.075, magnitude: 6.09, spectralType: 'F' },
        { ra: 238.1688, dec: 42.4517, magnitude: 4.62, spectralType: 'F' },  // 1Chi Her
        { ra: 238.7512, dec: -19.3831, magnitude: 5.94, spectralType: 'B' },  // 47 Lib
        { ra: 238.8767, dec: -31.0836, magnitude: 6.21, spectralType: 'K' },
        { ra: 238.8754, dec: -26.2658, magnitude: 5.62, spectralType: 'A' },  // 4 Sco
        { ra: 239.0271, dec: -39.8642, magnitude: 6.03, spectralType: 'B' },
        { ra: 238.6679, dec: 8.5803, magnitude: 6.29, spectralType: 'A' },  // 40 Ser
        { ra: 239.7421, dec: -65.0378, magnitude: 5.75, spectralType: 'B' },
        { ra: 239.2658, dec: -48.1622, magnitude: 6.31, spectralType: 'F' },
        { ra: 238.0692, dec: 55.8267, magnitude: 5.81, spectralType: 'G' },
        { ra: 239.0579, dec: -31.7858, magnitude: 6.29, spectralType: 'F' },
        { ra: 238.6442, dec: 20.3108, magnitude: 5.44, spectralType: 'M' },
        { ra: 239.2229, dec: -33.9664, magnitude: 5.12, spectralType: 'A' },  // Xi 1Lup
        { ra: 239.2258, dec: -33.9642, magnitude: 5.62, spectralType: 'B' },  // Xi 2Lup
        { ra: 239.06, dec: -14.3994, magnitude: 6.37, spectralType: 'F' },
        { ra: 239.2212, dec: -29.2142, magnitude: 3.88, spectralType: 'B' },  // 5Rho Sco
        { ra: 239.3387, dec: -36.185, magnitude: 5.8, spectralType: 'K' },
        { ra: 239.1392, dec: -14.8292, magnitude: 6.13, spectralType: 'A' },
        { ra: 238.9158, dec: 18.6206, magnitude: 6.26, spectralType: 'B' },
        { ra: 238.6579, dec: 43.1386, magnitude: 5.37, spectralType: 'M' },  // 2 Her
        { ra: 239.1133, dec: 15.6617, magnitude: 3.85, spectralType: 'F' },  // 41Gam Ser
        { ra: 239.4183, dec: -20.9831, magnitude: 5.85, spectralType: 'B' },
        { ra: 239.6279, dec: -37.5031, magnitude: 6.31, spectralType: 'K' },
        { ra: 238.9483, dec: 37.9469, magnitude: 5.45, spectralType: 'F' },  // 12Lam CrB
        { ra: 239.975, dec: -54.0211, magnitude: 6.1, spectralType: 'B' },
        { ra: 238.8775, dec: 42.5661, magnitude: 5.75, spectralType: 'B' },  // 4 Her
        { ra: 240.2946, dec: -63.7767, magnitude: 6.41, spectralType: 'F' },
        { ra: 239.3108, dec: 14.4144, magnitude: 5.54, spectralType: 'K' },  // Phi Ser
        { ra: 239.5475, dec: -14.2794, magnitude: 4.88, spectralType: 'B' },  // 48 Lib
        { ra: 239.645, dec: -24.8314, magnitude: 5.43, spectralType: 'B' },
        { ra: 239.8762, dec: -41.7444, magnitude: 4.99, spectralType: 'K' },
        { ra: 239.7129, dec: -26.1142, magnitude: 2.89, spectralType: 'B' },  // 6Pi Sco
        { ra: 239.9917, dec: -40.6528, magnitude: 6.49, spectralType: 'K' },
        { ra: 240.2767, dec: -54.5778, magnitude: 6.13, spectralType: 'A' },
        { ra: 239.3971, dec: 26.8778, magnitude: 4.15, spectralType: 'K' },  // 13Eps CrB
        { ra: 240.0304, dec: -38.3969, magnitude: 3.41, spectralType: 'B' },  // Eta Lup
        { ra: 238.9571, dec: 58.9117, magnitude: 6.31, spectralType: 'A' },
        { ra: 239.3746, dec: 39.6953, magnitude: 6.31, spectralType: 'K' },
        { ra: 240.7183, dec: -62.5417, magnitude: 6.25, spectralType: 'B' },
        { ra: 240.2238, dec: -40.4353, magnitude: 6.21, spectralType: 'A' },
        { ra: 240.0833, dec: -22.6217, magnitude: 2.32, spectralType: 'B' },  // 7Del Sco
        { ra: 240.0817, dec: -16.5333, magnitude: 5.47, spectralType: 'F' },  // 49 Lib
        { ra: 241.4825, dec: -72.4008, magnitude: 5.7, spectralType: 'K' },
        { ra: 240.3312, dec: -31.8894, magnitude: 6.33, spectralType: 'K' },
        { ra: 239.7404, dec: 36.6439, magnitude: 5.62, spectralType: 'K' },
        { ra: 239.8758, dec: 25.9203, magnitude: 2.0, spectralType: 'B' },
        { ra: 240.1983, dec: -8.4114, magnitude: 5.55, spectralType: 'A' },  // 50 Lib
        { ra: 239.4475, dec: 54.7497, magnitude: 4.95, spectralType: 'F' },
        { ra: 240.8829, dec: -57.7753, magnitude: 4.63, spectralType: 'A' },  // Iot1Nor
        { ra: 240.8038, dec: -49.2297, magnitude: 4.65, spectralType: 'G' },  // Eta Nor
        { ra: 240.2129, dec: 4.4275, magnitude: 5.83, spectralType: 'K' },
        { ra: 239.7683, dec: 49.8811, magnitude: 6.05, spectralType: 'F' },
        { ra: 240.6642, dec: -29.1358, magnitude: 6.03, spectralType: 'K' },
        { ra: 240.3096, dec: 17.8183, magnitude: 5.12, spectralType: 'G' },  // 5 Her
        { ra: 240.8508, dec: -38.6025, magnitude: 4.89, spectralType: 'B' },
        { ra: 240.2612, dec: 33.3036, magnitude: 5.41, spectralType: 'G' },  // 15Rho CrB
        { ra: 240.8358, dec: -25.8653, magnitude: 5.0, spectralType: 'K' },
        { ra: 240.8929, dec: -32.0006, magnitude: 6.01, spectralType: 'F' },
        { ra: 240.3608, dec: 29.8511, magnitude: 4.99, spectralType: 'A' },  // 14Iot CrB
        { ra: 240.5738, dec: 22.8044, magnitude: 4.83, spectralType: 'A' },  // 44Pi Ser
        { ra: 240.9779, dec: -24.7264, magnitude: 6.21, spectralType: 'K' },
        { ra: 241.0742, dec: -33.2144, magnitude: 6.1, spectralType: 'A' },
        { ra: 241.1529, dec: -37.8631, magnitude: 5.9, spectralType: 'F' },
        { ra: 240.9404, dec: 4.9867, magnitude: 6.08, spectralType: 'G' },  // 43 Ser
        { ra: 241.0921, dec: -11.3731, magnitude: 5.07, spectralType: 'F' },  // Xi Sco
        { ra: 241.0921, dec: -11.3731, magnitude: 4.77, spectralType: 'F' },  // Xi Sco
        { ra: 241.85, dec: -56.1914, magnitude: 6.16, spectralType: 'F' },
        { ra: 241.6225, dec: -45.1733, magnitude: 4.72, spectralType: 'A' },  // Del Nor
        { ra: 240.5229, dec: 52.9158, magnitude: 5.93, spectralType: 'K' },
        { ra: 240.6996, dec: 46.0367, magnitude: 4.76, spectralType: 'B' },  // 6Ups Her
        { ra: 240.8308, dec: 36.6317, magnitude: 5.83, spectralType: 'A' },
        { ra: 241.3592, dec: -19.8056, magnitude: 2.62, spectralType: 'B' },  // 8Bet1Sco
        { ra: 241.3604, dec: -19.8019, magnitude: 4.92, spectralType: 'B' },  // 8Bet2Sco
        { ra: 240.4721, dec: 58.5653, magnitude: 4.01, spectralType: 'F' },  // 13The Dra
        { ra: 241.6479, dec: -36.8022, magnitude: 4.23, spectralType: 'B' },  // The Lup
        { ra: 241.5263, dec: -23.6064, magnitude: 5.92, spectralType: 'B' },
        { ra: 241.4354, dec: -6.2917, magnitude: 6.53, spectralType: 'F' },
        { ra: 241.4992, dec: -6.1394, magnitude: 6.41, spectralType: 'K' },
        { ra: 241.8183, dec: -36.7556, magnitude: 5.73, spectralType: 'F' },
        { ra: 241.4075, dec: 8.0961, magnitude: 6.29, spectralType: 'A' },
        { ra: 241.7017, dec: -20.6692, magnitude: 3.96, spectralType: 'B' },  // 9Ome1Sco
        { ra: 242.3275, dec: -57.9344, magnitude: 5.57, spectralType: 'B' },  // Iot2Nor
        { ra: 240.7888, dec: 59.4108, magnitude: 6.19, spectralType: 'M' },
        { ra: 241.7642, dec: -14.0708, magnitude: 6.32, spectralType: 'G' },
        { ra: 241.8513, dec: -20.8686, magnitude: 4.32, spectralType: 'G' },  // 10Ome2Sco
        { ra: 241.9663, dec: -24.4619, magnitude: 6.33, spectralType: 'B' },
        { ra: 242.1425, dec: -39.1053, magnitude: 7.05, spectralType: 'A' },
        { ra: 242.1433, dec: -39.0931, magnitude: 6.65, spectralType: 'A' },
        { ra: 242.0317, dec: -26.3267, magnitude: 5.38, spectralType: 'M' },
        { ra: 241.9017, dec: -12.7456, magnitude: 5.78, spectralType: 'B' },  // 11 Sco
        { ra: 242.1821, dec: -23.6856, magnitude: 5.88, spectralType: 'B' },
        { ra: 241.9063, dec: 9.8917, magnitude: 5.63, spectralType: 'A' },  // 45 Ser
        { ra: 241.8425, dec: 21.8225, magnitude: 6.14, spectralType: 'K' },
        { ra: 242.3821, dec: -32.6497, magnitude: 6.19, spectralType: 'K' },
        { ra: 242.4692, dec: -33.5458, magnitude: 5.54, spectralType: 'B' },
        { ra: 242.0187, dec: 17.0469, magnitude: 5.0, spectralType: 'G' },  // 7Kap Her
        { ra: 242.0204, dec: 17.0544, magnitude: 6.25, spectralType: 'K' },  // 7Kap Her
        { ra: 242.1167, dec: 8.5342, magnitude: 5.73, spectralType: 'M' },  // 47 Ser
        { ra: 242.2454, dec: 3.4544, magnitude: 5.91, spectralType: 'K' },
        { ra: 242.48, dec: -18.3408, magnitude: 6.47, spectralType: 'F' },
        { ra: 242.1942, dec: 17.2058, magnitude: 6.14, spectralType: 'A' },  // 8 Her
        { ra: 242.2967, dec: 6.3789, magnitude: 5.97, spectralType: 'K' },
        { ra: 242.8237, dec: -41.1197, magnitude: 5.86, spectralType: 'F' },
        { ra: 242.4604, dec: -3.4669, magnitude: 5.37, spectralType: 'K' },
        { ra: 242.7583, dec: -29.4164, magnitude: 5.13, spectralType: 'K' },
        { ra: 242.2429, dec: 36.4908, magnitude: 4.76, spectralType: 'K' },  // 16Tau CrB
        { ra: 243.3442, dec: -55.5408, magnitude: 5.81, spectralType: 'F' },  // Zet Nor
        { ra: 245.0867, dec: -78.6958, magnitude: 4.68, spectralType: 'M' },  // Del1Aps
        { ra: 245.1117, dec: -78.6672, magnitude: 5.27, spectralType: 'K' },  // Del2Aps
        { ra: 243.32, dec: -53.6717, magnitude: 5.83, spectralType: 'M' },
        { ra: 242.1925, dec: 44.935, magnitude: 4.26, spectralType: 'B' },  // 11Phi Her
        { ra: 243.3696, dec: -54.6306, magnitude: 4.94, spectralType: 'G' },  // Kap Nor
        { ra: 241.5821, dec: 67.8103, magnitude: 5.44, spectralType: 'A' },
        { ra: 242.9942, dec: -19.4497, magnitude: 6.3, spectralType: 'B' },  // 14Nu Sco
        { ra: 242.9988, dec: -19.4606, magnitude: 4.01, spectralType: 'B' },  // 14Nu Sco
        { ra: 243.0758, dec: -27.9264, magnitude: 4.59, spectralType: 'B' },  // 13 Sco
        { ra: 243.0662, dec: -28.4175, magnitude: 5.67, spectralType: 'B' },  // 12 Sco
        { ra: 243.8596, dec: -63.6856, magnitude: 3.85, spectralType: 'G' },  // Del TrA
        { ra: 243.0, dec: -10.0642, magnitude: 4.94, spectralType: 'A' },  // 15Psi Sco
        { ra: 242.8738, dec: 9.7125, magnitude: 6.53, spectralType: 'F' },
        { ra: 243.0304, dec: -8.5475, magnitude: 5.43, spectralType: 'A' },  // 16 Sco
        { ra: 240.8804, dec: 76.7936, magnitude: 5.56, spectralType: 'A' },
        { ra: 242.8696, dec: 16.6656, magnitude: 6.08, spectralType: 'A' },
        { ra: 242.2621, dec: 57.9378, magnitude: 6.33, spectralType: 'A' },
        { ra: 244.2729, dec: -67.9414, magnitude: 5.75, spectralType: 'A' },
        { ra: 242.3583, dec: 55.8289, magnitude: 6.49, spectralType: 'K' },
        { ra: 242.9083, dec: 23.4947, magnitude: 5.7, spectralType: 'M' },  // 10 Her
        { ra: 243.9571, dec: -57.9122, magnitude: 5.63, spectralType: 'A' },
        { ra: 243.2354, dec: -4.2208, magnitude: 6.25, spectralType: 'A' },
        { ra: 243.4404, dec: -24.4219, magnitude: 6.41, spectralType: 'B' },
        { ra: 242.9154, dec: 33.3425, magnitude: 6.29, spectralType: 'K' },
        { ra: 243.5929, dec: -33.0114, magnitude: 5.92, spectralType: 'K' },
        { ra: 243.8137, dec: -47.3722, magnitude: 5.14, spectralType: 'B' },  // The Nor
        { ra: 242.95, dec: 36.425, magnitude: 5.63, spectralType: 'K' },
        { ra: 243.3142, dec: 5.0211, magnitude: 5.48, spectralType: 'K' },  // 9 Her
        { ra: 243.4621, dec: -11.8375, magnitude: 5.22, spectralType: 'K' },  // 17Chi Sco
        { ra: 243.85, dec: -42.8997, magnitude: 6.14, spectralType: 'K' },
        { ra: 242.9483, dec: 42.3744, magnitude: 5.87, spectralType: 'K' },
        { ra: 243.62, dec: -21.1075, magnitude: 6.41, spectralType: 'A' },
        { ra: 243.1887, dec: 26.6708, magnitude: 6.5, spectralType: 'F' },
        { ra: 243.6629, dec: -18.5353, magnitude: 6.32, spectralType: 'K' },
        { ra: 243.7233, dec: -25.4769, magnitude: 6.05, spectralType: 'B' },
        { ra: 244.1796, dec: -53.8111, magnitude: 5.44, spectralType: 'M' },
        { ra: 243.5863, dec: -3.6944, magnitude: 2.74, spectralType: 'M' },  // 1Del Oph
        { ra: 243.5563, dec: 5.9019, magnitude: 6.31, spectralType: 'K' },
        { ra: 244.2538, dec: -50.0683, magnitude: 4.99, spectralType: 'F' },  // Gam1Nor
        { ra: 244.3371, dec: -53.0867, magnitude: 6.33, spectralType: 'A' },
        { ra: 243.9054, dec: -8.3694, magnitude: 5.5, spectralType: 'G' },  // 18 Sco
        { ra: 243.9646, dec: -14.8492, magnitude: 6.09, spectralType: 'A' },
        { ra: 244.7163, dec: -57.8997, magnitude: 6.49, spectralType: 'F' },
        { ra: 243.67, dec: 33.8586, magnitude: 5.64, spectralType: 'G' },  // 17Sig CrB
        { ra: 243.67, dec: 33.8583, magnitude: 6.66, spectralType: 'G' },  // 17Sig CrB
        { ra: 243.8696, dec: 18.8083, magnitude: 5.69, spectralType: 'K' },  // 16 Her
        { ra: 244.245, dec: -21.3039, magnitude: 6.61, spectralType: 'B' },
        { ra: 244.2304, dec: -3.9533, magnitude: 6.18, spectralType: 'A' },
        { ra: 243.9475, dec: 27.4222, magnitude: 6.14, spectralType: 'K' },
        { ra: 243.1046, dec: 67.1442, magnitude: 6.21, spectralType: 'G' },
        { ra: 244.5746, dec: -28.6139, magnitude: 4.78, spectralType: 'A' },
        { ra: 244.8237, dec: -42.6739, magnitude: 5.45, spectralType: 'A' },  // Lam Nor
        { ra: 244.96, dec: -50.1556, magnitude: 4.02, spectralType: 'G' },  // Gam2Nor
        { ra: 245.105, dec: -55.14, magnitude: 5.77, spectralType: 'K' },
        { ra: 244.1867, dec: 29.1503, magnitude: 5.78, spectralType: 'A' },  // 18Ups CrB
        { ra: 244.5804, dec: -4.6925, magnitude: 3.24, spectralType: 'G' },  // 2Eps Oph
        { ra: 244.7821, dec: -20.2178, magnitude: 6.29, spectralType: 'K' },
        { ra: 244.8862, dec: -30.9067, magnitude: 5.49, spectralType: 'F' },
        { ra: 244.7517, dec: -14.8725, magnitude: 5.94, spectralType: 'K' },
        { ra: 242.7063, dec: 75.8775, magnitude: 5.48, spectralType: 'B' },  // 19 UMi
        { ra: 245.1358, dec: -39.4308, magnitude: 6.12, spectralType: 'B' },
        { ra: 245.1592, dec: -24.1694, magnitude: 4.55, spectralType: 'A' },  // 19Omi Sco
        { ra: 243.1342, dec: 75.2106, magnitude: 6.39, spectralType: 'K' },  // 20 UMi
        { ra: 245.6167, dec: -49.5722, magnitude: 5.33, spectralType: 'B' },
        { ra: 245.2971, dec: -25.5928, magnitude: 2.89, spectralType: 'B' },  // 20Sig Sco
        { ra: 245.6204, dec: -43.9122, magnitude: 5.88, spectralType: 'G' },
        { ra: 244.3137, dec: 59.755, magnitude: 5.4, spectralType: 'M' },
        { ra: 245.0179, dec: 21.1325, magnitude: 6.05, spectralType: 'G' },
        { ra: 243.6396, dec: 73.395, magnitude: 5.98, spectralType: 'A' },
        { ra: 246.3417, dec: -63.1247, magnitude: 6.15, spectralType: 'A' },
        { ra: 244.7967, dec: 49.0381, magnitude: 5.91, spectralType: 'K' },
        { ra: 244.9796, dec: 39.7086, magnitude: 5.46, spectralType: 'F' },
        { ra: 244.935, dec: 46.3133, magnitude: 3.89, spectralType: 'B' },  // 22Tau Her
        { ra: 245.5183, dec: 1.0292, magnitude: 4.82, spectralType: 'F' },  // 50Sig Ser
        { ra: 246.0054, dec: -39.1931, magnitude: 5.4, spectralType: 'G' },
        { ra: 245.48, dec: 19.1531, magnitude: 3.75, spectralType: 'A' },  // 20Gam Her
        { ra: 245.6621, dec: -2.0797, magnitude: 6.23, spectralType: 'B' },
        { ra: 245.9863, dec: -33.1994, magnitude: 6.47, spectralType: 'A' },
        { ra: 247.1171, dec: -70.0844, magnitude: 4.91, spectralType: 'F' },  // Zet TrA
        { ra: 246.2258, dec: -45.3492, magnitude: 6.33, spectralType: 'A' },
        { ra: 246.1321, dec: -37.5658, magnitude: 5.42, spectralType: 'B' },
        { ra: 244.5392, dec: 68.5544, magnitude: 6.41, spectralType: 'K' },
        { ra: 248.3625, dec: -78.8972, magnitude: 3.89, spectralType: 'G' },  // Gam Aps
        { ra: 245.5242, dec: 30.8919, magnitude: 4.85, spectralType: 'K' },  // 19Xi CrB
        { ra: 246.0258, dec: -20.0375, magnitude: 4.5, spectralType: 'K' },  // 4Psi Oph
        { ra: 246.165, dec: -29.7033, magnitude: 6.63, spectralType: 'G' },
        { ra: 246.1654, dec: -29.7047, magnitude: 5.84, spectralType: 'G' },
        { ra: 245.5892, dec: 33.7992, magnitude: 5.2, spectralType: 'M' },  // 20Nu 1CrB
        { ra: 245.6217, dec: 33.7036, magnitude: 5.39, spectralType: 'K' },  // 21Nu 2CrB
        { ra: 246.9887, dec: -64.0581, magnitude: 5.27, spectralType: 'F' },  // Iot TrA
        { ra: 245.7354, dec: 32.3331, magnitude: 6.4, spectralType: 'A' },
        { ra: 246.045, dec: 6.9481, magnitude: 5.85, spectralType: 'A' },  // 21 Her
        { ra: 246.3967, dec: -23.4472, magnitude: 5.02, spectralType: 'B' },  // 5Rho Oph
        { ra: 246.3963, dec: -23.4461, magnitude: 5.92, spectralType: 'B' },  // 5Rho Oph
        { ra: 247.0633, dec: -58.5997, magnitude: 5.69, spectralType: 'B' },
        { ra: 246.7962, dec: -47.555, magnitude: 4.47, spectralType: 'B' },  // Eps Nor
        { ra: 244.3762, dec: 75.7553, magnitude: 4.95, spectralType: 'F' },  // 21Eta UMi
        { ra: 246.3542, dec: 14.0333, magnitude: 4.57, spectralType: 'B' },  // 24Ome Her
        { ra: 246.7558, dec: -18.4564, magnitude: 4.42, spectralType: 'B' },  // 7Chi Oph
        { ra: 246.4488, dec: 18.8925, magnitude: 6.7, spectralType: 'M' },
        { ra: 247.4375, dec: -57.7558, magnitude: 6.06, spectralType: 'G' },
        { ra: 246.5479, dec: 11.4075, magnitude: 6.11, spectralType: 'G' },
        { ra: 247.0612, dec: -37.1794, magnitude: 5.79, spectralType: 'K' },
        { ra: 246.3508, dec: 37.3939, magnitude: 5.54, spectralType: 'A' },  // 25 Her
        { ra: 246.7088, dec: 2.3475, magnitude: 6.07, spectralType: 'G' },
        { ra: 247.7058, dec: -61.6336, magnitude: 5.2, spectralType: 'K' },
        { ra: 245.4529, dec: 69.1094, magnitude: 5.25, spectralType: 'K' },
        { ra: 246.1054, dec: 55.205, magnitude: 5.74, spectralType: 'A' },
        { ra: 246.9312, dec: -7.5981, magnitude: 5.23, spectralType: 'M' },
        { ra: 246.9504, dec: -8.3717, magnitude: 4.63, spectralType: 'A' },  // 3Ups Oph
        { ra: 245.9458, dec: 61.6967, magnitude: 5.67, spectralType: 'G' },
        { ra: 247.4263, dec: -46.2433, magnitude: 5.35, spectralType: 'B' },
        { ra: 245.9979, dec: 61.5142, magnitude: 2.74, spectralType: 'G' },  // 14Eta Dra
        { ra: 258.9971, dec: -87.5664, magnitude: 6.57, spectralType: 'G' },
        { ra: 247.3517, dec: -26.4319, magnitude: 0.96, spectralType: 'M' },  // 21Alp Sco
        { ra: 248.5804, dec: -70.9881, magnitude: 5.5, spectralType: 'K' },
        { ra: 247.1417, dec: 0.665, magnitude: 5.39, spectralType: 'K' },
        { ra: 247.2037, dec: -8.1289, magnitude: 6.48, spectralType: 'F' },
        { ra: 251.4733, dec: -83.2389, magnitude: 6.57, spectralType: 'K' },
        { ra: 255.2437, dec: -86.3644, magnitude: 6.04, spectralType: 'A' },
        { ra: 247.4454, dec: -14.5508, magnitude: 5.68, spectralType: 'G' },
        { ra: 247.5517, dec: -25.115, magnitude: 4.79, spectralType: 'B' },  // 22 Sco
        { ra: 247.9237, dec: -41.8169, magnitude: 5.33, spectralType: 'B' },
        { ra: 247.8454, dec: -34.7044, magnitude: 4.23, spectralType: 'B' },
        { ra: 247.6246, dec: -7.515, magnitude: 6.5, spectralType: 'A' },
        { ra: 247.845, dec: -26.5378, magnitude: 6.1, spectralType: 'K' },
        { ra: 247.1604, dec: 41.8817, magnitude: 5.04, spectralType: 'M' },  // 30 Her
        { ra: 247.7846, dec: -16.6128, magnitude: 4.28, spectralType: 'G' },  // 8Phi Oph
        { ra: 247.555, dec: 21.4897, magnitude: 2.77, spectralType: 'G' },  // 27Bet Her
        { ra: 247.7283, dec: 1.9839, magnitude: 3.82, spectralType: 'A' },  // 10Lam Oph
        { ra: 247.1808, dec: 51.4078, magnitude: 6.29, spectralType: 'G' },
        { ra: 248.9367, dec: -65.4953, magnitude: 5.52, spectralType: 'G' },  // The TrA
        { ra: 247.64, dec: 20.4792, magnitude: 5.25, spectralType: 'G' },
        { ra: 248.0342, dec: -21.4664, magnitude: 4.45, spectralType: 'A' },  // 9Ome Oph
        { ra: 247.8058, dec: 22.1953, magnitude: 5.76, spectralType: 'K' },
        { ra: 248.5208, dec: -44.0453, magnitude: 4.94, spectralType: 'B' },  // Mu Nor
        { ra: 247.525, dec: 48.9608, magnitude: 6.45, spectralType: 'A' },  // 34 Her
        { ra: 247.7617, dec: 35.225, magnitude: 6.25, spectralType: 'K' },
        { ra: 248.1488, dec: 5.5211, magnitude: 5.63, spectralType: 'B' },  // 28 Her
        { ra: 248.1513, dec: 11.4881, magnitude: 4.84, spectralType: 'K' },  // 29 Her
        { ra: 248.7829, dec: -45.2447, magnitude: 6.46, spectralType: 'K' },
        { ra: 246.9958, dec: 68.7681, magnitude: 5.0, spectralType: 'A' },  // 15 Dra
        { ra: 247.9471, dec: 45.5983, magnitude: 5.65, spectralType: 'A' },
        { ra: 250.7692, dec: -77.5175, magnitude: 4.24, spectralType: 'K' },  // Bet Aps
        { ra: 249.0938, dec: -42.8589, magnitude: 5.47, spectralType: 'O' },
        { ra: 248.9708, dec: -28.2161, magnitude: 2.82, spectralType: 'B' },  // 23Tau Sco
        { ra: 249.0938, dec: -35.2556, magnitude: 4.16, spectralType: 'K' },
        { ra: 249.7196, dec: -60.9903, magnitude: 6.18, spectralType: 'B' },
        { ra: 248.5258, dec: 42.4369, magnitude: 4.2, spectralType: 'B' },  // 35Sig Her
        { ra: 248.8596, dec: 17.0572, magnitude: 6.41, spectralType: 'A' },
        { ra: 248.1071, dec: 60.8233, magnitude: 5.94, spectralType: 'A' },
        { ra: 249.0896, dec: -2.3247, magnitude: 5.75, spectralType: 'K' },  // 12 Oph
        { ra: 250.3471, dec: -68.2961, magnitude: 5.91, spectralType: 'B' },  // Eta1TrA
        { ra: 246.4296, dec: 78.9639, magnitude: 5.56, spectralType: 'F' },
        { ra: 249.6092, dec: -43.3986, magnitude: 5.83, spectralType: 'B' },
        { ra: 249.2896, dec: -10.5672, magnitude: 2.56, spectralType: 'O' },  // 13Zet Oph
        { ra: 249.1792, dec: 15.4981, magnitude: 6.3, spectralType: 'B' },
        { ra: 250.2104, dec: -60.4461, magnitude: 6.18, spectralType: 'F' },
        { ra: 249.7717, dec: -37.2175, magnitude: 5.91, spectralType: 'B' },
        { ra: 249.5067, dec: -6.5381, magnitude: 6.09, spectralType: 'A' },
        { ra: 247.8671, dec: 72.6119, magnitude: 6.3, spectralType: 'K' },
        { ra: 249.45, dec: 13.6869, magnitude: 6.31, spectralType: 'F' },
        { ra: 250.8421, dec: -67.4325, magnitude: 6.03, spectralType: 'A' },
        { ra: 249.0467, dec: 46.6133, magnitude: 5.79, spectralType: 'G' },
        { ra: 249.0479, dec: 52.9003, magnitude: 5.53, spectralType: 'B' },  // 16 Dra
        { ra: 249.0571, dec: 52.9244, magnitude: 5.08, spectralType: 'B' },  // 17 Dra
        { ra: 249.0588, dec: 52.9242, magnitude: 6.53, spectralType: 'A' },  // 17 Dra
        { ra: 250.3346, dec: -48.7631, magnitude: 5.65, spectralType: 'O' },
        { ra: 250.4175, dec: -49.6517, magnitude: 5.65, spectralType: 'B' },
        { ra: 249.9129, dec: -9.5544, magnitude: 6.35, spectralType: 'F' },
        { ra: 250.1437, dec: -20.4086, magnitude: 6.26, spectralType: 'G' },
        { ra: 247.6617, dec: 77.4467, magnitude: 6.34, spectralType: 'K' },
        { ra: 250.4396, dec: -33.1464, magnitude: 5.87, spectralType: 'G' },
        { ra: 250.4008, dec: -24.4681, magnitude: 6.09, spectralType: 'F' },
        { ra: 250.1463, dec: 4.2072, magnitude: 6.93, spectralType: 'A' },  // 36 Her
        { ra: 250.1613, dec: 4.2197, magnitude: 5.77, spectralType: 'A' },  // 37 Her
        { ra: 250.3933, dec: -17.7422, magnitude: 4.96, spectralType: 'G' },
        { ra: 250.7642, dec: -46.0706, magnitude: 6.23, spectralType: 'F' },
        { ra: 249.2292, dec: 63.0728, magnitude: 6.16, spectralType: 'K' },
        { ra: 249.5017, dec: 56.0156, magnitude: 5.29, spectralType: 'K' },
        { ra: 249.6871, dec: 48.9283, magnitude: 4.9, spectralType: 'M' },  // 42 Her
        { ra: 250.2979, dec: -1.0006, magnitude: 6.24, spectralType: 'A' },
        { ra: 250.4738, dec: -19.9244, magnitude: 5.57, spectralType: 'F' },
        { ra: 250.2142, dec: 12.395, magnitude: 6.08, spectralType: 'A' },
        { ra: 251.6667, dec: -67.1097, magnitude: 5.13, spectralType: 'A' },
        { ra: 250.4271, dec: 1.1811, magnitude: 5.74, spectralType: 'F' },  // 14 Oph
        { ra: 250.9396, dec: -41.1189, magnitude: 6.2, spectralType: 'A' },
        { ra: 251.1658, dec: -53.1525, magnitude: 5.96, spectralType: 'G' },
        { ra: 250.2525, dec: 24.8586, magnitude: 6.06, spectralType: 'K' },
        { ra: 250.9746, dec: -41.1131, magnitude: 6.12, spectralType: 'B' },
        { ra: 250.9483, dec: -38.1567, magnitude: 6.05, spectralType: 'B' },
        { ra: 250.9112, dec: -32.1061, magnitude: 6.46, spectralType: 'B' },
        { ra: 250.3217, dec: 31.6031, magnitude: 2.81, spectralType: 'G' },  // 40Zet Her
        { ra: 250.4029, dec: 26.9169, magnitude: 5.92, spectralType: 'F' },  // 39 Her
        { ra: 251.1775, dec: -40.8397, magnitude: 5.71, spectralType: 'B' },
        { ra: 251.5883, dec: -58.5036, magnitude: 5.74, spectralType: 'B' },
        { ra: 251.0721, dec: -27.4561, magnitude: 6.58, spectralType: 'A' },
        { ra: 252.1662, dec: -69.0278, magnitude: 1.92, spectralType: 'K' },  // Alp TrA
        { ra: 251.2508, dec: -28.5097, magnitude: 6.02, spectralType: 'A' },
        { ra: 251.8313, dec: -58.3414, magnitude: 5.58, spectralType: 'B' },
        { ra: 250.7242, dec: 38.9222, magnitude: 3.53, spectralType: 'G' },  // 44Eta Her
        { ra: 251.6992, dec: -39.3772, magnitude: 5.48, spectralType: 'K' },
        { ra: 250.9654, dec: 34.0389, magnitude: 5.99, spectralType: 'F' },
        { ra: 250.2296, dec: 64.5892, magnitude: 4.83, spectralType: 'K' },  // 18 Dra
        { ra: 251.3738, dec: 1.0203, magnitude: 6.03, spectralType: 'B' },  // 16 Oph
        { ra: 251.7138, dec: -25.5286, magnitude: 6.71, spectralType: 'G' },  // 25 Sco
        { ra: 250.7433, dec: 55.6903, magnitude: 6.16, spectralType: 'A' },
        { ra: 251.3438, dec: 15.7453, magnitude: 5.56, spectralType: 'M' },
        { ra: 251.4579, dec: 8.5825, magnitude: 5.15, spectralType: 'K' },  // 43 Her
        { ra: 252.4463, dec: -59.0414, magnitude: 3.76, spectralType: 'K' },  // Eta Ara
        { ra: 251.2988, dec: 43.2172, magnitude: 6.05, spectralType: 'K' },
        { ra: 253.0725, dec: -67.6819, magnitude: 6.32, spectralType: 'K' },
        { ra: 251.7908, dec: 2.0644, magnitude: 6.1, spectralType: 'A' },  // 19 Oph
        { ra: 252.9746, dec: -65.3756, magnitude: 6.13, spectralType: 'B' },
        { ra: 251.9433, dec: 5.2467, magnitude: 5.24, spectralType: 'B' },  // 45 Her
        { ra: 252.1125, dec: -14.9094, magnitude: 6.03, spectralType: 'A' },
        { ra: 252.6496, dec: -50.0456, magnitude: 6.47, spectralType: 'A' },
        { ra: 251.3242, dec: 56.7819, magnitude: 4.85, spectralType: 'F' },
        { ra: 249.4704, dec: 78.9183, magnitude: 6.32, spectralType: 'G' },
        { ra: 252.0371, dec: 13.5906, magnitude: 6.35, spectralType: 'G' },
        { ra: 252.3658, dec: -15.6675, magnitude: 6.1, spectralType: 'A' },
        { ra: 252.5408, dec: -34.2933, magnitude: 2.29, spectralType: 'K' },  // 26Eps Sco
        { ra: 251.8325, dec: 42.2389, magnitude: 5.87, spectralType: 'M' },
        { ra: 252.4583, dec: -10.7831, magnitude: 4.65, spectralType: 'F' },  // 20 Oph
        { ra: 252.7492, dec: -37.5144, magnitude: 6.11, spectralType: 'B' },
        { ra: 252.8904, dec: -41.2306, magnitude: 5.22, spectralType: 'O' },
        { ra: 252.3942, dec: 13.2614, magnitude: 5.91, spectralType: 'A' },
        { ra: 252.9675, dec: -38.0475, magnitude: 3.08, spectralType: 'B' },  // Mu 1Sco
        { ra: 252.5929, dec: -2.6539, magnitude: 6.32, spectralType: 'F' },
        { ra: 253.0796, dec: -41.8544, magnitude: 6.49, spectralType: 'G' },
        { ra: 252.5808, dec: 7.2478, magnitude: 5.49, spectralType: 'A' },  // 47 Her
        { ra: 253.5021, dec: -57.9094, magnitude: 5.94, spectralType: 'M' },
        { ra: 253.0838, dec: -38.0175, magnitude: 3.57, spectralType: 'B' },  // Mu 2Sco
        { ra: 253.8529, dec: -63.2697, magnitude: 6.02, spectralType: 'A' },
        { ra: 252.3092, dec: 45.9833, magnitude: 4.82, spectralType: 'A' },  // 52 Her
        { ra: 252.8537, dec: 1.2161, magnitude: 5.51, spectralType: 'A' },  // 21 Oph
        { ra: 252.4187, dec: 43.4306, magnitude: 6.13, spectralType: 'K' },
        { ra: 253.4271, dec: -43.0508, magnitude: 5.96, spectralType: 'M' },
        { ra: 252.6625, dec: 29.8067, magnitude: 5.72, spectralType: 'M' },  // 50 Her
        { ra: 252.6796, dec: 32.5536, magnitude: 6.13, spectralType: 'K' },
        { ra: 253.5075, dec: -41.8064, magnitude: 5.45, spectralType: 'B' },
        { ra: 253.495, dec: -41.9947, magnitude: 6.32, spectralType: 'B' },
        { ra: 253.4988, dec: -42.3622, magnitude: 4.73, spectralType: 'B' },  // Zet1Sco
        { ra: 253.5492, dec: -41.8503, magnitude: 6.45, spectralType: 'O' },
        { ra: 252.6504, dec: 41.8967, magnitude: 6.29, spectralType: 'K' },
        { ra: 253.5817, dec: -41.82, magnitude: 6.59, spectralType: 'G' },
        { ra: 253.6121, dec: -42.4789, magnitude: 5.88, spectralType: 'F' },
        { ra: 250.775, dec: 77.5142, magnitude: 5.98, spectralType: 'F' },
        { ra: 253.0204, dec: 14.9742, magnitude: 6.52, spectralType: 'B' },  // 49 Her
        { ra: 253.355, dec: -20.4156, magnitude: 5.88, spectralType: 'G' },
        { ra: 252.9387, dec: 24.6564, magnitude: 5.04, spectralType: 'K' },  // 51 Her
        { ra: 253.6458, dec: -42.3614, magnitude: 3.62, spectralType: 'K' },  // Zet2Sco
        { ra: 253.7433, dec: -41.1511, magnitude: 5.77, spectralType: 'O' },
        { ra: 253.65, dec: -30.5872, magnitude: 6.35, spectralType: 'A' },
        { ra: 254.0371, dec: -50.675, magnitude: 6.33, spectralType: 'B' },
        { ra: 254.1196, dec: -52.2839, magnitude: 5.94, spectralType: 'B' },
        { ra: 254.8908, dec: -69.2683, magnitude: 5.79, spectralType: 'A' },
        { ra: 253.5442, dec: -1.6122, magnitude: 6.25, spectralType: 'F' },
        { ra: 253.6679, dec: -11.7925, magnitude: 6.57, spectralType: 'A' },
        { ra: 253.2421, dec: 31.7017, magnitude: 5.32, spectralType: 'F' },  // 53 Her
        { ra: 253.6487, dec: -6.1539, magnitude: 5.25, spectralType: 'K' },  // 23 Oph
        { ra: 253.5021, dec: 10.1653, magnitude: 4.38, spectralType: 'B' },  // 25Iot Oph
        { ra: 253.9908, dec: -33.5072, magnitude: 6.37, spectralType: 'K' },
        { ra: 254.15, dec: -40.8236, magnitude: 6.15, spectralType: 'B' },
        { ra: 254.0075, dec: -16.8061, magnitude: 6.37, spectralType: 'K' },
        { ra: 254.655, dec: -55.9903, magnitude: 3.13, spectralType: 'K' },  // Zet Ara
        { ra: 253.3233, dec: 47.4169, magnitude: 6.0, spectralType: 'K' },
        { ra: 253.73, dec: 20.9586, magnitude: 5.41, spectralType: 'G' },
        { ra: 254.2962, dec: -33.2594, magnitude: 5.48, spectralType: 'K' },  // 27 Sco
        { ra: 254.575, dec: -50.6411, magnitude: 5.55, spectralType: 'B' },
        { ra: 253.8167, dec: 13.6197, magnitude: 6.34, spectralType: 'F' },
        { ra: 254.2, dec: -23.15, magnitude: 5.58, spectralType: 'A' },  // 24 Oph
        { ra: 253.7588, dec: 25.7306, magnitude: 6.08, spectralType: 'G' },  // 56 Her
        { ra: 253.8425, dec: 18.4333, magnitude: 5.35, spectralType: 'K' },  // 54 Her
        { ra: 254.2667, dec: -19.54, magnitude: 6.27, spectralType: 'B' },
        { ra: 254.8963, dec: -53.1606, magnitude: 4.06, spectralType: 'K' },  // Eps1Ara
        { ra: 254.3587, dec: -10.9633, magnitude: 6.19, spectralType: 'G' },
        { ra: 255.0258, dec: -54.5969, magnitude: 5.65, spectralType: 'A' },
        { ra: 254.7183, dec: -37.6211, magnitude: 6.09, spectralType: 'A' },
        { ra: 254.4171, dec: 9.375, magnitude: 3.2, spectralType: 'K' },  // 27Kap Oph
        { ra: 255.1129, dec: -48.6478, magnitude: 6.0, spectralType: 'G' },
        { ra: 254.3833, dec: 13.8842, magnitude: 6.37, spectralType: 'K' },
        { ra: 254.6733, dec: -14.8697, magnitude: 6.59, spectralType: 'F' },
        { ra: 255.1346, dec: -45.4517, magnitude: 6.65, spectralType: 'K' },
        { ra: 255.4475, dec: -58.9583, magnitude: 6.11, spectralType: 'B' },
        { ra: 254.3792, dec: 25.3528, magnitude: 6.28, spectralType: 'G' },  // 57 Her
        { ra: 254.0267, dec: 50.0389, magnitude: 6.56, spectralType: 'M' },
        { ra: 254.4262, dec: 24.3814, magnitude: 6.32, spectralType: 'K' },
        { ra: 254.99, dec: -25.0919, magnitude: 5.86, spectralType: 'M' },
        { ra: 255.0396, dec: -24.9892, magnitude: 5.75, spectralType: 'F' },  // 26 Oph
        { ra: 255.1538, dec: -35.9342, magnitude: 5.97, spectralType: 'K' },
        { ra: 255.4421, dec: -51.1308, magnitude: 6.45, spectralType: 'A' },
        { ra: 254.4592, dec: 42.5125, magnitude: 6.34, spectralType: 'K' },
        { ra: 255.7867, dec: -53.2369, magnitude: 5.29, spectralType: 'F' },  // Eps2Ara
        { ra: 254.0071, dec: 65.1347, magnitude: 4.89, spectralType: 'F' },  // 19 Dra
        { ra: 255.4696, dec: -32.1436, magnitude: 5.03, spectralType: 'B' },
        { ra: 255.1225, dec: 6.5836, magnitude: 6.59, spectralType: 'A' },
        { ra: 255.265, dec: -4.2225, magnitude: 4.82, spectralType: 'K' },  // 30 Oph
        { ra: 254.105, dec: 65.0392, magnitude: 6.41, spectralType: 'F' },  // 20 Dra
        { ra: 256.1029, dec: -57.7122, magnitude: 5.73, spectralType: 'B' },
        { ra: 255.4633, dec: -18.8856, magnitude: 6.26, spectralType: 'K' },  // 29 Oph
        { ra: 251.4921, dec: 82.0372, magnitude: 4.23, spectralType: 'G' },  // 22Eps UMi
        { ra: 255.9238, dec: -47.16, magnitude: 6.06, spectralType: 'A' },
        { ra: 255.0725, dec: 30.9264, magnitude: 3.92, spectralType: 'A' },  // 58Eps Her
        { ra: 255.2421, dec: 22.6322, magnitude: 5.65, spectralType: 'K' },
        { ra: 255.3875, dec: 14.9494, magnitude: 6.31, spectralType: 'B' },
        { ra: 255.9617, dec: -38.1522, magnitude: 5.91, spectralType: 'F' },
        { ra: 255.29, dec: 27.1964, magnitude: 6.55, spectralType: 'F' },
        { ra: 255.4963, dec: 8.4506, magnitude: 6.33, spectralType: 'A' },
        { ra: 254.8396, dec: 56.6886, magnitude: 6.03, spectralType: 'K' },
        { ra: 256.2721, dec: -45.5017, magnitude: 6.28, spectralType: 'A' },
        { ra: 255.4017, dec: 33.5683, magnitude: 5.25, spectralType: 'A' },  // 59 Her
        { ra: 255.5779, dec: 25.5056, magnitude: 5.75, spectralType: 'G' },
        { ra: 256.2058, dec: -34.1228, magnitude: 4.87, spectralType: 'B' },
        { ra: 254.07, dec: 73.1278, magnitude: 6.3, spectralType: 'F' },
        { ra: 255.5717, dec: 31.8847, magnitude: 6.36, spectralType: 'K' },
        { ra: 255.7825, dec: 14.0919, magnitude: 4.98, spectralType: 'M' },
        { ra: 256.4525, dec: -44.105, magnitude: 6.19, spectralType: 'A' },
        { ra: 255.7933, dec: 14.5111, magnitude: 6.52, spectralType: 'G' },
        { ra: 256.1887, dec: -20.4947, magnitude: 6.3, spectralType: 'B' },
        { ra: 255.9138, dec: 13.6053, magnitude: 5.93, spectralType: 'A' },
        { ra: 255.9917, dec: 13.5675, magnitude: 6.08, spectralType: 'K' },
        { ra: 255.9696, dec: 19.6906, magnitude: 6.35, spectralType: 'K' },
        { ra: 256.5846, dec: -37.2275, magnitude: 5.98, spectralType: 'A' },
        { ra: 254.7608, dec: 69.1864, magnitude: 6.4, spectralType: 'K' },
        { ra: 255.8758, dec: 35.4142, magnitude: 6.69, spectralType: 'M' },  // 61 Her
        { ra: 256.6183, dec: -35.4511, magnitude: 6.13, spectralType: 'O' },
        { ra: 255.3196, dec: 60.6492, magnitude: 6.13, spectralType: 'K' },
        { ra: 256.3204, dec: 0.7025, magnitude: 6.01, spectralType: 'F' },
        { ra: 256.5492, dec: -21.5647, magnitude: 6.3, spectralType: 'A' },
        { ra: 255.9729, dec: 34.7903, magnitude: 6.04, spectralType: 'A' },
        { ra: 256.1721, dec: 19.5992, magnitude: 6.17, spectralType: 'B' },
        { ra: 256.3846, dec: -0.8919, magnitude: 5.64, spectralType: 'B' },
        { ra: 256.7217, dec: -26.5131, magnitude: 6.29, spectralType: 'A' },
        { ra: 256.3446, dec: 12.7408, magnitude: 4.91, spectralType: 'A' },  // 60 Her
        { ra: 257.5263, dec: -61.6756, magnitude: 6.39, spectralType: 'B' },
        { ra: 258.0825, dec: -70.7211, magnitude: 6.22, spectralType: 'K' },
        { ra: 256.5404, dec: 9.7333, magnitude: 6.37, spectralType: 'K' },
        { ra: 256.5546, dec: 10.4542, magnitude: 6.37, spectralType: 'G' },
        { ra: 255.5637, dec: 64.6006, magnitude: 6.1, spectralType: 'G' },
        { ra: 256.7204, dec: -1.6564, magnitude: 6.38, spectralType: 'A' },
        { ra: 256.2708, dec: 43.8122, magnitude: 6.43, spectralType: 'A' },
        { ra: 256.2075, dec: 48.8042, magnitude: 6.09, spectralType: 'K' },
        { ra: 256.5754, dec: 22.0842, magnitude: 5.56, spectralType: 'K' },
        { ra: 257.0621, dec: -17.6092, magnitude: 5.99, spectralType: 'K' },
        { ra: 257.1979, dec: -30.4036, magnitude: 5.97, spectralType: 'A' },
        { ra: 257.0567, dec: -1.0794, magnitude: 6.06, spectralType: 'A' },
        { ra: 258.3229, dec: -67.1967, magnitude: 5.89, spectralType: 'K' },
        { ra: 256.3325, dec: 54.4703, magnitude: 5.83, spectralType: 'F' },  // 21Mu Dra
        { ra: 256.3321, dec: 54.4703, magnitude: 5.8, spectralType: 'F' },  // 21Mu Dra
        { ra: 257.6762, dec: -44.5575, magnitude: 5.08, spectralType: 'G' },
        { ra: 257.2271, dec: -3.8828, magnitude: 6.36, spectralType: 'G' },
        { ra: 259.1483, dec: -74.5331, magnitude: 6.25, spectralType: 'A' },
        { ra: 257.9121, dec: -48.8742, magnitude: 5.84, spectralType: 'M' },
        { ra: 257.45, dec: -10.5233, magnitude: 5.56, spectralType: 'F' },
        { ra: 256.9446, dec: 40.5161, magnitude: 6.34, spectralType: 'A' },
        { ra: 257.0083, dec: 35.9353, magnitude: 5.39, spectralType: 'A' },
        { ra: 257.5946, dec: -15.7247, magnitude: 2.43, spectralType: 'A' },  // 35Eta Oph
        { ra: 255.4175, dec: 75.2972, magnitude: 6.21, spectralType: 'F' },
        { ra: 258.0383, dec: -43.2392, magnitude: 3.33, spectralType: 'F' },  // Eta Sco
        { ra: 258.0675, dec: -39.5069, magnitude: 5.67, spectralType: 'A' },
        { ra: 258.0687, dec: -38.8222, magnitude: 6.3, spectralType: 'K' },
        { ra: 257.0713, dec: 50.8422, magnitude: 6.46, spectralType: 'A' },
        { ra: 258.555, dec: -56.8883, magnitude: 6.09, spectralType: 'M' },
        { ra: 257.6908, dec: 12.4672, magnitude: 6.57, spectralType: 'A' },
        { ra: 258.0567, dec: -25.2547, magnitude: 6.54, spectralType: 'A' },
        { ra: 258.1042, dec: -27.7619, magnitude: 6.14, spectralType: 'B' },
        { ra: 257.3888, dec: 40.7772, magnitude: 5.08, spectralType: 'K' },
        { ra: 258.2446, dec: -32.4386, magnitude: 6.01, spectralType: 'B' },
        { ra: 257.9383, dec: 7.8947, magnitude: 6.33, spectralType: 'K' },
        { ra: 257.7633, dec: 24.2378, magnitude: 6.19, spectralType: 'A' },  // 63 Her
        { ra: 258.6154, dec: -39.7669, magnitude: 6.6, spectralType: 'G' },
        { ra: 258.1158, dec: 10.5853, magnitude: 5.33, spectralType: 'M' },  // 37 Oph
        { ra: 258.2267, dec: 0.3519, magnitude: 6.65, spectralType: 'F' },
        { ra: 257.6275, dec: 52.4089, magnitude: 6.29, spectralType: 'B' },
        { ra: 257.1967, dec: 65.7147, magnitude: 3.17, spectralType: 'B' },  // 22Zet Dra
        { ra: 258.8304, dec: -33.5483, magnitude: 5.53, spectralType: 'O' },
        { ra: 258.8996, dec: -38.5939, magnitude: 5.96, spectralType: 'F' },
        { ra: 257.9175, dec: 49.7467, magnitude: 6.04, spectralType: 'A' },
        { ra: 260.0533, dec: -70.0456, magnitude: 6.53, spectralType: 'G' },
        { ra: 258.8375, dec: -26.6028, magnitude: 5.11, spectralType: 'K' },  // 36 Oph
        { ra: 258.8367, dec: -26.6014, magnitude: 5.07, spectralType: 'K' },  // 36 Oph
        { ra: 258.9646, dec: -30.2106, magnitude: 6.21, spectralType: 'B' },
        { ra: 258.8346, dec: -14.5839, magnitude: 5.99, spectralType: 'K' },
        { ra: 259.0896, dec: -35.7494, magnitude: 6.12, spectralType: 'G' },
        { ra: 258.6621, dec: 14.3903, magnitude: 3.48, spectralType: 'M' },  // 64Alp1Her
        { ra: 258.6633, dec: 14.39, magnitude: 5.39, spectralType: 'G' },  // 64Alp2Her
        { ra: 259.8017, dec: -59.6944, magnitude: 5.91, spectralType: 'K' },
        { ra: 259.2654, dec: -32.6628, magnitude: 5.55, spectralType: 'F' },
        { ra: 258.7579, dec: 24.8392, magnitude: 3.14, spectralType: 'A' },  // 65Del Her
        { ra: 260.5246, dec: -70.1233, magnitude: 5.41, spectralType: 'B' },  // Iot Aps
        { ra: 259.0592, dec: 2.1861, magnitude: 6.17, spectralType: 'A' },
        { ra: 259.1783, dec: -6.245, magnitude: 6.09, spectralType: 'K' },
        { ra: 259.1321, dec: 1.2106, magnitude: 5.88, spectralType: 'B' },
        { ra: 259.1529, dec: -0.4453, magnitude: 4.73, spectralType: 'K' },  // 41 Oph
        { ra: 259.7633, dec: -46.6339, magnitude: 5.48, spectralType: 'G' },
        { ra: 260.4975, dec: -67.7706, magnitude: 4.78, spectralType: 'K' },  // Zet Aps
        { ra: 258.7617, dec: 36.8092, magnitude: 3.16, spectralType: 'K' },  // 67Pi Her
        { ra: 258.9233, dec: 23.7428, magnitude: 5.96, spectralType: 'K' },
        { ra: 259.7, dec: -44.1297, magnitude: 5.76, spectralType: 'B' },
        { ra: 258.1358, dec: 62.8744, magnitude: 5.56, spectralType: 'F' },
        { ra: 259.585, dec: -32.5533, magnitude: 6.36, spectralType: 'B' },
        { ra: 259.8762, dec: -50.0633, magnitude: 6.27, spectralType: 'F' },
        { ra: 259.5029, dec: -24.2869, magnitude: 5.2, spectralType: 'K' },  // 39Omi Oph
        { ra: 259.5021, dec: -24.2842, magnitude: 6.8, spectralType: 'F' },  // 39Omi Oph
        { ra: 259.7383, dec: -34.9897, magnitude: 5.91, spectralType: 'K' },
        { ra: 259.8521, dec: -44.2231, magnitude: 6.65, spectralType: 'B' },
        { ra: 259.58, dec: -16.3119, magnitude: 6.43, spectralType: 'M' },
        { ra: 262.8637, dec: -80.8592, magnitude: 5.88, spectralType: 'M' },
        { ra: 259.3996, dec: 23.0908, magnitude: 6.45, spectralType: 'K' },
        { ra: 259.3313, dec: 33.1, magnitude: 4.82, spectralType: 'B' },  // 68 Her
        { ra: 259.5208, dec: 17.3181, magnitude: 6.0, spectralType: 'A' },
        { ra: 259.6542, dec: 10.8644, magnitude: 5.03, spectralType: 'K' },
        { ra: 259.72, dec: 6.0853, magnitude: 6.51, spectralType: 'F' },
        { ra: 259.9721, dec: -17.7564, magnitude: 6.02, spectralType: 'A' },
        { ra: 259.4179, dec: 37.2917, magnitude: 4.65, spectralType: 'A' },  // 69 Her
        { ra: 259.2025, dec: 49.6911, magnitude: 7.48, spectralType: 'K' },
        { ra: 260.7292, dec: -58.0103, magnitude: 5.88, spectralType: 'G' },
        { ra: 259.9979, dec: -5.9172, magnitude: 6.32, spectralType: 'G' },
        { ra: 261.0046, dec: -62.8642, magnitude: 5.7, spectralType: 'B' },
        { ra: 260.1425, dec: -19.3328, magnitude: 6.52, spectralType: 'G' },
        { ra: 260.7788, dec: -56.5253, magnitude: 5.8, spectralType: 'G' },
        { ra: 259.7021, dec: 28.8231, magnitude: 5.65, spectralType: 'K' },
        { ra: 259.5971, dec: 38.8114, magnitude: 5.94, spectralType: 'G' },
        { ra: 260.2508, dec: -21.1128, magnitude: 4.39, spectralType: 'F' },  // 40Xi Oph
        { ra: 260.2071, dec: -12.8469, magnitude: 4.33, spectralType: 'A' },  // 53Nu Ser
        { ra: 261.0779, dec: -60.6736, magnitude: 5.77, spectralType: 'B' },
        { ra: 259.1225, dec: 60.6706, magnitude: 6.32, spectralType: 'K' },
        { ra: 260.2196, dec: -10.6961, magnitude: 6.46, spectralType: 'F' },
        { ra: 260.6642, dec: -37.805, magnitude: 6.41, spectralType: 'B' },
        { ra: 260.8171, dec: -47.4683, magnitude: 5.25, spectralType: 'B' },  // Iot Ara
        { ra: 260.0788, dec: 18.0572, magnitude: 5.0, spectralType: 'M' },
        { ra: 260.5025, dec: -24.9994, magnitude: 3.27, spectralType: 'B' },  // 42The Oph
        { ra: 260.6583, dec: -35.91, magnitude: 6.47, spectralType: 'F' },
        { ra: 260.0408, dec: 25.5375, magnitude: 5.38, spectralType: 'A' },
        { ra: 260.7288, dec: -37.2206, magnitude: 5.93, spectralType: 'K' },
        { ra: 260.2258, dec: 24.4994, magnitude: 5.12, spectralType: 'A' },  // 70 Her
        { ra: 260.165, dec: 32.4678, magnitude: 5.39, spectralType: 'G' },  // 72 Her
        { ra: 260.84, dec: -28.1431, magnitude: 5.35, spectralType: 'K' },  // 43 Oph
        { ra: 261.0542, dec: -44.1625, magnitude: 5.12, spectralType: 'B' },
        { ra: 261.325, dec: -55.53, magnitude: 2.85, spectralType: 'K' },  // Bet Ara
        { ra: 261.3483, dec: -56.3775, magnitude: 3.34, spectralType: 'B' },  // Gam Ara
        { ra: 260.3892, dec: 16.7308, magnitude: 6.35, spectralType: 'M' },
        { ra: 260.0879, dec: 46.2408, magnitude: 5.59, spectralType: 'M' },  // 74 Her
        { ra: 260.7138, dec: -2.3883, magnitude: 6.29, spectralType: 'G' },
        { ra: 260.38, dec: 28.7581, magnitude: 6.35, spectralType: 'G' },
        { ra: 260.14, dec: 48.1883, magnitude: 6.43, spectralType: 'F' },
        { ra: 261.5, dec: -50.6336, magnitude: 5.23, spectralType: 'G' },  // Kap Ara
        { ra: 260.4317, dec: 39.9744, magnitude: 5.51, spectralType: 'F' },
        { ra: 261.2613, dec: -34.6964, magnitude: 6.16, spectralType: 'A' },
        { ra: 262.0321, dec: -63.0364, magnitude: 6.24, spectralType: 'B' },
        { ra: 261.175, dec: -21.4417, magnitude: 5.85, spectralType: 'G' },
        { ra: 261.1546, dec: -18.4458, magnitude: 6.21, spectralType: 'B' },
        { ra: 261.2758, dec: -24.2436, magnitude: 6.19, spectralType: 'K' },
        { ra: 261.7346, dec: -51.9492, magnitude: 6.19, spectralType: 'B' },
        { ra: 260.99, dec: 8.8528, magnitude: 5.77, spectralType: 'K' },
        { ra: 261.7146, dec: -45.8436, magnitude: 5.29, spectralType: 'B' },
        { ra: 261.8017, dec: -50.6303, magnitude: 5.92, spectralType: 'B' },
        { ra: 260.4392, dec: 53.4206, magnitude: 5.67, spectralType: 'K' },
        { ra: 261.0275, dec: 22.9603, magnitude: 5.74, spectralType: 'F' },  // 73 Her
        { ra: 261.1312, dec: 16.3011, magnitude: 5.71, spectralType: 'A' },
        { ra: 261.1408, dec: 15.6061, magnitude: 6.35, spectralType: 'B' },
        { ra: 261.99, dec: -52.2972, magnitude: 5.75, spectralType: 'K' },
        { ra: 260.9196, dec: 37.1467, magnitude: 5.47, spectralType: 'A' },  // 75Rho Her
        { ra: 260.9208, dec: 37.1458, magnitude: 4.52, spectralType: 'B' },  // 75Rho Her
        { ra: 261.5925, dec: -24.1753, magnitude: 4.17, spectralType: 'A' },  // 44 Oph
        { ra: 262.1612, dec: -55.1697, magnitude: 5.94, spectralType: 'G' },
        { ra: 261.0092, dec: 38.5828, magnitude: 6.49, spectralType: 'F' },
        { ra: 261.4913, dec: -1.6517, magnitude: 6.44, spectralType: 'F' },
        { ra: 261.73, dec: -25.9433, magnitude: 6.44, spectralType: 'A' },
        { ra: 261.1129, dec: 36.9519, magnitude: 6.28, spectralType: 'G' },
        { ra: 261.8388, dec: -29.8669, magnitude: 4.29, spectralType: 'F' },  // 45 Oph
        { ra: 261.6579, dec: -5.0867, magnitude: 4.54, spectralType: 'F' },
        { ra: 261.9062, dec: -29.7244, magnitude: 6.0, spectralType: 'B' },
        { ra: 261.4767, dec: 16.9175, magnitude: 5.98, spectralType: 'M' },
        { ra: 261.7588, dec: -12.5125, magnitude: 6.21, spectralType: 'F' },
        { ra: 261.5792, dec: 7.5956, magnitude: 6.06, spectralType: 'B' },
        { ra: 261.6288, dec: 4.1403, magnitude: 4.34, spectralType: 'K' },  // 49Sig Oph
        { ra: 261.5038, dec: 26.8789, magnitude: 6.41, spectralType: 'A' },
        { ra: 262.7746, dec: -60.6839, magnitude: 3.62, spectralType: 'B' },  // Del Ara
        { ra: 262.2337, dec: -36.7783, magnitude: 6.02, spectralType: 'K' },
        { ra: 261.7046, dec: 20.0808, magnitude: 5.54, spectralType: 'B' },
        { ra: 262.3571, dec: -38.5167, magnitude: 6.39, spectralType: 'A' },
        { ra: 262.0096, dec: -8.2083, magnitude: 6.37, spectralType: 'F' },
        { ra: 262.8458, dec: -56.9206, magnitude: 5.95, spectralType: 'B' },
        { ra: 261.6925, dec: 34.6958, magnitude: 5.94, spectralType: 'A' },
        { ra: 262.2071, dec: 0.3306, magnitude: 5.44, spectralType: 'A' },
        { ra: 262.6908, dec: -37.2958, magnitude: 2.69, spectralType: 'B' },  // 34Ups Sco
        { ra: 261.6842, dec: 48.26, magnitude: 5.85, spectralType: 'A' },  // 77 Her
        { ra: 262.9604, dec: -49.8761, magnitude: 2.95, spectralType: 'B' },  // Alp Ara
        { ra: 261.4221, dec: 60.0483, magnitude: 5.65, spectralType: 'A' },
        { ra: 262.4475, dec: -5.9197, magnitude: 6.37, spectralType: 'K' },
        { ra: 262.9546, dec: -46.0364, magnitude: 6.03, spectralType: 'F' },
        { ra: 261.5204, dec: 58.6519, magnitude: 6.51, spectralType: 'A' },
        { ra: 262.5992, dec: -1.0625, magnitude: 5.31, spectralType: 'G' },
        { ra: 262.9475, dec: -33.7028, magnitude: 6.44, spectralType: 'K' },
        { ra: 261.2508, dec: 67.3064, magnitude: 6.43, spectralType: 'K' },
        { ra: 262.8542, dec: -23.9628, magnitude: 4.81, spectralType: 'B' },  // 51 Oph
        { ra: 262.935, dec: -26.2697, magnitude: 6.05, spectralType: 'B' },
        { ra: 262.5933, dec: 11.925, magnitude: 6.39, spectralType: 'A' },
        { ra: 263.1021, dec: -34.2797, magnitude: 6.17, spectralType: 'F' },
        { ra: 263.2808, dec: -41.1736, magnitude: 5.84, spectralType: 'B' },
        { ra: 262.8388, dec: 2.7244, magnitude: 5.59, spectralType: 'G' },
        { ra: 263.8954, dec: -59.8461, magnitude: 6.28, spectralType: 'B' },
        { ra: 262.6846, dec: 26.1106, magnitude: 4.41, spectralType: 'K' },  // 76Lam Her
        { ra: 263.4021, dec: -37.1039, magnitude: 1.63, spectralType: 'B' },  // 35Lam Sco
        { ra: 262.7308, dec: 31.1583, magnitude: 5.61, spectralType: 'G' },
        { ra: 259.9042, dec: 80.1364, magnitude: 5.72, spectralType: 'K' },
        { ra: 263.8333, dec: -53.3528, magnitude: 6.1, spectralType: 'B' },
        { ra: 262.6679, dec: 38.8822, magnitude: 6.43, spectralType: 'F' },
        { ra: 263.0625, dec: 11.9303, magnitude: 6.42, spectralType: 'B' },
        { ra: 262.9567, dec: 28.4075, magnitude: 5.62, spectralType: 'A' },  // 78 Her
        { ra: 263.3746, dec: -5.7447, magnitude: 5.62, spectralType: 'A' },
        { ra: 263.6771, dec: -32.5817, magnitude: 5.7, spectralType: 'O' },
        { ra: 262.6083, dec: 52.3014, magnitude: 2.79, spectralType: 'G' },  // 23Bet Dra
        { ra: 263.915, dec: -46.5056, magnitude: 4.59, spectralType: 'A' },  // 1Sig Ara
        { ra: 263.0046, dec: 34.2708, magnitude: 6.56, spectralType: 'G' },
        { ra: 263.9292, dec: -37.44, magnitude: 6.48, spectralType: 'A' },
        { ra: 262.6825, dec: 57.8764, magnitude: 6.4, spectralType: 'K' },
        { ra: 263.345, dec: 19.2567, magnitude: 5.64, spectralType: 'F' },
        { ra: 263.4142, dec: 16.3175, magnitude: 5.69, spectralType: 'K' },
        { ra: 263.4283, dec: 14.8417, magnitude: 6.48, spectralType: 'M' },
        { ra: 263.6933, dec: -11.2419, magnitude: 5.55, spectralType: 'B' },
        { ra: 263.8271, dec: -22.0439, magnitude: 6.57, spectralType: 'B' },  // 52 Oph
        { ra: 264.1367, dec: -38.6353, magnitude: 4.29, spectralType: 'K' },
        { ra: 264.3633, dec: -50.06, magnitude: 5.93, spectralType: 'K' },
        { ra: 263.6529, dec: 9.5867, magnitude: 5.81, spectralType: 'A' },  // 53 Oph
        { ra: 264.5233, dec: -54.5003, magnitude: 5.25, spectralType: 'A' },  // Pi Ara
        { ra: 263.2804, dec: 41.2436, magnitude: 5.74, spectralType: 'K' },
        { ra: 263.6133, dec: 16.5039, magnitude: 6.4, spectralType: 'A' },
        { ra: 270.3921, dec: -85.2147, magnitude: 6.45, spectralType: 'F' },
        { ra: 264.33, dec: -42.9978, magnitude: 1.87, spectralType: 'F' },  // The Sco
        { ra: 263.0442, dec: 55.1842, magnitude: 4.88, spectralType: 'A' },  // 24Nu 1Dra
        { ra: 263.0667, dec: 55.1731, magnitude: 4.87, spectralType: 'A' },  // 25Nu 2Dra
        { ra: 263.7337, dec: 12.56, magnitude: 2.08, spectralType: 'A' },  // 55Alp Oph
        { ra: 264.3617, dec: -38.0656, magnitude: 6.26, spectralType: 'G' },
        { ra: 264.5354, dec: -42.8806, magnitude: 6.1, spectralType: 'B' },
        { ra: 263.9983, dec: 20.9961, magnitude: 6.1, spectralType: 'A' },
        { ra: 263.3821, dec: 57.5589, magnitude: 6.17, spectralType: 'G' },
        { ra: 264.3967, dec: -15.3986, magnitude: 3.54, spectralType: 'F' },  // 55Xi Ser
        { ra: 264.4008, dec: -15.5711, magnitude: 5.94, spectralType: 'F' },
        { ra: 263.9267, dec: 37.3017, magnitude: 6.1, spectralType: 'G' },
        { ra: 264.0329, dec: 28.1847, magnitude: 6.38, spectralType: 'K' },
        { ra: 266.0821, dec: -72.2208, magnitude: 6.49, spectralType: 'F' },
        { ra: 262.9912, dec: 68.135, magnitude: 5.05, spectralType: 'K' },  // 27 Dra
        { ra: 264.4613, dec: -8.1189, magnitude: 4.62, spectralType: 'B' },  // 57Mu Oph
        { ra: 264.5396, dec: -10.9264, magnitude: 5.75, spectralType: 'K' },
        { ra: 265.0983, dec: -49.4156, magnitude: 4.77, spectralType: 'F' },  // Lam Ara
        { ra: 264.1529, dec: 30.7853, magnitude: 6.02, spectralType: 'A' },
        { ra: 264.3796, dec: 24.31, magnitude: 5.77, spectralType: 'A' },  // 79 Her
        { ra: 265.3179, dec: -46.9219, magnitude: 5.79, spectralType: 'A' },
        { ra: 263.7479, dec: 61.875, magnitude: 5.23, spectralType: 'G' },  // 26 Dra
        { ra: 264.1567, dec: 48.5856, magnitude: 5.37, spectralType: 'K' },  // 82 Her
        { ra: 264.7854, dec: 2.0281, magnitude: 6.26, spectralType: 'K' },
        { ra: 265.5163, dec: -50.5106, magnitude: 6.24, spectralType: 'M' },
        { ra: 264.7408, dec: 13.3292, magnitude: 6.12, spectralType: 'F' },
        { ra: 265.0492, dec: -2.1525, magnitude: 6.19, spectralType: 'K' },
        { ra: 264.7071, dec: 32.7394, magnitude: 6.37, spectralType: 'G' },
        { ra: 265.6221, dec: -39.03, magnitude: 2.41, spectralType: 'B' },  // Kap Sco
        { ra: 265.3537, dec: -12.8753, magnitude: 4.26, spectralType: 'A' },  // 56Omi Ser
        { ra: 266.4333, dec: -64.7239, magnitude: 3.62, spectralType: 'K' },  // Eta Pav
        { ra: 265.7125, dec: -36.9458, magnitude: 5.54, spectralType: 'K' },
        { ra: 264.9896, dec: 31.2025, magnitude: 6.03, spectralType: 'M' },
        { ra: 266.0362, dec: -51.8342, magnitude: 5.15, spectralType: 'G' },  // Mu Ara
        { ra: 266.2325, dec: -57.5453, magnitude: 6.01, spectralType: 'G' },
        { ra: 265.7787, dec: -33.0511, magnitude: 6.4, spectralType: 'M' },
        { ra: 264.8662, dec: 46.0064, magnitude: 3.8, spectralType: 'B' },  // 85Iot Her
        { ra: 265.2958, dec: 15.1781, magnitude: 6.34, spectralType: 'A' },
        { ra: 265.3846, dec: 6.3128, magnitude: 5.95, spectralType: 'G' },
        { ra: 265.1717, dec: 31.2875, magnitude: 6.28, spectralType: 'K' },
        { ra: 265.2729, dec: 24.5133, magnitude: 6.36, spectralType: 'K' },
        { ra: 265.8242, dec: -27.8842, magnitude: 6.36, spectralType: 'A' },
        { ra: 265.4946, dec: 15.9519, magnitude: 5.52, spectralType: 'F' },
        { ra: 265.8575, dec: -21.6833, magnitude: 4.87, spectralType: 'F' },  // 58 Oph
        { ra: 264.2379, dec: 68.7581, magnitude: 4.8, spectralType: 'F' },  // 28Ome Dra
        { ra: 266.175, dec: -42.7289, magnitude: 5.87, spectralType: 'A' },
        { ra: 264.1654, dec: 69.5708, magnitude: 6.42, spectralType: 'F' },
        { ra: 265.1567, dec: 43.4708, magnitude: 6.59, spectralType: 'K' },
        { ra: 265.9525, dec: -13.5086, magnitude: 6.39, spectralType: 'F' },
        { ra: 265.9458, dec: -7.0794, magnitude: 6.3, spectralType: 'B' },
        { ra: 265.6183, dec: 24.5642, magnitude: 5.52, spectralType: 'K' },  // 83 Her
        { ra: 265.8683, dec: 4.5672, magnitude: 2.77, spectralType: 'K' },  // 60Bet Oph
        { ra: 265.8417, dec: 14.295, magnitude: 6.24, spectralType: 'F' },
        { ra: 265.1508, dec: 57.3103, magnitude: 6.77, spectralType: 'K' },
        { ra: 264.2867, dec: 72.4558, magnitude: 5.86, spectralType: 'G' },
        { ra: 265.3408, dec: 51.8181, magnitude: 5.99, spectralType: 'K' },
        { ra: 265.84, dec: 24.3278, magnitude: 5.71, spectralType: 'G' },  // 84 Her
        { ra: 266.1417, dec: 2.5794, magnitude: 6.17, spectralType: 'A' },  // 61 Oph
        { ra: 266.1475, dec: 2.5789, magnitude: 6.56, spectralType: 'A' },
        { ra: 266.0721, dec: 14.4103, magnitude: 6.19, spectralType: 'A' },
        { ra: 265.7733, dec: 44.0844, magnitude: 6.34, spectralType: 'K' },
        { ra: 266.7804, dec: -38.1117, magnitude: 6.43, spectralType: 'B' },
        { ra: 267.1587, dec: -55.4017, magnitude: 6.11, spectralType: 'A' },
        { ra: 266.8963, dec: -40.1269, magnitude: 3.03, spectralType: 'F' },  // Iot1Sco
        { ra: 266.89, dec: -27.8308, magnitude: 4.54, spectralType: 'F' },  // 3 Sgr
        { ra: 266.94, dec: -22.4781, magnitude: 6.18, spectralType: 'G' },
        { ra: 265.9971, dec: 53.8017, magnitude: 5.75, spectralType: 'A' },
        { ra: 266.4179, dec: 31.5047, magnitude: 6.23, spectralType: 'A' },
        { ra: 266.9033, dec: -14.7258, magnitude: 5.94, spectralType: 'B' },
        { ra: 267.1158, dec: -26.975, magnitude: 6.35, spectralType: 'B' },
        { ra: 267.6175, dec: -53.6122, magnitude: 5.92, spectralType: 'B' },
        { ra: 266.6146, dec: 27.7206, magnitude: 3.42, spectralType: 'G' },  // 86Mu Her
        { ra: 267.8979, dec: -60.1644, magnitude: 5.78, spectralType: 'K' },
        { ra: 266.4737, dec: 38.8814, magnitude: 6.52, spectralType: 'K' },
        { ra: 266.4937, dec: 39.3225, magnitude: 6.68, spectralType: 'K' },
        { ra: 266.7833, dec: 17.6972, magnitude: 5.72, spectralType: 'A' },
        { ra: 267.2937, dec: -31.7033, magnitude: 4.83, spectralType: 'B' },
        { ra: 266.9733, dec: 2.7072, magnitude: 3.75, spectralType: 'A' },  // 62Gam Oph
        { ra: 267.4646, dec: -37.0433, magnitude: 3.21, spectralType: 'K' },
        { ra: 267.5467, dec: -40.0906, magnitude: 4.81, spectralType: 'A' },  // Iot2Sco
        { ra: 267.7958, dec: -53.1306, magnitude: 6.09, spectralType: 'B' },
        { ra: 267.0842, dec: 3.8042, magnitude: 6.22, spectralType: 'B' },
        { ra: 268.3267, dec: -65.4892, magnitude: 6.49, spectralType: 'K' },
        { ra: 269.4242, dec: -76.1775, magnitude: 6.07, spectralType: 'K' },
        { ra: 265.4846, dec: 72.1489, magnitude: 4.58, spectralType: 'F' },  // 31Psi1Dra
        { ra: 265.4917, dec: 72.1569, magnitude: 5.79, spectralType: 'G' },  // 31Psi1Dra
        { ra: 267.1033, dec: 20.5656, magnitude: 5.69, spectralType: 'G' },
        { ra: 267.3288, dec: 1.9611, magnitude: 6.47, spectralType: 'K' },
        { ra: 267.9354, dec: -45.6006, magnitude: 6.11, spectralType: 'G' },
        { ra: 266.7838, dec: 47.6122, magnitude: 6.43, spectralType: 'A' },
        { ra: 267.1996, dec: 19.2553, magnitude: 6.12, spectralType: 'A' },
        { ra: 267.8867, dec: -40.7725, magnitude: 5.96, spectralType: 'M' },
        { ra: 267.205, dec: 25.6228, magnitude: 5.12, spectralType: 'K' },  // 87 Her
        { ra: 267.8021, dec: -30.5572, magnitude: 6.66, spectralType: 'A' },
        { ra: 271.3612, dec: -81.4864, magnitude: 6.35, spectralType: 'K' },
        { ra: 268.0567, dec: -34.7992, magnitude: 5.9, spectralType: 'B' },
        { ra: 268.0821, dec: -34.4167, magnitude: 5.84, spectralType: 'G' },
        { ra: 268.2196, dec: -41.9967, magnitude: 6.2, spectralType: 'F' },
        { ra: 267.6812, dec: 11.9467, magnitude: 6.17, spectralType: 'K' },
        { ra: 268.205, dec: -34.1142, magnitude: 6.06, spectralType: 'K' },
        { ra: 268.2329, dec: -35.0186, magnitude: 6.45, spectralType: 'B' },
        { ra: 268.2413, dec: -35.6242, magnitude: 6.03, spectralType: 'F' },
        { ra: 267.5954, dec: 29.3222, magnitude: 5.5, spectralType: 'K' },
        { ra: 267.7017, dec: 22.3164, magnitude: 5.98, spectralType: 'A' },
        { ra: 267.2679, dec: 50.7811, magnitude: 5.02, spectralType: 'A' },  // 30 Dra
        { ra: 268.3317, dec: -34.7306, magnitude: 6.17, spectralType: 'B' },
        { ra: 268.3471, dec: -34.8953, magnitude: 5.6, spectralType: 'K' },
        { ra: 267.9979, dec: -1.2367, magnitude: 6.35, spectralType: 'K' },
        { ra: 268.4396, dec: -34.7858, magnitude: 6.38, spectralType: 'B' },
        { ra: 268.1617, dec: -6.1436, magnitude: 6.21, spectralType: 'F' },
        { ra: 268.4787, dec: -34.7525, magnitude: 5.96, spectralType: 'B' },
        { ra: 268.4921, dec: -34.8317, magnitude: 6.42, spectralType: 'A' },
        { ra: 267.5137, dec: 48.3942, magnitude: 6.68, spectralType: 'B' },  // 88 Her
        { ra: 267.9938, dec: 15.3258, magnitude: 6.46, spectralType: 'K' },
        { ra: 268.265, dec: -10.8997, magnitude: 6.18, spectralType: 'K' },
        { ra: 268.1475, dec: 1.305, magnitude: 5.95, spectralType: 'K' },
        { ra: 268.6133, dec: -34.4664, magnitude: 5.96, spectralType: 'B' },
        { ra: 267.8083, dec: 40.0725, magnitude: 6.46, spectralType: 'G' },
        { ra: 268.3092, dec: 6.1014, magnitude: 5.77, spectralType: 'F' },
        { ra: 268.7829, dec: -36.4758, magnitude: 6.06, spectralType: 'B' },
        { ra: 268.725, dec: -24.8872, magnitude: 6.2, spectralType: 'O' },
        { ra: 268.0196, dec: 39.9822, magnitude: 6.04, spectralType: 'K' },
        { ra: 268.0042, dec: 46.6433, magnitude: 6.38, spectralType: 'K' },
        { ra: 269.1975, dec: -44.3422, magnitude: 4.86, spectralType: 'K' },
        { ra: 268.5592, dec: 11.1306, magnitude: 6.38, spectralType: 'F' },
        { ra: 268.3254, dec: 40.0081, magnitude: 5.16, spectralType: 'K' },  // 90 Her
        { ra: 269.2325, dec: -40.3056, magnitude: 6.43, spectralType: 'K' },
        { ra: 268.9792, dec: -18.8022, magnitude: 6.52, spectralType: 'A' },
        { ra: 269.1746, dec: -28.0653, magnitude: 5.8, spectralType: 'A' },
        { ra: 269.0792, dec: -15.8125, magnitude: 5.89, spectralType: 'A' },
        { ra: 269.4487, dec: -41.7161, magnitude: 4.88, spectralType: 'M' },
        { ra: 269.4908, dec: -39.1369, magnitude: 6.29, spectralType: 'A' },
        { ra: 269.0767, dec: 0.6703, magnitude: 5.82, spectralType: 'B' },
        { ra: 268.855, dec: 26.05, magnitude: 5.46, spectralType: 'F' },  // 89 Her
        { ra: 269.1988, dec: -4.0819, magnitude: 5.47, spectralType: 'G' },
        { ra: 268.9617, dec: 22.4642, magnitude: 5.58, spectralType: 'K' },
        { ra: 268.3821, dec: 56.8728, magnitude: 3.75, spectralType: 'K' },  // 32Xi Dra
        { ra: 269.2679, dec: 0.0664, magnitude: 5.97, spectralType: 'A' },
        { ra: 269.2333, dec: 6.4878, magnitude: 6.29, spectralType: 'B' },
        { ra: 269.7317, dec: -36.8583, magnitude: 5.74, spectralType: 'G' },
        { ra: 269.6629, dec: -28.7592, magnitude: 6.01, spectralType: 'B' },
        { ra: 269.7717, dec: -30.2531, magnitude: 5.16, spectralType: 'M' },
        { ra: 269.7729, dec: -30.2533, magnitude: 7.04, spectralType: 'G' },
        { ra: 269.0633, dec: 37.2506, magnitude: 3.86, spectralType: 'K' },  // 91The Her
        { ra: 269.3621, dec: 11.0442, magnitude: 6.36, spectralType: 'A' },
        { ra: 269.3096, dec: 23.9958, magnitude: 6.3, spectralType: 'G' },
        { ra: 269.7567, dec: -9.7736, magnitude: 3.34, spectralType: 'K' },  // 64Nu Oph
        { ra: 268.8487, dec: 55.9714, magnitude: 6.1, spectralType: 'F' },
        { ra: 269.9483, dec: -23.8161, magnitude: 4.76, spectralType: 'B' },  // 4 Sgr
        { ra: 267.3625, dec: 76.9628, magnitude: 5.04, spectralType: 'F' },  // 35 Dra
        { ra: 269.2017, dec: 45.3508, magnitude: 6.02, spectralType: 'M' },
        { ra: 269.4412, dec: 29.2478, magnitude: 3.7, spectralType: 'G' },  // 92Xi Her
        { ra: 270.0004, dec: -20.3392, magnitude: 6.21, spectralType: 'K' },
        { ra: 269.1517, dec: 51.4889, magnitude: 2.23, spectralType: 'K' },  // 33Gam Dra
        { ra: 269.9029, dec: -4.8214, magnitude: 5.87, spectralType: 'K' },
        { ra: 269.6258, dec: 30.1894, magnitude: 4.41, spectralType: 'F' },  // 94Nu Her
        { ra: 270.4513, dec: -36.3778, magnitude: 6.3, spectralType: 'B' },
        { ra: 270.0646, dec: 0.6294, magnitude: 6.37, spectralType: 'A' },
        { ra: 270.1208, dec: -3.6903, magnitude: 4.62, spectralType: 'F' },  // 57Zet Ser
        { ra: 269.6762, dec: 36.2878, magnitude: 6.0, spectralType: 'G' },
        { ra: 270.0658, dec: 4.3686, magnitude: 4.64, spectralType: 'B' },  // 66 Oph
        { ra: 270.0142, dec: 16.7508, magnitude: 4.67, spectralType: 'K' },  // 93 Her
        { ra: 270.1612, dec: 2.9317, magnitude: 3.97, spectralType: 'B' },  // 67 Oph
        { ra: 270.3462, dec: -17.1569, magnitude: 6.28, spectralType: 'K' },  // 6 Sgr
        { ra: 270.4767, dec: -22.7806, magnitude: 5.77, spectralType: 'B' },
        { ra: 267.5437, dec: 78.3067, magnitude: 6.24, spectralType: 'K' },
        { ra: 269.7179, dec: 45.4761, magnitude: 6.48, spectralType: 'B' },
        { ra: 270.2204, dec: 6.2683, magnitude: 6.34, spectralType: 'B' },
        { ra: 270.1154, dec: 19.5058, magnitude: 6.5, spectralType: 'B' },
        { ra: 283.6954, dec: -87.6058, magnitude: 5.28, spectralType: 'K' },  // Chi Oct
        { ra: 270.2383, dec: 15.0933, magnitude: 6.26, spectralType: 'G' },
        { ra: 270.4383, dec: 1.3053, magnitude: 4.45, spectralType: 'A' },  // 68 Oph
        { ra: 270.7129, dec: -24.2822, magnitude: 5.34, spectralType: 'F' },  // 7 Sgr
        { ra: 268.7967, dec: 72.005, magnitude: 5.45, spectralType: 'F' },  // 34Psi2Dra
        { ra: 270.1517, dec: 33.2139, magnitude: 5.99, spectralType: 'K' },
        { ra: 270.7571, dec: -22.7183, magnitude: 6.74, spectralType: 'B' },
        { ra: 269.9842, dec: 45.5014, magnitude: 5.67, spectralType: 'M' },
        { ra: 270.3746, dec: 21.5953, magnitude: 5.18, spectralType: 'G' },  // 95 Her
        { ra: 270.3767, dec: 21.5956, magnitude: 4.96, spectralType: 'A' },  // 95 Her
        { ra: 272.8154, dec: -75.8914, magnitude: 5.86, spectralType: 'K' },
        { ra: 270.6929, dec: -5.3586, magnitude: 6.76, spectralType: 'B' },
        { ra: 270.7708, dec: -8.1803, magnitude: 5.94, spectralType: 'F' },  // 69Tau Oph
        { ra: 270.7704, dec: -8.1806, magnitude: 5.24, spectralType: 'F' },  // 69Tau Oph
        { ra: 268.6108, dec: 75.1708, magnitude: 6.36, spectralType: 'K' },
        { ra: 270.9683, dec: -24.3606, magnitude: 5.97, spectralType: 'O' },  // 9 Sgr
        { ra: 270.3996, dec: 33.3114, magnitude: 6.15, spectralType: 'K' },
        { ra: 270.5962, dec: 20.8336, magnitude: 5.28, spectralType: 'B' },  // 96 Her
        { ra: 271.21, dec: -35.9014, magnitude: 6.0, spectralType: 'K' },
        { ra: 271.9513, dec: -64.55, magnitude: 6.41, spectralType: 'K' },
        { ra: 270.6254, dec: 22.9231, magnitude: 6.21, spectralType: 'B' },  // 97 Her
        { ra: 271.2554, dec: -29.58, magnitude: 4.69, spectralType: 'F' },  // Gam1Sgr
        { ra: 271.6579, dec: -50.0917, magnitude: 3.66, spectralType: 'B' },  // The Ara
        { ra: 270.8113, dec: 19.6131, magnitude: 6.5, spectralType: 'A' },
        { ra: 272.145, dec: -63.6683, magnitude: 4.35, spectralType: 'A' },  // Pi Pav
        { ra: 271.4521, dec: -30.4242, magnitude: 2.99, spectralType: 'K' },  // 10Gam2Sgr
        { ra: 271.1554, dec: 1.9192, magnitude: 6.14, spectralType: 'B' },
        { ra: 271.5987, dec: -36.0197, magnitude: 5.95, spectralType: 'G' },
        { ra: 271.7075, dec: -43.4247, magnitude: 5.77, spectralType: 'A' },
        { ra: 271.7075, dec: -43.4247, magnitude: 5.77, spectralType: 'A' },
        { ra: 273.1437, dec: -73.6717, magnitude: 5.85, spectralType: 'F' },
        { ra: 271.3637, dec: 2.4994, magnitude: 4.03, spectralType: 'K' },  // 70 Oph
        { ra: 270.7875, dec: 48.4644, magnitude: 6.21, spectralType: 'A' },
        { ra: 271.1675, dec: 23.9425, magnitude: 6.34, spectralType: 'F' },
        { ra: 271.5308, dec: -8.3239, magnitude: 5.85, spectralType: 'B' },
        { ra: 271.5633, dec: -4.7514, magnitude: 5.77, spectralType: 'K' },
        { ra: 271.5308, dec: -0.4467, magnitude: 6.34, spectralType: 'G' },
        { ra: 271.4304, dec: 12.0039, magnitude: 7.04, spectralType: 'A' },
        { ra: 272.1254, dec: -45.7672, magnitude: 6.15, spectralType: 'B' },
        { ra: 272.49, dec: -59.04, magnitude: 6.38, spectralType: 'K' },
        { ra: 272.6087, dec: -62.0022, magnitude: 5.49, spectralType: 'G' },  // Iot Pav
        { ra: 271.7975, dec: -21.4439, magnitude: 6.28, spectralType: 'B' },
        { ra: 271.3758, dec: 21.6469, magnitude: 6.15, spectralType: 'K' },
        { ra: 271.18, dec: 40.0842, magnitude: 6.52, spectralType: 'F' },
        { ra: 271.5079, dec: 22.2189, magnitude: 5.06, spectralType: 'M' },  // 98 Her
        { ra: 272.0208, dec: -28.4572, magnitude: 4.57, spectralType: 'G' },
        { ra: 271.2533, dec: 41.9467, magnitude: 6.34, spectralType: 'F' },
        { ra: 271.4567, dec: 32.2306, magnitude: 5.71, spectralType: 'K' },
        { ra: 271.9517, dec: -17.1542, magnitude: 5.52, spectralType: 'K' },
        { ra: 271.8267, dec: 8.7339, magnitude: 4.64, spectralType: 'G' },  // 71 Oph
        { ra: 271.8375, dec: 9.5639, magnitude: 3.73, spectralType: 'A' },  // 72 Oph
        { ra: 272.3433, dec: -36.6725, magnitude: 6.58, spectralType: 'B' },
        { ra: 272.2254, dec: -25.4725, magnitude: 6.61, spectralType: 'B' },
        { ra: 273.6004, dec: -70.7514, magnitude: 6.73, spectralType: 'B' },
        { ra: 271.7563, dec: 30.5619, magnitude: 5.04, spectralType: 'F' },  // 99 Her
        { ra: 271.9517, dec: 13.0711, magnitude: 6.63, spectralType: 'A' },
        { ra: 272.4996, dec: -32.7197, magnitude: 6.43, spectralType: 'K' },
        { ra: 272.7688, dec: -47.5131, magnitude: 6.07, spectralType: 'K' },
        { ra: 271.8858, dec: 28.7625, magnitude: 3.83, spectralType: 'B' },  // 103Omi Her
        { ra: 272.5238, dec: -30.7286, magnitude: 5.53, spectralType: 'K' },
        { ra: 271.9563, dec: 26.1014, magnitude: 5.86, spectralType: 'A' },  // 100 Her
        { ra: 271.9563, dec: 26.0975, magnitude: 5.9, spectralType: 'A' },  // 100 Her
        { ra: 272.8075, dec: -45.9544, magnitude: 4.53, spectralType: 'K' },  // Eps Tel
        { ra: 272.1404, dec: 14.2847, magnitude: 6.37, spectralType: 'A' },
        { ra: 272.4308, dec: -13.9344, magnitude: 6.39, spectralType: 'K' },
        { ra: 272.7733, dec: -41.3592, magnitude: 5.86, spectralType: 'F' },
        { ra: 272.1896, dec: 20.8144, magnitude: 4.36, spectralType: 'B' },  // 102 Her
        { ra: 272.73, dec: -33.7997, magnitude: 6.16, spectralType: 'B' },
        { ra: 263.0538, dec: 86.5864, magnitude: 4.36, spectralType: 'A' },  // 23Del UMi
        { ra: 271.7229, dec: 50.8228, magnitude: 6.29, spectralType: 'K' },
        { ra: 271.87, dec: 43.4617, magnitude: 5.0, spectralType: 'G' },
        { ra: 271.7763, dec: 49.7106, magnitude: 6.32, spectralType: 'A' },
        { ra: 272.0092, dec: 36.4014, magnitude: 5.48, spectralType: 'K' },
        { ra: 272.2204, dec: 20.0453, magnitude: 5.1, spectralType: 'A' },  // 101 Her
        { ra: 272.3908, dec: 3.9933, magnitude: 5.73, spectralType: 'F' },  // 73 Oph
        { ra: 273.5675, dec: -63.6894, magnitude: 6.47, spectralType: 'K' },
        { ra: 272.475, dec: 3.1197, magnitude: 5.69, spectralType: 'F' },
        { ra: 272.8117, dec: -19.8422, magnitude: 6.36, spectralType: 'A' },
        { ra: 272.2925, dec: 30.4694, magnitude: 6.38, spectralType: 'K' },
        { ra: 272.6679, dec: 3.3242, magnitude: 5.51, spectralType: 'K' },
        { ra: 272.9308, dec: -23.7011, magnitude: 4.98, spectralType: 'K' },  // 11 Sgr
        { ra: 272.9925, dec: -28.9014, magnitude: 6.51, spectralType: 'B' },
        { ra: 272.5362, dec: 16.4767, magnitude: 6.09, spectralType: 'B' },
        { ra: 273.3025, dec: -41.3361, magnitude: 5.47, spectralType: 'B' },
        { ra: 273.9204, dec: -63.0556, magnitude: 5.6, spectralType: 'K' },
        { ra: 272.4062, dec: 38.4575, magnitude: 6.4, spectralType: 'K' },
        { ra: 272.4958, dec: 36.4664, magnitude: 5.58, spectralType: 'G' },
        { ra: 274.5038, dec: -68.2292, magnitude: 6.33, spectralType: 'B' },
        { ra: 270.0142, dec: 80.0008, magnitude: 6.04, spectralType: 'F' },  // 40 Dra
        { ra: 270.0383, dec: 80.0042, magnitude: 5.68, spectralType: 'F' },  // 41 Dra
        { ra: 262.7, dec: 86.9681, magnitude: 5.79, spectralType: 'A' },  // 24 UMi
        { ra: 273.4408, dec: -21.0589, magnitude: 3.86, spectralType: 'B' },  // 13Mu Sgr
        { ra: 273.2917, dec: -4.0117, magnitude: 6.59, spectralType: 'A' },
        { ra: 272.9379, dec: 33.4469, magnitude: 5.88, spectralType: 'A' },
        { ra: 272.9758, dec: 31.4053, magnitude: 4.97, spectralType: 'M' },  // 104 Her
        { ra: 273.5663, dec: -21.7131, magnitude: 5.44, spectralType: 'K' },  // 14 Sgr
        { ra: 272.6317, dec: 54.2867, magnitude: 5.95, spectralType: 'K' },
        { ra: 273.9696, dec: -44.2067, magnitude: 5.46, spectralType: 'G' },
        { ra: 274.2813, dec: -56.0233, magnitude: 5.33, spectralType: 'B' },
        { ra: 273.3187, dec: 21.8803, magnitude: 6.12, spectralType: 'K' },
        { ra: 274.2538, dec: -51.0683, magnitude: 6.06, spectralType: 'B' },
        { ra: 273.8038, dec: -20.7283, magnitude: 5.38, spectralType: 'B' },  // 15 Sgr
        { ra: 273.8038, dec: -20.3881, magnitude: 5.95, spectralType: 'O' },  // 16 Sgr
        { ra: 273.1775, dec: 41.1469, magnitude: 6.36, spectralType: 'K' },
        { ra: 273.8783, dec: -18.6614, magnitude: 6.07, spectralType: 'A' },
        { ra: 273.27, dec: 38.7736, magnitude: 6.04, spectralType: 'B' },
        { ra: 272.7796, dec: 60.4094, magnitude: 6.49, spectralType: 'A' },
        { ra: 274.9175, dec: -63.8869, magnitude: 6.18, spectralType: 'F' },
        { ra: 275.9004, dec: -75.0442, magnitude: 5.47, spectralType: 'A' },  // Phi Oct
        { ra: 273.9917, dec: -3.6175, magnitude: 6.36, spectralType: 'A' },
        { ra: 273.6833, dec: 29.2072, magnitude: 6.56, spectralType: 'F' },
        { ra: 274.4067, dec: -36.7617, magnitude: 3.11, spectralType: 'M' },  // Eta Sgr
        { ra: 274.4004, dec: -34.1072, magnitude: 6.16, spectralType: 'B' },
        { ra: 274.0233, dec: 2.3778, magnitude: 6.01, spectralType: 'M' },
        { ra: 274.35, dec: -28.6525, magnitude: 6.19, spectralType: 'A' },
        { ra: 274.3487, dec: -28.2892, magnitude: 6.4, spectralType: 'G' },
        { ra: 277.3313, dec: -80.2328, magnitude: 5.95, spectralType: 'K' },
        { ra: 274.2983, dec: -17.3739, magnitude: 5.75, spectralType: 'K' },
        { ra: 274.6667, dec: -42.2883, magnitude: 6.3, spectralType: 'B' },
        { ra: 274.2212, dec: -3.0072, magnitude: 6.0, spectralType: 'G' },
        { ra: 274.3688, dec: -18.4633, magnitude: 6.54, spectralType: 'O' },
        { ra: 274.5133, dec: -27.0425, magnitude: 4.65, spectralType: 'K' },
        { ra: 274.3508, dec: -9.7586, magnitude: 6.31, spectralType: 'A' },
        { ra: 274.27, dec: 1.0058, magnitude: 6.63, spectralType: 'F' },
        { ra: 273.9117, dec: 42.1594, magnitude: 5.59, spectralType: 'B' },
        { ra: 274.6738, dec: -25.6047, magnitude: 6.51, spectralType: 'K' },
        { ra: 273.8858, dec: 45.2094, magnitude: 6.29, spectralType: 'G' },
        { ra: 274.6804, dec: -18.6194, magnitude: 6.84, spectralType: 'B' },
        { ra: 273.6712, dec: 56.5883, magnitude: 6.37, spectralType: 'F' },
        { ra: 273.4742, dec: 64.3972, magnitude: 5.03, spectralType: 'F' },  // 36 Dra
        { ra: 274.5121, dec: 13.7769, magnitude: 6.3, spectralType: 'B' },
        { ra: 274.5321, dec: 18.1314, magnitude: 5.99, spectralType: 'B' },
        { ra: 274.2783, dec: 40.9367, magnitude: 6.11, spectralType: 'G' },
        { ra: 274.5321, dec: 23.2967, magnitude: 6.63, spectralType: 'K' },
        { ra: 275.8067, dec: -61.4939, magnitude: 4.36, spectralType: 'K' },  // Xi Pav
        { ra: 275.2304, dec: -37.4875, magnitude: 6.45, spectralType: 'K' },
        { ra: 274.7896, dec: 7.2597, magnitude: 5.39, spectralType: 'K' },
        { ra: 275.0367, dec: -15.8317, magnitude: 5.39, spectralType: 'K' },
        { ra: 275.2487, dec: -29.8281, magnitude: 2.7, spectralType: 'K' },  // 19Del Sgr
        { ra: 274.7946, dec: 24.4461, magnitude: 5.27, spectralType: 'K' },  // 105 Her
        { ra: 275.3808, dec: -24.915, magnitude: 6.25, spectralType: 'M' },
        { ra: 275.5775, dec: -38.6569, magnitude: 5.1, spectralType: 'K' },
        { ra: 275.3462, dec: -18.86, magnitude: 5.75, spectralType: 'F' },
        { ra: 275.5008, dec: -28.43, magnitude: 6.16, spectralType: 'A' },
        { ra: 273.8208, dec: 68.7558, magnitude: 5.95, spectralType: 'K' },  // 37 Dra
        { ra: 275.2171, dec: 3.3772, magnitude: 4.86, spectralType: 'G' },  // 74 Oph
        { ra: 274.9671, dec: 29.6661, magnitude: 5.99, spectralType: 'K' },
        { ra: 275.0746, dec: 21.9614, magnitude: 4.95, spectralType: 'M' },  // 106 Her
        { ra: 275.3275, dec: -2.8989, magnitude: 3.26, spectralType: 'K' },  // 58Eta Ser
        { ra: 275.7212, dec: -36.6694, magnitude: 5.34, spectralType: 'A' },
        { ra: 276.3813, dec: -63.0214, magnitude: 6.14, spectralType: 'A' },
        { ra: 274.9654, dec: 36.0644, magnitude: 4.33, spectralType: 'K' },  // 1Kap Lyr
        { ra: 275.3688, dec: 5.4358, magnitude: 6.13, spectralType: 'B' },
        { ra: 275.8704, dec: -36.2383, magnitude: 5.55, spectralType: 'K' },
        { ra: 276.0758, dec: -44.1103, magnitude: 5.25, spectralType: 'B' },
        { ra: 275.2379, dec: 29.8589, magnitude: 5.63, spectralType: 'A' },  // 108 Her
        { ra: 275.2542, dec: 28.87, magnitude: 5.12, spectralType: 'A' },  // 107 Her
        { ra: 275.7592, dec: -10.2186, magnitude: 6.33, spectralType: 'B' },
        { ra: 276.0429, dec: -34.3847, magnitude: 1.85, spectralType: 'B' },  // 20Eps Sgr
        { ra: 274.9837, dec: 51.3478, magnitude: 6.3, spectralType: 'K' },
        { ra: 275.8008, dec: -12.0147, magnitude: 5.73, spectralType: 'B' },
        { ra: 275.5362, dec: 23.2853, magnitude: 5.41, spectralType: 'M' },
        { ra: 275.6471, dec: 12.0289, magnitude: 5.89, spectralType: 'A' },
        { ra: 275.9146, dec: -8.9342, magnitude: 4.68, spectralType: 'G' },  // Zet Sct
        { ra: 275.7042, dec: 17.8267, magnitude: 5.25, spectralType: 'K' },
        { ra: 275.2796, dec: 49.7256, magnitude: 6.4, spectralType: 'K' },
        { ra: 275.7621, dec: 16.6881, magnitude: 6.22, spectralType: 'K' },
        { ra: 276.2563, dec: -30.7567, magnitude: 5.6, spectralType: 'K' },  // 18 Sgr
        { ra: 276.3404, dec: -35.9917, magnitude: 6.15, spectralType: 'K' },
        { ra: 276.0146, dec: -3.5833, magnitude: 6.38, spectralType: 'F' },
        { ra: 275.3863, dec: 49.1217, magnitude: 5.05, spectralType: 'M' },
        { ra: 276.1754, dec: -7.0753, magnitude: 6.31, spectralType: 'K' },
        { ra: 276.4775, dec: -33.9453, magnitude: 6.3, spectralType: 'B' },
        { ra: 276.7246, dec: -48.1169, magnitude: 5.46, spectralType: 'K' },
        { ra: 275.9246, dec: 21.7697, magnitude: 3.84, spectralType: 'K' },  // 109 Her
        { ra: 276.3375, dec: -20.5417, magnitude: 4.81, spectralType: 'K' },  // 21 Sgr
        { ra: 276.7433, dec: -45.9683, magnitude: 3.51, spectralType: 'B' },  // Alp Tel
        { ra: 276.2375, dec: -1.5794, magnitude: 6.15, spectralType: 'F' },
        { ra: 278.2304, dec: -73.9656, magnitude: 5.89, spectralType: 'K' },
        { ra: 276.2867, dec: 5.0847, magnitude: 6.74, spectralType: 'B' },
        { ra: 275.9892, dec: 38.7392, magnitude: 6.36, spectralType: 'K' },
        { ra: 276.4117, dec: 8.0319, magnitude: 5.65, spectralType: 'G' },
        { ra: 276.0575, dec: 39.5072, magnitude: 5.12, spectralType: 'A' },  // 2Mu Lyr
        { ra: 276.2437, dec: 27.3953, magnitude: 6.27, spectralType: 'A' },
        { ra: 277.2079, dec: -49.0708, magnitude: 4.13, spectralType: 'G' },  // Zet Tel
        { ra: 276.4808, dec: 14.9667, magnitude: 6.37, spectralType: 'B' },
        { ra: 276.9563, dec: -29.8164, magnitude: 5.92, spectralType: 'F' },
        { ra: 277.4863, dec: -57.5231, magnitude: 5.76, spectralType: 'K' },
        { ra: 276.9325, dec: -26.6347, magnitude: 6.31, spectralType: 'A' },
        { ra: 277.1129, dec: -38.9956, magnitude: 5.64, spectralType: 'A' },
        { ra: 275.9492, dec: 53.3008, magnitude: 6.32, spectralType: 'A' },
        { ra: 280.5587, dec: -81.8078, magnitude: 6.27, spectralType: 'B' },
        { ra: 276.9925, dec: -25.4217, magnitude: 2.81, spectralType: 'K' },  // 22Lam Sgr
        { ra: 277.0258, dec: -26.7572, magnitude: 6.27, spectralType: 'A' },
        { ra: 277.3038, dec: -43.8458, magnitude: 6.36, spectralType: 'G' },
        { ra: 277.8433, dec: -62.2783, magnitude: 4.64, spectralType: 'B' },  // Nu Pav
        { ra: 276.495, dec: 29.8289, magnitude: 5.83, spectralType: 'A' },
        { ra: 276.8021, dec: 0.1961, magnitude: 5.21, spectralType: 'G' },  // 59 Ser
        { ra: 276.9854, dec: -17.8, magnitude: 6.2, spectralType: 'B' },
        { ra: 275.1896, dec: 71.3378, magnitude: 4.22, spectralType: 'A' },  // 43Phi Dra
        { ra: 277.32, dec: -38.8511, magnitude: 6.63, spectralType: 'B' },
        { ra: 277.4825, dec: -47.2203, magnitude: 5.7, spectralType: 'K' },
        { ra: 275.9771, dec: 58.8006, magnitude: 4.98, spectralType: 'A' },  // 39 Dra
        { ra: 276.6704, dec: 26.4494, magnitude: 6.53, spectralType: 'B' },
        { ra: 276.9596, dec: 3.7486, magnitude: 6.07, spectralType: 'K' },
        { ra: 277.2392, dec: -26.5817, magnitude: 6.5, spectralType: 'A' },
        { ra: 275.2642, dec: 72.7328, magnitude: 3.57, spectralType: 'F' },  // 44Chi Dra
        { ra: 276.995, dec: 6.1942, magnitude: 5.73, spectralType: 'B' },
        { ra: 277.3417, dec: -25.2564, magnitude: 6.59, spectralType: 'B' },
        { ra: 277.2996, dec: -14.5658, magnitude: 4.7, spectralType: 'A' },  // Gam Sct
        { ra: 277.7625, dec: -41.9136, magnitude: 6.04, spectralType: 'A' },
        { ra: 277.445, dec: -14.5817, magnitude: 5.96, spectralType: 'B' },
        { ra: 277.5496, dec: -18.7289, magnitude: 5.66, spectralType: 'K' },
        { ra: 277.9392, dec: -45.915, magnitude: 4.96, spectralType: 'B' },  // Del1Tel
        { ra: 277.4208, dec: -1.9853, magnitude: 5.39, spectralType: 'K' },  // 60 Ser
        { ra: 277.77, dec: -32.9892, magnitude: 5.34, spectralType: 'A' },
        { ra: 277.9842, dec: -43.5078, magnitude: 5.72, spectralType: 'K' },
        { ra: 278.0083, dec: -45.7572, magnitude: 5.07, spectralType: 'B' },  // Del2Tel
        { ra: 278.3729, dec: -58.7092, magnitude: 6.44, spectralType: 'G' },
        { ra: 277.5596, dec: -5.7242, magnitude: 6.28, spectralType: 'G' },
        { ra: 277.5213, dec: 4.0653, magnitude: 6.69, spectralType: 'B' },
        { ra: 278.0892, dec: -39.7039, magnitude: 5.16, spectralType: 'A' },
        { ra: 277.3988, dec: 23.8661, magnitude: 5.9, spectralType: 'B' },
        { ra: 277.8596, dec: -18.4028, magnitude: 5.14, spectralType: 'A' },
        { ra: 276.4963, dec: 65.5636, magnitude: 4.82, spectralType: 'K' },  // 42 Dra
        { ra: 277.8571, dec: -10.7958, magnitude: 5.72, spectralType: 'B' },
        { ra: 277.9721, dec: -19.125, magnitude: 6.68, spectralType: 'G' },
        { ra: 278.2538, dec: -39.8922, magnitude: 6.22, spectralType: 'F' },
        { ra: 276.9262, dec: 59.5492, magnitude: 6.43, spectralType: 'K' },
        { ra: 277.6733, dec: 20.8153, magnitude: 6.5, spectralType: 'G' },
        { ra: 278.3758, dec: -42.3125, magnitude: 4.64, spectralType: 'G' },  // The CrA
        { ra: 278.3471, dec: -38.7203, magnitude: 6.32, spectralType: 'A' },  // Kap1CrA
        { ra: 278.3462, dec: -38.7261, magnitude: 5.65, spectralType: 'B' },  // Kap2CrA
        { ra: 278.63, dec: -52.8919, magnitude: 6.22, spectralType: 'K' },
        { ra: 277.7683, dec: 16.9286, magnitude: 5.77, spectralType: 'A' },
        { ra: 278.0867, dec: -14.6442, magnitude: 6.37, spectralType: 'A' },
        { ra: 277.9875, dec: -1.0031, magnitude: 5.94, spectralType: 'A' },  // 61 Ser
        { ra: 278.0292, dec: 3.6597, magnitude: 6.43, spectralType: 'A' },
        { ra: 278.1804, dec: -14.8656, magnitude: 5.5, spectralType: 'K' },
        { ra: 278.4908, dec: -33.0167, magnitude: 5.28, spectralType: 'B' },
        { ra: 278.4729, dec: -24.0325, magnitude: 5.49, spectralType: 'K' },  // 24 Sgr
        { ra: 278.4125, dec: -14.8536, magnitude: 5.76, spectralType: 'A' },
        { ra: 278.3454, dec: -5.9114, magnitude: 6.36, spectralType: 'A' },
        { ra: 282.9913, dec: -83.3164, magnitude: 7.16, spectralType: 'K' },
        { ra: 278.6367, dec: -24.2225, magnitude: 6.51, spectralType: 'F' },  // 25 Sgr
        { ra: 278.1925, dec: 23.6169, magnitude: 5.84, spectralType: 'K' },
        { ra: 278.3471, dec: 8.2683, magnitude: 6.42, spectralType: 'B' },
        { ra: 278.2079, dec: 30.5542, magnitude: 5.48, spectralType: 'B' },
        { ra: 278.8388, dec: -20.8408, magnitude: 6.48, spectralType: 'F' },
        { ra: 278.76, dec: -10.9772, magnitude: 5.14, spectralType: 'G' },
        { ra: 278.3462, dec: 30.8925, magnitude: 6.59, spectralType: 'B' },
        { ra: 278.9987, dec: -29.6992, magnitude: 6.37, spectralType: 'K' },
        { ra: 278.8017, dec: -8.2442, magnitude: 3.85, spectralType: 'K' },  // Alp Sct
        { ra: 278.0475, dec: 52.1156, magnitude: 6.56, spectralType: 'B' },
        { ra: 278.5817, dec: 20.4664, magnitude: 6.57, spectralType: 'A' },
        { ra: 278.6979, dec: 10.8917, magnitude: 6.4, spectralType: 'A' },
        { ra: 278.8025, dec: 18.2033, magnitude: 5.78, spectralType: 'A' },
        { ra: 278.1438, dec: 57.0456, magnitude: 4.77, spectralType: 'F' },  // 45 Dra
        { ra: 277.8117, dec: 65.4361, magnitude: 6.59, spectralType: 'A' },
        { ra: 278.8767, dec: 23.6056, magnitude: 5.61, spectralType: 'G' },
        { ra: 278.9717, dec: 16.9756, magnitude: 6.21, spectralType: 'G' },
        { ra: 280.7588, dec: -71.4281, magnitude: 4.01, spectralType: 'K' },  // Zet Pav
        { ra: 278.4863, dec: 52.3536, magnitude: 5.36, spectralType: 'K' },
        { ra: 278.8062, dec: 34.4578, magnitude: 6.1, spectralType: 'B' },
        { ra: 279.1158, dec: 9.1225, magnitude: 5.39, spectralType: 'F' },
        { ra: 279.8096, dec: -47.9097, magnitude: 5.86, spectralType: 'A' },
        { ra: 279.1629, dec: 6.6719, magnitude: 5.45, spectralType: 'F' },
        { ra: 279.4767, dec: -21.3978, magnitude: 5.94, spectralType: 'A' },
        { ra: 279.5192, dec: -14.0047, magnitude: 6.47, spectralType: 'B' },
        { ra: 279.6279, dec: -23.505, magnitude: 5.81, spectralType: 'B' },
        { ra: 279.8958, dec: -43.1861, magnitude: 5.37, spectralType: 'M' },
        { ra: 279.3025, dec: 11.4217, magnitude: 6.42, spectralType: 'B' },
        { ra: 279.4, dec: -0.3094, magnitude: 5.75, spectralType: 'A' },
        { ra: 281.9558, dec: -77.8672, magnitude: 6.39, spectralType: 'F' },
        { ra: 279.2875, dec: 16.1983, magnitude: 6.29, spectralType: 'G' },
        { ra: 280.5938, dec: -64.6431, magnitude: 6.37, spectralType: 'A' },
        { ra: 279.155, dec: 33.4689, magnitude: 5.42, spectralType: 'B' },
        { ra: 279.7225, dec: -21.0519, magnitude: 5.86, spectralType: 'G' },
        { ra: 279.5987, dec: -3.1936, magnitude: 6.49, spectralType: 'F' },
        { ra: 279.5796, dec: -1.1133, magnitude: 6.66, spectralType: 'F' },
        { ra: 279.2346, dec: 38.7836, magnitude: 0.03, spectralType: 'A' },  // 3Alp Lyr
        { ra: 279.5875, dec: 8.8339, magnitude: 6.4, spectralType: 'M' },
        { ra: 279.19, dec: 43.2219, magnitude: 6.2, spectralType: 'F' },
        { ra: 280.905, dec: -64.5511, magnitude: 5.78, spectralType: 'K' },
        { ra: 280.3775, dec: -48.095, magnitude: 6.49, spectralType: 'K' },
        { ra: 277.4371, dec: 77.5469, magnitude: 5.64, spectralType: 'K' },
        { ra: 280.0021, dec: -7.7906, magnitude: 5.84, spectralType: 'K' },
        { ra: 279.9037, dec: 5.2642, magnitude: 6.38, spectralType: 'F' },
        { ra: 279.5271, dec: 39.6681, magnitude: 6.04, spectralType: 'M' },
        { ra: 279.965, dec: 7.3583, magnitude: 6.28, spectralType: 'G' },
        { ra: 280.465, dec: -23.8333, magnitude: 6.23, spectralType: 'A' },  // 26 Sgr
        { ra: 281.3621, dec: -64.8714, magnitude: 4.79, spectralType: 'A' },
        { ra: 279.0554, dec: 65.4886, magnitude: 6.06, spectralType: 'F' },
        { ra: 280.4271, dec: -14.5642, magnitude: 6.42, spectralType: 'F' },
        { ra: 281.2979, dec: -61.095, magnitude: 6.04, spectralType: 'K' },
        { ra: 280.0083, dec: 30.8494, magnitude: 6.36, spectralType: 'K' },
        { ra: 279.8879, dec: 40.935, magnitude: 6.25, spectralType: 'B' },
        { ra: 279.3896, dec: 62.5267, magnitude: 5.74, spectralType: 'A' },
        { ra: 280.0508, dec: 38.3672, magnitude: 6.45, spectralType: 'A' },
        { ra: 280.5683, dec: -9.0525, magnitude: 4.72, spectralType: 'F' },  // Del Sct
        { ra: 280.9454, dec: -38.3236, magnitude: 5.13, spectralType: 'A' },  // Lam CrA
        { ra: 281.3487, dec: -56.8817, magnitude: 6.22, spectralType: 'K' },
        { ra: 280.73, dec: -19.2839, magnitude: 6.35, spectralType: 'M' },
        { ra: 280.6504, dec: -7.0733, magnitude: 6.15, spectralType: 'K' },
        { ra: 276.0383, dec: 83.1753, magnitude: 6.17, spectralType: 'A' },
        { ra: 281.0321, dec: -36.7186, magnitude: 6.32, spectralType: 'K' },
        { ra: 282.4312, dec: -72.9947, magnitude: 6.06, spectralType: 'B' },
        { ra: 279.97, dec: 52.1961, magnitude: 6.0, spectralType: 'A' },
        { ra: 281.0808, dec: -35.6419, magnitude: 4.87, spectralType: 'B' },
        { ra: 280.4221, dec: 31.6178, magnitude: 6.41, spectralType: 'B' },
        { ra: 281.2383, dec: -39.6864, magnitude: 5.43, spectralType: 'K' },
        { ra: 280.8804, dec: -8.2753, magnitude: 4.9, spectralType: 'G' },  // Eps Sct
        { ra: 280.5337, dec: 34.7467, magnitude: 6.47, spectralType: 'B' },
        { ra: 280.9642, dec: -6.8186, magnitude: 6.31, spectralType: 'F' },
        { ra: 281.2067, dec: -25.0111, magnitude: 5.83, spectralType: 'B' },
        { ra: 282.1575, dec: -65.0778, magnitude: 5.73, spectralType: 'A' },  // The Pav
        { ra: 281.7463, dec: -50.0944, magnitude: 6.54, spectralType: 'F' },
        { ra: 281.3279, dec: -21.0014, magnitude: 6.36, spectralType: 'F' },
        { ra: 281.4142, dec: -26.9908, magnitude: 3.17, spectralType: 'B' },  // 27Phi Sgr
        { ra: 281.2079, dec: 2.06, magnitude: 5.02, spectralType: 'B' },  // 4 Aql
        { ra: 280.8196, dec: 39.3003, magnitude: 6.45, spectralType: 'K' },
        { ra: 280.2346, dec: 62.7497, magnitude: 6.09, spectralType: 'K' },
        { ra: 280.9004, dec: 36.5567, magnitude: 6.01, spectralType: 'G' },
        { ra: 280.965, dec: 31.9267, magnitude: 5.7, spectralType: 'F' },
        { ra: 281.505, dec: -19.6064, magnitude: 6.42, spectralType: 'M' },
        { ra: 281.5858, dec: -22.3922, magnitude: 5.37, spectralType: 'K' },  // 28 Sgr
        { ra: 281.1675, dec: 23.5897, magnitude: 6.31, spectralType: 'F' },
        { ra: 281.3683, dec: 5.4997, magnitude: 5.83, spectralType: 'A' },
        { ra: 280.6579, dec: 55.5394, magnitude: 5.04, spectralType: 'B' },  // 46 Dra
        { ra: 281.9358, dec: -40.4061, magnitude: 5.24, spectralType: 'G' },  // Mu CrA
        { ra: 281.085, dec: 39.67, magnitude: 5.06, spectralType: 'A' },  // 4Eps1Lyr
        { ra: 281.0846, dec: 39.6711, magnitude: 6.02, spectralType: 'F' },  // 4Eps1Lyr
        { ra: 281.0954, dec: 39.6131, magnitude: 5.14, spectralType: 'A' },  // 5Eps2Lyr
        { ra: 281.0954, dec: 39.6128, magnitude: 5.37, spectralType: 'F' },  // 5Eps2Lyr
        { ra: 281.6804, dec: -10.125, magnitude: 5.71, spectralType: 'F' },
        { ra: 281.1933, dec: 37.605, magnitude: 4.36, spectralType: 'A' },  // 6Zet1Lyr
        { ra: 281.2008, dec: 37.5944, magnitude: 5.73, spectralType: 'F' },  // 7Zet2Lyr
        { ra: 281.3988, dec: 21.985, magnitude: 6.51, spectralType: 'B' },
        { ra: 281.6187, dec: -0.9617, magnitude: 5.9, spectralType: 'A' },  // 5 Aql
        { ra: 280.8708, dec: 53.8719, magnitude: 6.11, spectralType: 'A' },
        { ra: 281.4154, dec: 20.5464, magnitude: 4.19, spectralType: 'F' },  // 110 Her
        { ra: 282.2104, dec: -43.68, magnitude: 5.49, spectralType: 'A' },  // Eta1CrA
        { ra: 281.7938, dec: -4.7478, magnitude: 4.22, spectralType: 'G' },  // Bet Sct
        { ra: 281.5187, dec: 26.6622, magnitude: 4.83, spectralType: 'K' },
        { ra: 282.3642, dec: -45.8103, magnitude: 5.81, spectralType: 'G' },
        { ra: 281.8708, dec: -5.705, magnitude: 5.2, spectralType: 'K' },
        { ra: 281.6725, dec: 18.7058, magnitude: 6.17, spectralType: 'K' },
        { ra: 282.3958, dec: -43.4339, magnitude: 5.61, spectralType: 'B' },  // Eta2CrA
        { ra: 281.7554, dec: 18.1814, magnitude: 4.36, spectralType: 'A' },  // 111 Her
        { ra: 282.3217, dec: -34.7486, magnitude: 6.62, spectralType: 'K' },
        { ra: 281.2308, dec: 54.8967, magnitude: 6.23, spectralType: 'G' },
        { ra: 282.1887, dec: -18.6014, magnitude: 6.47, spectralType: 'G' },
        { ra: 281.5542, dec: 41.4417, magnitude: 6.07, spectralType: 'B' },
        { ra: 283.0542, dec: -62.1875, magnitude: 4.22, spectralType: 'B' },  // Lam Pav
        { ra: 281.0758, dec: 61.0481, magnitude: 5.99, spectralType: 'G' },
        { ra: 282.0113, dec: 4.2414, magnitude: 6.21, spectralType: 'K' },
        { ra: 282.3979, dec: -19.1422, magnitude: 6.75, spectralType: 'A' },
        { ra: 282.4171, dec: -20.3247, magnitude: 5.24, spectralType: 'K' },  // 29 Sgr
        { ra: 282.0683, dec: 23.5142, magnitude: 6.15, spectralType: 'F' },
        { ra: 281.7458, dec: 46.315, magnitude: 6.52, spectralType: 'A' },
        { ra: 281.9896, dec: 31.7569, magnitude: 6.06, spectralType: 'B' },
        { ra: 280.7925, dec: 70.7928, magnitude: 6.44, spectralType: 'K' },
        { ra: 282.4208, dec: -5.9128, magnitude: 5.99, spectralType: 'K' },
        { ra: 281.6796, dec: 52.9881, magnitude: 5.88, spectralType: 'B' },
        { ra: 282.4046, dec: 0.8358, magnitude: 6.25, spectralType: 'A' },
        { ra: 282.2225, dec: 19.3286, magnitude: 5.88, spectralType: 'A' },
        { ra: 283.165, dec: -52.1075, magnitude: 5.17, spectralType: 'G' },  // Kap Tel
        { ra: 282.7104, dec: -22.1622, magnitude: 6.61, spectralType: 'A' },  // 30 Sgr
        { ra: 282.5833, dec: -7.9075, magnitude: 6.8, spectralType: 'G' },
        { ra: 281.9167, dec: 49.075, magnitude: 6.4, spectralType: 'A' },
        { ra: 282.31, dec: 25.0464, magnitude: 6.59, spectralType: 'A' },
        { ra: 283.1129, dec: -46.5953, magnitude: 5.54, spectralType: 'M' },
        { ra: 283.3004, dec: -51.9311, magnitude: 6.31, spectralType: 'B' },
        { ra: 282.7437, dec: -9.7742, magnitude: 5.83, spectralType: 'F' },
        { ra: 283.2604, dec: -48.36, magnitude: 6.19, spectralType: 'A' },
        { ra: 282.0671, dec: 48.7675, magnitude: 6.12, spectralType: 'A' },
        { ra: 283.2483, dec: -46.5858, magnitude: 6.19, spectralType: 'A' },
        { ra: 282.4333, dec: 31.6292, magnitude: 6.64, spectralType: 'A' },
        { ra: 282.69, dec: 10.9764, magnitude: 6.55, spectralType: 'K' },
        { ra: 282.4413, dec: 32.8128, magnitude: 5.91, spectralType: 'B' },  // 8Nu 1Lyr
        { ra: 282.8421, dec: -3.3178, magnitude: 6.1, spectralType: 'F' },  // 8 Aql
        { ra: 282.4704, dec: 32.5508, magnitude: 5.25, spectralType: 'A' },  // 9Nu 2Lyr
        { ra: 283.1187, dec: -26.6503, magnitude: 6.29, spectralType: 'G' },
        { ra: 283.1542, dec: -29.3794, magnitude: 6.13, spectralType: 'K' },
        { ra: 283.1738, dec: -30.7342, magnitude: 6.63, spectralType: 'B' },
        { ra: 282.52, dec: 33.3628, magnitude: 3.45, spectralType: 'B' },  // 10Bet Lyr
        { ra: 284.2375, dec: -67.2336, magnitude: 4.44, spectralType: 'F' },  // Kap Pav
        { ra: 283.6346, dec: -49.8786, magnitude: 6.6, spectralType: 'A' },
        { ra: 283.0079, dec: 13.9656, magnitude: 6.14, spectralType: 'B' },
        { ra: 283.2579, dec: -9.5761, magnitude: 6.34, spectralType: 'A' },
        { ra: 284.2279, dec: -62.8011, magnitude: 6.48, spectralType: 'K' },
        { ra: 282.8996, dec: 28.7836, magnitude: 6.18, spectralType: 'K' },
        { ra: 283.0683, dec: 21.4253, magnitude: 5.48, spectralType: 'B' },  // 112 Her
        { ra: 283.5004, dec: -21.3597, magnitude: 5.69, spectralType: 'K' },  // 33 Sgr
        { ra: 282.9021, dec: 36.5386, magnitude: 6.09, spectralType: 'B' },
        { ra: 283.5425, dec: -22.745, magnitude: 4.83, spectralType: 'K' },  // 32Nu 1Sgr
        { ra: 281.4446, dec: 74.0856, magnitude: 5.27, spectralType: 'K' },
        { ra: 283.0296, dec: 41.3833, magnitude: 6.28, spectralType: 'B' },
        { ra: 283.6796, dec: -15.6031, magnitude: 5.1, spectralType: 'B' },
        { ra: 283.7796, dec: -22.6714, magnitude: 4.99, spectralType: 'K' },  // 35Nu 2Sgr
        { ra: 283.8163, dec: -26.2967, magnitude: 2.02, spectralType: 'B' },  // 34Sig Sgr
        { ra: 284.0704, dec: -42.7106, magnitude: 5.36, spectralType: 'K' },
        { ra: 282.8958, dec: 52.975, magnitude: 5.51, spectralType: 'G' },
        { ra: 281.5925, dec: 75.4339, magnitude: 5.35, spectralType: 'A' },  // 50 Dra
        { ra: 282.8004, dec: 59.3883, magnitude: 4.66, spectralType: 'G' },  // 47Omi Dra
        { ra: 283.8792, dec: -16.3767, magnitude: 5.79, spectralType: 'F' },
        { ra: 284.6517, dec: -60.2006, magnitude: 5.14, spectralType: 'K' },  // Ome Pav
        { ra: 284.0025, dec: -23.1736, magnitude: 5.93, spectralType: 'B' },
        { ra: 284.1687, dec: -37.3433, magnitude: 5.38, spectralType: 'B' },
        { ra: 285.0146, dec: -66.6533, magnitude: 6.01, spectralType: 'K' },
        { ra: 283.4317, dec: 36.9717, magnitude: 5.58, spectralType: 'B' },  // 11Del1Lyr
        { ra: 283.555, dec: 27.9094, magnitude: 5.62, spectralType: 'K' },
        { ra: 283.6871, dec: 22.645, magnitude: 4.59, spectralType: 'G' },  // 113 Her
        { ra: 284.6154, dec: -52.9386, magnitude: 4.87, spectralType: 'A' },  // Lam Tel
        { ra: 283.8646, dec: 6.6153, magnitude: 5.57, spectralType: 'K' },
        { ra: 284.3946, dec: -39.8233, magnitude: 6.31, spectralType: 'A' },
        { ra: 283.3067, dec: 50.7083, magnitude: 4.92, spectralType: 'G' },
        { ra: 283.5596, dec: 41.2256, magnitude: 7.3, spectralType: 'F' },
        { ra: 283.6258, dec: 36.8989, magnitude: 4.3, spectralType: 'M' },  // 12Del2Lyr
        { ra: 283.7188, dec: 33.9686, magnitude: 6.02, spectralType: 'G' },
        { ra: 284.055, dec: 4.2036, magnitude: 4.62, spectralType: 'A' },  // 63The1Ser
        { ra: 284.0608, dec: 4.2019, magnitude: 4.98, spectralType: 'A' },  // 63The2Ser
        { ra: 284.0946, dec: -1.8, magnitude: 6.22, spectralType: 'B' },
        { ra: 284.1067, dec: 2.4711, magnitude: 6.15, spectralType: 'G' },
        { ra: 284.3354, dec: -20.6564, magnitude: 5.08, spectralType: 'A' },  // 36Xi 1Sgr
        { ra: 283.7175, dec: 41.6028, magnitude: 5.44, spectralType: 'K' },
        { ra: 284.0163, dec: 17.995, magnitude: 6.63, spectralType: 'B' },
        { ra: 284.0258, dec: 18.1053, magnitude: 5.69, spectralType: 'K' },
        { ra: 284.2654, dec: -5.8461, magnitude: 4.83, spectralType: 'K' },  // Eta Sct
        { ra: 284.4325, dec: -21.1067, magnitude: 3.51, spectralType: 'K' },  // 37Xi 2Sgr
        { ra: 284.5888, dec: -31.0361, magnitude: 6.12, spectralType: 'K' },
        { ra: 284.6808, dec: -37.1075, magnitude: 4.87, spectralType: 'F' },  // Eps CrA
        { ra: 283.4429, dec: 57.4869, magnitude: 6.22, spectralType: 'K' },
        { ra: 283.6962, dec: 48.8597, magnitude: 5.77, spectralType: 'F' },
        { ra: 284.5854, dec: -24.8767, magnitude: 6.62, spectralType: 'A' },
        { ra: 284.7962, dec: -39.5347, magnitude: 6.49, spectralType: 'A' },
        { ra: 283.8338, dec: 43.9461, magnitude: 4.04, spectralType: 'M' },  // 13 Lyr
        { ra: 284.3192, dec: 2.5353, magnitude: 5.57, spectralType: 'B' },  // 64 Ser
        { ra: 284.6025, dec: -22.5294, magnitude: 6.14, spectralType: 'A' },
        { ra: 281.4087, dec: 79.9425, magnitude: 6.39, spectralType: 'A' },
        { ra: 285.8738, dec: -68.7553, magnitude: 5.88, spectralType: 'F' },
        { ra: 284.2567, dec: 32.9014, magnitude: 5.22, spectralType: 'F' },
        { ra: 284.5992, dec: 6.2403, magnitude: 6.21, spectralType: 'F' },
        { ra: 284.8617, dec: -18.5669, magnitude: 6.37, spectralType: 'G' },
        { ra: 284.5612, dec: 17.3608, magnitude: 5.38, spectralType: 'F' },
        { ra: 284.8492, dec: -12.8406, magnitude: 5.53, spectralType: 'B' },
        { ra: 284.6954, dec: 13.9067, magnitude: 5.89, spectralType: 'F' },  // 10 Aql
        { ra: 285.1033, dec: -24.9422, magnitude: 6.36, spectralType: 'K' },
        { ra: 285.2633, dec: -37.0608, magnitude: 6.69, spectralType: 'B' },
        { ra: 285.2679, dec: -37.0619, magnitude: 6.4, spectralType: 'B' },
        { ra: 284.6879, dec: 19.7942, magnitude: 6.5, spectralType: 'B' },
        { ra: 284.7738, dec: 13.6225, magnitude: 5.23, spectralType: 'F' },  // 11 Aql
        { ra: 284.8229, dec: 10.1408, magnitude: 6.75, spectralType: 'B' },
        { ra: 284.5079, dec: 38.2661, magnitude: 5.89, spectralType: 'B' },
        { ra: 284.1875, dec: 57.815, magnitude: 5.66, spectralType: 'K' },  // 48 Dra
        { ra: 284.9058, dec: 15.0683, magnitude: 4.02, spectralType: 'K' },  // 13Eps Aql
        { ra: 285.5362, dec: -41.91, magnitude: 6.23, spectralType: 'A' },
        { ra: 284.7358, dec: 32.6894, magnitude: 3.24, spectralType: 'B' },  // 14Gam Lyr
        { ra: 284.6942, dec: 40.6792, magnitude: 6.22, spectralType: 'B' },
        { ra: 283.5996, dec: 71.2972, magnitude: 4.82, spectralType: 'K' },  // 52Ups Dra
        { ra: 284.9396, dec: 26.2306, magnitude: 5.27, spectralType: 'K' },
        { ra: 285.4075, dec: -22.6956, magnitude: 6.24, spectralType: 'K' },
        { ra: 284.9921, dec: 22.8147, magnitude: 6.29, spectralType: 'M' },
        { ra: 284.3683, dec: 58.2253, magnitude: 6.46, spectralType: 'A' },
        { ra: 284.8012, dec: 39.2178, magnitude: 6.41, spectralType: 'B' },
        { ra: 285.3896, dec: -15.2825, magnitude: 6.32, spectralType: 'G' },
        { ra: 284.1067, dec: 65.2581, magnitude: 5.63, spectralType: 'G' },
        { ra: 285.7788, dec: -42.0953, magnitude: 4.75, spectralType: 'B' },  // Zet CrA
        { ra: 285.9892, dec: -51.0186, magnitude: 5.93, spectralType: 'K' },
        { ra: 284.3225, dec: 62.3967, magnitude: 6.45, spectralType: 'G' },
        { ra: 285.0038, dec: 32.1456, magnitude: 4.93, spectralType: 'K' },  // 15Lam Lyr
        { ra: 285.42, dec: -5.7389, magnitude: 4.02, spectralType: 'K' },  // 12 Aql
        { ra: 285.6529, dec: -29.8803, magnitude: 2.6, spectralType: 'A' },  // 38Zet Sgr
        { ra: 285.6154, dec: -24.8469, magnitude: 5.65, spectralType: 'K' },
        { ra: 284.7483, dec: 50.8094, magnitude: 6.3, spectralType: 'G' },
        { ra: 285.8238, dec: -38.2533, magnitude: 5.74, spectralType: 'F' },
        { ra: 285.2729, dec: 19.3097, magnitude: 6.39, spectralType: 'K' },
        { ra: 283.3883, dec: 75.7875, magnitude: 6.22, spectralType: 'A' },
        { ra: 285.3442, dec: 20.8336, magnitude: 6.69, spectralType: 'B' },
        { ra: 285.0792, dec: 40.6842, magnitude: 6.65, spectralType: 'M' },
        { ra: 285.3225, dec: 26.2914, magnitude: 5.69, spectralType: 'B' },
        { ra: 285.7658, dec: -19.2453, magnitude: 6.05, spectralType: 'G' },
        { ra: 285.23, dec: 33.8022, magnitude: 6.01, spectralType: 'K' },
        { ra: 285.7792, dec: -19.1033, magnitude: 6.37, spectralType: 'F' },
        { ra: 285.3954, dec: 25.0258, magnitude: 6.72, spectralType: 'K' },
        { ra: 285.4563, dec: 22.2639, magnitude: 6.4, spectralType: 'A' },
        { ra: 285.59, dec: 8.3742, magnitude: 6.3, spectralType: 'K' },
        { ra: 285.7271, dec: -3.6989, magnitude: 5.42, spectralType: 'A' },  // 14 Aql
        { ra: 285.0571, dec: 50.5336, magnitude: 5.38, spectralType: 'B' },
        { ra: 286.1046, dec: -31.0469, magnitude: 5.5, spectralType: 'A' },
        { ra: 285.4513, dec: 33.6214, magnitude: 6.39, spectralType: 'B' },
        { ra: 286.5829, dec: -52.3408, magnitude: 5.16, spectralType: 'F' },  // Rho Tel
        { ra: 285.8842, dec: 1.8189, magnitude: 5.83, spectralType: 'A' },
        { ra: 285.36, dec: 46.9347, magnitude: 5.01, spectralType: 'A' },  // 16 Lyr
        { ra: 285.7192, dec: 19.6611, magnitude: 6.09, spectralType: 'K' },
        { ra: 286.1708, dec: -21.7417, magnitude: 3.77, spectralType: 'G' },  // 39Omi Sgr
        { ra: 285.1808, dec: 55.6583, magnitude: 5.48, spectralType: 'G' },  // 49 Dra
        { ra: 286.0446, dec: 3.3306, magnitude: 6.73, spectralType: 'A' },
        { ra: 286.1008, dec: -5.685, magnitude: 6.9, spectralType: 'G' },
        { ra: 287.4696, dec: -68.4247, magnitude: 5.33, spectralType: 'G' },
        { ra: 285.9271, dec: 21.2678, magnitude: 6.52, spectralType: 'F' },
        { ra: 286.7317, dec: -48.2992, magnitude: 5.97, spectralType: 'A' },
        { ra: 284.7192, dec: 69.5311, magnitude: 6.52, spectralType: 'A' },
        { ra: 286.24, dec: -4.0314, magnitude: 5.42, spectralType: 'K' },  // 15 Aql
        { ra: 286.6046, dec: -37.0633, magnitude: 4.93, spectralType: 'F' },  // Gam CrA
        { ra: 286.6046, dec: -37.0633, magnitude: 4.99, spectralType: 'F' },  // Gam CrA
        { ra: 317.1925, dec: -88.9564, magnitude: 5.47, spectralType: 'F' },  // Sig Oct
        { ra: 285.5292, dec: 52.2611, magnitude: 6.31, spectralType: 'G' },
        { ra: 286.4217, dec: -15.6603, magnitude: 5.97, spectralType: 'B' },
        { ra: 286.3275, dec: -1.5128, magnitude: 6.53, spectralType: 'F' },
        { ra: 286.7188, dec: -37.8103, magnitude: 6.16, spectralType: 'G' },
        { ra: 287.2171, dec: -55.7203, magnitude: 6.49, spectralType: 'K' },
        { ra: 286.735, dec: -27.6706, magnitude: 3.32, spectralType: 'K' },  // 40Tau Sgr
        { ra: 286.3525, dec: 13.8633, magnitude: 2.99, spectralType: 'A' },  // 17Zet Aql
        { ra: 286.5621, dec: -4.8825, magnitude: 3.44, spectralType: 'B' },  // 16Lam Aql
        { ra: 286.2413, dec: 31.7444, magnitude: 5.56, spectralType: 'M' },
        { ra: 286.2429, dec: 30.7333, magnitude: 6.06, spectralType: 'M' },
        { ra: 286.7179, dec: -16.2289, magnitude: 6.03, spectralType: 'B' },
        { ra: 286.8788, dec: -28.6369, magnitude: 6.04, spectralType: 'K' },
        { ra: 286.7854, dec: -18.7378, magnitude: 6.29, spectralType: 'B' },
        { ra: 287.0871, dec: -40.4967, magnitude: 4.59, spectralType: 'K' },  // Del CrA
        { ra: 286.5925, dec: 8.23, magnitude: 6.09, spectralType: 'M' },
        { ra: 286.4463, dec: 29.9217, magnitude: 6.31, spectralType: 'M' },
        { ra: 286.7879, dec: 0.6417, magnitude: 6.56, spectralType: 'B' },
        { ra: 287.0608, dec: -24.6569, magnitude: 6.3, spectralType: 'B' },
        { ra: 284.4883, dec: 77.0508, magnitude: 6.54, spectralType: 'F' },
        { ra: 286.7442, dec: 11.0714, magnitude: 5.09, spectralType: 'B' },  // 18 Aql
        { ra: 287.0696, dec: -19.29, magnitude: 5.54, spectralType: 'B' },
        { ra: 286.66, dec: 24.2508, magnitude: 5.77, spectralType: 'A' },
        { ra: 286.23, dec: 53.3967, magnitude: 5.38, spectralType: 'A' },  // 51 Dra
        { ra: 286.2912, dec: 49.9233, magnitude: 6.43, spectralType: 'K' },
        { ra: 286.6571, dec: 28.6286, magnitude: 5.55, spectralType: 'F' },
        { ra: 287.3679, dec: -37.9044, magnitude: 4.11, spectralType: 'A' },  // Alp CrA
        { ra: 287.4154, dec: -39.8281, magnitude: 6.46, spectralType: 'K' },
        { ra: 287.4017, dec: -36.1647, magnitude: 6.56, spectralType: 'A' },
        { ra: 287.4908, dec: -41.8925, magnitude: 5.88, spectralType: 'B' },
        { ra: 286.5708, dec: 41.4139, magnitude: 6.49, spectralType: 'B' },
        { ra: 287.5071, dec: -39.3408, magnitude: 4.11, spectralType: 'K' },  // Bet CrA
        { ra: 286.9887, dec: 16.8533, magnitude: 6.07, spectralType: 'G' },
        { ra: 286.8567, dec: 32.5017, magnitude: 5.23, spectralType: 'F' },  // 17 Lyr
        { ra: 286.8254, dec: 36.1003, magnitude: 5.28, spectralType: 'B' },  // 18Iot Lyr
        { ra: 287.015, dec: 21.6989, magnitude: 6.23, spectralType: 'F' },
        { ra: 287.4408, dec: -21.0236, magnitude: 2.89, spectralType: 'F' },  // 41Pi Sgr
        { ra: 287.4504, dec: -19.8036, magnitude: 6.13, spectralType: 'K' },
        { ra: 287.2496, dec: 6.0733, magnitude: 5.22, spectralType: 'F' },  // 19 Aql
        { ra: 287.1675, dec: 16.8514, magnitude: 6.48, spectralType: 'F' },
        { ra: 287.7575, dec: -39.005, magnitude: 6.36, spectralType: 'B' },
        { ra: 287.465, dec: -0.4281, magnitude: 6.34, spectralType: 'B' },
        { ra: 287.8288, dec: -29.5022, magnitude: 6.3, spectralType: 'B' },
        { ra: 288.1921, dec: -50.4864, magnitude: 6.13, spectralType: 'G' },
        { ra: 287.2683, dec: 34.6006, magnitude: 6.74, spectralType: 'G' },
        { ra: 288.0408, dec: -37.5828, magnitude: 6.57, spectralType: 'G' },
        { ra: 289.1187, dec: -69.1906, magnitude: 6.27, spectralType: 'A' },  // Tau Pav
        { ra: 287.1075, dec: 52.4256, magnitude: 5.81, spectralType: 'K' },
        { ra: 288.1167, dec: -21.6581, magnitude: 6.41, spectralType: 'G' },
        { ra: 288.3071, dec: -25.9067, magnitude: 5.8, spectralType: 'K' },
        { ra: 289.3, dec: -66.6614, magnitude: 5.53, spectralType: 'A' },
        { ra: 288.1696, dec: -7.9394, magnitude: 5.34, spectralType: 'B' },  // 20 Aql
        { ra: 287.8788, dec: 26.7358, magnitude: 6.36, spectralType: 'F' },
        { ra: 288.6654, dec: -45.1933, magnitude: 5.92, spectralType: 'G' },
        { ra: 288.3146, dec: -12.2825, magnitude: 5.51, spectralType: 'K' },
        { ra: 287.9417, dec: 31.2833, magnitude: 5.98, spectralType: 'B' },  // 19 Lyr
        { ra: 287.8462, dec: 40.4292, magnitude: 6.18, spectralType: 'A' },
        { ra: 288.1433, dec: 16.8464, magnitude: 6.73, spectralType: 'B' },
        { ra: 288.1529, dec: 21.5544, magnitude: 5.93, spectralType: 'A' },
        { ra: 288.4279, dec: 2.2936, magnitude: 5.15, spectralType: 'B' },  // 21 Aql
        { ra: 288.4337, dec: 5.5158, magnitude: 6.49, spectralType: 'A' },
        { ra: 289.0904, dec: -45.4664, magnitude: 5.4, spectralType: 'K' },
        { ra: 287.4408, dec: 65.9786, magnitude: 6.25, spectralType: 'A' },  // 55 Dra
        { ra: 288.8883, dec: -24.1792, magnitude: 6.25, spectralType: 'F' },
        { ra: 288.885, dec: -25.2567, magnitude: 4.85, spectralType: 'G' },  // 42Psi Sgr
        { ra: 288.0192, dec: 49.8542, magnitude: 6.75, spectralType: 'G' },
        { ra: 288.0208, dec: 49.8561, magnitude: 6.57, spectralType: 'G' },
        { ra: 287.9187, dec: 56.8592, magnitude: 5.12, spectralType: 'G' },  // 53 Dra
        { ra: 289.1367, dec: -33.5217, magnitude: 6.25, spectralType: 'G' },
        { ra: 289.5392, dec: -53.3867, magnitude: 6.38, spectralType: 'F' },
        { ra: 288.4396, dec: 39.1461, magnitude: 4.39, spectralType: 'B' },  // 20Eta Lyr
        { ra: 288.7608, dec: 20.2033, magnitude: 6.0, spectralType: 'G' },
        { ra: 288.8338, dec: 15.0836, magnitude: 5.57, spectralType: 'G' },
        { ra: 288.8225, dec: 21.2322, magnitude: 5.64, spectralType: 'A' },  // 1 Sge
        { ra: 288.8533, dec: 30.5264, magnitude: 5.85, spectralType: 'M' },
        { ra: 289.1292, dec: 4.8347, magnitude: 5.59, spectralType: 'A' },  // 22 Aql
        { ra: 289.4087, dec: -18.9531, magnitude: 4.96, spectralType: 'G' },  // 43 Sgr
        { ra: 288.9875, dec: 27.4556, magnitude: 6.54, spectralType: 'B' },
        { ra: 289.0542, dec: 21.3903, magnitude: 4.77, spectralType: 'B' },  // 1 Vul
        { ra: 289.1117, dec: 14.5447, magnitude: 5.63, spectralType: 'B' },
        { ra: 288.9975, dec: 27.9269, magnitude: 6.16, spectralType: 'F' },
        { ra: 288.48, dec: 57.705, magnitude: 4.99, spectralType: 'K' },  // 54 Dra
        { ra: 288.1388, dec: 67.6617, magnitude: 3.07, spectralType: 'G' },  // 57Del Dra
        { ra: 288.8304, dec: 50.0708, magnitude: 6.27, spectralType: 'G' },
        { ra: 287.2908, dec: 76.5606, magnitude: 5.13, spectralType: 'A' },  // 59 Dra
        { ra: 289.4508, dec: 2.0317, magnitude: 6.19, spectralType: 'A' },
        { ra: 289.0921, dec: 38.1336, magnitude: 4.36, spectralType: 'K' },  // 21The Lyr
        { ra: 289.4542, dec: 11.5953, magnitude: 5.28, spectralType: 'F' },  // 25Ome1Aql
        { ra: 289.9167, dec: -35.4214, magnitude: 5.59, spectralType: 'B' },
        { ra: 289.7504, dec: -15.5364, magnitude: 6.06, spectralType: 'K' },
        { ra: 289.4317, dec: 23.0256, magnitude: 5.43, spectralType: 'B' },  // 2 Vul
        { ra: 289.6354, dec: 1.0853, magnitude: 5.1, spectralType: 'K' },  // 23 Aql
        { ra: 291.0225, dec: -68.3711, magnitude: 6.34, spectralType: 'K' },
        { ra: 289.7121, dec: 0.3392, magnitude: 6.41, spectralType: 'K' },  // 24 Aql
        { ra: 289.2142, dec: 46.9992, magnitude: 6.0, spectralType: 'F' },
        { ra: 290.1092, dec: -31.8178, magnitude: 6.58, spectralType: 'M' },
        { ra: 289.5033, dec: 31.0222, magnitude: 6.68, spectralType: 'A' },
        { ra: 289.7196, dec: 9.6181, magnitude: 6.32, spectralType: 'G' },
        { ra: 289.7021, dec: 19.6106, magnitude: 6.58, spectralType: 'B' },
        { ra: 290.1587, dec: -22.4025, magnitude: 5.58, spectralType: 'F' },
        { ra: 289.2758, dec: 53.3686, magnitude: 3.77, spectralType: 'G' },  // 1Kap Cyg
        { ra: 290.7129, dec: -54.4236, magnitude: 5.05, spectralType: 'A' },  // Eta Tel
        { ra: 290.3746, dec: -34.9839, magnitude: 6.48, spectralType: 'G' },
        { ra: 289.9137, dec: 12.3747, magnitude: 5.53, spectralType: 'F' },  // 28 Aql
        { ra: 289.9708, dec: 11.535, magnitude: 6.02, spectralType: 'A' },  // 29Ome2Aql
        { ra: 290.1371, dec: -5.4158, magnitude: 5.01, spectralType: 'G' },  // 26 Aql
        { ra: 290.54, dec: -42.0161, magnitude: 6.34, spectralType: 'K' },
        { ra: 289.7658, dec: 33.3889, magnitude: 6.6, spectralType: 'B' },
        { ra: 290.1487, dec: -0.8922, magnitude: 5.49, spectralType: 'B' },  // 27 Aql
        { ra: 290.6596, dec: -44.4589, magnitude: 4.01, spectralType: 'B' },  // Bet1Sgr
        { ra: 289.755, dec: 37.4453, magnitude: 6.22, spectralType: 'A' },
        { ra: 290.4046, dec: -19.2342, magnitude: 6.26, spectralType: 'B' },
        { ra: 290.4183, dec: -17.8472, magnitude: 3.93, spectralType: 'F' },  // 44Rho1Sgr
        { ra: 289.6571, dec: 49.5697, magnitude: 6.31, spectralType: 'K' },
        { ra: 290.4317, dec: -15.955, magnitude: 4.61, spectralType: 'B' },  // 46Ups Sgr
        { ra: 290.805, dec: -44.7997, magnitude: 4.29, spectralType: 'F' },  // Bet2Sgr
        { ra: 290.4621, dec: -18.3083, magnitude: 5.87, spectralType: 'G' },  // 45Rho2Sgr
        { ra: 289.9121, dec: 37.3306, magnitude: 6.31, spectralType: 'G' },
        { ra: 290.1379, dec: 35.1861, magnitude: 6.31, spectralType: 'B' },
        { ra: 290.5863, dec: -8.2011, magnitude: 6.31, spectralType: 'B' },
        { ra: 290.9717, dec: -40.6161, magnitude: 3.97, spectralType: 'B' },  // Alp Sgr
        { ra: 290.5896, dec: -0.2525, magnitude: 5.83, spectralType: 'G' },
        { ra: 291.0892, dec: -43.7231, magnitude: 6.17, spectralType: 'M' },
        { ra: 289.9021, dec: 54.3761, magnitude: 6.26, spectralType: 'A' },
        { ra: 288.8875, dec: 73.3556, magnitude: 4.45, spectralType: 'K' },  // 60Tau Dra
        { ra: 290.7692, dec: -7.4003, magnitude: 6.32, spectralType: 'K' },
        { ra: 290.7017, dec: 9.9131, magnitude: 6.35, spectralType: 'F' },
        { ra: 291.1254, dec: -27.8656, magnitude: 6.04, spectralType: 'B' },
        { ra: 290.0671, dec: 57.6453, magnitude: 5.91, spectralType: 'M' },
        { ra: 290.7842, dec: 14.9211, magnitude: 6.64, spectralType: 'F' },
        { ra: 290.7121, dec: 26.2625, magnitude: 5.18, spectralType: 'B' },  // 3 Vul
        { ra: 290.6392, dec: 33.5181, magnitude: 6.06, spectralType: 'K' },
        { ra: 291.2671, dec: -29.3092, magnitude: 5.93, spectralType: 'K' },
        { ra: 289.9421, dec: 64.3908, magnitude: 6.52, spectralType: 'B' },
        { ra: 291.3188, dec: -24.5086, magnitude: 5.03, spectralType: 'A' },  // 47Chi1Sgr
        { ra: 291.3738, dec: -23.9622, magnitude: 5.43, spectralType: 'K' },  // 49Chi3Sgr
        { ra: 290.9454, dec: 20.2644, magnitude: 6.4, spectralType: 'B' },
        { ra: 290.3558, dec: 57.7669, magnitude: 6.43, spectralType: 'K' },
        { ra: 291.2567, dec: -4.8842, magnitude: 6.52, spectralType: 'A' },
        { ra: 291.34, dec: -13.8969, magnitude: 5.69, spectralType: 'K' },
        { ra: 290.8917, dec: 33.2222, magnitude: 6.37, spectralType: 'G' },
        { ra: 291.0921, dec: 16.9378, magnitude: 6.25, spectralType: 'A' },  // 2 Sge
        { ra: 291.9504, dec: -54.3253, magnitude: 5.69, spectralType: 'K' },
        { ra: 290.1671, dec: 65.7147, magnitude: 4.59, spectralType: 'A' },  // 58Pi Dra
        { ra: 291.0317, dec: 29.6214, magnitude: 4.97, spectralType: 'B' },  // 2 Cyg
        { ra: 291.2425, dec: 11.9444, magnitude: 5.16, spectralType: 'G' },  // 31 Aql
        { ra: 291.0933, dec: 28.0878, magnitude: 6.53, spectralType: 'B' },
        { ra: 291.58, dec: -21.7767, magnitude: 5.59, spectralType: 'K' },  // 50 Sgr
        { ra: 291.0254, dec: 36.4519, magnitude: 6.36, spectralType: 'K' },
        { ra: 291.3746, dec: 3.1147, magnitude: 3.36, spectralType: 'F' },  // 30Del Aql
        { ra: 291.5462, dec: -15.0531, magnitude: 5.72, spectralType: 'B' },
        { ra: 291.6025, dec: -14.5511, magnitude: 6.7, spectralType: 'A' },
        { ra: 291.7354, dec: -29.7433, magnitude: 5.67, spectralType: 'B' },
        { ra: 290.8492, dec: 50.2714, magnitude: 6.51, spectralType: 'B' },
        { ra: 290.9854, dec: 43.3881, magnitude: 5.84, spectralType: 'G' },
        { ra: 292.7954, dec: -68.4339, magnitude: 5.96, spectralType: 'K' },
        { ra: 291.3433, dec: 20.2714, magnitude: 6.31, spectralType: 'A' },
        { ra: 291.3692, dec: 19.7986, magnitude: 5.16, spectralType: 'K' },  // 4 Vul
        { ra: 291.3575, dec: 24.9128, magnitude: 6.19, spectralType: 'F' },
        { ra: 291.6296, dec: 0.3386, magnitude: 4.66, spectralType: 'F' },  // 32Nu Aql
        { ra: 292.4692, dec: -55.4414, magnitude: 6.13, spectralType: 'K' },
        { ra: 291.6004, dec: 13.0239, magnitude: 5.74, spectralType: 'F' },
        { ra: 291.555, dec: 20.0978, magnitude: 5.63, spectralType: 'A' },  // 5 Vul
        { ra: 291.6196, dec: 19.8914, magnitude: 5.81, spectralType: 'M' },
        { ra: 292.3496, dec: -43.4458, magnitude: 5.71, spectralType: 'A' },
        { ra: 292.6437, dec: -55.11, magnitude: 6.3, spectralType: 'F' },  // Mu Tel
        { ra: 259.2367, dec: 89.0378, magnitude: 6.38, spectralType: 'M' },  // Lam UMi
        { ra: 291.5379, dec: 36.3178, magnitude: 5.15, spectralType: 'B' },  // 4 Cyg
        { ra: 291.8913, dec: 14.2825, magnitude: 6.32, spectralType: 'B' },
        { ra: 292.0867, dec: 2.9303, magnitude: 5.85, spectralType: 'B' },
        { ra: 292.4675, dec: -26.9856, magnitude: 5.52, spectralType: 'K' },
        { ra: 292.5613, dec: -32.0922, magnitude: 6.6, spectralType: 'F' },
        { ra: 292.2542, dec: 1.9503, magnitude: 5.8, spectralType: 'A' },  // 35 Aql
        { ra: 291.4446, dec: 58.0272, magnitude: 6.6, spectralType: 'B' },
        { ra: 292.3396, dec: -7.0439, magnitude: 6.61, spectralType: 'F' },
        { ra: 291.9021, dec: 37.9411, magnitude: 6.34, spectralType: 'B' },
        { ra: 292.325, dec: 0.2461, magnitude: 6.25, spectralType: 'K' },
        { ra: 292.1762, dec: 24.665, magnitude: 4.44, spectralType: 'M' },  // 6Alp Vul
        { ra: 292.2375, dec: 24.7686, magnitude: 5.81, spectralType: 'K' },  // 8 Vul
        { ra: 292.3421, dec: 14.5958, magnitude: 5.56, spectralType: 'K' },
        { ra: 291.8579, dec: 52.3206, magnitude: 5.75, spectralType: 'A' },  // 7Iot1Cyg
        { ra: 292.3371, dec: 20.2797, magnitude: 6.33, spectralType: 'B' },  // 7 Vul
        { ra: 292.725, dec: -21.3122, magnitude: 6.13, spectralType: 'A' },
        { ra: 293.2242, dec: -53.1858, magnitude: 5.75, spectralType: 'F' },
        { ra: 292.5437, dec: 2.9042, magnitude: 6.09, spectralType: 'K' },
        { ra: 291.6104, dec: 62.5572, magnitude: 6.38, spectralType: 'K' },
        { ra: 292.6658, dec: -2.7889, magnitude: 5.03, spectralType: 'M' },  // 36 Aql
        { ra: 292.6379, dec: 3.4444, magnitude: 6.05, spectralType: 'A' },
        { ra: 293.34, dec: -45.2719, magnitude: 5.61, spectralType: 'A' },
        { ra: 292.6804, dec: 27.9597, magnitude: 3.08, spectralType: 'K' },  // 6Bet1Cyg
        { ra: 292.6887, dec: 27.9653, magnitude: 5.11, spectralType: 'B' },  // 6Bet2Cyg
        { ra: 292.6954, dec: 36.2286, magnitude: 6.25, spectralType: 'B' },
        { ra: 292.4262, dec: 51.7297, magnitude: 3.79, spectralType: 'A' },  // 10Iot2Cyg
        { ra: 292.8408, dec: 26.6172, magnitude: 5.87, spectralType: 'K' },
        { ra: 293.5354, dec: -40.0347, magnitude: 5.89, spectralType: 'A' },
        { ra: 290.4175, dec: 79.6028, magnitude: 6.05, spectralType: 'A' },
        { ra: 293.8042, dec: -48.0992, magnitude: 4.9, spectralType: 'K' },  // Iot Tel
        { ra: 288.7825, dec: 83.4628, magnitude: 6.53, spectralType: 'A' },
        { ra: 292.9429, dec: 34.4531, magnitude: 4.74, spectralType: 'B' },  // 8 Cyg
        { ra: 292.8304, dec: 50.3067, magnitude: 5.53, spectralType: 'K' },
        { ra: 292.8067, dec: 55.7319, magnitude: 6.37, spectralType: 'K' },
        { ra: 293.5225, dec: 7.3789, magnitude: 4.45, spectralType: 'K' },  // 38Mu Aql
        { ra: 293.7804, dec: -10.5603, magnitude: 5.12, spectralType: 'G' },  // 37 Aql
        { ra: 294.0071, dec: -24.7192, magnitude: 5.65, spectralType: 'A' },  // 51 Sgr
        { ra: 293.8742, dec: -7.4603, magnitude: 6.34, spectralType: 'K' },
        { ra: 293.89, dec: -12.2528, magnitude: 6.27, spectralType: 'K' },
        { ra: 294.6079, dec: -57.9833, magnitude: 6.18, spectralType: 'K' },
        { ra: 294.9671, dec: -66.6856, magnitude: 6.39, spectralType: 'A' },
        { ra: 293.4017, dec: 38.7622, magnitude: 6.61, spectralType: 'A' },
        { ra: 293.6454, dec: 19.7733, magnitude: 5.0, spectralType: 'B' },  // 9 Vul
        { ra: 293.855, dec: 2.9133, magnitude: 6.38, spectralType: 'F' },
        { ra: 294.1087, dec: -18.8528, magnitude: 6.11, spectralType: 'F' },
        { ra: 294.1767, dec: -24.8836, magnitude: 4.6, spectralType: 'B' },  // 52 Sgr
        { ra: 293.7121, dec: 29.4631, magnitude: 5.38, spectralType: 'F' },  // 9 Cyg
        { ra: 293.4233, dec: 49.2625, magnitude: 5.96, spectralType: 'M' },
        { ra: 294.2637, dec: -18.2311, magnitude: 5.64, spectralType: 'K' },
        { ra: 293.6717, dec: 42.4128, magnitude: 5.35, spectralType: 'A' },
        { ra: 294.0333, dec: 11.15, magnitude: 6.68, spectralType: 'A' },
        { ra: 294.2229, dec: -7.0275, magnitude: 4.95, spectralType: 'B' },  // 39Kap Aql
        { ra: 294.1804, dec: -1.2864, magnitude: 4.36, spectralType: 'B' },  // 41Iot Aql
        { ra: 293.2921, dec: 60.1586, magnitude: 6.29, spectralType: 'K' },
        { ra: 294.0658, dec: 14.3917, magnitude: 6.38, spectralType: 'K' },
        { ra: 292.7508, dec: 70.9894, magnitude: 6.07, spectralType: 'K' },
        { ra: 293.5825, dec: 51.2367, magnitude: 5.73, spectralType: 'F' },
        { ra: 294.0346, dec: 22.5858, magnitude: 6.32, spectralType: 'B' },
        { ra: 293.6662, dec: 48.1647, magnitude: 6.67, spectralType: 'A' },
        { ra: 294.3933, dec: -14.3017, magnitude: 5.47, spectralType: 'F' },
        { ra: 295.4062, dec: -65.8542, magnitude: 6.09, spectralType: 'M' },
        { ra: 294.2188, dec: 11.2733, magnitude: 5.98, spectralType: 'G' },
        { ra: 293.9513, dec: 36.9444, magnitude: 6.05, spectralType: 'B' },  // 11 Cyg
        { ra: 294.1571, dec: 20.3328, magnitude: 7.14, spectralType: 'F' },
        { ra: 295.0763, dec: -54.4175, magnitude: 6.26, spectralType: 'K' },
        { ra: 294.4471, dec: -4.6475, magnitude: 5.46, spectralType: 'F' },  // 42 Aql
        { ra: 294.925, dec: -45.2781, magnitude: 6.25, spectralType: 'F' },
        { ra: 293.09, dec: 69.6611, magnitude: 4.68, spectralType: 'K' },  // 61Sig Dra
        { ra: 294.3225, dec: 16.4628, magnitude: 5.66, spectralType: 'G' },  // 4Eps Sge
        { ra: 294.9821, dec: -39.4333, magnitude: 6.61, spectralType: 'A' },
        { ra: 293.9829, dec: 50.2386, magnitude: 6.52, spectralType: 'G' },
        { ra: 294.2892, dec: 29.3336, magnitude: 6.43, spectralType: 'B' },
        { ra: 294.2358, dec: 38.3839, magnitude: 6.5, spectralType: 'B' },
        { ra: 294.1579, dec: 44.695, magnitude: 5.17, spectralType: 'G' },
        { ra: 294.1104, dec: 50.2211, magnitude: 4.48, spectralType: 'F' },  // 13The Cyg
        { ra: 294.9558, dec: -23.4278, magnitude: 6.34, spectralType: 'B' },  // 53 Sgr
        { ra: 294.7042, dec: 3.3817, magnitude: 6.35, spectralType: 'B' },
        { ra: 294.5729, dec: 20.7828, magnitude: 6.48, spectralType: 'K' },
        { ra: 295.0296, dec: -23.4286, magnitude: 5.97, spectralType: 'K' },
        { ra: 294.7983, dec: 5.3978, magnitude: 5.17, spectralType: 'B' },  // 44Sig Aql
        { ra: 294.8558, dec: 16.5714, magnitude: 6.38, spectralType: 'K' },
        { ra: 295.1808, dec: -16.2933, magnitude: 6.2, spectralType: 'K' },  // 54 Sgr
        { ra: 294.4863, dec: 49.2844, magnitude: 6.47, spectralType: 'G' },
        { ra: 294.8442, dec: 30.1533, magnitude: 4.69, spectralType: 'G' },  // 12Phi Cyg
        { ra: 295.0242, dec: 18.0139, magnitude: 4.37, spectralType: 'G' },  // 5Alp Sge
        { ra: 295.1804, dec: -0.6211, magnitude: 5.67, spectralType: 'A' },  // 45 Aql
        { ra: 294.9375, dec: 33.9792, magnitude: 6.1, spectralType: 'A' },
        { ra: 295.1179, dec: 20.4767, magnitude: 6.5, spectralType: 'B' },
        { ra: 294.8604, dec: 42.8183, magnitude: 5.4, spectralType: 'B' },  // 14 Cyg
        { ra: 294.6717, dec: 54.9739, magnitude: 5.82, spectralType: 'F' },
        { ra: 295.1654, dec: 23.7175, magnitude: 6.64, spectralType: 'B' },
        { ra: 295.2729, dec: 13.8156, magnitude: 6.01, spectralType: 'B' },
        { ra: 294.8933, dec: 45.9581, magnitude: 6.2, spectralType: 'G' },
        { ra: 295.2621, dec: 17.4761, magnitude: 4.37, spectralType: 'G' },  // 6Bet Sge
        { ra: 295.6296, dec: -16.1239, magnitude: 5.06, spectralType: 'F' },  // 55 Sgr
        { ra: 295.3121, dec: 22.4528, magnitude: 6.36, spectralType: 'K' },
        { ra: 295.9067, dec: -37.5389, magnitude: 6.16, spectralType: 'B' },
        { ra: 295.1717, dec: 43.0778, magnitude: 6.16, spectralType: 'M' },
        { ra: 295.5533, dec: 12.1933, magnitude: 6.34, spectralType: 'B' },  // 46 Aql
        { ra: 299.0063, dec: -81.3497, magnitude: 6.39, spectralType: 'K' },
        { ra: 295.2092, dec: 45.525, magnitude: 5.06, spectralType: 'F' },
        { ra: 295.8896, dec: -15.47, magnitude: 5.49, spectralType: 'F' },
        { ra: 295.6417, dec: 11.8267, magnitude: 5.27, spectralType: 'G' },  // 47Chi Aql
        { ra: 297.3554, dec: -72.5033, magnitude: 5.41, spectralType: 'A' },
        { ra: 295.4896, dec: 40.2539, magnitude: 6.23, spectralType: 'A' },
        { ra: 295.0542, dec: 60.5072, magnitude: 6.51, spectralType: 'A' },
        { ra: 295.7046, dec: 29.3317, magnitude: 6.49, spectralType: 'F' },
        { ra: 295.6858, dec: 32.4267, magnitude: 5.94, spectralType: 'A' },
        { ra: 295.4538, dec: 50.5253, magnitude: 5.96, spectralType: 'G' },  // 16 Cyg
        { ra: 295.4667, dec: 50.5175, magnitude: 6.2, spectralType: 'G' },
        { ra: 295.7896, dec: 30.6786, magnitude: 6.05, spectralType: 'A' },
        { ra: 295.9287, dec: 25.7719, magnitude: 5.49, spectralType: 'G' },  // 10 Vul
        { ra: 296.505, dec: -31.9086, magnitude: 5.52, spectralType: 'B' },
        { ra: 295.9829, dec: 27.1356, magnitude: 6.28, spectralType: 'B' },
        { ra: 295.5171, dec: 55.4633, magnitude: 6.48, spectralType: 'M' },
        { ra: 297.005, dec: -56.3625, magnitude: 5.35, spectralType: 'A' },  // Nu Tel
        { ra: 296.1421, dec: 13.3028, magnitude: 6.26, spectralType: 'B' },  // 48Psi Aql
        { ra: 295.9642, dec: 34.1625, magnitude: 6.05, spectralType: 'B' },
        { ra: 297.4721, dec: -66.8128, magnitude: 6.45, spectralType: 'K' },
        { ra: 295.9375, dec: 41.7731, magnitude: 5.84, spectralType: 'M' },
        { ra: 296.5904, dec: -19.7611, magnitude: 4.86, spectralType: 'K' },  // 56 Sgr
        { ra: 296.4675, dec: -2.8833, magnitude: 6.48, spectralType: 'B' },
        { ra: 296.0692, dec: 37.3544, magnitude: 4.89, spectralType: 'G' },  // 15 Cyg
        { ra: 296.2029, dec: 29.2647, magnitude: 6.82, spectralType: 'F' },
        { ra: 296.4162, dec: 7.6133, magnitude: 5.91, spectralType: 'A' },  // 49Ups Aql
        { ra: 296.1592, dec: 34.4139, magnitude: 6.57, spectralType: 'M' },
        { ra: 297.2296, dec: -52.8881, magnitude: 6.25, spectralType: 'K' },
        { ra: 295.8108, dec: 58.0164, magnitude: 6.22, spectralType: 'G' },
        { ra: 296.2042, dec: 40.7167, magnitude: 6.34, spectralType: 'M' },
        { ra: 297.7554, dec: -65.605, magnitude: 6.05, spectralType: 'F' },
        { ra: 296.565, dec: 10.6133, magnitude: 2.72, spectralType: 'K' },  // 50Gam Aql
        { ra: 295.915, dec: 57.0425, magnitude: 6.27, spectralType: 'K' },
        { ra: 297.5904, dec: -61.0614, magnitude: 6.21, spectralType: 'B' },
        { ra: 296.2437, dec: 45.1308, magnitude: 2.87, spectralType: 'B' },  // 18Del Cyg
        { ra: 296.415, dec: 36.0911, magnitude: 6.43, spectralType: 'B' },
        { ra: 296.4642, dec: 35.0128, magnitude: 6.09, spectralType: 'K' },
        { ra: 297.6867, dec: -59.1931, magnitude: 5.42, spectralType: 'A' },
        { ra: 297.0125, dec: -13.7033, magnitude: 6.11, spectralType: 'A' },
        { ra: 296.6646, dec: 25.1339, magnitude: 6.62, spectralType: 'A' },
        { ra: 296.6067, dec: 33.7278, magnitude: 4.99, spectralType: 'F' },  // 17 Cyg
        { ra: 296.6458, dec: 32.8886, magnitude: 6.18, spectralType: 'K' },
        { ra: 296.8471, dec: 18.5342, magnitude: 3.82, spectralType: 'M' },  // 7Del Sge
        { ra: 297.5575, dec: -47.5572, magnitude: 5.94, spectralType: 'M' },
        { ra: 297.2983, dec: -28.7889, magnitude: 6.05, spectralType: 'F' },
        { ra: 296.9525, dec: 25.3839, magnitude: 5.95, spectralType: 'K' },
        { ra: 297.2592, dec: -10.8708, magnitude: 6.04, spectralType: 'K' },
        { ra: 297.1267, dec: 10.6942, magnitude: 6.44, spectralType: 'F' },
        { ra: 296.8658, dec: 38.4075, magnitude: 5.77, spectralType: 'B' },
        { ra: 297.1754, dec: 11.8158, magnitude: 5.72, spectralType: 'G' },  // 52Pi Aql
        { ra: 296.0771, dec: 69.3369, magnitude: 5.92, spectralType: 'A' },
        { ra: 297.2446, dec: 19.1422, magnitude: 5.0, spectralType: 'A' },  // 8Zet Sge
        { ra: 296.8617, dec: 47.9078, magnitude: 6.12, spectralType: 'M' },
        { ra: 298.1567, dec: -54.9711, magnitude: 5.74, spectralType: 'G' },
        { ra: 298.1625, dec: -54.9767, magnitude: 6.5, spectralType: 'A' },
        { ra: 297.1829, dec: 35.3114, magnitude: 6.53, spectralType: 'F' },
        { ra: 297.2108, dec: 33.4372, magnitude: 6.44, spectralType: 'B' },
        { ra: 297.9608, dec: -39.8744, magnitude: 5.33, spectralType: 'A' },
        { ra: 297.695, dec: -10.7636, magnitude: 5.39, spectralType: 'F' },  // 51 Aql
        { ra: 297.5729, dec: 7.9025, magnitude: 6.51, spectralType: 'B' },
        { ra: 297.3646, dec: 38.71, magnitude: 6.11, spectralType: 'G' },
        { ra: 297.4775, dec: 28.4406, magnitude: 6.38, spectralType: 'B' },
        { ra: 297.6958, dec: 8.8683, magnitude: 0.77, spectralType: 'A' },  // 53Alp Aql
        { ra: 298.6683, dec: -61.1708, magnitude: 6.24, spectralType: 'A' },
        { ra: 297.7962, dec: -2.4608, magnitude: 6.13, spectralType: 'K' },
        { ra: 297.7567, dec: 10.4156, magnitude: 5.11, spectralType: 'F' },  // 54Omi Aql
        { ra: 298.05, dec: -19.045, magnitude: 5.92, spectralType: 'G' },  // 57 Sgr
        { ra: 297.8238, dec: 9.6303, magnitude: 6.25, spectralType: 'A' },
        { ra: 296.6862, dec: 68.4383, magnitude: 6.34, spectralType: 'F' },
        { ra: 297.6412, dec: 32.9142, magnitude: 4.23, spectralType: 'G' },  // Chi Cyg
        { ra: 297.7671, dec: 22.61, magnitude: 4.95, spectralType: 'B' },  // 12 Vul
        { ra: 297.6417, dec: 38.7225, magnitude: 5.12, spectralType: 'M' },  // 19 Cyg
        { ra: 297.6554, dec: 40.5997, magnitude: 5.69, spectralType: 'B' },
        { ra: 297.6958, dec: 37.8264, magnitude: 6.06, spectralType: 'M' },
        { ra: 298.0146, dec: 11.6289, magnitude: 6.13, spectralType: 'G' },
        { ra: 298.1183, dec: 1.0056, magnitude: 3.9, spectralType: 'F' },  // 55Eta Aql
        { ra: 298.2767, dec: -14.6031, magnitude: 6.48, spectralType: 'A' },
        { ra: 298.065, dec: 10.3514, magnitude: 6.54, spectralType: 'B' },
        { ra: 298.0067, dec: 24.9922, magnitude: 5.57, spectralType: 'A' },
        { ra: 298.0908, dec: 18.6719, magnitude: 6.23, spectralType: 'O' },  // 9 Sge
        { ra: 298.3279, dec: -3.1144, magnitude: 5.65, spectralType: 'A' },
        { ra: 297.6571, dec: 52.9881, magnitude: 5.03, spectralType: 'K' },  // 20 Cyg
        { ra: 297.8308, dec: 47.3772, magnitude: 6.2, spectralType: 'F' },
        { ra: 298.5737, dec: -23.9411, magnitude: 6.18, spectralType: 'K' },
        { ra: 299.6721, dec: -69.1639, magnitude: 5.75, spectralType: 'A' },
        { ra: 298.3442, dec: 4.4006, magnitude: 6.53, spectralType: 'B' },
        { ra: 298.8154, dec: -41.8683, magnitude: 4.13, spectralType: 'K' },  // Iot Sgr
        { ra: 297.0433, dec: 70.2678, magnitude: 3.83, spectralType: 'G' },  // 63Eps Dra
        { ra: 298.0679, dec: 36.4322, magnitude: 6.1, spectralType: 'K' },
        { ra: 298.5342, dec: -8.5742, magnitude: 5.79, spectralType: 'K' },  // 56 Aql
        { ra: 298.7713, dec: -33.0464, magnitude: 6.46, spectralType: 'K' },
        { ra: 299.2404, dec: -57.9256, magnitude: 6.53, spectralType: 'K' },
        { ra: 299.2758, dec: -58.9014, magnitude: 5.26, spectralType: 'B' },
        { ra: 299.7208, dec: -68.7622, magnitude: 6.39, spectralType: 'A' },
        { ra: 297.9963, dec: 47.0275, magnitude: 5.62, spectralType: 'O' },
        { ra: 300.1479, dec: -72.9106, magnitude: 3.96, spectralType: 'A' },  // Eps Pav
        { ra: 298.03, dec: 47.9319, magnitude: 5.91, spectralType: 'B' },
        { ra: 298.3654, dec: 24.0797, magnitude: 4.58, spectralType: 'B' },  // 13 Vul
        { ra: 298.6567, dec: -8.2272, magnitude: 5.71, spectralType: 'B' },  // 57 Aql
        { ra: 298.6587, dec: -8.2372, magnitude: 6.49, spectralType: 'B' },  // 57 Aql
        { ra: 298.5621, dec: 8.4614, magnitude: 4.71, spectralType: 'G' },  // 59Xi Aql
        { ra: 298.6867, dec: 0.2736, magnitude: 5.61, spectralType: 'A' },  // 58 Aql
        { ra: 298.96, dec: -26.2994, magnitude: 4.7, spectralType: 'G' },  // 58Ome Sgr
        { ra: 298.6679, dec: 7.1403, magnitude: 6.15, spectralType: 'A' },
        { ra: 298.8317, dec: -6.7342, magnitude: 6.51, spectralType: 'F' },
        { ra: 298.255, dec: 47.8075, magnitude: 6.29, spectralType: 'B' },
        { ra: 298.6296, dec: 24.3194, magnitude: 5.52, spectralType: 'A' },
        { ra: 298.8283, dec: 6.4067, magnitude: 3.71, spectralType: 'G' },  // 60Bet Aql
        { ra: 300.0958, dec: -66.9494, magnitude: 5.76, spectralType: 'K' },  // Mu 1Pav
        { ra: 299.2367, dec: -27.17, magnitude: 4.52, spectralType: 'K' },  // 59 Sgr
        { ra: 299.4221, dec: -38.0583, magnitude: 6.55, spectralType: 'F' },
        { ra: 298.7013, dec: 36.9961, magnitude: 5.76, spectralType: 'G' },
        { ra: 298.7771, dec: 30.1953, magnitude: 6.57, spectralType: 'B' },
        { ra: 298.3225, dec: 57.5236, magnitude: 5.14, spectralType: 'B' },  // 23 Cyg
        { ra: 299.0054, dec: 16.6347, magnitude: 5.36, spectralType: 'G' },  // 10 Sge
        { ra: 299.0596, dec: 11.4239, magnitude: 5.28, spectralType: 'A' },  // 61Phi Aql
        { ra: 298.3975, dec: 59.7089, magnitude: 6.06, spectralType: 'A' },
        { ra: 300.4683, dec: -66.9442, magnitude: 5.31, spectralType: 'K' },  // Mu 2Pav
        { ra: 298.9654, dec: 38.4867, magnitude: 4.94, spectralType: 'B' },  // 22 Cyg
        { ra: 299.4875, dec: -15.4914, magnitude: 5.02, spectralType: 'A' },  // 61 Sgr
        { ra: 299.0767, dec: 35.0833, magnitude: 3.89, spectralType: 'K' },  // 21Eta Cyg
        { ra: 299.2508, dec: 20.9981, magnitude: 6.48, spectralType: 'A' },
        { ra: 299.735, dec: -30.5381, magnitude: 6.28, spectralType: 'K' },
        { ra: 299.7383, dec: -26.1956, magnitude: 4.83, spectralType: 'G' },  // 60 Sgr
        { ra: 298.9075, dec: 52.4389, magnitude: 4.92, spectralType: 'A' },  // 24Psi Cyg
        { ra: 299.1842, dec: 36.2508, magnitude: 6.02, spectralType: 'B' },
        { ra: 300.1054, dec: -49.3511, magnitude: 6.17, spectralType: 'K' },
        { ra: 299.4392, dec: 16.7892, magnitude: 5.53, spectralType: 'B' },  // 11 Sge
        { ra: 299.9342, dec: -35.2764, magnitude: 4.37, spectralType: 'B' },  // The1Sgr
        { ra: 299.9638, dec: -34.6978, magnitude: 5.3, spectralType: 'A' },  // The2Sgr
        { ra: 300.4362, dec: -59.3761, magnitude: 5.13, spectralType: 'M' },
        { ra: 298.8421, dec: 58.2503, magnitude: 6.09, spectralType: 'G' },
        { ra: 300.1104, dec: -43.0433, magnitude: 6.14, spectralType: 'M' },
        { ra: 299.3079, dec: 40.3681, magnitude: 5.45, spectralType: 'B' },
        { ra: 300.0663, dec: -37.7022, magnitude: 5.95, spectralType: 'G' },
        { ra: 300.2013, dec: -45.1131, magnitude: 5.81, spectralType: 'A' },
        { ra: 300.0846, dec: -33.7039, magnitude: 5.66, spectralType: 'F' },
        { ra: 299.1879, dec: 50.9025, magnitude: 6.43, spectralType: 'A' },
        { ra: 298.9808, dec: 58.8461, magnitude: 4.96, spectralType: 'K' },
        { ra: 299.0792, dec: 56.6869, magnitude: 6.12, spectralType: 'A' },
        { ra: 299.6892, dec: 19.4922, magnitude: 3.47, spectralType: 'M' },  // 12Gam Sge
        { ra: 299.8446, dec: 1.3778, magnitude: 6.17, spectralType: 'G' },
        { ra: 299.9475, dec: -9.9583, magnitude: 5.88, spectralType: 'F' },
        { ra: 299.4842, dec: 42.2608, magnitude: 6.43, spectralType: 'A' },
        { ra: 300.36, dec: -40.8142, magnitude: 6.29, spectralType: 'A' },
        { ra: 299.6583, dec: 30.9836, magnitude: 5.49, spectralType: 'B' },
        { ra: 299.7938, dec: 23.1014, magnitude: 5.67, spectralType: 'F' },  // 14 Vul
        { ra: 299.6433, dec: 38.1056, magnitude: 6.32, spectralType: 'B' },
        { ra: 300.3496, dec: -22.7372, magnitude: 6.01, spectralType: 'G' },
        { ra: 301.3867, dec: -67.3208, magnitude: 6.07, spectralType: 'G' },
        { ra: 300.0137, dec: 17.5167, magnitude: 5.37, spectralType: 'M' },  // 13 Sge
        { ra: 299.8354, dec: 45.7722, magnitude: 5.92, spectralType: 'A' },
        { ra: 299.98, dec: 37.0428, magnitude: 5.19, spectralType: 'B' },  // 25 Cyg
        { ra: 300.2454, dec: 8.5581, magnitude: 5.91, spectralType: 'K' },
        { ra: 300.4942, dec: -13.6369, magnitude: 5.71, spectralType: 'A' },  // 63 Sgr
        { ra: 300.6646, dec: -27.7097, magnitude: 4.58, spectralType: 'M' },  // 62 Sgr
        { ra: 299.8142, dec: 52.0558, magnitude: 6.15, spectralType: 'B' },
        { ra: 300.8896, dec: -37.9408, magnitude: 4.77, spectralType: 'K' },
        { ra: 300.2754, dec: 27.7536, magnitude: 4.64, spectralType: 'A' },  // 15 Vul
        { ra: 299.6196, dec: 63.5342, magnitude: 5.96, spectralType: 'A' },
        { ra: 300.3137, dec: 37.0989, magnitude: 6.2, spectralType: 'K' },
        { ra: 300.4362, dec: 24.8003, magnitude: 5.88, spectralType: 'B' },
        { ra: 300.5058, dec: 24.9381, magnitude: 5.22, spectralType: 'F' },  // 16 Vul
        { ra: 300.9346, dec: -22.5956, magnitude: 6.45, spectralType: 'F' },
        { ra: 301.0817, dec: -32.0564, magnitude: 4.99, spectralType: 'K' },
        { ra: 300.34, dec: 50.1047, magnitude: 5.05, spectralType: 'K' },  // 26 Cyg
        { ra: 301.005, dec: -7.4697, magnitude: 6.72, spectralType: 'F' },
        { ra: 300.8183, dec: 18.5006, magnitude: 5.96, spectralType: 'K' },
        { ra: 302.0854, dec: -66.3547, magnitude: 6.45, spectralType: 'K' },
        { ra: 300.875, dec: 16.0314, magnitude: 5.67, spectralType: 'B' },
        { ra: 302.1817, dec: -66.1819, magnitude: 3.56, spectralType: 'G' },  // Del Pav
        { ra: 299.6746, dec: 70.3669, magnitude: 6.33, spectralType: 'G' },
        { ra: 301.0967, dec: -0.7094, magnitude: 5.68, spectralType: 'K' },  // 62 Aql
        { ra: 301.3838, dec: -33.0, magnitude: 6.53, spectralType: 'B' },
        { ra: 301.0346, dec: 7.2781, magnitude: 5.52, spectralType: 'K' },  // 63Tau Aql
        { ra: 300.9058, dec: 29.8967, magnitude: 5.71, spectralType: 'G' },
        { ra: 301.2725, dec: -11.5994, magnitude: 6.34, spectralType: 'F' },
        { ra: 301.0258, dec: 17.07, magnitude: 5.8, spectralType: 'G' },  // 15 Sge
        { ra: 301.8467, dec: -52.8808, magnitude: 4.94, spectralType: 'M' },  // Xi Tel
        { ra: 301.8963, dec: -55.0164, magnitude: 6.26, spectralType: 'F' },
        { ra: 301.36, dec: -12.6653, magnitude: 6.55, spectralType: 'A' },  // 65 Sgr
        { ra: 300.3687, dec: 64.8211, magnitude: 5.27, spectralType: 'M' },  // 64 Dra
        { ra: 301.2442, dec: 23.2103, magnitude: 6.45, spectralType: 'A' },
        { ra: 301.1504, dec: 32.2186, magnitude: 5.64, spectralType: 'B' },
        { ra: 301.2896, dec: 19.9911, magnitude: 5.1, spectralType: 'K' },  // 16Eta Sge
        { ra: 301.3604, dec: 15.5003, magnitude: 6.34, spectralType: 'M' },
        { ra: 301.5508, dec: -4.0783, magnitude: 6.47, spectralType: 'K' },
        { ra: 300.5846, dec: 64.6344, magnitude: 6.57, spectralType: 'G' },  // 65 Dra
        { ra: 301.2908, dec: 38.4783, magnitude: 6.19, spectralType: 'G' },
        { ra: 301.12, dec: 48.2297, magnitude: 6.16, spectralType: 'A' },
        { ra: 300.7046, dec: 67.8736, magnitude: 4.51, spectralType: 'K' },  // 67Rho Dra
        { ra: 299.9025, dec: 76.4814, magnitude: 6.2, spectralType: 'M' },  // 69 Dra
        { ra: 301.2779, dec: 51.8394, magnitude: 6.14, spectralType: 'M' },
        { ra: 301.7225, dec: 23.6144, magnitude: 5.07, spectralType: 'B' },  // 17 Vul
        { ra: 301.5908, dec: 35.9725, magnitude: 5.36, spectralType: 'K' },  // 27 Cyg
        { ra: 302.0075, dec: -0.6783, magnitude: 5.99, spectralType: 'K' },  // 64 Aql
        { ra: 302.78, dec: -57.5239, magnitude: 6.37, spectralType: 'B' },
        { ra: 301.3396, dec: 56.3414, magnitude: 6.21, spectralType: 'F' },
        { ra: 301.9596, dec: 9.3997, magnitude: 6.43, spectralType: 'F' },
        { ra: 302.1304, dec: -10.0628, magnitude: 6.18, spectralType: 'B' },
        { ra: 301.1858, dec: 63.8906, magnitude: 6.26, spectralType: 'A' },
        { ra: 302.0271, dec: 16.6642, magnitude: 6.42, spectralType: 'M' },
        { ra: 301.5575, dec: 53.1658, magnitude: 5.85, spectralType: 'F' },
        { ra: 306.2267, dec: -83.3106, magnitude: 6.17, spectralType: 'A' },
        { ra: 301.9225, dec: 34.4231, magnitude: 6.11, spectralType: 'B' },
        { ra: 302.1596, dec: 10.7258, magnitude: 6.31, spectralType: 'B' },
        { ra: 301.3867, dec: 61.9956, magnitude: 5.39, spectralType: 'K' },  // 66 Dra
        { ra: 301.7979, dec: 50.2292, magnitude: 6.54, spectralType: 'A' },
        { ra: 302.7996, dec: -36.1011, magnitude: 5.32, spectralType: 'K' },
        { ra: 301.2221, dec: 68.0272, magnitude: 6.28, spectralType: 'M' },
        { ra: 302.4858, dec: 20.9153, magnitude: 6.48, spectralType: 'F' },  // 17The Sge
        { ra: 303.0996, dec: -42.7806, magnitude: 6.22, spectralType: 'K' },
        { ra: 303.6121, dec: -63.4158, magnitude: 6.09, spectralType: 'F' },
        { ra: 302.3567, dec: 36.8397, magnitude: 4.93, spectralType: 'B' },  // 28 Cyg
        { ra: 302.7921, dec: -8.8422, magnitude: 6.49, spectralType: 'B' },
        { ra: 302.8263, dec: -0.8214, magnitude: 3.23, spectralType: 'B' },  // 65The Aql
        { ra: 302.6396, dec: 26.9042, magnitude: 5.52, spectralType: 'A' },  // 18 Vul
        { ra: 302.9913, dec: -12.3925, magnitude: 6.34, spectralType: 'K' },  // 1Xi 1Cap
        { ra: 302.7646, dec: 21.1347, magnitude: 6.22, spectralType: 'K' },
        { ra: 303.5792, dec: -52.4456, magnitude: 5.65, spectralType: 'K' },
        { ra: 303.1079, dec: -12.6175, magnitude: 5.85, spectralType: 'F' },  // 2Xi 2Cap
        { ra: 302.8379, dec: 21.8756, magnitude: 6.26, spectralType: 'B' },
        { ra: 303.1467, dec: 0.8675, magnitude: 6.27, spectralType: 'B' },
        { ra: 302.95, dec: 26.8089, magnitude: 5.49, spectralType: 'K' },  // 19 Vul
        { ra: 303.0029, dec: 26.4789, magnitude: 5.92, spectralType: 'B' },  // 20 Vul
        { ra: 303.3079, dec: -1.0094, magnitude: 5.47, spectralType: 'K' },  // 66 Aql
        { ra: 303.0158, dec: 47.7369, magnitude: 6.92, spectralType: 'B' },
        { ra: 303.8225, dec: -27.0328, magnitude: 5.73, spectralType: 'K' },
        { ra: 303.4192, dec: 24.2389, magnitude: 6.56, spectralType: 'A' },
        { ra: 303.5692, dec: 15.1975, magnitude: 4.95, spectralType: 'A' },  // 67Rho Aql
        { ra: 303.9608, dec: -30.0053, magnitude: 6.3, spectralType: 'K' },
        { ra: 303.1325, dec: 51.4636, magnitude: 6.01, spectralType: 'K' },
        { ra: 302.8954, dec: 62.0786, magnitude: 5.75, spectralType: 'F' },  // 68 Dra
        { ra: 304.0987, dec: -36.4544, magnitude: 6.39, spectralType: 'M' },
        { ra: 304.1104, dec: -35.1978, magnitude: 6.53, spectralType: 'F' },
        { ra: 303.325, dec: 46.8158, magnitude: 4.83, spectralType: 'A' },  // 30 Cyg
        { ra: 303.5604, dec: 28.6947, magnitude: 5.18, spectralType: 'A' },  // 21 Vul
        { ra: 304.7625, dec: -63.2311, magnitude: 6.27, spectralType: 'K' },
        { ra: 303.4283, dec: 43.3792, magnitude: 6.14, spectralType: 'K' },
        { ra: 303.5208, dec: 36.6053, magnitude: 6.45, spectralType: 'A' },
        { ra: 303.4079, dec: 46.7414, magnitude: 3.79, spectralType: 'K' },  // 31 Cyg
        { ra: 303.6333, dec: 36.8064, magnitude: 4.97, spectralType: 'A' },  // 29 Cyg
        { ra: 303.59, dec: 42.1036, magnitude: 6.71, spectralType: 'B' },
        { ra: 304.095, dec: -12.3369, magnitude: 6.32, spectralType: 'B' },  // 3 Cap
        { ra: 303.8163, dec: 25.5919, magnitude: 4.78, spectralType: 'B' },
        { ra: 303.3496, dec: 56.5678, magnitude: 4.3, spectralType: 'A' },  // 33 Cyg
        { ra: 303.8758, dec: 23.5086, magnitude: 5.15, spectralType: 'G' },  // 22 Vul
        { ra: 303.3654, dec: 60.6406, magnitude: 5.79, spectralType: 'K' },
        { ra: 303.8487, dec: 33.7294, magnitude: 5.66, spectralType: 'K' },
        { ra: 303.9421, dec: 27.8142, magnitude: 4.52, spectralType: 'K' },  // 23 Vul
        { ra: 304.7333, dec: -47.7108, magnitude: 6.31, spectralType: 'M' },
        { ra: 304.0821, dec: 21.5986, magnitude: 6.13, spectralType: 'K' },  // 18 Sge
        { ra: 304.4121, dec: -12.5083, magnitude: 4.24, spectralType: 'G' },  // 5Alp1Cap
        { ra: 304.5058, dec: -21.81, magnitude: 5.87, spectralType: 'K' },  // 4 Cap
        { ra: 304.8246, dec: -47.5803, magnitude: 6.13, spectralType: 'F' },
        { ra: 302.2221, dec: 77.7114, magnitude: 4.39, spectralType: 'B' },  // 1Kap Cep
        { ra: 303.8679, dec: 47.7144, magnitude: 3.98, spectralType: 'K' },  // 32 Cyg
        { ra: 304.0142, dec: 38.8978, magnitude: 6.27, spectralType: 'A' },
        { ra: 304.1963, dec: 24.6711, magnitude: 5.32, spectralType: 'G' },  // 24 Vul
        { ra: 304.5137, dec: -12.5447, magnitude: 3.57, spectralType: 'G' },  // 6Alp2Cap
        { ra: 303.9308, dec: 50.2328, magnitude: 6.31, spectralType: 'A' },
        { ra: 304.0025, dec: 45.5794, magnitude: 5.91, spectralType: 'F' },
        { ra: 304.1175, dec: 37.0564, magnitude: 6.48, spectralType: 'B' },
        { ra: 305.1346, dec: -55.0508, magnitude: 6.27, spectralType: 'M' },
        { ra: 304.2304, dec: 40.365, magnitude: 5.24, spectralType: 'K' },
        { ra: 304.3813, dec: 29.1481, magnitude: 6.22, spectralType: 'G' },
        { ra: 304.8483, dec: -19.1186, magnitude: 5.28, spectralType: 'K' },  // 7Sig Cap
        { ra: 304.3712, dec: 42.7219, magnitude: 6.29, spectralType: 'K' },
        { ra: 304.4467, dec: 38.0331, magnitude: 4.81, spectralType: 'B' },  // 34 Cyg
        { ra: 305.1171, dec: -29.1972, magnitude: 6.3, spectralType: 'A' },
        { ra: 305.2162, dec: -35.6736, magnitude: 6.46, spectralType: 'K' },
        { ra: 305.4208, dec: -49.9994, magnitude: 6.27, spectralType: 'G' },
        { ra: 304.5292, dec: 40.7322, magnitude: 5.84, spectralType: 'O' },
        { ra: 304.9304, dec: -1.0786, magnitude: 6.06, spectralType: 'K' },
        { ra: 304.6192, dec: 37.0, magnitude: 5.58, spectralType: 'A' },  // 36 Cyg
        { ra: 304.6629, dec: 34.9828, magnitude: 5.17, spectralType: 'F' },  // 35 Cyg
        { ra: 304.8717, dec: 13.2169, magnitude: 6.21, spectralType: 'M' },
        { ra: 305.1087, dec: -6.3617, magnitude: 6.63, spectralType: 'K' },
        { ra: 305.1658, dec: -12.7592, magnitude: 4.76, spectralType: 'B' },  // 8Nu Cap
        { ra: 305.0008, dec: 13.5481, magnitude: 5.95, spectralType: 'A' },
        { ra: 305.1942, dec: -14.785, magnitude: 6.1, spectralType: 'A' },
        { ra: 305.2529, dec: -14.7814, magnitude: 3.08, spectralType: 'F' },  // 9Bet Cap
        { ra: 304.7067, dec: 46.3228, magnitude: 6.45, spectralType: 'B' },
        { ra: 305.0854, dec: 14.5692, magnitude: 6.13, spectralType: 'G' },
        { ra: 305.6146, dec: -42.0497, magnitude: 5.59, spectralType: 'A' },  // Kap1Sgr
        { ra: 305.0892, dec: 17.7931, magnitude: 5.8, spectralType: 'K' },
        { ra: 304.6033, dec: 55.3972, magnitude: 5.76, spectralType: 'A' },
        { ra: 304.9513, dec: 37.1325, magnitude: 6.57, spectralType: 'A' },
        { ra: 304.3804, dec: 66.8539, magnitude: 5.93, spectralType: 'G' },
        { ra: 305.0633, dec: 39.4033, magnitude: 6.23, spectralType: 'A' },
        { ra: 308.3229, dec: -80.965, magnitude: 5.77, spectralType: 'G' },
        { ra: 304.9837, dec: 46.8375, magnitude: 6.5, spectralType: 'B' },
        { ra: 305.9717, dec: -42.4228, magnitude: 5.64, spectralType: 'A' },  // Kap2Sgr
        { ra: 305.7533, dec: -9.6547, magnitude: 6.3, spectralType: 'G' },
        { ra: 305.5142, dec: 24.4461, magnitude: 5.54, spectralType: 'B' },  // 25 Vul
        { ra: 306.4121, dec: -56.735, magnitude: 1.94, spectralType: 'B' },  // Alp Pav
        { ra: 305.1267, dec: 53.5961, magnitude: 6.18, spectralType: 'K' },
        { ra: 304.9029, dec: 62.2575, magnitude: 5.72, spectralType: 'B' },  // 71 Dra
        { ra: 305.7179, dec: 14.5514, magnitude: 6.17, spectralType: 'F' },
        { ra: 305.7946, dec: 5.3431, magnitude: 5.31, spectralType: 'G' },
        { ra: 305.5125, dec: 41.1314, magnitude: 6.39, spectralType: 'G' },
        { ra: 305.5571, dec: 40.2567, magnitude: 2.2, spectralType: 'F' },  // 37Gam Cyg
        { ra: 305.6558, dec: 31.265, magnitude: 6.09, spectralType: 'K' },
        { ra: 305.5225, dec: 45.795, magnitude: 5.58, spectralType: 'K' },
        { ra: 306.4496, dec: -40.7964, magnitude: 6.09, spectralType: 'K' },
        { ra: 305.6887, dec: 41.0261, magnitude: 5.93, spectralType: 'K' },
        { ra: 306.3617, dec: -28.6633, magnitude: 5.85, spectralType: 'G' },
        { ra: 305.7312, dec: 42.9833, magnitude: 6.2, spectralType: 'K' },
        { ra: 306.1562, dec: 1.0686, magnitude: 6.15, spectralType: 'B' },
        { ra: 305.025, dec: 68.8803, magnitude: 5.55, spectralType: 'M' },
        { ra: 305.2975, dec: 63.9803, magnitude: 5.69, spectralType: 'K' },
        { ra: 305.9654, dec: 32.19, magnitude: 4.43, spectralType: 'K' },  // 39 Cyg
        { ra: 305.935, dec: 37.4764, magnitude: 5.9, spectralType: 'B' },
        { ra: 306.7208, dec: -37.4031, magnitude: 6.25, spectralType: 'K' },
        { ra: 306.4271, dec: -2.8003, magnitude: 6.11, spectralType: 'K' },
        { ra: 306.4333, dec: 10.0564, magnitude: 6.33, spectralType: 'K' },
        { ra: 306.4188, dec: 21.4097, magnitude: 5.66, spectralType: 'G' },
        { ra: 309.5775, dec: -81.2889, magnitude: 5.91, spectralType: 'K' },
        { ra: 306.505, dec: 19.865, magnitude: 6.41, spectralType: 'K' },
        { ra: 306.83, dec: -18.2117, magnitude: 5.25, spectralType: 'B' },  // 10Pi Cap
        { ra: 306.135, dec: 53.5519, magnitude: 6.51, spectralType: 'B' },
        { ra: 306.5967, dec: 17.3156, magnitude: 6.22, spectralType: 'K' },
        { ra: 307.1946, dec: -35.5958, magnitude: 6.1, spectralType: 'B' },
        { ra: 306.2713, dec: 59.6, magnitude: 6.44, spectralType: 'A' },
        { ra: 307.1817, dec: -15.7417, magnitude: 6.41, spectralType: 'K' },
        { ra: 307.0312, dec: 8.4375, magnitude: 6.25, spectralType: 'G' },
        { ra: 307.1037, dec: -3.3578, magnitude: 6.13, spectralType: 'B' },  // 68 Aql
        { ra: 307.215, dec: -17.8136, magnitude: 4.78, spectralType: 'F' },  // 11Rho Cap
        { ra: 306.7821, dec: 34.3289, magnitude: 6.39, spectralType: 'F' },
        { ra: 307.07, dec: 2.9369, magnitude: 6.21, spectralType: 'G' },
        { ra: 307.3804, dec: -22.3917, magnitude: 6.16, spectralType: 'M' },
        { ra: 306.8929, dec: 38.4403, magnitude: 5.62, spectralType: 'A' },  // 40 Cyg
        { ra: 306.5979, dec: 56.6389, magnitude: 6.36, spectralType: 'B' },
        { ra: 306.7596, dec: 49.3833, magnitude: 5.69, spectralType: 'F' },  // 43 Cyg
        { ra: 307.4688, dec: -18.5867, magnitude: 6.74, spectralType: 'A' },  // 12Omi Cap
        { ra: 307.4746, dec: -18.5833, magnitude: 5.94, spectralType: 'A' },  // 12Omi Cap
        { ra: 307.4125, dec: -2.8856, magnitude: 4.91, spectralType: 'K' },  // 69 Aql
        { ra: 307.7367, dec: -29.1125, magnitude: 6.39, spectralType: 'A' },
        { ra: 307.3379, dec: 20.0878, magnitude: 6.55, spectralType: 'A' },
        { ra: 307.3487, dec: 30.3686, magnitude: 4.01, spectralType: 'F' },  // 41 Cyg
        { ra: 307.335, dec: 36.4547, magnitude: 5.88, spectralType: 'A' },  // 42 Cyg
        { ra: 307.575, dec: 10.8958, magnitude: 6.08, spectralType: 'A' },  // 1 Del
        { ra: 307.7679, dec: -15.0564, magnitude: 6.12, spectralType: 'G' },
        { ra: 308.9654, dec: -69.6111, magnitude: 6.11, spectralType: 'K' },
        { ra: 307.7421, dec: 20.6058, magnitude: 6.18, spectralType: 'A' },
        { ra: 307.8042, dec: 11.2606, magnitude: 7.11, spectralType: 'B' },
        { ra: 307.4996, dec: 45.9286, magnitude: 6.41, spectralType: 'K' },
        { ra: 308.2183, dec: -24.9439, magnitude: 6.36, spectralType: 'A' },
        { ra: 307.3629, dec: 56.0681, magnitude: 5.91, spectralType: 'B' },
        { ra: 307.5146, dec: 48.9517, magnitude: 4.95, spectralType: 'B' },  // 45Ome1Cyg
        { ra: 308.0987, dec: -9.8533, magnitude: 5.65, spectralType: 'G' },
        { ra: 308.4796, dec: -44.5161, magnitude: 5.11, spectralType: 'K' },  // Nu Mic
        { ra: 307.7467, dec: 36.9358, magnitude: 6.19, spectralType: 'F' },  // 44 Cyg
        { ra: 308.895, dec: -60.5817, magnitude: 4.76, spectralType: 'F' },  // Phi1Pav
        { ra: 307.9925, dec: 25.8044, magnitude: 6.34, spectralType: 'A' },
        { ra: 307.3954, dec: 62.9942, magnitude: 4.22, spectralType: 'A' },  // 2The Cep
        { ra: 307.8283, dec: 49.2203, magnitude: 5.44, spectralType: 'M' },  // 46Ome2Cyg
        { ra: 308.3033, dec: 11.3033, magnitude: 4.03, spectralType: 'B' },  // 2Eps Del
        { ra: 308.7312, dec: -38.0897, magnitude: 6.44, spectralType: 'A' },
        { ra: 307.8379, dec: 52.3097, magnitude: 6.18, spectralType: 'K' },
        { ra: 308.5488, dec: -13.7211, magnitude: 6.13, spectralType: 'F' },
        { ra: 308.6975, dec: -30.4736, magnitude: 6.4, spectralType: 'B' },
        { ra: 308.4733, dec: 10.0597, magnitude: 6.56, spectralType: 'A' },
        { ra: 308.4875, dec: 13.0272, magnitude: 5.38, spectralType: 'A' },  // 3Eta Del
        { ra: 309.3971, dec: -61.53, magnitude: 4.88, spectralType: 'F' },  // Rho Pav
        { ra: 307.9437, dec: 56.78, magnitude: 6.14, spectralType: 'K' },
        { ra: 308.2179, dec: 43.1917, magnitude: 6.6, spectralType: 'B' },
        { ra: 308.5417, dec: 20.9853, magnitude: 6.48, spectralType: 'B' },
        { ra: 310.5121, dec: -76.1806, magnitude: 6.0, spectralType: 'F' },  // Mu 1Oct
        { ra: 310.4321, dec: -75.3506, magnitude: 6.55, spectralType: 'G' },  // Mu 2Oct
        { ra: 308.8842, dec: -16.5258, magnitude: 6.19, spectralType: 'A' },
        { ra: 308.4758, dec: 35.2508, magnitude: 4.61, spectralType: 'K' },  // 47 Cyg
        { ra: 308.4517, dec: 41.7722, magnitude: 6.49, spectralType: 'K' },
        { ra: 307.5029, dec: 72.5317, magnitude: 6.27, spectralType: 'K' },
        { ra: 309.3917, dec: -47.2914, magnitude: 3.11, spectralType: 'K' },  // Alp Ind
        { ra: 308.4788, dec: 46.6939, magnitude: 5.78, spectralType: 'B' },
        { ra: 308.8271, dec: 14.6742, magnitude: 4.68, spectralType: 'A' },  // 4Zet Del
        { ra: 309.9642, dec: -62.9078, magnitude: 6.22, spectralType: 'K' },
        { ra: 309.1817, dec: -2.55, magnitude: 4.89, spectralType: 'K' },  // 70 Aql
        { ra: 309.0346, dec: 25.8825, magnitude: 6.41, spectralType: 'A' },  // 26 Vul
        { ra: 310.0108, dec: -60.5489, magnitude: 5.12, spectralType: 'F' },  // Phi2Pav
        { ra: 308.71, dec: 51.8542, magnitude: 6.11, spectralType: 'A' },
        { ra: 309.4671, dec: -25.1089, magnitude: 6.36, spectralType: 'F' },
        { ra: 309.3263, dec: 0.0969, magnitude: 6.22, spectralType: 'B' },
        { ra: 307.8767, dec: 74.9547, magnitude: 5.2, spectralType: 'A' },  // 73 Dra
        { ra: 309.2696, dec: 26.4619, magnitude: 5.59, spectralType: 'B' },  // 27 Vul
        { ra: 310.4879, dec: -66.7608, magnitude: 5.15, spectralType: 'B' },  // Ups Pav
        { ra: 309.3875, dec: 14.5953, magnitude: 3.63, spectralType: 'F' },  // 6Bet Del
        { ra: 309.4546, dec: 11.3778, magnitude: 5.43, spectralType: 'A' },  // 5Iot Del
        { ra: 309.5846, dec: -1.1053, magnitude: 4.32, spectralType: 'G' },  // 71 Aql
        { ra: 309.3825, dec: 31.5725, magnitude: 6.32, spectralType: 'B' },  // 48 Cyg
        { ra: 309.4775, dec: 18.2692, magnitude: 6.25, spectralType: 'M' },
        { ra: 309.3858, dec: 31.5219, magnitude: 6.49, spectralType: 'F' },
        { ra: 309.3483, dec: 38.3286, magnitude: 6.2, spectralType: 'K' },
        { ra: 309.8183, dec: -14.9547, magnitude: 5.22, spectralType: 'B' },  // 14Tau Cap
        { ra: 309.805, dec: -2.4128, magnitude: 6.22, spectralType: 'B' },
        { ra: 309.6304, dec: 21.2011, magnitude: 4.82, spectralType: 'A' },  // 29 Vul
        { ra: 309.6829, dec: 13.315, magnitude: 5.72, spectralType: 'K' },  // 8The Del
        { ra: 310.0825, dec: -33.4319, magnitude: 5.47, spectralType: 'K' },
        { ra: 309.6329, dec: 24.1161, magnitude: 5.04, spectralType: 'B' },  // 28 Vul
        { ra: 309.6463, dec: 23.6806, magnitude: 5.91, spectralType: 'K' },
        { ra: 309.7825, dec: 10.0861, magnitude: 5.05, spectralType: 'G' },  // 7Kap Del
        { ra: 309.8537, dec: 0.4864, magnitude: 5.16, spectralType: 'K' },  // 1 Aqr
        { ra: 310.0488, dec: -23.7739, magnitude: 6.37, spectralType: 'G' },
        { ra: 309.7708, dec: 15.8381, magnitude: 5.97, spectralType: 'B' },
        { ra: 310.0125, dec: -18.1386, magnitude: 5.1, spectralType: 'M' },  // 15Ups Cap
        { ra: 307.0608, dec: 81.4228, magnitude: 5.46, spectralType: 'G' },  // 75 Dra
        { ra: 310.15, dec: -26.645, magnitude: 6.51, spectralType: 'F' },
        { ra: 309.7942, dec: 21.8172, magnitude: 6.08, spectralType: 'A' },
        { ra: 309.7479, dec: 30.3344, magnitude: 5.68, spectralType: 'K' },
        { ra: 310.1354, dec: -16.1242, magnitude: 5.8, spectralType: 'G' },
        { ra: 309.9096, dec: 15.9119, magnitude: 3.77, spectralType: 'B' },  // 9Alp Del
        { ra: 309.9658, dec: 11.2497, magnitude: 6.42, spectralType: 'F' },
        { ra: 307.3646, dec: 81.0914, magnitude: 5.96, spectralType: 'K' },  // 74 Dra
        { ra: 310.3487, dec: -31.5983, magnitude: 5.76, spectralType: 'M' },
        { ra: 310.3504, dec: -26.0, magnitude: 6.28, spectralType: 'K' },
        { ra: 309.8888, dec: 40.5794, magnitude: 6.06, spectralType: 'B' },
        { ra: 309.8462, dec: 45.6669, magnitude: 6.58, spectralType: 'B' },
        { ra: 311.2396, dec: -66.2031, magnitude: 3.42, spectralType: 'A' },  // Bet Pav
        { ra: 310.1883, dec: 19.9353, magnitude: 6.45, spectralType: 'G' },
        { ra: 310.7208, dec: -39.5586, magnitude: 6.29, spectralType: 'K' },
        { ra: 309.7508, dec: 56.005, magnitude: 6.48, spectralType: 'F' },
        { ra: 310.1508, dec: 29.8053, magnitude: 6.08, spectralType: 'A' },
        { ra: 310.3175, dec: 14.5831, magnitude: 5.99, spectralType: 'K' },  // 10 Del
        { ra: 310.0129, dec: 43.4586, magnitude: 5.95, spectralType: 'K' },
        { ra: 311.0096, dec: -51.9211, magnitude: 4.51, spectralType: 'A' },  // Eta Ind
        { ra: 310.2608, dec: 32.3072, magnitude: 5.51, spectralType: 'G' },  // 49 Cyg
        { ra: 310.2517, dec: 39.0822, magnitude: 6.51, spectralType: 'B' },
        { ra: 310.4925, dec: 17.5214, magnitude: 6.22, spectralType: 'G' },
        { ra: 310.3579, dec: 45.2803, magnitude: 1.25, spectralType: 'A' },  // 50Alp Cyg
        { ra: 310.0746, dec: 60.5053, magnitude: 6.01, spectralType: 'F' },
        { ra: 310.4854, dec: 41.7169, magnitude: 5.67, spectralType: 'B' },
        { ra: 310.5925, dec: 35.4561, magnitude: 6.66, spectralType: 'B' },
        { ra: 310.8646, dec: 15.0744, magnitude: 4.43, spectralType: 'A' },  // 11Del Del
        { ra: 310.5525, dec: 50.34, magnitude: 5.39, spectralType: 'B' },  // 51 Cyg
        { ra: 307.2629, dec: 83.6256, magnitude: 6.19, spectralType: 'A' },
        { ra: 311.305, dec: -27.2472, magnitude: 6.5, spectralType: 'G' },
        { ra: 310.8508, dec: 35.5878, magnitude: 6.47, spectralType: 'F' },
        { ra: 311.5838, dec: -39.1992, magnitude: 5.5, spectralType: 'B' },
        { ra: 312.3254, dec: -68.7764, magnitude: 5.41, spectralType: 'K' },  // Sig Pav
        { ra: 311.5775, dec: -36.1203, magnitude: 6.49, spectralType: 'F' },
        { ra: 311.5237, dec: -25.2708, magnitude: 4.14, spectralType: 'F' },  // 16Psi Cap
        { ra: 311.5417, dec: -21.5142, magnitude: 5.93, spectralType: 'A' },  // 17 Cap
        { ra: 310.6654, dec: 60.6014, magnitude: 6.15, spectralType: 'A' },
        { ra: 311.2188, dec: 25.2706, magnitude: 4.91, spectralType: 'K' },  // 30 Vul
        { ra: 310.8062, dec: 57.1142, magnitude: 6.32, spectralType: 'B' },
        { ra: 311.3675, dec: 18.0903, magnitude: 6.38, spectralType: 'M' },
        { ra: 311.4154, dec: 30.7197, magnitude: 4.22, spectralType: 'G' },  // 52 Cyg
        { ra: 312.1217, dec: -43.9886, magnitude: 5.11, spectralType: 'F' },  // Iot Mic
        { ra: 311.0917, dec: 56.4881, magnitude: 5.78, spectralType: 'M' },
        { ra: 310.7958, dec: 66.6575, magnitude: 5.58, spectralType: 'A' },  // 4 Cep
        { ra: 311.765, dec: -2.4867, magnitude: 6.27, spectralType: 'K' },
        { ra: 311.6612, dec: 16.1244, magnitude: 5.14, spectralType: 'F' },  // 12Gam1Del
        { ra: 311.6646, dec: 16.1242, magnitude: 4.27, spectralType: 'K' },  // 12Gam2Del
        { ra: 311.5529, dec: 33.9703, magnitude: 2.46, spectralType: 'K' },  // 53Eps Cyg
        { ra: 311.9192, dec: -9.4958, magnitude: 3.77, spectralType: 'A' },  // 2Eps Aqr
        { ra: 311.9342, dec: -5.0278, magnitude: 4.42, spectralType: 'M' },  // 3 Aqr
        { ra: 312.3708, dec: -46.2269, magnitude: 4.89, spectralType: 'K' },  // Zet Ind
        { ra: 311.9513, dec: 6.0083, magnitude: 5.58, spectralType: 'A' },  // 13 Del
        { ra: 311.9492, dec: 3.3067, magnitude: 6.4, spectralType: 'A' },
        { ra: 311.3379, dec: 57.5797, magnitude: 4.51, spectralType: 'F' },
        { ra: 311.795, dec: 34.3742, magnitude: 4.92, spectralType: 'K' },
        { ra: 311.3225, dec: 61.8389, magnitude: 3.43, spectralType: 'K' },  // 3Eta Cep
        { ra: 311.6604, dec: 46.5317, magnitude: 6.3, spectralType: 'A' },
        { ra: 312.9096, dec: -62.4292, magnitude: 6.28, spectralType: 'A' },
        { ra: 312.9117, dec: -62.4292, magnitude: 6.59, spectralType: 'A' },
        { ra: 312.3233, dec: -25.7814, magnitude: 5.86, spectralType: 'B' },
        { ra: 311.5883, dec: 52.9953, magnitude: 6.33, spectralType: 'K' },
        { ra: 311.8521, dec: 36.4908, magnitude: 4.53, spectralType: 'B' },  // 54Lam Cyg
        { ra: 312.3354, dec: -18.0358, magnitude: 6.21, spectralType: 'K' },
        { ra: 312.4921, dec: -33.7797, magnitude: 4.9, spectralType: 'G' },  // Alp Mic
        { ra: 311.8367, dec: 45.5797, magnitude: 6.4, spectralType: 'K' },
        { ra: 311.1379, dec: 69.7519, magnitude: 6.41, spectralType: 'G' },
        { ra: 312.8754, dec: -51.6083, magnitude: 5.05, spectralType: 'K' },  // Iot Ind
        { ra: 311.9554, dec: 47.8319, magnitude: 5.57, spectralType: 'K' },
        { ra: 312.6963, dec: -32.0544, magnitude: 6.36, spectralType: 'K' },
        { ra: 312.7529, dec: -37.9133, magnitude: 5.52, spectralType: 'K' },
        { ra: 311.97, dec: 52.4072, magnitude: 6.27, spectralType: 'G' },
        { ra: 312.4075, dec: 12.5453, magnitude: 5.98, spectralType: 'F' },  // 15 Del
        { ra: 312.4513, dec: 7.8642, magnitude: 6.33, spectralType: 'A' },  // 14 Del
        { ra: 312.4963, dec: 5.5447, magnitude: 6.21, spectralType: 'K' },
        { ra: 312.6742, dec: -12.545, magnitude: 5.88, spectralType: 'K' },
        { ra: 312.2346, dec: 46.1142, magnitude: 4.84, spectralType: 'B' },  // 55 Cyg
        { ra: 312.1779, dec: 51.9106, magnitude: 6.29, spectralType: 'B' },
        { ra: 312.995, dec: -33.1772, magnitude: 6.04, spectralType: 'A' },  // Bet Mic
        { ra: 312.9554, dec: -26.9192, magnitude: 4.11, spectralType: 'M' },  // 18Ome Cap
        { ra: 312.6542, dec: 18.0514, magnitude: 6.52, spectralType: 'A' },
        { ra: 312.8571, dec: -5.6264, magnitude: 5.99, spectralType: 'F' },  // 4 Aqr
        { ra: 312.4779, dec: 46.6611, magnitude: 6.33, spectralType: 'B' },
        { ra: 312.5204, dec: 44.0594, magnitude: 5.04, spectralType: 'A' },  // 56 Cyg
        { ra: 313.0362, dec: -5.5069, magnitude: 5.55, spectralType: 'B' },  // 5 Aqr
        { ra: 313.7025, dec: -58.4542, magnitude: 3.65, spectralType: 'K' },  // Bet Ind
        { ra: 313.4175, dec: -39.81, magnitude: 5.35, spectralType: 'K' },
        { ra: 312.8675, dec: 28.2506, magnitude: 5.77, spectralType: 'F' },
        { ra: 313.255, dec: -23.7831, magnitude: 6.33, spectralType: 'K' },
        { ra: 313.1633, dec: -8.9833, magnitude: 4.73, spectralType: 'A' },  // 6Mu Aqr
        { ra: 313.3542, dec: -30.7186, magnitude: 6.35, spectralType: 'K' },
        { ra: 313.6458, dec: -50.7278, magnitude: 6.24, spectralType: 'B' },
        { ra: 312.3225, dec: 64.0422, magnitude: 6.45, spectralType: 'B' },
        { ra: 313.2733, dec: -11.5736, magnitude: 6.38, spectralType: 'G' },
        { ra: 313.0321, dec: 27.0969, magnitude: 4.59, spectralType: 'G' },  // 31 Vul
        { ra: 313.0012, dec: 32.8492, magnitude: 6.44, spectralType: 'B' },
        { ra: 313.5283, dec: -27.9256, magnitude: 6.41, spectralType: 'M' },
        { ra: 313.4933, dec: -6.8897, magnitude: 6.44, spectralType: 'F' },
        { ra: 313.2808, dec: 29.6494, magnitude: 6.34, spectralType: 'K' },
        { ra: 313.6996, dec: -17.9231, magnitude: 5.78, spectralType: 'K' },  // 19 Cap
        { ra: 313.3117, dec: 44.3872, magnitude: 4.78, spectralType: 'B' },  // 57 Cyg
        { ra: 310.6467, dec: 82.5311, magnitude: 5.75, spectralType: 'A' },  // 76 Dra
        { ra: 313.3275, dec: 45.1819, magnitude: 5.45, spectralType: 'K' },
        { ra: 313.36, dec: 42.4103, magnitude: 6.66, spectralType: 'A' },
        { ra: 313.4746, dec: 33.4378, magnitude: 5.47, spectralType: 'K' },
        { ra: 313.7837, dec: -1.3733, magnitude: 6.55, spectralType: 'A' },
        { ra: 313.5933, dec: 28.5219, magnitude: 6.56, spectralType: 'B' },
        { ra: 313.64, dec: 28.0575, magnitude: 5.01, spectralType: 'K' },  // 32 Vul
        { ra: 313.5929, dec: 40.7031, magnitude: 6.7, spectralType: 'B' },
        { ra: 313.9196, dec: 4.5328, magnitude: 6.05, spectralType: 'G' },
        { ra: 313.9029, dec: 13.7214, magnitude: 5.17, spectralType: 'K' },  // 17 Del
        { ra: 313.9108, dec: 12.5686, magnitude: 5.58, spectralType: 'A' },  // 16 Del
        { ra: 314.1971, dec: -26.2964, magnitude: 5.7, spectralType: 'F' },
        { ra: 314.0763, dec: -3.5614, magnitude: 6.57, spectralType: 'B' },
        { ra: 314.225, dec: -9.6975, magnitude: 5.51, spectralType: 'K' },  // 7 Aqr
        { ra: 311.8892, dec: 80.5522, magnitude: 5.39, spectralType: 'K' },
        { ra: 314.2942, dec: 0.4636, magnitude: 6.05, spectralType: 'K' },
        { ra: 314.4192, dec: -16.0317, magnitude: 5.87, spectralType: 'A' },
        { ra: 315.3671, dec: -68.2097, magnitude: 6.37, spectralType: 'A' },
        { ra: 313.9575, dec: 47.4178, magnitude: 5.67, spectralType: 'B' },
        { ra: 316.1792, dec: -77.0239, magnitude: 5.15, spectralType: 'A' },  // Alp Oct
        { ra: 314.0538, dec: 51.075, magnitude: 6.63, spectralType: 'B' },
        { ra: 314.1446, dec: 44.925, magnitude: 5.96, spectralType: 'O' },
        { ra: 314.6746, dec: -14.4828, magnitude: 6.01, spectralType: 'F' },
        { ra: 314.1062, dec: 50.7286, magnitude: 5.81, spectralType: 'F' },
        { ra: 314.1079, dec: 49.1958, magnitude: 5.9, spectralType: 'G' },
        { ra: 315.0896, dec: -51.2653, magnitude: 5.76, spectralType: 'F' },
        { ra: 314.2933, dec: 41.1672, magnitude: 3.94, spectralType: 'A' },  // 58Nu Cyg
        { ra: 314.0708, dec: 56.8875, magnitude: 6.23, spectralType: 'B' },
        { ra: 314.6079, dec: 10.8392, magnitude: 5.48, spectralType: 'G' },  // 18 Del
        { ra: 314.9988, dec: -36.1297, magnitude: 6.11, spectralType: 'F' },
        { ra: 314.5683, dec: 22.3258, magnitude: 5.31, spectralType: 'K' },  // 33 Vul
        { ra: 314.9004, dec: -19.0353, magnitude: 6.25, spectralType: 'B' },  // 20 Cap
        { ra: 314.7683, dec: 4.2936, magnitude: 5.23, spectralType: 'F' },  // 1Eps Equ
        { ra: 314.5812, dec: 44.4717, magnitude: 5.55, spectralType: 'K' },
        { ra: 314.6283, dec: 41.9403, magnitude: 6.16, spectralType: 'B' },
        { ra: 314.9617, dec: 16.8242, magnitude: 6.66, spectralType: 'F' },
        { ra: 315.0163, dec: 7.5164, magnitude: 5.99, spectralType: 'F' },
        { ra: 315.3229, dec: -32.2578, magnitude: 4.67, spectralType: 'G' },  // Gam Mic
        { ra: 314.6254, dec: 50.4622, magnitude: 5.61, spectralType: 'B' },
        { ra: 315.1408, dec: -4.7303, magnitude: 6.21, spectralType: 'G' },  // 11 Aqr
        { ra: 315.5525, dec: -43.0019, magnitude: 6.64, spectralType: 'G' },
        { ra: 313.6846, dec: 75.9256, magnitude: 6.05, spectralType: 'G' },
        { ra: 315.1154, dec: 19.3294, magnitude: 5.65, spectralType: 'M' },
        { ra: 315.4387, dec: -26.8811, magnitude: 6.05, spectralType: 'A' },
        { ra: 315.6133, dec: -38.5306, magnitude: 5.94, spectralType: 'K' },
        { ra: 314.9567, dec: 47.5211, magnitude: 4.74, spectralType: 'B' },  // 59 Cyg
        { ra: 315.7417, dec: -38.6317, magnitude: 5.3, spectralType: 'F' },  // Zet Mic
        { ra: 314.8558, dec: 59.4386, magnitude: 5.51, spectralType: 'K' },
        { ra: 315.7925, dec: -27.7319, magnitude: 6.25, spectralType: 'K' },
        { ra: 315.3038, dec: 36.0261, magnitude: 5.97, spectralType: 'G' },
        { ra: 317.1996, dec: -76.2125, magnitude: 6.58, spectralType: 'K' },
        { ra: 315.2954, dec: 46.1558, magnitude: 5.37, spectralType: 'B' },  // 60 Cyg
        { ra: 315.7483, dec: -0.9247, magnitude: 6.5, spectralType: 'B' },
        { ra: 316.3092, dec: -54.7272, magnitude: 5.16, spectralType: 'K' },  // Mu Ind
        { ra: 315.7625, dec: 1.5319, magnitude: 6.25, spectralType: 'F' },
        { ra: 315.7575, dec: 14.73, magnitude: 6.31, spectralType: 'M' },
        { ra: 316.0192, dec: -5.8233, magnitude: 7.31, spectralType: 'A' },  // 12 Aqr
        { ra: 316.0196, dec: -5.8231, magnitude: 5.89, spectralType: 'G' },  // 12 Aqr
        { ra: 316.1012, dec: -19.855, magnitude: 4.84, spectralType: 'A' },  // 22Eta Cap
        { ra: 317.3429, dec: -73.1731, magnitude: 5.68, spectralType: 'F' },
        { ra: 315.6004, dec: 44.7911, magnitude: 6.19, spectralType: 'G' },
        { ra: 315.77, dec: 38.6575, magnitude: 6.07, spectralType: 'G' },
        { ra: 315.7021, dec: 45.8489, magnitude: 6.48, spectralType: 'B' },
        { ra: 315.5379, dec: 56.6697, magnitude: 5.83, spectralType: 'B' },
        { ra: 316.1446, dec: 5.5028, magnitude: 5.61, spectralType: 'K' },  // 3 Equ
        { ra: 316.1737, dec: 2.9419, magnitude: 6.42, spectralType: 'K' },
        { ra: 316.1892, dec: 2.2697, magnitude: 6.33, spectralType: 'G' },
        { ra: 316.6063, dec: -41.3861, magnitude: 5.53, spectralType: 'K' },  // Eta Mic
        { ra: 316.505, dec: -30.125, magnitude: 5.68, spectralType: 'K' },  // Del Mic
        { ra: 315.9671, dec: 41.6281, magnitude: 6.33, spectralType: 'F' },
        { ra: 315.8583, dec: 50.3519, magnitude: 6.37, spectralType: 'K' },
        { ra: 317.1371, dec: -63.9289, magnitude: 5.76, spectralType: 'K' },
        { ra: 315.9304, dec: 46.8619, magnitude: 6.32, spectralType: 'F' },
        { ra: 316.4867, dec: -17.2328, magnitude: 4.07, spectralType: 'A' },  // 23The Cap
        { ra: 316.6029, dec: -32.3417, magnitude: 5.18, spectralType: 'K' },
        { ra: 316.3612, dec: 5.9583, magnitude: 5.94, spectralType: 'F' },  // 4 Equ
        { ra: 315.9483, dec: 53.2861, magnitude: 5.9, spectralType: 'K' },
        { ra: 316.2329, dec: 43.9278, magnitude: 3.72, spectralType: 'K' },  // 62Xi Cyg
        { ra: 316.7821, dec: -25.0058, magnitude: 4.5, spectralType: 'M' },  // 24 Cap
        { ra: 317.8363, dec: -72.5442, magnitude: 6.2, spectralType: 'K' },
        { ra: 316.5979, dec: 26.9244, magnitude: 6.12, spectralType: 'K' },
        { ra: 316.9358, dec: -17.4553, magnitude: 6.17, spectralType: 'A' },
        { ra: 316.6263, dec: 31.1847, magnitude: 5.82, spectralType: 'F' },
        { ra: 316.7275, dec: 38.7458, magnitude: 5.21, spectralType: 'K' },  // 61 Cyg
        { ra: 316.7304, dec: 38.7433, magnitude: 6.03, spectralType: 'K' },  // 61 Cyg
        { ra: 317.14, dec: -21.1936, magnitude: 5.3, spectralType: 'A' },  // 25Chi Cap
        { ra: 316.89, dec: 15.6586, magnitude: 6.34, spectralType: 'K' },
        { ra: 316.6504, dec: 47.6483, magnitude: 4.55, spectralType: 'K' },  // 63 Cyg
        { ra: 317.1175, dec: 6.9894, magnitude: 6.15, spectralType: 'K' },
        { ra: 317.3875, dec: -20.5564, magnitude: 6.25, spectralType: 'F' },  // 27 Cap
        { ra: 318.3354, dec: -70.1264, magnitude: 5.02, spectralType: 'M' },  // Omi Pav
        { ra: 317.3987, dec: -11.3717, magnitude: 4.51, spectralType: 'G' },  // 13Nu Aqr
        { ra: 317.1621, dec: 30.2058, magnitude: 5.59, spectralType: 'B' },
        { ra: 317.4929, dec: 2.9433, magnitude: 6.45, spectralType: 'F' },
        { ra: 317.6954, dec: -9.3539, magnitude: 6.27, spectralType: 'K' },
        { ra: 317.5854, dec: 10.1317, magnitude: 4.69, spectralType: 'F' },  // 5Gam Equ
        { ra: 317.63, dec: 10.0489, magnitude: 6.07, spectralType: 'A' },  // 6 Equ
        { ra: 316.5971, dec: 71.4319, magnitude: 5.87, spectralType: 'F' },
        { ra: 318.0567, dec: -40.2694, magnitude: 5.83, spectralType: 'F' },
        { ra: 317.6333, dec: 22.4547, magnitude: 6.68, spectralType: 'A' },
        { ra: 317.9221, dec: -14.4722, magnitude: 6.48, spectralType: 'F' },
        { ra: 317.4942, dec: 45.5025, magnitude: 6.63, spectralType: 'B' },
        { ra: 318.2629, dec: -39.4253, magnitude: 5.26, spectralType: 'F' },
        { ra: 317.7663, dec: 36.2992, magnitude: 6.54, spectralType: 'B' },
        { ra: 317.565, dec: 53.5633, magnitude: 5.73, spectralType: 'B' },
        { ra: 317.6292, dec: 47.6919, magnitude: 6.46, spectralType: 'B' },
        { ra: 318.3287, dec: -36.4239, magnitude: 5.96, spectralType: 'K' },
        { ra: 317.3704, dec: 63.2956, magnitude: 6.54, spectralType: 'B' },
        { ra: 318.3221, dec: -27.6194, magnitude: 5.42, spectralType: 'K' },
        { ra: 319.5671, dec: -75.3467, magnitude: 6.63, spectralType: 'A' },
        { ra: 316.3721, dec: 78.1264, magnitude: 5.91, spectralType: 'B' },
        { ra: 317.3833, dec: 68.4903, magnitude: 7.33, spectralType: 'M' },
        { ra: 318.9413, dec: -53.2631, magnitude: 5.75, spectralType: 'A' },
        { ra: 318.2342, dec: 30.2269, magnitude: 3.2, spectralType: 'G' },  // 64Zet Cyg
        { ra: 318.37, dec: 15.9825, magnitude: 6.27, spectralType: 'A' },
        { ra: 318.8113, dec: -40.5064, magnitude: 6.21, spectralType: 'K' },
        { ra: 318.5696, dec: -10.6053, magnitude: 6.77, spectralType: 'B' },
        { ra: 317.9508, dec: 59.9864, magnitude: 5.64, spectralType: 'B' },
        { ra: 318.3596, dec: 36.6336, magnitude: 6.05, spectralType: 'F' },
        { ra: 318.6542, dec: 0.0922, magnitude: 6.38, spectralType: 'M' },
        { ra: 318.7775, dec: -17.345, magnitude: 6.04, spectralType: 'G' },
        { ra: 318.6204, dec: 10.0069, magnitude: 4.49, spectralType: 'F' },  // 7Del Equ
        { ra: 318.945, dec: -36.2108, magnitude: 6.12, spectralType: 'K' },
        { ra: 319.5013, dec: -64.6817, magnitude: 6.31, spectralType: 'B' },
        { ra: 318.5429, dec: 29.9011, magnitude: 6.17, spectralType: 'G' },
        { ra: 318.9079, dec: -20.6517, magnitude: 5.24, spectralType: 'G' },  // 28Phi Cap
        { ra: 318.9371, dec: -15.1714, magnitude: 5.28, spectralType: 'M' },  // 29 Cap
        { ra: 323.0175, dec: -84.81, magnitude: 6.45, spectralType: 'K' },
        { ra: 318.6979, dec: 38.0456, magnitude: 3.72, spectralType: 'F' },  // 65Tau Cyg
        { ra: 318.9558, dec: 5.2478, magnitude: 3.92, spectralType: 'G' },  // 8Alp Equ
        { ra: 319.165, dec: -1.6078, magnitude: 6.48, spectralType: 'K' },
        { ra: 318.4275, dec: 64.4039, magnitude: 6.39, spectralType: 'G' },
        { ra: 319.3063, dec: -13.2789, magnitude: 6.4, spectralType: 'A' },
        { ra: 319.4846, dec: -32.1725, magnitude: 4.71, spectralType: 'A' },  // Eps Mic
        { ra: 318.9033, dec: 47.9736, magnitude: 6.46, spectralType: 'B' },
        { ra: 319.4887, dec: -17.9853, magnitude: 5.43, spectralType: 'B' },  // 30 Cap
        { ra: 319.1233, dec: 42.2514, magnitude: 6.43, spectralType: 'K' },
        { ra: 319.5654, dec: -17.4622, magnitude: 7.05, spectralType: 'F' },  // 31 Cap
        { ra: 319.9667, dec: -53.4497, magnitude: 4.39, spectralType: 'A' },  // The Ind
        { ra: 319.5462, dec: -4.5194, magnitude: 5.82, spectralType: 'B' },  // 15 Aqr
        { ra: 319.7267, dec: -28.7656, magnitude: 6.4, spectralType: 'G' },
        { ra: 319.3542, dec: 39.3947, magnitude: 4.23, spectralType: 'B' },  // 67Sig Cyg
        { ra: 319.3467, dec: 42.6833, magnitude: 6.19, spectralType: 'B' },
        { ra: 320.0396, dec: -45.0222, magnitude: 6.0, spectralType: 'G' },
        { ra: 319.4796, dec: 34.8969, magnitude: 4.43, spectralType: 'B' },  // 66Ups Cyg
        { ra: 319.2583, dec: 53.9975, magnitude: 6.13, spectralType: 'A' },
        { ra: 319.9408, dec: -26.3531, magnitude: 6.56, spectralType: 'G' },
        { ra: 319.7167, dec: 11.2033, magnitude: 5.96, spectralType: 'K' },
        { ra: 319.3096, dec: 55.7981, magnitude: 5.98, spectralType: 'K' },
        { ra: 320.19, dec: -40.8097, magnitude: 4.82, spectralType: 'A' },  // The1Mic
        { ra: 320.3183, dec: -49.9378, magnitude: 6.38, spectralType: 'K' },
        { ra: 319.3283, dec: 58.6117, magnitude: 6.42, spectralType: 'B' },
        { ra: 319.6133, dec: 43.9458, magnitude: 5.0, spectralType: 'O' },  // 68 Cyg
        { ra: 319.7304, dec: 41.0408, magnitude: 6.15, spectralType: 'A' },
        { ra: 321.0696, dec: -69.7342, magnitude: 6.41, spectralType: 'G' },
        { ra: 319.8425, dec: 38.2375, magnitude: 5.83, spectralType: 'F' },
        { ra: 320.0583, dec: 22.0264, magnitude: 6.29, spectralType: 'B' },
        { ra: 321.3254, dec: -71.7994, magnitude: 6.09, spectralType: 'K' },
        { ra: 320.2679, dec: -4.56, magnitude: 5.87, spectralType: 'G' },  // 16 Aqr
        { ra: 319.87, dec: 49.5103, magnitude: 5.76, spectralType: 'B' },
        { ra: 319.645, dec: 62.5856, magnitude: 2.44, spectralType: 'A' },  // 5Alp Cep
        { ra: 320.27, dec: 7.3544, magnitude: 5.82, spectralType: 'M' },  // 9 Equ
        { ra: 319.8158, dec: 58.6236, magnitude: 5.66, spectralType: 'M' },
        { ra: 320.2683, dec: 23.8558, magnitude: 5.57, spectralType: 'K' },
        { ra: 320.2088, dec: 32.4528, magnitude: 5.68, spectralType: 'G' },
        { ra: 320.5617, dec: -16.8344, magnitude: 4.28, spectralType: 'G' },  // 32Iot Cap
        { ra: 318.9258, dec: 77.0122, magnitude: 5.95, spectralType: 'K' },
        { ra: 320.3417, dec: 32.6128, magnitude: 6.04, spectralType: 'A' },
        { ra: 320.2558, dec: 40.3456, magnitude: 6.4, spectralType: 'F' },
        { ra: 319.8425, dec: 64.8719, magnitude: 5.18, spectralType: 'B' },  // 6 Cep
        { ra: 320.7521, dec: -22.6689, magnitude: 5.6, spectralType: 'M' },
        { ra: 320.5217, dec: 19.8044, magnitude: 4.08, spectralType: 'K' },  // 1 Peg
        { ra: 318.3396, dec: 81.2308, magnitude: 6.15, spectralType: 'A' },
        { ra: 320.7346, dec: -9.3194, magnitude: 5.99, spectralType: 'M' },  // 17 Aqr
        { ra: 323.4767, dec: -82.6831, magnitude: 6.38, spectralType: 'B' },
        { ra: 321.0867, dec: -46.615, magnitude: 6.31, spectralType: 'A' },
        { ra: 320.7233, dec: 6.8111, magnitude: 5.16, spectralType: 'A' },  // 10Bet Equ
        { ra: 320.1396, dec: 60.7569, magnitude: 6.11, spectralType: 'G' },
        { ra: 321.1033, dec: -41.0067, magnitude: 5.77, spectralType: 'A' },  // The2Mic
        { ra: 321.6108, dec: -65.3661, magnitude: 4.22, spectralType: 'F' },  // Gam Pav
        { ra: 320.6746, dec: 30.3097, magnitude: 6.05, spectralType: 'K' },
        { ra: 321.04, dec: -20.8519, magnitude: 5.41, spectralType: 'K' },  // 33 Cap
        { ra: 321.0329, dec: -22.7469, magnitude: 6.38, spectralType: 'K' },
        { ra: 320.5017, dec: 49.3889, magnitude: 5.69, spectralType: 'K' },
        { ra: 320.6954, dec: 38.6342, magnitude: 6.63, spectralType: 'A' },
        { ra: 321.0479, dec: -12.8781, magnitude: 5.49, spectralType: 'F' },  // 18 Aqr
        { ra: 321.5642, dec: -54.6606, magnitude: 6.12, spectralType: 'F' },  // Gam Ind
        { ra: 320.8458, dec: 37.4067, magnitude: 6.58, spectralType: 'F' },
        { ra: 320.995, dec: 24.2742, magnitude: 5.71, spectralType: 'F' },
        { ra: 321.1025, dec: 10.1742, magnitude: 6.35, spectralType: 'F' },
        { ra: 321.2154, dec: -3.3983, magnitude: 6.36, spectralType: 'F' },  // 20 Aqr
        { ra: 320.9513, dec: 37.3514, magnitude: 6.47, spectralType: 'K' },
        { ra: 321.0308, dec: 25.3122, magnitude: 6.15, spectralType: 'A' },
        { ra: 321.3046, dec: -9.7486, magnitude: 5.7, spectralType: 'F' },  // 19 Aqr
        { ra: 322.1871, dec: -69.5053, magnitude: 5.34, spectralType: 'M' },
        { ra: 321.0962, dec: 24.5289, magnitude: 6.32, spectralType: 'K' },
        { ra: 321.1417, dec: 26.1744, magnitude: 5.68, spectralType: 'A' },
        { ra: 321.3208, dec: -3.5567, magnitude: 5.49, spectralType: 'K' },  // 21 Aqr
        { ra: 321.5954, dec: -37.8294, magnitude: 5.63, spectralType: 'K' },
        { ra: 323.3358, dec: -80.0392, magnitude: 6.47, spectralType: 'A' },
        { ra: 321.7567, dec: -42.5478, magnitude: 5.51, spectralType: 'A' },
        { ra: 321.4646, dec: 0.5344, magnitude: 6.46, spectralType: 'A' },
        { ra: 321.6667, dec: -22.4114, magnitude: 3.74, spectralType: 'G' },  // 34Zet Cap
        { ra: 321.6171, dec: 1.1033, magnitude: 6.13, spectralType: 'F' },
        { ra: 321.2312, dec: 49.3233, magnitude: 6.58, spectralType: 'B' },
        { ra: 321.8117, dec: -21.1961, magnitude: 5.78, spectralType: 'K' },  // 35 Cap
        { ra: 321.3317, dec: 46.7144, magnitude: 5.6, spectralType: 'F' },
        { ra: 321.4458, dec: 36.6675, magnitude: 5.94, spectralType: 'B' },  // 69 Cyg
        { ra: 321.6113, dec: 19.3756, magnitude: 6.07, spectralType: 'A' },
        { ra: 322.2513, dec: -53.7058, magnitude: 6.39, spectralType: 'K' },
        { ra: 322.0579, dec: -11.5683, magnitude: 6.61, spectralType: 'F' },
        { ra: 322.1808, dec: -21.8072, magnitude: 4.51, spectralType: 'G' },  // 36 Cap
        { ra: 322.2658, dec: -31.2386, magnitude: 6.5, spectralType: 'A' },  // 5 PsA
        { ra: 321.8392, dec: 37.1167, magnitude: 5.31, spectralType: 'B' },  // 70 Cyg
        { ra: 321.715, dec: 48.835, magnitude: 5.31, spectralType: 'A' },
        { ra: 321.9171, dec: 27.6086, magnitude: 5.41, spectralType: 'A' },  // 35 Vul
        { ra: 321.6875, dec: 52.8986, magnitude: 6.03, spectralType: 'B' },
        { ra: 322.1033, dec: 8.1956, magnitude: 6.4, spectralType: 'M' },
        { ra: 322.0346, dec: 32.2253, magnitude: 5.8, spectralType: 'F' },
        { ra: 322.2496, dec: 17.9058, magnitude: 6.44, spectralType: 'K' },
        { ra: 322.4983, dec: -19.1478, magnitude: 6.57, spectralType: 'F' },
        { ra: 322.2496, dec: 22.1794, magnitude: 5.93, spectralType: 'M' },
        { ra: 321.8554, dec: 59.75, magnitude: 6.1, spectralType: 'M' },
        { ra: 322.4871, dec: 23.6389, magnitude: 4.57, spectralType: 'M' },  // 2 Peg
        { ra: 322.2196, dec: 55.4186, magnitude: 6.12, spectralType: 'B' },
        { ra: 321.9421, dec: 66.8092, magnitude: 5.44, spectralType: 'B' },  // 7 Cep
        { ra: 322.3625, dec: 46.5406, magnitude: 5.24, spectralType: 'K' },  // 71 Cyg
        { ra: 323.0246, dec: -41.1792, magnitude: 5.29, spectralType: 'K' },  // Xi Gru
        { ra: 323.0608, dec: -33.9447, magnitude: 5.97, spectralType: 'A' },  // 6 PsA
        { ra: 322.79, dec: 12.1375, magnitude: 6.08, spectralType: 'B' },
        { ra: 322.8896, dec: -5.5711, magnitude: 2.91, spectralType: 'G' },  // 22Bet Aqr
        { ra: 323.3238, dec: -52.7375, magnitude: 6.41, spectralType: 'K' },
        { ra: 324.7342, dec: -79.4425, magnitude: 6.18, spectralType: 'F' },
        { ra: 323.1388, dec: -24.5906, magnitude: 6.43, spectralType: 'A' },
        { ra: 323.3479, dec: -44.8486, magnitude: 5.57, spectralType: 'K' },
        { ra: 322.585, dec: 52.9581, magnitude: 6.02, spectralType: 'A' },
        { ra: 322.165, dec: 70.5608, magnitude: 3.23, spectralType: 'B' },  // 8Bet Cep
        { ra: 321.2071, dec: 80.5247, magnitude: 5.97, spectralType: 'G' },
        { ra: 323.1129, dec: 23.3944, magnitude: 6.7, spectralType: 'B' },
        { ra: 323.5708, dec: -42.925, magnitude: 6.32, spectralType: 'K' },
        { ra: 322.8646, dec: 52.62, magnitude: 6.16, spectralType: 'G' },
        { ra: 322.7471, dec: 60.4594, magnitude: 5.53, spectralType: 'B' },
        { ra: 323.7208, dec: -29.6961, magnitude: 6.41, spectralType: 'B' },
        { ra: 323.7125, dec: -20.0844, magnitude: 5.69, spectralType: 'F' },  // 37 Cap
        { ra: 323.2358, dec: 49.9778, magnitude: 5.75, spectralType: 'A' },
        { ra: 323.8162, dec: -23.4542, magnitude: 6.4, spectralType: 'G' },
        { ra: 323.3246, dec: 45.8542, magnitude: 6.25, spectralType: 'K' },
        { ra: 324.5121, dec: -64.8242, magnitude: 6.2, spectralType: 'A' },
        { ra: 323.6417, dec: 22.7547, magnitude: 6.47, spectralType: 'F' },
        { ra: 323.8233, dec: -3.9831, magnitude: 5.77, spectralType: 'G' },
        { ra: 323.4954, dec: 45.5919, magnitude: 4.02, spectralType: 'G' },  // 73Rho Cyg
        { ra: 324.0458, dec: -26.1714, magnitude: 5.73, spectralType: 'A' },  // 8 PsA
        { ra: 325.3687, dec: -77.39, magnitude: 3.76, spectralType: 'K' },  // Nu Oct
        { ra: 323.6942, dec: 38.5342, magnitude: 4.9, spectralType: 'K' },  // 72 Cyg
        { ra: 324.2038, dec: -33.0481, magnitude: 6.11, spectralType: 'A' },  // 7 PsA
        { ra: 323.8292, dec: 28.1972, magnitude: 6.31, spectralType: 'F' },
        { ra: 323.8625, dec: 24.4522, magnitude: 6.11, spectralType: 'A' },
        { ra: 323.6146, dec: 51.6983, magnitude: 6.15, spectralType: 'B' },
        { ra: 324.27, dec: -19.4661, magnitude: 4.68, spectralType: 'B' },  // 39Eps Cap
        { ra: 324.0579, dec: 30.0556, magnitude: 6.36, spectralType: 'G' },
        { ra: 324.01, dec: 45.3747, magnitude: 5.53, spectralType: 'M' },
        { ra: 324.3908, dec: -0.3903, magnitude: 6.25, spectralType: 'A' },
        { ra: 324.4379, dec: -7.8542, magnitude: 4.69, spectralType: 'A' },  // 23Xi Aqr
        { ra: 324.4321, dec: 6.6183, magnitude: 6.18, spectralType: 'A' },  // 3 Peg
        { ra: 324.2375, dec: 40.4136, magnitude: 5.01, spectralType: 'A' },  // 74 Cyg
        { ra: 324.4392, dec: 19.3186, magnitude: 5.45, spectralType: 'F' },  // 5 Peg
        { ra: 324.7754, dec: -33.6792, magnitude: 6.28, spectralType: 'G' },
        { ra: 324.9987, dec: -52.3592, magnitude: 6.21, spectralType: 'F' },
        { ra: 324.6329, dec: 5.7717, magnitude: 5.67, spectralType: 'A' },  // 4 Peg
        { ra: 325.14, dec: -55.7375, magnitude: 6.33, spectralType: 'K' },
        { ra: 324.3663, dec: 44.6967, magnitude: 6.2, spectralType: 'A' },
        { ra: 324.8671, dec: -10.5769, magnitude: 6.08, spectralType: 'K' },
        { ra: 324.6875, dec: 25.4989, magnitude: 6.16, spectralType: 'G' },
        { ra: 324.4113, dec: 54.0422, magnitude: 6.15, spectralType: 'K' },
        { ra: 324.7546, dec: 20.2653, magnitude: 5.85, spectralType: 'F' },
        { ra: 324.8888, dec: 2.2436, magnitude: 5.1, spectralType: 'K' },  // 25 Aqr
        { ra: 325.0229, dec: -16.6622, magnitude: 3.68, spectralType: 'F' },  // 40Gam Cap
        { ra: 324.48, dec: 62.0819, magnitude: 4.73, spectralType: 'B' },  // 9 Cep
        { ra: 327.7262, dec: -82.7192, magnitude: 5.29, spectralType: 'G' },  // Lam Oct
        { ra: 324.74, dec: 57.4892, magnitude: 5.62, spectralType: 'O' },
        { ra: 325.4421, dec: -25.1019, magnitude: 6.49, spectralType: 'K' },
        { ra: 325.3871, dec: -14.0475, magnitude: 5.18, spectralType: 'G' },  // 42 Cap
        { ra: 325.0462, dec: 43.2739, magnitude: 5.11, spectralType: 'M' },  // 75 Cyg
        { ra: 325.5033, dec: -23.2628, magnitude: 5.24, spectralType: 'G' },  // 41 Cap
        { ra: 326.37, dec: -71.0089, magnitude: 6.01, spectralType: 'B' },
        { ra: 325.5421, dec: 1.2853, magnitude: 5.67, spectralType: 'K' },  // 26 Aqr
        { ra: 325.6646, dec: -18.8664, magnitude: 4.73, spectralType: 'G' },  // 43Kap Cap
        { ra: 325.5646, dec: 5.68, magnitude: 5.3, spectralType: 'M' },  // 7 Peg
        { ra: 325.1804, dec: 54.8722, magnitude: 6.2, spectralType: 'K' },
        { ra: 325.3929, dec: 40.8053, magnitude: 6.11, spectralType: 'A' },  // 76 Cyg
        { ra: 325.6375, dec: 10.8247, magnitude: 6.09, spectralType: 'B' },
        { ra: 325.8062, dec: -19.6208, magnitude: 6.22, spectralType: 'A' },
        { ra: 341.3692, dec: -88.8183, magnitude: 6.57, spectralType: 'F' },
        { ra: 325.7683, dec: -14.3997, magnitude: 5.88, spectralType: 'F' },  // 44 Cap
        { ra: 325.5046, dec: 35.5103, magnitude: 6.07, spectralType: 'G' },
        { ra: 325.535, dec: 45.7658, magnitude: 6.17, spectralType: 'M' },
        { ra: 326.1229, dec: -38.5525, magnitude: 6.3, spectralType: 'G' },
        { ra: 325.5954, dec: 41.0772, magnitude: 5.69, spectralType: 'A' },  // 77 Cyg
        { ra: 325.5237, dec: 51.1897, magnitude: 4.67, spectralType: 'B' },  // 80Pi 1Cyg
        { ra: 326.0042, dec: -14.7494, magnitude: 5.99, spectralType: 'F' },  // 45 Cap
        { ra: 326.3292, dec: -49.4986, magnitude: 6.45, spectralType: 'K' },
        { ra: 325.6621, dec: 49.6003, magnitude: 6.09, spectralType: 'G' },
        { ra: 326.2367, dec: -33.0258, magnitude: 4.34, spectralType: 'A' },  // 9Iot PsA
        { ra: 325.7767, dec: 41.155, magnitude: 5.49, spectralType: 'M' },
        { ra: 325.8571, dec: 38.2839, magnitude: 5.65, spectralType: 'A' },  // 79 Cyg
        { ra: 326.0467, dec: 9.875, magnitude: 2.39, spectralType: 'K' },  // 8Eps Peg
        { ra: 326.0358, dec: 28.7428, magnitude: 4.73, spectralType: 'F' },  // 78Mu 1Cyg
        { ra: 326.0346, dec: 28.7431, magnitude: 6.08, spectralType: 'G' },  // 78Mu 2Cyg
        { ra: 326.2512, dec: -9.0825, magnitude: 5.09, spectralType: 'G' },  // 46 Cap
        { ra: 325.6892, dec: 59.2711, magnitude: 6.08, spectralType: 'K' },
        { ra: 326.1279, dec: 17.35, magnitude: 4.34, spectralType: 'G' },  // 9 Peg
        { ra: 326.1304, dec: 14.7719, magnitude: 5.94, spectralType: 'G' },
        { ra: 326.1613, dec: 25.645, magnitude: 4.13, spectralType: 'F' },  // 10Kap Peg
        { ra: 325.8767, dec: 58.78, magnitude: 4.08, spectralType: 'M' },  // Mu Cep
        { ra: 325.4804, dec: 71.3114, magnitude: 4.56, spectralType: 'K' },  // 11 Cep
        { ra: 326.5679, dec: -9.2758, magnitude: 6.0, spectralType: 'M' },  // 47 Cap
        { ra: 326.6338, dec: -11.3658, magnitude: 5.58, spectralType: 'A' },  // 48Lam Cap
        { ra: 326.4354, dec: 35.8572, magnitude: 6.4, spectralType: 'G' },
        { ra: 326.5183, dec: 22.9489, magnitude: 5.29, spectralType: 'K' },  // 12 Peg
        { ra: 326.76, dec: -16.1272, magnitude: 2.87, spectralType: 'A' },  // 49Del Cap
        { ra: 327.0658, dec: -47.3036, magnitude: 5.58, spectralType: 'G' },
        { ra: 325.7667, dec: 72.3203, magnitude: 5.17, spectralType: 'K' },
        { ra: 326.6, dec: 25.5633, magnitude: 6.28, spectralType: 'K' },
        { ra: 326.9342, dec: -30.8983, magnitude: 5.01, spectralType: 'A' },  // 10The PsA
        { ra: 326.2221, dec: 62.4606, magnitude: 5.95, spectralType: 'O' },
        { ra: 326.8083, dec: 2.6861, magnitude: 5.64, spectralType: 'A' },  // 11 Peg
        { ra: 326.5692, dec: 43.0608, magnitude: 6.54, spectralType: 'G' },
        { ra: 326.7696, dec: 17.1942, magnitude: 6.21, spectralType: 'F' },
        { ra: 327.5004, dec: -64.7125, magnitude: 5.62, spectralType: 'K' },
        { ra: 326.9087, dec: -5.9172, magnitude: 6.17, spectralType: 'A' },
        { ra: 327.6963, dec: -69.6294, magnitude: 5.53, spectralType: 'K' },  // Omi Ind
        { ra: 326.3621, dec: 61.1208, magnitude: 4.29, spectralType: 'A' },  // 10Nu Cep
        { ra: 326.6983, dec: 49.3094, magnitude: 4.23, spectralType: 'B' },  // 81Pi 2Cyg
        { ra: 327.0346, dec: 36.5806, magnitude: 6.47, spectralType: 'K' },
        { ra: 327.4212, dec: -12.7231, magnitude: 6.31, spectralType: 'A' },
        { ra: 327.1225, dec: 38.6486, magnitude: 6.12, spectralType: 'B' },
        { ra: 326.8554, dec: 60.6928, magnitude: 5.52, spectralType: 'M' },  // 12 Cep
        { ra: 327.5546, dec: -16.8447, magnitude: 6.38, spectralType: 'K' },
        { ra: 327.3621, dec: 20.4625, magnitude: 6.29, spectralType: 'B' },
        { ra: 326.7542, dec: 70.1508, magnitude: 6.29, spectralType: 'A' },
        { ra: 327.4612, dec: 30.1742, magnitude: 5.04, spectralType: 'A' },  // 14 Peg
        { ra: 327.5362, dec: 17.2856, magnitude: 5.29, spectralType: 'F' },  // 13 Peg
        { ra: 327.4171, dec: 41.1489, magnitude: 6.48, spectralType: 'A' },
        { ra: 327.9242, dec: -18.6231, magnitude: 6.16, spectralType: 'F' },
        { ra: 327.3292, dec: 61.2728, magnitude: 6.17, spectralType: 'M' },
        { ra: 327.8925, dec: 19.8267, magnitude: 5.77, spectralType: 'B' },
        { ra: 327.7704, dec: 39.5367, magnitude: 6.17, spectralType: 'B' },
        { ra: 328.0758, dec: 21.2731, magnitude: 6.89, spectralType: 'M' },
        { ra: 328.3242, dec: -13.5517, magnitude: 5.08, spectralType: 'F' },  // 51Mu Cap
        { ra: 328.7979, dec: -61.8864, magnitude: 5.9, spectralType: 'F' },
        { ra: 328.4821, dec: -37.365, magnitude: 3.01, spectralType: 'B' },  // Gam Gru
        { ra: 328.1246, dec: 28.7933, magnitude: 5.53, spectralType: 'F' },  // 15 Peg
        { ra: 328.4, dec: -10.3117, magnitude: 6.59, spectralType: 'B' },
        { ra: 328.2658, dec: 25.925, magnitude: 5.08, spectralType: 'B' },  // 16 Peg
        { ra: 328.0042, dec: 55.7969, magnitude: 5.71, spectralType: 'B' },
        { ra: 328.4058, dec: 19.6683, magnitude: 5.68, spectralType: 'A' },
        { ra: 328.4908, dec: 6.8644, magnitude: 6.15, spectralType: 'G' },
        { ra: 328.5433, dec: -4.2761, magnitude: 5.71, spectralType: 'K' },
        { ra: 327.9054, dec: 65.7528, magnitude: 6.37, spectralType: 'A' },
        { ra: 329.0583, dec: -57.8994, magnitude: 6.19, spectralType: 'A' },  // Pi Ind
        { ra: 328.6496, dec: -3.3011, magnitude: 6.2, spectralType: 'F' },
        { ra: 328.5725, dec: 19.7183, magnitude: 6.39, spectralType: 'K' },
        { ra: 328.9817, dec: -30.6064, magnitude: 6.41, spectralType: 'G' },
        { ra: 329.095, dec: -37.2536, magnitude: 5.46, spectralType: 'A' },
        { ra: 329.2592, dec: -37.7469, magnitude: 6.18, spectralType: 'F' },
        { ra: 329.4796, dec: -54.9925, magnitude: 4.4, spectralType: 'F' },  // Del Ind
        { ra: 329.6254, dec: -59.0122, magnitude: 6.12, spectralType: 'F' },  // Kap1Ind
        { ra: 330.4671, dec: -77.6625, magnitude: 6.41, spectralType: 'A' },
        { ra: 328.7217, dec: 56.6114, magnitude: 5.8, spectralType: 'B' },  // 13 Cep
        { ra: 329.1, dec: 21.2397, magnitude: 6.4, spectralType: 'K' },
        { ra: 329.235, dec: 12.0764, magnitude: 5.54, spectralType: 'A' },  // 17 Peg
        { ra: 328.8363, dec: 61.5419, magnitude: 6.13, spectralType: 'G' },
        { ra: 328.8796, dec: 65.3208, magnitude: 5.86, spectralType: 'B' },
        { ra: 329.5554, dec: -5.4247, magnitude: 6.33, spectralType: 'F' },
        { ra: 329.2592, dec: 48.6686, magnitude: 6.42, spectralType: 'B' },
        { ra: 329.6825, dec: -21.1828, magnitude: 6.12, spectralType: 'M' },
        { ra: 329.8246, dec: -38.3953, magnitude: 5.5, spectralType: 'K' },
        { ra: 330.7658, dec: -76.1186, magnitude: 5.95, spectralType: 'F' },
        { ra: 330.1004, dec: -55.8828, magnitude: 6.01, spectralType: 'B' },
        { ra: 329.7292, dec: -4.3731, magnitude: 6.22, spectralType: 'K' },
        { ra: 329.1629, dec: 63.6256, magnitude: 4.91, spectralType: 'M' },
        { ra: 329.2962, dec: 66.1561, magnitude: 6.43, spectralType: 'B' },
        { ra: 330.0329, dec: 6.7175, magnitude: 6.0, spectralType: 'B' },  // 18 Peg
        { ra: 330.2092, dec: -28.4536, magnitude: 5.42, spectralType: 'B' },  // 12Eta PsA
        { ra: 330.84, dec: -56.7861, magnitude: 4.69, spectralType: 'K' },  // Eps Ind
        { ra: 329.7225, dec: 62.6983, magnitude: 5.93, spectralType: 'M' },
        { ra: 329.8458, dec: 57.6583, magnitude: 6.59, spectralType: 'A' },
        { ra: 330.2708, dec: 0.605, magnitude: 5.58, spectralType: 'K' },  // 28 Aqr
        { ra: 330.1117, dec: 33.0061, magnitude: 6.46, spectralType: 'F' },
        { ra: 330.2725, dec: 13.1197, magnitude: 5.6, spectralType: 'F' },  // 20 Peg
        { ra: 330.2883, dec: 8.2572, magnitude: 5.65, spectralType: 'K' },  // 19 Peg
        { ra: 330.5496, dec: -17.9036, magnitude: 6.28, spectralType: 'G' },
        { ra: 329.4625, dec: 74.9967, magnitude: 6.35, spectralType: 'K' },
        { ra: 330.6108, dec: -16.9642, magnitude: 6.37, spectralType: 'A' },  // 29 Aqr
        { ra: 330.5058, dec: 10.9739, magnitude: 6.37, spectralType: 'B' },
        { ra: 330.8217, dec: -29.9042, magnitude: 7.1, spectralType: 'F' },
        { ra: 330.1637, dec: 62.4881, magnitude: 6.66, spectralType: 'B' },
        { ra: 329.8125, dec: 73.18, magnitude: 5.03, spectralType: 'F' },  // 16 Cep
        { ra: 330.8183, dec: -6.5225, magnitude: 5.54, spectralType: 'K' },  // 30 Aqr
        { ra: 330.8288, dec: -2.1553, magnitude: 4.69, spectralType: 'B' },  // 31Omi Aqr
        { ra: 330.4608, dec: 52.8822, magnitude: 5.78, spectralType: 'B' },
        { ra: 330.8292, dec: 11.3864, magnitude: 5.8, spectralType: 'B' },  // 21 Peg
        { ra: 331.0996, dec: -29.9167, magnitude: 6.47, spectralType: 'K' },  // 13 PsA
        { ra: 330.5192, dec: 58.0006, magnitude: 5.56, spectralType: 'O' },  // 14 Cep
        { ra: 330.7363, dec: 44.65, magnitude: 5.6, spectralType: 'A' },
        { ra: 331.1533, dec: -26.8225, magnitude: 5.96, spectralType: 'B' },
        { ra: 331.4621, dec: -59.6361, magnitude: 5.62, spectralType: 'K' },  // Kap2Ind
        { ra: 331.1975, dec: -0.9067, magnitude: 5.3, spectralType: 'A' },  // 32 Aqr
        { ra: 331.5288, dec: -39.5433, magnitude: 4.46, spectralType: 'K' },  // Lam Gru
        { ra: 331.1433, dec: 32.9419, magnitude: 6.38, spectralType: 'G' },
        { ra: 331.42, dec: 5.0586, magnitude: 4.84, spectralType: 'K' },  // 22Nu Peg
        { ra: 331.4458, dec: -0.3197, magnitude: 2.96, spectralType: 'G' },  // 34Alp Aqr
        { ra: 331.2975, dec: 26.6739, magnitude: 5.78, spectralType: 'K' },
        { ra: 330.9704, dec: 63.1197, magnitude: 5.29, spectralType: 'M' },  // 18 Cep
        { ra: 330.9475, dec: 64.6278, magnitude: 4.29, spectralType: 'A' },  // 17Xi Cep
        { ra: 331.6092, dec: -13.8697, magnitude: 4.27, spectralType: 'B' },  // 33Iot Aqr
        { ra: 331.3946, dec: 28.9639, magnitude: 5.7, spectralType: 'B' },  // 23 Peg
        { ra: 332.6771, dec: -75.8806, magnitude: 6.55, spectralType: 'K' },
        { ra: 331.3183, dec: 46.7447, magnitude: 6.13, spectralType: 'M' },
        { ra: 331.4608, dec: 45.1122, magnitude: 6.44, spectralType: 'A' },
        { ra: 329.5529, dec: 82.8697, magnitude: 6.98, spectralType: 'F' },
        { ra: 331.5083, dec: 45.0144, magnitude: 5.14, spectralType: 'K' },
        { ra: 332.0583, dec: -46.9611, magnitude: 1.74, spectralType: 'B' },  // Alp Gru
        { ra: 331.2521, dec: 62.7856, magnitude: 5.27, spectralType: 'K' },  // 20 Cep
        { ra: 331.4633, dec: 48.2317, magnitude: 6.27, spectralType: 'B' },
        { ra: 331.2871, dec: 62.28, magnitude: 5.11, spectralType: 'O' },  // 19 Cep
        { ra: 331.5517, dec: 45.2486, magnitude: 6.19, spectralType: 'A' },
        { ra: 331.7529, dec: 25.345, magnitude: 3.76, spectralType: 'F' },  // 24Iot Peg
        { ra: 332.0958, dec: -32.9886, magnitude: 4.5, spectralType: 'A' },  // 14Mu PsA
        { ra: 332.9804, dec: -76.1161, magnitude: 6.15, spectralType: 'K' },
        { ra: 332.1083, dec: -34.0439, magnitude: 4.99, spectralType: 'M' },  // Ups PsA
        { ra: 331.5563, dec: 56.3431, magnitude: 6.39, spectralType: 'A' },
        { ra: 331.8692, dec: 19.4756, magnitude: 5.75, spectralType: 'F' },
        { ra: 331.875, dec: 18.0006, magnitude: 6.35, spectralType: 'M' },
        { ra: 332.1779, dec: -33.1256, magnitude: 6.37, spectralType: 'A' },
        { ra: 331.9596, dec: 21.7028, magnitude: 5.78, spectralType: 'B' },  // 25 Peg
        { ra: 332.2458, dec: -18.5197, magnitude: 5.81, spectralType: 'B' },  // 35 Aqr
        { ra: 332.4917, dec: -48.1072, magnitude: 6.43, spectralType: 'K' },
        { ra: 332.0717, dec: 25.5436, magnitude: 6.11, spectralType: 'F' },
        { ra: 331.79, dec: 58.8408, magnitude: 6.32, spectralType: 'G' },
        { ra: 331.8563, dec: 53.3072, magnitude: 6.14, spectralType: 'A' },
        { ra: 332.4821, dec: -34.0147, magnitude: 5.37, spectralType: 'A' },
        { ra: 332.0687, dec: 49.7964, magnitude: 6.42, spectralType: 'K' },
        { ra: 332.5004, dec: -28.2925, magnitude: 6.44, spectralType: 'A' },
        { ra: 332.5367, dec: -32.5483, magnitude: 4.92, spectralType: 'F' },  // 15Tau PsA
        { ra: 332.1708, dec: 45.7419, magnitude: 6.11, spectralType: 'G' },
        { ra: 332.3067, dec: 33.1722, magnitude: 5.58, spectralType: 'G' },  // 27Pi 1Peg
        { ra: 332.55, dec: 6.1978, magnitude: 3.53, spectralType: 'A' },  // 26The Peg
        { ra: 332.5879, dec: -3.8942, magnitude: 6.27, spectralType: 'A' },
        { ra: 332.6563, dec: -11.565, magnitude: 5.46, spectralType: 'B' },  // 38 Aqr
        { ra: 332.6408, dec: -4.2672, magnitude: 6.01, spectralType: 'K' },
        { ra: 332.4967, dec: 33.1783, magnitude: 4.29, spectralType: 'F' },  // 29Pi 2Peg
        { ra: 332.5792, dec: 19.6169, magnitude: 6.18, spectralType: 'G' },
        { ra: 332.5925, dec: 14.63, magnitude: 6.33, spectralType: 'K' },
        { ra: 332.76, dec: -21.2325, magnitude: 6.09, spectralType: 'F' },
        { ra: 332.6558, dec: 11.6244, magnitude: 5.78, spectralType: 'M' },
        { ra: 332.6258, dec: 20.9781, magnitude: 6.46, spectralType: 'A' },  // 28 Peg
        { ra: 332.715, dec: 30.5531, magnitude: 6.32, spectralType: 'A' },
        { ra: 332.9638, dec: 16.0406, magnitude: 5.95, spectralType: 'K' },
        { ra: 333.1075, dec: -14.1939, magnitude: 6.03, spectralType: 'F' },  // 39 Aqr
        { ra: 332.7912, dec: 50.8233, magnitude: 5.4, spectralType: 'A' },
        { ra: 333.2396, dec: -26.3278, magnitude: 6.17, spectralType: 'A' },
        { ra: 332.7138, dec: 58.2011, magnitude: 3.35, spectralType: 'K' },  // 21Zet Cep
        { ra: 333.0333, dec: 24.95, magnitude: 5.92, spectralType: 'K' },
        { ra: 333.1825, dec: -4.7208, magnitude: 6.39, spectralType: 'F' },
        { ra: 332.4517, dec: 72.3411, magnitude: 4.79, spectralType: 'G' },  // 24 Cep
        { ra: 332.8779, dec: 59.4144, magnitude: 5.04, spectralType: 'O' },  // 22Lam Cep
        { ra: 333.435, dec: -25.1808, magnitude: 5.58, spectralType: 'F' },
        { ra: 334.4604, dec: -77.5117, magnitude: 5.51, spectralType: 'F' },  // Psi Oct
        { ra: 332.9533, dec: 56.8394, magnitude: 5.24, spectralType: 'F' },
        { ra: 332.5638, dec: 72.1111, magnitude: 6.37, spectralType: 'B' },
        { ra: 332.6621, dec: 70.1328, magnitude: 5.5, spectralType: 'F' },
        { ra: 333.1992, dec: 34.6047, magnitude: 5.33, spectralType: 'K' },
        { ra: 332.9871, dec: 59.0847, magnitude: 6.3, spectralType: 'K' },
        { ra: 333.6608, dec: -41.3817, magnitude: 6.23, spectralType: 'G' },
        { ra: 333.5783, dec: -27.7669, magnitude: 5.43, spectralType: 'B' },  // 16Lam PsA
        { ra: 333.0079, dec: 60.7594, magnitude: 5.35, spectralType: 'K' },
        { ra: 333.575, dec: -21.0742, magnitude: 5.32, spectralType: 'K' },  // 41 Aqr
        { ra: 335.0062, dec: -80.4397, magnitude: 5.1, spectralType: 'M' },  // Eps Oct
        { ra: 333.4108, dec: 28.6083, magnitude: 5.89, spectralType: 'K' },
        { ra: 333.0929, dec: 63.2914, magnitude: 5.79, spectralType: 'M' },
        { ra: 333.8963, dec: -44.4519, magnitude: 6.1, spectralType: 'G' },
        { ra: 333.4696, dec: 39.715, magnitude: 4.49, spectralType: 'K' },
        { ra: 333.9038, dec: -41.3467, magnitude: 4.79, spectralType: 'G' },  // Mu 1Gru
        { ra: 333.4554, dec: 45.4408, magnitude: 5.53, spectralType: 'A' },
        { ra: 334.1108, dec: -41.6275, magnitude: 5.1, spectralType: 'G' },  // Mu 2Gru
        { ra: 333.685, dec: 42.9539, magnitude: 5.71, spectralType: 'A' },
        { ra: 333.4563, dec: 63.1625, magnitude: 6.11, spectralType: 'B' },
        { ra: 333.9992, dec: 8.5494, magnitude: 6.21, spectralType: 'A' },
        { ra: 334.1558, dec: -25.8983, magnitude: 6.15, spectralType: 'K' },
        { ra: 333.2204, dec: 73.3072, magnitude: 6.08, spectralType: 'K' },
        { ra: 333.7583, dec: 57.0436, magnitude: 4.19, spectralType: 'F' },  // 23Eps Cep
        { ra: 334.14, dec: -1.5964, magnitude: 6.15, spectralType: 'A' },
        { ra: 334.2004, dec: -12.8314, magnitude: 5.34, spectralType: 'K' },  // 42 Aqr
        { ra: 334.2492, dec: -23.14, magnitude: 6.17, spectralType: 'G' },
        { ra: 333.9925, dec: 37.7489, magnitude: 4.13, spectralType: 'K' },  // 1 Lac
        { ra: 334.2083, dec: -7.7833, magnitude: 4.16, spectralType: 'G' },  // 43The Aqr
        { ra: 334.2192, dec: -9.04, magnitude: 5.79, spectralType: 'K' },
        { ra: 334.565, dec: -53.6278, magnitude: 5.37, spectralType: 'G' },
        { ra: 334.6254, dec: -60.2597, magnitude: 2.86, spectralType: 'K' },  // Alp Tuc
        { ra: 334.1237, dec: 27.8042, magnitude: 6.37, spectralType: 'G' },
        { ra: 334.2771, dec: -5.3872, magnitude: 5.75, spectralType: 'G' },  // 44 Aqr
        { ra: 337.9058, dec: -85.9672, magnitude: 5.77, spectralType: 'K' },  // Ups Oct
        { ra: 334.1104, dec: 57.2203, magnitude: 5.88, spectralType: 'G' },
        { ra: 334.5179, dec: -0.2378, magnitude: 6.39, spectralType: 'F' },
        { ra: 334.7533, dec: -13.305, magnitude: 5.95, spectralType: 'G' },  // 45 Aqr
        { ra: 335.1508, dec: -57.51, magnitude: 6.34, spectralType: 'K' },
        { ra: 334.7342, dec: 37.7694, magnitude: 6.17, spectralType: 'A' },
        { ra: 334.5529, dec: 62.8044, magnitude: 5.75, spectralType: 'K' },  // 25 Cep
        { ra: 335.0496, dec: -7.8211, magnitude: 5.37, spectralType: 'B' },  // 46Rho Aqr
        { ra: 335.115, dec: 5.7894, magnitude: 5.37, spectralType: 'B' },  // 30 Peg
        { ra: 335.2325, dec: 8.1867, magnitude: 6.17, spectralType: 'F' },
        { ra: 336.1533, dec: -72.2556, magnitude: 5.29, spectralType: 'A' },  // Nu Ind
        { ra: 335.3983, dec: -21.5983, magnitude: 5.13, spectralType: 'K' },  // 47 Aqr
        { ra: 335.2504, dec: 26.9353, magnitude: 6.47, spectralType: 'M' },
        { ra: 335.4142, dec: -1.3872, magnitude: 3.84, spectralType: 'A' },  // 48Gam Aqr
        { ra: 335.165, dec: 50.9808, magnitude: 6.42, spectralType: 'K' },
        { ra: 335.3796, dec: 12.2053, magnitude: 5.01, spectralType: 'B' },  // 31 Peg
        { ra: 335.6829, dec: -45.9478, magnitude: 6.62, spectralType: 'G' },  // Pi 1Gru
        { ra: 335.3304, dec: 28.3306, magnitude: 4.81, spectralType: 'B' },  // 32 Peg
        { ra: 335.2567, dec: 46.5367, magnitude: 4.57, spectralType: 'B' },  // 2 Lac
        { ra: 335.7833, dec: -45.9286, magnitude: 5.62, spectralType: 'F' },  // Pi 2Gru
        { ra: 334.585, dec: 76.4881, magnitude: 6.66, spectralType: 'A' },
        { ra: 336.4625, dec: -75.0156, magnitude: 6.04, spectralType: 'G' },
        { ra: 336.2938, dec: -70.4317, magnitude: 5.78, spectralType: 'F' },
        { ra: 335.4621, dec: 42.0783, magnitude: 6.41, spectralType: 'B' },
        { ra: 335.8788, dec: -24.7625, magnitude: 5.53, spectralType: 'G' },  // 49 Aqr
        { ra: 335.8838, dec: -7.1944, magnitude: 5.93, spectralType: 'G' },
        { ra: 336.235, dec: -57.7972, magnitude: 5.32, spectralType: 'G' },
        { ra: 335.915, dec: 20.8483, magnitude: 6.04, spectralType: 'F' },  // 33 Peg
        { ra: 336.0287, dec: -4.8369, magnitude: 5.78, spectralType: 'A' },  // 51 Aqr
        { ra: 336.1129, dec: -13.5294, magnitude: 5.76, spectralType: 'G' },  // 50 Aqr
        { ra: 335.7508, dec: 57.2844, magnitude: 6.16, spectralType: 'B' },
        { ra: 335.9758, dec: 38.5736, magnitude: 6.22, spectralType: 'F' },
        { ra: 335.7508, dec: 62.42, magnitude: 6.04, spectralType: 'A' },
        { ra: 335.89, dec: 52.2292, magnitude: 4.43, spectralType: 'G' },  // 3Bet Lac
        { ra: 336.3192, dec: 1.3775, magnitude: 4.66, spectralType: 'B' },  // 52Pi Aqr
        { ra: 336.8333, dec: -64.9664, magnitude: 4.48, spectralType: 'B' },  // Del Tuc
        { ra: 336.1292, dec: 49.4764, magnitude: 4.57, spectralType: 'B' },  // 4 Lac
        { ra: 336.5446, dec: -23.6825, magnitude: 6.29, spectralType: 'A' },
        { ra: 336.4196, dec: 18.4444, magnitude: 6.26, spectralType: 'K' },
        { ra: 336.6425, dec: -16.7414, magnitude: 6.57, spectralType: 'G' },  // 53 Aqr
        { ra: 336.6433, dec: -16.7425, magnitude: 6.35, spectralType: 'G' },  // 53 Aqr
        { ra: 333.2942, dec: 86.1081, magnitude: 5.27, spectralType: 'B' },
        { ra: 337.1571, dec: -67.4892, magnitude: 5.55, spectralType: 'A' },
        { ra: 336.6558, dec: 4.3936, magnitude: 5.75, spectralType: 'F' },  // 34 Peg
        { ra: 336.6904, dec: 37.4439, magnitude: 6.46, spectralType: 'B' },
        { ra: 335.9221, dec: 78.2433, magnitude: 6.76, spectralType: 'B' },
        { ra: 336.9646, dec: 4.6956, magnitude: 4.79, spectralType: 'K' },  // 35 Peg
        { ra: 337.1633, dec: -39.1319, magnitude: 5.47, spectralType: 'G' },  // Nu Gru
        { ra: 336.8604, dec: 39.8097, magnitude: 6.14, spectralType: 'B' },
        { ra: 336.7467, dec: 56.4333, magnitude: 6.57, spectralType: 'B' },
        { ra: 336.9425, dec: 31.8403, magnitude: 5.98, spectralType: 'K' },
        { ra: 337.3175, dec: -43.4956, magnitude: 3.97, spectralType: 'G' },  // Del1Gru
        { ra: 336.5033, dec: 70.7708, magnitude: 5.47, spectralType: 'K' },
        { ra: 337.2071, dec: -0.0203, magnitude: 4.59, spectralType: 'F' },  // 55Zet1Aqr
        { ra: 337.2087, dec: -0.02, magnitude: 4.42, spectralType: 'F' },  // 55Zet2Aqr
        { ra: 337.4396, dec: -43.7494, magnitude: 4.11, spectralType: 'M' },  // Del2Gru
        { ra: 336.7721, dec: 65.1322, magnitude: 5.46, spectralType: 'B' },  // 26 Cep
        { ra: 337.2833, dec: 9.1289, magnitude: 5.58, spectralType: 'K' },  // 36 Peg
        { ra: 337.4417, dec: -27.1072, magnitude: 5.95, spectralType: 'F' },
        { ra: 337.2925, dec: 26.7631, magnitude: 5.79, spectralType: 'K' },
        { ra: 337.5063, dec: -12.915, magnitude: 6.4, spectralType: 'F' },
        { ra: 337.4917, dec: 4.4317, magnitude: 5.48, spectralType: 'F' },  // 37 Peg
        { ra: 337.5725, dec: -14.5858, magnitude: 6.37, spectralType: 'B' },  // 56 Aqr
        { ra: 337.0821, dec: 64.0856, magnitude: 6.29, spectralType: 'K' },
        { ra: 337.4329, dec: 35.7256, magnitude: 6.56, spectralType: 'A' },
        { ra: 337.7237, dec: -26.0736, magnitude: 6.43, spectralType: 'K' },  // Zet PsA
        { ra: 337.2929, dec: 58.4153, magnitude: 3.75, spectralType: 'F' },  // 27Del Cep
        { ra: 337.3825, dec: 47.7069, magnitude: 4.36, spectralType: 'M' },  // 5 Lac
        { ra: 337.6617, dec: -10.6781, magnitude: 4.82, spectralType: 'A' },  // 57Sig Aqr
        { ra: 337.5075, dec: 32.5725, magnitude: 5.65, spectralType: 'B' },  // 38 Peg
        { ra: 337.5271, dec: 49.3561, magnitude: 6.4, spectralType: 'K' },
        { ra: 337.8762, dec: -32.3461, magnitude: 4.29, spectralType: 'A' },  // 17Bet PsA
        { ra: 338.86, dec: -78.7717, magnitude: 6.15, spectralType: 'K' },
        { ra: 336.6771, dec: 78.7858, magnitude: 5.83, spectralType: 'A' },  // 28Rho1Cep
        { ra: 337.6221, dec: 43.1233, magnitude: 4.51, spectralType: 'B' },  // 6 Lac
        { ra: 337.8267, dec: -2.9111, magnitude: 6.16, spectralType: 'K' },
        { ra: 337.8267, dec: -6.555, magnitude: 6.14, spectralType: 'F' },
        { ra: 338.2504, dec: -61.9822, magnitude: 4.81, spectralType: 'M' },  // Nu Tuc
        { ra: 337.9221, dec: -10.9056, magnitude: 6.38, spectralType: 'A' },  // 58 Aqr
        { ra: 337.8925, dec: 29.5428, magnitude: 6.35, spectralType: 'A' },
        { ra: 337.8229, dec: 50.2825, magnitude: 3.77, spectralType: 'A' },  // 7Alp Lac
        { ra: 338.1479, dec: 20.23, magnitude: 6.42, spectralType: 'F' },  // 39 Peg
        { ra: 338.1954, dec: 15.8633, magnitude: 6.32, spectralType: 'K' },
        { ra: 338.11, dec: 39.7797, magnitude: 5.88, spectralType: 'A' },
        { ra: 338.0783, dec: 54.0375, magnitude: 6.35, spectralType: 'G' },
        { ra: 338.5121, dec: -1.5742, magnitude: 5.89, spectralType: 'G' },  // 60 Aqr
        { ra: 337.4704, dec: 78.8242, magnitude: 5.5, spectralType: 'A' },  // 29Rho2Cep
        { ra: 338.6733, dec: -20.7083, magnitude: 5.2, spectralType: 'F' },  // 59Ups Aqr
        { ra: 338.9704, dec: -57.8836, magnitude: 6.23, spectralType: 'A' },
        { ra: 338.4192, dec: 56.625, magnitude: 5.71, spectralType: 'G' },
        { ra: 338.2621, dec: 69.9136, magnitude: 6.6, spectralType: 'A' },
        { ra: 338.9021, dec: -23.9911, magnitude: 5.97, spectralType: 'K' },
        { ra: 338.8392, dec: -0.1175, magnitude: 4.02, spectralType: 'B' },  // 62Eta Aqr
        { ra: 338.3208, dec: 70.3739, magnitude: 6.34, spectralType: 'A' },
        { ra: 338.0675, dec: 76.2264, magnitude: 5.68, spectralType: 'A' },
        { ra: 339.1221, dec: -40.5828, magnitude: 6.28, spectralType: 'A' },  // Sig1Gru
        { ra: 339.1475, dec: -31.6639, magnitude: 5.82, spectralType: 'K' },
        { ra: 339.245, dec: -40.5911, magnitude: 5.86, spectralType: 'A' },  // Sig2Gru
        { ra: 338.9679, dec: 39.6342, magnitude: 5.73, spectralType: 'B' },  // 8 Lac
        { ra: 339.0329, dec: 35.5772, magnitude: 6.1, spectralType: 'K' },
        { ra: 339.1517, dec: 11.6969, magnitude: 6.4, spectralType: 'A' },
        { ra: 338.9725, dec: 50.0711, magnitude: 6.29, spectralType: 'B' },
        { ra: 338.9658, dec: 56.07, magnitude: 6.38, spectralType: 'A' },
        { ra: 339.2696, dec: 12.5772, magnitude: 6.3, spectralType: 'K' },
        { ra: 339.2029, dec: 35.6525, magnitude: 6.3, spectralType: 'K' },
        { ra: 339.4392, dec: -4.2281, magnitude: 5.03, spectralType: 'K' },  // 63Kap Aqr
        { ra: 339.785, dec: -52.6922, magnitude: 6.65, spectralType: 'F' },
        { ra: 339.5925, dec: -7.8978, magnitude: 6.23, spectralType: 'G' },
        { ra: 339.3433, dec: 51.5453, magnitude: 4.63, spectralType: 'A' },  // 9 Lac
        { ra: 339.6862, dec: -28.7478, magnitude: 6.47, spectralType: 'K' },
        { ra: 338.9421, dec: 73.6431, magnitude: 5.08, spectralType: 'F' },  // 31 Cep
        { ra: 339.7146, dec: -33.0814, magnitude: 5.66, spectralType: 'A' },
        { ra: 339.5729, dec: 45.1831, magnitude: 6.4, spectralType: 'G' },
        { ra: 339.7192, dec: 19.5222, magnitude: 5.82, spectralType: 'G' },  // 40 Peg
        { ra: 339.9333, dec: -28.3253, magnitude: 6.31, spectralType: 'K' },
        { ra: 340.2038, dec: -57.4222, magnitude: 5.97, spectralType: 'K' },
        { ra: 339.6579, dec: 56.7958, magnitude: 5.21, spectralType: 'M' },
        { ra: 339.8154, dec: 39.0503, magnitude: 4.88, spectralType: 'O' },  // 10 Lac
        { ra: 340.0929, dec: -30.6589, magnitude: 5.87, spectralType: 'K' },
        { ra: 339.9458, dec: 19.6811, magnitude: 6.21, spectralType: 'A' },  // 41 Peg
        { ra: 339.3042, dec: 75.3717, magnitude: 5.79, spectralType: 'M' },
        { ra: 339.8929, dec: 37.5928, magnitude: 6.03, spectralType: 'G' },
        { ra: 339.6625, dec: 63.5844, magnitude: 5.19, spectralType: 'A' },  // 30 Cep
        { ra: 340.1642, dec: -27.0436, magnitude: 4.17, spectralType: 'B' },  // 18Eps PsA
        { ra: 340.2, dec: -3.5542, magnitude: 6.31, spectralType: 'F' },
        { ra: 341.5137, dec: -81.3817, magnitude: 4.15, spectralType: 'A' },  // Bet Oct
        { ra: 340.2196, dec: 14.5494, magnitude: 5.71, spectralType: 'G' },
        { ra: 340.1288, dec: 44.2764, magnitude: 4.46, spectralType: 'K' },  // 11 Lac
        { ra: 340.0767, dec: 53.8461, magnitude: 5.93, spectralType: 'K' },
        { ra: 340.3654, dec: 10.8314, magnitude: 3.4, spectralType: 'B' },  // 42Zet Peg
        { ra: 340.6538, dec: -47.2106, magnitude: 5.98, spectralType: 'G' },
        { ra: 340.6671, dec: -46.8847, magnitude: 2.1, spectralType: 'M' },  // Bet Gru
        { ra: 340.5921, dec: -29.3608, magnitude: 6.17, spectralType: 'M' },  // 19 PsA
        { ra: 340.3808, dec: 30.9658, magnitude: 6.34, spectralType: 'K' },
        { ra: 340.6796, dec: -44.2478, magnitude: 6.07, spectralType: 'K' },
        { ra: 340.3692, dec: 40.2256, magnitude: 5.25, spectralType: 'B' },  // 12 Lac
        { ra: 340.4392, dec: 29.3075, magnitude: 4.79, spectralType: 'A' },  // 43Omi Peg
        { ra: 340.4892, dec: 14.5164, magnitude: 5.9, spectralType: 'K' },
        { ra: 340.4004, dec: 41.5494, magnitude: 5.94, spectralType: 'G' },
        { ra: 340.875, dec: -41.4144, magnitude: 4.85, spectralType: 'K' },  // Rho Gru
        { ra: 340.7646, dec: -8.3117, magnitude: 6.45, spectralType: 'A' },
        { ra: 341.0688, dec: -60.4994, magnitude: 6.3, spectralType: 'F' },
        { ra: 340.8096, dec: -6.9628, magnitude: 6.41, spectralType: 'A' },  // 67 Aqr
        { ra: 340.5867, dec: 53.9089, magnitude: 6.12, spectralType: 'K' },
        { ra: 340.8971, dec: -18.8303, magnitude: 4.69, spectralType: 'K' },  // 66 Aqr
        { ra: 340.7504, dec: 30.2214, magnitude: 2.94, spectralType: 'G' },  // 44Eta Peg
        { ra: 340.7312, dec: 37.8028, magnitude: 6.43, spectralType: 'B' },
        { ra: 340.7687, dec: 47.1686, magnitude: 6.39, spectralType: 'A' },
        { ra: 340.9279, dec: 10.9392, magnitude: 6.51, spectralType: 'G' },
        { ra: 341.0217, dec: 39.4656, magnitude: 5.95, spectralType: 'K' },
        { ra: 341.4079, dec: -53.5003, magnitude: 4.85, spectralType: 'K' },  // Eta Gru
        { ra: 341.0229, dec: 41.8192, magnitude: 5.08, spectralType: 'K' },  // 13 Lac
        { ra: 341.4196, dec: -46.5475, magnitude: 5.51, spectralType: 'K' },
        { ra: 341.5333, dec: -48.9789, magnitude: 6.62, spectralType: 'F' },
        { ra: 341.6179, dec: -49.6858, magnitude: 6.48, spectralType: 'K' },
        { ra: 341.3675, dec: 19.3667, magnitude: 6.25, spectralType: 'G' },  // 45 Peg
        { ra: 341.205, dec: 52.5172, magnitude: 6.55, spectralType: 'K' },
        { ra: 341.6821, dec: -46.9394, magnitude: 6.56, spectralType: 'A' },
        { ra: 342.5954, dec: -80.1242, magnitude: 5.35, spectralType: 'B' },  // Xi Oct
        { ra: 342.4204, dec: -77.0506, magnitude: 6.73, spectralType: 'A' },
        { ra: 341.6733, dec: 12.1728, magnitude: 4.19, spectralType: 'F' },  // 46Xi Peg
        { ra: 341.5425, dec: 44.5461, magnitude: 5.76, spectralType: 'F' },
        { ra: 341.6329, dec: 23.5656, magnitude: 3.95, spectralType: 'G' },  // 47Lam Peg
        { ra: 341.8296, dec: -34.1611, magnitude: 6.28, spectralType: 'K' },
        { ra: 342.0892, dec: -61.6842, magnitude: 6.37, spectralType: 'K' },
        { ra: 341.8879, dec: -19.6133, magnitude: 5.26, spectralType: 'G' },  // 68 Aqr
        { ra: 341.9463, dec: -38.2219, magnitude: 6.71, spectralType: 'F' },
        { ra: 342.3225, dec: -70.3478, magnitude: 6.34, spectralType: 'A' },
        { ra: 341.9283, dec: -14.0564, magnitude: 5.66, spectralType: 'A' },  // 69Tau1Aqr
        { ra: 341.9842, dec: -25.9119, magnitude: 6.3, spectralType: 'G' },
        { ra: 342.1388, dec: -51.3169, magnitude: 3.49, spectralType: 'A' },  // Eps Gru
        { ra: 342.1258, dec: -10.5556, magnitude: 6.19, spectralType: 'A' },  // 70 Aqr
        { ra: 341.8467, dec: 58.4828, magnitude: 6.36, spectralType: 'B' },
        { ra: 342.0454, dec: 37.4167, magnitude: 5.9, spectralType: 'G' },
        { ra: 342.3979, dec: -13.5925, magnitude: 4.01, spectralType: 'M' },  // 71Tau2Aqr
        { ra: 342.4963, dec: -32.8053, magnitude: 6.33, spectralType: 'F' },
        { ra: 342.3846, dec: 10.4789, magnitude: 6.54, spectralType: 'F' },
        { ra: 342.1992, dec: 54.415, magnitude: 6.12, spectralType: 'B' },
        { ra: 342.1842, dec: 62.9383, magnitude: 6.06, spectralType: 'K' },
        { ra: 342.5008, dec: 24.6017, magnitude: 3.48, spectralType: 'G' },  // 48Mu Peg
        { ra: 342.7592, dec: -39.1569, magnitude: 5.42, spectralType: 'M' },
        { ra: 342.9371, dec: -59.8814, magnitude: 6.46, spectralType: 'K' },
        { ra: 342.2529, dec: 68.5703, magnitude: 6.19, spectralType: 'F' },
        { ra: 342.4425, dec: 55.9028, magnitude: 5.43, spectralType: 'K' },
        { ra: 343.0412, dec: -63.1886, magnitude: 6.12, spectralType: 'K' },
        { ra: 342.5908, dec: 41.9536, magnitude: 5.92, spectralType: 'B' },  // 14 Lac
        { ra: 342.6629, dec: 19.1408, magnitude: 6.4, spectralType: 'K' },
        { ra: 342.5425, dec: 50.6769, magnitude: 6.21, spectralType: 'G' },
        { ra: 342.8371, dec: -29.5361, magnitude: 5.97, spectralType: 'G' },  // 21 PsA
        { ra: 342.42, dec: 66.2006, magnitude: 3.52, spectralType: 'K' },  // 32Iot Cep
        { ra: 343.1317, dec: -32.8756, magnitude: 4.46, spectralType: 'A' },  // 22Gam PsA
        { ra: 342.845, dec: 61.6969, magnitude: 5.6, spectralType: 'G' },
        { ra: 343.1004, dec: 9.8356, magnitude: 5.16, spectralType: 'F' },  // 49Sig Peg
        { ra: 343.1538, dec: -7.5797, magnitude: 3.74, spectralType: 'M' },  // 73Lam Aqr
        { ra: 343.0083, dec: 43.3125, magnitude: 4.94, spectralType: 'M' },  // 15 Lac
        { ra: 343.4079, dec: -48.5981, magnitude: 6.04, spectralType: 'G' },  // Tau1Gru
        { ra: 343.6642, dec: -70.0736, magnitude: 6.05, spectralType: 'G' },  // Rho Ind
        { ra: 341.8708, dec: 83.1539, magnitude: 4.74, spectralType: 'K' },
        { ra: 343.2596, dec: 16.8411, magnitude: 5.64, spectralType: 'K' },
        { ra: 343.3696, dec: -11.6167, magnitude: 5.8, spectralType: 'B' },  // 74 Aqr
        { ra: 343.2179, dec: 50.4119, magnitude: 6.46, spectralType: 'B' },
        { ra: 343.2971, dec: 40.1672, magnitude: 6.34, spectralType: 'B' },
        { ra: 343.2658, dec: 60.1011, magnitude: 6.01, spectralType: 'K' },
        { ra: 343.4171, dec: 44.7492, magnitude: 5.81, spectralType: 'A' },
        { ra: 343.6625, dec: -15.8208, magnitude: 3.27, spectralType: 'A' },  // 76Del Aqr
        { ra: 343.6421, dec: -7.2047, magnitude: 6.19, spectralType: 'K' },  // 78 Aqr
        { ra: 343.6896, dec: -16.2719, magnitude: 5.56, spectralType: 'K' },  // 77 Aqr
        { ra: 343.5292, dec: 40.3769, magnitude: 5.81, spectralType: 'K' },
        { ra: 343.8121, dec: -36.3886, magnitude: 6.4, spectralType: 'K' },
        { ra: 343.6487, dec: 16.9417, magnitude: 6.12, spectralType: 'G' },
        { ra: 343.7479, dec: 1.0647, magnitude: 6.11, spectralType: 'A' },  // 1 Psc
        { ra: 343.7958, dec: -4.9878, magnitude: 5.72, spectralType: 'K' },
        { ra: 343.8071, dec: 8.8158, magnitude: 4.9, spectralType: 'A' },  // 50Rho Peg
        { ra: 343.7608, dec: 37.0769, magnitude: 5.91, spectralType: 'F' },
        { ra: 343.9642, dec: -31.6331, magnitude: 6.1, spectralType: 'K' },
        { ra: 343.9871, dec: -32.5397, magnitude: 4.21, spectralType: 'G' },  // 23Del PsA
        { ra: 344.1, dec: -31.5656, magnitude: 6.48, spectralType: 'K' },
        { ra: 344.1992, dec: -47.9692, magnitude: 5.7, spectralType: 'A' },  // Tau3Gru
        { ra: 343.9354, dec: 36.3517, magnitude: 5.74, spectralType: 'B' },
        { ra: 344.2146, dec: 11.8483, magnitude: 6.51, spectralType: 'A' },
        { ra: 344.0983, dec: 41.6039, magnitude: 5.59, spectralType: 'B' },  // 16 Lac
        { ra: 344.1083, dec: 49.7336, magnitude: 4.95, spectralType: 'K' },
        { ra: 344.3217, dec: -4.81, magnitude: 6.31, spectralType: 'G' },
        { ra: 344.4129, dec: -29.6222, magnitude: 1.16, spectralType: 'A' },  // 24Alp PsA
        { ra: 344.3663, dec: 20.7689, magnitude: 5.49, spectralType: 'G' },  // 51 Peg
        { ra: 344.3867, dec: 3.8103, magnitude: 6.28, spectralType: 'K' },
        { ra: 344.2687, dec: 48.6842, magnitude: 5.43, spectralType: 'B' },
        { ra: 344.6458, dec: -35.5231, magnitude: 6.13, spectralType: 'F' },
        { ra: 344.4196, dec: 39.3089, magnitude: 6.18, spectralType: 'B' },
        { ra: 344.5646, dec: -2.3953, magnitude: 6.16, spectralType: 'G' },
        { ra: 344.5987, dec: -1.4103, magnitude: 6.37, spectralType: 'F' },
        { ra: 342.7592, dec: 85.3736, magnitude: 5.9, spectralType: 'K' },
        { ra: 344.6463, dec: 9.3569, magnitude: 6.43, spectralType: 'G' },
        { ra: 344.6775, dec: 7.3397, magnitude: 6.33, spectralType: 'A' },
        { ra: 344.7992, dec: 11.7289, magnitude: 5.75, spectralType: 'A' },  // 52 Peg
        { ra: 344.8992, dec: -29.4622, magnitude: 5.51, spectralType: 'A' },
        { ra: 344.8988, dec: -13.0708, magnitude: 6.07, spectralType: 'K' },
        { ra: 344.8642, dec: 0.9628, magnitude: 5.43, spectralType: 'K' },  // 2 Psc
        { ra: 345.0242, dec: -25.1642, magnitude: 5.65, spectralType: 'K' },
        { ra: 344.7929, dec: 52.6544, magnitude: 6.29, spectralType: 'K' },
        { ra: 344.7875, dec: 59.8147, magnitude: 6.43, spectralType: 'B' },
        { ra: 345.1025, dec: -25.6267, magnitude: 6.29, spectralType: 'K' },
        { ra: 345.22, dec: -52.7542, magnitude: 4.12, spectralType: 'G' },  // Zet Gru
        { ra: 343.6033, dec: 84.3461, magnitude: 4.71, spectralType: 'K' },
        { ra: 345.2812, dec: -50.95, magnitude: 5.68, spectralType: 'K' },
        { ra: 345.1579, dec: 0.1858, magnitude: 6.21, spectralType: 'G' },  // 3 Psc
        { ra: 345.1788, dec: 3.0117, magnitude: 5.83, spectralType: 'K' },
        { ra: 345.0213, dec: 56.9453, magnitude: 5.0, spectralType: 'G' },
        { ra: 345.1771, dec: 31.0831, magnitude: 6.6, spectralType: 'B' },
        { ra: 345.3308, dec: -28.8536, magnitude: 5.55, spectralType: 'K' },
        { ra: 345.1433, dec: 45.375, magnitude: 6.5, spectralType: 'A' },
        { ra: 345.3458, dec: -22.7908, magnitude: 6.28, spectralType: 'A' },
        { ra: 345.3483, dec: -7.0611, magnitude: 6.21, spectralType: 'K' },  // 81 Aqr
        { ra: 345.2279, dec: 38.7081, magnitude: 6.54, spectralType: 'B' },
        { ra: 345.3821, dec: -4.7114, magnitude: 5.94, spectralType: 'K' },
        { ra: 345.6417, dec: -36.4208, magnitude: 6.47, spectralType: 'K' },
        { ra: 345.3779, dec: 57.1056, magnitude: 6.2, spectralType: 'K' },
        { ra: 345.4804, dec: 42.3261, magnitude: 3.62, spectralType: 'B' },  // 1Omi And
        { ra: 345.6358, dec: -6.5742, magnitude: 6.15, spectralType: 'M' },  // 82 Aqr
        { ra: 345.6846, dec: -20.8706, magnitude: 5.97, spectralType: 'K' },
        { ra: 345.6379, dec: 31.7806, magnitude: 6.57, spectralType: 'F' },
        { ra: 345.6513, dec: 42.7578, magnitude: 5.1, spectralType: 'A' },  // 2 And
        { ra: 345.8742, dec: -34.7494, magnitude: 5.11, spectralType: 'F' },  // Pi PsA
        { ra: 345.6883, dec: 44.0589, magnitude: 6.39, spectralType: 'B' },
        { ra: 346.2175, dec: -68.8203, magnitude: 5.52, spectralType: 'F' },
        { ra: 345.6825, dec: 55.2364, magnitude: 6.5, spectralType: 'B' },
        { ra: 345.9979, dec: -41.4783, magnitude: 5.79, spectralType: 'K' },
        { ra: 345.9887, dec: -4.7953, magnitude: 6.68, spectralType: 'F' },
        { ra: 345.9692, dec: 3.82, magnitude: 4.53, spectralType: 'B' },  // 4Bet Psc
        { ra: 346.165, dec: -53.965, magnitude: 5.37, spectralType: 'K' },  // Kap Gru
        { ra: 345.9438, dec: 28.0828, magnitude: 2.42, spectralType: 'M' },  // 53Bet Peg
        { ra: 346.0042, dec: 6.6167, magnitude: 6.41, spectralType: 'F' },
        { ra: 345.8487, dec: 60.4453, magnitude: 6.74, spectralType: 'B' },
        { ra: 345.84, dec: 58.5647, magnitude: 6.43, spectralType: 'G' },
        { ra: 345.8871, dec: 67.2092, magnitude: 5.24, spectralType: 'K' },
        { ra: 346.0458, dec: 50.0522, magnitude: 4.65, spectralType: 'K' },  // 3 And
        { ra: 346.1904, dec: 15.2053, magnitude: 2.49, spectralType: 'B' },  // 54Alp Peg
        { ra: 346.2908, dec: -7.6936, magnitude: 5.43, spectralType: 'F' },  // 83 Aqr
        { ra: 346.3033, dec: -17.0792, magnitude: 6.14, spectralType: 'K' },
        { ra: 346.2763, dec: 16.5631, magnitude: 6.44, spectralType: 'G' },
        { ra: 346.3233, dec: 1.3069, magnitude: 6.39, spectralType: 'G' },
        { ra: 347.0987, dec: -79.4808, magnitude: 6.12, spectralType: 'A' },
        { ra: 346.72, dec: -43.5206, magnitude: 4.28, spectralType: 'F' },  // The Gru
        { ra: 346.5758, dec: 18.5175, magnitude: 6.13, spectralType: 'F' },
        { ra: 346.6704, dec: -23.7431, magnitude: 4.47, spectralType: 'G' },  // 86 Aqr
        { ra: 346.7233, dec: -38.8922, magnitude: 5.61, spectralType: 'A' },  // Ups Gru
        { ra: 346.7896, dec: -49.6067, magnitude: 6.33, spectralType: 'K' },
        { ra: 346.6329, dec: 19.9108, magnitude: 6.3, spectralType: 'F' },
        { ra: 346.8113, dec: -50.6864, magnitude: 5.83, spectralType: 'F' },
        { ra: 347.1487, dec: -73.5864, magnitude: 6.15, spectralType: 'K' },
        { ra: 346.7512, dec: 9.4094, magnitude: 4.52, spectralType: 'M' },  // 55 Peg
        { ra: 346.7783, dec: 25.4683, magnitude: 4.76, spectralType: 'G' },  // 56 Peg
        { ra: 346.6538, dec: 59.4197, magnitude: 4.85, spectralType: 'B' },  // 1 Cas
        { ra: 346.8654, dec: 32.8258, magnitude: 6.02, spectralType: 'A' },
        { ra: 346.8696, dec: 21.1342, magnitude: 5.99, spectralType: 'A' },
        { ra: 346.8254, dec: 46.0681, magnitude: 6.66, spectralType: 'B' },
        { ra: 346.7921, dec: 52.8164, magnitude: 6.11, spectralType: 'K' },
        { ra: 347.0875, dec: -28.8233, magnitude: 5.6, spectralType: 'G' },
        { ra: 346.7933, dec: 59.7275, magnitude: 6.4, spectralType: 'B' },
        { ra: 346.9137, dec: 46.3872, magnitude: 5.33, spectralType: 'K' },  // 4 And
        { ra: 346.9392, dec: 49.2958, magnitude: 5.7, spectralType: 'F' },  // 5 And
        { ra: 347.0512, dec: 44.5617, magnitude: 6.56, spectralType: 'A' },
        { ra: 347.1704, dec: 2.1278, magnitude: 5.4, spectralType: 'G' },  // 5 Psc
        { ra: 346.9488, dec: 63.6333, magnitude: 6.26, spectralType: 'B' },
        { ra: 347.5488, dec: -66.8575, magnitude: 6.47, spectralType: 'K' },
        { ra: 348.05, dec: -80.9128, magnitude: 6.41, spectralType: 'K' },
        { ra: 346.9883, dec: 64.2225, magnitude: 6.21, spectralType: 'K' },
        { ra: 347.3617, dec: -21.1725, magnitude: 3.66, spectralType: 'K' },  // 88 Aqr
        { ra: 347.4358, dec: -28.0886, magnitude: 5.87, spectralType: 'K' },
        { ra: 347.4887, dec: -42.8606, magnitude: 5.81, spectralType: 'F' },
        { ra: 347.3812, dec: 8.6772, magnitude: 5.12, spectralType: 'M' },  // 57 Peg
        { ra: 347.4567, dec: -14.5106, magnitude: 6.42, spectralType: 'A' },
        { ra: 347.4783, dec: -22.4575, magnitude: 4.69, spectralType: 'G' },  // 89 Aqr
        { ra: 347.5408, dec: -40.5917, magnitude: 5.83, spectralType: 'M' },
        { ra: 346.9746, dec: 75.3875, magnitude: 4.41, spectralType: 'G' },  // 33Pi Cep
        { ra: 347.59, dec: -45.2467, magnitude: 3.9, spectralType: 'K' },  // Iot Gru
        { ra: 347.5063, dec: 9.8219, magnitude: 5.39, spectralType: 'B' },  // 58 Peg
        { ra: 347.4338, dec: 59.3331, magnitude: 5.7, spectralType: 'A' },  // 2 Cas
        { ra: 347.6942, dec: -29.525, magnitude: 6.51, spectralType: 'F' },
        { ra: 347.6775, dec: 17.5944, magnitude: 5.71, spectralType: 'K' },
        { ra: 347.6133, dec: 43.5442, magnitude: 5.94, spectralType: 'F' },  // 6 And
        { ra: 347.9342, dec: 8.72, magnitude: 5.16, spectralType: 'A' },  // 59 Peg
        { ra: 347.955, dec: 26.8472, magnitude: 6.17, spectralType: 'G' },  // 60 Peg
        { ra: 348.3125, dec: -49.6189, magnitude: 6.8, spectralType: 'G' },
        { ra: 348.5275, dec: -62.7, magnitude: 6.12, spectralType: 'G' },
        { ra: 348.1375, dec: 49.4064, magnitude: 4.52, spectralType: 'F' },  // 7 And
        { ra: 348.2667, dec: 29.4417, magnitude: 6.35, spectralType: 'G' },
        { ra: 348.3208, dec: 57.1683, magnitude: 5.56, spectralType: 'K' },
        { ra: 348.3604, dec: 11.065, magnitude: 5.82, spectralType: 'G' },
        { ra: 348.5808, dec: -6.0489, magnitude: 4.22, spectralType: 'M' },  // 90Phi Aqr
        { ra: 348.7442, dec: -41.1056, magnitude: 5.77, spectralType: 'K' },
        { ra: 348.6675, dec: -10.6886, magnitude: 6.12, spectralType: 'K' },
        { ra: 348.5596, dec: 50.6178, magnitude: 6.31, spectralType: 'A' },
        { ra: 348.5904, dec: 29.7717, magnitude: 6.41, spectralType: 'F' },
        { ra: 348.6521, dec: 24.1031, magnitude: 6.36, spectralType: 'K' },
        { ra: 348.8929, dec: -3.4964, magnitude: 5.55, spectralType: 'A' },
        { ra: 348.9729, dec: -9.0878, magnitude: 4.21, spectralType: 'K' },  // 91Psi1Aqr
        { ra: 348.9429, dec: 28.2478, magnitude: 6.49, spectralType: 'G' },  // 61 Peg
        { ra: 349.2404, dec: -62.0011, magnitude: 5.66, spectralType: 'F' },
        { ra: 348.6554, dec: 74.2311, magnitude: 5.84, spectralType: 'A' },
        { ra: 348.9913, dec: 24.7711, magnitude: 6.6, spectralType: 'F' },
        { ra: 349.1654, dec: -44.4892, magnitude: 5.92, spectralType: 'K' },
        { ra: 349.2075, dec: -41.1944, magnitude: 6.47, spectralType: 'K' },
        { ra: 349.3575, dec: -58.2358, magnitude: 3.99, spectralType: 'F' },  // Gam Tuc
        { ra: 349.7837, dec: -79.4728, magnitude: 6.33, spectralType: 'K' },
        { ra: 349.2121, dec: -7.7267, magnitude: 5.06, spectralType: 'M' },  // 92Chi Aqr
        { ra: 348.9075, dec: 70.8881, magnitude: 5.56, spectralType: 'F' },
        { ra: 349.2912, dec: 3.2822, magnitude: 3.69, spectralType: 'G' },  // 6Gam Psc
        { ra: 349.1762, dec: 53.2136, magnitude: 5.54, spectralType: 'F' },
        { ra: 349.1117, dec: 61.9631, magnitude: 6.53, spectralType: 'B' },
        { ra: 349.5833, dec: -67.4711, magnitude: 6.13, spectralType: 'K' },
        { ra: 349.4167, dec: -11.7131, magnitude: 6.34, spectralType: 'A' },
        { ra: 349.3192, dec: 45.1642, magnitude: 6.43, spectralType: 'K' },
        { ra: 349.4758, dec: -9.1825, magnitude: 4.39, spectralType: 'B' },  // 93Psi2Aqr
        { ra: 349.5412, dec: -40.8244, magnitude: 5.53, spectralType: 'F' },  // Phi Gru
        { ra: 349.4363, dec: 49.0153, magnitude: 4.85, spectralType: 'M' },  // 8 And
        { ra: 349.4837, dec: 45.4889, magnitude: 6.48, spectralType: 'B' },
        { ra: 352.0154, dec: -87.4822, magnitude: 5.49, spectralType: 'K' },  // Tau Oct
        { ra: 349.7058, dec: -32.5319, magnitude: 4.41, spectralType: 'K' },  // Gam Scl
        { ra: 349.5975, dec: 41.7736, magnitude: 6.02, spectralType: 'A' },  // 9 And
        { ra: 349.7404, dec: -9.6108, magnitude: 4.98, spectralType: 'A' },  // 95Psi3Aqr
        { ra: 349.7779, dec: -13.4589, magnitude: 5.08, spectralType: 'G' },  // 94 Aqr
        { ra: 349.3288, dec: 75.2992, magnitude: 6.38, spectralType: 'A' },
        { ra: 349.85, dec: -5.1244, magnitude: 5.55, spectralType: 'F' },  // 96 Aqr
        { ra: 349.8504, dec: -18.0753, magnitude: 5.93, spectralType: 'K' },
        { ra: 349.76, dec: 45.1372, magnitude: 6.5, spectralType: 'A' },
        { ra: 349.93, dec: -33.7081, magnitude: 6.37, spectralType: 'K' },
        { ra: 349.6562, dec: 68.1117, magnitude: 4.75, spectralType: 'K' },  // 34Omi Cep
        { ra: 349.8642, dec: 34.7933, magnitude: 6.32, spectralType: 'B' },
        { ra: 349.8742, dec: 48.6253, magnitude: 5.44, spectralType: 'K' },  // 11 And
        { ra: 349.9233, dec: 48.3808, magnitude: 6.32, spectralType: 'K' },
        { ra: 349.9683, dec: 42.0781, magnitude: 5.79, spectralType: 'M' },  // 10 And
        { ra: 350.2083, dec: -50.3067, magnitude: 6.05, spectralType: 'F' },
        { ra: 350.0858, dec: 5.3814, magnitude: 5.05, spectralType: 'K' },  // 7 Psc
        { ra: 350.1704, dec: -5.9081, magnitude: 6.17, spectralType: 'K' },
        { ra: 350.1592, dec: 23.7403, magnitude: 4.6, spectralType: 'A' },  // 62Tau Peg
        { ra: 350.0596, dec: 61.97, magnitude: 6.45, spectralType: 'K' },
        { ra: 350.2067, dec: 30.415, magnitude: 5.59, spectralType: 'M' },  // 63 Peg
        { ra: 350.3146, dec: -26.9867, magnitude: 5.64, spectralType: 'G' },
        { ra: 350.1833, dec: 44.1164, magnitude: 6.13, spectralType: 'A' },
        { ra: 350.2221, dec: 38.1822, magnitude: 5.77, spectralType: 'F' },  // 12 And
        { ra: 350.1442, dec: 62.2131, magnitude: 6.39, spectralType: 'K' },
        { ra: 350.4788, dec: 31.8125, magnitude: 5.32, spectralType: 'B' },  // 64 Peg
        { ra: 350.4925, dec: 26.6089, magnitude: 6.62, spectralType: 'F' },
        { ra: 350.7371, dec: -60.0558, magnitude: 6.09, spectralType: 'M' },
        { ra: 350.6633, dec: -15.0392, magnitude: 5.2, spectralType: 'A' },  // 97 Aqr
        { ra: 350.6687, dec: 20.8286, magnitude: 6.29, spectralType: 'B' },  // 65 Peg
        { ra: 350.7425, dec: -20.1006, magnitude: 3.97, spectralType: 'K' },  // 98 Aqr
        { ra: 350.7692, dec: 12.3139, magnitude: 5.08, spectralType: 'K' },  // 66 Peg
        { ra: 350.6354, dec: 60.1336, magnitude: 5.56, spectralType: 'K' },
        { ra: 350.9762, dec: -53.8083, magnitude: 6.15, spectralType: 'A' },
        { ra: 350.9392, dec: -43.1244, magnitude: 6.1, spectralType: 'K' },
        { ra: 350.8829, dec: 0.2914, magnitude: 6.31, spectralType: 'K' },
        { ra: 351.0546, dec: -51.8914, magnitude: 5.75, spectralType: 'M' },
        { ra: 350.9479, dec: 32.5314, magnitude: 6.69, spectralType: 'F' },
        { ra: 351.0325, dec: -18.6875, magnitude: 6.19, spectralType: 'G' },
        { ra: 351.3308, dec: -56.8492, magnitude: 5.59, spectralType: 'K' },
        { ra: 351.1458, dec: 41.1128, magnitude: 6.72, spectralType: 'B' },
        { ra: 351.2117, dec: 32.385, magnitude: 5.57, spectralType: 'B' },  // 67 Peg
        { ra: 351.2096, dec: 62.2828, magnitude: 4.98, spectralType: 'M' },  // 4 Cas
        { ra: 351.345, dec: 23.4042, magnitude: 4.4, spectralType: 'F' },  // 68Ups Peg
        { ra: 351.5117, dec: -20.6419, magnitude: 4.39, spectralType: 'K' },  // 99 Aqr
        { ra: 351.6525, dec: -52.7217, magnitude: 5.52, spectralType: 'F' },  // Omi Gru
        { ra: 351.78, dec: -66.5811, magnitude: 6.45, spectralType: 'K' },
        { ra: 351.8125, dec: -58.4761, magnitude: 5.63, spectralType: 'G' },
        { ra: 351.7879, dec: -50.1572, magnitude: 6.2, spectralType: 'B' },
        { ra: 351.7333, dec: 1.2556, magnitude: 4.94, spectralType: 'A' },  // 8Kap Psc
        { ra: 351.8117, dec: 1.1225, magnitude: 6.25, spectralType: 'G' },  // 9 Psc
        { ra: 351.7808, dec: 42.9119, magnitude: 5.75, spectralType: 'B' },  // 13 And
        { ra: 352.0029, dec: -35.5444, magnitude: 6.32, spectralType: 'K' },
        { ra: 351.9183, dec: 25.1672, magnitude: 5.98, spectralType: 'A' },  // 69 Peg
        { ra: 351.9921, dec: 6.3789, magnitude: 4.28, spectralType: 'K' },  // 10The Psc
        { ra: 352.0217, dec: -11.4497, magnitude: 6.37, spectralType: 'G' },
        { ra: 351.8192, dec: 70.3597, magnitude: 5.6, spectralType: 'A' },
        { ra: 352.2542, dec: -63.1108, magnitude: 5.68, spectralType: 'A' },
        { ra: 352.2533, dec: -44.4978, magnitude: 6.43, spectralType: 'K' },
        { ra: 352.2525, dec: -9.2661, magnitude: 6.18, spectralType: 'K' },
        { ra: 352.2733, dec: 23.0478, magnitude: 6.35, spectralType: 'G' },
        { ra: 352.2888, dec: 12.7606, magnitude: 4.55, spectralType: 'G' },  // 70 Peg
        { ra: 352.3838, dec: -4.5328, magnitude: 6.25, spectralType: 'K' },
        { ra: 352.5308, dec: 49.1331, magnitude: 6.17, spectralType: 'K' },
        { ra: 352.5083, dec: 58.5489, magnitude: 4.91, spectralType: 'B' },
        { ra: 352.6654, dec: 38.6619, magnitude: 6.05, spectralType: 'G' },
        { ra: 352.7546, dec: -6.2883, magnitude: 6.39, spectralType: 'K' },
        { ra: 352.8625, dec: -44.8436, magnitude: 6.02, spectralType: 'K' },
        { ra: 352.8225, dec: 39.2364, magnitude: 5.22, spectralType: 'K' },  // 14 And
        { ra: 352.8812, dec: -4.0872, magnitude: 6.49, spectralType: 'F' },
        { ra: 352.9254, dec: -21.3694, magnitude: 6.29, spectralType: 'A' },  // 100 Aqr
        { ra: 352.9296, dec: 28.4036, magnitude: 6.41, spectralType: 'A' },
        { ra: 352.99, dec: -1.0858, magnitude: 6.38, spectralType: 'K' },  // 13 Psc
        { ra: 353.3313, dec: -77.3853, magnitude: 5.81, spectralType: 'G' },
        { ra: 353.1025, dec: 34.9525, magnitude: 6.65, spectralType: 'B' },
        { ra: 353.2429, dec: -37.8183, magnitude: 4.37, spectralType: 'B' },  // Bet Scl
        { ra: 351.7533, dec: 87.3075, magnitude: 5.58, spectralType: 'A' },
        { ra: 353.3192, dec: -20.9144, magnitude: 4.71, spectralType: 'A' },  // 101 Aqr
        { ra: 353.3671, dec: 22.4989, magnitude: 5.32, spectralType: 'M' },  // 71 Peg
        { ra: 353.4279, dec: 45.0581, magnitude: 6.24, spectralType: 'G' },
        { ra: 353.4812, dec: 20.8408, magnitude: 6.06, spectralType: 'M' },
        { ra: 353.4883, dec: 31.3253, magnitude: 4.98, spectralType: 'K' },  // 72 Peg
        { ra: 353.5375, dec: -1.2475, magnitude: 5.87, spectralType: 'A' },  // 14 Psc
        { ra: 353.8029, dec: -64.6894, magnitude: 7.4, spectralType: 'F' },
        { ra: 353.7058, dec: -15.2458, magnitude: 5.96, spectralType: 'K' },
        { ra: 353.6562, dec: 40.2364, magnitude: 5.59, spectralType: 'A' },  // 15 And
        { ra: 353.6592, dec: 33.4972, magnitude: 5.63, spectralType: 'K' },  // 73 Peg
        { ra: 353.7692, dec: -42.615, magnitude: 4.71, spectralType: 'A' },  // Iot Phe
        { ra: 353.6946, dec: 38.0239, magnitude: 6.18, spectralType: 'K' },
        { ra: 353.8838, dec: -7.4644, magnitude: 6.39, spectralType: 'G' },
        { ra: 353.7458, dec: 71.6422, magnitude: 5.84, spectralType: 'G' },
        { ra: 353.9829, dec: 24.5611, magnitude: 6.45, spectralType: 'M' },
        { ra: 354.0971, dec: 2.1022, magnitude: 5.68, spectralType: 'F' },  // 16 Psc
        { ra: 354.1271, dec: 32.9042, magnitude: 6.35, spectralType: 'F' },
        { ra: 354.2725, dec: -31.8708, magnitude: 6.52, spectralType: 'K' },
        { ra: 354.6004, dec: -76.87, magnitude: 6.0, spectralType: 'K' },
        { ra: 354.415, dec: -13.0603, magnitude: 5.65, spectralType: 'G' },
        { ra: 354.4625, dec: -45.4925, magnitude: 4.74, spectralType: 'A' },
        { ra: 354.4158, dec: 16.8256, magnitude: 6.26, spectralType: 'A' },  // 74 Peg
        { ra: 354.3913, dec: 46.4581, magnitude: 3.82, spectralType: 'G' },  // 16Lam And
        { ra: 354.3833, dec: 44.4292, magnitude: 5.8, spectralType: 'B' },
        { ra: 354.4867, dec: 18.4006, magnitude: 5.53, spectralType: 'A' },  // 75 Peg
        { ra: 354.4942, dec: 46.1997, magnitude: 6.58, spectralType: 'G' },
        { ra: 354.5342, dec: 43.2681, magnitude: 4.29, spectralType: 'B' },  // 17Iot And
        { ra: 354.8667, dec: -46.6378, magnitude: 6.09, spectralType: 'A' },  // The Phe
        { ra: 354.7846, dec: 50.4717, magnitude: 5.3, spectralType: 'B' },  // 18 And
        { ra: 354.9462, dec: -14.2217, magnitude: 5.0, spectralType: 'F' },  // 102Ome1Aqr
        { ra: 354.9875, dec: 5.6264, magnitude: 4.13, spectralType: 'F' },  // 17Iot Psc
        { ra: 354.9796, dec: 9.6772, magnitude: 5.97, spectralType: 'A' },
        { ra: 354.7933, dec: 75.2928, magnitude: 5.95, spectralType: 'A' },
        { ra: 354.8379, dec: 74.0028, magnitude: 5.98, spectralType: 'G' },
        { ra: 355.0117, dec: 37.6525, magnitude: 6.53, spectralType: 'F' },
        { ra: 354.8367, dec: 77.6325, magnitude: 3.21, spectralType: 'K' },  // 35Gam Cep
        { ra: 355.1592, dec: -32.0731, magnitude: 5.31, spectralType: 'K' },  // Mu Scl
        { ra: 355.1021, dec: 44.3339, magnitude: 4.14, spectralType: 'B' },  // 19Kap And
        { ra: 355.1692, dec: 36.7208, magnitude: 6.23, spectralType: 'F' },
        { ra: 355.2792, dec: -24.1603, magnitude: 6.6, spectralType: 'M' },
        { ra: 355.2871, dec: -11.6806, magnitude: 5.89, spectralType: 'G' },
        { ra: 355.3937, dec: -18.0272, magnitude: 5.34, spectralType: 'K' },  // 103 Aqr
        { ra: 355.3621, dec: 49.5122, magnitude: 6.26, spectralType: 'A' },
        { ra: 355.4408, dec: -17.8164, magnitude: 4.82, spectralType: 'G' },  // 104 Aqr
        { ra: 355.4863, dec: 7.2506, magnitude: 5.89, spectralType: 'A' },
        { ra: 355.5117, dec: 1.78, magnitude: 4.5, spectralType: 'A' },  // 18Lam Psc
        { ra: 355.4771, dec: 57.26, magnitude: 6.24, spectralType: 'G' },
        { ra: 355.5617, dec: 44.9919, magnitude: 6.57, spectralType: 'K' },
        { ra: 355.6163, dec: -15.4478, magnitude: 5.28, spectralType: 'K' },
        { ra: 355.6804, dec: -14.545, magnitude: 4.49, spectralType: 'B' },  // 105Ome2Aqr
        { ra: 355.5867, dec: 64.5156, magnitude: 6.56, spectralType: 'M' },
        { ra: 355.6312, dec: 61.6794, magnitude: 6.4, spectralType: 'K' },
        { ra: 355.8433, dec: 10.3314, magnitude: 5.06, spectralType: 'M' },  // 77 Peg
        { ra: 355.9563, dec: -15.2844, magnitude: 6.36, spectralType: 'M' },
        { ra: 356.0058, dec: -45.0833, magnitude: 6.09, spectralType: 'K' },
        { ra: 356.1058, dec: -70.4903, magnitude: 6.07, spectralType: 'G' },
        { ra: 356.1696, dec: -78.7914, magnitude: 5.75, spectralType: 'K' },
        { ra: 356.05, dec: -64.4044, magnitude: 5.72, spectralType: 'K' },
        { ra: 355.9979, dec: 29.3617, magnitude: 4.93, spectralType: 'K' },  // 78 Peg
        { ra: 356.0504, dec: -18.2769, magnitude: 5.24, spectralType: 'B' },  // 106 Aqr
        { ra: 356.1204, dec: -26.2464, magnitude: 6.17, spectralType: 'F' },
        { ra: 356.2013, dec: 55.7997, magnitude: 6.51, spectralType: 'G' },
        { ra: 356.505, dec: -40.1825, magnitude: 6.31, spectralType: 'A' },
        { ra: 356.5038, dec: -18.6781, magnitude: 5.29, spectralType: 'F' },  // 107 Aqr
        { ra: 356.5088, dec: 46.4203, magnitude: 4.95, spectralType: 'G' },  // 20Psi And
        { ra: 356.5979, dec: 3.4867, magnitude: 5.04, spectralType: 'G' },  // 19 Psc
        { ra: 356.6529, dec: 66.7822, magnitude: 5.95, spectralType: 'B' },
        { ra: 356.8167, dec: -50.2267, magnitude: 5.18, spectralType: 'B' },  // Sig Phe
        { ra: 356.8471, dec: -68.3942, magnitude: 6.89, spectralType: 'F' },
        { ra: 356.7646, dec: 58.6519, magnitude: 4.87, spectralType: 'K' },  // 5Tau Cas
        { ra: 356.8163, dec: -11.9108, magnitude: 5.73, spectralType: 'K' },
        { ra: 356.7579, dec: 57.4514, magnitude: 5.51, spectralType: 'K' },
        { ra: 356.8883, dec: 46.8325, magnitude: 6.07, spectralType: 'B' },
        { ra: 356.9854, dec: -2.7617, magnitude: 5.49, spectralType: 'G' },  // 20 Psc
        { ra: 356.9783, dec: 67.8069, magnitude: 5.04, spectralType: 'A' },
        { ra: 357.1354, dec: -6.3806, magnitude: 6.07, spectralType: 'K' },
        { ra: 357.2054, dec: 2.2142, magnitude: 6.46, spectralType: 'F' },
        { ra: 357.2317, dec: -28.1303, magnitude: 4.57, spectralType: 'A' },  // Del Scl
        { ra: 357.1625, dec: 64.8764, magnitude: 6.41, spectralType: 'A' },
        { ra: 357.2092, dec: 62.2144, magnitude: 5.43, spectralType: 'A' },  // 6 Cas
        { ra: 357.2246, dec: 59.9789, magnitude: 6.34, spectralType: 'A' },
        { ra: 357.3, dec: 58.9631, magnitude: 6.33, spectralType: 'F' },
        { ra: 357.3817, dec: -15.8611, magnitude: 6.24, spectralType: 'K' },
        { ra: 357.3646, dec: 1.0761, magnitude: 5.77, spectralType: 'A' },  // 21 Psc
        { ra: 357.4362, dec: -62.8394, magnitude: 6.59, spectralType: 'K' },
        { ra: 357.4208, dec: 36.4253, magnitude: 5.9, spectralType: 'G' },
        { ra: 357.4142, dec: 28.8425, magnitude: 5.97, spectralType: 'A' },  // 79 Peg
        { ra: 357.4567, dec: -25.3314, magnitude: 6.42, spectralType: 'A' },
        { ra: 357.5612, dec: -9.9742, magnitude: 5.94, spectralType: 'K' },
        { ra: 357.5929, dec: 51.6217, magnitude: 6.44, spectralType: 'F' },
        { ra: 357.6388, dec: -14.4019, magnitude: 5.72, spectralType: 'K' },
        { ra: 357.8383, dec: 9.3133, magnitude: 5.79, spectralType: 'M' },  // 80 Peg
        { ra: 357.8388, dec: -18.9089, magnitude: 5.18, spectralType: 'B' },  // 108 Aqr
        { ra: 358.0267, dec: -82.0189, magnitude: 5.11, spectralType: 'G' },  // Gam1Oct
        { ra: 357.9913, dec: 2.9303, magnitude: 5.55, spectralType: 'K' },  // 22 Psc
        { ra: 357.99, dec: 77.5994, magnitude: 6.55, spectralType: 'F' },
        { ra: 358.0975, dec: 21.6708, magnitude: 6.11, spectralType: 'M' },
        { ra: 358.1221, dec: 19.1203, magnitude: 5.08, spectralType: 'M' },  // 81Phi Peg
        { ra: 358.125, dec: -14.2511, magnitude: 5.87, spectralType: 'K' },
        { ra: 358.1046, dec: 75.5447, magnitude: 6.39, spectralType: 'K' },
        { ra: 358.1546, dec: 10.9475, magnitude: 5.3, spectralType: 'A' },  // 82 Peg
        { ra: 358.2104, dec: -8.9967, magnitude: 5.75, spectralType: 'K' },
        { ra: 358.2317, dec: -3.1556, magnitude: 5.93, spectralType: 'G' },  // 24 Psc
        { ra: 358.27, dec: 2.0906, magnitude: 6.28, spectralType: 'A' },  // 25 Psc
        { ra: 358.3367, dec: -24.2292, magnitude: 6.24, spectralType: 'A' },
        { ra: 358.5892, dec: -27.0422, magnitude: 6.35, spectralType: 'A' },
        { ra: 358.5958, dec: 57.4994, magnitude: 4.54, spectralType: 'G' },  // 7Rho Cas
        { ra: 358.6608, dec: -40.3, magnitude: 6.03, spectralType: 'F' },
        { ra: 358.6942, dec: 0.1092, magnitude: 5.61, spectralType: 'M' },
        { ra: 358.7825, dec: 7.0711, magnitude: 6.21, spectralType: 'B' },  // 26 Psc
        { ra: 358.8192, dec: -31.9217, magnitude: 6.1, spectralType: 'B' },
        { ra: 358.8192, dec: -31.8842, magnitude: 6.83, spectralType: 'B' },
        { ra: 358.8458, dec: 25.955, magnitude: 6.54, spectralType: 'K' },
        { ra: 358.8904, dec: 57.4122, magnitude: 6.0, spectralType: 'B' },
        { ra: 358.89, dec: 47.3558, magnitude: 6.0, spectralType: 'G' },
        { ra: 359.1246, dec: -24.7372, magnitude: 6.31, spectralType: 'G' },
        { ra: 359.1729, dec: 22.6481, magnitude: 6.15, spectralType: 'M' },
        { ra: 359.1154, dec: 83.1911, magnitude: 6.59, spectralType: 'A' },
        { ra: 359.265, dec: 42.6583, magnitude: 5.97, spectralType: 'F' },
        { ra: 359.2846, dec: -26.6236, magnitude: 6.26, spectralType: 'K' },
        { ra: 359.2854, dec: 55.7058, magnitude: 5.55, spectralType: 'F' },
        { ra: 359.3329, dec: -62.9564, magnitude: 5.97, spectralType: 'A' },
        { ra: 359.3862, dec: -82.17, magnitude: 5.73, spectralType: 'K' },  // Gam2Oct
        { ra: 359.3967, dec: -64.2983, magnitude: 5.0, spectralType: 'A' },  // Eta Tuc
        { ra: 359.3896, dec: 60.0236, magnitude: 6.47, spectralType: 'B' },
        { ra: 359.4396, dec: 25.1414, magnitude: 4.66, spectralType: 'M' },  // 84Psi Peg
        { ra: 359.5883, dec: -15.8475, magnitude: 6.26, spectralType: 'K' },  // 1 Cet
        { ra: 359.6033, dec: 51.3886, magnitude: 4.8, spectralType: 'M' },
        { ra: 359.6683, dec: -3.5561, magnitude: 4.86, spectralType: 'G' },  // 27 Psc
        { ra: 359.705, dec: 32.3817, magnitude: 6.52, spectralType: 'B' },
        { ra: 359.7325, dec: -52.7458, magnitude: 5.13, spectralType: 'K' },  // Pi Phe
        { ra: 359.6937, dec: 46.4131, magnitude: 6.54, spectralType: 'B' },
        { ra: 359.7521, dec: 55.755, magnitude: 4.88, spectralType: 'B' },  // 8Sig Cas
        { ra: 359.8279, dec: 6.8633, magnitude: 4.01, spectralType: 'F' },  // 28Ome Psc
        { ra: 359.8663, dec: -29.485, magnitude: 5.62, spectralType: 'K' },
        { ra: 359.8717, dec: 33.7244, magnitude: 6.58, spectralType: 'G' },
        { ra: 359.8717, dec: 33.7244, magnitude: 6.58, spectralType: 'G' },
        { ra: 359.9792, dec: -65.5772, magnitude: 4.5, spectralType: 'B' },  // Eps Tuc
        { ra: 0.08, dec: -44.2906, magnitude: 6.29, spectralType: 'G' },
        { ra: 0.0996, dec: 26.9183, magnitude: 6.46, spectralType: 'F' },
        { ra: 0.1288, dec: 59.5597, magnitude: 6.19, spectralType: 'G' },
        { ra: 0.1821, dec: 45.2533, magnitude: 6.38, spectralType: 'B' },
        { ra: 0.2687, dec: -48.81, magnitude: 5.71, spectralType: 'G' },  // Tau Phe
        { ra: 0.3333, dec: -50.3372, magnitude: 5.53, spectralType: 'M' },
        { ra: 0.3304, dec: 49.9817, magnitude: 6.22, spectralType: 'G' },
        { ra: 0.3987, dec: -77.0658, magnitude: 4.78, spectralType: 'K' },  // The Oct
        { ra: 0.4037, dec: 61.2231, magnitude: 5.55, spectralType: 'F' },
        { ra: 0.4325, dec: 42.3672, magnitude: 6.25, spectralType: 'B' },
        { ra: 0.4558, dec: -3.0275, magnitude: 5.1, spectralType: 'B' },  // 29 Psc
        { ra: 0.5425, dec: 27.0819, magnitude: 5.75, spectralType: 'G' },  // 85 Peg
        { ra: 0.49, dec: -6.0142, magnitude: 4.41, spectralType: 'M' },  // 30 Psc
        { ra: 0.5304, dec: -14.6761, magnitude: 7.1, spectralType: 'G' },
        { ra: 0.5829, dec: -29.7203, magnitude: 5.01, spectralType: 'B' },  // Zet Scl
        { ra: 0.6008, dec: 8.9569, magnitude: 6.32, spectralType: 'A' },  // 31 Psc
        { ra: 0.6238, dec: 8.4856, magnitude: 5.63, spectralType: 'F' },  // 32 Psc
        { ra: 0.6504, dec: 66.0989, magnitude: 5.86, spectralType: 'G' },
        { ra: 0.74, dec: -20.0461, magnitude: 6.25, spectralType: 'F' },
        { ra: 0.7821, dec: -24.1453, magnitude: 6.44, spectralType: 'G' },
        { ra: 0.8571, dec: 63.6419, magnitude: 6.24, spectralType: 'B' },
        { ra: 0.935, dec: -17.3361, magnitude: 4.55, spectralType: 'B' },  // 2 Cet
        { ra: 0.9662, dec: 66.7122, magnitude: 6.29, spectralType: 'M' },
        { ra: 1.0567, dec: 62.2878, magnitude: 5.88, spectralType: 'A' },  // 9 Cas
        { ra: 1.0821, dec: -16.5289, magnitude: 5.78, spectralType: 'K' },
        { ra: 1.0846, dec: -29.2686, magnitude: 6.4, spectralType: 'A' },
        { ra: 1.1254, dec: -10.5094, magnitude: 4.94, spectralType: 'K' },  // 3 Cet
        { ra: 1.175, dec: 67.1667, magnitude: 5.67, spectralType: 'K' },
        { ra: 1.1529, dec: 42.0922, magnitude: 6.01, spectralType: 'B' },
        { ra: 1.1279, dec: -72.8978, magnitude: 7.31, spectralType: 'F' },
        { ra: 1.2242, dec: 34.6597, magnitude: 6.12, spectralType: 'G' },
        { ra: 1.1721, dec: -71.4369, magnitude: 5.59, spectralType: 'B' },
        { ra: 1.2333, dec: 26.6489, magnitude: 6.25, spectralType: 'K' },
        { ra: 1.2758, dec: 61.3142, magnitude: 5.8, spectralType: 'B' },
    ]
};
