import { describe, it, expect } from 'vitest';
import { hrengineRule0, movingAverage } from '../src/engine/hrEngine.js';

describe('hrEngine', () => {
  it('evaluates rule against threshold and rows', () => {
    const res = hrengineRule0({ rows: [{ id: 'r1', qty: 5, reserved: 0, unitCost: 10 }] }, { threshold: 10 });
    expect(res.ok).toBe(false);
    expect(res.details).toHaveLength(1);
  });

  it('computes moving average series', () => {
    expect(movingAverage([10, 20, 30], 2)).toEqual([10, 15, 25]);
    expect(movingAverage([])).toEqual([]);
  });
});
