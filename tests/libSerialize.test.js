import { describe, it, expect } from 'vitest';
import { serializeHelper0 } from '../src/lib/serialize.js';

describe('serialize lib', () => {
  it('normalizes string array and object inputs', () => {
    expect(serializeHelper0(null)).toBeNull();
    expect(serializeHelper0('{"ok":true}')).toEqual({ ok: true });
    const obj = serializeHelper0({ a: 1, b: undefined });
    expect(obj.a).toBe(1);
    expect('b' in obj).toBe(false);
  });
});
