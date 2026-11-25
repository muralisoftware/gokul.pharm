import React from 'react';
import { Stethoscope, Mail, Phone, MapPin } from 'lucide-react';
import type { PersonalInfo } from '../types/portfolio';

interface FooterProps {
  profile: PersonalInfo;
}

export const Footer: React.FC<FooterProps> = ({ profile }) => {
  return (
    <footer className="bg-slate-900 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
          {/* Col 1: Identity & Brand */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5 text-white">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white">
                <Stethoscope className="w-4 h-4" />
              </div>
              <span className="font-heading font-extrabold text-base text-white">
                {profile.name}
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-950 text-emerald-400 border border-emerald-800">
                D.Pharm (2020) • Currently Working
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Gokul — D.Pharm professional (completed 2020 at Vinayaka Missions Research Foundation) with six years of hands-on practical retail pharmacy experience at Guna Medicals in Tamil Nadu, India.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-2.5">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Portfolio Navigation
            </h4>
            <ul className="space-y-1.5">
              <li>
                <a href="#home" className="hover:text-emerald-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-emerald-400 transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-emerald-400 transition-colors">
                  Education (D.Pharm)
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-emerald-400 transition-colors">
                  Medical Shop Experience
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-emerald-400 transition-colors">
                  Professional Skills
                </a>
              </li>
              <li>
                <a href="#interests" className="hover:text-emerald-400 transition-colors">
                  Professional Interests
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-emerald-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Coordinates */}
          <div className="md:col-span-4 space-y-2.5">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Contact & Location
            </h4>
            <div className="space-y-2 text-slate-300">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>{profile.location}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                <a href={`mailto:${profile.email}`} className="hover:text-white transition-colors">
                  {profile.email}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-teal-400" />
                <a href={`tel:${profile.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                  {profile.phone}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <p>
            © {new Date().getFullYear()} {profile.name}. All rights reserved. Knowledge in Pharmacy.
          </p>
        </div>
      </div>
    </footer>
  );
};
