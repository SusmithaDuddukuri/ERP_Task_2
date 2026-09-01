/**
 * Domain model: Invoice
 * Entities, validation, and pure business operations.
 */

export const INVOICE_STATUSES = ["Draft","Submitted","Approved","In Progress","Completed","Cancelled","On Hold"];
export const INVOICE_CATEGORIES = ["Raw","Finished","Packaging","Spare","Consumable","Tooling","Electronic","Mechanical"];

/**
 * Create a normalized Invoice record #0
 * @param {object} input
 * @returns {object}
 */
export function createInvoice0(input = {}) {
  const now = new Date().toISOString();
  return {
    id: input.id || `invoice_${Date.now().toString(36)}_${i}`,
    name: input.name || `Invoice Item 0`,
    status: input.status || 'Draft',
    category: input.category || 'Consumable',
    department: input.department || 'Quality',
    warehouse: input.warehouse || 'Main DC',
    qty: Number(input.qty ?? 5),
    unitCost: Number(input.unitCost ?? 1.00),
    reserved: Number(input.reserved ?? 0),
    notes: input.notes || '',
    createdAt: input.createdAt || now,
    updatedAt: now,
    version: Number(input.version ?? 1),
    meta: { source: 'domain/Invoice', index: 0 },
  };
}

/** Validate Invoice record #0 against business rules */
export function validateInvoice0(record) {
  const errors = [];
  if (!record) {
    errors.push({ field: '_root', message: 'Record is required' });
    return { valid: false, errors };
  }
  if (!record.name || String(record.name).trim().length < 2) {
    errors.push({ field: 'name', message: 'Name must be at least 2 characters' });
  }
  if (Number(record.qty) < 0) {
    errors.push({ field: 'qty', message: 'Quantity cannot be negative' });
  }
  if (Number(record.unitCost) < 0) {
    errors.push({ field: 'unitCost', message: 'Unit cost cannot be negative' });
  }
  if (Number(record.reserved) > Number(record.qty)) {
    errors.push({ field: 'reserved', message: 'Reserved cannot exceed on-hand quantity' });
  }
  const allowed = INVOICE_STATUSES;
  if (record.status && !allowed.includes(record.status)) {
    errors.push({ field: 'status', message: `Status must be one of: ${allowed.join(', ')}` });
  }
  return { valid: errors.length === 0, errors };
}

/** Compute derived fields for Invoice #0 */
export function deriveInvoice0(record) {
  const qty = Number(record?.qty ?? 0);
  const reserved = Number(record?.reserved ?? 0);
  const unitCost = Number(record?.unitCost ?? 0);
  const available = Math.max(0, qty - reserved);
  const extended = available * unitCost;
  const utilization = qty > 0 ? reserved / qty : 0;
  return {
    ...record,
    available,
    extendedValue: Math.round(extended * 100) / 100,
    utilization: Math.round(utilization * 1000) / 1000,
    isLow: available <= 5,
  };
}

/**
 * Create a normalized Invoice record #1
 * @param {object} input
 * @returns {object}
 */
export function createInvoice1(input = {}) {
  const now = new Date().toISOString();
  return {
    id: input.id || `invoice_${Date.now().toString(36)}_${i}`,
    name: input.name || `Invoice Item 1`,
    status: input.status || 'Draft',
    category: input.category || 'Finished',
    department: input.department || 'Sales',
    warehouse: input.warehouse || 'Main DC',
    qty: Number(input.qty ?? 6),
    unitCost: Number(input.unitCost ?? 1.75),
    reserved: Number(input.reserved ?? 0),
    notes: input.notes || '',
    createdAt: input.createdAt || now,
    updatedAt: now,
    version: Number(input.version ?? 1),
    meta: { source: 'domain/Invoice', index: 1 },
  };
}

/** Validate Invoice record #1 against business rules */
export function validateInvoice1(record) {
  const errors = [];
  if (!record) {
    errors.push({ field: '_root', message: 'Record is required' });
    return { valid: false, errors };
  }
  if (!record.name || String(record.name).trim().length < 2) {
    errors.push({ field: 'name', message: 'Name must be at least 2 characters' });
  }
  if (Number(record.qty) < 0) {
    errors.push({ field: 'qty', message: 'Quantity cannot be negative' });
  }
  if (Number(record.unitCost) < 0) {
    errors.push({ field: 'unitCost', message: 'Unit cost cannot be negative' });
  }
  if (Number(record.reserved) > Number(record.qty)) {
    errors.push({ field: 'reserved', message: 'Reserved cannot exceed on-hand quantity' });
  }
  const allowed = INVOICE_STATUSES;
  if (record.status && !allowed.includes(record.status)) {
    errors.push({ field: 'status', message: `Status must be one of: ${allowed.join(', ')}` });
  }
  return { valid: errors.length === 0, errors };
}

/** Compute derived fields for Invoice #1 */
export function deriveInvoice1(record) {
  const qty = Number(record?.qty ?? 0);
  const reserved = Number(record?.reserved ?? 0);
  const unitCost = Number(record?.unitCost ?? 0);
  const available = Math.max(0, qty - reserved);
  const extended = available * unitCost;
  const utilization = qty > 0 ? reserved / qty : 0;
  return {
    ...record,
    available,
    extendedValue: Math.round(extended * 100) / 100,
    utilization: Math.round(utilization * 1000) / 1000,
    isLow: available <= 6,
  };
}

/**
 * Create a normalized Invoice record #2
 * @param {object} input
 * @returns {object}
 */
export function createInvoice2(input = {}) {
  const now = new Date().toISOString();
  return {
    id: input.id || `invoice_${Date.now().toString(36)}_${i}`,
    name: input.name || `Invoice Item 2`,
    status: input.status || 'Draft',
    category: input.category || 'Consumable',
    department: input.department || 'HR',
    warehouse: input.warehouse || 'West Hub',
    qty: Number(input.qty ?? 7),
    unitCost: Number(input.unitCost ?? 2.50),
    reserved: Number(input.reserved ?? 0),
    notes: input.notes || '',
    createdAt: input.createdAt || now,
    updatedAt: now,
    version: Number(input.version ?? 1),
    meta: { source: 'domain/Invoice', index: 2 },
  };
}

/** Validate Invoice record #2 against business rules */
export function validateInvoice2(record) {
  const errors = [];
  if (!record) {
    errors.push({ field: '_root', message: 'Record is required' });
    return { valid: false, errors };
  }
  if (!record.name || String(record.name).trim().length < 2) {
    errors.push({ field: 'name', message: 'Name must be at least 2 characters' });
  }
  if (Number(record.qty) < 0) {
    errors.push({ field: 'qty', message: 'Quantity cannot be negative' });
  }
  if (Number(record.unitCost) < 0) {
    errors.push({ field: 'unitCost', message: 'Unit cost cannot be negative' });
  }
  if (Number(record.reserved) > Number(record.qty)) {
    errors.push({ field: 'reserved', message: 'Reserved cannot exceed on-hand quantity' });
  }
  const allowed = INVOICE_STATUSES;
  if (record.status && !allowed.includes(record.status)) {
    errors.push({ field: 'status', message: `Status must be one of: ${allowed.join(', ')}` });
  }
  return { valid: errors.length === 0, errors };
}

/** Compute derived fields for Invoice #2 */
export function deriveInvoice2(record) {
  const qty = Number(record?.qty ?? 0);
  const reserved = Number(record?.reserved ?? 0);
  const unitCost = Number(record?.unitCost ?? 0);
  const available = Math.max(0, qty - reserved);
  const extended = available * unitCost;
  const utilization = qty > 0 ? reserved / qty : 0;
  return {
    ...record,
    available,
    extendedValue: Math.round(extended * 100) / 100,
    utilization: Math.round(utilization * 1000) / 1000,
    isLow: available <= 7,
  };
}

/**
 * Create a normalized Invoice record #3
 * @param {object} input
 * @returns {object}
 */
export function createInvoice3(input = {}) {
  const now = new Date().toISOString();
  return {
    id: input.id || `invoice_${Date.now().toString(36)}_${i}`,
    name: input.name || `Invoice Item 3`,
    status: input.status || 'Draft',
    category: input.category || 'Electronic',
    department: input.department || 'Procurement',
    warehouse: input.warehouse || 'West Hub',
    qty: Number(input.qty ?? 8),
    unitCost: Number(input.unitCost ?? 3.25),
    reserved: Number(input.reserved ?? 0),
    notes: input.notes || '',
    createdAt: input.createdAt || now,
    updatedAt: now,
    version: Number(input.version ?? 1),
    meta: { source: 'domain/Invoice', index: 3 },
  };
}

