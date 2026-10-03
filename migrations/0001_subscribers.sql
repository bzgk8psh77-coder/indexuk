create table if not exists subscribers (
  email text primary key,
  name text,
  nations text not null,
  created_at timestamptz not null default now()
);
