import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { NATIONS, places, type Nation } from "@/lib/content";
import { photosFor } from "@/lib/photos";
import { SITE } from "@/lib/seo";

export const Route = createFileRoute("/places/")({
  component: PlacesPage,
  head: () => ({
    meta: [
      { title: "Places · Index UK" },
      { name: "description", content: "An atlas of places in England, Scotland, Wales and Northern Ireland — where to stay, how long, and how to get there." },
    ],
    links: [{ rel: "canonical", href: `${SITE}/places` }],
  }),
});

function PlacesPage() {
  const [nation, setNation] = useState<Exclude<Nation, "UK-wide"> | "All">("All");
  const listed = useMemo(() => places.filter((p) => nation === "All" || p.nation === nation), [nation]);

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 md:px-6">
      <p className="text-xs tracking-[0.18em] text-rule uppercase">Atlas</p>
      <h1 className="mt-3 font-display text-4xl text-ink md:text-5xl">Places</h1>
      <p className="mt-4 max-w-2xl font-display text-lg leading-relaxed text-muted">
        Where to base yourself, how long to stay, and the one thing that usually goes wrong.
      </p>
      <div className="mt-6 flex gap-2 overflow-x-auto pb-1">
        {(["All", ...NATIONS] as const).map((n) => (
          <button
            key={n}
            type="button"
            onClick={() => setNation(n)}
            className={`shrink-0 border px-3 py-2 text-sm ${nation === n ? "border-ink bg-ink text-card" : "border-line bg-card text-ink"}`}
          >
            {n}
          </button>
        ))}
      </div>
      <ul className="mt-6 grid gap-px bg-line sm:grid-cols-2">
        {listed.map((p) => {
          const shot = photosFor(p.slug)[0];
          return (
          <li key={p.slug} className="bg-paper">
            <Link to="/places/$slug" params={{ slug: p.slug }} className="group block h-full hover:bg-card">
              {shot && (
                <img
                  src={shot.src}
                  alt={shot.alt}
                  loading="lazy"
                  className="aspect-[3/2] w-full object-cover"
                />
              )}
              <span className="block p-5">
                <span className="text-xs tracking-wide text-muted uppercase">
                  {p.nation} · {p.stay}
                </span>
                <span className="mt-1 block font-display text-3xl text-ink group-hover:text-rule">{p.name}</span>
                <span className="mt-2 block text-sm leading-relaxed text-muted">{p.epithet}</span>
                <span className="mt-3 block text-sm text-ink">{p.bestFor.join(" · ")}</span>
              </span>
            </Link>
          </li>
          );
        })}
      </ul>
    </main>
  );
}