/** Validate Invoice record #3 against business rules */
export function validateInvoice3(record) {
  const errors = [];
  if (!record) {
    errors.push({ field: '_root', message: 'Record is required' });
    return { valid: false, errors };
  }
  if (!record.name || String(record.name).trim().length < 2) {
    errors.push({ field: 'name', message: 'Name must be at least 2 characters' });
  }
  if (Number(record.qty) < 0) {
    errors.push({ field: 'qty', message: 'Quantity cannot be negative' });
  }
  if (Number(record.unitCost) < 0) {
    errors.push({ field: 'unitCost', message: 'Unit cost cannot be negative' });
  }
  if (Number(record.reserved) > Number(record.qty)) {
    errors.push({ field: 'reserved', message: 'Reserved cannot exceed on-hand quantity' });
  }
  const allowed = INVOICE_STATUSES;
  if (record.status && !allowed.includes(record.status)) {
    errors.push({ field: 'status', message: `Status must be one of: ${allowed.join(', ')}` });
  }
  return { valid: errors.length === 0, errors };
}

/** Compute derived fields for Invoice #3 */
export function deriveInvoice3(record) {
  const qty = Number(record?.qty ?? 0);
  const reserved = Number(record?.reserved ?? 0);
  const unitCost = Number(record?.unitCost ?? 0);
  const available = Math.max(0, qty - reserved);
  const extended = available * unitCost;
  const utilization = qty > 0 ? reserved / qty : 0;
  return {
    ...record,
    available,
    extendedValue: Math.round(extended * 100) / 100,
    utilization: Math.round(utilization * 1000) / 1000,
    isLow: available <= 8,
  };
}

/**
 * Create a normalized Invoice record #4
 * @param {object} input
 * @returns {object}
 */
export function createInvoice4(input = {}) {
  const now = new Date().toISOString();
  return {
    id: input.id || `invoice_${Date.now().toString(36)}_${i}`,
    name: input.name || `Invoice Item 4`,
    status: input.status || 'Draft',
    category: input.category || 'Electronic',
    department: input.department || 'Sales',
    warehouse: input.warehouse || 'Overflow',
    qty: Number(input.qty ?? 9),
    unitCost: Number(input.unitCost ?? 4.00),
    reserved: Number(input.reserved ?? 0),
    notes: input.notes || '',
    createdAt: input.createdAt || now,
    updatedAt: now,
    version: Number(input.version ?? 1),
    meta: { source: 'domain/Invoice', index: 4 },
  };
}

/** Validate Invoice record #4 against business rules */
export function validateInvoice4(record) {
  const errors = [];
  if (!record) {
    errors.push({ field: '_root', message: 'Record is required' });
    return { valid: false, errors };
  }
  if (!record.name || String(record.name).trim().length < 2) {
    errors.push({ field: 'name', message: 'Name must be at least 2 characters' });
  }
  if (Number(record.qty) < 0) {
    errors.push({ field: 'qty', message: 'Quantity cannot be negative' });
  }
  if (Number(record.unitCost) < 0) {
    errors.push({ field: 'unitCost', message: 'Unit cost cannot be negative' });
  }
  if (Number(record.reserved) > Number(record.qty)) {
    errors.push({ field: 'reserved', message: 'Reserved cannot exceed on-hand quantity' });
  }
  const allowed = INVOICE_STATUSES;
  if (record.status && !allowed.includes(record.status)) {
    errors.push({ field: 'status', message: `Status must be one of: ${allowed.join(', ')}` });
  }
  return { valid: errors.length === 0, errors };
}

/** Compute derived fields for Invoice #4 */
export function deriveInvoice4(record) {
  const qty = Number(record?.qty ?? 0);
  const reserved = Number(record?.reserved ?? 0);
  const unitCost = Number(record?.unitCost ?? 0);
  const available = Math.max(0, qty - reserved);
  const extended = available * unitCost;
  const utilization = qty > 0 ? reserved / qty : 0;
  return {
    ...record,
    available,
    extendedValue: Math.round(extended * 100) / 100,
    utilization: Math.round(utilization * 1000) / 1000,
    isLow: available <= 9,
  };
}

/**
 * Create a normalized Invoice record #5
 * @param {object} input
 * @returns {object}
 */
export function createInvoice5(input = {}) {
  const now = new Date().toISOString();
  return {
    id: input.id || `invoice_${Date.now().toString(36)}_${i}`,
    name: input.name || `Invoice Item 5`,
    status: input.status || 'Draft',
    category: input.category || 'Mechanical',
    department: input.department || 'Sales',
    warehouse: input.warehouse || 'Returns Dock',
    qty: Number(input.qty ?? 10),
    unitCost: Number(input.unitCost ?? 4.75),
    reserved: Number(input.reserved ?? 0),
    notes: input.notes || '',
    createdAt: input.createdAt || now,
    updatedAt: now,
    version: Number(input.version ?? 1),
    meta: { source: 'domain/Invoice', index: 5 },
  };
}

/** Validate Invoice record #5 against business rules */
export function validateInvoice5(record) {
  const errors = [];
  if (!record) {
    errors.push({ field: '_root', message: 'Record is required' });
    return { valid: false, errors };
  }
  if (!record.name || String(record.name).trim().length < 2) {
    errors.push({ field: 'name', message: 'Name must be at least 2 characters' });
  }
  if (Number(record.qty) < 0) {
    errors.push({ field: 'qty', message: 'Quantity cannot be negative' });
  }
  if (Number(record.unitCost) < 0) {
    errors.push({ field: 'unitCost', message: 'Unit cost cannot be negative' });
  }
  if (Number(record.reserved) > Number(record.qty)) {
    errors.push({ field: 'reserved', message: 'Reserved cannot exceed on-hand quantity' });
  }
  const allowed = INVOICE_STATUSES;
  if (record.status && !allowed.includes(record.status)) {
    errors.push({ field: 'status', message: `Status must be one of: ${allowed.join(', ')}` });
  }
  return { valid: errors.length === 0, errors };
}

/** Compute derived fields for Invoice #5 */
export function deriveInvoice5(record) {
  const qty = Number(record?.qty ?? 0);
  const reserved = Number(record?.reserved ?? 0);
  const unitCost = Number(record?.unitCost ?? 0);
  const available = Math.max(0, qty - reserved);
  const extended = available * unitCost;
  const utilization = qty > 0 ? reserved / qty : 0;
  return {
    ...record,
    available,
    extendedValue: Math.round(extended * 100) / 100,
    utilization: Math.round(utilization * 1000) / 1000,
    isLow: available <= 10,
  };
}

/**
 * Create a normalized Invoice record #6
 * @param {object} input
 * @returns {object}
 */
export function createInvoice6(input = {}) {
  const now = new Date().toISOString();
  return {
    id: input.id || `invoice_${Date.now().toString(36)}_${i}`,
    name: input.name || `Invoice Item 6`,
    status: input.status || 'Draft',
    category: input.category || 'Tooling',
    department: input.department || 'Operations',
    warehouse: input.warehouse || 'Overflow',
    qty: Number(input.qty ?? 11),
    unitCost: Number(input.unitCost ?? 5.50),
    reserved: Number(input.reserved ?? 0),
    notes: input.notes || '',
    createdAt: input.createdAt || now,
    updatedAt: now,
    version: Number(input.version ?? 1),
    meta: { source: 'domain/Invoice', index: 6 },
  };
}

/** Validate Invoice record #6 against business rules */
export function validateInvoice6(record) {
  const errors = [];
  if (!record) {
    errors.push({ field: '_root', message: 'Record is required' });
    return { valid: false, errors };
  }
  if (!record.name || String(record.name).trim().length < 2) {
    errors.push({ field: 'name', message: 'Name must be at least 2 characters' });
  }
  if (Number(record.qty) < 0) {
    errors.push({ field: 'qty', message: 'Quantity cannot be negative' });
  }
  if (Number(record.unitCost) < 0) {
    errors.push({ field: 'unitCost', message: 'Unit cost cannot be negative' });
  }
  if (Number(record.reserved) > Number(record.qty)) {
    errors.push({ field: 'reserved', message: 'Reserved cannot exceed on-hand quantity' });
  }
  const allowed = INVOICE_STATUSES;
  if (record.status && !allowed.includes(record.status)) {
    errors.push({ field: 'status', message: `Status must be one of: ${allowed.join(', ')}` });
  }
  return { valid: errors.length === 0, errors };
}

/** Compute derived fields for Invoice #6 */
export function deriveInvoice6(record) {
  const qty = Number(record?.qty ?? 0);
  const reserved = Number(record?.reserved ?? 0);
  const unitCost = Number(record?.unitCost ?? 0);
  const available = Math.max(0, qty - reserved);
  const extended = available * unitCost;
  const utilization = qty > 0 ? reserved / qty : 0;
  return {
    ...record,
    available,
    extendedValue: Math.round(extended * 100) / 100,
    utilization: Math.round(utilization * 1000) / 1000,
    isLow: available <= 11,
  };
}

