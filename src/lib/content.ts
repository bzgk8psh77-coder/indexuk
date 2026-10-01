export type Topic =
  | "Country"
  | "Travel"
  | "Institutions"
  | "Culture"
  | "Landscape"
  | "Practical";

export type Nation = "England" | "Scotland" | "Wales" | "Northern Ireland" | "UK-wide";

export type Briefing = {
  slug: string;
  number: string;
  kicker: string;
  title: string;
  dek: string;
  topic: Topic;
  nation: Nation;
  minutes: number;
  sections: { heading: string; paragraphs: string[] }[];
  seeAlso: string[];
};

export type Place = {
  slug: string;
  name: string;
  nation: Exclude<Nation, "UK-wide">;
  region: string;
  epithet: string;
  stay: string;
  bestFor: string[];
  overview: string[];
  see: { name: string; note: string }[];
  eat: string;
  base: string;
  getThere: string;
  watch: string;
};

export const TOPICS: Topic[] = [
  "Country",
  "Travel",
  "Institutions",
  "Culture",
  "Landscape",
  "Practical",
];

export const NATIONS: Exclude<Nation, "UK-wide">[] = [
  "England",
  "Scotland",
  "Wales",
  "Northern Ireland",
];

export const briefings: Briefing[] = [
  {
    slug: "how-the-kingdom-is-arranged",
    number: "01",
    kicker: "Country",
    title: "How the kingdom is actually arranged",
    dek: "Four nations, three devolved legislatures, a shared crown, and a set of neighbours that are not in the United Kingdom at all.",
    topic: "Country",
    nation: "UK-wide",
    minutes: 8,
    seeAlso: ["parliament-crown-devolution", "wales-in-its-own-language", "northern-ireland-long-weekend"],
    sections: [
      {
        heading: "The four, and only the four",
        paragraphs: [
          "The United Kingdom of Great Britain and Northern Ireland is England, Scotland, Wales and Northern Ireland. Great Britain is the island: England, Scotland and Wales. Britain, in ordinary speech, is often used for the whole state, which is slightly wrong and universally understood.",
          "About 69 million people live here. England holds the large majority, Scotland a little over five million, Wales a little over three, Northern Ireland just under two. London is a city-region of its own, not a fifth nation, though it sometimes behaves like one.",
        ],
      },
      {
        heading: "What is not the UK",
        paragraphs: [
          "The Isle of Man, Jersey and Guernsey are Crown Dependencies. They are not part of the United Kingdom and not in the EU. British Overseas Territories — Gibraltar, the Falklands, Bermuda and the rest — are not part of the UK either. The Republic of Ireland is a separate sovereign state. You can cross into it from Northern Ireland without a passport in ordinary circumstances, but it is not British.",
          "If a briefing, a map or a tour lumps “the British Isles” into one political unit, it is being geographic, not constitutional. Index UK indexes the state, and notes the neighbours when a journey crosses them.",
        ],
      },
      {
        heading: "Why the arrangement matters to a visitor",
        paragraphs: [
          "Laws, bank holidays, school terms and even some tickets change at the borders. Scotland’s outdoor access rules are broader than England’s. The Senedd, not Westminster, runs most of daily life in Wales. Alcohol licensing, education and health are devolved. A “UK bank holiday” is often an English and Welsh one; Scotland keeps its own calendar, including a January holiday England does not.",
          "Currency is the pound sterling everywhere in the UK. Scottish and Northern Irish banks print their own notes. They are legal sterling, and they are sometimes frowned at in English tills. Cards work. Pounds from the Bank of England are the least surprising paper.",
        ],
      },
    ],
  },
  {
    slug: "a-first-week-beyond-london",
    number: "02",
    kicker: "Travel",
    title: "A first week that leaves London",
    dek: "Seven days, one base in the capital and one beyond it, for someone who wants the country rather than a checklist of queues.",
    topic: "Travel",
    nation: "UK-wide",
    minutes: 7,
    seeAlso: ["london-without-the-queue", "the-railway-without-folklore", "scotland-north-of-edinburgh"],
    sections: [
      {
        heading: "The shape, not the scavenger hunt",
        paragraphs: [
          "Three nights in London, then four in one other place, beats seven cities in seven nights. The other place should be a real change of grain: Edinburgh if you want a capital with weather and a close; York or Bath if you want England on foot; the Lake District if you want hills and are willing to be rained on with dignity.",
          "Do not try Cornwall, the Highlands and Oxford in the same week unless you enjoy motorway service stations. Distance on a British map is a liar. The Lake District is not “near” Manchester in the way a visitor hopes, and Skye is not a day trip from Edinburgh.",
        ],
      },
      {
        heading: "A week that works",
        paragraphs: [
          "Days 1–3, London, sleeping in one neighbourhood. Walk more than you Tube. One great museum on a free general-admission ticket, one market meal, one evening that is not a West End show unless you already love the West End. Leave one afternoon unplanned.",
          "Days 4–7, the train north or west before breakfast. Edinburgh rewards four nights: the Old Town in the morning, a Forth-side or Arthur’s Seat hour, a half-day to Glasgow or North Berwick, and a long dinner. York is tighter and just as good for a first trip: walls, streets, the Railway Museum if you care about machines, and the Yorkshire countryside on a local train to Scarborough or Whitby if the weather is kind.",
        ],
      },
      {
        heading: "What to drop",
        paragraphs: [
          "Stonehenge at peak coach hour, unless the stones themselves are the point of the journey. A changing-of-the-guard timetable that eats a morning. Any “UK in a day” coach that promises Windsor, Oxford and Stratford before supper. You will see car parks.",
          "Book the long-distance trains when you book the flights if you are travelling in school holidays, around Edinburgh in August, or into Cornwall on a Friday in July. The rest of the year, the railway is a pleasure and not a siege.",
        ],
      },
    ],
  },
  {
    slug: "the-railway-without-folklore",
    number: "03",
    kicker: "Practical",
    title: "The railway, without the folklore",
    dek: "How to buy a ticket, which names matter, and why the 09:12 is a better idea than a hire car for most first journeys.",
    topic: "Practical",
    nation: "UK-wide",
    minutes: 8,
    seeAlso: ["a-first-week-beyond-london", "weather-coast-and-when", "sunday-pubs-and-the-shape-of-a-day"],
    sections: [
      {
        heading: "Who runs what",
        paragraphs: [
          "Tracks are national. Trains are run by operators with regional names: LNER and Lumo on the east coast to Scotland, Avanti on the west coast, GWR toward Bristol, Bath, Devon and Cornwall, CrossCountry across the middle, ScotRail inside Scotland, Transport for Wales in Wales, Northern and TransPennine in the north of England. You rarely need to care which logo is on the carriage. You care about the time, the station and whether your ticket is for that train only.",
          "London is the exception that swallows newcomers. Contactless bank cards and Oyster cover the Tube, Elizabeth line, Overground, DLR and most suburban rail inside the fare zones. Do not buy a paper ticket for a two-stop Tube ride. Tap in and tap out, same card, every time.",
        ],
      },
      {
        heading: "Buying a ticket without a ritual",
        paragraphs: [
          "For intercity travel, book on the operator’s site or a national retailer such as National Rail or Trainline. Advance fares are cheap and tied to a specific train. Off-peak and Anytime fares cost more and flex. If the page is shouting at you, you are probably looking at a Friday afternoon in summer.",
          "Split ticketing — two fares for one journey, changing the ticket but not always the seat — can be cheaper. It is also a fine way to miss a connection and invalidate the second half. For a first trip, buy the through ticket. Railcards (16–25, 26–30, Two Together, Senior, Disabled) cut eligible fares by about a third. Visitors can use a Two Together if two named adults travel together, or a BritRail pass if the arithmetic of many long trips works out. Do the arithmetic. Passes are not magic.",
        ],
      },
      {
        heading: "When the car still wins",
        paragraphs: [
          "A car is the right tool in the Highlands, much of Wales, the Lakes if you are based in a village off the branch line, and the Cotswolds if you refuse to walk between honey-coloured towns. It is the wrong tool in London, Edinburgh’s Old Town, central Bath, and any July Saturday on the A30 into Cornwall.",
          "Drive on the left. The country is faster than it looks and slower than the satnav’s optimism at 8am. Single-track roads with passing places are a social system: pull in, let people through, do not park in the passing place to photograph a sheep.",
        ],
      },
    ],
  },
  {
    slug: "parliament-crown-devolution",
    number: "04",
    kicker: "Institutions",
    title: "Parliament, the Crown, and who decides what",
    dek: "A short civic map: Westminster, Holyrood, the Senedd, Stormont, and a monarchy that reigns more than it rules.",
    topic: "Institutions",
    nation: "UK-wide",
    minutes: 9,
    seeAlso: ["how-the-kingdom-is-arranged", "free-museums-and-what-they-are-for"],
    sections: [
      {
        heading: "Westminster",
        paragraphs: [
          "The UK Parliament sits in the Palace of Westminster: the House of Commons, elected, and the House of Lords, appointed and hereditary remnants. Government is formed by whoever can command the Commons. The prime minister is not directly elected as president. General elections are at most five years apart, and often sooner.",
          "Reserved matters — defence, most foreign policy, the currency, immigration, the constitution — stay at Westminster. Everything else is a negotiation with devolution, and the negotiation is the politics.",
        ],
      },
      {
        heading: "Three other chambers",
        paragraphs: [
          "The Scottish Parliament at Holyrood legislates on health, education, justice, most transport and a meaningful slice of tax. The Senedd in Cardiff Bay does the same for Wales, with a smaller tax footprint and a younger parliament. The Northern Ireland Assembly at Stormont shares power between traditions; when it collapses, civil servants keep the lights on and politics stalls. All three are worth seeing as buildings. Holyrood and the Senedd were designed to look unlike Westminster on purpose.",
          "Local councils run bins, many schools, planning and the dull glory of daily life. If a high street looks loved or neglected, a council is somewhere in the story. Combined authorities and metro mayors — London, Manchester, the West Midlands, and others — sit between council and nation, mostly on transport and housing.",
        ],
      },
      {
        heading: "The Crown, briefly and accurately",
        paragraphs: [
          "The monarch is head of state, opens Parliament, and assents to laws that Parliament has already passed. Day-to-day power sits with ministers. The royal palaces a visitor queues for — Buckingham Palace’s state rooms in summer, Windsor, the Tower, Holyroodhouse — are historic estates and working residences, not the government.",
          "You can watch the state without paying it much. Prime Minister’s Questions is theatre and a useful one. Debates are on television. A morning in the public gallery, if you can get in, teaches more than a crown-jewels shuffle. The jewels are still extraordinary. Go early, or don’t.",
        ],
      },
    ],
  },
  {
    slug: "weather-coast-and-when",
    number: "05",
    kicker: "Landscape",
    title: "Weather, coast, and when to go",
    dek: "A maritime climate with no guaranteed season, a west that is wetter, and a calendar that belongs to schools as much as to weather.",
    topic: "Landscape",
    nation: "UK-wide",
    minutes: 6,
    seeAlso: ["national-parks-a-working-index", "walking-rights-and-three-routes", "a-first-week-beyond-london"],
    sections: [
      {
        heading: "What the sky is doing",
        paragraphs: [
          "The UK is mild, damp and changeable. A July day can be 28°C and shirt-sleeves; the next can be 16°C with a wind that feels personal. The west — Cornwall, Wales, the Lakes, the Highlands — takes more rain off the Atlantic. The east — East Anglia, the North Sea coast, much of Lothian — is drier and colder in the wind. Mountains make their own weather, usually worse than the town you started in.",
          "Pack a waterproof layer in every month. Pack shoes that can meet a wet pavement. Umbrellas are a London tool; on a ridge they are a kite.",
        ],
      },
      {
        heading: "The calendar that actually matters",
        paragraphs: [
          "Late spring and early autumn are the best bargain: May, June, September, early October. Light is long in June. Heather and fewer midges favour September in the Highlands. August is festival in Edinburgh, holiday for the whole country’s schools, and the month the coast is full. Christmas markets are pretty and crowded. January is cheap, dark by four, and honest.",
          "School holidays — a week or two at Easter, late July through August, and a week in October — move prices and tempers. Bank holidays bunch the country into the same car parks. If you can travel mid-week outside those windows, the same place is a different country.",
        ],
      },
    ],
  },
  {
    slug: "eating-in-four-nations",
    number: "06",
    kicker: "Culture",
    title: "Eating in four nations",
    dek: "Not a apology for the food, and not a list of themed pubs. What people actually sit down to, and where a visitor should aim.",
    topic: "Culture",
    nation: "UK-wide",
    minutes: 8,
    seeAlso: ["sunday-pubs-and-the-shape-of-a-day", "london-without-the-queue"],
    sections: [
      {
        heading: "The useful map",
        paragraphs: [
          "British cooking is regional, immigrant, and recently proud of itself. You can eat badly anywhere, usually under a laminated photograph. You can also eat extremely well without a tasting menu: a bakery, a caff, a Syrian grill, a chippy eaten outdoors, a pub that cooks like a restaurant and still lets you sit with a pint.",
          "Markets are the reliable introduction. Borough and Maltby Street in London, Kirkgate in Leeds, the Barras and more polished neighbourhoods in Glasgow, Cardiff Market, St George’s Market in Belfast. Go hungry in the morning. Leave before you are conducting diplomacy with a paper bag.",
        ],
      },
      {
        heading: "Four tables",
        paragraphs: [
          "England’s everyday glory is breakfast, a good loaf, cheese, and the long coastal tradition of fish that was not frozen in a rectangle. Look for a pie only if the place is serious about pie. The Sunday roast is real; it is also, in tourist pubs, a way to sell a tired potato. Chinese, South Asian, Caribbean and Turkish kitchens are not “alternatives” to British food. In most cities they are the centre of it.",
          "Scotland will feed you shellfish, bakeries, and a chip shop culture that treats a supper as architecture. Order the local fish if you are on the coast, and do not assume haggis is a dare — it is a spiced meat pudding, often excellent, sometimes a fridge magnet. Wales has lamb, seaweed, rarebit that deserves better than irony, and Cardiff as a proper restaurant city. Northern Ireland does bread like a civilisation: soda, wheaten, potato farls beside a fry that should be walked off along a sea wall.",
        ],
      },
      {
        heading: "How service works",
        paragraphs: [
          "You are usually not waited on at a counter. You often are in a pub restaurant. Tap water is free if you ask. Service is sometimes added at 12.5% in cities; read the bill before you add more. Tipping in a pub for a round of drinks is not expected. Splitting bills is normal.",
          "Sunday and Monday close more kitchens than visitors expect, especially outside cities. Book the one dinner you care about. Eat the other meals wherever the queue is made of people who live nearby.",
        ],
      },
    ],
  },
  {
    slug: "free-museums-and-what-they-are-for",
    number: "07",
    kicker: "Culture",
    title: "Free museums, and what they are for",
    dek: "General admission is still free at the great national collections. That is a civic fact, not a loophole, and it changes how you should spend a rainy day.",
    topic: "Culture",
    nation: "UK-wide",
    minutes: 6,
    seeAlso: ["london-without-the-queue", "parliament-crown-devolution"],
    sections: [
      {
        heading: "The free rooms",
        paragraphs: [
          "In London, general entry is free at the British Museum, the National Gallery, Tate Britain, Tate Modern, the V&A, the Natural History Museum and the Science Museum. Special exhibitions cost money. Donation boxes are not a trick, and the institutions are under real pressure. Pay a few pounds if you can. Do not feel you must see a building in one march.",
          "Outside London the pattern holds in different ways: National Museum of Scotland in Edinburgh, Riverside and St Fagans in Cardiff, the national museums in Liverpool, Ulster Museum in Belfast. Always check, because a city museum and a national museum are not the same legal creature.",
        ],
      },
      {
        heading: "How to use the freedom",
        paragraphs: [
          "Go for one wing. The Sutton Hoo helmet, or the African galleries, or Turner — not all of them before lunch. Free entry is an invitation to leave. The worst museum mornings are the ones that try to be worthy of the flight.",
          "Book a timed ticket where the museum asks, even when the ticket is free. The British Museum and others do this to manage crowds. Turn up at opening if you care about the Rosetta Stone or Hope the whale without a thicket of phones. Late afternoons are often kinder than late mornings.",
        ],
      },
    ],
  },
  {
    slug: "national-parks-a-working-index",
    number: "08",
    kicker: "Landscape",
    title: "National parks, a working index",
    dek: "Fifteen national parks, none of them a wilderness in the American sense, all of them lived-in landscapes with gates, farms and weather.",
    topic: "Landscape",
    nation: "UK-wide",
    minutes: 8,
    seeAlso: ["walking-rights-and-three-routes", "weather-coast-and-when"],
    sections: [
      {
        heading: "England",
        paragraphs: [
          "The Lake District is the famous one: fells, lakes, poets, and summer roads that crawl. The Peak District is closer to more people — gritstone edges in the Dark Peak, limestone dales in the White — and easier without a car from Sheffield or Manchester. The Yorkshire Dales and North York Moors are stone villages and big skies. Northumberland is the quiet park, with Hadrian’s Wall along its southern edge and dark skies at Kielder.",
          "South of that: the Peak’s cousins in character are Dartmoor and Exmoor, the New Forest, the South Downs, and the Norfolk Broads, which are water more than hill. None of these are empty. Dry-stone walls mean somebody’s sheep.",
        ],
      },
      {
        heading: "Scotland, Wales, and the gap",
        paragraphs: [
          "Scotland has two national parks: Loch Lomond & the Trossachs, and the Cairngorms. Much of the most famous Highland scenery — Skye, Glencoe, the north-west coast — is not inside a national park and is no less protected by custom, crofting and the weather. Do not use the park map as a list of what is worth seeing.",
          "Wales has Eryri (Snowdonia), the Bannau Brycheiniog (Brecon Beacons), and the Pembrokeshire Coast. Use the Welsh names; the English ones still appear on older signs. Northern Ireland has no national parks. It has the Mourne Mountains, the Causeway Coast and the Glens of Antrim, which do the same job for a visitor.",
        ],
      },
      {
        heading: "How to be in them",
        paragraphs: [
          "Paths are the point. Summits are optional. A two-hour circuit from a village will show you more than a six-hour convoy to the busiest peak. Yr Wyddfa (Snowdon), Scafell Pike, Ben Nevis and Helvellyn are serious hills that are also popular. Go up only with a proper map, a forecast, and the honesty to turn around.",
          "Pubs and cafés cluster in honeypots: Ambleside, Bakewell, Betws-y-Coed, Aviemore. Stay one village further out if you want morning quiet. B&Bs and small inns are the classic base. Campsites need booking in summer. Wild camping is broadly tolerated in many parts of Scotland under the access code, and generally not a right in England and Wales.",
        ],
      },
    ],
  },
  {
    slug: "london-without-the-queue",
    number: "09",
    kicker: "Travel",
    title: "London without the queue",
    dek: "A capital that rewards a neighbourhood, a river and a refusal to see everything. Four days is a good start. Four hours per museum is a mistake.",
    topic: "Travel",
    nation: "England",
    minutes: 8,
    seeAlso: ["free-museums-and-what-they-are-for", "eating-in-four-nations", "a-first-week-beyond-london"],
    sections: [
      {
        heading: "Pick a parish",
        paragraphs: [
          "Stay in one area and learn it. South of the river — Bermondsey, Borough, Peckham — eats well and reaches the centre quickly. North, King’s Cross has been rebuilt into something useful, Clerkenwell still has a working grain, and Hackney is a long walk from the postcard. The West End is for theatres, not for sleeping, unless you like crowds as a lullaby.",
          "Walk the river at least once, but not as a forced march from Westminster to Tower Bridge with every pier in between. Choose a stretch: South Bank in the late light, or Greenwich if you want the maritime city, or Hammersmith if you want London to feel like a town.",
        ],
      },
      {
        heading: "A four-day grain",
        paragraphs: [
          "Day one, on foot from your neighbourhood into one free museum, and out again while you are still interested. Day two, a market lunch and a single ticketed thing you actually want — a play, a football ground tour, a special exhibition, Kew if the weather is kind. Day three, a borough that is not Westminster: Greenwich, Richmond, or the City on a weekend when the streets empty and the churches open. Day four, leave. The train stations are part of the city. King’s Cross, Paddington and St Pancras are better endings than another museum shop.",
          "Use buses when you are tired of tunnels. They show you the streets you would have missed. Download nothing exotic: contactless payment and a willingness to ask which door are enough.",
        ],
      },
      {
        heading: "The queues worth skipping",
        paragraphs: [
          "The London Eye is a view you can get from Primrose Hill, Greenwich Park or the Sky Garden, the last of which is free if you book. Madame Tussauds is wax. Harrods is a shop. Platform 9¾ is a queue for a photograph of a queue.",
          "The Tower, Westminster Abbey and a full state-room palace are worth it if castles and churches are your subject. They are not obligatory proof that you came. If you do one, do it at opening, with a timed ticket, and then go eat somewhere that does not face the ticket hall.",
        ],
      },
    ],
  },
  {
    slug: "scotland-north-of-edinburgh",
    number: "10",
    kicker: "Travel",
    title: "Scotland north of Edinburgh",
    dek: "Edinburgh is the front door, not the house. How far to go, how not to drive it in a blur, and what the Highlands actually feel like.",
    topic: "Travel",
    nation: "Scotland",
    minutes: 8,
    seeAlso: ["national-parks-a-working-index", "the-railway-without-folklore", "weather-coast-and-when"],
    sections: [
      {
        heading: "Edinburgh first, properly",
        paragraphs: [
          "Give the city two nights before you flee to a glen. The Old Town is vertical and theatrical; the New Town is an Enlightenment grid and a better place to sleep. Arthur’s Seat is a hill inside a capital, which is rarer than it sounds. Climb it early. The Royal Mile at noon in August is a corridor of flyers.",
          "Glasgow is forty minutes by train and a different country in temperament: museums, music, a river that used to build ships, and fewer people performing Scotland for you. A day there makes Edinburgh make more sense.",
        ],
      },
      {
        heading: "North, with restraint",
        paragraphs: [
          "A first Highland loop that does not punish you: train to Stirling or Pitlochry, or a car toward Loch Lomond and Glencoe, sleeping two nights in one place. Glencoe is not a photo stop on the way to Skye and also a photo stop on the way to Skye. If Skye is the aim, it is two nights minimum, three if you want the island rather than the car parks at the Fairy Pools.",
          "The West Highland Line to Mallaig, and the short ferry hope of the Small Isles, is the journey people mean when they say they want Scotland. Sit on the left going north for the viaducts after Bridge of Orchy. Book a seat. In summer the steam train on the same route is a separate, slower product.",
        ],
      },
      {
        heading: "Midge season and single tracks",
        paragraphs: [
          "Midges are tiny biting flies, worst from late May to September, worst at dawn and dusk, worst in still, damp, beautiful places. A head net is not a costume. Wind is your friend. The coast is kinder than the birch woods.",
          "Fuel before you think you need to. Sunday ferries and restaurant hours are thinner than the brochure. The right to responsible access is real in Scotland: you may walk most unenclosed land, and you may not disturb people, crops, or a stag in October who has more right to the hill than your drone.",
        ],
      },
    ],
  },
  {
    slug: "wales-in-its-own-language",
    number: "11",
    kicker: "Country",
    title: "Wales, in the language of the place",
    dek: "A country of three million with its own parliament, a living Celtic language, a coal-and-choir past, and a coast that keeps going.",
    topic: "Country",
    nation: "Wales",
    minutes: 7,
    seeAlso: ["how-the-kingdom-is-arranged", "national-parks-a-working-index", "walking-rights-and-three-routes"],
    sections: [
      {
        heading: "Say the names",
        paragraphs: [
          "Welsh is not a heritage garnish. It is on every road sign, in schools, in the Senedd, and in daily use especially in the north and west — Gwynedd, Ynys Môn, Ceredigion, Carmarthenshire. You do not need to be fluent to travel. You do need to try Eryri rather than only Snowdonia, and to accept that Aberystwyth is said the way it is said.",
          "A few words open doors: bore da (good morning), diolch (thank you), os gwelwch yn dda (please). People in Cardiff will switch to English without drama. People will also notice if you treat the language as quaint.",
        ],
      },
      {
        heading: "Where to be",
        paragraphs: [
          "Cardiff is a compact capital: the castle, a Victorian market, the revival of the Bay, and rugby as a civic religion in winter. It is a base, not the whole story. West, the Pembrokeshire coast path is some of the finest walking in the UK, in day-sized pieces between buses and ice cream. North, Eryri is mountains with slate towns at their feet — Bethesda, Llanberis, Blaenau Ffestiniog — and a railway up Yr Wyddfa if the ridge is not your day.",
          "The old industrial south, Merthyr to the valleys, is not a detour from the “real” Wales. It is why the modern country argues the way it does. Big Pit at Blaenavon is a former colliery and a clearer lesson than most museums.",
        ],
      },
    ],
  },
  {
    slug: "northern-ireland-long-weekend",
    number: "12",
    kicker: "Travel",
    title: "Northern Ireland for a long weekend",
    dek: "Belfast, the coast, and a history that is not a theme. How to spend four days without pretending the Troubles were a postcard.",
    topic: "Travel",
    nation: "Northern Ireland",
    minutes: 8,
    seeAlso: ["how-the-kingdom-is-arranged", "eating-in-four-nations"],
    sections: [
      {
        heading: "Belfast, first",
        paragraphs: [
          "The city has a centre you can walk, a river that built the Titanic, and a food scene that outgrew the old jokes a decade ago. Stay central. St George’s Market on a Friday or Saturday morning is the friendliest briefing you will get. The Titanic museum is genuinely good — industrial, not romantic — and worth the modern building.",
          "Murals, peace walls and the neighbourhoods of the Falls and the Shankill are not a safari. Take a black-cab tour or a walking tour run by people from those communities if you want the recent history explained properly. Do not point a long lens at someone’s street for sport. The Troubles are within living memory. The politics are not finished.",
        ],
      },
      {
        heading: "The coast in a day, or better in two",
        paragraphs: [
          "The Giant’s Causeway is a real geological astonishment and a National Trust site that gets hammered by coaches between 11 and 3. Go early, or walk in from the cliff path so the stones are an ending. The rope bridge at Carrick-a-Rede is a short thrill and a long queue in summer; the view does not require the bridge.",
          "The Antrim coast road, the Glens, and a night in a smaller place — Cushendall, Bushmills, or over toward Derry if you have the extra day — beat a there-and-back from Belfast in the rain. Derry’s walls are among the best city walls in Ireland, and the city is a good place to hear two names for itself and not make a fuss.",
        ],
      },
      {
        heading: "Practical notes",
        paragraphs: [
          "Pounds, not euros, in Northern Ireland. Miles on the road signs. The dialling and the politics change if you cross into the Republic; many rental agreements let you, some insurance small print does not. Check before you aim a day at Donegal.",
          "People are direct and often very funny. Match the energy. This is not a silent museum of conflict, and it is not a Game of Thrones set, though you will be offered both. Take the landscape. Take the history with a guide. Leave time for a fry and a walk.",
        ],
      },
    ],
  },
  {
    slug: "walking-rights-and-three-routes",
    number: "13",
    kicker: "Landscape",
    title: "Walking rights, and three classic routes",
    dek: "Where you may put your feet, what a right of way is, and three walks that explain more than a viewpoint car park.",
    topic: "Landscape",
    nation: "UK-wide",
    minutes: 7,
    seeAlso: ["national-parks-a-working-index", "scotland-north-of-edinburgh", "wales-in-its-own-language"],
    sections: [
      {
        heading: "The rules, in plain language",
        paragraphs: [
          "In England and Wales, public footpaths and bridleways are rights of way. You may walk them even when they cross a farm. Open access land — mountain, moor, heath, down — lets you roam off-path, with local exceptions and closures in nesting or shooting seasons. Ordnance Survey maps, and the OS app, are the reference. A stile is not a suggestion to turn back.",
          "Scotland’s Land Reform Act gives a broader right of responsible access to most land and inland water. The Scottish Outdoor Access Code is the manners that keep the right alive: leave gates as you found them, keep a dog under control around livestock, skip the garden and the growing crop. Northern Ireland has its own path network and fewer automatic rights across farmland. Stick to waymarked paths there unless you know otherwise.",
        ],
      },
      {
        heading: "Three that are worth the boots",
        paragraphs: [
          "The Coffin Road, or a shorter cousin above Buttermere in the Lake District: classic fell walking, a pub at the end, weather that will test the jacket you thought was enough. Turn around if the cloud drops and you cannot read the path.",
          "A stage of the Pembrokeshire Coast Path rather than the whole national trail. Ten miles of cliff between two bus-served villages will do. And the Great Glen or a piece of the West Highland Way if you want Scotland at walking speed: the Way is waymarked, popular, and bookable inn to inn. You do not have to thru-hike anything to have walked the country.",
        ],
      },
    ],
  },
  {
    slug: "sunday-pubs-and-the-shape-of-a-day",
    number: "14",
    kicker: "Practical",
    title: "Sunday, pubs, and the shape of a day",
    dek: "Opening hours, the difference between a pub and a bar, and why Monday morning is a bad time to discover a town.",
    topic: "Practical",
    nation: "UK-wide",
    minutes: 6,
    seeAlso: ["eating-in-four-nations", "the-railway-without-folklore"],
    sections: [
      {
        heading: "The pub, defined usefully",
        paragraphs: [
          "A pub is a public house: you may walk in, buy a drink, and usually sit without ordering a meal, though many now run on the food. There is no waiter at the bar. You order, you pay, you carry. Some tables are “for diners” at the weekend. Ask if it is unclear. Cask ale, if you drink, is the local technology; a half is a respectable order while you decide.",
          "Last orders are not a myth, but the old 11pm shutdown is. Many pubs close earlier than visitors assume on a Sunday night, and village kitchens often stop at 8. A city natural-wine bar is not a pub. Both can be good. Only one will have a dog asleep in the dartboard’s moral shadow.",
        ],
      },
      {
        heading: "Sunday and Monday",
        paragraphs: [
          "Sunday trading laws still limit many large shops in England and Wales to six hours, commonly 11 until 5. Scotland does not have the same rule. Supermarkets in cities are fine; a small town high street on Sunday afternoon can be shut in a way that feels personal. Monday is the chef’s day off in a surprising number of good restaurants.",
          "Plan the week’s one important dinner for a Thursday, Friday or Saturday, and keep Sunday for a roast or a walk. If you arrive in a cathedral city on a Sunday morning, you have timed it well for bells and badly for museums that open at noon. Read the door. Then go in if you are welcome. Services are not performances, but parish churches are often the oldest public rooms you will be allowed to enter for free.",
        ],
      },
    ],
  },
];

