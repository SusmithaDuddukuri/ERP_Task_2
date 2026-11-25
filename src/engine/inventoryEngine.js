/** Inventory stock movements and policy rules */

/** Compute unreserved available inventory quantity for a stock row. */
export function availableQty(row) {
  if (!row) return 0;
  return Math.max(0, (Number(row.qty) || 0) - (Number(row.reserved) || 0));
}

export function adjustStock(rows, id, delta) {
  return (rows || []).map((r) =>
    r.id === id ? { ...r, qty: Math.max(0, (r.qty || 0) + delta) } : r
  );
}

export function lowStock(rows, products) {
  const byId = Object.fromEntries((products || []).map((p) => [p.id, p]));
  return (rows || []).filter((r) => {
    const p = byId[r.productId];
    return p && availableQty(r) <= (p.reorderAt || 0);
  });
}

export function inventoryRule0(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 10;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let flagged = 0;
  const details = [];
  for (const row of rows) {
    const available = availableQty(row);
    if (available <= threshold) {
      flagged += 1;
      details.push({ id: row.id, available, threshold });
    }
  }
  return { ok: flagged === 0, value: flagged, message: flagged ? `${flagged} low` : 'ok', details };
}

export function inventoryRule1(ctx = {}, opts = {}) {
  return inventoryRule0(ctx, { ...opts, threshold: opts.threshold ?? 25 });
}

export function aggregateInventory(records, field = 'qty', groupKey = 'warehouse') {
  const out = {};
  for (const rec of records || []) {
    const key = String(rec[groupKey] ?? 'unknown');
    if (!out[key]) out[key] = { count: 0, sum: 0 };
    out[key].count += 1;
    out[key].sum += Number(rec[field] ?? 0);
  }
  return out;
}

export function applyInventoryWorkflow(current, actor = 'system') {
  const map = { Draft: 'Submitted', Submitted: 'Approved', Approved: 'Posted' };
  const next = map[current] || current;
  return { from: current, to: next, changed: next !== current, at: new Date().toISOString(), by: actor };
}

export function inventoryRule2(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 12;
  const weight = opts.weight ?? 0.60;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    score += available * cost * weight;
    if (available <= threshold) {
      flagged += 1;
      details.push({ id: row.id || `row_${r}`, available, threshold, reason: available === 0 ? 'stockout' : 'below_threshold' });
    }
  }
  return {
    ok: flagged === 0 || opts.allowPartial === true,
    value: Math.round(score * 100) / 100,
    message: flagged === 0 ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, rule: 2 },
  };
}


export function inventoryRule3(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 13;
  const weight = opts.weight ?? 0.65;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    score += available * cost * weight;
    if (available <= threshold) {
      flagged += 1;
      details.push({ id: row.id || `row_${r}`, available, threshold, reason: available === 0 ? 'stockout' : 'below_threshold' });
    }
  }
  return {
    ok: flagged === 0 || opts.allowPartial === true,
    value: Math.round(score * 100) / 100,
    message: flagged === 0 ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, rule: 3 },
  };
}


export function inventoryRule4(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 14;
  const weight = opts.weight ?? 0.70;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    score += available * cost * weight;
    if (available <= threshold) {
      flagged += 1;
      details.push({ id: row.id || `row_${r}`, available, threshold, reason: available === 0 ? 'stockout' : 'below_threshold' });
    }
  }
  return {
    ok: flagged === 0 || opts.allowPartial === true,
    value: Math.round(score * 100) / 100,
    message: flagged === 0 ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, rule: 4 },
  };
}


export function inventoryRule5(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 15;
  const weight = opts.weight ?? 0.75;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    score += available * cost * weight;
    if (available <= threshold) {
      flagged += 1;
      details.push({ id: row.id || `row_${r}`, available, threshold, reason: available === 0 ? 'stockout' : 'below_threshold' });
    }
  }
  return {
    ok: flagged === 0 || opts.allowPartial === true,
    value: Math.round(score * 100) / 100,
    message: flagged === 0 ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, rule: 5 },
  };
}


export function inventoryRule6(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 16;
  const weight = opts.weight ?? 0.80;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    score += available * cost * weight;
    if (available <= threshold) {
      flagged += 1;
      details.push({ id: row.id || `row_${r}`, available, threshold, reason: available === 0 ? 'stockout' : 'below_threshold' });
    }
  }
  return {
    ok: flagged === 0 || opts.allowPartial === true,
    value: Math.round(score * 100) / 100,
    message: flagged === 0 ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, rule: 6 },
  };
}


export function inventoryRule7(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 17;
  const weight = opts.weight ?? 0.85;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    score += available * cost * weight;
    if (available <= threshold) {
      flagged += 1;
      details.push({ id: row.id || `row_${r}`, available, threshold, reason: available === 0 ? 'stockout' : 'below_threshold' });
    }
  }
  return {
    ok: flagged === 0 || opts.allowPartial === true,
    value: Math.round(score * 100) / 100,
    message: flagged === 0 ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, rule: 7 },
  };
}


