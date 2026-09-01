import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
  LayoutDashboard, Package, ShoppingCart, Users, Search, Menu, Bell, Plus,
  X, Warehouse, AlertTriangle, ChevronRight, Trash2, Pencil, Check, LogOut,
  Truck, Box, Shield, User, Building2, Handshake, FolderKanban, Headset,
  FileText, CheckSquare, Settings, Globe, Command, Briefcase, Factory
} from 'lucide-react';
import {
  SEED_PRODUCTS, SEED_INVENTORY, SEED_SUPPLIERS, SEED_POS, SEED_EMPLOYEES,
  SEED_USERS, SEED_SHIPMENTS, SEED_CUSTOMERS, SEED_LEADS, SEED_OPPORTUNITIES,
  SEED_ACTIVITIES, SEED_PROJECTS, SEED_TASKS, SEED_TICKETS, SEED_CONTRACTS,
  SEED_APPROVALS, SEED_NOTIFICATIONS, SEED_DOCUMENTS, SEED_LOGIN_HISTORY,
  WAREHOUSES, PO_STATUS, SHIP_STATUS, DEPTS, CATEGORIES, LEAD_STATUS, OPP_STAGES,
  TICKET_STATUS, PROJECT_STATUS, TASK_STATUS, CONTRACT_STATUS, APPROVAL_STATUS, ROLES
} from './data/seed';
import {
  loadInv, saveInv, loadPo, savePo, loadEmp, saveEmp, loadPrd, savePrd,
  loadShp, saveShp, loadCus, saveCus, loadSup, saveSup, loadLead, saveLead,
  loadOpp, saveOpp, loadAct, saveAct, loadPrj, savePrj, loadTsk, saveTsk,
  loadTkt, saveTkt, loadCtr, saveCtr, loadApr, saveApr, loadNtf, saveNtf,
  loadDoc, saveDoc, loadUsers, saveUsers, loadLh, saveLh,
  loadSession, saveSession, clearSession, clearAllData
} from './utils/storage';
import { formatMoney, formatDate, uid } from './utils/formatters';
import { availableQty, adjustStock, lowStock } from './engine/inventoryEngine';
import { nextPoStatus, advancePo, poTotal } from './engine/purchaseEngine';
import { canAccessModule, canPerform, isAdminRole } from './auth/rbac';

const NAV_GROUPS = [
  { label: 'Overview', items: [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, module: 'dashboard' },
    { id: 'executive', label: 'Executive', icon: Briefcase, module: 'reports' },
  ]},
  { label: 'CRM & Sales', items: [
    { id: 'leads', label: 'Leads', icon: Handshake, module: 'crm' },
    { id: 'opportunities', label: 'Opportunities', icon: FolderKanban, module: 'crm' },
    { id: 'customers', label: 'Customers', icon: Building2, module: 'customers' },
  ]},
  { label: 'Catalog & Stock', items: [
    { id: 'products', label: 'Products', icon: Box, module: 'products' },
    { id: 'inventory', label: 'Inventory', icon: Package, module: 'inventory' },
  ]},
  { label: 'Supply Chain', items: [
    { id: 'orders', label: 'Purchase Orders', icon: ShoppingCart, module: 'orders' },
    { id: 'suppliers', label: 'Suppliers', icon: Factory, module: 'suppliers' },
    { id: 'shipping', label: 'Shipping', icon: Truck, module: 'shipping' },
  ]},
  { label: 'Operations', items: [
    { id: 'projects', label: 'Projects', icon: FolderKanban, module: 'projects' },
    { id: 'tickets', label: 'Service Desk', icon: Headset, module: 'tickets' },
    { id: 'contracts', label: 'Contracts', icon: FileText, module: 'contracts' },
    { id: 'approvals', label: 'Approvals', icon: CheckSquare, module: 'approvals' },
    { id: 'documents', label: 'Documents', icon: FileText, module: 'documents' },
  ]},
  { label: 'People', items: [
    { id: 'hr', label: 'Employees', icon: Users, module: 'hr' },
  ]},
  { label: 'System', items: [
    { id: 'notifications', label: 'Notifications', icon: Bell, module: 'notifications' },
    { id: 'admin', label: 'Administration', icon: Settings, module: 'dashboard' },
  ]},
];

const poColor = { Draft: 'bg-slate-700/60 text-slate-300', Submitted: 'bg-blue-900/50 text-blue-300', Approved: 'bg-amber-900/40 text-amber-300', Received: 'bg-emerald-900/40 text-emerald-300', Cancelled: 'bg-rose-900/40 text-rose-300' };
const shipColor = { Pending: 'bg-slate-700/60 text-slate-300', Picked: 'bg-blue-900/50 text-blue-300', 'In Transit': 'bg-amber-900/40 text-amber-300', Delivered: 'bg-emerald-900/40 text-emerald-300', Cancelled: 'bg-rose-900/40 text-rose-300' };

function Toast({ toasts, onDismiss }) {
  if (!toasts.length) return null;
  return (
    <div className="fixed bottom-4 right-4 z-50 space-y-2 w-80 max-w-[calc(100vw-2rem)]">
      {toasts.map((t) => (
        <div key={t.id} className="panel rounded-lg px-3.5 py-3 flex gap-3 shadow-lg border-l-4 border-l-orange-500 fade-in">
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white">{t.title}</p>
            {t.message && <p className="text-xs text-slate-400 mt-0.5 truncate">{t.message}</p>}
          </div>
          <button type="button" onClick={() => onDismiss(t.id)} className="text-slate-500 hover:text-white shrink-0"><X className="w-4 h-4" /></button>
        </div>
      ))}
    </div>
  );
}

function Modal({ open, onClose, title, children, wide }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop" onClick={onClose}>
      <div role="dialog" aria-modal="true" className={`relative panel rounded-xl w-full ${wide ? 'max-w-xl' : 'max-w-md'} max-h-[90vh] overflow-y-auto shadow-2xl fade-in`} onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800">
          <h2 className="font-semibold text-white text-base">{title}</h2>
          <button type="button" onClick={onClose} className="p-1.5 rounded-md hover:bg-slate-800 text-slate-400" aria-label="Close"><X className="w-4 h-4" /></button>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}

function ConfirmDialog({ open, title, message, onConfirm, onCancel }) {
  if (!open) return null;
  return (
    <Modal open={open} onClose={onCancel} title={title}>
      <p className="text-sm text-slate-300 mb-4">{message}</p>
      <div className="flex justify-end gap-2">
        <button type="button" onClick={onCancel} className="btn-ghost">Cancel</button>
        <button type="button" onClick={onConfirm} className="btn-danger">Confirm</button>
      </div>
    </Modal>
  );
}

function LoginScreen({ onLogin, toast }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(true);

  const submit = (e) => {
    e.preventDefault();
    const users = loadUsers() || SEED_USERS;
    const user = users.find((u) => u.username === username.trim().toLowerCase() && u.password === password && u.status !== 'Inactive');
    if (!user) {
      toast('Sign in failed', 'Invalid credentials or inactive account');
      const lh = loadLh() || SEED_LOGIN_HISTORY;
      saveLh([{ id: uid('lh'), username: username.trim(), at: new Date().toISOString(), success: false, ip: 'local' }, ...lh].slice(0, 50));
      return;
    }
    onLogin(user, remember);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#0c0f14]">
      <div className="panel rounded-xl w-full max-w-sm p-6 shadow-xl">
        <div className="flex items-center gap-2.5 mb-6">
          <div className="w-10 h-10 rounded-lg bg-orange-600 flex items-center justify-center font-bold text-white">F</div>
          <div>
            <div className="font-semibold text-white">ForgeERP</div>
            <div className="text-xs text-slate-500">Enterprise Resource Planning</div>
          </div>
        </div>
        <form onSubmit={submit} className="space-y-3">
          <div>
            <label className="block text-xs text-slate-400 mb-1">Username</label>
            <input className="input-field" value={username} onChange={(e) => setUsername(e.target.value)} autoComplete="username" autoFocus required />
          </div>
          <div>
            <label className="block text-xs text-slate-400 mb-1">Password</label>
            <input type="password" className="input-field" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" required />
          </div>
          <label className="flex items-center gap-2 text-xs text-slate-400 cursor-pointer">
            <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} className="rounded border-slate-600" />
            Remember me
          </label>
          <button type="submit" className="btn-primary w-full mt-1">Sign in</button>
        </form>
      </div>
    </div>
  );
}

function EmptyState({ message, actionLabel, onAction }) {
  return (
    <div className="p-12 text-center">
      <p className="text-sm text-slate-500 mb-3">{message}</p>
      {actionLabel && onAction && (
        <button type="button" onClick={onAction} className="btn-primary inline-flex items-center gap-1.5"><Plus className="w-4 h-4" /> {actionLabel}</button>
      )}
    </div>
  );
}

