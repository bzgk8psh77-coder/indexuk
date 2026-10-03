import { createFileRoute, Link } from "@tanstack/react-router";
import { directoryListings } from "@/lib/directory";
import { SITE } from "@/lib/seo";

export const Route = createFileRoute("/directory/")({
  component: DirectoryHome,
  head: () => ({
    meta: [
      { title: "UK business index · Index UK" },
      {
        name: "description",
        content:
          "A public index of UK businesses, starting with places to eat. Listings come from the Food Standards Agency. Businesses can claim, correct, or remove a record.",
      },
    ],
    links: [{ rel: "canonical", href: `${SITE}/directory` }],
  }),
});

function DirectoryHome() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 md:px-6 md:py-16">
      <p className="text-xs tracking-[0.18em] text-rule uppercase">Directory</p>
      <h1 className="mt-3 font-display text-4xl leading-[1.05] text-ink md:text-6xl">A public index of UK businesses.</h1>
      <p className="mt-4 font-display text-xl leading-relaxed text-muted">
        The country, and the people who keep a door open in it. This is the start of that index. It is compiled from
        public registers, not bought from a map, and a business can ask for a line to be corrected or taken down.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-muted">
        The first sector is places to eat: forty kitchens in London, Manchester, Edinburgh, Cardiff and Belfast, each
        with a strong result on the Food Standards Agency register as of 3 October 2026. A hygiene rating is not a
        review of the cooking. Comments from people who have been are separate, and they are opinions, not ours.
      </p>

      <Link to="/directory/places-to-eat" className="mt-8 block border border-ink bg-card p-6 hover:bg-paper">
        <p className="text-xs tracking-wide text-rule uppercase">Open</p>
        <p className="mt-2 font-display text-3xl text-ink">Places to eat</p>
        <p className="mt-2 text-sm text-muted">{directoryListings.length} listings · five cities · visitor comments on each</p>
      </Link>

      <section className="mt-10 border-t border-line pt-8">
        <h2 className="font-display text-2xl text-ink">For business owners</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          If this is your business, you can claim the listing, correct an address, or ask for it to be removed. Write
          to{" "}
          <a className="text-ink underline decoration-line underline-offset-4" href="mailto:info@indexuk.com?subject=Business%20listing">
            info@indexuk.com
          </a>{" "}
          with the name and the city. A featured place on this index — above the public list — is how the directory
          will earn its keep. That is not for sale yet. The list you see is not paid for.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Personal data is kept to what a business has already published, or what a reviewer chooses to sign. To ask
          for a review to be deleted, use the same address. Full notice sits on each listing.
        </p>
      </section>
    </main>
  );
}
