import React, { useEffect, useRef } from 'react';
import { Pill, Plus, HeartPulse, Activity } from 'lucide-react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  baseRadius: number;
  color: string;
}

export const HeroAnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Mouse coordinates for interactive connection & gentle magnetic hover
    const mouse = { x: -1000, y: -1000, radius: 150 };

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Molecular particle nodes
    const particleCount = Math.min(Math.max(Math.floor((width * height) / 16000), 35), 65);
    const colors = [
      'rgba(16, 185, 129, ', // Mint / Emerald #10B981
      'rgba(22, 134, 91, ',  // Main Emerald #16865B
      'rgba(13, 148, 136, ', // Teal #0D9488
      'rgba(52, 211, 153, ', // Light Emerald #34D399
      'rgba(6, 182, 212, ',  // Cyan #06B6D4
    ];

    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      const r = Math.random() * 2.5 + 2;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius: r,
        baseRadius: r,
        alpha: Math.random() * 0.45 + 0.35,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let pulseTimer = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      pulseTimer += 0.03;

      // 1. Draw connection lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const lineAlpha = (1 - dist / 130) * 0.35;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(16, 185, 129, ${lineAlpha})`;
            ctx.lineWidth = 1.2;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }

        // 2. Connect to mouse cursor when close
        const p = particles[i];
        const mdx = p.x - mouse.x;
        const mdy = p.y - mouse.y;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);

        if (mDist < mouse.radius) {
          const mouseLineAlpha = (1 - mDist / mouse.radius) * 0.5;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(13, 148, 136, ${mouseLineAlpha})`;
          ctx.lineWidth = 1.5;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();

          // Smooth interactive avoidance
          if (mDist > 0) {
            const force = (mouse.radius - mDist) / mouse.radius;
            p.x += (mdx / mDist) * force * 1.8;
            p.y += (mdy / mDist) * force * 1.8;
          }
        }
      }

      // 3. Draw and update particle nodes
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        // Bounce gently off boundaries
        if (p.x < 0) { p.x = 0; p.vx *= -1; }
        if (p.x > width) { p.x = width; p.vx *= -1; }
        if (p.y < 0) { p.y = 0; p.vy *= -1; }
        if (p.y > height) { p.y = height; p.vy *= -1; }

        // Subtle pulsating node size
        const currentRadius = p.baseRadius + Math.sin(pulseTimer + i) * 0.6;

        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(currentRadius, 1), 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.fill();

        // Glowing outer aura on select nodes
        if (i % 4 === 0) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, currentRadius * 3, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${p.alpha * 0.2})`;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {/* 1. Subtle Bio-Tech Dot Grid Matrix */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `radial-gradient(#10B981 1.2px, transparent 1.2px)`,
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,0.85) 10%, rgba(0,0,0,0) 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,0.85) 10%, rgba(0,0,0,0) 80%)',
        }}
      />

      {/* 2. Vibrant Multi-Color Aurora Glow Mesh Blobs */}
      <div
        className="absolute -top-20 left-1/4 w-[540px] h-[540px] bg-gradient-to-tr from-emerald-300/45 via-teal-200/40 to-green-300/30 rounded-full blur-3xl animate-blob"
        style={{ animationDuration: '12s' }}
      />
      <div
        className="absolute top-1/4 -right-24 w-[480px] h-[480px] bg-gradient-to-bl from-teal-300/40 via-cyan-200/35 to-emerald-200/30 rounded-full blur-3xl animate-blob"
        style={{ animationDuration: '16s', animationDelay: '3s' }}
      />
      <div
        className="absolute -bottom-24 left-1/3 w-[580px] h-[580px] bg-gradient-to-r from-emerald-200/40 via-teal-100/45 to-green-200/35 rounded-full blur-3xl animate-blob"
        style={{ animationDuration: '20s', animationDelay: '6s' }}
      />

      {/* 3. HTML5 Canvas: Interactive Molecular Constellation Network */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />

      {/* 4. Floating Animated Pharmacy Badges & Icons */}
      {/* Badge 1: Top Left Floating Pharmacy Pill Card */}
      <div
        className="absolute top-28 left-[6%] hidden md:flex items-center gap-2.5 p-3 rounded-2xl bg-white/90 backdrop-blur-md border border-emerald-200 shadow-xl shadow-emerald-900/5 animate-float-slow"
        style={{ animationDuration: '6s' }}
      >
        <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center shadow-md shadow-emerald-600/20">
          <Pill className="w-5 h-5 -rotate-45" />
        </div>
        <div>
          <span className="block text-xs font-bold text-slate-800">Pharmacy Care</span>
          <span className="block text-[10px] text-emerald-700 font-semibold">Practical Dispensing</span>
        </div>
      </div>

      {/* Badge 2: Top Right Floating Medical Plus Card */}
      <div
        className="absolute top-24 right-[10%] hidden lg:flex items-center gap-2 px-3 py-2 rounded-xl bg-white/90 backdrop-blur-md border border-emerald-200 shadow-lg shadow-emerald-900/5 animate-float-reverse"
        style={{ animationDuration: '7s' }}
      >
        <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold">
          <Plus className="w-4 h-4" />
        </div>
        <span className="text-xs font-bold text-slate-800">D.Pharm (2020)</span>
      </div>

      {/* Badge 3: Bottom Left Floating Experience Badge */}
      <div
        className="absolute bottom-16 left-[10%] hidden md:flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/90 backdrop-blur-md border border-emerald-200 shadow-lg shadow-emerald-900/5 animate-float-slow"
        style={{ animationDuration: '8s', animationDelay: '1.5s' }}
      >
        <HeartPulse className="w-4 h-4 text-emerald-600 animate-pulse" />
        <span className="text-xs font-bold text-emerald-900">6+ Years Medical Experience</span>
      </div>

      {/* Badge 4: Bottom Right Floating Activity Pill */}
      <div
        className="absolute bottom-20 right-[12%] hidden lg:flex items-center gap-2 px-3 py-2 rounded-2xl bg-white/90 backdrop-blur-md border border-teal-200 shadow-lg shadow-emerald-900/5 animate-float-reverse"
        style={{ animationDuration: '9s', animationDelay: '2s' }}
      >
        <div className="w-7 h-7 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center">
          <Activity className="w-4 h-4" />
        </div>
        <span className="text-xs font-bold text-slate-800">Healthcare Active</span>
      </div>
    </div>
  );
};
