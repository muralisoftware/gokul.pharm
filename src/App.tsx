import { useState } from 'react';
import { SplashScreen } from './components/SplashScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Interests } from './components/Interests';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { initialProfileData } from './data/profileData';
import type { PersonalInfo } from './types/portfolio';

export function App() {
  const [profile] = useState<PersonalInfo>(initialProfileData);
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col antialiased selection:bg-emerald-100 selection:text-emerald-900">
      {/* High-Tech Clinical & Pharmaceutical Splash Screen */}
      {showSplash && (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      )}

      {/* Top Navbar */}
      <Navbar profile={profile} />

      {/* Main Page Content */}
      <main className="flex-1">
        {/* Page 1 - Home */}
        <Hero profile={profile} />

        {/* Page 2 - About Me */}
        <About profile={profile} />

        {/* Page 3 - Education */}
        <Education profile={profile} />

        {/* Page 4 - Professional Experience */}
        <Experience profile={profile} />

        {/* Page 5 - Skills & Expertise */}
        <Skills />

        {/* Page 6 - Professional Interests */}
        <Interests />

        {/* Page 7 - Contact */}
        <Contact profile={profile} />
      </main>

      {/* Footer */}
      <Footer profile={profile} />
    </div>
  );
}

export default App;
