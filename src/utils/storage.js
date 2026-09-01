const K = {
  INV: 'forge_inv',
  PO: 'forge_po',
  EMP: 'forge_emp',
  PRD: 'forge_prd',
  SHP: 'forge_shp',
  SESSION: 'forge_session',
};

function safe(r, fb) {
  try { return r ? JSON.parse(r) : fb; } catch { return fb; }
}

export const loadInv = () => safe(localStorage.getItem(K.INV), null);
export const saveInv = (v) => { try { localStorage.setItem(K.INV, JSON.stringify(v)); } catch {} };

export const loadPo = () => safe(localStorage.getItem(K.PO), null);
export const savePo = (v) => { try { localStorage.setItem(K.PO, JSON.stringify(v)); } catch {} };

export const loadEmp = () => safe(localStorage.getItem(K.EMP), null);
export const saveEmp = (v) => { try { localStorage.setItem(K.EMP, JSON.stringify(v)); } catch {} };

export const loadPrd = () => safe(localStorage.getItem(K.PRD), null);
export const savePrd = (v) => { try { localStorage.setItem(K.PRD, JSON.stringify(v)); } catch {} };

export const loadShp = () => safe(localStorage.getItem(K.SHP), null);
export const saveShp = (v) => { try { localStorage.setItem(K.SHP, JSON.stringify(v)); } catch {} };

export const loadSession = () => safe(localStorage.getItem(K.SESSION), null);
export const saveSession = (v) => { try { localStorage.setItem(K.SESSION, JSON.stringify(v)); } catch {} };
export const clearSession = () => { try { localStorage.removeItem(K.SESSION); } catch {} };

export function clearAllDemo() {
  Object.values(K).forEach((k) => { try { localStorage.removeItem(k); } catch {} });
}
