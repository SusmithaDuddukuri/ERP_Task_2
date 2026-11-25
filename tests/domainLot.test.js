import { describe, it, expect } from 'vitest';
import { createLot0, validateLot0, deriveLot0, validateLotBatch } from '../src/domain/lot.js';

describe('lot domain', () => {
  it('creates and validates a Lot record', () => {
    const record = createLot0({ name: 'Sample Lot' });
    expect(record.id).toBeTruthy();
    expect(validateLot0(record).valid).toBe(true);
    expect(validateLot0(null).valid).toBe(false);
  });

  it('derives availability metrics and validates batches', () => {
    const record = createLot0({ qty: 10, reserved: 2, unitCost: 5 });
    const derived = deriveLot0(record);
    expect(derived.available).toBe(8);
    expect(derived.extendedValue).toBe(40);
    const batch = validateLotBatch([record, { name: '' }]);
    expect(batch.total).toBe(2);
    expect(batch.invalid).toBe(1);
  });
});
