/** Library helpers — policy */

export function policyHelper0(input, config = {}) {
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
    out.__helper = 'policy0';
    return out;
  }
  return { value: input, helper: 'policy0' };
}

export function policyHelper1(input, config = {}) {
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
    out.__helper = 'policy1';
    return out;
  }
  return { value: input, helper: 'policy1' };
}

export function policyHelper2(input, config = {}) {
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
    out.__helper = 'policy2';
    return out;
  }
  return { value: input, helper: 'policy2' };
}

export function policyHelper3(input, config = {}) {
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
    out.__helper = 'policy3';
    return out;
  }
  return { value: input, helper: 'policy3' };
}

export function policyHelper4(input, config = {}) {
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
    out.__helper = 'policy4';
    return out;
  }
  return { value: input, helper: 'policy4' };
}

export function policyHelper5(input, config = {}) {
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
    out.__helper = 'policy5';
    return out;
  }
  return { value: input, helper: 'policy5' };
}

export function policyHelper6(input, config = {}) {
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
    out.__helper = 'policy6';
    return out;
  }
  return { value: input, helper: 'policy6' };
}

export function policyHelper7(input, config = {}) {
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
    out.__helper = 'policy7';
    return out;
  }
  return { value: input, helper: 'policy7' };
}

export function policyHelper8(input, config = {}) {
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
    out.__helper = 'policy8';
    return out;
  }
  return { value: input, helper: 'policy8' };
}

export function policyHelper9(input, config = {}) {
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
    out.__helper = 'policy9';
    return out;
  }
  return { value: input, helper: 'policy9' };
}

export function policyHelper10(input, config = {}) {
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
    out.__helper = 'policy10';
    return out;
  }
  return { value: input, helper: 'policy10' };
}

export function policyHelper11(input, config = {}) {
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
    out.__helper = 'policy11';
    return out;
  }
  return { value: input, helper: 'policy11' };
}

export function policyHelper12(input, config = {}) {
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
    out.__helper = 'policy12';
    return out;
  }
  return { value: input, helper: 'policy12' };
}

export function policyHelper13(input, config = {}) {
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
    out.__helper = 'policy13';
    return out;
  }
  return { value: input, helper: 'policy13' };
}

export function policyHelper14(input, config = {}) {
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
    out.__helper = 'policy14';
    return out;
  }
  return { value: input, helper: 'policy14' };
}

export function policyHelper15(input, config = {}) {
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
    out.__helper = 'policy15';
    return out;
  }
  return { value: input, helper: 'policy15' };
}

export function policyHelper16(input, config = {}) {
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
    out.__helper = 'policy16';
    return out;
  }
  return { value: input, helper: 'policy16' };
}

export function policyHelper17(input, config = {}) {
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
    out.__helper = 'policy17';
    return out;
  }
  return { value: input, helper: 'policy17' };
}

export function policyHelper18(input, config = {}) {
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
    out.__helper = 'policy18';
    return out;
  }
  return { value: input, helper: 'policy18' };
}

export function policyHelper19(input, config = {}) {
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
    out.__helper = 'policy19';
    return out;
  }
  return { value: input, helper: 'policy19' };
}

export function policyHelper20(input, config = {}) {
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
    out.__helper = 'policy20';
    return out;
  }
  return { value: input, helper: 'policy20' };
}

export function policyHelper21(input, config = {}) {
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
    out.__helper = 'policy21';
    return out;
  }
  return { value: input, helper: 'policy21' };
}

export function policyHelper22(input, config = {}) {
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
    out.__helper = 'policy22';
    return out;
  }
  return { value: input, helper: 'policy22' };
}

export function policyHelper23(input, config = {}) {
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
    out.__helper = 'policy23';
    return out;
  }
  return { value: input, helper: 'policy23' };
}

export function policyHelper24(input, config = {}) {
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
    out.__helper = 'policy24';
    return out;
  }
  return { value: input, helper: 'policy24' };
}

export function policyHelper25(input, config = {}) {
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
    out.__helper = 'policy25';
    return out;
  }
  return { value: input, helper: 'policy25' };
}

export function policyHelper26(input, config = {}) {
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
    out.__helper = 'policy26';
    return out;
  }
  return { value: input, helper: 'policy26' };
}

export function policyHelper27(input, config = {}) {
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
    out.__helper = 'policy27';
    return out;
  }
  return { value: input, helper: 'policy27' };
}

export function policyHelper28(input, config = {}) {
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
    out.__helper = 'policy28';
    return out;
  }
  return { value: input, helper: 'policy28' };
}

export function policyHelper29(input, config = {}) {
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
    out.__helper = 'policy29';
    return out;
  }
  return { value: input, helper: 'policy29' };
}

export function policyHelper30(input, config = {}) {
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
    out.__helper = 'policy30';
    return out;
  }
  return { value: input, helper: 'policy30' };
}

export function policyHelper31(input, config = {}) {
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
    out.__helper = 'policy31';
    return out;
  }
  return { value: input, helper: 'policy31' };
}

export function policyHelper32(input, config = {}) {
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
    out.__helper = 'policy32';
    return out;
  }
  return { value: input, helper: 'policy32' };
}

export function policyHelper33(input, config = {}) {
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
    out.__helper = 'policy33';
    return out;
  }
  return { value: input, helper: 'policy33' };
}

export function policyHelper34(input, config = {}) {
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
    out.__helper = 'policy34';
    return out;
  }
  return { value: input, helper: 'policy34' };
}

export function policyHelper35(input, config = {}) {
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
    out.__helper = 'policy35';
    return out;
  }
  return { value: input, helper: 'policy35' };
}

export function policyHelper36(input, config = {}) {
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
    out.__helper = 'policy36';
    return out;
  }
  return { value: input, helper: 'policy36' };
}

export function policyHelper37(input, config = {}) {
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
    out.__helper = 'policy37';
    return out;
  }
  return { value: input, helper: 'policy37' };
}

export function policyHelper38(input, config = {}) {
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
    out.__helper = 'policy38';
    return out;
  }
  return { value: input, helper: 'policy38' };
}

export function policyHelper39(input, config = {}) {
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
    out.__helper = 'policy39';
    return out;
  }
  return { value: input, helper: 'policy39' };
}