export const places: Place[] = [
  {
    slug: "london",
    name: "London",
    nation: "England",
    region: "Greater London",
    epithet: "A dozen towns that share a river and a transport card.",
    stay: "3–4 nights",
    bestFor: ["museums", "neighbourhoods", "food", "theatre"],
    overview: [
      "London is not one atmosphere. Westminster is ceremonial, the City is a financial grid that empties at the weekend, Southwark feeds you, and the residential boroughs are where the city actually lives. Treat it as a cluster of villages with unusually good museums between them.",
      "General admission to the national museums is free. The paid sights are optional, not a syllabus. Stay in one area, walk farther than you planned, and use the river as a compass rather than a to-do list.",
    ],
    see: [
      { name: "National Gallery", note: "One wing, not the building. Early Italian or the Impressionists, then leave through Trafalgar Square before you are tired of both." },
      { name: "Tate Modern or Tate Britain", note: "Modern if you want the building and the Thames; Britain if you want Turner without the turbine hall." },
      { name: "A market lunch", note: "Borough for the famous version, or somewhere like Broadway Market or Ridley Road if you want London eating for itself." },
      { name: "A park with a view", note: "Primrose Hill, Greenwich Park, or Hampstead Heath. All three outclass most paid viewing platforms." },
    ],
    eat: "Eat near where you sleep for at least one meal. Book the dinner you will mind missing. Tap water, check the service charge, and do not hunt a ‘traditional English restaurant’ — hunt a good one.",
    base: "Bermondsey, King’s Cross, Clerkenwell or a well-connected townhouse neighbourhood. Avoid changing hotels mid-stay.",
    getThere: "Fly into Heathrow, Gatwick, Stansted, Luton or London City, then the train — not a taxi across the city unless it is late. Elizabeth line from Heathrow is the calm option.",
    watch: "Contactless on every Tube gate, same card in and out. Theatres need booking. August is not Edinburgh-busy, but school holidays fill the big museums by late morning.",
  },
  {
    slug: "edinburgh",
    name: "Edinburgh",
    nation: "Scotland",
    region: "Lothian",
    epithet: "A capital on a ridge, with a rational city at its feet.",
    stay: "2–4 nights",
    bestFor: ["old town", "viewpoints", "festivals", "day trips"],
    overview: [
      "Edinburgh is two plans of city stacked on volcanic rock. The Old Town runs down the Royal Mile from the Castle to Holyrood. The New Town, below, is Georgian geometry and a better night’s sleep. Both are walkable until the wind says otherwise.",
      "In August the festivals take the city over — brilliant if that is why you came, exhausting if you wanted quiet closes and an easy dinner. The rest of the year the stone does the talking.",
    ],
    see: [
      { name: "Arthur’s Seat", note: "A hill in the middle of the capital. Go early. The summit is exposed and the paths are obvious in clear weather." },
      { name: "National Museum of Scotland", note: "Free, and a better overview of the country than the castle’s ticket desk. The rooftop view is a quiet one." },
      { name: "New Town streets", note: "Walk Dundas or Moray Place and into Stockbridge. This is the Enlightenment city, not a sideshow to the Mile." },
      { name: "A Forth viewpoint", note: "South Queensferry for the bridges, or a train toward North Berwick if you want the coast in an afternoon." },
    ],
    eat: "Stockbridge and Leith cook better than the Royal Mile. Book in August weeks ahead. Bakeries are a serious local art.",
    base: "New Town or Stockbridge. The Old Town is for walking, not always for sleeping above a bar.",
    getThere: "Train from London King’s Cross in about four and a half hours. Fly into Edinburgh Airport and take the tram. Glasgow is under an hour by rail if you want the other city.",
    watch: "The castle is a sight, not a must, and it is priced like one. Wind on the Mile can be horizontal. Hills are real — pack shoes with a grip.",
  },
  {
    slug: "bath",
    name: "Bath",
    nation: "England",
    region: "Somerset",
    epithet: "Roman water under a Georgian stage set.",
    stay: "1–2 nights",
    bestFor: ["architecture", "walking", "a first England trip"],
    overview: [
      "Bath is small, pale, and almost entirely legible in a day and a half. The Romans built a temple and baths over hot springs. The eighteenth century built a resort in Bath stone and never really left. You are here for streets as much as for tickets.",
      "It pairs cleanly with London on the GWR line, or with Bristol if you want a louder, younger city twenty minutes away and usually forgotten by the same itineraries.",
    ],
    see: [
      { name: "The Roman Baths", note: "The one paid interior that earns it. Go at opening. The water you look at is not the water you drink." },
      { name: "The Royal Crescent and the Circus", note: "Free, and the reason the city looks like itself. Walk them early before the tour groups clap eyes on the lawn." },
      { name: "A climb to Alexandra Park or Bathwick", note: "The honey stone only makes sense from slightly above." },
      { name: "Holburne or a bookshop hour", note: "Small museums beat trying to add Stonehenge into the same afternoon." },
    ],
    eat: "Avoid the first crescent of cafés facing the Abbey. Walk five minutes toward Walcot Street or the river. Sally Lunn’s is a pilgrimage bun, not dinner.",
    base: "Inside the city, on foot. A hotel with a spa is a different, wetter product if the springs themselves are the point.",
    getThere: "About ninety minutes from London Paddington, direct. Bristol and Cardiff are easy continuations west.",
    watch: "Hills and cobbles. Sunday trading quietens the centre. Stonehenge is a separate, timed excursion — do not pretend it is next door.",
  },
  {
    slug: "york",
    name: "York",
    nation: "England",
    region: "North Yorkshire",
    epithet: "Walls, snickelways, and a railway city that still feels medieval after dark.",
    stay: "2 nights",
    bestFor: ["walking", "history", "a northern base"],
    overview: [
      "York is the best compact historic city in England for a first trip north. The walls still circle it. The Minster is one of Europe’s great churches. The streets between — the Shambles and the quieter lanes — are short, crooked and best taken before ten in the morning.",
      "It is also a working rail junction. You can sleep here and reach the coast or the Dales without moving hotels. That is the trick most weekend breaks miss.",
    ],
    see: [
      { name: "The walls", note: "Walk a long section, not a token gate. Morning light, fewer prams, better stone." },
      { name: "York Minster", note: "Pay to go in. The chapter house and the tower are optional extras; the nave is already the point." },
      { name: "National Railway Museum", note: "Free, and genuinely world-class if machines interest you at all. A short walk from the station." },
      { name: "A local train to the coast", note: "Scarborough or Whitby on a fair day. Check the return before you commit to fish and chips." },
    ],
    eat: "The Shambles will sell you fudge. Eat instead off Goodramgate or in a pub that is not under a ye-olde sign the size of a door. Yorkshire has excellent bakeries. Use them.",
    base: "Inside the walls, or just outside near the station if you want quieter nights and an easy exit.",
    getThere: "Under two hours from London King’s Cross on a fast LNER service. Leeds is close if you want a bigger city for a night.",
    watch: "The centre is pedestrian and busy from late morning. Bettys is a real café and also a queue. Go once, or don’t.",
  },
  {
    slug: "lake-district",
    name: "The Lake District",
    nation: "England",
    region: "Cumbria",
    epithet: "Fells, water, and a holiday geography that fills up in July.",
    stay: "2–4 nights",
    bestFor: ["walking", "villages", "not hurrying"],
    overview: [
      "The Lakes are small on a map of England and large underfoot. Valleys radiate from a knot of fells. Windermere is the long lake with the towns. Wasdale, Borrowdale and Buttermere are the deeper grammar. You do not need to bag a summit to have been here. You do need to get out of the car.",
      "Pick one valley and stay in it. Ambleside and Bowness are useful and, in summer, congested. A village base — Grasmere outside peak weeks, Rosthwaite, Coniston — changes the mornings.",
    ],
    see: [
      { name: "A lake shore before a peak", note: "Buttermere, Crummock or Ullswater. Flat paths, large views, an honest two hours." },
      { name: "A fell you have read the forecast for", note: "Catbells is the classic first hill. Higher fells demand a map, not an optimism." },
      { name: "A town for supplies, not for the day", note: "Keswick or Ambleside in the morning, then leave. The pencil museum can wait for a wet afternoon." },
      { name: "Dove Cottage or a churchyard", note: "The poets were here and the landscape is why. The sites are small. The walks are the text." },
    ],
    eat: "Pubs do the heavy lifting. Book Sunday lunch. Village shops close earlier than you think. A packed lunch is not an affectation on a ridge.",
    base: "One valley. Borrowdale and the western lakes feel furthest from the coach parks.",
    getThere: "Train to Oxenholme or Penrith, then a bus or a pre-booked local connection. A car helps once you are in the side valleys. Do not drive from London for a single night.",
    watch: "Weather turns on the tops. Summer Saturdays clog the A591. Herdwick sheep have the right of way in practice. Dogs on leads around them, always.",
  },
  {
    slug: "cotswolds",
    name: "The Cotswolds",
    nation: "England",
    region: "Gloucestershire and neighbours",
    epithet: "Limestone villages, long views, and a coach circuit that is easy to outwalk.",
    stay: "2 nights",
    bestFor: ["villages", "walking", "a gentle England"],
    overview: [
      "The Cotswolds are a band of limestone hills rather than a single town. The famous villages — Bourton-on-the-Water, Bibury, Castle Combe — are pretty and, at midday, overfull. The area is still worth it if you sleep in a smaller place and walk the fields between them.",
      "This is car or taxi country for most visitors, though Moreton-in-Marsh sits on a rail line from London and makes a sane base. Cycling the lanes is lovely and hilly. Drivers are local and in a hurry on bends.",
    ],
    see: [
      { name: "One famous village, early", note: "Bourton or Bibury at opening time, then leave before the coaches settle." },
      { name: "A walk between two others", note: "Public footpaths link the honey stone. Five miles is a better day than four villages by car." },
      { name: "A market town", note: "Stow, Cirencester or Chipping Campden have a life beyond the tea towel." },
      { name: "A garden only if you love gardens", note: "Hidcote and others are exceptional and ticketed. They are not a duty." },
    ],
    eat: "Pub gardens in good weather are the point. Book. Many kitchens go dark on a Monday. The cream tea is a pause, not a personality.",
    base: "Moreton-in-Marsh if you are on the train. A village inn if you have a car and a booking.",
    getThere: "Paddington to Moreton-in-Marsh is the straightforward rail door. Driving from London is possible and dull until the last twenty minutes.",
    watch: "This is not a wilderness and not a city. Evenings are quiet. Mobile signal dips in hollows. Do not plan five villages before lunch.",
  },
  {
    slug: "cornwall",
    name: "Cornwall",
    nation: "England",
    region: "Cornwall",
    epithet: "A long county of coves, pasties and a summer traffic problem.",
    stay: "3–4 nights",
    bestFor: ["coast", "food", "not being in a rush"],
    overview: [
      "Cornwall is the toe of England, Celtic in accent and history, and organised around small harbours rather than one capital. The north coast takes the Atlantic. The south is softer, with estuaries and sailing towns. You came for light on water. Give it time.",
      "A base in one harbour beats a daily safari. St Ives, Mousehole, Port Isaac and Padstow are known for reasons you will see, and for reasons you will join a queue to confirm. The coast path between the famous bits is the actual luxury.",
    ],
    see: [
      { name: "A stretch of coast path", note: "Two coves and back is enough. The South West Coast Path does not need to be completed to be understood." },
      { name: "A harbour town off-peak hour", note: "Early swim, late sitting. Midday in August is a holding pen." },
      { name: "Tate St Ives or Barbara Hepworth’s garden", note: "Art that belongs to this light, if the weather has trapped you kindly." },
      { name: "A tin-coast or fishing story", note: "Geevor or a small museum on a wet day. The industry is the subtext of the pretty villages." },
    ],
    eat: "A pasty from a bakery that makes them, eaten outside, not on a pub plate with a salad. Fish where the boats are. Book Padstow and St Ives dinners.",
    base: "One coast. Crossing the peninsula every day is how people learn to hate the A30.",
    getThere: "Train from London Paddington to Plymouth, then on to St Erth for St Ives, or Penzance. Newquay by air in season. A car is useful and a liability on Saturdays in school holidays.",
    watch: "Friday afternoon inbound and Saturday morning outbound are the jam. Book accommodation long before July. Seas are cold and some coves have rips. Swim where other people are swimming.",
  },
  {
    slug: "skye",
    name: "Isle of Skye",
    nation: "Scotland",
    region: "Inner Hebrides",
    epithet: "Black rock, changing water, and an island that punishes a one-night stand.",
    stay: "2–3 nights",
    bestFor: ["landscape", "slow driving", "walks"],
    overview: [
      "Skye is attached to the mainland by a bridge and still feels like a crossing. The Cuillin are a serious mountain range. The Trotternish peninsula is the one with the Old Man of Storr and the Quiraing, both extraordinary and both capable of hosting a car park the size of a small town.",
      "Stay on the island. A day trip from Inverness or Fort William is a long drive bookended by disappointment. The light at 7pm is the point of the extra night.",
    ],
    see: [
      { name: "The Quiraing or the Storr, not both in a rush", note: "Pick one, start early, and walk past the first viewpoint." },
      { name: "A west-coast beach", note: "Coral Beach near Dunvegan or a quieter bay you find by being willing to park and walk." },
      { name: "Portree, briefly", note: "The coloured harbour is the capital. Buy supplies. Do not spend the only sunny afternoon in a gift shop." },
      { name: "A ferry view, if the timetable smiles", note: "The Small Isles or just the road down to Elgol, where the Cuillin finally explain themselves." },
    ],
    eat: "Book dinner. The island has good food and not very much of it relative to July’s cars. A picnic is a strategy, not a failure.",
    base: "Portree for services, or a smaller township if you have a car and a booking that includes breakfast.",
    getThere: "Drive via the bridge from Kyle of Lochalsh, or train to Mallaig and ferry into Armadale — the better arrival. Inverness is not next door.",
    watch: "Single-track roads and midges. Fuel up. Do not block passing places. The Cuillin ridge is for scramblers, not for a travel-trainer shoe.",
  },
  {
    slug: "cardiff",
    name: "Cardiff",
    nation: "Wales",
    region: "South Wales",
    epithet: "A capital on a human scale, with a castle in the middle and the sea at the end of the street.",
    stay: "1–2 nights",
    bestFor: ["a Welsh capital", "food", "easy arrival"],
    overview: [
      "Cardiff grew fast in the coal century and wears that history without costume. The centre is compact, the castle is actually in it, and Cardiff Bay is a modern waterfront at the end of a straight walk or a short train. It is the right first night in Wales, not the whole of Wales.",
      "You can be in the Bannau Brycheiniog in well under an hour, or on a train toward the west. Use the city to land, eat, and hear Welsh in the wild, then go.",
    ],
    see: [
      { name: "Cardiff Castle and Bute Park", note: "The grounds are the local park. The house is a Victorian fantasy on a medieval base — enjoyable once you know that." },
      { name: "Cardiff Market", note: "A working market under a glass roof. Lunch here before you look for a view." },
      { name: "The Bay and the Senedd", note: "Walk or ride down. The parliament building is meant to be looked at, and often visited. The barrage path is the local sea wall." },
      { name: "St Fagans", note: "An open-air museum of Welsh buildings, free, a short bus or taxi west. One of the best museums in the UK for understanding a country." },
    ],
    eat: "The market, then a proper dinner in Pontcanna or the centre. Welsh cakes are a snack from a bakery, not a meal. Roast lamb exists and is not compulsory.",
    base: "The centre or Pontcanna. You can walk most of what you want.",
    getThere: "Direct trains from London Paddington in about two hours. Bristol is next door in regional terms.",
    watch: "Match days, especially rugby internationals, fill hotels and change the noise of the city. Wonderful if you have a ticket. Book around them if you don’t.",
  },
  {
    slug: "belfast",
    name: "Belfast",
    nation: "Northern Ireland",
    region: "County Antrim",
    epithet: "A red-brick port with a short memory in the stones and a long one in the people.",
    stay: "2–3 nights",
    bestFor: ["the city", "the Antrim coast", "food"],
    overview: [
      "Belfast is walkable, sharp, and more cheerful than its reputation in older guidebooks. The shipyards, the university quarter and the cathedral streets are close together. The murals are part of the map and not a separate tourist zone to be consumed at speed.",
      "Use the city as a base for the Causeway Coast if you only have a weekend, and give the coast a full day with an early start. A second night out of town is better if you can spare it.",
    ],
    see: [
      { name: "Titanic Belfast", note: "Genuinely strong on the industry and the ship. Book a time. It is not only a film set." },
      { name: "A guided look at the peace lines", note: "Black cab or a community walking tour. Go with someone who lives the context." },
      { name: "St George’s Market", note: "Friday, Saturday or Sunday morning. Eat there. Talk to someone." },
      { name: "The Causeway, early", note: "Basalt columns, a real wonder, a National Trust site. Before 11, or via the cliff path so the arrival is earned." },
    ],
    eat: "The fry is real — soda bread, farls, and enough food to cancel lunch. The modern restaurants around the centre are worth a booking. St George’s will do the rest.",
    base: "City centre for a first stay, so the night belongs to you and not to a ring-road hotel.",
    getThere: "Flights into Belfast City or Belfast International. Train from Dublin is about two hours if you are coming from the Republic. A car for the coast; the city itself does not need one.",
    watch: "This is the UK: pounds and miles. Rental cars may or may not be insured across the border. The Causeway at noon in July is a coach park with geology attached.",
  },
  {
    slug: "liverpool",
    name: "Liverpool",
    nation: "England",
    region: "Merseyside",
    epithet: "A maritime city with museums that punch above, and a sense of humour that gets there first.",
    stay: "1–2 nights",
    bestFor: ["music", "museums", "the waterfront"],
    overview: [
      "Liverpool faces the water and remembers being one of the great ports of the world. The waterfront museums are excellent and largely free. The Beatles are a real history and also an industry; take the part you want and leave the rest without guilt.",
      "The city is friendlier than its English rivals like to admit, and smaller than the songs suggest. You can do it well in a night and a day, especially on the way to north Wales or the Lakes.",
    ],
    see: [
      { name: "Museum of Liverpool and the waterfront", note: "Start here for the city itself, not only for the ships and the band." },
      { name: "Tate Liverpool", note: "A serious collection in the dock warehouses. Check location details; the waterfront has been in transition." },
      { name: "A cathedral, or both", note: "The Anglican cathedral is vast red sandstone. The Metropolitan cathedral is a concrete lantern. They face each other up Hope Street, which is the walk." },
      { name: "A neighbourhood hour", note: "Baltic Triangle for the newer city, or a local pub off the main Beatles axis." },
    ],
    eat: "Expect to be fed generously. Book a bistro on Hope Street if you want a long meal. Chip shops and bakeries do the walking days. You do not need a themed Cavern lunch unless you want one.",
    base: "Near the waterfront or Ropewalks, on foot.",
    getThere: "Direct trains on the west coast main line from London Euston, about two and a quarter hours. Ferries from across the Mersey are a pleasure, not only a song.",
    watch: "Match days around Anfield or Goodison reshape the transport. The Albert Dock is windswept and wonderful and, in a downpour, mostly indoors anyway.",
  },
  {
    slug: "eryri",
    name: "Eryri",
    nation: "Wales",
    region: "Gwynedd",
    epithet: "Snowdonia by its Welsh name: slate, sharp hills, and towns that exist for more than the car park.",
    stay: "2–3 nights",
    bestFor: ["mountains", "Welsh language", "trains and paths"],
    overview: [
      "Eryri is the national park in the north-west of Wales. Yr Wyddfa — Snowdon — is the highest mountain in Wales and the most walked serious peak in the UK. Around it are valleys of slate, oak woods, and a coast of castles. The Welsh language is everyday here, especially in Gwynedd.",
      "You can ride a rack railway up the highest peak in season, walk a path, or ignore the summit entirely and have a better day in a side valley. The third option is underrated.",
    ],
    see: [
      { name: "A path you have matched to the forecast", note: "Llanberis is the long steady way up Yr Wyddfa. The horseshoe and the scrambles are a different sport. Know which you are doing." },
      { name: "A slate town", note: "Blaenau Ffestiniog or Bethesda. Quarries made this landscape as much as ice did." },
      { name: "Betws-y-Coed, then leave it", note: "Useful for outdoor shops and a river. The honeypot, not the mountain." },
      { name: "A castle on the coast", note: "Caernarfon or Conwy if you drop to sea level. Edward I’s ring of castles is the medieval politics made visible." },
    ],
    eat: "Inns in Llanberis, Beddgelert and Capel Curig. Book. A Welsh-language menu is a good sign, not a barrier. Breakfast will be enough to start a walk.",
    base: "Llanberis for the mountain railway and services. A smaller village if you want dark and quiet.",
    getThere: "Train toward Bangor or Betws-y-Coed, then a bus or a car. From Manchester or Birmingham it is a half-day, not an errand.",
    watch: "Cloud on Yr Wyddfa is common and disorienting. The national park asks people to use Eryri and Yr Wyddfa. Paths are stone and knees notice on the way down. Park only in designated places — the verges are not a suggestion.",
  },
  {
    slug: "oxford",
    name: "Oxford",
    nation: "England",
    region: "Oxfordshire",
    epithet: "A working city that happens to be built of colleges.",
    stay: "1–2 nights",
    bestFor: ["architecture", "walking", "a day from London"],
    overview: [
      "Oxford is not a campus you tour from a gate. The colleges sit inside a city that also has a river, a covered market, and people who are not visiting. The famous silhouettes — the Radcliffe Camera, the spires, Christ Church meadow — are real, and they are better early, before the pavement fills.",
      "You can do the set pieces in a day from London. A night lets you walk them again after the coaches have gone, which is when the stone looks like it belongs to the place.",
    ],
    see: [
      { name: "Radcliffe Square", note: "The Camera, All Souls and St Mary’s. Stand in the square first. A college interior is optional, not the whole morning." },
      { name: "Christ Church meadow", note: "Free, flat, and the best way to understand how the college sits on the river. The hall is a ticket." },
      { name: "The covered market", note: "Lunch and a book, not a souvenir crawl. It is still a market." },
      { name: "A punt only if the queue is short", note: "The Cherwell at Magdalen is the quieter water. The Thames at Folly Bridge is the busier one." },
    ],
    eat: "Leave the immediate college gates. Jericho and the Cowley Road cook for residents. The market is the honest lunch. Book dinner if you are staying.",
    base: "The centre if you are here one night and on foot. A Jericho or station-side room if you want quieter streets.",
    getThere: "Direct trains from London Paddington in about an hour. The bus from the station to the centre is short. Do not drive into the middle.",
    watch: "Many colleges charge, and some close for events with no apology. The free city is already enough. Term time is livelier than the long vacation, and the vacation is when the tour groups peak.",
  },
  {
    slug: "cambridge",
    name: "Cambridge",
    nation: "England",
    region: "Cambridgeshire",
    epithet: "King’s College, the Backs, and a river that is not the whole university.",
    stay: "1–2 nights",
    bestFor: ["the Backs", "a quieter college city", "cycling"],
    overview: [
      "Cambridge is smaller and flatter than Oxford, and the famous view is a lawn running down to the Cam with King’s College Chapel behind it. That view is earned by walking the Backs, not by buying the first punt that calls to you from a bridge.",
      "The rest of the city is laboratories, bicycles and a market square. Treat the chapel as the monument and the streets behind it as the place you actually spend the afternoon.",
    ],
    see: [
      { name: "King’s College Chapel", note: "The interior is the one ticket worth timing. The exterior from the Backs is free and, in late light, better." },
      { name: "The Backs", note: "Walk from Clare to St John’s. Punts are a pleasure when you are not in a convoy." },
      { name: "Fitzwilliam Museum", note: "Free, serious, and a relief from college courtyards. Give it an hour, not a glance." },
      { name: "Grantchester meadows", note: "A flat walk or a short bus south if you want the river without the queue." },
    ],
    eat: "The market square for lunch. Dinner a few streets off King’s Parade, where the menus are not printed for a ninety-minute stop. Book on a Saturday.",
    base: "Inside the centre if you want to walk home after dark. The station is a bus or a taxi, not a stroll.",
    getThere: "King’s Cross to Cambridge in under an hour on a fast train. Sit on the right on the way up if you like the fens, which are mostly sky.",
    watch: "Punt touts are persistent and not always the college punts. Bicycles have the right of way in practice. Sundays are quiet in a way that suits the chapel and starves some kitchens.",
  },
  {
    slug: "windsor",
    name: "Windsor",
    nation: "England",
    region: "Berkshire",
    epithet: "The largest castle in the world still used as a house, and a town that knows it.",
    stay: "A day, or one night",
    bestFor: ["the castle", "a royal park", "an easy trip from London"],
    overview: [
      "Windsor Castle is not a ruin and not a film set. It is a working royal residence, which means rooms close when the household needs them and the State Apartments are the visit, not the whole town. The castle sits on a hill above a Thames-side high street that exists largely to feed you afterwards.",
      "The Long Walk, running south into the Great Park, is free and the right way to see the walls before you decide whether the ticket is your morning.",
    ],
    see: [
      { name: "The castle, booked", note: "Timed entry. St George’s Chapel is the architectural point, when it is open to visitors. Check the day’s closures before you travel." },
      { name: "The Long Walk", note: "Three miles of grass if you go to the end. Even twenty minutes reframes the walls." },
      { name: "Eton, across the bridge", note: "A different town, a school, and a high street. Fifteen minutes on foot. Do not try to tour the school as if it were a second castle." },
      { name: "The river path", note: "Downstream or up, away from the coach drop. Swans are not a personality." },
    ],
    eat: "Eat in Eton or a few streets back from the castle gate. The first restaurants facing the walls are priced for a captive hour.",
    base: "London, almost always. A Windsor night only if you have an early entry and no wish to be on the train at dusk.",
    getThere: "About half an hour from London Paddington to Windsor & Eton Central, or Waterloo to Windsor & Eton Riverside. They are different stations. Both work.",
    watch: "Changing of the Guard is a crowd, not a secret. Mondays and royal events can shut the interior. The Great Park is a real park with roads — do not treat every path as pedestrian.",
  },
  {
    slug: "durham",
    name: "Durham",
    nation: "England",
    region: "County Durham",
    epithet: "A cathedral and a castle on a river peninsula, and one of the great small cities of the north.",
    stay: "1–2 nights",
    bestFor: ["the cathedral", "a northern stop", "walking"],
    overview: [
      "Durham is the place people skip between York and Edinburgh, and then wish they had not. The cathedral and the castle share a rock in a loop of the Wear. The river walks below them — the Banks — are the right introduction, because you see the building as a person on the path would have seen it.",
      "The city is a university town the rest of the week. It is compact, hilly, and finished in an evening plus a morning.",
    ],
    see: [
      { name: "The cathedral", note: "One of the great Norman buildings in Europe. Donation, not a turnstile, in ordinary hours. The Galilee Chapel and the cloister matter as much as the nave." },
      { name: "The Banks", note: "Walk the river path from Prebends Bridge. Morning, if you can. The view is the city’s whole argument." },
      { name: "The castle", note: "It is a college as well as a fortress. Tours run when the university allows. Book, or admire it from the palace green." },
      { name: "The market place", note: "Down the hill, where the city buys food. A useful correction to the peninsula." },
    ],
    eat: "Down from the bailey. The streets by the station and the market have the everyday kitchens. Book if you are here on a Saturday in term.",
    base: "Inside the city, on foot. The viaduct and the station are close enough that you do not need a car.",
    getThere: "On the east coast main line. London King’s Cross is under three hours. Edinburgh is a similar hop north. This is a stop, not a detour.",
    watch: "Hills and cobbles. The peninsula is pedestrian in spirit and crowded on graduation days. The cathedral is a church first — services take the building back, and that is not an inconvenience.",
  },
  {
    slug: "glasgow",
    name: "Glasgow",
    nation: "Scotland",
    region: "Greater Glasgow",
    epithet: "Scotland’s larger city: sandstone, museums, and a humour that does not wait to be asked.",
    stay: "2 nights",
    bestFor: ["museums", "music", "a city that is not Edinburgh"],
    overview: [
      "Glasgow is not a fallback for people who could not get a room in Edinburgh. It is a Victorian merchant city with a better claim on Scottish art, a grid that is easy to walk, and a West End that feels lived in. Charles Rennie Mackintosh is here. So is the largest civic museum in the country.",
      "Give it a night of its own. Using it only as an airport hotel on the way to the Highlands wastes the reason the airport is here.",
    ],
    see: [
      { name: "Kelvingrove", note: "Free, vast, and the right first building. The art and the natural history share a roof without embarrassment." },
      { name: "The West End", note: "Byres Road, the university tower, and a park. This is the city’s living room." },
      { name: "A Mackintosh building", note: "The Willow Tea Rooms are the small version. The Scotland Street School or a look at the art school’s story if you care about the fire and the rebuilding." },
      { name: "The riverside", note: "The Transport Museum at Pointhouse is excellent if machines interest you, and a destination rather than a stroll from the centre." },
    ],
    eat: "The West End and the south side cook seriously. Book. A long lunch is more Glasgow than a tourist set menu on Buchanan Street. The city’s Indian restaurants are part of the canon, not a side note.",
    base: "The West End if you want parks and dinner. The centre if you want the station and a morning train to the west.",
    getThere: "Trains from Edinburgh in under an hour. From London, the west coast line to Glasgow Central takes about four and a half. The airport is a bus or a taxi, not a long ordeal.",
    watch: "Weather is Atlantic. The grid is hillier than it looks on a map. Match days at Celtic or Rangers change whole districts — know which you are near.",
  },
  {
    slug: "st-andrews",
    name: "St Andrews",
    nation: "Scotland",
    region: "Fife",
    epithet: "A ruined cathedral, an old university, and the golf that the town has decided to be famous for.",
    stay: "1 night, or a long day",
    bestFor: ["the coast", "ruins", "a Fife detour"],
    overview: [
      "St Andrews is three towns sharing a street: a medieval ecclesiastical capital, a university, and the home of golf. You do not need to play golf to justify the journey. The cathedral ruins running down to the sea, and the castle on its rock, are the older story and they are free to look at from the scores — the lanes that drop to the shore.",
      "It is small. A night is generous. A day from Edinburgh is possible and a little rushed if you also want a walk.",
    ],
    see: [
      { name: "The cathedral", note: "Ruin, tower, and a churchyard on the cliff. Climb St Rule’s Tower if it is open and your knees agree." },
      { name: "The castle", note: "A short walk along the coast from the cathedral. The mine and counter-mine are the odd, memorable bit." },
      { name: "The West Sands", note: "A long beach. Wind is part of the design. Walk as far as the light is good." },
      { name: "The Old Course, from the path", note: "You can see it without a tee time. Do not wander the greens. The clubhouse is not a public lounge." },
    ],
    eat: "The town has more tea rooms than a place this size requires. Eat near the harbour or on Market Street, and book if it is a golf weekend or graduation.",
    base: "In the town, so the evening belongs to the ruins and not to a drive back to a Dundee hotel.",
    getThere: "Train to Leuchars, then a bus or a taxi for the last few miles. Edinburgh is about an hour and a half all in. There is no station in the town itself.",
    watch: "Wind off the North Sea. The Old Course closes to play on Sunday and becomes a park — that is the day to walk it, if the rule still holds when you go. Check.",
  },
  {
    slug: "whitby",
    name: "Whitby",
    nation: "England",
    region: "North Yorkshire",
    epithet: "An abbey on a cliff, a harbour full of boats, and a town that earns its fish and chips.",
    stay: "1–2 nights",
    bestFor: ["the coast", "a Gothic afternoon", "a base on the North Sea"],
    overview: [
      "Whitby is split by the Esk. The east side climbs to the abbey, which is a ruin with a view that explains why Dracula’s author put a scene here. The west side is the town, the fish, and the whalebone arch that remembers the port’s other life. Both sides are the point. The 199 steps between the parish church and the abbey are not optional if you want the famous arrival.",
      "It pairs with York. Do not try to see both properly before lunch.",
    ],
    see: [
      { name: "The abbey", note: "English Heritage. Go up for the ruin and stay for the cliff. The church of St Mary at the top of the steps is stranger and quieter." },
      { name: "The harbour", note: "Walk both piers if the wind allows. The town makes sense only from the water side." },
      { name: "A beach hour", note: "West Cliff for the sweep, or the sand when the tide has left some. The sea is cold." },
      { name: "The Captain Cook story, lightly", note: "He apprenticed here. The museum is a wet-weather hour, not a duty in sunshine." },
    ],
    eat: "Fish and chips from a shop that faces the harbour, eaten outside if you can stand up in the wind. That is the meal. A sit-down dinner needs a booking on a summer Saturday.",
    base: "On either side of the river, on foot. The station is at the bottom of the town.",
    getThere: "Train from York via Middlesbrough, or the Esk Valley line on its own slower terms. It is a branch line. Check the return before you linger.",
    watch: "The steps are real. Goth weekends and high summer fill the inns. The abbey headland is exposed. Do not plan a clifftop walk in a gale because the photograph looked calm.",
  },
  {
    slug: "conwy",
    name: "Conwy",
    nation: "Wales",
    region: "North Wales",
    epithet: "A complete medieval town wall, a castle in the water, and a bridge that used to be the wonder.",
    stay: "1 night, or a day from Eryri",
    bestFor: ["a castle", "town walls", "the north Wales coast"],
    overview: [
      "Conwy is one of Edward I’s iron ring of castles, and unlike most of them it still has its town walls in a loop you can walk. The castle is the monument. The walls are how you understand the monument. The three bridges — suspension, rail, and road — are a short lesson in how Britain kept arriving at the same narrow point.",
      "It is the right coastal day if you are based in Eryri, and a good first night in north Wales if you have come along the coast.",
    ],
    see: [
      { name: "The castle", note: "Cadw. The towers are the visit. Book in July. The views back to Eryri are part of the ticket." },
      { name: "The town walls", note: "Walk them. They are short, high, and more useful than a second castle interior." },
      { name: "The suspension bridge and Telford’s work", note: "The small tollhouse tells the engineering. You do not need to be an engineer." },
      { name: "Bodlondeb or the quay", note: "A harbour walk once the walls are done. Mussel boats, not a resort strip." },
    ],
    eat: "Inside the walls, simply. Mussel and fish if the boats have been out. The town is small, so book on a Saturday.",
    base: "Inside the walls, or Llandudno if you want a larger resort and a promenade and are willing to bus back.",
    getThere: "On the north Wales coast railway. Direct-ish from London via Chester, and easy from Manchester. The station is outside the walls, which is the correct medieval arrangement.",
    watch: "The A55 is loud beyond the walls and irrelevant inside them. Cruise-day crowds happen. The wall walk is not ideal with a pushchair. Welsh on signs is normal and not a translation error.",
  },
  {
    slug: "peak-district",
    name: "The Peak District",
    nation: "England",
    region: "Derbyshire and neighbours",
    epithet: "England’s first national park: gritstone edges, limestone dales, and cities close enough to fill the car parks.",
    stay: "2 nights",
    bestFor: ["walking", "villages", "a northern landscape without the drive to the Lakes"],
    overview: [
      "The Peak is two rocks. The Dark Peak is gritstone, moor and edges — Mam Tor, Stanage, Kinder. The White Peak is limestone dales, stone villages and rivers that disappear. They need different days. A visitor who tries to “do the Peak” from Bakewell in a single afternoon sees a pudding and a car park.",
      "Sheffield and Manchester are close, which is a blessing for the train and a warning about Sunday afternoon. Stay overnight and walk in the morning.",
    ],
    see: [
      { name: "An edge, not a list", note: "Mam Tor and the ridge toward Lose Hill is the classic first walk. Stanage is the one if you want gritstone and space." },
      { name: "A dale", note: "Dovedale or Lathkill. Limestone, water, and a path that does not require a summit to feel finished." },
      { name: "A village after the walk", note: "Castleton, Eyam or Tideswell. Hathersage if you are on the train. Bakewell is the market town, not the landscape." },
      { name: "A cavern only in the rain", note: "The show caves are fine wet-weather tickets. They are not the park." },
    ],
    eat: "Pubs in the villages, booked for Sunday. A packed lunch belongs in the rucksack. Bakewell pudding is a local argument — eat one, then go back outside.",
    base: "Castleton or Hathersage for the Dark Peak. A White Peak village if the dales are the point. One base.",
    getThere: "Train to Hathersage, Hope or Edale for the Dark Peak. The Hope Valley line from Manchester to Sheffield is the useful one. A car helps in the White Peak and creates the queues you came to avoid.",
    watch: "Edale and Mam Tor on a sunny Sunday are a traffic problem with a view. Start early. Kinder Scout is a plateau that punishes poor navigation in mist. Paths can be slick gritstone.",
  },
  {
    slug: "dover",
    name: "Dover",
    nation: "England",
    region: "Kent",
    epithet: "The white cliffs, a harbour that faces France, and the shortest serious statement of the island.",
    stay: "A day, or one night if the ferry is yours",
    bestFor: ["the cliffs", "an arrival or a leaving", "a Kent coast walk"],
    overview: [
      "Dover is a port before it is a beauty spot. The town has taken a century of traffic and looks like it. The cliffs are why you came, and they are a short bus or a walk east of the harbour, not a backdrop you admire from the ferry queue. On a clear day France is a fact, not a metaphor.",
      "Come for the cliffs and the castle. Do not judge the country by the retail park beside the docks.",
    ],
    see: [
      { name: "The White Cliffs", note: "The National Trust land at Langdon Bay, or the coast path toward St Margaret’s. Walk far enough that the port drops out of the foreground." },
      { name: "Dover Castle", note: "English Heritage, and a full half-day if you go in. The secret wartime tunnels are the modern history. The walls are the medieval one." },
      { name: "The harbour, briefly", note: "Ferries the size of housing estates. Worth ten minutes so the cliffs have a scale." },
      { name: "St Margaret’s Bay", note: "The next bay east. Smaller, and the right place to sit if the wind allows." },
    ],
    eat: "Eat in the town or, better, in Deal or Sandwich if you have a car or a train and the cliffs are done. Dover’s seafront is convenient more often than it is good. A pub in St Margaret’s is the walker’s version.",
    base: "Canterbury or Deal if you want a night on this coast. Dover itself if you are catching an early ferry and want to be dull and correct.",
    getThere: "High-speed train from London St Pancras in about an hour. The ferry to Calais or Dunkirk is the other door. Coaches use the docks. The cliffs do not require a car.",
    watch: "The cliff path is unfenced in places and the edge is chalk, which fails. Keep in from the lip. Wind can make a sunny forecast feel like a different month. Port security is not a viewpoint.",
  },
  {
    slug: "glenfinnan",
    name: "Glenfinnan",
    nation: "Scotland",
    region: "The Highlands",
    epithet: "A viaduct, a loch, and the monument where the Jacobite rising was raised.",
    stay: "A day from Fort William, or a night on the Road to the Isles",
    bestFor: ["the West Highland line", "a Highland set piece", "not only the train"],
    overview: [
      "Glenfinnan is where the West Highland Railway crosses a curve of arches above the head of Loch Shiel, and where the 1745 rising was proclaimed. Both are real. The viaduct has also become a photograph people queue for, because a steam train crosses it in season and because a film made the curve famous. Arrive for the landscape and you will still be glad. Arrive only for a two-minute train and you may mostly see other people’s phones.",
      "It sits on the Road to the Isles, between Fort William and Mallaig. That road and that railway are the journey. The viaduct is a stop on it.",
    ],
    see: [
      { name: "The viaduct viewpoint", note: "Walk up from the visitor centre. The path is short and the view is the curve plus the loch, which is the better half." },
      { name: "The monument", note: "At the head of Loch Shiel. The history is 1745, not the film. Read the stone." },
      { name: "The train, if the timetable agrees", note: "The Jacobite steam service runs in season and is booked out. The ordinary ScotRail service still crosses the arches and does not require a costume." },
      { name: "On to the coast", note: "Arisaig, Morar or Mallaig. Silver sand and the Small Isles ferry if you have the rest of the day." },
    ],
    eat: "The visitor centre has the expected tea. A better meal is in Mallaig or back in Fort William. Do not expect a choice of restaurants in the glen.",
    base: "Fort William, or a night in Mallaig if you are taking the morning ferry toward Skye. Glenfinnan itself is a few rooms, not a resort.",
    getThere: "ScotRail from Fort William or from Mallaig stops at Glenfinnan. The road is the A830. Do not stop in a passing place to take the photograph.",
    watch: "Midges in still summer weather. The steam train’s passing time is a crowd. The hills around the loch look gentle and are not a casual scramble. Single-track patience is the local etiquette.",
  },
  {
    slug: "canterbury",
    name: "Canterbury",
    nation: "England",
    region: "Kent",
    epithet: "A cathedral city an hour from London, with a wall you can still walk and a high street you can ignore.",
    stay: "A day, or one night if Evensong is the point",
    bestFor: ["a first cathedral", "a day from London", "Kent"],
    overview: [
      "Canterbury is the seat of the Archbishop and the reason a great many school parties know the name Becket. The cathedral is the reason to come. The town around it is small, partly walled, and easy to like if you step off the main pedestrian street.",
      "It is the right day-trip when Dover’s cliffs are the morning and you want stone and a choir in the afternoon, or when London has been enough city and you want a change of scale without a long ride.",
    ],
    see: [
      { name: "The cathedral", note: "Pay to enter. The precinct is the calm part. Evensong, when it is sung, is the best-value hour in the building." },
      { name: "The city wall", note: "A stretch near the Dane John gardens. Short, and enough to see the town as a town rather than a shopping street." },
      { name: "St Augustine’s and St Martin’s", note: "Outside the centre, and the older Christian story. Worth it if the cathedral queue has already taught you patience." },
      { name: "The river", note: "A loop behind the Weavers’ houses. Ten minutes, and quieter than the Buttermarket." },
    ],
    eat: "Leave the first row of tearooms facing the Christ Church Gate. The streets toward the station and Northgate have ordinary, better lunches. A pub garden if the weather is the rare Kentish kind.",
    base: "In town if you are staying. Otherwise do not. It is a day from London, and Canterbury is not improved by rushing a hotel check-in at four.",
    getThere: "High-speed trains from St Pancras take a little over an hour. The slower trains from Victoria and Charing Cross are fine if you are not counting minutes. Dover is a short continuation.",
    watch: "The centre fills with coaches late morning. Sundays can be quiet in the shops and full in the cathedral. The precinct closes; do not assume you can wander the close after dark.",
  },
  {
    slug: "brighton",
    name: "Brighton",
    nation: "England",
    region: "East Sussex",
    epithet: "A regency seafront, a pavilion that looks like a dare, and a city that does not behave like a resort.",
    stay: "A night, or a long day from London",
    bestFor: ["the sea in under an hour", "a walk with weather", "not a quaint village"],
    overview: [
      "Brighton and Hove is a city that happens to face the Channel. The Palace Pier, the pebble beach and the Royal Pavilion are the postcard. The Lanes and North Laine are the reason people who live in London keep a habit of coming down. It is louder, later and less pretty than a Cotswold day, which is the recommendation.",
      "Come for one night if you want supper and a morning swim, or for a day if London has gone airless. Do not come expecting sand of the Mediterranean sort. The beach is stones, and the swimming is serious.",
    ],
    see: [
      { name: "The Royal Pavilion", note: "The interior is the spectacle. The outside is enough if you only have an hour and a camera." },
      { name: "A walk to Hove", note: "West along the front, away from the pier. The architecture improves as the amusements thin out." },
      { name: "The Lanes, once", note: "Early. By noon it is a jewellery crawl. North Laine is the better wander for shops that are not souvenirs." },
      { name: "The downs behind", note: "A bus toward Devil’s Dyke or a train to Lewes if the beach wind has won. The city makes more sense with the chalk hills above it." },
    ],
    eat: "Eat off the front. The seafront restaurants are priced for the view. The streets north of North Laine, and Hove, are where people who live here actually book. Fish and chips on the pebbles is a correct once.",
    base: "Near a station if you are leaving early, or in Kemptown or Hove if you want to sleep. The centre is for the evening, not for a quiet room.",
    getThere: "About an hour from London Victoria or London Bridge, and from St Pancras on the faster trains. Do not drive it on a sunny Saturday. The coast road is a car park with a horizon.",
    watch: "The pebbles are hard on the feet and the sea is colder than the sunshine suggests. Weekends in school holidays are packed from late morning. The pavilion’s style is not subtle; if you wanted a parish church, this is the wrong seafront.",
  },
  {
    slug: "bristol",
    name: "Bristol",
    nation: "England",
    region: "Bristol",
    epithet: "A harbour city with a bridge that still looks impossible, and a centre that is not a museum of itself.",
    stay: "2 nights",
    bestFor: ["a western city", "food", "pairing with Bath"],
    overview: [
      "Bristol is the working city Bath’s visitors usually skip. The harbour was the point of the place, including a slave-trading past the city now says out loud. The suspension bridge at Clifton is the view. The streets between the docks, Stokes Croft and the Christmas Steps are where a weekend actually happens.",
      "Two nights is the right length: one for the gorge and the docks, one for walking without a plan. It pairs with Bath on a short train, and the contrast is the lesson.",
    ],
    see: [
      { name: "Clifton Suspension Bridge", note: "Walk across it, then down to the Cumberland Basin if your knees agree. The view back up is the photograph." },
      { name: "The harbour", note: "SS Great Britain if ships interest you. The waterside walk if they do not. Both are legitimate." },
      { name: "A hill", note: "Brandon Hill or the Cabot Tower. Bristol is only understood from above, because the centre hides in cuts and slopes." },
      { name: "Street art, without a tour", note: "Stokes Croft and Nelson Street. Look, and do not treat people’s walls as a theme park." },
    ],
    eat: "St Nicholas Market at lunch if you want one room with many kitchens. In the evening, leave the dockside tables that face the water and walk ten minutes. The city cooks seriously, and the obvious pontoon is not where that happens.",
    base: "Near the harbour or on a bus route up to Clifton. Clifton is prettier and hillier. The station is Temple Meads, which is a short walk or a bus, not in the middle of the pretty part.",
    getThere: "About an hour and a half from Paddington. Bath is fifteen to twenty minutes further along, or a separate hop. Cardiff is across the water by rail and not a long hop.",
    watch: "Hills. A map that looks flat is lying. The bridge is windy. The harbour at night is lively in a way that is fun until it is not; pick a street you can leave.",
  },
  {
    slug: "chester",
    name: "Chester",
    nation: "England",
    region: "Cheshire",
    epithet: "A Roman grid, a complete city wall, and the Rows: galleries of shops above the street.",
    stay: "A day, or one night on the way to north Wales",
    bestFor: ["walls", "a stop between London and Wales", "walking"],
    overview: [
      "Chester is the most intact walled city most English people have somehow not put on a first itinerary. The wall is a full circuit, about two miles, and it is the right way to see the place. The Rows — covered galleries at first-floor level — are medieval shopping streets that still work.",
      "It sits on the way to north Wales. Conwy and the Eryri are the continuation if you have a second day. Chester alone is a rich afternoon and a morning, not a week.",
    ],
    see: [
      { name: "The walls", note: "Do the circuit. The eastgate clock is the famous bit and the least interesting ten yards. The river section is the best." },
      { name: "The Rows", note: "Walk the upper level on Watergate and Eastgate. Go into the cathedral close when the shops have done their job." },
      { name: "The cathedral", note: "A choir school and a cloister, quieter than the walls. Worth the ticket if you like church woodwork." },
      { name: "The river", note: "The Groves, below the wall. A short extra if the circuit has not finished you." },
    ],
    eat: "The Rows will offer cream tea at the first opportunity. Eat nearer the canal or just outside the walls. Cheshire is a farming county; a straightforward lunch is a better idea than a medieval banquet.",
    base: "Inside or just outside the walls if you are staying. Otherwise treat it as a day between London and somewhere in Wales.",
    getThere: "About two hours from London Euston. Direct trains continue toward Holyhead, and Llandudno Junction for Conwy is an easy change. Liverpool is close if you want a bigger night.",
    watch: "The wall has steps and narrow stretches. Saturdays are busy in a pleasant, local way. The racecourse days fill the hotels; check before you assume a room.",
  },
  {
    slug: "manchester",
    name: "Manchester",
    nation: "England",
    region: "Greater Manchester",
    epithet: "A red-brick capital of the north, with serious museums and a centre that expects you to have plans after dark.",
    stay: "2 nights",
    bestFor: ["a northern city", "music and museums", "rain with something to do"],
    overview: [
      "Manchester is not a beauty spot and does not pretend to be. It was the first industrial city and it still behaves like a city: warehouses, a real centre, universities, and museums that are free and good. Two nights lets you use it properly. One night is a gig and a station.",
      "It is also the rail door to the Peak District and to Liverpool. Sleep here if the north-west is the region and you want streets rather than a village.",
    ],
    see: [
      { name: "The Whitworth or the City Art Gallery", note: "Both free. Pick one and stay. The Whitworth has a park. The gallery is in the middle of town." },
      { name: "The Science and Industry Museum", note: "In the old railway warehouses at Castlefield. The right rainy half-day, and honest about how the city was made." },
      { name: "A walk along the canal", note: "Castlefield basins to Deansgate. Short, and more useful than a bus tour." },
      { name: "The Central Library", note: "The reading room is a public room, not a paid set. Go in, even if you only sit for ten minutes." },
    ],
    eat: "The Northern Quarter has the restaurants and also the queues. Chinatown is a better plan on a Saturday night. Rusholme’s curry mile is a trek and a specific appetite. Book if you care where you sit; Manchester eats out as a habit, not as a treat.",
    base: "Near Piccadilly or Oxford Road if trains matter, or the Northern Quarter if the evening is the point. Salford Quays is a different, newer trip — media buildings and a waterside — and a poor base for the centre.",
    getThere: "A little over two hours from London Euston. The airport has its own station. Liverpool is about forty minutes. Sheffield and the Hope Valley line are the way into the Peak.",
    watch: "Rain is the local climate, not a surprise. Saturday nights in the centre are loud. Do not judge the architecture by Piccadilly Gardens; walk two streets and it improves.",
  },
  {
    slug: "inverness",
    name: "Inverness",
    nation: "Scotland",
    region: "The Highlands",
    epithet: "The town at the top of the Great Glen, more useful than it is famous, and the right night before the north.",
    stay: "1–2 nights as a hinge, not as the holiday",
    bestFor: ["a Highland railhead", "Loch Ness without the coach", "going further north"],
    overview: [
      "Inverness is the capital of the Highlands in the practical sense: trains, a river, a castle on a hill, and roads that leave for the west and the far north. It is not pretty in the Edinburgh way. It is the correct place to sleep if tomorrow you are going to Skye, Ullapool, or the Cairngorms.",
      "Give it a day and a night. The mistake is to treat Loch Ness as the attraction and the town as a garage. The loch is a long body of water. The town is a riverside walk and a good supper.",
    ],
    see: [
      { name: "The river and the islands", note: "The Ness Islands are a short walk from the centre and the best half-hour in town." },
      { name: "The castle viewpoint", note: "The building itself has been a court and a workplace. The view down the river is the point." },
      { name: "Culloden, if the history is yours", note: "A bus ride east. The battlefield is well explained and not a theme park. Allow the morning." },
      { name: "A boat only if you want a boat", note: "Loch Ness cruises leave from Dochgarroch and Drumnadrochit, not from a monster ticket office in the high street. Go for the glen, not for a sighting." },
    ],
    eat: "The centre has everything a touring town has, including places aimed at coaches. Walk toward the crown or the riverside for a quieter meal. Book in summer. The town is full when the North Coast 500 is full.",
    base: "In the centre, on foot from the station. A car-based lodge on Loch Ness is a different holiday and a poor idea if you arrived by train.",
    getThere: "The Highland line from Edinburgh or Glasgow takes about three and a half hours and is the right way to arrive. Inverness airport is small and useful. The train to Kyle of Lochalsh is one of the great rides if you have a spare day.",
    watch: "Midges away from the sea breeze. The A82 down the loch is busy and not a scenic drive you can do while reading a map. Distances north of here are longer than the map’s inches suggest.",
  },
  {
    slug: "st-davids",
    name: "St Davids",
    nation: "Wales",
    region: "Pembrokeshire",
    epithet: "Britain’s smallest city: a cathedral in a hollow, and a coast path that is the real reason to come.",
    stay: "2 nights",
    bestFor: ["the coast path", "a quiet Wales", "walking"],
    overview: [
      "St Davids is a village with a cathedral, which makes it a city by the old rule and still a village by every other one. The church sits in a grassy hollow below the street, next to a ruined bishop’s palace. The Pembrokeshire coast around it — Whitesands, St Non’s, the path toward Porthclais — is why two nights is better than a photo stop.",
      "It is not on the way to anywhere else. That is the recommendation. Come here when Cardiff and the castles of the north have been enough city and stone, and you want weather and a path.",
    ],
    see: [
      { name: "The cathedral and the palace", note: "The cathedral is the working church. The palace next door is the ruin, open as a site, and the better silhouette." },
      { name: "St Non’s and the cliff", note: "A short walk to the traditional birthplace of David and a holy well. The coast is the view, not the well." },
      { name: "Whitesands Bay", note: "A beach with a proper horizon toward Ramsey Island. Go for a walk even if you do not swim." },
      { name: "Ramsey, if the sea allows", note: "Boats leave when the weather agrees. Do not build the day around a crossing you have not checked that morning." },
    ],
    eat: "The town has a handful of kitchens and they fill up. Book. A picnic from the shops is the right lunch for the path. Do not expect a choice after nine.",
    base: "In St Davids itself so you can walk the coast without a car each time. A farm stay on the peninsula is fine if you have a vehicle and accept dark lanes.",
    getThere: "Train to Haverfordwest, then a bus. It is a long way from Cardiff and from London, and that is the point. Driving the last miles on a summer Saturday is slow. Do not attempt it as a day trip from the capital.",
    watch: "The coast path has abrupt drops and the wind is not decorative. Tides matter at the beaches. The ‘city’ has few beds in August; book, or stay in Solva and come in for the day.",
  },
  {
    slug: "hadrians-wall",
    name: "Hadrian’s Wall",
    nation: "England",
    region: "Northumberland",
    epithet: "The stone edge of a Roman province, still walking the crags between Newcastle and Carlisle.",
    stay: "A day from a town, or two nights if you mean to walk",
    bestFor: ["a long walk", "Roman Britain without a glass case", "the north of England"],
    overview: [
      "Hadrian’s Wall is not a single visitor centre. It is a line, seventy-odd miles, of which the best-preserved central miles run along the Whin Sill above the Northumberland hills. Housesteads and Steel Rigg are the famous stretches. Vindolanda, just south of the line, is the place for the everyday Roman life the wall itself does not show.",
      "See a section properly rather than ticking the whole line from a car. One fort and a walk between two milecastles will do more than a blurred afternoon on the B-road.",
    ],
    see: [
      { name: "Housesteads", note: "The fort on the ridge. Pay English Heritage, then walk west along the crags until the car park is out of mind." },
      { name: "A stretch on foot", note: "Steel Rigg toward Sycamore Gap’s site, or east from Housesteads. The wall is the path. Give it two hours, not twenty minutes." },
      { name: "Vindolanda", note: "A different ticket and the better museum. Writing tablets, shoes, the mess of a garrison. Go if the human detail is what you wanted." },
      { name: "Twice Brewed or a village supper", note: "The landscape is the exhibit. You do not need a third fort." },
    ],
    eat: "Pubs in the wall villages do the work: Once Brewed, Haltwhistle, or back in Hexham if you want a town. Do not expect a restaurant with a view and a booking system at the fort.",
    base: "Hexham or Haltwhistle if you want a station and a bed. A bunkhouse near the wall if you are walking the path and happy with an early night.",
    getThere: "Train to Hexham or Haltwhistle on the line between Newcastle and Carlisle, then a bus toward the central section in season. A car is simpler and also the reason the lanes clog on a sunny Sunday. Newcastle is the city if you want a night with options.",
    watch: "Weather on the crags changes in an hour, and there is little shelter. The path is uneven and exposed. The AD122 bus is seasonal; do not assume it in November. Leave gates as you found them. This is farmland as well as a monument.",
  },
  {
    slug: "salisbury",
    name: "Salisbury",
    nation: "England",
    region: "Wiltshire",
    epithet: "A cathedral close, a famous spire, and the sensible base for Stonehenge if the stones are actually the point.",
    stay: "A night if you are doing the stones properly",
    bestFor: ["the cathedral", "Stonehenge without a coach marathon", "a southern city"],
    overview: [
      "Salisbury exists, in the visitor’s mind, as the place near Stonehenge. The city is better than that job description. The cathedral has the tallest spire in Britain, a close of grass and houses that is one of the most complete in the country, and a copy of Magna Carta if documents interest you.",
      "Use it as the night before or after the stones, not as a service station. The stones are a timed visit on a plain to the north. The city is the walk, the close, and supper.",
    ],
    see: [
      { name: "The cathedral and close", note: "Allow longer than you think. The spire is the skyline. The cloisters and the chapter house are the interior. Walk the close even if you do not go in." },
      { name: "Stonehenge, separately", note: "Book a time. The visitor buses leave from the station. Go early. Do not bolt it onto a cathedral morning and a Bath evening." },
      { name: "A river walk", note: "The Avon watermeadows below the close, the view Constable painted. Twenty minutes and the right scale." },
      { name: "Old Sarum", note: "The abandoned earlier city on the hill to the north, if you have the afternoon and want to see why they moved." },
    ],
    eat: "The close itself is not a dining room. Eat in the city streets just outside it. Avoid any menu that exists only to feed people who have been on a coach since breakfast.",
    base: "In the city, near the close or the station. A rural hotel ‘near Stonehenge’ often means a car and a roundabout.",
    getThere: "About an hour and a half from London Waterloo. Bath and Bristol are onward to the west if the west is the rest of the week. The Stonehenge bus is seasonal in frequency; check it the day you need it.",
    watch: "The plain is exposed and the stones have little shade. The cathedral close has gates and hours. Combining Stonehenge, Lacock, Avebury and the cathedral in one day is how people stop enjoying any of them.",
  },
];

