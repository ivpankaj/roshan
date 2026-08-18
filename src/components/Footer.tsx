import React from 'react';
import Link from 'next/link';
import { Phone, MapPin, Mail, Shield, CheckCircle, Clock, ThumbsUp, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';
import { COMPANY_INFO } from '@/lib/data';

interface FooterProps {
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuoteModal }) => {
  return (
    <footer className="bg-navy-dark text-white pt-16 pb-8 border-t-4 border-gold-primary relative overflow-hidden">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 pattern-grid-subtle opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1 & 2: Brand Identity & About */}
          <div className="lg:col-span-2 space-y-5">
            <Logo variant="light" showTagline={true} />
            <p className="text-slate-300 text-sm leading-relaxed max-w-md">
              Roshan Enterprises is a premier construction, industrial flooring, and painting contractor providing turnkey engineering solutions across PAN India with unyielding commitment to quality and execution timelines.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={onOpenQuoteModal}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gold-primary text-navy-dark font-extrabold text-xs rounded-none hover:bg-gold-bright transition-colors uppercase tracking-wider shadow-md"
              >
                Request a Free Quote <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-slate-700 text-slate-200 hover:text-gold-bright hover:border-gold-primary font-bold text-xs rounded-none transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-gold-primary" /> {COMPANY_INFO.phone}
              </a>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 className="text-gold-bright text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-gold-primary"></span> Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm font-medium text-slate-300">
              <li>
                <Link href="/" className="hover:text-gold-bright transition-colors flex items-center gap-1.5">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold-bright transition-colors flex items-center gap-1.5">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gold-bright transition-colors flex items-center gap-1.5">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-gold-bright transition-colors flex items-center gap-1.5">
                  Projects Portfolio
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-gold-bright transition-colors flex items-center gap-1.5">
                  Sectors Served
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold-bright transition-colors flex items-center gap-1.5">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Primary Services */}
          <div>
            <h4 className="text-gold-bright text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-gold-primary"></span> Core Services
            </h4>
            <ul className="space-y-2.5 text-sm font-medium text-slate-300">
              <li>
                <Link href="/services/painting" className="hover:text-gold-bright transition-colors">
                  Painting Services (Interior/Exterior)
                </Link>
              </li>
              <li>
                <Link href="/services/flooring" className="hover:text-gold-bright transition-colors">
                  VDF & Epoxy Flooring
                </Link>
              </li>
              <li>
                <Link href="/services/civil-works" className="hover:text-gold-bright transition-colors">
                  RCC Structural & Civil Works
                </Link>
              </li>
              <li>
                <Link href="/services/painting" className="hover:text-gold-bright transition-colors text-xs text-slate-400">
                  • Texture & Waterproof Paints
                </Link>
              </li>
              <li>
                <Link href="/services/flooring" className="hover:text-gold-bright transition-colors text-xs text-slate-400">
                  • Concrete Densification & Polishing
                </Link>
              </li>
              <li>
                <Link href="/services/civil-works" className="hover:text-gold-bright transition-colors text-xs text-slate-400">
                  • False Ceilings & Plastering
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Location & Contact Info */}
          <div>
            <h4 className="text-gold-bright text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-gold-primary"></span> Reach Us
            </h4>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-primary shrink-0 mt-1" />
                <span>
                  <strong>PAN India Contractor</strong>
                  <br />
                  <span className="text-xs text-slate-400">Uttar Pradesh, India</span>
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-primary shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-gold-bright font-bold">
                  {COMPANY_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-primary shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-gold-bright text-xs">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Brochure Value Bar */}
        <div className="py-6 border-b border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="flex items-center justify-center gap-2 text-slate-200 text-xs sm:text-sm font-semibold">
            <Shield className="w-4 h-4 text-gold-primary" />
            <span>Quality Materials</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-slate-200 text-xs sm:text-sm font-semibold">
            <CheckCircle className="w-4 h-4 text-gold-primary" />
            <span>Skilled Professionals</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-slate-200 text-xs sm:text-sm font-semibold">
            <Clock className="w-4 h-4 text-gold-primary" />
            <span>Timely Completion</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-slate-200 text-xs sm:text-sm font-semibold">
            <ThumbsUp className="w-4 h-4 text-gold-primary" />
            <span>Customer Satisfaction</span>
          </div>
        </div>

        {/* Bottom Legal Strip */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Roshan Enterprises. All Rights Reserved.</p>
          <div className="flex items-center space-x-6">
            <Link href="/privacy-policy" className="hover:text-gold-bright transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gold-bright transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
