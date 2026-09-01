import { describe, it, expect } from 'vitest';
import { nextPoStatus, advancePo, poTotal } from '../src/engine/purchaseEngine.js';

describe('purchaseEngine', () => {
  it('advances draft to submitted', () => {
    expect(nextPoStatus('Draft')).toBe('Submitted');
  });
  it('totals lines', () => {
    expect(poTotal({ lines: [{ qty: 2, unitCost: 10 }] })).toBe(20);
  });
  it('advancePo updates status', () => {
    expect(advancePo({ status: 'Submitted' }).status).toBe('Approved');
  });
});
