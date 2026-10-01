export type Frame = {
  src: string;
  alt: string;
  title: string;
  place: string;
  /** Atlas slug, when the picture belongs to an indexed place. */
  slug?: string;
  /** Briefing slug, used when the picture is not a single atlas place. */
  briefing?: string;
};

export const hero = {
  src: "/photos/lakes.jpg",
  alt: "Autumn fells above a still lake in the Lake District, with bracken turning copper and gold.",
  title: "The Lake District",
  place: "Cumbria",
};

export const landmarks: Frame[] = [
  {
    src: "/photos/big-ben.jpg",
    alt: "The Elizabeth Tower, known as Big Ben, beside the Palace of Westminster and Westminster Bridge.",
    title: "Elizabeth Tower",
    place: "London",
    slug: "london",
  },
  {
    src: "/photos/buckingham.jpg",
    alt: "The east front of Buckingham Palace, seen across the forecourt at dusk.",
    title: "Buckingham Palace",
    place: "London",
    slug: "london",
  },
  {
    src: "/photos/edinburgh.jpg",
    alt: "Edinburgh Castle on its rock, above trees, under a bright sky.",
    title: "Edinburgh Castle",
    place: "Edinburgh",
    slug: "edinburgh",
  },
  {
    src: "/photos/york.jpg",
    alt: "The west front of York Minster, with its rose window and twin towers.",
    title: "York Minster",
    place: "York",
    slug: "york",
  },
  {
    src: "/photos/bath.jpg",
    alt: "The Royal Crescent in Bath, a curve of Georgian stone houses above a green lawn.",
    title: "The Royal Crescent",
    place: "Bath",
    slug: "bath",
  },
  {
    src: "/photos/stonehenge.jpg",
    alt: "The standing stones of Stonehenge on open grassland under a blue sky.",
    title: "Stonehenge",
    place: "Wiltshire",
  },
  {
    src: "/photos/cardiff.jpg",
    alt: "Cardiff Castle’s Norman keep on a green motte, flying the flag of Wales.",
    title: "Cardiff Castle",
    place: "Cardiff",
    slug: "cardiff",
  },
  {
    src: "/photos/causeway.jpg",
    alt: "The basalt columns of the Giant’s Causeway meeting the sea in County Antrim.",
    title: "Giant’s Causeway",
    place: "County Antrim",
    slug: "belfast",
  },
  {
    src: "/photos/windsor.jpg",
    alt: "The Round Tower of Windsor Castle above the walls, seen on a winter day.",
    title: "Windsor Castle",
    place: "Windsor",
    slug: "windsor",
  },
  {
    src: "/photos/oxford.jpg",
    alt: "The Radcliffe Camera and the spires around Radcliffe Square in Oxford.",
    title: "The Radcliffe Camera",
    place: "Oxford",
    slug: "oxford",
  },
  {
    src: "/photos/whitby.jpg",
    alt: "Whitby Abbey in ruin on its cliff above the North Sea.",
    title: "Whitby Abbey",
    place: "Whitby",
    slug: "whitby",
  },
  {
    src: "/photos/dover.jpg",
    alt: "The white chalk cliffs at Dover, with grass on top and the sea below.",
    title: "The White Cliffs",
    place: "Dover",
    slug: "dover",
  },
];

export const countryside: Frame[] = [
  {
    src: "/photos/highlands.jpg",
    alt: "Snow-covered Highland mountains reflected in a loch at a pink dusk.",
    title: "The Highlands",
    place: "Scotland",
    briefing: "scotland-north-of-edinburgh",
  },
  {
    src: "/photos/skye.jpg",
    alt: "The Old Man of Storr on the Isle of Skye, with sheep on the green slope below.",
    title: "The Old Man of Storr",
    place: "Isle of Skye",
    slug: "skye",
  },
  {
    src: "/photos/cornwall.jpg",
    alt: "A Cornish cove at sunset, with a sea stack, turquoise water and cliff path.",
    title: "The north coast",
    place: "Cornwall",
    slug: "cornwall",
  },
  {
    src: "/photos/eryri.jpg",
    alt: "Sunrise over a snow-dusted ridge in Eryri, with cloud filling the valleys below.",
    title: "Yr Wyddfa",
    place: "Eryri",
    slug: "eryri",
  },
  {
    src: "/photos/cotswolds.jpg",
    alt: "A honey-stone Cotswold lane with roses climbing the cottage walls.",
    title: "A village lane",
    place: "The Cotswolds",
    slug: "cotswolds",
  },
  {
    src: "/photos/lavender.jpg",
    alt: "Rows of lavender in front of stone farmhouses and green Cotswold fields.",
    title: "High summer",
    place: "The Cotswolds",
    slug: "cotswolds",
  },
  {
    src: "/photos/peak.jpg",
    alt: "The ridge of Mam Tor in the Peak District, with a path along the skyline.",
    title: "Mam Tor",
    place: "The Peak District",
    slug: "peak-district",
  },
  {
    src: "/photos/glen.jpg",
    alt: "A steam train crossing the curved Glenfinnan Viaduct, with loch and hills beyond.",
    title: "The viaduct",
    place: "Glenfinnan",
    slug: "glenfinnan",
  },
];

