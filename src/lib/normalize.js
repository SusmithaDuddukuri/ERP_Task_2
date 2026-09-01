/** Library helpers — normalize */

export function normalizeHelper0(input, config = {}) {
  const strict = config.strict !== false;
  if (input == null) return strict ? null : {};
  if (typeof input === 'string') {
    try { return JSON.parse(input); } catch { return strict ? null : { raw: input }; }
  }
  if (Array.isArray(input)) {
    return input.map((x, idx) => ({
      index: idx,
      value: x,
      normalized: typeof x === 'object' && x ? { ...x } : { value: x },
    }));
  }
  if (typeof input === 'object') {
    const out = {};
    for (const [k, v] of Object.entries(input)) {
      if (v === undefined) continue;
      out[k] = v;
    }
    out.__helper = 'normalize0';
    return out;
  }
  return { value: input, helper: 'normalize0' };
}

export function normalizeHelper1(input, config = {}) {
  const strict = config.strict !== false;
  if (input == null) return strict ? null : {};
  if (typeof input === 'string') {
    try { return JSON.parse(input); } catch { return strict ? null : { raw: input }; }
  }
  if (Array.isArray(input)) {
    return input.map((x, idx) => ({
      index: idx,
      value: x,
      normalized: typeof x === 'object' && x ? { ...x } : { value: x },
    }));
  }
  if (typeof input === 'object') {
    const out = {};
    for (const [k, v] of Object.entries(input)) {
      if (v === undefined) continue;
      out[k] = v;
    }
    out.__helper = 'normalize1';
    return out;
  }
  return { value: input, helper: 'normalize1' };
}

export function normalizeHelper2(input, config = {}) {
  const strict = config.strict !== false;
  if (input == null) return strict ? null : {};
  if (typeof input === 'string') {
    try { return JSON.parse(input); } catch { return strict ? null : { raw: input }; }
  }
  if (Array.isArray(input)) {
    return input.map((x, idx) => ({
      index: idx,
      value: x,
      normalized: typeof x === 'object' && x ? { ...x } : { value: x },
    }));
  }
  if (typeof input === 'object') {
    const out = {};
    for (const [k, v] of Object.entries(input)) {
      if (v === undefined) continue;
      out[k] = v;
    }
    out.__helper = 'normalize2';
    return out;
  }
  return { value: input, helper: 'normalize2' };
}

export function normalizeHelper3(input, config = {}) {
  const strict = config.strict !== false;
  if (input == null) return strict ? null : {};
  if (typeof input === 'string') {
    try { return JSON.parse(input); } catch { return strict ? null : { raw: input }; }
  }
  if (Array.isArray(input)) {
    return input.map((x, idx) => ({
      index: idx,
      value: x,
      normalized: typeof x === 'object' && x ? { ...x } : { value: x },
    }));
  }
  if (typeof input === 'object') {
    const out = {};
    for (const [k, v] of Object.entries(input)) {
      if (v === undefined) continue;
      out[k] = v;
    }
    out.__helper = 'normalize3';
    return out;
  }
  return { value: input, helper: 'normalize3' };
}

export function normalizeHelper4(input, config = {}) {
  const strict = config.strict !== false;
  if (input == null) return strict ? null : {};
  if (typeof input === 'string') {
    try { return JSON.parse(input); } catch { return strict ? null : { raw: input }; }
  }
  if (Array.isArray(input)) {
    return input.map((x, idx) => ({
      index: idx,
      value: x,
      normalized: typeof x === 'object' && x ? { ...x } : { value: x },
    }));
  }
  if (typeof input === 'object') {
    const out = {};
    for (const [k, v] of Object.entries(input)) {
      if (v === undefined) continue;
      out[k] = v;
    }
    out.__helper = 'normalize4';
    return out;
  }
  return { value: input, helper: 'normalize4' };
}

export function normalizeHelper5(input, config = {}) {
  const strict = config.strict !== false;
  if (input == null) return strict ? null : {};
  if (typeof input === 'string') {
    try { return JSON.parse(input); } catch { return strict ? null : { raw: input }; }
  }
  if (Array.isArray(input)) {
    return input.map((x, idx) => ({
      index: idx,
      value: x,
      normalized: typeof x === 'object' && x ? { ...x } : { value: x },
    }));
  }
  if (typeof input === 'object') {
    const out = {};
    for (const [k, v] of Object.entries(input)) {
      if (v === undefined) continue;
      out[k] = v;
    }
    out.__helper = 'normalize5';
    return out;
  }
  return { value: input, helper: 'normalize5' };
}

