import React, { useState, useMemo, useCallback } from 'react';
import { Search, Plus, X, ChevronRight, AlertTriangle } from 'lucide-react';

/**
 * UI component family: Employees
 * Presentational + light interactive widgets used across ForgeERP screens.
 */

export function EmployeesPanel0({ title = 'Employees 0', items = [], onSelect, onAction }) {
  const [q, setQ] = useState('');
  const [open, setOpen] = useState(true);
  const filtered = useMemo(() => {
    if (!q.trim()) return items;
    const lower = q.toLowerCase();
    return items.filter((it) =>
      String(it.name || it.label || it.id || '').toLowerCase().includes(lower)
    );
  }, [items, q]);
  const handleAction = useCallback((item) => {
    if (typeof onAction === 'function') onAction(item);
  }, [onAction]);
  return (
    <div className="panel rounded-xl overflow-hidden">
      <div className="px-4 py-3 border-b border-slate-800 flex items-center justify-between gap-2">
        <button type="button" className="font-medium text-sm text-white flex items-center gap-1" onClick={() => setOpen((o) => !o)}>
          {title}
          <ChevronRight className={`w-3.5 h-3.5 transition ${open ? 'rotate-90' : ''}`} />
        </button>
        <div className="relative">
          <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Filter…"
            className="input-field pl-7 py-1 text-xs w-36"
          />
        </div>
      </div>
      {open && (
        <ul className="max-h-64 overflow-y-auto divide-y divide-slate-800/80">
          {filtered.length === 0 && (
            <li className="px-4 py-6 text-center text-xs text-slate-500">No items</li>
          )}
          {filtered.map((item, idx) => (
            <li key={item.id || idx} className="px-4 py-2.5 flex items-center justify-between gap-2 hover:bg-slate-800/30">
              <button type="button" className="text-left min-w-0 flex-1" onClick={() => onSelect?.(item)}>
                <p className="text-sm text-white truncate">{item.name || item.label || item.id}</p>
                <p className="text-xs text-slate-500 truncate">{item.subtitle || item.status || ''}</p>
              </button>
              <button type="button" className="btn-ghost text-xs py-1" onClick={() => handleAction(item)}>
                Action
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function EmployeesPanel1({ title = 'Employees 1', items = [], onSelect, onAction }) {
  const [q, setQ] = useState('');
  const [open, setOpen] = useState(true);
  const filtered = useMemo(() => {
    if (!q.trim()) return items;
    const lower = q.toLowerCase();
    return items.filter((it) =>
      String(it.name || it.label || it.id || '').toLowerCase().includes(lower)
    );
  }, [items, q]);
  const handleAction = useCallback((item) => {
    if (typeof onAction === 'function') onAction(item);
  }, [onAction]);
  return (
    <div className="panel rounded-xl overflow-hidden">
      <div className="px-4 py-3 border-b border-slate-800 flex items-center justify-between gap-2">
        <button type="button" className="font-medium text-sm text-white flex items-center gap-1" onClick={() => setOpen((o) => !o)}>
          {title}
          <ChevronRight className={`w-3.5 h-3.5 transition ${open ? 'rotate-90' : ''}`} />
        </button>
        <div className="relative">
          <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Filter…"
            className="input-field pl-7 py-1 text-xs w-36"
          />
        </div>
      </div>
      {open && (
        <ul className="max-h-64 overflow-y-auto divide-y divide-slate-800/80">
          {filtered.length === 0 && (
            <li className="px-4 py-6 text-center text-xs text-slate-500">No items</li>
          )}
          {filtered.map((item, idx) => (
            <li key={item.id || idx} className="px-4 py-2.5 flex items-center justify-between gap-2 hover:bg-slate-800/30">
              <button type="button" className="text-left min-w-0 flex-1" onClick={() => onSelect?.(item)}>
                <p className="text-sm text-white truncate">{item.name || item.label || item.id}</p>
                <p className="text-xs text-slate-500 truncate">{item.subtitle || item.status || ''}</p>
              </button>
              <button type="button" className="btn-ghost text-xs py-1" onClick={() => handleAction(item)}>
                Action
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function EmployeesPanel2({ title = 'Employees 2', items = [], onSelect, onAction }) {
  const [q, setQ] = useState('');
  const [open, setOpen] = useState(true);
  const filtered = useMemo(() => {
    if (!q.trim()) return items;
    const lower = q.toLowerCase();
    return items.filter((it) =>
      String(it.name || it.label || it.id || '').toLowerCase().includes(lower)
    );
  }, [items, q]);
  const handleAction = useCallback((item) => {
    if (typeof onAction === 'function') onAction(item);
  }, [onAction]);
  return (
    <div className="panel rounded-xl overflow-hidden">
      <div className="px-4 py-3 border-b border-slate-800 flex items-center justify-between gap-2">
        <button type="button" className="font-medium text-sm text-white flex items-center gap-1" onClick={() => setOpen((o) => !o)}>
          {title}
          <ChevronRight className={`w-3.5 h-3.5 transition ${open ? 'rotate-90' : ''}`} />
        </button>
        <div className="relative">
          <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Filter…"
            className="input-field pl-7 py-1 text-xs w-36"
          />
        </div>
      </div>
      {open && (
        <ul className="max-h-64 overflow-y-auto divide-y divide-slate-800/80">
          {filtered.length === 0 && (
            <li className="px-4 py-6 text-center text-xs text-slate-500">No items</li>
          )}
          {filtered.map((item, idx) => (
            <li key={item.id || idx} className="px-4 py-2.5 flex items-center justify-between gap-2 hover:bg-slate-800/30">
              <button type="button" className="text-left min-w-0 flex-1" onClick={() => onSelect?.(item)}>
                <p className="text-sm text-white truncate">{item.name || item.label || item.id}</p>
                <p className="text-xs text-slate-500 truncate">{item.subtitle || item.status || ''}</p>
              </button>
              <button type="button" className="btn-ghost text-xs py-1" onClick={() => handleAction(item)}>
                Action
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function EmployeesPanel3({ title = 'Employees 3', items = [], onSelect, onAction }) {
  const [q, setQ] = useState('');
  const [open, setOpen] = useState(true);
  const filtered = useMemo(() => {
    if (!q.trim()) return items;
    const lower = q.toLowerCase();
    return items.filter((it) =>
      String(it.name || it.label || it.id || '').toLowerCase().includes(lower)
    );
  }, [items, q]);
  const handleAction = useCallback((item) => {
    if (typeof onAction === 'function') onAction(item);
  }, [onAction]);
  return (
    <div className="panel rounded-xl overflow-hidden">
      <div className="px-4 py-3 border-b border-slate-800 flex items-center justify-between gap-2">
        <button type="button" className="font-medium text-sm text-white flex items-center gap-1" onClick={() => setOpen((o) => !o)}>
          {title}
          <ChevronRight className={`w-3.5 h-3.5 transition ${open ? 'rotate-90' : ''}`} />
        </button>
        <div className="relative">
          <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Filter…"
            className="input-field pl-7 py-1 text-xs w-36"
          />
        </div>
      </div>
      {open && (
        <ul className="max-h-64 overflow-y-auto divide-y divide-slate-800/80">
          {filtered.length === 0 && (
            <li className="px-4 py-6 text-center text-xs text-slate-500">No items</li>
          )}
          {filtered.map((item, idx) => (
            <li key={item.id || idx} className="px-4 py-2.5 flex items-center justify-between gap-2 hover:bg-slate-800/30">
              <button type="button" className="text-left min-w-0 flex-1" onClick={() => onSelect?.(item)}>
                <p className="text-sm text-white truncate">{item.name || item.label || item.id}</p>
                <p className="text-xs text-slate-500 truncate">{item.subtitle || item.status || ''}</p>
              </button>
              <button type="button" className="btn-ghost text-xs py-1" onClick={() => handleAction(item)}>
                Action
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function EmployeesPanel4({ title = 'Employees 4', items = [], onSelect, onAction }) {
  const [q, setQ] = useState('');
  const [open, setOpen] = useState(true);
  const filtered = useMemo(() => {
    if (!q.trim()) return items;
    const lower = q.toLowerCase();
    return items.filter((it) =>
      String(it.name || it.label || it.id || '').toLowerCase().includes(lower)
    );
  }, [items, q]);
  const handleAction = useCallback((item) => {
    if (typeof onAction === 'function') onAction(item);
  }, [onAction]);
  return (
    <div className="panel rounded-xl overflow-hidden">
      <div className="px-4 py-3 border-b border-slate-800 flex items-center justify-between gap-2">
        <button type="button" className="font-medium text-sm text-white flex items-center gap-1" onClick={() => setOpen((o) => !o)}>
          {title}
          <ChevronRight className={`w-3.5 h-3.5 transition ${open ? 'rotate-90' : ''}`} />
        </button>
        <div className="relative">
          <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Filter…"
            className="input-field pl-7 py-1 text-xs w-36"
          />
        </div>
      </div>
      {open && (
        <ul className="max-h-64 overflow-y-auto divide-y divide-slate-800/80">
          {filtered.length === 0 && (
            <li className="px-4 py-6 text-center text-xs text-slate-500">No items</li>
          )}
          {filtered.map((item, idx) => (
            <li key={item.id || idx} className="px-4 py-2.5 flex items-center justify-between gap-2 hover:bg-slate-800/30">
              <button type="button" className="text-left min-w-0 flex-1" onClick={() => onSelect?.(item)}>
                <p className="text-sm text-white truncate">{item.name || item.label || item.id}</p>
                <p className="text-xs text-slate-500 truncate">{item.subtitle || item.status || ''}</p>
              </button>
              <button type="button" className="btn-ghost text-xs py-1" onClick={() => handleAction(item)}>
                Action
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function EmployeesPanel5({ title = 'Employees 5', items = [], onSelect, onAction }) {
  const [q, setQ] = useState('');
  const [open, setOpen] = useState(true);
  const filtered = useMemo(() => {
    if (!q.trim()) return items;
    const lower = q.toLowerCase();
    return items.filter((it) =>
      String(it.name || it.label || it.id || '').toLowerCase().includes(lower)
    );
  }, [items, q]);
  const handleAction = useCallback((item) => {
    if (typeof onAction === 'function') onAction(item);
  }, [onAction]);
  return (
    <div className="panel rounded-xl overflow-hidden">
      <div className="px-4 py-3 border-b border-slate-800 flex items-center justify-between gap-2">
        <button type="button" className="font-medium text-sm text-white flex items-center gap-1" onClick={() => setOpen((o) => !o)}>
          {title}
          <ChevronRight className={`w-3.5 h-3.5 transition ${open ? 'rotate-90' : ''}`} />
        </button>
        <div className="relative">
          <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Filter…"
            className="input-field pl-7 py-1 text-xs w-36"
          />
        </div>
      </div>
      {open && (
        <ul className="max-h-64 overflow-y-auto divide-y divide-slate-800/80">
          {filtered.length === 0 && (
            <li className="px-4 py-6 text-center text-xs text-slate-500">No items</li>
          )}
          {filtered.map((item, idx) => (
            <li key={item.id || idx} className="px-4 py-2.5 flex items-center justify-between gap-2 hover:bg-slate-800/30">
              <button type="button" className="text-left min-w-0 flex-1" onClick={() => onSelect?.(item)}>
                <p className="text-sm text-white truncate">{item.name || item.label || item.id}</p>
                <p className="text-xs text-slate-500 truncate">{item.subtitle || item.status || ''}</p>
              </button>
              <button type="button" className="btn-ghost text-xs py-1" onClick={() => handleAction(item)}>
                Action
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function EmployeesPanel6({ title = 'Employees 6', items = [], onSelect, onAction }) {
  const [q, setQ] = useState('');
  const [open, setOpen] = useState(true);
  const filtered = useMemo(() => {
    if (!q.trim()) return items;
    const lower = q.toLowerCase();
    return items.filter((it) =>
      String(it.name || it.label || it.id || '').toLowerCase().includes(lower)
    );
  }, [items, q]);
  const handleAction = useCallback((item) => {
    if (typeof onAction === 'function') onAction(item);
  }, [onAction]);
  return (
    <div className="panel rounded-xl overflow-hidden">
      <div className="px-4 py-3 border-b border-slate-800 flex items-center justify-between gap-2">
        <button type="button" className="font-medium text-sm text-white flex items-center gap-1" onClick={() => setOpen((o) => !o)}>
          {title}
          <ChevronRight className={`w-3.5 h-3.5 transition ${open ? 'rotate-90' : ''}`} />
        </button>
        <div className="relative">
          <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Filter…"
            className="input-field pl-7 py-1 text-xs w-36"
          />
        </div>
      </div>
      {open && (
        <ul className="max-h-64 overflow-y-auto divide-y divide-slate-800/80">
          {filtered.length === 0 && (
            <li className="px-4 py-6 text-center text-xs text-slate-500">No items</li>
          )}
          {filtered.map((item, idx) => (
            <li key={item.id || idx} className="px-4 py-2.5 flex items-center justify-between gap-2 hover:bg-slate-800/30">
              <button type="button" className="text-left min-w-0 flex-1" onClick={() => onSelect?.(item)}>
                <p className="text-sm text-white truncate">{item.name || item.label || item.id}</p>
                <p className="text-xs text-slate-500 truncate">{item.subtitle || item.status || ''}</p>
              </button>
              <button type="button" className="btn-ghost text-xs py-1" onClick={() => handleAction(item)}>
                Action
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function EmployeesPanel7({ title = 'Employees 7', items = [], onSelect, onAction }) {
  const [q, setQ] = useState('');
  const [open, setOpen] = useState(true);
  const filtered = useMemo(() => {
    if (!q.trim()) return items;
    const lower = q.toLowerCase();
    return items.filter((it) =>
      String(it.name || it.label || it.id || '').toLowerCase().includes(lower)
    );
  }, [items, q]);
  const handleAction = useCallback((item) => {
    if (typeof onAction === 'function') onAction(item);
  }, [onAction]);
  return (
    <div className="panel rounded-xl overflow-hidden">
      <div className="px-4 py-3 border-b border-slate-800 flex items-center justify-between gap-2">
        <button type="button" className="font-medium text-sm text-white flex items-center gap-1" onClick={() => setOpen((o) => !o)}>
          {title}
          <ChevronRight className={`w-3.5 h-3.5 transition ${open ? 'rotate-90' : ''}`} />
        </button>
        <div className="relative">
          <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Filter…"
            className="input-field pl-7 py-1 text-xs w-36"
          />
        </div>
      </div>
      {open && (
        <ul className="max-h-64 overflow-y-auto divide-y divide-slate-800/80">
          {filtered.length === 0 && (
            <li className="px-4 py-6 text-center text-xs text-slate-500">No items</li>
          )}
          {filtered.map((item, idx) => (
            <li key={item.id || idx} className="px-4 py-2.5 flex items-center justify-between gap-2 hover:bg-slate-800/30">
              <button type="button" className="text-left min-w-0 flex-1" onClick={() => onSelect?.(item)}>
                <p className="text-sm text-white truncate">{item.name || item.label || item.id}</p>
                <p className="text-xs text-slate-500 truncate">{item.subtitle || item.status || ''}</p>
              </button>
              <button type="button" className="btn-ghost text-xs py-1" onClick={() => handleAction(item)}>
                Action
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function EmployeesStatBar({ stats = [] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
      {stats.map((s, i) => (
        <div key={i} className="panel rounded-lg p-3">
          <p className="text-[10px] uppercase text-slate-500 tracking-wide">{s.label}</p>
          <p className="text-lg font-semibold text-white tabular-nums">{s.value}</p>
        </div>
      ))}
    </div>
  );
}
