import { describe, it, expect } from 'vitest';
import { createProduct0, validateProduct0, deriveProduct0, validateProductBatch } from '../src/domain/product.js';

describe('product domain', () => {
  it('creates and validates a Product record', () => {
    const record = createProduct0({ name: 'Sample Product' });
    expect(record.id).toBeTruthy();
    expect(validateProduct0(record).valid).toBe(true);
    expect(validateProduct0(null).valid).toBe(false);
  });

  it('derives availability metrics and validates batches', () => {
    const record = createProduct0({ qty: 10, reserved: 2, unitCost: 5 });
    const derived = deriveProduct0(record);
    expect(derived.available).toBe(8);
    expect(derived.extendedValue).toBe(40);
    const batch = validateProductBatch([record, { name: '' }]);
    expect(batch.total).toBe(2);
    expect(batch.invalid).toBe(1);
  });
});