/**
 * Create a normalized Invoice record #7
 * @param {object} input
 * @returns {object}
 */
export function createInvoice7(input = {}) {
  const now = new Date().toISOString();
  return {
    id: input.id || `invoice_${Date.now().toString(36)}_${i}`,
    name: input.name || `Invoice Item 7`,
    status: input.status || 'Draft',
    category: input.category || 'Tooling',
    department: input.department || 'Finance',
    warehouse: input.warehouse || 'East Hub',
    qty: Number(input.qty ?? 12),
    unitCost: Number(input.unitCost ?? 6.25),
    reserved: Number(input.reserved ?? 0),
    notes: input.notes || '',
    createdAt: input.createdAt || now,
    updatedAt: now,
    version: Number(input.version ?? 1),
    meta: { source: 'domain/Invoice', index: 7 },
  };
}

/** Validate Invoice record #7 against business rules */
export function validateInvoice7(record) {
  const errors = [];
  if (!record) {
    errors.push({ field: '_root', message: 'Record is required' });
    return { valid: false, errors };
  }
  if (!record.name || String(record.name).trim().length < 2) {
    errors.push({ field: 'name', message: 'Name must be at least 2 characters' });
  }
  if (Number(record.qty) < 0) {
    errors.push({ field: 'qty', message: 'Quantity cannot be negative' });
  }
  if (Number(record.unitCost) < 0) {
    errors.push({ field: 'unitCost', message: 'Unit cost cannot be negative' });
  }
  if (Number(record.reserved) > Number(record.qty)) {
    errors.push({ field: 'reserved', message: 'Reserved cannot exceed on-hand quantity' });
  }
  const allowed = INVOICE_STATUSES;
  if (record.status && !allowed.includes(record.status)) {
    errors.push({ field: 'status', message: `Status must be one of: ${allowed.join(', ')}` });
  }
  return { valid: errors.length === 0, errors };
}

/** Compute derived fields for Invoice #7 */
export function deriveInvoice7(record) {
  const qty = Number(record?.qty ?? 0);
  const reserved = Number(record?.reserved ?? 0);
  const unitCost = Number(record?.unitCost ?? 0);
  const available = Math.max(0, qty - reserved);
  const extended = available * unitCost;
  const utilization = qty > 0 ? reserved / qty : 0;
  return {
    ...record,
    available,
    extendedValue: Math.round(extended * 100) / 100,
    utilization: Math.round(utilization * 1000) / 1000,
    isLow: available <= 12,
  };
}

/**
 * Create a normalized Invoice record #8
 * @param {object} input
 * @returns {object}
 */
export function createInvoice8(input = {}) {
  const now = new Date().toISOString();
  return {
    id: input.id || `invoice_${Date.now().toString(36)}_${i}`,
    name: input.name || `Invoice Item 8`,
    status: input.status || 'Draft',
    category: input.category || 'Tooling',
    department: input.department || 'IT',
    warehouse: input.warehouse || 'Main DC',
    qty: Number(input.qty ?? 13),
    unitCost: Number(input.unitCost ?? 7.00),
    reserved: Number(input.reserved ?? 0),
    notes: input.notes || '',
    createdAt: input.createdAt || now,
    updatedAt: now,
    version: Number(input.version ?? 1),
    meta: { source: 'domain/Invoice', index: 8 },
  };
}

/** Validate Invoice record #8 against business rules */
export function validateInvoice8(record) {
  const errors = [];
  if (!record) {
    errors.push({ field: '_root', message: 'Record is required' });
    return { valid: false, errors };
  }
  if (!record.name || String(record.name).trim().length < 2) {
    errors.push({ field: 'name', message: 'Name must be at least 2 characters' });
  }
  if (Number(record.qty) < 0) {
    errors.push({ field: 'qty', message: 'Quantity cannot be negative' });
  }
  if (Number(record.unitCost) < 0) {
    errors.push({ field: 'unitCost', message: 'Unit cost cannot be negative' });
  }
  if (Number(record.reserved) > Number(record.qty)) {
    errors.push({ field: 'reserved', message: 'Reserved cannot exceed on-hand quantity' });
  }
  const allowed = INVOICE_STATUSES;
  if (record.status && !allowed.includes(record.status)) {
    errors.push({ field: 'status', message: `Status must be one of: ${allowed.join(', ')}` });
  }
  return { valid: errors.length === 0, errors };
}

/** Compute derived fields for Invoice #8 */
export function deriveInvoice8(record) {
  const qty = Number(record?.qty ?? 0);
  const reserved = Number(record?.reserved ?? 0);
  const unitCost = Number(record?.unitCost ?? 0);
  const available = Math.max(0, qty - reserved);
  const extended = available * unitCost;
  const utilization = qty > 0 ? reserved / qty : 0;
  return {
    ...record,
    available,
    extendedValue: Math.round(extended * 100) / 100,
    utilization: Math.round(utilization * 1000) / 1000,
    isLow: available <= 13,
  };
}

/**
 * Create a normalized Invoice record #9
 * @param {object} input
 * @returns {object}
 */
export function createInvoice9(input = {}) {
  const now = new Date().toISOString();
  return {
    id: input.id || `invoice_${Date.now().toString(36)}_${i}`,
    name: input.name || `Invoice Item 9`,
    status: input.status || 'Draft',
    category: input.category || 'Spare',
    department: input.department || 'Quality',
    warehouse: input.warehouse || 'East Hub',
    qty: Number(input.qty ?? 14),
    unitCost: Number(input.unitCost ?? 7.75),
    reserved: Number(input.reserved ?? 0),
    notes: input.notes || '',
    createdAt: input.createdAt || now,
    updatedAt: now,
    version: Number(input.version ?? 1),
    meta: { source: 'domain/Invoice', index: 9 },
  };
}

/** Validate Invoice record #9 against business rules */
export function validateInvoice9(record) {
  const errors = [];
  if (!record) {
    errors.push({ field: '_root', message: 'Record is required' });
    return { valid: false, errors };
  }
  if (!record.name || String(record.name).trim().length < 2) {
    errors.push({ field: 'name', message: 'Name must be at least 2 characters' });
  }
  if (Number(record.qty) < 0) {
    errors.push({ field: 'qty', message: 'Quantity cannot be negative' });
  }
  if (Number(record.unitCost) < 0) {
    errors.push({ field: 'unitCost', message: 'Unit cost cannot be negative' });
  }
  if (Number(record.reserved) > Number(record.qty)) {
    errors.push({ field: 'reserved', message: 'Reserved cannot exceed on-hand quantity' });
  }
  const allowed = INVOICE_STATUSES;
  if (record.status && !allowed.includes(record.status)) {
    errors.push({ field: 'status', message: `Status must be one of: ${allowed.join(', ')}` });
  }
  return { valid: errors.length === 0, errors };
}

/** Compute derived fields for Invoice #9 */
export function deriveInvoice9(record) {
  const qty = Number(record?.qty ?? 0);
  const reserved = Number(record?.reserved ?? 0);
  const unitCost = Number(record?.unitCost ?? 0);
  const available = Math.max(0, qty - reserved);
  const extended = available * unitCost;
  const utilization = qty > 0 ? reserved / qty : 0;
  return {
    ...record,
    available,
    extendedValue: Math.round(extended * 100) / 100,
    utilization: Math.round(utilization * 1000) / 1000,
    isLow: available <= 14,
  };
}

/**
 * Create a normalized Invoice record #10
 * @param {object} input
 * @returns {object}
 */
export function createInvoice10(input = {}) {
  const now = new Date().toISOString();
  return {
    id: input.id || `invoice_${Date.now().toString(36)}_${i}`,
    name: input.name || `Invoice Item 10`,
    status: input.status || 'Draft',
    category: input.category || 'Electronic',
    department: input.department || 'Sales',
    warehouse: input.warehouse || 'East Hub',
    qty: Number(input.qty ?? 15),
    unitCost: Number(input.unitCost ?? 8.50),
    reserved: Number(input.reserved ?? 0),
    notes: input.notes || '',
    createdAt: input.createdAt || now,
    updatedAt: now,
    version: Number(input.version ?? 1),
    meta: { source: 'domain/Invoice', index: 10 },
  };
}

