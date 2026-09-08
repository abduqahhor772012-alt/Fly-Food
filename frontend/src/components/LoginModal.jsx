import React, { useState } from 'react';
import { X, Phone, ArrowRight, CheckCircle2, User, Mail, ShieldCheck, AlertCircle } from 'lucide-react';
import ImageCaptchaModal from './ImageCaptchaModal';
import { useLanguage } from '../context/LanguageContext';

const LoginModal = ({ isOpen, onClose, onLoginSuccess }) => {
  const { t } = useLanguage();
  const [step, setStep] = useState('phone'); // 'phone' | 'code' | 'success'
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isRecaptchaVerified, setIsRecaptchaVerified] = useState(false);
  const [recaptchaError, setRecaptchaError] = useState(false);
  const [isImageCaptchaOpen, setIsImageCaptchaOpen] = useState(false);
  const [code, setCode] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSendCode = async (e) => {
    e.preventDefault();
    if (!isRecaptchaVerified) {
      setRecaptchaError(true);
      return;
    }
    setRecaptchaError(false);
    if (phone.length >= 9 && email && name) {
      setIsSubmitting(true);
      try {
        await fetch('/api/auth/send-code', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            phone,
            email,
            name,
            recaptchaVerified: isRecaptchaVerified
          })
        });
      } catch (err) {
        console.error('Auth request error:', err);
      } finally {
        setIsSubmitting(false);
        setStep('code');
      }
    }
  };

  const handleVerifyCode = (e) => {
    e.preventDefault();
    if (code.length >= 4) {
      setStep('success');
      setTimeout(() => {
        if (onLoginSuccess) onLoginSuccess({ phone, email, name });
        onClose();
        setStep('phone');
        setPhone('');
        setEmail('');
        setName('');
        setCode('');
        setIsRecaptchaVerified(false);
        setRecaptchaError(false);
      }, 1800);
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-[9999] bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-10 animate-fade-in">
        {/* Backdrop Click */}
        <div className="absolute inset-0" onClick={onClose} />

        {/* Modal Box — Extra Large max-w-4xl */}
        <div className="relative w-full max-w-4xl max-h-[94vh] overflow-y-auto custom-scrollbar bg-[#081322] border-2 border-[#109bba]/50 rounded-[2.5rem] p-8 sm:p-14 shadow-2xl z-10 space-y-8">
          
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label={t('closeBtn')}
            className="absolute top-6 right-6 sm:top-8 sm:right-8 p-3.5 rounded-full text-[#fefefe]/60 hover:text-[#fefefe] hover:bg-slate-800/80 transition-colors cursor-pointer"
          >
            <X size={28} />
          </button>

          {/* Step 1: User Details Form */}
          {step === 'phone' && (
            <form onSubmit={handleSendCode} className="space-y-7">
              {/* Header */}
              <div className="text-center space-y-3.5 pb-2">
                <div className="w-20 h-20 rounded-3xl bg-[#109bba] text-[#fefefe] flex items-center justify-center mx-auto shadow-2xl shadow-[#109bba]/40 border-2 border-white/20">
                  <User size={40} />
                </div>
                <h3 className="text-4xl sm:text-5xl font-black text-[#fefefe] tracking-tight">{t('loginHeader')}</h3>
                <p className="text-base sm:text-lg text-[#fefefe]/80 leading-relaxed max-w-lg mx-auto">
                  {t('loginSub')}
                </p>
              </div>

              {/* Inputs Grid — 2 Columns on Desktop */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* 1. Telefon raqam */}
                <div className="space-y-2.5">
                  <label className="text-base sm:text-lg font-black text-[#fefefe]/90 block">{t('phoneNum')}</label>
                  <div className="relative flex items-center">
                    <input
                      type="tel"
                      required
                      placeholder="+998 90 123 45 67"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-5 pr-14 py-4.5 bg-slate-900/90 border border-slate-700/80 rounded-2xl text-[#fefefe] text-lg font-bold focus:outline-none focus:border-[#109bba] transition-all"
                    />
                    <span className="absolute right-5 text-[#109bba] pointer-events-none">
                      <Phone size={24} />
                    </span>
                  </div>
                </div>

                {/* 2. Ismingiz */}
                <div className="space-y-2.5">
                  <label className="text-base sm:text-lg font-black text-[#fefefe]/90 block">{t('yourName')}</label>
                  <div className="relative flex items-center">
                    <input
                      type="text"
                      required
                      placeholder={t('namePlaceholder')}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-5 pr-14 py-4.5 bg-slate-900/90 border border-slate-700/80 rounded-2xl text-[#fefefe] text-lg font-bold focus:outline-none focus:border-[#109bba] transition-all"
                    />
                    <span className="absolute right-5 text-[#109bba] pointer-events-none">
                      <User size={24} />
                    </span>
                  </div>
                </div>

                {/* 3. Gmail / Email (Full Width) */}
                <div className="space-y-2.5 sm:col-span-2">
                  <label className="text-base sm:text-lg font-black text-[#fefefe]/90 block">{t('gmailLabel')}</label>
                  <div className="relative flex items-center">
                    <input
                      type="email"
                      required
                      placeholder="misol@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-5 pr-14 py-4.5 bg-slate-900/90 border border-slate-700/80 rounded-2xl text-[#fefefe] text-lg font-bold focus:outline-none focus:border-[#109bba] transition-all"
                    />
                    <span className="absolute right-5 text-[#109bba] pointer-events-none">
                      <Mail size={24} />
                    </span>
                  </div>
                </div>

              </div>

              {/* 4. reCAPTCHA Protection Box */}
              <div className="pt-2 flex flex-col items-center">
                <div className={`w-full bg-slate-900/90 border-2 ${recaptchaError ? 'border-red-500 bg-red-950/25' : 'border-slate-700/80'} rounded-2xl p-5 sm:p-6 flex items-center justify-between shadow-inner transition-colors`}>
                  <button
                    type="button"
                    onClick={() => {
                      if (!isRecaptchaVerified) {
                        setIsImageCaptchaOpen(true);
                      }
                    }}
                    className="flex items-center gap-4.5 cursor-pointer select-none text-left"
                  >
                    <div
                      className={`w-9 h-9 rounded-xl border-2 flex items-center justify-center transition-all ${
                        isRecaptchaVerified
                          ? 'bg-emerald-500 border-emerald-500 text-white shadow-lg'
                          : 'border-slate-500 bg-slate-800 hover:border-[#109bba]'
                      }`}
                    >
                      {isRecaptchaVerified && <CheckCircle2 size={24} />}
                    </div>
                    <span className="text-lg sm:text-xl font-black text-slate-200">
                      {isRecaptchaVerified ? t('notRobotSuccess') : t('iAmNotRobot')}
                    </span>
                  </button>

                  <div className="flex flex-col items-end leading-none text-slate-400">
                    <div className="flex items-center gap-2">
                      <ShieldCheck size={24} className="text-[#109bba]" />
                      <span className="text-sm font-black tracking-wider text-slate-300">reCAPTCHA</span>
                    </div>
                    <span className="text-xs text-slate-400 mt-1">Privacy - Terms</span>
                  </div>
                </div>

                {recaptchaError && (
                  <div className="w-full flex items-center gap-2 text-red-400 text-base font-bold mt-3 px-1">
                    <AlertCircle size={18} />
                    <span>{t('robotCheckWarning')}</span>
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 rounded-2xl bg-[#109bba] hover:bg-[#0d87a3] text-[#fefefe] font-black text-xl shadow-2xl shadow-[#109bba]/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-3.5 cursor-pointer mt-4 border-2 border-[#109bba]/50 disabled:opacity-60"
              >
                <span>{isSubmitting ? t('submitting') : t('getCode')}</span>
                <ArrowRight size={24} />
              </button>
            </form>
          )}

          {/* Step 2: SMS Code Input */}
          {step === 'code' && (
            <form onSubmit={handleVerifyCode} className="space-y-8 py-6">
              <div className="text-center space-y-3.5">
                <h3 className="text-4xl sm:text-5xl font-black text-[#fefefe]">{t('verificationTitle')}</h3>
                <p className="text-lg text-[#fefefe]/80">
                  <span className="text-[#109bba] font-bold">{phone}</span> {t('sentCodeMsg')}
                </p>
              </div>

              <div className="space-y-2 max-w-md mx-auto">
                <input
                  type="text"
                  required
                  maxLength={4}
                  placeholder="1 2 3 4"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="w-full text-center py-6 bg-slate-900/90 border-2 border-slate-700/80 rounded-3xl text-[#fefefe] text-5xl font-black tracking-[0.6em] focus:outline-none focus:border-[#109bba] transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full py-5 rounded-2xl bg-[#109bba] hover:bg-[#0d87a3] text-[#fefefe] font-black text-xl shadow-2xl shadow-[#109bba]/40 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
              >
                {t('confirmLogin')}
              </button>
            </form>
          )}

          {/* Step 3: Success */}
          {step === 'success' && (
            <div className="text-center py-12 space-y-6">
              <div className="w-28 h-28 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle2 size={64} />
              </div>
              <h4 className="text-4xl sm:text-5xl font-black text-[#fefefe]">{t('welcome')}, {name}!</h4>
              <p className="text-lg text-[#fefefe]/80">{t('loginSuccessMsg')}</p>
            </div>
          )}

        </div>
      </div>

      {/* Interactive Image CAPTCHA Puzzle Challenge Modal */}
      <ImageCaptchaModal
        isOpen={isImageCaptchaOpen}
        onClose={() => setIsImageCaptchaOpen(false)}
        onVerifySuccess={() => {
          setIsRecaptchaVerified(true);
          setRecaptchaError(false);
        }}
      />
    </>
  );
};

export default LoginModal;
