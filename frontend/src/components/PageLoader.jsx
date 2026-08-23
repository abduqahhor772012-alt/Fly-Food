import React, { useState, useEffect } from 'react';

const PageLoader = () => {
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // Start fade out after 1.2s
    const fadeTimer = setTimeout(() => {
      setFade(true);
    }, 1200);

    // Completely remove component after 1.6s
    const removeTimer = setTimeout(() => {
      setLoading(false);
    }, 1600);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!loading) return null;

  // Symmetric 100% Perfect Infinity ∞ Path
  const infinityPath = "M 100,50 C 145,15 185,15 185,50 C 185,85 145,85 100,50 C 55,15 15,15 15,50 C 15,85 55,85 100,50 Z";

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#040810] flex flex-col items-center justify-center transition-all duration-500 selection:bg-none ${
        fade ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100 scale-100'
      }`}
    >
      {/* Background Ambient Glow */}
      <div className="absolute w-[340px] h-[340px] rounded-full bg-gradient-to-tr from-[#0c6a7f]/25 to-[#18c0ee]/20 blur-3xl pointer-events-none" />

      {/* Infinity Flight Arena */}
      <div className="relative w-[340px] h-[170px] flex items-center justify-center">

        {/* SVG Infinity Loop Track (∞) & Animated Airplane */}
        <svg
          viewBox="0 0 200 100"
          className="w-full h-full overflow-visible drop-shadow-[0_0_15px_rgba(24,192,238,0.45)]"
        >
          {/* Outer Ambient Glow Underlay */}
          <path
            d={infinityPath}
            stroke="#0c6a7f"
            strokeWidth="5"
            fill="none"
            className="opacity-30 blur-[1px]"
          />

          {/* Animated Dashed Infinity ∞ Line */}
          <path
            d={infinityPath}
            stroke="#18c0ee"
            strokeWidth="2.5"
            strokeDasharray="8 6"
            fill="none"
            strokeLinecap="round"
            className="opacity-85 animate-[dash_2.5s_linear_infinite]"
          />

          {/* Flying Jet Airplane Riding PRECISELY ON TOP of the Infinity Line */}
          <g className="airplane-svg-runner">
            {/* Outer Glow Halo Ring */}
            <circle r="7.5" fill="#0c6a7f" stroke="#38d5f8" strokeWidth="1.2" className="shadow-md" />

            {/* Detailed Passenger Jet Airplane (Centered at 0,0) */}
            <path
              d="M 8 0 L -3 -6 L -1 -1.5 L -6 -1.5 L -7 -4 L -8 -4 L -7 0 L -8 4 L -7 4 L -6 1.5 L -1 1.5 L -3 6 Z"
              fill="#ffffff"
            />
          </g>
        </svg>

      </div>

      {/* Brand Title (Clean FLYFOOD) */}
      <div className="mt-4 flex flex-col items-center justify-center">
        <div className="text-3xl font-black italic tracking-tight text-white drop-shadow-md">
          FLY<span className="text-[#18c0ee]">FOOD</span>
        </div>
      </div>

    </div>
  );
};

export default PageLoader;
