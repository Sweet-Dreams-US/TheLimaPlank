export type BusinessStatus = 'open' | 'coming-soon' | 'seasonal';

export type BusinessHour = { label: string; time: string };

export type Business = {
  slug: string;
  name: string;
  shortName: string;
  category: string;
  tagline: string;
  blurb: string;
  longCopy: string;
  story?: string;
  address: string;
  city: string;
  phone: string | null;
  email?: string;
  website?: string;
  instagram?: string;
  hours: BusinessHour[];
  features: string[];
  highlights: { label: string; value: string }[];
  accent: string;
  accentSoft: string;
  status: BusinessStatus;
  founded?: number;
  galleryFallbacks?: string[];
  order: number;
};

/**
 * The Lima Plank tenant directory. Each entry powers a card on the home grid
 * and a full editorial page at /[slug]. Accent colors riff on the brand
 * palette so the directory reads as a single collection while every shop
 * owns its own page chrome.
 */
export const businesses: Business[] = [
  {
    slug: 'pinball',
    name: 'Pinball',
    shortName: 'Pinball',
    category: 'Arcade · Bar · Late Night',
    tagline: 'Drop a quarter. Stay a while.',
    blurb:
      'A neon-lit arcade and bar built around restored machines, cold pours, and the best high-score crowd in town.',
    longCopy:
      "Pinball is the room that wakes up after dark. A wall of restored solid-state and modern Stern machines, a bar program that takes its highballs and lagers seriously, and a sound system that knows when to let the bumpers do the talking. Bring quarters. Bring friends. Stay later than you meant to.",
    story:
      "Started as a small private collection, Pinball grew into a destination once it landed on The Plank. The machines are rotated monthly — what's flipping today might be in the shop next week.",
    address: '112 The Plank',
    city: 'Lima, OH 45801',
    phone: null,
    website: 'https://example.com/pinball',
    hours: [
      { label: 'Tue – Thu', time: '5:00 pm – 11:00 pm' },
      { label: 'Fri – Sat', time: '4:00 pm – 1:00 am' },
      { label: 'Sun', time: '2:00 pm – 10:00 pm' },
      { label: 'Mon', time: 'Closed' },
    ],
    features: ['30+ machines', 'Full bar', 'Tournaments', 'All ages until 9pm'],
    highlights: [
      { label: 'Machines', value: '30+' },
      { label: 'Open since', value: '2023' },
      { label: 'Tournaments', value: 'Weekly' },
    ],
    accent: '#B85433',
    accentSoft: '#F4C2AB',
    status: 'open',
    founded: 2023,
    order: 1,
  },
  {
    slug: 'the-process',
    name: 'The Process',
    shortName: 'The Process',
    category: 'Local Market · Brine House',
    tagline: "We're brining the neighborhood together.",
    blurb:
      'A working brine house and pantry market — small-batch ferments, regional pantry goods, and a counter open to the back-of-house.',
    longCopy:
      "The Process is half open kitchen, half general store. House-fermented cukes, hot sauces, mustards, and giardiniera in tall glass jars line the front shelves. The back is a working production line that bubbles, brines, and labels everything you can buy out front. The pantry stocks producers from across northwest Ohio — flour from a stone mill in Bluffton, honey from a rooftop colony two doors down.",
    story:
      "Born out of a home fermentation hobby that outgrew three refrigerators, The Process opened on The Plank to give the brine production a proper home — and let neighbors watch the jars bubble.",
    address: '118 The Plank',
    city: 'Lima, OH 45801',
    phone: null,
    website: 'https://example.com/the-process',
    hours: [
      { label: 'Wed – Sat', time: '10:00 am – 6:00 pm' },
      { label: 'Sun', time: '11:00 am – 4:00 pm' },
      { label: 'Mon – Tue', time: 'Closed' },
    ],
    features: ['Small-batch ferments', 'Local pantry goods', 'Wholesale orders', 'Brine CSA'],
    highlights: [
      { label: 'House ferments', value: '40+ SKUs' },
      { label: 'Local producers', value: '24' },
      { label: 'Batches / week', value: '12' },
    ],
    accent: '#3E5544',
    accentSoft: '#C6D3C5',
    status: 'open',
    order: 2,
  },
  {
    slug: 'next-level-health-and-fitness',
    name: 'Next Level Health and Fitness',
    shortName: 'Next Level',
    category: 'Private Gym · Coaching',
    tagline: 'Train with intent. Recover with care.',
    blurb:
      'A private members-only gym focused on strength, conditioning, and individualized coaching — no waiting for racks, ever.',
    longCopy:
      "Next Level Health and Fitness is built for people who are done sharing a barbell. The floor holds eight racks, a turf lane, sled tracks, and a full conditioning rig — and at peak hours, it never feels crowded because membership is capped. Every member gets a programmed track and quarterly check-ins with a coach who actually knows their numbers.",
    story:
      'Opened on The Plank to fill a gap nobody was filling: a serious training room with the warmth of a neighborhood spot.',
    address: '124 The Plank',
    city: 'Lima, OH 45801',
    phone: null,
    website: 'https://example.com/next-level',
    hours: [
      { label: 'Mon – Fri', time: '5:00 am – 9:00 pm' },
      { label: 'Sat', time: '7:00 am – 4:00 pm' },
      { label: 'Sun', time: '8:00 am – 2:00 pm' },
    ],
    features: ['Private membership', 'Strength programming', 'Recovery suite', '1-on-1 coaching'],
    highlights: [
      { label: 'Racks', value: '8' },
      { label: 'Members capped', value: '180' },
      { label: 'Coaches', value: '3' },
    ],
    accent: '#1C1612',
    accentSoft: '#D9C68C',
    status: 'open',
    order: 3,
  },
  {
    slug: 'second-glance',
    name: 'Second Glance',
    shortName: 'Second Glance',
    category: 'Charity · Wedding Gown Donations',
    tagline: 'Heirloom dresses, second chances.',
    blurb:
      'A charitable boutique that accepts donated wedding gowns and places them with brides, theaters, and remembrance projects.',
    longCopy:
      "Second Glance is a non-profit storefront on The Plank that gives wedding dresses a second life. Donated gowns are cleaned, catalogued, and made available to brides on a sliding scale — proceeds fund a local bereavement program that sews remembrance garments from gowns whose original owner has passed. Bring a dress. Take one home. Leave with something heavier than you walked in with.",
    story:
      'A working name for the wedding-gown charity arm of The Lima Plank — final name and program details being finalized with community partners.',
    address: '128 The Plank',
    city: 'Lima, OH 45801',
    phone: null,
    hours: [
      { label: 'Thu – Sat', time: '11:00 am – 5:00 pm' },
      { label: 'By appointment', time: 'Mon – Wed' },
    ],
    features: ['Gown donations welcome', 'Sliding-scale fittings', 'Remembrance project', 'Volunteer hours'],
    highlights: [
      { label: 'Gowns placed / yr', value: '120+' },
      { label: 'Programs', value: '2' },
      { label: 'Volunteer slots', value: 'Open' },
    ],
    accent: '#A8743D',
    accentSoft: '#F2E5D4',
    status: 'coming-soon',
    order: 4,
  },
  {
    slug: 'palka-ceramics',
    name: 'Palka Ceramics',
    shortName: 'Palka',
    category: 'Studio · Ceramics · Workshops',
    tagline: 'Hand-thrown. Wheel-worn. Built to last.',
    blurb:
      'A working ceramics studio with shelves of finished pieces and a wheel room open for classes, memberships, and quiet afternoons.',
    longCopy:
      "Palka Ceramics is a studio first and a shop second. Slip-cast mugs, hand-thrown serving bowls, and architectural vessels line the front. The back room is dust, slip, and concentration — six wheels, a slab roller, two kilns, and a calendar full of classes, six-week intensives, and open-studio hours for members.",
    story:
      "Run by a single ceramicist whose work moved from a basement kiln to a proper storefront after a decade of farmers' markets.",
    address: '132 The Plank',
    city: 'Lima, OH 45801',
    phone: null,
    website: 'https://example.com/palka-ceramics',
    hours: [
      { label: 'Wed – Sat', time: '10:00 am – 6:00 pm' },
      { label: 'Sun', time: '12:00 pm – 4:00 pm' },
      { label: 'Class nights', time: 'Tue & Thu, 6 – 9 pm' },
    ],
    features: ['Hand-thrown pieces', 'Classes & workshops', 'Studio memberships', 'Commission work'],
    highlights: [
      { label: 'Wheels', value: '6' },
      { label: 'Classes / month', value: '8' },
      { label: 'Studio members', value: '24' },
    ],
    accent: '#7E5128',
    accentSoft: '#E2C7A3',
    status: 'open',
    order: 5,
  },
  {
    slug: 'well-grounded-cafe',
    name: 'Well Grounded Cafe',
    shortName: 'Well Grounded',
    category: 'Cafe · Roastery · Lunch',
    tagline: 'Cup of black. Plate of something good.',
    blurb:
      'A neighborhood cafe pulling carefully sourced espresso, baking lunch daily, and roasting beans you can carry home.',
    longCopy:
      "Well Grounded is the corner cup. Espresso pulled on a refurbished La Marzocco, drip from a rotating single-origin, and a lunch menu that changes with what showed up that week from the farms outside town. The roaster fires Tuesday and Friday mornings — if you're around for it, the whole block smells like cocoa.",
    story:
      "Started by a former Chicago barista who came home and wanted a cafe she'd actually want to spend her morning in.",
    address: '138 The Plank',
    city: 'Lima, OH 45801',
    phone: null,
    website: 'https://example.com/well-grounded',
    hours: [
      { label: 'Mon – Fri', time: '6:30 am – 4:00 pm' },
      { label: 'Sat – Sun', time: '7:30 am – 3:00 pm' },
    ],
    features: ['House-roasted beans', 'Daily lunch', 'Whole-bean retail', 'Wholesale accounts'],
    highlights: [
      { label: 'Roast days', value: 'Tue & Fri' },
      { label: 'Daily lunch', value: 'From 11 am' },
      { label: 'Wholesale partners', value: '8' },
    ],
    accent: '#5B3B22',
    accentSoft: '#E2C7A3',
    status: 'open',
    order: 6,
  },
  {
    slug: 'breastie-box',
    name: 'Breastie Box',
    shortName: 'Breastie Box',
    category: 'Survivor Care · Subscription · Cause',
    tagline: 'A box full of softness — and a small army behind it.',
    blurb:
      'Curated comfort boxes for people in active breast cancer treatment, packed on The Plank and shipped nationwide.',
    longCopy:
      "Breastie Box is a small-batch subscription that packs comfort kits for people undergoing breast cancer treatment — soft tees, balms, post-port loungewear, and notes from other Breasties who have been through it. Built by survivors. Packed on The Plank. Shipped anywhere a hospital robe is too thin.",
    story:
      "Born out of one survivor's chemo chair and the friends who showed up with a tote bag of just-the-right-things.",
    address: '142 The Plank',
    city: 'Lima, OH 45801',
    phone: null,
    website: 'https://example.com/breastie-box',
    hours: [
      { label: 'Pack days', time: 'Mon & Wed' },
      { label: 'Storefront', time: 'Fri – Sat, 11 am – 4 pm' },
    ],
    features: ['Monthly subscription', 'One-time gift boxes', 'Hospital partnerships', 'Survivor-led'],
    highlights: [
      { label: 'Boxes shipped', value: '4,200+' },
      { label: 'Hospital partners', value: '7' },
      { label: 'Subscribers', value: 'Active' },
    ],
    accent: '#D26E45',
    accentSoft: '#FBE7DD',
    status: 'open',
    order: 7,
  },
  {
    slug: 'well-made-and-more',
    name: 'Well Made and More',
    shortName: 'Well Made',
    category: 'Boutique · Home Goods · Apparel',
    tagline: 'A shelf for the things you keep.',
    blurb:
      'A heritage boutique stocked with apparel, home goods, and gifts chosen for how they hold up — not how fast they sell.',
    longCopy:
      "Well Made and More is a small shop with a long memory. Apparel from American and European makers, kitchen tools you'll hand down, and a wall of paper goods and gifts that go past the obvious. The buying philosophy is the same one the name suggests: bring in things people will keep.",
    story:
      "Owner-buyer travels to two trade shows a year and refuses any vendor whose product won't last a decade.",
    address: '146 The Plank',
    city: 'Lima, OH 45801',
    phone: null,
    website: 'https://example.com/well-made',
    hours: [
      { label: 'Tue – Sat', time: '10:00 am – 6:00 pm' },
      { label: 'Sun', time: '12:00 pm – 4:00 pm' },
      { label: 'Mon', time: 'Closed' },
    ],
    features: ['Apparel & home', 'Curated gifts', 'Wedding registry', 'Gift wrap'],
    highlights: [
      { label: 'Vendors', value: '60+' },
      { label: 'Made in USA', value: 'Majority' },
      { label: 'Registries', value: 'Open' },
    ],
    accent: '#C99B4B',
    accentSoft: '#F2DBA0',
    status: 'open',
    order: 8,
  },
  {
    slug: 'peppis',
    name: "Peppi's",
    shortName: "Peppi's",
    category: 'Pizza · Pasta · Family',
    tagline: 'Hand-tossed. Wood-fired. Loud table.',
    blurb:
      'A family pizzeria with a wood-fired oven, fresh pasta cut daily, and a long communal table that runs the room.',
    longCopy:
      "Peppi's is the loudest room on The Plank — by design. Wood-fired pies with a leoparded crust, pasta cut the same morning, and a 22-foot communal table where strangers end up sharing the parmesan. Family-run. Kid-friendly. Grandma-approved.",
    story:
      'Three generations of the Peppi family in the kitchen — recipes from a small town outside Naples, executed on a hand-built oven shipped over in pieces.',
    address: '150 The Plank',
    city: 'Lima, OH 45801',
    phone: null,
    website: 'https://example.com/peppis',
    hours: [
      { label: 'Tue – Thu', time: '4:00 pm – 9:00 pm' },
      { label: 'Fri – Sat', time: '11:30 am – 10:00 pm' },
      { label: 'Sun', time: '11:30 am – 8:00 pm' },
      { label: 'Mon', time: 'Closed' },
    ],
    features: ['Wood-fired pizza', 'Fresh pasta', 'Family-friendly', 'Communal table'],
    highlights: [
      { label: 'Oven', value: '900°F wood-fired' },
      { label: 'Pasta cut', value: 'Daily' },
      { label: 'Family generations', value: '3' },
    ],
    accent: '#933E22',
    accentSoft: '#F4C2AB',
    status: 'open',
    order: 9,
  },
  {
    slug: 'classic-cuts',
    name: 'Classic Cuts',
    shortName: 'Classic Cuts',
    category: 'Salon · Barber · Nails',
    tagline: 'Old-school chair. Modern hands.',
    blurb:
      'A full-service salon — hair, nails, and a four-chair barber side — built around stylists who know your kid by name.',
    longCopy:
      "Classic Cuts is the neighborhood chair. Four barber stations on one side, six salon chairs on the other, a nail studio in the back, and a black-and-white tile floor that hasn't changed in twenty years. Walk-ins until 3, by-appointment after. Hot towels included, regardless.",
    story:
      'Two-decade Lima institution that joined The Plank in its second wave — same family at the chair, same wax on the mustache.',
    address: '156 The Plank',
    city: 'Lima, OH 45801',
    phone: null,
    website: 'https://example.com/classic-cuts',
    hours: [
      { label: 'Tue – Fri', time: '9:00 am – 7:00 pm' },
      { label: 'Sat', time: '8:00 am – 4:00 pm' },
      { label: 'Sun – Mon', time: 'Closed' },
    ],
    features: ['Barber & salon', 'Nail studio', 'Walk-ins welcome', 'Hot-towel service'],
    highlights: [
      { label: 'Chairs', value: '10' },
      { label: 'Years in Lima', value: '20+' },
      { label: 'Walk-ins', value: 'Til 3 pm' },
    ],
    accent: '#506751',
    accentSoft: '#C6D3C5',
    status: 'open',
    order: 10,
  },
  {
    slug: 'wholesome-roots',
    name: 'Wholesome Roots',
    shortName: 'Wholesome Roots',
    category: 'Wellness · Herbal · Plant-based',
    tagline: 'What grows here, heals here.',
    blurb:
      'An herbal apothecary and plant-forward kitchen — house tinctures, salves, juice flights, and a tea bar built around regional botanicals.',
    longCopy:
      "Wholesome Roots is a wellness shop with the kitchen out front. The juice and tonic bar handles the morning rush, the apothecary shelves stock tinctures, salves, and dried botanicals — most of them blended on-site, many sourced from Ohio growers. Bring your own jar. They'll fill it.",
    story:
      'Founded by a clinical herbalist who wanted a shop that explained itself — every jar on the shelf has a written use-card, no gatekeeping.',
    address: '160 The Plank',
    city: 'Lima, OH 45801',
    phone: null,
    website: 'https://example.com/wholesome-roots',
    hours: [
      { label: 'Mon – Sat', time: '8:00 am – 6:00 pm' },
      { label: 'Sun', time: '9:00 am – 3:00 pm' },
    ],
    features: ['Herbal apothecary', 'Tonic & juice bar', 'Bulk botanicals', 'Wellness consults'],
    highlights: [
      { label: 'Tinctures', value: '50+' },
      { label: 'Local growers', value: '12' },
      { label: 'Refill program', value: 'Yes' },
    ],
    accent: '#6F8770',
    accentSoft: '#E6EDE6',
    status: 'open',
    order: 11,
  },
];

export function getBusiness(slug: string): Business | undefined {
  return businesses.find((b) => b.slug === slug);
}

export function listBusinesses(): Business[] {
  return [...businesses].sort((a, b) => a.order - b.order);
}

export const districtMeta = {
  name: 'The Lima Plank',
  shortName: 'The Plank',
  tagline: 'Eleven storefronts. One main street.',
  city: 'Lima, OH',
  state: 'Ohio',
  founded: 2023,
  description:
    'The Lima Plank is a collective of eleven independently owned businesses sharing a single boardwalk-style block in downtown Lima — coffee, ceramics, pinball, brine, and the people who keep them running.',
  social: {
    instagram: 'https://instagram.com/thelimaplank',
    facebook: 'https://facebook.com/thelimaplank',
  },
  contact: {
    email: 'hello@thelimaplank.com',
    phone: null,
  },
};
