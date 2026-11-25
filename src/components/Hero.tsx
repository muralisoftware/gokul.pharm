import React from 'react';
import {
  Pill,
  ArrowRight,
  HeartPulse,
  CheckCircle2,
  PhoneCall,
  ShieldCheck,
} from 'lucide-react';
import type { PersonalInfo } from '../types/portfolio';
import { HeroAnimatedBackground } from './HeroAnimatedBackground';

interface HeroProps {
  profile: PersonalInfo;
}

export const Hero: React.FC<HeroProps> = ({ profile }) => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-gradient-to-b from-emerald-50/50 via-white to-white">
      {/* Dynamic Animated Pharmacy & Molecular Background */}
      <HeroAnimatedBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Title & Introduction */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Candidate Name */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                {profile.name}
              </h1>
              <p className="text-base sm:text-lg text-emerald-800 font-semibold mt-1">
                {profile.professionalTitle}
              </p>
            </div>

            {/* Primary Tagline */}
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800 leading-snug">
              {profile.heroHeadline}
            </h2>

            {/* Intro paragraph */}
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {profile.introBio}
            </p>

            {/* Key Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#about"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/25 transition-all hover:-translate-y-0.5"
              >
                <span>Explore My Profile</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm transition-all hover:border-emerald-300"
              >
                <span>Contact Me</span>
              </a>

              <a
                href={`https://wa.me/${profile.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Gokul,%20I%20saw%20your%20pharmacy%20portfolio!`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-emerald-800 bg-emerald-100 hover:bg-emerald-200/80 border border-emerald-300 transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-emerald-700" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Academic & Ethical Compliance Badge */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                D.Pharm Completed (2020)
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Currently Working in Medical Retail
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                5+ Years Hands-on Experience
              </span>
            </div>
          </div>

          {/* Right Column: Visual Showcase & Highlight Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-pharma border border-slate-200">
              {/* Header Box */}
              <div className="flex items-start justify-between pb-6 border-b border-slate-100">
                <div className="flex items-center gap-3.5">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-700 via-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-md shadow-emerald-600/30">
                    <Pill className="w-8 h-8 -rotate-45" />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900">
                      {profile.name}
                    </h3>
                    <p className="text-xs text-emerald-700 font-bold uppercase tracking-wider">
                      {profile.education}
                    </p>
                    <p className="text-xs text-slate-500 font-medium">
                      {profile.location}
                    </p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-emerald-100 text-[11px] font-bold text-emerald-800">
                  5 Yrs Exp
                </span>
              </div>

              {/* 3 Core Strengths */}
              <div className="py-6 space-y-3.5">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Pill className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-800">
                      Medicine Knowledge & Branding
                    </h4>
                    <p className="text-[11px] text-slate-500">
                      Hands-on recognition of leading brands, generics, and dosage forms.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <HeartPulse className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-800">
                      Customer Service & Care
                    </h4>
                    <p className="text-[11px] text-slate-500">
                      Clear communication on prescription timings and supportive customer guidance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="w-8 h-8 rounded-lg bg-green-100 text-green-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-800">
                      Inventory & Expiry Control
                    </h4>
                    <p className="text-[11px] text-slate-500">
                      Systematic stock organization and first-expiry first-out (FEFO) protocols.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Quote Note */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">Tagline</span>
                <span className="font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  {profile.tagline}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