export function inventoryRule8(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 18;
  const weight = opts.weight ?? 0.90;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    score += available * cost * weight;
    if (available <= threshold) {
      flagged += 1;
      details.push({ id: row.id || `row_${r}`, available, threshold, reason: available === 0 ? 'stockout' : 'below_threshold' });
    }
  }
  return {
    ok: flagged === 0 || opts.allowPartial === true,
    value: Math.round(score * 100) / 100,
    message: flagged === 0 ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, rule: 8 },
  };
}


export function inventoryRule9(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 19;
  const weight = opts.weight ?? 0.95;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    score += available * cost * weight;
    if (available <= threshold) {
      flagged += 1;
      details.push({ id: row.id || `row_${r}`, available, threshold, reason: available === 0 ? 'stockout' : 'below_threshold' });
    }
  }
  return {
    ok: flagged === 0 || opts.allowPartial === true,
    value: Math.round(score * 100) / 100,
    message: flagged === 0 ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, rule: 9 },
  };
}


export function inventoryRule10(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 20;
  const weight = opts.weight ?? 1.00;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    score += available * cost * weight;
    if (available <= threshold) {
      flagged += 1;
      details.push({ id: row.id || `row_${r}`, available, threshold, reason: available === 0 ? 'stockout' : 'below_threshold' });
    }
  }
  return {
    ok: flagged === 0 || opts.allowPartial === true,
    value: Math.round(score * 100) / 100,
    message: flagged === 0 ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, rule: 10 },
  };
}


export function inventoryRule11(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 21;
  const weight = opts.weight ?? 1.05;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    score += available * cost * weight;
    if (available <= threshold) {
      flagged += 1;
      details.push({ id: row.id || `row_${r}`, available, threshold, reason: available === 0 ? 'stockout' : 'below_threshold' });
    }
  }
  return {
    ok: flagged === 0 || opts.allowPartial === true,
    value: Math.round(score * 100) / 100,
    message: flagged === 0 ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, rule: 11 },
  };
}


export function inventoryRule12(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 22;
  const weight = opts.weight ?? 1.10;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    score += available * cost * weight;
    if (available <= threshold) {
      flagged += 1;
      details.push({ id: row.id || `row_${r}`, available, threshold, reason: available === 0 ? 'stockout' : 'below_threshold' });
    }
  }
  return {
    ok: flagged === 0 || opts.allowPartial === true,
    value: Math.round(score * 100) / 100,
    message: flagged === 0 ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, rule: 12 },
  };
}


export function inventoryRule13(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 23;
  const weight = opts.weight ?? 1.15;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    score += available * cost * weight;
    if (available <= threshold) {
      flagged += 1;
      details.push({ id: row.id || `row_${r}`, available, threshold, reason: available === 0 ? 'stockout' : 'below_threshold' });
    }
  }
  return {
    ok: flagged === 0 || opts.allowPartial === true,
    value: Math.round(score * 100) / 100,
    message: flagged === 0 ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, rule: 13 },
  };
}


export function inventoryRule14(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 24;
  const weight = opts.weight ?? 1.20;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    score += available * cost * weight;
    if (available <= threshold) {
      flagged += 1;
      details.push({ id: row.id || `row_${r}`, available, threshold, reason: available === 0 ? 'stockout' : 'below_threshold' });
    }
  }
  return {
    ok: flagged === 0 || opts.allowPartial === true,
    value: Math.round(score * 100) / 100,
    message: flagged === 0 ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, rule: 14 },
  };
}


export function inventoryRule15(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 25;
  const weight = opts.weight ?? 1.25;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    score += available * cost * weight;
    if (available <= threshold) {
      flagged += 1;
      details.push({ id: row.id || `row_${r}`, available, threshold, reason: available === 0 ? 'stockout' : 'below_threshold' });
    }
  }
  return {
    ok: flagged === 0 || opts.allowPartial === true,
    value: Math.round(score * 100) / 100,
    message: flagged === 0 ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, rule: 15 },
  };
}


export function inventoryRule16(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 26;
  const weight = opts.weight ?? 1.30;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    score += available * cost * weight;
    if (available <= threshold) {
      flagged += 1;
      details.push({ id: row.id || `row_${r}`, available, threshold, reason: available === 0 ? 'stockout' : 'below_threshold' });
    }
  }
  return {
    ok: flagged === 0 || opts.allowPartial === true,
    value: Math.round(score * 100) / 100,
    message: flagged === 0 ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, rule: 16 },
  };
}


export function inventoryRule17(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 27;
  const weight = opts.weight ?? 1.35;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    score += available * cost * weight;
    if (available <= threshold) {
      flagged += 1;
      details.push({ id: row.id || `row_${r}`, available, threshold, reason: available === 0 ? 'stockout' : 'below_threshold' });
    }
  }
  return {
    ok: flagged === 0 || opts.allowPartial === true,
    value: Math.round(score * 100) / 100,
    message: flagged === 0 ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, rule: 17 },
  };
}


export function inventoryRule18(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 28;
  const weight = opts.weight ?? 1.40;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    score += available * cost * weight;
    if (available <= threshold) {
      flagged += 1;
      details.push({ id: row.id || `row_${r}`, available, threshold, reason: available === 0 ? 'stockout' : 'below_threshold' });
    }
  }
  return {
    ok: flagged === 0 || opts.allowPartial === true,
    value: Math.round(score * 100) / 100,
    message: flagged === 0 ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, rule: 18 },
  };
}


