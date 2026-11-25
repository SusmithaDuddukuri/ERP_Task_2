import { describe, it, expect } from 'vitest';
import { createInvoice0, validateInvoice0, deriveInvoice0, validateInvoiceBatch } from '../src/domain/invoice.js';

describe('invoice domain', () => {
  it('creates and validates a Invoice record', () => {
    const record = createInvoice0({ name: 'Sample Invoice' });
    expect(record.id).toBeTruthy();
    expect(validateInvoice0(record).valid).toBe(true);
    expect(validateInvoice0(null).valid).toBe(false);
  });

  it('derives availability metrics and validates batches', () => {
    const record = createInvoice0({ qty: 10, reserved: 2, unitCost: 5 });
    const derived = deriveInvoice0(record);
    expect(derived.available).toBe(8);
    expect(derived.extendedValue).toBe(40);
    const batch = validateInvoiceBatch([record, { name: '' }]);
    expect(batch.total).toBe(2);
    expect(batch.invalid).toBe(1);
  });
});
