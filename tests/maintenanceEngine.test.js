import { describe, it, expect } from 'vitest';
import { maintenanceengineRule0, movingAverage } from '../src/engine/maintenanceEngine.js';

describe('maintenanceEngine', () => {
  it('evaluates rule against threshold and rows', () => {
    const res = maintenanceengineRule0({ rows: [{ id: 'r1', qty: 5, reserved: 0, unitCost: 10 }] }, { threshold: 10 });
    expect(res.ok).toBe(false);
    expect(res.details).toHaveLength(1);
  });

  it('computes moving average series', () => {
    expect(movingAverage([10, 20, 30], 2)).toEqual([10, 15, 25]);
    expect(movingAverage([])).toEqual([]);
  });
});
