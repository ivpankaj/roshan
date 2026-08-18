'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, MapPin, ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';
import { COMPANY_INFO } from '@/lib/data';

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    {
      name: 'Services',
      href: '/services',
      hasDropdown: true,
      subItems: [
        { name: 'All Services Overview', href: '/services' },
        { name: 'Painting Services', href: '/services/painting' },
        { name: 'Flooring Solutions', href: '/services/flooring' },
        { name: 'Civil Works', href: '/services/civil-works' },
      ]
    },
    { name: 'Projects', href: '/projects' },
    { name: 'Industries', href: '/industries' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300">
      {/* Top Notification Bar */}
      <div className="bg-navy-dark text-slate-200 border-b border-white/10 text-xs py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 text-gold-bright font-semibold">
              <MapPin className="w-3.5 h-3.5 text-gold-primary" />
              {COMPANY_INFO.serviceArea}
            </span>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden md:inline italic text-slate-300">
              "{COMPANY_INFO.tagline}"
            </span>
          </div>

          <div className="flex items-center gap-4 font-medium text-[11px] sm:text-xs">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center gap-1.5 text-white hover:text-gold-bright transition-colors font-bold tracking-wide"
            >
              <Phone className="w-3.5 h-3.5 text-gold-primary animate-pulse" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-navy-primary/95 backdrop-blur-md shadow-xl py-3 border-b border-gold-primary/30'
            : 'bg-navy-primary/80 backdrop-blur-sm py-4 border-b border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Logo */}
          <Logo variant="light" />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`px-3.5 py-2 text-sm font-semibold rounded-none flex items-center gap-1 transition-colors ${
                        isActive ? 'text-gold-bright bg-navy-dark/80 border-b-2 border-gold-primary' : 'text-slate-100 hover:text-gold-bright'
                      }`}
                    >
                      {link.name}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-gold-bright' : ''}`} />
                    </Link>

                    {/* Sharp Dropdown Menu */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 w-64 pt-2 animate-fade-in">
                        <div className="bg-navy-dark border border-gold-primary/40 shadow-2xl rounded-none p-2 space-y-1">
                          {link.subItems?.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className="block px-4 py-2.5 text-xs font-semibold text-slate-200 hover:text-navy-dark hover:bg-gold-primary rounded-none transition-colors"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-2 text-sm font-semibold rounded-none transition-colors ${
                    isActive
                      ? 'text-gold-bright bg-navy-dark/80 font-bold border-b-2 border-gold-primary'
                      : 'text-slate-100 hover:text-gold-bright'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Right Action Button - SHARP CORNER */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenQuoteModal}
              className="relative group px-6 py-2.5 bg-gold-primary text-navy-dark font-black text-sm rounded-none hover:bg-gold-bright transition-all shadow-md hover:shadow-gold-primary/40 flex items-center gap-2 overflow-hidden uppercase tracking-wider"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={onOpenQuoteModal}
              className="px-3.5 py-1.5 bg-gold-primary text-navy-dark font-bold text-xs rounded-none hover:bg-gold-bright uppercase tracking-wider"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-100 hover:text-gold-bright focus:outline-none"
              aria-label="Toggle mobile navigation"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-out Drawer - Sharp Borders */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-navy-dark border-b-2 border-gold-primary text-white px-6 py-6 space-y-4 shadow-2xl animate-fade-in">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                if (link.hasDropdown) {
                  return (
                    <div key={link.name} className="space-y-1">
                      <span className="block px-3 py-2 text-xs font-bold text-gold-bright uppercase tracking-wider border-l-2 border-gold-primary pl-2">
                        {link.name}
                      </span>
                      <div className="pl-4 space-y-1 border-l border-gold-primary/30">
                        {link.subItems?.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-3 py-2 text-sm font-medium text-slate-200 hover:text-gold-bright"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-3 py-2.5 text-base font-semibold rounded-none ${
                      isActive ? 'bg-navy-primary text-gold-bright font-bold border-l-4 border-gold-primary' : 'text-slate-100 hover:text-gold-bright'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div className="pt-4 border-t border-slate-700 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full py-3 bg-gold-primary text-navy-dark font-extrabold rounded-none text-center shadow-lg uppercase text-sm tracking-wider"
              >
                Get a Free Quote
              </button>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="block text-center py-2 text-xs font-bold text-slate-300 hover:text-white"
              >
                📞 Call Directly: {COMPANY_INFO.phone}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