export const starters = [
  "I'm flying from New York. What do I need before I board, and where should I land?",
  "Eurostar from Paris for three nights. Where do I actually stay?",
  "What is Index UK, and how should I use it?",
  "A first week in Britain if I have never been.",
  "Two days in York that are not just the Minster",
  "A week in Scotland without hiring a car",
  "Where should I go in October if I hate crowds?",
  "A wet-day plan for Edinburgh with good food",
  "A long weekend from London by train, no car",
  "Stonehenge without wasting the rest of the day",
  "Where should I take my parents who walk but hate queues?",
  "Three nights on the Welsh coast",
];

export type Recommendation = {
  kicker: string;
  title: string;
  note: string;
  to: "place" | "briefing";
  slug: string;
};

export const recommendations: Recommendation[] = [
  {
    kicker: "First visit",
    title: "Three nights in London, then one other place",
    note: "Do not collect cities. Edinburgh, York or Bath is the second half of a first week.",
    to: "briefing",
    slug: "a-first-week-beyond-london",
  },
  {
    kicker: "The capital",
    title: "London, refusing the queue",
    note: "One neighbourhood, the river, and a free museum. Leave the guard change to people who enjoy timetables.",
    to: "briefing",
    slug: "london-without-the-queue",
  },
  {
    kicker: "Four nights",
    title: "Edinburgh, and not as a day trip",
    note: "The castle in the morning, a walk, and one evening that is not the Royal Mile.",
    to: "place",
    slug: "edinburgh",
  },
  {
    kicker: "On foot",
    title: "York for a weekend",
    note: "Walls, the Minster, and a local train to the coast if the weather is kind.",
    to: "place",
    slug: "york",
  },
  {
    kicker: "A long weekend",
    title: "Bath, then stop",
    note: "The crescent and the baths. Do not bolt on Stonehenge and pretend it was next door.",
    to: "place",
    slug: "bath",
  },
  {
    kicker: "If you will be rained on",
    title: "The Lakes, with dignity",
    note: "One valley, not the whole park. A car only if the village is off the branch line.",
    to: "place",
    slug: "lake-district",
  },
  {
    kicker: "By train",
    title: "Canterbury between breakfast and Evensong",
    note: "An hour from St Pancras. The cathedral is the reason. The high street is not.",
    to: "place",
    slug: "canterbury",
  },
  {
    kicker: "The sea, quickly",
    title: "Brighton when London has gone airless",
    note: "Pebbles, a pavilion, and a walk west to Hove. Not a quaint village.",
    to: "place",
    slug: "brighton",
  },
  {
    kicker: "A proper city",
    title: "Bristol, which Bath’s visitors skip",
    note: "The bridge, the harbour, and supper away from the pontoon.",
    to: "place",
    slug: "bristol",
  },
  {
    kicker: "Walls",
    title: "Chester on the way into Wales",
    note: "Walk the full circuit. Conwy can be tomorrow.",
    to: "place",
    slug: "chester",
  },
  {
    kicker: "Rain in the north",
    title: "Manchester, with a museum and a plan for the evening",
    note: "Free galleries, a canal, and the door to the Peak District the next morning.",
    to: "place",
    slug: "manchester",
  },
  {
    kicker: "The stones",
    title: "Salisbury the night before Stonehenge",
    note: "Book a time for the circle. Spend the rest of the day in the close, not on a coach.",
    to: "place",
    slug: "salisbury",
  },
  {
    kicker: "A ridge walk",
    title: "One section of Hadrian’s Wall",
    note: "Housesteads and two hours on the crags. Not the whole line from a car window.",
    to: "place",
    slug: "hadrians-wall",
  },
  {
    kicker: "Further north",
    title: "Inverness as a hinge, not a holiday",
    note: "Sleep here before Skye, the Kyle line, or the Cairngorms. The loch is not the town.",
    to: "place",
    slug: "inverness",
  },
  {
    kicker: "The west of Wales",
    title: "St Davids, and the path rather than the gift shop",
    note: "Two nights. It is not on the way to anywhere, which is why it works.",
    to: "place",
    slug: "st-davids",
  },
  {
    kicker: "Without a car",
    title: "Scotland on the railway",
    note: "Edinburgh, then the line north. Glenfinnan is a stop, not a quest.",
    to: "briefing",
    slug: "scotland-north-of-edinburgh",
  },
  {
    kicker: "A wet day",
    title: "The free national museums",
    note: "General admission still costs nothing. Use that fact instead of buying a hop-on bus in the rain.",
    to: "briefing",
    slug: "free-museums-and-what-they-are-for",
  },
  {
    kicker: "Four days",
    title: "Belfast and the coast, without a costume history",
    note: "The city, the causeway, and enough time to let the place speak for itself.",
    to: "briefing",
    slug: "northern-ireland-long-weekend",
  },
];

