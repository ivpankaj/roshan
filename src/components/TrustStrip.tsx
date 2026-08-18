import React from 'react';
import { ShieldCheck, Users, Clock, FileCheck, MapPin, ThumbsUp } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const trustItems = [
    {
      title: "Quality Assured",
      desc: "Premium grade paints & tested concrete mix ratios",
      icon: ShieldCheck
    },
    {
      title: "Experienced Team",
      desc: "Skilled civil engineers & certified technicians",
      icon: Users
    },
    {
      title: "On-Time Delivery",
      desc: "Planned milestone schedules & daily tracking",
      icon: Clock
    },
    {
      title: "Honest & Transparent",
      desc: "Detailed line-item quotes with zero hidden fees",
      icon: FileCheck
    },
    {
      title: "PAN India Service",
      desc: "Mobile site engineering teams across India",
      icon: MapPin
    },
    {
      title: "Customer Satisfaction",
      desc: "Post-execution support & performance warranty",
      icon: ThumbsUp
    }
  ];

  return (
    <section className="bg-navy-primary py-10 border-y border-gold-primary/30 relative z-20 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group bg-navy-dark/70 hover:bg-navy-dark p-4 rounded-none border border-white/10 hover:border-gold-primary transition-all duration-300 flex flex-col items-center text-center space-y-2"
              >
                <div className="p-2.5 bg-navy-primary text-gold-bright rounded-none group-hover:scale-110 transition-transform border border-gold-primary/30">
                  <Icon className="w-6 h-6 text-gold-primary" />
                </div>
                <h4 className="font-extrabold text-white text-sm sm:text-base leading-tight">
                  {item.title}
                </h4>
                <p className="text-slate-400 text-xs leading-snug">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
