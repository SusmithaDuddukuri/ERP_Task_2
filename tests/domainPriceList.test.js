import { describe, it, expect } from 'vitest';
import { createPriceList0, validatePriceList0, derivePriceList0, validatePriceListBatch } from '../src/domain/pricelist.js';

describe('pricelist domain', () => {
  it('creates and validates a PriceList record', () => {
    const record = createPriceList0({ name: 'Sample PriceList' });
    expect(record.id).toBeTruthy();
    expect(validatePriceList0(record).valid).toBe(true);
    expect(validatePriceList0(null).valid).toBe(false);
  });

  it('derives availability metrics and validates batches', () => {
    const record = createPriceList0({ qty: 10, reserved: 2, unitCost: 5 });
    const derived = derivePriceList0(record);
    expect(derived.available).toBe(8);
    expect(derived.extendedValue).toBe(40);
    const batch = validatePriceListBatch([record, { name: '' }]);
    expect(batch.total).toBe(2);
    expect(batch.invalid).toBe(1);
  });
});
