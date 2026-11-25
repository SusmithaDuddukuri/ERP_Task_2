import { describe, it, expect } from 'vitest';
import { createWorkOrder0, validateWorkOrder0, deriveWorkOrder0, validateWorkOrderBatch } from '../src/domain/workorder.js';

describe('workorder domain', () => {
  it('creates and validates a WorkOrder record', () => {
    const record = createWorkOrder0({ name: 'Sample WorkOrder' });
    expect(record.id).toBeTruthy();
    expect(validateWorkOrder0(record).valid).toBe(true);
    expect(validateWorkOrder0(null).valid).toBe(false);
  });

  it('derives availability metrics and validates batches', () => {
    const record = createWorkOrder0({ qty: 10, reserved: 2, unitCost: 5 });
    const derived = deriveWorkOrder0(record);
    expect(derived.available).toBe(8);
    expect(derived.extendedValue).toBe(40);
    const batch = validateWorkOrderBatch([record, { name: '' }]);
    expect(batch.total).toBe(2);
    expect(batch.invalid).toBe(1);
  });
});
