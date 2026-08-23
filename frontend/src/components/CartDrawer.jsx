import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, CheckCircle } from 'lucide-react';

const CartDrawer = ({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onClearCart }) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isOrdered, setIsOrdered] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', address: '' });

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = subtotal > 0 ? 12000 : 0;
  const total = subtotal + deliveryFee;

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    if (!formData.phone || !formData.address) return;
    setIsOrdered(true);
    setTimeout(() => {
      onClearCart();
      setIsOrdered(false);
      setIsCheckout(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/80 backdrop-blur-sm animate-fade-in flex justify-end">
      
      {/* Backdrop click */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Drawer Box */}
      <div className="relative w-full max-w-md bg-[#080d14] h-full shadow-2xl border-l border-[#0c6a7f]/30 flex flex-col justify-between z-10">
        
        {/* Drawer Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-[#0c6a7f]/20 text-[#128ba7] rounded-xl">
              <ShoppingBag size={20} />
            </div>
            <div>
              <h3 className="text-xl font-black text-white">Savat</h3>
              <p className="text-xs text-slate-400">{cartItems.length} xil taom</p>
            </div>
          </div>
          
          <button 
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X size={22} />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">

          {/* Success Message state */}
          {isOrdered ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
              <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center animate-bounce">
                <CheckCircle size={40} />
              </div>
              <h4 className="text-2xl font-black text-white">Buyurtma Qabul Qilindi!</h4>
              <p className="text-sm text-slate-300 max-w-xs">
                Kuryerimiz tez orada buyurtmangizni yetkazib beradi. Rahmat!
              </p>
            </div>
          ) : isCheckout ? (

            /* Checkout Form */
            <form onSubmit={handleSubmitOrder} className="space-y-4">
              <h4 className="text-lg font-black text-white mb-4">Yetkazib berish ma'lumotlari</h4>
              
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Ismingiz</label>
                <input 
                  type="text"
                  required
                  placeholder="Ali Valiyev"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-[#0c6a7f]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Telefon raqam</label>
                <input 
                  type="tel"
                  required
                  placeholder="+998 90 123 45 67"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-[#0c6a7f]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Manzil</label>
                <textarea 
                  required
                  rows="3"
                  placeholder="Toshkent sh., Yunusobod t., 4-mavze, 12-uy"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-[#0c6a7f]"
                ></textarea>
              </div>

              <div className="pt-4 flex gap-3">
                <button
                  type="button"
                  onClick={() => setIsCheckout(false)}
                  className="w-1/2 py-3 rounded-xl bg-slate-800 text-slate-300 font-bold text-sm hover:bg-slate-700"
                >
                  Orqaga
                </button>

                <button
                  type="submit"
                  className="w-1/2 py-3 rounded-xl bg-gradient-to-r from-[#0c6a7f] to-[#128ba7] text-white font-black text-sm shadow-lg shadow-[#0c6a7f]/30"
                >
                  Tasdiqlash
                </button>
              </div>
            </form>

          ) : cartItems.length === 0 ? (

            /* Empty Cart */
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-16">
              <div className="w-16 h-16 bg-slate-900 text-slate-600 rounded-full flex items-center justify-center">
                <ShoppingBag size={32} />
              </div>
              <h4 className="text-lg font-bold text-slate-300">Savatingiz hozircha bo'sh</h4>
              <p className="text-xs text-slate-500 max-w-xs">
                Menyudan mazali taomlarni tanlang va savatga qo'shing.
              </p>
            </div>

          ) : (

            /* Cart Item List */
            cartItems.map((item) => (
              <div 
                key={item.id}
                className="flex items-center justify-between gap-4 p-3 bg-slate-900/90 rounded-2xl border border-slate-800"
              >
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-16 h-16 rounded-xl object-cover"
                />
                
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-white leading-tight">{item.name}</h4>
                  <span className="text-xs font-bold text-[#128ba7] mt-1 block">
                    {(item.price * item.quantity).toLocaleString()} UZS
                  </span>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center bg-slate-800 rounded-lg p-1">
                    <button 
                      onClick={() => onUpdateQuantity(item.id, -1)}
                      className="p-1 hover:text-[#128ba7] text-slate-300"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="text-xs font-black px-2 text-white">{item.quantity}</span>
                    <button 
                      onClick={() => onUpdateQuantity(item.id, 1)}
                      className="p-1 hover:text-[#128ba7] text-slate-300"
                    >
                      <Plus size={14} />
                    </button>
                  </div>

                  <button 
                    onClick={() => onRemoveItem(item.id)}
                    className="p-1.5 text-slate-500 hover:text-red-400"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>

              </div>
            ))

          )}

        </div>

        {/* Footer Summary & Checkout */}
        {cartItems.length > 0 && !isCheckout && !isOrdered && (
          <div className="p-6 border-t border-slate-800 bg-slate-950/60 space-y-3">
            <div className="flex justify-between text-xs text-slate-400">
              <span>Taomlar narxi:</span>
              <span>{subtotal.toLocaleString()} UZS</span>
            </div>
            <div className="flex justify-between text-xs text-slate-400">
              <span>Yetkazib berish:</span>
              <span>{deliveryFee.toLocaleString()} UZS</span>
            </div>
            <div className="flex justify-between text-base font-black text-white pt-2 border-t border-slate-800">
              <span>Jami:</span>
              <span className="text-[#128ba7]">{total.toLocaleString()} UZS</span>
            </div>

            <button
              onClick={() => setIsCheckout(true)}
              className="w-full py-4 bg-gradient-to-r from-[#0c6a7f] to-[#128ba7] text-white font-black rounded-2xl text-base shadow-lg shadow-[#0c6a7f]/30 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
            >
              Buyurtma Berish
            </button>
          </div>
        )}

      </div>

    </div>
  );
};

export default CartDrawer;
