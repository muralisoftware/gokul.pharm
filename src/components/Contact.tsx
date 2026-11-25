import React, { useState } from 'react';
import {
  MessageSquare,
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Copy,
  Check,
  ShieldCheck,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import type { PersonalInfo } from '../types/portfolio';

interface ContactProps {
  profile: PersonalInfo;
}

export const Contact: React.FC<ContactProps> = ({ profile }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(profile.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 65,
        spread: 75,
        origin: { y: 0.6 },
        colors: ['#16865B', '#10B981', '#E9F7EF'],
      });
    }, 600);
  };

  return (
    <section id="contact" className="py-20 sm:py-24 bg-white relative border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            Contact & Connect
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
            Let's Connect & Network
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            Open to connecting with pharmacy professionals, healthcare teams, and peers.
          </p>
        </div>

        {/* 2-Column Contact Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          {/* Left Column: Direct Coordinates */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl p-6 sm:p-8 bg-slate-50/80 border border-slate-200/90 shadow-xs space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Contact Information
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  For professional networking, career opportunities, or pharmacy-related discussions.
                </p>
              </div>

              {/* Coordinates List */}
              <div className="space-y-3.5">
                {/* Location */}
                <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/90">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Location
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-slate-800">
                      {profile.location}
                    </span>
                  </div>
                </div>

                {/* Email Box */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 border border-slate-200/90">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                        Professional Email
                      </span>
                      <a
                        href={`mailto:${profile.email}`}
                        className="text-xs sm:text-sm font-bold text-slate-800 hover:text-emerald-700 transition-colors"
                      >
                        {profile.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg text-slate-400 hover:text-emerald-700 hover:bg-white transition-colors"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Box */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 border border-slate-200/90">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                        Phone / Contact
                      </span>
                      <a
                        href={`tel:${profile.phone.replace(/\s+/g, '')}`}
                        className="text-xs sm:text-sm font-bold text-slate-800 hover:text-emerald-700 transition-colors"
                      >
                        {profile.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyPhone}
                    className="p-2 rounded-lg text-slate-400 hover:text-emerald-700 hover:bg-white transition-colors"
                    title="Copy Phone"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Direct WhatsApp CTA */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/${profile.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Gokul,%20I%20am%20reaching%20out%20via%20your%20pharmacy%20portfolio.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/20 flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Connect on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl p-6 sm:p-10 bg-slate-50/80 border border-slate-200/90 shadow-xs">
              {submitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Thank You for Connecting!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out, <span className="font-bold text-slate-800">{formData.name}</span>. I appreciate your interest and will get back to you promptly regarding{' '}
                    <span className="font-semibold text-emerald-700">{formData.subject}</span>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: 'Professional Pharmacy Networking', message: '' });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl text-xs font-bold bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      Send a Message
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Feel free to drop a message for networking or queries.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Kumar"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/10 text-xs sm:text-sm text-slate-800 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/10 text-xs sm:text-sm text-slate-800 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Subject / Topic *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter subject or topic..."
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/10 text-xs sm:text-sm text-slate-800 bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Your Message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Write your message, collaboration idea, or question..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/10 text-xs sm:text-sm text-slate-800 transition-all resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      Direct Personal Delivery
                    </span>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/20 transition-all hover:-translate-y-0.5 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
