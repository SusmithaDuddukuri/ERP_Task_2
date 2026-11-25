import { describe, it, expect } from 'vitest';
import { getRoleDef, canAccessModule, canPerform, isAdminRole } from '../src/auth/rbac.js';

describe('rbac', () => {
  it('resolves roles and checks module permissions', () => {
    expect(getRoleDef('unknown').id).toBe('viewer');
    expect(canAccessModule('super_admin', 'hr')).toBe(true);
    expect(canAccessModule('viewer', 'finance')).toBe(false);
    expect(canPerform('administrator', 'edit')).toBe(true);
    expect(isAdminRole('administrator')).toBe(true);
    expect(isAdminRole('sales')).toBe(false);
  });
});
