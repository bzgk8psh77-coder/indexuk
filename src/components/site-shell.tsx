import { Link, useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { DeskChat } from "@/components/desk-chat";
import { useDesk } from "@/lib/desk-store";

const NAV = [
  { to: "/briefings", label: "Briefings" },
  { to: "/places", label: "Places" },
  { to: "/directory", label: "Directory" },
  { to: "/letter", label: "The Ten" },
  { to: "/ask", label: "Dexter" },
] as const;

function Wordmark() {
  return (
    <Link to="/" className="flex items-center">
      <img src="/brand/indexuk.png" alt="indexuk.com" className="h-12 w-auto md:h-16" />
    </Link>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [menuOpen, setMenuOpen] = useState(false);
  const open = useDesk((s) => s.open);
  const setOpen = useDesk((s) => s.setOpen);
  const voiceOn = useDesk((s) => s.voiceOn);
  const setVoiceOn = useDesk((s) => s.setVoiceOn);
  const onAsk = path.startsWith("/ask");

  function openDexter() {
    if (onAsk) return;
    setOpen(true);
  }

  useEffect(() => {
    setMenuOpen(false);
    useDesk.getState().setOpen(false);
  }, [path]);

  useEffect(() => {
    if (!open && !menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    const id = window.setTimeout(() => document.getElementById("desk-draft-compact")?.focus(), 40);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.clearTimeout(id);
    };
  }, [open, menuOpen, setOpen]);

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-30 border-b border-ink bg-paper/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2 md:px-6">
          <Wordmark />
          <div className="flex items-center gap-3 md:gap-6">
            {!onAsk && (
              <button
                type="button"
                aria-expanded={open}
                aria-controls="dexter-float"
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 border border-ink bg-paper py-1 pr-3 pl-1 text-left"
              >
                <img
                  src="/photos/dexter-face.jpg"
                  alt=""
                  className="size-10 object-cover object-[center_68%]"
                />
                <span>
                  <span className="block font-display text-base leading-none text-ink">Dexter</span>
                  <span className="mt-0.5 block text-[0.65rem] tracking-[0.16em] text-rule uppercase">Ask</span>
                </span>
              </button>
            )}
            <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
            {NAV.map((item) => {
              const active = path === item.to || path.startsWith(`${item.to}/`);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`text-sm tracking-wide uppercase ${active ? "text-rule" : "text-ink hover:text-rule"}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center border border-line md:hidden"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="border-t border-line bg-paper px-4 py-3 md:hidden">
            <nav className="flex flex-col" aria-label="Mobile">
              {NAV.map((item) => (
                <Link key={item.to} to={item.to} className="py-3 text-lg font-display text-ink">
                  {item.label}
                </Link>
              ))}
              {!onAsk && (
                <button
                  type="button"
                  className="mt-2 bg-rule px-3 py-3 text-left text-card"
                  onClick={() => {
                    setMenuOpen(false);
                    openDexter();
                  }}
                >
                  Ask Dexter
                </button>
              )}
            </nav>
          </div>
        )}
      </header>

      <div className="flex-1">{children}</div>

      <footer className="border-t border-ink">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 md:grid-cols-3 md:px-6">
          <div>
            <img src="/brand/indexuk.png" alt="" className="h-10 w-auto" />
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">
              White papers for one country, and Dexter at the desk — the journey in, and the day once you are here.
            </p>
          </div>
          <div className="text-sm leading-relaxed text-muted">
            <p>England, Scotland, Wales and Northern Ireland.</p>
            <p className="mt-2">
              Crown Dependencies and Overseas Territories are neighbours, not members. The Republic of Ireland is a separate state.
            </p>
          </div>
          <div className="text-sm text-muted">
            <p>
              Email us:{" "}
              <a className="text-ink underline decoration-line underline-offset-4 hover:text-rule" href="mailto:info@indexuk.com">
                info@indexuk.com
              </a>
            </p>
            <p className="mt-2">
              <Link to="/letter" className="text-ink underline decoration-line underline-offset-4 hover:text-rule">
                The ten
              </Link>
              {" — the must-attend events in the UK, named on the first of every month."}
            </p>
            <p className="mt-2">
              <Link to="/directory" className="text-ink underline decoration-line underline-offset-4 hover:text-rule">
                The business index
              </Link>
              {" — places to eat, from the public register. Claim or correct a listing by email."}
            </p>
            <p className="mt-2">Not a government site. Confirm times, tickets and tides before you travel.</p>
          </div>
        </div>
      </footer>

      {open && !onAsk && (
        <section
          id="dexter-float"
          aria-label="Ask Dexter"
          className="fixed top-[4.75rem] right-3 z-40 flex h-[min(26rem,62svh)] w-[min(22rem,calc(100vw-1.5rem))] flex-col overflow-hidden border border-ink bg-paper shadow-[6px_6px_0_#1c1915] md:top-[5.25rem]"
        >
          <header className="flex items-center justify-between gap-2 border-b border-line px-3 py-2">
            <p className="font-display text-lg leading-none text-ink">Dexter</p>
            <div className="flex items-center">
              <button
                type="button"
                aria-pressed={voiceOn}
                onClick={() => setVoiceOn(!voiceOn)}
                className="px-2 py-2 text-xs tracking-wide text-muted uppercase"
              >
                {voiceOn ? "Voice on" : "Voice off"}
              </button>
              <button type="button" className="inline-flex size-11 items-center justify-center" aria-label="Close Dexter" onClick={() => setOpen(false)}>
                <X className="size-5" />
              </button>
            </div>
          </header>
          <DeskChat compact />
        </section>
      )}
    </div>
  );
}
