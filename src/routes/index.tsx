import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { DexterCorner } from "@/components/dexter-corner";
import { PhotoFrame } from "@/components/photo-frame";
import { briefings, places, searchIndex, type Topic, TOPICS } from "@/lib/content";
import { useDesk } from "@/lib/desk-store";
import { countryside, landmarks, photosFor } from "@/lib/photos";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Index UK — the country, and Dexter" },
      {
        name: "description",
        content:
          "Buckingham Palace, the Elizabeth Tower and the rest of the country — with Dexter, a gentleman in the corner, if you would rather ask.",
      },
      { property: "og:title", content: "Index UK" },
      { property: "og:url", content: "https://indexuk.com/" },
    ],
    links: [{ rel: "canonical", href: "https://indexuk.com/" }],
  }),
});

const ARRIVALS = [
  {
    from: "From the United States",
    note: "An ETA before you fly, then Heathrow if London is the first night. The Elizabeth line does the rest.",
    ask: "I'm flying from New York. What do I need before I board, and how do I get from Heathrow into town?",
  },
  {
    from: "From Europe by train",
    note: "Eurostar arrives at St Pancras. You are already in London. Sleep near the station or Bloomsbury, not at an airport.",
    ask: "Eurostar from Paris for three nights. Where should I stay, and what is worth doing on foot?",
  },
  {
    from: "A long haul from Asia or the Gulf",
    note: "Land where you mean to wake up. Heathrow for London, Manchester for the north, Edinburgh if Scotland is the point.",
    ask: "I'm flying in from Singapore, jet-lagged. Give me a gentle first forty-eight hours in London.",
  },
  {
    from: "This website",
    note: "Briefings, an atlas, and Dexter. The pictures are the country. The papers are how it fits together.",
    ask: "What is Index UK, and how should I use it if I have one week and no car?",
  },
];

