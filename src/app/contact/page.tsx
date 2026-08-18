'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { COMPANY_INFO } from '@/lib/data';
import { Phone, MapPin, Mail, Send, CheckCircle2, Clock } from 'lucide-react';

export default function ContactPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    company: '',
    service: 'Painting Services',
    location: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-bg-light text-text-dark flex flex-col">
      <Navbar onOpenQuoteModal={() => setQuoteModalOpen(true)} />

      <main className="flex-1 pt-28">
        {/* Page Hero */}
        <section className="bg-navy-dark text-white py-16 border-b border-gold-primary/30 relative overflow-hidden">
          <div className="absolute inset-0 pattern-grid-subtle opacity-30 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
            <span className="text-gold-bright text-xs font-bold uppercase tracking-widest bg-navy-primary px-3.5 py-1 border border-gold-primary/30 rounded-none">
              Direct Contact & Estimations
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-white mt-3">
              Let's Build Something Great Together
            </h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-3xl mt-3 leading-relaxed">
              Reach out to our engineering and project management team for fast site assessments, line-item BOQ estimates, or general project inquiries across India.
            </p>
          </div>
        </section>

        {/* Contact Content Grid */}
        <section className="py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Left Contact Information */}
              <div className="lg:col-span-5 space-y-8">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-navy-primary">
                    Roshan Enterprises Headquarters
                  </h2>
                  <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                    We maintain mobile site engineering teams serving client projects across PAN India.
                  </p>
                </div>

                {/* Contact Cards - Sharp */}
                <div className="space-y-4">
                  <div className="p-6 bg-slate-50 border border-slate-200 flex items-start gap-4 rounded-none">
                    <div className="p-3 bg-navy-primary text-gold-bright shrink-0 rounded-none border border-gold-primary/30">
                      <Phone className="w-6 h-6 text-gold-primary" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-navy-primary text-sm uppercase">Phone / Hotline</h4>
                      <a href={`tel:${COMPANY_INFO.phone}`} className="text-lg font-black text-navy-primary hover:text-gold-primary transition-colors block mt-0.5">
                        {COMPANY_INFO.phone}
                      </a>
                      <span className="text-xs text-slate-500 font-medium">Available Mon - Sat (8:00 AM - 8:00 PM)</span>
                    </div>
                  </div>

                  <div className="p-6 bg-slate-50 border border-slate-200 flex items-start gap-4 rounded-none">
                    <div className="p-3 bg-navy-primary text-gold-bright shrink-0 rounded-none border border-gold-primary/30">
                      <MapPin className="w-6 h-6 text-gold-primary" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-navy-primary text-sm uppercase">Base Location</h4>
                      <p className="text-sm font-bold text-navy-primary mt-0.5">
                        Greater Noida, Uttar Pradesh, India
                      </p>
                      <span className="text-xs text-gold-primary font-bold block mt-1">★ Serving PAN India Execution Sites</span>
                    </div>
                  </div>

                  <div className="p-6 bg-slate-50 border border-slate-200 flex items-start gap-4 rounded-none">
                    <div className="p-3 bg-navy-primary text-gold-bright shrink-0 rounded-none border border-gold-primary/30">
                      <Mail className="w-6 h-6 text-gold-primary" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-navy-primary text-sm uppercase">Email Contact</h4>
                      <a href={`mailto:${COMPANY_INFO.email}`} className="text-sm font-bold text-navy-primary hover:text-gold-primary transition-colors block mt-0.5">
                        {COMPANY_INFO.email}
                      </a>
                      <span className="text-xs text-slate-500 font-medium">For official tenders & technical BOQs</span>
                    </div>
                  </div>
                </div>

                {/* Assurance Box */}
                <div className="p-6 bg-navy-primary text-white border border-gold-primary/30 space-y-3 rounded-none">
                  <div className="flex items-center gap-2 text-gold-bright font-bold text-sm">
                    <Clock className="w-4 h-4 text-gold-primary" /> Fast Response Standard
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    All submitted quote forms are routed directly to our senior site engineers. You will receive an initial project callback within <strong>2 to 4 hours</strong>.
                  </p>
                </div>
              </div>

              {/* Right Form Column - Sharp inputs */}
              <div className="lg:col-span-7 bg-slate-50 p-8 sm:p-12 border border-slate-200 shadow-xl rounded-none">
                <h3 className="text-2xl font-black text-navy-primary mb-2">
                  Request a Free Project Quote
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm mb-6">
                  Fill out the project parameters below and our technical estimation team will formulate your line-item quote.
                </p>

                {isSubmitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-500 rounded-none">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h4 className="text-2xl font-black text-navy-primary">Inquiry Submitted Successfully</h4>
                    <p className="text-slate-600 max-w-md mx-auto text-sm">
                      Thank you for contacting Roshan Enterprises. Our technical lead will call you shortly on <strong className="text-navy-primary">{formData.phone}</strong>.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2.5 bg-navy-primary text-gold-bright font-bold text-xs hover:bg-navy-dark transition-colors rounded-none uppercase tracking-wider"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-navy-primary uppercase mb-1">
                          Your Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Rajesh Sharma"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full px-4 py-3 border border-slate-300 focus:border-gold-primary focus:ring-1 focus:ring-gold-primary outline-none text-sm text-navy-primary bg-white rounded-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-navy-primary uppercase mb-1">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 border border-slate-300 focus:border-gold-primary focus:ring-1 focus:ring-gold-primary outline-none text-sm text-navy-primary bg-white rounded-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-navy-primary uppercase mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          placeholder="name@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 border border-slate-300 focus:border-gold-primary focus:ring-1 focus:ring-gold-primary outline-none text-sm text-navy-primary bg-white rounded-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-navy-primary uppercase mb-1">
                          Company / Organization
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Techno Solution Plast Ltd."
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-4 py-3 border border-slate-300 focus:border-gold-primary focus:ring-1 focus:ring-gold-primary outline-none text-sm text-navy-primary bg-white rounded-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-navy-primary uppercase mb-1">
                          Primary Service <span className="text-red-500">*</span>
                        </label>
                        <select
                          required
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3 border border-slate-300 focus:border-gold-primary focus:ring-1 focus:ring-gold-primary outline-none text-sm text-navy-primary bg-white rounded-none"
                        >
                          <option value="Painting Services">Painting Services (Interior/Exterior/Texture)</option>
                          <option value="Flooring Solutions">Flooring Solutions (VDF/Epoxy/PCC/Tiles)</option>
                          <option value="Civil Works">Civil Works (RCC/Brickwork/Plaster)</option>
                          <option value="Turnkey Maintenance">Turnkey Multi-Service Contracting</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-navy-primary uppercase mb-1">
                          Project Location <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Greater Noida, Delhi NCR, Neemrana"
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          className="w-full px-4 py-3 border border-slate-300 focus:border-gold-primary focus:ring-1 focus:ring-gold-primary outline-none text-sm text-navy-primary bg-white rounded-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-navy-primary uppercase mb-1">
                        Project Scope & Message
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Mention square footage, site status, structural drawings available, or target completion deadline..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 focus:border-gold-primary focus:ring-1 focus:ring-gold-primary outline-none text-sm text-navy-primary bg-white resize-none rounded-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-gold-primary text-navy-dark font-black text-sm hover:bg-gold-bright transition-all shadow-lg hover:shadow-gold-primary/30 uppercase tracking-wider flex items-center justify-center gap-2 rounded-none"
                    >
                      {isSubmitting ? (
                        <span>Submitting Details...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" /> Request Free Project Quote
                        </>
                      )}
                    </button>
                  </form>
                )}

              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer onOpenQuoteModal={() => setQuoteModalOpen(true)} />
    </div>
  );
}
