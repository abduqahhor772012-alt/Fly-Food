import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Tag } from 'lucide-react';
import { HERO_SLIDES } from '../data/menuData';
import { useLanguage } from '../context/LanguageContext';

const Hero = ({ onExploreMenu }) => {
  const { lang, t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 10000);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
    startTimer();
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    startTimer();
  };

  const slide = HERO_SLIDES[currentIndex];

  const slideTag = typeof slide.tag === 'object' ? (slide.tag[lang] || slide.tag.UZ) : slide.tag;
  const slideTitle = typeof slide.title === 'object' ? (slide.title[lang] || slide.title.UZ) : slide.title;
  const slideSubtitle = typeof slide.subtitle === 'object' ? (slide.subtitle[lang] || slide.subtitle.UZ) : slide.subtitle;

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      
      {/* Centered Rounded Banner Box */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#109bba]/30 bg-[#0c1a29] min-h-[460px] sm:min-h-[500px] flex items-center justify-center">

        {/* Background Image & Teal Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={slide.image}
            alt={slideTitle}
            className="w-full h-full object-cover opacity-25 scale-105 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#109bba]/95 via-[#0d849e]/90 to-[#084d5d]/95 opacity-90 transition-colors duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080d14] via-transparent to-transparent" />
        </div>

        {/* Banner Content — Perfectly Centered */}
        <div className="relative z-10 w-full max-w-3xl mx-auto flex flex-col items-center justify-center text-center px-6 sm:px-12 py-12 sm:py-20 space-y-6">

          {/* Tag Badge */}
          <span className="inline-flex items-center gap-2 bg-[#3B2F2F]/90 backdrop-blur-md border border-[#F59E0B]/60 text-[#FFF7E6] font-extrabold text-xs uppercase tracking-widest px-4 py-2 rounded-full shadow-md">
            <Tag size={14} className="text-[#F59E0B]" />
            {slideTag}
          </span>

          {/* Title */}
          <h1 className="text-4xl sm:text-6xl font-black text-[#fefefe] leading-[1.1] tracking-tight max-w-2xl">
            {slideTitle}
          </h1>

          {/* Subtitle */}
          <p className="text-[#fefefe]/90 text-base sm:text-xl font-medium max-w-xl leading-relaxed">
            {slideSubtitle}
          </p>

          {/* Price & CTA Button */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-2">
            <div className="text-center">
              <span className="text-4xl sm:text-5xl font-black text-[#fefefe] block">
                {slide.price}
              </span>
              {slide.oldPrice && (
                <span className="text-sm font-semibold text-[#fefefe]/70 line-through block mt-0.5">
                  {slide.oldPrice}
                </span>
              )}
            </div>

            <button
              onClick={onExploreMenu}
              className="inline-flex shrink-0 items-center justify-between gap-5 bg-[#fefefe] text-[#080d14] hover:bg-[#fefefe]/90 font-black pl-10 pr-6 py-4 rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95 text-lg sm:text-xl cursor-pointer whitespace-nowrap border-2 border-white"
            >
              <span className="font-black text-slate-950 tracking-tight">{t('orderNow')}</span>
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#109bba] text-[#fefefe] shadow-md">
                <ArrowRight size={20} />
              </div>
            </button>
          </div>

        </div>

        {/* Prev / Next Arrows */}
        <button
          onClick={handlePrev}
          aria-label={t('prevPromo')}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/50 text-[#fefefe] flex items-center justify-center backdrop-blur-md border border-white/10 hover:bg-[#109bba] transition-colors cursor-pointer"
        >
          <ChevronLeft size={22} />
        </button>

        <button
          onClick={handleNext}
          aria-label={t('nextPromo')}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/50 text-[#fefefe] flex items-center justify-center backdrop-blur-md border border-white/10 hover:bg-[#109bba] transition-colors cursor-pointer"
        >
          <ChevronRight size={22} />
        </button>

        {/* Slide Indicator Dots */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => { setCurrentIndex(i); startTimer(); }}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === i ? 'w-8 bg-white' : 'w-2.5 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>

      </div>

    </section>
  );
};

export default Hero;