/** Validate Invoice record #10 against business rules */
export function validateInvoice10(record) {
  const errors = [];
  if (!record) {
    errors.push({ field: '_root', message: 'Record is required' });
    return { valid: false, errors };
  }
  if (!record.name || String(record.name).trim().length < 2) {
    errors.push({ field: 'name', message: 'Name must be at least 2 characters' });
  }
  if (Number(record.qty) < 0) {
    errors.push({ field: 'qty', message: 'Quantity cannot be negative' });
  }
  if (Number(record.unitCost) < 0) {
    errors.push({ field: 'unitCost', message: 'Unit cost cannot be negative' });
  }
  if (Number(record.reserved) > Number(record.qty)) {
    errors.push({ field: 'reserved', message: 'Reserved cannot exceed on-hand quantity' });
  }
  const allowed = INVOICE_STATUSES;
  if (record.status && !allowed.includes(record.status)) {
    errors.push({ field: 'status', message: `Status must be one of: ${allowed.join(', ')}` });
  }
  return { valid: errors.length === 0, errors };
}

/** Compute derived fields for Invoice #10 */
export function deriveInvoice10(record) {
  const qty = Number(record?.qty ?? 0);
  const reserved = Number(record?.reserved ?? 0);
  const unitCost = Number(record?.unitCost ?? 0);
  const available = Math.max(0, qty - reserved);
  const extended = available * unitCost;
  const utilization = qty > 0 ? reserved / qty : 0;
  return {
    ...record,
    available,
    extendedValue: Math.round(extended * 100) / 100,
    utilization: Math.round(utilization * 1000) / 1000,
    isLow: available <= 15,
  };
}

/**
 * Create a normalized Invoice record #11
 * @param {object} input
 * @returns {object}
 */
export function createInvoice11(input = {}) {
  const now = new Date().toISOString();
  return {
    id: input.id || `invoice_${Date.now().toString(36)}_${i}`,
    name: input.name || `Invoice Item 11`,
    status: input.status || 'Draft',
    category: input.category || 'Raw',
    department: input.department || 'Quality',
    warehouse: input.warehouse || 'Main DC',
    qty: Number(input.qty ?? 16),
    unitCost: Number(input.unitCost ?? 9.25),
    reserved: Number(input.reserved ?? 0),
    notes: input.notes || '',
    createdAt: input.createdAt || now,
    updatedAt: now,
    version: Number(input.version ?? 1),
    meta: { source: 'domain/Invoice', index: 11 },
  };
}

/** Validate Invoice record #11 against business rules */
export function validateInvoice11(record) {
  const errors = [];
  if (!record) {
    errors.push({ field: '_root', message: 'Record is required' });
    return { valid: false, errors };
  }
  if (!record.name || String(record.name).trim().length < 2) {
    errors.push({ field: 'name', message: 'Name must be at least 2 characters' });
  }
  if (Number(record.qty) < 0) {
    errors.push({ field: 'qty', message: 'Quantity cannot be negative' });
  }
  if (Number(record.unitCost) < 0) {
    errors.push({ field: 'unitCost', message: 'Unit cost cannot be negative' });
  }
  if (Number(record.reserved) > Number(record.qty)) {
    errors.push({ field: 'reserved', message: 'Reserved cannot exceed on-hand quantity' });
  }
  const allowed = INVOICE_STATUSES;
  if (record.status && !allowed.includes(record.status)) {
    errors.push({ field: 'status', message: `Status must be one of: ${allowed.join(', ')}` });
  }
  return { valid: errors.length === 0, errors };
}

/** Compute derived fields for Invoice #11 */
export function deriveInvoice11(record) {
  const qty = Number(record?.qty ?? 0);
  const reserved = Number(record?.reserved ?? 0);
  const unitCost = Number(record?.unitCost ?? 0);
  const available = Math.max(0, qty - reserved);
  const extended = available * unitCost;
  const utilization = qty > 0 ? reserved / qty : 0;
  return {
    ...record,
    available,
    extendedValue: Math.round(extended * 100) / 100,
    utilization: Math.round(utilization * 1000) / 1000,
    isLow: available <= 16,
  };
}

/**
 * Create a normalized Invoice record #12
 * @param {object} input
 * @returns {object}
 */
export function createInvoice12(input = {}) {
  const now = new Date().toISOString();
  return {
    id: input.id || `invoice_${Date.now().toString(36)}_${i}`,
    name: input.name || `Invoice Item 12`,
    status: input.status || 'Draft',
    category: input.category || 'Raw',
    department: input.department || 'HR',
    warehouse: input.warehouse || 'Main DC',
    qty: Number(input.qty ?? 17),
    unitCost: Number(input.unitCost ?? 10.00),
    reserved: Number(input.reserved ?? 0),
    notes: input.notes || '',
    createdAt: input.createdAt || now,
    updatedAt: now,
    version: Number(input.version ?? 1),
    meta: { source: 'domain/Invoice', index: 12 },
  };
}

/** Validate Invoice record #12 against business rules */
export function validateInvoice12(record) {
  const errors = [];
  if (!record) {
    errors.push({ field: '_root', message: 'Record is required' });
    return { valid: false, errors };
  }
  if (!record.name || String(record.name).trim().length < 2) {
    errors.push({ field: 'name', message: 'Name must be at least 2 characters' });
  }
  if (Number(record.qty) < 0) {
    errors.push({ field: 'qty', message: 'Quantity cannot be negative' });
  }
  if (Number(record.unitCost) < 0) {
    errors.push({ field: 'unitCost', message: 'Unit cost cannot be negative' });
  }
  if (Number(record.reserved) > Number(record.qty)) {
    errors.push({ field: 'reserved', message: 'Reserved cannot exceed on-hand quantity' });
  }
  const allowed = INVOICE_STATUSES;
  if (record.status && !allowed.includes(record.status)) {
    errors.push({ field: 'status', message: `Status must be one of: ${allowed.join(', ')}` });
  }
  return { valid: errors.length === 0, errors };
}

/** Compute derived fields for Invoice #12 */
export function deriveInvoice12(record) {
  const qty = Number(record?.qty ?? 0);
  const reserved = Number(record?.reserved ?? 0);
  const unitCost = Number(record?.unitCost ?? 0);
  const available = Math.max(0, qty - reserved);
  const extended = available * unitCost;
  const utilization = qty > 0 ? reserved / qty : 0;
  return {
    ...record,
    available,
    extendedValue: Math.round(extended * 100) / 100,
    utilization: Math.round(utilization * 1000) / 1000,
    isLow: available <= 17,
  };
}

/**
 * Create a normalized Invoice record #13
 * @param {object} input
 * @returns {object}
 */
export function createInvoice13(input = {}) {
  const now = new Date().toISOString();
  return {
    id: input.id || `invoice_${Date.now().toString(36)}_${i}`,
    name: input.name || `Invoice Item 13`,
    status: input.status || 'Draft',
    category: input.category || 'Tooling',
    department: input.department || 'IT',
    warehouse: input.warehouse || 'Overflow',
    qty: Number(input.qty ?? 18),
    unitCost: Number(input.unitCost ?? 10.75),
    reserved: Number(input.reserved ?? 0),
    notes: input.notes || '',
    createdAt: input.createdAt || now,
    updatedAt: now,
    version: Number(input.version ?? 1),
    meta: { source: 'domain/Invoice', index: 13 },
  };
}

/** Validate Invoice record #13 against business rules */
export function validateInvoice13(record) {
  const errors = [];
  if (!record) {
    errors.push({ field: '_root', message: 'Record is required' });
    return { valid: false, errors };
  }
  if (!record.name || String(record.name).trim().length < 2) {
    errors.push({ field: 'name', message: 'Name must be at least 2 characters' });
  }
  if (Number(record.qty) < 0) {
    errors.push({ field: 'qty', message: 'Quantity cannot be negative' });
  }
  if (Number(record.unitCost) < 0) {
    errors.push({ field: 'unitCost', message: 'Unit cost cannot be negative' });
  }
  if (Number(record.reserved) > Number(record.qty)) {
    errors.push({ field: 'reserved', message: 'Reserved cannot exceed on-hand quantity' });
  }
  const allowed = INVOICE_STATUSES;
  if (record.status && !allowed.includes(record.status)) {
    errors.push({ field: 'status', message: `Status must be one of: ${allowed.join(', ')}` });
  }
  return { valid: errors.length === 0, errors };
}

/** Compute derived fields for Invoice #13 */
export function deriveInvoice13(record) {
  const qty = Number(record?.qty ?? 0);
  const reserved = Number(record?.reserved ?? 0);
  const unitCost = Number(record?.unitCost ?? 0);
  const available = Math.max(0, qty - reserved);
  const extended = available * unitCost;
  const utilization = qty > 0 ? reserved / qty : 0;
  return {
    ...record,
    available,
    extendedValue: Math.round(extended * 100) / 100,
    utilization: Math.round(utilization * 1000) / 1000,
    isLow: available <= 18,
  };
}

