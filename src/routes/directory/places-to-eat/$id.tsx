import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { getListing } from "@/lib/directory";
import { addReview, listReviews, type PublicReview } from "@/lib/reviews.functions";
import { jsonLdScript, SITE, siteGraph } from "@/lib/seo";

export const Route = createFileRoute("/directory/places-to-eat/$id")({
  loader: async ({ params }) => {
    const listing = getListing(params.id);
    if (!listing) throw notFound();
    const reviews = await listReviews({ data: { listingId: listing.id } });
    return { listing, reviews };
  },
  head: ({ loaderData }) => {
    const listing = loaderData?.listing;
    return {
      meta: [
        { title: listing ? `${listing.name} · Index UK` : "Listing · Index UK" },
        { name: "description", content: listing?.summary ?? "A UK business listing." },
        { property: "og:title", content: listing ? `${listing.name}, ${listing.city}` : "Index UK" },
      ],
      links: listing ? [{ rel: "canonical", href: `${SITE}/directory/places-to-eat/${listing.id}` }] : [],
      scripts: listing
        ? [
            jsonLdScript(
              siteGraph([
                {
                  "@type": "FoodEstablishment",
                  name: listing.name,
                  description: listing.summary,
                  url: `${SITE}/directory/places-to-eat/${listing.id}`,
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: listing.address,
                    postalCode: listing.postcode,
                    addressLocality: listing.city,
                    addressCountry: "GB",
                  },
                  telephone: listing.phone || undefined,
                },
              ]),
            ),
          ]
        : [],
    };
  },
  component: ListingPage,
  notFoundComponent: () => (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="font-display text-4xl">That business is not in the index.</h1>
      <Link to="/directory" className="mt-6 inline-flex text-sm underline">
        Back to the directory
      </Link>
    </main>
  ),
});

