import { describe, it, expect } from 'vitest';
import { createSalesOrder0, validateSalesOrder0, deriveSalesOrder0, validateSalesOrderBatch } from '../src/domain/salesorder.js';

describe('salesorder domain', () => {
  it('creates and validates a SalesOrder record', () => {
    const record = createSalesOrder0({ name: 'Sample SalesOrder' });
    expect(record.id).toBeTruthy();
    expect(validateSalesOrder0(record).valid).toBe(true);
    expect(validateSalesOrder0(null).valid).toBe(false);
  });

  it('derives availability metrics and validates batches', () => {
    const record = createSalesOrder0({ qty: 10, reserved: 2, unitCost: 5 });
    const derived = deriveSalesOrder0(record);
    expect(derived.available).toBe(8);
    expect(derived.extendedValue).toBe(40);
    const batch = validateSalesOrderBatch([record, { name: '' }]);
    expect(batch.total).toBe(2);
    expect(batch.invalid).toBe(1);
  });
});
