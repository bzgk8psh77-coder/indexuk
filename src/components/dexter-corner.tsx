import { useEffect } from "react";
import { X } from "lucide-react";
import { DeskChat } from "@/components/desk-chat";
import { useDesk } from "@/lib/desk-store";

export function DexterCorner() {
  const open = useDesk((s) => s.open);
  const setOpen = useDesk((s) => s.setOpen);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const id = window.setTimeout(() => document.getElementById("desk-draft-compact")?.focus(), 40);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.clearTimeout(id);
    };
  }, [open, setOpen]);

  return (
    <div className="fixed right-3 bottom-3 z-40 flex flex-col items-end md:right-5 md:bottom-5">
      {open && (
        <section
          id="dexter-panel"
          aria-label="Ask Dexter"
          className="mb-3 flex h-[min(34rem,72svh)] w-[min(22.5rem,calc(100vw-1.5rem))] flex-col overflow-hidden border border-ink bg-paper shadow-[6px_6px_0_#1c1915]"
        >
          <header className="relative h-36 shrink-0">
            <img
              src="/photos/dexter.jpg"
              alt=""
              className="h-full w-full object-cover object-[center_66%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-ink/10" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 px-3 py-2">
              <div>
                <p className="font-display text-2xl leading-none text-night-fg">Dexter</p>
                <p className="mt-1 text-[0.68rem] tracking-[0.16em] text-night-fg/80 uppercase">Gentleman of the index</p>
              </div>
              <button
                type="button"
                className="inline-flex size-11 items-center justify-center text-night-fg"
                aria-label="Close Dexter"
                onClick={() => setOpen(false)}
              >
                <X className="size-5" />
              </button>
            </div>
          </header>
          <DeskChat compact />
        </section>
      )}

      <button
        type="button"
        aria-expanded={open}
        aria-controls="dexter-panel"
        onClick={() => setOpen(!open)}
        className={`flex items-center border border-ink bg-paper text-left shadow-[4px_4px_0_#1c1915] ${open ? "hidden" : ""}`}
      >
        <img
          src="/photos/dexter-face.jpg"
          alt=""
          className="size-16 object-cover object-[center_68%] sm:size-[4.5rem]"
        />
        <span className="px-3 py-2">
          <span className="block font-display text-lg leading-none text-ink">Dexter</span>
          <span className="mt-1 block text-xs text-muted">Ask the gentleman</span>
        </span>
      </button>
    </div>
  );
}
