'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CTASection } from '@/components/CTASection';
import { QuickQuoteModal } from '@/components/QuickQuoteModal';
import { WavyBackground } from '@/components/WavyBackground';
import { WHY_CHOOSE_US } from '@/lib/data';
import { ShieldCheck, Award } from 'lucide-react';

export default function AboutPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-bg-light text-text-dark flex flex-col">
      <Navbar onOpenQuoteModal={() => setQuoteModalOpen(true)} />

      <main className="flex-1 pt-28">
        {/* Page Hero */}
        <section className="bg-navy-dark text-white py-16 border-b border-gold-primary/30 relative overflow-hidden">
          <WavyBackground variant="dark" />
          <div className="absolute inset-0 pattern-grid-subtle opacity-30 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
            <span className="text-gold-bright text-xs font-bold uppercase tracking-widest bg-navy-primary px-3.5 py-1 border border-gold-primary/30 rounded-none">
              Corporate Profile
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-white mt-3">
              About Roshan Enterprises
            </h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-3xl mt-3 leading-relaxed">
              Engineered construction, high-durability industrial flooring, and professional painting solutions headquartered in Greater Noida, UP, serving PAN India clients with uncompromised dedication.
            </p>
          </div>
        </section>

        {/* Company Overview & Mission */}
        <section className="py-20 bg-white border-b border-slate-200 relative overflow-hidden">
          <WavyBackground variant="gold-subtle" />
          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <h2 className="text-3xl sm:text-4xl font-black text-navy-primary">
                  Delivering Quality Workmanship & Reliable Execution Across India
                </h2>

                <p className="text-slate-600 text-base leading-relaxed">
                  Roshan Enterprises was founded on a commitment to elevate execution standards across the Indian construction and finishing services industry. From state-of-the-art Vacuum Dewatered Concrete (VDF) flooring in manufacturing plants to high-grade acrylic elastomeric painting for commercial towers, we manage turnkey projects with engineering rigor.
                </p>

                <p className="text-slate-600 text-base leading-relaxed">
                  Our headquarters in Greater Noida provides strategic access across Northern India and major industrial corridors. Through mobile equipment fleets and dedicated site safety teams, we execute projects across PAN India for manufacturing facilities, commercial hubs, institutional campuses, and real estate developers.
                </p>

                <div className="p-6 bg-slate-50 border-l-4 border-gold-primary space-y-2 rounded-none">
                  <h4 className="font-extrabold text-navy-primary text-base">Our Core Promise</h4>
                  <p className="text-slate-700 text-sm italic">
                    "We Paint. We Build. We Deliver. Every contract is executed with clear communication, line-item transparency, certified materials, and guaranteed milestone adherence."
                  </p>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative border-4 border-slate-100 shadow-2xl rounded-none overflow-hidden">
                  <img
                    src="/images/civil_construction.jpg"
                    alt="Roshan Enterprises Site Engineering and Construction"
                    className="w-full h-[460px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent to-transparent"></div>
                  
                  <div className="absolute bottom-6 left-6 right-6 bg-navy-primary/95 p-6 border border-gold-primary/30 text-white rounded-none">
                    <div className="flex items-center gap-3">
                      <Award className="w-8 h-8 text-gold-primary shrink-0" />
                      <div>
                        <h4 className="font-extrabold text-base text-gold-bright">RE Quality Management System</h4>
                        <p className="text-slate-300 text-xs mt-0.5">Strict adherence to Indian Standards (IS Codes) and safety protocols on all site locations.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Strategic Pillars */}
        <section className="py-20 bg-navy-primary text-white relative overflow-hidden">
          <WavyBackground variant="dark" />
          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-black text-white">
                What Sets Roshan Enterprises Apart
              </h2>
              <p className="text-slate-300 text-sm sm:text-base mt-2">
                Our organizational values guide every project we take on.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {WHY_CHOOSE_US.slice(0, 6).map((item, idx) => (
                <div key={idx} className="bg-navy-dark p-8 border border-gold-primary/30 hover:border-gold-primary transition-all rounded-none">
                  <div className="w-12 h-12 bg-navy-primary text-gold-bright flex items-center justify-center mb-4 border border-gold-primary/40 rounded-none">
                    <ShieldCheck className="w-6 h-6 text-gold-primary" />
                  </div>
                  <h3 className="text-xl font-extrabold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection onOpenQuoteModal={() => setQuoteModalOpen(true)} />
      </main>

      <Footer onOpenQuoteModal={() => setQuoteModalOpen(true)} />
      <QuickQuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
    </div>
  );
}
