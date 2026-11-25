import { describe, it, expect } from 'vitest';
import { formatMoney, formatDate, uid } from '../src/utils/formatters.js';

describe('formatters', () => {
  it('formats money and dates cleanly', () => {
    expect(formatMoney(125)).toBe('$125.00');
    expect(formatMoney(null)).toBe('$0.00');
    expect(formatDate('2026-01-15T00:00:00.000Z')).toContain('2026');
    expect(uid('po')).toContain('po_');
  });
});
