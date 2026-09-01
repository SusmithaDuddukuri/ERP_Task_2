/** Role-based access control */

import { ROLES } from '../data/seed.js';

const MODULE_ACCESS = {
  super_admin: ['*'],
  administrator: ['*'],
  // admin UI is covered by * above
  manager: ['dashboard', 'crm', 'customers', 'products', 'inventory', 'orders', 'shipping', 'suppliers', 'projects', 'tickets', 'contracts', 'approvals', 'documents', 'notifications', 'hr', 'reports'],
  sales: ['dashboard', 'crm', 'customers', 'products', 'orders', 'notifications', 'documents'],
  procurement: ['dashboard', 'suppliers', 'orders', 'products', 'inventory', 'shipping', 'approvals', 'notifications', 'documents'],
  finance: ['dashboard', 'customers', 'suppliers', 'orders', 'approvals', 'contracts', 'notifications', 'documents', 'reports'],
  hr: ['dashboard', 'hr', 'approvals', 'notifications', 'documents'],
  warehouse: ['dashboard', 'inventory', 'products', 'shipping', 'orders', 'notifications'],
  manufacturing: ['dashboard', 'inventory', 'products', 'projects', 'notifications'],
  quality: ['dashboard', 'products', 'inventory', 'tickets', 'notifications', 'documents'],
  employee: ['dashboard', 'notifications', 'hr'],
  viewer: ['dashboard', 'notifications'],
};

export function getRoleDef(roleId) {
  return ROLES.find((r) => r.id === roleId) || ROLES.find((r) => r.id === 'viewer');
}

export function canAccessModule(roleId, moduleId) {
  const list = MODULE_ACCESS[roleId] || MODULE_ACCESS.viewer;
  return list.includes('*') || list.includes(moduleId);
}

export function canPerform(roleId, action) {
  const role = getRoleDef(roleId);
  const perms = role?.permissions || ['view'];
  return perms.includes('*') || perms.includes('manage') || perms.includes(action);
}

export function isAdminRole(roleId) {
  return roleId === 'super_admin' || roleId === 'administrator';
}
