import React from 'react';
import { PhoneCall, ArrowRight, Building2, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/data';

interface CTASectionProps {
  onOpenQuoteModal: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="py-16 bg-navy-dark text-white relative overflow-hidden">
      {/* Gold Decorative Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-primary/20 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-light/50 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="bg-gradient-to-r from-navy-primary via-navy-primary to-navy-dark border-2 border-gold-primary/40 rounded-none p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold-primary/20 border border-gold-primary text-gold-bright rounded-none text-xs font-extrabold uppercase tracking-wider">
                <Building2 className="w-3.5 h-3.5" /> Turnkey Construction & Finishes
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
                Have a Project in Mind? <br />
                <span className="text-gold-bright">Let's Build Something Great Together.</span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base max-w-2xl">
                Tell us about your project requirements and our engineering team will provide a detailed line-item technical quote within <strong className="text-white">2 to 4 hours</strong>.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2 text-xs sm:text-sm text-slate-400">
                <span className="flex items-center gap-1.5 text-slate-200">
                  <MapPin className="w-4 h-4 text-gold-primary" /> Serving Clients PAN India
                </span>
                <span>•</span>
                <span className="text-slate-200">PAN India Mobilization</span>
                <span>•</span>
                <span className="text-slate-200">Zero Obligation Quote</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
              <button
                onClick={onOpenQuoteModal}
                className="w-full py-4 bg-gold-primary text-navy-dark font-black text-base rounded-none hover:bg-gold-bright transition-all shadow-xl hover:shadow-gold-primary/40 flex items-center justify-center gap-2 uppercase tracking-wider"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="w-full py-4 bg-navy-dark/90 border border-slate-600 hover:border-gold-primary text-white hover:text-gold-bright font-bold text-sm rounded-none transition-all flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-gold-primary" />
                <span>Call Now: {COMPANY_INFO.phone}</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
