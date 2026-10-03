import { createFileRoute, Link } from "@tanstack/react-router";
import { DIRECTORY_CITIES, listingsIn } from "@/lib/directory";
import { SITE } from "@/lib/seo";

export const Route = createFileRoute("/directory/places-to-eat")({
  validateSearch: (search: Record<string, unknown>): { city?: string } => {
    const city = typeof search.city === "string" ? search.city : "";
    if ((DIRECTORY_CITIES as readonly string[]).includes(city)) return { city };
    return {};
  },
  head: () => ({
    meta: [
      { title: "Places to eat · UK business index" },
      {
        name: "description",
        content:
          "Restaurants, cafés and kitchens in London, Manchester, Edinburgh, Cardiff and Belfast, drawn from the Food Standards Agency public register.",
      },
    ],
    links: [{ rel: "canonical", href: `${SITE}/directory/places-to-eat` }],
  }),
  component: SectorPage,
});

function SectorPage() {
  const { city } = Route.useSearch();
  const navigate = Route.useNavigate();
  const listed = listingsIn(city ?? "All");

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 md:px-6">
      <p className="text-sm text-muted">
        <Link to="/directory" className="hover:text-rule">
          Directory
        </Link>
        <span className="mx-2 text-line">/</span>
        Places to eat
      </p>
      <h1 className="mt-4 font-display text-4xl text-ink md:text-5xl">Places to eat.</h1>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
        Compiled on 3 October 2026 from the Food Standards Agency’s open register. England, Wales and Northern Ireland
        show a hygiene rating of 5. Edinburgh uses Scotland’s own scheme, so those listings show Pass. This is not a
        ranking of the best meal in the city, and it is not a paid placement. Photographs are omitted where we have no
        licence to show them.
      </p>

      <div className="mt-6 flex gap-2 overflow-x-auto pb-1">
        {["All", ...DIRECTORY_CITIES].map((name) => {
          const on = (city ?? "All") === name || (!city && name === "All");
          return (
            <button
              key={name}
              type="button"
              onClick={() => navigate({ search: name === "All" ? {} : { city: name }, replace: true })}
              className={`shrink-0 border px-3 py-2 text-sm ${on ? "border-ink bg-ink text-card" : "border-line bg-card text-ink"}`}
            >
              {name}
            </button>
          );
        })}
      </div>

      <ul className="mt-6 divide-y divide-line border-y border-line">
        {listed.map((listing) => (
          <li key={listing.id}>
            <Link
              to="/directory/places-to-eat/$id"
              params={{ id: listing.id }}
              className="grid gap-1 py-4 hover:text-rule md:grid-cols-12 md:items-baseline"
            >
              <span className="font-display text-xl text-ink md:col-span-5">{listing.name}</span>
              <span className="text-sm text-muted md:col-span-3">
                {listing.city} · {listing.postcode}
              </span>
              <span className="text-sm text-muted md:col-span-4">
                {listing.hygieneScheme === "FHIS" ? `Hygiene: ${listing.hygiene}` : `Hygiene ${listing.hygiene}/5`}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm text-muted">{listed.length} on this page. No image is shown, because none was licensed for reuse.</p>
    </main>
  );
}
