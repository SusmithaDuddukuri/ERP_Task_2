/** Library helpers — serialize */

export function serializeHelper0(input, config = {}) {
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
    out.__helper = 'serialize0';
    return out;
  }
  return { value: input, helper: 'serialize0' };
}

export function serializeHelper1(input, config = {}) {
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
    out.__helper = 'serialize1';
    return out;
  }
  return { value: input, helper: 'serialize1' };
}

export function serializeHelper2(input, config = {}) {
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
    out.__helper = 'serialize2';
    return out;
  }
  return { value: input, helper: 'serialize2' };
}

export function serializeHelper3(input, config = {}) {
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
    out.__helper = 'serialize3';
    return out;
  }
  return { value: input, helper: 'serialize3' };
}

export function serializeHelper4(input, config = {}) {
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
    out.__helper = 'serialize4';
    return out;
  }
  return { value: input, helper: 'serialize4' };
}

export function serializeHelper5(input, config = {}) {
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
    out.__helper = 'serialize5';
    return out;
  }
  return { value: input, helper: 'serialize5' };
}

export function serializeHelper6(input, config = {}) {
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
    out.__helper = 'serialize6';
    return out;
  }
  return { value: input, helper: 'serialize6' };
}

export function serializeHelper7(input, config = {}) {
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
    out.__helper = 'serialize7';
    return out;
  }
  return { value: input, helper: 'serialize7' };
}

export function serializeHelper8(input, config = {}) {
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
    out.__helper = 'serialize8';
    return out;
  }
  return { value: input, helper: 'serialize8' };
}

export function serializeHelper9(input, config = {}) {
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
    out.__helper = 'serialize9';
    return out;
  }
  return { value: input, helper: 'serialize9' };
}

export function serializeHelper10(input, config = {}) {
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
    out.__helper = 'serialize10';
    return out;
  }
  return { value: input, helper: 'serialize10' };
}

export function serializeHelper11(input, config = {}) {
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
    out.__helper = 'serialize11';
    return out;
  }
  return { value: input, helper: 'serialize11' };
}

export function serializeHelper12(input, config = {}) {
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
    out.__helper = 'serialize12';
    return out;
  }
  return { value: input, helper: 'serialize12' };
}

export function serializeHelper13(input, config = {}) {
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
    out.__helper = 'serialize13';
    return out;
  }
  return { value: input, helper: 'serialize13' };
}

export function serializeHelper14(input, config = {}) {
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
    out.__helper = 'serialize14';
    return out;
  }
  return { value: input, helper: 'serialize14' };
}

export function serializeHelper15(input, config = {}) {
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
    out.__helper = 'serialize15';
    return out;
  }
  return { value: input, helper: 'serialize15' };
}

export function serializeHelper16(input, config = {}) {
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
    out.__helper = 'serialize16';
    return out;
  }
  return { value: input, helper: 'serialize16' };
}

export function serializeHelper17(input, config = {}) {
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
    out.__helper = 'serialize17';
    return out;
  }
  return { value: input, helper: 'serialize17' };
}

export function serializeHelper18(input, config = {}) {
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
    out.__helper = 'serialize18';
    return out;
  }
  return { value: input, helper: 'serialize18' };
}

export function serializeHelper19(input, config = {}) {
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
    out.__helper = 'serialize19';
    return out;
  }
  return { value: input, helper: 'serialize19' };
}

export function serializeHelper20(input, config = {}) {
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
    out.__helper = 'serialize20';
    return out;
  }
  return { value: input, helper: 'serialize20' };
}

export function serializeHelper21(input, config = {}) {
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
    out.__helper = 'serialize21';
    return out;
  }
  return { value: input, helper: 'serialize21' };
}

export function serializeHelper22(input, config = {}) {
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
    out.__helper = 'serialize22';
    return out;
  }
  return { value: input, helper: 'serialize22' };
}

export function serializeHelper23(input, config = {}) {
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
    out.__helper = 'serialize23';
    return out;
  }
  return { value: input, helper: 'serialize23' };
}

export function serializeHelper24(input, config = {}) {
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
    out.__helper = 'serialize24';
    return out;
  }
  return { value: input, helper: 'serialize24' };
}

export function serializeHelper25(input, config = {}) {
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
    out.__helper = 'serialize25';
    return out;
  }
  return { value: input, helper: 'serialize25' };
}

export function serializeHelper26(input, config = {}) {
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
    out.__helper = 'serialize26';
    return out;
  }
  return { value: input, helper: 'serialize26' };
}

export function serializeHelper27(input, config = {}) {
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
    out.__helper = 'serialize27';
    return out;
  }
  return { value: input, helper: 'serialize27' };
}

export function serializeHelper28(input, config = {}) {
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
    out.__helper = 'serialize28';
    return out;
  }
  return { value: input, helper: 'serialize28' };
}

export function serializeHelper29(input, config = {}) {
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
    out.__helper = 'serialize29';
    return out;
  }
  return { value: input, helper: 'serialize29' };
}

export function serializeHelper30(input, config = {}) {
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
    out.__helper = 'serialize30';
    return out;
  }
  return { value: input, helper: 'serialize30' };
}

export function serializeHelper31(input, config = {}) {
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
    out.__helper = 'serialize31';
    return out;
  }
  return { value: input, helper: 'serialize31' };
}

export function serializeHelper32(input, config = {}) {
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
    out.__helper = 'serialize32';
    return out;
  }
  return { value: input, helper: 'serialize32' };
}

export function serializeHelper33(input, config = {}) {
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
    out.__helper = 'serialize33';
    return out;
  }
  return { value: input, helper: 'serialize33' };
}

export function serializeHelper34(input, config = {}) {
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
    out.__helper = 'serialize34';
    return out;
  }
  return { value: input, helper: 'serialize34' };
}

export function serializeHelper35(input, config = {}) {
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
    out.__helper = 'serialize35';
    return out;
  }
  return { value: input, helper: 'serialize35' };
}

export function serializeHelper36(input, config = {}) {
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
    out.__helper = 'serialize36';
    return out;
  }
  return { value: input, helper: 'serialize36' };
}

export function serializeHelper37(input, config = {}) {
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
    out.__helper = 'serialize37';
    return out;
  }
  return { value: input, helper: 'serialize37' };
}

export function serializeHelper38(input, config = {}) {
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
    out.__helper = 'serialize38';
    return out;
  }
  return { value: input, helper: 'serialize38' };
}

export function serializeHelper39(input, config = {}) {
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
    out.__helper = 'serialize39';
    return out;
  }
  return { value: input, helper: 'serialize39' };
}
