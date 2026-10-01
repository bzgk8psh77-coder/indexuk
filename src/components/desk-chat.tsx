import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { relatedTo, starters } from "@/lib/content";
import { useDesk } from "@/lib/desk-store";

const PORTRAIT = "/photos/dexter-face.jpg";

export function DeskChat({ compact = false }: { compact?: boolean }) {
  const messages = useDesk((s) => s.messages);
  const pending = useDesk((s) => s.pending);
  const error = useDesk((s) => s.error);
  const send = useDesk((s) => s.send);
  const clear = useDesk((s) => s.clear);
  const repeat = useDesk((s) => s.repeat);
  const voiceOn = useDesk((s) => s.voiceOn);
  const [draft, setDraft] = useState("");
  const endRef = useRef<HTMLDivElement>(null);
  const lastUser = [...messages].reverse().find((m) => m.role === "user")?.content ?? "";
  const related = relatedTo(lastUser || draft, 3);
  const fieldId = compact ? "desk-draft-compact" : "desk-draft";
  const prompts = starters.slice(0, compact ? 2 : 4);

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: "end" });
  }, [messages, pending, error]);

  function submit(text: string) {
    const value = text.trim();
    if (!value || pending) return;
    setDraft("");
    void send(value);
  }

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className={`min-h-0 flex-1 space-y-4 overflow-y-auto px-4 py-4 ${compact ? "" : "md:px-6"}`}>
        {messages.length === 0 && (
          <div>
            <div className="flex gap-3">
              <img
                src={PORTRAIT}
                alt=""
                className="size-12 shrink-0 object-cover object-[center_68%]"
              />
              <div>
                <p className="text-xs tracking-wide text-rule uppercase">Dexter</p>
                <p className="mt-1 font-display text-xl leading-snug text-ink">
                  The palace, the tower, a train from abroad. Ask, and I shall tell you what is worth the journey.
                </p>
              </div>
            </div>
            <ul className="mt-4 flex flex-col gap-2">
              {prompts.map((prompt) => (
                <li key={prompt}>
                  <button
                    type="button"
                    onClick={() => submit(prompt)}
                    className="w-full border border-line bg-card px-3 py-2.5 text-left text-sm leading-snug text-ink transition-colors duration-200 hover:border-ink"
                  >
                    {prompt}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {messages.map((m, i) => (
          <article
            key={`${i}-${m.role}`}
            className={m.role === "user" ? "ml-8 border-l-2 border-rule bg-paper-2 px-3 py-3" : "flex gap-3"}
          >
            {m.role === "assistant" && (
              <img src={PORTRAIT} alt="" className="size-9 shrink-0 object-cover object-[center_68%]" />
            )}
            <div>
              <p className="text-xs tracking-wide text-muted uppercase">{m.role === "user" ? "You" : "Dexter"}</p>
              <div className="mt-1 font-display text-base leading-relaxed whitespace-pre-wrap text-ink">{m.content}</div>
            </div>
          </article>
        ))}

        {pending && (
          <p className="flex items-center gap-3 text-sm text-muted" role="status">
            <img src={PORTRAIT} alt="" className="size-9 object-cover object-[center_68%]" />
            Dexter is considering that…
          </p>
        )}
        {error && (
          <p className="border border-rule bg-card px-3 py-3 text-sm leading-relaxed text-ink" role="alert">
            {error}
          </p>
        )}
        <div ref={endRef} />
      </div>

      {related.length > 0 && (lastUser || error) && (
        <div className="border-t border-line px-4 py-3">
          <p className="text-xs tracking-wide text-muted uppercase">In the index</p>
          <ul className="mt-2 flex flex-col gap-1">
            {related.map((hit) => (
              <li key={`${hit.kind}-${hit.slug}`}>
                {hit.kind === "Briefing" ? (
                  <Link
                    to="/briefings/$slug"
                    params={{ slug: hit.slug }}
                    className="text-sm text-ink underline decoration-line underline-offset-4 hover:text-rule"
                  >
                    Briefing: {hit.title}
                  </Link>
                ) : (
                  <Link
                    to="/places/$slug"
                    params={{ slug: hit.slug }}
                    className="text-sm text-ink underline decoration-line underline-offset-4 hover:text-rule"
                  >
                    Place: {hit.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      <form
        className="border-t border-ink bg-night p-3"
        onSubmit={(e) => {
          e.preventDefault();
          submit(draft);
        }}
      >
        <label htmlFor={fieldId} className="sr-only">
          Ask Dexter
        </label>
        <div className="flex gap-2">
          <input
            id={fieldId}
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="From Tokyo, a first week, or what this site is…"
            className="min-w-0 flex-1 bg-transparent px-2 py-2 text-night-fg placeholder:text-night-fg/50"
            disabled={pending}
          />
          <button
            type="submit"
            disabled={pending || !draft.trim()}
            className="bg-rule px-4 py-2 text-sm text-card disabled:opacity-50"
          >
            Send
          </button>
        </div>
        <p className="mt-2 px-2 text-xs leading-relaxed text-night-fg/60">
          Confirm visas, tickets and times before you go.
        </p>
        {messages.length > 0 && (
          <div className="mt-1 flex gap-3 px-2">
            {voiceOn && messages.some((m) => m.role === "assistant") && (
              <button type="button" onClick={repeat} className="text-xs text-night-fg/70 hover:text-night-fg">
                Hear that again
              </button>
            )}
            <button type="button" onClick={clear} className="text-xs text-night-fg/70 hover:text-night-fg">
              Clear this conversation
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
