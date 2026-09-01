import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import {
  LayoutDashboard, Package, ShoppingCart, Users, Search, Menu, Bell, Plus,
  X, Warehouse, AlertTriangle, ChevronRight, Trash2, Pencil, Check,
  LogOut, Truck, Box, Shield, User
} from 'lucide-react';
import {
  SEED_PRODUCTS, SEED_INVENTORY, SEED_SUPPLIERS, SEED_POS, SEED_EMPLOYEES,
  SEED_USERS, SEED_SHIPMENTS, WAREHOUSES, PO_STATUS, SHIP_STATUS, DEPTS, CATEGORIES
} from './data/seed';
import {
  loadInv, saveInv, loadPo, savePo, loadEmp, saveEmp,
  loadPrd, savePrd, loadShp, saveShp, loadSession, saveSession, clearSession, clearAllDemo
} from './utils/storage';
import { formatMoney, formatDate, uid } from './utils/formatters';
import { availableQty, adjustStock, lowStock } from './engine/inventoryEngine';
import { nextPoStatus, advancePo, poTotal } from './engine/purchaseEngine';

const ADMIN_NAV = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'products', label: 'Products', icon: Box },
  { id: 'inventory', label: 'Inventory', icon: Package },
  { id: 'orders', label: 'Purchase Orders', icon: ShoppingCart },
  { id: 'shipping', label: 'Shipping', icon: Truck },
  { id: 'hr', label: 'Employees', icon: Users },
];

const EMP_NAV = [
  { id: 'dashboard', label: 'My Dashboard', icon: LayoutDashboard },
  { id: 'inventory', label: 'Inventory', icon: Package },
  { id: 'orders', label: 'Purchase Orders', icon: ShoppingCart },
  { id: 'shipping', label: 'Shipping', icon: Truck },
];

const poColor = {
  Draft: 'bg-slate-700/60 text-slate-300',
  Submitted: 'bg-blue-900/50 text-blue-300',
  Approved: 'bg-amber-900/40 text-amber-300',
  Received: 'bg-emerald-900/40 text-emerald-300',
  Cancelled: 'bg-rose-900/40 text-rose-300',
};

