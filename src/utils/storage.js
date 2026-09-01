const KEYS = {
  INV: 'forge_inv', PO: 'forge_po', EMP: 'forge_emp', PRD: 'forge_prd', SHP: 'forge_shp',
  CUS: 'forge_cus', SUP: 'forge_sup', LEAD: 'forge_lead', OPP: 'forge_opp', ACT: 'forge_act',
  PRJ: 'forge_prj', TSK: 'forge_tsk', TKT: 'forge_tkt', CTR: 'forge_ctr', APR: 'forge_apr',
  NTF: 'forge_ntf', DOC: 'forge_doc', SESSION: 'forge_session', USERS: 'forge_users', LH: 'forge_lh',
};

function safe(r, fb) { try { return r ? JSON.parse(r) : fb; } catch { return fb; } }
function load(k) { return safe(localStorage.getItem(k), null); }
function save(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} }

export const loadInv = () => load(KEYS.INV);
export const saveInv = (v) => save(KEYS.INV, v);
export const loadPo = () => load(KEYS.PO);
export const savePo = (v) => save(KEYS.PO, v);
export const loadEmp = () => load(KEYS.EMP);
export const saveEmp = (v) => save(KEYS.EMP, v);
export const loadPrd = () => load(KEYS.PRD);
export const savePrd = (v) => save(KEYS.PRD, v);
export const loadShp = () => load(KEYS.SHP);
export const saveShp = (v) => save(KEYS.SHP, v);
export const loadCus = () => load(KEYS.CUS);
export const saveCus = (v) => save(KEYS.CUS, v);
export const loadSup = () => load(KEYS.SUP);
export const saveSup = (v) => save(KEYS.SUP, v);
export const loadLead = () => load(KEYS.LEAD);
export const saveLead = (v) => save(KEYS.LEAD, v);
export const loadOpp = () => load(KEYS.OPP);
export const saveOpp = (v) => save(KEYS.OPP, v);
export const loadAct = () => load(KEYS.ACT);
export const saveAct = (v) => save(KEYS.ACT, v);
export const loadPrj = () => load(KEYS.PRJ);
export const savePrj = (v) => save(KEYS.PRJ, v);
export const loadTsk = () => load(KEYS.TSK);
export const saveTsk = (v) => save(KEYS.TSK, v);
export const loadTkt = () => load(KEYS.TKT);
export const saveTkt = (v) => save(KEYS.TKT, v);
export const loadCtr = () => load(KEYS.CTR);
export const saveCtr = (v) => save(KEYS.CTR, v);
export const loadApr = () => load(KEYS.APR);
export const saveApr = (v) => save(KEYS.APR, v);
export const loadNtf = () => load(KEYS.NTF);
export const saveNtf = (v) => save(KEYS.NTF, v);
export const loadDoc = () => load(KEYS.DOC);
export const saveDoc = (v) => save(KEYS.DOC, v);
export const loadUsers = () => load(KEYS.USERS);
export const saveUsers = (v) => save(KEYS.USERS, v);
export const loadLh = () => load(KEYS.LH);
export const saveLh = (v) => save(KEYS.LH, v);
export const loadSession = () => load(KEYS.SESSION);
export const saveSession = (v) => save(KEYS.SESSION, v);
export const clearSession = () => { try { localStorage.removeItem(KEYS.SESSION); } catch {} };
export function clearAllData() {
  Object.values(KEYS).forEach((k) => { try { localStorage.removeItem(k); } catch {} });
}