/**
 * Create a normalized Invoice record #14
 * @param {object} input
 * @returns {object}
 */
export function createInvoice14(input = {}) {
  const now = new Date().toISOString();
  return {
    id: input.id || `invoice_${Date.now().toString(36)}_${i}`,
    name: input.name || `Invoice Item 14`,
    status: input.status || 'Draft',
    category: input.category || 'Finished',
    department: input.department || 'Sales',
    warehouse: input.warehouse || 'Overflow',
    qty: Number(input.qty ?? 19),
    unitCost: Number(input.unitCost ?? 11.50),
    reserved: Number(input.reserved ?? 0),
    notes: input.notes || '',
    createdAt: input.createdAt || now,
    updatedAt: now,
    version: Number(input.version ?? 1),
    meta: { source: 'domain/Invoice', index: 14 },
  };
}

/** Validate Invoice record #14 against business rules */
export function validateInvoice14(record) {
  const errors = [];
  if (!record) {
    errors.push({ field: '_root', message: 'Record is required' });
    return { valid: false, errors };
  }
  if (!record.name || String(record.name).trim().length < 2) {
    errors.push({ field: 'name', message: 'Name must be at least 2 characters' });
  }
  if (Number(record.qty) < 0) {
    errors.push({ field: 'qty', message: 'Quantity cannot be negative' });
  }
  if (Number(record.unitCost) < 0) {
    errors.push({ field: 'unitCost', message: 'Unit cost cannot be negative' });
  }
  if (Number(record.reserved) > Number(record.qty)) {
    errors.push({ field: 'reserved', message: 'Reserved cannot exceed on-hand quantity' });
  }
  const allowed = INVOICE_STATUSES;
  if (record.status && !allowed.includes(record.status)) {
    errors.push({ field: 'status', message: `Status must be one of: ${allowed.join(', ')}` });
  }
  return { valid: errors.length === 0, errors };
}

/** Compute derived fields for Invoice #14 */
export function deriveInvoice14(record) {
  const qty = Number(record?.qty ?? 0);
  const reserved = Number(record?.reserved ?? 0);
  const unitCost = Number(record?.unitCost ?? 0);
  const available = Math.max(0, qty - reserved);
  const extended = available * unitCost;
  const utilization = qty > 0 ? reserved / qty : 0;
  return {
    ...record,
    available,
    extendedValue: Math.round(extended * 100) / 100,
    utilization: Math.round(utilization * 1000) / 1000,
    isLow: available <= 19,
  };
}

/**
 * Create a normalized Invoice record #15
 * @param {object} input
 * @returns {object}
 */
export function createInvoice15(input = {}) {
  const now = new Date().toISOString();
  return {
    id: input.id || `invoice_${Date.now().toString(36)}_${i}`,
    name: input.name || `Invoice Item 15`,
    status: input.status || 'Draft',
    category: input.category || 'Raw',
    department: input.department || 'Finance',
    warehouse: input.warehouse || 'East Hub',
    qty: Number(input.qty ?? 20),
    unitCost: Number(input.unitCost ?? 12.25),
    reserved: Number(input.reserved ?? 0),
    notes: input.notes || '',
    createdAt: input.createdAt || now,
    updatedAt: now,
    version: Number(input.version ?? 1),
    meta: { source: 'domain/Invoice', index: 15 },
  };
}

/** Validate Invoice record #15 against business rules */
export function validateInvoice15(record) {
  const errors = [];
  if (!record) {
    errors.push({ field: '_root', message: 'Record is required' });
    return { valid: false, errors };
  }
  if (!record.name || String(record.name).trim().length < 2) {
    errors.push({ field: 'name', message: 'Name must be at least 2 characters' });
  }
  if (Number(record.qty) < 0) {
    errors.push({ field: 'qty', message: 'Quantity cannot be negative' });
  }
  if (Number(record.unitCost) < 0) {
    errors.push({ field: 'unitCost', message: 'Unit cost cannot be negative' });
  }
  if (Number(record.reserved) > Number(record.qty)) {
    errors.push({ field: 'reserved', message: 'Reserved cannot exceed on-hand quantity' });
  }
  const allowed = INVOICE_STATUSES;
  if (record.status && !allowed.includes(record.status)) {
    errors.push({ field: 'status', message: `Status must be one of: ${allowed.join(', ')}` });
  }
  return { valid: errors.length === 0, errors };
}

/** Compute derived fields for Invoice #15 */
export function deriveInvoice15(record) {
  const qty = Number(record?.qty ?? 0);
  const reserved = Number(record?.reserved ?? 0);
  const unitCost = Number(record?.unitCost ?? 0);
  const available = Math.max(0, qty - reserved);
  const extended = available * unitCost;
  const utilization = qty > 0 ? reserved / qty : 0;
  return {
    ...record,
    available,
    extendedValue: Math.round(extended * 100) / 100,
    utilization: Math.round(utilization * 1000) / 1000,
    isLow: available <= 5,
  };
}

/**
 * Create a normalized Invoice record #16
 * @param {object} input
 * @returns {object}
 */
export function createInvoice16(input = {}) {
  const now = new Date().toISOString();
  return {
    id: input.id || `invoice_${Date.now().toString(36)}_${i}`,
    name: input.name || `Invoice Item 16`,
    status: input.status || 'Draft',
    category: input.category || 'Packaging',
    department: input.department || 'Finance',
    warehouse: input.warehouse || 'Returns Dock',
    qty: Number(input.qty ?? 21),
    unitCost: Number(input.unitCost ?? 13.00),
    reserved: Number(input.reserved ?? 0),
    notes: input.notes || '',
    createdAt: input.createdAt || now,
    updatedAt: now,
    version: Number(input.version ?? 1),
    meta: { source: 'domain/Invoice', index: 16 },
  };
}

/** Validate Invoice record #16 against business rules */
export function validateInvoice16(record) {
  const errors = [];
  if (!record) {
    errors.push({ field: '_root', message: 'Record is required' });
    return { valid: false, errors };
  }
  if (!record.name || String(record.name).trim().length < 2) {
    errors.push({ field: 'name', message: 'Name must be at least 2 characters' });
  }
  if (Number(record.qty) < 0) {
    errors.push({ field: 'qty', message: 'Quantity cannot be negative' });
  }
  if (Number(record.unitCost) < 0) {
    errors.push({ field: 'unitCost', message: 'Unit cost cannot be negative' });
  }
  if (Number(record.reserved) > Number(record.qty)) {
    errors.push({ field: 'reserved', message: 'Reserved cannot exceed on-hand quantity' });
  }
  const allowed = INVOICE_STATUSES;
  if (record.status && !allowed.includes(record.status)) {
    errors.push({ field: 'status', message: `Status must be one of: ${allowed.join(', ')}` });
  }
  return { valid: errors.length === 0, errors };
}

/** Compute derived fields for Invoice #16 */
export function deriveInvoice16(record) {
  const qty = Number(record?.qty ?? 0);
  const reserved = Number(record?.reserved ?? 0);
  const unitCost = Number(record?.unitCost ?? 0);
  const available = Math.max(0, qty - reserved);
  const extended = available * unitCost;
  const utilization = qty > 0 ? reserved / qty : 0;
  return {
    ...record,
    available,
    extendedValue: Math.round(extended * 100) / 100,
    utilization: Math.round(utilization * 1000) / 1000,
    isLow: available <= 6,
  };
}

/**
 * Create a normalized Invoice record #17
 * @param {object} input
 * @returns {object}
 */
export function createInvoice17(input = {}) {
  const now = new Date().toISOString();
  return {
    id: input.id || `invoice_${Date.now().toString(36)}_${i}`,
    name: input.name || `Invoice Item 17`,
    status: input.status || 'Draft',
    category: input.category || 'Electronic',
    department: input.department || 'Operations',
    warehouse: input.warehouse || 'Returns Dock',
    qty: Number(input.qty ?? 22),
    unitCost: Number(input.unitCost ?? 13.75),
    reserved: Number(input.reserved ?? 0),
    notes: input.notes || '',
    createdAt: input.createdAt || now,
    updatedAt: now,
    version: Number(input.version ?? 1),
    meta: { source: 'domain/Invoice', index: 17 },
  };
}

