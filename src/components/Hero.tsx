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
                Currently Working at Guna Medicals
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                6+ Years Hands-on Experience
              </span>
            </div>
          </div>

          {/* Right Column: Professional Pharmacist Portrait Showcase */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm xl:max-w-md group">
              {/* Luxury Ambient Glow */}
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-tr from-emerald-500/30 via-teal-400/20 to-emerald-200/20 rounded-[2.5rem] blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Decorative Accent Glows */}
              <div className="absolute -top-3 -right-3 w-20 h-20 bg-emerald-100/60 rounded-full blur-xl pointer-events-none" />
              <div className="absolute -bottom-3 -left-3 w-24 h-24 bg-teal-100/60 rounded-full blur-xl pointer-events-none" />

              {/* Card Container with Elegant White & Emerald Frame */}
              <div className="relative bg-white/95 backdrop-blur-xs rounded-[2rem] p-2.5 sm:p-3 shadow-2xl shadow-emerald-950/15 border-2 border-white ring-1 ring-emerald-500/20">
                {/* Photo Frame */}
                <div className="relative rounded-[1.6rem] overflow-hidden aspect-[4/5] bg-slate-100 shadow-inner">
                  <img
                    src={profile.profileImage || '/images/gokul-pharmacist.jpg'}
                    alt={`${profile.name} - Professional Pharmacist`}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    loading="eager"
                  />

                  {/* Gentle gradient scrim at the base */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />

                  {/* Name & Title inside the photo overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white z-10 pointer-events-none">
                    <p className="text-lg sm:text-xl font-heading font-extrabold text-white drop-shadow-md">
                      {profile.name}
                    </p>
                    <p className="text-xs font-semibold text-emerald-200 drop-shadow-sm flex items-center gap-1.5 mt-0.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
                      <span>{profile.education}</span>
                    </p>
                  </div>
                </div>

                {/* Floating Badge 1: Top Right - Active Pharmacist Status */}
                <div className="absolute top-5 right-5 sm:top-6 sm:right-6 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-emerald-200 shadow-lg transition-transform group-hover:scale-105">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
                  </span>
                  <span className="text-[11px] font-bold text-emerald-950 tracking-tight">
                    Active Retail Pharmacist
                  </span>
                </div>

                {/* Floating Badge 2: Floating Experience Badge Bottom-Left */}
                <div className="absolute -bottom-4 -left-3 sm:-left-5 z-20 bg-white/95 backdrop-blur-md rounded-2xl px-3.5 py-2.5 shadow-xl border border-slate-200/90 flex items-center gap-2.5 transition-transform group-hover:-translate-y-1">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center shadow-md shadow-emerald-600/30">
                    <HeartPulse className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-extrabold text-slate-900 leading-tight">
                      6+ Years Experience
                    </p>
                    <p className="text-[10px] text-emerald-700 font-semibold leading-tight mt-0.5">
                      Guna Medicals (Since 2020)
                    </p>
                  </div>
                </div>

                {/* Floating Badge 3: Bottom-Right Health Care Tag */}
                <div className="absolute -bottom-3 -right-2 sm:-right-4 z-20 bg-gradient-to-r from-emerald-700 to-teal-700 text-white rounded-xl px-3 py-1.5 shadow-lg flex items-center gap-1.5 transition-transform group-hover:-translate-y-1">
                  <Pill className="w-3.5 h-3.5 text-emerald-200 -rotate-45" />
                  <span className="text-[11px] font-bold tracking-tight">
                    Healthcare & Care
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
