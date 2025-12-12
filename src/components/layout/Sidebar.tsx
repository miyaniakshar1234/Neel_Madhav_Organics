import React from 'react';
import { LayoutDashboard, Package, ShoppingCart, Users, Settings, FileText } from 'lucide-react';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 group
      ${active
        ? 'bg-agro-green/10 text-agro-green border-r-2 border-agro-green'
        : 'text-agro-muted hover:text-white hover:bg-white/5'
      }`}
  >
    <span className={`text-xl ${active ? 'text-agro-green shadow-neon-green' : ''}`}>{icon}</span>
    <span className="font-medium">{label}</span>
  </button>
);

export const Sidebar: React.FC<{ currentPage: string, setPage: (p: string) => void }> = ({ currentPage, setPage }) => {
  return (
    <div className="w-64 h-full bg-black/40 backdrop-blur-md border-r border-white/10 flex flex-col p-4">
      <div className="mb-8 px-4 py-2">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-agro-green to-agro-blue bg-clip-text text-transparent">
          NEEL MADHAV
        </h1>
        <p className="text-xs text-agro-muted tracking-[0.2em] uppercase">Organics Engine</p>
      </div>

      <div className="flex-1 space-y-2">
        <SidebarItem
          icon={<LayoutDashboard />}
          label="Dashboard"
          active={currentPage === 'dashboard'}
          onClick={() => setPage('dashboard')}
        />
        <SidebarItem
          icon={<Package />}
          label="Inventory"
          active={currentPage === 'inventory'}
          onClick={() => setPage('inventory')}
        />
        <SidebarItem
          icon={<ShoppingCart />}
          label="Billing / POS"
          active={currentPage === 'billing'}
          onClick={() => setPage('billing')}
        />
        <SidebarItem
          icon={<Users />}
          label="Farmers"
          active={currentPage === 'farmers'}
          onClick={() => setPage('farmers')}
        />
         <SidebarItem
          icon={<FileText />}
          label="Reports"
          active={currentPage === 'reports'}
          onClick={() => setPage('reports')}
        />
      </div>

      <div className="pt-4 border-t border-white/10">
        <SidebarItem
          icon={<Settings />}
          label="Settings"
          active={currentPage === 'settings'}
          onClick={() => setPage('settings')}
        />
      </div>
    </div>
  );
};
