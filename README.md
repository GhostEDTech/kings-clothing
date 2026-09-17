# Celebrity Thrift King

A vintage/thrift storefront built with React, Vite, and Tailwind CSS. No backend — the catalog is
seeded in code and persisted to `localStorage`; "checkout" is a WhatsApp deep link.

## Getting started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Structure

```
src/
  components/   Shared UI: header, footer, logo, product card
  pages/        One file per route (Home, Shop, Product, Contact, Admin, 404)
  hooks/        useCatalog — localStorage-backed product state
  lib/          Constants, seed data, formatting helpers
  index.css     Tailwind v4 theme tokens (colors, fonts, custom utilities)
```

## Routes

- `/` — landing page
- `/shop` — searchable/filterable catalog
- `/product/:id` — product detail with a WhatsApp order link
- `/contact` — contact info
- `/admin` — lightweight, code-gated (`KING1989`) catalog editor. Everything is stored in the
  browser's `localStorage`; use **Export backup** before switching browsers or devices.
