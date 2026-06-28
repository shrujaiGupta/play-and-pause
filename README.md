# Play & Pause

The official landing page for **Play & Pause** — curated playdates, creative experiences and
meaningful mom-and-child moments for children aged 2–6 in Jaipur.

A premium, soft, storybook-style marketing site. Built mobile-first with gentle motion, lots of
white space and a warm cream palette.

## Tech stack

- **Next.js 16** (App Router) + **TypeScript** (strict)
- **Tailwind CSS v4** (CSS-variable design tokens via `@theme inline`)
- **Framer Motion** for animation (respects `prefers-reduced-motion`)
- **lucide-react** icons + hand-drawn inline-SVG doodles
- SEO: metadata, Open Graph, Twitter cards, JSON-LD `LocalBusiness`, sitemap, robots, manifest

## Getting started

> **Requires Node.js ≥ 20.9** (Next 16). An `.nvmrc` is included — run `nvm use` first if you
> use nvm.

```bash
nvm use        # selects Node 20.19.5 from .nvmrc (optional)
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Project structure

```
app/
  layout.tsx        Root layout — fonts (Playfair Display + Poppins), SEO metadata, JSON-LD
  page.tsx          Single-page composition of all sections
  globals.css       Design tokens + Tailwind v4 theme + helper classes
  icon.svg          Favicon
  sitemap.ts / robots.ts / manifest.ts
components/
  Navbar.tsx        Sticky navbar, blur-on-scroll, active-section tracking, mobile drawer
  Hero.tsx          Full-screen hero with floating decor + scroll indicator
  FeaturedSession.tsx  Upcoming session card with live countdown timer
  WhyParents.tsx    Six "why parents love us" icon cards
  Gallery.tsx       Masonry gallery with hover zoom + keyboard-navigable lightbox
  Testimonials.tsx  Snap-scroll testimonial carousel with star ratings
  DayTimeline.tsx   "A day at Play & Pause" alternating illustrated timeline
  Founder.tsx       Founder story with soft rainbow backdrop + pull quote
  InstagramFeed.tsx Latest-posts grid + follow CTA
  BookingCTA.tsx    Closing call-to-action band
  Footer.tsx        Links, contact details, socials (#contact)
  ScrollProgress.tsx / FloatingBook.tsx
  ui/               Button, SectionHeading, Placeholder, Countdown, WhatsAppIcon
  decor/            Doodles (clouds, stars, hearts, rainbow, teddy, palette, tooth…) + Float helpers
lib/
  site.ts           Brand constants (name, contact, socials)
  content.ts        All page copy/data (session, testimonials, gallery, timeline, instagram)
  whatsapp.ts       WhatsApp deep-link builder
  utils.ts          cn() class merger
```

## Editing content

All copy lives in **`lib/content.ts`** and brand/contact details in **`lib/site.ts`** — update
those rather than the components.

- **Booking** — every "Book" button deep-links to WhatsApp via `lib/whatsapp.ts`
  (`https://wa.me/918279873422` with a pre-filled message). Change the number in `lib/site.ts`.
- **Upcoming session** — edit the `SESSION` object in `lib/content.ts` (title, date, venue, price
  and the `countdownTarget` ISO date that drives the countdown timer).

## Images / placeholders

The site ships with elegant pastel SVG **placeholders** (`components/ui/Placeholder.tsx`) so there
are no broken images. To use real lifestyle photography, swap `<Placeholder … />` usages for
Next.js `<Image>` components and drop the photos into `public/`.

## Deploy on Vercel

1. Push this folder to a Git repository (GitHub/GitLab/Bitbucket).
2. Go to [vercel.com/new](https://vercel.com/new) and **Import** the repository.
3. Vercel auto-detects Next.js — no configuration needed. Click **Deploy**.
4. (Optional) Add your custom domain under **Settings → Domains** and update `SITE_URL` in
   `lib/site.ts` so the SEO metadata, sitemap and canonical URLs use the production domain.

Or deploy from the CLI:

```bash
npm i -g vercel
vercel          # preview deploy
vercel --prod   # production deploy
```

## Deploy with Docker (VPS)

The project is containerized with a multi-stage `Dockerfile` (Next.js **standalone** output → a
small production image) and a `docker-compose.yml`. Dependencies install from the public npm
registry (pinned via `.npmrc`), so the build works on the server without VPN access to any private
registry. The Node version is pinned to `20.19.5` to match `.nvmrc`.

### Build & run on the VPS

```bash
# on the server, in the project directory
docker compose up -d --build

docker compose ps          # status + health
docker compose logs -f     # tail logs
curl -I http://127.0.0.1:3000
```

- Redeploy after changes: `git pull && docker compose up -d --build`
- Stop: `docker compose down`

### Reverse proxy + HTTPS (recommended)

`docker-compose.yml` binds the app to **`127.0.0.1:3000`** so it isn't exposed to the internet
directly. Put Nginx/Caddy/Traefik in front for TLS. Minimal Caddy (`/etc/caddy/Caddyfile`) —
auto-provisions a Let's Encrypt cert once your domain's A record points at the VPS:

```
playandpause.in {
    reverse_proxy 127.0.0.1:3000
}
```

To instead expose the container directly, change the port mapping in `docker-compose.yml` to
`"3000:3000"` and open the port in your firewall (`ufw allow 3000`).

> After pointing a domain at the server, update `SITE_URL` in `lib/site.ts` so the SEO metadata,
> canonical URLs and sitemap use the production domain.
