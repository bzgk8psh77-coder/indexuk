import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { joinLetter } from "@/lib/subscribe.functions";
import { SITE } from "@/lib/seo";

const NATIONS = ["England", "Scotland", "Wales", "Northern Ireland"] as const;

export const Route = createFileRoute("/letter")({
  component: LetterPage,
  head: () => ({
    meta: [
      { title: "The ten must-attend events in the UK · Index UK" },
      {
        name: "description",
        content:
          "Each month Index UK names the ten events in the United Kingdom most worth attending — England, Scotland, Wales and Northern Ireland — and sends them on the first.",
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
      <p className="text-xs tracking-[0.18em] text-rule uppercase">The ten</p>
      <h1 className="mt-3 font-display text-4xl leading-[1.05] text-ink md:text-6xl">
        The ten must-attend events in the UK.
      </h1>
      <p className="mt-4 max-w-xl font-display text-xl leading-relaxed text-muted">
        Once a month, before the diary fills with things you will not remember, we name ten. A first night. A match
        under lights. A garden at its peak. A coast that only looks like this for a week. England, Scotland, Wales
        and Northern Ireland — the ones worth the train.
      </p>

      <ul className="mt-8 grid gap-px bg-line sm:grid-cols-3">
        {[
          ["The number", "Ten. Not a hundred. The ones you would tell a friend to book."],
          ["The country", "All four. London does not get to keep the month."],
          ["The morning", "The first. While the good seats still exist."],
        ].map(([title, note]) => (
          <li key={title} className="bg-paper p-4">
            <p className="text-xs tracking-wide text-rule uppercase">{title}</p>
            <p className="mt-2 font-display text-lg text-ink">{note}</p>
          </li>
        ))}
      </ul>

      {status === "done" ? (
        <div className="mt-10 border border-ink bg-card p-6">
          <p className="font-display text-3xl text-ink">The next ten are yours.</p>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted">
            On the first of the month they arrive at {email}. Ten events in the UK worth leaving the house for.
            Nothing else will.
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
            <legend className="text-xs tracking-wide text-muted uppercase">Where you want the ten to take you</legend>
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
            {status === "sending" ? "Saving your place…" : "Send me the ten"}
          </button>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            The address is used for the ten only. Write to{" "}
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
