import { describe, it, expect } from 'vitest';
import { createTransfer0, validateTransfer0, deriveTransfer0, validateTransferBatch } from '../src/domain/transfer.js';

describe('transfer domain', () => {
  it('creates and validates a Transfer record', () => {
    const record = createTransfer0({ name: 'Sample Transfer' });
    expect(record.id).toBeTruthy();
    expect(validateTransfer0(record).valid).toBe(true);
    expect(validateTransfer0(null).valid).toBe(false);
  });

  it('derives availability metrics and validates batches', () => {
    const record = createTransfer0({ qty: 10, reserved: 2, unitCost: 5 });
    const derived = deriveTransfer0(record);
    expect(derived.available).toBe(8);
    expect(derived.extendedValue).toBe(40);
    const batch = validateTransferBatch([record, { name: '' }]);
    expect(batch.total).toBe(2);
    expect(batch.invalid).toBe(1);
  });
});
