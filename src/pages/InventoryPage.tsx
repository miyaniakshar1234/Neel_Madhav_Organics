import React, { useState } from 'react';
import { GlassCard } from '../components/ui/GlassCard';
import { NeonButton } from '../components/ui/NeonButton';
import { DataGrid } from '../components/ui/DataGrid';
import { Plus, Search, Filter } from 'lucide-react';
import { Product } from '../types';

// Mock Data
const MOCK_PRODUCTS: Product[] = [
  { id: '1', name: 'Urea 50kg', category_id: 'cat_1', base_unit: 'bag', hsn_code: '3102', tax_rate: 5, min_stock_alert: 10, created_at: '2023-01-01' },
  { id: '2', name: 'DAP 50kg', category_id: 'cat_1', base_unit: 'bag', hsn_code: '3105', tax_rate: 5, min_stock_alert: 5, created_at: '2023-01-02' },
  { id: '3', name: 'Neem Oil 1L', category_id: 'cat_2', base_unit: 'bottle', hsn_code: '3808', tax_rate: 12, min_stock_alert: 20, created_at: '2023-01-05' },
];

export const InventoryPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(MOCK_PRODUCTS);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-white">Inventory Management</h2>
          <p className="text-agro-muted">Track stock, manage products, and purchases.</p>
        </div>
        <NeonButton icon={<Plus />}>Add Product</NeonButton>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <GlassCard>
          <h3 className="text-agro-muted text-sm uppercase">Total Products</h3>
          <p className="text-4xl font-bold text-white mt-2">124</p>
        </GlassCard>
        <GlassCard>
          <h3 className="text-agro-muted text-sm uppercase">Low Stock Alerts</h3>
          <p className="text-4xl font-bold text-agro-accent mt-2">5</p>
        </GlassCard>
        <GlassCard>
          <h3 className="text-agro-muted text-sm uppercase">Stock Value</h3>
          <p className="text-4xl font-bold text-agro-green mt-2">₹ 12.5L</p>
        </GlassCard>
      </div>

      {/* Controls */}
      <GlassCard className="flex gap-4 items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-agro-muted w-5 h-5" />
          <input
            type="text"
            placeholder="Search products..."
            className="input-neon w-full pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <NeonButton variant="secondary" icon={<Filter />}>Filter</NeonButton>
      </GlassCard>

      {/* Table */}
      <DataGrid
        data={filteredProducts}
        columns={[
          { key: 'name', header: 'Product Name' },
          { key: 'category_id', header: 'Category' },
          { key: 'base_unit', header: 'Unit' },
          { key: 'tax_rate', header: 'GST %', render: (p) => `${p.tax_rate}%` },
          { key: 'min_stock_alert', header: 'Min Stock' },
          { key: 'actions', header: 'Actions', render: () => <button className="text-agro-blue hover:underline">Edit</button> }
        ]}
      />
    </div>
  );
};
