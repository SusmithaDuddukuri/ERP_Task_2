/** Application seed data */

export const WAREHOUSES = ["Main DC", "East Hub", "West Hub"];
export const PO_STATUS = ["Draft", "Submitted", "Approved", "Received", "Cancelled"];
export const SHIP_STATUS = ["Pending", "Picked", "In Transit", "Delivered", "Cancelled"];
export const DEPTS = ["Operations", "Finance", "HR", "Sales", "Procurement", "IT", "Quality", "Manufacturing"];
export const CATEGORIES = ["Fasteners", "Electronics", "Mechanical", "Consumables", "Motors", "Tools"];
export const LEAD_STATUS = ["New", "Contacted", "Qualified", "Unqualified", "Converted", "Lost"];
export const OPP_STAGES = ["New", "Qualified", "Proposal", "Negotiation", "Won", "Lost"];
export const TICKET_STATUS = ["Open", "Assigned", "In Progress", "Waiting", "Resolved", "Closed"];
export const PROJECT_STATUS = ["Planning", "Active", "On Hold", "Completed", "Cancelled"];
export const TASK_STATUS = ["Backlog", "To Do", "In Progress", "Review", "Completed"];
export const CONTRACT_STATUS = ["Draft", "Active", "Expiring", "Renewed", "Expired", "Terminated"];
export const APPROVAL_STATUS = ["Pending", "Approved", "Rejected", "Changes Requested"];

export const ROLES = [
  { id: "super_admin", name: "Super Admin", permissions: ["*"] },
  { id: "administrator", name: "Administrator", permissions: ["view", "create", "edit", "delete", "approve", "export", "manage"] },
  { id: "manager", name: "Manager", permissions: ["view", "create", "edit", "approve", "export"] },
  { id: "sales", name: "Sales User", permissions: ["view", "create", "edit"] },
  { id: "procurement", name: "Procurement User", permissions: ["view", "create", "edit", "approve"] },
  { id: "finance", name: "Finance User", permissions: ["view", "create", "edit", "approve", "export"] },
  { id: "hr", name: "HR User", permissions: ["view", "create", "edit"] },
  { id: "warehouse", name: "Warehouse User", permissions: ["view", "create", "edit"] },
  { id: "manufacturing", name: "Manufacturing User", permissions: ["view", "create", "edit"] },
  { id: "quality", name: "Quality User", permissions: ["view", "create", "edit", "approve"] },
  { id: "employee", name: "Employee", permissions: ["view"] },
  { id: "viewer", name: "Viewer", permissions: ["view"] },
];

export const SEED_USERS = [
  { id: "usr_01", username: "admin", password: "admin123", name: "Alex Morgan", role: "super_admin", email: "alex.morgan@forge.local", status: "Active", department: "IT" },
  { id: "usr_02", username: "manager", password: "manager123", name: "Jordan Lee", role: "manager", email: "jordan.lee@forge.local", status: "Active", department: "Operations" },
  { id: "usr_03", username: "sales", password: "sales123", name: "Casey Brooks", role: "sales", email: "casey.brooks@forge.local", status: "Active", department: "Sales" },
  { id: "usr_04", username: "buyer", password: "buyer123", name: "Sarah Chen", role: "procurement", email: "sarah.chen@forge.local", status: "Active", department: "Procurement" },
  { id: "usr_05", username: "warehouse", password: "warehouse123", name: "Marcus Rivera", role: "warehouse", email: "marcus.rivera@forge.local", status: "Active", department: "Operations" },
  { id: "usr_06", username: "finance", password: "finance123", name: "Priya Nair", role: "finance", email: "priya.nair@forge.local", status: "Active", department: "Finance" },
  { id: "usr_07", username: "hr", password: "hr123", name: "Elena Voss", role: "hr", email: "elena.voss@forge.local", status: "Active", department: "HR" },
  { id: "usr_08", username: "employee", password: "employee123", name: "Sam Taylor", role: "employee", email: "sam.taylor@forge.local", status: "Active", department: "Operations" },
];

