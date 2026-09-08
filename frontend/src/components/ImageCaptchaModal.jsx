import React, { useState } from 'react';
import { RotateCw, Volume2, Info, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const CAPTCHA_CHALLENGES = [
  {
    id: 'crosswalk',
    title: {
      UZ: "peshexodlar o'tish joylari",
      RU: "пешеходные переходы",
      EN: "crosswalks"
    },
    subtitle: {
      UZ: "Agar ular bo'lmasa, \"O'tkazib yuborish\" tugmasini bosing.",
      RU: "Если их нет, нажмите \"Пропустить\".",
      EN: "If there are none, click \"Skip\"."
    },
    correctTiles: [0, 4, 8, 9, 12, 13],
    images: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=150&q=80",
      "https://images.unsplash.com/photo-1477959858617-67f30ac4ce09?auto=format&fit=crop&w=150&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=150&q=80",
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=150&q=80",
      "https://images.unsplash.com/photo-1517649763962-0c623266010b?auto=format&fit=crop&w=150&q=80",
      "https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=150&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=150&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=150&q=80",
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=150&q=80",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=150&q=80",
      "https://images.unsplash.com/photo-1444723121867-7a241cacace9?auto=format&fit=crop&w=150&q=80",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=150&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=150&q=80",
      "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=150&q=80",
      "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=150&q=80",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=150&q=80"
    ]
  },
  {
    id: 'traffic_light',
    title: {
      UZ: "svetoforlar",
      RU: "светофоры",
      EN: "traffic lights"
    },
    subtitle: {
      UZ: "Barcha mos keluvchi rasmlarni tanlang.",
      RU: "Выберите все подходящие изображения.",
      EN: "Select all matching images."
    },
    correctTiles: [1, 2, 5, 6],
    images: [
      "https://images.unsplash.com/photo-1477959858617-67f30ac4ce09?auto=format&fit=crop&w=150&q=80",
      "https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=150&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=150&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=150&q=80",
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=150&q=80",
      "https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=150&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=150&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=150&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=150&q=80",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=150&q=80",
      "https://images.unsplash.com/photo-1444723121867-7a241cacace9?auto=format&fit=crop&w=150&q=80",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=150&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=150&q=80",
      "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=150&q=80",
      "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=150&q=80",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=150&q=80"
    ]
  }
];

const ImageCaptchaModal = ({ isOpen, onClose, onVerifySuccess }) => {
  const { lang, t } = useLanguage();
  const [challengeIndex, setChallengeIndex] = useState(0);
  const [selectedTiles, setSelectedTiles] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const currentChallenge = CAPTCHA_CHALLENGES[challengeIndex];
  const challengeTitle = typeof currentChallenge.title === 'object' ? (currentChallenge.title[lang] || currentChallenge.title.UZ) : currentChallenge.title;
  const challengeSubtitle = typeof currentChallenge.subtitle === 'object' ? (currentChallenge.subtitle[lang] || currentChallenge.subtitle.UZ) : currentChallenge.subtitle;

  const handleTileClick = (index) => {
    setErrorMessage('');
    if (selectedTiles.includes(index)) {
      setSelectedTiles(selectedTiles.filter((i) => i !== index));
    } else {
      setSelectedTiles([...selectedTiles, index]);
    }
  };

  const handleRefresh = () => {
    setSelectedTiles([]);
    setErrorMessage('');
    setChallengeIndex((prev) => (prev + 1) % CAPTCHA_CHALLENGES.length);
  };

  const handleVerify = () => {
    if (selectedTiles.length === 0) {
      handleRefresh();
      return;
    }

    // Verify if any tile is selected
    onVerifySuccess();
    setSelectedTiles([]);
    setErrorMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[10000] bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 animate-fade-in">
      {/* reCAPTCHA Image Puzzle Box — Exactly styled like Google reCAPTCHA Popup */}
      <div className="w-full max-w-[380px] bg-white rounded-lg shadow-2xl overflow-hidden text-slate-900 border border-slate-300">
        
        {/* Top Header Banner (Blue #1a73e8) */}
        <div className="bg-[#1a73e8] p-5 text-white">
          <p className="text-sm font-normal opacity-95">{t('captchaPrompt')}</p>
          <h2 className="text-2xl font-extrabold tracking-tight mt-1">{challengeTitle}</h2>
          <p className="text-xs opacity-90 mt-1">{challengeSubtitle}</p>
        </div>

        {/* 4x4 Grid Container */}
        <div className="p-2 bg-slate-100">
          <div className="grid grid-cols-4 gap-1 bg-white p-1 rounded border border-slate-200">
            {currentChallenge.images.map((imgUrl, index) => {
              const isSelected = selectedTiles.includes(index);
              return (
                <div
                  key={index}
                  onClick={() => handleTileClick(index)}
                  className={`relative aspect-square cursor-pointer overflow-hidden select-none transition-all ${
                    isSelected ? 'ring-4 ring-inset ring-[#1a73e8] scale-95 opacity-90' : 'hover:opacity-95'
                  }`}
                >
                  <img
                    src={imgUrl}
                    alt={`tile-${index}`}
                    className="w-full h-full object-cover"
                  />

                  {/* Selection Overlay Checkmark */}
                  {isSelected && (
                    <div className="absolute top-1 left-1 w-5 h-5 bg-[#1a73e8] text-white rounded-full flex items-center justify-center shadow-md">
                      <Check size={12} strokeWidth={3} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {errorMessage && (
            <p className="text-xs text-red-600 font-medium text-center mt-2">{errorMessage}</p>
          )}
        </div>

        {/* Bottom Actions Bar */}
        <div className="p-3 bg-white border-t border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-3 text-slate-500">
            <button
              onClick={handleRefresh}
              title="Refresh"
              className="p-1.5 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
            >
              <RotateCw size={20} />
            </button>
            <button
              title="Audio"
              className="p-1.5 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
            >
              <Volume2 size={20} />
            </button>
            <button
              title="Info"
              className="p-1.5 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
            >
              <Info size={20} />
            </button>
          </div>

          <button
            onClick={handleVerify}
            className="px-6 py-2.5 bg-[#1a73e8] hover:bg-[#1557b0] text-white font-bold text-xs uppercase tracking-wider rounded shadow transition-all cursor-pointer"
          >
            {selectedTiles.length === 0 ? t('captchaSkip') : t('captchaVerify')}
          </button>
        </div>

      </div>
    </div>
  );
};

export default ImageCaptchaModal;
