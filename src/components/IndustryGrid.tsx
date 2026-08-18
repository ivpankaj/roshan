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
      <div className="absolute inset-0 pattern-grid-subtle opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-navy-primary border border-gold-primary/30 rounded-none text-gold-bright text-xs font-bold uppercase tracking-widest mb-3">
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
                className="group relative bg-navy-primary border border-white/10 hover:border-gold-primary rounded-none p-6 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-xl"
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