/** Validate Invoice record #17 against business rules */
export function validateInvoice17(record) {
  const errors = [];
  if (!record) {
    errors.push({ field: '_root', message: 'Record is required' });
    return { valid: false, errors };
  }
  if (!record.name || String(record.name).trim().length < 2) {
    errors.push({ field: 'name', message: 'Name must be at least 2 characters' });
  }
  if (Number(record.qty) < 0) {
    errors.push({ field: 'qty', message: 'Quantity cannot be negative' });
  }
  if (Number(record.unitCost) < 0) {
    errors.push({ field: 'unitCost', message: 'Unit cost cannot be negative' });
  }
  if (Number(record.reserved) > Number(record.qty)) {
    errors.push({ field: 'reserved', message: 'Reserved cannot exceed on-hand quantity' });
  }
  const allowed = INVOICE_STATUSES;
  if (record.status && !allowed.includes(record.status)) {
    errors.push({ field: 'status', message: `Status must be one of: ${allowed.join(', ')}` });
  }
  return { valid: errors.length === 0, errors };
}

/** Compute derived fields for Invoice #17 */
export function deriveInvoice17(record) {
  const qty = Number(record?.qty ?? 0);
  const reserved = Number(record?.reserved ?? 0);
  const unitCost = Number(record?.unitCost ?? 0);
  const available = Math.max(0, qty - reserved);
  const extended = available * unitCost;
  const utilization = qty > 0 ? reserved / qty : 0;
  return {
    ...record,
    available,
    extendedValue: Math.round(extended * 100) / 100,
    utilization: Math.round(utilization * 1000) / 1000,
    isLow: available <= 7,
  };
}

/**
 * Create a normalized Invoice record #18
 * @param {object} input
 * @returns {object}
 */
export function createInvoice18(input = {}) {
  const now = new Date().toISOString();
  return {
    id: input.id || `invoice_${Date.now().toString(36)}_${i}`,
    name: input.name || `Invoice Item 18`,
    status: input.status || 'Draft',
    category: input.category || 'Consumable',
    department: input.department || 'HR',
    warehouse: input.warehouse || 'Returns Dock',
    qty: Number(input.qty ?? 23),
    unitCost: Number(input.unitCost ?? 14.50),
    reserved: Number(input.reserved ?? 0),
    notes: input.notes || '',
    createdAt: input.createdAt || now,
    updatedAt: now,
    version: Number(input.version ?? 1),
    meta: { source: 'domain/Invoice', index: 18 },
  };
}

/** Validate Invoice record #18 against business rules */
export function validateInvoice18(record) {
  const errors = [];
  if (!record) {
    errors.push({ field: '_root', message: 'Record is required' });
    return { valid: false, errors };
  }
  if (!record.name || String(record.name).trim().length < 2) {
    errors.push({ field: 'name', message: 'Name must be at least 2 characters' });
  }
  if (Number(record.qty) < 0) {
    errors.push({ field: 'qty', message: 'Quantity cannot be negative' });
  }
  if (Number(record.unitCost) < 0) {
    errors.push({ field: 'unitCost', message: 'Unit cost cannot be negative' });
  }
  if (Number(record.reserved) > Number(record.qty)) {
    errors.push({ field: 'reserved', message: 'Reserved cannot exceed on-hand quantity' });
  }
  const allowed = INVOICE_STATUSES;
  if (record.status && !allowed.includes(record.status)) {
    errors.push({ field: 'status', message: `Status must be one of: ${allowed.join(', ')}` });
  }
  return { valid: errors.length === 0, errors };
}

/** Compute derived fields for Invoice #18 */
export function deriveInvoice18(record) {
  const qty = Number(record?.qty ?? 0);
  const reserved = Number(record?.reserved ?? 0);
  const unitCost = Number(record?.unitCost ?? 0);
  const available = Math.max(0, qty - reserved);
  const extended = available * unitCost;
  const utilization = qty > 0 ? reserved / qty : 0;
  return {
    ...record,
    available,
    extendedValue: Math.round(extended * 100) / 100,
    utilization: Math.round(utilization * 1000) / 1000,
    isLow: available <= 8,
  };
}

/**
 * Create a normalized Invoice record #19
 * @param {object} input
 * @returns {object}
 */
export function createInvoice19(input = {}) {
  const now = new Date().toISOString();
  return {
    id: input.id || `invoice_${Date.now().toString(36)}_${i}`,
    name: input.name || `Invoice Item 19`,
    status: input.status || 'Draft',
    category: input.category || 'Consumable',
    department: input.department || 'Operations',
    warehouse: input.warehouse || 'Main DC',
    qty: Number(input.qty ?? 24),
    unitCost: Number(input.unitCost ?? 15.25),
    reserved: Number(input.reserved ?? 0),
    notes: input.notes || '',
    createdAt: input.createdAt || now,
    updatedAt: now,
    version: Number(input.version ?? 1),
    meta: { source: 'domain/Invoice', index: 19 },
  };
}

/** Validate Invoice record #19 against business rules */
export function validateInvoice19(record) {
  const errors = [];
  if (!record) {
    errors.push({ field: '_root', message: 'Record is required' });
    return { valid: false, errors };
  }
  if (!record.name || String(record.name).trim().length < 2) {
    errors.push({ field: 'name', message: 'Name must be at least 2 characters' });
  }
  if (Number(record.qty) < 0) {
    errors.push({ field: 'qty', message: 'Quantity cannot be negative' });
  }
  if (Number(record.unitCost) < 0) {
    errors.push({ field: 'unitCost', message: 'Unit cost cannot be negative' });
  }
  if (Number(record.reserved) > Number(record.qty)) {
    errors.push({ field: 'reserved', message: 'Reserved cannot exceed on-hand quantity' });
  }
  const allowed = INVOICE_STATUSES;
  if (record.status && !allowed.includes(record.status)) {
    errors.push({ field: 'status', message: `Status must be one of: ${allowed.join(', ')}` });
  }
  return { valid: errors.length === 0, errors };
}

/** Compute derived fields for Invoice #19 */
export function deriveInvoice19(record) {
  const qty = Number(record?.qty ?? 0);
  const reserved = Number(record?.reserved ?? 0);
  const unitCost = Number(record?.unitCost ?? 0);
  const available = Math.max(0, qty - reserved);
  const extended = available * unitCost;
  const utilization = qty > 0 ? reserved / qty : 0;
  return {
    ...record,
    available,
    extendedValue: Math.round(extended * 100) / 100,
    utilization: Math.round(utilization * 1000) / 1000,
    isLow: available <= 9,
  };
}

/**
 * Create a normalized Invoice record #20
 * @param {object} input
 * @returns {object}
 */
export function createInvoice20(input = {}) {
  const now = new Date().toISOString();
  return {
    id: input.id || `invoice_${Date.now().toString(36)}_${i}`,
    name: input.name || `Invoice Item 20`,
    status: input.status || 'Draft',
    category: input.category || 'Mechanical',
    department: input.department || 'HR',
    warehouse: input.warehouse || 'West Hub',
    qty: Number(input.qty ?? 25),
    unitCost: Number(input.unitCost ?? 16.00),
    reserved: Number(input.reserved ?? 0),
    notes: input.notes || '',
    createdAt: input.createdAt || now,
    updatedAt: now,
    version: Number(input.version ?? 1),
    meta: { source: 'domain/Invoice', index: 20 },
  };
}

/** Validate Invoice record #20 against business rules */
export function validateInvoice20(record) {
  const errors = [];
  if (!record) {
    errors.push({ field: '_root', message: 'Record is required' });
    return { valid: false, errors };
  }
  if (!record.name || String(record.name).trim().length < 2) {
    errors.push({ field: 'name', message: 'Name must be at least 2 characters' });
  }
  if (Number(record.qty) < 0) {
    errors.push({ field: 'qty', message: 'Quantity cannot be negative' });
  }
  if (Number(record.unitCost) < 0) {
    errors.push({ field: 'unitCost', message: 'Unit cost cannot be negative' });
  }
  if (Number(record.reserved) > Number(record.qty)) {
    errors.push({ field: 'reserved', message: 'Reserved cannot exceed on-hand quantity' });
  }
  const allowed = INVOICE_STATUSES;
  if (record.status && !allowed.includes(record.status)) {
    errors.push({ field: 'status', message: `Status must be one of: ${allowed.join(', ')}` });
  }
  return { valid: errors.length === 0, errors };
}

/** Compute derived fields for Invoice #20 */
export function deriveInvoice20(record) {
  const qty = Number(record?.qty ?? 0);
  const reserved = Number(record?.reserved ?? 0);
  const unitCost = Number(record?.unitCost ?? 0);
  const available = Math.max(0, qty - reserved);
  const extended = available * unitCost;
  const utilization = qty > 0 ? reserved / qty : 0;
  return {
    ...record,
    available,
    extendedValue: Math.round(extended * 100) / 100,
    utilization: Math.round(utilization * 1000) / 1000,
    isLow: available <= 10,
  };
}

/**
 * Create a normalized Invoice record #21
 * @param {object} input
 * @returns {object}
 */
