import { describe, it, expect } from 'vitest';
import { createAsset0, validateAsset0, deriveAsset0, validateAssetBatch } from '../src/domain/asset.js';

describe('asset domain', () => {
  it('creates and validates a Asset record', () => {
    const record = createAsset0({ name: 'Sample Asset' });
    expect(record.id).toBeTruthy();
    expect(validateAsset0(record).valid).toBe(true);
    expect(validateAsset0(null).valid).toBe(false);
  });

  it('derives availability metrics and validates batches', () => {
    const record = createAsset0({ qty: 10, reserved: 2, unitCost: 5 });
    const derived = deriveAsset0(record);
    expect(derived.available).toBe(8);
    expect(derived.extendedValue).toBe(40);
    const batch = validateAssetBatch([record, { name: '' }]);
    expect(batch.total).toBe(2);
    expect(batch.invalid).toBe(1);
  });
});
