export type ServiceId =
  | 'house-cleaning'
  | 'airbnb-cleaning'
  | 'deep-cleaning'
  | 'move-in-out-cleaning'
  | 'office-commercial-cleaning'
  | 'home-organization';

export type RoutePath =
  | '/'
  | '/services'
  | '/services/house-cleaning'
  | '/services/airbnb-cleaning'
  | '/services/deep-cleaning'
  | '/services/move-in-out-cleaning'
  | '/services/office-commercial-cleaning'
  | '/services/home-organization'
  | '/meet-the-owners'
  | '/our-work'
  | '/service-areas'
  | '/estimate'
  | '/contact';

export interface ServiceItem {
  id: ServiceId;
  slug: RoutePath;
  number: string;
  title: string;
  shortTitle: string;
  startingPrice: number;
  categoryType: 'residential' | 'airbnb' | 'commercial' | 'organization';
  tagline: string;
  summary: string;
  editorialDescription: string;
  image: string;
  imageAlt: string;
  frequencies?: string[];
  scopeHighlights: string[];
  idealFor: string[];
  roomChecklist: {
    area: string;
    tasks: string[];
  }[];
}

export const IMAGES = {
  heroSunlitHome: '/images/hero-sunlit-home.webp',
  houseKitchen: '/images/service-house-kitchen.webp',
  airbnbBedroom: '/images/service-airbnb-bedroom.webp',
  deepMoveClean: '/images/service-deep-move-clean.webp',
  officeCommercial: '/images/service-office-commercial.webp',
  closetOrganization: '/images/service-closet-organization.webp',
  ownersCraft: '/images/owners-craft-still-life.webp',
} as const;

export const COMPANY_INFO = {
  name: 'What A Cleaning Services',
  shortName: 'What A Cleaning',
  owners: 'Reginald & Aleyah Berry',
  email: 'owners@what-a-cleaning.com',
  region: 'Oklahoma City Metro Area, Oklahoma',
  originalUrl: 'https://what-a-cleaning.com/',
  agencyCredit: 'Independent website redesign concept by S.Mideros Agency.',
} as const;

export const SERVICE_AREAS = [
  {
    city: 'Oklahoma City',
    zips: ['73102', '73103', '73104', '73106', '73107', '73112', '73116', '73118', '73120', '73132', '73142', '73162'],
    note: 'Core metro neighborhoods, central districts, and surrounding residential areas.',
  },
  {
    city: 'Edmond',
    zips: ['73003', '73012', '73013', '73025', '73034'],
    note: 'North metro residential homes, family neighborhoods, and local offices.',
  },
  {
    city: 'Norman',
    zips: ['73069', '73071', '73072'],
    note: 'Residential cleanings, rental turnovers, and seasonal move-outs.',
  },
  {
    city: 'Moore',
    zips: ['73160', '73170'],
    note: 'Routine family home upkeep, deep cleaning, and organization.',
  },
  {
    city: 'Yukon',
    zips: ['73099'],
    note: 'West metro households, recurring maintenance, and move-in preparations.',
  },
  {
    city: 'Bethany',
    zips: ['73008'],
    note: 'Neighborhood homes, older-adult support, and small commercial spaces.',
  },
  {
    city: 'Mustang',
    zips: ['73064'],
    note: 'Residential cleanings, deep cleans, and pantry or closet organization.',
  },
  {
    city: 'Midwest City',
    zips: ['73110', '73130'],
    note: 'East metro residential care, move-out cleanings, and local businesses.',
  },
] as const;

