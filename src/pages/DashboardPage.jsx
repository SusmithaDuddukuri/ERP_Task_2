import React from 'react';
export function DashboardPageShell({ title, children, actions }) {
  return (
    <div role="region" aria-label={title} className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-xl font-semibold text-white">{title}</h1>
        <div className="flex flex-wrap gap-2">{actions}</div>
      </div>
      {children}
    </div>
  );
}