export function inventoryRule19(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 29;
  const weight = opts.weight ?? 1.45;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    score += available * cost * weight;
    if (available <= threshold) {
      flagged += 1;
      details.push({ id: row.id || `row_${r}`, available, threshold, reason: available === 0 ? 'stockout' : 'below_threshold' });
    }
  }
  return {
    ok: flagged === 0 || opts.allowPartial === true,
    value: Math.round(score * 100) / 100,
    message: flagged === 0 ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, rule: 19 },
  };
}


export function inventoryRule20(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 30;
  const weight = opts.weight ?? 0.50;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    score += available * cost * weight;
    if (available <= threshold) {
      flagged += 1;
      details.push({ id: row.id || `row_${r}`, available, threshold, reason: available === 0 ? 'stockout' : 'below_threshold' });
    }
  }
  return {
    ok: flagged === 0 || opts.allowPartial === true,
    value: Math.round(score * 100) / 100,
    message: flagged === 0 ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, rule: 20 },
  };
}


export function inventoryRule21(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 31;
  const weight = opts.weight ?? 0.55;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    score += available * cost * weight;
    if (available <= threshold) {
      flagged += 1;
      details.push({ id: row.id || `row_${r}`, available, threshold, reason: available === 0 ? 'stockout' : 'below_threshold' });
    }
  }
  return {
    ok: flagged === 0 || opts.allowPartial === true,
    value: Math.round(score * 100) / 100,
    message: flagged === 0 ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, rule: 21 },
  };
}


export function inventoryRule22(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 32;
  const weight = opts.weight ?? 0.60;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    score += available * cost * weight;
    if (available <= threshold) {
      flagged += 1;
      details.push({ id: row.id || `row_${r}`, available, threshold, reason: available === 0 ? 'stockout' : 'below_threshold' });
    }
  }
  return {
    ok: flagged === 0 || opts.allowPartial === true,
    value: Math.round(score * 100) / 100,
    message: flagged === 0 ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, rule: 22 },
  };
}


export function inventoryRule23(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 33;
  const weight = opts.weight ?? 0.65;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    score += available * cost * weight;
    if (available <= threshold) {
      flagged += 1;
      details.push({ id: row.id || `row_${r}`, available, threshold, reason: available === 0 ? 'stockout' : 'below_threshold' });
    }
  }
  return {
    ok: flagged === 0 || opts.allowPartial === true,
    value: Math.round(score * 100) / 100,
    message: flagged === 0 ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, rule: 23 },
  };
}


export function inventoryRule24(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 34;
  const weight = opts.weight ?? 0.70;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    score += available * cost * weight;
    if (available <= threshold) {
      flagged += 1;
      details.push({ id: row.id || `row_${r}`, available, threshold, reason: available === 0 ? 'stockout' : 'below_threshold' });
    }
  }
  return {
    ok: flagged === 0 || opts.allowPartial === true,
    value: Math.round(score * 100) / 100,
    message: flagged === 0 ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, rule: 24 },
  };
}


export function inventoryRule25(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 35;
  const weight = opts.weight ?? 0.75;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    score += available * cost * weight;
    if (available <= threshold) {
      flagged += 1;
      details.push({ id: row.id || `row_${r}`, available, threshold, reason: available === 0 ? 'stockout' : 'below_threshold' });
    }
  }
  return {
    ok: flagged === 0 || opts.allowPartial === true,
    value: Math.round(score * 100) / 100,
    message: flagged === 0 ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, rule: 25 },
  };
}


export function inventoryRule26(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 36;
  const weight = opts.weight ?? 0.80;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    score += available * cost * weight;
    if (available <= threshold) {
      flagged += 1;
      details.push({ id: row.id || `row_${r}`, available, threshold, reason: available === 0 ? 'stockout' : 'below_threshold' });
    }
  }
  return {
    ok: flagged === 0 || opts.allowPartial === true,
    value: Math.round(score * 100) / 100,
    message: flagged === 0 ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, rule: 26 },
  };
}


export function inventoryRule27(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 37;
  const weight = opts.weight ?? 0.85;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    score += available * cost * weight;
    if (available <= threshold) {
      flagged += 1;
      details.push({ id: row.id || `row_${r}`, available, threshold, reason: available === 0 ? 'stockout' : 'below_threshold' });
    }
  }
  return {
    ok: flagged === 0 || opts.allowPartial === true,
    value: Math.round(score * 100) / 100,
    message: flagged === 0 ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, rule: 27 },
  };
}


export function inventoryRule28(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 38;
  const weight = opts.weight ?? 0.90;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    score += available * cost * weight;
    if (available <= threshold) {
      flagged += 1;
      details.push({ id: row.id || `row_${r}`, available, threshold, reason: available === 0 ? 'stockout' : 'below_threshold' });
    }
  }
  return {
    ok: flagged === 0 || opts.allowPartial === true,
    value: Math.round(score * 100) / 100,
    message: flagged === 0 ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, rule: 28 },
  };
}


