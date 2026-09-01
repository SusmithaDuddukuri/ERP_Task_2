/** Minimal seed data */

export const WAREHOUSES = ["Main DC"];
export const PO_STATUS = ["Draft", "Submitted", "Approved", "Received", "Cancelled"];
export const DEPTS = ["Operations", "Finance", "HR", "Sales", "Procurement", "IT"];

export const SEED_PRODUCTS = [
  { id: "prd_01", sku: "BOLT-M12", name: "M12 Hex Bolt 50mm", category: "Fasteners", unitCost: 0.35, price: 0.85, reorderAt: 50 },
];

export const SEED_SUPPLIERS = [
  { id: "sup_01", name: "Apex Fasteners Ltd", contact: "orders@apexfast.com" },
];

export const SEED_INVENTORY = [
  { id: "inv_01", productId: "prd_01", warehouse: "Main DC", qty: 40, reserved: 5 },
];

export const SEED_POS = [
  {
    id: "po_2401",
    supplierId: "sup_01",
    status: "Draft",
    total: 35,
    orderedAt: "2026-08-28",
    lines: [{ productId: "prd_01", qty: 100, unitCost: 0.35 }],
  },
];

export const SEED_EMPLOYEES = [
  { id: "emp_01", name: "Sarah Chen", department: "Procurement", role: "Buyer", email: "sarah.chen@forge.local", status: "Active" },
];