export function createInvoice21(input = {}) {
  const now = new Date().toISOString();
  return {
    id: input.id || `invoice_${Date.now().toString(36)}_${i}`,
    name: input.name || `Invoice Item 21`,
    status: input.status || 'Draft',
    category: input.category || 'Mechanical',
    department: input.department || 'Sales',
    warehouse: input.warehouse || 'Overflow',
    qty: Number(input.qty ?? 26),
    unitCost: Number(input.unitCost ?? 16.75),
    reserved: Number(input.reserved ?? 0),
    notes: input.notes || '',
    createdAt: input.createdAt || now,
    updatedAt: now,
    version: Number(input.version ?? 1),
    meta: { source: 'domain/Invoice', index: 21 },
  };
}

/** Validate Invoice record #21 against business rules */
export function validateInvoice21(record) {
  const errors = [];
  if (!record) {
    errors.push({ field: '_root', message: 'Record is required' });
    return { valid: false, errors };
  }
  if (!record.name || String(record.name).trim().length < 2) {
    errors.push({ field: 'name', message: 'Name must be at least 2 characters' });
  }
  if (Number(record.qty) < 0) {
    errors.push({ field: 'qty', message: 'Quantity cannot be negative' });
  }
  if (Number(record.unitCost) < 0) {
    errors.push({ field: 'unitCost', message: 'Unit cost cannot be negative' });
  }
  if (Number(record.reserved) > Number(record.qty)) {
    errors.push({ field: 'reserved', message: 'Reserved cannot exceed on-hand quantity' });
  }
  const allowed = INVOICE_STATUSES;
  if (record.status && !allowed.includes(record.status)) {
    errors.push({ field: 'status', message: `Status must be one of: ${allowed.join(', ')}` });
  }
  return { valid: errors.length === 0, errors };
}

/** Compute derived fields for Invoice #21 */
export function deriveInvoice21(record) {
  const qty = Number(record?.qty ?? 0);
  const reserved = Number(record?.reserved ?? 0);
  const unitCost = Number(record?.unitCost ?? 0);
  const available = Math.max(0, qty - reserved);
  const extended = available * unitCost;
  const utilization = qty > 0 ? reserved / qty : 0;
  return {
    ...record,
    available,
    extendedValue: Math.round(extended * 100) / 100,
    utilization: Math.round(utilization * 1000) / 1000,
    isLow: available <= 11,
  };
}

/**
 * Create a normalized Invoice record #22
 * @param {object} input
 * @returns {object}
 */
export function createInvoice22(input = {}) {
  const now = new Date().toISOString();
  return {
    id: input.id || `invoice_${Date.now().toString(36)}_${i}`,
    name: input.name || `Invoice Item 22`,
    status: input.status || 'Draft',
    category: input.category || 'Mechanical',
    department: input.department || 'IT',
    warehouse: input.warehouse || 'Main DC',
    qty: Number(input.qty ?? 27),
    unitCost: Number(input.unitCost ?? 17.50),
    reserved: Number(input.reserved ?? 0),
    notes: input.notes || '',
    createdAt: input.createdAt || now,
    updatedAt: now,
    version: Number(input.version ?? 1),
    meta: { source: 'domain/Invoice', index: 22 },
  };
}

/** Validate Invoice record #22 against business rules */
export function validateInvoice22(record) {
  const errors = [];
  if (!record) {
    errors.push({ field: '_root', message: 'Record is required' });
    return { valid: false, errors };
  }
  if (!record.name || String(record.name).trim().length < 2) {
    errors.push({ field: 'name', message: 'Name must be at least 2 characters' });
  }
  if (Number(record.qty) < 0) {
    errors.push({ field: 'qty', message: 'Quantity cannot be negative' });
  }
  if (Number(record.unitCost) < 0) {
    errors.push({ field: 'unitCost', message: 'Unit cost cannot be negative' });
  }
  if (Number(record.reserved) > Number(record.qty)) {
    errors.push({ field: 'reserved', message: 'Reserved cannot exceed on-hand quantity' });
  }
  const allowed = INVOICE_STATUSES;
  if (record.status && !allowed.includes(record.status)) {
    errors.push({ field: 'status', message: `Status must be one of: ${allowed.join(', ')}` });
  }
  return { valid: errors.length === 0, errors };
}

/** Compute derived fields for Invoice #22 */
export function deriveInvoice22(record) {
  const qty = Number(record?.qty ?? 0);
  const reserved = Number(record?.reserved ?? 0);
  const unitCost = Number(record?.unitCost ?? 0);
  const available = Math.max(0, qty - reserved);
  const extended = available * unitCost;
  const utilization = qty > 0 ? reserved / qty : 0;
  return {
    ...record,
    available,
    extendedValue: Math.round(extended * 100) / 100,
    utilization: Math.round(utilization * 1000) / 1000,
    isLow: available <= 12,
  };
}

/**
 * Create a normalized Invoice record #23
 * @param {object} input
 * @returns {object}
 */
export function createInvoice23(input = {}) {
  const now = new Date().toISOString();
  return {
    id: input.id || `invoice_${Date.now().toString(36)}_${i}`,
    name: input.name || `Invoice Item 23`,
    status: input.status || 'Draft',
    category: input.category || 'Packaging',
    department: input.department || 'Finance',
    warehouse: input.warehouse || 'Returns Dock',
    qty: Number(input.qty ?? 28),
    unitCost: Number(input.unitCost ?? 18.25),
    reserved: Number(input.reserved ?? 0),
    notes: input.notes || '',
    createdAt: input.createdAt || now,
    updatedAt: now,
    version: Number(input.version ?? 1),
    meta: { source: 'domain/Invoice', index: 23 },
  };
}

/** Validate Invoice record #23 against business rules */
export function validateInvoice23(record) {
  const errors = [];
  if (!record) {
    errors.push({ field: '_root', message: 'Record is required' });
    return { valid: false, errors };
  }
  if (!record.name || String(record.name).trim().length < 2) {
    errors.push({ field: 'name', message: 'Name must be at least 2 characters' });
  }
  if (Number(record.qty) < 0) {
    errors.push({ field: 'qty', message: 'Quantity cannot be negative' });
  }
  if (Number(record.unitCost) < 0) {
    errors.push({ field: 'unitCost', message: 'Unit cost cannot be negative' });
  }
  if (Number(record.reserved) > Number(record.qty)) {
    errors.push({ field: 'reserved', message: 'Reserved cannot exceed on-hand quantity' });
  }
  const allowed = INVOICE_STATUSES;
  if (record.status && !allowed.includes(record.status)) {
    errors.push({ field: 'status', message: `Status must be one of: ${allowed.join(', ')}` });
  }
  return { valid: errors.length === 0, errors };
}

/** Compute derived fields for Invoice #23 */
export function deriveInvoice23(record) {
  const qty = Number(record?.qty ?? 0);
  const reserved = Number(record?.reserved ?? 0);
  const unitCost = Number(record?.unitCost ?? 0);
  const available = Math.max(0, qty - reserved);
  const extended = available * unitCost;
  const utilization = qty > 0 ? reserved / qty : 0;
  return {
    ...record,
    available,
    extendedValue: Math.round(extended * 100) / 100,
    utilization: Math.round(utilization * 1000) / 1000,
    isLow: available <= 13,
  };
}

/**
 * Create a normalized Invoice record #24
 * @param {object} input
 * @returns {object}
 */
export function createInvoice24(input = {}) {
  const now = new Date().toISOString();
  return {
    id: input.id || `invoice_${Date.now().toString(36)}_${i}`,
    name: input.name || `Invoice Item 24`,
    status: input.status || 'Draft',
    category: input.category || 'Mechanical',
    department: input.department || 'HR',
    warehouse: input.warehouse || 'Overflow',
    qty: Number(input.qty ?? 29),
    unitCost: Number(input.unitCost ?? 19.00),
    reserved: Number(input.reserved ?? 0),
    notes: input.notes || '',
    createdAt: input.createdAt || now,
    updatedAt: now,
    version: Number(input.version ?? 1),
    meta: { source: 'domain/Invoice', index: 24 },
  };
}

/** Validate Invoice record #24 against business rules */
export function validateInvoice24(record) {
  const errors = [];
  if (!record) {
    errors.push({ field: '_root', message: 'Record is required' });
    return { valid: false, errors };
  }
  if (!record.name || String(record.name).trim().length < 2) {
    errors.push({ field: 'name', message: 'Name must be at least 2 characters' });
  }
  if (Number(record.qty) < 0) {
    errors.push({ field: 'qty', message: 'Quantity cannot be negative' });
  }
  if (Number(record.unitCost) < 0) {
    errors.push({ field: 'unitCost', message: 'Unit cost cannot be negative' });
  }
  if (Number(record.reserved) > Number(record.qty)) {
    errors.push({ field: 'reserved', message: 'Reserved cannot exceed on-hand quantity' });
  }
  const allowed = INVOICE_STATUSES;
  if (record.status && !allowed.includes(record.status)) {
    errors.push({ field: 'status', message: `Status must be one of: ${allowed.join(', ')}` });
  }
  return { valid: errors.length === 0, errors };
}