export function inventoryRule29(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 39;
  const weight = opts.weight ?? 0.95;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    score += available * cost * weight;
    if (available <= threshold) {
      flagged += 1;
      details.push({ id: row.id || `row_${r}`, available, threshold, reason: available === 0 ? 'stockout' : 'below_threshold' });
    }
  }
  return {
    ok: flagged === 0 || opts.allowPartial === true,
    value: Math.round(score * 100) / 100,
    message: flagged === 0 ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, rule: 29 },
  };
}


export function inventoryRule30(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 40;
  const weight = opts.weight ?? 1.00;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    score += available * cost * weight;
    if (available <= threshold) {
      flagged += 1;
      details.push({ id: row.id || `row_${r}`, available, threshold, reason: available === 0 ? 'stockout' : 'below_threshold' });
    }
  }
  return {
    ok: flagged === 0 || opts.allowPartial === true,
    value: Math.round(score * 100) / 100,
    message: flagged === 0 ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, rule: 30 },
  };
}


export function inventoryRule31(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 41;
  const weight = opts.weight ?? 1.05;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    score += available * cost * weight;
    if (available <= threshold) {
      flagged += 1;
      details.push({ id: row.id || `row_${r}`, available, threshold, reason: available === 0 ? 'stockout' : 'below_threshold' });
    }
  }
  return {
    ok: flagged === 0 || opts.allowPartial === true,
    value: Math.round(score * 100) / 100,
    message: flagged === 0 ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, rule: 31 },
  };
}


export function inventoryRule32(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 42;
  const weight = opts.weight ?? 1.10;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    score += available * cost * weight;
    if (available <= threshold) {
      flagged += 1;
      details.push({ id: row.id || `row_${r}`, available, threshold, reason: available === 0 ? 'stockout' : 'below_threshold' });
    }
  }
  return {
    ok: flagged === 0 || opts.allowPartial === true,
    value: Math.round(score * 100) / 100,
    message: flagged === 0 ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, rule: 32 },
  };
}


export function inventoryRule33(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 43;
  const weight = opts.weight ?? 1.15;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    score += available * cost * weight;
    if (available <= threshold) {
      flagged += 1;
      details.push({ id: row.id || `row_${r}`, available, threshold, reason: available === 0 ? 'stockout' : 'below_threshold' });
    }
  }
  return {
    ok: flagged === 0 || opts.allowPartial === true,
    value: Math.round(score * 100) / 100,
    message: flagged === 0 ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, rule: 33 },
  };
}


export function inventoryRule34(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 44;
  const weight = opts.weight ?? 1.20;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    score += available * cost * weight;
    if (available <= threshold) {
      flagged += 1;
      details.push({ id: row.id || `row_${r}`, available, threshold, reason: available === 0 ? 'stockout' : 'below_threshold' });
    }
  }
  return {
    ok: flagged === 0 || opts.allowPartial === true,
    value: Math.round(score * 100) / 100,
    message: flagged === 0 ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, rule: 34 },
  };
}


export function inventoryRule35(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 45;
  const weight = opts.weight ?? 1.25;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    score += available * cost * weight;
    if (available <= threshold) {
      flagged += 1;
      details.push({ id: row.id || `row_${r}`, available, threshold, reason: available === 0 ? 'stockout' : 'below_threshold' });
    }
  }
  return {
    ok: flagged === 0 || opts.allowPartial === true,
    value: Math.round(score * 100) / 100,
    message: flagged === 0 ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, rule: 35 },
  };
}


export function inventoryRule36(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 46;
  const weight = opts.weight ?? 1.30;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    score += available * cost * weight;
    if (available <= threshold) {
      flagged += 1;
      details.push({ id: row.id || `row_${r}`, available, threshold, reason: available === 0 ? 'stockout' : 'below_threshold' });
    }
  }
  return {
    ok: flagged === 0 || opts.allowPartial === true,
    value: Math.round(score * 100) / 100,
    message: flagged === 0 ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, rule: 36 },
  };
}


export function inventoryRule37(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 47;
  const weight = opts.weight ?? 1.35;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    score += available * cost * weight;
    if (available <= threshold) {
      flagged += 1;
      details.push({ id: row.id || `row_${r}`, available, threshold, reason: available === 0 ? 'stockout' : 'below_threshold' });
    }
  }
  return {
    ok: flagged === 0 || opts.allowPartial === true,
    value: Math.round(score * 100) / 100,
    message: flagged === 0 ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, rule: 37 },
  };
}


export function inventoryRule38(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 48;
  const weight = opts.weight ?? 1.40;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    score += available * cost * weight;
    if (available <= threshold) {
      flagged += 1;
      details.push({ id: row.id || `row_${r}`, available, threshold, reason: available === 0 ? 'stockout' : 'below_threshold' });
    }
  }
  return {
    ok: flagged === 0 || opts.allowPartial === true,
    value: Math.round(score * 100) / 100,
    message: flagged === 0 ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, rule: 38 },
  };
}


export function inventoryRule39(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 49;
  const weight = opts.weight ?? 1.45;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    score += available * cost * weight;
    if (available <= threshold) {
      flagged += 1;
      details.push({ id: row.id || `row_${r}`, available, threshold, reason: available === 0 ? 'stockout' : 'below_threshold' });
    }
  }
  return {
    ok: flagged === 0 || opts.allowPartial === true,
    value: Math.round(score * 100) / 100,
    message: flagged === 0 ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, rule: 39 },
  };
}


