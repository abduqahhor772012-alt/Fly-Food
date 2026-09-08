import React from 'react';
import { Clock3, MapPin, Phone, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="mt-16 sm:mt-24 w-full border-t-2 border-[#109bba]/40 bg-[#040912] shadow-2xl relative">
      
      {/* Glow highlight line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-[#109bba] to-transparent shadow-[0_0_20px_#109bba]" />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 sm:gap-12 px-6 sm:px-10 lg:px-12 py-16 sm:py-24 md:grid-cols-2 lg:grid-cols-4">
        
        {/* Section 1: Logo & Brand Tagline */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <img
              src="https://i.postimg.cc/bNQrNC42/Artboard-10-copy-7-4x-100.jpg"
              alt="FlyFood Logo"
              className="h-16 w-auto rounded-2xl object-contain shadow-lg shadow-[#109bba]/30 border border-white/20"
            />
            <div className="text-3xl sm:text-4xl font-black italic tracking-[-0.08em] text-[#fefefe]">
              FLY<span className="text-[#109bba]">FOOD</span>
            </div>
          </div>

          <p className="max-w-sm text-base sm:text-lg leading-relaxed text-[#fefefe]/85 font-medium">
            {t('footerTagline')}
          </p>

          <div>
            <span className="inline-block bg-[#3B2F2F] text-[#FFF7E6] border-2 border-[#F59E0B]/60 px-4 py-2 rounded-full text-xs font-black uppercase tracking-[0.18em] shadow-md">
              {t('since2025')}
            </span>
          </div>
        </section>

        {/* Section 2: About Us */}
        <section className="space-y-5">
          <h2 className="text-lg sm:text-xl font-black uppercase tracking-[0.18em] text-[#fefefe] flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#109bba] inline-block" />
            {t('aboutUsHeader')}
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-[#fefefe]/85 font-medium">
            {t('aboutUsText')}
          </p>
        </section>

        {/* Section 3: Services List */}
        <section className="space-y-5">
          <h2 className="text-lg sm:text-xl font-black uppercase tracking-[0.18em] text-[#fefefe] flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#109bba] inline-block" />
            {t('servicesHeader')}
          </h2>
          <ul className="space-y-3.5 text-base sm:text-lg font-semibold text-[#fefefe]/85">
            <li className="flex items-center gap-2 hover:text-[#109bba] transition-colors">
              <span className="text-[#109bba] font-bold">✓</span> {t('srv1')}
            </li>
            <li className="flex items-center gap-2 hover:text-[#109bba] transition-colors">
              <span className="text-[#109bba] font-bold">✓</span> {t('srv2')}
            </li>
            <li className="flex items-center gap-2 hover:text-[#109bba] transition-colors">
              <span className="text-[#109bba] font-bold">✓</span> {t('srv3')}
            </li>
            <li className="flex items-center gap-2 hover:text-[#109bba] transition-colors">
              <span className="text-[#109bba] font-bold">✓</span> {t('srv4')}
            </li>
          </ul>
        </section>

        {/* Section 4: Contact & Social Links */}
        <section className="space-y-5">
          <h2 className="text-lg sm:text-xl font-black uppercase tracking-[0.18em] text-[#fefefe] flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#109bba] inline-block" />
            {t('contactHeader')}
          </h2>
          <div className="space-y-4 text-base sm:text-lg font-semibold text-[#fefefe]/90">
            <a href="tel:+998505105035" className="flex items-center gap-3.5 transition-colors hover:text-[#109bba] group">
              <div className="p-2.5 rounded-xl bg-[#109bba]/20 text-[#109bba] group-hover:bg-[#109bba] group-hover:text-white transition-all">
                <Phone size={20} className="shrink-0" />
              </div>
              <span className="font-extrabold">+998 50 510-50-35</span>
            </a>

            <p className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-[#109bba]/20 text-[#109bba] mt-0.5">
                <MapPin size={20} className="shrink-0" />
              </div>
              <span>{t('cityDeliveryZone')}</span>
            </p>

            <p className="flex items-center gap-3.5">
              <div className="p-2.5 rounded-xl bg-[#109bba]/20 text-[#109bba]">
                <Clock3 size={20} className="shrink-0" />
              </div>
              <span>{t('everydayHours')}</span>
            </p>
          </div>

          <div className="pt-2 flex items-center gap-4">
            <a 
              href="https://t.me" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="FlyFood Telegram" 
              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-700 bg-slate-900/90 text-[#109bba] transition-all hover:border-[#109bba] hover:bg-[#109bba] hover:text-white hover:scale-110 shadow-lg"
            >
              <Send size={22} />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="FlyFood Instagram" 
              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-700 bg-slate-900/90 text-[#109bba] transition-all hover:border-[#109bba] hover:bg-[#109bba] hover:text-white hover:scale-110 shadow-lg"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </section>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-slate-800/90 px-6 py-8 text-center text-sm font-semibold text-[#fefefe]/70 bg-[#02050b]">
        {t('allRightsReserved')}
      </div>
    </footer>
  );
};

export default Footer;