export const SEED_PRODUCTS = [
  { id: "prd_01", sku: "BOLT-M12", name: "M12 Hex Bolt 50mm", category: "Fasteners", brand: "Apex", unit: "pcs", unitCost: 0.35, price: 0.85, tax: 0, reorderAt: 50, minStock: 20, maxStock: 500, barcode: "8901001", status: "Active", description: "Grade 8.8 zinc plated" },
  { id: "prd_02", sku: "SENS-IR12", name: "IR Proximity Sensor", category: "Electronics", brand: "SensorWorks", unit: "pcs", unitCost: 14.5, price: 32.0, tax: 5, reorderAt: 15, minStock: 5, maxStock: 100, barcode: "8901002", status: "Active", description: "12mm inductive" },
  { id: "prd_03", sku: "BRG-6205", name: "Ball Bearing 6205", category: "Mechanical", brand: "NSK", unit: "pcs", unitCost: 4.2, price: 9.5, tax: 0, reorderAt: 20, minStock: 10, maxStock: 200, barcode: "8901003", status: "Active", description: "Deep groove" },
  { id: "prd_04", sku: "MOT-24V", name: "24V DC Gear Motor", category: "Motors", brand: "Pacific", unit: "pcs", unitCost: 28.5, price: 65.0, tax: 5, reorderAt: 8, minStock: 3, maxStock: 40, barcode: "8901004", status: "Active", description: "10:1 ratio" },
  { id: "prd_05", sku: "CBL-USB3", name: "USB-C Cable 2m", category: "Electronics", brand: "Generic", unit: "pcs", unitCost: 2.1, price: 6.5, tax: 0, reorderAt: 40, minStock: 20, maxStock: 300, barcode: "8901005", status: "Active", description: "USB 3.1" },
];

export const SEED_SUPPLIERS = [
  { id: "sup_01", name: "Apex Fasteners Ltd", contact: "Raj Patel", email: "orders@apexfast.com", phone: "+1-555-0101", address: "120 Industrial Ave", city: "Chicago", country: "US", taxId: "TAX-APX-01", paymentTerms: "Net 30", category: "Fasteners", rating: 4.6, status: "Active", onTimeRate: 94, qualityScore: 96, avgDeliveryDays: 5 },
  { id: "sup_02", name: "SensorWorks GmbH", contact: "Anna Keller", email: "sales@sensorworks.de", phone: "+49-30-555", address: "Berliner Str. 8", city: "Berlin", country: "DE", taxId: "DE123456", paymentTerms: "Net 45", category: "Electronics", rating: 4.8, status: "Active", onTimeRate: 97, qualityScore: 98, avgDeliveryDays: 8 },
  { id: "sup_03", name: "Pacific Motion Co", contact: "Tom Hale", email: "desk@pacificmotion.com", phone: "+1-555-0199", address: "88 Harbor Rd", city: "Seattle", country: "US", taxId: "TAX-PMC-03", paymentTerms: "Net 30", category: "Motors", rating: 4.2, status: "Active", onTimeRate: 88, qualityScore: 91, avgDeliveryDays: 7 },
];

export const SEED_CUSTOMERS = [
  { id: "cus_01", name: "Northwind Industrial", company: "Northwind Industrial Inc", email: "ap@northwind.com", phone: "+1-555-1001", city: "Detroit", state: "MI", country: "US", taxId: "CUS-NW-01", creditLimit: 50000, paymentTerms: "Net 30", type: "Wholesale", status: "Active", outstanding: 4200 },
  { id: "cus_02", name: "Blue Harbor Labs", company: "Blue Harbor Labs LLC", email: "buy@blueharbor.io", phone: "+1-555-1002", city: "Austin", state: "TX", country: "US", taxId: "CUS-BH-02", creditLimit: 25000, paymentTerms: "Net 15", type: "OEM", status: "Active", outstanding: 0 },
  { id: "cus_03", name: "Summit Assembly", company: "Summit Assembly Co", email: "orders@summitasm.com", phone: "+1-555-1003", city: "Columbus", state: "OH", country: "US", taxId: "CUS-SA-03", creditLimit: 75000, paymentTerms: "Net 45", type: "Manufacturer", status: "Active", outstanding: 12800 },
  { id: "cus_04", name: "Greenfield Tools", company: "Greenfield Tools Ltd", email: "ap@greenfield.tools", phone: "+1-555-1004", city: "Portland", state: "OR", country: "US", taxId: "CUS-GT-04", creditLimit: 15000, paymentTerms: "Net 30", type: "Retail", status: "Active", outstanding: 950 },
];

export const SEED_INVENTORY = [
  { id: "inv_01", productId: "prd_01", warehouse: "Main DC", qty: 180, reserved: 20 },
  { id: "inv_02", productId: "prd_02", warehouse: "Main DC", qty: 22, reserved: 4 },
  { id: "inv_03", productId: "prd_03", warehouse: "East Hub", qty: 55, reserved: 0 },
  { id: "inv_04", productId: "prd_04", warehouse: "Main DC", qty: 9, reserved: 1 },
  { id: "inv_05", productId: "prd_05", warehouse: "West Hub", qty: 95, reserved: 10 },
];

export const SEED_POS = [
  { id: "po_2401", supplierId: "sup_01", status: "Draft", total: 35, orderedAt: "2026-08-28", lines: [{ productId: "prd_01", qty: 100, unitCost: 0.35 }], notes: "" },
  { id: "po_2402", supplierId: "sup_02", status: "Approved", total: 290, orderedAt: "2026-08-20", lines: [{ productId: "prd_02", qty: 20, unitCost: 14.5 }], notes: "Priority" },
  { id: "po_2403", supplierId: "sup_03", status: "Submitted", total: 171, orderedAt: "2026-08-25", lines: [{ productId: "prd_04", qty: 6, unitCost: 28.5 }], notes: "" },
];

