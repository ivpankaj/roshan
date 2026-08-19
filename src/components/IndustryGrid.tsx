import React from 'react';
import Link from 'next/link';
import { Factory, Building, Home, GraduationCap, Hospital, ArrowUpRight } from 'lucide-react';
import { INDUSTRIES_DATA } from '@/lib/data';

export const IndustryGrid: React.FC = () => {
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
    <section className="py-20 bg-navy-dark text-white relative overflow-hidden">
      {/* Golden Wavy Curved Lines Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <svg
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          preserveAspectRatio="none"
          viewBox="0 0 1440 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="ind-gold-wave-1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D99A16" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#F0B323" stopOpacity="1" />
              <stop offset="100%" stopColor="#D99A16" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="ind-gold-wave-2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F0B323" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#D99A16" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#F0B323" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="ind-gold-wave-fill" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#D99A16" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#F0B323" stopOpacity="0.03" />
            </linearGradient>
          </defs>

          {/* Golden Wave Filled Backdrop */}
          <path
            d="M0,150 C380,300 760,40 1140,280 C1300,380 1440,180 1440,180 L1440,500 L0,500 Z"
            fill="url(#ind-gold-wave-fill)"
          />

          {/* Primary Golden Wave Curve */}
          <path
            d="M0,150 C380,300 760,40 1140,280 C1300,380 1440,180 1440,180"
            stroke="url(#ind-gold-wave-1)"
            strokeWidth="3.5"
            fill="none"
          />

          {/* Secondary Intersecting Wave Curve */}
          <path
            d="M0,320 C400,100 800,420 1200,120 C1320,30 1440,220 1440,220"
            stroke="url(#ind-gold-wave-2)"
            strokeWidth="2.5"
            strokeDasharray="12 6"
            fill="none"
          />
        </svg>

        {/* Ambient Golden Glow Orbs */}
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-gold-primary/15 blur-3xl rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gold-bright/10 blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-navy-primary border border-gold-primary/40 rounded-none text-gold-bright text-xs font-black uppercase tracking-widest mb-3 shadow-md">
            Domain Expertise
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white">
            Serving Various Sectors Across PAN India
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3">
            Customized painting, VDF/epoxy flooring, and civil solutions engineered for specialized sector compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {INDUSTRIES_DATA.map((ind) => {
            const Icon = getIcon(ind.iconName);
            return (
              <div
                key={ind.id}
                className="group relative bg-navy-primary/95 border border-gold-primary/30 hover:border-gold-primary rounded-none p-6 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-2xl backdrop-blur-sm"
              >
                <div>
                  <div className="w-12 h-12 rounded-none bg-navy-dark border border-gold-primary/40 text-gold-primary group-hover:bg-gold-primary group-hover:text-navy-dark transition-colors flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-gold-bright transition-colors mb-2">
                    {ind.title}
                  </h3>

                  <p className="text-slate-300 text-xs leading-relaxed mb-4">
                    {ind.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-700/60 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 font-medium">
                    {ind.keyServicesProvided[0]}
                  </span>
                  <Link
                    href={`/industries#${ind.slug}`}
                    className="p-1.5 rounded-none bg-navy-dark text-gold-bright hover:bg-gold-primary hover:text-navy-dark transition-colors border border-gold-primary/30"
                    aria-label={`Learn more about ${ind.title} solutions`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
