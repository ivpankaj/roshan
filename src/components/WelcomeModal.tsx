'use client';

import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export const WelcomeModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup automatically on site load after 500ms delay
    const timer = setTimeout(() => {
      const hasSeenPopup = sessionStorage.getItem('re_popup_seen');
      if (!hasSeenPopup) {
        setIsOpen(true);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('re_popup_seen', 'true');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-300">
      
      {/* Click Dark Blur Backdrop to Close */}
      <div className="absolute inset-0" onClick={handleClose}></div>

      {/* Pure Image Container with Floating Close Button */}
      <div className="relative max-w-md sm:max-w-lg w-full z-10 animate-in zoom-in-95 duration-300">
        
        {/* Sleek Floating Cancel / Close Button */}
        <button
          onClick={handleClose}
          className="absolute -top-3.5 -right-3.5 bg-red-600 hover:bg-red-700 text-white rounded-full p-2 border-2 border-white shadow-2xl z-30 transition-transform hover:scale-110 focus:outline-none cursor-pointer flex items-center justify-center"
          title="Close Popup"
          aria-label="Close"
        >
          <X className="w-6 h-6 stroke-[3]" />
        </button>

        {/* Clean Poster Image Only */}
        <div className="rounded-lg overflow-hidden shadow-2xl border border-white/20 bg-slate-900">
          <img
            src="/images/popup_banner.jpg"
            alt="Roshan Enterprises Poster"
            className="w-full h-auto max-h-[85vh] object-contain block"
          />
        </div>

      </div>
    </div>
  );
};
