import { describe, it, expect } from 'vitest';
import { createScorecard0, validateScorecard0, deriveScorecard0, validateScorecardBatch } from '../src/domain/scorecard.js';

describe('scorecard domain', () => {
  it('creates and validates a Scorecard record', () => {
    const record = createScorecard0({ name: 'Sample Scorecard' });
    expect(record.id).toBeTruthy();
    expect(validateScorecard0(record).valid).toBe(true);
    expect(validateScorecard0(null).valid).toBe(false);
  });

  it('derives availability metrics and validates batches', () => {
    const record = createScorecard0({ qty: 10, reserved: 2, unitCost: 5 });
    const derived = deriveScorecard0(record);
    expect(derived.available).toBe(8);
    expect(derived.extendedValue).toBe(40);
    const batch = validateScorecardBatch([record, { name: '' }]);
    expect(batch.total).toBe(2);
    expect(batch.invalid).toBe(1);
  });
});