/** Compute derived fields for Invoice #24 */
export function deriveInvoice24(record) {
  const qty = Number(record?.qty ?? 0);
  const reserved = Number(record?.reserved ?? 0);
  const unitCost = Number(record?.unitCost ?? 0);
  const available = Math.max(0, qty - reserved);
  const extended = available * unitCost;
  const utilization = qty > 0 ? reserved / qty : 0;
  return {
    ...record,
    available,
    extendedValue: Math.round(extended * 100) / 100,
    utilization: Math.round(utilization * 1000) / 1000,
    isLow: available <= 14,
  };
}

/**
 * Create a normalized Invoice record #25
 * @param {object} input
 * @returns {object}
 */
export function createInvoice25(input = {}) {
  const now = new Date().toISOString();
  return {
    id: input.id || `invoice_${Date.now().toString(36)}_${i}`,
    name: input.name || `Invoice Item 25`,
    status: input.status || 'Draft',
    category: input.category || 'Consumable',
    department: input.department || 'Quality',
    warehouse: input.warehouse || 'Returns Dock',
    qty: Number(input.qty ?? 30),
    unitCost: Number(input.unitCost ?? 19.75),
    reserved: Number(input.reserved ?? 0),
    notes: input.notes || '',
    createdAt: input.createdAt || now,
    updatedAt: now,
    version: Number(input.version ?? 1),
    meta: { source: 'domain/Invoice', index: 25 },
  };
}

/** Validate Invoice record #25 against business rules */
export function validateInvoice25(record) {
  const errors = [];
  if (!record) {
    errors.push({ field: '_root', message: 'Record is required' });
    return { valid: false, errors };
  }
  if (!record.name || String(record.name).trim().length < 2) {
    errors.push({ field: 'name', message: 'Name must be at least 2 characters' });
  }
  if (Number(record.qty) < 0) {
    errors.push({ field: 'qty', message: 'Quantity cannot be negative' });
  }
  if (Number(record.unitCost) < 0) {
    errors.push({ field: 'unitCost', message: 'Unit cost cannot be negative' });
  }
  if (Number(record.reserved) > Number(record.qty)) {
    errors.push({ field: 'reserved', message: 'Reserved cannot exceed on-hand quantity' });
  }
  const allowed = INVOICE_STATUSES;
  if (record.status && !allowed.includes(record.status)) {
    errors.push({ field: 'status', message: `Status must be one of: ${allowed.join(', ')}` });
  }
  return { valid: errors.length === 0, errors };
}

/** Compute derived fields for Invoice #25 */
export function deriveInvoice25(record) {
  const qty = Number(record?.qty ?? 0);
  const reserved = Number(record?.reserved ?? 0);
  const unitCost = Number(record?.unitCost ?? 0);
  const available = Math.max(0, qty - reserved);
  const extended = available * unitCost;
  const utilization = qty > 0 ? reserved / qty : 0;
  return {
    ...record,
    available,
    extendedValue: Math.round(extended * 100) / 100,
    utilization: Math.round(utilization * 1000) / 1000,
    isLow: available <= 15,
  };
}

/**
 * Create a normalized Invoice record #26
 * @param {object} input
 * @returns {object}
 */
export function createInvoice26(input = {}) {
  const now = new Date().toISOString();
  return {
    id: input.id || `invoice_${Date.now().toString(36)}_${i}`,
    name: input.name || `Invoice Item 26`,
    status: input.status || 'Draft',
    category: input.category || 'Electronic',
    department: input.department || 'Maintenance',
    warehouse: input.warehouse || 'East Hub',
    qty: Number(input.qty ?? 31),
    unitCost: Number(input.unitCost ?? 20.50),
    reserved: Number(input.reserved ?? 0),
    notes: input.notes || '',
    createdAt: input.createdAt || now,
    updatedAt: now,
    version: Number(input.version ?? 1),
    meta: { source: 'domain/Invoice', index: 26 },
  };
}

/** Validate Invoice record #26 against business rules */
export function validateInvoice26(record) {
  const errors = [];
  if (!record) {
    errors.push({ field: '_root', message: 'Record is required' });
    return { valid: false, errors };
  }
  if (!record.name || String(record.name).trim().length < 2) {
    errors.push({ field: 'name', message: 'Name must be at least 2 characters' });
  }
  if (Number(record.qty) < 0) {
    errors.push({ field: 'qty', message: 'Quantity cannot be negative' });
  }
  if (Number(record.unitCost) < 0) {
    errors.push({ field: 'unitCost', message: 'Unit cost cannot be negative' });
  }
  if (Number(record.reserved) > Number(record.qty)) {
    errors.push({ field: 'reserved', message: 'Reserved cannot exceed on-hand quantity' });
  }
  const allowed = INVOICE_STATUSES;
  if (record.status && !allowed.includes(record.status)) {
    errors.push({ field: 'status', message: `Status must be one of: ${allowed.join(', ')}` });
  }
  return { valid: errors.length === 0, errors };
}

/** Compute derived fields for Invoice #26 */
export function deriveInvoice26(record) {
  const qty = Number(record?.qty ?? 0);
  const reserved = Number(record?.reserved ?? 0);
  const unitCost = Number(record?.unitCost ?? 0);
  const available = Math.max(0, qty - reserved);
  const extended = available * unitCost;
  const utilization = qty > 0 ? reserved / qty : 0;
  return {
    ...record,
    available,
    extendedValue: Math.round(extended * 100) / 100,
    utilization: Math.round(utilization * 1000) / 1000,
    isLow: available <= 16,
  };
}

/**
 * Create a normalized Invoice record #27
 * @param {object} input
 * @returns {object}
 */
export function createInvoice27(input = {}) {
  const now = new Date().toISOString();
  return {
    id: input.id || `invoice_${Date.now().toString(36)}_${i}`,
    name: input.name || `Invoice Item 27`,
    status: input.status || 'Draft',
    category: input.category || 'Tooling',
    department: input.department || 'Finance',
    warehouse: input.warehouse || 'Returns Dock',
    qty: Number(input.qty ?? 32),
    unitCost: Number(input.unitCost ?? 21.25),
    reserved: Number(input.reserved ?? 0),
    notes: input.notes || '',
    createdAt: input.createdAt || now,
    updatedAt: now,
    version: Number(input.version ?? 1),
    meta: { source: 'domain/Invoice', index: 27 },
  };
}

/** Validate Invoice record #27 against business rules */
export function validateInvoice27(record) {
  const errors = [];
  if (!record) {
    errors.push({ field: '_root', message: 'Record is required' });
    return { valid: false, errors };
  }
  if (!record.name || String(record.name).trim().length < 2) {
    errors.push({ field: 'name', message: 'Name must be at least 2 characters' });
  }
  if (Number(record.qty) < 0) {
    errors.push({ field: 'qty', message: 'Quantity cannot be negative' });
  }
  if (Number(record.unitCost) < 0) {
    errors.push({ field: 'unitCost', message: 'Unit cost cannot be negative' });
  }
  if (Number(record.reserved) > Number(record.qty)) {
    errors.push({ field: 'reserved', message: 'Reserved cannot exceed on-hand quantity' });
  }
  const allowed = INVOICE_STATUSES;
  if (record.status && !allowed.includes(record.status)) {
    errors.push({ field: 'status', message: `Status must be one of: ${allowed.join(', ')}` });
  }
  return { valid: errors.length === 0, errors };
}

/** Compute derived fields for Invoice #27 */
export function deriveInvoice27(record) {
  const qty = Number(record?.qty ?? 0);
  const reserved = Number(record?.reserved ?? 0);
  const unitCost = Number(record?.unitCost ?? 0);
  const available = Math.max(0, qty - reserved);
  const extended = available * unitCost;
  const utilization = qty > 0 ? reserved / qty : 0;
  return {
    ...record,
    available,
    extendedValue: Math.round(extended * 100) / 100,
    utilization: Math.round(utilization * 1000) / 1000,
    isLow: available <= 17,
  };
}

/** Batch validate a list of Invoice records */
export function validateInvoiceBatch(records) {
  const results = [];
  for (const rec of records || []) {
    results.push(validateInvoice0(rec));
  }
  const invalid = results.filter((r) => !r.valid).length;
  return { total: results.length, invalid, results };
}
