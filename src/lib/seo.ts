import { briefings, places, questions, recommendations, type Briefing, type Place } from "./content";
import { photosFor } from "./photos";

/** The host that answers. The bare name redirects here. */
export const SITE = "https://www.indexuk.com";
export const UPDATED = "2026-10-02";

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
        knowsAbout: [
          "United Kingdom",
          "England",
          "Scotland",
          "Wales",
          "Northern Ireland",
          "Travel to the United Kingdom",
          "UK Electronic Travel Authorisation",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE}/#website`,
        url: SITE,
        name: "Index UK",
        description:
          "A practical index of England, Scotland, Wales and Northern Ireland: where to go, how to arrive, and how the country fits together.",
        publisher: { "@id": `${SITE}/#organization` },
        inLanguage: "en-GB",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${SITE}/?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
      ...extra,
    ],
  };
}

function crumbs(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE}${item.path}`,
    })),
  };
}

export function placeJsonLd(place: Place) {
  const shot = photosFor(place.slug)[0];
  return siteGraph([
    crumbs([
      { name: "Index UK", path: "/" },
      { name: "Places", path: "/places" },
      { name: place.name, path: `/places/${place.slug}` },
    ]),
    {
      "@type": "TouristDestination",
      name: place.name,
      description: `${place.epithet} ${place.overview[0] ?? ""}`.trim(),
      url: `${SITE}/places/${place.slug}`,
      image: shot ? `${SITE}${shot.src}` : `${SITE}/og.jpg`,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: place.region,
        containedInPlace: { "@type": "Country", name: "United Kingdom" },
      },
      touristType: place.bestFor,
      dateModified: UPDATED,
    },
  ]);
}

export function briefingJsonLd(briefing: Briefing) {
  return siteGraph([
    crumbs([
      { name: "Index UK", path: "/" },
      { name: "Briefings", path: "/briefings" },
      { name: briefing.title, path: `/briefings/${briefing.slug}` },
    ]),
    {
      "@type": "Article",
      headline: briefing.title,
      description: briefing.dek,
      url: `${SITE}/briefings/${briefing.slug}`,
      mainEntityOfPage: `${SITE}/briefings/${briefing.slug}`,
      image: `${SITE}/og.jpg`,
      inLanguage: "en-GB",
      datePublished: "2026-09-15",
      dateModified: UPDATED,
      articleSection: briefing.topic,
      author: { "@id": `${SITE}/#organization` },
      publisher: { "@id": `${SITE}/#organization` },
      about: briefing.nation === "UK-wide" ? "United Kingdom" : briefing.nation,
    },
  ]);
}

export function homeJsonLd() {
  return siteGraph([
    {
      "@type": "FAQPage",
      mainEntity: questions.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
    {
      "@type": "ItemList",
      name: "Where to go in the United Kingdom",
      itemListElement: recommendations.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.title,
        url: item.to === "place" ? `${SITE}/places/${item.slug}` : `${SITE}/briefings/${item.slug}`,
      })),
    },
    {
      "@type": "ItemList",
      name: "Places in the Index UK atlas",
      numberOfItems: places.length,
      itemListElement: places.map((place, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: place.name,
        url: `${SITE}/places/${place.slug}`,
      })),
    },
    {
      "@type": "ItemList",
      name: "Index UK briefings",
      numberOfItems: briefings.length,
      itemListElement: briefings.map((briefing, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: briefing.title,
        url: `${SITE}/briefings/${briefing.slug}`,
      })),
    },
  ]);
}
