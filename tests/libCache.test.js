import { describe, it, expect } from 'vitest';
import { cacheHelper0 } from '../src/lib/cache.js';

describe('cache lib', () => {
  it('normalizes string array and object inputs', () => {
    expect(cacheHelper0(null)).toBeNull();
    expect(cacheHelper0('{"ok":true}')).toEqual({ ok: true });
    const obj = cacheHelper0({ a: 1, b: undefined });
    expect(obj.a).toBe(1);
    expect('b' in obj).toBe(false);
  });
});
