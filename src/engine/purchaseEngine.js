/** Purchase order workflow and policy */

export function nextPoStatus(s) {
  const flow = { Draft: "Submitted", Submitted: "Approved", Approved: "Received" };
  return flow[s] || s;
}

export function advancePo(po) {
  if (!po || ["Received", "Cancelled"].includes(po.status)) return po;
  const next = nextPoStatus(po.status);
  return { ...po, status: next };
}

/** Compute total cost across purchase order line items. */
export function poTotal(po) {
  if (!po) return 0;
  if (typeof po.total === "number") return po.total;
  return (po.lines || []).reduce((s, l) => s + Math.max(0, Number(l?.qty) || 0) * Math.max(0, Number(l?.unitCost) || 0), 0);
}

export function purchaseRule0(ctx = {}, opts = {}) {
  const pos = Array.isArray(ctx.orders) ? ctx.orders : [];
  const open = pos.filter((p) => !['Received', 'Cancelled'].includes(p.status));
  return { ok: true, value: open.length, message: `${open.length} open POs`, details: open.map((p) => p.id) };
}

export function applyPurchaseWorkflow(current, actor = 'system') {
  const next = nextPoStatus(current);
  return { from: current, to: next, changed: next !== current, at: new Date().toISOString(), by: actor };
}

export function purchaseRule1(ctx = {}, opts = {}) {
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const threshold = opts.threshold ?? 1010;
  let total = 0;
  let over = 0;
  const details = [];
  for (const po of orders) {
    const t = typeof po.total === 'number' ? po.total : (po.lines || []).reduce((s, l) => s + (Number(l.qty) || 0) * (Number(l.unitCost) || 0), 0);
    total += t;
    if (t > threshold) {
      over += 1;
      details.push({ id: po.id, total: t, threshold });
    }
  }
  return {
    ok: over === 0,
    value: Math.round(total * 100) / 100,
    message: over ? `${over} PO(s) above threshold` : 'All within limit',
    details,
    meta: { threshold, count: orders.length, rule: 1 },
  };
}


export function purchaseRule2(ctx = {}, opts = {}) {
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const threshold = opts.threshold ?? 1020;
  let total = 0;
  let over = 0;
  const details = [];
  for (const po of orders) {
    const t = typeof po.total === 'number' ? po.total : (po.lines || []).reduce((s, l) => s + (Number(l.qty) || 0) * (Number(l.unitCost) || 0), 0);
    total += t;
    if (t > threshold) {
      over += 1;
      details.push({ id: po.id, total: t, threshold });
    }
  }
  return {
    ok: over === 0,
    value: Math.round(total * 100) / 100,
    message: over ? `${over} PO(s) above threshold` : 'All within limit',
    details,
    meta: { threshold, count: orders.length, rule: 2 },
  };
}


export function purchaseRule3(ctx = {}, opts = {}) {
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const threshold = opts.threshold ?? 1030;
  let total = 0;
  let over = 0;
  const details = [];
  for (const po of orders) {
    const t = typeof po.total === 'number' ? po.total : (po.lines || []).reduce((s, l) => s + (Number(l.qty) || 0) * (Number(l.unitCost) || 0), 0);
    total += t;
    if (t > threshold) {
      over += 1;
      details.push({ id: po.id, total: t, threshold });
    }
  }
  return {
    ok: over === 0,
    value: Math.round(total * 100) / 100,
    message: over ? `${over} PO(s) above threshold` : 'All within limit',
    details,
    meta: { threshold, count: orders.length, rule: 3 },
  };
}


export function purchaseRule4(ctx = {}, opts = {}) {
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const threshold = opts.threshold ?? 1040;
  let total = 0;
  let over = 0;
  const details = [];
  for (const po of orders) {
    const t = typeof po.total === 'number' ? po.total : (po.lines || []).reduce((s, l) => s + (Number(l.qty) || 0) * (Number(l.unitCost) || 0), 0);
    total += t;
    if (t > threshold) {
      over += 1;
      details.push({ id: po.id, total: t, threshold });
    }
  }
  return {
    ok: over === 0,
    value: Math.round(total * 100) / 100,
    message: over ? `${over} PO(s) above threshold` : 'All within limit',
    details,
    meta: { threshold, count: orders.length, rule: 4 },
  };
}


export function purchaseRule5(ctx = {}, opts = {}) {
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const threshold = opts.threshold ?? 1050;
  let total = 0;
  let over = 0;
  const details = [];
  for (const po of orders) {
    const t = typeof po.total === 'number' ? po.total : (po.lines || []).reduce((s, l) => s + (Number(l.qty) || 0) * (Number(l.unitCost) || 0), 0);
    total += t;
    if (t > threshold) {
      over += 1;
      details.push({ id: po.id, total: t, threshold });
    }
  }
  return {
    ok: over === 0,
    value: Math.round(total * 100) / 100,
    message: over ? `${over} PO(s) above threshold` : 'All within limit',
    details,
    meta: { threshold, count: orders.length, rule: 5 },
  };
}


export function purchaseRule6(ctx = {}, opts = {}) {
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const threshold = opts.threshold ?? 1060;
  let total = 0;
  let over = 0;
  const details = [];
  for (const po of orders) {
    const t = typeof po.total === 'number' ? po.total : (po.lines || []).reduce((s, l) => s + (Number(l.qty) || 0) * (Number(l.unitCost) || 0), 0);
    total += t;
    if (t > threshold) {
      over += 1;
      details.push({ id: po.id, total: t, threshold });
    }
  }
  return {
    ok: over === 0,
    value: Math.round(total * 100) / 100,
    message: over ? `${over} PO(s) above threshold` : 'All within limit',
    details,
    meta: { threshold, count: orders.length, rule: 6 },
  };
}


export function purchaseRule7(ctx = {}, opts = {}) {
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const threshold = opts.threshold ?? 1070;
  let total = 0;
  let over = 0;
  const details = [];
  for (const po of orders) {
    const t = typeof po.total === 'number' ? po.total : (po.lines || []).reduce((s, l) => s + (Number(l.qty) || 0) * (Number(l.unitCost) || 0), 0);
    total += t;
    if (t > threshold) {
      over += 1;
      details.push({ id: po.id, total: t, threshold });
    }
  }
  return {
    ok: over === 0,
    value: Math.round(total * 100) / 100,
    message: over ? `${over} PO(s) above threshold` : 'All within limit',
    details,
    meta: { threshold, count: orders.length, rule: 7 },
  };
}


export function purchaseRule8(ctx = {}, opts = {}) {
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const threshold = opts.threshold ?? 1080;
  let total = 0;
  let over = 0;
  const details = [];
  for (const po of orders) {
    const t = typeof po.total === 'number' ? po.total : (po.lines || []).reduce((s, l) => s + (Number(l.qty) || 0) * (Number(l.unitCost) || 0), 0);
    total += t;
    if (t > threshold) {
      over += 1;
      details.push({ id: po.id, total: t, threshold });
    }
  }
  return {
    ok: over === 0,
    value: Math.round(total * 100) / 100,
    message: over ? `${over} PO(s) above threshold` : 'All within limit',
    details,
    meta: { threshold, count: orders.length, rule: 8 },
  };
}


