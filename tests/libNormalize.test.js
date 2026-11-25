import { describe, it, expect } from 'vitest';
import { normalizeHelper0 } from '../src/lib/normalize.js';

describe('normalize lib', () => {
  it('normalizes string array and object inputs', () => {
    expect(normalizeHelper0(null)).toBeNull();
    expect(normalizeHelper0('{"ok":true}')).toEqual({ ok: true });
    const obj = normalizeHelper0({ a: 1, b: undefined });
    expect(obj.a).toBe(1);
    expect('b' in obj).toBe(false);
  });
});
