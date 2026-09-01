/** Seed data — small but enough for demos */

export const WAREHOUSES = ["Main DC", "East Hub"];
export const PO_STATUS = ["Draft", "Submitted", "Approved", "Received", "Cancelled"];
export const SHIP_STATUS = ["Pending", "Picked", "In Transit", "Delivered", "Cancelled"];
export const DEPTS = ["Operations", "Finance", "HR", "Sales", "Procurement", "IT"];
export const CATEGORIES = ["Fasteners", "Electronics", "Mechanical", "Consumables", "Motors"];

/** Demo logins — password is the same as username for simplicity */
export const SEED_USERS = [
  { id: "usr_admin", username: "admin", password: "admin", name: "Alex Admin", role: "admin", email: "admin@forge.local" },
  { id: "usr_emp", username: "employee", password: "employee", name: "Sam Employee", role: "employee", email: "sam@forge.local", employeeId: "emp_01" },
  { id: "usr_buyer", username: "buyer", password: "buyer", name: "Sarah Chen", role: "employee", email: "sarah.chen@forge.local", employeeId: "emp_01" },
];

export const SEED_PRODUCTS = [
  { id: "prd_01", sku: "BOLT-M12", name: "M12 Hex Bolt 50mm", category: "Fasteners", unitCost: 0.35, price: 0.85, reorderAt: 50, active: true },
  { id: "prd_02", sku: "SENS-IR12", name: "IR Proximity Sensor", category: "Electronics", unitCost: 14.5, price: 32.0, reorderAt: 15, active: true },
  { id: "prd_03", sku: "BRG-6205", name: "Ball Bearing 6205", category: "Mechanical", unitCost: 4.2, price: 9.5, reorderAt: 20, active: true },
];

export const SEED_SUPPLIERS = [
  { id: "sup_01", name: "Apex Fasteners Ltd", contact: "orders@apexfast.com" },
  { id: "sup_02", name: "SensorWorks GmbH", contact: "sales@sensorworks.de" },
];

export const SEED_INVENTORY = [
  { id: "inv_01", productId: "prd_01", warehouse: "Main DC", qty: 120, reserved: 10 },
  { id: "inv_02", productId: "prd_02", warehouse: "Main DC", qty: 18, reserved: 2 },
  { id: "inv_03", productId: "prd_03", warehouse: "East Hub", qty: 45, reserved: 0 },
];

export const SEED_POS = [
  {
    id: "po_2401",
    supplierId: "sup_01",
    status: "Draft",
    total: 35,
    orderedAt: "2026-08-28",
    lines: [{ productId: "prd_01", qty: 100, unitCost: 0.35 }],
    notes: "",
  },
  {
    id: "po_2402",
    supplierId: "sup_02",
    status: "Approved",
    total: 290,
    orderedAt: "2026-08-20",
    lines: [{ productId: "prd_02", qty: 20, unitCost: 14.5 }],
    notes: "Rush order",
  },
];

export const SEED_EMPLOYEES = [
  { id: "emp_01", name: "Sarah Chen", department: "Procurement", role: "Buyer", email: "sarah.chen@forge.local", status: "Active", access: ["orders", "inventory"] },
  { id: "emp_02", name: "Marcus Rivera", department: "Operations", role: "Warehouse Lead", email: "m.rivera@forge.local", status: "Active", access: ["inventory", "shipping"] },
];

export const SEED_SHIPMENTS = [
  {
    id: "shp_01",
    poId: "po_2402",
    carrier: "FedEx",
    tracking: "FX-9921844",
    status: "In Transit",
    shipDate: "2026-08-25",
    eta: "2026-09-02",
    destination: "Main DC",
    lines: [{ productId: "prd_02", qty: 20 }],
  },
];