export function purchaseRule9(ctx = {}, opts = {}) {
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const threshold = opts.threshold ?? 1090;
  let total = 0;
  let over = 0;
  const details = [];
  for (const po of orders) {
    const t = typeof po.total === 'number' ? po.total : (po.lines || []).reduce((s, l) => s + (Number(l.qty) || 0) * (Number(l.unitCost) || 0), 0);
    total += t;
    if (t > threshold) {
      over += 1;
      details.push({ id: po.id, total: t, threshold });
    }
  }
  return {
    ok: over === 0,
    value: Math.round(total * 100) / 100,
    message: over ? `${over} PO(s) above threshold` : 'All within limit',
    details,
    meta: { threshold, count: orders.length, rule: 9 },
  };
}


export function purchaseRule10(ctx = {}, opts = {}) {
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const threshold = opts.threshold ?? 1100;
  let total = 0;
  let over = 0;
  const details = [];
  for (const po of orders) {
    const t = typeof po.total === 'number' ? po.total : (po.lines || []).reduce((s, l) => s + (Number(l.qty) || 0) * (Number(l.unitCost) || 0), 0);
    total += t;
    if (t > threshold) {
      over += 1;
      details.push({ id: po.id, total: t, threshold });
    }
  }
  return {
    ok: over === 0,
    value: Math.round(total * 100) / 100,
    message: over ? `${over} PO(s) above threshold` : 'All within limit',
    details,
    meta: { threshold, count: orders.length, rule: 10 },
  };
}


export function purchaseRule11(ctx = {}, opts = {}) {
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const threshold = opts.threshold ?? 1110;
  let total = 0;
  let over = 0;
  const details = [];
  for (const po of orders) {
    const t = typeof po.total === 'number' ? po.total : (po.lines || []).reduce((s, l) => s + (Number(l.qty) || 0) * (Number(l.unitCost) || 0), 0);
    total += t;
    if (t > threshold) {
      over += 1;
      details.push({ id: po.id, total: t, threshold });
    }
  }
  return {
    ok: over === 0,
    value: Math.round(total * 100) / 100,
    message: over ? `${over} PO(s) above threshold` : 'All within limit',
    details,
    meta: { threshold, count: orders.length, rule: 11 },
  };
}


export function purchaseRule12(ctx = {}, opts = {}) {
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const threshold = opts.threshold ?? 1120;
  let total = 0;
  let over = 0;
  const details = [];
  for (const po of orders) {
    const t = typeof po.total === 'number' ? po.total : (po.lines || []).reduce((s, l) => s + (Number(l.qty) || 0) * (Number(l.unitCost) || 0), 0);
    total += t;
    if (t > threshold) {
      over += 1;
      details.push({ id: po.id, total: t, threshold });
    }
  }
  return {
    ok: over === 0,
    value: Math.round(total * 100) / 100,
    message: over ? `${over} PO(s) above threshold` : 'All within limit',
    details,
    meta: { threshold, count: orders.length, rule: 12 },
  };
}


export function purchaseRule13(ctx = {}, opts = {}) {
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const threshold = opts.threshold ?? 1130;
  let total = 0;
  let over = 0;
  const details = [];
  for (const po of orders) {
    const t = typeof po.total === 'number' ? po.total : (po.lines || []).reduce((s, l) => s + (Number(l.qty) || 0) * (Number(l.unitCost) || 0), 0);
    total += t;
    if (t > threshold) {
      over += 1;
      details.push({ id: po.id, total: t, threshold });
    }
  }
  return {
    ok: over === 0,
    value: Math.round(total * 100) / 100,
    message: over ? `${over} PO(s) above threshold` : 'All within limit',
    details,
    meta: { threshold, count: orders.length, rule: 13 },
  };
}


export function purchaseRule14(ctx = {}, opts = {}) {
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const threshold = opts.threshold ?? 1140;
  let total = 0;
  let over = 0;
  const details = [];
  for (const po of orders) {
    const t = typeof po.total === 'number' ? po.total : (po.lines || []).reduce((s, l) => s + (Number(l.qty) || 0) * (Number(l.unitCost) || 0), 0);
    total += t;
    if (t > threshold) {
      over += 1;
      details.push({ id: po.id, total: t, threshold });
    }
  }
  return {
    ok: over === 0,
    value: Math.round(total * 100) / 100,
    message: over ? `${over} PO(s) above threshold` : 'All within limit',
    details,
    meta: { threshold, count: orders.length, rule: 14 },
  };
}


export function purchaseRule15(ctx = {}, opts = {}) {
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const threshold = opts.threshold ?? 1150;
  let total = 0;
  let over = 0;
  const details = [];
  for (const po of orders) {
    const t = typeof po.total === 'number' ? po.total : (po.lines || []).reduce((s, l) => s + (Number(l.qty) || 0) * (Number(l.unitCost) || 0), 0);
    total += t;
    if (t > threshold) {
      over += 1;
      details.push({ id: po.id, total: t, threshold });
    }
  }
  return {
    ok: over === 0,
    value: Math.round(total * 100) / 100,
    message: over ? `${over} PO(s) above threshold` : 'All within limit',
    details,
    meta: { threshold, count: orders.length, rule: 15 },
  };
}


export function purchaseRule16(ctx = {}, opts = {}) {
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const threshold = opts.threshold ?? 1160;
  let total = 0;
  let over = 0;
  const details = [];
  for (const po of orders) {
    const t = typeof po.total === 'number' ? po.total : (po.lines || []).reduce((s, l) => s + (Number(l.qty) || 0) * (Number(l.unitCost) || 0), 0);
    total += t;
    if (t > threshold) {
      over += 1;
      details.push({ id: po.id, total: t, threshold });
    }
  }
  return {
    ok: over === 0,
    value: Math.round(total * 100) / 100,
    message: over ? `${over} PO(s) above threshold` : 'All within limit',
    details,
    meta: { threshold, count: orders.length, rule: 16 },
  };
}


export function purchaseRule17(ctx = {}, opts = {}) {
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const threshold = opts.threshold ?? 1170;
  let total = 0;
  let over = 0;
  const details = [];
  for (const po of orders) {
    const t = typeof po.total === 'number' ? po.total : (po.lines || []).reduce((s, l) => s + (Number(l.qty) || 0) * (Number(l.unitCost) || 0), 0);
    total += t;
    if (t > threshold) {
      over += 1;
      details.push({ id: po.id, total: t, threshold });
    }
  }
  return {
    ok: over === 0,
    value: Math.round(total * 100) / 100,
    message: over ? `${over} PO(s) above threshold` : 'All within limit',
    details,
    meta: { threshold, count: orders.length, rule: 17 },
  };
}


export function purchaseRule18(ctx = {}, opts = {}) {
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const threshold = opts.threshold ?? 1180;
  let total = 0;
  let over = 0;
  const details = [];
  for (const po of orders) {
    const t = typeof po.total === 'number' ? po.total : (po.lines || []).reduce((s, l) => s + (Number(l.qty) || 0) * (Number(l.unitCost) || 0), 0);
    total += t;
    if (t > threshold) {
      over += 1;
      details.push({ id: po.id, total: t, threshold });
    }
  }
  return {
    ok: over === 0,
    value: Math.round(total * 100) / 100,
    message: over ? `${over} PO(s) above threshold` : 'All within limit',
    details,
    meta: { threshold, count: orders.length, rule: 18 },
  };
}


