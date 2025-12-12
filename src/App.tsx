import React, { useState } from 'react';
import { AppLayout } from './components/layout/AppLayout';
import { InventoryPage } from './pages/InventoryPage';
import { BillingPage } from './pages/BillingPage';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'inventory':
        return <InventoryPage />;
      case 'billing':
        return <BillingPage />;
      case 'dashboard':
      default:
        return (
          <div className="flex flex-col items-center justify-center h-[60vh] text-center space-y-6">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-agro-green via-agro-blue to-agro-green bg-clip-text text-transparent animate-pulse">
              Welcome Back, Owner
            </h1>
            <p className="text-xl text-agro-muted max-w-2xl">
              Your "100-Year" Robust Inventory System is ready.
            </p>
          </div>
        );
    }
  };

  return (
    <AppLayout currentPage={currentPage} setPage={setCurrentPage}>
      {renderPage()}
    </AppLayout>
  );
}

export default App;
