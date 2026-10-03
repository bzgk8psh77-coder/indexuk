import { createServerFn } from "@tanstack/react-start";
import { getSql } from "@/lib/db";

export type PublicReview = {
  id: number;
  author: string;
  stars: number;
  title: string;
  body: string;
  location: string;
  createdAt: string;
};

const phoneLike = /(?:\+?\d[\d\s()-]{8,}\d)/;
const emailLike = /[^\s@]+@[^\s@]+\.[^\s@]+/;

export const listReviews = createServerFn({ method: "GET" })
  .validator((input: { listingId?: string }) => {
    const listingId = String(input?.listingId ?? "").slice(0, 40);
    if (!/^fhrs-\d+$/.test(listingId)) throw new Error("Unknown listing.");
    return { listingId };
  })
  .handler(async ({ data }) => {
    const sql = await getSql();
    const rows = await sql<{
      id: number;
      author: string;
      stars: number;
      title: string;
      body: string;
      location: string;
      created_at: string;
    }>`
      select id, author, stars, title, body, location,
             to_char(created_at, 'YYYY-MM-DD') as created_at
      from business_reviews
      where listing_id = ${data.listingId} and hidden = false
      order by created_at desc, id desc
      limit 50
    `;
    return rows.map((row) => ({
      id: Number(row.id),
      author: row.author,
      stars: Number(row.stars),
      title: row.title,
      body: row.body,
      location: row.location,
      createdAt: row.created_at,
    })) satisfies PublicReview[];
  });

export const addReview = createServerFn({ method: "POST" })
  .validator((input: { listingId?: string; author?: string; stars?: number; title?: string; body?: string; location?: string }) => {
    const listingId = String(input?.listingId ?? "");
    if (!/^fhrs-\d+$/.test(listingId)) throw new Error("Unknown listing.");
    const author = String(input?.author ?? "").trim().slice(0, 60);
    const title = String(input?.title ?? "").trim().slice(0, 80);
    const body = String(input?.body ?? "").trim().slice(0, 800);
    const location = String(input?.location ?? "").trim().slice(0, 60);
    const stars = Number(input?.stars);
    if (author.length < 2) throw new Error("Add the name you want shown.");
    if (!Number.isInteger(stars) || stars < 1 || stars > 5) throw new Error("Choose a rating from one to five.");
    if (body.length < 20) throw new Error("Say a little more about the visit. Twenty characters at least.");
    if (emailLike.test(author) || emailLike.test(body) || phoneLike.test(body)) {
      throw new Error("Leave out phone numbers and email addresses.");
    }
    return { listingId, author, stars, title, body, location };
  })
  .handler(async ({ data }) => {
    const sql = await getSql();
    await sql`
      insert into business_reviews (listing_id, author, stars, title, body, location)
      values (${data.listingId}, ${data.author}, ${data.stars}, ${data.title}, ${data.body}, ${data.location})
    `;
    return { ok: true as const };
  });
