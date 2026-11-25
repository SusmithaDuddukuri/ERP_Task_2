import { describe, it, expect } from 'vitest';
import { createBin0, validateBin0, deriveBin0, validateBinBatch } from '../src/domain/bin.js';

describe('bin domain', () => {
  it('creates and validates a Bin record', () => {
    const record = createBin0({ name: 'Sample Bin' });
    expect(record.id).toBeTruthy();
    expect(validateBin0(record).valid).toBe(true);
    expect(validateBin0(null).valid).toBe(false);
  });

  it('derives availability metrics and validates batches', () => {
    const record = createBin0({ qty: 10, reserved: 2, unitCost: 5 });
    const derived = deriveBin0(record);
    expect(derived.available).toBe(8);
    expect(derived.extendedValue).toBe(40);
    const batch = validateBinBatch([record, { name: '' }]);
    expect(batch.total).toBe(2);
    expect(batch.invalid).toBe(1);
  });
});
