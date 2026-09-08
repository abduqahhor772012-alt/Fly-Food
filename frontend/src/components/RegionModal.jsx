import React, { useState } from 'react';
import { X, MapPin, Check, Search } from 'lucide-react';

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

const RegionModal = ({ isOpen, onClose, selectedRegion, onSelectRegion }) => {
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const filteredRegions = UZBEKISTAN_REGIONS.filter(region =>
    region.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (region) => {
    onSelectRegion(region);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
      {/* Backdrop Click */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Box */}
      <div className="relative w-full max-w-lg bg-[#081322] border border-[#109bba]/40 rounded-3xl p-6 sm:p-7 shadow-2xl z-10 flex flex-col max-h-[85vh]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Yopish"
          className="absolute top-5 right-5 p-2 rounded-full text-[#fefefe]/60 hover:text-[#fefefe] hover:bg-slate-800/80 transition-colors cursor-pointer"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="p-3 bg-[#109bba]/20 text-[#109bba] rounded-2xl border border-[#109bba]/30">
            <MapPin size={24} />
          </div>
          <div>
            <h3 className="text-xl font-black text-[#fefefe]">Hududni tanlang</h3>
            <p className="text-xs text-[#fefefe]/70">Yetkazib berish hududingizni belgilang</p>
          </div>
        </div>

        {/* Search Input */}
        <div className="relative mb-4">
          <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Viloyatni qidirish..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-slate-900/90 border border-slate-700/80 rounded-2xl text-sm font-medium text-[#fefefe] placeholder-slate-400 focus:outline-none focus:border-[#109bba] transition-all"
          />
        </div>

        {/* Regions List Grid */}
        <div className="flex-1 overflow-y-auto pr-1 space-y-2 custom-scrollbar">
          {filteredRegions.length === 0 ? (
            <div className="text-center py-8 text-sm text-slate-400">
              Hech qanday viloyat topilmadi
            </div>
          ) : (
            filteredRegions.map((region) => {
              const isSelected = selectedRegion === region;
              return (
                <button
                  key={region}
                  onClick={() => handleSelect(region)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl text-left font-bold text-sm transition-all cursor-pointer border ${
                    isSelected
                      ? 'bg-[#109bba] text-white border-[#109bba] shadow-lg shadow-[#109bba]/30'
                      : 'bg-slate-900/60 text-slate-200 hover:bg-slate-800 hover:text-white border-slate-800/80'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <MapPin size={16} className={isSelected ? 'text-white' : 'text-[#109bba]'} />
                    <span>{region}</span>
                  </div>
                  {isSelected && <Check size={18} className="text-white shrink-0" />}
                </button>
              );
            })
          )}
        </div>

      </div>
    </div>
  );
};

export default RegionModal;
