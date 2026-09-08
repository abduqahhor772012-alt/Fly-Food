import React from 'react';
import { Plus, Star, Check } from 'lucide-react';
import { CATEGORIES } from '../data/menuData';
import { useLanguage } from '../context/LanguageContext';

const Menu = ({ menuItems, selectedCategory, onSelectCategory, onAddToCart, addedItemId }) => {
  const { lang, t } = useLanguage();

  return (
    <section id="menu-section" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-4 sm:pb-6">

      {/* Section Header */}
      <div className="mb-10 text-center flex flex-col items-center justify-center">
        <h2 className="text-3xl sm:text-5xl font-black text-[#fefefe] tracking-tight mb-3">
          {t('ourMenu')}<span className="text-[#109bba]">{t('menuHighlight')}</span>
        </h2>
        <p className="text-[#fefefe]/80 text-sm sm:text-base max-w-lg text-center">
          {t('menuSub')}
        </p>
      </div>

      {/* Category Pill Filters — Centered & Larger */}
      <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-5 flex-wrap mb-12 w-full max-w-5xl mx-auto px-2">
        {CATEGORIES.map((cat) => {
          const categoryName = typeof cat.name === 'object' ? (cat.name[lang] || cat.name.UZ) : cat.name;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`px-7 py-3.5 sm:px-9 sm:py-4 rounded-2xl font-black text-base sm:text-lg md:text-xl whitespace-nowrap transition-all duration-200 cursor-pointer shadow-md ${
                selectedCategory === cat.id
                  ? 'bg-[#109bba] text-[#fefefe] shadow-xl shadow-[#109bba]/50 scale-105 ring-4 ring-[#109bba]/40'
                  : 'bg-slate-900/90 text-[#fefefe]/80 hover:text-[#fefefe] hover:bg-slate-800 border border-slate-700/80 hover:border-[#109bba] hover:scale-105'
              }`}
            >
              {categoryName}
            </button>
          );
        })}
      </div>

      {/* Menu Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
        {menuItems.map((item) => {
          const itemName = typeof item.name === 'object' ? (item.name[lang] || item.name.UZ) : item.name;
          const itemDesc = typeof item.description === 'object' ? (item.description[lang] || item.description.UZ) : item.description;

          return (
            <div
              key={item.id}
              className="group glass-card rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 w-full border border-[#109bba]/30"
            >
              {/* Card Image & Badge */}
              <div className="relative h-56 overflow-hidden bg-[#109bba] p-3 flex items-center justify-center">
                <img
                  src={item.image}
                  alt={itemName}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-md"
                />

                {item.badge && (
                  <span className="absolute top-3 left-3 bg-[#F59E0B] text-[#3B2F2F] text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                    {item.badge}
                  </span>
                )}

                {/* Rating badge */}
                <div className="absolute top-3 right-3 bg-[#3B2F2F]/90 backdrop-blur-md px-2.5 py-1 rounded-full flex items-center gap-1.5 border border-[#F59E0B]/50 text-xs font-bold text-[#FFF7E6] shadow-md">
                  <Star size={12} className="fill-[#F59E0B] text-[#F59E0B]" />
                  <span>{item.rating}</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-lg font-black text-[#fefefe] group-hover:text-[#109bba] transition-colors leading-snug">
                      {itemName}
                    </h3>
                    {item.Vazn && (
                      <span className="shrink-0 bg-[#FFF7E6] text-[#3B2F2F] text-[10px] font-extrabold px-2 py-0.5 rounded-md shadow-xs">
                        {item.Vazn}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#fefefe]/70 mt-2 line-clamp-2 leading-relaxed">
                    {itemDesc}
                  </p>
                </div>

                {/* Price & Add Button */}
                <div className="flex items-center justify-between pt-3 border-t border-slate-800/80">
                  <div>
                    <span className="text-[11px] text-[#fefefe]/60 font-medium block">{t('priceLabel')}</span>
                    <span className="text-lg font-black text-[#fefefe]">
                      {item.price.toLocaleString()} <span className="text-xs font-bold text-[#109bba]">UZS</span>
                    </span>
                  </div>

                  <button
                    onClick={() => onAddToCart(item)}
                    className={`p-3 rounded-2xl flex items-center justify-center transition-all cursor-pointer ${
                      addedItemId === item.id
                        ? 'bg-emerald-500 text-white scale-110'
                        : 'bg-slate-800 hover:bg-[#109bba] text-[#fefefe] hover:text-[#fefefe] shadow-md'
                    }`}
                    aria-label={`${itemName} ${t('addToCart')}`}
                  >
                    {addedItemId === item.id ? <Check size={20} /> : <Plus size={20} />}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
};

export default Menu;