export function purchaseRule19(ctx = {}, opts = {}) {
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const threshold = opts.threshold ?? 1190;
  let total = 0;
  let over = 0;
  const details = [];
  for (const po of orders) {
    const t = typeof po.total === 'number' ? po.total : (po.lines || []).reduce((s, l) => s + (Number(l.qty) || 0) * (Number(l.unitCost) || 0), 0);
    total += t;
    if (t > threshold) {
      over += 1;
      details.push({ id: po.id, total: t, threshold });
    }
  }
  return {
    ok: over === 0,
    value: Math.round(total * 100) / 100,
    message: over ? `${over} PO(s) above threshold` : 'All within limit',
    details,
    meta: { threshold, count: orders.length, rule: 19 },
  };
}


export function purchaseRule20(ctx = {}, opts = {}) {
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const threshold = opts.threshold ?? 1200;
  let total = 0;
  let over = 0;
  const details = [];
  for (const po of orders) {
    const t = typeof po.total === 'number' ? po.total : (po.lines || []).reduce((s, l) => s + (Number(l.qty) || 0) * (Number(l.unitCost) || 0), 0);
    total += t;
    if (t > threshold) {
      over += 1;
      details.push({ id: po.id, total: t, threshold });
    }
  }
  return {
    ok: over === 0,
    value: Math.round(total * 100) / 100,
    message: over ? `${over} PO(s) above threshold` : 'All within limit',
    details,
    meta: { threshold, count: orders.length, rule: 20 },
  };
}


export function purchaseRule21(ctx = {}, opts = {}) {
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const threshold = opts.threshold ?? 1210;
  let total = 0;
  let over = 0;
  const details = [];
  for (const po of orders) {
    const t = typeof po.total === 'number' ? po.total : (po.lines || []).reduce((s, l) => s + (Number(l.qty) || 0) * (Number(l.unitCost) || 0), 0);
    total += t;
    if (t > threshold) {
      over += 1;
      details.push({ id: po.id, total: t, threshold });
    }
  }
  return {
    ok: over === 0,
    value: Math.round(total * 100) / 100,
    message: over ? `${over} PO(s) above threshold` : 'All within limit',
    details,
    meta: { threshold, count: orders.length, rule: 21 },
  };
}


export function purchaseRule22(ctx = {}, opts = {}) {
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const threshold = opts.threshold ?? 1220;
  let total = 0;
  let over = 0;
  const details = [];
  for (const po of orders) {
    const t = typeof po.total === 'number' ? po.total : (po.lines || []).reduce((s, l) => s + (Number(l.qty) || 0) * (Number(l.unitCost) || 0), 0);
    total += t;
    if (t > threshold) {
      over += 1;
      details.push({ id: po.id, total: t, threshold });
    }
  }
  return {
    ok: over === 0,
    value: Math.round(total * 100) / 100,
    message: over ? `${over} PO(s) above threshold` : 'All within limit',
    details,
    meta: { threshold, count: orders.length, rule: 22 },
  };
}


export function purchaseRule23(ctx = {}, opts = {}) {
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const threshold = opts.threshold ?? 1230;
  let total = 0;
  let over = 0;
  const details = [];
  for (const po of orders) {
    const t = typeof po.total === 'number' ? po.total : (po.lines || []).reduce((s, l) => s + (Number(l.qty) || 0) * (Number(l.unitCost) || 0), 0);
    total += t;
    if (t > threshold) {
      over += 1;
      details.push({ id: po.id, total: t, threshold });
    }
  }
  return {
    ok: over === 0,
    value: Math.round(total * 100) / 100,
    message: over ? `${over} PO(s) above threshold` : 'All within limit',
    details,
    meta: { threshold, count: orders.length, rule: 23 },
  };
}


export function purchaseRule24(ctx = {}, opts = {}) {
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const threshold = opts.threshold ?? 1240;
  let total = 0;
  let over = 0;
  const details = [];
  for (const po of orders) {
    const t = typeof po.total === 'number' ? po.total : (po.lines || []).reduce((s, l) => s + (Number(l.qty) || 0) * (Number(l.unitCost) || 0), 0);
    total += t;
    if (t > threshold) {
      over += 1;
      details.push({ id: po.id, total: t, threshold });
    }
  }
  return {
    ok: over === 0,
    value: Math.round(total * 100) / 100,
    message: over ? `${over} PO(s) above threshold` : 'All within limit',
    details,
    meta: { threshold, count: orders.length, rule: 24 },
  };
}


export function purchaseRule25(ctx = {}, opts = {}) {
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const threshold = opts.threshold ?? 1250;
  let total = 0;
  let over = 0;
  const details = [];
  for (const po of orders) {
    const t = typeof po.total === 'number' ? po.total : (po.lines || []).reduce((s, l) => s + (Number(l.qty) || 0) * (Number(l.unitCost) || 0), 0);
    total += t;
    if (t > threshold) {
      over += 1;
      details.push({ id: po.id, total: t, threshold });
    }
  }
  return {
    ok: over === 0,
    value: Math.round(total * 100) / 100,
    message: over ? `${over} PO(s) above threshold` : 'All within limit',
    details,
    meta: { threshold, count: orders.length, rule: 25 },
  };
}


export function purchaseRule26(ctx = {}, opts = {}) {
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const threshold = opts.threshold ?? 1260;
  let total = 0;
  let over = 0;
  const details = [];
  for (const po of orders) {
    const t = typeof po.total === 'number' ? po.total : (po.lines || []).reduce((s, l) => s + (Number(l.qty) || 0) * (Number(l.unitCost) || 0), 0);
    total += t;
    if (t > threshold) {
      over += 1;
      details.push({ id: po.id, total: t, threshold });
    }
  }
  return {
    ok: over === 0,
    value: Math.round(total * 100) / 100,
    message: over ? `${over} PO(s) above threshold` : 'All within limit',
    details,
    meta: { threshold, count: orders.length, rule: 26 },
  };
}


export function purchaseRule27(ctx = {}, opts = {}) {
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const threshold = opts.threshold ?? 1270;
  let total = 0;
  let over = 0;
  const details = [];
  for (const po of orders) {
    const t = typeof po.total === 'number' ? po.total : (po.lines || []).reduce((s, l) => s + (Number(l.qty) || 0) * (Number(l.unitCost) || 0), 0);
    total += t;
    if (t > threshold) {
      over += 1;
      details.push({ id: po.id, total: t, threshold });
    }
  }
  return {
    ok: over === 0,
    value: Math.round(total * 100) / 100,
    message: over ? `${over} PO(s) above threshold` : 'All within limit',
    details,
    meta: { threshold, count: orders.length, rule: 27 },
  };
}


export function purchaseRule28(ctx = {}, opts = {}) {
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const threshold = opts.threshold ?? 1280;
  let total = 0;
  let over = 0;
  const details = [];
  for (const po of orders) {
    const t = typeof po.total === 'number' ? po.total : (po.lines || []).reduce((s, l) => s + (Number(l.qty) || 0) * (Number(l.unitCost) || 0), 0);
    total += t;
    if (t > threshold) {
      over += 1;
      details.push({ id: po.id, total: t, threshold });
    }
  }
  return {
    ok: over === 0,
    value: Math.round(total * 100) / 100,
    message: over ? `${over} PO(s) above threshold` : 'All within limit',
    details,
    meta: { threshold, count: orders.length, rule: 28 },
  };
}


export function purchaseRule29(ctx = {}, opts = {}) {
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const threshold = opts.threshold ?? 1290;
  let total = 0;
  let over = 0;
  const details = [];
  for (const po of orders) {
    const t = typeof po.total === 'number' ? po.total : (po.lines || []).reduce((s, l) => s + (Number(l.qty) || 0) * (Number(l.unitCost) || 0), 0);
    total += t;
    if (t > threshold) {
      over += 1;
      details.push({ id: po.id, total: t, threshold });
    }
  }
  return {
    ok: over === 0,
    value: Math.round(total * 100) / 100,
    message: over ? `${over} PO(s) above threshold` : 'All within limit',
    details,
    meta: { threshold, count: orders.length, rule: 29 },
  };
}


