import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { briefings, TOPICS, type Topic } from "@/lib/content";

export const Route = createFileRoute("/briefings/")({
  component: BriefingsPage,
  head: () => ({
    meta: [
      { title: "Briefings · Index UK" },
      { name: "description", content: "White papers on the United Kingdom: how the country is arranged, how to travel it, and what is worth your time." },
    ],
  }),
});

function BriefingsPage() {
  const [topic, setTopic] = useState<Topic | "All">("All");
  const listed = useMemo(
    () => briefings.filter((b) => topic === "All" || b.topic === topic),
    [topic],
  );

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 md:px-6">
      <p className="text-xs tracking-[0.18em] text-rule uppercase">The papers</p>
      <h1 className="mt-3 max-w-2xl font-display text-4xl text-ink md:text-5xl">Briefings</h1>
      <p className="mt-4 max-w-2xl font-display text-lg leading-relaxed text-muted">
        Short papers on the kingdom as a place you can actually use — not a slogan, and not a queue.
      </p>
      <div className="mt-6 flex gap-2 overflow-x-auto pb-1">
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
      <ol className="mt-6">
        {listed.map((b) => (
          <li key={b.slug} className="border-b border-line">
            <Link to="/briefings/$slug" params={{ slug: b.slug }} className="group grid gap-1 py-5 md:grid-cols-12 md:gap-4">
              <span className="font-display text-rule tabular-nums md:col-span-1">{b.number}</span>
              <span className="md:col-span-7">
                <span className="font-display text-2xl text-ink group-hover:text-rule">{b.title}</span>
                <span className="mt-1 block text-sm leading-relaxed text-muted">{b.dek}</span>
              </span>
              <span className="text-sm text-muted md:col-span-4 md:text-right">
                {b.topic}
                <span className="mx-2 text-line">/</span>
                {b.nation}
                <span className="mx-2 text-line">/</span>
                {b.minutes} min
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </main>
  );
}
