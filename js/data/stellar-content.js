export const STELLAR_CONTENT = [
  {
    id: 'neutron-stars',
    title: 'What Are Neutron Stars?',
    level: 'beginner',
    page: 'stellar-objects.html',
    keywords: ['neutron star', 'dense', 'supernova remnant', 'core collapse', 'nuclear density', 'teaspoon'],
    excerpt: 'Neutron stars are the crushed cores of massive stars — so dense that a teaspoon would weigh a billion tonnes.',
    nasaSearchQuery: 'Cassiopeia A neutron star Chandra X-ray',
    mediaUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Crab_Nebula.jpg',
    mediaCaption: 'The Crab Nebula — a supernova remnant with a spinning neutron star at its core. Credit: NASA/ESA',
    relatedTopics: [
      { label: 'Pulsars', href: '/pages/stellar-objects.html#pulsars' },
      { label: 'Magnetars', href: '/pages/stellar-objects.html#magnetars' },
      { label: 'Death of a Massive Star', href: '/pages/stars.html#stellar-death-massive' },
    ],
    body: `
      <p>When a massive star explodes in a supernova, its core may survive as a <strong>neutron star</strong> — one of the most extreme objects in the universe. Neutron stars pack roughly 1.4 times the mass of our Sun into a sphere only about 20 km across — the size of a city.</p>
      <p>Matter inside a neutron star is so compressed that electrons and protons are forced to merge, forming neutrons. A teaspoon of neutron star material would weigh about a billion tonnes on Earth.</p>
      <p>Despite being so small, neutron stars can spin hundreds of times per second, produce beams of radio waves, and generate magnetic fields trillions of times stronger than Earth\'s. They are the universe\'s most powerful natural magnets.</p>
    `,
  },
  {
    id: 'pulsars',
    title: 'Pulsars: Cosmic Lighthouses',
    level: 'intermediate',
    page: 'stellar-objects.html',
    keywords: ['pulsar', 'rotating neutron star', 'radio beam', 'lighthouse effect', 'millisecond pulsar', 'timing', 'Jocelyn Bell'],
    excerpt: 'Pulsars are rotating neutron stars that beam radio waves — their incredibly regular pulses make them the universe\'s most precise clocks.',
    nasaSearchQuery: 'Crab Nebula pulsar Chandra X-ray jet',
    relatedTopics: [
      { label: 'What Are Neutron Stars?', href: '/pages/stellar-objects.html#neutron-stars' },
      { label: 'Magnetars', href: '/pages/stellar-objects.html#magnetars' },
      { label: 'When Neutron Stars Merge', href: '/pages/stellar-objects.html#neutron-star-mergers' },
    ],
    body: `
      <p>A <strong>pulsar</strong> is a rapidly rotating neutron star that emits beams of electromagnetic radiation from its magnetic poles. As the star spins, the beam sweeps past Earth like a lighthouse — we detect a regular "pulse" each time it points our way.</p>
      <p>Pulsars were discovered in 1967 by astronomer <strong>Jocelyn Bell Burnell</strong>, who noticed an eerily regular signal repeating every 1.34 seconds. The signal was so precise that astronomers initially nicknamed it "LGM-1" (Little Green Men) before realising it was a natural object.</p>
      <p>Pulsars spin with extraordinary regularity. <strong>Millisecond pulsars</strong> — old pulsars spun up by accreting material from a companion — can rotate hundreds of times per second and maintain their period to better than 1 part in 10¹³. They rival atomic clocks in precision and are being used in <strong>pulsar timing arrays</strong> to detect gravitational waves from supermassive black hole mergers.</p>
    `,
  },
  {
    id: 'magnetars',
    title: 'Magnetars: The Universe\'s Strongest Magnets',
    level: 'intermediate',
    page: 'stellar-objects.html',
    keywords: ['magnetar', 'magnetic field', 'soft gamma repeater', 'anomalous X-ray pulsar', 'starquake', 'SGR 1806-20'],
    excerpt: 'Magnetars are neutron stars with magnetic fields a quadrillion times stronger than Earth\'s — capable of causing starquakes and gamma-ray bursts.',
    nasaSearchQuery: 'magnetar neutron star magnetic field burst',
    relatedTopics: [
      { label: 'What Are Neutron Stars?', href: '/pages/stellar-objects.html#neutron-stars' },
      { label: 'Gamma-Ray Bursts', href: '/pages/explosions.html#gamma-ray-bursts' },
      { label: 'Pulsars', href: '/pages/stellar-objects.html#pulsars' },
    ],
    body: `
      <p><strong>Magnetars</strong> are a rare class of neutron stars with extraordinarily powerful magnetic fields — up to 10¹⁵ Gauss (a quadrillion times Earth\'s field). This is strong enough that, at the distance of the Moon, it would wipe every credit card on Earth and disrupt iron atoms in your body.</p>
      <p>Their immense magnetic energy powers violent outbursts called <strong>soft gamma repeaters (SGRs)</strong> and <strong>anomalous X-ray pulsars (AXPs)</strong>. On 27 December 2004, SGR 1806-20 released more energy in one-tenth of a second than the Sun emits in 100,000 years. The blast partially ionised Earth\'s upper atmosphere from 50,000 light-years away.</p>
      <p>Magnetars are thought to form when a massive star with a very fast-rotating core collapses — the rapid rotation amplifies the magnetic field through a dynamo mechanism. They are short-lived: the intense field decays within ~10,000 years, leaving an ordinary neutron star.</p>
      <p>Magnetars also produce <strong>starquakes</strong> — sudden fractures in the neutron star crust as the magnetic field shifts — generating intense gamma-ray and X-ray flares.</p>
    `,
  },
  {
    id: 'quasars',
    title: 'Quasars: The Brightest Objects in the Universe',
    level: 'intermediate',
    page: 'stellar-objects.html',
    keywords: ['quasar', 'quasi-stellar object', 'active galactic nucleus', 'AGN', 'accretion disk', 'redshift', 'early universe'],
    excerpt: 'Quasars are the incredibly luminous cores of distant galaxies, powered by supermassive black holes actively consuming material.',
    nasaSearchQuery: 'quasar 3C 273',
    relatedTopics: [
      { label: 'Supermassive Black Holes', href: '/pages/black-holes.html#supermassive-black-holes' },
      { label: 'Blazars', href: '/pages/stellar-objects.html#blazars' },
      { label: 'How We Detect Black Holes', href: '/pages/black-holes.html#detecting-black-holes' },
    ],
    body: `
      <p><strong>Quasars</strong> (quasi-stellar objects) are the most luminous persistent objects in the universe. They are the intensely bright cores of distant galaxies, powered by supermassive black holes — billions of solar masses — actively accreting vast amounts of gas and dust.</p>
      <p>The material falling into the black hole forms a superheated <strong>accretion disk</strong> that radiates across the entire electromagnetic spectrum with extraordinary brightness — outshining their entire host galaxies by factors of 100 or more. The brightest quasar, J0529-4351, is 500 trillion times more luminous than the Sun.</p>
      <p>Quasars are almost all found at vast distances — meaning they existed in the early universe. This tells us that supermassive black holes were already enormous and extremely active when the universe was young. Over time, as gas supplies were depleted, these active nuclei "switched off," and the host galaxies quietened into the galaxies we see nearby today — including the Milky Way, which has a dormant supermassive black hole at its centre.</p>
      <p>They were first identified in the 1950s and 60s as point-like radio sources with strange spectral lines — which turned out to be normal lines heavily <strong>redshifted</strong> by the expansion of the universe, indicating extreme distances.</p>
    `,
  },
  {
    id: 'blazars',
    title: 'Blazars: Jets Pointed at Earth',
    level: 'advanced',
    page: 'stellar-objects.html',
    keywords: ['blazar', 'relativistic jet', 'BL Lac object', 'flat spectrum radio quasar', 'Doppler boosting', 'gamma-ray', 'variability'],
    excerpt: 'Blazars are quasars with their relativistic jets aimed directly at Earth — making them appear extraordinarily bright and variable.',
    nasaSearchQuery: 'blazar',
    relatedTopics: [
      { label: 'Quasars', href: '/pages/stellar-objects.html#quasars' },
      { label: 'Gamma-Ray Bursts', href: '/pages/explosions.html#gamma-ray-bursts' },
      { label: 'Supermassive Black Holes', href: '/pages/black-holes.html#supermassive-black-holes' },
    ],
    body: `
      <p>A <strong>blazar</strong> is a type of active galactic nucleus in which one of the relativistic jets — streams of plasma ejected from near the supermassive black hole at close to the speed of light — happens to point almost directly toward Earth.</p>
      <p>This special alignment causes <strong>Doppler boosting</strong>: the apparent luminosity and energy of the jet emission are dramatically amplified. Blazars are among the brightest and most variable objects in the gamma-ray sky, sometimes brightening and dimming within minutes.</p>
      <p>Blazars are classified into two types:</p>
      <ul>
        <li><strong>BL Lac objects:</strong> Named after BL Lacertae, they show very weak or absent emission lines, suggesting a relatively "starved" central engine with low gas supply.</li>
        <li><strong>Flat-spectrum radio quasars (FSRQs):</strong> Show strong emission lines, indicating a richer gas environment and higher accretion rates.</li>
      </ul>
      <p>Blazars are important sources of <strong>ultra-high-energy cosmic rays and neutrinos</strong>. In 2017, IceCube Neutrino Observatory detected a high-energy neutrino tracing back to blazar TXS 0506+056, one of the first identified sources of high-energy cosmic neutrinos.</p>
    `,
  },
  {
    id: 'neutron-star-mergers',
    title: 'When Neutron Stars Merge',
    level: 'advanced',
    page: 'stellar-objects.html',
    keywords: ['neutron star merger', 'kilonova', 'gravitational waves', 'GW170817', 'r-process', 'gold', 'heavy elements', 'short GRB'],
    excerpt: 'Merging neutron stars produce gravitational waves, a short gamma-ray burst, and a kilonova — forging gold and other heavy elements.',
    nasaSearchQuery: 'neutron star merger',
    relatedTopics: [
      { label: 'Kilonovas', href: '/pages/explosions.html#kilonovas' },
      { label: 'What Are Neutron Stars?', href: '/pages/stellar-objects.html#neutron-stars' },
      { label: 'Gamma-Ray Bursts', href: '/pages/explosions.html#gamma-ray-bursts' },
    ],
    body: `
      <p>When two neutron stars in a binary system spiral together and merge, the result is one of the most spectacular events in the universe. The merger was directly observed for the first time on 17 August 2017 — <strong>GW170817</strong> — detected simultaneously by LIGO/Virgo as gravitational waves and by dozens of telescopes across the electromagnetic spectrum.</p>
      <h4>What Happens</h4>
      <ol>
        <li>The two neutron stars spiral together over millions of years, losing energy to gravitational wave emission.</li>
        <li>In the final milliseconds, they merge in a cataclysm detectable across the universe in gravitational waves.</li>
        <li>A <strong>short gamma-ray burst (GRB)</strong> is launched — a jet of gamma rays lasting less than 2 seconds but briefly as bright as a billion suns.</li>
        <li>The merger produces a <strong>kilonova</strong> — an optical/infrared transient powered by the radioactive decay of heavy elements synthesised in the merger ejecta.</li>
      </ol>
      <h4>The Cosmic Gold Factory</h4>
      <p>Neutron star mergers are the primary site of the <strong>r-process (rapid neutron capture process)</strong> — the mechanism by which more than half of all elements heavier than iron are created, including gold, platinum, uranium, and lanthanides. GW170817 is estimated to have produced several times Earth\'s mass in gold alone.</p>
    `,
  },
];
