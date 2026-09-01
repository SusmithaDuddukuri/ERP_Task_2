import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import {
  LayoutDashboard, Package, ShoppingCart, Users, Search, Menu, Bell, Plus,
  X, Warehouse, AlertTriangle, ChevronRight, Trash2, Pencil, Check
} from 'lucide-react';
import {
  SEED_PRODUCTS, SEED_INVENTORY, SEED_SUPPLIERS, SEED_POS, SEED_EMPLOYEES,
  WAREHOUSES, PO_STATUS, DEPTS
} from './data/seed';
import { loadInv, saveInv, loadPo, savePo, loadEmp, saveEmp } from './utils/storage';
import { formatMoney, formatDate, uid } from './utils/formatters';
import { availableQty, adjustStock, lowStock } from './engine/inventoryEngine';
import { nextPoStatus, advancePo, poTotal } from './engine/purchaseEngine';

const NAV = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'inventory', label: 'Inventory', icon: Package },
  { id: 'orders', label: 'Purchase Orders', icon: ShoppingCart },
  { id: 'hr', label: 'Employees', icon: Users },
];

const poColor = {
  Draft: 'bg-slate-700/60 text-slate-300',
  Submitted: 'bg-blue-900/50 text-blue-300',
  Approved: 'bg-amber-900/40 text-amber-300',
  Received: 'bg-emerald-900/40 text-emerald-300',
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
  const ref = useRef(null);

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
        ref={ref}
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

export default function App() {
  const [view, setView] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileNav, setMobileNav] = useState(false);
  const [query, setQuery] = useState('');
  const [toasts, setToasts] = useState([]);
  const [whFilter, setWhFilter] = useState('All');
  const [poFilter, setPoFilter] = useState('All');

  const products = SEED_PRODUCTS;
  const suppliers = SEED_SUPPLIERS;
  const [inventory, setInventory] = useState(() => loadInv() || SEED_INVENTORY);
  const [purchaseOrders, setPurchaseOrders] = useState(() => loadPo() || SEED_POS);
  const [employees, setEmployees] = useState(() => loadEmp() || SEED_EMPLOYEES);

  const [poModal, setPoModal] = useState(null);
  const [empModal, setEmpModal] = useState(null);
  const [confirm, setConfirm] = useState(null);
  const [poForm, setPoForm] = useState({ supplierId: '', productId: '', qty: 10, unitCost: 10 });
  const [empForm, setEmpForm] = useState({ name: '', department: 'Operations', role: 'Analyst', email: '', status: 'Active' });

  useEffect(() => { saveInv(inventory); }, [inventory]);
  useEffect(() => { savePo(purchaseOrders); }, [purchaseOrders]);
  useEffect(() => { saveEmp(employees); }, [employees]);

  // close mobile nav on view change
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

  const filteredInv = useMemo(() => {
    let list = inventory;
    if (whFilter !== 'All') list = list.filter((r) => r.warehouse === whFilter);
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter((r) => {
        const p = productMap[r.productId];
        return (p?.name || '').toLowerCase().includes(q) ||
          (p?.sku || '').toLowerCase().includes(q) ||
          r.warehouse.toLowerCase().includes(q);
      });
    }
    return list;
  }, [inventory, whFilter, query, productMap]);

  const filteredPos = useMemo(() => {
    let list = purchaseOrders;
    if (poFilter !== 'All') list = list.filter((p) => p.status === poFilter);
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter((p) =>
        (supplierMap[p.supplierId]?.name || '').toLowerCase().includes(q) ||
        p.id.toLowerCase().includes(q)
      );
    }
    return list;
  }, [purchaseOrders, poFilter, query, supplierMap]);

  const filteredEmp = useMemo(() => {
    if (!query.trim()) return employees;
    const q = query.toLowerCase();
    return employees.filter((e) =>
      e.name.toLowerCase().includes(q) ||
      e.department.toLowerCase().includes(q) ||
      e.email.toLowerCase().includes(q) ||
      e.role.toLowerCase().includes(q)
    );
  }, [employees, query]);

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

  const openNewPo = () => {
    setPoForm({
      supplierId: suppliers[0]?.id || '',
      productId: products[0]?.id || '',
      qty: 10,
      unitCost: products[0]?.unitCost || 10,
    });
    setPoModal('new');
  };

  const savePoForm = (e) => {
    e.preventDefault();
    const qty = Number(poForm.qty);
    const unitCost = Number(poForm.unitCost);
    if (!poForm.supplierId || !qty || qty <= 0) {
      toast('Check form', 'Supplier and a positive quantity are required');
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
      };
      setPurchaseOrders((p) => [row, ...p]);
      toast('PO created', row.id);
    } else {
      setPurchaseOrders((p) =>
        p.map((x) =>
          x.id === poModal.id
            ? {
                ...x,
                supplierId: poForm.supplierId,
                total: qty * unitCost,
                lines: [{ productId: poForm.productId, qty, unitCost }],
              }
            : x
        )
      );
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
        // add to first matching warehouse row, or Main DC preference
        const invRow =
          inventory.find((r) => r.productId === line.productId && r.warehouse === 'Main DC') ||
          inventory.find((r) => r.productId === line.productId);
        if (invRow) {
          setInventory((inv) => adjustStock(inv, invRow.id, line.qty || 0));
        }
      }
      toast('PO received', 'Inventory updated with received qty');
    } else {
      toast('Status updated', `${po.status} → ${next.status}`);
    }
  };

  const cancelPo = (id) => {
    setConfirm({
      title: 'Cancel purchase order?',
      message: `This will mark ${id} as Cancelled. You cannot undo this easily.`,
      onConfirm: () => {
        setPurchaseOrders((p) => p.map((x) => (x.id === id ? { ...x, status: 'Cancelled' } : x)));
        toast('PO cancelled', id);
        setConfirm(null);
      },
    });
  };

  const openNewEmp = () => {
    setEmpForm({ name: '', department: 'Operations', role: '', email: '', status: 'Active' });
    setEmpModal('new');
  };

  const saveEmpForm = (e) => {
    e.preventDefault();
    if (!empForm.name.trim()) {
      toast('Name required', 'Please enter a full name');
      return;
    }
    if (empModal === 'new') {
      const row = {
        id: uid('emp'),
        ...empForm,
        email: empForm.email || `${empForm.name.toLowerCase().replace(/\s+/g, '.')}@forge.local`,
      };
      setEmployees((p) => [row, ...p]);
      toast('Employee added', row.name);
    } else {
      setEmployees((p) => p.map((x) => (x.id === empModal.id ? { ...x, ...empForm } : x)));
      toast('Employee updated', empForm.name);
    }
    setEmpModal(null);
  };

  const deleteEmp = (emp) => {
    setConfirm({
      title: 'Remove employee?',
      message: `Delete ${emp.name} from the directory? This only affects the local demo data.`,
      onConfirm: () => {
        setEmployees((p) => p.filter((x) => x.id !== emp.id));
        toast('Employee removed', emp.name);
        setConfirm(null);
      },
    });
  };

  const resetDemo = () => {
    setConfirm({
      title: 'Reset demo data?',
      message: 'This clears local changes and restores the original seed data.',
      onConfirm: () => {
        setInventory(SEED_INVENTORY);
        setPurchaseOrders(SEED_POS);
        setEmployees(SEED_EMPLOYEES);
        localStorage.removeItem('forge_inv');
        localStorage.removeItem('forge_po');
        localStorage.removeItem('forge_emp');
        toast('Demo reset', 'Seed data restored');
        setConfirm(null);
      },
    });
  };

  const go = (id) => {
    setView(id);
    setQuery('');
  };

  // sidebar content shared between desktop and mobile
  const SidebarContent = ({ compact }) => (
    <>
      <div className="h-14 flex items-center gap-2.5 px-3 border-b border-slate-800 shrink-0">
        <div className="w-8 h-8 rounded-lg bg-orange-600 flex items-center justify-center font-bold text-sm text-white shrink-0">
          F
        </div>
        {!compact && (
          <div className="min-w-0">
            <div className="font-semibold text-white text-sm leading-tight">ForgeERP</div>
            <div className="text-[10px] text-slate-500">Internal demo</div>
          </div>
        )}
      </div>
      <nav className="flex-1 p-2 space-y-0.5 overflow-y-auto">
        {NAV.map((item) => {
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
        <div className="p-2 border-t border-slate-800">
          <button type="button" onClick={resetDemo} className="nav-item text-xs text-slate-500 hover:text-slate-300">
            Reset demo data
          </button>
        </div>
      )}
    </>
  );

  return (
    <div className="min-h-screen flex text-slate-200">
      {/* Desktop sidebar */}
      <aside
        className={`hidden md:flex ${sidebarOpen ? 'w-56' : 'w-14'} shrink-0 border-r border-slate-800 bg-[#0e1219] flex-col transition-all duration-200`}
      >
        <SidebarContent compact={!sidebarOpen} />
      </aside>

      {/* Mobile drawer */}
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

          <div className="flex-1 max-w-md relative">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={
                view === 'inventory'
                  ? 'Search SKU or product…'
                  : view === 'orders'
                  ? 'Search PO or supplier…'
                  : view === 'hr'
                  ? 'Search name or dept…'
                  : 'Search…'
              }
              className="input-field pl-8 pr-8 py-1.5"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <button
            type="button"
            onClick={() => toast('Alerts', low.length ? `${low.length} low-stock item${low.length === 1 ? '' : 's'}` : 'No low-stock alerts')}
            className="p-2 rounded-lg hover:bg-slate-800 text-slate-400 relative"
            aria-label="Notifications"
          >
            <Bell className="w-5 h-5" />
            {low.length > 0 && <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-orange-500" />}
          </button>
        </header>

        <main className="flex-1 overflow-y-auto p-4 md:p-5">
          {view === 'dashboard' && (
            <div className="space-y-5 fade-in">
              <div>
                <h1 className="text-xl font-semibold text-white">Dashboard</h1>
                <p className="text-sm text-slate-500 mt-0.5">Quick view of stock, orders, and people</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button type="button" onClick={() => go('inventory')} className="kpi-card text-left">
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-xs text-slate-500 uppercase tracking-wide">Available units</span>
                    <Warehouse className="w-4 h-4 text-orange-400" />
                  </div>
                  <p className="text-2xl font-semibold text-white tabular-nums">{totalUnits.toLocaleString()}</p>
                </button>
                <button type="button" onClick={() => go('orders')} className="kpi-card text-left">
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-xs text-slate-500 uppercase tracking-wide">Open POs</span>
                    <ShoppingCart className="w-4 h-4 text-blue-400" />
                  </div>
                  <p className="text-2xl font-semibold text-white tabular-nums">{openPos}</p>
                </button>
                <button type="button" onClick={() => go('inventory')} className="kpi-card text-left">
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-xs text-slate-500 uppercase tracking-wide">Low stock</span>
                    <AlertTriangle className="w-4 h-4 text-amber-400" />
                  </div>
                  <p className="text-2xl font-semibold text-white tabular-nums">{low.length}</p>
                </button>
              </div>

              <div className="flex flex-wrap gap-2">
                <button type="button" onClick={openNewPo} className="btn-primary flex items-center gap-1.5">
                  <Plus className="w-4 h-4" /> New PO
                </button>
                <button type="button" onClick={() => go('inventory')} className="btn-ghost">
                  View inventory
                </button>
                <button type="button" onClick={openNewEmp} className="btn-ghost">
                  Add employee
                </button>
              </div>

              <div className="panel rounded-xl overflow-hidden">
                <div className="px-4 py-3 border-b border-slate-800 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-400" />
                  <h2 className="font-medium text-sm text-white">Low stock</h2>
                </div>
                {low.length === 0 ? (
                  <p className="p-6 text-center text-sm text-slate-500">All items are above reorder point.</p>
                ) : (
                  <ul className="divide-y divide-slate-800/80">
                    {low.map((r) => {
                      const p = productMap[r.productId];
                      return (
                        <li key={r.id} className="flex items-center justify-between gap-3 px-4 py-2.5 hover:bg-slate-800/30">
                          <div className="min-w-0">
                            <p className="text-sm text-white truncate">{p?.name || r.productId}</p>
                            <p className="text-xs text-slate-500">
                              {r.warehouse} · avail {availableQty(r)} / reorder {p?.reorderAt}
                            </p>
                          </div>
                          <button type="button" onClick={() => receiveStock(r, 25)} className="btn-ghost text-xs shrink-0">
                            Receive +25
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </div>
          )}

          {view === 'inventory' && (
            <div className="space-y-4 fade-in">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h1 className="text-xl font-semibold text-white">Inventory</h1>
                <select
                  value={whFilter}
                  onChange={(e) => setWhFilter(e.target.value)}
                  className="input-field w-auto py-1.5"
                >
                  <option value="All">All warehouses</option>
                  {WAREHOUSES.map((w) => (
                    <option key={w} value={w}>{w}</option>
                  ))}
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
                            <td className={`text-right tabular-nums hidden sm:table-cell ${isLow ? 'text-amber-400' : ''}`}>
                              {avail}
                            </td>
                            <td className="text-right">
                              <div className="inline-flex gap-1">
                                <button type="button" onClick={() => receiveStock(r, 10)} className="btn-ghost text-xs py-1 px-2">
                                  +10
                                </button>
                                <button type="button" onClick={() => issueStock(r, 5)} className="btn-ghost text-xs py-1 px-2">
                                  −5
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                {filteredInv.length === 0 && (
                  <p className="p-8 text-center text-sm text-slate-500">No rows match your filters.</p>
                )}
              </div>
            </div>
          )}

          {view === 'orders' && (
            <div className="space-y-4 fade-in">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h1 className="text-xl font-semibold text-white">Purchase Orders</h1>
                <div className="flex flex-wrap gap-2">
                  <select
                    value={poFilter}
                    onChange={(e) => setPoFilter(e.target.value)}
                    className="input-field w-auto py-1.5"
                  >
                    <option value="All">All statuses</option>
                    {PO_STATUS.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  <button type="button" onClick={openNewPo} className="btn-primary flex items-center gap-1.5">
                    <Plus className="w-4 h-4" /> New PO
                  </button>
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
                        <p className="text-xs text-slate-500">
                          {prod?.name || line?.productId} · qty {line?.qty}
                        </p>
                      </div>
                      <span className="text-sm font-medium tabular-nums">{formatMoney(po.total ?? poTotal(po))}</span>
                      <span className={`status-pill ${poColor[po.status] || 'bg-slate-700 text-slate-300'}`}>
                        {po.status}
                      </span>
                      <div className="flex flex-wrap gap-1 ml-auto">
                        {canAdvance && (
                          <button
                            type="button"
                            onClick={() => advancePoRow(po)}
                            className="btn-ghost text-xs py-1 flex items-center gap-1"
                          >
                            Advance
                            {next !== po.status && (
                              <>
                                <ChevronRight className="w-3 h-3" />
                                {next}
                              </>
                            )}
                          </button>
                        )}
                        {po.status === 'Draft' && (
                          <button
                            type="button"
                            onClick={() => {
                              setPoForm({
                                supplierId: po.supplierId,
                                productId: line?.productId || products[0]?.id,
                                qty: line?.qty || 10,
                                unitCost: line?.unitCost || 10,
                              });
                              setPoModal(po);
                            }}
                            className="btn-ghost text-xs py-1 flex items-center gap-1"
                          >
                            <Pencil className="w-3 h-3" /> Edit
                          </button>
                        )}
                        {canAdvance && (
                          <button type="button" onClick={() => cancelPo(po.id)} className="btn-danger text-xs py-1">
                            Cancel
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
                {filteredPos.length === 0 && (
                  <p className="text-center text-slate-500 py-12 text-sm">No purchase orders match.</p>
                )}
              </div>
            </div>
          )}

          {view === 'hr' && (
            <div className="space-y-4 fade-in">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h1 className="text-xl font-semibold text-white">Employees</h1>
                <button type="button" onClick={openNewEmp} className="btn-primary flex items-center gap-1.5">
                  <Plus className="w-4 h-4" /> Add employee
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
                {filteredEmp.map((e) => (
                  <div key={e.id} className="panel rounded-xl p-4">
                    <div className="flex justify-between items-start gap-2 mb-2">
                      <div className="min-w-0">
                        <p className="font-medium text-white truncate">{e.name}</p>
                        <p className="text-xs text-slate-400">
                          {e.role} · {e.department}
                        </p>
                      </div>
                      <span
                        className={`text-[10px] uppercase font-medium shrink-0 ${
                          e.status === 'Active' ? 'text-emerald-400' : 'text-amber-400'
                        }`}
                      >
                        {e.status}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mb-3 truncate">{e.email}</p>
                    <div className="flex gap-1.5">
                      <button
                        type="button"
                        onClick={() => {
                          setEmpForm({
                            name: e.name,
                            department: e.department,
                            role: e.role,
                            email: e.email,
                            status: e.status,
                          });
                          setEmpModal(e);
                        }}
                        className="btn-ghost text-xs py-1 flex items-center gap-1"
                      >
                        <Pencil className="w-3 h-3" /> Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => deleteEmp(e)}
                        className="btn-danger text-xs py-1 flex items-center gap-1"
                      >
                        <Trash2 className="w-3 h-3" /> Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              {filteredEmp.length === 0 && (
                <p className="text-center text-slate-500 py-12 text-sm">No employees match.</p>
              )}
            </div>
          )}
        </main>
      </div>

      {/* PO Modal */}
      <Modal open={!!poModal} onClose={() => setPoModal(null)} title={poModal === 'new' ? 'New purchase order' : 'Edit purchase order'}>
        <form onSubmit={savePoForm} className="space-y-3">
          <div>
            <label className="block text-xs text-slate-400 mb-1">Supplier</label>
            <select
              className="input-field"
              value={poForm.supplierId}
              onChange={(e) => setPoForm({ ...poForm, supplierId: e.target.value })}
            >
              {suppliers.map((s) => (
                <option key={s.id} value={s.id}>{s.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs text-slate-400 mb-1">Product</label>
            <select
              className="input-field"
              value={poForm.productId}
              onChange={(e) => {
                const p = productMap[e.target.value];
                setPoForm({
                  ...poForm,
                  productId: e.target.value,
                  unitCost: p?.unitCost ?? poForm.unitCost,
                });
              }}
            >
              {products.map((p) => (
                <option key={p.id} value={p.id}>{p.sku} — {p.name}</option>
              ))}
            </select>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs text-slate-400 mb-1">Qty</label>
              <input
                type="number"
                min="1"
                className="input-field"
                value={poForm.qty}
                onChange={(e) => setPoForm({ ...poForm, qty: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1">Unit cost</label>
              <input
                type="number"
                step="0.01"
                min="0"
                className="input-field"
                value={poForm.unitCost}
                onChange={(e) => setPoForm({ ...poForm, unitCost: e.target.value })}
              />
            </div>
          </div>
          <p className="text-xs text-slate-500">
            Line total: {formatMoney((Number(poForm.qty) || 0) * (Number(poForm.unitCost) || 0))}
          </p>
          <div className="flex justify-end gap-2 pt-1">
            <button type="button" onClick={() => setPoModal(null)} className="btn-ghost">Cancel</button>
            <button type="submit" className="btn-primary flex items-center gap-1">
              <Check className="w-3.5 h-3.5" /> Save
            </button>
          </div>
        </form>
      </Modal>

      {/* Employee Modal */}
      <Modal open={!!empModal} onClose={() => setEmpModal(null)} title={empModal === 'new' ? 'Add employee' : 'Edit employee'}>
        <form onSubmit={saveEmpForm} className="space-y-3">
          <div>
            <label className="block text-xs text-slate-400 mb-1">Name</label>
            <input
              className="input-field"
              value={empForm.name}
              onChange={(e) => setEmpForm({ ...empForm, name: e.target.value })}
              placeholder="Full name"
              autoFocus
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs text-slate-400 mb-1">Department</label>
              <select
                className="input-field"
                value={empForm.department}
                onChange={(e) => setEmpForm({ ...empForm, department: e.target.value })}
              >
                {DEPTS.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1">Role</label>
              <input
                className="input-field"
                value={empForm.role}
                onChange={(e) => setEmpForm({ ...empForm, role: e.target.value })}
                placeholder="Job title"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs text-slate-400 mb-1">Email</label>
            <input
              type="email"
              className="input-field"
              value={empForm.email}
              onChange={(e) => setEmpForm({ ...empForm, email: e.target.value })}
              placeholder="optional — auto-generated if empty"
            />
          </div>
          <div>
            <label className="block text-xs text-slate-400 mb-1">Status</label>
            <select
              className="input-field"
              value={empForm.status}
              onChange={(e) => setEmpForm({ ...empForm, status: e.target.value })}
            >
              <option value="Active">Active</option>
              <option value="On Leave">On Leave</option>
            </select>
          </div>
          <div className="flex justify-end gap-2 pt-1">
            <button type="button" onClick={() => setEmpModal(null)} className="btn-ghost">Cancel</button>
            <button type="submit" className="btn-primary flex items-center gap-1">
              <Check className="w-3.5 h-3.5" /> Save
            </button>
          </div>
        </form>
      </Modal>

      <ConfirmDialog
        open={!!confirm}
        title={confirm?.title}
        message={confirm?.message}
        onConfirm={confirm?.onConfirm}
        onCancel={() => setConfirm(null)}
      />

      <Toast toasts={toasts} onDismiss={(id) => setToasts((p) => p.filter((t) => t.id !== id))} />
    </div>
  );
}
