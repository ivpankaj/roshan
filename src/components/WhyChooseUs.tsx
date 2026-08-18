import React from 'react';
import { ShieldCheck, Users, Clock, FileCheck, Layers, MapPin } from 'lucide-react';
import { WHY_CHOOSE_US } from '@/lib/data';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck':
        return ShieldCheck;
      case 'Users':
        return Users;
      case 'Clock':
        return Clock;
      case 'FileCheck':
        return FileCheck;
      case 'Layers':
        return Layers;
      case 'MapPin':
      default:
        return MapPin;
    }
  };

  return (
    <section className="py-20 bg-navy-primary text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-bright text-xs font-extrabold uppercase tracking-widest bg-navy-dark px-4 py-1.5 rounded-none border border-gold-primary/30">
            Uncompromising Excellence
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-3">
            Why Choose Roshan Enterprises?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3">
            Built on trust, structural integrity, and dedicated site execution. Here is why clients partner with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, idx) => {
            const Icon = getIcon(item.iconName);
            return (
              <div
                key={idx}
                className="bg-navy-dark p-8 rounded-none border border-gold-primary/30 hover:border-gold-primary transition-all duration-300 shadow-xl group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-none bg-navy-primary text-gold-bright border border-gold-primary/40 group-hover:bg-gold-primary group-hover:text-navy-dark transition-colors flex items-center justify-center">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-extrabold text-white group-hover:text-gold-bright transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-gold-primary font-bold flex items-center gap-1 uppercase tracking-wider">
                  <span>RE Standard Guaranteed</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
