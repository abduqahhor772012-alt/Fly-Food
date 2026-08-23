import React, { useState } from 'react';
import { ShoppingBag, Phone, UtensilsCrossed, User, Globe } from 'lucide-react';

const Navbar = ({ cartItemsCount, cartTotal, onOpenCart, onOpenLogin, activeCategory, onSelectCategory }) => {
  const [currentLang, setCurrentLang] = useState('UZ'); // 'UZ' | 'RU' | 'EN'

  return (
    <header className="sticky top-3 sm:top-5 z-50 flex w-full justify-center px-4 transition-all">
      <div className="relative w-full h-22 max-w-[1340px] rounded-3xl border border-white/15 bg-[#081322]/85 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-2xl px-6 sm:px-10 lg:px-12 flex items-center justify-between gap-4 sm:gap-6">

        {/* Logo Section */}
        <div
          onClick={() => onSelectCategory('all')}
          className="flex shrink-0 cursor-pointer items-center gap-3.5 group"
        >
          <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0c6a7f] to-[#128ba7] text-white shadow-[0_8px_20px_rgba(18,139,167,0.4)] transition-transform group-hover:scale-105">
            <UtensilsCrossed size={22} />
          </div>

          <div className="leading-none">
            <div className="text-[1.8rem] sm:text-[2.1rem] font-black italic tracking-[-0.08em] text-white">
              FLY<span className="text-[#18c0ee]">FOOD</span>
            </div>
            <div className="mt-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400">
              FAST FOOD & DELIVERY
            </div>
          </div>
        </div>

        {/* iOS 18 Segmented Pill Navigation */}
        <nav className="hidden md:flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/60 p-1.5 shadow-inner text-sm font-semibold text-slate-300 backdrop-blur-md">
          <button
            onClick={() => onSelectCategory('all')}
            className={`px-5 py-2.5 rounded-full font-extrabold tracking-[1px] transition-all cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-gradient-to-br from-[#0c6a7f] to-[#128ba7] text-white shadow-md shadow-[#0c6a7f]/40'
                : 'text-slate-300 hover:text-white hover:bg-white/5'
            }`}
          >
            Bosh sahifa
          </button>

          <a
            href="#menu-section"
            className="px-5 py-2.5 rounded-full font-extrabold tracking-[1px] text-slate-300 hover:text-white hover:bg-white/5 transition-all cursor-pointer"
          >
            Menyu
          </a>

          <button
            onClick={() => {
              onSelectCategory('lavash');
              const el = document.getElementById('menu-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-5 py-2.5 rounded-full font-extrabold tracking-[1px] text-slate-300 hover:text-white hover:bg-white/5 transition-all cursor-pointer"
          >
            Aksiyalar
          </button>
        </nav>

        {/* Right Actions: Lang Switcher, Login, Phone & Cart */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          
          {/* 3-Language Selector Switcher (UZ | RU | EN) */}
          <div className="hidden sm:flex items-center gap-1 p-1 rounded-full bg-slate-900/80 border border-white/10 text-xs shadow-inner">
            <Globe size={14} className="text-[#18c0ee] ml-1.5 mr-0.5" />
            {['UZ', 'RU', 'EN'].map((lang) => (
              <button
                key={lang}
                onClick={() => setCurrentLang(lang)}
                className={`px-2.5 py-1 rounded-full text-[11px] font-black transition-all cursor-pointer ${
                  currentLang === lang
                    ? 'bg-gradient-to-r from-[#0c6a7f] to-[#128ba7] text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

          {/* Kirish (Login) Button */}
          <button
            onClick={onOpenLogin}
            className="flex shrink-0 items-center gap-2 rounded-full border border-white/15 bg-slate-900/80 hover:bg-slate-800/90 px-4 py-2 text-xs sm:text-sm font-extrabold text-slate-200 hover:text-white transition-all cursor-pointer hover:border-[#18c0ee]/50 shadow-sm"
          >
            <div className="flex h-7.5 w-7.5 shrink-0 items-center justify-center rounded-full bg-[#0c6a7f]/30 text-[#18c0ee]">
              <User size={14} />
            </div>
            <span className="hidden xs:inline whitespace-nowrap">Kirish</span>
          </button>

          {/* Phone Number Button */}
          <a
            href="tel:+998505105035"
            className="hidden xl:flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-slate-900/80 hover:bg-slate-800/90 pl-2 pr-4 py-2 text-xs sm:text-sm font-extrabold text-slate-200 hover:text-white transition-all cursor-pointer hover:border-[#0c6a7f]"
          >
            <div className="flex h-7.5 w-7.5 shrink-0 items-center justify-center rounded-full bg-[#0b1828] text-[#18c0ee] border border-[#0c6a7f]/40">
              <Phone size={13} />
            </div>
            <span className="whitespace-nowrap">+998 50 510-50-35</span>
          </a>

          {/* Cart Button */}
          <button
            onClick={onOpenCart}
            className="relative flex shrink-0 items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#0c6a7f] via-[#0d8da9] to-[#18b8d4] pl-2 pr-5 py-2 text-white shadow-[0_8px_22px_rgba(18,139,167,0.45)] transition-all hover:brightness-110 active:scale-95 cursor-pointer whitespace-nowrap border border-cyan-200/40"
          >
            <div className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/20 shadow-inner">
              <ShoppingBag size={16} strokeWidth={2.4} />
              {cartItemsCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-4.5 w-4.5 items-center justify-center rounded-full border-2 border-[#0c6a7f] bg-slate-950 text-[9px] font-black text-[#18c0ee]">
                  {cartItemsCount}
                </span>
              )}
            </div>

            <span className="text-xs sm:text-sm font-black whitespace-nowrap">
              {cartTotal > 0 ? `${cartTotal.toLocaleString()} UZS` : 'Savat'}
            </span>
          </button>
        </div>

      </div>
    </header>
  );
};

export default Navbar;
