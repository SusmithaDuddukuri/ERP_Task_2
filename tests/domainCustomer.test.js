import { describe, it, expect } from 'vitest';
import { createCustomer0, validateCustomer0, deriveCustomer0, validateCustomerBatch } from '../src/domain/customer.js';

describe('customer domain', () => {
  it('creates and validates a Customer record', () => {
    const record = createCustomer0({ name: 'Sample Customer' });
    expect(record.id).toBeTruthy();
    expect(validateCustomer0(record).valid).toBe(true);
    expect(validateCustomer0(null).valid).toBe(false);
  });

  it('derives availability metrics and validates batches', () => {
    const record = createCustomer0({ qty: 10, reserved: 2, unitCost: 5 });
    const derived = deriveCustomer0(record);
    expect(derived.available).toBe(8);
    expect(derived.extendedValue).toBe(40);
    const batch = validateCustomerBatch([record, { name: '' }]);
    expect(batch.total).toBe(2);
    expect(batch.invalid).toBe(1);
  });
});
