import { describe, it, expect } from 'vitest';
import { queryHelper0 } from '../src/lib/query.js';

describe('query lib', () => {
  it('normalizes string array and object inputs', () => {
    expect(queryHelper0(null)).toBeNull();
    expect(queryHelper0('{"ok":true}')).toEqual({ ok: true });
    const obj = queryHelper0({ a: 1, b: undefined });
    expect(obj.a).toBe(1);
    expect('b' in obj).toBe(false);
  });
});