export const SERVICES: ServiceItem[] = [
  {
    id: 'house-cleaning',
    slug: '/services/house-cleaning',
    number: '01',
    title: 'House Cleaning',
    shortTitle: 'House Cleaning',
    startingPrice: 99,
    categoryType: 'residential',
    tagline: 'Routine residential care tailored to the rhythm of your household.',
    summary:
      'Consistent, thoughtful residential cleaning with weekly, biweekly, monthly, and one-time options — personally carried out by Reginald and Aleyah.',
    editorialDescription:
      'Keeping a home steady takes energy that busy schedules or demanding seasons can quickly consume. Our House Cleaning service brings reliable, judgment-free upkeep to kitchens, bathrooms, bedrooms, and shared living spaces with the same familiar husband-and-wife team every visit.',
    image: IMAGES.houseKitchen,
    imageAlt: 'Sunlit residential kitchen with clean stone countertops, oak island, and folded linen towels',
    frequencies: ['Weekly', 'Biweekly', 'Monthly', 'One-Time'],
    scopeHighlights: [
      'Kitchen countertops, sinks, exterior appliances, and stovetops',
      'Bathrooms sanitized from fixtures and mirrors to tile and floors',
      'Living rooms and bedrooms dusted, straightened, vacuumed, and mopped',
      'High-touch surfaces, light switches, and baseboards maintained regularly',
    ],
    idealFor: [
      'Busy families balancing work, school, and home life',
      'Older adults who want dependable, familiar help around the house',
      'Households seeking a steady, recurring cleaning partner rather than rotating crews',
    ],
    roomChecklist: [
      {
        area: 'Kitchen & Dining',
        tasks: [
          'Wipe and sanitize countertops, backsplashes, and island surfaces',
          'Scrub sink basin and polish faucet fixtures',
          'Clean stovetop surface and exterior range hood',
          'Wipe exterior cabinet fronts and major appliance exteriors',
          'Sweep and mop hard flooring',
        ],
      },
      {
        area: 'Bathrooms',
        tasks: [
          'Clean and sanitize toilets, sinks, vanities, and mirrors',
          'Scrub shower walls, glass doors, and tub surrounds',
          'Fold or straighten hand towels neatly',
          'Vacuum and mop bathroom floors',
        ],
      },
      {
        area: 'Bedrooms & Living Areas',
        tasks: [
          'Dust furniture, shelves, sills, and accessible surfaces',
          'Make beds or straighten existing linens as requested',
          'Vacuum carpets, area rugs, and upholstery edges',
          'Empty household wastebaskets and replace liners',
        ],
      },
    ],
  },
  {
    id: 'airbnb-cleaning',
    slug: '/services/airbnb-cleaning',
    number: '02',
    title: 'Airbnb Cleaning',
    shortTitle: 'Airbnb Cleaning',
    startingPrice: 119,
    categoryType: 'airbnb',
    tagline: 'Dependable short-term rental turnovers between guest stays.',
    summary:
      'Detailed turnover cleaning between check-out and check-in so your property feels welcoming, fresh, and thoughtfully reset for every arriving guest.',
    editorialDescription:
      'Short-term rental hosts depend on consistency and clear communication. Because you work directly with the owners, you always know who is inside your property, what condition it was left in, and that every room has been carefully prepared before guests arrive.',
    image: IMAGES.airbnbBedroom,
    imageAlt: 'Welcoming boutique Airbnb guest bedroom with crisp white cotton bedding and warm natural daylight',
    frequencies: ['Per Turnover', 'Recurring Host Schedule'],
    scopeHighlights: [
      'Complete guest bathroom and kitchen reset between stays',
      'Fresh bed making and linen turnover per host instructions',
      'Floor-to-surface dusting, vacuuming, and mopping across guest spaces',
      'Direct communication with owners regarding property condition or supply notes',
    ],
    idealFor: [
      'Oklahoma City metro Airbnb and Vrbo hosts',
      'Out-of-town property owners seeking accountable local eyes on their home',
      'Boutique guesthouses requiring consistent hospitality presentation',
    ],
    roomChecklist: [
      {
        area: 'Guest Bedrooms & Living',
        tasks: [
          'Strip used linens and remake beds crisply with fresh sheets',
          'Check under beds, closets, and drawers for forgotten guest items',
          'Dust nightstands, lamps, dressers, and seating areas',
          'Vacuum rugs and mop hardwood or tile floors',
        ],
      },
      {
        area: 'Kitchen & Bath Reset',
        tasks: [
          'Sanitize kitchen prep areas, sink, refrigerator shelves, and microwave',
          'Verify dishes and glassware are clean and put away neatly',
          'Deep-wipe guest bathrooms, mirrors, showers, and fixtures',
          'Restock guest essentials provided by the host and remove all trash',
        ],
      },
    ],
  },
  {
    id: 'deep-cleaning',
    slug: '/services/deep-cleaning',
    number: '03',
    title: 'Deep Cleaning',
    shortTitle: 'Deep Cleaning',
    startingPrice: 249,
    categoryType: 'residential',
    tagline: 'Thorough, unhurried attention for homes ready for a true reset.',
    summary:
      'More detailed residential cleaning built for homes needing extra time on buildup, baseboards, fixtures, trim, and overlooked corners.',
    editorialDescription:
      'Sometimes a standard tidy-up is not enough — whether life has been overwhelming, seasons have changed, or you want a fresh baseline before beginning recurring cleanings. We bring patience and zero judgment to every deep clean.',
    image: IMAGES.deepMoveClean,
    imageAlt: 'Bright freshly deep-cleaned residential living room with gleaming oak floors and spotless baseboards',
    frequencies: ['One-Time Deep Reset', 'Seasonal Deep Clean', 'First-Visit Baseline'],
    scopeHighlights: [
      'Detailed hand-wiping of baseboards, trim, doors, and window sills',
      'Intensive kitchen degreasing and bathroom buildup removal',
      'Ceiling fans, vents, light fixtures, and hard-to-reach corners dusted',
      'Thoughtful pace designed for homes that need meaningful extra care',
    ],
    idealFor: [
      'Homes preparing for recurring weekly or biweekly maintenance',
      'Anyone catching up after a busy season, illness, or life transition',
      'Seasonal spring or holiday resets across the entire home',
    ],
    roomChecklist: [
      {
        area: 'Detailed Architectural Trim',
        tasks: [
          'Hand-wipe baseboards, door frames, and interior doors',
          'Dust window blinds, sills, and reachable tracks',
          'Clean ceiling fan blades, light switch plates, and vent covers',
        ],
      },
      {
        area: 'Intensive Kitchen & Bath',
        tasks: [
          'Detailed scrubbing of tile grout lines, shower glass, and soap buildup',
          'Degrease range hood, stovetop details, and cabinet faces',
          'Wipe inside microwave and polish chrome or brass fixtures',
        ],
      },
    ],
  },
  {
    id: 'move-in-out-cleaning',
    slug: '/services/move-in-out-cleaning',
    number: '04',
    title: 'Move-In / Move-Out Cleaning',
    shortTitle: 'Move-In / Move-Out',
    startingPrice: 199,
    categoryType: 'residential',
    tagline: 'Leaving a space with care, or stepping into one that feels truly ready.',
    summary:
      'Comprehensive residential cleaning centered around moves — giving empty rooms, cabinets, closets, and floors a spotless transition.',
    editorialDescription:
      'Moving is exhausting enough without scrubbing an empty house at the end of the day. We help sellers, renters, landlords, and incoming families turn the page cleanly with detailed top-to-bottom care across empty or nearly empty homes.',
    image: IMAGES.deepMoveClean,
    imageAlt: 'Spotless empty sunlit living space prepared for move-in day',
    frequencies: ['Move-Out Clean', 'Move-In Preparation'],
    scopeHighlights: [
      'Inside cabinets, drawers, pantry shelves, and closets wiped clean',
      'Empty refrigerators, ovens, and kitchen appliances cleaned on request',
      'Full bathroom sanitization and floor-to-baseboard attention',
      'Ideal for walkthroughs, lease handoffs, or fresh move-in peace of mind',
    ],
    idealFor: [
      'Families moving into a newly purchased or leased Oklahoma City home',
      'Renters preparing a property for final landlord inspection',
      'Homeowners and property managers getting a residence listing-ready',
    ],
    roomChecklist: [
      {
        area: 'Empty Cabinets & Storage',
        tasks: [
          'Wipe inside and outside of kitchen and bathroom cabinets and drawers',
          'Clean closet shelves, hanging rods, and pantry surfaces',
          'Remove dust and debris from corners and floor edges',
        ],
      },
      {
        area: 'Whole-Home Surface Reset',
        tasks: [
          'Clean baseboards, interior windowsills, and doors throughout',
          'Sanitize all sinks, tubs, showers, and toilets thoroughly',
          'Vacuum and wet-mop every room after surfaces are complete',
        ],
      },
    ],
  },
  {
    id: 'office-commercial-cleaning',
    slug: '/services/office-commercial-cleaning',
    number: '05',
    title: 'Office & Commercial Cleaning',
    shortTitle: 'Office & Commercial',
    startingPrice: 149,
    categoryType: 'commercial',
    tagline: 'Quiet, trustworthy care for local offices, studios, and retail spaces.',
    summary:
      'Reliable cleaning for small businesses, offices, and neighborhood storefronts — handled directly by owners you know and trust with your keys.',
    editorialDescription:
      'Small businesses deserve the same reliability and personal pride they give their own customers. Working directly with Reginald and Aleyah means consistent security, clear communication, and welcoming workspaces for your staff and visitors.',
    image: IMAGES.officeCommercial,
    imageAlt: 'Clean sunlit local business office and collaborative workspace with oak tables and indoor plants',
    frequencies: ['Weekly', 'Biweekly', 'Multiple Visits / Week', 'One-Time'],
    scopeHighlights: [
      'Reception areas, conference tables, and shared desks dusted and sanitized',
      'Breakrooms, kitchenettes, and customer restrooms thoroughly cleaned',
      'Glass entry doors, interior glass, and high-touch handles kept streak-free',
      'Trash collection, floor care, and flexible scheduling discussed directly',
    ],
    idealFor: [
      'Local OKC metro offices, studios, and professional practices',
      'Independent retail shops and client-facing storefronts',
      'Business owners who prefer dealing directly with the cleaning company owners',
    ],
    roomChecklist: [
      {
        area: 'Client & Work Areas',
        tasks: [
          'Wipe reception desks, conference tables, and open work surfaces',
          'Clean glass entry doors and interior glass smudges',
          'Vacuum carpeted walkways and mop hard-surface floors',
        ],
      },
      {
        area: 'Restrooms & Breakrooms',
        tasks: [
          'Sanitize restrooms, mirrors, dispensers, and fixtures',
          'Clean breakroom counters, sinks, and exterior appliances',
          'Empty trash receptacles and replace liners',
        ],
      },
    ],
  },
  {
    id: 'home-organization',
    slug: '/services/home-organization',
    number: '06',
    title: 'Closet & Home Organization',
    shortTitle: 'Home Organization',
    startingPrice: 149,
    categoryType: 'organization',
    tagline: 'Calm, practical systems for closets, pantries, and everyday spaces.',
    summary:
      'Thoughtful, hands-on organization designed around how your household actually lives — turning cluttered shelves and closets into peaceful, usable spaces.',
    editorialDescription:
      'Clutter builds up quietly when life gets busy, and sorting through it alone can feel overwhelming. We work alongside your goals with practical sorting, clear zones, and maintainable layouts for closets, pantries, laundry rooms, and living spaces.',
    image: IMAGES.closetOrganization,
    imageAlt: 'Neatly organized wooden pantry and linen closet with woven baskets, clear glass jars, and folded towels',
    frequencies: ['Single-Space Session', 'Multi-Room Organization'],
    scopeHighlights: [
      'Wardrobe closets, linen closets, pantries, and utility rooms',
      'Practical grouping and sorting so everyday items are easy to find',
      'Shelf, drawer, and basket arrangement tailored to your existing space',
      'Compassionate, private, judgment-free support at your pace',
    ],
    idealFor: [
      'Pantries and kitchens that need clear, functional food storage zones',
      'Bedroom and linen closets ready for simpler daily routines',
      'Families or older adults downsizing, settling in, or reclaiming space',
    ],
    roomChecklist: [
      {
        area: 'Assessment & Sorting',
        tasks: [
          'Clear and wipe shelving, rods, and drawer interiors before resetting',
          'Sort items into clear everyday categories with your input',
          'Identify unused or misplaced items for easy household decisions',
        ],
      },
      {
        area: 'System Setup',
        tasks: [
          'Arrange baskets, jars, bins, or folded stacks into intuitive zones',
          'Place high-use daily essentials at comfortable eye and reach level',
          'Leave clean, practical organization that is easy to keep up',
        ],
      },
    ],
  },
];