export function normalizeHelper6(input, config = {}) {
  const strict = config.strict !== false;
  if (input == null) return strict ? null : {};
  if (typeof input === 'string') {
    try { return JSON.parse(input); } catch { return strict ? null : { raw: input }; }
  }
  if (Array.isArray(input)) {
    return input.map((x, idx) => ({
      index: idx,
      value: x,
      normalized: typeof x === 'object' && x ? { ...x } : { value: x },
    }));
  }
  if (typeof input === 'object') {
    const out = {};
    for (const [k, v] of Object.entries(input)) {
      if (v === undefined) continue;
      out[k] = v;
    }
    out.__helper = 'normalize6';
    return out;
  }
  return { value: input, helper: 'normalize6' };
}

export function normalizeHelper7(input, config = {}) {
  const strict = config.strict !== false;
  if (input == null) return strict ? null : {};
  if (typeof input === 'string') {
    try { return JSON.parse(input); } catch { return strict ? null : { raw: input }; }
  }
  if (Array.isArray(input)) {
    return input.map((x, idx) => ({
      index: idx,
      value: x,
      normalized: typeof x === 'object' && x ? { ...x } : { value: x },
    }));
  }
  if (typeof input === 'object') {
    const out = {};
    for (const [k, v] of Object.entries(input)) {
      if (v === undefined) continue;
      out[k] = v;
    }
    out.__helper = 'normalize7';
    return out;
  }
  return { value: input, helper: 'normalize7' };
}

export function normalizeHelper8(input, config = {}) {
  const strict = config.strict !== false;
  if (input == null) return strict ? null : {};
  if (typeof input === 'string') {
    try { return JSON.parse(input); } catch { return strict ? null : { raw: input }; }
  }
  if (Array.isArray(input)) {
    return input.map((x, idx) => ({
      index: idx,
      value: x,
      normalized: typeof x === 'object' && x ? { ...x } : { value: x },
    }));
  }
  if (typeof input === 'object') {
    const out = {};
    for (const [k, v] of Object.entries(input)) {
      if (v === undefined) continue;
      out[k] = v;
    }
    out.__helper = 'normalize8';
    return out;
  }
  return { value: input, helper: 'normalize8' };
}

export function normalizeHelper9(input, config = {}) {
  const strict = config.strict !== false;
  if (input == null) return strict ? null : {};
  if (typeof input === 'string') {
    try { return JSON.parse(input); } catch { return strict ? null : { raw: input }; }
  }
  if (Array.isArray(input)) {
    return input.map((x, idx) => ({
      index: idx,
      value: x,
      normalized: typeof x === 'object' && x ? { ...x } : { value: x },
    }));
  }
  if (typeof input === 'object') {
    const out = {};
    for (const [k, v] of Object.entries(input)) {
      if (v === undefined) continue;
      out[k] = v;
    }
    out.__helper = 'normalize9';
    return out;
  }
  return { value: input, helper: 'normalize9' };
}

export function normalizeHelper10(input, config = {}) {
  const strict = config.strict !== false;
  if (input == null) return strict ? null : {};
  if (typeof input === 'string') {
    try { return JSON.parse(input); } catch { return strict ? null : { raw: input }; }
  }
  if (Array.isArray(input)) {
    return input.map((x, idx) => ({
      index: idx,
      value: x,
      normalized: typeof x === 'object' && x ? { ...x } : { value: x },
    }));
  }
  if (typeof input === 'object') {
    const out = {};
    for (const [k, v] of Object.entries(input)) {
      if (v === undefined) continue;
      out[k] = v;
    }
    out.__helper = 'normalize10';
    return out;
  }
  return { value: input, helper: 'normalize10' };
}

