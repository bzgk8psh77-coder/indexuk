import { DeskChat } from "@/components/desk-chat";
import { useDesk } from "@/lib/desk-store";

export function DexterTop() {
  const voiceOn = useDesk((s) => s.voiceOn);
  const setVoiceOn = useDesk((s) => s.setVoiceOn);

  return (
    <section id="dexter" className="scroll-mt-28 border-b border-ink bg-paper">
      <div className="grid md:grid-cols-12">
        <div className="relative min-h-56 md:col-span-4 md:min-h-[34rem]">
          <img
            src="/photos/dexter.jpg"
            alt="Dexter, in a black top hat and monocle, with a curled moustache, the Elizabeth Tower behind him."
            className="absolute inset-0 h-full w-full object-cover object-[center_42%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 px-4 py-4 md:px-6">
            <p className="font-display text-4xl leading-none text-night-fg">Dexter</p>
            <p className="mt-2 text-xs tracking-[0.16em] text-night-fg/80 uppercase">At the top of the index</p>
            <button
              type="button"
              aria-pressed={voiceOn}
              onClick={() => setVoiceOn(!voiceOn)}
              className="mt-3 border border-night-fg/40 px-3 py-2 text-sm text-night-fg"
            >
              {voiceOn ? "British voice on" : "British voice off"}
            </button>
          </div>
        </div>
        <div className="flex h-[min(34rem,72svh)] min-h-0 flex-col md:col-span-8 md:h-auto md:min-h-[34rem]">
          <DeskChat />
        </div>
      </div>
    </section>
  );
}