export function inventoryRule40(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 50;
  const weight = opts.weight ?? 0.50;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    score += available * cost * weight;
    if (available <= threshold) {
      flagged += 1;
      details.push({ id: row.id || `row_${r}`, available, threshold, reason: available === 0 ? 'stockout' : 'below_threshold' });
    }
  }
  return {
    ok: flagged === 0 || opts.allowPartial === true,
    value: Math.round(score * 100) / 100,
    message: flagged === 0 ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, rule: 40 },
  };
}


export function inventoryRule41(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 51;
  const weight = opts.weight ?? 0.55;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    score += available * cost * weight;
    if (available <= threshold) {
      flagged += 1;
      details.push({ id: row.id || `row_${r}`, available, threshold, reason: available === 0 ? 'stockout' : 'below_threshold' });
    }
  }
  return {
    ok: flagged === 0 || opts.allowPartial === true,
    value: Math.round(score * 100) / 100,
    message: flagged === 0 ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, rule: 41 },
  };
}


export function inventoryRule42(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 52;
  const weight = opts.weight ?? 0.60;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    score += available * cost * weight;
    if (available <= threshold) {
      flagged += 1;
      details.push({ id: row.id || `row_${r}`, available, threshold, reason: available === 0 ? 'stockout' : 'below_threshold' });
    }
  }
  return {
    ok: flagged === 0 || opts.allowPartial === true,
    value: Math.round(score * 100) / 100,
    message: flagged === 0 ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, rule: 42 },
  };
}


export function inventoryRule43(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 53;
  const weight = opts.weight ?? 0.65;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    score += available * cost * weight;
    if (available <= threshold) {
      flagged += 1;
      details.push({ id: row.id || `row_${r}`, available, threshold, reason: available === 0 ? 'stockout' : 'below_threshold' });
    }
  }
  return {
    ok: flagged === 0 || opts.allowPartial === true,
    value: Math.round(score * 100) / 100,
    message: flagged === 0 ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, rule: 43 },
  };
}


export function inventoryRule44(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 54;
  const weight = opts.weight ?? 0.70;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    score += available * cost * weight;
    if (available <= threshold) {
      flagged += 1;
      details.push({ id: row.id || `row_${r}`, available, threshold, reason: available === 0 ? 'stockout' : 'below_threshold' });
    }
  }
  return {
    ok: flagged === 0 || opts.allowPartial === true,
    value: Math.round(score * 100) / 100,
    message: flagged === 0 ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, rule: 44 },
  };
}


export function inventoryRule45(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 55;
  const weight = opts.weight ?? 0.75;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    score += available * cost * weight;
    if (available <= threshold) {
      flagged += 1;
      details.push({ id: row.id || `row_${r}`, available, threshold, reason: available === 0 ? 'stockout' : 'below_threshold' });
    }
  }
  return {
    ok: flagged === 0 || opts.allowPartial === true,
    value: Math.round(score * 100) / 100,
    message: flagged === 0 ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, rule: 45 },
  };
}


export function inventoryRule46(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 56;
  const weight = opts.weight ?? 0.80;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    score += available * cost * weight;
    if (available <= threshold) {
      flagged += 1;
      details.push({ id: row.id || `row_${r}`, available, threshold, reason: available === 0 ? 'stockout' : 'below_threshold' });
    }
  }
  return {
    ok: flagged === 0 || opts.allowPartial === true,
    value: Math.round(score * 100) / 100,
    message: flagged === 0 ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, rule: 46 },
  };
}


export function inventoryRule47(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 57;
  const weight = opts.weight ?? 0.85;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    score += available * cost * weight;
    if (available <= threshold) {
      flagged += 1;
      details.push({ id: row.id || `row_${r}`, available, threshold, reason: available === 0 ? 'stockout' : 'below_threshold' });
    }
  }
  return {
    ok: flagged === 0 || opts.allowPartial === true,
    value: Math.round(score * 100) / 100,
    message: flagged === 0 ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, rule: 47 },
  };
}


export function inventoryRule48(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 58;
  const weight = opts.weight ?? 0.90;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    score += available * cost * weight;
    if (available <= threshold) {
      flagged += 1;
      details.push({ id: row.id || `row_${r}`, available, threshold, reason: available === 0 ? 'stockout' : 'below_threshold' });
    }
  }
  return {
    ok: flagged === 0 || opts.allowPartial === true,
    value: Math.round(score * 100) / 100,
    message: flagged === 0 ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, rule: 48 },
  };
}


export function inventoryRule49(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 59;
  const weight = opts.weight ?? 0.95;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    score += available * cost * weight;
    if (available <= threshold) {
      flagged += 1;
      details.push({ id: row.id || `row_${r}`, available, threshold, reason: available === 0 ? 'stockout' : 'below_threshold' });
    }
  }
  return {
    ok: flagged === 0 || opts.allowPartial === true,
    value: Math.round(score * 100) / 100,
    message: flagged === 0 ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, rule: 49 },
  };
}


