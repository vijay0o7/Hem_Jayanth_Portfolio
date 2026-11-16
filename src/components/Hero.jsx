import React from 'react';
import { Download, ArrowRight, Award, Compass, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

export default function Hero({ data, onDownloadPdf }) {
  const handleDownload = () => {
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.3 },
      colors: ['#d4af37', '#ffffff', '#c58e47']
    });
    if (onDownloadPdf) {
      onDownloadPdf();
    } else {
      const link = document.createElement('a');
      link.href = '/Hem_Jayanth_R_Portfolio.pdf';
      link.download = 'Hem_Jayanth_R_Portfolio.pdf';
      link.click();
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Editorial Ambient Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gold-600/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-zinc-800/20 blur-[100px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Call to Actions (7 Cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-gold-500/30 text-gold-400 text-xs tracking-widest uppercase font-medium">
              <Sparkles className="w-3.5 h-3.5 text-gold-400 animate-pulse" />
              <span>Official Professional Portfolio • Verified Dossier</span>
            </div>

            {/* Main Headline */}
            <div>
              <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-zinc-400 mb-2">
                Student • Athlete • Runway Model • Martial Artist
              </p>
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-serif font-bold tracking-tight text-white leading-none">
                Hem Jayanth <span className="text-gold-gradient">R.</span>
              </h1>
            </div>

            {/* Master Introduction Statement as requested */}
            <blockquote className="border-l-2 border-gold-500/70 pl-4 py-1 italic font-serif text-lg sm:text-2xl text-zinc-200">
              "{data.personal.tagline}"
            </blockquote>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-2xl font-light">
              {data.personal.subtagline} Combining stage presence from national fashion runways with rigorous discipline in Chinese Shaolin Kung Fu, precision sports, yoga, and academic excellence at Sishya School.
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2">
              {data.stats.map((stat, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-white/[0.03] border border-white/5 backdrop-blur-sm">
                  <div className="text-xl sm:text-2xl font-serif font-bold text-gold-400">
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-zinc-400 leading-snug mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons: 4 Core Requirements */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={handleDownload}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-[#e5d1ad] via-[#d4af37] to-[#b38f2e] hover:from-white hover:to-gold-300 rounded-full shadow-lg shadow-gold-900/30 hover:shadow-gold-500/30 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                <span>Download Portfolio PDF</span>
              </button>

              <a
                href="#achievements"
                className="inline-flex items-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-zinc-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-gold-500/50 rounded-full transition-all duration-300"
              >
                <Award className="w-4 h-4 text-gold-400" />
                <span>View Achievements</span>
              </a>

              <a
                href="#about"
                className="inline-flex items-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-zinc-400 hover:text-zinc-200 transition-colors"
              >
                <Compass className="w-4 h-4 text-zinc-400" />
                <span>Explore Journey</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Verification Assurance Tag */}
            <div className="flex items-center gap-2 text-xs text-zinc-500 pt-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500/80" />
              <span>Strictly authentic documentation • No stock photos or simulated credentials</span>
            </div>

          </motion.div>

          {/* Right Column: Hero Visual Frame (5 Cols) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Outer Decorative Frame */}
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              
              {/* Gold Corner Accents */}
              <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-gold-500/80 pointer-events-none z-10" />
              <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-gold-500/80 pointer-events-none z-10" />

              {/* Main Photo Card */}
              <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-[#141418] shadow-2xl group">
                <img
                  src="/assets/profile/profile-hero.jpg"
                  alt="Hem Jayanth R. - Athletic concentration in precision sports"
                  className="w-full h-[460px] sm:h-[520px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Gradient Overlay for bottom caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

                {/* Floating Caption inside frame */}
                <div className="absolute bottom-0 left-0 right-0 p-5 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-gold-400 font-semibold">
                      Featured Profile
                    </span>
                    <span className="text-[10px] text-zinc-400 bg-white/10 px-2 py-0.5 rounded">
                      Precision & Poise
                    </span>
                  </div>
                  <p className="text-white font-serif text-lg font-bold">
                    Hem Jayanth R.
                  </p>
                  <p className="text-xs text-zinc-300">
                    High-focus precision athlete and runway talent representing Sishya School.
                  </p>
                </div>
              </div>

              {/* Secondary Floating Feature Card */}
              <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 p-3.5 rounded-xl bg-[#1a1a20]/95 border border-gold-500/30 backdrop-blur-md shadow-xl max-w-xs">
                <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 border border-white/20">
                  <img
                    src="/assets/fashion/jfw-runway-hugo-boss.jpg"
                    alt="Fashion runway showcase"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">Junior's Fashion Week</p>
                  <p className="text-[11px] text-gold-400">Runway Model (Hugo Boss)</p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
