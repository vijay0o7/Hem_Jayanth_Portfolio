import React from 'react';
import { Heart, Activity, Smile, Sun, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Yoga({ data, onOpenLightbox }) {
  return (
    <section id="yoga" className="py-24 bg-[#0c0c0e] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold-400 font-semibold block mb-2">
              Flexibility & Inner Stillness
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">
              Yoga & Flexibility Disciplines
            </h2>
          </div>
          <p className="text-zinc-400 text-sm max-w-md font-light">
            Dedicated daily practice developing postural balance, thoracic extension, hamstring flexibility, and meditative composure.
          </p>
        </div>

        {/* Benefits Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-[#141418] border border-white/5">
            <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400 mb-3">
              <Sun className="w-5 h-5" />
            </div>
            <h3 className="text-base font-serif font-bold text-white mb-1">Postural Alignment</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Strengthening deep spinal stabilizers and core musculature to project natural poise and confidence on runway and stage.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#141418] border border-white/5">
            <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400 mb-3">
              <Activity className="w-5 h-5" />
            </div>
            <h3 className="text-base font-serif font-bold text-white mb-1">Athletic Mobility</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Enhancing hip flexor and hamstring range of motion crucial for high martial arts kicks, deep kata stances, and joint preservation.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#141418] border border-white/5">
            <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400 mb-3">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="text-base font-serif font-bold text-white mb-1">Dhyana & Breath Calm</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Practicing stillness under balance constraints, cultivating mental equanimity transferred directly to target shooting and academic tests.
            </p>
          </div>
        </div>

        {/* 6 Yoga Asanas Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.yogaItems.map((item, index) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25 }}
              onClick={() => onOpenLightbox && onOpenLightbox(item)}
              className="group cursor-pointer rounded-2xl bg-[#141418] border border-white/5 hover:border-gold-500/40 overflow-hidden shadow-lg flex flex-col justify-between"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-black/60">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider bg-black/70 backdrop-blur-md text-gold-300 border border-gold-500/30 rounded-full">
                  {item.category}
                </span>
              </div>

              <div className="p-5">
                <h4 className="text-base font-serif font-bold text-white group-hover:text-gold-300 transition-colors mb-1.5">
                  {item.title}
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed font-light mb-3">
                  {item.description}
                </p>
                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-gold-400 font-medium">
                  <span>Inspect Posture</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
