'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ServiceCard } from '@/components/ServiceCard';
import { CTASection } from '@/components/CTASection';
import { QuickQuoteModal } from '@/components/QuickQuoteModal';
import { SERVICES_DATA } from '@/lib/data';

export default function ServicesOverviewPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Painting Services');

  const handleOpenQuote = (serviceName?: string) => {
    if (serviceName) setSelectedService(serviceName);
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-bg-light text-text-dark flex flex-col">
      <Navbar onOpenQuoteModal={() => handleOpenQuote('General Service Inquiry')} />

      <main className="flex-1 pt-28">
        {/* Page Hero */}
        <section className="bg-navy-dark text-white py-16 border-b border-gold-primary/30 relative overflow-hidden">
          <div className="absolute inset-0 pattern-grid-subtle opacity-30 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
            <span className="text-gold-bright text-xs font-bold uppercase tracking-widest bg-navy-primary px-3.5 py-1 rounded-full border border-gold-primary/30">
              Comprehensive Contracting
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-white mt-3">
              Our Core Services
            </h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-3xl mt-3 leading-relaxed">
              Roshan Enterprises provides integrated solutions across Painting Services, Industrial Flooring Solutions, and RCC Civil Works for commercial, industrial, and residential projects.
            </p>
          </div>
        </section>

        {/* Services Cards */}
        <section className="py-20 bg-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {SERVICES_DATA.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  onOpenQuoteModal={handleOpenQuote}
                />
              ))}
            </div>
          </div>
        </section>

        <CTASection onOpenQuoteModal={() => handleOpenQuote('General Inquiry')} />
      </main>

      <Footer onOpenQuoteModal={() => handleOpenQuote('General Inquiry')} />
      <QuickQuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        defaultService={selectedService}
      />
    </div>
  );
}