export function purchaseRule30(ctx = {}, opts = {}) {
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const threshold = opts.threshold ?? 1300;
  let total = 0;
  let over = 0;
  const details = [];
  for (const po of orders) {
    const t = typeof po.total === 'number' ? po.total : (po.lines || []).reduce((s, l) => s + (Number(l.qty) || 0) * (Number(l.unitCost) || 0), 0);
    total += t;
    if (t > threshold) {
      over += 1;
      details.push({ id: po.id, total: t, threshold });
    }
  }
  return {
    ok: over === 0,
    value: Math.round(total * 100) / 100,
    message: over ? `${over} PO(s) above threshold` : 'All within limit',
    details,
    meta: { threshold, count: orders.length, rule: 30 },
  };
}


export function purchaseRule31(ctx = {}, opts = {}) {
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const threshold = opts.threshold ?? 1310;
  let total = 0;
  let over = 0;
  const details = [];
  for (const po of orders) {
    const t = typeof po.total === 'number' ? po.total : (po.lines || []).reduce((s, l) => s + (Number(l.qty) || 0) * (Number(l.unitCost) || 0), 0);
    total += t;
    if (t > threshold) {
      over += 1;
      details.push({ id: po.id, total: t, threshold });
    }
  }
  return {
    ok: over === 0,
    value: Math.round(total * 100) / 100,
    message: over ? `${over} PO(s) above threshold` : 'All within limit',
    details,
    meta: { threshold, count: orders.length, rule: 31 },
  };
}


export function purchaseRule32(ctx = {}, opts = {}) {
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const threshold = opts.threshold ?? 1320;
  let total = 0;
  let over = 0;
  const details = [];
  for (const po of orders) {
    const t = typeof po.total === 'number' ? po.total : (po.lines || []).reduce((s, l) => s + (Number(l.qty) || 0) * (Number(l.unitCost) || 0), 0);
    total += t;
    if (t > threshold) {
      over += 1;
      details.push({ id: po.id, total: t, threshold });
    }
  }
  return {
    ok: over === 0,
    value: Math.round(total * 100) / 100,
    message: over ? `${over} PO(s) above threshold` : 'All within limit',
    details,
    meta: { threshold, count: orders.length, rule: 32 },
  };
}


export function purchaseRule33(ctx = {}, opts = {}) {
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const threshold = opts.threshold ?? 1330;
  let total = 0;
  let over = 0;
  const details = [];
  for (const po of orders) {
    const t = typeof po.total === 'number' ? po.total : (po.lines || []).reduce((s, l) => s + (Number(l.qty) || 0) * (Number(l.unitCost) || 0), 0);
    total += t;
    if (t > threshold) {
      over += 1;
      details.push({ id: po.id, total: t, threshold });
    }
  }
  return {
    ok: over === 0,
    value: Math.round(total * 100) / 100,
    message: over ? `${over} PO(s) above threshold` : 'All within limit',
    details,
    meta: { threshold, count: orders.length, rule: 33 },
  };
}


export function purchaseRule34(ctx = {}, opts = {}) {
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const threshold = opts.threshold ?? 1340;
  let total = 0;
  let over = 0;
  const details = [];
  for (const po of orders) {
    const t = typeof po.total === 'number' ? po.total : (po.lines || []).reduce((s, l) => s + (Number(l.qty) || 0) * (Number(l.unitCost) || 0), 0);
    total += t;
    if (t > threshold) {
      over += 1;
      details.push({ id: po.id, total: t, threshold });
    }
  }
  return {
    ok: over === 0,
    value: Math.round(total * 100) / 100,
    message: over ? `${over} PO(s) above threshold` : 'All within limit',
    details,
    meta: { threshold, count: orders.length, rule: 34 },
  };
}


export function purchaseRule35(ctx = {}, opts = {}) {
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const threshold = opts.threshold ?? 1350;
  let total = 0;
  let over = 0;
  const details = [];
  for (const po of orders) {
    const t = typeof po.total === 'number' ? po.total : (po.lines || []).reduce((s, l) => s + (Number(l.qty) || 0) * (Number(l.unitCost) || 0), 0);
    total += t;
    if (t > threshold) {
      over += 1;
      details.push({ id: po.id, total: t, threshold });
    }
  }
  return {
    ok: over === 0,
    value: Math.round(total * 100) / 100,
    message: over ? `${over} PO(s) above threshold` : 'All within limit',
    details,
    meta: { threshold, count: orders.length, rule: 35 },
  };
}


export function purchaseRule36(ctx = {}, opts = {}) {
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const threshold = opts.threshold ?? 1360;
  let total = 0;
  let over = 0;
  const details = [];
  for (const po of orders) {
    const t = typeof po.total === 'number' ? po.total : (po.lines || []).reduce((s, l) => s + (Number(l.qty) || 0) * (Number(l.unitCost) || 0), 0);
    total += t;
    if (t > threshold) {
      over += 1;
      details.push({ id: po.id, total: t, threshold });
    }
  }
  return {
    ok: over === 0,
    value: Math.round(total * 100) / 100,
    message: over ? `${over} PO(s) above threshold` : 'All within limit',
    details,
    meta: { threshold, count: orders.length, rule: 36 },
  };
}


export function purchaseRule37(ctx = {}, opts = {}) {
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const threshold = opts.threshold ?? 1370;
  let total = 0;
  let over = 0;
  const details = [];
  for (const po of orders) {
    const t = typeof po.total === 'number' ? po.total : (po.lines || []).reduce((s, l) => s + (Number(l.qty) || 0) * (Number(l.unitCost) || 0), 0);
    total += t;
    if (t > threshold) {
      over += 1;
      details.push({ id: po.id, total: t, threshold });
    }
  }
  return {
    ok: over === 0,
    value: Math.round(total * 100) / 100,
    message: over ? `${over} PO(s) above threshold` : 'All within limit',
    details,
    meta: { threshold, count: orders.length, rule: 37 },
  };
}


export function purchaseRule38(ctx = {}, opts = {}) {
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const threshold = opts.threshold ?? 1380;
  let total = 0;
  let over = 0;
  const details = [];
  for (const po of orders) {
    const t = typeof po.total === 'number' ? po.total : (po.lines || []).reduce((s, l) => s + (Number(l.qty) || 0) * (Number(l.unitCost) || 0), 0);
    total += t;
    if (t > threshold) {
      over += 1;
      details.push({ id: po.id, total: t, threshold });
    }
  }
  return {
    ok: over === 0,
    value: Math.round(total * 100) / 100,
    message: over ? `${over} PO(s) above threshold` : 'All within limit',
    details,
    meta: { threshold, count: orders.length, rule: 38 },
  };
}


export function purchaseRule39(ctx = {}, opts = {}) {
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const threshold = opts.threshold ?? 1390;
  let total = 0;
  let over = 0;
  const details = [];
  for (const po of orders) {
    const t = typeof po.total === 'number' ? po.total : (po.lines || []).reduce((s, l) => s + (Number(l.qty) || 0) * (Number(l.unitCost) || 0), 0);
    total += t;
    if (t > threshold) {
      over += 1;
      details.push({ id: po.id, total: t, threshold });
    }
  }
  return {
    ok: over === 0,
    value: Math.round(total * 100) / 100,
    message: over ? `${over} PO(s) above threshold` : 'All within limit',
    details,
    meta: { threshold, count: orders.length, rule: 39 },
  };
}


