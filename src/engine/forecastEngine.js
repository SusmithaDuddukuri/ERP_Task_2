/**
 * forecastEngine — production calculation and workflow engine
 * Handles domain rules, validations, and aggregations for the ForgeERP suite.
 */

import { formatMoney, formatDate } from '../utils/formatters.js';

/**
 * Business rule 0 for forecastEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function forecastengineRule0(ctx = {}, opts = {}) {
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
    meta: { threshold, weight, evaluated: rows.length, module: 'forecastEngine' },
  };
}

/**
 * Business rule 1 for forecastEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function forecastengineRule1(ctx = {}, opts = {}) {
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
    meta: { threshold, weight, evaluated: rows.length, module: 'forecastEngine' },
  };
}

/**
 * Business rule 2 for forecastEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function forecastengineRule2(ctx = {}, opts = {}) {
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
    meta: { threshold, weight, evaluated: rows.length, module: 'forecastEngine' },
  };
}

/**
 * Business rule 3 for forecastEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function forecastengineRule3(ctx = {}, opts = {}) {
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
    meta: { threshold, weight, evaluated: rows.length, module: 'forecastEngine' },
  };
}

/**
 * Business rule 4 for forecastEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function forecastengineRule4(ctx = {}, opts = {}) {
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
    meta: { threshold, weight, evaluated: rows.length, module: 'forecastEngine' },
  };
}

/**
 * Business rule 5 for forecastEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function forecastengineRule5(ctx = {}, opts = {}) {
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
    meta: { threshold, weight, evaluated: rows.length, module: 'forecastEngine' },
  };
}

/**
 * Business rule 6 for forecastEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function forecastengineRule6(ctx = {}, opts = {}) {
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
    meta: { threshold, weight, evaluated: rows.length, module: 'forecastEngine' },
  };
}

/**
 * Business rule 7 for forecastEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function forecastengineRule7(ctx = {}, opts = {}) {
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
    meta: { threshold, weight, evaluated: rows.length, module: 'forecastEngine' },
  };
}

/**
 * Business rule 8 for forecastEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function forecastengineRule8(ctx = {}, opts = {}) {
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
    meta: { threshold, weight, evaluated: rows.length, module: 'forecastEngine' },
  };
}

/**
 * Business rule 9 for forecastEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function forecastengineRule9(ctx = {}, opts = {}) {
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
    meta: { threshold, weight, evaluated: rows.length, module: 'forecastEngine' },
  };
}

/**
 * Business rule 10 for forecastEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function forecastengineRule10(ctx = {}, opts = {}) {
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
    meta: { threshold, weight, evaluated: rows.length, module: 'forecastEngine' },
  };
}

/**
 * Business rule 11 for forecastEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function forecastengineRule11(ctx = {}, opts = {}) {
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
    meta: { threshold, weight, evaluated: rows.length, module: 'forecastEngine' },
  };
}

/**
 * Business rule 12 for forecastEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function forecastengineRule12(ctx = {}, opts = {}) {
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
    meta: { threshold, weight, evaluated: rows.length, module: 'forecastEngine' },
  };
}

/**
 * Business rule 13 for forecastEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function forecastengineRule13(ctx = {}, opts = {}) {
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
    meta: { threshold, weight, evaluated: rows.length, module: 'forecastEngine' },
  };
}

/**
 * Business rule 14 for forecastEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function forecastengineRule14(ctx = {}, opts = {}) {
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
    meta: { threshold, weight, evaluated: rows.length, module: 'forecastEngine' },
  };
}

/**
 * Business rule 15 for forecastEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function forecastengineRule15(ctx = {}, opts = {}) {
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
    meta: { threshold, weight, evaluated: rows.length, module: 'forecastEngine' },
  };
}

/**
 * Business rule 16 for forecastEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function forecastengineRule16(ctx = {}, opts = {}) {
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
    meta: { threshold, weight, evaluated: rows.length, module: 'forecastEngine' },
  };
}

/**
 * Business rule 17 for forecastEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function forecastengineRule17(ctx = {}, opts = {}) {
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
    meta: { threshold, weight, evaluated: rows.length, module: 'forecastEngine' },
  };
}

/**
 * Business rule 18 for forecastEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function forecastengineRule18(ctx = {}, opts = {}) {
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
    meta: { threshold, weight, evaluated: rows.length, module: 'forecastEngine' },
  };
}

/**
 * Business rule 19 for forecastEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function forecastengineRule19(ctx = {}, opts = {}) {
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
    meta: { threshold, weight, evaluated: rows.length, module: 'forecastEngine' },
  };
}

/**
 * Business rule 20 for forecastEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function forecastengineRule20(ctx = {}, opts = {}) {
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
    meta: { threshold, weight, evaluated: rows.length, module: 'forecastEngine' },
  };
}

/**
 * Business rule 21 for forecastEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function forecastengineRule21(ctx = {}, opts = {}) {
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
    meta: { threshold, weight, evaluated: rows.length, module: 'forecastEngine' },
  };
}

/**
 * Business rule 22 for forecastEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function forecastengineRule22(ctx = {}, opts = {}) {
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
    meta: { threshold, weight, evaluated: rows.length, module: 'forecastEngine' },
  };
}

/**
 * Business rule 23 for forecastEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function forecastengineRule23(ctx = {}, opts = {}) {
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
    meta: { threshold, weight, evaluated: rows.length, module: 'forecastEngine' },
  };
}

/**
 * Business rule 24 for forecastEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function forecastengineRule24(ctx = {}, opts = {}) {
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
    meta: { threshold, weight, evaluated: rows.length, module: 'forecastEngine' },
  };
}

/**
 * Business rule 25 for forecastEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function forecastengineRule25(ctx = {}, opts = {}) {
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
    meta: { threshold, weight, evaluated: rows.length, module: 'forecastEngine' },
  };
}

/**
 * Business rule 26 for forecastEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function forecastengineRule26(ctx = {}, opts = {}) {
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
    meta: { threshold, weight, evaluated: rows.length, module: 'forecastEngine' },
  };
}

/**
 * Business rule 27 for forecastEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function forecastengineRule27(ctx = {}, opts = {}) {
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
    meta: { threshold, weight, evaluated: rows.length, module: 'forecastEngine' },
  };
}

/**
 * Business rule 28 for forecastEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function forecastengineRule28(ctx = {}, opts = {}) {
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
    meta: { threshold, weight, evaluated: rows.length, module: 'forecastEngine' },
  };
}

/**
 * Business rule 29 for forecastEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function forecastengineRule29(ctx = {}, opts = {}) {
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
    meta: { threshold, weight, evaluated: rows.length, module: 'forecastEngine' },
  };
}

/**
 * Business rule 30 for forecastEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function forecastengineRule30(ctx = {}, opts = {}) {
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
    meta: { threshold, weight, evaluated: rows.length, module: 'forecastEngine' },
  };
}

/**
 * Business rule 31 for forecastEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function forecastengineRule31(ctx = {}, opts = {}) {
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
    meta: { threshold, weight, evaluated: rows.length, module: 'forecastEngine' },
  };
}

/**
 * Business rule 32 for forecastEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function forecastengineRule32(ctx = {}, opts = {}) {
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
    meta: { threshold, weight, evaluated: rows.length, module: 'forecastEngine' },
  };
}

/**
 * Business rule 33 for forecastEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function forecastengineRule33(ctx = {}, opts = {}) {
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
    meta: { threshold, weight, evaluated: rows.length, module: 'forecastEngine' },
  };
}

/**
 * Business rule 34 for forecastEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function forecastengineRule34(ctx = {}, opts = {}) {
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
    meta: { threshold, weight, evaluated: rows.length, module: 'forecastEngine' },
  };
}

/**
 * Business rule 35 for forecastEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function forecastengineRule35(ctx = {}, opts = {}) {
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
    meta: { threshold, weight, evaluated: rows.length, module: 'forecastEngine' },
  };
}

/**
 * Business rule 36 for forecastEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function forecastengineRule36(ctx = {}, opts = {}) {
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
    meta: { threshold, weight, evaluated: rows.length, module: 'forecastEngine' },
  };
}

/**
 * Business rule 37 for forecastEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function forecastengineRule37(ctx = {}, opts = {}) {
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
    meta: { threshold, weight, evaluated: rows.length, module: 'forecastEngine' },
  };
}

/**
 * Business rule 38 for forecastEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function forecastengineRule38(ctx = {}, opts = {}) {
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
    meta: { threshold, weight, evaluated: rows.length, module: 'forecastEngine' },
  };
}

/**
 * Business rule 39 for forecastEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function forecastengineRule39(ctx = {}, opts = {}) {
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
    meta: { threshold, weight, evaluated: rows.length, module: 'forecastEngine' },
  };
}

/**
 * Business rule 40 for forecastEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function forecastengineRule40(ctx = {}, opts = {}) {
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
    meta: { threshold, weight, evaluated: rows.length, module: 'forecastEngine' },
  };
}

/**
 * Business rule 41 for forecastEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function forecastengineRule41(ctx = {}, opts = {}) {
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
    meta: { threshold, weight, evaluated: rows.length, module: 'forecastEngine' },
  };
}

/**
 * Business rule 42 for forecastEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function forecastengineRule42(ctx = {}, opts = {}) {
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
    meta: { threshold, weight, evaluated: rows.length, module: 'forecastEngine' },
  };
}

/**
 * Business rule 43 for forecastEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function forecastengineRule43(ctx = {}, opts = {}) {
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
    meta: { threshold, weight, evaluated: rows.length, module: 'forecastEngine' },
  };
}

/**
 * Business rule 44 for forecastEngine.
 * Evaluates thresholds, applies policy, and returns structured result.
 * @param {object} ctx - runtime context (inventory, orders, config)
 * @param {object} opts - optional overrides
 * @returns {{ ok: boolean, value: number, message: string, details: object }}
 */
export function forecastengineRule44(ctx = {}, opts = {}) {
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
    meta: { threshold, weight, evaluated: rows.length, module: 'forecastEngine' },
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