const extras: Record<string, Frame[]> = {
  london: [landmarks[0], landmarks[1]],
  edinburgh: [landmarks[2]],
  york: [landmarks[3]],
  bath: [landmarks[4]],
  cardiff: [landmarks[6]],
  belfast: [landmarks[7]],
  "lake-district": [
    {
      src: hero.src,
      alt: hero.alt,
      title: "Autumn on the fells",
      place: "Cumbria",
      slug: "lake-district",
    },
  ],
  skye: [countryside[1], countryside[0]],
  cornwall: [countryside[2]],
  eryri: [countryside[3]],
  cotswolds: [countryside[4], countryside[5]],
  liverpool: [
    {
      src: "/photos/liverpool.jpg",
      alt: "The Royal Liver Building and the Pier Head waterfront in Liverpool.",
      title: "The Pier Head",
      place: "Liverpool",
      slug: "liverpool",
    },
  ],
  oxford: [landmarks.find((frame) => frame.slug === "oxford")!],
  windsor: [landmarks.find((frame) => frame.slug === "windsor")!],
  whitby: [landmarks.find((frame) => frame.slug === "whitby")!],
  dover: [landmarks.find((frame) => frame.slug === "dover")!],
  cambridge: [
    {
      src: "/photos/cambridge.jpg",
      alt: "King’s College Chapel in Cambridge, with a punt on the river Cam in front of the lawn.",
      title: "King’s College Chapel",
      place: "Cambridge",
      slug: "cambridge",
    },
  ],
  durham: [
    {
      src: "/photos/durham.jpg",
      alt: "Durham Cathedral and castle above the wooded banks of the River Wear.",
      title: "The peninsula",
      place: "Durham",
      slug: "durham",
    },
  ],
  glasgow: [
    {
      src: "/photos/glasgow.jpg",
      alt: "The red sandstone front of Kelvingrove Art Gallery and Museum in Glasgow.",
      title: "Kelvingrove",
      place: "Glasgow",
      slug: "glasgow",
    },
  ],
  "st-andrews": [
    {
      src: "/photos/standrews.jpg",
      alt: "The ruins of St Andrews Cathedral, with the tower against a bright sky.",
      title: "The cathedral",
      place: "St Andrews",
      slug: "st-andrews",
    },
  ],
  conwy: [
    {
      src: "/photos/conwy.jpg",
      alt: "Conwy Castle’s towers and town walls beside the estuary.",
      title: "The castle",
      place: "Conwy",
      slug: "conwy",
    },
  ],
  "peak-district": [countryside.find((frame) => frame.slug === "peak-district")!],
  glenfinnan: [countryside.find((frame) => frame.slug === "glenfinnan")!],
  canterbury: [
    {
      src: "/photos/canterbury.jpg",
      alt: "The towers and west front of Canterbury Cathedral above the precinct roofs.",
      title: "The cathedral",
      place: "Canterbury",
      slug: "canterbury",
    },
  ],
  brighton: [
    {
      src: "/photos/brighton.jpg",
      alt: "The domes and minarets of the Royal Pavilion in Brighton against a blue sky.",
      title: "The Royal Pavilion",
      place: "Brighton",
      slug: "brighton",
    },
  ],
  bristol: [
    {
      src: "/photos/bristol.jpg",
      alt: "The Clifton Suspension Bridge spanning the Avon Gorge at Bristol.",
      title: "Clifton Suspension Bridge",
      place: "Bristol",
      slug: "bristol",
    },
  ],
  chester: [
    {
      src: "/photos/chester.jpg",
      alt: "The stone city walls of Chester, with the walkway along the top.",
      title: "The walls",
      place: "Chester",
      slug: "chester",
    },
  ],
  manchester: [
    {
      src: "/photos/manchester.jpg",
      alt: "The columned portico of Manchester Central Library across St Peter’s Square.",
      title: "Central Library",
      place: "Manchester",
      slug: "manchester",
    },
  ],
  inverness: [
    {
      src: "/photos/inverness.jpg",
      alt: "Inverness Castle above the River Ness, with the town on the far bank.",
      title: "The river",
      place: "Inverness",
      slug: "inverness",
    },
  ],
  "st-davids": [
    {
      src: "/photos/st-davids.jpg",
      alt: "St Davids Cathedral in its hollow, with the river and fields of Pembrokeshire beyond.",
      title: "The cathedral",
      place: "St Davids",
      slug: "st-davids",
    },
  ],
  "hadrians-wall": [
    {
      src: "/photos/hadrian.jpg",
      alt: "Hadrian’s Wall following the crest of Housesteads Crags under a wide sky.",
      title: "The crags",
      place: "Northumberland",
      slug: "hadrians-wall",
    },
  ],
  salisbury: [
    {
      src: "/photos/salisbury.jpg",
      alt: "The spire of Salisbury Cathedral rising above the close.",
      title: "The spire",
      place: "Salisbury",
      slug: "salisbury",
    },
  ],
};

export function photosFor(slug: string): Frame[] {
  return extras[slug] ?? [];
}