export function purchaseRule40(ctx = {}, opts = {}) {
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const threshold = opts.threshold ?? 1400;
  let total = 0;
  let over = 0;
  const details = [];
  for (const po of orders) {
    const t = typeof po.total === 'number' ? po.total : (po.lines || []).reduce((s, l) => s + (Number(l.qty) || 0) * (Number(l.unitCost) || 0), 0);
    total += t;
    if (t > threshold) {
      over += 1;
      details.push({ id: po.id, total: t, threshold });
    }
  }
  return {
    ok: over === 0,
    value: Math.round(total * 100) / 100,
    message: over ? `${over} PO(s) above threshold` : 'All within limit',
    details,
    meta: { threshold, count: orders.length, rule: 40 },
  };
}


export function purchaseRule41(ctx = {}, opts = {}) {
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const threshold = opts.threshold ?? 1410;
  let total = 0;
  let over = 0;
  const details = [];
  for (const po of orders) {
    const t = typeof po.total === 'number' ? po.total : (po.lines || []).reduce((s, l) => s + (Number(l.qty) || 0) * (Number(l.unitCost) || 0), 0);
    total += t;
    if (t > threshold) {
      over += 1;
      details.push({ id: po.id, total: t, threshold });
    }
  }
  return {
    ok: over === 0,
    value: Math.round(total * 100) / 100,
    message: over ? `${over} PO(s) above threshold` : 'All within limit',
    details,
    meta: { threshold, count: orders.length, rule: 41 },
  };
}


export function purchaseRule42(ctx = {}, opts = {}) {
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const threshold = opts.threshold ?? 1420;
  let total = 0;
  let over = 0;
  const details = [];
  for (const po of orders) {
    const t = typeof po.total === 'number' ? po.total : (po.lines || []).reduce((s, l) => s + (Number(l.qty) || 0) * (Number(l.unitCost) || 0), 0);
    total += t;
    if (t > threshold) {
      over += 1;
      details.push({ id: po.id, total: t, threshold });
    }
  }
  return {
    ok: over === 0,
    value: Math.round(total * 100) / 100,
    message: over ? `${over} PO(s) above threshold` : 'All within limit',
    details,
    meta: { threshold, count: orders.length, rule: 42 },
  };
}


export function purchaseRule43(ctx = {}, opts = {}) {
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const threshold = opts.threshold ?? 1430;
  let total = 0;
  let over = 0;
  const details = [];
  for (const po of orders) {
    const t = typeof po.total === 'number' ? po.total : (po.lines || []).reduce((s, l) => s + (Number(l.qty) || 0) * (Number(l.unitCost) || 0), 0);
    total += t;
    if (t > threshold) {
      over += 1;
      details.push({ id: po.id, total: t, threshold });
    }
  }
  return {
    ok: over === 0,
    value: Math.round(total * 100) / 100,
    message: over ? `${over} PO(s) above threshold` : 'All within limit',
    details,
    meta: { threshold, count: orders.length, rule: 43 },
  };
}


export function purchaseRule44(ctx = {}, opts = {}) {
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const threshold = opts.threshold ?? 1440;
  let total = 0;
  let over = 0;
  const details = [];
  for (const po of orders) {
    const t = typeof po.total === 'number' ? po.total : (po.lines || []).reduce((s, l) => s + (Number(l.qty) || 0) * (Number(l.unitCost) || 0), 0);
    total += t;
    if (t > threshold) {
      over += 1;
      details.push({ id: po.id, total: t, threshold });
    }
  }
  return {
    ok: over === 0,
    value: Math.round(total * 100) / 100,
    message: over ? `${over} PO(s) above threshold` : 'All within limit',
    details,
    meta: { threshold, count: orders.length, rule: 44 },
  };
}


export function purchaseRule45(ctx = {}, opts = {}) {
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const threshold = opts.threshold ?? 1450;
  let total = 0;
  let over = 0;
  const details = [];
  for (const po of orders) {
    const t = typeof po.total === 'number' ? po.total : (po.lines || []).reduce((s, l) => s + (Number(l.qty) || 0) * (Number(l.unitCost) || 0), 0);
    total += t;
    if (t > threshold) {
      over += 1;
      details.push({ id: po.id, total: t, threshold });
    }
  }
  return {
    ok: over === 0,
    value: Math.round(total * 100) / 100,
    message: over ? `${over} PO(s) above threshold` : 'All within limit',
    details,
    meta: { threshold, count: orders.length, rule: 45 },
  };
}


export function purchaseRule46(ctx = {}, opts = {}) {
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const threshold = opts.threshold ?? 1460;
  let total = 0;
  let over = 0;
  const details = [];
  for (const po of orders) {
    const t = typeof po.total === 'number' ? po.total : (po.lines || []).reduce((s, l) => s + (Number(l.qty) || 0) * (Number(l.unitCost) || 0), 0);
    total += t;
    if (t > threshold) {
      over += 1;
      details.push({ id: po.id, total: t, threshold });
    }
  }
  return {
    ok: over === 0,
    value: Math.round(total * 100) / 100,
    message: over ? `${over} PO(s) above threshold` : 'All within limit',
    details,
    meta: { threshold, count: orders.length, rule: 46 },
  };
}


export function purchaseRule47(ctx = {}, opts = {}) {
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const threshold = opts.threshold ?? 1470;
  let total = 0;
  let over = 0;
  const details = [];
  for (const po of orders) {
    const t = typeof po.total === 'number' ? po.total : (po.lines || []).reduce((s, l) => s + (Number(l.qty) || 0) * (Number(l.unitCost) || 0), 0);
    total += t;
    if (t > threshold) {
      over += 1;
      details.push({ id: po.id, total: t, threshold });
    }
  }
  return {
    ok: over === 0,
    value: Math.round(total * 100) / 100,
    message: over ? `${over} PO(s) above threshold` : 'All within limit',
    details,
    meta: { threshold, count: orders.length, rule: 47 },
  };
}


export function purchaseRule48(ctx = {}, opts = {}) {
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const threshold = opts.threshold ?? 1480;
  let total = 0;
  let over = 0;
  const details = [];
  for (const po of orders) {
    const t = typeof po.total === 'number' ? po.total : (po.lines || []).reduce((s, l) => s + (Number(l.qty) || 0) * (Number(l.unitCost) || 0), 0);
    total += t;
    if (t > threshold) {
      over += 1;
      details.push({ id: po.id, total: t, threshold });
    }
  }
  return {
    ok: over === 0,
    value: Math.round(total * 100) / 100,
    message: over ? `${over} PO(s) above threshold` : 'All within limit',
    details,
    meta: { threshold, count: orders.length, rule: 48 },
  };
}


export function purchaseRule49(ctx = {}, opts = {}) {
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const threshold = opts.threshold ?? 1490;
  let total = 0;
  let over = 0;
  const details = [];
  for (const po of orders) {
    const t = typeof po.total === 'number' ? po.total : (po.lines || []).reduce((s, l) => s + (Number(l.qty) || 0) * (Number(l.unitCost) || 0), 0);
    total += t;
    if (t > threshold) {
      over += 1;
      details.push({ id: po.id, total: t, threshold });
    }
  }
  return {
    ok: over === 0,
    value: Math.round(total * 100) / 100,
    message: over ? `${over} PO(s) above threshold` : 'All within limit',
    details,
    meta: { threshold, count: orders.length, rule: 49 },
  };
}


