import { createServerFn } from "@tanstack/react-start";
import { getSql } from "@/lib/db";

const NATIONS = ["England", "Scotland", "Wales", "Northern Ireland"] as const;

export const joinLetter = createServerFn({ method: "POST" })
  .validator((input: { email?: string; name?: string; nations?: string[] }) => {
    const email = String(input?.email ?? "").trim().toLowerCase().slice(0, 200);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      throw new Error("That does not look like an email address.");
    }
    const name = String(input?.name ?? "").trim().slice(0, 80);
    const picked = (Array.isArray(input?.nations) ? input.nations : []).filter((nation) =>
      (NATIONS as readonly string[]).includes(nation),
    );
    return { email, name, nations: picked.length ? picked : [...NATIONS] };
  })
  .handler(async ({ data }) => {
    const sql = await getSql();
    await sql`
      insert into subscribers (email, name, nations)
      values (${data.email}, ${data.name || null}, ${data.nations.join(", ")})
      on conflict (email) do update
        set name = excluded.name,
            nations = excluded.nations
    `;
    return { ok: true as const };
  });
