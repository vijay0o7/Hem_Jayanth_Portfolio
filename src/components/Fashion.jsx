import React from 'react';
import { Sparkles, Calendar, MapPin, Award, ExternalLink, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Fashion({ data, onOpenLightbox }) {
  const runwayPhotos = data.fashionItems.filter(item => item.type === "Runway Photograph");
  const eventCerts = data.fashionItems.filter(item => item.type === "Official Certificate");

  return (
    <section id="fashion" className="py-24 bg-[#0c0c0f] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold-400 font-semibold block mb-2">
              Editorial & Commercial
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">
              Fashion & Runway Portfolio
            </h2>
          </div>
          <p className="text-zinc-400 text-sm max-w-md font-light">
            Professional youth runway experience showcasing luxury and contemporary designer collections on major fashion week stages.
          </p>
        </div>

        {/* Agency Model Spec Card */}
        <div className="mb-14 p-6 sm:p-8 rounded-2xl bg-[#141418] border border-gold-500/20 backdrop-blur-sm grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-gold-400 block mb-1">
              Runway Experience
            </span>
            <p className="text-lg font-serif font-bold text-white">Junior's Fashion Week</p>
            <p className="text-xs text-zinc-400">Autumn / Winter Showcases</p>
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-gold-400 block mb-1">
              Brands Showcased
            </span>
            <p className="text-sm font-medium text-white">Hugo Boss, Flying Machine</p>
            <p className="text-xs text-zinc-400">DKNY, U.S. Polo Assn. Kids</p>
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-gold-400 block mb-1">
              Core Attributes
            </span>
            <p className="text-sm font-medium text-white">Poise, Pacing, Stage Charisma</p>
            <p className="text-xs text-zinc-400">Calm under live stage spotlights</p>
          </div>
          <div className="md:text-right">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Agency Representation Open</span>
            </span>
          </div>
        </div>

        {/* Large Runway Photographs Grid (Editorial Agency Style) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {runwayPhotos.map((item, index) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              onClick={() => onOpenLightbox && onOpenLightbox(item)}
              className="group cursor-pointer rounded-2xl bg-[#131317] border border-white/5 hover:border-gold-500/50 overflow-hidden shadow-xl flex flex-col justify-between"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-black/40">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                
                <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider bg-black/70 backdrop-blur-md text-gold-300 border border-gold-500/30 rounded-full">
                  {item.brand}
                </span>
              </div>

              <div className="p-5">
                <h3 className="text-base font-serif font-bold text-white group-hover:text-gold-300 transition-colors mb-1.5">
                  {item.title}
                </h3>
                <div className="flex items-center gap-3 text-xs text-zinc-400 mb-2">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-gold-400" />
                    <span>{item.date}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-gold-400" />
                    <span>{item.location}</span>
                  </span>
                </div>
                <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                  {item.caption}
                </p>
                <div className="pt-3 mt-3 border-t border-white/5 flex items-center justify-between text-xs text-gold-400 font-medium">
                  <span>View High-Res Photo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fashion Event Participation & Verified Certificates */}
        <div className="bg-[#121216] border border-white/10 rounded-2xl p-6 sm:p-10">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-gold-400 font-semibold block mb-1">
              Documented Credentials
            </span>
            <h3 className="text-2xl font-serif font-bold text-white">
              Verified Fashion Showcase Participations
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2">
              Official certificates awarded for excellence in junior fashion showcases and runway choreography.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {eventCerts.map(cert => (
              <div
                key={cert.id}
                onClick={() => onOpenLightbox && onOpenLightbox(cert)}
                className="group cursor-pointer flex flex-col sm:flex-row gap-5 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-gold-500/30 hover:bg-white/[0.04] transition-all"
              >
                <div className="w-full sm:w-44 aspect-[4/3] rounded-lg overflow-hidden border border-white/10 flex-shrink-0 bg-black/60">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-gold-400 font-semibold block mb-1">
                      {cert.date}
                    </span>
                    <h4 className="text-base font-serif font-bold text-white group-hover:text-gold-300 transition-colors mb-1">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {cert.caption}
                    </p>
                  </div>
                  <div className="pt-3 flex items-center justify-between text-xs text-gold-400 font-medium">
                    <span>Inspect Certificate</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
