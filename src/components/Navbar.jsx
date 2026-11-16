import React, { useState, useEffect } from 'react';
import { Download, Menu, X, ArrowUpRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Navbar({ onDownloadPdf }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Achievements", href: "#achievements" },
    { name: "Fashion", href: "#fashion" },
    { name: "Sports & Martial Arts", href: "#sports" },
    { name: "Yoga", href: "#yoga" },
    { name: "Education", href: "#education" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" }
  ];

  const handleDownload = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.2 },
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
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0c0c0e]/90 backdrop-blur-md border-b border-white/10 shadow-lg py-3.5'
          : 'bg-gradient-to-b from-black/80 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Monogram Brand */}
        <a href="#home" className="group flex items-center gap-2.5">
          <span className="w-8 h-8 rounded-full border border-gold-500/60 flex items-center justify-center font-serif text-gold-400 font-bold text-xs tracking-widest bg-gold-500/10 group-hover:bg-gold-500 group-hover:text-black transition-all duration-300">
            HJ
          </span>
          <div>
            <span className="font-serif text-lg sm:text-xl font-bold tracking-wider text-white group-hover:text-gold-300 transition-colors">
              HEM JAYANTH R.
            </span>
            <span className="block text-[10px] uppercase tracking-widest text-zinc-400 font-sans">
              Personal Portfolio
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs uppercase tracking-widest text-zinc-300 font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-gold-400 transition-colors duration-200 py-1 border-b border-transparent hover:border-gold-500/50"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button: Download Portfolio */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={handleDownload}
            className="group relative inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-[#e5d1ad] via-[#d4af37] to-[#b38f2e] hover:from-white hover:to-gold-300 rounded-full shadow-md hover:shadow-gold-500/20 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <Download className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
            <span>Download PDF</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#111115] border-b border-white/10 px-4 pt-3 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm uppercase tracking-wider text-zinc-300 hover:text-gold-400 hover:bg-white/5 rounded-md transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleDownload();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-[#e5d1ad] to-[#d4af37] rounded-full shadow-md"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF Portfolio</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
