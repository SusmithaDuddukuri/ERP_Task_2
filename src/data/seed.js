/** Seed data — small and realistic */

export const WAREHOUSES = ["Main DC", "East Hub", "West Hub"];
export const PO_STATUS = ["Draft", "Submitted", "Approved", "Received", "Cancelled"];
export const DEPTS = ["Operations", "Finance", "HR", "Sales", "Procurement", "IT"];

export const SEED_PRODUCTS = [
  { id: "prd_01", sku: "BOLT-M12", name: "M12 Hex Bolt 50mm", category: "Fasteners", unitCost: 0.35, price: 0.85, reorderAt: 200 },
  { id: "prd_02", sku: "SENS-IR12", name: "IR Proximity Sensor", category: "Electronics", unitCost: 14.5, price: 32.0, reorderAt: 25 },
  { id: "prd_03", sku: "BRG-6205", name: "Ball Bearing 6205", category: "Mechanical", unitCost: 4.2, price: 9.5, reorderAt: 40 },
  { id: "prd_04", sku: "CBL-USB3", name: "USB-C Cable 2m", category: "Cables", unitCost: 2.1, price: 6.5, reorderAt: 80 },
  { id: "prd_05", sku: "FLT-HEPA", name: "HEPA Filter Cartridge", category: "Consumables", unitCost: 18.0, price: 42.0, reorderAt: 15 },
  { id: "prd_06", sku: "MOT-24V", name: "24V DC Gear Motor", category: "Motors", unitCost: 28.5, price: 65.0, reorderAt: 12 },
  { id: "prd_07", sku: "PCB-CTRL", name: "Control Board v2", category: "Electronics", unitCost: 22.0, price: 55.0, reorderAt: 20 },
  { id: "prd_08", sku: "TAPE-KAP", name: "Kapton Tape 25mm", category: "Consumables", unitCost: 6.8, price: 14.0, reorderAt: 30 },
  { id: "prd_09", sku: "SEAL-NBR", name: "NBR O-Ring Kit", category: "Seals", unitCost: 3.4, price: 8.0, reorderAt: 50 },
  { id: "prd_10", sku: "LUB-HT", name: "High-Temp Grease 1kg", category: "Lubricants", unitCost: 11.2, price: 24.0, reorderAt: 18 },
];

export const SEED_SUPPLIERS = [
  { id: "sup_01", name: "Apex Fasteners Ltd", contact: "orders@apexfast.com" },
  { id: "sup_02", name: "SensorWorks GmbH", contact: "sales@sensorworks.de" },
  { id: "sup_03", name: "Pacific Motion Co", contact: "desk@pacificmotion.com" },
  { id: "sup_04", name: "CleanAir Supplies", contact: "buy@cleanair.sup" },
];

export const SEED_INVENTORY = [
  { id: "inv_01", productId: "prd_01", warehouse: "Main DC", qty: 480, reserved: 40 },
  { id: "inv_02", productId: "prd_01", warehouse: "East Hub", qty: 120, reserved: 0 },
  { id: "inv_03", productId: "prd_02", warehouse: "Main DC", qty: 18, reserved: 4 },
  { id: "inv_04", productId: "prd_02", warehouse: "West Hub", qty: 9, reserved: 0 },
  { id: "inv_05", productId: "prd_03", warehouse: "Main DC", qty: 65, reserved: 10 },
  { id: "inv_06", productId: "prd_04", warehouse: "East Hub", qty: 210, reserved: 20 },
  { id: "inv_07", productId: "prd_05", warehouse: "Main DC", qty: 11, reserved: 2 },
  { id: "inv_08", productId: "prd_06", warehouse: "West Hub", qty: 7, reserved: 1 },
  { id: "inv_09", productId: "prd_07", warehouse: "Main DC", qty: 22, reserved: 5 },
  { id: "inv_10", productId: "prd_08", warehouse: "East Hub", qty: 34, reserved: 0 },
  { id: "inv_11", productId: "prd_09", warehouse: "Main DC", qty: 95, reserved: 15 },
  { id: "inv_12", productId: "prd_10", warehouse: "West Hub", qty: 14, reserved: 0 },
];

export const SEED_POS = [
  {
    id: "po_2401",
    supplierId: "sup_01",
    status: "Approved",
    total: 175,
    orderedAt: "2026-08-18",
    lines: [{ productId: "prd_01", qty: 500, unitCost: 0.35 }],
  },
  {
    id: "po_2402",
    supplierId: "sup_02",
    status: "Submitted",
    total: 290,
    orderedAt: "2026-08-22",
    lines: [{ productId: "prd_02", qty: 20, unitCost: 14.5 }],
  },
  {
    id: "po_2403",
    supplierId: "sup_03",
    status: "Draft",
    total: 171,
    orderedAt: "2026-08-28",
    lines: [{ productId: "prd_06", qty: 6, unitCost: 28.5 }],
  },
  {
    id: "po_2404",
    supplierId: "sup_04",
    status: "Received",
    total: 360,
    orderedAt: "2026-08-05",
    lines: [{ productId: "prd_05", qty: 20, unitCost: 18.0 }],
  },
  {
    id: "po_2405",
    supplierId: "sup_01",
    status: "Cancelled",
    total: 84,
    orderedAt: "2026-08-12",
    lines: [{ productId: "prd_03", qty: 20, unitCost: 4.2 }],
  },
];

export const SEED_EMPLOYEES = [
  { id: "emp_01", name: "Sarah Chen", department: "Procurement", role: "Buyer", email: "sarah.chen@forge.local", status: "Active" },
  { id: "emp_02", name: "Marcus Rivera", department: "Operations", role: "Warehouse Lead", email: "m.rivera@forge.local", status: "Active" },
  { id: "emp_03", name: "Priya Nair", department: "Finance", role: "Controller", email: "priya.nair@forge.local", status: "Active" },
  { id: "emp_04", name: "Tom Hale", department: "IT", role: "Systems Admin", email: "tom.hale@forge.local", status: "Active" },
  { id: "emp_05", name: "Elena Voss", department: "HR", role: "People Ops", email: "e.voss@forge.local", status: "On Leave" },
  { id: "emp_06", name: "James Okonkwo", department: "Sales", role: "Account Manager", email: "j.okonkwo@forge.local", status: "Active" },
  { id: "emp_07", name: "Lisa Park", department: "Operations", role: "Planner", email: "lisa.park@forge.local", status: "Active" },
  { id: "emp_08", name: "Daniel Ruiz", department: "Procurement", role: "Sourcing Spec", email: "d.ruiz@forge.local", status: "Active" },
];
