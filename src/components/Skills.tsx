import React from 'react';
import {
  Wrench,
  Pill,
  HeartHandshake,
  Boxes,
  GraduationCap,
  CheckCircle,
  Check,
} from 'lucide-react';
import { skillsCategories, additionalSkills } from '../data/profileData';

const categoryIcons: Record<string, React.ReactNode> = {
  Pill: <Pill className="w-5 h-5 text-emerald-600" />,
  HeartHandshake: <HeartHandshake className="w-5 h-5 text-teal-600" />,
  Boxes: <Boxes className="w-5 h-5 text-emerald-700" />,
  GraduationCap: <GraduationCap className="w-5 h-5 text-green-700" />,
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 sm:py-24 bg-white border-t border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-3">
            <Wrench className="w-3.5 h-3.5" />
            Skills & Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
            Professional Capabilities & Practical Skills
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            Cultivated over five years of active retail counter practice and rigorous D.Pharm coursework.
          </p>
        </div>

        {/* 4 Core Pillar Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillsCategories.map((cat) => (
            <div
              key={cat.id}
              className="pharma-card rounded-3xl p-6 sm:p-8 bg-slate-50/80 border border-slate-200/90 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3.5 pb-5 border-b border-slate-100 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                    {categoryIcons[cat.iconName] || <Pill className="w-5 h-5 text-emerald-600" />}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-slate-500">
                      {cat.description}
                    </p>
                  </div>
                </div>

                {/* Sub-skills list - Clean Card Presentation without Progress Bar / Percentages */}
                <div className="space-y-3">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3.5 rounded-2xl bg-slate-50/70 hover:bg-emerald-50/40 border border-slate-100 hover:border-emerald-200/80 transition-all group"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-lg bg-emerald-100 group-hover:bg-emerald-600 text-emerald-800 group-hover:text-white flex items-center justify-center flex-shrink-0 transition-colors mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between gap-2">
                            <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-emerald-950 transition-colors">
                              {skill.name}
                            </h4>
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-white border border-slate-200 text-emerald-800 shadow-2xs">
                              Core Competency
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                            {skill.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-slate-400">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>Validated through 5 years of daily pharmacy operations & D.Pharm studies</span>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Professional Soft Skills */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center justify-center gap-2">
              Additional Professional Skills
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Essential professional attributes for collaborative healthcare environments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {additionalSkills.map((skill, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex items-start gap-3 hover:border-emerald-300 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0 font-bold text-xs mt-0.5">
                  ✓
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-800 mb-0.5">
                    {skill.name}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {skill.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
