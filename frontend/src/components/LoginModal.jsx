import React, { useState } from 'react';
import { X, Phone, ArrowRight, CheckCircle2, User } from 'lucide-react';

const LoginModal = ({ isOpen, onClose, onLoginSuccess }) => {
  const [step, setStep] = useState('phone'); // 'phone' | 'code' | 'success'
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');

  if (!isOpen) return null;

  const handleSendCode = (e) => {
    e.preventDefault();
    if (phone.length >= 9) {
      setStep('code');
    }
  };

  const handleVerifyCode = (e) => {
    e.preventDefault();
    if (code.length >= 4) {
      setStep('success');
      setTimeout(() => {
        if (onLoginSuccess) onLoginSuccess(phone);
        onClose();
        setStep('phone');
        setPhone('');
        setCode('');
      }, 1800);
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
      {/* Backdrop Click */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Box */}
      <div className="relative w-full max-w-sm bg-[#081322] border border-[#0c6a7f]/40 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
        >
          <X size={20} />
        </button>

        {/* Step 1: Phone Input */}
        {step === 'phone' && (
          <form onSubmit={handleSendCode} className="space-y-5">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0c6a7f] to-[#128ba7] text-white flex items-center justify-center mx-auto shadow-lg shadow-[#0c6a7f]/30">
                <User size={24} />
              </div>
              <h3 className="text-2xl font-black text-white">Tizimga Kirish</h3>
              <p className="text-xs text-slate-400">
                Buyurtmalarni tezkor rasmiylashtirish uchun telefon raqamingizni kiriting
              </p>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300 block">Telefon raqam</label>
              <div className="relative flex items-center">
                <span className="absolute left-4 text-slate-400">
                  <Phone size={16} />
                </span>
                <input
                  type="tel"
                  required
                  placeholder="+998 90 123 45 67"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 bg-slate-900/90 border border-slate-700/80 rounded-2xl text-white text-sm font-bold focus:outline-none focus:border-[#128ba7] transition-all"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#0c6a7f] to-[#128ba7] text-white font-extrabold text-sm shadow-lg shadow-[#0c6a7f]/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Kodni olish</span>
              <ArrowRight size={18} />
            </button>
          </form>
        )}

        {/* Step 2: SMS Code Input */}
        {step === 'code' && (
          <form onSubmit={handleVerifyCode} className="space-y-5">
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-black text-white">Tasdiqlash Kodi</h3>
              <p className="text-xs text-slate-400">
                <span className="text-[#18c0ee] font-bold">{phone}</span> raqamiga yuborilgan 4 xonali SMS kodni kiriting
              </p>
            </div>

            <div className="space-y-1.5">
              <input
                type="text"
                required
                maxLength={4}
                placeholder="1 2 3 4"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full text-center py-4 bg-slate-900/90 border border-slate-700/80 rounded-2xl text-white text-2xl font-black tracking-[0.5em] focus:outline-none focus:border-[#128ba7] transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#0c6a7f] to-[#128ba7] text-white font-extrabold text-sm shadow-lg shadow-[#0c6a7f]/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              Kirishni tasdiqlash
            </button>
          </form>
        )}

        {/* Step 3: Success */}
        {step === 'success' && (
          <div className="text-center py-6 space-y-3">
            <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle2 size={36} />
            </div>
            <h4 className="text-2xl font-black text-white">Xush kelibsiz!</h4>
            <p className="text-xs text-slate-300">Tizimga muvaffaqiyatli kirdingiz</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default LoginModal;