const shipColor = {
  Pending: 'bg-slate-700/60 text-slate-300',
  Picked: 'bg-blue-900/50 text-blue-300',
  'In Transit': 'bg-amber-900/40 text-amber-300',
  Delivered: 'bg-emerald-900/40 text-emerald-300',
  Cancelled: 'bg-rose-900/40 text-rose-300',
};

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
          <button type="button" onClick={() => onDismiss(t.id)} className="text-slate-500 hover:text-white shrink-0" aria-label="Dismiss">
            <X className="w-4 h-4" />
          </button>
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
      <div
        role="dialog"
        aria-modal="true"
        className={`relative panel rounded-xl w-full ${wide ? 'max-w-xl' : 'max-w-md'} max-h-[90vh] overflow-y-auto shadow-2xl fade-in`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800">
          <h2 className="font-semibold text-white text-base">{title}</h2>
          <button type="button" onClick={onClose} className="p-1.5 rounded-md hover:bg-slate-800 text-slate-400" aria-label="Close">
            <X className="w-4 h-4" />
          </button>
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
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('admin');

  const submit = (e) => {
    e.preventDefault();
    const user = SEED_USERS.find(
      (u) => u.username === username.trim().toLowerCase() && u.password === password
    );
    if (!user) {
      toast('Login failed', 'Invalid username or password');
      return;
    }
    onLogin(user);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#0c0f14]">
      <div className="panel rounded-xl w-full max-w-sm p-6 shadow-xl">
        <div className="flex items-center gap-2.5 mb-6">
          <div className="w-10 h-10 rounded-lg bg-orange-600 flex items-center justify-center font-bold text-white">F</div>
          <div>
            <div className="font-semibold text-white">ForgeERP</div>
            <div className="text-xs text-slate-500">Sign in to continue</div>
          </div>
        </div>
        <form onSubmit={submit} className="space-y-3">
          <div>
            <label className="block text-xs text-slate-400 mb-1">Username</label>
            <input className="input-field" value={username} onChange={(e) => setUsername(e.target.value)} autoComplete="username" />
          </div>
          <div>
            <label className="block text-xs text-slate-400 mb-1">Password</label>
            <input type="password" className="input-field" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" />
          </div>
          <button type="submit" className="btn-primary w-full mt-2">Sign in</button>
        </form>
        <div className="mt-5 pt-4 border-t border-slate-800 text-xs text-slate-500 space-y-1">
          <p className="font-medium text-slate-400">Demo accounts</p>
          <p><span className="text-orange-400">admin</span> / admin — full access</p>
          <p><span className="text-orange-400">employee</span> / employee — limited</p>
          <p><span className="text-orange-400">buyer</span> / buyer — limited</p>
        </div>
      </div>
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
  const [whFilter, setWhFilter] = useState('All');
  const [poFilter, setPoFilter] = useState('All');
  const [shipFilter, setShipFilter] = useState('All');

  const suppliers = SEED_SUPPLIERS;
  const [products, setProducts] = useState(() => loadPrd() || SEED_PRODUCTS);
  const [inventory, setInventory] = useState(() => loadInv() || SEED_INVENTORY);
  const [purchaseOrders, setPurchaseOrders] = useState(() => loadPo() || SEED_POS);
  const [employees, setEmployees] = useState(() => loadEmp() || SEED_EMPLOYEES);
  const [shipments, setShipments] = useState(() => loadShp() || SEED_SHIPMENTS);

  const [poModal, setPoModal] = useState(null);
  const [empModal, setEmpModal] = useState(null);
  const [prdModal, setPrdModal] = useState(null);
  const [shipModal, setShipModal] = useState(null);
  const [confirm, setConfirm] = useState(null);

  const [poForm, setPoForm] = useState({ supplierId: '', productId: '', qty: 10, unitCost: 10, notes: '' });
  const [empForm, setEmpForm] = useState({ name: '', department: 'Operations', role: '', email: '', status: 'Active' });
  const [prdForm, setPrdForm] = useState({ sku: '', name: '', category: 'Fasteners', unitCost: 1, price: 2, reorderAt: 10, active: true });
  const [shipForm, setShipForm] = useState({ poId: '', carrier: 'FedEx', tracking: '', status: 'Pending', shipDate: '', eta: '', destination: 'Main DC' });

  const isAdmin = user?.role === 'admin';
  const nav = isAdmin ? ADMIN_NAV : EMP_NAV;

  useEffect(() => { saveInv(inventory); }, [inventory]);
  useEffect(() => { savePo(purchaseOrders); }, [purchaseOrders]);
  useEffect(() => { saveEmp(employees); }, [employees]);
  useEffect(() => { savePrd(products); }, [products]);
  useEffect(() => { saveShp(shipments); }, [shipments]);
  useEffect(() => { setMobileNav(false); }, [view]);

  const toast = useCallback((title, message) => {
    const id = Date.now() + Math.random();
    setToasts((p) => [...p.slice(-3), { id, title, message }]);
    setTimeout(() => setToasts((p) => p.filter((t) => t.id !== id)), 3200);
  }, []);

  const productMap = useMemo(() => Object.fromEntries(products.map((p) => [p.id, p])), [products]);
  const supplierMap = useMemo(() => Object.fromEntries(suppliers.map((s) => [s.id, s])), [suppliers]);

  const low = useMemo(() => lowStock(inventory, products), [inventory, products]);
  const totalUnits = useMemo(() => inventory.reduce((s, r) => s + availableQty(r), 0), [inventory]);
  const openPos = useMemo(() => purchaseOrders.filter((p) => !['Received', 'Cancelled'].includes(p.status)).length, [purchaseOrders]);
  const openShips = useMemo(() => shipments.filter((s) => !['Delivered', 'Cancelled'].includes(s.status)).length, [shipments]);

  const filteredInv = useMemo(() => {
    let list = inventory;
    if (whFilter !== 'All') list = list.filter((r) => r.warehouse === whFilter);
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter((r) => {
        const p = productMap[r.productId];
        return (p?.name || '').toLowerCase().includes(q) || (p?.sku || '').toLowerCase().includes(q) || r.warehouse.toLowerCase().includes(q);
      });
    }
    return list;
  }, [inventory, whFilter, query, productMap]);

  const filteredPos = useMemo(() => {
    let list = purchaseOrders;
    if (poFilter !== 'All') list = list.filter((p) => p.status === poFilter);
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter((p) => (supplierMap[p.supplierId]?.name || '').toLowerCase().includes(q) || p.id.toLowerCase().includes(q));
    }
    return list;
  }, [purchaseOrders, poFilter, query, supplierMap]);

  const filteredEmp = useMemo(() => {
    if (!query.trim()) return employees;
    const q = query.toLowerCase();
    return employees.filter((e) => e.name.toLowerCase().includes(q) || e.department.toLowerCase().includes(q) || e.email.toLowerCase().includes(q) || e.role.toLowerCase().includes(q));
  }, [employees, query]);

  const filteredPrd = useMemo(() => {
    if (!query.trim()) return products;
    const q = query.toLowerCase();
    return products.filter((p) => p.name.toLowerCase().includes(q) || p.sku.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
  }, [products, query]);

  const filteredShp = useMemo(() => {
    let list = shipments;
    if (shipFilter !== 'All') list = list.filter((s) => s.status === shipFilter);
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter((s) => s.id.toLowerCase().includes(q) || (s.tracking || '').toLowerCase().includes(q) || (s.carrier || '').toLowerCase().includes(q));
    }
    return list;
  }, [shipments, shipFilter, query]);

  const handleLogin = (u) => {
    const session = { id: u.id, username: u.username, name: u.name, role: u.role, email: u.email };
    setUser(session);
    saveSession(session);
    setView('dashboard');
    toast('Welcome', `${u.name} (${u.role})`);
  };

  const handleLogout = () => {
    clearSession();
    setUser(null);
    setView('dashboard');
    toast('Signed out', 'See you later');
  };

  const receiveStock = (row, amount = 10) => {
    setInventory((inv) => adjustStock(inv, row.id, amount));
    toast('Stock received', `+${amount} · ${productMap[row.productId]?.name || row.productId}`);
  };

  const issueStock = (row, amount = 5) => {
    if (availableQty(row) < amount) {
      toast('Not enough stock', `Only ${availableQty(row)} available`);
      return;
    }
    setInventory((inv) => adjustStock(inv, row.id, -amount));
    toast('Stock issued', `−${amount} · ${productMap[row.productId]?.name || row.productId}`);
  };

  // —— Products ——
  const openNewPrd = () => {
    setPrdForm({ sku: '', name: '', category: 'Fasteners', unitCost: 1, price: 2, reorderAt: 10, active: true });
    setPrdModal('new');
  };
  const savePrdForm = (e) => {
    e.preventDefault();
    if (!prdForm.sku.trim() || !prdForm.name.trim()) {
      toast('Validation', 'SKU and name are required');
      return;
    }
    if (prdModal === 'new') {
      if (products.some((p) => p.sku.toLowerCase() === prdForm.sku.trim().toLowerCase())) {
        toast('Duplicate SKU', 'That SKU already exists');
        return;
      }
      const row = { id: uid('prd'), ...prdForm, sku: prdForm.sku.trim().toUpperCase(), unitCost: Number(prdForm.unitCost), price: Number(prdForm.price), reorderAt: Number(prdForm.reorderAt) };
      setProducts((p) => [row, ...p]);
      // create inventory row at Main DC
      setInventory((inv) => [...inv, { id: uid('inv'), productId: row.id, warehouse: 'Main DC', qty: 0, reserved: 0 }]);
      toast('Product added', row.name);
    } else {
      setProducts((p) => p.map((x) => x.id === prdModal.id ? { ...x, ...prdForm, unitCost: Number(prdForm.unitCost), price: Number(prdForm.price), reorderAt: Number(prdForm.reorderAt) } : x));
      toast('Product updated', prdForm.name);
    }
    setPrdModal(null);
  };
  const deletePrd = (prd) => {
    setConfirm({
      title: 'Delete product?',
      message: `Remove ${prd.name} (${prd.sku})? Related inventory rows stay but product link will be missing.`,
      onConfirm: () => {
        setProducts((p) => p.filter((x) => x.id !== prd.id));
        toast('Product deleted', prd.sku);
        setConfirm(null);
      },
    });
  };

  // —— POs ——
  const openNewPo = () => {
    setPoForm({ supplierId: suppliers[0]?.id || '', productId: products[0]?.id || '', qty: 10, unitCost: products[0]?.unitCost || 10, notes: '' });
    setPoModal('new');
  };
  const savePoForm = (e) => {
    e.preventDefault();
    const qty = Number(poForm.qty);
    const unitCost = Number(poForm.unitCost);
    if (!poForm.supplierId || !qty || qty <= 0) {
      toast('Check form', 'Supplier and positive qty required');
      return;
    }
    if (poModal === 'new') {
      const row = {
        id: uid('po'),
        supplierId: poForm.supplierId,
        status: 'Draft',
        total: qty * unitCost,
        orderedAt: new Date().toISOString().slice(0, 10),
        lines: [{ productId: poForm.productId, qty, unitCost }],
        notes: poForm.notes || '',
      };
      setPurchaseOrders((p) => [row, ...p]);
      toast('PO created', row.id);
    } else {
      setPurchaseOrders((p) => p.map((x) => x.id === poModal.id
        ? { ...x, supplierId: poForm.supplierId, total: qty * unitCost, lines: [{ productId: poForm.productId, qty, unitCost }], notes: poForm.notes || '' }
        : x));
      toast('PO updated', poModal.id);
    }
    setPoModal(null);
  };
  const advancePoRow = (po) => {
    if (['Received', 'Cancelled'].includes(po.status)) {
      toast('Already closed', 'This PO cannot be advanced');
      return;
    }
    const next = advancePo(po);
    setPurchaseOrders((p) => p.map((x) => (x.id === po.id ? next : x)));
    if (next.status === 'Received') {
      const line = (po.lines || [])[0];
      if (line) {
        const invRow = inventory.find((r) => r.productId === line.productId && r.warehouse === 'Main DC') || inventory.find((r) => r.productId === line.productId);
        if (invRow) setInventory((inv) => adjustStock(inv, invRow.id, line.qty || 0));
      }
      toast('PO received', 'Inventory updated');
    } else {
      toast('Status updated', `${po.status} → ${next.status}`);
    }
  };
  const cancelPo = (id) => {
    setConfirm({
      title: 'Cancel purchase order?',
      message: `Mark ${id} as Cancelled?`,
      onConfirm: () => {
        setPurchaseOrders((p) => p.map((x) => (x.id === id ? { ...x, status: 'Cancelled' } : x)));
        toast('PO cancelled', id);
        setConfirm(null);
      },
    });
  };

  // —— Employees ——
  const openNewEmp = () => {
    if (!isAdmin) { toast('Access denied', 'Only admins can add employees'); return; }
    setEmpForm({ name: '', department: 'Operations', role: '', email: '', status: 'Active' });
    setEmpModal('new');
  };
  const saveEmpForm = (e) => {
    e.preventDefault();
    if (!empForm.name.trim()) { toast('Name required', 'Please enter a full name'); return; }
    if (empModal === 'new') {
      const row = { id: uid('emp'), ...empForm, email: empForm.email || `${empForm.name.toLowerCase().replace(/\s+/g, '.')}@forge.local`, access: ['inventory'] };
      setEmployees((p) => [row, ...p]);
      toast('Employee added', row.name);
    } else {
      setEmployees((p) => p.map((x) => (x.id === empModal.id ? { ...x, ...empForm } : x)));
      toast('Employee updated', empForm.name);
    }
    setEmpModal(null);
  };
  const deleteEmp = (emp) => {
    if (!isAdmin) { toast('Access denied', 'Only admins can remove employees'); return; }
    setConfirm({
      title: 'Remove employee?',
      message: `Delete ${emp.name}?`,
      onConfirm: () => {
        setEmployees((p) => p.filter((x) => x.id !== emp.id));
        toast('Employee removed', emp.name);
        setConfirm(null);
      },
    });
  };

  // —— Shipping ——
  const openNewShip = () => {
    const openPo = purchaseOrders.find((p) => p.status === 'Approved' || p.status === 'Received');
    setShipForm({
      poId: openPo?.id || purchaseOrders[0]?.id || '',
      carrier: 'FedEx',
      tracking: '',
      status: 'Pending',
      shipDate: new Date().toISOString().slice(0, 10),
      eta: '',
      destination: 'Main DC',
    });
    setShipModal('new');
  };
  const saveShipForm = (e) => {
    e.preventDefault();
    if (!shipForm.poId) { toast('Validation', 'Link a purchase order'); return; }
    const po = purchaseOrders.find((p) => p.id === shipForm.poId);
    const lines = po?.lines || [];
    if (shipModal === 'new') {
      const row = {
        id: uid('shp'),
        ...shipForm,
        tracking: shipForm.tracking || `TRK-${Date.now().toString(36).toUpperCase()}`,
        lines,
      };
      setShipments((p) => [row, ...p]);
      toast('Shipment created', row.id);
    } else {
      setShipments((p) => p.map((x) => (x.id === shipModal.id ? { ...x, ...shipForm } : x)));
      toast('Shipment updated', shipModal.id);
    }
    setShipModal(null);
  };
  const advanceShip = (ship) => {
    const flow = { Pending: 'Picked', Picked: 'In Transit', 'In Transit': 'Delivered' };
    const next = flow[ship.status];
    if (!next) { toast('Closed', 'Cannot advance this shipment'); return; }
    setShipments((p) => p.map((x) => (x.id === ship.id ? { ...x, status: next } : x)));
    toast('Shipment updated', `${ship.status} → ${next}`);
  };
  const cancelShip = (id) => {
    setConfirm({
      title: 'Cancel shipment?',
      message: `Mark ${id} as Cancelled?`,
      onConfirm: () => {
        setShipments((p) => p.map((x) => (x.id === id ? { ...x, status: 'Cancelled' } : x)));
        toast('Shipment cancelled', id);
        setConfirm(null);
      },
    });
  };

  const resetDemo = () => {
    if (!isAdmin) { toast('Access denied', 'Admin only'); return; }
    setConfirm({
      title: 'Reset demo data?',
      message: 'Restores seed data and clears local changes.',
      onConfirm: () => {
        clearAllDemo();
        setProducts(SEED_PRODUCTS);
        setInventory(SEED_INVENTORY);
        setPurchaseOrders(SEED_POS);
        setEmployees(SEED_EMPLOYEES);
        setShipments(SEED_SHIPMENTS);
        toast('Demo reset', 'Seed data restored');
        setConfirm(null);
      },
    });
  };

  const go = (id) => {
    // employees cannot open products/hr
    if (!isAdmin && (id === 'products' || id === 'hr')) {
      toast('Access denied', 'Admin only');
      return;
    }
    setView(id);
    setQuery('');
  };

  if (!user) {
    return (
      <>
        <LoginScreen onLogin={handleLogin} toast={toast} />
        <Toast toasts={toasts} onDismiss={(id) => setToasts((p) => p.filter((t) => t.id !== id))} />
      </>
    );
  }

  const SidebarContent = ({ compact }) => (
    <>
      <div className="h-14 flex items-center gap-2.5 px-3 border-b border-slate-800 shrink-0">
        <div className="w-8 h-8 rounded-lg bg-orange-600 flex items-center justify-center font-bold text-sm text-white shrink-0">F</div>
        {!compact && (
          <div className="min-w-0">
            <div className="font-semibold text-white text-sm leading-tight">ForgeERP</div>
            <div className="text-[10px] text-slate-500 flex items-center gap-1">
              {isAdmin ? <Shield className="w-3 h-3" /> : <User className="w-3 h-3" />}
              {isAdmin ? 'Admin' : 'Employee'}
            </div>
          </div>
        )}
      </div>
      <nav className="flex-1 p-2 space-y-0.5 overflow-y-auto">
        {nav.map((item) => {
          const Icon = item.icon;
          const active = view === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => go(item.id)}
              className={`nav-item ${active ? 'active' : ''} ${compact ? 'justify-center px-2' : ''}`}
              title={item.label}
            >
              <Icon className="w-4 h-4 shrink-0" />
              {!compact && <span>{item.label}</span>}
            </button>
          );
        })}
      </nav>
      {!compact && (
        <div className="p-2 border-t border-slate-800 space-y-1">
          <div className="px-3 py-1.5 text-xs text-slate-500 truncate">{user.name}</div>
          {isAdmin && (
            <button type="button" onClick={resetDemo} className="nav-item text-xs text-slate-500 hover:text-slate-300">
              Reset demo data
            </button>
          )}
          <button type="button" onClick={handleLogout} className="nav-item text-xs text-rose-400 hover:text-rose-300">
            <LogOut className="w-3.5 h-3.5" /> Sign out
          </button>
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
          <button
            type="button"
            onClick={() => {
              if (window.innerWidth < 768) setMobileNav((v) => !v);
              else setSidebarOpen((v) => !v);
            }}
            className="p-2 rounded-lg hover:bg-slate-800 text-slate-400"
            aria-label="Toggle menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div className="flex-1 max-w-sm relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none z-10" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search"
              className="w-full rounded-lg bg-[#0a0d12] border border-slate-700 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500/40 focus:border-orange-500 py-1.5 pl-10 pr-9"
            />
            {query && (
              <button type="button" onClick={() => setQuery('')} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white z-10" aria-label="Clear search">
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <button
            type="button"
            onClick={() => toast('Alerts', low.length ? `${low.length} low-stock item(s)` : 'No low-stock alerts')}
            className="p-2 rounded-lg hover:bg-slate-800 text-slate-400 relative"
            aria-label="Notifications"
          >
            <Bell className="w-5 h-5" />
            {low.length > 0 && <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-orange-500" />}
          </button>
        </header>

        <main className="flex-1 overflow-y-auto p-4 md:p-5">
          {/* DASHBOARD */}
          {view === 'dashboard' && (
            <div className="space-y-5 fade-in">
              <div>
                <h1 className="text-xl font-semibold text-white">{isAdmin ? 'Admin Dashboard' : 'My Dashboard'}</h1>
                <p className="text-sm text-slate-500 mt-0.5">Signed in as {user.name}</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                <button type="button" onClick={() => go('inventory')} className="kpi-card">
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-xs text-slate-500 uppercase tracking-wide">Available units</span>
                    <Warehouse className="w-4 h-4 text-orange-400" />
                  </div>
                  <p className="text-2xl font-semibold text-white tabular-nums">{totalUnits.toLocaleString()}</p>
                </button>
                <button type="button" onClick={() => go('orders')} className="kpi-card">
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-xs text-slate-500 uppercase tracking-wide">Open POs</span>
                    <ShoppingCart className="w-4 h-4 text-blue-400" />
                  </div>
                  <p className="text-2xl font-semibold text-white tabular-nums">{openPos}</p>
                </button>
                <button type="button" onClick={() => go('shipping')} className="kpi-card">
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-xs text-slate-500 uppercase tracking-wide">Active shipments</span>
                    <Truck className="w-4 h-4 text-indigo-400" />
                  </div>
                  <p className="text-2xl font-semibold text-white tabular-nums">{openShips}</p>
                </button>
                <button type="button" onClick={() => go('inventory')} className="kpi-card">
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-xs text-slate-500 uppercase tracking-wide">Low stock</span>
                    <AlertTriangle className="w-4 h-4 text-amber-400" />
                  </div>
                  <p className="text-2xl font-semibold text-white tabular-nums">{low.length}</p>
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {isAdmin && <button type="button" onClick={openNewPrd} className="btn-primary flex items-center gap-1.5"><Plus className="w-4 h-4" /> New product</button>}
                <button type="button" onClick={openNewPo} className="btn-primary flex items-center gap-1.5"><Plus className="w-4 h-4" /> New PO</button>
                <button type="button" onClick={openNewShip} className="btn-ghost">New shipment</button>
                {isAdmin && <button type="button" onClick={openNewEmp} className="btn-ghost">Add employee</button>}
              </div>
              <div className="panel rounded-xl overflow-hidden">
                <div className="px-4 py-3 border-b border-slate-800 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-400" />
                  <h2 className="font-medium text-sm text-white">Low stock</h2>
                </div>
                {low.length === 0 ? (
                  <p className="p-6 text-center text-sm text-slate-500">All items above reorder point.</p>
                ) : (
                  <ul className="divide-y divide-slate-800/80">
                    {low.map((r) => {
                      const p = productMap[r.productId];
                      return (
                        <li key={r.id} className="flex items-center justify-between gap-3 px-4 py-2.5 hover:bg-slate-800/30">
                          <div className="min-w-0">
                            <p className="text-sm text-white truncate">{p?.name || r.productId}</p>
                            <p className="text-xs text-slate-500">{r.warehouse} · avail {availableQty(r)} / reorder {p?.reorderAt}</p>
                          </div>
                          <button type="button" onClick={() => receiveStock(r, 25)} className="btn-ghost text-xs shrink-0">Receive +25</button>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </div>
          )}

          {/* PRODUCTS (admin) */}
          {view === 'products' && isAdmin && (
            <div className="space-y-4 fade-in">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h1 className="text-xl font-semibold text-white">Products</h1>
                <button type="button" onClick={openNewPrd} className="btn-primary flex items-center gap-1.5"><Plus className="w-4 h-4" /> Add product</button>
              </div>
              <div className="panel rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full data-table">
                    <thead>
                      <tr>
                        <th>SKU</th>
                        <th>Name</th>
                        <th className="hidden sm:table-cell">Category</th>
                        <th className="text-right">Cost</th>
                        <th className="text-right hidden sm:table-cell">Price</th>
                        <th className="text-right">Reorder</th>
                        <th className="text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredPrd.map((p) => (
                        <tr key={p.id}>
                          <td className="font-mono text-xs text-slate-400">{p.sku}</td>
                          <td className="text-white font-medium">{p.name}</td>
                          <td className="hidden sm:table-cell text-slate-400">{p.category}</td>
                          <td className="text-right tabular-nums">{formatMoney(p.unitCost)}</td>
                          <td className="text-right tabular-nums hidden sm:table-cell">{formatMoney(p.price)}</td>
                          <td className="text-right tabular-nums">{p.reorderAt}</td>
                          <td className="text-right">
                            <div className="inline-flex gap-1">
                              <button type="button" className="btn-ghost text-xs py-1 px-2" onClick={() => { setPrdForm({ sku: p.sku, name: p.name, category: p.category, unitCost: p.unitCost, price: p.price, reorderAt: p.reorderAt, active: p.active !== false }); setPrdModal(p); }}>
                                <Pencil className="w-3 h-3" />
                              </button>
                              <button type="button" className="btn-danger text-xs py-1 px-2" onClick={() => deletePrd(p)}>
                                <Trash2 className="w-3 h-3" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {filteredPrd.length === 0 && <p className="p-8 text-center text-sm text-slate-500">No products match.</p>}
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
                  {WAREHOUSES.map((w) => <option key={w} value={w}>{w}</option>)}
                </select>
              </div>
              <div className="panel rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full data-table">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th className="hidden sm:table-cell">Warehouse</th>
                        <th className="text-right">On hand</th>
                        <th className="text-right hidden sm:table-cell">Available</th>
                        <th className="text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredInv.map((r) => {
                        const p = productMap[r.productId];
                        const avail = availableQty(r);
                        const isLow = p && avail <= (p.reorderAt || 0);
                        return (
                          <tr key={r.id}>
                            <td>
                              <p className="font-medium text-white">{p?.name || r.productId}</p>
                              <p className="text-xs text-slate-500 font-mono">{p?.sku}</p>
                            </td>
                            <td className="hidden sm:table-cell text-slate-400">{r.warehouse}</td>
                            <td className="text-right tabular-nums">{r.qty}</td>
                            <td className={`text-right tabular-nums hidden sm:table-cell ${isLow ? 'text-amber-400' : ''}`}>{avail}</td>
                            <td className="text-right">
                              <div className="inline-flex gap-1">
                                <button type="button" onClick={() => receiveStock(r, 10)} className="btn-ghost text-xs py-1 px-2">+10</button>
                                <button type="button" onClick={() => issueStock(r, 5)} className="btn-ghost text-xs py-1 px-2">−5</button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                {filteredInv.length === 0 && <p className="p-8 text-center text-sm text-slate-500">No rows match.</p>}
              </div>
            </div>
          )}

          {/* ORDERS */}
          {view === 'orders' && (
            <div className="space-y-4 fade-in">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h1 className="text-xl font-semibold text-white">Purchase Orders</h1>
                <div className="flex flex-wrap gap-2">
                  <select value={poFilter} onChange={(e) => setPoFilter(e.target.value)} className="input-field w-auto py-1.5">
                    <option value="All">All statuses</option>
                    {PO_STATUS.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                  <button type="button" onClick={openNewPo} className="btn-primary flex items-center gap-1.5"><Plus className="w-4 h-4" /> New PO</button>
                </div>
              </div>
              <div className="space-y-2">
                {filteredPos.map((po) => {
                  const sup = supplierMap[po.supplierId];
                  const line = (po.lines || [])[0];
                  const prod = line ? productMap[line.productId] : null;
                  const canAdvance = !['Received', 'Cancelled'].includes(po.status);
                  const next = nextPoStatus(po.status);
                  return (
                    <div key={po.id} className="panel rounded-xl px-4 py-3 flex flex-wrap items-center gap-3">
                      <div className="min-w-[90px]">
                        <p className="text-sm font-mono text-white">{po.id}</p>
                        <p className="text-xs text-slate-500">{formatDate(po.orderedAt)}</p>
                      </div>
                      <div className="flex-1 min-w-[140px]">
                        <p className="text-sm text-white">{sup?.name || po.supplierId}</p>
                        <p className="text-xs text-slate-500">{prod?.name || line?.productId} · qty {line?.qty}</p>
                      </div>
                      <span className="text-sm font-medium tabular-nums">{formatMoney(po.total ?? poTotal(po))}</span>
                      <span className={`status-pill ${poColor[po.status] || 'bg-slate-700 text-slate-300'}`}>{po.status}</span>
                      <div className="flex flex-wrap gap-1 ml-auto">
                        {canAdvance && (
                          <button type="button" onClick={() => advancePoRow(po)} className="btn-ghost text-xs py-1 flex items-center gap-1">
                            Advance{next !== po.status && <><ChevronRight className="w-3 h-3" />{next}</>}
                          </button>
                        )}
                        {po.status === 'Draft' && (
                          <button type="button" onClick={() => {
                            setPoForm({ supplierId: po.supplierId, productId: line?.productId || products[0]?.id, qty: line?.qty || 10, unitCost: line?.unitCost || 10, notes: po.notes || '' });
                            setPoModal(po);
                          }} className="btn-ghost text-xs py-1 flex items-center gap-1"><Pencil className="w-3 h-3" /> Edit</button>
                        )}
                        {canAdvance && (
                          <button type="button" onClick={() => cancelPo(po.id)} className="btn-danger text-xs py-1">Cancel</button>
                        )}
                      </div>
                    </div>
                  );
                })}
                {filteredPos.length === 0 && <p className="text-center text-slate-500 py-12 text-sm">No purchase orders match.</p>}
              </div>
            </div>
          )}

          {/* SHIPPING */}
          {view === 'shipping' && (
            <div className="space-y-4 fade-in">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h1 className="text-xl font-semibold text-white">Shipping</h1>
                <div className="flex flex-wrap gap-2">
                  <select value={shipFilter} onChange={(e) => setShipFilter(e.target.value)} className="input-field w-auto py-1.5">
                    <option value="All">All statuses</option>
                    {SHIP_STATUS.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                  <button type="button" onClick={openNewShip} className="btn-primary flex items-center gap-1.5"><Plus className="w-4 h-4" /> New shipment</button>
                </div>
              </div>
              <div className="space-y-2">
                {filteredShp.map((ship) => {
                  const canAdvance = !['Delivered', 'Cancelled'].includes(ship.status);
                  return (
                    <div key={ship.id} className="panel rounded-xl px-4 py-3 flex flex-wrap items-center gap-3">
                      <div className="min-w-[90px]">
                        <p className="text-sm font-mono text-white">{ship.id}</p>
                        <p className="text-xs text-slate-500">PO {ship.poId}</p>
                      </div>
                      <div className="flex-1 min-w-[140px]">
                        <p className="text-sm text-white">{ship.carrier} · {ship.tracking}</p>
                        <p className="text-xs text-slate-500">
                          {ship.destination} · ship {ship.shipDate || '—'} · ETA {ship.eta || '—'}
                        </p>
                      </div>
                      <span className={`status-pill ${shipColor[ship.status] || 'bg-slate-700 text-slate-300'}`}>{ship.status}</span>
                      <div className="flex flex-wrap gap-1 ml-auto">
                        {canAdvance && (
                          <button type="button" onClick={() => advanceShip(ship)} className="btn-ghost text-xs py-1">Advance</button>
                        )}
                        <button type="button" onClick={() => {
                          setShipForm({ poId: ship.poId, carrier: ship.carrier, tracking: ship.tracking, status: ship.status, shipDate: ship.shipDate || '', eta: ship.eta || '', destination: ship.destination || 'Main DC' });
                          setShipModal(ship);
                        }} className="btn-ghost text-xs py-1 flex items-center gap-1"><Pencil className="w-3 h-3" /> Edit</button>
                        {canAdvance && (
                          <button type="button" onClick={() => cancelShip(ship.id)} className="btn-danger text-xs py-1">Cancel</button>
                        )}
                      </div>
                    </div>
                  );
                })}
                {filteredShp.length === 0 && <p className="text-center text-slate-500 py-12 text-sm">No shipments match.</p>}
              </div>
            </div>
          )}

          {/* HR */}
          {view === 'hr' && isAdmin && (
            <div className="space-y-4 fade-in">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h1 className="text-xl font-semibold text-white">Employees</h1>
                <button type="button" onClick={openNewEmp} className="btn-primary flex items-center gap-1.5"><Plus className="w-4 h-4" /> Add employee</button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
                {filteredEmp.map((e) => (
                  <div key={e.id} className="panel rounded-xl p-4">
                    <div className="flex justify-between items-start gap-2 mb-2">
                      <div className="min-w-0">
                        <p className="font-medium text-white truncate">{e.name}</p>
                        <p className="text-xs text-slate-400">{e.role} · {e.department}</p>
                      </div>
                      <span className={`text-[10px] uppercase font-medium shrink-0 ${e.status === 'Active' ? 'text-emerald-400' : 'text-amber-400'}`}>{e.status}</span>
                    </div>
                    <p className="text-xs text-slate-500 mb-3 truncate">{e.email}</p>
                    <div className="flex gap-1.5">
                      <button type="button" onClick={() => { setEmpForm({ name: e.name, department: e.department, role: e.role, email: e.email, status: e.status }); setEmpModal(e); }} className="btn-ghost text-xs py-1 flex items-center gap-1"><Pencil className="w-3 h-3" /> Edit</button>
                      <button type="button" onClick={() => deleteEmp(e)} className="btn-danger text-xs py-1 flex items-center gap-1"><Trash2 className="w-3 h-3" /> Delete</button>
                    </div>
                  </div>
                ))}
              </div>
              {filteredEmp.length === 0 && <p className="text-center text-slate-500 py-12 text-sm">No employees match.</p>}
            </div>
          )}
        </main>
      </div>

      {/* Product Modal */}
      <Modal open={!!prdModal} onClose={() => setPrdModal(null)} title={prdModal === 'new' ? 'Add product' : 'Edit product'}>
        <form onSubmit={savePrdForm} className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs text-slate-400 mb-1">SKU</label>
              <input className="input-field" value={prdForm.sku} onChange={(e) => setPrdForm({ ...prdForm, sku: e.target.value })} disabled={prdModal !== 'new'} />
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1">Category</label>
              <select className="input-field" value={prdForm.category} onChange={(e) => setPrdForm({ ...prdForm, category: e.target.value })}>
                {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
          </div>
          <div>
            <label className="block text-xs text-slate-400 mb-1">Name</label>
            <input className="input-field" value={prdForm.name} onChange={(e) => setPrdForm({ ...prdForm, name: e.target.value })} />
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block text-xs text-slate-400 mb-1">Unit cost</label>
              <input type="number" step="0.01" min="0" className="input-field" value={prdForm.unitCost} onChange={(e) => setPrdForm({ ...prdForm, unitCost: e.target.value })} />
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1">Price</label>
              <input type="number" step="0.01" min="0" className="input-field" value={prdForm.price} onChange={(e) => setPrdForm({ ...prdForm, price: e.target.value })} />
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1">Reorder at</label>
              <input type="number" min="0" className="input-field" value={prdForm.reorderAt} onChange={(e) => setPrdForm({ ...prdForm, reorderAt: e.target.value })} />
            </div>
          </div>
          <div className="flex justify-end gap-2 pt-1">
            <button type="button" onClick={() => setPrdModal(null)} className="btn-ghost">Cancel</button>
            <button type="submit" className="btn-primary flex items-center gap-1"><Check className="w-3.5 h-3.5" /> Save</button>
          </div>
        </form>
      </Modal>

      {/* PO Modal */}
      <Modal open={!!poModal} onClose={() => setPoModal(null)} title={poModal === 'new' ? 'New purchase order' : 'Edit purchase order'}>
        <form onSubmit={savePoForm} className="space-y-3">
          <div>
            <label className="block text-xs text-slate-400 mb-1">Supplier</label>
            <select className="input-field" value={poForm.supplierId} onChange={(e) => setPoForm({ ...poForm, supplierId: e.target.value })}>
              {suppliers.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-xs text-slate-400 mb-1">Product</label>
            <select className="input-field" value={poForm.productId} onChange={(e) => {
              const p = productMap[e.target.value];
              setPoForm({ ...poForm, productId: e.target.value, unitCost: p?.unitCost ?? poForm.unitCost });
            }}>
              {products.map((p) => <option key={p.id} value={p.id}>{p.sku} — {p.name}</option>)}
            </select>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs text-slate-400 mb-1">Qty</label>
              <input type="number" min="1" className="input-field" value={poForm.qty} onChange={(e) => setPoForm({ ...poForm, qty: e.target.value })} />
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1">Unit cost</label>
              <input type="number" step="0.01" min="0" className="input-field" value={poForm.unitCost} onChange={(e) => setPoForm({ ...poForm, unitCost: e.target.value })} />
            </div>
          </div>
          <div>
            <label className="block text-xs text-slate-400 mb-1">Notes</label>
            <input className="input-field" value={poForm.notes} onChange={(e) => setPoForm({ ...poForm, notes: e.target.value })} placeholder="Optional" />
          </div>
          <p className="text-xs text-slate-500">Line total: {formatMoney((Number(poForm.qty) || 0) * (Number(poForm.unitCost) || 0))}</p>
          <div className="flex justify-end gap-2 pt-1">
            <button type="button" onClick={() => setPoModal(null)} className="btn-ghost">Cancel</button>
            <button type="submit" className="btn-primary flex items-center gap-1"><Check className="w-3.5 h-3.5" /> Save</button>
          </div>
        </form>
      </Modal>

      {/* Employee Modal */}
      <Modal open={!!empModal} onClose={() => setEmpModal(null)} title={empModal === 'new' ? 'Add employee' : 'Edit employee'}>
        <form onSubmit={saveEmpForm} className="space-y-3">
          <div>
            <label className="block text-xs text-slate-400 mb-1">Name</label>
            <input className="input-field" value={empForm.name} onChange={(e) => setEmpForm({ ...empForm, name: e.target.value })} autoFocus />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs text-slate-400 mb-1">Department</label>
              <select className="input-field" value={empForm.department} onChange={(e) => setEmpForm({ ...empForm, department: e.target.value })}>
                {DEPTS.map((d) => <option key={d} value={d}>{d}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1">Role</label>
              <input className="input-field" value={empForm.role} onChange={(e) => setEmpForm({ ...empForm, role: e.target.value })} />
            </div>
          </div>
          <div>
            <label className="block text-xs text-slate-400 mb-1">Email</label>
            <input type="email" className="input-field" value={empForm.email} onChange={(e) => setEmpForm({ ...empForm, email: e.target.value })} />
          </div>
          <div>
            <label className="block text-xs text-slate-400 mb-1">Status</label>
            <select className="input-field" value={empForm.status} onChange={(e) => setEmpForm({ ...empForm, status: e.target.value })}>
              <option value="Active">Active</option>
              <option value="On Leave">On Leave</option>
            </select>
          </div>
          <div className="flex justify-end gap-2 pt-1">
            <button type="button" onClick={() => setEmpModal(null)} className="btn-ghost">Cancel</button>
            <button type="submit" className="btn-primary flex items-center gap-1"><Check className="w-3.5 h-3.5" /> Save</button>
          </div>
        </form>
      </Modal>

      {/* Shipment Modal */}
      <Modal open={!!shipModal} onClose={() => setShipModal(null)} title={shipModal === 'new' ? 'New shipment' : 'Edit shipment'}>
        <form onSubmit={saveShipForm} className="space-y-3">
          <div>
            <label className="block text-xs text-slate-400 mb-1">Purchase order</label>
            <select className="input-field" value={shipForm.poId} onChange={(e) => setShipForm({ ...shipForm, poId: e.target.value })}>
              {purchaseOrders.map((p) => <option key={p.id} value={p.id}>{p.id} · {p.status}</option>)}
            </select>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs text-slate-400 mb-1">Carrier</label>
              <select className="input-field" value={shipForm.carrier} onChange={(e) => setShipForm({ ...shipForm, carrier: e.target.value })}>
                <option>FedEx</option>
                <option>UPS</option>
                <option>DHL</option>
                <option>USPS</option>
                <option>Freight</option>
              </select>
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1">Tracking</label>
              <input className="input-field" value={shipForm.tracking} onChange={(e) => setShipForm({ ...shipForm, tracking: e.target.value })} placeholder="Auto if empty" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs text-slate-400 mb-1">Ship date</label>
              <input type="date" className="input-field" value={shipForm.shipDate} onChange={(e) => setShipForm({ ...shipForm, shipDate: e.target.value })} />
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1">ETA</label>
              <input type="date" className="input-field" value={shipForm.eta} onChange={(e) => setShipForm({ ...shipForm, eta: e.target.value })} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs text-slate-400 mb-1">Destination</label>
              <select className="input-field" value={shipForm.destination} onChange={(e) => setShipForm({ ...shipForm, destination: e.target.value })}>
                {WAREHOUSES.map((w) => <option key={w} value={w}>{w}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1">Status</label>
              <select className="input-field" value={shipForm.status} onChange={(e) => setShipForm({ ...shipForm, status: e.target.value })}>
                {SHIP_STATUS.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
          </div>
          <div className="flex justify-end gap-2 pt-1">
            <button type="button" onClick={() => setShipModal(null)} className="btn-ghost">Cancel</button>
            <button type="submit" className="btn-primary flex items-center gap-1"><Check className="w-3.5 h-3.5" /> Save</button>
          </div>
        </form>
      </Modal>

      <ConfirmDialog open={!!confirm} title={confirm?.title} message={confirm?.message} onConfirm={confirm?.onConfirm} onCancel={() => setConfirm(null)} />
      <Toast toasts={toasts} onDismiss={(id) => setToasts((p) => p.filter((t) => t.id !== id))} />
    </div>
  );
}