function ListingPage() {
  const { listing, reviews: initial } = Route.useLoaderData();
  const [reviews, setReviews] = useState<PublicReview[]>(initial);
  const [author, setAuthor] = useState("");
  const [stars, setStars] = useState(5);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState("");
  const mail = `mailto:info@indexuk.com?subject=${encodeURIComponent(`Listing ${listing.name}, ${listing.city}`)}`;

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    setStatus("sending");
    setError("");
    try {
      await addReview({ data: { listingId: listing.id, author, stars, title, body, location } });
      const next = await listReviews({ data: { listingId: listing.id } });
      setReviews(next);
      setBody("");
      setTitle("");
      setStatus("done");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "That comment was not saved.");
    }
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-10 md:px-6 md:py-14">
      <p className="text-sm text-muted">
        <Link to="/directory/places-to-eat" className="hover:text-rule">
          Places to eat
        </Link>
        <span className="mx-2 text-line">/</span>
        {listing.city}
      </p>
      <p className="mt-6 text-xs tracking-[0.18em] text-rule uppercase">{listing.category}</p>
      <h1 className="mt-2 font-display text-4xl text-ink md:text-5xl">{listing.name}</h1>
      <p className="mt-4 text-sm leading-relaxed text-muted">{listing.summary}</p>

      <dl className="mt-6 grid gap-4 border border-line bg-card p-5 sm:grid-cols-2">
        <div>
          <dt className="text-xs tracking-wide text-muted uppercase">Address</dt>
          <dd className="mt-1 text-ink">
            {listing.address}
            <br />
            {listing.postcode}
          </dd>
        </div>
        <div>
          <dt className="text-xs tracking-wide text-muted uppercase">Hygiene</dt>
          <dd className="mt-1 text-ink">
            {listing.hygieneScheme === "FHIS" ? listing.hygiene : `${listing.hygiene} out of 5`}
            <span className="mt-1 block text-sm text-muted">Inspected {listing.hygieneDate}. Food Standards Agency.</span>
          </dd>
        </div>
        {listing.phone && (
          <div>
            <dt className="text-xs tracking-wide text-muted uppercase">Phone</dt>
            <dd className="mt-1">
              <a className="text-ink underline decoration-line underline-offset-4" href={`tel:${listing.phone.replace(/\s/g, "")}`}>
                {listing.phone}
              </a>
            </dd>
          </div>
        )}
        <div>
          <dt className="text-xs tracking-wide text-muted uppercase">Source</dt>
          <dd className="mt-1">
            <a className="text-ink underline decoration-line underline-offset-4" href={listing.sourceUrl}>
              The public register
            </a>
          </dd>
        </div>
      </dl>

      <p className="mt-4 text-sm text-muted">No licensed photograph of these premises. The slot stays empty rather than show someone else’s picture.</p>
      <p className="mt-2 text-sm">
        <a className="text-ink underline decoration-line underline-offset-4" href={mail}>
          Suggest an edit, claim this listing, or ask for removal
        </a>
      </p>

      <section className="mt-10 border-t border-ink pt-8">
        <h2 className="font-display text-3xl text-ink">Comments</h2>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
          These are individual opinions, not Index UK’s. No insults, no private phone numbers, and nothing you would not say to the person who cooked. We can remove a comment. Write to info@indexuk.com with the date and the name you used.
        </p>
        {reviews.length === 0 ? (
          <p className="mt-6 text-sm text-muted">No comments yet. If you have eaten here, say what happened.</p>
        ) : (
          <ul className="mt-6 divide-y divide-line border-y border-line">
            {reviews.map((review) => (
              <li key={review.id} className="py-4">
                <p className="text-sm text-rule">{"★".repeat(review.stars)}{"☆".repeat(5 - review.stars)}</p>
                {review.title && <p className="mt-1 font-display text-xl text-ink">{review.title}</p>}
                <p className="mt-2 text-sm leading-relaxed text-ink">{review.body}</p>
                <p className="mt-2 text-xs tracking-wide text-muted uppercase">
                  {review.author}
                  {review.location ? ` · ${review.location}` : ""} · {review.createdAt}
                </p>
              </li>
            ))}
          </ul>
        )}

        <form onSubmit={onSubmit} className="mt-8 border border-ink bg-card p-5">
          <label className="block">
            <span className="text-xs tracking-wide text-muted uppercase">Your name</span>
            <input value={author} onChange={(e) => setAuthor(e.target.value)} required className="mt-2 w-full border border-line bg-paper px-3 py-3 text-ink" />
          </label>
          <label className="mt-4 block">
            <span className="text-xs tracking-wide text-muted uppercase">Rating</span>
            <select value={stars} onChange={(e) => setStars(Number(e.target.value))} className="mt-2 w-full border border-line bg-paper px-3 py-3 text-ink">
              {[5, 4, 3, 2, 1].map((n) => (
                <option key={n} value={n}>
                  {n} out of 5
                </option>
              ))}
            </select>
          </label>
          <label className="mt-4 block">
            <span className="text-xs tracking-wide text-muted uppercase">Title, if you want one</span>
            <input value={title} onChange={(e) => setTitle(e.target.value)} className="mt-2 w-full border border-line bg-paper px-3 py-3 text-ink" />
          </label>
          <label className="mt-4 block">
            <span className="text-xs tracking-wide text-muted uppercase">What happened</span>
            <textarea value={body} onChange={(e) => setBody(e.target.value)} required rows={4} className="mt-2 w-full border border-line bg-paper px-3 py-3 text-ink" />
          </label>
          <label className="mt-4 block">
            <span className="text-xs tracking-wide text-muted uppercase">Where you were visiting from</span>
            <input value={location} onChange={(e) => setLocation(e.target.value)} className="mt-2 w-full border border-line bg-paper px-3 py-3 text-ink" />
          </label>
          {status === "error" && <p className="mt-3 text-sm text-rule">{error}</p>}
          {status === "done" && <p className="mt-3 text-sm text-ink">Saved. It is on the page.</p>}
          <button type="submit" disabled={status === "sending"} className="mt-5 bg-rule px-5 py-3 text-card disabled:opacity-60">
            {status === "sending" ? "Saving…" : "Publish this comment"}
          </button>
        </form>
      </section>
    </main>
  );
}