export interface OwnerStatement {
  speaker: string;
  role: string;
  quote: string;
  context: string;
}

export const OWNER_STATEMENTS: OwnerStatement[] = [
  {
    speaker: 'Aleyah Berry',
    role: 'Co-Owner & Cleaner',
    quote:
      'I know firsthand how heavy a home can feel when life or mental health makes keeping up feel impossible. Watching my grandparents struggle to maintain their home also showed me how much dignity a helping hand brings. We never walk into a space with judgment — we walk in to bring relief.',
    context: 'On why What A Cleaning Services leads with compassion',
  },
  {
    speaker: 'Reginald Berry',
    role: 'Co-Owner & Cleaner',
    quote:
      'After more than six years in the military, serving people with discipline and dependability is second nature to me. When you invite us into your home or business, you speak directly with us, and we are the ones who show up and stand behind the work.',
    context: 'On personal accountability and owner-operated service',
  },
];

export const TRUST_PILLARS = [
  {
    number: '01',
    title: 'Owner-Operated Every Visit',
    description:
      'Reginald and Aleyah are both the owners and your cleaning team — never an anonymous rotating crew or outsourced subcontractor.',
  },
  {
    number: '02',
    title: 'Insured Service',
    description:
      'What A Cleaning Services operates as an insured cleaning provider for residential and commercial spaces across the OKC metro.',
  },
  {
    number: '03',
    title: 'Direct Owner Communication',
    description:
      'Your questions, estimate details, and special requests go straight to the people who will be caring for your space.',
  },
  {
    number: '04',
    title: 'Satisfaction-Focused Approach',
    description:
      'Because our family name and pride are tied directly to every room, we encourage open feedback and want you to feel genuinely cared for.',
  },
];

