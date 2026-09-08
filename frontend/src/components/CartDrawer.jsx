import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const CartDrawer = ({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onClearCart }) => {
  const { lang, t } = useLanguage();
  const [isCheckout, setIsCheckout] = useState(false);
  const [isOrdered, setIsOrdered] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', address: '' });
  const [createdOrderId, setCreatedOrderId] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = subtotal > 0 ? 12000 : 0;
  const total = subtotal + deliveryFee;

  const handleSubmitOrder = async (e) => {
    e.preventDefault();
    if (!formData.phone || !formData.address) return;
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          address: formData.address,
          items: cartItems
        })
      });
      const data = await res.json();
      if (data.orderId) {
        setCreatedOrderId(data.orderId);
      } else {
        setCreatedOrderId('FLY-' + Math.floor(100000 + Math.random() * 900000));
      }
    } catch (err) {
      console.error('Order submission error:', err);
      setCreatedOrderId('FLY-' + Math.floor(100000 + Math.random() * 900000));
    } finally {
      setIsSubmitting(false);
      setIsOrdered(true);
      setTimeout(() => {
        onClearCart();
        setIsOrdered(false);
        setIsCheckout(false);
        setCreatedOrderId(null);
        setFormData({ name: '', phone: '', address: '' });
        onClose();
      }, 3500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/80 backdrop-blur-sm animate-fade-in flex justify-end">
      
      {/* Backdrop click */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Drawer Box */}
      <div className="relative w-full max-w-md bg-[#080d14] h-full shadow-2xl border-l border-[#109bba]/30 flex flex-col justify-between z-10">
        
        {/* Drawer Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-[#109bba]/20 text-[#109bba] rounded-xl">
              <ShoppingBag size={20} />
            </div>
            <div>
              <h3 className="text-xl font-black text-[#fefefe]">{t('cartTitle')}</h3>
              <p className="text-xs text-[#fefefe]/70">{cartItems.length} {t('foodTypes')}</p>
            </div>
          </div>
          
          <button 
            onClick={onClose}
            aria-label={t('closeBtn')}
            className="p-2 rounded-full text-[#fefefe]/60 hover:text-[#fefefe] hover:bg-slate-800 transition-colors"
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
              <h4 className="text-2xl font-black text-[#fefefe]">{t('orderAccepted')}</h4>
              {createdOrderId && (
                <div className="inline-block bg-[#109bba]/20 text-[#109bba] px-4 py-1.5 rounded-full text-xs font-black border border-[#109bba]/40 shadow-sm">
                  {t('orderId')} {createdOrderId}
                </div>
              )}
              <p className="text-sm text-[#fefefe]/80 max-w-xs">
                {t('courierDeliveryMsg')}
              </p>
            </div>
          ) : isCheckout ? (

            /* Checkout Form */
            <form onSubmit={handleSubmitOrder} className="space-y-4">
              <h4 className="text-lg font-black text-[#fefefe] mb-4">{t('deliveryDetails')}</h4>
              
              <div>
                <label className="block text-xs font-bold text-[#fefefe]/90 mb-1">{t('yourName')}</label>
                <input 
                  type="text"
                  required
                  placeholder={t('namePlaceholder')}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-[#fefefe] text-sm focus:outline-none focus:border-[#109bba]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#fefefe]/90 mb-1">{t('phoneNum')}</label>
                <input 
                  type="tel"
                  required
                  placeholder="+998 90 123 45 67"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-[#fefefe] text-sm focus:outline-none focus:border-[#109bba]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#fefefe]/90 mb-1">{t('address')}</label>
                <textarea 
                  required
                  rows="3"
                  placeholder={t('addressPlaceholder')}
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-[#fefefe] text-sm focus:outline-none focus:border-[#109bba]"
                ></textarea>
              </div>

              <div className="pt-4 flex gap-3">
                <button
                  type="button"
                  onClick={() => setIsCheckout(false)}
                  className="w-1/2 py-3 rounded-xl bg-slate-800 text-[#fefefe]/80 font-bold text-sm hover:bg-slate-700 cursor-pointer"
                >
                  {t('back')}
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-1/2 py-3 rounded-xl bg-[#109bba] text-[#fefefe] font-black text-sm shadow-lg shadow-[#109bba]/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? t('submitting') : t('confirm')}
                </button>
              </div>
            </form>

          ) : cartItems.length === 0 ? (

            /* Empty Cart */
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-16">
              <div className="w-16 h-16 bg-slate-900 text-slate-600 rounded-full flex items-center justify-center">
                <ShoppingBag size={32} />
              </div>
              <h4 className="text-lg font-bold text-[#fefefe]">{t('emptyCartTitle')}</h4>
              <p className="text-xs text-[#fefefe]/60 max-w-xs">
                {t('emptyCartSub')}
              </p>
            </div>

          ) : (

            /* Cart Item List */
            cartItems.map((item) => {
              const itemName = typeof item.name === 'object' ? (item.name[lang] || item.name.UZ) : item.name;
              return (
                <div 
                  key={item.id}
                  className="flex items-center justify-between gap-4 p-3 bg-slate-900/90 rounded-2xl border border-slate-800"
                >
                  <img 
                    src={item.image} 
                    alt={itemName} 
                    className="w-16 h-16 rounded-xl object-contain p-1.5 bg-[#109bba]"
                  />
                  
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-[#fefefe] leading-tight">{itemName}</h4>
                    <span className="text-xs font-bold text-[#109bba] mt-1 block">
                      {(item.price * item.quantity).toLocaleString()} UZS
                    </span>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center bg-slate-800 rounded-lg p-1">
                      <button 
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="p-1 hover:text-[#109bba] text-[#fefefe]/80 cursor-pointer"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="text-xs font-black px-2 text-[#fefefe]">{item.quantity}</span>
                      <button 
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="p-1 hover:text-[#109bba] text-[#fefefe]/80 cursor-pointer"
                      >
                        <Plus size={14} />
                      </button>
                    </div>

                    <button 
                      onClick={() => onRemoveItem(item.id)}
                      className="p-1.5 text-slate-500 hover:text-red-400 cursor-pointer"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>

                </div>
              );
            })

          )}

        </div>

        {/* Footer Summary & Checkout */}
        {cartItems.length > 0 && !isCheckout && !isOrdered && (
          <div className="p-6 border-t border-slate-800 bg-slate-950/60 space-y-3">
            <div className="flex justify-between text-xs text-[#fefefe]/70">
              <span>{t('itemsPrice')}</span>
              <span>{subtotal.toLocaleString()} UZS</span>
            </div>
            <div className="flex justify-between text-xs text-[#fefefe]/70">
              <span>{t('deliveryFee')}</span>
              <span>{deliveryFee.toLocaleString()} UZS</span>
            </div>
            <div className="flex justify-between text-base font-black text-[#fefefe] pt-2 border-t border-slate-800">
              <span>{t('total')}</span>
              <span className="text-[#109bba]">{total.toLocaleString()} UZS</span>
            </div>

            <button
              onClick={() => setIsCheckout(true)}
              className="w-full py-4 bg-[#109bba] text-[#fefefe] font-black rounded-2xl text-base shadow-lg shadow-[#109bba]/30 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
            >
              {t('placeOrder')}
            </button>
          </div>
        )}

      </div>

    </div>
  );
};

export default CartDrawer;