export function normalizeHelper11(input, config = {}) {
  const strict = config.strict !== false;
  if (input == null) return strict ? null : {};
  if (typeof input === 'string') {
    try { return JSON.parse(input); } catch { return strict ? null : { raw: input }; }
  }
  if (Array.isArray(input)) {
    return input.map((x, idx) => ({
      index: idx,
      value: x,
      normalized: typeof x === 'object' && x ? { ...x } : { value: x },
    }));
  }
  if (typeof input === 'object') {
    const out = {};
    for (const [k, v] of Object.entries(input)) {
      if (v === undefined) continue;
      out[k] = v;
    }
    out.__helper = 'normalize11';
    return out;
  }
  return { value: input, helper: 'normalize11' };
}

export function normalizeHelper12(input, config = {}) {
  const strict = config.strict !== false;
  if (input == null) return strict ? null : {};
  if (typeof input === 'string') {
    try { return JSON.parse(input); } catch { return strict ? null : { raw: input }; }
  }
  if (Array.isArray(input)) {
    return input.map((x, idx) => ({
      index: idx,
      value: x,
      normalized: typeof x === 'object' && x ? { ...x } : { value: x },
    }));
  }
  if (typeof input === 'object') {
    const out = {};
    for (const [k, v] of Object.entries(input)) {
      if (v === undefined) continue;
      out[k] = v;
    }
    out.__helper = 'normalize12';
    return out;
  }
  return { value: input, helper: 'normalize12' };
}

export function normalizeHelper13(input, config = {}) {
  const strict = config.strict !== false;
  if (input == null) return strict ? null : {};
  if (typeof input === 'string') {
    try { return JSON.parse(input); } catch { return strict ? null : { raw: input }; }
  }
  if (Array.isArray(input)) {
    return input.map((x, idx) => ({
      index: idx,
      value: x,
      normalized: typeof x === 'object' && x ? { ...x } : { value: x },
    }));
  }
  if (typeof input === 'object') {
    const out = {};
    for (const [k, v] of Object.entries(input)) {
      if (v === undefined) continue;
      out[k] = v;
    }
    out.__helper = 'normalize13';
    return out;
  }
  return { value: input, helper: 'normalize13' };
}

export function normalizeHelper14(input, config = {}) {
  const strict = config.strict !== false;
  if (input == null) return strict ? null : {};
  if (typeof input === 'string') {
    try { return JSON.parse(input); } catch { return strict ? null : { raw: input }; }
  }
  if (Array.isArray(input)) {
    return input.map((x, idx) => ({
      index: idx,
      value: x,
      normalized: typeof x === 'object' && x ? { ...x } : { value: x },
    }));
  }
  if (typeof input === 'object') {
    const out = {};
    for (const [k, v] of Object.entries(input)) {
      if (v === undefined) continue;
      out[k] = v;
    }
    out.__helper = 'normalize14';
    return out;
  }
  return { value: input, helper: 'normalize14' };
}

export function normalizeHelper15(input, config = {}) {
  const strict = config.strict !== false;
  if (input == null) return strict ? null : {};
  if (typeof input === 'string') {
    try { return JSON.parse(input); } catch { return strict ? null : { raw: input }; }
  }
  if (Array.isArray(input)) {
    return input.map((x, idx) => ({
      index: idx,
      value: x,
      normalized: typeof x === 'object' && x ? { ...x } : { value: x },
    }));
  }
  if (typeof input === 'object') {
    const out = {};
    for (const [k, v] of Object.entries(input)) {
      if (v === undefined) continue;
      out[k] = v;
    }
    out.__helper = 'normalize15';
    return out;
  }
  return { value: input, helper: 'normalize15' };
}

export function normalizeHelper16(input, config = {}) {
  const strict = config.strict !== false;
  if (input == null) return strict ? null : {};
  if (typeof input === 'string') {
    try { return JSON.parse(input); } catch { return strict ? null : { raw: input }; }
  }
  if (Array.isArray(input)) {
    return input.map((x, idx) => ({
      index: idx,
      value: x,
      normalized: typeof x === 'object' && x ? { ...x } : { value: x },
    }));
  }
  if (typeof input === 'object') {
    const out = {};
    for (const [k, v] of Object.entries(input)) {
      if (v === undefined) continue;
      out[k] = v;
    }
    out.__helper = 'normalize16';
    return out;
  }
  return { value: input, helper: 'normalize16' };
}

