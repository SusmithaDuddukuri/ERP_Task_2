import { describe, it, expect } from 'vitest';
import { createDocument0, validateDocument0, deriveDocument0, validateDocumentBatch } from '../src/domain/document.js';

describe('document domain', () => {
  it('creates and validates a Document record', () => {
    const record = createDocument0({ name: 'Sample Document' });
    expect(record.id).toBeTruthy();
    expect(validateDocument0(record).valid).toBe(true);
    expect(validateDocument0(null).valid).toBe(false);
  });

  it('derives availability metrics and validates batches', () => {
    const record = createDocument0({ qty: 10, reserved: 2, unitCost: 5 });
    const derived = deriveDocument0(record);
    expect(derived.available).toBe(8);
    expect(derived.extendedValue).toBe(40);
    const batch = validateDocumentBatch([record, { name: '' }]);
    expect(batch.total).toBe(2);
    expect(batch.invalid).toBe(1);
  });
});
