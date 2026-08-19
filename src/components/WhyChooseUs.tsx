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
    <section className="py-20 bg-navy-primary text-white relative overflow-hidden">
      {/* Golden Wavy Curved Lines Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <svg
          className="absolute inset-0 w-full h-full object-cover opacity-65"
          preserveAspectRatio="none"
          viewBox="0 0 1440 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="why-gold-wave-1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D99A16" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#F0B323" stopOpacity="1" />
              <stop offset="100%" stopColor="#D99A16" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="why-gold-wave-2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F0B323" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#D99A16" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#F0B323" stopOpacity="0.3" />
            </linearGradient>
          </defs>

          {/* Primary Golden Wave Curve */}
          <path
            d="M0,100 C400,280 800,20 1200,240 C1340,320 1440,160 1440,160"
            stroke="url(#why-gold-wave-1)"
            strokeWidth="3.5"
            fill="none"
          />

          {/* Secondary Intersecting Wave Curve */}
          <path
            d="M0,280 C360,80 720,380 1080,100 C1260,30 1440,200 1440,200"
            stroke="url(#why-gold-wave-2)"
            strokeWidth="2.5"
            strokeDasharray="10 5"
            fill="none"
          />
        </svg>

        {/* Ambient Golden Glow Orbs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[200px] bg-gold-primary/15 blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-bright text-xs font-extrabold uppercase tracking-widest bg-navy-dark px-4 py-1.5 rounded-none border border-gold-primary/40 shadow-md">
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
                className="bg-navy-dark/95 p-8 rounded-none border border-gold-primary/30 hover:border-gold-primary transition-all duration-300 shadow-2xl group flex flex-col justify-between backdrop-blur-sm"
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
