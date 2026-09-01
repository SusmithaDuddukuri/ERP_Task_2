const K = { INV: 'forge_inv', PO: 'forge_po', EMP: 'forge_emp' };
function safe(r, fb) { try { return r ? JSON.parse(r) : fb; } catch { return fb; } }
export const loadInv = () => safe(localStorage.getItem(K.INV), null);
export const saveInv = (v) => { try { localStorage.setItem(K.INV, JSON.stringify(v)); } catch {} };
export const loadPo = () => safe(localStorage.getItem(K.PO), null);
export const savePo = (v) => { try { localStorage.setItem(K.PO, JSON.stringify(v)); } catch {} };
export const loadEmp = () => safe(localStorage.getItem(K.EMP), null);
export const saveEmp = (v) => { try { localStorage.setItem(K.EMP, JSON.stringify(v)); } catch {} };
