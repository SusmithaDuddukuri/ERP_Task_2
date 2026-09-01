# ForgeERP

Multi-role ERP demo: admin & employee logins, products, inventory, purchase orders, shipping, employees.

## Demo logins

| Username   | Password   | Role     | Access                                      |
|------------|------------|----------|---------------------------------------------|
| `admin`    | `admin`    | Admin    | Full (products, HR, reset, all modules)     |
| `employee` | `employee` | Employee | Dashboard, inventory, POs, shipping         |
| `buyer`    | `buyer`    | Employee | Same as employee                            |

## Features

- Role-based login and navigation
- **Products** (admin): add / edit / delete
- **Inventory**: receive / issue, warehouse filter, low-stock alerts
- **Purchase orders**: create, edit (draft), advance workflow, cancel, receive → stock
- **Shipping**: create, edit, advance (Pending → Picked → In Transit → Delivered), cancel
- **Employees** (admin): add / edit / delete
- Search, toasts, confirm dialogs, localStorage persistence

## Install

```bash
npm install
```

Requires Node.js 18+.

## Run

```bash
npm run dev
```

Or: `npx vite` — then open http://localhost:3000/

## Build

```bash
npm run build
npm run preview
```

## Test

```bash
npm test
```

## Reset

As **admin**, use **Reset demo data** in the sidebar (or clear site data for localhost).

## License

Proprietary — see `LICENSE`.
