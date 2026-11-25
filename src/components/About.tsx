import React from 'react';
import {
  User,
  Target,
  ShieldCheck,
  CheckCircle,
  Heart,
  BookOpen,
  Award,
} from 'lucide-react';
import type { PersonalInfo } from '../types/portfolio';

const valueIcons: Record<string, React.ReactNode> = {
  Responsibility: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
  Accuracy: <CheckCircle className="w-5 h-5 text-teal-600" />,
  'Continuous Learning': <BookOpen className="w-5 h-5 text-green-600" />,
  'Professional Ethics': <Award className="w-5 h-5 text-emerald-700" />,
  'Customer Care': <Heart className="w-5 h-5 text-rose-600" />,
};

interface AboutProps {
  profile: PersonalInfo;
}

export const About: React.FC<AboutProps> = ({ profile }) => {
  return (
    <section id="about" className="py-20 sm:py-24 bg-slate-50/80 relative border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 border border-emerald-200 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-3">
            <User className="w-3.5 h-3.5" />
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
            Bridging Retail Pharmacy Practice with Academic Sciences
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            Combining formal D.Pharm coursework from Vinayaka Missions Research Foundation with six solid years of practical retail medical shop operations at Guna Medicals.
          </p>
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Simple, Clear Profile Overview */}
          <div className="lg:col-span-7 space-y-5 text-slate-600 text-sm sm:text-base leading-relaxed">
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Hello, I'm {profile.name}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                I am a dedicated pharmacy professional who <strong>completed my Diploma in Pharmacy (D.Pharm) in 2020 at Vinayaka Missions Research Foundation</strong>. I am <strong>currently working with 6+ years of practical retail experience at Guna Medicals</strong> in Tamil Nadu (joined in 2020).
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-3">
              <h4 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                Key Focus & Capabilities
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span><strong>Practical Retail Knowledge:</strong> Medicine identification, brand vs. generic matching, and stock organization.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span><strong>Store Operations:</strong> Expiry monitoring (FEFO), batch tracking, and inventory replenishment.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span><strong>Patient Support:</strong> Courteous communication on dosage schedules, timings, and usage instructions.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span><strong>Academic Foundation:</strong> Regular study in pharmacology, pharmaceutics, and pharmaceutical chemistry.</span>
                </li>
              </ul>
            </div>

            {/* Vision Banner */}
            <div className="p-5 rounded-2xl bg-slate-900 text-white shadow-md space-y-1.5">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
                <Target className="w-4 h-4" />
                <span>Professional Vision</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                "{profile.vision}"
              </p>
            </div>
          </div>

          {/* Right Column: Core Values & Professional Highlights */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs">
              <div>
                <h3 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                  My Core Values
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Guiding principles that define my work in the medical shop and academic studies.
                </p>
              </div>

              {/* 5 Core Values List */}
              <div className="space-y-3">
                {profile.coreValues.map((val, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-sm flex items-center gap-3.5 hover:border-emerald-300 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                      {valueIcons[val] || <CheckCircle className="w-5 h-5 text-emerald-600" />}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-800">
                        {val}
                      </h4>
                      <p className="text-xs text-slate-500">
                        {val === 'Responsibility' && 'Upholding patient safety and ethical dispensing practices.'}
                        {val === 'Accuracy' && 'Double-checking brand names, dosage strengths, and packaging.'}
                        {val === 'Continuous Learning' && 'Constantly upgrading pharmaceutical science & drug knowledge.'}
                        {val === 'Professional Ethics' && 'Commitment to transparency and doctor-pharmacist trust.'}
                        {val === 'Customer Care' && 'Compassionate guidance with clear dosage timing instructions.'}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Profile Meta Summary */}
              <div className="pt-4 border-t border-slate-200 space-y-2 text-xs text-slate-600">
                <div className="flex justify-between py-1 border-b border-slate-200/70">
                  <span className="font-medium text-slate-500">Education & Status:</span>
                  <span className="font-bold text-emerald-700">{profile.currentYear}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200/70">
                  <span className="font-medium text-slate-500">Retail Experience:</span>
                  <span className="font-bold text-slate-800">{profile.experienceYears}+ Years (Active)</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="font-medium text-slate-500">Native State:</span>
                  <span className="font-bold text-slate-800">{profile.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
