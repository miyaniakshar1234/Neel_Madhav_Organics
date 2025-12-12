import React, { useState } from 'react';
import { GlassCard } from '../components/ui/GlassCard';
import { NeonButton } from '../components/ui/NeonButton';
import { Plus, User, ShoppingCart, Trash2, Printer } from 'lucide-react';
import { BillItem } from '../types';

export const BillingPage: React.FC = () => {
  const [cart, setCart] = useState<BillItem[]>([]);
  const [farmerName, setFarmerName] = useState('');

  const addToCart = () => {
    // Mock add
    const newItem: BillItem = {
      product_id: '1',
      product_name: 'Urea 50kg',
      quantity: 1,
      unit_price: 250,
      total: 250
    };
    setCart([...cart, newItem]);
  };

  const grandTotal = cart.reduce((acc, item) => acc + item.total, 0);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-8rem)]">
      {/* Left: Product Selection */}
      <div className="lg:col-span-2 space-y-6 flex flex-col">
        <GlassCard className="flex-none">
           <div className="flex gap-4">
             <input type="text" placeholder="Scan Barcode or Search Product..." className="input-neon flex-1" />
             <NeonButton onClick={addToCart} icon={<Plus />}>Add</NeonButton>
           </div>
        </GlassCard>

        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-4 overflow-y-auto pr-2 pb-2">
           {/* Mock Product Grid for Touch POS feel */}
           {[1,2,3,4,5,6].map(i => (
             <GlassCard key={i} hoverEffect className="cursor-pointer flex flex-col justify-between h-32" >
                <h4 className="font-bold text-lg">Product {i}</h4>
                <div className="flex justify-between items-end">
                  <span className="text-agro-muted">50kg</span>
                  <span className="text-agro-green font-bold text-xl">₹250</span>
                </div>
             </GlassCard>
           ))}
        </div>
      </div>

      {/* Right: Cart & Checkout */}
      <GlassCard className="flex flex-col h-full">
        <div className="mb-6 space-y-4">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <User className="text-agro-blue" />
            Farmer Details
          </h2>
          <input
            type="text"
            placeholder="Select Farmer..."
            className="input-neon w-full"
            value={farmerName}
            onChange={(e) => setFarmerName(e.target.value)}
          />
        </div>

        <div className="flex-1 overflow-y-auto space-y-2 mb-4">
          {cart.map((item, idx) => (
            <div key={idx} className="flex justify-between items-center bg-white/5 p-3 rounded-lg">
              <div>
                <p className="font-medium">{item.product_name}</p>
                <p className="text-xs text-agro-muted">{item.quantity} x ₹{item.unit_price}</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-bold">₹{item.total}</span>
                <button className="text-agro-accent hover:text-white"><Trash2 size={16}/></button>
              </div>
            </div>
          ))}
          {cart.length === 0 && (
            <div className="h-full flex items-center justify-center text-agro-muted flex-col gap-2">
              <ShoppingCart size={48} className="opacity-20"/>
              <p>Cart is empty</p>
            </div>
          )}
        </div>

        <div className="space-y-4 pt-4 border-t border-white/10">
          <div className="flex justify-between text-sm">
            <span className="text-agro-muted">Subtotal</span>
            <span>₹{grandTotal}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-agro-muted">Tax (GST)</span>
            <span>₹0.00</span>
          </div>
          <div className="flex justify-between text-xl font-bold text-agro-green">
            <span>Total</span>
            <span>₹{grandTotal}</span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <NeonButton variant="secondary" className="w-full">Hold Bill</NeonButton>
            <NeonButton className="w-full" icon={<Printer />}>Checkout</NeonButton>
          </div>
        </div>
      </GlassCard>
    </div>
  );
};
