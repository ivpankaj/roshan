import React from 'react';
import { PROCESS_STEPS } from '@/lib/data';

export const ProcessTimeline: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-primary text-xs font-bold uppercase tracking-widest bg-gold-light px-3 py-1 rounded-none border border-gold-primary/30">
            Structured Execution
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-navy-primary mt-2">
            Our 4-Step Project Delivery Process
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            From initial blueprints to final site handover—engineered for transparency and zero delays.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          
          {/* Connector Line for Desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-slate-200 -translate-y-6 z-0"></div>

          {PROCESS_STEPS.map((item, idx) => (
            <div
              key={idx}
              className="relative z-10 bg-white p-6 rounded-none border border-slate-200 shadow-lg hover:shadow-xl hover:border-gold-primary transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-none bg-navy-primary text-gold-bright font-black text-lg flex items-center justify-center mb-4 group-hover:bg-gold-primary group-hover:text-navy-dark transition-colors shadow-md border border-gold-primary/30">
                  {item.step}
                </div>

                <h3 className="text-xl font-extrabold text-navy-primary group-hover:text-gold-primary transition-colors mb-2">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                <span>Phase {item.step}</span>
                <span className="text-gold-primary">RE Protocol</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
