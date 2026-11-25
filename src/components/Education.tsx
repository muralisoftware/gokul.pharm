import React from 'react';
import {
  GraduationCap,
  Building,
  MapPin,
  BookOpen,
  Calendar,
  Activity,
  Pill,
  FlaskConical,
  Leaf,
  SearchCheck,
  ShieldCheck,
} from 'lucide-react';
import type { PersonalInfo } from '../types/portfolio';
import { academicInterests } from '../data/profileData';

const iconMap: Record<string, React.ReactNode> = {
  Activity: <Activity className="w-5 h-5 text-emerald-600" />,
  Pill: <Pill className="w-5 h-5 text-teal-600" />,
  FlaskConical: <FlaskConical className="w-5 h-5 text-emerald-700" />,
  Leaf: <Leaf className="w-5 h-5 text-green-600" />,
  SearchCheck: <SearchCheck className="w-5 h-5 text-emerald-600" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-teal-700" />,
};

interface EducationProps {
  profile: PersonalInfo;
}

export const Education: React.FC<EducationProps> = ({ profile }) => {
  return (
    <section id="education" className="py-20 sm:py-24 bg-gradient-to-br from-slate-950 via-emerald-900 via-teal-800 to-emerald-500 text-white relative overflow-hidden border-t border-emerald-600/40">
      {/* Decorative ambient gradient orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-300/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-700/70 border border-emerald-400/40 text-xs font-bold text-emerald-100 uppercase tracking-wider mb-3 shadow-xs">
            <GraduationCap className="w-3.5 h-3.5 text-emerald-300" />
            Educational Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
            Academic Background & Pharmacy Qualifications
          </h2>
          <p className="mt-3 text-base sm:text-lg text-emerald-100/90 leading-relaxed">
            Completed formal D.Pharm education in 2020 at Vinayaka Missions Research Foundation, reinforcing 6+ years of active retail medical shop experience at Guna Medicals with solid scientific foundations.
          </p>
        </div>

        {/* Education Hero Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-white/20 mb-16 text-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-700 to-teal-600 text-white flex items-center justify-center shadow-lg shadow-emerald-700/25">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block">
                  Diploma Completed • 2020 Batch
                </span>
                <h3 className="text-2xl font-heading font-extrabold text-slate-900">
                  {profile.education}
                </h3>
              </div>
            </div>

            <span className="self-start sm:self-auto px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {profile.currentYear}
            </span>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6 border-b border-slate-100 text-xs sm:text-sm">
            <div>
              <span className="text-slate-400 font-medium block mb-1">Academic Institution</span>
              <p className="font-bold text-slate-800 flex items-center gap-1.5">
                <Building className="w-4 h-4 text-emerald-600" />
                {profile.collegeName}
              </p>
            </div>

            <div>
              <span className="text-slate-400 font-medium block mb-1">Affiliated University / Board</span>
              <p className="font-bold text-slate-800 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-emerald-600" />
                {profile.universityName}
              </p>
            </div>

            <div>
              <span className="text-slate-400 font-medium block mb-1">Location</span>
              <p className="font-bold text-slate-800 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-emerald-600" />
                {profile.location}
              </p>
            </div>
          </div>

          <p className="mt-6 text-xs sm:text-sm text-slate-600 leading-relaxed">
            I am committed to developing strong theoretical knowledge and practical understanding of pharmaceutical sciences through continuous learning, classroom lectures, and laboratory experiments.
          </p>
        </div>

        {/* 6 Areas of Academic Interest */}
        <div>
          <div className="text-center mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Areas of Academic Interest
            </h3>
            <p className="text-xs sm:text-sm text-emerald-200 mt-1">
              Core subjects studied and mastered in the D.Pharm curriculum (Completed 2020).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {academicInterests.map((interest) => (
              <div
                key={interest.id}
                className="rounded-2xl p-6 bg-white text-slate-800 shadow-xl border border-white/20 flex flex-col justify-between hover:-translate-y-1 hover:shadow-2xl transition-all"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-4">
                    {iconMap[interest.iconName] || <BookOpen className="w-5 h-5 text-emerald-600" />}
                  </div>

                  <h4 className="text-base font-bold text-slate-900 mb-2">
                    {interest.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {interest.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    Key Topics
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {interest.keyTopics.map((topic, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded text-[11px] font-medium bg-emerald-50 text-emerald-800 border border-emerald-100/60"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
