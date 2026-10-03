import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { joinLetter } from "@/lib/subscribe.functions";
import { SITE } from "@/lib/seo";

const NATIONS = ["England", "Scotland", "Wales", "Northern Ireland"] as const;

export const Route = createFileRoute("/letter")({
  component: LetterPage,
  head: () => ({
    meta: [
      { title: "The monthly letter · Index UK" },
      {
        name: "description",
        content:
          "Once a month, on the first, Index UK sends ten things coming up in England, Scotland, Wales and Northern Ireland.",
      },
    ],
    links: [{ rel: "canonical", href: `${SITE}/letter` }],
  }),
});

function LetterPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [nations, setNations] = useState<string[]>([...NATIONS]);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState("");

  function toggle(nation: string) {
    setNations((current) =>
      current.includes(nation) ? current.filter((item) => item !== nation) : [...current, nation],
    );
  }

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    setStatus("sending");
    setError("");
    try {
      await joinLetter({ data: { email, name, nations } });
      setStatus("done");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "The list did not take that. Try again in a moment.");
    }
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-10 md:px-6 md:py-16">
      <p className="text-xs tracking-[0.18em] text-rule uppercase">The letter</p>
      <h1 className="mt-3 font-display text-4xl text-ink md:text-6xl">Ten things, on the first.</h1>
      <p className="mt-4 max-w-xl font-display text-xl leading-relaxed text-muted">
        At the beginning of each month, Index UK writes to the people on this list. Ten things coming up — across
        England, Scotland, Wales and Northern Ireland. Not a stack of offers. A short list of what is worth leaving
        the house for.
      </p>

      <ul className="mt-8 grid gap-px bg-line sm:grid-cols-3">
        {[
          ["When", "The first of the month."],
          ["What", "Ten upcoming dates, one country."],
          ["How often", "Once. Then you can stop."],
        ].map(([title, note]) => (
          <li key={title} className="bg-paper p-4">
            <p className="text-xs tracking-wide text-rule uppercase">{title}</p>
            <p className="mt-2 font-display text-lg text-ink">{note}</p>
          </li>
        ))}
      </ul>

      {status === "done" ? (
        <div className="mt-10 border border-ink bg-card p-6">
          <p className="font-display text-3xl text-ink">You’re on the list.</p>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted">
            The next letter goes on the first. It will come from Index UK, to {email}. Nothing else will.
          </p>
          <Link to="/" className="mt-6 inline-flex text-sm underline decoration-line underline-offset-4">
            Back to the index
          </Link>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="mt-10 border border-ink bg-card p-5 md:p-8">
          <label className="block">
            <span className="text-xs tracking-wide text-muted uppercase">Email</span>
            <input
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              className="mt-2 w-full border border-line bg-paper px-3 py-3 text-lg text-ink placeholder:text-muted"
            />
          </label>
          <label className="mt-5 block">
            <span className="text-xs tracking-wide text-muted uppercase">Name, if you like</span>
            <input
              type="text"
              autoComplete="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="mt-2 w-full border border-line bg-paper px-3 py-3 text-lg text-ink"
            />
          </label>
          <fieldset className="mt-5">
            <legend className="text-xs tracking-wide text-muted uppercase">Which countries</legend>
            <div className="mt-2 flex flex-wrap gap-2">
              {NATIONS.map((nation) => {
                const on = nations.includes(nation);
                return (
                  <button
                    key={nation}
                    type="button"
                    aria-pressed={on}
                    onClick={() => toggle(nation)}
                    className={`border px-3 py-3 text-sm ${on ? "border-ink bg-ink text-card" : "border-line bg-paper text-ink"}`}
                  >
                    {nation}
                  </button>
                );
              })}
            </div>
            <p className="mt-2 text-sm text-muted">Leave them all on if the whole kingdom is the point.</p>
          </fieldset>
          {status === "error" && <p className="mt-4 text-sm text-rule">{error}</p>}
          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-6 bg-rule px-5 py-3 text-card disabled:opacity-60"
          >
            {status === "sending" ? "Adding you…" : "Put me on the list"}
          </button>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            The address is used for this letter only. Write to{" "}
            <a className="underline decoration-line underline-offset-4" href="mailto:info@indexuk.com">
              info@indexuk.com
            </a>{" "}
            if you want off it.
          </p>
        </form>
      )}
    </main>
  );
}
