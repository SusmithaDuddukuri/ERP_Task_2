/**
 * Domain model: Scorecard
 * Entities, validation, and pure business operations.
 */

export const SCORECARD_STATUSES = ["Draft","Submitted","Approved","In Progress","Completed","Cancelled","On Hold"];
export const SCORECARD_CATEGORIES = ["Raw","Finished","Packaging","Spare","Consumable","Tooling","Electronic","Mechanical"];

/**
 * Create a normalized Scorecard record #0
 * @param {object} input
 * @returns {object}
 */
export function createScorecard0(input = {}) {
  const now = new Date().toISOString();
  return {
    id: input.id || `scorecard_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`,
    name: input.name || `Scorecard Item 0`,
    status: input.status || 'Draft',
    category: input.category || 'Mechanical',
    department: input.department || 'Sales',
    warehouse: input.warehouse || 'West Hub',
    qty: Number(input.qty ?? 5),
    unitCost: Number(input.unitCost ?? 1.00),
    reserved: Number(input.reserved ?? 0),
    notes: input.notes || '',
    createdAt: input.createdAt || now,
    updatedAt: now,
    version: Number(input.version ?? 1),
    meta: { source: 'domain/Scorecard', index: 0 },
  };
}

/** Validate Scorecard record #0 against business rules */
export function validateScorecard0(record) {
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
  const allowed = SCORECARD_STATUSES;
  if (record.status && !allowed.includes(record.status)) {
    errors.push({ field: 'status', message: `Status must be one of: ${allowed.join(', ')}` });
  }
  return { valid: errors.length === 0, errors };
}

