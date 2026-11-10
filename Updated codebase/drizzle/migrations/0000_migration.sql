create type public.app_role as enum ('admin');

create table public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  role public.app_role not null,
  unique (user_id, role)
);
grant select on public.user_roles to authenticated;
grant all on public.user_roles to service_role;
alter table public.user_roles enable row level security;

create or replace function public.has_role(_user_id uuid, _role public.app_role)
returns boolean language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.user_roles where user_id = _user_id and role = _role)
$$;

create policy "users read own roles" on public.user_roles for select to authenticated using (user_id = auth.uid());

create or replace function public.assign_first_admin()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  if not exists (select 1 from public.user_roles where role = 'admin') then
    insert into public.user_roles (user_id, role) values (new.id, 'admin');
  end if;
  return new;
end $$;
create trigger on_auth_user_created_first_admin after insert on auth.users
for each row execute function public.assign_first_admin();

create table public.family_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  status text not null default 'New inquiry' check (status in ('New inquiry','Call booked','Onboarding','Active','Paused','Closed')),
  notes text,
  full_name text not null, email text not null, phone text, country text, timezone text, relationship text,
  parent_name text, parent_age int, parent_area text, plan text, siblings_share text, source text,
  details jsonb not null default '{}'::jsonb
);
create table public.waitlist (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  email text not null, parent_city text not null, notes text
);
create table public.nurse_applicants (
  id uuid primary key default gen_random_uuid(), created_at timestamptz not null default now(),
  status text not null default 'Applied' check (status in ('Applied','Documents checked','Verified','Interviewed','Active pool','Not progressing')),
  notes text, full_name text not null, email text, phone text not null, license_number text, years_experience text, source text,
  details jsonb not null default '{}'::jsonb, files jsonb not null default '[]'::jsonb
);
create table public.doctor_applicants (like public.nurse_applicants including all);
create table public.caregiver_applicants (like public.nurse_applicants including all);
create table public.partner_inquiries (
  id uuid primary key default gen_random_uuid(), created_at timestamptz not null default now(),
  status text not null default 'New' check (status in ('New','Contacted','In discussion','Partner','Closed')),
  notes text, organisation text not null, org_type text, full_name text not null, email text not null, phone text,
  details jsonb not null default '{}'::jsonb
);
create table public.employer_inquiries (
  id uuid primary key default gen_random_uuid(), created_at timestamptz not null default now(),
  status text not null default 'New' check (status in ('New','Contacted','In discussion','Partner','Closed')),
  notes text, company text not null, company_size text, full_name text not null, email text not null, phone text,
  details jsonb not null default '{}'::jsonb
);
create table public.referrals (
  id uuid primary key default gen_random_uuid(), created_at timestamptz not null default now(),
  status text not null default 'New' check (status in ('New','Contacted','Signed up','Rewarded','Closed')),
  notes text, full_name text not null, contact text not null, friend_name text not null, friend_contact text not null,
  details jsonb not null default '{}'::jsonb
);

do $$
declare t text;
begin
  foreach t in array array['family_leads','waitlist','nurse_applicants','doctor_applicants','caregiver_applicants','partner_inquiries','employer_inquiries','referrals'] loop
    execute format('grant insert on public.%I to anon, authenticated', t);
    execute format('grant select, update, delete on public.%I to authenticated', t);
    execute format('grant all on public.%I to service_role', t);
    execute format('alter table public.%I enable row level security', t);
    execute format('create policy "public can submit" on public.%I for insert to anon, authenticated with check (notes is null)', t);
    execute format('create policy "admins read" on public.%I for select to authenticated using (public.has_role(auth.uid(), ''admin''))', t);
    execute format('create policy "admins update" on public.%I for update to authenticated using (public.has_role(auth.uid(), ''admin'')) with check (public.has_role(auth.uid(), ''admin''))', t);
    execute format('create policy "admins delete" on public.%I for delete to authenticated using (public.has_role(auth.uid(), ''admin''))', t);
  end loop;
end $$;

create policy "anyone can upload applicant files" on storage.objects for insert to anon, authenticated
with check (bucket_id = 'applicant-files');
create policy "admins read applicant files" on storage.objects for select to authenticated
using (bucket_id = 'applicant-files' and public.has_role(auth.uid(), 'admin'));