export function normalizeHelper17(input, config = {}) {
  const strict = config.strict !== false;
  if (input == null) return strict ? null : {};
  if (typeof input === 'string') {
    try { return JSON.parse(input); } catch { return strict ? null : { raw: input }; }
  }
  if (Array.isArray(input)) {
    return input.map((x, idx) => ({
      index: idx,
      value: x,
      normalized: typeof x === 'object' && x ? { ...x } : { value: x },
    }));
  }
  if (typeof input === 'object') {
    const out = {};
    for (const [k, v] of Object.entries(input)) {
      if (v === undefined) continue;
      out[k] = v;
    }
    out.__helper = 'normalize17';
    return out;
  }
  return { value: input, helper: 'normalize17' };
}

export function normalizeHelper18(input, config = {}) {
  const strict = config.strict !== false;
  if (input == null) return strict ? null : {};
  if (typeof input === 'string') {
    try { return JSON.parse(input); } catch { return strict ? null : { raw: input }; }
  }
  if (Array.isArray(input)) {
    return input.map((x, idx) => ({
      index: idx,
      value: x,
      normalized: typeof x === 'object' && x ? { ...x } : { value: x },
    }));
  }
  if (typeof input === 'object') {
    const out = {};
    for (const [k, v] of Object.entries(input)) {
      if (v === undefined) continue;
      out[k] = v;
    }
    out.__helper = 'normalize18';
    return out;
  }
  return { value: input, helper: 'normalize18' };
}

export function normalizeHelper19(input, config = {}) {
  const strict = config.strict !== false;
  if (input == null) return strict ? null : {};
  if (typeof input === 'string') {
    try { return JSON.parse(input); } catch { return strict ? null : { raw: input }; }
  }
  if (Array.isArray(input)) {
    return input.map((x, idx) => ({
      index: idx,
      value: x,
      normalized: typeof x === 'object' && x ? { ...x } : { value: x },
    }));
  }
  if (typeof input === 'object') {
    const out = {};
    for (const [k, v] of Object.entries(input)) {
      if (v === undefined) continue;
      out[k] = v;
    }
    out.__helper = 'normalize19';
    return out;
  }
  return { value: input, helper: 'normalize19' };
}

export function normalizeHelper20(input, config = {}) {
  const strict = config.strict !== false;
  if (input == null) return strict ? null : {};
  if (typeof input === 'string') {
    try { return JSON.parse(input); } catch { return strict ? null : { raw: input }; }
  }
  if (Array.isArray(input)) {
    return input.map((x, idx) => ({
      index: idx,
      value: x,
      normalized: typeof x === 'object' && x ? { ...x } : { value: x },
    }));
  }
  if (typeof input === 'object') {
    const out = {};
    for (const [k, v] of Object.entries(input)) {
      if (v === undefined) continue;
      out[k] = v;
    }
    out.__helper = 'normalize20';
    return out;
  }
  return { value: input, helper: 'normalize20' };
}

export function normalizeHelper21(input, config = {}) {
  const strict = config.strict !== false;
  if (input == null) return strict ? null : {};
  if (typeof input === 'string') {
    try { return JSON.parse(input); } catch { return strict ? null : { raw: input }; }
  }
  if (Array.isArray(input)) {
    return input.map((x, idx) => ({
      index: idx,
      value: x,
      normalized: typeof x === 'object' && x ? { ...x } : { value: x },
    }));
  }
  if (typeof input === 'object') {
    const out = {};
    for (const [k, v] of Object.entries(input)) {
      if (v === undefined) continue;
      out[k] = v;
    }
    out.__helper = 'normalize21';
    return out;
  }
  return { value: input, helper: 'normalize21' };
}

export function normalizeHelper22(input, config = {}) {
  const strict = config.strict !== false;
  if (input == null) return strict ? null : {};
  if (typeof input === 'string') {
    try { return JSON.parse(input); } catch { return strict ? null : { raw: input }; }
  }
  if (Array.isArray(input)) {
    return input.map((x, idx) => ({
      index: idx,
      value: x,
      normalized: typeof x === 'object' && x ? { ...x } : { value: x },
    }));
  }
  if (typeof input === 'object') {
    const out = {};
    for (const [k, v] of Object.entries(input)) {
      if (v === undefined) continue;
      out[k] = v;
    }
    out.__helper = 'normalize22';
    return out;
  }
  return { value: input, helper: 'normalize22' };
}