const STOP = new Set([
  "that",
  "this",
  "with",
  "from",
  "your",
  "have",
  "what",
  "when",
  "where",
  "which",
  "would",
  "could",
  "should",
  "about",
  "there",
  "their",
  "them",
  "they",
  "into",
  "than",
  "then",
  "some",
  "just",
  "like",
  "want",
  "need",
  "trip",
  "days",
  "day",
]);

function words(text: string): string[] {
  return text
    .toLowerCase()
    .split(/[^a-z]+/)
    .filter((w) => w.length > 3 && !STOP.has(w));
}

export type IndexHit = {
  kind: "Briefing" | "Place";
  slug: string;
  title: string;
  note: string;
};

export function searchIndex(query: string): { briefings: Briefing[]; places: Place[] } {
  const q = query.trim().toLowerCase();
  if (!q) return { briefings: [], places: [] };
  const keys = words(q);
  const hit = (blob: string) => {
    const b = blob.toLowerCase();
    if (b.includes(q)) return true;
    return keys.some((k) => b.includes(k));
  };
  return {
    briefings: briefings.filter((b) =>
      hit([b.title, b.dek, b.topic, b.nation, b.kicker, ...b.sections.flatMap((s) => [s.heading, ...s.paragraphs])].join(" ")),
    ),
    places: places.filter((p) =>
      hit([p.name, p.region, p.nation, p.epithet, p.eat, p.getThere, ...p.bestFor, ...p.overview].join(" ")),
    ),
  };
}

