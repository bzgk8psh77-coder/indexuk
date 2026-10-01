import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { briefings, getPlace } from "@/lib/content";
import { photosFor } from "@/lib/photos";
import { jsonLdScript, placeJsonLd, SITE } from "@/lib/seo";

export const Route = createFileRoute("/places/$slug")({
  loader: ({ params }) => {
    const place = getPlace(params.slug);
    if (!place) throw notFound();
    return place;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `${loaderData.name} · Index UK` : "Place · Index UK" },
      { name: "description", content: loaderData ? `${loaderData.name}, ${loaderData.region}. ${loaderData.epithet}` : "A place in the Index UK atlas." },
      { property: "og:title", content: loaderData ? `${loaderData.name} · Index UK` : "Index UK" },
      { property: "og:description", content: loaderData?.epithet ?? "" },
    ],
    links: loaderData ? [{ rel: "canonical", href: `${SITE}/places/${loaderData.slug}` }] : [],
    scripts: loaderData ? [jsonLdScript(placeJsonLd(loaderData))] : [],
  }),
  notFoundComponent: Missing,
  component: PlacePage,
});

function Missing() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 md:px-6">
      <p className="text-xs tracking-wide text-rule uppercase">Not in the atlas</p>
      <h1 className="mt-3 font-display text-4xl">That place is not indexed yet.</h1>
      <Link to="/places" className="mt-6 inline-flex text-sm underline decoration-line underline-offset-4">
        Back to places
      </Link>
    </main>
  );
}

function PlacePage() {
  const p = Route.useLoaderData();
  const papers = briefings.filter((b) => b.nation === p.nation || b.nation === "UK-wide").slice(0, 3);
  const shots = photosFor(p.slug);

  return (
    <main>
      {shots.length > 0 && (
        <div className={`grid ${shots.length > 1 ? "md:grid-cols-2" : ""}`}>
          {shots.map((shot) => (
            <figure key={shot.src} className="relative bg-night">
              <img src={shot.src} alt={shot.alt} className="aspect-[16/9] w-full object-cover md:aspect-[3/2]" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-night/80 px-4 py-2 text-sm text-night-fg">
                {shot.title}
                <span className="text-night-fg/75"> · {shot.place}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      )}
      <header className="border-b border-ink">
        <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
          <p className="text-sm text-muted">
            <Link to="/places" className="hover:text-rule">
              Places
            </Link>
            <span className="mx-2 text-line">/</span>
            {p.nation}
          </p>
          <p className="mt-6 text-xs tracking-[0.18em] text-rule uppercase">{p.region}</p>
          <h1 className="mt-2 font-display text-5xl text-ink md:text-6xl">{p.name}</h1>
          <p className="mt-4 max-w-2xl font-display text-xl leading-relaxed text-muted">{p.epithet}</p>
          <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <div>
              <dt className="text-xs tracking-wide text-muted uppercase">Stay</dt>
              <dd className="mt-1 text-ink">{p.stay}</dd>
            </div>
            <div>
              <dt className="text-xs tracking-wide text-muted uppercase">Best for</dt>
              <dd className="mt-1 text-ink">{p.bestFor.join(", ")}</dd>
            </div>
            <div>
              <dt className="text-xs tracking-wide text-muted uppercase">Base</dt>
              <dd className="mt-1 max-w-sm text-ink">{p.base}</dd>
            </div>
          </dl>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 md:grid-cols-12 md:px-6">
        <article className="space-y-4 md:col-span-7">
          {p.overview.map((para) => (
            <p key={para.slice(0, 32)} className="font-display text-lg leading-relaxed text-ink">
              {para}
            </p>
          ))}
          <h2 className="pt-4 font-display text-2xl">See</h2>
          <ul className="divide-y divide-line border-y border-line">
            {p.see.map((item) => (
              <li key={item.name} className="py-3">
                <p className="font-display text-lg">{item.name}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted">{item.note}</p>
              </li>
            ))}
          </ul>
        </article>
        <aside className="space-y-4 md:col-span-5">
          <Fact label="Eat" text={p.eat} />
          <Fact label="Get there" text={p.getThere} />
          <Fact label="Watch" text={p.watch} />
          <Link to="/ask" className="inline-flex bg-rule px-4 py-3 text-sm text-card">
            Ask the desk about {p.name}
          </Link>
        </aside>
      </div>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-4 py-8 md:px-6">
          <h2 className="text-xs tracking-wide text-muted uppercase">Related briefings</h2>
          <ul className="mt-3 grid gap-3 md:grid-cols-3">
            {papers.map((b) => (
              <li key={b.slug}>
                <Link to="/briefings/$slug" params={{ slug: b.slug }} className="block border border-line p-4 hover:border-ink">
                  <span className="text-rule tabular-nums">{b.number}</span>
                  <span className="mt-1 block font-display text-lg">{b.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

function Fact({ label, text }: { label: string; text: string }) {
  return (
    <div className="border border-line bg-card p-4">
      <p className="text-xs tracking-wide text-rule uppercase">{label}</p>
      <p className="mt-2 text-sm leading-relaxed text-ink">{text}</p>
    </div>
  );
}