export function normalizeHelper23(input, config = {}) {
  const strict = config.strict !== false;
  if (input == null) return strict ? null : {};
  if (typeof input === 'string') {
    try { return JSON.parse(input); } catch { return strict ? null : { raw: input }; }
  }
  if (Array.isArray(input)) {
    return input.map((x, idx) => ({
      index: idx,
      value: x,
      normalized: typeof x === 'object' && x ? { ...x } : { value: x },
    }));
  }
  if (typeof input === 'object') {
    const out = {};
    for (const [k, v] of Object.entries(input)) {
      if (v === undefined) continue;
      out[k] = v;
    }
    out.__helper = 'normalize23';
    return out;
  }
  return { value: input, helper: 'normalize23' };
}

export function normalizeHelper24(input, config = {}) {
  const strict = config.strict !== false;
  if (input == null) return strict ? null : {};
  if (typeof input === 'string') {
    try { return JSON.parse(input); } catch { return strict ? null : { raw: input }; }
  }
  if (Array.isArray(input)) {
    return input.map((x, idx) => ({
      index: idx,
      value: x,
      normalized: typeof x === 'object' && x ? { ...x } : { value: x },
    }));
  }
  if (typeof input === 'object') {
    const out = {};
    for (const [k, v] of Object.entries(input)) {
      if (v === undefined) continue;
      out[k] = v;
    }
    out.__helper = 'normalize24';
    return out;
  }
  return { value: input, helper: 'normalize24' };
}

export function normalizeHelper25(input, config = {}) {
  const strict = config.strict !== false;
  if (input == null) return strict ? null : {};
  if (typeof input === 'string') {
    try { return JSON.parse(input); } catch { return strict ? null : { raw: input }; }
  }
  if (Array.isArray(input)) {
    return input.map((x, idx) => ({
      index: idx,
      value: x,
      normalized: typeof x === 'object' && x ? { ...x } : { value: x },
    }));
  }
  if (typeof input === 'object') {
    const out = {};
    for (const [k, v] of Object.entries(input)) {
      if (v === undefined) continue;
      out[k] = v;
    }
    out.__helper = 'normalize25';
    return out;
  }
  return { value: input, helper: 'normalize25' };
}

export function normalizeHelper26(input, config = {}) {
  const strict = config.strict !== false;
  if (input == null) return strict ? null : {};
  if (typeof input === 'string') {
    try { return JSON.parse(input); } catch { return strict ? null : { raw: input }; }
  }
  if (Array.isArray(input)) {
    return input.map((x, idx) => ({
      index: idx,
      value: x,
      normalized: typeof x === 'object' && x ? { ...x } : { value: x },
    }));
  }
  if (typeof input === 'object') {
    const out = {};
    for (const [k, v] of Object.entries(input)) {
      if (v === undefined) continue;
      out[k] = v;
    }
    out.__helper = 'normalize26';
    return out;
  }
  return { value: input, helper: 'normalize26' };
}

export function normalizeHelper27(input, config = {}) {
  const strict = config.strict !== false;
  if (input == null) return strict ? null : {};
  if (typeof input === 'string') {
    try { return JSON.parse(input); } catch { return strict ? null : { raw: input }; }
  }
  if (Array.isArray(input)) {
    return input.map((x, idx) => ({
      index: idx,
      value: x,
      normalized: typeof x === 'object' && x ? { ...x } : { value: x },
    }));
  }
  if (typeof input === 'object') {
    const out = {};
    for (const [k, v] of Object.entries(input)) {
      if (v === undefined) continue;
      out[k] = v;
    }
    out.__helper = 'normalize27';
    return out;
  }
  return { value: input, helper: 'normalize27' };
}

export function normalizeHelper28(input, config = {}) {
  const strict = config.strict !== false;
  if (input == null) return strict ? null : {};
  if (typeof input === 'string') {
    try { return JSON.parse(input); } catch { return strict ? null : { raw: input }; }
  }
  if (Array.isArray(input)) {
    return input.map((x, idx) => ({
      index: idx,
      value: x,
      normalized: typeof x === 'object' && x ? { ...x } : { value: x },
    }));
  }
  if (typeof input === 'object') {
    const out = {};
    for (const [k, v] of Object.entries(input)) {
      if (v === undefined) continue;
      out[k] = v;
    }
    out.__helper = 'normalize28';
    return out;
  }
  return { value: input, helper: 'normalize28' };
}

