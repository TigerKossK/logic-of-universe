export const BLACKHOLES_CONTENT = [
  {
    id: 'what-is-a-black-hole',
    title: 'What Is a Black Hole?',
    level: 'beginner',
    page: 'black-holes.html',
    keywords: ['black hole', 'event horizon', 'singularity', 'gravity', 'escape velocity', 'light'],
    excerpt: 'A black hole is a region of space where gravity is so strong that nothing — not even light — can escape.',
    nasaSearchQuery: 'M87 black hole',
    relatedTopics: [
      { label: 'Event Horizon & Spacetime', href: '/pages/black-holes.html#event-horizon-physics' },
      { label: 'Stellar Black Holes', href: '/pages/black-holes.html#stellar-black-holes' },
      { label: 'Death of a Massive Star', href: '/pages/stars.html#stellar-death-massive' },
    ],
    body: `
      <p>A black hole is a region in space where gravity has become so strong that <strong>nothing can escape it</strong> — not matter, not radiation, not even light. This makes black holes invisible against the darkness of space, which is how they got their name.</p>
      <p>At the centre of a black hole is a <strong>singularity</strong> — a point where density becomes theoretically infinite and our current laws of physics break down. Surrounding it is the <strong>event horizon</strong> — the point of no return. Anything that crosses the event horizon is lost forever to the outside universe.</p>
      <p>Black holes are not cosmic vacuum cleaners. If you replaced the Sun with a black hole of the same mass, the planets would continue orbiting exactly as before — they would just get very cold. A black hole only affects things that come very close to it.</p>
    `,
  },
  {
    id: 'stellar-black-holes',
    title: 'Stellar Black Holes',
    level: 'beginner',
    page: 'black-holes.html',
    keywords: ['stellar black hole', 'core collapse', 'supernova remnant', 'neutron star', 'mass limit', 'X-ray binary'],
    excerpt: 'Stellar black holes form when massive stars collapse after a supernova — they typically range from 3 to 20 solar masses.',
    nasaSearchQuery: 'Cygnus X-1',
    relatedTopics: [
      { label: 'What Is a Black Hole?', href: '/pages/black-holes.html#what-is-a-black-hole' },
      { label: 'How We Detect Black Holes', href: '/pages/black-holes.html#detecting-black-holes' },
      { label: 'Death of a Massive Star', href: '/pages/stars.html#stellar-death-massive' },
    ],
    body: `
      <p><strong>Stellar black holes</strong> are the most common type and form from the collapsed cores of massive stars. When a star with more than about 20–25 solar masses exhausts its fuel and its core collapses, the implosion is so extreme that not even neutron degeneracy pressure can halt it. The core continues collapsing to form a black hole.</p>
      <p>They typically have masses between 3 and 20 times the mass of the Sun, though some "stellar" black holes discovered by gravitational wave detectors have reached 60–80 solar masses — challenging our models of stellar evolution.</p>
      <p>We detect them indirectly — through their gravitational effects on nearby stars, or when they form <strong>X-ray binaries</strong> with a companion star. The companion\'s gas streams toward the black hole, forms an accretion disk, heats up to millions of degrees, and glows brilliantly in X-rays.</p>
    `,
  },
  {
    id: 'supermassive-black-holes',
    title: 'Supermassive Black Holes',
    level: 'intermediate',
    page: 'black-holes.html',
    keywords: ['supermassive black hole', 'galactic centre', 'Sagittarius A*', 'M87', 'AGN', 'quasar', 'million solar masses'],
    excerpt: 'Lurking at the centres of most large galaxies, supermassive black holes contain millions to billions of solar masses.',
    nasaSearchQuery: 'galactic center black hole',
    relatedTopics: [
      { label: 'Quasars', href: '/pages/stellar-objects.html#quasars' },
      { label: 'How We Detect Black Holes', href: '/pages/black-holes.html#detecting-black-holes' },
      { label: 'Event Horizon & Spacetime', href: '/pages/black-holes.html#event-horizon-physics' },
    ],
    body: `
      <p><strong>Supermassive black holes</strong> sit at the centres of virtually all large galaxies, including our own Milky Way. They range from millions to billions of times the mass of the Sun.</p>
      <p>Our galaxy harbours <strong>Sagittarius A*</strong> — about 4 million solar masses, located 26,000 light-years from Earth. In 2022, the Event Horizon Telescope collaboration released the first direct image of Sgr A*, showing the glowing ring of hot gas around its shadow.</p>
      <p>The most massive known black hole is <strong>TON 618</strong>, with about 66 billion solar masses. <strong>M87*</strong> — the first black hole ever directly imaged, in 2019 — weighs in at 6.5 billion solar masses.</p>
      <p>How supermassive black holes formed is still an open question. They may have grown from smaller "seed" black holes, or formed directly from the collapse of massive primordial gas clouds in the early universe.</p>
    `,
  },
  {
    id: 'intermediate-black-holes',
    title: 'Intermediate-Mass Black Holes',
    level: 'intermediate',
    page: 'black-holes.html',
    keywords: ['intermediate black hole', 'IMBH', 'globular cluster', 'missing link', 'gravitational waves', 'ultraluminous X-ray source'],
    excerpt: 'Intermediate-mass black holes — between stellar and supermassive — are the elusive missing link in black hole evolution.',
    nasaSearchQuery: 'globular cluster',
    relatedTopics: [
      { label: 'Stellar Black Holes', href: '/pages/black-holes.html#stellar-black-holes' },
      { label: 'Supermassive Black Holes', href: '/pages/black-holes.html#supermassive-black-holes' },
      { label: 'How We Detect Black Holes', href: '/pages/black-holes.html#detecting-black-holes' },
    ],
    body: `
      <p><strong>Intermediate-mass black holes (IMBHs)</strong> fall between stellar (up to ~100 solar masses) and supermassive (millions+): roughly 100 to 100,000 solar masses. They are the most elusive category — neither confirmed as abundantly as stellar black holes nor as certain as their supermassive cousins.</p>
      <p>Candidates include ultraluminous X-ray sources in some galaxies, and objects at the centres of dense globular clusters. In 2020, LIGO/Virgo detected gravitational waves from the merger of two black holes that created a 142-solar-mass remnant — direct evidence of an IMBH.</p>
      <p>IMBHs are important because they may be the "seeds" from which supermassive black holes grew in the early universe — or the products of runaway stellar mergers in dense star clusters.</p>
    `,
  },
  {
    id: 'primordial-black-holes',
    title: 'Primordial Black Holes',
    level: 'advanced',
    page: 'black-holes.html',
    keywords: ['primordial black hole', 'early universe', 'dark matter', 'Hawking radiation', 'Big Bang', 'density fluctuations'],
    excerpt: 'Primordial black holes may have formed from density fluctuations in the first second after the Big Bang — and could make up some or all of dark matter.',
    nasaSearchQuery: 'black hole',
    relatedTopics: [
      { label: 'What Is a Black Hole?', href: '/pages/black-holes.html#what-is-a-black-hole' },
      { label: 'Event Horizon & Spacetime', href: '/pages/black-holes.html#event-horizon-physics' },
      { label: 'The Big Bang', href: '/pages/stars.html#stellar-death-low-mass' },
    ],
    body: `
      <p><strong>Primordial black holes (PBHs)</strong> are a theoretical class that may have formed in the first fractions of a second after the Big Bang, from regions of space where density fluctuations were large enough to collapse directly into black holes — without any stars involved.</p>
      <p>They could have any mass, from subatomic to thousands of solar masses, depending on the size of the fluctuation and when it collapsed during the early universe.</p>
      <p>Intriguingly, PBHs have been proposed as a candidate for <strong>dark matter</strong>. If they exist in sufficient numbers and masses, they could account for the unseen mass that shapes galaxy formation. Constraints from gravitational microlensing surveys and gravitational wave observations rule out some mass ranges but leave windows open.</p>
      <p>Small PBHs would evaporate via <strong>Hawking radiation</strong> — a quantum mechanical process by which black holes slowly emit particles and lose mass. Any PBH with less than about 10¹² kg (the mass of a small asteroid) would have fully evaporated by now. The existence of PBHs remains unconfirmed.</p>
    `,
  },
  {
    id: 'event-horizon-physics',
    title: 'The Event Horizon & Spacetime',
    level: 'advanced',
    page: 'black-holes.html',
    keywords: ['event horizon', 'Schwarzschild radius', 'general relativity', 'spacetime curvature', 'tidal forces', 'spaghettification', 'time dilation'],
    excerpt: 'The event horizon is not a physical surface — it is the boundary where escape velocity exceeds the speed of light, a consequence of curved spacetime.',
    nasaSearchQuery: 'black hole simulation',
    relatedTopics: [
      { label: 'What Is a Black Hole?', href: '/pages/black-holes.html#what-is-a-black-hole' },
      { label: 'How We Detect Black Holes', href: '/pages/black-holes.html#detecting-black-holes' },
      { label: 'Supermassive Black Holes', href: '/pages/black-holes.html#supermassive-black-holes' },
    ],
    body: `
      <p>The <strong>event horizon</strong> is not a physical barrier or surface — it is a mathematical boundary defined by <strong>general relativity</strong>. It is the radius at which the escape velocity equals the speed of light. The Schwarzschild radius for a non-rotating black hole is r_s = 2GM/c², where G is the gravitational constant, M is the mass, and c is the speed of light. For the Sun, this would be about 3 km.</p>
      <h4>What an Observer Experiences</h4>
      <p>For a distant observer watching someone fall into a black hole: the infalling person appears to slow down, redshift, and fade away — frozen at the event horizon. They never see the crossing due to extreme time dilation.</p>
      <p>For the person falling in (assuming a large enough black hole that tidal forces are not immediately deadly at the horizon): they cross the event horizon without noticing anything special locally. Only afterward, as they approach the singularity, do tidal forces grow infinite, stretching them in a process called <strong>spaghettification</strong>.</p>
      <h4>The Information Paradox</h4>
      <p>Hawking radiation suggests black holes slowly evaporate. But if they evaporate completely, what happens to the information about everything that fell in? This <strong>black hole information paradox</strong> remains one of the deepest unresolved questions in theoretical physics, at the intersection of general relativity and quantum mechanics.</p>
    `,
  },
  {
    id: 'detecting-black-holes',
    title: 'How We Detect Black Holes',
    level: 'intermediate',
    page: 'black-holes.html',
    keywords: ['gravitational waves', 'LIGO', 'X-ray binary', 'accretion disk', 'Event Horizon Telescope', 'stellar orbits', 'microlensing'],
    excerpt: 'Black holes are invisible but reveal themselves through X-rays, gravitational waves, stellar orbits, and now direct imaging.',
    nasaSearchQuery: 'gravitational wave',
    relatedTopics: [
      { label: 'What Is a Black Hole?', href: '/pages/black-holes.html#what-is-a-black-hole' },
      { label: 'Stellar Black Holes', href: '/pages/black-holes.html#stellar-black-holes' },
      { label: 'When Neutron Stars Merge', href: '/pages/stellar-objects.html#neutron-star-mergers' },
    ],
    body: `
      <p>Since black holes emit no light, we detect them through their effects on the surrounding universe:</p>
      <ul>
        <li><strong>X-ray binaries:</strong> When a black hole and a companion star orbit each other, the black hole accretes material from the star. This forms an incredibly hot accretion disk that radiates powerfully in X-rays. NASA\'s Chandra X-ray Observatory maps these systems.</li>
        <li><strong>Stellar orbits:</strong> By tracking the precise orbits of stars near the galactic centre, astronomers inferred the presence of a ~4 million solar-mass object — Sagittarius A*. The 2020 Nobel Prize in Physics was awarded for this work.</li>
        <li><strong>Gravitational waves:</strong> When two black holes merge, they ripple spacetime itself. LIGO and Virgo detected the first such signal in September 2015 (GW150914), confirming merging stellar black holes of 29 and 36 solar masses.</li>
        <li><strong>Direct imaging:</strong> The Event Horizon Telescope — a global network of radio telescopes — produced the first image of M87*\'s shadow in 2019, and Sagittarius A* in 2022.</li>
        <li><strong>Gravitational microlensing:</strong> A black hole passing in front of a background star bends and brightens its light, allowing mass estimates.</li>
      </ul>
    `,
  },
];
