import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getBriefing, places } from "@/lib/content";
import { briefingJsonLd, jsonLdScript, SITE } from "@/lib/seo";

export const Route = createFileRoute("/briefings/$slug")({
  loader: ({ params }) => {
    const briefing = getBriefing(params.slug);
    if (!briefing) throw notFound();
    return briefing;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `${loaderData.title} · Index UK` : "Briefing · Index UK" },
      { name: "description", content: loaderData?.dek ?? "A briefing from Index UK." },
      { property: "og:title", content: loaderData ? `${loaderData.title} · Index UK` : "Index UK" },
      { property: "og:description", content: loaderData?.dek ?? "" },
    ],
    links: loaderData ? [{ rel: "canonical", href: `${SITE}/briefings/${loaderData.slug}` }] : [],
    scripts: loaderData ? [jsonLdScript(briefingJsonLd(loaderData))] : [],
  }),
  notFoundComponent: Missing,
  component: BriefingPage,
});

function Missing() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 md:px-6">
      <p className="text-xs tracking-wide text-rule uppercase">Not in the index</p>
      <h1 className="mt-3 font-display text-4xl">That briefing is not on the shelf.</h1>
      <Link to="/briefings" className="mt-6 inline-flex text-sm underline decoration-line underline-offset-4">
        Back to the briefings
      </Link>
    </main>
  );
}

function BriefingPage() {
  const b = Route.useLoaderData();
  const blob = `${b.title} ${b.dek} ${b.sections.map((s) => s.paragraphs.join(" ")).join(" ")}`.toLowerCase();
  const mentioned = places.filter((p) => blob.includes(p.name.toLowerCase()) || blob.includes(p.slug.replace(/-/g, " ")));
  const relatedPlaces = (mentioned.length ? mentioned : places.filter((p) => p.nation === b.nation)).slice(0, 3);

  return (
    <main className="mx-auto max-w-3xl px-4 py-10 md:px-6">
      <p className="text-sm text-muted">
        <Link to="/briefings" className="hover:text-rule">
          Briefings
        </Link>
        <span className="mx-2 text-line">/</span>
        <span className="tabular-nums text-rule">{b.number}</span>
      </p>
      <p className="mt-6 text-xs tracking-[0.18em] text-rule uppercase">
        {b.kicker} · {b.nation}
      </p>
      <h1 className="mt-3 font-display text-4xl leading-tight text-ink md:text-5xl">{b.title}</h1>
      <p className="mt-4 font-display text-xl leading-relaxed text-muted">{b.dek}</p>
      <p className="mt-4 text-sm text-muted">{b.minutes} minute read · Desk edition, September 2026</p>

      <div className="mt-10 space-y-10">
        {b.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="font-display text-2xl text-ink">{section.heading}</h2>
            <div className="mt-3 space-y-4">
              {section.paragraphs.map((para) => (
                <p key={para.slice(0, 24)} className="font-display text-lg leading-relaxed text-ink">
                  {para}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>

      {b.seeAlso.length > 0 && (
        <aside className="mt-12 border-t border-ink pt-6">
          <h2 className="text-xs tracking-wide text-muted uppercase">See also</h2>
          <ul className="mt-3 space-y-2">
            {b.seeAlso.map((slug) => {
              const other = getBriefing(slug);
              if (!other) return null;
              return (
                <li key={slug}>
                  <Link to="/briefings/$slug" params={{ slug }} className="font-display text-lg hover:text-rule">
                    <span className="mr-2 text-rule tabular-nums">{other.number}</span>
                    {other.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </aside>
      )}

      {relatedPlaces.length > 0 && (
        <aside className="mt-8 border-t border-line pt-6">
          <h2 className="text-xs tracking-wide text-muted uppercase">Places in this orbit</h2>
          <ul className="mt-3 grid gap-px bg-line sm:grid-cols-3">
            {relatedPlaces.map((p) => (
              <li key={p.slug} className="bg-paper">
                <Link to="/places/$slug" params={{ slug: p.slug }} className="block p-3 hover:bg-card">
                  <span className="font-display text-lg">{p.name}</span>
                  <span className="mt-1 block text-sm text-muted">{p.region}</span>
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      )}

      <p className="mt-10 text-sm text-muted">
        Want this turned into a plan?{" "}
        <Link to="/ask" className="text-ink underline decoration-line underline-offset-4 hover:text-rule">
          Ask the desk
        </Link>
        .
      </p>
    </main>
  );
}
