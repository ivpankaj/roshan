'use client';

import React, { useState, useEffect } from 'react';
import { X, Phone, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/data';

interface WelcomeModalProps {
  onOpenQuoteModal: () => void;
}

export const WelcomeModal: React.FC<WelcomeModalProps> = ({ onOpenQuoteModal }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup automatically on site load after 700ms delay
    const timer = setTimeout(() => {
      const hasSeenPopup = sessionStorage.getItem('re_popup_seen');
      if (!hasSeenPopup) {
        setIsOpen(true);
      }
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('re_popup_seen', 'true');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-300">
      
      {/* Click Backdrop to Close */}
      <div className="absolute inset-0" onClick={handleClose}></div>

      {/* Modal Card Container */}
      <div className="relative bg-white border-4 border-gold-primary shadow-2xl max-w-xl w-full rounded-none overflow-hidden z-10 animate-in zoom-in-95 duration-300 max-h-[90vh] flex flex-col">
        
        {/* Prominent Cancel / Close Button Top Right */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 bg-red-600 hover:bg-red-700 text-white rounded-full p-2 border-2 border-white shadow-2xl z-30 transition-all hover:scale-110 focus:outline-none cursor-pointer flex items-center justify-center group"
          title="Close Popup"
          aria-label="Close"
        >
          <X className="w-6 h-6 stroke-[3]" />
        </button>

        {/* Modal Header */}
        <div className="bg-navy-primary text-white py-3 px-5 border-b border-gold-primary/30 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-gold-primary rounded-none"></span>
            <span className="font-extrabold text-xs uppercase tracking-widest text-gold-bright">
              Roshan Enterprises • Special Notice
            </span>
          </div>
        </div>

        {/* Scrollable Image Area */}
        <div className="overflow-y-auto max-h-[70vh] p-2 bg-slate-900 flex justify-center">
          <img
            src="/images/popup_banner.jpg"
            alt="Roshan Enterprises Corporate Overview Poster"
            className="w-full h-auto object-contain max-h-[70vh] shadow-md border border-slate-700"
          />
        </div>

        {/* Modal Action Footer */}
        <div className="bg-navy-dark p-4 border-t-2 border-gold-primary flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href={`tel:${COMPANY_INFO.phone}`}
            className="w-full sm:w-auto px-5 py-3 bg-gold-primary text-navy-dark font-black text-xs uppercase tracking-wider rounded-none hover:bg-gold-bright transition-colors flex items-center justify-center gap-2 shadow-lg"
          >
            <Phone className="w-4 h-4" />
            <span>Call: {COMPANY_INFO.phone}</span>
          </a>

          <button
            onClick={() => {
              handleClose();
              onOpenQuoteModal();
            }}
            className="w-full sm:w-auto px-5 py-3 bg-navy-primary border border-gold-primary/40 text-white font-extrabold text-xs uppercase tracking-wider rounded-none hover:border-gold-primary hover:text-gold-bright transition-colors flex items-center justify-center gap-2"
          >
            <span>Request Quote</span>
            <ArrowRight className="w-4 h-4 text-gold-primary" />
          </button>

          <button
            onClick={handleClose}
            className="w-full sm:w-auto px-4 py-2.5 text-slate-400 hover:text-white font-bold text-xs uppercase tracking-wider transition-colors border border-slate-700 sm:border-none"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
};
