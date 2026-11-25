import { describe, it, expect } from 'vitest';
import { createInspection0, validateInspection0, deriveInspection0, validateInspectionBatch } from '../src/domain/inspection.js';

describe('inspection domain', () => {
  it('creates and validates a Inspection record', () => {
    const record = createInspection0({ name: 'Sample Inspection' });
    expect(record.id).toBeTruthy();
    expect(validateInspection0(record).valid).toBe(true);
    expect(validateInspection0(null).valid).toBe(false);
  });

  it('derives availability metrics and validates batches', () => {
    const record = createInspection0({ qty: 10, reserved: 2, unitCost: 5 });
    const derived = deriveInspection0(record);
    expect(derived.available).toBe(8);
    expect(derived.extendedValue).toBe(40);
    const batch = validateInspectionBatch([record, { name: '' }]);
    expect(batch.total).toBe(2);
    expect(batch.invalid).toBe(1);
  });
});
