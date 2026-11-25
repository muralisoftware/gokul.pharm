import React, { useState, useEffect } from 'react';
import { Stethoscope, Activity, ShieldCheck, Pill } from 'lucide-react';

interface SplashScreenProps {
  onFinish?: () => void;
  minDurationMs?: number;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({
  onFinish,
  minDurationMs = 2400,
}) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [statusText, setStatusText] = useState('Initializing Clinical Portfolio...');

  useEffect(() => {
    const startTime = Date.now();
    const intervalTime = 30;

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const rawProgress = Math.min(Math.round((elapsed / minDurationMs) * 100), 100);
      setProgress(rawProgress);

      if (rawProgress < 28) {
        setStatusText('Initializing Clinical Portfolio...');
      } else if (rawProgress < 58) {
        setStatusText('Verifying D.Pharm (2020) Credentials...');
      } else if (rawProgress < 86) {
        setStatusText('Loading 6+ Years Medical Shop Experience at Guna Medicals...');
      } else {
        setStatusText('System Ready • Welcome to Gokul .A Portfolio');
      }

      if (rawProgress >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(() => {
            if (onFinish) onFinish();
          }, 650);
        }, 200);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [minDurationMs, onFinish]);

  const handleSkip = () => {
    setProgress(100);
    setIsExiting(true);
    setTimeout(() => {
      if (onFinish) onFinish();
    }, 400);
  };

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-br from-slate-950 via-[#041d15] to-emerald-950 text-white select-none overflow-hidden transition-all duration-700 ease-out ${
        isExiting ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* 1. Ambient Background Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[420px] h-[420px] bg-emerald-500/20 rounded-full blur-[110px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[420px] h-[420px] bg-teal-400/15 rounded-full blur-[110px] pointer-events-none animate-pulse-slow" style={{ animationDelay: '1.5s' }} />

      {/* 2. Micro Bio-Tech Dot Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.25] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#10B981 1.2px, transparent 1.2px)`,
          backgroundSize: '24px 24px',
        }}
      />

      {/* 3. Subtle Skip Button (Top Right) */}
      <button
        onClick={handleSkip}
        className="absolute top-6 right-6 px-3.5 py-1.5 rounded-full text-xs font-semibold text-emerald-300 hover:text-white bg-white/5 hover:bg-emerald-900/40 border border-emerald-500/30 backdrop-blur-md transition-all cursor-pointer z-20 flex items-center gap-1.5"
      >
        <span>Skip</span>
        <span className="text-[10px] opacity-70">→</span>
      </button>

      {/* 4. Central Emblem Stage with Concentric Pulse Rings */}
      <div className="relative flex flex-col items-center justify-center z-10 px-6 max-w-md w-full text-center">
        {/* Radar Concentric Rings */}
        <div className="relative mb-8 flex items-center justify-center">
          <div className="absolute w-36 h-36 rounded-full border border-emerald-400/20 animate-ping-slow pointer-events-none" />
          <div className="absolute w-28 h-28 rounded-full border border-teal-300/30 animate-pulse pointer-events-none" />

          {/* Orbiting Satellite Pill */}
          <div
            className="absolute w-32 h-32 rounded-full border border-dashed border-emerald-500/20 pointer-events-none animate-spin"
            style={{ animationDuration: '8s' }}
          >
            <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-5 h-5 rounded-md bg-emerald-600 text-white flex items-center justify-center shadow-lg shadow-emerald-500/40">
              <Pill className="w-3 h-3 -rotate-45" />
            </div>
          </div>

          {/* Central Logo Box with Medical Stethoscope */}
          <div className="relative w-20 h-20 rounded-3xl bg-gradient-to-tr from-emerald-600 via-emerald-500 to-teal-400 p-0.5 shadow-2xl shadow-emerald-500/30">
            <div className="w-full h-full rounded-[22px] bg-slate-950/85 backdrop-blur-xl flex items-center justify-center text-emerald-400">
              <Stethoscope className="w-10 h-10 animate-pulse" />
            </div>
          </div>
        </div>

        {/* 5. ECG Monitor Animated Pulse Trace */}
        <div className="w-64 h-10 mb-4 relative flex items-center justify-center">
          <svg
            className="w-full h-full overflow-visible"
            viewBox="0 0 260 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background Faint Track */}
            <path
              d="M 0 20 L 60 20 L 75 20 L 85 8 L 95 32 L 105 2 L 115 36 L 125 20 L 135 23 L 145 20 L 260 20"
              stroke="rgba(16, 185, 129, 0.18)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* Active Drawing Glow Path */}
            <path
              d="M 0 20 L 60 20 L 75 20 L 85 8 L 95 32 L 105 2 L 115 36 L 125 20 L 135 23 L 145 20 L 260 20"
              stroke="#10B981"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="260"
              strokeDashoffset={260 - (progress / 100) * 260}
              className="filter drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]"
            />
          </svg>

          {/* Leading Glow Spark on ECG Track */}
          <div
            className="absolute w-2 h-2 rounded-full bg-emerald-300 shadow-[0_0_12px_#34D399] transition-all duration-75"
            style={{
              left: `${Math.min(progress, 96)}%`,
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        </div>

        {/* 6. Identity Title */}
        <div className="space-y-1 mb-6">
          <h1 className="text-3xl sm:text-4xl font-heading font-black tracking-wider text-white">
            GOKUL <span className="text-emerald-400">.A</span>
          </h1>
          <p className="text-xs sm:text-sm font-semibold tracking-widest text-emerald-200/80 uppercase">
            D.Pharm Professional • Medical Retail Specialist
          </p>
        </div>

        {/* 7. High-Tech Fluid Progress Bar */}
        <div className="w-full space-y-2.5">
          <div className="w-full h-2 rounded-full bg-slate-800/90 border border-emerald-500/20 p-0.5 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-300 shadow-[0_0_14px_rgba(16,185,129,0.7)] transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Telemetry Status & Progress Counter */}
          <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
            <span className="flex items-center gap-1.5 text-emerald-300/90 truncate mr-2">
              <Activity className="w-3 h-3 animate-pulse text-emerald-400" />
              {statusText}
            </span>
            <span className="font-bold text-white tracking-wider">
              {progress}%
            </span>
          </div>
        </div>

        {/* 8. Verified Badge at Base */}
        <div className="mt-8 flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/20 text-[10px] text-emerald-300">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>Completed D.Pharm (2020) • 6+ Years Active Practice</span>
        </div>
      </div>
    </div>
  );
};