export function purchaseRule50(ctx = {}, opts = {}) {
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const threshold = opts.threshold ?? 1500;
  let total = 0;
  let over = 0;
  const details = [];
  for (const po of orders) {
    const t = typeof po.total === 'number' ? po.total : (po.lines || []).reduce((s, l) => s + (Number(l.qty) || 0) * (Number(l.unitCost) || 0), 0);
    total += t;
    if (t > threshold) {
      over += 1;
      details.push({ id: po.id, total: t, threshold });
    }
  }
  return {
    ok: over === 0,
    value: Math.round(total * 100) / 100,
    message: over ? `${over} PO(s) above threshold` : 'All within limit',
    details,
    meta: { threshold, count: orders.length, rule: 50 },
  };
}


export function purchaseRule51(ctx = {}, opts = {}) {
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const threshold = opts.threshold ?? 1510;
  let total = 0;
  let over = 0;
  const details = [];
  for (const po of orders) {
    const t = typeof po.total === 'number' ? po.total : (po.lines || []).reduce((s, l) => s + (Number(l.qty) || 0) * (Number(l.unitCost) || 0), 0);
    total += t;
    if (t > threshold) {
      over += 1;
      details.push({ id: po.id, total: t, threshold });
    }
  }
  return {
    ok: over === 0,
    value: Math.round(total * 100) / 100,
    message: over ? `${over} PO(s) above threshold` : 'All within limit',
    details,
    meta: { threshold, count: orders.length, rule: 51 },
  };
}


export function purchaseRule52(ctx = {}, opts = {}) {
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const threshold = opts.threshold ?? 1520;
  let total = 0;
  let over = 0;
  const details = [];
  for (const po of orders) {
    const t = typeof po.total === 'number' ? po.total : (po.lines || []).reduce((s, l) => s + (Number(l.qty) || 0) * (Number(l.unitCost) || 0), 0);
    total += t;
    if (t > threshold) {
      over += 1;
      details.push({ id: po.id, total: t, threshold });
    }
  }
  return {
    ok: over === 0,
    value: Math.round(total * 100) / 100,
    message: over ? `${over} PO(s) above threshold` : 'All within limit',
    details,
    meta: { threshold, count: orders.length, rule: 52 },
  };
}


export function purchaseRule53(ctx = {}, opts = {}) {
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const threshold = opts.threshold ?? 1530;
  let total = 0;
  let over = 0;
  const details = [];
  for (const po of orders) {
    const t = typeof po.total === 'number' ? po.total : (po.lines || []).reduce((s, l) => s + (Number(l.qty) || 0) * (Number(l.unitCost) || 0), 0);
    total += t;
    if (t > threshold) {
      over += 1;
      details.push({ id: po.id, total: t, threshold });
    }
  }
  return {
    ok: over === 0,
    value: Math.round(total * 100) / 100,
    message: over ? `${over} PO(s) above threshold` : 'All within limit',
    details,
    meta: { threshold, count: orders.length, rule: 53 },
  };
}


export function purchaseRule54(ctx = {}, opts = {}) {
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const threshold = opts.threshold ?? 1540;
  let total = 0;
  let over = 0;
  const details = [];
  for (const po of orders) {
    const t = typeof po.total === 'number' ? po.total : (po.lines || []).reduce((s, l) => s + (Number(l.qty) || 0) * (Number(l.unitCost) || 0), 0);
    total += t;
    if (t > threshold) {
      over += 1;
      details.push({ id: po.id, total: t, threshold });
    }
  }
  return {
    ok: over === 0,
    value: Math.round(total * 100) / 100,
    message: over ? `${over} PO(s) above threshold` : 'All within limit',
    details,
    meta: { threshold, count: orders.length, rule: 54 },
  };
}


export function purchaseRule55(ctx = {}, opts = {}) {
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const threshold = opts.threshold ?? 1550;
  let total = 0;
  let over = 0;
  const details = [];
  for (const po of orders) {
    const t = typeof po.total === 'number' ? po.total : (po.lines || []).reduce((s, l) => s + (Number(l.qty) || 0) * (Number(l.unitCost) || 0), 0);
    total += t;
    if (t > threshold) {
      over += 1;
      details.push({ id: po.id, total: t, threshold });
    }
  }
  return {
    ok: over === 0,
    value: Math.round(total * 100) / 100,
    message: over ? `${over} PO(s) above threshold` : 'All within limit',
    details,
    meta: { threshold, count: orders.length, rule: 55 },
  };
}


export function purchaseRule56(ctx = {}, opts = {}) {
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const threshold = opts.threshold ?? 1560;
  let total = 0;
  let over = 0;
  const details = [];
  for (const po of orders) {
    const t = typeof po.total === 'number' ? po.total : (po.lines || []).reduce((s, l) => s + (Number(l.qty) || 0) * (Number(l.unitCost) || 0), 0);
    total += t;
    if (t > threshold) {
      over += 1;
      details.push({ id: po.id, total: t, threshold });
    }
  }
  return {
    ok: over === 0,
    value: Math.round(total * 100) / 100,
    message: over ? `${over} PO(s) above threshold` : 'All within limit',
    details,
    meta: { threshold, count: orders.length, rule: 56 },
  };
}


export function purchaseRule57(ctx = {}, opts = {}) {
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const threshold = opts.threshold ?? 1570;
  let total = 0;
  let over = 0;
  const details = [];
  for (const po of orders) {
    const t = typeof po.total === 'number' ? po.total : (po.lines || []).reduce((s, l) => s + (Number(l.qty) || 0) * (Number(l.unitCost) || 0), 0);
    total += t;
    if (t > threshold) {
      over += 1;
      details.push({ id: po.id, total: t, threshold });
    }
  }
  return {
    ok: over === 0,
    value: Math.round(total * 100) / 100,
    message: over ? `${over} PO(s) above threshold` : 'All within limit',
    details,
    meta: { threshold, count: orders.length, rule: 57 },
  };
}


export function purchaseRule58(ctx = {}, opts = {}) {
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const threshold = opts.threshold ?? 1580;
  let total = 0;
  let over = 0;
  const details = [];
  for (const po of orders) {
    const t = typeof po.total === 'number' ? po.total : (po.lines || []).reduce((s, l) => s + (Number(l.qty) || 0) * (Number(l.unitCost) || 0), 0);
    total += t;
    if (t > threshold) {
      over += 1;
      details.push({ id: po.id, total: t, threshold });
    }
  }
  return {
    ok: over === 0,
    value: Math.round(total * 100) / 100,
    message: over ? `${over} PO(s) above threshold` : 'All within limit',
    details,
    meta: { threshold, count: orders.length, rule: 58 },
  };
}


export function purchaseRule59(ctx = {}, opts = {}) {
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const threshold = opts.threshold ?? 1590;
  let total = 0;
  let over = 0;
  const details = [];
  for (const po of orders) {
    const t = typeof po.total === 'number' ? po.total : (po.lines || []).reduce((s, l) => s + (Number(l.qty) || 0) * (Number(l.unitCost) || 0), 0);
    total += t;
    if (t > threshold) {
      over += 1;
      details.push({ id: po.id, total: t, threshold });
    }
  }
  return {
    ok: over === 0,
    value: Math.round(total * 100) / 100,
    message: over ? `${over} PO(s) above threshold` : 'All within limit',
    details,
    meta: { threshold, count: orders.length, rule: 59 },
  };
}