export const SEED_EMPLOYEES = [
  { id: "emp_01", name: "Sarah Chen", department: "Procurement", role: "Buyer", email: "sarah.chen@forge.local", status: "Active", leaveBalance: 12 },
  { id: "emp_02", name: "Marcus Rivera", department: "Operations", role: "Warehouse Lead", email: "marcus.rivera@forge.local", status: "Active", leaveBalance: 8 },
  { id: "emp_03", name: "Priya Nair", department: "Finance", role: "Controller", email: "priya.nair@forge.local", status: "Active", leaveBalance: 15 },
  { id: "emp_04", name: "Elena Voss", department: "HR", role: "People Ops", email: "elena.voss@forge.local", status: "Active", leaveBalance: 10 },
  { id: "emp_05", name: "Casey Brooks", department: "Sales", role: "Account Manager", email: "casey.brooks@forge.local", status: "Active", leaveBalance: 9 },
];

export const SEED_SHIPMENTS = [
  { id: "shp_01", poId: "po_2402", carrier: "FedEx", tracking: "FX-9921844", status: "In Transit", shipDate: "2026-08-25", eta: "2026-09-02", destination: "Main DC", lines: [{ productId: "prd_02", qty: 20 }] },
];

export const SEED_LEADS = [
  { id: "ld_01", name: "Nina Patel", company: "Orbit Robotics", email: "nina@orbit.robotics", phone: "+1-555-2001", source: "Website", industry: "Automation", owner: "Casey Brooks", score: 78, status: "Qualified", value: 24000, createdAt: "2026-08-10", nextFollowUp: "2026-09-05" },
  { id: "ld_02", name: "Chris Ong", company: "Delta Pack Co", email: "chris@deltapack.com", phone: "+1-555-2002", source: "Referral", industry: "Packaging", owner: "Casey Brooks", score: 55, status: "Contacted", value: 12000, createdAt: "2026-08-18", nextFollowUp: "2026-09-03" },
  { id: "ld_03", name: "Mia Santos", company: "Helix Components", email: "mia@helix.comp", phone: "+1-555-2003", source: "Trade Show", industry: "Components", owner: "Jordan Lee", score: 82, status: "New", value: 45000, createdAt: "2026-08-28", nextFollowUp: "2026-09-04" },
  { id: "ld_04", name: "Owen Blake", company: "Riverline Mfg", email: "owen@riverline.mfg", phone: "+1-555-2004", source: "Cold Call", industry: "Manufacturing", owner: "Casey Brooks", score: 40, status: "New", value: 8000, createdAt: "2026-08-30", nextFollowUp: "2026-09-06" },
];

export const SEED_OPPORTUNITIES = [
  { id: "opp_01", name: "Orbit sensor package", customer: "Orbit Robotics", stage: "Proposal", value: 24000, probability: 60, closeDate: "2026-09-30", owner: "Casey Brooks", leadId: "ld_01" },
  { id: "opp_02", name: "Delta annual fasteners", customer: "Delta Pack Co", stage: "Negotiation", value: 12000, probability: 75, closeDate: "2026-09-15", owner: "Casey Brooks", leadId: "ld_02" },
  { id: "opp_03", name: "Helix motor line", customer: "Helix Components", stage: "Qualified", value: 45000, probability: 40, closeDate: "2026-10-20", owner: "Jordan Lee", leadId: "ld_03" },
];

export const SEED_ACTIVITIES = [
  { id: "act_01", type: "Call", subject: "Intro call with Nina", relatedType: "lead", relatedId: "ld_01", at: "2026-08-12", by: "Casey Brooks", notes: "Interested in IR sensors" },
  { id: "act_02", type: "Meeting", subject: "Proposal review", relatedType: "opportunity", relatedId: "opp_01", at: "2026-08-22", by: "Casey Brooks", notes: "Sent quote v2" },
  { id: "act_03", type: "Task", subject: "Send samples", relatedType: "lead", relatedId: "ld_02", at: "2026-08-20", by: "Casey Brooks", notes: "Bolt samples" },
];

export const SEED_PROJECTS = [
  { id: "prj_01", name: "Warehouse slotting upgrade", status: "Active", owner: "Marcus Rivera", budget: 18000, spent: 4200, start: "2026-08-01", end: "2026-10-15", priority: "High" },
  { id: "prj_02", name: "Supplier scorecard rollout", status: "Planning", owner: "Sarah Chen", budget: 8000, spent: 0, start: "2026-09-01", end: "2026-11-30", priority: "Medium" },
];

