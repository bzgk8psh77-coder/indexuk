import { createFileRoute } from "@tanstack/react-router";
import { DeskChat } from "@/components/desk-chat";
import { SITE } from "@/lib/seo";

export const Route = createFileRoute("/ask")({
  component: AskPage,
  head: () => ({
    meta: [
      { title: "Dexter · Index UK" },
      {
        name: "description",
        content:
          "Dexter keeps the desk at Index UK. Ask about England, Scotland, Wales, Northern Ireland, or how to travel here from abroad.",
      },
    ],
    links: [{ rel: "canonical", href: `${SITE}/ask` }],
  }),
});

function AskPage() {
  return (
    <main className="mx-auto flex min-h-[calc(100svh-8rem)] max-w-6xl flex-col px-0 md:px-6 md:py-8">
      <div className="border border-ink bg-paper md:grid md:min-h-[70vh] md:grid-cols-12">
        <aside className="border-b border-line md:col-span-4 md:border-r md:border-b-0">
          <img
            src="/photos/dexter.jpg"
            alt="Dexter, in a black top hat and monocle, with a curled moustache, the Elizabeth Tower behind him."
            className="aspect-[4/5] w-full object-cover object-[center_46%] md:aspect-[3/4]"
          />
          <div className="p-5 md:p-6">
            <p className="text-xs tracking-[0.18em] text-rule uppercase">The desk</p>
            <h1 className="mt-3 font-display text-4xl leading-tight text-ink">Dexter keeps it.</h1>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Ask about the country, this index, or the journey from wherever you are starting. He will not invent today’s
              opening hours, and he will not sell you a ticket.
            </p>
            <dl className="mt-6 space-y-4 text-sm">
              <div>
                <dt className="text-xs tracking-wide text-muted uppercase">He is useful on</dt>
                <dd className="mt-1 text-ink">Arrivals, rail, wet Sundays, where to sleep, and which page of the index to open.</dd>
              </div>
              <div>
                <dt className="text-xs tracking-wide text-muted uppercase">The four</dt>
                <dd className="mt-1 text-ink">England, Scotland, Wales, Northern Ireland — and a clear line around what is not the UK.</dd>
              </div>
            </dl>
          </div>
        </aside>
        <section className="flex min-h-[70vh] flex-col md:col-span-8">
          <DeskChat />
        </section>
      </div>
    </main>
  );
}