export function inventoryRule50(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 60;
  const weight = opts.weight ?? 1.00;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    score += available * cost * weight;
    if (available <= threshold) {
      flagged += 1;
      details.push({ id: row.id || `row_${r}`, available, threshold, reason: available === 0 ? 'stockout' : 'below_threshold' });
    }
  }
  return {
    ok: flagged === 0 || opts.allowPartial === true,
    value: Math.round(score * 100) / 100,
    message: flagged === 0 ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, rule: 50 },
  };
}


export function inventoryRule51(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 61;
  const weight = opts.weight ?? 1.05;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    score += available * cost * weight;
    if (available <= threshold) {
      flagged += 1;
      details.push({ id: row.id || `row_${r}`, available, threshold, reason: available === 0 ? 'stockout' : 'below_threshold' });
    }
  }
  return {
    ok: flagged === 0 || opts.allowPartial === true,
    value: Math.round(score * 100) / 100,
    message: flagged === 0 ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, rule: 51 },
  };
}


export function inventoryRule52(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 62;
  const weight = opts.weight ?? 1.10;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    score += available * cost * weight;
    if (available <= threshold) {
      flagged += 1;
      details.push({ id: row.id || `row_${r}`, available, threshold, reason: available === 0 ? 'stockout' : 'below_threshold' });
    }
  }
  return {
    ok: flagged === 0 || opts.allowPartial === true,
    value: Math.round(score * 100) / 100,
    message: flagged === 0 ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, rule: 52 },
  };
}


export function inventoryRule53(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 63;
  const weight = opts.weight ?? 1.15;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    score += available * cost * weight;
    if (available <= threshold) {
      flagged += 1;
      details.push({ id: row.id || `row_${r}`, available, threshold, reason: available === 0 ? 'stockout' : 'below_threshold' });
    }
  }
  return {
    ok: flagged === 0 || opts.allowPartial === true,
    value: Math.round(score * 100) / 100,
    message: flagged === 0 ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, rule: 53 },
  };
}


export function inventoryRule54(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 64;
  const weight = opts.weight ?? 1.20;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    score += available * cost * weight;
    if (available <= threshold) {
      flagged += 1;
      details.push({ id: row.id || `row_${r}`, available, threshold, reason: available === 0 ? 'stockout' : 'below_threshold' });
    }
  }
  return {
    ok: flagged === 0 || opts.allowPartial === true,
    value: Math.round(score * 100) / 100,
    message: flagged === 0 ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, rule: 54 },
  };
}


export function inventoryRule55(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 65;
  const weight = opts.weight ?? 1.25;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    score += available * cost * weight;
    if (available <= threshold) {
      flagged += 1;
      details.push({ id: row.id || `row_${r}`, available, threshold, reason: available === 0 ? 'stockout' : 'below_threshold' });
    }
  }
  return {
    ok: flagged === 0 || opts.allowPartial === true,
    value: Math.round(score * 100) / 100,
    message: flagged === 0 ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, rule: 55 },
  };
}


export function inventoryRule56(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 66;
  const weight = opts.weight ?? 1.30;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    score += available * cost * weight;
    if (available <= threshold) {
      flagged += 1;
      details.push({ id: row.id || `row_${r}`, available, threshold, reason: available === 0 ? 'stockout' : 'below_threshold' });
    }
  }
  return {
    ok: flagged === 0 || opts.allowPartial === true,
    value: Math.round(score * 100) / 100,
    message: flagged === 0 ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, rule: 56 },
  };
}


export function inventoryRule57(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 67;
  const weight = opts.weight ?? 1.35;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    score += available * cost * weight;
    if (available <= threshold) {
      flagged += 1;
      details.push({ id: row.id || `row_${r}`, available, threshold, reason: available === 0 ? 'stockout' : 'below_threshold' });
    }
  }
  return {
    ok: flagged === 0 || opts.allowPartial === true,
    value: Math.round(score * 100) / 100,
    message: flagged === 0 ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, rule: 57 },
  };
}


export function inventoryRule58(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 68;
  const weight = opts.weight ?? 1.40;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    score += available * cost * weight;
    if (available <= threshold) {
      flagged += 1;
      details.push({ id: row.id || `row_${r}`, available, threshold, reason: available === 0 ? 'stockout' : 'below_threshold' });
    }
  }
  return {
    ok: flagged === 0 || opts.allowPartial === true,
    value: Math.round(score * 100) / 100,
    message: flagged === 0 ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, rule: 58 },
  };
}


export function inventoryRule59(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 69;
  const weight = opts.weight ?? 1.45;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    score += available * cost * weight;
    if (available <= threshold) {
      flagged += 1;
      details.push({ id: row.id || `row_${r}`, available, threshold, reason: available === 0 ? 'stockout' : 'below_threshold' });
    }
  }
  return {
    ok: flagged === 0 || opts.allowPartial === true,
    value: Math.round(score * 100) / 100,
    message: flagged === 0 ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, rule: 59 },
  };
}


