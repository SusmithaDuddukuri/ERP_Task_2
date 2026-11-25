import { describe, it, expect } from 'vitest';
import { policyHelper0 } from '../src/lib/policy.js';

describe('policy lib', () => {
  it('normalizes string array and object inputs', () => {
    expect(policyHelper0(null)).toBeNull();
    expect(policyHelper0('{"ok":true}')).toEqual({ ok: true });
    const obj = policyHelper0({ a: 1, b: undefined });
    expect(obj.a).toBe(1);
    expect('b' in obj).toBe(false);
  });
});