function Home() {
  const [q, setQ] = useState("");
  const [topic, setTopic] = useState<Topic | "All">("All");
  const results = useMemo(() => (q.trim() ? searchIndex(q) : null), [q]);
  const listed = (results ? results.briefings : briefings).filter((b) => topic === "All" || b.topic === topic);
  const placeHits = results?.places ?? [];
  const lead = briefings[1] ?? briefings[0];
  const setOpen = useDesk((s) => s.setOpen);
  const send = useDesk((s) => s.send);
  const palace = landmarks.find((frame) => frame.title === "Buckingham Palace") ?? landmarks[0];
  const tower = landmarks.find((frame) => frame.title === "Elizabeth Tower") ?? landmarks[1];
  const castle = landmarks.find((frame) => frame.title === "Edinburgh Castle") ?? landmarks[2];

  function askDexter(text: string) {
    setOpen(true);
    void send(text);
  }

  return (
    <main className="pb-24">
      <section className="border-b border-ink">
        <div className="grid min-h-[calc(100svh-3.6rem)] grid-cols-1 md:h-[calc(100svh-3.6rem)] md:grid-cols-12">
          <div className="relative min-h-[62vh] md:col-span-8">
            <img src={palace.src} alt={palace.alt} className="absolute inset-0 h-full w-full object-cover" />
            <div className="hero-scrim absolute inset-0" />
            <div className="relative flex h-full min-h-[62vh] flex-col justify-end px-4 py-8 md:min-h-full md:px-8 md:py-12">
              <p className="text-xs tracking-[0.18em] text-night-fg/80 uppercase">Index UK · Vol. I · September 2026</p>
              <h1 className="mt-3 max-w-xl font-display text-5xl leading-[1.02] text-night-fg md:text-6xl">
                The index of the United Kingdom.
              </h1>
              <p className="mt-4 max-w-lg font-display text-xl leading-relaxed text-night-fg md:text-2xl">
                Palaces, towers and the country around them. Dexter waits in the corner.
              </p>
            </div>
          </div>
          <div className="grid min-h-72 grid-cols-2 md:col-span-4 md:h-full md:min-h-0 md:grid-cols-1 md:grid-rows-2">
            <div className="relative min-h-44">
              <img src={tower.src} alt={tower.alt} className="absolute inset-0 h-full w-full object-cover" />
            </div>
            <div className="relative min-h-44 border-l border-ink md:border-t md:border-l-0">
              <img src={castle.src} alt={castle.alt} className="absolute inset-0 h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-ink">
        <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
          <p className="text-xs tracking-[0.18em] text-rule uppercase">Arriving</p>
          <h2 className="mt-2 max-w-2xl font-display text-3xl text-ink md:text-4xl">
            The country begins before you land.
          </h2>
          <ul className="mt-6 grid gap-px bg-line sm:grid-cols-2">
            {ARRIVALS.map((item) => (
              <li key={item.from} className="bg-paper">
                <button
                  type="button"
                  onClick={() => askDexter(item.ask)}
                  className="block h-full w-full p-5 text-left transition-colors duration-200 hover:bg-card"
                >
                  <span className="text-xs tracking-wide text-rule uppercase">{item.from}</span>
                  <span className="mt-2 block font-display text-lg leading-snug text-ink">{item.note}</span>
                  <span className="mt-3 block text-sm text-ink underline decoration-line underline-offset-4">
                    Ask Dexter
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="significance" className="border-b border-ink">
        <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
          <p className="text-xs tracking-[0.18em] text-rule uppercase">Places of significance</p>
          <h2 className="mt-2 max-w-2xl font-display text-3xl text-ink md:text-4xl">
            Towers, palaces, stones and a causeway.
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
            {landmarks.map((frame) => (
              <PhotoFrame key={frame.src} frame={frame} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-ink bg-paper-2">
        <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
          <p className="text-xs tracking-[0.18em] text-rule uppercase">Countryside</p>
          <h2 className="mt-2 max-w-2xl font-display text-3xl text-ink md:text-4xl">
            Fells, glens, coves and a lane of honey stone.
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
            {countryside.map((frame) => (
              <PhotoFrame key={frame.src} frame={frame} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-12 md:px-6">
          <div className="md:col-span-7">
            <p className="text-xs tracking-wide text-muted uppercase">Lead paper · {lead.number}</p>
            <h2 className="mt-2 font-display text-3xl text-ink md:text-4xl">
              <Link to="/briefings/$slug" params={{ slug: lead.slug }} className="hover:text-rule">
                {lead.title}
              </Link>
            </h2>
            <p className="mt-3 font-display text-lg leading-relaxed text-muted">{lead.dek}</p>
            <p className="mt-4 text-sm text-muted">
              {lead.minutes} min · {lead.topic}
            </p>
          </div>
          <aside className="border border-line bg-card p-5 md:col-span-5">
            <p className="text-xs tracking-wide text-rule uppercase">How to use the index</p>
            <p className="mt-2 font-display text-2xl leading-snug text-ink">Pictures first. Papers when you want the argument.</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Dexter will name the briefing. The atlas will tell you where to sleep. Neither of them sells you a ticket.
            </p>
            <Link to="/briefings" className="mt-4 inline-flex bg-ink px-4 py-3 text-sm text-card">
              Read the briefings
            </Link>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 md:px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-display text-3xl text-ink">Contents</h2>
            <p className="mt-1 text-sm text-muted">
              {briefings.length} briefings · {places.length} places
            </p>
          </div>
          <label className="block w-full md:max-w-sm">
            <span className="sr-only">Search the index</span>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search York, rail, Sunday, Wales…"
              className="w-full border border-line bg-card px-3 py-3 text-ink placeholder:text-muted"
            />
          </label>
        </div>

        <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
          {(["All", ...TOPICS] as const).map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTopic(t)}
              className={`shrink-0 border px-3 py-2 text-sm ${topic === t ? "border-ink bg-ink text-card" : "border-line bg-card text-ink"}`}
            >
              {t}
            </button>
          ))}
        </div>

        {q.trim() && placeHits.length > 0 && (
          <ul className="mt-6 divide-y divide-line border-y border-line">
            {placeHits.map((p) => (
              <li key={p.slug}>
                <Link to="/places/$slug" params={{ slug: p.slug }} className="flex items-baseline gap-3 py-3 hover:text-rule">
                  <span className="text-xs tracking-wide text-rule uppercase">Place</span>
                  <span className="font-display text-lg">{p.name}</span>
                  <span className="text-sm text-muted">{p.region}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}

        <ol className="mt-4">
          {listed.map((b) => (
            <li key={b.slug} className="border-b border-line">
              <Link to="/briefings/$slug" params={{ slug: b.slug }} className="group flex items-baseline gap-3 py-3">
                <span className="w-8 shrink-0 font-display text-rule tabular-nums">{b.number}</span>
                <span className="font-display text-lg text-ink group-hover:text-rule md:text-xl">{b.title}</span>
                <span className="mx-1 hidden flex-1 border-b border-dotted border-line sm:block" />
                <span className="hidden text-sm text-muted sm:inline">{b.minutes} min</span>
              </Link>
            </li>
          ))}
          {listed.length === 0 && (
            <li className="py-8 text-muted">Nothing in the index under that. Try a place name or a nation.</li>
          )}
        </ol>
      </section>

      <section className="border-t border-ink bg-paper-2">
        <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-display text-3xl text-ink">Atlas</h2>
            <Link to="/places" className="text-sm text-ink underline decoration-line underline-offset-4 hover:text-rule">
              All places
            </Link>
          </div>
          <ul className="mt-6 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
            {places.map((p) => {
              const shot = photosFor(p.slug)[0];
              return (
                <li key={p.slug} className="bg-paper">
                  <Link to="/places/$slug" params={{ slug: p.slug }} className="group block h-full hover:bg-card">
                    {shot && <img src={shot.src} alt={shot.alt} loading="lazy" className="aspect-[3/2] w-full object-cover" />}
                    <span className="block p-4">
                      <span className="text-xs tracking-wide text-muted uppercase">
                        {p.nation} · {p.region}
                      </span>
                      <span className="mt-1 block font-display text-2xl text-ink group-hover:text-rule">{p.name}</span>
                      <span className="mt-2 block text-sm leading-relaxed text-muted">{p.epithet}</span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <DexterCorner />
    </main>
  );
}