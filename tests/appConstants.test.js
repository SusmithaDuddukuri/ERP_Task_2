import { describe, it, expect } from 'vitest';
import { APP_NAME, WAREHOUSES, DEPARTMENTS, PO_STATUS_FLOW } from '../src/constants/app.js';

describe('app constants', () => {
  it('exposes core ERP configuration constants', () => {
    expect(APP_NAME).toBe('ForgeERP');
    expect(WAREHOUSES.length).toBeGreaterThan(0);
    expect(DEPARTMENTS.length).toBeGreaterThan(0);
    expect(PO_STATUS_FLOW.Draft).toBe('Submitted');
  });
});