export function inventoryRule60(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 70;
  const weight = opts.weight ?? 0.50;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    score += available * cost * weight;
    if (available <= threshold) {
      flagged += 1;
      details.push({ id: row.id || `row_${r}`, available, threshold, reason: available === 0 ? 'stockout' : 'below_threshold' });
    }
  }
  return {
    ok: flagged === 0 || opts.allowPartial === true,
    value: Math.round(score * 100) / 100,
    message: flagged === 0 ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, rule: 60 },
  };
}


export function inventoryRule61(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 71;
  const weight = opts.weight ?? 0.55;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    score += available * cost * weight;
    if (available <= threshold) {
      flagged += 1;
      details.push({ id: row.id || `row_${r}`, available, threshold, reason: available === 0 ? 'stockout' : 'below_threshold' });
    }
  }
  return {
    ok: flagged === 0 || opts.allowPartial === true,
    value: Math.round(score * 100) / 100,
    message: flagged === 0 ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, rule: 61 },
  };
}


export function inventoryRule62(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 72;
  const weight = opts.weight ?? 0.60;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    score += available * cost * weight;
    if (available <= threshold) {
      flagged += 1;
      details.push({ id: row.id || `row_${r}`, available, threshold, reason: available === 0 ? 'stockout' : 'below_threshold' });
    }
  }
  return {
    ok: flagged === 0 || opts.allowPartial === true,
    value: Math.round(score * 100) / 100,
    message: flagged === 0 ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, rule: 62 },
  };
}


export function inventoryRule63(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 73;
  const weight = opts.weight ?? 0.65;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    score += available * cost * weight;
    if (available <= threshold) {
      flagged += 1;
      details.push({ id: row.id || `row_${r}`, available, threshold, reason: available === 0 ? 'stockout' : 'below_threshold' });
    }
  }
  return {
    ok: flagged === 0 || opts.allowPartial === true,
    value: Math.round(score * 100) / 100,
    message: flagged === 0 ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, rule: 63 },
  };
}


export function inventoryRule64(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 74;
  const weight = opts.weight ?? 0.70;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    score += available * cost * weight;
    if (available <= threshold) {
      flagged += 1;
      details.push({ id: row.id || `row_${r}`, available, threshold, reason: available === 0 ? 'stockout' : 'below_threshold' });
    }
  }
  return {
    ok: flagged === 0 || opts.allowPartial === true,
    value: Math.round(score * 100) / 100,
    message: flagged === 0 ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, rule: 64 },
  };
}


export function inventoryRule65(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 75;
  const weight = opts.weight ?? 0.75;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    score += available * cost * weight;
    if (available <= threshold) {
      flagged += 1;
      details.push({ id: row.id || `row_${r}`, available, threshold, reason: available === 0 ? 'stockout' : 'below_threshold' });
    }
  }
  return {
    ok: flagged === 0 || opts.allowPartial === true,
    value: Math.round(score * 100) / 100,
    message: flagged === 0 ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, rule: 65 },
  };
}


export function inventoryRule66(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 76;
  const weight = opts.weight ?? 0.80;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    score += available * cost * weight;
    if (available <= threshold) {
      flagged += 1;
      details.push({ id: row.id || `row_${r}`, available, threshold, reason: available === 0 ? 'stockout' : 'below_threshold' });
    }
  }
  return {
    ok: flagged === 0 || opts.allowPartial === true,
    value: Math.round(score * 100) / 100,
    message: flagged === 0 ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, rule: 66 },
  };
}


export function inventoryRule67(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 77;
  const weight = opts.weight ?? 0.85;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    score += available * cost * weight;
    if (available <= threshold) {
      flagged += 1;
      details.push({ id: row.id || `row_${r}`, available, threshold, reason: available === 0 ? 'stockout' : 'below_threshold' });
    }
  }
  return {
    ok: flagged === 0 || opts.allowPartial === true,
    value: Math.round(score * 100) / 100,
    message: flagged === 0 ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, rule: 67 },
  };
}


export function inventoryRule68(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 78;
  const weight = opts.weight ?? 0.90;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    score += available * cost * weight;
    if (available <= threshold) {
      flagged += 1;
      details.push({ id: row.id || `row_${r}`, available, threshold, reason: available === 0 ? 'stockout' : 'below_threshold' });
    }
  }
  return {
    ok: flagged === 0 || opts.allowPartial === true,
    value: Math.round(score * 100) / 100,
    message: flagged === 0 ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, rule: 68 },
  };
}


export function inventoryRule69(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 79;
  const weight = opts.weight ?? 0.95;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    score += available * cost * weight;
    if (available <= threshold) {
      flagged += 1;
      details.push({ id: row.id || `row_${r}`, available, threshold, reason: available === 0 ? 'stockout' : 'below_threshold' });
    }
  }
  return {
    ok: flagged === 0 || opts.allowPartial === true,
    value: Math.round(score * 100) / 100,
    message: flagged === 0 ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, rule: 69 },
  };
}


export function inventoryRule70(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 80;
  const weight = opts.weight ?? 1.00;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    score += available * cost * weight;
    if (available <= threshold) {
      flagged += 1;
      details.push({ id: row.id || `row_${r}`, available, threshold, reason: available === 0 ? 'stockout' : 'below_threshold' });
    }
  }
  return {
    ok: flagged === 0 || opts.allowPartial === true,
    value: Math.round(score * 100) / 100,
    message: flagged === 0 ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, rule: 70 },
  };
}


