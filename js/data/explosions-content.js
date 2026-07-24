export const EXPLOSIONS_CONTENT = [
  {
    id: 'what-is-supernova',
    title: 'What Is a Supernova?',
    level: 'beginner',
    page: 'explosions.html',
    keywords: ['supernova', 'stellar explosion', 'brightest', 'Type Ia', 'Type II', 'core collapse', 'star death'],
    excerpt: 'A supernova is the explosive death of a star — so bright it can briefly outshine an entire galaxy of 200 billion stars.',
    nasaSearchQuery: 'Crab Nebula',
    mediaUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/SN1994D.jpg',
    mediaCaption: 'Supernova 1994D (bright point, lower left) in galaxy NGC 4526 — a classic Type Ia. Credit: NASA/ESA',
    relatedTopics: [
      { label: 'How a Supernova Explodes', href: '/pages/explosions.html#supernova-mechanics' },
      { label: 'Supernova Remnants', href: '/pages/explosions.html#supernova-remnants' },
      { label: 'Death of a Massive Star', href: '/pages/stars.html#stellar-death-massive' },
    ],
    body: `
      <p>A <strong>supernova</strong> is one of the most powerful explosions in the universe — the death of a star so violent it can briefly outshine an entire galaxy of hundreds of billions of stars. They are visible across cosmic distances and play a crucial role in spreading heavy elements throughout the universe.</p>
      <p>There are two main types:</p>
      <ul>
        <li><strong>Type Ia (thermonuclear):</strong> A white dwarf in a binary system accretes too much mass and exceeds the Chandrasekhar limit (~1.4 solar masses), triggering a runaway nuclear explosion that completely destroys the white dwarf.</li>
        <li><strong>Type II/core-collapse:</strong> A massive star (8+ solar masses) exhausts its fuel, its iron core collapses in milliseconds, and the rebound destroys the star. Subtypes Ib and Ic occur when the star has shed its outer hydrogen/helium layers before exploding.</li>
      </ul>
      <p>The most famous supernova in recorded history is <strong>SN 1054</strong>, observed by Chinese and Arab astronomers in 1054 AD. Its remnant is the Crab Nebula, visible today with a small telescope.</p>
    `,
  },
  {
    id: 'supernova-mechanics',
    title: 'How a Supernova Explodes',
    level: 'intermediate',
    page: 'explosions.html',
    keywords: ['iron core', 'core collapse', 'neutronisation', 'bounce', 'shockwave', 'neutrino burst', 'nickel-56', 'shock revival'],
    excerpt: 'In milliseconds, a star\'s iron core collapses to a neutron star, bounces, and sends a shockwave tearing the star apart.',
    nasaSearchQuery: 'SN 1987A',
    relatedTopics: [
      { label: 'What Is a Supernova?', href: '/pages/explosions.html#what-is-supernova' },
      { label: 'What Are Neutron Stars?', href: '/pages/stellar-objects.html#neutron-stars' },
      { label: 'Death of a Massive Star', href: '/pages/stars.html#stellar-death-massive' },
    ],
    body: `
      <p>The mechanics of a core-collapse supernova are among the most complex in astrophysics. Here is the sequence of events:</p>
      <ol>
        <li><strong>Iron core growth:</strong> Silicon burning fills the core with iron in about a day. The core reaches ~1.4 solar masses.</li>
        <li><strong>Collapse (milliseconds):</strong> Electron degeneracy pressure fails. The core collapses from the size of Earth to about 20 km across in under a second, reaching nuclear density. Protons and electrons combine to form neutrons (<strong>neutronisation</strong>), releasing a burst of ~10⁵⁸ neutrinos — carrying away 99% of the explosion\'s energy.</li>
        <li><strong>Bounce:</strong> The inner core becomes incompressible at nuclear density and rebounds, sending a shockwave outward through the infalling outer core.</li>
        <li><strong>Shock stall:</strong> The shockwave loses energy dissociating iron nuclei and slows. The explosion would fail without additional energy.</li>
        <li><strong>Shock revival:</strong> A tiny fraction (~1%) of the neutrino burst deposits energy behind the shock, reviving it. This is the key mechanism — without neutrino heating, the star would not explode. Multi-dimensional effects (convection, SASI instabilities) play a crucial role.</li>
        <li><strong>Explosion:</strong> The revived shockwave tears the star apart over seconds to hours. The ejecta expand at ~10,000 km/s.</li>
      </ol>
      <p>The nickel-56 synthesised in the explosion decays to cobalt-56 then iron-56, powering the visible light curve of the supernova over weeks.</p>
    `,
  },
  {
    id: 'supernova-remnants',
    title: 'Supernova Remnants',
    level: 'intermediate',
    page: 'explosions.html',
    keywords: ['supernova remnant', 'Crab Nebula', 'Cassiopeia A', 'Tycho', 'interstellar medium', 'shock heating', 'cosmic rays', 'heavy elements'],
    excerpt: 'After the explosion, the expanding shell of gas — a supernova remnant — seeds the galaxy with heavy elements and accelerates cosmic rays.',
    nasaSearchQuery: 'Cassiopeia A supernova remnant',
    mediaUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Supernova%20Remnant%20Cassiopeia%20A.jpg',
    mediaCaption: 'Cassiopeia A — the youngest known supernova remnant in our galaxy. Credit: NASA/CXC',
    relatedTopics: [
      { label: 'What Is a Supernova?', href: '/pages/explosions.html#what-is-supernova' },
      { label: 'How a Supernova Explodes', href: '/pages/explosions.html#supernova-mechanics' },
      { label: 'What Are Neutron Stars?', href: '/pages/stellar-objects.html#neutron-stars' },
    ],
    body: `
      <p>After a supernova, the expelled stellar material expands outward at thousands of kilometres per second, colliding with and sweeping up the surrounding interstellar medium. This creates a <strong>supernova remnant</strong> — a glowing shell of hot, shocked gas that can persist for thousands to millions of years.</p>
      <p>Famous remnants include:</p>
      <ul>
        <li><strong>The Crab Nebula (M1):</strong> Remnant of SN 1054. Its pulsar, spinning 30 times per second, powers a pulsar wind nebula visible across the electromagnetic spectrum.</li>
        <li><strong>Cassiopeia A:</strong> One of the brightest radio sources in the sky. Its supernova was not recorded by observers (possibly obscured by dust), but the remnant is ~340 years old and expanding at ~6,000 km/s.</li>
        <li><strong>Tycho\'s Supernova Remnant:</strong> From the 1572 supernova observed by Tycho Brahe, confirmed as Type Ia by its X-ray spectrum.</li>
      </ul>
      <p>Supernova remnants play multiple critical roles: they <strong>spread heavy elements</strong> (gold, silver, calcium, iron) enriching future star-forming regions; they <strong>accelerate cosmic rays</strong> — high-energy particles that permeate the galaxy; and they <strong>trigger new star formation</strong> by compressing nearby molecular clouds.</p>
    `,
  },
  {
    id: 'kilonovas',
    title: 'Kilonovas: When Neutron Stars Collide',
    level: 'intermediate',
    page: 'explosions.html',
    keywords: ['kilonova', 'neutron star merger', 'r-process', 'gold', 'platinum', 'GW170817', 'AT2017gfo', 'heavy elements', 'gravitational waves'],
    excerpt: 'Kilonovas are dim, short-lived explosions from neutron star mergers — the universe\'s main factory for gold, platinum, and uranium.',
    nasaSearchQuery: 'neutron star merger',
    relatedTopics: [
      { label: 'When Neutron Stars Merge', href: '/pages/stellar-objects.html#neutron-star-mergers' },
      { label: 'What Are Neutron Stars?', href: '/pages/stellar-objects.html#neutron-stars' },
      { label: 'Gamma-Ray Bursts', href: '/pages/explosions.html#gamma-ray-bursts' },
    ],
    body: `
      <p>A <strong>kilonova</strong> (also called a macronova) is a transient astronomical event produced when two neutron stars — or a neutron star and a black hole — merge. The name reflects that they are roughly a thousand times brighter than classical novae (but far dimmer than supernovas).</p>
      <p>The merger ejects a cloud of neutron-rich material at a significant fraction of the speed of light. In this extreme environment, atomic nuclei capture neutrons far faster than they can decay — the <strong>rapid neutron capture process (r-process)</strong> — building up extremely heavy nuclei that then beta-decay to stable heavy elements: gold, platinum, uranium, osmium, and the rare earth elements.</p>
      <p><strong>AT2017gfo</strong> — the kilonova associated with GW170817 — was observed in August 2017 across 70+ observatories. Its infrared glow revealed the distinctive spectral signatures of lanthanide elements, confirming that neutron star mergers are a primary site of r-process nucleosynthesis. The event produced an estimated ~50 times Earth\'s mass in gold.</p>
      <p>Kilonovas fade rapidly — over days — and are much fainter than supernovas, making them challenging to detect and study. Next-generation facilities like the Vera Rubin Observatory and the Einstein Telescope aim to catch many more.</p>
    `,
  },
  {
    id: 'hypernovas',
    title: 'Hypernovas and Collapsars',
    level: 'advanced',
    page: 'explosions.html',
    keywords: ['hypernova', 'collapsar', 'long gamma-ray burst', 'GRB', 'Wolf-Rayet star', 'jet', 'magnetar engine', 'black hole engine'],
    excerpt: 'Hypernovas are 10–100x more energetic than standard supernovas, driven by a rapidly-rotating stellar collapse that launches relativistic jets.',
    nasaSearchQuery: 'gamma ray burst',
    relatedTopics: [
      { label: 'Gamma-Ray Bursts', href: '/pages/explosions.html#gamma-ray-bursts' },
      { label: 'Stellar Black Holes', href: '/pages/black-holes.html#stellar-black-holes' },
      { label: 'Death of a Massive Star', href: '/pages/stars.html#stellar-death-massive' },
    ],
    body: `
      <p>A <strong>hypernova</strong> (or collapsar) occurs when a very massive, rapidly rotating star collapses. Unlike a standard core-collapse supernova, the rotating collapse creates conditions for a central engine — either a rapidly spinning magnetar or a newly formed black hole with an accretion disk — that launches two <strong>relativistic jets</strong> of material at close to the speed of light, drilling through the stellar envelope.</p>
      <p>Hypernovas release 10–100 times more energy than ordinary supernovas (~10⁵² erg vs ~10⁵¹ erg). When the jets break free of the star and interact with circumstellar material, they produce a <strong>long gamma-ray burst (GRB)</strong> — the most energetic electromagnetic events in the universe.</p>
      <h4>Conditions for a Hypernova</h4>
      <ul>
        <li>The progenitor star must be massive (typically >25–30 solar masses)</li>
        <li>It must be rapidly rotating — often achieved in binary systems or through low metallicity (less angular momentum loss via stellar winds)</li>
        <li>It typically must be a <strong>Wolf-Rayet star</strong> — one that has shed its hydrogen and helium envelope, allowing jets to escape easily</li>
      </ul>
      <h4>Notable Examples</h4>
      <p>GRB 980425/SN 1998bw was the first confirmed association between a long GRB and a hypernova. GRB 221009A (the "BOAT" — Brightest Of All Time) in 2022 was the most energetic GRB ever recorded, briefly ionising Earth\'s ionosphere from a galaxy 2.4 billion light-years away.</p>
    `,
  },
  {
    id: 'gamma-ray-bursts',
    title: 'Gamma-Ray Bursts',
    level: 'advanced',
    page: 'explosions.html',
    keywords: ['gamma-ray burst', 'GRB', 'long GRB', 'short GRB', 'afterglow', 'cosmological distance', 'Swift', 'Fermi', 'fireball model'],
    excerpt: 'Gamma-ray bursts are the most energetic electromagnetic explosions in the universe — detectable across billions of light-years.',
    nasaSearchQuery: 'gamma ray burst',
    relatedTopics: [
      { label: 'Hypernovas and Collapsars', href: '/pages/explosions.html#hypernovas' },
      { label: 'Kilonovas', href: '/pages/explosions.html#kilonovas' },
      { label: 'Magnetars', href: '/pages/stellar-objects.html#magnetars' },
    ],
    body: `
      <p><strong>Gamma-ray bursts (GRBs)</strong> are flashes of gamma radiation that last from milliseconds to hours and release more energy in their brief duration than the Sun will emit over its entire lifetime. They are detectable across the observable universe and are the brightest known electromagnetic events.</p>
      <h4>Two Classes</h4>
      <ul>
        <li><strong>Long GRBs (>2 seconds):</strong> Associated with the deaths of massive stars — hypernovas/collapsars. The relativistic jet is powered by a newborn black hole or magnetar.</li>
        <li><strong>Short GRBs (<2 seconds):</strong> Associated with compact object mergers — neutron star–neutron star or neutron star–black hole. GW170817 was accompanied by a short GRB (GRB 170817A).</li>
      </ul>
      <h4>The Fireball Model</h4>
      <p>The leading model describes the GRB as a <strong>fireball</strong> of electron-positron pairs and photons expanding at Lorentz factors of 100–1000. Internal shocks within the jet produce the prompt gamma-ray emission. As the fireball decelerates into the surrounding medium, external shocks produce a multi-wavelength <strong>afterglow</strong> fading over hours to days.</p>
      <p>NASA\'s <strong>Swift</strong> and <strong>Fermi</strong> observatories detect and localise GRBs in real time, triggering rapid follow-up observations worldwide.</p>
    `,
  },
];
