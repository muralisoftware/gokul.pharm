import React from 'react';
import {
  Briefcase,
  Store,
  Clock,
  CheckCircle2,
} from 'lucide-react';
import type { PersonalInfo } from '../types/portfolio';
import { experienceDetails } from '../data/profileData';

interface ExperienceProps {
  profile: PersonalInfo;
}

export const Experience: React.FC<ExperienceProps> = ({ profile }) => {
  return (
    <section id="experience" className="py-20 sm:py-24 bg-slate-50/80 relative border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            Medical Shop Experience
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
            Practical Medical Store Experience — 5 Years
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            Hands-on exposure to pharmaceutical retail operations, medicine classification, inventory management, and customer care.
          </p>
        </div>

        {/* Experience Showcase Banner Card */}
        <div className="max-w-5xl mx-auto bg-gradient-to-tr from-emerald-800 via-emerald-700 to-teal-800 rounded-3xl p-6 sm:p-10 text-white shadow-xl mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-emerald-600/60">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white text-emerald-700 flex items-center justify-center shadow-md">
                <Store className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-200 block">
                  Pharmaceutical Retail & Healthcare
                </span>
                <h3 className="text-2xl font-heading font-extrabold text-white">
                  {profile.medicalShopName}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-auto bg-emerald-900/60 border border-emerald-400/40 px-3.5 py-1.5 rounded-full text-xs font-bold text-emerald-200">
              <Clock className="w-3.5 h-3.5" />
              <span>5 Years (Practical Retail Experience)</span>
            </div>
          </div>

          <p className="mt-6 text-xs sm:text-sm text-emerald-50 leading-relaxed">
            {experienceDetails.overview}
          </p>
        </div>

        {/* 8 Key Responsibilities Grid */}
        <div className="max-w-5xl mx-auto mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 text-center sm:text-left flex items-center gap-2">
            <CheckCircle2 className="w-6 h-6 text-emerald-600" />
            Key Responsibilities & Experience Handled
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {experienceDetails.responsibilities.map((resp, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex items-start gap-3.5 hover:border-emerald-300 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                  0{idx + 1}
                </div>
                <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                  {resp}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Learning & Goals Box */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Key Learnings */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-emerald-200 shadow-2xs">
            <h4 className="text-base font-bold text-emerald-950 mb-4 flex items-center gap-2">
              Professional Learning Takeaways
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
              {experienceDetails.learningTakeaways.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Professional Goal */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-2">
                My Career Goal
              </span>
              <h4 className="text-lg font-heading font-bold text-white mb-3">
                Theory + Real-World Practice
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                "{experienceDetails.careerGoal}"
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>Retail Experience: 5 Years</span>
              <span className="text-emerald-400 font-bold">Dedicated Growth</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
