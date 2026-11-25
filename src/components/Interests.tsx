import React from 'react';
import {
  Compass,
  Microscope,
  HeartPulse,
  Store,
  BookOpen,
  TrendingUp,
  Check,
} from 'lucide-react';
import { professionalInterests } from '../data/profileData';

const interestIcons: Record<string, React.ReactNode> = {
  Microscope: <Microscope className="w-5 h-5 text-emerald-600" />,
  HeartPulse: <HeartPulse className="w-5 h-5 text-teal-600" />,
  Store: <Store className="w-5 h-5 text-emerald-700" />,
  BookOpen: <BookOpen className="w-5 h-5 text-green-700" />,
  TrendingUp: <TrendingUp className="w-5 h-5 text-emerald-800" />,
};

export const Interests: React.FC = () => {
  return (
    <section id="interests" className="py-20 sm:py-24 bg-slate-50/80 border-t border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            Professional Interests
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
            My Professional Interests & Horizons
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            Exploring pharmaceutical formulation, community healthcare guidance, and modern retail pharmacy operations.
          </p>
        </div>

        {/* 5 Interests Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {professionalInterests.map((interest) => (
            <div
              key={interest.id}
              className="pharma-card rounded-3xl p-6 sm:p-8 bg-white border border-slate-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-5">
                  {interestIcons[interest.iconName] || <Compass className="w-5 h-5 text-emerald-600" />}
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {interest.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                  {interest.description}
                </p>

                <div className="pt-4 border-t border-slate-100 space-y-2">
                  {interest.bulletPoints.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-600">
                      <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
