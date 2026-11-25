import { describe, it, expect } from 'vitest';
import { createCostCenter0, validateCostCenter0, deriveCostCenter0, validateCostCenterBatch } from '../src/domain/costcenter.js';

describe('costcenter domain', () => {
  it('creates and validates a CostCenter record', () => {
    const record = createCostCenter0({ name: 'Sample CostCenter' });
    expect(record.id).toBeTruthy();
    expect(validateCostCenter0(record).valid).toBe(true);
    expect(validateCostCenter0(null).valid).toBe(false);
  });

  it('derives availability metrics and validates batches', () => {
    const record = createCostCenter0({ qty: 10, reserved: 2, unitCost: 5 });
    const derived = deriveCostCenter0(record);
    expect(derived.available).toBe(8);
    expect(derived.extendedValue).toBe(40);
    const batch = validateCostCenterBatch([record, { name: '' }]);
    expect(batch.total).toBe(2);
    expect(batch.invalid).toBe(1);
  });
});
