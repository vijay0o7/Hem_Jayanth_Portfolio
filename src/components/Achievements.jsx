import React, { useState } from 'react';
import { Award, Trophy, Medal, CheckCircle, ExternalLink, Calendar, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Achievements({ data, onOpenLightbox }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterOptions = [
    { id: 'all', label: 'All Verified Recognitions' },
    { id: 'winner', label: '1st Place & World Record' },
    { id: 'podium', label: 'Podium & Runners-up' },
    { id: 'participation', label: 'Showcases & Delegations' }
  ];

  const filteredItems = data.achievementsTimeline.filter(item => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'winner') return item.resultType === 'winner';
    if (activeFilter === 'podium') return item.resultType === 'podium';
    if (activeFilter === 'participation') return item.resultType === 'participation';
    return true;
  });

  const getResultBadge = (type, result) => {
    if (type === 'winner') {
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-amber-500/20 to-yellow-500/20 text-yellow-300 border border-yellow-500/40">
          <Trophy className="w-3.5 h-3.5 text-yellow-400" />
          <span>{result}</span>
        </span>
      );
    }
    if (type === 'podium') {
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-zinc-400/15 text-zinc-200 border border-zinc-400/30">
          <Medal className="w-3.5 h-3.5 text-zinc-300" />
          <span>{result}</span>
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-300 border border-blue-500/30">
        <CheckCircle className="w-3.5 h-3.5 text-blue-400" />
        <span>{result}</span>
      </span>
    );
  };

  return (
    <section id="achievements" className="py-24 bg-[#0a0a0c] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold-400 font-semibold">
            Verified Track Record
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">
            Achievements & Recognition
          </h2>
          <div className="w-16 h-0.5 bg-gold-500 mx-auto mt-4" />
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed pt-2">
            A chronological timeline of verified wins, state/national championship podiums, and official participations from 2017 to 2026.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterOptions.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-200 ${
                activeFilter === tab.id
                  ? 'bg-gold-500 text-black font-semibold shadow-md shadow-gold-500/20'
                  : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.title + index}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                className="group relative rounded-2xl bg-[#121216] border border-white/5 hover:border-gold-500/40 p-6 flex flex-col justify-between shadow-lg transition-colors"
              >
                <div>
                  {/* Top Header: Year & Result Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 bg-white/5 px-2.5 py-1 rounded-md">
                      <Calendar className="w-3.5 h-3.5 text-gold-400" />
                      <span>{item.date || item.year}</span>
                    </span>
                    {getResultBadge(item.resultType, item.result)}
                  </div>

                  {/* Title & Category */}
                  <div className="mb-3">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-gold-400/90 font-medium block mb-1">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-serif font-bold text-white group-hover:text-gold-300 transition-colors leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  {/* Organization */}
                  <p className="text-xs text-zinc-400 font-medium mb-2">
                    {item.organization}
                  </p>

                  {/* Details */}
                  <p className="text-xs text-zinc-400 leading-relaxed font-light mb-4">
                    {item.details}
                  </p>
                </div>

                {/* Footer with Certificate Preview Link */}
                {item.certificateImage && (
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <button
                      onClick={() => onOpenLightbox && onOpenLightbox({
                        image: item.certificateImage,
                        title: item.title,
                        category: item.category,
                        result: item.result,
                        date: item.date,
                        organization: item.organization,
                        caption: item.details
                      })}
                      className="inline-flex items-center gap-2 text-xs font-medium text-gold-400 hover:text-gold-300 transition-colors group/btn"
                    >
                      <span>View Verified Document</span>
                      <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                    </button>
                    <span className="text-[10px] text-zinc-500 font-mono">
                      Verified
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
