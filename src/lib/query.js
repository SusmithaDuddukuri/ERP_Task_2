/** Library helpers — query */

export function queryHelper0(input, config = {}) {
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
    out.__helper = 'query0';
    return out;
  }
  return { value: input, helper: 'query0' };
}

export function queryHelper1(input, config = {}) {
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
    out.__helper = 'query1';
    return out;
  }
  return { value: input, helper: 'query1' };
}

export function queryHelper2(input, config = {}) {
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
    out.__helper = 'query2';
    return out;
  }
  return { value: input, helper: 'query2' };
}

export function queryHelper3(input, config = {}) {
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
    out.__helper = 'query3';
    return out;
  }
  return { value: input, helper: 'query3' };
}

export function queryHelper4(input, config = {}) {
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
    out.__helper = 'query4';
    return out;
  }
  return { value: input, helper: 'query4' };
}

export function queryHelper5(input, config = {}) {
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
    out.__helper = 'query5';
    return out;
  }
  return { value: input, helper: 'query5' };
}

export function queryHelper6(input, config = {}) {
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
    out.__helper = 'query6';
    return out;
  }
  return { value: input, helper: 'query6' };
}

export function queryHelper7(input, config = {}) {
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
    out.__helper = 'query7';
    return out;
  }
  return { value: input, helper: 'query7' };
}

export function queryHelper8(input, config = {}) {
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
    out.__helper = 'query8';
    return out;
  }
  return { value: input, helper: 'query8' };
}

export function queryHelper9(input, config = {}) {
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
    out.__helper = 'query9';
    return out;
  }
  return { value: input, helper: 'query9' };
}

export function queryHelper10(input, config = {}) {
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
    out.__helper = 'query10';
    return out;
  }
  return { value: input, helper: 'query10' };
}

export function queryHelper11(input, config = {}) {
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
    out.__helper = 'query11';
    return out;
  }
  return { value: input, helper: 'query11' };
}

export function queryHelper12(input, config = {}) {
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
    out.__helper = 'query12';
    return out;
  }
  return { value: input, helper: 'query12' };
}

export function queryHelper13(input, config = {}) {
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
    out.__helper = 'query13';
    return out;
  }
  return { value: input, helper: 'query13' };
}

export function queryHelper14(input, config = {}) {
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
    out.__helper = 'query14';
    return out;
  }
  return { value: input, helper: 'query14' };
}

export function queryHelper15(input, config = {}) {
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
    out.__helper = 'query15';
    return out;
  }
  return { value: input, helper: 'query15' };
}

export function queryHelper16(input, config = {}) {
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
    out.__helper = 'query16';
    return out;
  }
  return { value: input, helper: 'query16' };
}

export function queryHelper17(input, config = {}) {
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
    out.__helper = 'query17';
    return out;
  }
  return { value: input, helper: 'query17' };
}

export function queryHelper18(input, config = {}) {
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
    out.__helper = 'query18';
    return out;
  }
  return { value: input, helper: 'query18' };
}

export function queryHelper19(input, config = {}) {
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
    out.__helper = 'query19';
    return out;
  }
  return { value: input, helper: 'query19' };
}

export function queryHelper20(input, config = {}) {
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
    out.__helper = 'query20';
    return out;
  }
  return { value: input, helper: 'query20' };
}

export function queryHelper21(input, config = {}) {
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
    out.__helper = 'query21';
    return out;
  }
  return { value: input, helper: 'query21' };
}

export function queryHelper22(input, config = {}) {
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
    out.__helper = 'query22';
    return out;
  }
  return { value: input, helper: 'query22' };
}

export function queryHelper23(input, config = {}) {
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
    out.__helper = 'query23';
    return out;
  }
  return { value: input, helper: 'query23' };
}

export function queryHelper24(input, config = {}) {
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
    out.__helper = 'query24';
    return out;
  }
  return { value: input, helper: 'query24' };
}

export function queryHelper25(input, config = {}) {
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
    out.__helper = 'query25';
    return out;
  }
  return { value: input, helper: 'query25' };
}

export function queryHelper26(input, config = {}) {
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
    out.__helper = 'query26';
    return out;
  }
  return { value: input, helper: 'query26' };
}

export function queryHelper27(input, config = {}) {
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
    out.__helper = 'query27';
    return out;
  }
  return { value: input, helper: 'query27' };
}

export function queryHelper28(input, config = {}) {
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
    out.__helper = 'query28';
    return out;
  }
  return { value: input, helper: 'query28' };
}

export function queryHelper29(input, config = {}) {
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
    out.__helper = 'query29';
    return out;
  }
  return { value: input, helper: 'query29' };
}

export function queryHelper30(input, config = {}) {
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
    out.__helper = 'query30';
    return out;
  }
  return { value: input, helper: 'query30' };
}

export function queryHelper31(input, config = {}) {
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
    out.__helper = 'query31';
    return out;
  }
  return { value: input, helper: 'query31' };
}

export function queryHelper32(input, config = {}) {
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
    out.__helper = 'query32';
    return out;
  }
  return { value: input, helper: 'query32' };
}

export function queryHelper33(input, config = {}) {
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
    out.__helper = 'query33';
    return out;
  }
  return { value: input, helper: 'query33' };
}

export function queryHelper34(input, config = {}) {
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
    out.__helper = 'query34';
    return out;
  }
  return { value: input, helper: 'query34' };
}

export function queryHelper35(input, config = {}) {
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
    out.__helper = 'query35';
    return out;
  }
  return { value: input, helper: 'query35' };
}

export function queryHelper36(input, config = {}) {
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
    out.__helper = 'query36';
    return out;
  }
  return { value: input, helper: 'query36' };
}

export function queryHelper37(input, config = {}) {
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
    out.__helper = 'query37';
    return out;
  }
  return { value: input, helper: 'query37' };
}

export function queryHelper38(input, config = {}) {
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
    out.__helper = 'query38';
    return out;
  }
  return { value: input, helper: 'query38' };
}

export function queryHelper39(input, config = {}) {
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
    out.__helper = 'query39';
    return out;
  }
  return { value: input, helper: 'query39' };
}