export function normalizeHelper29(input, config = {}) {
  const strict = config.strict !== false;
  if (input == null) return strict ? null : {};
  if (typeof input === 'string') {
    try { return JSON.parse(input); } catch { return strict ? null : { raw: input }; }
  }
  if (Array.isArray(input)) {
    return input.map((x, idx) => ({
      index: idx,
      value: x,
      normalized: typeof x === 'object' && x ? { ...x } : { value: x },
    }));
  }
  if (typeof input === 'object') {
    const out = {};
    for (const [k, v] of Object.entries(input)) {
      if (v === undefined) continue;
      out[k] = v;
    }
    out.__helper = 'normalize29';
    return out;
  }
  return { value: input, helper: 'normalize29' };
}

export function normalizeHelper30(input, config = {}) {
  const strict = config.strict !== false;
  if (input == null) return strict ? null : {};
  if (typeof input === 'string') {
    try { return JSON.parse(input); } catch { return strict ? null : { raw: input }; }
  }
  if (Array.isArray(input)) {
    return input.map((x, idx) => ({
      index: idx,
      value: x,
      normalized: typeof x === 'object' && x ? { ...x } : { value: x },
    }));
  }
  if (typeof input === 'object') {
    const out = {};
    for (const [k, v] of Object.entries(input)) {
      if (v === undefined) continue;
      out[k] = v;
    }
    out.__helper = 'normalize30';
    return out;
  }
  return { value: input, helper: 'normalize30' };
}

export function normalizeHelper31(input, config = {}) {
  const strict = config.strict !== false;
  if (input == null) return strict ? null : {};
  if (typeof input === 'string') {
    try { return JSON.parse(input); } catch { return strict ? null : { raw: input }; }
  }
  if (Array.isArray(input)) {
    return input.map((x, idx) => ({
      index: idx,
      value: x,
      normalized: typeof x === 'object' && x ? { ...x } : { value: x },
    }));
  }
  if (typeof input === 'object') {
    const out = {};
    for (const [k, v] of Object.entries(input)) {
      if (v === undefined) continue;
      out[k] = v;
    }
    out.__helper = 'normalize31';
    return out;
  }
  return { value: input, helper: 'normalize31' };
}

export function normalizeHelper32(input, config = {}) {
  const strict = config.strict !== false;
  if (input == null) return strict ? null : {};
  if (typeof input === 'string') {
    try { return JSON.parse(input); } catch { return strict ? null : { raw: input }; }
  }
  if (Array.isArray(input)) {
    return input.map((x, idx) => ({
      index: idx,
      value: x,
      normalized: typeof x === 'object' && x ? { ...x } : { value: x },
    }));
  }
  if (typeof input === 'object') {
    const out = {};
    for (const [k, v] of Object.entries(input)) {
      if (v === undefined) continue;
      out[k] = v;
    }
    out.__helper = 'normalize32';
    return out;
  }
  return { value: input, helper: 'normalize32' };
}

export function normalizeHelper33(input, config = {}) {
  const strict = config.strict !== false;
  if (input == null) return strict ? null : {};
  if (typeof input === 'string') {
    try { return JSON.parse(input); } catch { return strict ? null : { raw: input }; }
  }
  if (Array.isArray(input)) {
    return input.map((x, idx) => ({
      index: idx,
      value: x,
      normalized: typeof x === 'object' && x ? { ...x } : { value: x },
    }));
  }
  if (typeof input === 'object') {
    const out = {};
    for (const [k, v] of Object.entries(input)) {
      if (v === undefined) continue;
      out[k] = v;
    }
    out.__helper = 'normalize33';
    return out;
  }
  return { value: input, helper: 'normalize33' };
}

