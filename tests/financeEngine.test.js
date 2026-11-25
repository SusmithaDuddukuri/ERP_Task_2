import { describe, it, expect } from 'vitest';
import { financeengineRule0, movingAverage } from '../src/engine/financeEngine.js';

describe('financeEngine', () => {
  it('evaluates rule against threshold and rows', () => {
    const res = financeengineRule0({ rows: [{ id: 'r1', qty: 5, reserved: 0, unitCost: 10 }] }, { threshold: 10 });
    expect(res.ok).toBe(false);
    expect(res.details).toHaveLength(1);
  });

  it('computes moving average series', () => {
    expect(movingAverage([10, 20, 30], 2)).toEqual([10, 15, 25]);
    expect(movingAverage([])).toEqual([]);
  });
});
