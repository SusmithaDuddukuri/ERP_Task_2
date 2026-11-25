import { describe, it, expect } from 'vitest';
import { createWarehouse0, validateWarehouse0, deriveWarehouse0, validateWarehouseBatch } from '../src/domain/warehouse.js';

describe('warehouse domain', () => {
  it('creates and validates a Warehouse record', () => {
    const record = createWarehouse0({ name: 'Sample Warehouse' });
    expect(record.id).toBeTruthy();
    expect(validateWarehouse0(record).valid).toBe(true);
    expect(validateWarehouse0(null).valid).toBe(false);
  });

  it('derives availability metrics and validates batches', () => {
    const record = createWarehouse0({ qty: 10, reserved: 2, unitCost: 5 });
    const derived = deriveWarehouse0(record);
    expect(derived.available).toBe(8);
    expect(derived.extendedValue).toBe(40);
    const batch = validateWarehouseBatch([record, { name: '' }]);
    expect(batch.total).toBe(2);
    expect(batch.invalid).toBe(1);
  });
});
