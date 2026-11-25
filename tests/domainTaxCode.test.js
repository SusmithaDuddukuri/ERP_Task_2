import { describe, it, expect } from 'vitest';
import { createTaxCode0, validateTaxCode0, deriveTaxCode0, validateTaxCodeBatch } from '../src/domain/taxcode.js';

describe('taxcode domain', () => {
  it('creates and validates a TaxCode record', () => {
    const record = createTaxCode0({ name: 'Sample TaxCode' });
    expect(record.id).toBeTruthy();
    expect(validateTaxCode0(record).valid).toBe(true);
    expect(validateTaxCode0(null).valid).toBe(false);
  });

  it('derives availability metrics and validates batches', () => {
    const record = createTaxCode0({ qty: 10, reserved: 2, unitCost: 5 });
    const derived = deriveTaxCode0(record);
    expect(derived.available).toBe(8);
    expect(derived.extendedValue).toBe(40);
    const batch = validateTaxCodeBatch([record, { name: '' }]);
    expect(batch.total).toBe(2);
    expect(batch.invalid).toBe(1);
  });
});