export default function App() {
  const [user, setUser] = useState(() => loadSession());
  const [view, setView] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileNav, setMobileNav] = useState(false);
  const [query, setQuery] = useState('');
  const [toasts, setToasts] = useState([]);
  const [cmdOpen, setCmdOpen] = useState(false);
  const [cmdQuery, setCmdQuery] = useState('');
  const [confirm, setConfirm] = useState(null);
  const [ntfOpen, setNtfOpen] = useState(false);

  const [whFilter, setWhFilter] = useState('All');
  const [poFilter, setPoFilter] = useState('All');
  const [shipFilter, setShipFilter] = useState('All');
  const [leadFilter, setLeadFilter] = useState('All');
  const [ticketFilter, setTicketFilter] = useState('All');

  // entity state
  const [products, setProducts] = useState(() => loadPrd() || SEED_PRODUCTS);
  const [inventory, setInventory] = useState(() => loadInv() || SEED_INVENTORY);
  const [purchaseOrders, setPurchaseOrders] = useState(() => loadPo() || SEED_POS);
  const [employees, setEmployees] = useState(() => loadEmp() || SEED_EMPLOYEES);
  const [shipments, setShipments] = useState(() => loadShp() || SEED_SHIPMENTS);
  const [customers, setCustomers] = useState(() => loadCus() || SEED_CUSTOMERS);
  const [suppliers, setSuppliers] = useState(() => loadSup() || SEED_SUPPLIERS);
  const [leads, setLeads] = useState(() => loadLead() || SEED_LEADS);
  const [opportunities, setOpportunities] = useState(() => loadOpp() || SEED_OPPORTUNITIES);
  const [activities, setActivities] = useState(() => loadAct() || SEED_ACTIVITIES);
  const [projects, setProjects] = useState(() => loadPrj() || SEED_PROJECTS);
  const [tasks, setTasks] = useState(() => loadTsk() || SEED_TASKS);
  const [tickets, setTickets] = useState(() => loadTkt() || SEED_TICKETS);
  const [contracts, setContracts] = useState(() => loadCtr() || SEED_CONTRACTS);
  const [approvals, setApprovals] = useState(() => loadApr() || SEED_APPROVALS);
  const [notifications, setNotifications] = useState(() => loadNtf() || SEED_NOTIFICATIONS);
  const [documents, setDocuments] = useState(() => loadDoc() || SEED_DOCUMENTS);
  const [users, setUsers] = useState(() => loadUsers() || SEED_USERS);
  const [loginHistory, setLoginHistory] = useState(() => loadLh() || SEED_LOGIN_HISTORY);

  // modals
  const [poModal, setPoModal] = useState(null);
  const [empModal, setEmpModal] = useState(null);
  const [prdModal, setPrdModal] = useState(null);
  const [shipModal, setShipModal] = useState(null);
  const [cusModal, setCusModal] = useState(null);
  const [supModal, setSupModal] = useState(null);
  const [leadModal, setLeadModal] = useState(null);
  const [oppModal, setOppModal] = useState(null);
  const [tktModal, setTktModal] = useState(null);
  const [prjModal, setPrjModal] = useState(null);
  const [ctrModal, setCtrModal] = useState(null);
  const [profileOpen, setProfileOpen] = useState(false);
  const [pwdModal, setPwdModal] = useState(false);
  const [pwdForm, setPwdForm] = useState({ current: '', next: '', confirm: '' });

  const [poForm, setPoForm] = useState({ supplierId: '', productId: '', qty: 10, unitCost: 10, notes: '' });
  const [empForm, setEmpForm] = useState({ name: '', department: 'Operations', role: '', email: '', status: 'Active' });
  const [prdForm, setPrdForm] = useState({ sku: '', name: '', category: 'Fasteners', unitCost: 1, price: 2, reorderAt: 10, active: true });
  const [shipForm, setShipForm] = useState({ poId: '', carrier: 'FedEx', tracking: '', status: 'Pending', shipDate: '', eta: '', destination: 'Main DC' });
  const [cusForm, setCusForm] = useState({ name: '', company: '', email: '', phone: '', city: '', state: '', country: 'US', creditLimit: 10000, paymentTerms: 'Net 30', type: 'Wholesale', status: 'Active' });
  const [supForm, setSupForm] = useState({ name: '', contact: '', email: '', phone: '', category: 'Components', rating: 4, status: 'Active', paymentTerms: 'Net 30' });
  const [leadForm, setLeadForm] = useState({ name: '', company: '', email: '', phone: '', source: 'Website', industry: '', status: 'New', score: 50, value: 0, owner: '' });
  const [oppForm, setOppForm] = useState({ name: '', customerId: '', stage: 'New', value: 0, probability: 20, closeDate: '', owner: '' });
  const [tktForm, setTktForm] = useState({ subject: '', customerId: '', priority: 'Medium', status: 'Open', category: 'General' });
  const [prjForm, setPrjForm] = useState({ name: '', status: 'Planning', budget: 0, start: '', end: '', owner: '' });
  const [ctrForm, setCtrForm] = useState({ name: '', type: 'Customer', partyId: '', value: 0, start: '', end: '', renewal: '', status: 'Draft' });

  const role = user?.role || 'viewer';
  const admin = isAdminRole(role);

  useEffect(() => { saveInv(inventory); }, [inventory]);
  useEffect(() => { savePo(purchaseOrders); }, [purchaseOrders]);
  useEffect(() => { saveEmp(employees); }, [employees]);
  useEffect(() => { savePrd(products); }, [products]);
  useEffect(() => { saveShp(shipments); }, [shipments]);
  useEffect(() => { saveCus(customers); }, [customers]);
  useEffect(() => { saveSup(suppliers); }, [suppliers]);
  useEffect(() => { saveLead(leads); }, [leads]);
  useEffect(() => { saveOpp(opportunities); }, [opportunities]);
  useEffect(() => { saveAct(activities); }, [activities]);
  useEffect(() => { savePrj(projects); }, [projects]);
  useEffect(() => { saveTsk(tasks); }, [tasks]);
  useEffect(() => { saveTkt(tickets); }, [tickets]);
  useEffect(() => { saveCtr(contracts); }, [contracts]);
  useEffect(() => { saveApr(approvals); }, [approvals]);
  useEffect(() => { saveNtf(notifications); }, [notifications]);
  useEffect(() => { saveDoc(documents); }, [documents]);
  useEffect(() => { saveUsers(users); }, [users]);
  useEffect(() => { saveLh(loginHistory); }, [loginHistory]);
  useEffect(() => { setMobileNav(false); }, [view]);

  // Ctrl+K command palette
  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCmdOpen(true);
        setCmdQuery('');
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Session timeout 8h
  useEffect(() => {
    if (!user?.at) return;
    const t = setInterval(() => {
      if (Date.now() - (user.at || 0) > 8 * 60 * 60 * 1000) {
        clearSession();
        setUser(null);
        toast('Session expired', 'Please sign in again');
      }
    }, 60000);
    return () => clearInterval(t);
  }, [user]);

  const toast = useCallback((title, message) => {
    const id = Date.now() + Math.random();
    setToasts((p) => [...p.slice(-3), { id, title, message }]);
    setTimeout(() => setToasts((p) => p.filter((t) => t.id !== id)), 3200);
  }, []);

  const productMap = useMemo(() => Object.fromEntries(products.map((p) => [p.id, p])), [products]);
  const supplierMap = useMemo(() => Object.fromEntries(suppliers.map((s) => [s.id, s])), [suppliers]);
  const customerMap = useMemo(() => Object.fromEntries(customers.map((c) => [c.id, c])), [customers]);

  const low = useMemo(() => lowStock(inventory, products), [inventory, products]);
  const totalUnits = useMemo(() => inventory.reduce((s, r) => s + availableQty(r), 0), [inventory]);
  const openPos = useMemo(() => purchaseOrders.filter((p) => !['Received', 'Cancelled'].includes(p.status)).length, [purchaseOrders]);
  const openShips = useMemo(() => shipments.filter((s) => !['Delivered', 'Cancelled'].includes(s.status)).length, [shipments]);
  const pendingApr = useMemo(() => approvals.filter((a) => a.status === 'Pending').length, [approvals]);
  const unreadNtf = useMemo(() => notifications.filter((n) => !n.read).length, [notifications]);
  const invValue = useMemo(() => inventory.reduce((s, r) => {
    const p = productMap[r.productId];
    return s + availableQty(r) * (p?.unitCost || 0);
  }, 0), [inventory, productMap]);

  const q = query.trim().toLowerCase();
  const filteredInv = useMemo(() => {
    let list = inventory;
    if (whFilter !== 'All') list = list.filter((r) => r.warehouse === whFilter);
    if (q) list = list.filter((r) => {
      const p = productMap[r.productId];
      return (p?.name || '').toLowerCase().includes(q) || (p?.sku || '').toLowerCase().includes(q);
    });
    return list;
  }, [inventory, whFilter, q, productMap]);
  const filteredPos = useMemo(() => {
    let list = purchaseOrders;
    if (poFilter !== 'All') list = list.filter((p) => p.status === poFilter);
    if (q) list = list.filter((p) => (supplierMap[p.supplierId]?.name || '').toLowerCase().includes(q) || p.id.toLowerCase().includes(q));
    return list;
  }, [purchaseOrders, poFilter, q, supplierMap]);
  const filteredPrd = useMemo(() => !q ? products : products.filter((p) => p.name.toLowerCase().includes(q) || p.sku.toLowerCase().includes(q)), [products, q]);
  const filteredEmp = useMemo(() => !q ? employees : employees.filter((e) => e.name.toLowerCase().includes(q) || e.email.toLowerCase().includes(q)), [employees, q]);
  const filteredCus = useMemo(() => !q ? customers : customers.filter((c) => c.name.toLowerCase().includes(q) || (c.company || '').toLowerCase().includes(q) || (c.email || '').toLowerCase().includes(q)), [customers, q]);
  const filteredSup = useMemo(() => !q ? suppliers : suppliers.filter((s) => s.name.toLowerCase().includes(q) || (s.contact || '').toLowerCase().includes(q)), [suppliers, q]);
  const filteredLeads = useMemo(() => {
    let list = leads;
    if (leadFilter !== 'All') list = list.filter((l) => l.status === leadFilter);
    if (q) list = list.filter((l) => l.name.toLowerCase().includes(q) || (l.company || '').toLowerCase().includes(q));
    return list;
  }, [leads, leadFilter, q]);
  const filteredShp = useMemo(() => {
    let list = shipments;
    if (shipFilter !== 'All') list = list.filter((s) => s.status === shipFilter);
    if (q) list = list.filter((s) => s.id.toLowerCase().includes(q) || (s.tracking || '').toLowerCase().includes(q));
    return list;
  }, [shipments, shipFilter, q]);
  const filteredTkt = useMemo(() => {
    let list = tickets;
    if (ticketFilter !== 'All') list = list.filter((t) => t.status === ticketFilter);
    if (q) list = list.filter((t) => (t.subject || '').toLowerCase().includes(q) || t.id.toLowerCase().includes(q));
    return list;
  }, [tickets, ticketFilter, q]);

  const handleLogin = (u, remember) => {
    const session = { id: u.id, username: u.username, name: u.name, role: u.role, email: u.email, at: Date.now() };
    setUser(session);
    if (remember) saveSession(session);
    else saveSession(session);
    setLoginHistory((h) => [{ id: uid('lh'), username: u.username, at: new Date().toISOString(), success: true, ip: 'local' }, ...h].slice(0, 50));
    setView('dashboard');
    toast('Welcome', u.name);
  };
  const handleLogout = () => {
    clearSession();
    setUser(null);
    toast('Signed out', '');
  };

  const go = (id) => {
    const item = NAV_GROUPS.flatMap((g) => g.items).find((i) => i.id === id);
    if (item && !canAccessModule(role, item.module) && !admin) {
      toast('Access denied', 'Your role cannot open this module');
      return;
    }
    setView(id);
    setQuery('');
  };

  const receiveStock = (row, amount = 10) => {
    setInventory((inv) => adjustStock(inv, row.id, amount));
    toast('Stock received', `+${amount}`);
  };
  const issueStock = (row, amount = 5) => {
    if (availableQty(row) < amount) { toast('Insufficient stock', ''); return; }
    setInventory((inv) => adjustStock(inv, row.id, -amount));
    toast('Stock issued', `−${amount}`);
  };

  // Product CRUD
  const savePrdForm = (e) => {
    e.preventDefault();
    if (!prdForm.sku.trim() || !prdForm.name.trim()) { toast('Required', 'SKU and name required'); return; }
    if (prdModal === 'new') {
      if (products.some((p) => p.sku.toLowerCase() === prdForm.sku.trim().toLowerCase())) { toast('Duplicate SKU', ''); return; }
      const row = { id: uid('prd'), ...prdForm, sku: prdForm.sku.trim().toUpperCase(), unitCost: Number(prdForm.unitCost), price: Number(prdForm.price), reorderAt: Number(prdForm.reorderAt) };
      setProducts((p) => [row, ...p]);
      setInventory((inv) => [...inv, { id: uid('inv'), productId: row.id, warehouse: 'Main DC', qty: 0, reserved: 0 }]);
      toast('Product created', row.name);
    } else {
      setProducts((p) => p.map((x) => x.id === prdModal.id ? { ...x, ...prdForm, unitCost: Number(prdForm.unitCost), price: Number(prdForm.price), reorderAt: Number(prdForm.reorderAt) } : x));
      toast('Product updated', prdForm.name);
    }
    setPrdModal(null);
  };

  // PO
  const savePoForm = (e) => {
    e.preventDefault();
    const qty = Number(poForm.qty); const unitCost = Number(poForm.unitCost);
    if (!poForm.supplierId || qty <= 0) { toast('Invalid form', ''); return; }
    if (poModal === 'new') {
      const row = { id: uid('po'), supplierId: poForm.supplierId, status: 'Draft', total: qty * unitCost, orderedAt: new Date().toISOString().slice(0, 10), lines: [{ productId: poForm.productId, qty, unitCost }], notes: poForm.notes || '' };
      setPurchaseOrders((p) => [row, ...p]);
      toast('PO created', row.id);
    } else {
      setPurchaseOrders((p) => p.map((x) => x.id === poModal.id ? { ...x, supplierId: poForm.supplierId, total: qty * unitCost, lines: [{ productId: poForm.productId, qty, unitCost }], notes: poForm.notes || '' } : x));
      toast('PO updated', poModal.id);
    }
    setPoModal(null);
  };
  const advancePoRow = (po) => {
    if (['Received', 'Cancelled'].includes(po.status)) return;
    const next = advancePo(po);
    setPurchaseOrders((p) => p.map((x) => x.id === po.id ? next : x));
    if (next.status === 'Received') {
      const line = (po.lines || [])[0];
      if (line) {
        const invRow = inventory.find((r) => r.productId === line.productId);
        if (invRow) setInventory((inv) => adjustStock(inv, invRow.id, line.qty || 0));
      }
      toast('PO received', 'Inventory updated');
    } else toast('Status updated', `${po.status} → ${next.status}`);
  };

  // Customer
  const saveCusForm = (e) => {
    e.preventDefault();
    if (!cusForm.name.trim()) { toast('Name required', ''); return; }
    if (cusModal === 'new') {
      const row = { id: uid('cus'), ...cusForm, creditLimit: Number(cusForm.creditLimit), outstanding: 0 };
      setCustomers((p) => [row, ...p]);
      toast('Customer created', row.name);
    } else {
      setCustomers((p) => p.map((x) => x.id === cusModal.id ? { ...x, ...cusForm, creditLimit: Number(cusForm.creditLimit) } : x));
      toast('Customer updated', cusForm.name);
    }
    setCusModal(null);
  };

  // Supplier
  const saveSupForm = (e) => {
    e.preventDefault();
    if (!supForm.name.trim()) { toast('Name required', ''); return; }
    if (supModal === 'new') {
      const row = { id: uid('sup'), ...supForm, rating: Number(supForm.rating) };
      setSuppliers((p) => [row, ...p]);
      toast('Supplier created', row.name);
    } else {
      setSuppliers((p) => p.map((x) => x.id === supModal.id ? { ...x, ...supForm, rating: Number(supForm.rating) } : x));
      toast('Supplier updated', supForm.name);
    }
    setSupModal(null);
  };

  // Lead
  const saveLeadForm = (e) => {
    e.preventDefault();
    if (!leadForm.name.trim()) { toast('Name required', ''); return; }
    if (leadModal === 'new') {
      const row = { id: uid('lead'), ...leadForm, score: Number(leadForm.score), value: Number(leadForm.value), createdAt: new Date().toISOString().slice(0, 10) };
      setLeads((p) => [row, ...p]);
      toast('Lead created', row.name);
    } else {
      setLeads((p) => p.map((x) => x.id === leadModal.id ? { ...x, ...leadForm, score: Number(leadForm.score), value: Number(leadForm.value) } : x));
      toast('Lead updated', leadForm.name);
    }
    setLeadModal(null);
  };
  const convertLead = (lead) => {
    const cus = { id: uid('cus'), name: lead.name, company: lead.company || lead.name, email: lead.email || '', phone: lead.phone || '', city: '', state: '', country: 'US', creditLimit: 10000, paymentTerms: 'Net 30', type: 'Prospect', status: 'Active', outstanding: 0 };
    setCustomers((p) => [cus, ...p]);
    setLeads((p) => p.map((x) => x.id === lead.id ? { ...x, status: 'Converted' } : x));
    const opp = { id: uid('opp'), name: `${lead.company || lead.name} opportunity`, customerId: cus.id, stage: 'Qualified', value: lead.value || 0, probability: 40, closeDate: '', owner: lead.owner || user?.name };
    setOpportunities((p) => [opp, ...p]);
    toast('Lead converted', 'Customer and opportunity created');
  };

  // Opportunity stage
  const moveOpp = (opp, stage) => {
    setOpportunities((p) => p.map((x) => x.id === opp.id ? { ...x, stage } : x));
    toast('Stage updated', stage);
  };

  // Ticket
  const saveTktForm = (e) => {
    e.preventDefault();
    if (!tktForm.subject.trim()) { toast('Subject required', ''); return; }
    if (tktModal === 'new') {
      const row = { id: uid('tkt'), ...tktForm, createdAt: new Date().toISOString().slice(0, 10), assignee: user?.name };
      setTickets((p) => [row, ...p]);
      toast('Ticket created', row.id);
    } else {
      setTickets((p) => p.map((x) => x.id === tktModal.id ? { ...x, ...tktForm } : x));
      toast('Ticket updated', tktModal.id);
    }
    setTktModal(null);
  };
  const advanceTicket = (t) => {
    const flow = { Open: 'Assigned', Assigned: 'In Progress', 'In Progress': 'Resolved', Resolved: 'Closed' };
    const next = flow[t.status];
    if (!next) return;
    setTickets((p) => p.map((x) => x.id === t.id ? { ...x, status: next } : x));
    toast('Ticket updated', next);
  };

  // Project
  const savePrjForm = (e) => {
    e.preventDefault();
    if (!prjForm.name.trim()) { toast('Name required', ''); return; }
    if (prjModal === 'new') {
      const row = { id: uid('prj'), ...prjForm, budget: Number(prjForm.budget) };
      setProjects((p) => [row, ...p]);
      toast('Project created', row.name);
    } else {
      setProjects((p) => p.map((x) => x.id === prjModal.id ? { ...x, ...prjForm, budget: Number(prjForm.budget) } : x));
      toast('Project updated', prjForm.name);
    }
    setPrjModal(null);
  };

  // Contract
  const saveCtrForm = (e) => {
    e.preventDefault();
    if (!ctrForm.name.trim()) { toast('Name required', ''); return; }
    if (ctrModal === 'new') {
      const row = { id: uid('ctr'), ...ctrForm, value: Number(ctrForm.value) };
      setContracts((p) => [row, ...p]);
      toast('Contract created', row.name);
    } else {
      setContracts((p) => p.map((x) => x.id === ctrModal.id ? { ...x, ...ctrForm, value: Number(ctrForm.value) } : x));
      toast('Contract updated', ctrForm.name);
    }
    setCtrModal(null);
  };

  // Approvals
  const decideApproval = (apr, status) => {
    setApprovals((p) => p.map((x) => x.id === apr.id ? { ...x, status } : x));
    toast(status === 'Approved' ? 'Approved' : 'Rejected', apr.title);
  };

  // Notifications
  const markAllRead = () => setNotifications((p) => p.map((n) => ({ ...n, read: true })));
  const markRead = (id) => setNotifications((p) => p.map((n) => n.id === id ? { ...n, read: true } : n));

  // Emp
  const saveEmpForm = (e) => {
    e.preventDefault();
    if (!empForm.name.trim()) { toast('Name required', ''); return; }
    if (empModal === 'new') {
      const row = { id: uid('emp'), ...empForm, leaveBalance: 12 };
      setEmployees((p) => [row, ...p]);
      toast('Employee added', row.name);
    } else {
      setEmployees((p) => p.map((x) => x.id === empModal.id ? { ...x, ...empForm } : x));
      toast('Employee updated', empForm.name);
    }
    setEmpModal(null);
  };

  // Shipping
  const saveShipForm = (e) => {
    e.preventDefault();
    if (!shipForm.poId) { toast('Select a PO', ''); return; }
    const po = purchaseOrders.find((p) => p.id === shipForm.poId);
    if (shipModal === 'new') {
      const row = { id: uid('shp'), ...shipForm, tracking: shipForm.tracking || `TRK-${Date.now().toString(36).toUpperCase()}`, lines: po?.lines || [] };
      setShipments((p) => [row, ...p]);
      toast('Shipment created', row.id);
    } else {
      setShipments((p) => p.map((x) => x.id === shipModal.id ? { ...x, ...shipForm } : x));
      toast('Shipment updated', shipModal.id);
    }
    setShipModal(null);
  };
  const advanceShip = (ship) => {
    const flow = { Pending: 'Picked', Picked: 'In Transit', 'In Transit': 'Delivered' };
    const next = flow[ship.status];
    if (!next) return;
    setShipments((p) => p.map((x) => x.id === ship.id ? { ...x, status: next } : x));
    toast('Shipment updated', next);
  };

  const changePassword = (e) => {
    e.preventDefault();
    if (pwdForm.next.length < 6) { toast('Password too short', 'Use at least 6 characters'); return; }
    if (pwdForm.next !== pwdForm.confirm) { toast('Mismatch', 'New passwords do not match'); return; }
    const me = users.find((u) => u.id === user.id);
    if (!me || me.password !== pwdForm.current) { toast('Incorrect password', ''); return; }
    setUsers((p) => p.map((u) => u.id === user.id ? { ...u, password: pwdForm.next } : u));
    setPwdModal(false);
    setPwdForm({ current: '', next: '', confirm: '' });
    toast('Password updated', '');
  };

  const resetData = () => {
    if (!admin) { toast('Access denied', ''); return; }
    setConfirm({
      title: 'Reset application data?',
      message: 'This restores seed data and clears local changes. Continue?',
      onConfirm: () => {
        clearAllData();
        setProducts(SEED_PRODUCTS); setInventory(SEED_INVENTORY); setPurchaseOrders(SEED_POS);
        setEmployees(SEED_EMPLOYEES); setShipments(SEED_SHIPMENTS); setCustomers(SEED_CUSTOMERS);
        setSuppliers(SEED_SUPPLIERS); setLeads(SEED_LEADS); setOpportunities(SEED_OPPORTUNITIES);
        setActivities(SEED_ACTIVITIES); setProjects(SEED_PROJECTS); setTasks(SEED_TASKS);
        setTickets(SEED_TICKETS); setContracts(SEED_CONTRACTS); setApprovals(SEED_APPROVALS);
        setNotifications(SEED_NOTIFICATIONS); setDocuments(SEED_DOCUMENTS); setUsers(SEED_USERS);
        setLoginHistory(SEED_LOGIN_HISTORY);
        toast('Data restored', '');
        setConfirm(null);
      },
    });
  };

  const cmdActions = [
    { label: 'Dashboard', action: () => go('dashboard') },
    { label: 'Create customer', action: () => { go('customers'); setCusForm({ name: '', company: '', email: '', phone: '', city: '', state: '', country: 'US', creditLimit: 10000, paymentTerms: 'Net 30', type: 'Wholesale', status: 'Active' }); setCusModal('new'); } },
    { label: 'Create purchase order', action: () => { go('orders'); setPoForm({ supplierId: suppliers[0]?.id || '', productId: products[0]?.id || '', qty: 10, unitCost: products[0]?.unitCost || 10, notes: '' }); setPoModal('new'); } },
    { label: 'Create lead', action: () => { go('leads'); setLeadForm({ name: '', company: '', email: '', phone: '', source: 'Website', industry: '', status: 'New', score: 50, value: 0, owner: user?.name || '' }); setLeadModal('new'); } },
    { label: 'Open inventory', action: () => go('inventory') },
    { label: 'Open products', action: () => go('products') },
    { label: 'Open approvals', action: () => go('approvals') },
    { label: 'Open notifications', action: () => go('notifications') },
    { label: 'Service desk', action: () => go('tickets') },
    { label: 'Projects', action: () => go('projects') },
  ];
  const cmdFiltered = cmdActions.filter((a) => a.label.toLowerCase().includes(cmdQuery.toLowerCase()));

  if (!user) {
    return (
      <>
        <LoginScreen onLogin={handleLogin} toast={toast} />
        <Toast toasts={toasts} onDismiss={(id) => setToasts((p) => p.filter((t) => t.id !== id))} />
      </>
    );
  }

  const visibleNav = NAV_GROUPS.map((g) => ({
    ...g,
    items: g.items.filter((i) => admin || canAccessModule(role, i.module)),
  })).filter((g) => g.items.length);

  const SidebarContent = ({ compact }) => (
    <>
      <div className="h-14 flex items-center gap-2.5 px-3 border-b border-slate-800 shrink-0">
        <div className="w-8 h-8 rounded-lg bg-orange-600 flex items-center justify-center font-bold text-sm text-white">F</div>
        {!compact && (
          <div className="min-w-0">
            <div className="font-semibold text-white text-sm">ForgeERP</div>
            <div className="text-[10px] text-slate-500 truncate">{ROLES.find((r) => r.id === role)?.name || role}</div>
          </div>
        )}
      </div>
      <nav className="flex-1 p-2 space-y-3 overflow-y-auto">
        {visibleNav.map((g) => (
          <div key={g.label}>
            {!compact && <div className="px-3 py-1 text-[10px] uppercase tracking-wider text-slate-600">{g.label}</div>}
            <div className="space-y-0.5">
              {g.items.map((item) => {
                const Icon = item.icon;
                const active = view === item.id;
                return (
                  <button key={item.id} type="button" onClick={() => go(item.id)} className={`nav-item ${active ? 'active' : ''} ${compact ? 'justify-center px-2' : ''}`} title={item.label}>
                    <Icon className="w-4 h-4 shrink-0" />
                    {!compact && <span>{item.label}</span>}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </nav>
      {!compact && (
        <div className="p-2 border-t border-slate-800 space-y-1">
          <button type="button" onClick={() => setProfileOpen(true)} className="nav-item text-xs"><User className="w-3.5 h-3.5" /> {user.name}</button>
          {admin && <button type="button" onClick={resetData} className="nav-item text-xs text-slate-500">Reset data</button>}
          <button type="button" onClick={handleLogout} className="nav-item text-xs text-rose-400"><LogOut className="w-3.5 h-3.5" /> Sign out</button>
        </div>
      )}
    </>
  );

  return (
    <div className="min-h-screen flex text-slate-200">
      <aside className={`hidden md:flex ${sidebarOpen ? 'w-56' : 'w-14'} shrink-0 border-r border-slate-800 bg-[#0e1219] flex-col transition-all duration-200`}>
        <SidebarContent compact={!sidebarOpen} />
      </aside>
      {mobileNav && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/60" onClick={() => setMobileNav(false)} />
          <aside className="absolute left-0 top-0 bottom-0 w-64 bg-[#0e1219] border-r border-slate-800 flex flex-col shadow-xl">
            <SidebarContent compact={false} />
          </aside>
        </div>
      )}

      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-14 border-b border-slate-800 flex items-center gap-2 px-3 bg-[#0e1219] sticky top-0 z-20">
          <button type="button" onClick={() => window.innerWidth < 768 ? setMobileNav((v) => !v) : setSidebarOpen((v) => !v)} className="p-2 rounded-lg hover:bg-slate-800 text-slate-400" aria-label="Menu">
            <Menu className="w-5 h-5" />
          </button>
          <div className="flex-1 max-w-sm relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none z-10" />
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search" className="w-full rounded-lg bg-[#0a0d12] border border-slate-700 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500/40 py-1.5 pl-10 pr-9" />
            {query && <button type="button" onClick={() => setQuery('')} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white z-10"><X className="w-3.5 h-3.5" /></button>}
          </div>
          <button type="button" onClick={() => setCmdOpen(true)} className="hidden sm:flex items-center gap-1 px-2 py-1 rounded-lg border border-slate-700 text-xs text-slate-500 hover:text-white" title="Command palette (Ctrl+K)">
            <Command className="w-3.5 h-3.5" /> Ctrl+K
          </button>
          <button type="button" onClick={() => setNtfOpen(true)} className="p-2 rounded-lg hover:bg-slate-800 text-slate-400 relative" aria-label="Notifications">
            <Bell className="w-5 h-5" />
            {unreadNtf > 0 && <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-orange-500" />}
          </button>
        </header>

        <main className="flex-1 overflow-y-auto p-4 md:p-5">
          {view === 'dashboard' && (
            <div className="space-y-5 fade-in">
              <div>
                <h1 className="text-xl font-semibold text-white">Dashboard</h1>
                <p className="text-sm text-slate-500 mt-0.5">{user.name} · {ROLES.find((r) => r.id === role)?.name}</p>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {[
                  { label: 'Available units', value: totalUnits.toLocaleString(), icon: Warehouse, go: 'inventory' },
                  { label: 'Open POs', value: openPos, icon: ShoppingCart, go: 'orders' },
                  { label: 'Shipments', value: openShips, icon: Truck, go: 'shipping' },
                  { label: 'Pending approvals', value: pendingApr, icon: CheckSquare, go: 'approvals' },
                ].map((k) => (
                  <button key={k.label} type="button" onClick={() => go(k.go)} className="kpi-card">
                    <div className="flex justify-between mb-1"><span className="text-xs text-slate-500 uppercase">{k.label}</span><k.icon className="w-4 h-4 text-orange-400" /></div>
                    <p className="text-2xl font-semibold text-white tabular-nums">{k.value}</p>
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                <div className="panel rounded-xl overflow-hidden">
                  <div className="px-4 py-3 border-b border-slate-800 flex items-center gap-2"><AlertTriangle className="w-4 h-4 text-amber-400" /><h2 className="text-sm font-medium text-white">Low stock</h2></div>
                  {low.length === 0 ? <p className="p-6 text-center text-sm text-slate-500">All items above reorder point.</p> : (
                    <ul className="divide-y divide-slate-800/80 max-h-64 overflow-y-auto">
                      {low.map((r) => (
                        <li key={r.id} className="flex items-center justify-between px-4 py-2.5">
                          <div><p className="text-sm text-white">{productMap[r.productId]?.name || r.productId}</p><p className="text-xs text-slate-500">avail {availableQty(r)}</p></div>
                          <button type="button" className="btn-ghost text-xs" onClick={() => receiveStock(r, 25)}>Receive +25</button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="panel rounded-xl overflow-hidden">
                  <div className="px-4 py-3 border-b border-slate-800"><h2 className="text-sm font-medium text-white">Open opportunities</h2></div>
                  <ul className="divide-y divide-slate-800/80 max-h-64 overflow-y-auto">
                    {opportunities.filter((o) => !['Won', 'Lost'].includes(o.stage)).slice(0, 6).map((o) => (
                      <li key={o.id} className="px-4 py-2.5 flex justify-between gap-2">
                        <div><p className="text-sm text-white">{o.name}</p><p className="text-xs text-slate-500">{o.stage} · {formatMoney(o.value)}</p></div>
                      </li>
                    ))}
                    {opportunities.filter((o) => !['Won', 'Lost'].includes(o.stage)).length === 0 && <li className="p-6 text-center text-sm text-slate-500">No open opportunities</li>}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {view === 'executive' && (
            <div className="space-y-5 fade-in">
              <h1 className="text-xl font-semibold text-white">Executive overview</h1>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                <div className="kpi-card cursor-default"><p className="text-xs text-slate-500 uppercase">Inventory value</p><p className="text-2xl font-semibold text-white">{formatMoney(invValue)}</p></div>
                <div className="kpi-card cursor-default"><p className="text-xs text-slate-500 uppercase">Customers</p><p className="text-2xl font-semibold text-white">{customers.length}</p></div>
                <div className="kpi-card cursor-default"><p className="text-xs text-slate-500 uppercase">Open tickets</p><p className="text-2xl font-semibold text-white">{tickets.filter((t) => !['Resolved', 'Closed'].includes(t.status)).length}</p></div>
                <div className="kpi-card cursor-default"><p className="text-xs text-slate-500 uppercase">Active projects</p><p className="text-2xl font-semibold text-white">{projects.filter((p) => p.status === 'Active').length}</p></div>
              </div>
              <div className="panel rounded-xl p-4">
                <h2 className="text-sm font-medium text-white mb-2">Pipeline value</h2>
                <p className="text-3xl font-semibold text-white">{formatMoney(opportunities.filter((o) => !['Won', 'Lost'].includes(o.stage)).reduce((s, o) => s + (o.value || 0) * ((o.probability || 0) / 100), 0))}</p>
                <p className="text-xs text-slate-500 mt-1">Weighted by stage probability</p>
              </div>
            </div>
          )}

          {/* LEADS */}
          {view === 'leads' && (
            <div className="space-y-4 fade-in">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h1 className="text-xl font-semibold text-white">Leads</h1>
                <div className="flex gap-2">
                  <select value={leadFilter} onChange={(e) => setLeadFilter(e.target.value)} className="input-field w-auto py-1.5">
                    <option value="All">All statuses</option>
                    {LEAD_STATUS.map((s) => <option key={s}>{s}</option>)}
                  </select>
                  {canPerform(role, 'create') && <button type="button" className="btn-primary flex items-center gap-1.5" onClick={() => { setLeadForm({ name: '', company: '', email: '', phone: '', source: 'Website', industry: '', status: 'New', score: 50, value: 0, owner: user.name }); setLeadModal('new'); }}><Plus className="w-4 h-4" /> Add lead</button>}
                </div>
              </div>
              <div className="space-y-2">
                {filteredLeads.map((l) => (
                  <div key={l.id} className="panel rounded-xl px-4 py-3 flex flex-wrap items-center gap-3">
                    <div className="flex-1 min-w-[160px]"><p className="text-sm text-white font-medium">{l.name}</p><p className="text-xs text-slate-500">{l.company} · {l.source} · score {l.score}</p></div>
                    <span className="text-sm tabular-nums">{formatMoney(l.value)}</span>
                    <span className="status-pill bg-slate-700/60 text-slate-300">{l.status}</span>
                    <div className="flex gap-1 ml-auto">
                      {l.status !== 'Converted' && canPerform(role, 'edit') && <button type="button" className="btn-ghost text-xs py-1" onClick={() => convertLead(l)}>Convert</button>}
                      {canPerform(role, 'edit') && <button type="button" className="btn-ghost text-xs py-1" onClick={() => { setLeadForm({ ...l }); setLeadModal(l); }}><Pencil className="w-3 h-3" /></button>}
                      {canPerform(role, 'delete') && <button type="button" className="btn-danger text-xs py-1" onClick={() => setConfirm({ title: 'Delete lead?', message: l.name, onConfirm: () => { setLeads((p) => p.filter((x) => x.id !== l.id)); toast('Deleted', l.name); setConfirm(null); } })}><Trash2 className="w-3 h-3" /></button>}
                    </div>
                  </div>
                ))}
                {filteredLeads.length === 0 && <EmptyState message="No leads found" actionLabel="Add lead" onAction={() => { setLeadModal('new'); }} />}
              </div>
            </div>
          )}

          {/* OPPORTUNITIES KANBAN */}
          {view === 'opportunities' && (
            <div className="space-y-4 fade-in">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h1 className="text-xl font-semibold text-white">Opportunity pipeline</h1>
                {canPerform(role, 'create') && <button type="button" className="btn-primary flex items-center gap-1.5" onClick={() => { setOppForm({ name: '', customerId: customers[0]?.id || '', stage: 'New', value: 0, probability: 20, closeDate: '', owner: user.name }); setOppModal('new'); }}><Plus className="w-4 h-4" /> Add opportunity</button>}
              </div>
              <div className="flex gap-3 overflow-x-auto pb-2">
                {OPP_STAGES.map((stage) => (
                  <div key={stage} className="panel rounded-xl min-w-[200px] flex-1">
                    <div className="px-3 py-2 border-b border-slate-800 text-xs font-medium text-slate-400 uppercase">{stage}</div>
                    <div className="p-2 space-y-2 min-h-[120px]">
                      {opportunities.filter((o) => o.stage === stage).map((o) => (
                        <div key={o.id} className="rounded-lg bg-slate-900/80 border border-slate-800 p-2.5">
                          <p className="text-sm text-white">{o.name}</p>
                          <p className="text-xs text-slate-500 mt-0.5">{formatMoney(o.value)} · {o.probability}%</p>
                          <div className="flex flex-wrap gap-1 mt-2">
                            {OPP_STAGES.filter((s) => s !== stage).slice(0, 3).map((s) => (
                              <button key={s} type="button" className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 hover:text-white" onClick={() => moveOpp(o, s)}>{s}</button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CUSTOMERS */}
          {view === 'customers' && (
            <div className="space-y-4 fade-in">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h1 className="text-xl font-semibold text-white">Customers</h1>
                {canPerform(role, 'create') && <button type="button" className="btn-primary flex items-center gap-1.5" onClick={() => { setCusForm({ name: '', company: '', email: '', phone: '', city: '', state: '', country: 'US', creditLimit: 10000, paymentTerms: 'Net 30', type: 'Wholesale', status: 'Active' }); setCusModal('new'); }}><Plus className="w-4 h-4" /> Add customer</button>}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                {filteredCus.map((c) => (
                  <div key={c.id} className="panel rounded-xl p-4">
                    <p className="font-medium text-white">{c.name}</p>
                    <p className="text-xs text-slate-400">{c.company}</p>
                    <p className="text-xs text-slate-500 mt-2">{c.email} · {c.phone}</p>
                    <p className="text-xs text-slate-500">{c.city}{c.state ? `, ${c.state}` : ''} · {c.paymentTerms}</p>
                    <div className="flex justify-between items-center mt-3">
                      <span className="text-xs text-slate-400">Outstanding {formatMoney(c.outstanding || 0)}</span>
                      <div className="flex gap-1">
                        {canPerform(role, 'edit') && <button type="button" className="btn-ghost text-xs py-1" onClick={() => { setCusForm({ ...c }); setCusModal(c); }}><Pencil className="w-3 h-3" /></button>}
                        {canPerform(role, 'delete') && <button type="button" className="btn-danger text-xs py-1" onClick={() => setConfirm({ title: 'Delete customer?', message: c.name, onConfirm: () => { setCustomers((p) => p.filter((x) => x.id !== c.id)); toast('Deleted', c.name); setConfirm(null); } })}><Trash2 className="w-3 h-3" /></button>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {filteredCus.length === 0 && <EmptyState message="No customers found" actionLabel="Add customer" onAction={() => setCusModal('new')} />}
            </div>
          )}

          {/* SUPPLIERS */}
          {view === 'suppliers' && (
            <div className="space-y-4 fade-in">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h1 className="text-xl font-semibold text-white">Suppliers</h1>
                {canPerform(role, 'create') && <button type="button" className="btn-primary flex items-center gap-1.5" onClick={() => { setSupForm({ name: '', contact: '', email: '', phone: '', category: 'Components', rating: 4, status: 'Active', paymentTerms: 'Net 30' }); setSupModal('new'); }}><Plus className="w-4 h-4" /> Add supplier</button>}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {filteredSup.map((s) => (
                  <div key={s.id} className="panel rounded-xl p-4">
                    <div className="flex justify-between"><p className="font-medium text-white">{s.name}</p><span className="text-xs text-amber-400">★ {s.rating}</span></div>
                    <p className="text-xs text-slate-400 mt-1">{s.contact} · {s.category}</p>
                    <p className="text-xs text-slate-500">{s.email || s.contact}</p>
                    <div className="flex gap-1 mt-3">
                      {canPerform(role, 'edit') && <button type="button" className="btn-ghost text-xs py-1" onClick={() => { setSupForm({ ...s }); setSupModal(s); }}><Pencil className="w-3 h-3" /></button>}
                      {canPerform(role, 'delete') && <button type="button" className="btn-danger text-xs py-1" onClick={() => setConfirm({ title: 'Delete supplier?', message: s.name, onConfirm: () => { setSuppliers((p) => p.filter((x) => x.id !== s.id)); toast('Deleted', s.name); setConfirm(null); } })}><Trash2 className="w-3 h-3" /></button>}
                    </div>
                  </div>
                ))}
              </div>
              {filteredSup.length === 0 && <EmptyState message="No suppliers found" actionLabel="Add supplier" onAction={() => setSupModal('new')} />}
            </div>
          )}

          {/* PRODUCTS */}
          {view === 'products' && (
            <div className="space-y-4 fade-in">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h1 className="text-xl font-semibold text-white">Product catalog</h1>
                {canPerform(role, 'create') && <button type="button" className="btn-primary flex items-center gap-1.5" onClick={() => { setPrdForm({ sku: '', name: '', category: 'Fasteners', unitCost: 1, price: 2, reorderAt: 10, active: true }); setPrdModal('new'); }}><Plus className="w-4 h-4" /> Add product</button>}
              </div>
              <div className="panel rounded-xl overflow-hidden">
                <table className="w-full data-table">
                  <thead><tr><th>SKU</th><th>Name</th><th className="hidden sm:table-cell">Category</th><th className="text-right">Cost</th><th className="text-right">Price</th><th className="text-right">Actions</th></tr></thead>
                  <tbody>
                    {filteredPrd.map((p) => (
                      <tr key={p.id}>
                        <td className="font-mono text-xs text-slate-400">{p.sku}</td>
                        <td className="text-white font-medium">{p.name}</td>
                        <td className="hidden sm:table-cell text-slate-400">{p.category}</td>
                        <td className="text-right tabular-nums">{formatMoney(p.unitCost)}</td>
                        <td className="text-right tabular-nums">{formatMoney(p.price)}</td>
                        <td className="text-right">
                          <div className="inline-flex gap-1">
                            {canPerform(role, 'edit') && <button type="button" className="btn-ghost text-xs py-1 px-2" onClick={() => { setPrdForm({ ...p }); setPrdModal(p); }}><Pencil className="w-3 h-3" /></button>}
                            {canPerform(role, 'delete') && <button type="button" className="btn-danger text-xs py-1 px-2" onClick={() => setConfirm({ title: 'Delete product?', message: p.name, onConfirm: () => { setProducts((x) => x.filter((y) => y.id !== p.id)); toast('Deleted', p.sku); setConfirm(null); } })}><Trash2 className="w-3 h-3" /></button>}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {filteredPrd.length === 0 && <EmptyState message="No products found" actionLabel="Add product" onAction={() => setPrdModal('new')} />}
              </div>
            </div>
          )}

          {/* INVENTORY */}
          {view === 'inventory' && (
            <div className="space-y-4 fade-in">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h1 className="text-xl font-semibold text-white">Inventory</h1>
                <select value={whFilter} onChange={(e) => setWhFilter(e.target.value)} className="input-field w-auto py-1.5">
                  <option value="All">All warehouses</option>
                  {WAREHOUSES.map((w) => <option key={w}>{w}</option>)}
                </select>
              </div>
              <div className="panel rounded-xl overflow-hidden">
                <table className="w-full data-table">
                  <thead><tr><th>Product</th><th className="hidden sm:table-cell">Warehouse</th><th className="text-right">On hand</th><th className="text-right">Available</th><th className="text-right">Actions</th></tr></thead>
                  <tbody>
                    {filteredInv.map((r) => {
                      const p = productMap[r.productId];
                      const avail = availableQty(r);
                      return (
                        <tr key={r.id}>
                          <td><p className="font-medium text-white">{p?.name || r.productId}</p><p className="text-xs font-mono text-slate-500">{p?.sku}</p></td>
                          <td className="hidden sm:table-cell text-slate-400">{r.warehouse}</td>
                          <td className="text-right tabular-nums">{r.qty}</td>
                          <td className={`text-right tabular-nums ${p && avail <= p.reorderAt ? 'text-amber-400' : ''}`}>{avail}</td>
                          <td className="text-right"><div className="inline-flex gap-1"><button type="button" className="btn-ghost text-xs py-1 px-2" onClick={() => receiveStock(r, 10)}>+10</button><button type="button" className="btn-ghost text-xs py-1 px-2" onClick={() => issueStock(r, 5)}>−5</button></div></td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                {filteredInv.length === 0 && <EmptyState message="No inventory rows" />}
              </div>
            </div>
          )}

          {/* ORDERS */}
          {view === 'orders' && (
            <div className="space-y-4 fade-in">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h1 className="text-xl font-semibold text-white">Purchase orders</h1>
                <div className="flex gap-2">
                  <select value={poFilter} onChange={(e) => setPoFilter(e.target.value)} className="input-field w-auto py-1.5"><option value="All">All</option>{PO_STATUS.map((s) => <option key={s}>{s}</option>)}</select>
                  {canPerform(role, 'create') && <button type="button" className="btn-primary flex items-center gap-1.5" onClick={() => { setPoForm({ supplierId: suppliers[0]?.id || '', productId: products[0]?.id || '', qty: 10, unitCost: products[0]?.unitCost || 10, notes: '' }); setPoModal('new'); }}><Plus className="w-4 h-4" /> New PO</button>}
                </div>
              </div>
              <div className="space-y-2">
                {filteredPos.map((po) => {
                  const line = (po.lines || [])[0];
                  const canAdv = !['Received', 'Cancelled'].includes(po.status);
                  return (
                    <div key={po.id} className="panel rounded-xl px-4 py-3 flex flex-wrap items-center gap-3">
                      <div className="min-w-[90px]"><p className="text-sm font-mono text-white">{po.id}</p><p className="text-xs text-slate-500">{formatDate(po.orderedAt)}</p></div>
                      <div className="flex-1 min-w-[140px]"><p className="text-sm text-white">{supplierMap[po.supplierId]?.name}</p><p className="text-xs text-slate-500">{productMap[line?.productId]?.name} · qty {line?.qty}</p></div>
                      <span className="text-sm font-medium">{formatMoney(po.total ?? poTotal(po))}</span>
                      <span className={`status-pill ${poColor[po.status] || ''}`}>{po.status}</span>
                      <div className="flex gap-1 ml-auto">
                        {canAdv && canPerform(role, 'approve') && <button type="button" className="btn-ghost text-xs py-1" onClick={() => advancePoRow(po)}>Advance</button>}
                        {po.status === 'Draft' && canPerform(role, 'edit') && <button type="button" className="btn-ghost text-xs py-1" onClick={() => { setPoForm({ supplierId: po.supplierId, productId: line?.productId, qty: line?.qty, unitCost: line?.unitCost, notes: po.notes || '' }); setPoModal(po); }}><Pencil className="w-3 h-3" /></button>}
                        {canAdv && canPerform(role, 'edit') && <button type="button" className="btn-danger text-xs py-1" onClick={() => setConfirm({ title: 'Cancel PO?', message: po.id, onConfirm: () => { setPurchaseOrders((p) => p.map((x) => x.id === po.id ? { ...x, status: 'Cancelled' } : x)); toast('Cancelled', po.id); setConfirm(null); } })}>Cancel</button>}
                      </div>
                    </div>
                  );
                })}
                {filteredPos.length === 0 && <EmptyState message="No purchase orders" actionLabel="New PO" onAction={() => setPoModal('new')} />}
              </div>
            </div>
          )}

          {/* SHIPPING */}
          {view === 'shipping' && (
            <div className="space-y-4 fade-in">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h1 className="text-xl font-semibold text-white">Shipping</h1>
                <div className="flex gap-2">
                  <select value={shipFilter} onChange={(e) => setShipFilter(e.target.value)} className="input-field w-auto py-1.5"><option value="All">All</option>{SHIP_STATUS.map((s) => <option key={s}>{s}</option>)}</select>
                  {canPerform(role, 'create') && <button type="button" className="btn-primary flex items-center gap-1.5" onClick={() => { setShipForm({ poId: purchaseOrders[0]?.id || '', carrier: 'FedEx', tracking: '', status: 'Pending', shipDate: new Date().toISOString().slice(0, 10), eta: '', destination: 'Main DC' }); setShipModal('new'); }}><Plus className="w-4 h-4" /> New shipment</button>}
                </div>
              </div>
              <div className="space-y-2">
                {filteredShp.map((ship) => (
                  <div key={ship.id} className="panel rounded-xl px-4 py-3 flex flex-wrap items-center gap-3">
                    <div className="min-w-[90px]"><p className="text-sm font-mono text-white">{ship.id}</p><p className="text-xs text-slate-500">PO {ship.poId}</p></div>
                    <div className="flex-1"><p className="text-sm text-white">{ship.carrier} · {ship.tracking}</p><p className="text-xs text-slate-500">{ship.destination} · ETA {ship.eta || '—'}</p></div>
                    <span className={`status-pill ${shipColor[ship.status] || ''}`}>{ship.status}</span>
                    <div className="flex gap-1 ml-auto">
                      {!['Delivered', 'Cancelled'].includes(ship.status) && <button type="button" className="btn-ghost text-xs py-1" onClick={() => advanceShip(ship)}>Advance</button>}
                      <button type="button" className="btn-ghost text-xs py-1" onClick={() => { setShipForm({ ...ship }); setShipModal(ship); }}><Pencil className="w-3 h-3" /></button>
                    </div>
                  </div>
                ))}
                {filteredShp.length === 0 && <EmptyState message="No shipments" actionLabel="New shipment" onAction={() => setShipModal('new')} />}
              </div>
            </div>
          )}

          {/* PROJECTS */}
          {view === 'projects' && (
            <div className="space-y-4 fade-in">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h1 className="text-xl font-semibold text-white">Projects</h1>
                {canPerform(role, 'create') && <button type="button" className="btn-primary flex items-center gap-1.5" onClick={() => { setPrjForm({ name: '', status: 'Planning', budget: 0, start: '', end: '', owner: user.name }); setPrjModal('new'); }}><Plus className="w-4 h-4" /> New project</button>}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {projects.map((p) => (
                  <div key={p.id} className="panel rounded-xl p-4">
                    <div className="flex justify-between"><p className="font-medium text-white">{p.name}</p><span className="status-pill bg-slate-700/60 text-slate-300">{p.status}</span></div>
                    <p className="text-xs text-slate-500 mt-1">Budget {formatMoney(p.budget)} · {p.owner}</p>
                    <p className="text-xs text-slate-500">{p.start} → {p.end || '—'}</p>
                    <div className="mt-2 space-y-1">
                      {tasks.filter((t) => t.projectId === p.id).map((t) => (
                        <div key={t.id} className="text-xs flex justify-between text-slate-400"><span>{t.title}</span><span>{t.status}</span></div>
                      ))}
                    </div>
                    {canPerform(role, 'edit') && <button type="button" className="btn-ghost text-xs mt-3" onClick={() => { setPrjForm({ ...p }); setPrjModal(p); }}>Edit</button>}
                  </div>
                ))}
              </div>
              {projects.length === 0 && <EmptyState message="No projects" actionLabel="New project" onAction={() => setPrjModal('new')} />}
            </div>
          )}

          {/* TICKETS */}
          {view === 'tickets' && (
            <div className="space-y-4 fade-in">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h1 className="text-xl font-semibold text-white">Service desk</h1>
                <div className="flex gap-2">
                  <select value={ticketFilter} onChange={(e) => setTicketFilter(e.target.value)} className="input-field w-auto py-1.5"><option value="All">All</option>{TICKET_STATUS.map((s) => <option key={s}>{s}</option>)}</select>
                  {canPerform(role, 'create') && <button type="button" className="btn-primary flex items-center gap-1.5" onClick={() => { setTktForm({ subject: '', customerId: customers[0]?.id || '', priority: 'Medium', status: 'Open', category: 'General' }); setTktModal('new'); }}><Plus className="w-4 h-4" /> New ticket</button>}
                </div>
              </div>
              <div className="space-y-2">
                {filteredTkt.map((t) => (
                  <div key={t.id} className="panel rounded-xl px-4 py-3 flex flex-wrap items-center gap-3">
                    <div className="flex-1"><p className="text-sm text-white">{t.subject}</p><p className="text-xs text-slate-500">{t.id} · {customerMap[t.customerId]?.name || t.customerId} · {t.priority}</p></div>
                    <span className="status-pill bg-slate-700/60 text-slate-300">{t.status}</span>
                    <div className="flex gap-1">
                      {!['Closed'].includes(t.status) && <button type="button" className="btn-ghost text-xs py-1" onClick={() => advanceTicket(t)}>Advance</button>}
                      <button type="button" className="btn-ghost text-xs py-1" onClick={() => { setTktForm({ ...t }); setTktModal(t); }}><Pencil className="w-3 h-3" /></button>
                    </div>
                  </div>
                ))}
                {filteredTkt.length === 0 && <EmptyState message="No tickets" actionLabel="New ticket" onAction={() => setTktModal('new')} />}
              </div>
            </div>
          )}

          {/* CONTRACTS */}
          {view === 'contracts' && (
            <div className="space-y-4 fade-in">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h1 className="text-xl font-semibold text-white">Contracts</h1>
                {canPerform(role, 'create') && <button type="button" className="btn-primary flex items-center gap-1.5" onClick={() => { setCtrForm({ name: '', type: 'Customer', partyId: customers[0]?.id || '', value: 0, start: '', end: '', renewal: '', status: 'Draft' }); setCtrModal('new'); }}><Plus className="w-4 h-4" /> New contract</button>}
              </div>
              <div className="space-y-2">
                {contracts.map((c) => (
                  <div key={c.id} className="panel rounded-xl px-4 py-3 flex flex-wrap items-center gap-3">
                    <div className="flex-1"><p className="text-sm text-white">{c.name}</p><p className="text-xs text-slate-500">{c.type} · {c.start} → {c.end} · renewal {c.renewal || '—'}</p></div>
                    <span className="text-sm">{formatMoney(c.value)}</span>
                    <span className="status-pill bg-slate-700/60 text-slate-300">{c.status}</span>
                    {canPerform(role, 'edit') && <button type="button" className="btn-ghost text-xs py-1" onClick={() => { setCtrForm({ ...c }); setCtrModal(c); }}><Pencil className="w-3 h-3" /></button>}
                  </div>
                ))}
                {contracts.length === 0 && <EmptyState message="No contracts" actionLabel="New contract" onAction={() => setCtrModal('new')} />}
              </div>
            </div>
          )}

          {/* APPROVALS */}
          {view === 'approvals' && (
            <div className="space-y-4 fade-in">
              <h1 className="text-xl font-semibold text-white">Approvals</h1>
              <div className="space-y-2">
                {approvals.map((a) => (
                  <div key={a.id} className="panel rounded-xl px-4 py-3 flex flex-wrap items-center gap-3">
                    <div className="flex-1"><p className="text-sm text-white">{a.title}</p><p className="text-xs text-slate-500">{a.type} · {a.requester} · due {a.due}</p></div>
                    <span className="status-pill bg-slate-700/60 text-slate-300">{a.status}</span>
                    {a.status === 'Pending' && canPerform(role, 'approve') && (
                      <div className="flex gap-1">
                        <button type="button" className="btn-primary text-xs py-1" onClick={() => decideApproval(a, 'Approved')}>Approve</button>
                        <button type="button" className="btn-danger text-xs py-1" onClick={() => decideApproval(a, 'Rejected')}>Reject</button>
                      </div>
                    )}
                  </div>
                ))}
                {approvals.length === 0 && <EmptyState message="No approval requests" />}
              </div>
            </div>
          )}

          {/* DOCUMENTS */}
          {view === 'documents' && (
            <div className="space-y-4 fade-in">
              <h1 className="text-xl font-semibold text-white">Documents</h1>
              <div className="panel rounded-xl overflow-hidden">
                <table className="w-full data-table">
                  <thead><tr><th>Name</th><th>Category</th><th className="hidden sm:table-cell">Owner</th><th>Size</th><th>Uploaded</th></tr></thead>
                  <tbody>
                    {documents.map((d) => (
                      <tr key={d.id}><td className="text-white">{d.name}</td><td className="text-slate-400">{d.category}</td><td className="hidden sm:table-cell text-slate-400">{d.owner}</td><td>{d.size}</td><td className="text-slate-500">{d.uploadedAt}</td></tr>
                    ))}
                  </tbody>
                </table>
                {documents.length === 0 && <EmptyState message="No documents" />}
              </div>
            </div>
          )}

          {/* HR */}
          {view === 'hr' && (
            <div className="space-y-4 fade-in">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h1 className="text-xl font-semibold text-white">Employees</h1>
                {canPerform(role, 'create') && <button type="button" className="btn-primary flex items-center gap-1.5" onClick={() => { setEmpForm({ name: '', department: 'Operations', role: '', email: '', status: 'Active' }); setEmpModal('new'); }}><Plus className="w-4 h-4" /> Add employee</button>}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
                {filteredEmp.map((e) => (
                  <div key={e.id} className="panel rounded-xl p-4">
                    <p className="font-medium text-white">{e.name}</p>
                    <p className="text-xs text-slate-400">{e.role} · {e.department}</p>
                    <p className="text-xs text-slate-500 mt-1">{e.email}</p>
                    <p className="text-xs text-slate-500">Leave balance: {e.leaveBalance ?? '—'}</p>
                    <div className="flex gap-1 mt-3">
                      {canPerform(role, 'edit') && <button type="button" className="btn-ghost text-xs py-1" onClick={() => { setEmpForm({ ...e }); setEmpModal(e); }}><Pencil className="w-3 h-3" /></button>}
                      {canPerform(role, 'delete') && <button type="button" className="btn-danger text-xs py-1" onClick={() => setConfirm({ title: 'Remove employee?', message: e.name, onConfirm: () => { setEmployees((p) => p.filter((x) => x.id !== e.id)); toast('Removed', e.name); setConfirm(null); } })}><Trash2 className="w-3 h-3" /></button>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* NOTIFICATIONS */}
          {view === 'notifications' && (
            <div className="space-y-4 fade-in">
              <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold text-white">Notifications</h1>
                <button type="button" className="btn-ghost text-xs" onClick={markAllRead}>Mark all read</button>
              </div>
              <div className="space-y-2">
                {notifications.map((n) => (
                  <button key={n.id} type="button" onClick={() => markRead(n.id)} className={`panel rounded-xl px-4 py-3 text-left w-full ${n.read ? 'opacity-60' : 'border-l-2 border-l-orange-500'}`}>
                    <p className="text-sm text-white">{n.title}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{n.body}</p>
                    <p className="text-[10px] text-slate-600 mt-1">{n.category} · {n.priority}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ADMIN */}
          {view === 'admin' && admin && (
            <div className="space-y-5 fade-in">
              <h1 className="text-xl font-semibold text-white">Administration</h1>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                <div className="panel rounded-xl p-4">
                  <h2 className="text-sm font-medium text-white mb-3">Roles</h2>
                  <ul className="space-y-2">
                    {ROLES.map((r) => (
                      <li key={r.id} className="flex justify-between text-sm"><span className="text-slate-300">{r.name}</span><span className="text-xs text-slate-500">{(r.permissions || []).join(', ')}</span></li>
                    ))}
                  </ul>
                </div>
                <div className="panel rounded-xl p-4">
                  <h2 className="text-sm font-medium text-white mb-3">Users</h2>
                  <ul className="space-y-2 max-h-64 overflow-y-auto">
                    {users.map((u) => (
                      <li key={u.id} className="flex justify-between text-sm gap-2">
                        <span className="text-slate-300">{u.name} <span className="text-slate-500">(@{u.username})</span></span>
                        <span className="text-xs text-slate-500">{u.role} · {u.status}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="panel rounded-xl p-4 lg:col-span-2">
                  <h2 className="text-sm font-medium text-white mb-3">Login history</h2>
                  <table className="w-full data-table text-sm">
                    <thead><tr><th>User</th><th>Time</th><th>Result</th><th>IP</th></tr></thead>
                    <tbody>
                      {loginHistory.slice(0, 15).map((h) => (
                        <tr key={h.id}><td>{h.username}</td><td className="text-slate-500">{h.at}</td><td className={h.success ? 'text-emerald-400' : 'text-rose-400'}>{h.success ? 'Success' : 'Failed'}</td><td className="text-slate-500">{h.ip}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Modals - compact forms */}
      <Modal open={!!leadModal} onClose={() => setLeadModal(null)} title={leadModal === 'new' ? 'Add lead' : 'Edit lead'}>
        <form onSubmit={saveLeadForm} className="space-y-3">
          <input className="input-field" placeholder="Name" value={leadForm.name} onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })} required />
          <input className="input-field" placeholder="Company" value={leadForm.company} onChange={(e) => setLeadForm({ ...leadForm, company: e.target.value })} />
          <div className="grid grid-cols-2 gap-2">
            <input className="input-field" placeholder="Email" value={leadForm.email} onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })} />
            <input className="input-field" placeholder="Phone" value={leadForm.phone} onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })} />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <select className="input-field" value={leadForm.status} onChange={(e) => setLeadForm({ ...leadForm, status: e.target.value })}>{LEAD_STATUS.map((s) => <option key={s}>{s}</option>)}</select>
            <input type="number" className="input-field" placeholder="Score" value={leadForm.score} onChange={(e) => setLeadForm({ ...leadForm, score: e.target.value })} />
          </div>
          <input type="number" className="input-field" placeholder="Expected value" value={leadForm.value} onChange={(e) => setLeadForm({ ...leadForm, value: e.target.value })} />
          <div className="flex justify-end gap-2"><button type="button" className="btn-ghost" onClick={() => setLeadModal(null)}>Cancel</button><button type="submit" className="btn-primary">Save</button></div>
        </form>
      </Modal>

      <Modal open={!!cusModal} onClose={() => setCusModal(null)} title={cusModal === 'new' ? 'Add customer' : 'Edit customer'}>
        <form onSubmit={saveCusForm} className="space-y-3">
          <input className="input-field" placeholder="Name" value={cusForm.name} onChange={(e) => setCusForm({ ...cusForm, name: e.target.value })} required />
          <input className="input-field" placeholder="Company" value={cusForm.company} onChange={(e) => setCusForm({ ...cusForm, company: e.target.value })} />
          <div className="grid grid-cols-2 gap-2">
            <input className="input-field" placeholder="Email" value={cusForm.email} onChange={(e) => setCusForm({ ...cusForm, email: e.target.value })} />
            <input className="input-field" placeholder="Phone" value={cusForm.phone} onChange={(e) => setCusForm({ ...cusForm, phone: e.target.value })} />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <input className="input-field" placeholder="City" value={cusForm.city} onChange={(e) => setCusForm({ ...cusForm, city: e.target.value })} />
            <input className="input-field" placeholder="State" value={cusForm.state} onChange={(e) => setCusForm({ ...cusForm, state: e.target.value })} />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <input type="number" className="input-field" placeholder="Credit limit" value={cusForm.creditLimit} onChange={(e) => setCusForm({ ...cusForm, creditLimit: e.target.value })} />
            <select className="input-field" value={cusForm.paymentTerms} onChange={(e) => setCusForm({ ...cusForm, paymentTerms: e.target.value })}><option>Net 15</option><option>Net 30</option><option>Net 45</option><option>Due on receipt</option></select>
          </div>
          <div className="flex justify-end gap-2"><button type="button" className="btn-ghost" onClick={() => setCusModal(null)}>Cancel</button><button type="submit" className="btn-primary">Save</button></div>
        </form>
      </Modal>

      <Modal open={!!supModal} onClose={() => setSupModal(null)} title={supModal === 'new' ? 'Add supplier' : 'Edit supplier'}>
        <form onSubmit={saveSupForm} className="space-y-3">
          <input className="input-field" placeholder="Company name" value={supForm.name} onChange={(e) => setSupForm({ ...supForm, name: e.target.value })} required />
          <input className="input-field" placeholder="Contact" value={supForm.contact} onChange={(e) => setSupForm({ ...supForm, contact: e.target.value })} />
          <input className="input-field" placeholder="Email" value={supForm.email} onChange={(e) => setSupForm({ ...supForm, email: e.target.value })} />
          <div className="grid grid-cols-2 gap-2">
            <input className="input-field" placeholder="Category" value={supForm.category} onChange={(e) => setSupForm({ ...supForm, category: e.target.value })} />
            <input type="number" min="1" max="5" step="0.1" className="input-field" placeholder="Rating" value={supForm.rating} onChange={(e) => setSupForm({ ...supForm, rating: e.target.value })} />
          </div>
          <div className="flex justify-end gap-2"><button type="button" className="btn-ghost" onClick={() => setSupModal(null)}>Cancel</button><button type="submit" className="btn-primary">Save</button></div>
        </form>
      </Modal>

      <Modal open={!!prdModal} onClose={() => setPrdModal(null)} title={prdModal === 'new' ? 'Add product' : 'Edit product'}>
        <form onSubmit={savePrdForm} className="space-y-3">
          <div className="grid grid-cols-2 gap-2">
            <input className="input-field" placeholder="SKU" value={prdForm.sku} onChange={(e) => setPrdForm({ ...prdForm, sku: e.target.value })} disabled={prdModal !== 'new'} required />
            <select className="input-field" value={prdForm.category} onChange={(e) => setPrdForm({ ...prdForm, category: e.target.value })}>{CATEGORIES.map((c) => <option key={c}>{c}</option>)}</select>
          </div>
          <input className="input-field" placeholder="Name" value={prdForm.name} onChange={(e) => setPrdForm({ ...prdForm, name: e.target.value })} required />
          <div className="grid grid-cols-3 gap-2">
            <input type="number" step="0.01" className="input-field" placeholder="Cost" value={prdForm.unitCost} onChange={(e) => setPrdForm({ ...prdForm, unitCost: e.target.value })} />
            <input type="number" step="0.01" className="input-field" placeholder="Price" value={prdForm.price} onChange={(e) => setPrdForm({ ...prdForm, price: e.target.value })} />
            <input type="number" className="input-field" placeholder="Reorder" value={prdForm.reorderAt} onChange={(e) => setPrdForm({ ...prdForm, reorderAt: e.target.value })} />
          </div>
          <div className="flex justify-end gap-2"><button type="button" className="btn-ghost" onClick={() => setPrdModal(null)}>Cancel</button><button type="submit" className="btn-primary">Save</button></div>
        </form>
      </Modal>

      <Modal open={!!poModal} onClose={() => setPoModal(null)} title={poModal === 'new' ? 'New purchase order' : 'Edit PO'}>
        <form onSubmit={savePoForm} className="space-y-3">
          <select className="input-field" value={poForm.supplierId} onChange={(e) => setPoForm({ ...poForm, supplierId: e.target.value })}>{suppliers.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}</select>
          <select className="input-field" value={poForm.productId} onChange={(e) => { const p = productMap[e.target.value]; setPoForm({ ...poForm, productId: e.target.value, unitCost: p?.unitCost ?? poForm.unitCost }); }}>{products.map((p) => <option key={p.id} value={p.id}>{p.sku} — {p.name}</option>)}</select>
          <div className="grid grid-cols-2 gap-2">
            <input type="number" min="1" className="input-field" value={poForm.qty} onChange={(e) => setPoForm({ ...poForm, qty: e.target.value })} />
            <input type="number" step="0.01" className="input-field" value={poForm.unitCost} onChange={(e) => setPoForm({ ...poForm, unitCost: e.target.value })} />
          </div>
          <p className="text-xs text-slate-500">Total {formatMoney((Number(poForm.qty) || 0) * (Number(poForm.unitCost) || 0))}</p>
          <div className="flex justify-end gap-2"><button type="button" className="btn-ghost" onClick={() => setPoModal(null)}>Cancel</button><button type="submit" className="btn-primary">Save</button></div>
        </form>
      </Modal>

      <Modal open={!!shipModal} onClose={() => setShipModal(null)} title={shipModal === 'new' ? 'New shipment' : 'Edit shipment'}>
        <form onSubmit={saveShipForm} className="space-y-3">
          <select className="input-field" value={shipForm.poId} onChange={(e) => setShipForm({ ...shipForm, poId: e.target.value })}>{purchaseOrders.map((p) => <option key={p.id} value={p.id}>{p.id}</option>)}</select>
          <div className="grid grid-cols-2 gap-2">
            <select className="input-field" value={shipForm.carrier} onChange={(e) => setShipForm({ ...shipForm, carrier: e.target.value })}><option>FedEx</option><option>UPS</option><option>DHL</option><option>Freight</option></select>
            <input className="input-field" placeholder="Tracking" value={shipForm.tracking} onChange={(e) => setShipForm({ ...shipForm, tracking: e.target.value })} />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <input type="date" className="input-field" value={shipForm.shipDate} onChange={(e) => setShipForm({ ...shipForm, shipDate: e.target.value })} />
            <input type="date" className="input-field" value={shipForm.eta} onChange={(e) => setShipForm({ ...shipForm, eta: e.target.value })} />
          </div>
          <select className="input-field" value={shipForm.destination} onChange={(e) => setShipForm({ ...shipForm, destination: e.target.value })}>{WAREHOUSES.map((w) => <option key={w}>{w}</option>)}</select>
          <div className="flex justify-end gap-2"><button type="button" className="btn-ghost" onClick={() => setShipModal(null)}>Cancel</button><button type="submit" className="btn-primary">Save</button></div>
        </form>
      </Modal>

      <Modal open={!!empModal} onClose={() => setEmpModal(null)} title={empModal === 'new' ? 'Add employee' : 'Edit employee'}>
        <form onSubmit={saveEmpForm} className="space-y-3">
          <input className="input-field" placeholder="Name" value={empForm.name} onChange={(e) => setEmpForm({ ...empForm, name: e.target.value })} required />
          <div className="grid grid-cols-2 gap-2">
            <select className="input-field" value={empForm.department} onChange={(e) => setEmpForm({ ...empForm, department: e.target.value })}>{DEPTS.map((d) => <option key={d}>{d}</option>)}</select>
            <input className="input-field" placeholder="Role" value={empForm.role} onChange={(e) => setEmpForm({ ...empForm, role: e.target.value })} />
          </div>
          <input type="email" className="input-field" placeholder="Email" value={empForm.email} onChange={(e) => setEmpForm({ ...empForm, email: e.target.value })} />
          <select className="input-field" value={empForm.status} onChange={(e) => setEmpForm({ ...empForm, status: e.target.value })}><option>Active</option><option>On Leave</option><option>Inactive</option></select>
          <div className="flex justify-end gap-2"><button type="button" className="btn-ghost" onClick={() => setEmpModal(null)}>Cancel</button><button type="submit" className="btn-primary">Save</button></div>
        </form>
      </Modal>

      <Modal open={!!tktModal} onClose={() => setTktModal(null)} title={tktModal === 'new' ? 'New ticket' : 'Edit ticket'}>
        <form onSubmit={saveTktForm} className="space-y-3">
          <input className="input-field" placeholder="Subject" value={tktForm.subject} onChange={(e) => setTktForm({ ...tktForm, subject: e.target.value })} required />
          <select className="input-field" value={tktForm.customerId} onChange={(e) => setTktForm({ ...tktForm, customerId: e.target.value })}>{customers.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}</select>
          <div className="grid grid-cols-2 gap-2">
            <select className="input-field" value={tktForm.priority} onChange={(e) => setTktForm({ ...tktForm, priority: e.target.value })}><option>Low</option><option>Medium</option><option>High</option><option>Critical</option></select>
            <select className="input-field" value={tktForm.status} onChange={(e) => setTktForm({ ...tktForm, status: e.target.value })}>{TICKET_STATUS.map((s) => <option key={s}>{s}</option>)}</select>
          </div>
          <div className="flex justify-end gap-2"><button type="button" className="btn-ghost" onClick={() => setTktModal(null)}>Cancel</button><button type="submit" className="btn-primary">Save</button></div>
        </form>
      </Modal>

      <Modal open={!!prjModal} onClose={() => setPrjModal(null)} title={prjModal === 'new' ? 'New project' : 'Edit project'}>
        <form onSubmit={savePrjForm} className="space-y-3">
          <input className="input-field" placeholder="Name" value={prjForm.name} onChange={(e) => setPrjForm({ ...prjForm, name: e.target.value })} required />
          <div className="grid grid-cols-2 gap-2">
            <select className="input-field" value={prjForm.status} onChange={(e) => setPrjForm({ ...prjForm, status: e.target.value })}>{PROJECT_STATUS.map((s) => <option key={s}>{s}</option>)}</select>
            <input type="number" className="input-field" placeholder="Budget" value={prjForm.budget} onChange={(e) => setPrjForm({ ...prjForm, budget: e.target.value })} />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <input type="date" className="input-field" value={prjForm.start} onChange={(e) => setPrjForm({ ...prjForm, start: e.target.value })} />
            <input type="date" className="input-field" value={prjForm.end} onChange={(e) => setPrjForm({ ...prjForm, end: e.target.value })} />
          </div>
          <div className="flex justify-end gap-2"><button type="button" className="btn-ghost" onClick={() => setPrjModal(null)}>Cancel</button><button type="submit" className="btn-primary">Save</button></div>
        </form>
      </Modal>

      <Modal open={!!ctrModal} onClose={() => setCtrModal(null)} title={ctrModal === 'new' ? 'New contract' : 'Edit contract'}>
        <form onSubmit={saveCtrForm} className="space-y-3">
          <input className="input-field" placeholder="Name" value={ctrForm.name} onChange={(e) => setCtrForm({ ...ctrForm, name: e.target.value })} required />
          <div className="grid grid-cols-2 gap-2">
            <select className="input-field" value={ctrForm.type} onChange={(e) => setCtrForm({ ...ctrForm, type: e.target.value })}><option>Customer</option><option>Supplier</option><option>Employee</option></select>
            <select className="input-field" value={ctrForm.status} onChange={(e) => setCtrForm({ ...ctrForm, status: e.target.value })}>{CONTRACT_STATUS.map((s) => <option key={s}>{s}</option>)}</select>
          </div>
          <input type="number" className="input-field" placeholder="Value" value={ctrForm.value} onChange={(e) => setCtrForm({ ...ctrForm, value: e.target.value })} />
          <div className="grid grid-cols-2 gap-2">
            <input type="date" className="input-field" value={ctrForm.start} onChange={(e) => setCtrForm({ ...ctrForm, start: e.target.value })} />
            <input type="date" className="input-field" value={ctrForm.end} onChange={(e) => setCtrForm({ ...ctrForm, end: e.target.value })} />
          </div>
          <div className="flex justify-end gap-2"><button type="button" className="btn-ghost" onClick={() => setCtrModal(null)}>Cancel</button><button type="submit" className="btn-primary">Save</button></div>
        </form>
      </Modal>

      <Modal open={!!oppModal} onClose={() => setOppModal(null)} title="Add opportunity">
        <form onSubmit={(e) => { e.preventDefault(); if (!oppForm.name.trim()) return; const row = { id: uid('opp'), ...oppForm, value: Number(oppForm.value), probability: Number(oppForm.probability) }; setOpportunities((p) => [row, ...p]); toast('Opportunity created', row.name); setOppModal(null); }} className="space-y-3">
          <input className="input-field" placeholder="Name" value={oppForm.name} onChange={(e) => setOppForm({ ...oppForm, name: e.target.value })} required />
          <select className="input-field" value={oppForm.customerId} onChange={(e) => setOppForm({ ...oppForm, customerId: e.target.value })}>{customers.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}</select>
          <div className="grid grid-cols-2 gap-2">
            <input type="number" className="input-field" placeholder="Value" value={oppForm.value} onChange={(e) => setOppForm({ ...oppForm, value: e.target.value })} />
            <input type="number" className="input-field" placeholder="Probability %" value={oppForm.probability} onChange={(e) => setOppForm({ ...oppForm, probability: e.target.value })} />
          </div>
          <div className="flex justify-end gap-2"><button type="button" className="btn-ghost" onClick={() => setOppModal(null)}>Cancel</button><button type="submit" className="btn-primary">Save</button></div>
        </form>
      </Modal>

      <Modal open={profileOpen} onClose={() => setProfileOpen(false)} title="Profile">
        <div className="space-y-3 text-sm">
          <p className="text-white font-medium">{user.name}</p>
          <p className="text-slate-400">{user.email}</p>
          <p className="text-slate-500">Role: {ROLES.find((r) => r.id === role)?.name}</p>
          <button type="button" className="btn-ghost" onClick={() => { setProfileOpen(false); setPwdModal(true); }}>Change password</button>
        </div>
      </Modal>

      <Modal open={pwdModal} onClose={() => setPwdModal(false)} title="Change password">
        <form onSubmit={changePassword} className="space-y-3">
          <input type="password" className="input-field" placeholder="Current password" value={pwdForm.current} onChange={(e) => setPwdForm({ ...pwdForm, current: e.target.value })} required />
          <input type="password" className="input-field" placeholder="New password" value={pwdForm.next} onChange={(e) => setPwdForm({ ...pwdForm, next: e.target.value })} required />
          <input type="password" className="input-field" placeholder="Confirm new password" value={pwdForm.confirm} onChange={(e) => setPwdForm({ ...pwdForm, confirm: e.target.value })} required />
          <div className="flex justify-end gap-2"><button type="button" className="btn-ghost" onClick={() => setPwdModal(false)}>Cancel</button><button type="submit" className="btn-primary">Update</button></div>
        </form>
      </Modal>

      {/* Command palette */}
      <Modal open={cmdOpen} onClose={() => setCmdOpen(false)} title="Command palette">
        <input className="input-field mb-3" placeholder="Type a command…" value={cmdQuery} onChange={(e) => setCmdQuery(e.target.value)} autoFocus />
        <ul className="space-y-1 max-h-64 overflow-y-auto">
          {cmdFiltered.map((a) => (
            <li key={a.label}>
              <button type="button" className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-slate-800 hover:text-white" onClick={() => { setCmdOpen(false); a.action(); }}>{a.label}</button>
            </li>
          ))}
          {cmdFiltered.length === 0 && <li className="text-sm text-slate-500 px-3 py-4">No matches</li>}
        </ul>
      </Modal>

      {/* Notification drawer */}
      <Modal open={ntfOpen} onClose={() => setNtfOpen(false)} title="Notifications">
        <div className="flex justify-end mb-2"><button type="button" className="btn-ghost text-xs" onClick={markAllRead}>Mark all read</button></div>
        <ul className="space-y-2 max-h-80 overflow-y-auto">
          {notifications.map((n) => (
            <li key={n.id}>
              <button type="button" className={`w-full text-left px-3 py-2 rounded-lg ${n.read ? 'opacity-50' : 'bg-slate-900/50'}`} onClick={() => markRead(n.id)}>
                <p className="text-sm text-white">{n.title}</p>
                <p className="text-xs text-slate-500">{n.body}</p>
              </button>
            </li>
          ))}
        </ul>
      </Modal>

      <ConfirmDialog open={!!confirm} title={confirm?.title} message={confirm?.message} onConfirm={confirm?.onConfirm} onCancel={() => setConfirm(null)} />
      <Toast toasts={toasts} onDismiss={(id) => setToasts((p) => p.filter((t) => t.id !== id))} />
    </div>
  );
}
