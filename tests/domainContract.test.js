import { describe, it, expect } from 'vitest';
import { createContract0, validateContract0, deriveContract0, validateContractBatch } from '../src/domain/contract.js';

describe('contract domain', () => {
  it('creates and validates a Contract record', () => {
    const record = createContract0({ name: 'Sample Contract' });
    expect(record.id).toBeTruthy();
    expect(validateContract0(record).valid).toBe(true);
    expect(validateContract0(null).valid).toBe(false);
  });

  it('derives availability metrics and validates batches', () => {
    const record = createContract0({ qty: 10, reserved: 2, unitCost: 5 });
    const derived = deriveContract0(record);
    expect(derived.available).toBe(8);
    expect(derived.extendedValue).toBe(40);
    const batch = validateContractBatch([record, { name: '' }]);
    expect(batch.total).toBe(2);
    expect(batch.invalid).toBe(1);
  });
});
