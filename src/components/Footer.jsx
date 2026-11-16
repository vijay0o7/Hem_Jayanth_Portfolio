import React from 'react';
import { ArrowUp, Download, ShieldCheck, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Footer({ onDownloadPdf }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDownload = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#d4af37', '#ffffff']
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
    <footer className="bg-[#08080a] border-t border-white/10 text-zinc-400 py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10 items-start">
          
          {/* Brand & Tagline (5 Cols) */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-full border border-gold-500/60 flex items-center justify-center font-serif text-gold-400 font-bold text-xs tracking-widest bg-gold-500/10">
                HJ
              </span>
              <span className="font-serif text-lg font-bold text-white tracking-wider">
                HEM JAYANTH R.
              </span>
            </div>
            <p className="text-xs text-zinc-400 italic font-serif max-w-sm">
              "An individual driven by creativity, discipline and continuous growth."
            </p>
            <p className="text-xs text-zinc-400 font-light leading-relaxed max-w-sm">
              Verified personal portfolio compiling runway fashion engagements, state and national martial arts championships, target sports, yoga, and academic excellence.
            </p>
          </div>

          {/* Quick Navigation (4 Cols) */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4 text-xs">
            <div>
              <span className="font-mono uppercase tracking-widest text-gold-400 block mb-2 font-semibold">
                Portfolio Sections
              </span>
              <ul className="space-y-2">
                <li><a href="#about" className="hover:text-gold-300 transition-colors">About Me</a></li>
                <li><a href="#achievements" className="hover:text-gold-300 transition-colors">Achievements</a></li>
                <li><a href="#fashion" className="hover:text-gold-300 transition-colors">Fashion & Runway</a></li>
                <li><a href="#sports" className="hover:text-gold-300 transition-colors">Sports & Martial Arts</a></li>
              </ul>
            </div>
            <div>
              <span className="font-mono uppercase tracking-widest text-gold-400 block mb-2 font-semibold">
                More Disciplines
              </span>
              <ul className="space-y-2">
                <li><a href="#yoga" className="hover:text-gold-300 transition-colors">Yoga & Balance</a></li>
                <li><a href="#education" className="hover:text-gold-300 transition-colors">Education & Activities</a></li>
                <li><a href="#gallery" className="hover:text-gold-300 transition-colors">Asset Gallery</a></li>
                <li><a href="#contact" className="hover:text-gold-300 transition-colors">Contact Dossier</a></li>
              </ul>
            </div>
          </div>

          {/* Download Callout & Action (3 Cols) */}
          <div className="md:col-span-3 space-y-3">
            <span className="font-mono uppercase tracking-widest text-gold-400 block text-xs font-semibold">
              Official Profile Document
            </span>
            <p className="text-xs text-zinc-400 font-light leading-relaxed">
              Formatted A4 dossier compiled for admissions committees, academies, and modeling agencies.
            </p>
            <button
              onClick={handleDownload}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-[#e5d1ad] to-[#d4af37] hover:from-white hover:to-gold-300 rounded-full shadow-md transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 gap-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400/80" />
            <span>Strictly Verified Documentation • All Original Assets Preserved</span>
          </div>

          <div className="flex items-center gap-6">
            <span>© 2026 Hem Jayanth R. All rights reserved.</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/5 hover:bg-gold-500 hover:text-black text-zinc-400 transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
