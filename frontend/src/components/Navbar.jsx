import React, { useState, useRef, useEffect } from 'react';
import { ShoppingBag, Phone, User, Globe, MapPin, ChevronDown, Menu as MenuIcon, X, Check, Search } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const UZBEKISTAN_REGIONS = [
  "Toshkent shahri",
  "Toshkent viloyati",
  "Andijon viloyati",
  "Buxoro viloyati",
  "Farg'ona viloyati",
  "Jizzax viloyati",
  "Namangan viloyati",
  "Navoiy viloyati",
  "Qashqadaryo viloyati",
  "Qoraqalpog'iston Respublikasi",
  "Samarqand viloyati",
  "Sirdaryo viloyati",
  "Surxondaryo viloyati",
  "Xorazm viloyati"
];

const Navbar = ({ cartItemsCount, cartTotal, onOpenCart, onOpenLogin, activeCategory, onSelectCategory }) => {
  const { lang, setLang, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isRegionDropdownOpen, setIsRegionDropdownOpen] = useState(false);
  const [regionSearch, setRegionSearch] = useState('');
  const [selectedRegion, setSelectedRegion] = useState(() => {
    return localStorage.getItem('user_region') || 'Toshkent shahri';
  });

  const dropdownRef = useRef(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsRegionDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToMenu = () => {
    const el = document.getElementById('menu-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const scrollToFooter = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (category) => {
    onSelectCategory(category);
    if (category === 'all') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      scrollToMenu();
    }
    setIsMobileMenuOpen(false);
  };

  const handleRegionSelect = (region) => {
    setSelectedRegion(region);
    localStorage.setItem('user_region', region);
    setIsRegionDropdownOpen(false);
    setRegionSearch('');
  };

  const filteredRegions = UZBEKISTAN_REGIONS.filter(region =>
    region.toLowerCase().includes(regionSearch.toLowerCase())
  );

  return (
    <header className="sticky top-0 left-0 right-0 z-50 w-full border-b border-white/10 bg-[#081322]/95 backdrop-blur-xl shadow-2xl transition-all">
      <div
        className="mx-auto flex h-22 sm:h-24 w-full max-w-[1440px] items-center justify-between gap-6"
        style={{ paddingLeft: 'clamp(48px, 9vw, 220px)', paddingRight: 'clamp(24px, 5vw, 100px)' }}
      >

        {/* 1. Left: Logo Section */}
        <div
          onClick={() => handleNavClick('all')}
          className="flex shrink-0 cursor-pointer items-center gap-4 group pl-2 sm:pl-6 lg:pl-10"
        >
          <img
            src="https://i.postimg.cc/bNQrNC42/Artboard-10-copy-7-4x-100.jpg"
            alt="FlyFood Logo"
            className="h-14 sm:h-16 lg:h-18 w-auto rounded-2xl object-contain shadow-lg shadow-[#109bba]/20 transition-transform group-hover:scale-105 border border-white/15"
          />

          <div className="leading-none hidden xs:block">
            <div className="text-[2.1rem] sm:text-[2.4rem] lg:text-[2.7rem] font-black italic tracking-[-0.08em] text-[#fefefe]">
              FLY<span className="text-[#109bba]">FOOD</span>
            </div>
            <div className="mt-1 text-[9.5px] sm:text-[11px] font-bold uppercase tracking-[0.22em] text-[#fefefe]/75">
              FAST FOOD & DELIVERY
            </div>
          </div>
        </div>

        {/* 2. Center: Navigation Links */}
        <nav className="hidden md:flex items-center justify-center gap-4 lg:gap-8 text-sm lg:text-[15px] font-bold text-slate-200">
          <button
            onClick={() => handleNavClick('all')}
            className="px-4 py-2 rounded-xl text-slate-200 hover:text-white hover:bg-white/10 transition-all cursor-pointer whitespace-nowrap font-bold"
          >
            {t('home')}
          </button>

          <button
            onClick={scrollToMenu}
            className="px-4 py-2 rounded-xl text-slate-200 hover:text-white hover:bg-white/10 transition-all cursor-pointer whitespace-nowrap font-bold"
          >
            {t('menu')}
          </button>

          <button
            onClick={() => handleNavClick('lavash')}
            className="px-4 py-2 rounded-xl text-slate-200 hover:text-white hover:bg-white/10 transition-all cursor-pointer whitespace-nowrap font-bold"
          >
            {t('promotions')}
          </button>

          <button
            onClick={scrollToFooter}
            className="px-4 py-2 rounded-xl text-slate-200 hover:text-white hover:bg-white/10 transition-all cursor-pointer whitespace-nowrap font-bold"
          >
            {t('about')}
          </button>

          <a
            href="tel:+998505105035"
            className="px-4 py-2 rounded-xl text-slate-200 hover:text-white hover:bg-white/10 transition-all cursor-pointer whitespace-nowrap font-bold"
          >
            {t('contact')}
          </a>
        </nav>

        {/* 3. Right: Action Controls (Address Dropdown, Cart, Language, Login & Mobile Menu Toggle) */}
        <div className="flex items-center gap-2 sm:gap-3.5">

          {/* Location / Address Button & Downward Dropdown */}
          <div className="relative hidden lg:block" ref={dropdownRef}>
            <button
              onClick={() => setIsRegionDropdownOpen(!isRegionDropdownOpen)}
              className="flex items-center gap-2.5 rounded-xl bg-slate-900/90 border border-white/10 hover:border-[#109bba]/60 px-4 py-2.5 text-sm font-extrabold text-slate-200 transition-all shadow-sm cursor-pointer"
            >
              <MapPin size={17} className="text-[#109bba] shrink-0" />
              <span className="truncate max-w-[160px]">{selectedRegion}</span>
              <ChevronDown
                size={16}
                className={`text-slate-400 transition-transform duration-200 ${
                  isRegionDropdownOpen ? 'rotate-180 text-[#109bba]' : ''
                }`}
              />
            </button>

            {/* Downward Dropdown Menu */}
            {isRegionDropdownOpen && (
              <div className="absolute right-0 top-full mt-2.5 w-72 bg-[#081322]/98 border border-[#109bba]/40 rounded-2xl p-2.5 shadow-2xl z-50 animate-fade-in backdrop-blur-xl">
                {/* Search Bar inside Dropdown */}
                <div className="p-1 mb-2 border-b border-slate-800 pb-2.5">
                  <div className="relative flex items-center">
                    <input
                      type="text"
                      placeholder={t('searchRegion')}
                      value={regionSearch}
                      onChange={(e) => setRegionSearch(e.target.value)}
                      className="w-full pl-3.5 pr-9 py-2 bg-slate-900/90 border border-slate-700/80 rounded-xl text-sm font-semibold text-white placeholder-slate-400 focus:outline-none focus:border-[#109bba] transition-all"
                    />
                    <Search size={16} className="absolute right-3 text-slate-400 pointer-events-none" />
                  </div>
                </div>

                {/* Regions Scrollable List */}
                <div className="max-h-72 overflow-y-auto space-y-1.5 pr-1 custom-scrollbar">
                  {filteredRegions.length === 0 ? (
                    <div className="p-4 text-center text-sm font-medium text-slate-400">
                      {t('regionNotFound')}
                    </div>
                  ) : (
                    filteredRegions.map((region) => {
                      const isSelected = selectedRegion === region;
                      return (
                        <button
                          key={region}
                          onClick={() => handleRegionSelect(region)}
                          className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left font-extrabold text-sm transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-[#109bba] text-white shadow-md'
                              : 'text-slate-200 hover:bg-slate-800 hover:text-white'
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <MapPin size={16} className={isSelected ? 'text-white' : 'text-[#109bba]'} />
                            <span>{region}</span>
                          </div>
                          {isSelected && <Check size={17} className="text-white shrink-0" />}
                        </button>
                      );
                    })
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Cart Button */}
          <button
            onClick={onOpenCart}
            className="relative flex items-center justify-center gap-3 rounded-xl bg-[#109bba] hover:bg-[#0d87a3] h-11 px-6 sm:px-7 text-white shadow-md shadow-[#109bba]/30 transition-all active:scale-95 cursor-pointer whitespace-nowrap border border-[#109bba]/50 shrink-0"
          >
            <div className="relative flex items-center justify-center">
              <ShoppingBag size={19} strokeWidth={2.2} />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-amber-400 text-[10px] font-black text-slate-950 shadow-sm">
                  {cartItemsCount}
                </span>
              )}
            </div>
            <span className="inline-block font-extrabold text-sm sm:text-sm tracking-wide">
              {cartTotal > 0 ? `${cartTotal.toLocaleString()} UZS` : t('cart')}
            </span>
          </button>

          {/* Language Selector (UZ | RU | EN) */}
          <div className="flex items-center gap-1.5 h-11 px-2.5 py-1 rounded-xl bg-slate-900/90 border border-white/10 text-xs shadow-inner shrink-0">
            <Globe size={16} className="text-[#109bba] ml-1 mr-1 shrink-0" />
            {['UZ', 'RU', 'EN'].map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1.5 rounded-lg text-xs font-black transition-all cursor-pointer whitespace-nowrap ${
                  lang === l
                    ? 'bg-[#109bba] text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          {/* User / Login Button */}
          <button
            onClick={onOpenLogin}
            aria-label={t('login')}
            className="flex items-center justify-center h-11 w-11 rounded-xl bg-slate-900/90 border border-white/10 hover:border-[#109bba] hover:bg-slate-800 text-white transition-all cursor-pointer shadow-sm shrink-0"
          >
            <User size={20} className="text-slate-200" />
          </button>

          {/* Mobile Hamburger Toggle (for screens < md) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex md:hidden items-center justify-center h-10 w-10 rounded-xl bg-slate-900/90 border border-white/10 text-slate-200 hover:text-white transition-all cursor-pointer"
            aria-label="Menyuni ochish"
          >
            {isMobileMenuOpen ? <X size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#081322] px-6 py-4 space-y-3 animate-fade-in shadow-2xl">
          {/* Region Selector inside Mobile Menu */}
          <div className="space-y-2">
            <button
              onClick={() => setIsRegionDropdownOpen(!isRegionDropdownOpen)}
              className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl font-bold text-sm text-slate-200 hover:bg-white/10 bg-slate-900/60 border border-white/10 cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-[#109bba]" />
                <span>{selectedRegion}</span>
              </div>
              <ChevronDown
                size={14}
                className={`text-slate-400 transition-transform duration-200 ${
                  isRegionDropdownOpen ? 'rotate-180 text-[#109bba]' : ''
                }`}
              />
            </button>

            {isRegionDropdownOpen && (
              <div className="bg-slate-900/90 border border-[#109bba]/30 rounded-xl p-2 space-y-1 max-h-52 overflow-y-auto custom-scrollbar">
                {UZBEKISTAN_REGIONS.map((region) => {
                  const isSelected = selectedRegion === region;
                  return (
                    <button
                      key={region}
                      onClick={() => handleRegionSelect(region)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-left font-bold text-xs transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#109bba] text-white'
                          : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                      }`}
                    >
                      <span>{region}</span>
                      {isSelected && <Check size={14} className="text-white" />}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          <button
            onClick={() => handleNavClick('all')}
            className="w-full text-left px-4 py-2.5 rounded-xl font-bold text-sm text-slate-200 hover:bg-white/10"
          >
            {t('home')}
          </button>
          <button
            onClick={scrollToMenu}
            className="w-full text-left px-4 py-2.5 rounded-xl font-bold text-sm text-slate-200 hover:bg-white/10"
          >
            {t('menu')}
          </button>
          <button
            onClick={() => handleNavClick('lavash')}
            className="w-full text-left px-4 py-2.5 rounded-xl font-bold text-sm text-slate-200 hover:bg-white/10"
          >
            {t('promotions')}
          </button>
          <button
            onClick={scrollToFooter}
            className="w-full text-left px-4 py-2.5 rounded-xl font-bold text-sm text-slate-200 hover:bg-white/10"
          >
            {t('about')}
          </button>
          <a
            href="tel:+998505105035"
            className="block w-full text-left px-4 py-2.5 rounded-xl font-bold text-sm text-slate-200 hover:bg-white/10"
          >
            {t('contact')}: +998 50 510-50-35
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
