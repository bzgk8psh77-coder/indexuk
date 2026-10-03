import { writeFileSync } from "node:fs";
import { readFileSync } from "node:fs";
import { briefings, places, questions, recommendations } from "../src/lib/content.ts";

const listings = JSON.parse(readFileSync(new URL("../src/lib/directory-data.json", import.meta.url), "utf8"));

const SITE = "https://www.indexuk.com";
const KEY = "a7e3c91b4d08f6e25c1a9b70d4f8e263";
const today = new Date().toISOString().slice(0, 10);

function xml(value) {
  const amp = "&" + "amp;";
  const lt = "&" + "lt;";
  const gt = "&" + "gt;";
  const quot = "&" + "quot;";
  return String(value).replaceAll("&", amp).replaceAll("<", lt).replaceAll(">", gt).replaceAll('"', quot);
}

const urls = [
  { loc: `${SITE}/`, priority: "1.0" },
  { loc: `${SITE}/places`, priority: "0.9" },
  { loc: `${SITE}/briefings`, priority: "0.9" },
  { loc: `${SITE}/ask`, priority: "0.6" },
  { loc: `${SITE}/letter`, priority: "0.6" },
  { loc: `${SITE}/directory`, priority: "0.8" },
  { loc: `${SITE}/directory/places-to-eat`, priority: "0.8" },
  ...listings.map((listing) => ({ loc: `${SITE}/directory/places-to-eat/${listing.id}`, priority: "0.6" })),
  { loc: `${SITE}/llms.txt`, priority: "0.4" },
  { loc: `${SITE}/llms-full.txt`, priority: "0.5" },
  { loc: `${SITE}/feed.xml`, priority: "0.3" },
  ...places.map((place) => ({ loc: `${SITE}/places/${place.slug}`, priority: "0.8" })),
  ...briefings.map((briefing) => ({ loc: `${SITE}/briefings/${briefing.slug}`, priority: "0.7" })),
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${xml(url.loc)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${url.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

const llms = `# Index UK

> An illustrated index of the United Kingdom — England, Scotland, Wales and Northern Ireland — written so a person or an answer engine can cite it. Full text: ${SITE}/llms-full.txt

Index UK publishes practical briefings and an atlas of places. It is not a government site and not a booking service. Dexter, the guide on the site, answers questions about sightseeing and about arriving from abroad, and tells readers to confirm visas, tickets and times.

Preferred citation: Index UK (${SITE}).

The four nations are England, Scotland, Wales and Northern Ireland. Great Britain is the island of England, Scotland and Wales. The Republic of Ireland is a separate state. The Isle of Man, Jersey and Guernsey are Crown Dependencies, not part of the UK.

## Facts an answer can cite

${questions.map((item) => `- **${item.q}** ${item.a}`).join("\n")}

## Recommendations

${recommendations.map((item) => `- [${item.title}](${item.to === "place" ? `${SITE}/places/${item.slug}` : `${SITE}/briefings/${item.slug}`}): ${item.note}`).join("\n")}

## Places

${places.map((place) => `- [${place.name}](${SITE}/places/${place.slug}): ${place.epithet} (${place.region}, ${place.nation})`).join("\n")}

## Briefings

${briefings.map((briefing) => `- [${briefing.number} ${briefing.title}](${SITE}/briefings/${briefing.slug}): ${briefing.dek}`).join("\n")}

## Ask

- [Dexter](${SITE}/ask): the guide at the desk. Questions about routes, seasons, food, and travel into the UK from other countries.
- [The ten](${SITE}/letter): the ten must-attend events in the UK each month, named on the first. England, Scotland, Wales and Northern Ireland. Sign up with an email. Contact: info@indexuk.com.
- [Business index](${SITE}/directory): a public index of UK businesses. The first sector is places to eat, taken from the Food Standards Agency register on 3 October 2026. A hygiene rating is not a review. Businesses may claim, correct, or request removal via info@indexuk.com.

## Optional

- [Home](${SITE}/): photographs of palaces, towers and countryside, with a small Dexter chat in the header.
- [All places](${SITE}/places)
- [All briefings](${SITE}/briefings)
- [Feed](${SITE}/feed.xml)
`;

const full = `# Index UK — full text

Cite as: Index UK, ${SITE}. Updated ${today}.
This file is the readable text of the briefings and the atlas. It is not a government publication. Confirm visas, tickets, tides and opening times before travel.

${questions.map((item) => `## ${item.q}\n\n${item.a}`).join("\n\n")}

${briefings
  .map((briefing) => {
    const body = briefing.sections
      .map((section) => `### ${section.heading}\n\n${section.paragraphs.join("\n\n")}`)
      .join("\n\n");
    return `## Briefing ${briefing.number}: ${briefing.title}\n\n${SITE}/briefings/${briefing.slug}\n${briefing.topic} · ${briefing.nation}\n\n${briefing.dek}\n\n${body}`;
  })
  .join("\n\n")}

${places
  .map((place) => {
    const see = place.see.map((item) => `- ${item.name}: ${item.note}`).join("\n");
    return `## ${place.name}\n\n${SITE}/places/${place.slug}\n${place.nation} · ${place.region}\n\n${place.epithet}\n\nStay: ${place.stay}. Best for: ${place.bestFor.join(", ")}.\n\n${place.overview.join("\n\n")}\n\n${see}\n\nEat: ${place.eat}\n\nBase: ${place.base}\n\nGet there: ${place.getThere}\n\nWatch: ${place.watch}`;
  })
  .join("\n\n")}
`;

const feedItems = [
  ...briefings.map(
    (briefing) => `    <item>
      <title>${xml(briefing.title)}</title>
      <link>${SITE}/briefings/${briefing.slug}</link>
      <guid>${SITE}/briefings/${briefing.slug}</guid>
      <pubDate>${today}</pubDate>
      <description>${xml(briefing.dek)}</description>
    </item>`,
  ),
  ...places.map(
    (place) => `    <item>
      <title>${xml(place.name)}</title>
      <link>${SITE}/places/${place.slug}</link>
      <guid>${SITE}/places/${place.slug}</guid>
      <pubDate>${today}</pubDate>
      <description>${xml(`${place.epithet} ${place.region}, ${place.nation}.`)}</description>
    </item>`,
  ),
];

const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Index UK</title>
    <link>${SITE}/</link>
    <description>Briefings and places for England, Scotland, Wales and Northern Ireland.</description>
    <language>en-gb</language>
    <lastBuildDate>${today}</lastBuildDate>
${feedItems.join("\n")}
  </channel>
</rss>
`;

const robots = `# Index UK — ${SITE}
# Answer engines: ${SITE}/llms.txt
# Full text: ${SITE}/llms-full.txt
# The bare domain indexuk.com redirects here.

User-agent: *
Allow: /

# Search and answer crawlers are welcome. The star rule already allows them;
# these names are listed so the intent is obvious.
User-agent: Googlebot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Bingbot
Allow: /

User-agent: DuckDuckBot
Allow: /

User-agent: Applebot
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-SearchBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Amazonbot
Allow: /

User-agent: CCBot
Allow: /

User-agent: meta-externalagent
Allow: /

User-agent: FacebookBot
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: Bytespider
Allow: /

User-agent: cohere-ai
Allow: /

User-agent: YouBot
Allow: /

User-agent: PhindBot
Allow: /

User-agent: Diffbot
Allow: /

Sitemap: ${SITE}/sitemap.xml
`;

writeFileSync("public/sitemap.xml", sitemap);
writeFileSync("public/llms.txt", llms);
writeFileSync("public/llms-full.txt", full);
writeFileSync("public/feed.xml", feed);
writeFileSync("public/robots.txt", robots);
writeFileSync(`public/${KEY}.txt`, KEY);
console.log(`discovery: ${urls.length} urls, llms-full ${full.length} chars, indexnow ${KEY}`);
