'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CTASection } from '@/components/CTASection';
import { QuickQuoteModal } from '@/components/QuickQuoteModal';
import { INDUSTRIES_DATA } from '@/lib/data';
import { Factory, Building, Home, GraduationCap, Hospital, CheckCircle2, ArrowRight } from 'lucide-react';

export default function IndustriesPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Factory':
        return Factory;
      case 'Building':
        return Building;
      case 'Home':
        return Home;
      case 'GraduationCap':
        return GraduationCap;
      case 'Hospital':
      default:
        return Hospital;
    }
  };

  return (
    <div className="min-h-screen bg-bg-light text-text-dark flex flex-col">
      <Navbar onOpenQuoteModal={() => setQuoteModalOpen(true)} />

      <main className="flex-1 pt-28">
        {/* Hero */}
        <section className="bg-navy-dark text-white py-16 border-b border-gold-primary/30 relative overflow-hidden">
          <div className="absolute inset-0 pattern-grid-subtle opacity-30 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
            <span className="text-gold-bright text-xs font-bold uppercase tracking-widest bg-navy-primary px-3.5 py-1 border border-gold-primary/30 rounded-none">
              Sector Specialized Engineering
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-white mt-3">
              Industries & Sectors Served
            </h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-3xl mt-3 leading-relaxed">
              Tailored industrial flooring, anti-bacterial PU cleanroom coatings, commercial texture painting, and RCC structural additions designed for specialized industry compliance.
            </p>
          </div>
        </section>

        {/* Sectors Detail List */}
        <section className="py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
            {INDUSTRIES_DATA.map((ind, idx) => {
              const Icon = getIcon(ind.iconName);
              const isEven = idx % 2 === 0;

              return (
                <div
                  id={ind.slug}
                  key={ind.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 sm:p-12 bg-slate-50 border border-slate-200 shadow-xl rounded-none ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className={`lg:col-span-6 space-y-6 ${isEven ? '' : 'lg:order-2'}`}>
                    <div className="w-14 h-14 bg-navy-primary text-gold-bright border border-gold-primary/40 flex items-center justify-center shadow-md rounded-none">
                      <Icon className="w-7 h-7" />
                    </div>

                    <h2 className="text-3xl font-black text-navy-primary">
                      {ind.title} Solutions
                    </h2>

                    <p className="text-slate-600 text-base leading-relaxed">
                      {ind.fullDesc}
                    </p>

                    <div className="space-y-3 pt-2">
                      <h4 className="font-extrabold text-navy-primary text-sm uppercase tracking-wider">
                        Tailored Services for {ind.title}:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {ind.keyServicesProvided.map((service, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white p-2.5 border border-slate-200 rounded-none">
                            <CheckCircle2 className="w-4 h-4 text-gold-primary shrink-0" />
                            <span>{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4">
                      <button
                        onClick={() => setQuoteModalOpen(true)}
                        className="px-6 py-3 bg-gold-primary text-navy-dark font-extrabold text-xs rounded-none hover:bg-gold-bright transition-colors uppercase tracking-wider inline-flex items-center gap-2 shadow-md"
                      >
                        <span>Request {ind.title} Site Quote</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className={`lg:col-span-6 ${isEven ? '' : 'lg:order-1'}`}>
                    <div className="relative rounded-none overflow-hidden shadow-2xl border-4 border-white h-[360px]">
                      <img
                        src={ind.image}
                        alt={ind.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-transparent to-transparent"></div>
                      
                      <div className="absolute bottom-4 left-4 bg-navy-primary/95 text-white px-4 py-2 text-xs font-extrabold rounded-none border border-gold-primary/30">
                        {ind.featuredProjectsCount}+ Projects Delivered in {ind.title}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <CTASection onOpenQuoteModal={() => setQuoteModalOpen(true)} />
      </main>

      <Footer onOpenQuoteModal={() => setQuoteModalOpen(true)} />
      <QuickQuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
    </div>
  );
}