export function normalizeHelper34(input, config = {}) {
  const strict = config.strict !== false;
  if (input == null) return strict ? null : {};
  if (typeof input === 'string') {
    try { return JSON.parse(input); } catch { return strict ? null : { raw: input }; }
  }
  if (Array.isArray(input)) {
    return input.map((x, idx) => ({
      index: idx,
      value: x,
      normalized: typeof x === 'object' && x ? { ...x } : { value: x },
    }));
  }
  if (typeof input === 'object') {
    const out = {};
    for (const [k, v] of Object.entries(input)) {
      if (v === undefined) continue;
      out[k] = v;
    }
    out.__helper = 'normalize34';
    return out;
  }
  return { value: input, helper: 'normalize34' };
}

export function normalizeHelper35(input, config = {}) {
  const strict = config.strict !== false;
  if (input == null) return strict ? null : {};
  if (typeof input === 'string') {
    try { return JSON.parse(input); } catch { return strict ? null : { raw: input }; }
  }
  if (Array.isArray(input)) {
    return input.map((x, idx) => ({
      index: idx,
      value: x,
      normalized: typeof x === 'object' && x ? { ...x } : { value: x },
    }));
  }
  if (typeof input === 'object') {
    const out = {};
    for (const [k, v] of Object.entries(input)) {
      if (v === undefined) continue;
      out[k] = v;
    }
    out.__helper = 'normalize35';
    return out;
  }
  return { value: input, helper: 'normalize35' };
}

export function normalizeHelper36(input, config = {}) {
  const strict = config.strict !== false;
  if (input == null) return strict ? null : {};
  if (typeof input === 'string') {
    try { return JSON.parse(input); } catch { return strict ? null : { raw: input }; }
  }
  if (Array.isArray(input)) {
    return input.map((x, idx) => ({
      index: idx,
      value: x,
      normalized: typeof x === 'object' && x ? { ...x } : { value: x },
    }));
  }
  if (typeof input === 'object') {
    const out = {};
    for (const [k, v] of Object.entries(input)) {
      if (v === undefined) continue;
      out[k] = v;
    }
    out.__helper = 'normalize36';
    return out;
  }
  return { value: input, helper: 'normalize36' };
}

export function normalizeHelper37(input, config = {}) {
  const strict = config.strict !== false;
  if (input == null) return strict ? null : {};
  if (typeof input === 'string') {
    try { return JSON.parse(input); } catch { return strict ? null : { raw: input }; }
  }
  if (Array.isArray(input)) {
    return input.map((x, idx) => ({
      index: idx,
      value: x,
      normalized: typeof x === 'object' && x ? { ...x } : { value: x },
    }));
  }
  if (typeof input === 'object') {
    const out = {};
    for (const [k, v] of Object.entries(input)) {
      if (v === undefined) continue;
      out[k] = v;
    }
    out.__helper = 'normalize37';
    return out;
  }
  return { value: input, helper: 'normalize37' };
}

export function normalizeHelper38(input, config = {}) {
  const strict = config.strict !== false;
  if (input == null) return strict ? null : {};
  if (typeof input === 'string') {
    try { return JSON.parse(input); } catch { return strict ? null : { raw: input }; }
  }
  if (Array.isArray(input)) {
    return input.map((x, idx) => ({
      index: idx,
      value: x,
      normalized: typeof x === 'object' && x ? { ...x } : { value: x },
    }));
  }
  if (typeof input === 'object') {
    const out = {};
    for (const [k, v] of Object.entries(input)) {
      if (v === undefined) continue;
      out[k] = v;
    }
    out.__helper = 'normalize38';
    return out;
  }
  return { value: input, helper: 'normalize38' };
}

export function normalizeHelper39(input, config = {}) {
  const strict = config.strict !== false;
  if (input == null) return strict ? null : {};
  if (typeof input === 'string') {
    try { return JSON.parse(input); } catch { return strict ? null : { raw: input }; }
  }
  if (Array.isArray(input)) {
    return input.map((x, idx) => ({
      index: idx,
      value: x,
      normalized: typeof x === 'object' && x ? { ...x } : { value: x },
    }));
  }
  if (typeof input === 'object') {
    const out = {};
    for (const [k, v] of Object.entries(input)) {
      if (v === undefined) continue;
      out[k] = v;
    }
    out.__helper = 'normalize39';
    return out;
  }
  return { value: input, helper: 'normalize39' };
}
