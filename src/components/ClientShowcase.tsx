import React from 'react';
import Link from 'next/link';
import { CLIENTS_LIST } from '@/lib/clientData';
import { CheckCircle2, ArrowRight, PlayCircle } from 'lucide-react';

export const ClientShowcase: React.FC = () => {
  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-gold-primary text-xs font-bold uppercase tracking-widest">
              <CheckCircle2 className="w-4 h-4" /> Trusted Industrial & Commercial Alliances
            </div>
            <h3 className="text-2xl sm:text-4xl font-black text-navy-primary mt-1">
              A Business Trusted by Leading Businesses
            </h3>
          </div>
          <p className="text-slate-600 text-sm max-w-md">
            Click on any corporate partner to inspect real plant video walkthroughs, client reviews, and contract scope delivered by Roshan Enterprises.
          </p>
        </div>

        {/* Corporate Client Cards with Real Vector Logos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLIENTS_LIST.map((client) => (
            <Link
              key={client.slug}
              href={`/clients/${client.slug}`}
              className="group bg-slate-50 border-2 border-slate-200 hover:border-gold-primary p-6 transition-all duration-300 shadow-md hover:shadow-2xl flex flex-col justify-between rounded-none relative overflow-hidden"
            >
              {/* Top Sector & Location Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-black uppercase tracking-wider bg-navy-primary text-gold-bright px-2.5 py-0.5 border border-gold-primary/30">
                  {client.category}
                </span>
                <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wide flex items-center gap-1">
                  <PlayCircle className="w-3.5 h-3.5 text-red-600" /> Video & Reviews
                </span>
              </div>

              {/* Real SVG Logo Render */}
              <div className="py-4 my-2 border-y border-slate-200/80 flex items-center justify-center">
                <div
                  className="w-full h-16 flex items-center justify-center transition-transform group-hover:scale-105"
                  dangerouslySetInnerHTML={{ __html: client.logoSvg }}
                />
              </div>

              {/* Scope Teaser & Action */}
              <div className="mt-2 pt-2 space-y-2">
                <h4 className="font-extrabold text-navy-primary text-base group-hover:text-gold-primary transition-colors">
                  {client.name}
                </h4>
                <p className="text-slate-600 text-xs line-clamp-2 leading-relaxed">
                  {client.roshanContractScope.title} ({client.roshanContractScope.areaDelivered})
                </p>

                <div className="pt-2 flex items-center justify-between text-xs font-black text-navy-primary group-hover:text-gold-primary uppercase tracking-wider">
                  <span>Explore Case Study & Video</span>
                  <ArrowRight className="w-4 h-4 text-gold-primary group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};
