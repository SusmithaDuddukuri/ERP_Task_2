import { describe, it, expect } from 'vitest';
import { loadInv, loadSession, clearAllData } from '../src/utils/storage.js';

describe('storage', () => {
  it('handles missing localStorage safely', () => {
    expect(loadInv()).toBeNull();
    expect(loadSession()).toBeNull();
    expect(() => clearAllData()).not.toThrow();
  });
});
