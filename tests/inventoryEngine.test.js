import { describe, it, expect } from 'vitest';
import { availableQty, adjustStock, lowStock } from '../src/engine/inventoryEngine.js';

describe('inventoryEngine', () => {
  it('computes available qty', () => {
    expect(availableQty({ qty: 20, reserved: 5 })).toBe(15);
  });
  it('adjusts stock', () => {
    const next = adjustStock([{ id: '1', qty: 10 }], '1', 5);
    expect(next[0].qty).toBe(15);
  });
  it('flags low stock', () => {
    const low = lowStock([{ id: '1', productId: 'p', qty: 2, reserved: 0 }], [{ id: 'p', reorderAt: 5 }]);
    expect(low).toHaveLength(1);
  });
});