export function purchaseRule60(ctx = {}, opts = {}) {
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const threshold = opts.threshold ?? 1600;
  let total = 0;
  let over = 0;
  const details = [];
  for (const po of orders) {
    const t = typeof po.total === 'number' ? po.total : (po.lines || []).reduce((s, l) => s + (Number(l.qty) || 0) * (Number(l.unitCost) || 0), 0);
    total += t;
    if (t > threshold) {
      over += 1;
      details.push({ id: po.id, total: t, threshold });
    }
  }
  return {
    ok: over === 0,
    value: Math.round(total * 100) / 100,
    message: over ? `${over} PO(s) above threshold` : 'All within limit',
    details,
    meta: { threshold, count: orders.length, rule: 60 },
  };
}


export function purchaseRule61(ctx = {}, opts = {}) {
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const threshold = opts.threshold ?? 1610;
  let total = 0;
  let over = 0;
  const details = [];
  for (const po of orders) {
    const t = typeof po.total === 'number' ? po.total : (po.lines || []).reduce((s, l) => s + (Number(l.qty) || 0) * (Number(l.unitCost) || 0), 0);
    total += t;
    if (t > threshold) {
      over += 1;
      details.push({ id: po.id, total: t, threshold });
    }
  }
  return {
    ok: over === 0,
    value: Math.round(total * 100) / 100,
    message: over ? `${over} PO(s) above threshold` : 'All within limit',
    details,
    meta: { threshold, count: orders.length, rule: 61 },
  };
}


export function purchaseRule62(ctx = {}, opts = {}) {
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const threshold = opts.threshold ?? 1620;
  let total = 0;
  let over = 0;
  const details = [];
  for (const po of orders) {
    const t = typeof po.total === 'number' ? po.total : (po.lines || []).reduce((s, l) => s + (Number(l.qty) || 0) * (Number(l.unitCost) || 0), 0);
    total += t;
    if (t > threshold) {
      over += 1;
      details.push({ id: po.id, total: t, threshold });
    }
  }
  return {
    ok: over === 0,
    value: Math.round(total * 100) / 100,
    message: over ? `${over} PO(s) above threshold` : 'All within limit',
    details,
    meta: { threshold, count: orders.length, rule: 62 },
  };
}


export function purchaseRule63(ctx = {}, opts = {}) {
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const threshold = opts.threshold ?? 1630;
  let total = 0;
  let over = 0;
  const details = [];
  for (const po of orders) {
    const t = typeof po.total === 'number' ? po.total : (po.lines || []).reduce((s, l) => s + (Number(l.qty) || 0) * (Number(l.unitCost) || 0), 0);
    total += t;
    if (t > threshold) {
      over += 1;
      details.push({ id: po.id, total: t, threshold });
    }
  }
  return {
    ok: over === 0,
    value: Math.round(total * 100) / 100,
    message: over ? `${over} PO(s) above threshold` : 'All within limit',
    details,
    meta: { threshold, count: orders.length, rule: 63 },
  };
}


export function purchaseRule64(ctx = {}, opts = {}) {
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const threshold = opts.threshold ?? 1640;
  let total = 0;
  let over = 0;
  const details = [];
  for (const po of orders) {
    const t = typeof po.total === 'number' ? po.total : (po.lines || []).reduce((s, l) => s + (Number(l.qty) || 0) * (Number(l.unitCost) || 0), 0);
    total += t;
    if (t > threshold) {
      over += 1;
      details.push({ id: po.id, total: t, threshold });
    }
  }
  return {
    ok: over === 0,
    value: Math.round(total * 100) / 100,
    message: over ? `${over} PO(s) above threshold` : 'All within limit',
    details,
    meta: { threshold, count: orders.length, rule: 64 },
  };
}


export function purchaseRule65(ctx = {}, opts = {}) {
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const threshold = opts.threshold ?? 1650;
  let total = 0;
  let over = 0;
  const details = [];
  for (const po of orders) {
    const t = typeof po.total === 'number' ? po.total : (po.lines || []).reduce((s, l) => s + (Number(l.qty) || 0) * (Number(l.unitCost) || 0), 0);
    total += t;
    if (t > threshold) {
      over += 1;
      details.push({ id: po.id, total: t, threshold });
    }
  }
  return {
    ok: over === 0,
    value: Math.round(total * 100) / 100,
    message: over ? `${over} PO(s) above threshold` : 'All within limit',
    details,
    meta: { threshold, count: orders.length, rule: 65 },
  };
}


export function purchaseRule66(ctx = {}, opts = {}) {
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const threshold = opts.threshold ?? 1660;
  let total = 0;
  let over = 0;
  const details = [];
  for (const po of orders) {
    const t = typeof po.total === 'number' ? po.total : (po.lines || []).reduce((s, l) => s + (Number(l.qty) || 0) * (Number(l.unitCost) || 0), 0);
    total += t;
    if (t > threshold) {
      over += 1;
      details.push({ id: po.id, total: t, threshold });
    }
  }
  return {
    ok: over === 0,
    value: Math.round(total * 100) / 100,
    message: over ? `${over} PO(s) above threshold` : 'All within limit',
    details,
    meta: { threshold, count: orders.length, rule: 66 },
  };
}


export function purchaseRule67(ctx = {}, opts = {}) {
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const threshold = opts.threshold ?? 1670;
  let total = 0;
  let over = 0;
  const details = [];
  for (const po of orders) {
    const t = typeof po.total === 'number' ? po.total : (po.lines || []).reduce((s, l) => s + (Number(l.qty) || 0) * (Number(l.unitCost) || 0), 0);
    total += t;
    if (t > threshold) {
      over += 1;
      details.push({ id: po.id, total: t, threshold });
    }
  }
  return {
    ok: over === 0,
    value: Math.round(total * 100) / 100,
    message: over ? `${over} PO(s) above threshold` : 'All within limit',
    details,
    meta: { threshold, count: orders.length, rule: 67 },
  };
}


export function purchaseRule68(ctx = {}, opts = {}) {
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const threshold = opts.threshold ?? 1680;
  let total = 0;
  let over = 0;
  const details = [];
  for (const po of orders) {
    const t = typeof po.total === 'number' ? po.total : (po.lines || []).reduce((s, l) => s + (Number(l.qty) || 0) * (Number(l.unitCost) || 0), 0);
    total += t;
    if (t > threshold) {
      over += 1;
      details.push({ id: po.id, total: t, threshold });
    }
  }
  return {
    ok: over === 0,
    value: Math.round(total * 100) / 100,
    message: over ? `${over} PO(s) above threshold` : 'All within limit',
    details,
    meta: { threshold, count: orders.length, rule: 68 },
  };
}


export function purchaseRule69(ctx = {}, opts = {}) {
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const threshold = opts.threshold ?? 1690;
  let total = 0;
  let over = 0;
  const details = [];
  for (const po of orders) {
    const t = typeof po.total === 'number' ? po.total : (po.lines || []).reduce((s, l) => s + (Number(l.qty) || 0) * (Number(l.unitCost) || 0), 0);
    total += t;
    if (t > threshold) {
      over += 1;
      details.push({ id: po.id, total: t, threshold });
    }
  }
  return {
    ok: over === 0,
    value: Math.round(total * 100) / 100,
    message: over ? `${over} PO(s) above threshold` : 'All within limit',
    details,
    meta: { threshold, count: orders.length, rule: 69 },
  };
}


