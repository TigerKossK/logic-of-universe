export const TIMELINE_EVENTS = [
  {
    id: 'big-bang',
    era: 'bigbang',
    timeLabel: '13.8 Bya',
    title: 'The Big Bang',
    icon: '💥',
    color: '#ff6b35',
    imageQuery: 'cosmic microwave background Big Bang universe',
    shortDesc: 'The universe erupted from an infinitely dense point.',
    fullDesc: {
      beginner: 'About 13.8 billion years ago, the universe began with the Big Bang — an explosion of space itself. All matter, energy, and even time as we know it started here. In the first moments, the universe was unimaginably hot and tiny.',
      intermediate: 'The Big Bang was not an explosion in space but an expansion of space itself. In the first fraction of a second, the universe underwent a period of exponential inflation. The cosmic microwave background radiation we detect today is the afterglow of this event, emitted 380,000 years after the Bang.',
      advanced: 'At the Planck epoch (t < 10⁻⁴³ s) quantum gravity dominated. Cosmic inflation at ~10⁻³² s expanded spacetime exponentially via a scalar inflaton field. Baryogenesis produced a slight matter-antimatter asymmetry (~1 in 10⁹). Recombination at z≈1100 decoupled photons from matter, producing the CMB — now measured to 1 part in 100,000 by the Planck satellite.'
    }
  },
  {
    id: 'first-particles',
    era: 'bigbang',
    timeLabel: '13.8 Bya',
    title: 'First Particles',
    icon: '⚛️',
    color: '#e040fb',
    imageQuery: 'particle physics proton neutron quark early universe',
    shortDesc: 'Quarks and leptons condensed from the primordial energy soup.',
    fullDesc: {
      beginner: 'Within the first second after the Big Bang, the universe cooled enough for the first particles — protons and neutrons — to form from pure energy. Everything we see today is made of these basic building blocks.',
      intermediate: 'In the first microseconds, quarks condensed into protons and neutrons. Within 3 minutes, Big Bang nucleosynthesis produced hydrogen and helium nuclei. For 380,000 years the universe was an opaque plasma of charged particles and photons.',
      advanced: 'The electroweak symmetry broke at 10⁻¹² s. The QCD phase transition at 10⁻⁶ s confined quarks into hadrons. Big Bang nucleosynthesis (BBN) at 1–200 s produced ⁴He (~25% by mass), D, ³He, and trace ⁷Li — predictions that match observations to high precision, a key pillar of the Hot Big Bang model.'
    }
  },
  {
    id: 'first-stars',
    era: 'stars',
    timeLabel: '13.6 Bya',
    title: 'First Stars',
    icon: '⭐',
    color: '#ffd60a',
    imageQuery: 'Population III first stars early universe reionization',
    shortDesc: 'Enormous first stars blazed to life after the cosmic dark ages.',
    fullDesc: {
      beginner: 'About 200 million years after the Big Bang, the first stars ignited. They were enormous — possibly hundreds of times more massive than our Sun — and burned through their fuel in just a few million years before exploding.',
      intermediate: 'Called Population III stars, these first stars formed from pure hydrogen and helium with no heavier elements. They were incredibly massive and luminous. When they exploded as supernovae, they scattered the first heavy elements — carbon, oxygen, iron — into the cosmos.',
      advanced: 'Population III stars formed from primordial gas collapsing in dark matter halos at z~20–30. Their initial mass function peaked at 10–1000 M☉. They ended as pair-instability supernovae or direct-collapse black holes, enriching the ISM with metals and seeding the epoch of reionization by ionizing intergalactic hydrogen.'
    }
  },
  {
    id: 'first-galaxies',
    era: 'galaxies',
    timeLabel: '13.2 Bya',
    title: 'First Galaxies',
    icon: '🌌',
    color: '#4fc3f7',
    imageQuery: 'JWST deep field early galaxy high redshift',
    shortDesc: 'Gravity pulled early stars into primitive proto-galaxies.',
    fullDesc: {
      beginner: 'About 600 million years after the Big Bang, stars began clumping together under gravity, forming the first primitive galaxies. The James Webb Space Telescope has now photographed some of these ancient, distant galaxies.',
      intermediate: 'The first galaxies were small, irregular, and formed along filaments of dark matter in the cosmic web. They grew through collisions and mergers. Their ultraviolet radiation gradually reionized intergalactic hydrogen over the next billion years.',
      advanced: 'Galaxy formation followed dark matter halo mergers in hierarchical structure formation. The epoch of reionization (z~6–10) ended the cosmic dark ages. JWST has detected galaxy candidates at z>12, and some early massive galaxies challenge standard ΛCDM formation models, suggesting rapid early assembly that is not fully understood.'
    }
  },
  {
    id: 'milky-way',
    era: 'galaxies',
    timeLabel: '13.2 Bya',
    title: 'The Milky Way',
    icon: '🌠',
    color: '#7986cb',
    imageQuery: 'Milky Way galaxy center panorama stars',
    shortDesc: 'Our home galaxy began assembling from ancient stellar clouds.',
    fullDesc: {
      beginner: 'Our home galaxy, the Milky Way, began forming about 13.2 billion years ago. It contains 200–400 billion stars spread across a disk about 100,000 light-years wide — and we live about halfway out from the centre.',
      intermediate: 'The Milky Way\'s oldest stars and globular clusters date back ~13 billion years. The galaxy grew through mergers with smaller dwarf galaxies. Its central supermassive black hole, Sagittarius A*, contains 4 million solar masses and was imaged for the first time by the Event Horizon Telescope in 2022.',
      advanced: 'The Milky Way\'s thick disk formed ~10 Gya, the thin disk ~8 Gya. The Gaia-Enceladus collision ~10 Gya heated the stellar halo and deposited ~50% of its mass. Sgr A* at 4×10⁶ M☉ shows evidence of past AGN activity. The Large Magellanic Cloud is expected to merge with the Milky Way in ~2.4 Gyr, possibly triggering a quasar phase.'
    }
  },
  {
    id: 'first-planets',
    era: 'earth',
    timeLabel: '9 Bya',
    title: 'First Planets',
    icon: '🪐',
    color: '#a5d6a7',
    imageQuery: 'protoplanetary disk exoplanet formation dust ring',
    shortDesc: 'Rocky worlds formed around second-generation metal-rich stars.',
    fullDesc: {
      beginner: 'About 9 billion years ago — after earlier massive stars had died and spread heavier elements through the galaxy — the first rocky planets began to form from swirling disks of dust and gas around young stars.',
      intermediate: 'First-generation stars were made only of hydrogen and helium. After they died in supernovae, they seeded space with heavy elements like carbon, oxygen, and iron — the raw material for rocky planets. Only then could Earth-like worlds form.',
      advanced: 'Terrestrial planet formation requires dust grains with metallicity Z > 0.1 Z☉. The first potentially habitable planets could form around metal-enriched stars at z~1 (lookback time ~8 Gyr). The Kepler mission found super-Earths orbiting stars up to 11 Gyr old, suggesting rocky worlds have been forming since the universe was a few billion years old.'
    }
  },
  {
    id: 'earth-forms',
    era: 'earth',
    timeLabel: '4.5 Bya',
    title: 'Earth Forms',
    icon: '🌍',
    color: '#29b6f6',
    imageQuery: 'Earth from space blue marble NASA',
    shortDesc: 'Our planet coalesced from the solar nebula 4.5 billion years ago.',
    fullDesc: {
      beginner: 'About 4.5 billion years ago, our solar system formed from a spinning cloud of gas and dust. Earth grew by colliding with other rocky objects over millions of years. A massive impact later created our Moon.',
      intermediate: 'Earth formed through accretion of planetesimals. A giant impact with a Mars-sized body called Theia ejected the material that formed the Moon. Early Earth was largely molten — a magma ocean — before cooling over hundreds of millions of years.',
      advanced: 'Late accretion (~0.5% of Earth\'s mass) delivered volatile elements including water at 3.9–4.1 Gya. The Moon-forming impact differentiated Earth\'s iron core. Hadean zircon crystals dated to ~4.4 Gya show evidence of liquid water within 150 million years of formation — far sooner than previously thought.'
    }
  },
  {
    id: 'first-life',
    era: 'life',
    timeLabel: '3.8 Bya',
    title: 'First Life',
    icon: '🦠',
    color: '#66bb6a',
    imageQuery: 'stromatolites ancient life microfossil',
    shortDesc: 'Simple cells appeared in Earth\'s ancient oceans.',
    fullDesc: {
      beginner: 'Life on Earth began about 3.8 billion years ago — simple, single-celled organisms living in the ancient oceans. How life first arose from chemistry remains one of the greatest mysteries in all of science.',
      intermediate: 'The earliest microbial fossils date to ~3.5 Gya. Life likely arose in hydrothermal vents or warm tidal pools. The RNA world hypothesis suggests self-replicating RNA molecules came before proteins and DNA in the origin of life.',
      advanced: 'Alkaline hydrothermal vents (serpentinization-driven) provide natural proton gradients that could have powered early metabolism. The LUCA (Last Universal Common Ancestor) genome can be partially reconstructed from comparative genomics. The abiogenesis transition — from chemistry to self-replicating molecular systems — remains the deepest unsolved problem in biology.'
    }
  },
  {
    id: 'oxygen-atmosphere',
    era: 'life',
    timeLabel: '2.4 Bya',
    title: 'Oxygen Atmosphere',
    icon: '💨',
    color: '#80deea',
    imageQuery: 'Great Oxidation Event cyanobacteria banded iron formation',
    shortDesc: 'Cyanobacteria flooded Earth\'s atmosphere with oxygen.',
    fullDesc: {
      beginner: 'About 2.4 billion years ago, tiny organisms called cyanobacteria began producing oxygen through photosynthesis. This Great Oxidation Event transformed Earth\'s atmosphere from oxygen-free to one that could eventually support complex, oxygen-breathing life.',
      intermediate: 'The Great Oxidation Event caused a mass extinction of anaerobic organisms (for which oxygen was toxic) while enabling new aerobic life to evolve. Banded iron formations in ancient rock record this shift — oxygen reacted with dissolved iron in the oceans and sank to the seafloor as iron oxide.',
      advanced: 'The GOE at ~2.4 Gya resulted from cyanobacterial oxygenic photosynthesis overwhelming geochemical oxygen sinks. Atmospheric O₂ rose from <10⁻⁵ PAL to ~0.01 PAL. A second oxygenation at ~800 Mya reached near-modern levels. Snowball Earth glaciations at 2.4 Gya and 0.7–0.6 Gya may be causally linked to atmospheric chemistry shifts.'
    }
  },
  {
    id: 'complex-life',
    era: 'life',
    timeLabel: '541 Mya',
    title: 'Complex Life',
    icon: '🐚',
    color: '#ffb74d',
    imageQuery: 'Cambrian explosion fossil Burgess Shale marine life',
    shortDesc: 'The Cambrian Explosion produced most major animal body plans.',
    fullDesc: {
      beginner: 'About 541 million years ago, something extraordinary happened: complex multi-celled animals with eyes, legs, shells, and teeth appeared in the fossil record almost simultaneously. This is called the Cambrian Explosion.',
      intermediate: 'The Cambrian Explosion saw most modern animal phyla appear within ~20 million years. Rising oxygen levels, the development of predator-prey dynamics, and ecological interactions likely drove this burst of evolution. The Burgess Shale in Canada preserves many bizarre early animals in stunning detail.',
      advanced: 'The Cambrian Explosion produced 32 of the ~35 animal phyla within ~20 Myr. Ediacaran biota predated it by ~100 Myr. Probable drivers include O₂ exceeding the threshold for coelom formation, phosphate availability for mineralized skeletons, and ecological arms races. Molecular clocks push animal origins to ~700–800 Mya, predating the fossil record by ~200 Myr.'
    }
  },
  {
    id: 'dinosaurs',
    era: 'life',
    timeLabel: '230 Mya',
    title: 'Age of Dinosaurs',
    icon: '🦕',
    color: '#3ecf8e',
    imageQuery: 'dinosaur fossil Jurassic Cretaceous prehistoric',
    shortDesc: 'Dinosaurs dominated Earth for over 165 million years.',
    fullDesc: {
      beginner: 'Dinosaurs first appeared about 230 million years ago and ruled Earth for over 165 million years — far longer than humans have existed. They ranged from tiny feathered hunters to the largest land animals ever to walk our planet.',
      intermediate: 'Dinosaurs emerged after the Permian-Triassic extinction (~252 Mya) wiped out 96% of species. They rapidly diversified into sauropods, theropods, ornithopods, and ceratopsians. Modern birds are technically living dinosaurs — they are theropods in the clade Avialae.',
      advanced: 'The Dinosauria split into Saurischia and Ornithischia early in the Triassic. Many theropods had feathers and warm-blooded physiology, blurring the line between birds and non-avian dinosaurs. Coelurosaurian theropods show direct evolutionary continuity into Avialae. The Jurassic–Cretaceous transition saw major faunal turnover but the K-Pg impact at 66 Mya remains the primary non-avian dinosaur extinction mechanism.'
    }
  },
  {
    id: 'mass-extinction',
    era: 'life',
    timeLabel: '66 Mya',
    title: 'Mass Extinction',
    icon: '☄️',
    color: '#ef5350',
    imageQuery: 'Chicxulub asteroid impact extinction crater',
    shortDesc: 'An asteroid impact ended the non-avian dinosaurs.',
    fullDesc: {
      beginner: 'About 66 million years ago, a massive asteroid struck what is now Mexico. The impact triggered wildfires, a years-long "impact winter," and the extinction of 75% of all species — including all non-avian dinosaurs. This allowed mammals to rise and eventually gave rise to us.',
      intermediate: 'The Chicxulub impactor (10–15 km wide) struck the Yucatán Peninsula, releasing energy equivalent to a billion atomic bombs. The resulting global firestorm, acid rain, and years-long cooling killed 75% of species. Mammals survived partly because they were small, omnivorous, and could burrow underground.',
      advanced: 'The K-Pg boundary is globally marked by an iridium anomaly and shocked quartz. The Chicxulub impact generated ~10 km of crustal melt, global wildfires from re-entering ejecta, SO₂ aerosols inhibiting photosynthesis for 1–2 years, and oceanic acidification. Deccan Traps volcanism may have stressed ecosystems beforehand. Placental mammalian adaptive radiation was explosive in the Paleocene.'
    }
  },
  {
    id: 'homo-sapiens',
    era: 'life',
    timeLabel: '300 Kya',
    title: 'Homo Sapiens',
    icon: '🧠',
    color: '#ff8a65',
    imageQuery: 'human evolution skull fossil Africa prehistoric',
    shortDesc: 'Modern humans emerged in Africa around 300,000 years ago.',
    fullDesc: {
      beginner: 'Modern humans — Homo sapiens — first appeared in Africa about 300,000 years ago. We are just one of many human species that have existed, but we are the only one alive today. Language, art, and complex tools set us apart.',
      intermediate: 'Homo sapiens spread out of Africa around 60,000–70,000 years ago, coexisting and interbreeding with Neanderthals and Denisovans. Modern non-African people carry 1–4% Neanderthal DNA. Agriculture began ~12,000 years ago, transforming human civilization.',
      advanced: 'H. sapiens shows a mosaic morphology in early African fossils (Jebel Irhoud, ~315 ka). The Out-of-Africa migration at ~60–70 ka replaced most archaic populations globally. Introgression with Neanderthals transferred immune and metabolic alleles. The Toba supervolcano at ~74 ka may have bottlenecked the population. Language and symbolic cognition emerged ~70–100 kya based on archaeological evidence.'
    }
  },
  {
    id: 'first-telescope',
    era: 'now',
    timeLabel: '1608',
    title: 'First Telescope',
    icon: '🔭',
    color: '#b0bec5',
    imageQuery: 'Galileo telescope astronomy historic observatory',
    shortDesc: 'Galileo turned the telescope skyward and changed astronomy forever.',
    fullDesc: {
      beginner: 'In 1609, Galileo was among the first to point a telescope at the sky. He discovered moons orbiting Jupiter, mountains on the Moon, and phases of Venus — proving Earth was not the centre of everything.',
      intermediate: 'Galileo\'s observations dealt fatal blows to the geocentric model. His work built on Copernicus\'s heliocentric hypothesis and was later refined by Kepler\'s laws of planetary motion and Newton\'s law of gravitation. His discoveries directly led to the Scientific Revolution.',
      advanced: 'Galileo\'s 20× refractor discovered the Galilean moons (non-Earth objects in orbit), Venus\'s full phase cycle (impossible in a Ptolemaic model), and resolved the Milky Way into stars. The Newtonian reflector (1668) overcame chromatic aberration. Modern astronomy now spans the full electromagnetic spectrum: radio, X-ray, gamma-ray, UV, IR — and gravitational waves since LIGO\'s first detection in 2015.'
    }
  },
  {
    id: 'moon-landing',
    era: 'now',
    timeLabel: '1969',
    title: 'Moon Landing',
    icon: '🚀',
    color: '#c8e6c9',
    imageQuery: 'Apollo 11 moon landing astronaut lunar surface NASA',
    shortDesc: 'Humans first walked on another world on July 20, 1969.',
    fullDesc: {
      beginner: 'On July 20, 1969, astronaut Neil Armstrong became the first human to walk on the Moon during NASA\'s Apollo 11 mission. This was the result of thousands of engineers, scientists, and pilots working together over a decade.',
      intermediate: 'The Apollo program landed 12 astronauts on the Moon across 6 missions (1969–1972). Lunar samples returned confirmed the giant impact hypothesis for the Moon\'s formation. The Saturn V rocket, still the most powerful ever flown, propelled each mission.',
      advanced: 'Apollo 11 landed in Mare Tranquillitatis. The 382 kg of lunar samples across Apollo missions established the Moon\'s anorthositic highlands and basaltic maria composition. Seismometers revealed a differentiated lunar interior. Retroreflectors placed on the surface still enable lunar laser ranging to millimeter precision, measuring the Moon\'s recession at 3.8 cm/yr. Apollo remains the only crewed missions beyond low Earth orbit in history.'
    }
  },
  {
    id: 'today',
    era: 'now',
    timeLabel: 'Today',
    title: 'You Are Here',
    icon: '📍',
    color: '#26c6da',
    imageQuery: 'James Webb Space Telescope JWST deep field galaxy',
    shortDesc: 'We live in a golden age of cosmic discovery.',
    fullDesc: {
      beginner: 'Right now, we live in a remarkable time. The James Webb Space Telescope is looking back to the first galaxies. Rovers explore Mars. We have detected gravitational waves. The universe is 13.8 billion years old — and our exploration of it has barely begun.',
      intermediate: 'Modern astronomy has directly imaged black holes (EHT, 2019), detected gravitational waves from merging neutron stars and black holes (LIGO), mapped the cosmic microwave background to extraordinary precision, and discovered thousands of exoplanets including Earth-sized worlds in habitable zones.',
      advanced: 'We are in the stelliferous era — still within the epoch of star formation. The universe is dark-energy dominated (Ωλ~0.68) and accelerating. The Hubble tension (H₀ discrepancy at ~5σ between CMB and distance ladder measurements) remains unresolved. JWST is challenging galaxy formation models at z>10. We are ~4.5 Gyr into the Sun\'s ~10 Gyr main sequence life.'
    }
  },
];