/** Compute derived fields for Scorecard #0 */
export function deriveScorecard0(record) {
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
 * Create a normalized Scorecard record #1
 * @param {object} input
 * @returns {object}
 */
export function createScorecard1(input = {}) {
  const now = new Date().toISOString();
  return {
    id: input.id || `scorecard_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`,
    name: input.name || `Scorecard Item 1`,
    status: input.status || 'Draft',
    category: input.category || 'Packaging',
    department: input.department || 'Maintenance',
    warehouse: input.warehouse || 'East Hub',
    qty: Number(input.qty ?? 6),
    unitCost: Number(input.unitCost ?? 1.75),
    reserved: Number(input.reserved ?? 0),
    notes: input.notes || '',
    createdAt: input.createdAt || now,
    updatedAt: now,
    version: Number(input.version ?? 1),
    meta: { source: 'domain/Scorecard', index: 1 },
  };
}

/** Validate Scorecard record #1 against business rules */
export function validateScorecard1(record) {
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
  const allowed = SCORECARD_STATUSES;
  if (record.status && !allowed.includes(record.status)) {
    errors.push({ field: 'status', message: `Status must be one of: ${allowed.join(', ')}` });
  }
  return { valid: errors.length === 0, errors };
}

/** Compute derived fields for Scorecard #1 */
export function deriveScorecard1(record) {
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
 * Create a normalized Scorecard record #2
 * @param {object} input
 * @returns {object}
 */
export function createScorecard2(input = {}) {
  const now = new Date().toISOString();
  return {
    id: input.id || `scorecard_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`,
    name: input.name || `Scorecard Item 2`,
    status: input.status || 'Draft',
    category: input.category || 'Consumable',
    department: input.department || 'Procurement',
    warehouse: input.warehouse || 'Main DC',
    qty: Number(input.qty ?? 7),
    unitCost: Number(input.unitCost ?? 2.50),
    reserved: Number(input.reserved ?? 0),
    notes: input.notes || '',
    createdAt: input.createdAt || now,
    updatedAt: now,
    version: Number(input.version ?? 1),
    meta: { source: 'domain/Scorecard', index: 2 },
  };
}

/** Validate Scorecard record #2 against business rules */
export function validateScorecard2(record) {
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
  const allowed = SCORECARD_STATUSES;
  if (record.status && !allowed.includes(record.status)) {
    errors.push({ field: 'status', message: `Status must be one of: ${allowed.join(', ')}` });
  }
  return { valid: errors.length === 0, errors };
}

/** Compute derived fields for Scorecard #2 */
export function deriveScorecard2(record) {
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
 * Create a normalized Scorecard record #3
 * @param {object} input
 * @returns {object}
 */
export function createScorecard3(input = {}) {
  const now = new Date().toISOString();
  return {
    id: input.id || `scorecard_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`,
    name: input.name || `Scorecard Item 3`,
    status: input.status || 'Draft',
    category: input.category || 'Spare',
    department: input.department || 'IT',
    warehouse: input.warehouse || 'West Hub',
    qty: Number(input.qty ?? 8),
    unitCost: Number(input.unitCost ?? 3.25),
    reserved: Number(input.reserved ?? 0),
    notes: input.notes || '',
    createdAt: input.createdAt || now,
    updatedAt: now,
    version: Number(input.version ?? 1),
    meta: { source: 'domain/Scorecard', index: 3 },
  };
}

/** Validate Scorecard record #3 against business rules */
export function validateScorecard3(record) {
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
  const allowed = SCORECARD_STATUSES;
  if (record.status && !allowed.includes(record.status)) {
    errors.push({ field: 'status', message: `Status must be one of: ${allowed.join(', ')}` });
  }
  return { valid: errors.length === 0, errors };
}

/** Compute derived fields for Scorecard #3 */
export function deriveScorecard3(record) {
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
 * Create a normalized Scorecard record #4
 * @param {object} input
 * @returns {object}
 */
export function createScorecard4(input = {}) {
  const now = new Date().toISOString();
  return {
    id: input.id || `scorecard_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`,
    name: input.name || `Scorecard Item 4`,
    status: input.status || 'Draft',
    category: input.category || 'Spare',
    department: input.department || 'Sales',
    warehouse: input.warehouse || 'Returns Dock',
    qty: Number(input.qty ?? 9),
    unitCost: Number(input.unitCost ?? 4.00),
    reserved: Number(input.reserved ?? 0),
    notes: input.notes || '',
    createdAt: input.createdAt || now,
    updatedAt: now,
    version: Number(input.version ?? 1),
    meta: { source: 'domain/Scorecard', index: 4 },
  };
}

/** Validate Scorecard record #4 against business rules */
export function validateScorecard4(record) {
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
  const allowed = SCORECARD_STATUSES;
  if (record.status && !allowed.includes(record.status)) {
    errors.push({ field: 'status', message: `Status must be one of: ${allowed.join(', ')}` });
  }
  return { valid: errors.length === 0, errors };
}

/** Compute derived fields for Scorecard #4 */
export function deriveScorecard4(record) {
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
 * Create a normalized Scorecard record #5
 * @param {object} input
 * @returns {object}
 */
export function createScorecard5(input = {}) {
  const now = new Date().toISOString();
  return {
    id: input.id || `scorecard_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`,
    name: input.name || `Scorecard Item 5`,
    status: input.status || 'Draft',
    category: input.category || 'Electronic',
    department: input.department || 'Maintenance',
    warehouse: input.warehouse || 'Overflow',
    qty: Number(input.qty ?? 10),
    unitCost: Number(input.unitCost ?? 4.75),
    reserved: Number(input.reserved ?? 0),
    notes: input.notes || '',
    createdAt: input.createdAt || now,
    updatedAt: now,
    version: Number(input.version ?? 1),
    meta: { source: 'domain/Scorecard', index: 5 },
  };
}

/** Validate Scorecard record #5 against business rules */
export function validateScorecard5(record) {
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
  const allowed = SCORECARD_STATUSES;
  if (record.status && !allowed.includes(record.status)) {
    errors.push({ field: 'status', message: `Status must be one of: ${allowed.join(', ')}` });
  }
  return { valid: errors.length === 0, errors };
}

/** Compute derived fields for Scorecard #5 */
export function deriveScorecard5(record) {
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
 * Create a normalized Scorecard record #6
 * @param {object} input
 * @returns {object}
 */
export function createScorecard6(input = {}) {
  const now = new Date().toISOString();
  return {
    id: input.id || `scorecard_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`,
    name: input.name || `Scorecard Item 6`,
    status: input.status || 'Draft',
    category: input.category || 'Consumable',
    department: input.department || 'Sales',
    warehouse: input.warehouse || 'Returns Dock',
    qty: Number(input.qty ?? 11),
    unitCost: Number(input.unitCost ?? 5.50),
    reserved: Number(input.reserved ?? 0),
    notes: input.notes || '',
    createdAt: input.createdAt || now,
    updatedAt: now,
    version: Number(input.version ?? 1),
    meta: { source: 'domain/Scorecard', index: 6 },
  };
}

/** Validate Scorecard record #6 against business rules */
export function validateScorecard6(record) {
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
  const allowed = SCORECARD_STATUSES;
  if (record.status && !allowed.includes(record.status)) {
    errors.push({ field: 'status', message: `Status must be one of: ${allowed.join(', ')}` });
  }
  return { valid: errors.length === 0, errors };
}

/** Compute derived fields for Scorecard #6 */
export function deriveScorecard6(record) {
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
 * Create a normalized Scorecard record #7
 * @param {object} input
 * @returns {object}
 */
export function createScorecard7(input = {}) {
  const now = new Date().toISOString();
  return {
    id: input.id || `scorecard_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`,
    name: input.name || `Scorecard Item 7`,
    status: input.status || 'Draft',
    category: input.category || 'Consumable',
    department: input.department || 'Maintenance',
    warehouse: input.warehouse || 'Overflow',
    qty: Number(input.qty ?? 12),
    unitCost: Number(input.unitCost ?? 6.25),
    reserved: Number(input.reserved ?? 0),
    notes: input.notes || '',
    createdAt: input.createdAt || now,
    updatedAt: now,
    version: Number(input.version ?? 1),
    meta: { source: 'domain/Scorecard', index: 7 },
  };
}

/** Validate Scorecard record #7 against business rules */
export function validateScorecard7(record) {
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
  const allowed = SCORECARD_STATUSES;
  if (record.status && !allowed.includes(record.status)) {
    errors.push({ field: 'status', message: `Status must be one of: ${allowed.join(', ')}` });
  }
  return { valid: errors.length === 0, errors };
}

/** Compute derived fields for Scorecard #7 */
export function deriveScorecard7(record) {
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
 * Create a normalized Scorecard record #8
 * @param {object} input
 * @returns {object}
 */
export function createScorecard8(input = {}) {
  const now = new Date().toISOString();
  return {
    id: input.id || `scorecard_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`,
    name: input.name || `Scorecard Item 8`,
    status: input.status || 'Draft',
    category: input.category || 'Tooling',
    department: input.department || 'Sales',
    warehouse: input.warehouse || 'East Hub',
    qty: Number(input.qty ?? 13),
    unitCost: Number(input.unitCost ?? 7.00),
    reserved: Number(input.reserved ?? 0),
    notes: input.notes || '',
    createdAt: input.createdAt || now,
    updatedAt: now,
    version: Number(input.version ?? 1),
    meta: { source: 'domain/Scorecard', index: 8 },
  };
}

/** Validate Scorecard record #8 against business rules */
export function validateScorecard8(record) {
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
  const allowed = SCORECARD_STATUSES;
  if (record.status && !allowed.includes(record.status)) {
    errors.push({ field: 'status', message: `Status must be one of: ${allowed.join(', ')}` });
  }
  return { valid: errors.length === 0, errors };
}

/** Compute derived fields for Scorecard #8 */
export function deriveScorecard8(record) {
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
 * Create a normalized Scorecard record #9
 * @param {object} input
 * @returns {object}
 */
export function createScorecard9(input = {}) {
  const now = new Date().toISOString();
  return {
    id: input.id || `scorecard_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`,
    name: input.name || `Scorecard Item 9`,
    status: input.status || 'Draft',
    category: input.category || 'Raw',
    department: input.department || 'IT',
    warehouse: input.warehouse || 'Overflow',
    qty: Number(input.qty ?? 14),
    unitCost: Number(input.unitCost ?? 7.75),
    reserved: Number(input.reserved ?? 0),
    notes: input.notes || '',
    createdAt: input.createdAt || now,
    updatedAt: now,
    version: Number(input.version ?? 1),
    meta: { source: 'domain/Scorecard', index: 9 },
  };
}

/** Validate Scorecard record #9 against business rules */
export function validateScorecard9(record) {
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
  const allowed = SCORECARD_STATUSES;
  if (record.status && !allowed.includes(record.status)) {
    errors.push({ field: 'status', message: `Status must be one of: ${allowed.join(', ')}` });
  }
  return { valid: errors.length === 0, errors };
}

/** Compute derived fields for Scorecard #9 */
export function deriveScorecard9(record) {
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
 * Create a normalized Scorecard record #10
 * @param {object} input
 * @returns {object}
 */
export function createScorecard10(input = {}) {
  const now = new Date().toISOString();
  return {
    id: input.id || `scorecard_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`,
    name: input.name || `Scorecard Item 10`,
    status: input.status || 'Draft',
    category: input.category || 'Packaging',
    department: input.department || 'Operations',
    warehouse: input.warehouse || 'Returns Dock',
    qty: Number(input.qty ?? 15),
    unitCost: Number(input.unitCost ?? 8.50),
    reserved: Number(input.reserved ?? 0),
    notes: input.notes || '',
    createdAt: input.createdAt || now,
    updatedAt: now,
    version: Number(input.version ?? 1),
    meta: { source: 'domain/Scorecard', index: 10 },
  };
}

/** Validate Scorecard record #10 against business rules */
export function validateScorecard10(record) {
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
  const allowed = SCORECARD_STATUSES;
  if (record.status && !allowed.includes(record.status)) {
    errors.push({ field: 'status', message: `Status must be one of: ${allowed.join(', ')}` });
  }
  return { valid: errors.length === 0, errors };
}

/** Compute derived fields for Scorecard #10 */
export function deriveScorecard10(record) {
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
 * Create a normalized Scorecard record #11
 * @param {object} input
 * @returns {object}
 */
export function createScorecard11(input = {}) {
  const now = new Date().toISOString();
  return {
    id: input.id || `scorecard_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`,
    name: input.name || `Scorecard Item 11`,
    status: input.status || 'Draft',
    category: input.category || 'Mechanical',
    department: input.department || 'Finance',
    warehouse: input.warehouse || 'West Hub',
    qty: Number(input.qty ?? 16),
    unitCost: Number(input.unitCost ?? 9.25),
    reserved: Number(input.reserved ?? 0),
    notes: input.notes || '',
    createdAt: input.createdAt || now,
    updatedAt: now,
    version: Number(input.version ?? 1),
    meta: { source: 'domain/Scorecard', index: 11 },
  };
}

/** Validate Scorecard record #11 against business rules */
export function validateScorecard11(record) {
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
  const allowed = SCORECARD_STATUSES;
  if (record.status && !allowed.includes(record.status)) {
    errors.push({ field: 'status', message: `Status must be one of: ${allowed.join(', ')}` });
  }
  return { valid: errors.length === 0, errors };
}

/** Compute derived fields for Scorecard #11 */
export function deriveScorecard11(record) {
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
 * Create a normalized Scorecard record #12
 * @param {object} input
 * @returns {object}
 */
export function createScorecard12(input = {}) {
  const now = new Date().toISOString();
  return {
    id: input.id || `scorecard_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`,
    name: input.name || `Scorecard Item 12`,
    status: input.status || 'Draft',
    category: input.category || 'Spare',
    department: input.department || 'Quality',
    warehouse: input.warehouse || 'East Hub',
    qty: Number(input.qty ?? 17),
    unitCost: Number(input.unitCost ?? 10.00),
    reserved: Number(input.reserved ?? 0),
    notes: input.notes || '',
    createdAt: input.createdAt || now,
    updatedAt: now,
    version: Number(input.version ?? 1),
    meta: { source: 'domain/Scorecard', index: 12 },
  };
}

/** Validate Scorecard record #12 against business rules */
export function validateScorecard12(record) {
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
  const allowed = SCORECARD_STATUSES;
  if (record.status && !allowed.includes(record.status)) {
    errors.push({ field: 'status', message: `Status must be one of: ${allowed.join(', ')}` });
  }
  return { valid: errors.length === 0, errors };
}

/** Compute derived fields for Scorecard #12 */
export function deriveScorecard12(record) {
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
 * Create a normalized Scorecard record #13
 * @param {object} input
 * @returns {object}
 */
export function createScorecard13(input = {}) {
  const now = new Date().toISOString();
  return {
    id: input.id || `scorecard_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`,
    name: input.name || `Scorecard Item 13`,
    status: input.status || 'Draft',
    category: input.category || 'Mechanical',
    department: input.department || 'Quality',
    warehouse: input.warehouse || 'East Hub',
    qty: Number(input.qty ?? 18),
    unitCost: Number(input.unitCost ?? 10.75),
    reserved: Number(input.reserved ?? 0),
    notes: input.notes || '',
    createdAt: input.createdAt || now,
    updatedAt: now,
    version: Number(input.version ?? 1),
    meta: { source: 'domain/Scorecard', index: 13 },
  };
}

/** Validate Scorecard record #13 against business rules */
export function validateScorecard13(record) {
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
  const allowed = SCORECARD_STATUSES;
  if (record.status && !allowed.includes(record.status)) {
    errors.push({ field: 'status', message: `Status must be one of: ${allowed.join(', ')}` });
  }
  return { valid: errors.length === 0, errors };
}

/** Compute derived fields for Scorecard #13 */
export function deriveScorecard13(record) {
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
 * Create a normalized Scorecard record #14
 * @param {object} input
 * @returns {object}
 */
export function createScorecard14(input = {}) {
  const now = new Date().toISOString();
  return {
    id: input.id || `scorecard_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`,
    name: input.name || `Scorecard Item 14`,
    status: input.status || 'Draft',
    category: input.category || 'Raw',
    department: input.department || 'Operations',
    warehouse: input.warehouse || 'Returns Dock',
    qty: Number(input.qty ?? 19),
    unitCost: Number(input.unitCost ?? 11.50),
    reserved: Number(input.reserved ?? 0),
    notes: input.notes || '',
    createdAt: input.createdAt || now,
    updatedAt: now,
    version: Number(input.version ?? 1),
    meta: { source: 'domain/Scorecard', index: 14 },
  };
}

/** Validate Scorecard record #14 against business rules */
export function validateScorecard14(record) {
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
  const allowed = SCORECARD_STATUSES;
  if (record.status && !allowed.includes(record.status)) {
    errors.push({ field: 'status', message: `Status must be one of: ${allowed.join(', ')}` });
  }
  return { valid: errors.length === 0, errors };
}

/** Compute derived fields for Scorecard #14 */
export function deriveScorecard14(record) {
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
 * Create a normalized Scorecard record #15
 * @param {object} input
 * @returns {object}
 */
export function createScorecard15(input = {}) {
  const now = new Date().toISOString();
  return {
    id: input.id || `scorecard_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`,
    name: input.name || `Scorecard Item 15`,
    status: input.status || 'Draft',
    category: input.category || 'Consumable',
    department: input.department || 'Procurement',
    warehouse: input.warehouse || 'Overflow',
    qty: Number(input.qty ?? 20),
    unitCost: Number(input.unitCost ?? 12.25),
    reserved: Number(input.reserved ?? 0),
    notes: input.notes || '',
    createdAt: input.createdAt || now,
    updatedAt: now,
    version: Number(input.version ?? 1),
    meta: { source: 'domain/Scorecard', index: 15 },
  };
}

/** Validate Scorecard record #15 against business rules */
export function validateScorecard15(record) {
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
  const allowed = SCORECARD_STATUSES;
  if (record.status && !allowed.includes(record.status)) {
    errors.push({ field: 'status', message: `Status must be one of: ${allowed.join(', ')}` });
  }
  return { valid: errors.length === 0, errors };
}

/** Compute derived fields for Scorecard #15 */
export function deriveScorecard15(record) {
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
 * Create a normalized Scorecard record #16
 * @param {object} input
 * @returns {object}
 */
export function createScorecard16(input = {}) {
  const now = new Date().toISOString();
  return {
    id: input.id || `scorecard_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`,
    name: input.name || `Scorecard Item 16`,
    status: input.status || 'Draft',
    category: input.category || 'Tooling',
    department: input.department || 'IT',
    warehouse: input.warehouse || 'Returns Dock',
    qty: Number(input.qty ?? 21),
    unitCost: Number(input.unitCost ?? 13.00),
    reserved: Number(input.reserved ?? 0),
    notes: input.notes || '',
    createdAt: input.createdAt || now,
    updatedAt: now,
    version: Number(input.version ?? 1),
    meta: { source: 'domain/Scorecard', index: 16 },
  };
}

/** Validate Scorecard record #16 against business rules */
export function validateScorecard16(record) {
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
  const allowed = SCORECARD_STATUSES;
  if (record.status && !allowed.includes(record.status)) {
    errors.push({ field: 'status', message: `Status must be one of: ${allowed.join(', ')}` });
  }
  return { valid: errors.length === 0, errors };
}

/** Compute derived fields for Scorecard #16 */
export function deriveScorecard16(record) {
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
 * Create a normalized Scorecard record #17
 * @param {object} input
 * @returns {object}
 */
export function createScorecard17(input = {}) {
  const now = new Date().toISOString();
  return {
    id: input.id || `scorecard_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`,
    name: input.name || `Scorecard Item 17`,
    status: input.status || 'Draft',
    category: input.category || 'Mechanical',
    department: input.department || 'Procurement',
    warehouse: input.warehouse || 'East Hub',
    qty: Number(input.qty ?? 22),
    unitCost: Number(input.unitCost ?? 13.75),
    reserved: Number(input.reserved ?? 0),
    notes: input.notes || '',
    createdAt: input.createdAt || now,
    updatedAt: now,
    version: Number(input.version ?? 1),
    meta: { source: 'domain/Scorecard', index: 17 },
  };
}

/** Validate Scorecard record #17 against business rules */
export function validateScorecard17(record) {
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
  const allowed = SCORECARD_STATUSES;
  if (record.status && !allowed.includes(record.status)) {
    errors.push({ field: 'status', message: `Status must be one of: ${allowed.join(', ')}` });
  }
  return { valid: errors.length === 0, errors };
}

/** Compute derived fields for Scorecard #17 */
export function deriveScorecard17(record) {
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
 * Create a normalized Scorecard record #18
 * @param {object} input
 * @returns {object}
 */
export function createScorecard18(input = {}) {
  const now = new Date().toISOString();
  return {
    id: input.id || `scorecard_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`,
    name: input.name || `Scorecard Item 18`,
    status: input.status || 'Draft',
    category: input.category || 'Mechanical',
    department: input.department || 'Quality',
    warehouse: input.warehouse || 'Main DC',
    qty: Number(input.qty ?? 23),
    unitCost: Number(input.unitCost ?? 14.50),
    reserved: Number(input.reserved ?? 0),
    notes: input.notes || '',
    createdAt: input.createdAt || now,
    updatedAt: now,
    version: Number(input.version ?? 1),
    meta: { source: 'domain/Scorecard', index: 18 },
  };
}

/** Validate Scorecard record #18 against business rules */
export function validateScorecard18(record) {
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
  const allowed = SCORECARD_STATUSES;
  if (record.status && !allowed.includes(record.status)) {
    errors.push({ field: 'status', message: `Status must be one of: ${allowed.join(', ')}` });
  }
  return { valid: errors.length === 0, errors };
}

/** Compute derived fields for Scorecard #18 */
export function deriveScorecard18(record) {
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
 * Create a normalized Scorecard record #19
 * @param {object} input
 * @returns {object}
 */
export function createScorecard19(input = {}) {
  const now = new Date().toISOString();
  return {
    id: input.id || `scorecard_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`,
    name: input.name || `Scorecard Item 19`,
    status: input.status || 'Draft',
    category: input.category || 'Electronic',
    department: input.department || 'Maintenance',
    warehouse: input.warehouse || 'West Hub',
    qty: Number(input.qty ?? 24),
    unitCost: Number(input.unitCost ?? 15.25),
    reserved: Number(input.reserved ?? 0),
    notes: input.notes || '',
    createdAt: input.createdAt || now,
    updatedAt: now,
    version: Number(input.version ?? 1),
    meta: { source: 'domain/Scorecard', index: 19 },
  };
}

/** Validate Scorecard record #19 against business rules */
export function validateScorecard19(record) {
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
  const allowed = SCORECARD_STATUSES;
  if (record.status && !allowed.includes(record.status)) {
    errors.push({ field: 'status', message: `Status must be one of: ${allowed.join(', ')}` });
  }
  return { valid: errors.length === 0, errors };
}

/** Compute derived fields for Scorecard #19 */
export function deriveScorecard19(record) {
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
 * Create a normalized Scorecard record #20
 * @param {object} input
 * @returns {object}
 */
export function createScorecard20(input = {}) {
  const now = new Date().toISOString();
  return {
    id: input.id || `scorecard_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`,
    name: input.name || `Scorecard Item 20`,
    status: input.status || 'Draft',
    category: input.category || 'Finished',
    department: input.department || 'Maintenance',
    warehouse: input.warehouse || 'West Hub',
    qty: Number(input.qty ?? 25),
    unitCost: Number(input.unitCost ?? 16.00),
    reserved: Number(input.reserved ?? 0),
    notes: input.notes || '',
    createdAt: input.createdAt || now,
    updatedAt: now,
    version: Number(input.version ?? 1),
    meta: { source: 'domain/Scorecard', index: 20 },
  };
}

/** Validate Scorecard record #20 against business rules */
export function validateScorecard20(record) {
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
  const allowed = SCORECARD_STATUSES;
  if (record.status && !allowed.includes(record.status)) {
    errors.push({ field: 'status', message: `Status must be one of: ${allowed.join(', ')}` });
  }
  return { valid: errors.length === 0, errors };
}

/** Compute derived fields for Scorecard #20 */
export function deriveScorecard20(record) {
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
 * Create a normalized Scorecard record #21
 * @param {object} input
 * @returns {object}
 */
export function createScorecard21(input = {}) {
  const now = new Date().toISOString();
  return {
    id: input.id || `scorecard_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`,
    name: input.name || `Scorecard Item 21`,
    status: input.status || 'Draft',
    category: input.category || 'Consumable',
    department: input.department || 'HR',
    warehouse: input.warehouse || 'West Hub',
    qty: Number(input.qty ?? 26),
    unitCost: Number(input.unitCost ?? 16.75),
    reserved: Number(input.reserved ?? 0),
    notes: input.notes || '',
    createdAt: input.createdAt || now,
    updatedAt: now,
    version: Number(input.version ?? 1),
    meta: { source: 'domain/Scorecard', index: 21 },
  };
}

/** Validate Scorecard record #21 against business rules */
export function validateScorecard21(record) {
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
  const allowed = SCORECARD_STATUSES;
  if (record.status && !allowed.includes(record.status)) {
    errors.push({ field: 'status', message: `Status must be one of: ${allowed.join(', ')}` });
  }
  return { valid: errors.length === 0, errors };
}

/** Compute derived fields for Scorecard #21 */
export function deriveScorecard21(record) {
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
 * Create a normalized Scorecard record #22
 * @param {object} input
 * @returns {object}
 */
export function createScorecard22(input = {}) {
  const now = new Date().toISOString();
  return {
    id: input.id || `scorecard_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`,
    name: input.name || `Scorecard Item 22`,
    status: input.status || 'Draft',
    category: input.category || 'Packaging',
    department: input.department || 'Maintenance',
    warehouse: input.warehouse || 'Returns Dock',
    qty: Number(input.qty ?? 27),
    unitCost: Number(input.unitCost ?? 17.50),
    reserved: Number(input.reserved ?? 0),
    notes: input.notes || '',
    createdAt: input.createdAt || now,
    updatedAt: now,
    version: Number(input.version ?? 1),
    meta: { source: 'domain/Scorecard', index: 22 },
  };
}

/** Validate Scorecard record #22 against business rules */
export function validateScorecard22(record) {
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
  const allowed = SCORECARD_STATUSES;
  if (record.status && !allowed.includes(record.status)) {
    errors.push({ field: 'status', message: `Status must be one of: ${allowed.join(', ')}` });
  }
  return { valid: errors.length === 0, errors };
}

/** Compute derived fields for Scorecard #22 */
export function deriveScorecard22(record) {
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
 * Create a normalized Scorecard record #23
 * @param {object} input
 * @returns {object}
 */
export function createScorecard23(input = {}) {
  const now = new Date().toISOString();
  return {
    id: input.id || `scorecard_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`,
    name: input.name || `Scorecard Item 23`,
    status: input.status || 'Draft',
    category: input.category || 'Mechanical',
    department: input.department || 'Maintenance',
    warehouse: input.warehouse || 'East Hub',
    qty: Number(input.qty ?? 28),
    unitCost: Number(input.unitCost ?? 18.25),
    reserved: Number(input.reserved ?? 0),
    notes: input.notes || '',
    createdAt: input.createdAt || now,
    updatedAt: now,
    version: Number(input.version ?? 1),
    meta: { source: 'domain/Scorecard', index: 23 },
  };
}

/** Validate Scorecard record #23 against business rules */
export function validateScorecard23(record) {
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
  const allowed = SCORECARD_STATUSES;
  if (record.status && !allowed.includes(record.status)) {
    errors.push({ field: 'status', message: `Status must be one of: ${allowed.join(', ')}` });
  }
  return { valid: errors.length === 0, errors };
}

/** Compute derived fields for Scorecard #23 */
export function deriveScorecard23(record) {
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
 * Create a normalized Scorecard record #24
 * @param {object} input
 * @returns {object}
 */
export function createScorecard24(input = {}) {
  const now = new Date().toISOString();
  return {
    id: input.id || `scorecard_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`,
    name: input.name || `Scorecard Item 24`,
    status: input.status || 'Draft',
    category: input.category || 'Spare',
    department: input.department || 'Sales',
    warehouse: input.warehouse || 'Returns Dock',
    qty: Number(input.qty ?? 29),
    unitCost: Number(input.unitCost ?? 19.00),
    reserved: Number(input.reserved ?? 0),
    notes: input.notes || '',
    createdAt: input.createdAt || now,
    updatedAt: now,
    version: Number(input.version ?? 1),
    meta: { source: 'domain/Scorecard', index: 24 },
  };
}

/** Validate Scorecard record #24 against business rules */
export function validateScorecard24(record) {
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
  const allowed = SCORECARD_STATUSES;
  if (record.status && !allowed.includes(record.status)) {
    errors.push({ field: 'status', message: `Status must be one of: ${allowed.join(', ')}` });
  }
  return { valid: errors.length === 0, errors };
}

/** Compute derived fields for Scorecard #24 */
export function deriveScorecard24(record) {
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
 * Create a normalized Scorecard record #25
 * @param {object} input
 * @returns {object}
 */
export function createScorecard25(input = {}) {
  const now = new Date().toISOString();
  return {
    id: input.id || `scorecard_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`,
    name: input.name || `Scorecard Item 25`,
    status: input.status || 'Draft',
    category: input.category || 'Raw',
    department: input.department || 'HR',
    warehouse: input.warehouse || 'West Hub',
    qty: Number(input.qty ?? 30),
    unitCost: Number(input.unitCost ?? 19.75),
    reserved: Number(input.reserved ?? 0),
    notes: input.notes || '',
    createdAt: input.createdAt || now,
    updatedAt: now,
    version: Number(input.version ?? 1),
    meta: { source: 'domain/Scorecard', index: 25 },
  };
}

/** Validate Scorecard record #25 against business rules */
export function validateScorecard25(record) {
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
  const allowed = SCORECARD_STATUSES;
  if (record.status && !allowed.includes(record.status)) {
    errors.push({ field: 'status', message: `Status must be one of: ${allowed.join(', ')}` });
  }
  return { valid: errors.length === 0, errors };
}

/** Compute derived fields for Scorecard #25 */
export function deriveScorecard25(record) {
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
 * Create a normalized Scorecard record #26
 * @param {object} input
 * @returns {object}
 */
export function createScorecard26(input = {}) {
  const now = new Date().toISOString();
  return {
    id: input.id || `scorecard_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`,
    name: input.name || `Scorecard Item 26`,
    status: input.status || 'Draft',
    category: input.category || 'Mechanical',
    department: input.department || 'Operations',
    warehouse: input.warehouse || 'West Hub',
    qty: Number(input.qty ?? 31),
    unitCost: Number(input.unitCost ?? 20.50),
    reserved: Number(input.reserved ?? 0),
    notes: input.notes || '',
    createdAt: input.createdAt || now,
    updatedAt: now,
    version: Number(input.version ?? 1),
    meta: { source: 'domain/Scorecard', index: 26 },
  };
}

/** Validate Scorecard record #26 against business rules */
export function validateScorecard26(record) {
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
  const allowed = SCORECARD_STATUSES;
  if (record.status && !allowed.includes(record.status)) {
    errors.push({ field: 'status', message: `Status must be one of: ${allowed.join(', ')}` });
  }
  return { valid: errors.length === 0, errors };
}

/** Compute derived fields for Scorecard #26 */
export function deriveScorecard26(record) {
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
 * Create a normalized Scorecard record #27
 * @param {object} input
 * @returns {object}
 */
export function createScorecard27(input = {}) {
  const now = new Date().toISOString();
  return {
    id: input.id || `scorecard_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`,
    name: input.name || `Scorecard Item 27`,
    status: input.status || 'Draft',
    category: input.category || 'Electronic',
    department: input.department || 'Finance',
    warehouse: input.warehouse || 'Overflow',
    qty: Number(input.qty ?? 32),
    unitCost: Number(input.unitCost ?? 21.25),
    reserved: Number(input.reserved ?? 0),
    notes: input.notes || '',
    createdAt: input.createdAt || now,
    updatedAt: now,
    version: Number(input.version ?? 1),
    meta: { source: 'domain/Scorecard', index: 27 },
  };
}

/** Validate Scorecard record #27 against business rules */
export function validateScorecard27(record) {
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
  const allowed = SCORECARD_STATUSES;
  if (record.status && !allowed.includes(record.status)) {
    errors.push({ field: 'status', message: `Status must be one of: ${allowed.join(', ')}` });
  }
  return { valid: errors.length === 0, errors };
}

/** Compute derived fields for Scorecard #27 */
export function deriveScorecard27(record) {
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

/** Batch validate a list of Scorecard records */
export function validateScorecardBatch(records) {
  const results = [];
  for (const rec of records || []) {
    results.push(validateScorecard0(rec));
  }
  const invalid = results.filter((r) => !r.valid).length;
  return { total: results.length, invalid, results };
}
