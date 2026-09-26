# 📊 Dashboard Template
Next.js 15 dashboard starter with Auth0, light/dark themes, ES/EN i18n, and a collapsible sidebar.

## 📦 Requirements
- **Node.js** 18+
- **npm** (or yarn / pnpm / bun)
- Auth0 app (Regular Web Application)

## 🗂️ Structure
```
src/
├── app/
│   ├── api/auth/[auth0]/     # Auth0 handler
│   ├── guide/                # Site guide
│   └── home/[[...section]]/  # dashboard | costs | iam
├── components/               # atoms / molecules / organism
├── config/
│   ├── app.ts                # App name & defaults
│   ├── sidebar.ts            # Sidebar sections
│   ├── theme.ts              # Color preset switch
│   └── theme.presets.ts      # lilac | neutral | blue | emerald
├── i18n/dictionaries/        # es.ts, en.ts
├── middleware.ts             # Auth + token cookie
└── provider/                 # Theme, language, React Query
docs/THEME.md                   # How to change colors
Dockerfile
```

## 🚀 Run locally
```bash
npm install
cp .env.example .env
```

Fill `.env`:

```env
AUTH0_ISSUER_BASE_URL=https://your-tenant.auth0.com
AUTH0_CLIENT_ID=...
AUTH0_CLIENT_SECRET=...
AUTH0_BASE_URL=http://localhost:3000
AUTH0_SECRET=...   # openssl rand -hex 32
```

```bash
npm run dev
```

App: [http://localhost:3000](http://localhost:3000) (default Next.js port **3000**).

After login you land on `/home/dashboard`.

Useful scripts:

| Script | What it does |
|--------|----------------|
| `npm run dev` | Dev server |
| `npm run dev:clean` | Wipe `.next` then start |
| `npm run build` | Production build |
| `npm run start` | Production server |
| `npm run lint` | ESLint |

## ✨ Main features
| Area | Where / how |
|------|-------------|
| Sidebar sections | `src/config/sidebar.ts` + catch-all `home/[[...section]]` |
| Colors (light/dark) | `src/config/theme.ts` → set `THEME_PRESET` (`lilac`, `neutral`, `blue`, `emerald`, or `custom`) |
| Theme guide | [docs/THEME.md](./docs/THEME.md) |
| i18n ES/EN | `src/i18n/dictionaries/` + avatar menu |
| Guide page | `/guide` |
| Charts (sample) | Dashboard only - Recharts |

### Routes
| Path | Notes |
|------|--------|
| `/` | Redirects to dashboard or login |
| `/home/dashboard` | Dashboard + charts |
| `/home/costs` | Costs placeholder |
| `/home/iam` | IAM placeholder |
| `/guide` | Site guide |
| `/api/auth/*` | Auth0 login / logout / callback |

Auth0 callback (local): `http://localhost:3000/api/auth/callback`

## 🐳 Docker
```bash
docker build -t dashboard-template .
```

```bash
docker run --rm -p 3000:3000 \
  -e AUTH0_SECRET=your_secret \
  -e AUTH0_BASE_URL=http://localhost:3000 \
  -e AUTH0_ISSUER_BASE_URL=https://your-tenant.auth0.com \
  -e AUTH0_CLIENT_ID=your_client_id \
  -e AUTH0_CLIENT_SECRET=your_client_secret \
  dashboard-template
```

Then open [http://localhost:3000](http://localhost:3000). Match Auth0 callback URLs to `AUTH0_BASE_URL`.
