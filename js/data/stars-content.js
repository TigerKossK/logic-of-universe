export const STARS_CONTENT = [
  {
    id: 'what-is-a-star',
    title: 'What Is a Star?',
    level: 'beginner',
    page: 'stars.html',
    keywords: ['star', 'plasma', 'nuclear fusion', 'hydrogen', 'helium', 'sun'],
    excerpt: 'A star is a giant ball of hot plasma held together by gravity and powered by nuclear fusion.',
    nasaSearchQuery: 'solar dynamics observatory sun ultraviolet SDO',
    relatedTopics: [
      { label: 'How Stars Are Born', href: '/pages/stars.html#star-formation' },
      { label: 'Nuclear Fusion', href: '/pages/stars.html#nuclear-fusion-advanced' },
      { label: 'Solar System', href: '/pages/solar-system.html' },
    ],
    body: `
      <p>A star is a massive, luminous ball of plasma — superheated gas — held together by its own gravity. At its core, temperatures and pressures are so extreme that hydrogen atoms are crushed together to form helium, releasing enormous amounts of energy in a process called <strong>nuclear fusion</strong>.</p>
      <p>That energy radiates outward as light and heat. The outward push of this energy balances the inward pull of gravity, keeping the star stable. Our own Sun is a perfectly ordinary star — there are an estimated 200–400 billion stars in the Milky Way alone, and billions of trillions across the observable universe.</p>
    `,
  },
  {
    id: 'star-formation',
    title: 'How Stars Are Born',
    level: 'beginner',
    page: 'stars.html',
    keywords: ['stellar nursery', 'nebula', 'protostar', 'molecular cloud', 'gravity', 'star formation'],
    excerpt: 'Stars form inside vast clouds of gas and dust called nebulae, when gravity pulls material together until fusion ignites.',
    nasaSearchQuery: 'pillars of creation',
    relatedTopics: [
      { label: 'What Is a Star?', href: '/pages/stars.html#what-is-a-star' },
      { label: 'The Life of a Star', href: '/pages/stars.html#stellar-lifecycle' },
      { label: 'Supernova Remnants', href: '/pages/explosions.html#supernova-remnants' },
    ],
    body: `
      <p>Stars are born inside enormous clouds of gas and dust called <strong>nebulae</strong> — the stellar nurseries of the universe. These clouds are mostly hydrogen, sprinkled with helium and trace amounts of heavier elements.</p>
      <p>A disturbance — a nearby supernova shockwave, a collision between clouds, or gravitational instability — causes part of the cloud to collapse. As material falls inward under gravity, it heats up, forming a dense, glowing core called a <strong>protostar</strong>.</p>
      <p>When the core becomes hot and dense enough (about 10 million °C), hydrogen nuclei fuse into helium. The star is born. The remaining gas and dust surrounding it often form a disk, from which planets may eventually form.</p>
    `,
  },
  {
    id: 'star-classification',
    title: 'Types of Stars',
    level: 'intermediate',
    page: 'stars.html',
    keywords: ['spectral class', 'main sequence', 'red dwarf', 'blue giant', 'white dwarf', 'O B A F G K M', 'luminosity', 'temperature'],
    excerpt: 'Stars are classified by temperature and luminosity — from tiny cool red dwarfs to enormous blazing blue giants.',
    nasaSearchQuery: 'star types',
    relatedTopics: [
      { label: 'The Life of a Star', href: '/pages/stars.html#stellar-lifecycle' },
      { label: 'Nuclear Fusion', href: '/pages/stars.html#nuclear-fusion-advanced' },
      { label: 'Neutron Stars', href: '/pages/stellar-objects.html#neutron-stars' },
    ],
    body: `
      <p>Stars are classified by their surface temperature using spectral types: <strong>O, B, A, F, G, K, M</strong> — from hottest to coolest. A popular mnemonic is "Oh Be A Fine Girl/Guy, Kiss Me."</p>
      <ul>
        <li><strong>O-type (blue):</strong> Hottest (30,000–50,000 K), most massive, very short-lived (~3 million years). Extremely rare.</li>
        <li><strong>B-type (blue-white):</strong> Still very massive and hot (10,000–30,000 K). Includes famous stars like Rigel.</li>
        <li><strong>A-type (white):</strong> Hot and bright (7,500–10,000 K). Sirius, the brightest star in our night sky, is an A-type.</li>
        <li><strong>G-type (yellow):</strong> Medium temperature (~5,000–6,000 K). Our Sun is a G2V star. These live ~10 billion years.</li>
        <li><strong>K-type (orange):</strong> Slightly cooler and smaller than the Sun (~3,500–5,000 K). Very stable, potentially excellent for life-supporting planets.</li>
        <li><strong>M-type (red dwarfs):</strong> Coolest (below 3,500 K), smallest, least massive — but by far the most common, making up ~70% of all stars. Live for trillions of years.</li>
      </ul>
      <p>This classification is also plotted on the <strong>Hertzsprung-Russell diagram</strong>, which maps stars by luminosity vs. temperature and reveals patterns in stellar evolution.</p>
    `,
  },
  {
    id: 'stellar-lifecycle',
    title: 'The Life of a Star',
    level: 'intermediate',
    page: 'stars.html',
    keywords: ['main sequence', 'red giant', 'stellar evolution', 'hydrogen burning', 'helium burning', 'stellar lifecycle'],
    excerpt: 'Stars spend most of their lives fusing hydrogen on the main sequence, then evolve into giants as their cores change.',
    nasaSearchQuery: 'red giant',
    relatedTopics: [
      { label: 'The Red Giant Phase', href: '/pages/stars.html#red-giant-phase' },
      { label: 'Death of a Low-Mass Star', href: '/pages/stars.html#stellar-death-low-mass' },
      { label: 'Death of a Massive Star', href: '/pages/stars.html#stellar-death-massive' },
    ],
    body: `
      <p>Stars spend the vast majority of their lives — billions of years — on the <strong>main sequence</strong>, steadily fusing hydrogen into helium in their cores. The Sun is currently about halfway through its main sequence life.</p>
      <p>When a star exhausts its core hydrogen, gravity causes the core to contract and heat up while the outer layers expand enormously, transforming the star into a <strong>red giant</strong>. This is what will happen to our Sun in about 5 billion years — it will expand to engulf Mercury and Venus, and possibly Earth.</p>
      <p>What happens next depends critically on the star's mass:</p>
      <ul>
        <li><strong>Low-mass stars (like the Sun):</strong> Shed their outer layers as a planetary nebula, leaving behind a white dwarf.</li>
        <li><strong>Massive stars (8+ solar masses):</strong> Undergo a series of fusion stages burning heavier and heavier elements, then explode as a supernova.</li>
      </ul>
    `,
  },
  {
    id: 'red-giant-phase',
    title: 'The Red Giant Phase',
    level: 'intermediate',
    page: 'stars.html',
    keywords: ['red giant', 'helium burning', 'triple-alpha process', 'stellar expansion', 'RGB', 'AGB'],
    excerpt: 'When core hydrogen is exhausted, a star swells into a red giant as hydrogen burning moves to a shell around the core.',
    nasaSearchQuery: 'red giant',
    relatedTopics: [
      { label: 'Death of a Low-Mass Star', href: '/pages/stars.html#stellar-death-low-mass' },
      { label: 'Nuclear Fusion', href: '/pages/stars.html#nuclear-fusion-advanced' },
      { label: 'Solar System', href: '/pages/solar-system.html' },
    ],
    body: `
      <p>When a star\'s core runs out of hydrogen, fusion in the core stops. The core contracts under gravity while a shell of hydrogen outside the core continues to burn. The energy from this shell pushes the outer layers of the star outward dramatically — the star becomes a <strong>red giant</strong>, expanding up to hundreds of times its original size.</p>
      <p>As the helium core contracts, it heats up until it ignites in a <strong>helium flash</strong> — a sudden burst of helium fusion. The star enters a new phase of core helium burning, stabilising temporarily.</p>
      <p>For stars like the Sun, this eventually leads to the <strong>asymptotic giant branch (AGB)</strong> phase, where pulsations drive off the outer layers, forming a beautiful <strong>planetary nebula</strong> and leaving a dense stellar remnant behind.</p>
    `,
  },
  {
    id: 'stellar-death-low-mass',
    title: 'Death of a Low-Mass Star: Planetary Nebula & White Dwarf',
    level: 'beginner',
    page: 'stars.html',
    keywords: ['white dwarf', 'planetary nebula', 'stellar death', 'electron degeneracy', 'Chandrasekhar limit'],
    excerpt: 'Stars like the Sun end their lives by gently puffing off their outer layers to form a glowing nebula, leaving behind a white dwarf.',
    nasaSearchQuery: 'planetary nebula',
    relatedTopics: [
      { label: 'What Is a Supernova?', href: '/pages/explosions.html#what-is-supernova' },
      { label: 'Neutron Stars', href: '/pages/stellar-objects.html#neutron-stars' },
      { label: 'What Is a Black Hole?', href: '/pages/black-holes.html#what-is-a-black-hole' },
    ],
    body: `
      <p>Stars with masses similar to our Sun end their lives peacefully — at least compared to their massive cousins. As they exhaust their nuclear fuel, they puff off their outer layers in expanding shells of glowing gas called <strong>planetary nebulae</strong> (a misleading name — they have nothing to do with planets; early astronomers thought they looked planet-like through small telescopes).</p>
      <p>What remains at the centre is the exposed core: a <strong>white dwarf</strong>. This is an incredibly dense object — about the size of Earth but with the mass of the Sun. A teaspoon of white dwarf material weighs about 15 tonnes.</p>
      <p>White dwarfs no longer undergo fusion. They simply radiate away their heat over billions of years, slowly cooling. Theoretically, they eventually become cold, dark <strong>black dwarfs</strong> — but the universe is not yet old enough for any to exist.</p>
      <p>If a white dwarf accretes material from a companion star and exceeds about 1.4 solar masses (the <strong>Chandrasekhar limit</strong>), it may explode as a Type Ia supernova.</p>
    `,
  },
  {
    id: 'stellar-death-massive',
    title: 'Death of a Massive Star: Core Collapse & Supernova',
    level: 'intermediate',
    page: 'stars.html',
    keywords: ['core collapse', 'supernova', 'iron core', 'neutron star', 'black hole', 'massive star death'],
    excerpt: 'Massive stars build up an iron core they cannot fuse, which collapses in milliseconds, triggering a catastrophic supernova explosion.',
    nasaSearchQuery: 'Cassiopeia A supernova remnant Chandra X-ray',
    mediaUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/SN%201987A%20HST.jpg',
    mediaCaption: 'Supernova 1987A and its glowing rings, imaged by Hubble. Credit: NASA/ESA',
    relatedTopics: [
      { label: 'What Is a Supernova?', href: '/pages/explosions.html#what-is-supernova' },
      { label: 'Neutron Stars', href: '/pages/stellar-objects.html#neutron-stars' },
      { label: 'Stellar Black Holes', href: '/pages/black-holes.html#stellar-black-holes' },
    ],
    body: `
      <p>Stars with more than about 8 times the Sun\'s mass live fast and die violently. After exhausting hydrogen, they successively fuse heavier elements: helium, carbon, neon, oxygen, silicon — each stage shorter than the last. Silicon fusion lasts only days before the core fills with <strong>iron</strong>.</p>
      <p>Iron is the end of the road for fusion. Unlike lighter elements, fusing iron absorbs energy rather than releasing it. The iron core grows until it exceeds about 1.4 solar masses, at which point <strong>electron degeneracy pressure</strong> can no longer support it.</p>
      <p>In less than a second, the core collapses — compressing to a ball of neutrons only about 20 km across. The infalling outer layers slam into this rigid neutron core and <strong>bounce</strong>, triggering a shockwave that rips the star apart in a <strong>core-collapse supernova</strong>.</p>
      <p>The explosion briefly outshines entire galaxies and scatters heavy elements — gold, silver, uranium — across space, seeding future generations of stars and planets.</p>
    `,
  },
  {
    id: 'nuclear-fusion-advanced',
    title: 'Nuclear Fusion: The Engine of Stars',
    level: 'advanced',
    page: 'stars.html',
    keywords: ['proton-proton chain', 'CNO cycle', 'mass defect', 'binding energy', 'E=mc²', 'nuclear fusion', 'stellar nucleosynthesis'],
    excerpt: 'Stars generate energy through nuclear fusion — the proton-proton chain in low-mass stars, the CNO cycle in massive ones.',
    nasaSearchQuery: 'nuclear fusion sun',
    relatedTopics: [
      { label: 'What Is a Star?', href: '/pages/stars.html#what-is-a-star' },
      { label: 'Death of a Massive Star', href: '/pages/stars.html#stellar-death-massive' },
      { label: 'Kilonovas', href: '/pages/explosions.html#kilonovas' },
    ],
    body: `
      <p>The energy source of stars is <strong>nuclear fusion</strong> — the process of forcing atomic nuclei together to form heavier nuclei, releasing energy via Einstein\'s mass-energy equivalence (E=mc²). The tiny mass difference between reactants and products is converted entirely to energy.</p>
      <h4>The Proton-Proton Chain (low-mass stars)</h4>
      <p>In stars like the Sun, the primary process is the <strong>proton-proton (pp) chain</strong>:</p>
      <ol>
        <li>Two protons (¹H) fuse to form deuterium (²H), releasing a positron and a neutrino.</li>
        <li>Deuterium fuses with another proton to form helium-3 (³He).</li>
        <li>Two ³He nuclei combine to form ⁴He, releasing two protons.</li>
      </ol>
      <p>Net result: 4 protons → 1 helium-4 nucleus + 2 positrons + 2 neutrinos + energy. The Sun converts ~600 million tonnes of hydrogen to helium every second.</p>
      <h4>The CNO Cycle (massive stars)</h4>
      <p>In stars hotter than ~17 million K, the <strong>CNO cycle</strong> dominates. Carbon, nitrogen, and oxygen act as catalysts to fuse four protons into helium. The same net result, but the cycle is strongly temperature-dependent (rate ∝ T¹⁶ vs T⁴ for pp chain), explaining why massive stars are so much more luminous.</p>
      <h4>Hydrostatic Equilibrium</h4>
      <p>Stars are in a state of <strong>hydrostatic equilibrium</strong>: the inward force of gravity exactly balances the outward radiation pressure from fusion. This balance determines the star\'s size, temperature, and luminosity for any given mass.</p>
    `,
  },
];
