# ForgeERP

Small internal-style ERP demo: inventory, purchase orders, employees.

## Features

- Dashboard with KPIs (clickable) and low-stock list
- Inventory receive / issue by warehouse + search/filter
- Purchase order create → advance workflow → receive (updates stock)
- Employee directory with add / edit / delete
- Search, toasts, confirm dialogs, localStorage persistence
- Mobile-friendly sidebar

## Setup

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

## Reset

Use **Reset demo data** at the bottom of the sidebar to restore seed data and clear local changes.

## Test

```bash
npm test
```

## Notes

Demo data is intentionally small and realistic. Changes are stored in the browser's localStorage only.
