export const QUIZ_DATA = {
  'what-is-a-star': {
    title: 'What Is a Star?',
    beginner: [
      {
        question: 'What process powers a star?',
        options: ['Chemical combustion', 'Nuclear fusion', 'Electrical discharge', 'Gravity alone', 'Radioactive decay'],
        correct: 1,
        explanation: 'Stars are powered by nuclear fusion — hydrogen atoms are crushed together to form helium, releasing enormous amounts of energy.'
      },
      {
        question: 'What holds a star together against its own outward pressure?',
        options: ['Magnetic fields', 'Dark matter', 'Gravity', 'Electromagnetic force', 'Nuclear force'],
        correct: 2,
        explanation: 'A star is held together by its own gravity. The outward pressure from nuclear fusion balances this inward pull, keeping the star stable.'
      },
      {
        question: 'Roughly how many stars are there in the Milky Way?',
        options: ['About 1 million', 'About 1 billion', '200–400 billion', '1 trillion', 'About 10 billion'],
        correct: 2,
        explanation: 'There are an estimated 200–400 billion stars in the Milky Way galaxy alone.'
      }
    ],
    intermediate: [
      {
        question: 'What two forces are in balance in a stable main-sequence star?',
        options: ['Magnetic force and gravity', 'Radiation pressure and gravity', 'Nuclear force and electromagnetic force', 'Dark energy and gravity', 'Centrifugal force and gravity'],
        correct: 1,
        explanation: 'A star is in hydrostatic equilibrium — the outward radiation pressure from nuclear fusion exactly balances the inward pull of gravity.'
      },
      {
        question: 'What does our Sun primarily fuse in its core?',
        options: ['Helium into carbon', 'Hydrogen into helium', 'Carbon into oxygen', 'Uranium into lead', 'Lithium into beryllium'],
        correct: 1,
        explanation: 'The Sun fuses hydrogen into helium via the proton-proton chain, releasing the energy that powers the entire solar system.'
      },
      {
        question: 'What spectral type is our Sun?',
        options: ['Red dwarf (M-type)', 'Blue giant (O-type)', 'G-type main-sequence star', 'White dwarf', 'K-type orange dwarf'],
        correct: 2,
        explanation: 'The Sun is a G-type main-sequence star — an ordinary, medium-sized star about halfway through its 10-billion-year life.'
      }
    ],
    advanced: [
      {
        question: 'In what fusion process do low-mass stars like the Sun generate most of their energy?',
        options: ['CNO cycle', 'Proton-proton chain', 'Triple-alpha process', 'r-process', 'S-process'],
        correct: 1,
        explanation: 'The Sun uses the proton-proton (pp) chain, where four protons fuse to form one helium-4 nucleus, releasing energy via E=mc².'
      },
      {
        question: 'What is the approximate temperature at the Sun\'s core?',
        options: ['5,500°C', '1 million °C', '15 million °C', '100 billion °C', '1 billion °C'],
        correct: 2,
        explanation: 'The Sun\'s core reaches ~15 million °C and 250 billion atmospheres of pressure — the extreme conditions needed for hydrogen fusion.'
      },
      {
        question: 'What state of matter are stars primarily composed of?',
        options: ['Gas', 'Liquid', 'Solid', 'Plasma', 'Bose-Einstein condensate'],
        correct: 3,
        explanation: 'Stars are made of plasma — a superheated state where electrons are stripped from atoms. Unlike gas, plasma is electrically conductive.'
      }
    ]
  },

  'stellar-death-low-mass': {
    title: 'Death of a Low-Mass Star',
    beginner: [
      {
        question: 'What do stars like our Sun become when they die?',
        options: ['Black holes', 'Neutron stars', 'White dwarfs', 'Brown dwarfs', 'Red supergiants forever'],
        correct: 2,
        explanation: 'Stars like the Sun end their lives as white dwarfs — dense stellar remnants about the size of Earth but with the mass of the Sun.'
      },
      {
        question: 'What glowing shell of gas forms around a dying low-mass star?',
        options: ['Solar wind cloud', 'Planetary nebula', 'Supernova remnant', 'Accretion disk', 'Stellar corona'],
        correct: 1,
        explanation: 'A dying low-mass star puffs off its outer layers, creating a beautiful glowing shell called a planetary nebula.'
      },
      {
        question: 'Roughly how much would a teaspoon of white dwarf material weigh?',
        options: ['About 1 kg', 'About 1 tonne', 'About 15 tonnes', 'About 1 million tonnes', 'About 100 kg'],
        correct: 2,
        explanation: 'White dwarf material is extraordinarily dense — a teaspoon weighs roughly 15 tonnes.'
      }
    ],
    intermediate: [
      {
        question: 'What force supports a white dwarf against further gravitational collapse?',
        options: ['Nuclear fusion', 'Electron degeneracy pressure', 'Thermal pressure', 'Magnetic field pressure', 'Radiation pressure'],
        correct: 1,
        explanation: 'White dwarfs are supported by electron degeneracy pressure — a quantum mechanical effect preventing electrons from being forced into the same quantum state.'
      },
      {
        question: 'What happens if a white dwarf accretes enough mass to exceed the Chandrasekhar limit?',
        options: ['It becomes a neutron star directly', 'It explodes as a Type Ia supernova', 'It collapses into a black hole', 'It starts fusion again and becomes a star', 'It ejects its mass in a nova'],
        correct: 1,
        explanation: 'If a white dwarf accumulates mass from a companion and exceeds ~1.4 solar masses (the Chandrasekhar limit), it triggers a runaway thermonuclear explosion — a Type Ia supernova.'
      },
      {
        question: 'What will the Sun\'s outer layers become in about 5 billion years?',
        options: ['A black hole', 'A neutron star', 'A planetary nebula', 'A brown dwarf', 'A magnetar'],
        correct: 2,
        explanation: 'In ~5 billion years, the Sun will swell into a red giant, shed its outer layers as a planetary nebula, and its core will become a white dwarf.'
      }
    ],
    advanced: [
      {
        question: 'The Chandrasekhar limit is approximately what value?',
        options: ['0.8 M☉', '1.4 M☉', '3.0 M☉', '5.0 M☉', '2.1 M☉'],
        correct: 1,
        explanation: 'The Chandrasekhar limit is ~1.4 M☉ — the maximum mass electron degeneracy pressure can support. Derived from special relativistic quantum mechanics by S. Chandrasekhar in 1930.'
      },
      {
        question: 'Why do no black dwarfs exist yet?',
        options: ['They collapse into black holes immediately', 'The universe is not old enough — no white dwarf has had time to cool completely', 'They require special conditions that never occur', 'White dwarfs never fully cool down', 'Black dwarfs were destroyed in the Big Bang'],
        correct: 1,
        explanation: 'Black dwarfs are the theoretical endpoint of white dwarf cooling, but the current age of the universe (~13.8 Gyr) is far shorter than the cooling timescale — none yet exist.'
      },
      {
        question: 'What phase does an intermediate-mass star pass through just before the planetary nebula stage?',
        options: ['Horizontal branch', 'Main sequence extension', 'Asymptotic Giant Branch (AGB)', 'Wolf-Rayet phase', 'T Tauri phase'],
        correct: 2,
        explanation: 'Stars like the Sun pass through the Asymptotic Giant Branch (AGB) phase — where thermal pulses and strong stellar winds drive off the envelope — before the planetary nebula stage.'
      }
    ]
  },

  'stellar-death-massive': {
    title: 'Death of a Massive Star',
    beginner: [
      {
        question: 'How do stars more than 8 times the Sun\'s mass end their lives?',
        options: ['They fade quietly into white dwarfs', 'They explode as supernovae', 'They become brown dwarfs', 'They are absorbed by nearby black holes', 'They slowly evaporate into space'],
        correct: 1,
        explanation: 'Massive stars end their lives in violent core-collapse supernova explosions — some of the most energetic events in the universe.'
      },
      {
        question: 'Why does fusion stop when an iron core forms inside a massive star?',
        options: ['Iron melts too easily under pressure', 'Fusing iron absorbs energy rather than releasing it', 'Iron has no free neutrons', 'Iron is too radioactive', 'Iron repels other nuclei'],
        correct: 1,
        explanation: 'Iron has the highest nuclear binding energy per nucleon — fusing it requires more energy than it releases, so the energy source shuts off and the core collapses.'
      },
      {
        question: 'What can remain after a massive star\'s supernova explosion?',
        options: ['A planet', 'A neutron star or black hole', 'A red dwarf', 'Nothing remains', 'A brown dwarf'],
        correct: 1,
        explanation: 'After a core-collapse supernova, the remnant is either a neutron star or a black hole, depending on how much mass the original star had.'
      }
    ],
    intermediate: [
      {
        question: 'How quickly does a massive star\'s iron core collapse in a supernova?',
        options: ['Over millions of years', 'Over thousands of years', 'In about one week', 'In less than a second', 'In about one day'],
        correct: 3,
        explanation: 'The iron core collapses catastrophically in milliseconds — shrinking from Earth-sized to ~20 km across. The rebound shockwave triggers the visible supernova explosion.'
      },
      {
        question: 'What important elements do supernovae scatter into space?',
        options: ['Only hydrogen and helium', 'Only carbon and oxygen', 'Heavy elements including gold, silver, and uranium', 'Only iron', 'Only nitrogen and sulfur'],
        correct: 2,
        explanation: 'Supernovae scatter heavy elements synthesized in the star — including gold, silver, uranium — into the interstellar medium, seeding future generations of stars and planets.'
      },
      {
        question: 'How bright can a supernova get at its peak?',
        options: ['About as bright as the full Moon from Earth', 'About as bright as the Sun', 'Brighter than an entire galaxy', 'Only visible through a telescope', 'About as bright as a comet'],
        correct: 2,
        explanation: 'A supernova at peak can briefly outshine the entire galaxy containing it — releasing more energy in seconds than the Sun will emit over its entire lifetime.'
      }
    ],
    advanced: [
      {
        question: 'What drives the supernova shock in the "neutrino-driven" mechanism?',
        options: ['Magnetic reconnection from the collapsing core', 'Neutrinos depositing ~1% of their energy behind the stalled shock, reviving it', 'The kinetic energy of the iron core bounce directly', 'Photon pressure from the newborn neutron star', 'Convective overstability in the proto-neutron star'],
        correct: 1,
        explanation: 'The stalled bounce shock is revived by neutrino energy deposition — ~3×10⁴⁶ J of neutrinos are released, and even 1% absorbed by the shocked material is enough to power the explosion.'
      },
      {
        question: 'What fraction of a core-collapse supernova\'s energy is carried away by neutrinos?',
        options: ['About 1%', 'About 10%', 'About 50%', 'About 99%', 'About 75%'],
        correct: 3,
        explanation: 'About 99% of the gravitational binding energy released in core collapse is carried away by neutrinos. The visible explosion and light are powered by only ~1% of the total energy.'
      },
      {
        question: 'What is stellar nucleosynthesis?',
        options: ['Star formation from a gas cloud', 'Creation of heavy elements inside stars and supernovae through nuclear reactions', 'The collapse of a star into a neutron star', 'A star accreting mass from a companion', 'The process of a star leaving the main sequence'],
        correct: 1,
        explanation: 'Stellar nucleosynthesis — the Burbidge-Burbidge-Fowler-Hoyle (B²FH) framework — explains how elements are forged in stellar interiors and supernova explosions, explaining the cosmic abundance of the elements.'
      }
    ]
  },

  'what-is-a-black-hole': {
    title: 'What Is a Black Hole?',
    beginner: [
      {
        question: 'What is a black hole?',
        options: ['A very dark star', 'A region of space where gravity is so strong nothing — not even light — can escape', 'A portal to another universe', 'An area of space completely empty of matter', 'A collapsed neutron star visible in X-rays'],
        correct: 1,
        explanation: 'A black hole is a region of spacetime where gravity is so extreme that nothing — not even light — can escape once it crosses the event horizon.'
      },
      {
        question: 'What is the "point of no return" boundary of a black hole called?',
        options: ['The singularity', 'The photon sphere', 'The event horizon', 'The accretion disk', 'The ergosphere'],
        correct: 2,
        explanation: 'The event horizon is the boundary of a black hole — the point of no return. Anything crossing it cannot escape the black hole\'s gravity.'
      },
      {
        question: 'What creates most stellar-mass black holes?',
        options: ['Two white dwarfs colliding', 'The core collapse of a very massive star', 'Two neutron stars spinning apart', 'A large asteroid hitting a star', 'Dark matter concentrating in one place'],
        correct: 1,
        explanation: 'Most stellar-mass black holes form when the core of a very massive star (roughly 20+ solar masses) collapses at the end of its life in a supernova explosion.'
      }
    ],
    intermediate: [
      {
        question: 'What does general relativity predict at the centre of a black hole?',
        options: ['A neutron star', 'A very dense planet', 'A singularity of infinite density', 'A compressed white dwarf', 'A quark star'],
        correct: 2,
        explanation: 'General relativity predicts a singularity at the centre — a point of infinite density where spacetime curvature becomes infinite and our current physics breaks down.'
      },
      {
        question: 'How was the first real image of a black hole produced in 2019?',
        options: ['A probe was sent near a black hole', 'The Event Horizon Telescope linked radio observatories worldwide to image M87\'s black hole', 'A military satellite captured it', 'Computer simulation only', 'The Hubble Space Telescope photographed it directly'],
        correct: 1,
        explanation: 'The Event Horizon Telescope (EHT) — a global network of radio observatories acting as a virtual Earth-sized telescope — imaged the supermassive black hole in galaxy M87 in 2019.'
      },
      {
        question: 'What does time dilation near a black hole mean?',
        options: ['Time stops existing near a black hole', 'Time passes more slowly in stronger gravitational fields', 'Time passes faster near a black hole', 'Time reversal occurs near the event horizon', 'Time dilation only applies to moving objects'],
        correct: 1,
        explanation: 'General relativity predicts gravitational time dilation — clocks run slower in stronger gravitational fields. Near a black hole\'s event horizon, time slows dramatically relative to a distant observer.'
      }
    ],
    advanced: [
      {
        question: 'What is Hawking radiation?',
        options: ['X-ray emission from the accretion disk', 'Theoretical thermal radiation from black holes due to quantum vacuum fluctuations at the event horizon', 'Gamma rays from merging black holes', 'Radiation from electrons falling into black holes', 'Gravitational waves emitted during black hole formation'],
        correct: 1,
        explanation: 'Hawking radiation is Stephen Hawking\'s theoretical prediction that black holes emit thermal radiation via quantum effects near the event horizon, causing them to slowly lose mass and eventually evaporate.'
      },
      {
        question: 'What is the Schwarzschild radius?',
        options: ['The radius at which black hole spin is maximum', 'The critical radius — if any mass is compressed within it, a black hole forms', 'The radius of a stable accretion disk', 'The maximum radius a neutron star can reach', 'The radius of the photon sphere'],
        correct: 1,
        explanation: 'The Schwarzschild radius r_s = 2GM/c² is the radius within which a mass must be compressed to form a black hole. For the Sun it is ~3 km; for Earth it is ~9 mm.'
      },
      {
        question: 'What is the black hole information paradox?',
        options: ['We cannot measure a black hole\'s mass precisely', 'Whether quantum information is permanently destroyed when matter falls in — violating unitarity in quantum mechanics', 'Black holes cannot be directly observed', 'Information cannot travel faster than light near a black hole', 'Whether black holes have electric charge'],
        correct: 1,
        explanation: 'The information paradox asks whether quantum information is destroyed when a black hole evaporates via Hawking radiation. Permanent loss would violate unitarity — one of the deepest unsolved problems connecting gravity and quantum mechanics.'
      }
    ]
  },

  'supermassive-black-holes': {
    title: 'Supermassive Black Holes',
    beginner: [
      {
        question: 'Where are supermassive black holes typically found?',
        options: ['At the outer edges of galaxies', 'At the centres of most large galaxies', 'In star clusters', 'Drifting alone in intergalactic space', 'In planetary nebulae'],
        correct: 1,
        explanation: 'Supermassive black holes reside at the centres of most large galaxies — including our Milky Way, where Sagittarius A* lurks.'
      },
      {
        question: 'How massive is Sagittarius A*, the black hole at the centre of our Milky Way?',
        options: ['About 100 solar masses', 'About 10,000 solar masses', 'About 4 million solar masses', 'About 4 billion solar masses', 'About 400,000 solar masses'],
        correct: 2,
        explanation: 'Sagittarius A* has a mass of about 4 million times the Sun — packed into a region smaller than our solar system.'
      },
      {
        question: 'What does an actively feeding supermassive black hole create?',
        options: ['A new star', 'A quasar — one of the brightest objects in the universe', 'A new planet system', 'A planetary nebula', 'A kilonova'],
        correct: 1,
        explanation: 'When a supermassive black hole actively consumes material, the superheated accretion disk shines as a quasar — sometimes outshining the entire host galaxy.'
      }
    ],
    intermediate: [
      {
        question: 'What role do supermassive black holes play in their host galaxies?',
        options: ['Slowly consuming the entire galaxy over time', 'Regulating star formation through AGN feedback — jets and radiation that heat or expel gas', 'Having no effect beyond their immediate vicinity', 'Causing all stars to directly orbit them', 'Supplying the galaxy with fresh hydrogen'],
        correct: 1,
        explanation: 'Supermassive black holes regulate star formation through AGN feedback — relativistic jets and radiation can heat or expel the gas needed for new stars, quenching star formation in massive galaxies.'
      },
      {
        question: 'What proved our Milky Way has a supermassive black hole?',
        options: ['Direct imaging of the black hole itself (first)', 'Tracking stellar orbits near the galactic centre over decades — they can only be explained by a 4-million-solar-mass object', 'Radio emissions from the centre', 'Gravitational waves from the centre', 'X-ray flares from the galactic plane'],
        correct: 1,
        explanation: 'Astronomers tracked orbits of stars near the galactic centre (especially S2) for decades. The orbital parameters conclusively require an invisible compact object of 4 million solar masses.'
      },
      {
        question: 'How do supermassive black holes most likely form?',
        options: ['From single massive stars', 'Through mergers of smaller black holes, direct collapse of massive gas clouds, or rapid accretion from stellar-mass seeds', 'From neutron star collisions only', 'From dark matter concentrations alone', 'From white dwarf collisions in globular clusters'],
        correct: 1,
        explanation: 'The origin of supermassive black holes is actively debated. Proposed mechanisms include hierarchical mergers, direct collapse of massive primordial gas clouds (DCBHs), and rapid accretion from seed black holes in the early universe.'
      }
    ],
    advanced: [
      {
        question: 'What is the M-sigma (M-σ) relation?',
        options: ['A formula relating black hole mass to spin', 'The tight correlation between supermassive black hole mass and stellar velocity dispersion of the host galaxy bulge', 'The relation between jet length and black hole charge', 'A measure of black hole mass vs. accretion rate', 'The correlation between black hole mass and galaxy luminosity'],
        correct: 1,
        explanation: 'The M-σ relation is the tight empirical correlation between supermassive black hole mass and the velocity dispersion σ of the host galaxy bulge — strong evidence that black holes and galaxies co-evolve through AGN feedback.'
      },
      {
        question: 'What is a tidal disruption event (TDE)?',
        options: ['When a galaxy is torn apart by a cluster of black holes', 'When a star wandering too close to a supermassive black hole is shredded by tidal forces, producing a bright multiwavelength flare', 'When a black hole\'s tidal forces affect nearby planets', 'When gravitational waves disrupt a black hole\'s accretion disk', 'When two black holes tidally lock during a merger'],
        correct: 1,
        explanation: 'A TDE occurs when a star passes within the tidal disruption radius of a supermassive black hole and is shredded. About half the stellar debris falls back to form an accretion disk, producing a luminous flare detectable across billions of light-years.'
      },
      {
        question: 'What mechanism powers relativistic jets from spinning black holes?',
        options: ['Thermal pressure from the accretion disk alone', 'The Blandford-Znajek mechanism — extracting rotational energy from a spinning (Kerr) black hole via its magnetic field', 'Radiation pressure from Hawking radiation', 'Neutrino emission from the event horizon', 'The Penrose process via particle pair production in the ergosphere'],
        correct: 1,
        explanation: 'The Blandford-Znajek mechanism extracts rotational energy from a Kerr (spinning) black hole through large-scale magnetic fields threading the ergosphere, powering highly collimated relativistic jets.'
      }
    ]
  },

  'what-is-supernova': {
    title: 'What Is a Supernova?',
    beginner: [
      {
        question: 'What is a supernova?',
        options: ['A very bright star that lasts billions of years', 'A catastrophic stellar explosion — one of the most energetic events in the universe', 'A new galaxy being born', 'A collision between two asteroids', 'A star emerging from a nebula'],
        correct: 1,
        explanation: 'A supernova is an incredibly powerful stellar explosion that can briefly outshine an entire galaxy, scattering heavy elements across space.'
      },
      {
        question: 'What important role do supernovae play in the universe?',
        options: ['They destroy all nearby life', 'They forge and spread heavy elements like carbon, iron, and gold throughout space', 'They create new galaxies', 'They clear space of old stars', 'They generate all of the universe\'s dark matter'],
        correct: 1,
        explanation: 'Supernovae are cosmic element factories — they forge and scatter heavy elements throughout space, providing the building blocks for planets, chemistry, and life.'
      },
      {
        question: 'Can a supernova be visible to the naked eye during daylight?',
        options: ['Never under any circumstances', 'Only with special filters', 'Yes — some historical supernovae were visible in daylight for weeks', 'Only in polar regions', 'Only from the southern hemisphere'],
        correct: 2,
        explanation: 'Yes — the supernova of 1006 AD was bright enough to cast shadows at night, and the one in 1054 AD (which created the Crab Nebula) was visible in daylight for 23 days.'
      }
    ],
    intermediate: [
      {
        question: 'What are the two main types of supernova?',
        options: ['Type 1 (red) and Type 2 (blue) based on colour', 'Type Ia (white dwarf exceeds mass limit) and Type II/core-collapse (massive star\'s iron core fails)', 'Thermal and magnetic types', 'Active and passive types', 'Gravitational and thermonuclear types'],
        correct: 1,
        explanation: 'Type Ia supernovae occur when a white dwarf in a binary system exceeds the Chandrasekhar limit and detonates. Type II (core-collapse) occur when a massive star\'s iron core collapses.'
      },
      {
        question: 'Why are Type Ia supernovae called "standard candles"?',
        options: ['They always occur in pairs', 'They have a nearly uniform peak luminosity, allowing precise distance measurements', 'They only occur near galaxies with candle-shaped structure', 'They emit a unique spectrum visible only in ultraviolet', 'They burn for exactly the same duration every time'],
        correct: 1,
        explanation: 'Type Ia supernovae have a standardizable peak brightness. By comparing apparent and expected brightness, astronomers measure distances across billions of light-years with high precision.'
      },
      {
        question: 'What is a supernova remnant?',
        options: ['The star that survived the explosion', 'The expanding shell of ejected gas and energetic particles left after the explosion', 'The black hole formed by the explosion', 'A planet destroyed by the blast', 'A companion star left behind after the explosion'],
        correct: 1,
        explanation: 'A supernova remnant is the expanding shell of ejected stellar material — like the Crab Nebula or Cassiopeia A — that glows for thousands of years as it sweeps up interstellar gas.'
      }
    ],
    advanced: [
      {
        question: 'What discovery using Type Ia supernovae earned the 2011 Nobel Prize in Physics?',
        options: ['That the universe is 13.8 billion years old', 'That the expansion of the universe is accelerating — implying dark energy', 'That most galaxies contain supermassive black holes', 'That supernovae created the heavy elements', 'That dark matter exists'],
        correct: 1,
        explanation: 'Perlmutter, Schmidt, and Riess used Type Ia supernovae at high redshift to discover that the universe\'s expansion is accelerating — evidence for dark energy — earning the 2011 Nobel Prize in Physics.'
      },
      {
        question: 'How do supernovae help trigger new star formation?',
        options: ['By destroying all nearby gas clouds permanently', 'Their shockwaves compress nearby molecular clouds above their Jeans mass, triggering gravitational collapse', 'They have no effect on star formation', 'They only affect star formation in elliptical galaxies', 'By heating gas to temperatures required for fusion'],
        correct: 1,
        explanation: 'Supernova shockwaves can compress nearby molecular clouds beyond their Jeans instability threshold, triggering gravitational collapse and a new round of star formation — a self-perpetuating galactic cycle.'
      },
      {
        question: 'What is a pair-instability supernova?',
        options: ['A supernova from two stars directly colliding', 'An explosion in very massive stars when gamma rays create electron-positron pairs, reducing radiation pressure and causing runaway collapse', 'A supernova with no compact remnant that leaves behind a black hole', 'Both B and C — a total disruption leaving no remnant', 'A supernova caused by two merging white dwarfs'],
        correct: 3,
        explanation: 'In stars >~150 M☉, high-energy photons create electron-positron pairs, reducing radiation pressure and causing runaway collapse. The resulting nuclear burning completely disrupts the star — no remnant remains — and the explosion can be 10–100× brighter than a normal supernova.'
      }
    ]
  },

  'neutron-stars': {
    title: 'Neutron Stars',
    beginner: [
      {
        question: 'What is a neutron star?',
        options: ['A star made of dark matter', 'An incredibly dense stellar remnant compressed to ~20 km across but containing 1–3 solar masses', 'A star with no protons, only neutrons in its core', 'A failed star that never ignited fusion', 'A white dwarf that has cooled completely'],
        correct: 1,
        explanation: 'A neutron star is the extremely dense remnant left after a massive star\'s core-collapse supernova. It is about 20 km across but contains 1–3 solar masses — so dense it is composed almost entirely of neutrons.'
      },
      {
        question: 'What is a pulsar?',
        options: ['A type of quasar', 'A rapidly rotating neutron star that emits beams of electromagnetic radiation like a cosmic lighthouse', 'A pulsating variable star', 'A type of gamma-ray burst source', 'An oscillating white dwarf'],
        correct: 1,
        explanation: 'A pulsar is a rapidly spinning neutron star whose magnetic poles emit beams of radiation. As it rotates, these beams sweep Earth at incredibly precise intervals — some more accurate than atomic clocks.'
      },
      {
        question: 'How does the density of neutron star matter compare to ordinary matter?',
        options: ['About the same as iron', 'About 10 times denser than iron', 'A teaspoon weighs roughly 4 billion tonnes', 'A teaspoon weighs about 15 tonnes', 'About the same as a white dwarf'],
        correct: 2,
        explanation: 'Neutron star matter is unimaginably dense — a teaspoon weighs roughly 4 billion tonnes, comparable to the mass of all Earth\'s oceans compressed into a sugar cube.'
      }
    ],
    intermediate: [
      {
        question: 'What force supports a neutron star against gravitational collapse?',
        options: ['Nuclear fusion', 'Thermal pressure', 'Neutron degeneracy pressure', 'Magnetic field pressure', 'Strong nuclear force repulsion'],
        correct: 2,
        explanation: 'Neutron stars are supported by neutron degeneracy pressure — a quantum mechanical effect (Pauli exclusion principle) preventing neutrons from occupying the same quantum state.'
      },
      {
        question: 'What cataclysmic event do two merging neutron stars produce?',
        options: ['A white dwarf', 'A kilonova — forging gold, platinum, and other heavy elements — plus gravitational waves', 'They simply form a larger neutron star always', 'Only a gamma-ray burst, nothing else', 'A Type Ia supernova'],
        correct: 1,
        explanation: 'Neutron star mergers produce kilonovae — brilliant explosions forging heavy r-process elements (gold, platinum, uranium) — and emit gravitational waves detectable by LIGO/Virgo.'
      },
      {
        question: 'Why was GW170817 historically significant?',
        options: ['It was the first gravitational wave detection ever', 'It was the first multi-messenger event — observed simultaneously in gravitational waves and across the full electromagnetic spectrum', 'It was the most massive merger ever detected', 'It proved that black holes merge', 'It confirmed the existence of neutron stars'],
        correct: 1,
        explanation: 'GW170817 (2017) was the first multi-messenger astrophysical event — simultaneously detected in gravitational waves by LIGO/Virgo and across the entire electromagnetic spectrum, from gamma-rays to radio.'
      }
    ],
    advanced: [
      {
        question: 'What is the TOV (Tolman–Oppenheimer–Volkoff) limit?',
        options: ['The minimum mass for neutron star formation', 'The maximum mass (~2–3 M☉) a neutron star can have before collapsing into a black hole', 'The maximum spin rate of a millisecond pulsar', 'The maximum surface temperature of a neutron star', 'The minimum radius a neutron star can have'],
        correct: 1,
        explanation: 'The TOV limit (~2–3 M☉) is the maximum mass neutron degeneracy pressure can support. Above it, collapse to a black hole is inevitable. Its exact value depends on the neutron star equation of state, which remains uncertain.'
      },
      {
        question: 'What makes magnetars unique among neutron stars?',
        options: ['They spin slower than all other neutron stars', 'They possess extraordinarily powerful magnetic fields (~10¹⁵ gauss) — the strongest known in the universe', 'They are the only neutron stars that emit X-rays', 'They are made of a different kind of matter', 'They have no solid crust unlike other neutron stars'],
        correct: 1,
        explanation: 'Magnetars have magnetic fields of ~10¹⁵ gauss — a quadrillion times Earth\'s field. This magnetic energy powers giant flares that can be detected across the galaxy. SGR 1806-20\'s 2004 flare briefly ionized Earth\'s upper atmosphere from 50,000 light-years away.'
      },
      {
        question: 'What is the r-process in neutron star mergers?',
        options: ['Rapid radioactive decay of neutron-rich nuclei', 'Rapid neutron capture nucleosynthesis — nuclei absorb neutrons faster than they can beta-decay, building up heavy elements', 'The process of neutron star spin-down (rotational energy loss)', 'Reionization of surrounding gas in merger events', 'Relativistic jet formation from the merger remnant'],
        correct: 1,
        explanation: 'The r-process (rapid neutron capture) occurs in neutron-rich environments. Seed nuclei rapidly capture free neutrons before they can decay, building neutron-rich isotopes that then beta-decay to stable heavy elements — gold, platinum, uranium, and more.'
      }
    ]
  },

  'kilonovas': {
    title: 'Kilonovae',
    beginner: [
      {
        question: 'What event produces a kilonova?',
        options: ['A massive star exploding alone', 'Two neutron stars (or a neutron star and black hole) colliding and merging', 'A white dwarf exceeding its mass limit', 'A gamma-ray burst striking a nebula', 'A supergiant star shedding its outer layers'],
        correct: 1,
        explanation: 'Kilonovae are produced by the merger of two neutron stars or a neutron star and a black hole. The collision ejects heavy-element-rich material and shines about 1,000 times brighter than a classical nova.'
      },
      {
        question: 'What precious materials are forged in kilonovae?',
        options: ['Iron and nickel', 'Aluminium and titanium', 'Gold, platinum, and other heavy elements', 'Carbon and silicon', 'Oxygen and calcium'],
        correct: 2,
        explanation: 'Kilonovae are the universe\'s heavy-element factories — the merger ejects r-process elements including gold, platinum, europium, strontium, and uranium. The gold in your jewelry likely originated in a kilonova.'
      },
      {
        question: 'What makes GW170817 important to modern astronomy?',
        options: ['It was the most energetic event ever recorded', 'It was detected in both gravitational waves and across the electromagnetic spectrum — the first multi-messenger event', 'It occurred in our own galaxy', 'It disproved Einstein\'s relativity', 'It was the first observation of a black hole'],
        correct: 1,
        explanation: 'GW170817 opened the era of multi-messenger astronomy — simultaneously detected in gravitational waves (LIGO/Virgo) and across the full spectrum from gamma-rays to radio, providing unprecedented insight into neutron star physics.'
      }
    ],
    intermediate: [
      {
        question: 'Why do kilonovae appear red?',
        options: ['Extreme heat reddens the emission', 'Heavy lanthanide elements absorb blue/UV light — emission shifts to red and near-infrared', 'Doppler redshift from the explosion speed', 'The neutron star magnetic field reddens the light', 'The ejecta is too cool to emit blue light'],
        correct: 1,
        explanation: 'Freshly synthesized heavy lanthanide elements have very high opacity to blue and ultraviolet light but are more transparent at red and infrared wavelengths — causing kilonovae to appear distinctly red and fade into the near-infrared.'
      },
      {
        question: 'Approximately how much gold can a single kilonova produce?',
        options: ['A few grams', 'About one kilogram', 'Several Earth masses worth of gold', 'One solar mass of gold', 'About one tonne'],
        correct: 2,
        explanation: 'A single kilonova can eject several Earth masses worth of gold and other r-process heavy elements — roughly 10⁻⁵ to 10⁻⁴ solar masses of gold per event.'
      },
      {
        question: 'What was first directly detected spectroscopically in the GW170817 kilonova?',
        options: ['Gold specifically, confirming its origin in neutron star mergers', 'Strontium — the first direct spectroscopic confirmation of r-process nucleosynthesis in a neutron star merger', 'Uranium, confirming nuclear fission in kilonovae', 'Iron, showing supernovae and kilonovae have similar composition', 'Platinum, the most abundant heavy element in the ejecta'],
        correct: 1,
        explanation: 'Watson et al. (2019, Nature) identified Sr II absorption features in the kilonova AT2017gfo — the first direct spectroscopic evidence of a specific r-process element produced in a neutron star merger.'
      }
    ],
    advanced: [
      {
        question: 'What are the two main ejecta components in a kilonova?',
        options: ['Iron-group elements and hydrogen', 'Dynamical ejecta (neutron-rich, r-process lanthanides — "red" component) and disk wind ejecta (lighter elements — "blue" component)', 'Only lanthanides from the tidal tails', 'Primarily hydrogen and helium from the disrupted neutron stars', 'Alpha-process elements and s-process elements'],
        correct: 1,
        explanation: 'The kilonova has two components: dynamical (tidal) ejecta — highly neutron-rich, producing lanthanides and actinides (red, slow-fading) — and disk wind ejecta — lower opacity, lighter r-process elements (blue, fast-fading). Together they cover most of the r-process periodic table.'
      },
      {
        question: 'How did GW170817 constrain the neutron star equation of state (EOS)?',
        options: ['By directly imaging the merger remnant', 'Through the tidal deformability parameter Λ measured in the gravitational waveform, constraining neutron star radii to ~10–13 km', 'Via the gamma-ray burst duration', 'Through the kilonova photometric redshift', 'By measuring the post-merger gravitational wave signal'],
        correct: 1,
        explanation: 'The tidal deformability Λ extracted from GW170817\'s inspiral waveform measures how strongly tidal forces deform each neutron star — constraining their radii to ~10–13 km and ruling out stiffer equations of state, directly probing dense nuclear matter.'
      },
      {
        question: 'What is the r-process site problem, and did GW170817 resolve it?',
        options: ['The problem of where r-process elements form — GW170817 confirmed neutron star mergers as a major site, but core-collapse supernovae may also contribute', 'The problem of why r-process elements are so rare — GW170817 showed they aren\'t', 'The problem of detecting r-process — GW170817 was the first detection ever', 'The problem of heavy element decay rates — GW170817 measured them for the first time', 'The problem of r-process occurring only in magnetars — GW170817 disproved this'],
        correct: 0,
        explanation: 'The r-process site has long been debated — neutron star mergers vs. core-collapse supernovae. GW170817 confirmed mergers are a major site (producing observed heavy elements), but galactic chemical evolution models suggest an additional early-universe r-process source (possibly rare collapsar supernovae) is also needed.'
      }
    ]
  }
};
