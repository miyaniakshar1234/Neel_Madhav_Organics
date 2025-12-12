import React from 'react';
import { Sidebar } from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: string;
  setPage: (p: string) => void;
}

export const AppLayout: React.FC<LayoutProps> = ({ children, currentPage, setPage }) => {
  return (
    <div className="flex h-screen w-screen bg-cover bg-center overflow-hidden">
      <Sidebar currentPage={currentPage} setPage={setPage} />
      <main className="flex-1 overflow-auto p-8 relative">
        {/* Ambient Glow */}
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-agro-blue/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-20%] left-[10%] w-[400px] h-[400px] bg-agro-green/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
};