export const SEED_TASKS = [
  { id: "tsk_01", projectId: "prj_01", title: "Map current bin layout", status: "Completed", assignee: "Marcus Rivera", due: "2026-08-15", priority: "High" },
  { id: "tsk_02", projectId: "prj_01", title: "Pilot new zones", status: "In Progress", assignee: "Marcus Rivera", due: "2026-09-10", priority: "High" },
  { id: "tsk_03", projectId: "prj_02", title: "Define KPI set", status: "To Do", assignee: "Sarah Chen", due: "2026-09-20", priority: "Medium" },
];

export const SEED_TICKETS = [
  { id: "tkt_01", subject: "Invoice discrepancy on order #SO-118", customerId: "cus_01", priority: "High", status: "In Progress", assignee: "Priya Nair", category: "Billing", createdAt: "2026-08-26", slaHours: 24 },
  { id: "tkt_02", subject: "Request SDS for bearing grease", customerId: "cus_03", priority: "Medium", status: "Open", assignee: "", category: "Product", createdAt: "2026-08-29", slaHours: 48 },
  { id: "tkt_03", subject: "Late shipment inquiry", customerId: "cus_02", priority: "High", status: "Assigned", assignee: "Marcus Rivera", category: "Logistics", createdAt: "2026-08-30", slaHours: 12 },
];

export const SEED_CONTRACTS = [
  { id: "ctr_01", name: "Northwind supply agreement", type: "Customer", partyId: "cus_01", value: 120000, start: "2026-01-01", end: "2026-12-31", renewal: "2026-11-15", status: "Active" },
  { id: "ctr_02", name: "Apex annual pricing", type: "Supplier", partyId: "sup_01", value: 60000, start: "2026-03-01", end: "2027-02-28", renewal: "2027-01-15", status: "Active" },
  { id: "ctr_03", name: "Marcus Rivera employment", type: "Employee", partyId: "emp_02", value: 0, start: "2024-06-01", end: "2027-05-31", renewal: "", status: "Active" },
];

export const SEED_APPROVALS = [
  { id: "apr_01", type: "Purchase Order", refId: "po_2403", title: "Approve PO po_2403", requester: "Sarah Chen", status: "Pending", level: 1, createdAt: "2026-08-25", due: "2026-09-02" },
  { id: "apr_02", type: "Leave Request", refId: "leave_01", title: "Leave Aug 28–29", requester: "Sam Taylor", status: "Pending", level: 1, createdAt: "2026-08-20", due: "2026-08-27" },
  { id: "apr_03", type: "Expense", refId: "exp_01", title: "Travel expense $420", requester: "Casey Brooks", status: "Approved", level: 2, createdAt: "2026-08-15", due: "2026-08-22" },
];

export const SEED_NOTIFICATIONS = [
  { id: "ntf_01", title: "Low stock: IR Proximity Sensor", body: "Available qty near reorder point", category: "Inventory", priority: "High", read: false, at: "2026-08-31T10:00:00Z" },
  { id: "ntf_02", title: "Approval pending: PO po_2403", body: "Awaiting manager approval", category: "Approvals", priority: "Medium", read: false, at: "2026-08-25T14:00:00Z" },
  { id: "ntf_03", title: "Shipment in transit", body: "FX-9921844 expected Sep 2", category: "Logistics", priority: "Low", read: true, at: "2026-08-25T09:00:00Z" },
  { id: "ntf_04", title: "Contract renewal soon", body: "Northwind agreement renews Nov 15", category: "Contracts", priority: "Medium", read: false, at: "2026-08-28T08:00:00Z" },
];

export const SEED_DOCUMENTS = [
  { id: "doc_01", name: "Northwind_MSA.pdf", category: "Contracts", relatedType: "customer", relatedId: "cus_01", owner: "Jordan Lee", tags: ["legal", "2026"], uploadedAt: "2026-01-05", size: "240 KB" },
  { id: "doc_02", name: "Apex_PriceList.xlsx", category: "Purchasing", relatedType: "supplier", relatedId: "sup_01", owner: "Sarah Chen", tags: ["pricing"], uploadedAt: "2026-03-01", size: "88 KB" },
  { id: "doc_03", name: "Sensor_SDS.pdf", category: "Quality", relatedType: "product", relatedId: "prd_02", owner: "Marcus Rivera", tags: ["sds"], uploadedAt: "2026-07-12", size: "1.1 MB" },
];

export const SEED_LOGIN_HISTORY = [
  { id: "lh_01", username: "admin", at: "2026-08-31T08:12:00Z", success: true, ip: "10.0.0.12" },
  { id: "lh_02", username: "sales", at: "2026-08-31T09:05:00Z", success: true, ip: "10.0.0.44" },
  { id: "lh_03", username: "unknown", at: "2026-08-30T22:11:00Z", success: false, ip: "203.0.113.9" },
];
