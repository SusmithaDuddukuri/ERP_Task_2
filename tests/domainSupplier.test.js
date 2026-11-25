import { describe, it, expect } from 'vitest';
import { createSupplier0, validateSupplier0, deriveSupplier0, validateSupplierBatch } from '../src/domain/supplier.js';

describe('supplier domain', () => {
  it('creates and validates a Supplier record', () => {
    const record = createSupplier0({ name: 'Sample Supplier' });
    expect(record.id).toBeTruthy();
    expect(validateSupplier0(record).valid).toBe(true);
    expect(validateSupplier0(null).valid).toBe(false);
  });

  it('derives availability metrics and validates batches', () => {
    const record = createSupplier0({ qty: 10, reserved: 2, unitCost: 5 });
    const derived = deriveSupplier0(record);
    expect(derived.available).toBe(8);
    expect(derived.extendedValue).toBe(40);
    const batch = validateSupplierBatch([record, { name: '' }]);
    expect(batch.total).toBe(2);
    expect(batch.invalid).toBe(1);
  });
});