export function purchaseRule70(ctx = {}, opts = {}) {
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const threshold = opts.threshold ?? 1700;
  let total = 0;
  let over = 0;
  const details = [];
  for (const po of orders) {
    const t = typeof po.total === 'number' ? po.total : (po.lines || []).reduce((s, l) => s + (Number(l.qty) || 0) * (Number(l.unitCost) || 0), 0);
    total += t;
    if (t > threshold) {
      over += 1;
      details.push({ id: po.id, total: t, threshold });
    }
  }
  return {
    ok: over === 0,
    value: Math.round(total * 100) / 100,
    message: over ? `${over} PO(s) above threshold` : 'All within limit',
    details,
    meta: { threshold, count: orders.length, rule: 70 },
  };
}


export function purchaseRule71(ctx = {}, opts = {}) {
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const threshold = opts.threshold ?? 1710;
  let total = 0;
  let over = 0;
  const details = [];
  for (const po of orders) {
    const t = typeof po.total === 'number' ? po.total : (po.lines || []).reduce((s, l) => s + (Number(l.qty) || 0) * (Number(l.unitCost) || 0), 0);
    total += t;
    if (t > threshold) {
      over += 1;
      details.push({ id: po.id, total: t, threshold });
    }
  }
  return {
    ok: over === 0,
    value: Math.round(total * 100) / 100,
    message: over ? `${over} PO(s) above threshold` : 'All within limit',
    details,
    meta: { threshold, count: orders.length, rule: 71 },
  };
}


export function purchaseRule72(ctx = {}, opts = {}) {
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const threshold = opts.threshold ?? 1720;
  let total = 0;
  let over = 0;
  const details = [];
  for (const po of orders) {
    const t = typeof po.total === 'number' ? po.total : (po.lines || []).reduce((s, l) => s + (Number(l.qty) || 0) * (Number(l.unitCost) || 0), 0);
    total += t;
    if (t > threshold) {
      over += 1;
      details.push({ id: po.id, total: t, threshold });
    }
  }
  return {
    ok: over === 0,
    value: Math.round(total * 100) / 100,
    message: over ? `${over} PO(s) above threshold` : 'All within limit',
    details,
    meta: { threshold, count: orders.length, rule: 72 },
  };
}


export function purchaseRule73(ctx = {}, opts = {}) {
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const threshold = opts.threshold ?? 1730;
  let total = 0;
  let over = 0;
  const details = [];
  for (const po of orders) {
    const t = typeof po.total === 'number' ? po.total : (po.lines || []).reduce((s, l) => s + (Number(l.qty) || 0) * (Number(l.unitCost) || 0), 0);
    total += t;
    if (t > threshold) {
      over += 1;
      details.push({ id: po.id, total: t, threshold });
    }
  }
  return {
    ok: over === 0,
    value: Math.round(total * 100) / 100,
    message: over ? `${over} PO(s) above threshold` : 'All within limit',
    details,
    meta: { threshold, count: orders.length, rule: 73 },
  };
}


export function purchaseRule74(ctx = {}, opts = {}) {
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const threshold = opts.threshold ?? 1740;
  let total = 0;
  let over = 0;
  const details = [];
  for (const po of orders) {
    const t = typeof po.total === 'number' ? po.total : (po.lines || []).reduce((s, l) => s + (Number(l.qty) || 0) * (Number(l.unitCost) || 0), 0);
    total += t;
    if (t > threshold) {
      over += 1;
      details.push({ id: po.id, total: t, threshold });
    }
  }
  return {
    ok: over === 0,
    value: Math.round(total * 100) / 100,
    message: over ? `${over} PO(s) above threshold` : 'All within limit',
    details,
    meta: { threshold, count: orders.length, rule: 74 },
  };
}


export function purchaseRule75(ctx = {}, opts = {}) {
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const threshold = opts.threshold ?? 1750;
  let total = 0;
  let over = 0;
  const details = [];
  for (const po of orders) {
    const t = typeof po.total === 'number' ? po.total : (po.lines || []).reduce((s, l) => s + (Number(l.qty) || 0) * (Number(l.unitCost) || 0), 0);
    total += t;
    if (t > threshold) {
      over += 1;
      details.push({ id: po.id, total: t, threshold });
    }
  }
  return {
    ok: over === 0,
    value: Math.round(total * 100) / 100,
    message: over ? `${over} PO(s) above threshold` : 'All within limit',
    details,
    meta: { threshold, count: orders.length, rule: 75 },
  };
}


export function purchaseRule76(ctx = {}, opts = {}) {
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const threshold = opts.threshold ?? 1760;
  let total = 0;
  let over = 0;
  const details = [];
  for (const po of orders) {
    const t = typeof po.total === 'number' ? po.total : (po.lines || []).reduce((s, l) => s + (Number(l.qty) || 0) * (Number(l.unitCost) || 0), 0);
    total += t;
    if (t > threshold) {
      over += 1;
      details.push({ id: po.id, total: t, threshold });
    }
  }
  return {
    ok: over === 0,
    value: Math.round(total * 100) / 100,
    message: over ? `${over} PO(s) above threshold` : 'All within limit',
    details,
    meta: { threshold, count: orders.length, rule: 76 },
  };
}


export function purchaseRule77(ctx = {}, opts = {}) {
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const threshold = opts.threshold ?? 1770;
  let total = 0;
  let over = 0;
  const details = [];
  for (const po of orders) {
    const t = typeof po.total === 'number' ? po.total : (po.lines || []).reduce((s, l) => s + (Number(l.qty) || 0) * (Number(l.unitCost) || 0), 0);
    total += t;
    if (t > threshold) {
      over += 1;
      details.push({ id: po.id, total: t, threshold });
    }
  }
  return {
    ok: over === 0,
    value: Math.round(total * 100) / 100,
    message: over ? `${over} PO(s) above threshold` : 'All within limit',
    details,
    meta: { threshold, count: orders.length, rule: 77 },
  };
}


export function purchaseRule78(ctx = {}, opts = {}) {
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const threshold = opts.threshold ?? 1780;
  let total = 0;
  let over = 0;
  const details = [];
  for (const po of orders) {
    const t = typeof po.total === 'number' ? po.total : (po.lines || []).reduce((s, l) => s + (Number(l.qty) || 0) * (Number(l.unitCost) || 0), 0);
    total += t;
    if (t > threshold) {
      over += 1;
      details.push({ id: po.id, total: t, threshold });
    }
  }
  return {
    ok: over === 0,
    value: Math.round(total * 100) / 100,
    message: over ? `${over} PO(s) above threshold` : 'All within limit',
    details,
    meta: { threshold, count: orders.length, rule: 78 },
  };
}


export function purchaseRule79(ctx = {}, opts = {}) {
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const threshold = opts.threshold ?? 1790;
  let total = 0;
  let over = 0;
  const details = [];
  for (const po of orders) {
    const t = typeof po.total === 'number' ? po.total : (po.lines || []).reduce((s, l) => s + (Number(l.qty) || 0) * (Number(l.unitCost) || 0), 0);
    total += t;
    if (t > threshold) {
      over += 1;
      details.push({ id: po.id, total: t, threshold });
    }
  }
  return {
    ok: over === 0,
    value: Math.round(total * 100) / 100,
    message: over ? `${over} PO(s) above threshold` : 'All within limit',
    details,
    meta: { threshold, count: orders.length, rule: 79 },
  };
}