export function relatedTo(text: string, limit = 4): IndexHit[] {
  const keys = words(text);
  if (!keys.length) return [];
  const scoreBlob = (blob: string) => {
    const set = new Set(blob.toLowerCase().split(/[^a-z]+/).filter(Boolean));
    return keys.reduce((n, k) => n + (set.has(k) ? 1 : 0), 0);
  };
  const hits: (IndexHit & { score: number })[] = [
    ...briefings.map((b) => ({
      kind: "Briefing" as const,
      slug: b.slug,
      title: b.title,
      note: b.dek,
      score: scoreBlob([b.title, b.dek, b.topic, b.nation].join(" ")),
    })),
    ...places.map((p) => ({
      kind: "Place" as const,
      slug: p.slug,
      title: p.name,
      note: p.epithet,
      score: scoreBlob([p.name, p.region, p.nation, p.epithet, ...p.bestFor].join(" ")) + (keys.includes(p.name.toLowerCase()) ? 2 : 0),
    })),
  ];
  return hits
    .filter((h) => h.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}

export function getBriefing(slug: string): Briefing | undefined {
  return briefings.find((b) => b.slug === slug);
}

export function getPlace(slug: string): Place | undefined {
  return places.find((p) => p.slug === slug);
}

export function gazetteer(): string {
  const papers = briefings.map((b) => `${b.number} ${b.title} (${b.topic}): ${b.dek}`).join("\n");
  const spots = places
    .map(
      (p) =>
        `${p.name}, ${p.region} (${p.nation}). ${p.epithet} Stay ${p.stay}. Best for ${p.bestFor.join(", ")}. Get there: ${p.getThere} Watch: ${p.watch}`,
    )
    .join("\n");
  return `BRIEFINGS:\n${papers}\n\nPLACES:\n${spots}`;
}
