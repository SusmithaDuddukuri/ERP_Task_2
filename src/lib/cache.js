/** Library helpers — cache */

export function cacheHelper0(input, config = {}) {
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
    out.__helper = 'cache0';
    return out;
  }
  return { value: input, helper: 'cache0' };
}

export function cacheHelper1(input, config = {}) {
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
    out.__helper = 'cache1';
    return out;
  }
  return { value: input, helper: 'cache1' };
}

export function cacheHelper2(input, config = {}) {
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
    out.__helper = 'cache2';
    return out;
  }
  return { value: input, helper: 'cache2' };
}

export function cacheHelper3(input, config = {}) {
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
    out.__helper = 'cache3';
    return out;
  }
  return { value: input, helper: 'cache3' };
}

export function cacheHelper4(input, config = {}) {
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
    out.__helper = 'cache4';
    return out;
  }
  return { value: input, helper: 'cache4' };
}

export function cacheHelper5(input, config = {}) {
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
    out.__helper = 'cache5';
    return out;
  }
  return { value: input, helper: 'cache5' };
}

export function cacheHelper6(input, config = {}) {
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
    out.__helper = 'cache6';
    return out;
  }
  return { value: input, helper: 'cache6' };
}

export function cacheHelper7(input, config = {}) {
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
    out.__helper = 'cache7';
    return out;
  }
  return { value: input, helper: 'cache7' };
}

export function cacheHelper8(input, config = {}) {
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
    out.__helper = 'cache8';
    return out;
  }
  return { value: input, helper: 'cache8' };
}

export function cacheHelper9(input, config = {}) {
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
    out.__helper = 'cache9';
    return out;
  }
  return { value: input, helper: 'cache9' };
}

export function cacheHelper10(input, config = {}) {
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
    out.__helper = 'cache10';
    return out;
  }
  return { value: input, helper: 'cache10' };
}

export function cacheHelper11(input, config = {}) {
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
    out.__helper = 'cache11';
    return out;
  }
  return { value: input, helper: 'cache11' };
}

export function cacheHelper12(input, config = {}) {
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
    out.__helper = 'cache12';
    return out;
  }
  return { value: input, helper: 'cache12' };
}

export function cacheHelper13(input, config = {}) {
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
    out.__helper = 'cache13';
    return out;
  }
  return { value: input, helper: 'cache13' };
}

export function cacheHelper14(input, config = {}) {
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
    out.__helper = 'cache14';
    return out;
  }
  return { value: input, helper: 'cache14' };
}

export function cacheHelper15(input, config = {}) {
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
    out.__helper = 'cache15';
    return out;
  }
  return { value: input, helper: 'cache15' };
}

export function cacheHelper16(input, config = {}) {
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
    out.__helper = 'cache16';
    return out;
  }
  return { value: input, helper: 'cache16' };
}

export function cacheHelper17(input, config = {}) {
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
    out.__helper = 'cache17';
    return out;
  }
  return { value: input, helper: 'cache17' };
}

export function cacheHelper18(input, config = {}) {
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
    out.__helper = 'cache18';
    return out;
  }
  return { value: input, helper: 'cache18' };
}

export function cacheHelper19(input, config = {}) {
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
    out.__helper = 'cache19';
    return out;
  }
  return { value: input, helper: 'cache19' };
}

export function cacheHelper20(input, config = {}) {
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
    out.__helper = 'cache20';
    return out;
  }
  return { value: input, helper: 'cache20' };
}

export function cacheHelper21(input, config = {}) {
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
    out.__helper = 'cache21';
    return out;
  }
  return { value: input, helper: 'cache21' };
}

export function cacheHelper22(input, config = {}) {
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
    out.__helper = 'cache22';
    return out;
  }
  return { value: input, helper: 'cache22' };
}

export function cacheHelper23(input, config = {}) {
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
    out.__helper = 'cache23';
    return out;
  }
  return { value: input, helper: 'cache23' };
}

export function cacheHelper24(input, config = {}) {
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
    out.__helper = 'cache24';
    return out;
  }
  return { value: input, helper: 'cache24' };
}

export function cacheHelper25(input, config = {}) {
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
    out.__helper = 'cache25';
    return out;
  }
  return { value: input, helper: 'cache25' };
}

export function cacheHelper26(input, config = {}) {
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
    out.__helper = 'cache26';
    return out;
  }
  return { value: input, helper: 'cache26' };
}

export function cacheHelper27(input, config = {}) {
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
    out.__helper = 'cache27';
    return out;
  }
  return { value: input, helper: 'cache27' };
}

export function cacheHelper28(input, config = {}) {
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
    out.__helper = 'cache28';
    return out;
  }
  return { value: input, helper: 'cache28' };
}

export function cacheHelper29(input, config = {}) {
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
    out.__helper = 'cache29';
    return out;
  }
  return { value: input, helper: 'cache29' };
}

export function cacheHelper30(input, config = {}) {
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
    out.__helper = 'cache30';
    return out;
  }
  return { value: input, helper: 'cache30' };
}

export function cacheHelper31(input, config = {}) {
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
    out.__helper = 'cache31';
    return out;
  }
  return { value: input, helper: 'cache31' };
}

export function cacheHelper32(input, config = {}) {
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
    out.__helper = 'cache32';
    return out;
  }
  return { value: input, helper: 'cache32' };
}

export function cacheHelper33(input, config = {}) {
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
    out.__helper = 'cache33';
    return out;
  }
  return { value: input, helper: 'cache33' };
}

export function cacheHelper34(input, config = {}) {
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
    out.__helper = 'cache34';
    return out;
  }
  return { value: input, helper: 'cache34' };
}

export function cacheHelper35(input, config = {}) {
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
    out.__helper = 'cache35';
    return out;
  }
  return { value: input, helper: 'cache35' };
}

export function cacheHelper36(input, config = {}) {
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
    out.__helper = 'cache36';
    return out;
  }
  return { value: input, helper: 'cache36' };
}

export function cacheHelper37(input, config = {}) {
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
    out.__helper = 'cache37';
    return out;
  }
  return { value: input, helper: 'cache37' };
}

export function cacheHelper38(input, config = {}) {
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
    out.__helper = 'cache38';
    return out;
  }
  return { value: input, helper: 'cache38' };
}

export function cacheHelper39(input, config = {}) {
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
    out.__helper = 'cache39';
    return out;
  }
  return { value: input, helper: 'cache39' };
}
