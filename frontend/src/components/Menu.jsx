import React from 'react';
import { Plus, Star, Check } from 'lucide-react';
import { CATEGORIES } from '../data/menuData';

const Menu = ({ menuItems, selectedCategory, onSelectCategory, onAddToCart, addedItemId }) => {
  return (
    <section id="menu-section" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">

      {/* Section Header */}
      <div className="mb-10 text-center flex flex-col items-center justify-center">
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-3">
          Bizning <span className="text-[#128ba7]">Menyu</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-lg text-center">
          Eng mazali fast-food taomlari va salqin ichimliklar to'plami
        </p>
      </div>

      {/* Category Pill Filters — Centered */}
      <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-12 w-full max-w-3xl mx-auto">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className={`px-5 py-2.5 sm:px-6 sm:py-3 rounded-2xl font-extrabold text-sm whitespace-nowrap transition-all duration-200 cursor-pointer ${
              selectedCategory === cat.id
                ? 'bg-gradient-to-r from-[#0c6a7f] to-[#128ba7] text-white shadow-lg shadow-[#0c6a7f]/40 scale-105 ring-2 ring-[#128ba7]/50'
                : 'bg-slate-900/90 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800/80 shadow-sm hover:border-[#0c6a7f]/40'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Menu Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="group glass-card rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 w-full"
          >
            {/* Card Image & Badge */}
            <div className="relative h-52 overflow-hidden bg-slate-950">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {item.badge && (
                <span className="absolute top-3 left-3 bg-gradient-to-r from-[#0c6a7f] to-[#128ba7] text-white text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-full shadow-md">
                  {item.badge}
                </span>
              )}

              <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-full flex items-center gap-1 border border-white/10 text-xs font-bold text-amber-400">
                <Star size={12} className="fill-amber-400" />
                <span>{item.rating}</span>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-lg font-black text-white group-hover:text-[#128ba7] transition-colors leading-snug">
                  {item.name}
                </h3>
                <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Price & Add Button */}
              <div className="flex items-center justify-between pt-3 border-t border-slate-800/80">
                <div>
                  <span className="text-[11px] text-slate-500 font-medium block">Narxi</span>
                  <span className="text-lg font-black text-white">
                    {item.price.toLocaleString()} <span className="text-xs font-bold text-[#128ba7]">UZS</span>
                  </span>
                </div>

                <button
                  onClick={() => onAddToCart(item)}
                  className={`p-3 rounded-2xl flex items-center justify-center transition-all cursor-pointer ${
                    addedItemId === item.id
                      ? 'bg-emerald-500 text-white scale-110'
                      : 'bg-slate-800 hover:bg-[#0c6a7f] text-slate-200 hover:text-white shadow-md'
                  }`}
                  aria-label={`${item.name} savatga qo'shish`}
                >
                  {addedItemId === item.id ? <Check size={20} /> : <Plus size={20} />}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Menu;
