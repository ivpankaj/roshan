'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CTASection } from '@/components/CTASection';
import { QuickQuoteModal } from '@/components/QuickQuoteModal';
import { WavyBackground } from '@/components/WavyBackground';
import { SERVICES_DATA } from '@/lib/data';
import { CheckCircle2, ShieldCheck } from 'lucide-react';

export default function PaintingServicePage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const paintingService = SERVICES_DATA.find((s) => s.id === 'painting')!;

  return (
    <div className="min-h-screen bg-bg-light text-text-dark flex flex-col">
      <Navbar onOpenQuoteModal={() => setQuoteModalOpen(true)} />

      <main className="flex-1 pt-28">
        {/* Detail Hero */}
        <section className="bg-navy-dark text-white py-16 border-b border-gold-primary/30 relative overflow-hidden">
          <WavyBackground variant="dark" />
          <div className="absolute inset-0 pattern-grid-subtle opacity-30 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
            <span className="text-gold-bright text-xs font-bold uppercase tracking-widest bg-navy-primary px-3.5 py-1 border border-gold-primary/30 rounded-none">
              Surface Transformation & Protection
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-white mt-3">
              Professional Painting Services
            </h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-3xl mt-3 leading-relaxed">
              Transforming and protecting commercial towers, industrial facilities, and residential spaces across PAN India with premium elastomeric, texture, enamel, and waterproof coatings.
            </p>
          </div>
        </section>

        {/* Detailed Breakdown */}
        <section className="py-20 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
          <WavyBackground variant="gold-subtle" />
          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Main Content Column */}
              <div className="lg:col-span-8 space-y-10">
                
                <div>
                  <h2 className="text-3xl font-black text-navy-primary mb-4">
                    Complete Interior & Exterior Painting Solutions
                  </h2>
                  <p className="text-slate-600 text-base leading-relaxed">
                    {paintingService.fullDesc}
                  </p>
                </div>

                {/* Sub-services Breakdown Grid - Sharp */}
                <div>
                  <h3 className="text-2xl font-extrabold text-navy-primary mb-6">
                    Our Painting Specializations
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {paintingService.subServices.map((sub, idx) => (
                      <div key={idx} className="p-6 bg-slate-50 border border-slate-200 hover:border-gold-primary transition-colors rounded-none">
                        <div className="flex items-center gap-2 text-gold-primary font-bold mb-2">
                          <CheckCircle2 className="w-5 h-5 shrink-0" />
                          <h4 className="text-navy-primary font-extrabold text-base">{sub.title}</h4>
                        </div>
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{sub.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Specifications Table - Sharp */}
                <div className="bg-slate-900 text-white p-8 border border-gold-primary/30 rounded-none">
                  <h3 className="text-xl font-extrabold text-gold-bright mb-4">
                    Technical Specifications & Standards
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {paintingService.technicalSpecs?.map((spec, idx) => (
                      <div key={idx} className="p-4 bg-slate-800/80 border border-slate-700 rounded-none">
                        <div className="text-xs text-slate-400 font-bold uppercase">{spec.label}</div>
                        <div className="text-sm font-black text-white mt-1">{spec.value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Process Steps */}
                <div>
                  <h3 className="text-2xl font-extrabold text-navy-primary mb-4">
                    Execution Methodology
                  </h3>
                  <div className="space-y-3">
                    {paintingService.processSteps.map((step, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-4 bg-slate-50 border border-slate-200 rounded-none">
                        <span className="w-8 h-8 bg-navy-primary text-gold-bright font-black text-xs flex items-center justify-center shrink-0 border border-gold-primary/30 rounded-none">
                          0{idx + 1}
                        </span>
                        <span className="text-slate-700 text-sm font-semibold">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Sidebar Column */}
              <div className="lg:col-span-4 space-y-6">
                <div className="p-6 bg-navy-primary text-white border border-gold-primary/30 shadow-xl space-y-4 rounded-none">
                  <h3 className="text-xl font-extrabold text-gold-bright">Need a Painting Quote?</h3>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    Contact our site engineers in Greater Noida for a fast site evaluation and color consultation.
                  </p>
                  <button
                    onClick={() => setQuoteModalOpen(true)}
                    className="w-full py-3.5 bg-gold-primary text-navy-dark font-extrabold text-xs hover:bg-gold-bright transition-colors uppercase tracking-wider shadow-md rounded-none"
                  >
                    Request Painting Estimate
                  </button>
                  <a
                    href="tel:+917048976431"
                    className="block text-center text-xs font-bold text-slate-300 hover:text-white"
                  >
                    📞 Call directly: +91 70489 76431
                  </a>
                </div>

                {/* Key Benefits Card */}
                <div className="p-6 bg-slate-50 border border-slate-200 space-y-3 rounded-none">
                  <h4 className="font-extrabold text-navy-primary text-sm uppercase tracking-wider">
                    Key Client Benefits
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-600 font-semibold">
                    {paintingService.keyBenefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <ShieldCheck className="w-4 h-4 text-gold-primary shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>

        <CTASection onOpenQuoteModal={() => setQuoteModalOpen(true)} />
      </main>

      <Footer onOpenQuoteModal={() => setQuoteModalOpen(true)} />
      <QuickQuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        defaultService="Painting Services"
      />
    </div>
  );
}