export const FAQS = [
  {
    question: 'What makes What A Cleaning Services different from larger cleaning companies?',
    answer:
      'We are a husband-and-wife, owner-operated business. When you reach out, you communicate directly with Reginald and Aleyah Berry, and we are the same familiar team who arrives to clean and care for your home or workspace.',
  },
  {
    question: 'What is the difference between House Cleaning and Deep Cleaning?',
    answer:
      'House Cleaning (starting at $99) covers routine upkeep of kitchens, bathrooms, bedrooms, and living areas on a weekly, biweekly, monthly, or one-time basis. Deep Cleaning (starting at $249) goes further into buildup, baseboards, trim, detailed fixtures, and spaces that need meaningful extra time and attention.',
  },
  {
    question: 'Which cleaning frequencies do you offer?',
    answer:
      'For residential House Cleaning, we offer weekly, biweekly, monthly, and one-time visits. Commercial and Airbnb turnover schedules are arranged directly with you around your operating or hosting calendar.',
  },
  {
    question: 'How do Airbnb turnover cleanings work?',
    answer:
      'Airbnb Cleaning (starting at $119) prepares your short-term rental between guest stays — resetting kitchens and bathrooms, remaking beds with fresh linens, checking surfaces and floors, and keeping you informed directly if anything in the property needs attention.',
  },
  {
    question: 'What does Closet & Home Organization include?',
    answer:
      'Closet & Home Organization (starting at $149) focuses on closets, pantries, linen storage, and everyday living zones. We wipe down shelves and drawers, help sort items thoughtfully, and set up simple, maintainable systems tailored to how you live.',
  },
  {
    question: 'Are the prices shown on the website final quotes?',
    answer:
      'No — the prices listed ($99 to $249 depending on service) are published starting prices. Every home, rental, or office has different square footage, layout, and condition needs. Your estimate request gives us a helpful starting point, and final pricing is always confirmed directly with Reginald and Aleyah after reviewing your details.',
  },
  {
    question: 'How does your estimate process work?',
    answer:
      'You start by sharing your city or ZIP code, selecting one of our six services, and answering a few relevant questions about your space. From there, we review your request and follow up directly by email to confirm scope, scheduling, and final pricing together.',
  },
  {
    question: 'Which cities in the Oklahoma City metro do you serve?',
    answer:
      'We serve Oklahoma City, Edmond, Norman, Moore, Yukon, Bethany, Mustang, and Midwest City. If you live in a neighboring community outside that list, please reach out — we are happy to confirm availability.',
  },
  {
    question: 'How is the best way to contact the owners?',
    answer:
      'Email is currently our primary and most reliable contact channel. You can reach Reginald and Aleyah directly at owners@what-a-cleaning.com or submit an estimate or contact inquiry right here on the site.',
  },
];

