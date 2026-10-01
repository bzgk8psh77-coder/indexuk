import type { Briefing, Place } from "./content";

export const SITE = "https://indexuk.com";

export function jsonLdScript(data: unknown) {
  return {
    type: "application/ld+json",
    children: JSON.stringify(data),
  };
}

export function siteGraph(extra: unknown[] = []) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE}/#organization`,
        name: "Index UK",
        url: SITE,
        logo: `${SITE}/brand/indexuk.png`,
        description:
          "An index of the United Kingdom: briefings, an atlas of places, and Dexter, a guide you can ask about travel and the country.",
        areaServed: ["England", "Scotland", "Wales", "Northern Ireland"],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE}/#website`,
        url: SITE,
        name: "Index UK",
        description:
          "White papers and photographs of the United Kingdom, with practical answers on sightseeing and arriving from abroad.",
        publisher: { "@id": `${SITE}/#organization` },
        inLanguage: "en-GB",
      },
      ...extra,
    ],
  };
}

export function placeJsonLd(place: Place) {
  return siteGraph([
    {
      "@type": "TouristDestination",
      name: place.name,
      description: place.epithet,
      url: `${SITE}/places/${place.slug}`,
      containedInPlace: {
        "@type": "Country",
        name: "United Kingdom",
      },
      touristType: place.bestFor,
    },
  ]);
}

export function briefingJsonLd(briefing: Briefing) {
  return siteGraph([
    {
      "@type": "Article",
      headline: briefing.title,
      description: briefing.dek,
      url: `${SITE}/briefings/${briefing.slug}`,
      inLanguage: "en-GB",
      author: { "@id": `${SITE}/#organization` },
      publisher: { "@id": `${SITE}/#organization` },
      about: briefing.nation === "UK-wide" ? "United Kingdom" : briefing.nation,
    },
  ]);
}
