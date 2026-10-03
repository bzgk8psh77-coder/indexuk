create table if not exists business_reviews (
  id bigserial primary key,
  listing_id text not null,
  author text not null,
  stars integer not null,
  title text not null default '',
  body text not null,
  location text not null default '',
  created_at timestamptz not null default now(),
  hidden boolean not null default false
);
