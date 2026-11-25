import { describe, it, expect } from 'vitest';
import { createEmployee0, validateEmployee0, deriveEmployee0, validateEmployeeBatch } from '../src/domain/employee.js';

describe('employee domain', () => {
  it('creates and validates a Employee record', () => {
    const record = createEmployee0({ name: 'Sample Employee' });
    expect(record.id).toBeTruthy();
    expect(validateEmployee0(record).valid).toBe(true);
    expect(validateEmployee0(null).valid).toBe(false);
  });

  it('derives availability metrics and validates batches', () => {
    const record = createEmployee0({ qty: 10, reserved: 2, unitCost: 5 });
    const derived = deriveEmployee0(record);
    expect(derived.available).toBe(8);
    expect(derived.extendedValue).toBe(40);
    const batch = validateEmployeeBatch([record, { name: '' }]);
    expect(batch.total).toBe(2);
    expect(batch.invalid).toBe(1);
  });
});
