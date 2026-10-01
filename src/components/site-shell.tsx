import { Link, useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { DeskChat } from "@/components/desk-chat";
import { useDesk } from "@/lib/desk-store";

const NAV = [
  { to: "/briefings", label: "Briefings" },
  { to: "/places", label: "Places" },
  { to: "/ask", label: "Dexter" },
] as const;

function Wordmark() {
  return (
    <Link to="/" className="flex items-center">
      <img src="/brand/indexuk.png" alt="indexuk.com" className="h-16 w-auto md:h-20" />
    </Link>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [menuOpen, setMenuOpen] = useState(false);
  const [deskOpen, setDeskOpen] = useState(false);
  const onAsk = path.startsWith("/ask");
  const onHome = path === "/";

  function openDexter() {
    if (onHome) {
      document.getElementById("dexter")?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    setDeskOpen(true);
  }

  useEffect(() => {
    setMenuOpen(false);
    setDeskOpen(false);
    useDesk.getState().setOpen(false);
  }, [path]);

  useEffect(() => {
    if (!deskOpen && !menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDeskOpen(false);
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [deskOpen, menuOpen]);

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-30 border-b border-ink bg-paper/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
          <Wordmark />
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
          <div className="flex items-center gap-2">
            {!onAsk && !onHome && (
              <button
                type="button"
                onClick={openDexter}
                className="hidden bg-rule px-3 py-2 text-sm text-card transition-colors duration-200 hover:bg-ink md:inline-flex"
              >
                Ask Dexter
              </button>
            )}
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
              {!onAsk && !onHome && (
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
            <img src="/brand/indexuk.png" alt="" className="h-12 w-auto" />
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
            <p>Dexter · September 2026</p>
            <p className="mt-2">Not a government site. Confirm times, tickets and tides before you travel.</p>
          </div>
        </div>
      </footer>

      {deskOpen && !onAsk && (
        <div className="fixed inset-0 z-40">
          <button
            type="button"
            className="absolute inset-0 bg-ink/40"
            aria-label="Close the desk"
            onClick={() => setDeskOpen(false)}
          />
          <div className="absolute inset-y-0 right-0 flex w-full max-w-md flex-col border-l border-ink bg-paper">
            <div className="flex items-center justify-between border-b border-line px-4 py-3">
            <div className="flex items-center gap-3">
              <img
                src="/photos/dexter-face.jpg"
                alt=""
                className="size-10 object-cover object-[center_68%]"
              />
              <p className="font-display text-lg">Dexter</p>
            </div>
              <button type="button" className="size-11" aria-label="Close" onClick={() => setDeskOpen(false)}>
                <X className="mx-auto size-5" />
              </button>
            </div>
            <DeskChat compact />
          </div>
        </div>
      )}
    </div>
  );
}
