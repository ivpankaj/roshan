'use client';

import React, { useState, use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CTASection } from '@/components/CTASection';
import { QuickQuoteModal } from '@/components/QuickQuoteModal';
import { WavyBackground } from '@/components/WavyBackground';
import { CLIENTS_LIST } from '@/lib/clientData';
import { Building2, CheckCircle2, Star, Globe, MapPin, Calendar, ArrowLeft, ShieldCheck, ArrowRight, Video } from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ClientDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const client = CLIENTS_LIST.find((c) => c.slug === resolvedParams.slug);

  if (!client) {
    notFound();
  }

  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-bg-light text-text-dark flex flex-col font-sans">
      <Navbar onOpenQuoteModal={() => setQuoteModalOpen(true)} />

      <main className="flex-1 pt-28">
        {/* Client Page Header */}
        <section className="bg-navy-dark text-white py-16 border-b border-gold-primary/30 relative overflow-hidden">
          <WavyBackground variant="dark" />
          <div className="absolute inset-0 pattern-grid-subtle opacity-30 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
            
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-bold text-gold-bright hover:text-white uppercase tracking-wider mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Home Page
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Info */}
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-navy-primary border border-gold-primary/40 text-gold-bright text-xs font-bold uppercase tracking-widest rounded-none">
                  <Building2 className="w-3.5 h-3.5" /> Corporate Client Partner
                </div>

                <h1 className="text-4xl sm:text-6xl font-black text-white">
                  {client.name}
                </h1>
                <p className="text-gold-bright text-sm sm:text-base font-bold">
                  {client.legalName} • {client.category}
                </p>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
                  {client.overview}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 pt-2 font-semibold">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-gold-primary" /> {client.location}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-gold-primary" /> Est. {client.established}
                  </span>
                  {client.websiteUrl && (
                    <>
                      <span>•</span>
                      <a
                        href={client.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-gold-bright hover:underline"
                      >
                        <Globe className="w-4 h-4" /> Official Website
                      </a>
                    </>
                  )}
                </div>
              </div>

              {/* Right Logo Display Banner */}
              <div className="lg:col-span-4 flex justify-center lg:justify-end">
                <div className="p-6 bg-white border-2 border-gold-primary shadow-2xl rounded-none w-full max-w-sm flex flex-col items-center text-center space-y-4">
                  {client.logoImg ? (
                    <img
                      src={client.logoImg}
                      alt={client.name}
                      className="h-24 w-auto object-contain max-w-[220px]"
                    />
                  ) : (
                    <div
                      className="w-full h-24 flex items-center justify-center p-2 rounded-none"
                      dangerouslySetInnerHTML={{ __html: client.logoSvg }}
                    />
                  )}
                  <div className="text-[11px] font-bold uppercase tracking-widest text-slate-500">
                    Verified Corporate Partner
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Contract Executed & Specifications */}
        <section className="py-16 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
          <WavyBackground variant="gold-subtle" />
          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Left Column: Scope Executed by Roshan Enterprises */}
              <div className="lg:col-span-8 space-y-8">
                
                <div className="bg-slate-50 p-8 border-2 border-navy-primary shadow-xl rounded-none space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-gold-primary text-navy-dark text-xs font-black uppercase tracking-wider rounded-none">
                      Contract Scope Delivered
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-black text-navy-primary">
                    {client.roshanContractScope.title}
                  </h2>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {client.roshanContractScope.description}
                  </p>

                  <div className="space-y-3 pt-2">
                    <h4 className="font-extrabold text-navy-primary text-xs uppercase tracking-widest">
                      Contract Deliverables:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {client.roshanContractScope.services.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 p-3 bg-white border border-slate-200 text-xs font-semibold text-slate-800 rounded-none">
                          <CheckCircle2 className="w-4 h-4 text-gold-primary shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Real YouTube Video Player Section */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-navy-primary font-black text-xl">
                    <Video className="w-6 h-6 text-red-600" />
                    <h3>{client.youtubeTitle}</h3>
                  </div>

                  <div className="relative w-full aspect-video border-2 border-navy-primary bg-black shadow-2xl rounded-none overflow-hidden">
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${client.youtubeVideoId}?rel=0`}
                      title={client.youtubeTitle}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full border-0"
                    ></iframe>
                  </div>
                  <p className="text-xs text-slate-500 italic">
                    Note: Video showcases general facility, corporate overview, or industrial plant operations of {client.name}.
                  </p>
                </div>

              </div>

              {/* Right Sidebar: Client Reviews & Plant Specifications */}
              <div className="lg:col-span-4 space-y-8">
                
                {/* Specifications Card */}
                <div className="bg-navy-primary text-white p-6 border border-gold-primary/40 shadow-xl space-y-4 rounded-none">
                  <h3 className="text-lg font-extrabold text-gold-bright uppercase tracking-wider">
                    Facility Specifications
                  </h3>
                  <div className="space-y-3">
                    {client.specifications.map((spec, i) => (
                      <div key={i} className="flex items-center justify-between text-xs py-2 border-b border-slate-700">
                        <span className="text-slate-400 font-semibold">{spec.label}:</span>
                        <span className="font-extrabold text-white">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Client Reviews & Testimonials */}
                <div className="space-y-4">
                  <h3 className="text-xl font-black text-navy-primary flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-gold-primary" /> Verified Client Reviews
                  </h3>

                  {client.reviews.map((rev, idx) => (
                    <div key={idx} className="bg-slate-50 p-6 border border-slate-200 space-y-3 rounded-none shadow-md">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-gold-primary">
                          {[...Array(rev.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-gold-primary" />
                          ))}
                        </div>
                        <span className="text-[10px] text-slate-400 font-bold">{rev.date}</span>
                      </div>

                      <p className="text-slate-700 text-xs italic leading-relaxed">
                        "{rev.comment}"
                      </p>

                      <div className="pt-2 border-t border-slate-200">
                        <div className="font-extrabold text-navy-primary text-xs">{rev.author}</div>
                        <div className="text-[11px] text-slate-500 font-medium">{rev.role}, {client.name}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quote Button CTA */}
                <div className="bg-gold-light p-6 border border-gold-primary space-y-3 text-center rounded-none">
                  <h4 className="font-extrabold text-navy-primary text-sm uppercase">Need Similar Industrial Execution?</h4>
                  <p className="text-xs text-slate-600">
                    Our team provides fast site estimates for industrial VDF, epoxy, and RCC civil works.
                  </p>
                  <button
                    onClick={() => setQuoteModalOpen(true)}
                    className="w-full py-3 bg-gold-primary text-navy-dark font-extrabold text-xs uppercase tracking-wider hover:bg-gold-bright transition-colors rounded-none shadow-md inline-flex items-center justify-center gap-2"
                  >
                    <span>Request Technical Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>

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