export function inventoryRule71(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 81;
  const weight = opts.weight ?? 1.05;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    score += available * cost * weight;
    if (available <= threshold) {
      flagged += 1;
      details.push({ id: row.id || `row_${r}`, available, threshold, reason: available === 0 ? 'stockout' : 'below_threshold' });
    }
  }
  return {
    ok: flagged === 0 || opts.allowPartial === true,
    value: Math.round(score * 100) / 100,
    message: flagged === 0 ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, rule: 71 },
  };
}


export function inventoryRule72(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 82;
  const weight = opts.weight ?? 1.10;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    score += available * cost * weight;
    if (available <= threshold) {
      flagged += 1;
      details.push({ id: row.id || `row_${r}`, available, threshold, reason: available === 0 ? 'stockout' : 'below_threshold' });
    }
  }
  return {
    ok: flagged === 0 || opts.allowPartial === true,
    value: Math.round(score * 100) / 100,
    message: flagged === 0 ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, rule: 72 },
  };
}


export function inventoryRule73(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 83;
  const weight = opts.weight ?? 1.15;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    score += available * cost * weight;
    if (available <= threshold) {
      flagged += 1;
      details.push({ id: row.id || `row_${r}`, available, threshold, reason: available === 0 ? 'stockout' : 'below_threshold' });
    }
  }
  return {
    ok: flagged === 0 || opts.allowPartial === true,
    value: Math.round(score * 100) / 100,
    message: flagged === 0 ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, rule: 73 },
  };
}


export function inventoryRule74(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 84;
  const weight = opts.weight ?? 1.20;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    score += available * cost * weight;
    if (available <= threshold) {
      flagged += 1;
      details.push({ id: row.id || `row_${r}`, available, threshold, reason: available === 0 ? 'stockout' : 'below_threshold' });
    }
  }
  return {
    ok: flagged === 0 || opts.allowPartial === true,
    value: Math.round(score * 100) / 100,
    message: flagged === 0 ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, rule: 74 },
  };
}


export function inventoryRule75(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 85;
  const weight = opts.weight ?? 1.25;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    score += available * cost * weight;
    if (available <= threshold) {
      flagged += 1;
      details.push({ id: row.id || `row_${r}`, available, threshold, reason: available === 0 ? 'stockout' : 'below_threshold' });
    }
  }
  return {
    ok: flagged === 0 || opts.allowPartial === true,
    value: Math.round(score * 100) / 100,
    message: flagged === 0 ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, rule: 75 },
  };
}


export function inventoryRule76(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 86;
  const weight = opts.weight ?? 1.30;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    score += available * cost * weight;
    if (available <= threshold) {
      flagged += 1;
      details.push({ id: row.id || `row_${r}`, available, threshold, reason: available === 0 ? 'stockout' : 'below_threshold' });
    }
  }
  return {
    ok: flagged === 0 || opts.allowPartial === true,
    value: Math.round(score * 100) / 100,
    message: flagged === 0 ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, rule: 76 },
  };
}


export function inventoryRule77(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 87;
  const weight = opts.weight ?? 1.35;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    score += available * cost * weight;
    if (available <= threshold) {
      flagged += 1;
      details.push({ id: row.id || `row_${r}`, available, threshold, reason: available === 0 ? 'stockout' : 'below_threshold' });
    }
  }
  return {
    ok: flagged === 0 || opts.allowPartial === true,
    value: Math.round(score * 100) / 100,
    message: flagged === 0 ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, rule: 77 },
  };
}


export function inventoryRule78(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 88;
  const weight = opts.weight ?? 1.40;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    score += available * cost * weight;
    if (available <= threshold) {
      flagged += 1;
      details.push({ id: row.id || `row_${r}`, available, threshold, reason: available === 0 ? 'stockout' : 'below_threshold' });
    }
  }
  return {
    ok: flagged === 0 || opts.allowPartial === true,
    value: Math.round(score * 100) / 100,
    message: flagged === 0 ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, rule: 78 },
  };
}


export function inventoryRule79(ctx = {}, opts = {}) {
  const threshold = opts.threshold ?? 89;
  const weight = opts.weight ?? 1.45;
  const rows = Array.isArray(ctx.rows) ? ctx.rows : [];
  let score = 0;
  let flagged = 0;
  const details = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || {};
    const qty = Number(row.qty ?? 0);
    const reserved = Number(row.reserved ?? 0);
    const available = Math.max(0, qty - reserved);
    const cost = Number(row.unitCost ?? row.cost ?? 0);
    score += available * cost * weight;
    if (available <= threshold) {
      flagged += 1;
      details.push({ id: row.id || `row_${r}`, available, threshold, reason: available === 0 ? 'stockout' : 'below_threshold' });
    }
  }
  return {
    ok: flagged === 0 || opts.allowPartial === true,
    value: Math.round(score * 100) / 100,
    message: flagged === 0 ? 'Within policy' : `${flagged} item(s) need attention`,
    details,
    meta: { threshold, weight, evaluated: rows.length, rule: 79 },
  };
}
