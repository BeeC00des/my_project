create table public.testimonials (
  id uuid primary key default gen_random_uuid(),
  quote text not null,
  name text not null,
  detail text,
  published boolean not null default false,
  created_at timestamptz not null default now()
);
grant select on public.testimonials to anon;
grant select, insert, update, delete on public.testimonials to authenticated;
grant all on public.testimonials to service_role;
alter table public.testimonials enable row level security;
create policy "anyone reads published testimonials" on public.testimonials for select to anon, authenticated using (published);
create policy "admins manage testimonials" on public.testimonials for all to authenticated using (public.has_role(auth.uid(), 'admin')) with check (public.has_role(auth.uid(), 'admin'));