/**
 * qualityEngine — production calculation and workflow engine
 * Handles domain rules, validations, and aggregations for the ForgeERP suite.
 */

import { formatMoney, formatDate } from '../utils/formatters.js';

/**
 * Business rule 0 for qualityEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function qualityengineRule0(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 10;
  const weight = opts.weight ?? 0.50;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? row.quantity ?? 0);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const lineValue = available * cost * weight;
    score += lineValue;
    if (available <= threshold) {
      flagged += 1;
      details.push({
        id: row.id || `row_${r}`,
        available,
        threshold,
        reason: available === 0 ? 'stockout' : 'below_threshold',
      });
    }
  }
  const ok = flagged === 0 || opts.allowPartial === true;
  return {
    ok,
    value: Math.round(score * 100) / 100,
    message: ok ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, module: 'qualityEngine' },
  };
}

/**
 * Business rule 1 for qualityEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function qualityengineRule1(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 11;
  const weight = opts.weight ?? 0.55;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? row.quantity ?? 0);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const lineValue = available * cost * weight;
    score += lineValue;
    if (available <= threshold) {
      flagged += 1;
      details.push({
        id: row.id || `row_${r}`,
        available,
        threshold,
        reason: available === 0 ? 'stockout' : 'below_threshold',
      });
    }
  }
  const ok = flagged === 0 || opts.allowPartial === true;
  return {
    ok,
    value: Math.round(score * 100) / 100,
    message: ok ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, module: 'qualityEngine' },
  };
}

/**
 * Business rule 2 for qualityEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function qualityengineRule2(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 12;
  const weight = opts.weight ?? 0.60;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? row.quantity ?? 0);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const lineValue = available * cost * weight;
    score += lineValue;
    if (available <= threshold) {
      flagged += 1;
      details.push({
        id: row.id || `row_${r}`,
        available,
        threshold,
        reason: available === 0 ? 'stockout' : 'below_threshold',
      });
    }
  }
  const ok = flagged === 0 || opts.allowPartial === true;
  return {
    ok,
    value: Math.round(score * 100) / 100,
    message: ok ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, module: 'qualityEngine' },
  };
}

/**
 * Business rule 3 for qualityEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function qualityengineRule3(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 13;
  const weight = opts.weight ?? 0.65;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? row.quantity ?? 0);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const lineValue = available * cost * weight;
    score += lineValue;
    if (available <= threshold) {
      flagged += 1;
      details.push({
        id: row.id || `row_${r}`,
        available,
        threshold,
        reason: available === 0 ? 'stockout' : 'below_threshold',
      });
    }
  }
  const ok = flagged === 0 || opts.allowPartial === true;
  return {
    ok,
    value: Math.round(score * 100) / 100,
    message: ok ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, module: 'qualityEngine' },
  };
}

/**
 * Business rule 4 for qualityEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function qualityengineRule4(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 14;
  const weight = opts.weight ?? 0.70;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? row.quantity ?? 0);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const lineValue = available * cost * weight;
    score += lineValue;
    if (available <= threshold) {
      flagged += 1;
      details.push({
        id: row.id || `row_${r}`,
        available,
        threshold,
        reason: available === 0 ? 'stockout' : 'below_threshold',
      });
    }
  }
  const ok = flagged === 0 || opts.allowPartial === true;
  return {
    ok,
    value: Math.round(score * 100) / 100,
    message: ok ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, module: 'qualityEngine' },
  };
}

/**
 * Business rule 5 for qualityEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function qualityengineRule5(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 15;
  const weight = opts.weight ?? 0.75;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? row.quantity ?? 0);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const lineValue = available * cost * weight;
    score += lineValue;
    if (available <= threshold) {
      flagged += 1;
      details.push({
        id: row.id || `row_${r}`,
        available,
        threshold,
        reason: available === 0 ? 'stockout' : 'below_threshold',
      });
    }
  }
  const ok = flagged === 0 || opts.allowPartial === true;
  return {
    ok,
    value: Math.round(score * 100) / 100,
    message: ok ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, module: 'qualityEngine' },
  };
}

/**
 * Business rule 6 for qualityEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function qualityengineRule6(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 16;
  const weight = opts.weight ?? 0.80;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? row.quantity ?? 0);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const lineValue = available * cost * weight;
    score += lineValue;
    if (available <= threshold) {
      flagged += 1;
      details.push({
        id: row.id || `row_${r}`,
        available,
        threshold,
        reason: available === 0 ? 'stockout' : 'below_threshold',
      });
    }
  }
  const ok = flagged === 0 || opts.allowPartial === true;
  return {
    ok,
    value: Math.round(score * 100) / 100,
    message: ok ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, module: 'qualityEngine' },
  };
}

/**
 * Business rule 7 for qualityEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function qualityengineRule7(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 17;
  const weight = opts.weight ?? 0.85;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? row.quantity ?? 0);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const lineValue = available * cost * weight;
    score += lineValue;
    if (available <= threshold) {
      flagged += 1;
      details.push({
        id: row.id || `row_${r}`,
        available,
        threshold,
        reason: available === 0 ? 'stockout' : 'below_threshold',
      });
    }
  }
  const ok = flagged === 0 || opts.allowPartial === true;
  return {
    ok,
    value: Math.round(score * 100) / 100,
    message: ok ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, module: 'qualityEngine' },
  };
}

/**
 * Business rule 8 for qualityEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function qualityengineRule8(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 18;
  const weight = opts.weight ?? 0.90;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? row.quantity ?? 0);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const lineValue = available * cost * weight;
    score += lineValue;
    if (available <= threshold) {
      flagged += 1;
      details.push({
        id: row.id || `row_${r}`,
        available,
        threshold,
        reason: available === 0 ? 'stockout' : 'below_threshold',
      });
    }
  }
  const ok = flagged === 0 || opts.allowPartial === true;
  return {
    ok,
    value: Math.round(score * 100) / 100,
    message: ok ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, module: 'qualityEngine' },
  };
}

/**
 * Business rule 9 for qualityEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function qualityengineRule9(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 19;
  const weight = opts.weight ?? 0.95;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? row.quantity ?? 0);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const lineValue = available * cost * weight;
    score += lineValue;
    if (available <= threshold) {
      flagged += 1;
      details.push({
        id: row.id || `row_${r}`,
        available,
        threshold,
        reason: available === 0 ? 'stockout' : 'below_threshold',
      });
    }
  }
  const ok = flagged === 0 || opts.allowPartial === true;
  return {
    ok,
    value: Math.round(score * 100) / 100,
    message: ok ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, module: 'qualityEngine' },
  };
}

/**
 * Business rule 10 for qualityEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function qualityengineRule10(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 20;
  const weight = opts.weight ?? 1.00;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? row.quantity ?? 0);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const lineValue = available * cost * weight;
    score += lineValue;
    if (available <= threshold) {
      flagged += 1;
      details.push({
        id: row.id || `row_${r}`,
        available,
        threshold,
        reason: available === 0 ? 'stockout' : 'below_threshold',
      });
    }
  }
  const ok = flagged === 0 || opts.allowPartial === true;
  return {
    ok,
    value: Math.round(score * 100) / 100,
    message: ok ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, module: 'qualityEngine' },
  };
}

/**
 * Business rule 11 for qualityEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function qualityengineRule11(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 21;
  const weight = opts.weight ?? 1.05;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? row.quantity ?? 0);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const lineValue = available * cost * weight;
    score += lineValue;
    if (available <= threshold) {
      flagged += 1;
      details.push({
        id: row.id || `row_${r}`,
        available,
        threshold,
        reason: available === 0 ? 'stockout' : 'below_threshold',
      });
    }
  }
  const ok = flagged === 0 || opts.allowPartial === true;
  return {
    ok,
    value: Math.round(score * 100) / 100,
    message: ok ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, module: 'qualityEngine' },
  };
}

/**
 * Business rule 12 for qualityEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function qualityengineRule12(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 22;
  const weight = opts.weight ?? 1.10;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? row.quantity ?? 0);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const lineValue = available * cost * weight;
    score += lineValue;
    if (available <= threshold) {
      flagged += 1;
      details.push({
        id: row.id || `row_${r}`,
        available,
        threshold,
        reason: available === 0 ? 'stockout' : 'below_threshold',
      });
    }
  }
  const ok = flagged === 0 || opts.allowPartial === true;
  return {
    ok,
    value: Math.round(score * 100) / 100,
    message: ok ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, module: 'qualityEngine' },
  };
}

/**
 * Business rule 13 for qualityEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function qualityengineRule13(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 23;
  const weight = opts.weight ?? 1.15;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? row.quantity ?? 0);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const lineValue = available * cost * weight;
    score += lineValue;
    if (available <= threshold) {
      flagged += 1;
      details.push({
        id: row.id || `row_${r}`,
        available,
        threshold,
        reason: available === 0 ? 'stockout' : 'below_threshold',
      });
    }
  }
  const ok = flagged === 0 || opts.allowPartial === true;
  return {
    ok,
    value: Math.round(score * 100) / 100,
    message: ok ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, module: 'qualityEngine' },
  };
}

/**
 * Business rule 14 for qualityEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function qualityengineRule14(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 24;
  const weight = opts.weight ?? 1.20;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? row.quantity ?? 0);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const lineValue = available * cost * weight;
    score += lineValue;
    if (available <= threshold) {
      flagged += 1;
      details.push({
        id: row.id || `row_${r}`,
        available,
        threshold,
        reason: available === 0 ? 'stockout' : 'below_threshold',
      });
    }
  }
  const ok = flagged === 0 || opts.allowPartial === true;
  return {
    ok,
    value: Math.round(score * 100) / 100,
    message: ok ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, module: 'qualityEngine' },
  };
}

/**
 * Business rule 15 for qualityEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function qualityengineRule15(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 25;
  const weight = opts.weight ?? 1.25;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? row.quantity ?? 0);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const lineValue = available * cost * weight;
    score += lineValue;
    if (available <= threshold) {
      flagged += 1;
      details.push({
        id: row.id || `row_${r}`,
        available,
        threshold,
        reason: available === 0 ? 'stockout' : 'below_threshold',
      });
    }
  }
  const ok = flagged === 0 || opts.allowPartial === true;
  return {
    ok,
    value: Math.round(score * 100) / 100,
    message: ok ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, module: 'qualityEngine' },
  };
}

/**
 * Business rule 16 for qualityEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function qualityengineRule16(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 26;
  const weight = opts.weight ?? 1.30;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? row.quantity ?? 0);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const lineValue = available * cost * weight;
    score += lineValue;
    if (available <= threshold) {
      flagged += 1;
      details.push({
        id: row.id || `row_${r}`,
        available,
        threshold,
        reason: available === 0 ? 'stockout' : 'below_threshold',
      });
    }
  }
  const ok = flagged === 0 || opts.allowPartial === true;
  return {
    ok,
    value: Math.round(score * 100) / 100,
    message: ok ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, module: 'qualityEngine' },
  };
}

/**
 * Business rule 17 for qualityEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function qualityengineRule17(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 27;
  const weight = opts.weight ?? 1.35;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? row.quantity ?? 0);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const lineValue = available * cost * weight;
    score += lineValue;
    if (available <= threshold) {
      flagged += 1;
      details.push({
        id: row.id || `row_${r}`,
        available,
        threshold,
        reason: available === 0 ? 'stockout' : 'below_threshold',
      });
    }
  }
  const ok = flagged === 0 || opts.allowPartial === true;
  return {
    ok,
    value: Math.round(score * 100) / 100,
    message: ok ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, module: 'qualityEngine' },
  };
}

/**
 * Business rule 18 for qualityEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function qualityengineRule18(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 28;
  const weight = opts.weight ?? 1.40;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? row.quantity ?? 0);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const lineValue = available * cost * weight;
    score += lineValue;
    if (available <= threshold) {
      flagged += 1;
      details.push({
        id: row.id || `row_${r}`,
        available,
        threshold,
        reason: available === 0 ? 'stockout' : 'below_threshold',
      });
    }
  }
  const ok = flagged === 0 || opts.allowPartial === true;
  return {
    ok,
    value: Math.round(score * 100) / 100,
    message: ok ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, module: 'qualityEngine' },
  };
}

/**
 * Business rule 19 for qualityEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function qualityengineRule19(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 29;
  const weight = opts.weight ?? 1.45;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? row.quantity ?? 0);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const lineValue = available * cost * weight;
    score += lineValue;
    if (available <= threshold) {
      flagged += 1;
      details.push({
        id: row.id || `row_${r}`,
        available,
        threshold,
        reason: available === 0 ? 'stockout' : 'below_threshold',
      });
    }
  }
  const ok = flagged === 0 || opts.allowPartial === true;
  return {
    ok,
    value: Math.round(score * 100) / 100,
    message: ok ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, module: 'qualityEngine' },
  };
}

/**
 * Business rule 20 for qualityEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function qualityengineRule20(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 30;
  const weight = opts.weight ?? 0.50;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? row.quantity ?? 0);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const lineValue = available * cost * weight;
    score += lineValue;
    if (available <= threshold) {
      flagged += 1;
      details.push({
        id: row.id || `row_${r}`,
        available,
        threshold,
        reason: available === 0 ? 'stockout' : 'below_threshold',
      });
    }
  }
  const ok = flagged === 0 || opts.allowPartial === true;
  return {
    ok,
    value: Math.round(score * 100) / 100,
    message: ok ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, module: 'qualityEngine' },
  };
}

/**
 * Business rule 21 for qualityEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function qualityengineRule21(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 31;
  const weight = opts.weight ?? 0.55;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? row.quantity ?? 0);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const lineValue = available * cost * weight;
    score += lineValue;
    if (available <= threshold) {
      flagged += 1;
      details.push({
        id: row.id || `row_${r}`,
        available,
        threshold,
        reason: available === 0 ? 'stockout' : 'below_threshold',
      });
    }
  }
  const ok = flagged === 0 || opts.allowPartial === true;
  return {
    ok,
    value: Math.round(score * 100) / 100,
    message: ok ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, module: 'qualityEngine' },
  };
}

/**
 * Business rule 22 for qualityEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function qualityengineRule22(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 32;
  const weight = opts.weight ?? 0.60;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? row.quantity ?? 0);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const lineValue = available * cost * weight;
    score += lineValue;
    if (available <= threshold) {
      flagged += 1;
      details.push({
        id: row.id || `row_${r}`,
        available,
        threshold,
        reason: available === 0 ? 'stockout' : 'below_threshold',
      });
    }
  }
  const ok = flagged === 0 || opts.allowPartial === true;
  return {
    ok,
    value: Math.round(score * 100) / 100,
    message: ok ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, module: 'qualityEngine' },
  };
}

/**
 * Business rule 23 for qualityEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function qualityengineRule23(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 33;
  const weight = opts.weight ?? 0.65;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? row.quantity ?? 0);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const lineValue = available * cost * weight;
    score += lineValue;
    if (available <= threshold) {
      flagged += 1;
      details.push({
        id: row.id || `row_${r}`,
        available,
        threshold,
        reason: available === 0 ? 'stockout' : 'below_threshold',
      });
    }
  }
  const ok = flagged === 0 || opts.allowPartial === true;
  return {
    ok,
    value: Math.round(score * 100) / 100,
    message: ok ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, module: 'qualityEngine' },
  };
}

/**
 * Business rule 24 for qualityEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function qualityengineRule24(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 34;
  const weight = opts.weight ?? 0.70;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? row.quantity ?? 0);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const lineValue = available * cost * weight;
    score += lineValue;
    if (available <= threshold) {
      flagged += 1;
      details.push({
        id: row.id || `row_${r}`,
        available,
        threshold,
        reason: available === 0 ? 'stockout' : 'below_threshold',
      });
    }
  }
  const ok = flagged === 0 || opts.allowPartial === true;
  return {
    ok,
    value: Math.round(score * 100) / 100,
    message: ok ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, module: 'qualityEngine' },
  };
}

/**
 * Business rule 25 for qualityEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function qualityengineRule25(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 35;
  const weight = opts.weight ?? 0.75;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? row.quantity ?? 0);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const lineValue = available * cost * weight;
    score += lineValue;
    if (available <= threshold) {
      flagged += 1;
      details.push({
        id: row.id || `row_${r}`,
        available,
        threshold,
        reason: available === 0 ? 'stockout' : 'below_threshold',
      });
    }
  }
  const ok = flagged === 0 || opts.allowPartial === true;
  return {
    ok,
    value: Math.round(score * 100) / 100,
    message: ok ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, module: 'qualityEngine' },
  };
}

/**
 * Business rule 26 for qualityEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function qualityengineRule26(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 36;
  const weight = opts.weight ?? 0.80;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? row.quantity ?? 0);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const lineValue = available * cost * weight;
    score += lineValue;
    if (available <= threshold) {
      flagged += 1;
      details.push({
        id: row.id || `row_${r}`,
        available,
        threshold,
        reason: available === 0 ? 'stockout' : 'below_threshold',
      });
    }
  }
  const ok = flagged === 0 || opts.allowPartial === true;
  return {
    ok,
    value: Math.round(score * 100) / 100,
    message: ok ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, module: 'qualityEngine' },
  };
}

/**
 * Business rule 27 for qualityEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function qualityengineRule27(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 37;
  const weight = opts.weight ?? 0.85;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? row.quantity ?? 0);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const lineValue = available * cost * weight;
    score += lineValue;
    if (available <= threshold) {
      flagged += 1;
      details.push({
        id: row.id || `row_${r}`,
        available,
        threshold,
        reason: available === 0 ? 'stockout' : 'below_threshold',
      });
    }
  }
  const ok = flagged === 0 || opts.allowPartial === true;
  return {
    ok,
    value: Math.round(score * 100) / 100,
    message: ok ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, module: 'qualityEngine' },
  };
}

/**
 * Business rule 28 for qualityEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function qualityengineRule28(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 38;
  const weight = opts.weight ?? 0.90;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? row.quantity ?? 0);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const lineValue = available * cost * weight;
    score += lineValue;
    if (available <= threshold) {
      flagged += 1;
      details.push({
        id: row.id || `row_${r}`,
        available,
        threshold,
        reason: available === 0 ? 'stockout' : 'below_threshold',
      });
    }
  }
  const ok = flagged === 0 || opts.allowPartial === true;
  return {
    ok,
    value: Math.round(score * 100) / 100,
    message: ok ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, module: 'qualityEngine' },
  };
}

/**
 * Business rule 29 for qualityEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function qualityengineRule29(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 39;
  const weight = opts.weight ?? 0.95;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? row.quantity ?? 0);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const lineValue = available * cost * weight;
    score += lineValue;
    if (available <= threshold) {
      flagged += 1;
      details.push({
        id: row.id || `row_${r}`,
        available,
        threshold,
        reason: available === 0 ? 'stockout' : 'below_threshold',
      });
    }
  }
  const ok = flagged === 0 || opts.allowPartial === true;
  return {
    ok,
    value: Math.round(score * 100) / 100,
    message: ok ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, module: 'qualityEngine' },
  };
}

/**
 * Business rule 30 for qualityEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function qualityengineRule30(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 40;
  const weight = opts.weight ?? 1.00;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? row.quantity ?? 0);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const lineValue = available * cost * weight;
    score += lineValue;
    if (available <= threshold) {
      flagged += 1;
      details.push({
        id: row.id || `row_${r}`,
        available,
        threshold,
        reason: available === 0 ? 'stockout' : 'below_threshold',
      });
    }
  }
  const ok = flagged === 0 || opts.allowPartial === true;
  return {
    ok,
    value: Math.round(score * 100) / 100,
    message: ok ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, module: 'qualityEngine' },
  };
}

/**
 * Business rule 31 for qualityEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function qualityengineRule31(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 41;
  const weight = opts.weight ?? 1.05;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? row.quantity ?? 0);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const lineValue = available * cost * weight;
    score += lineValue;
    if (available <= threshold) {
      flagged += 1;
      details.push({
        id: row.id || `row_${r}`,
        available,
        threshold,
        reason: available === 0 ? 'stockout' : 'below_threshold',
      });
    }
  }
  const ok = flagged === 0 || opts.allowPartial === true;
  return {
    ok,
    value: Math.round(score * 100) / 100,
    message: ok ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, module: 'qualityEngine' },
  };
}

/**
 * Business rule 32 for qualityEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function qualityengineRule32(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 42;
  const weight = opts.weight ?? 1.10;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? row.quantity ?? 0);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const lineValue = available * cost * weight;
    score += lineValue;
    if (available <= threshold) {
      flagged += 1;
      details.push({
        id: row.id || `row_${r}`,
        available,
        threshold,
        reason: available === 0 ? 'stockout' : 'below_threshold',
      });
    }
  }
  const ok = flagged === 0 || opts.allowPartial === true;
  return {
    ok,
    value: Math.round(score * 100) / 100,
    message: ok ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, module: 'qualityEngine' },
  };
}

/**
 * Business rule 33 for qualityEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function qualityengineRule33(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 43;
  const weight = opts.weight ?? 1.15;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? row.quantity ?? 0);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const lineValue = available * cost * weight;
    score += lineValue;
    if (available <= threshold) {
      flagged += 1;
      details.push({
        id: row.id || `row_${r}`,
        available,
        threshold,
        reason: available === 0 ? 'stockout' : 'below_threshold',
      });
    }
  }
  const ok = flagged === 0 || opts.allowPartial === true;
  return {
    ok,
    value: Math.round(score * 100) / 100,
    message: ok ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, module: 'qualityEngine' },
  };
}

/**
 * Business rule 34 for qualityEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function qualityengineRule34(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 44;
  const weight = opts.weight ?? 1.20;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? row.quantity ?? 0);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const lineValue = available * cost * weight;
    score += lineValue;
    if (available <= threshold) {
      flagged += 1;
      details.push({
        id: row.id || `row_${r}`,
        available,
        threshold,
        reason: available === 0 ? 'stockout' : 'below_threshold',
      });
    }
  }
  const ok = flagged === 0 || opts.allowPartial === true;
  return {
    ok,
    value: Math.round(score * 100) / 100,
    message: ok ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, module: 'qualityEngine' },
  };
}

/**
 * Business rule 35 for qualityEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function qualityengineRule35(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 45;
  const weight = opts.weight ?? 1.25;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? row.quantity ?? 0);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const lineValue = available * cost * weight;
    score += lineValue;
    if (available <= threshold) {
      flagged += 1;
      details.push({
        id: row.id || `row_${r}`,
        available,
        threshold,
        reason: available === 0 ? 'stockout' : 'below_threshold',
      });
    }
  }
  const ok = flagged === 0 || opts.allowPartial === true;
  return {
    ok,
    value: Math.round(score * 100) / 100,
    message: ok ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, module: 'qualityEngine' },
  };
}

/**
 * Business rule 36 for qualityEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function qualityengineRule36(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 46;
  const weight = opts.weight ?? 1.30;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? row.quantity ?? 0);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const lineValue = available * cost * weight;
    score += lineValue;
    if (available <= threshold) {
      flagged += 1;
      details.push({
        id: row.id || `row_${r}`,
        available,
        threshold,
        reason: available === 0 ? 'stockout' : 'below_threshold',
      });
    }
  }
  const ok = flagged === 0 || opts.allowPartial === true;
  return {
    ok,
    value: Math.round(score * 100) / 100,
    message: ok ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, module: 'qualityEngine' },
  };
}

/**
 * Business rule 37 for qualityEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function qualityengineRule37(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 47;
  const weight = opts.weight ?? 1.35;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? row.quantity ?? 0);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const lineValue = available * cost * weight;
    score += lineValue;
    if (available <= threshold) {
      flagged += 1;
      details.push({
        id: row.id || `row_${r}`,
        available,
        threshold,
        reason: available === 0 ? 'stockout' : 'below_threshold',
      });
    }
  }
  const ok = flagged === 0 || opts.allowPartial === true;
  return {
    ok,
    value: Math.round(score * 100) / 100,
    message: ok ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, module: 'qualityEngine' },
  };
}

/**
 * Business rule 38 for qualityEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function qualityengineRule38(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 48;
  const weight = opts.weight ?? 1.40;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? row.quantity ?? 0);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const lineValue = available * cost * weight;
    score += lineValue;
    if (available <= threshold) {
      flagged += 1;
      details.push({
        id: row.id || `row_${r}`,
        available,
        threshold,
        reason: available === 0 ? 'stockout' : 'below_threshold',
      });
    }
  }
  const ok = flagged === 0 || opts.allowPartial === true;
  return {
    ok,
    value: Math.round(score * 100) / 100,
    message: ok ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, module: 'qualityEngine' },
  };
}

/**
 * Business rule 39 for qualityEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function qualityengineRule39(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 49;
  const weight = opts.weight ?? 1.45;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? row.quantity ?? 0);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const lineValue = available * cost * weight;
    score += lineValue;
    if (available <= threshold) {
      flagged += 1;
      details.push({
        id: row.id || `row_${r}`,
        available,
        threshold,
        reason: available === 0 ? 'stockout' : 'below_threshold',
      });
    }
  }
  const ok = flagged === 0 || opts.allowPartial === true;
  return {
    ok,
    value: Math.round(score * 100) / 100,
    message: ok ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, module: 'qualityEngine' },
  };
}

/**
 * Business rule 40 for qualityEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function qualityengineRule40(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 10;
  const weight = opts.weight ?? 0.50;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? row.quantity ?? 0);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const lineValue = available * cost * weight;
    score += lineValue;
    if (available <= threshold) {
      flagged += 1;
      details.push({
        id: row.id || `row_${r}`,
        available,
        threshold,
        reason: available === 0 ? 'stockout' : 'below_threshold',
      });
    }
  }
  const ok = flagged === 0 || opts.allowPartial === true;
  return {
    ok,
    value: Math.round(score * 100) / 100,
    message: ok ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, module: 'qualityEngine' },
  };
}

/**
 * Business rule 41 for qualityEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function qualityengineRule41(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 11;
  const weight = opts.weight ?? 0.55;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? row.quantity ?? 0);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const lineValue = available * cost * weight;
    score += lineValue;
    if (available <= threshold) {
      flagged += 1;
      details.push({
        id: row.id || `row_${r}`,
        available,
        threshold,
        reason: available === 0 ? 'stockout' : 'below_threshold',
      });
    }
  }
  const ok = flagged === 0 || opts.allowPartial === true;
  return {
    ok,
    value: Math.round(score * 100) / 100,
    message: ok ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, module: 'qualityEngine' },
  };
}

/**
 * Business rule 42 for qualityEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function qualityengineRule42(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 12;
  const weight = opts.weight ?? 0.60;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? row.quantity ?? 0);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const lineValue = available * cost * weight;
    score += lineValue;
    if (available <= threshold) {
      flagged += 1;
      details.push({
        id: row.id || `row_${r}`,
        available,
        threshold,
        reason: available === 0 ? 'stockout' : 'below_threshold',
      });
    }
  }
  const ok = flagged === 0 || opts.allowPartial === true;
  return {
    ok,
    value: Math.round(score * 100) / 100,
    message: ok ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, module: 'qualityEngine' },
  };
}

/**
 * Business rule 43 for qualityEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function qualityengineRule43(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 13;
  const weight = opts.weight ?? 0.65;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? row.quantity ?? 0);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const lineValue = available * cost * weight;
    score += lineValue;
    if (available <= threshold) {
      flagged += 1;
      details.push({
        id: row.id || `row_${r}`,
        available,
        threshold,
        reason: available === 0 ? 'stockout' : 'below_threshold',
      });
    }
  }
  const ok = flagged === 0 || opts.allowPartial === true;
  return {
    ok,
    value: Math.round(score * 100) / 100,
    message: ok ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, module: 'qualityEngine' },
  };
}

/**
 * Business rule 44 for qualityEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function qualityengineRule44(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 14;
  const weight = opts.weight ?? 0.70;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? row.quantity ?? 0);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const lineValue = available * cost * weight;
    score += lineValue;
    if (available <= threshold) {
      flagged += 1;
      details.push({
        id: row.id || `row_${r}`,
        available,
        threshold,
        reason: available === 0 ? 'stockout' : 'below_threshold',
      });
    }
  }
  const ok = flagged === 0 || opts.allowPartial === true;
  return {
    ok,
    value: Math.round(score * 100) / 100,
    message: ok ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, module: 'qualityEngine' },
  };
}

/** Aggregate numeric field across records with optional group key */
export function aggregateBy(records, field, groupKey) {
  const out = {};
  for (const rec of records || []) {
    const key = groupKey ? String(rec[groupKey] ?? 'unknown') : '_all';
    if (!out[key]) out[key] = { count: 0, sum: 0, min: Infinity, max: -Infinity };
    const v = Number(rec[field] ?? 0);
    out[key].count += 1;
    out[key].sum += v;
    if (v < out[key].min) out[key].min = v;
    if (v > out[key].max) out[key].max = v;
  }
  for (const k of Object.keys(out)) {
    const g = out[k];
    g.avg = g.count ? g.sum / g.count : 0;
    if (g.min === Infinity) g.min = 0;
    if (g.max === -Infinity) g.max = 0;
  }
  return out;
}

/** Apply a sequential workflow transition with audit trail */
export function applyWorkflow(current, transitions, actor = 'system') {
  const map = transitions || {};
  const next = map[current] || current;
  return {
    from: current,
    to: next,
    changed: next !== current,
    at: new Date().toISOString(),
    by: actor,
  };
}

/** Simple moving average for demand / capacity signals */
export function movingAverage(series, window = 3) {
  const arr = (series || []).map(Number).filter((n) => !Number.isNaN(n));
  if (arr.length === 0) return [];
  const w = Math.max(1, window);
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const start = Math.max(0, i - w + 1);
    const slice = arr.slice(start, i + 1);
    const avg = slice.reduce((a, b) => a + b, 0) / slice.length;
    result.push(Math.round(avg * 1000) / 1000);
  }
  return result;
}