export interface ShowcaseSpace {
  id: string;
  serviceId: ServiceId;
  title: string;
  spaceType: string;
  image: string;
  imageAlt: string;
  caption: string;
  focusAreas: {
    label: string;
    detail: string;
  }[];
}

export const SHOWCASE_SPACES: ShowcaseSpace[] = [
  {
    id: 'kitchen-care',
    serviceId: 'house-cleaning',
    title: 'Sunlit Family Kitchen Reset',
    spaceType: 'House Cleaning · Starting at $99',
    image: IMAGES.houseKitchen,
    imageAlt: 'Spotless family kitchen with creamy countertops, wood island, and polished brass faucet',
    caption: 'Calm, food-safe surfaces and warm everyday readiness across counters, sinks, and natural wood.',
    focusAreas: [
      { label: 'Stone & Wood Counters', detail: 'Cleared, sanitized, and wiped streak-free with surface-safe care.' },
      { label: 'Sink & Brass Fixtures', detail: 'Basin scrubbed, drain cleared, and hardware polished dry.' },
      { label: 'Cabinet Fronts & Floors', detail: 'Fingerprints wiped around pulls; floors swept and mopped.' },
    ],
  },
  {
    id: 'guest-suite',
    serviceId: 'airbnb-cleaning',
    title: 'Boutique Guest Suite Turnover',
    spaceType: 'Airbnb Cleaning · Starting at $119',
    image: IMAGES.airbnbBedroom,
    imageAlt: 'Crisp guest bedroom prepared for Airbnb arrival with fresh white cotton linens',
    caption: 'Hotel-crisp linen presentation and reassuring consistency between every guest check-out and arrival.',
    focusAreas: [
      { label: 'Fresh Linen Reset', detail: 'Crisply tucked sheets, fluffed pillows, and folded throws ready for guests.' },
      { label: 'Nightstands & Surfaces', detail: 'Dusted lamps, cleared drawers checked for left items, and clean glass.' },
      { label: 'Warm Floor Care', detail: 'Rugs vacuumed and hardwood corners swept clean before check-in.' },
    ],
  },
  {
    id: 'empty-living',
    serviceId: 'move-in-out-cleaning',
    title: 'Move-Ready Living & Hallway',
    spaceType: 'Move-In / Move-Out · Starting at $199',
    image: IMAGES.deepMoveClean,
    imageAlt: 'Empty sunlit living room with freshly cleaned hardwood floors and crisp white baseboards',
    caption: 'Empty-home care from gleaming window sills and white baseboards down to dust-free hardwood corners.',
    focusAreas: [
      { label: 'Baseboards & Trim', detail: 'Hand-wiped along every wall perimeter and doorway casing.' },
      { label: 'Interior Window Sills', detail: 'Tracks and ledges cleared of dust and seasonal debris.' },
      { label: 'Whole-Floor Finish', detail: 'Thorough vacuum and damp mop leaving a quiet, ready-to-move-in shine.' },
    ],
  },
  {
    id: 'pantry-linen',
    serviceId: 'home-organization',
    title: 'Walk-In Pantry & Linen System',
    spaceType: 'Closet & Home Organization · Starting at $149',
    image: IMAGES.closetOrganization,
    imageAlt: 'Organized wooden pantry and linen shelves with woven baskets and glass jars',
    caption: 'Clear functional zones that turn crowded storage shelves into calm, effortless daily routines.',
    focusAreas: [
      { label: 'Cleared & Wiped Shelves', detail: 'Every shelf emptied, dusted, and wiped clean prior to organizing.' },
      { label: 'Intuitive Grouping', detail: 'Dry goods, linens, and household supplies sorted into labeled zones.' },
      { label: 'Maintainable Flow', detail: 'Everyday items positioned at easy reach so systems stay tidy long-term.' },
    ],
  },
  {
    id: 'local-office',
    serviceId: 'office-commercial-cleaning',
    title: 'Small-Business Office & Studio',
    spaceType: 'Office & Commercial · Starting at $149',
    image: IMAGES.officeCommercial,
    imageAlt: 'Clean modern small-business studio with oak desks and glass partitions',
    caption: 'Trustworthy, key-holder-level care for neighborhood offices, client rooms, and small businesses.',
    focusAreas: [
      { label: 'Worktables & Reception', detail: 'Desks, chairs, and shared surfaces dusted without disturbing documents.' },
      { label: 'Glass Partitions & Entry', detail: 'Door handles sanitized and glass kept clear of fingerprints.' },
      { label: 'Breakrooms & Restrooms', detail: 'Common areas refreshed for both team morale and visiting clients.' },
    ],
  },
];
