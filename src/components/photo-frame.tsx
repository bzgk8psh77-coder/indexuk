import { Link } from "@tanstack/react-router";
import type { Frame } from "@/lib/photos";

export function PhotoFrame({ frame, eager = false }: { frame: Frame; eager?: boolean }) {
  const figure = (
    <>
      <img
        src={frame.src}
        alt={frame.alt}
        loading={eager ? "eager" : "lazy"}
        className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-[1.03]"
      />
      <figcaption className="absolute inset-x-0 bottom-0 bg-night/80 px-3 py-2 text-night-fg">
        <span className="block font-display text-lg leading-tight">{frame.title}</span>
        <span className="text-xs tracking-wide text-night-fg/80 uppercase">{frame.place}</span>
      </figcaption>
    </>
  );
  const className = "group relative block aspect-[4/3] overflow-hidden bg-night";
  if (frame.slug) {
    return (
      <Link to="/places/$slug" params={{ slug: frame.slug }} className={className}>
        {figure}
      </Link>
    );
  }
  if (frame.briefing) {
    return (
      <Link to="/briefings/$slug" params={{ slug: frame.briefing }} className={className}>
        {figure}
      </Link>
    );
  }
  return <figure className={className}>{figure}</figure>;
}
