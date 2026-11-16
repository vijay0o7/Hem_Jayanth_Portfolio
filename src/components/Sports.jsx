import React, { useState } from 'react';
import { Shield, Target, Compass, Trophy, Award, ExternalLink, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Sports({ data, onOpenLightbox }) {
  const [activeTab, setActiveTab] = useState('martial-arts');

  const tabs = [
    { id: 'martial-arts', label: 'Kung Fu & Karate', icon: Shield },
    { id: 'shooting', label: '10m Air Rifle Shooting', icon: Target },
    { id: 'archery', label: 'Recurve Archery', icon: Compass },
    { id: 'athletics', label: 'School Athletics & Basketball', icon: Trophy }
  ];

  return (
    <section id="sports" className="py-24 bg-[#0a0a0c] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold-400 font-semibold">
            Athletic Rigor & Physical Mastery
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">
            Sports & Martial Arts Portfolio
          </h2>
          <div className="w-16 h-0.5 bg-gold-500 mx-auto mt-4" />
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed pt-2">
            Documented participation across Chinese Shaolin Kung Fu, Shotokan Karate, precision marksmanship, archery, and competitive school athletics.
          </p>
        </div>

        {/* Sub-navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {tabs.map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gold-500 text-black font-semibold shadow-lg shadow-gold-500/20'
                    : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* TAB 1: KUNG FU & KARATE */}
        {activeTab === 'martial-arts' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-12"
          >
            {/* Martial Arts Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.martialArtsItems.map(item => (
                <div
                  key={item.id}
                  onClick={() => onOpenLightbox && onOpenLightbox(item)}
                  className="group cursor-pointer rounded-2xl bg-[#121216] border border-white/5 hover:border-gold-500/40 overflow-hidden shadow-xl flex flex-col justify-between"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-black/60">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider bg-black/70 backdrop-blur-md text-gold-300 border border-gold-500/30 rounded">
                      {item.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h4 className="text-base font-serif font-bold text-white group-hover:text-gold-300 transition-colors mb-1.5">
                      {item.title}
                    </h4>
                    <p className="text-xs text-zinc-400 mb-2 font-mono">
                      {item.date} • {item.location}
                    </p>
                    <p className="text-xs text-zinc-400 leading-relaxed font-light">
                      {item.caption}
                    </p>
                    <div className="pt-3 mt-3 border-t border-white/5 flex items-center justify-between text-xs text-gold-400 font-medium">
                      <span>View Full Image</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Verified Championships Showcase */}
            <div className="p-8 rounded-2xl bg-[#131318] border border-gold-500/20">
              <div className="max-w-2xl mb-6">
                <span className="text-xs font-mono uppercase tracking-widest text-gold-400 font-semibold block mb-1">
                  Verified Competition Roll
                </span>
                <h3 className="text-2xl font-serif font-bold text-white">
                  State & National Championships
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center flex-shrink-0 text-gold-400">
                    <Trophy className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-gold-500/20 text-gold-300 border border-gold-500/40">
                      1st Place Winner
                    </span>
                    <h4 className="text-base font-serif font-bold text-white mt-1.5 mb-1">
                      4th South India Level Open Championship 2024
                    </h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Secured 1st Place in Weapon Kata (71 kg/age category) on 25 August 2024 at Adhiyamaan Indoor Stadium, Hosur. Organized by Shaolin Dragon Wushu Kung Fu & Fit India.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-zinc-500/10 border border-zinc-500/30 flex items-center justify-center flex-shrink-0 text-zinc-300">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-zinc-500/20 text-zinc-300 border border-zinc-500/40">
                      2nd Place (Silver)
                    </span>
                    <h4 className="text-base font-serif font-bold text-white mt-1.5 mb-1">
                      17th National Level Open Championship 2023
                    </h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Secured Second Place Under 18 in Weapon Kata (14-Years category) on 20 August 2023 at Town Hall, Tirur, Kerala. Organized by Chinese Shaolin Kung-Fu Center.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* TAB 2: TARGET SHOOTING */}
        {activeTab === 'shooting' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-mono uppercase tracking-widest text-gold-400 font-semibold block">
                Target Sports
              </span>
              <h3 className="text-3xl font-serif font-bold text-white">
                10m Precision Air Rifle Shooting
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed font-light">
                Marksmanship is the ultimate trial of mental stillness and physical micro-calibration. Hem Jayanth practices 10m target sports utilizing precision optic-scoped rifles at regulated shooting lanes.
              </p>
              
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <CheckCircle className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-xs text-white block">Respiratory & Heart Rate Regulation</strong>
                    <span className="text-xs text-zinc-400">Firing on the natural respiratory pause to ensure zero barrel deflection.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <CheckCircle className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-xs text-white block">Stance Stability & Trigger Control</strong>
                    <span className="text-xs text-zinc-400">Developing a smooth continuous press without anticipating recoil.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <CheckCircle className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-xs text-white block">Sight Alignment & Follow-Through</strong>
                    <span className="text-xs text-zinc-400">Maintaining visual contact with the optic crosshairs through target impact.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              <div
                onClick={() => onOpenLightbox && onOpenLightbox({ image: "/assets/sports/shooting-range-aim-full.jpg", title: "Target Shooting Range", category: "Target Sports", caption: "Aiming precision scoped rifle down range towards target cards." })}
                className="group cursor-pointer rounded-2xl overflow-hidden border border-white/10 bg-[#141418] relative aspect-video"
              >
                <img
                  src="/assets/sports/shooting-range-aim-full.jpg"
                  alt="Shooting range aiming"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-xs text-white font-medium">Lane & Scope Alignment</span>
              </div>

              <div
                onClick={() => onOpenLightbox && onOpenLightbox({ image: "/assets/sports/shooting-range-profile-focus.jpg", title: "Precision Focus", category: "Target Sports", caption: "Athletic concentration during shooting practice." })}
                className="group cursor-pointer rounded-2xl overflow-hidden border border-white/10 bg-[#141418] relative aspect-video"
              >
                <img
                  src="/assets/sports/shooting-range-profile-focus.jpg"
                  alt="Shooting profile focus"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-xs text-white font-medium">Focus & Trigger Control</span>
              </div>
            </div>
          </motion.div>
        )}

        {/* TAB 3: ARCHERY */}
        {activeTab === 'archery' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-white/10 bg-[#141418] aspect-[3/4] cursor-pointer group"
              onClick={() => onOpenLightbox && onOpenLightbox({ image: "/assets/archery/archery-range-recurve-bow.jpg", title: "Archery Range Training", category: "Archery", caption: "Holding traditional recurve bow down the archery lane." })}
            >
              <img
                src="/assets/archery/archery-range-recurve-bow.jpg"
                alt="Archery practice"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] font-mono uppercase tracking-wider text-gold-400 font-semibold block mb-1">
                  Authentic Asset
                </span>
                <p className="text-base font-serif font-bold text-white">Archery Range Practice</p>
                <p className="text-xs text-zinc-300">Evaluating grouping on high target monitor and shooting lane.</p>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-mono uppercase tracking-widest text-gold-400 font-semibold block">
                Discipline & Upper-Body Symmetry
              </span>
              <h3 className="text-3xl font-serif font-bold text-white">
                Traditional Recurve Archery
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed font-light">
                Archery cultivates bilateral balance, scapular engagement, and an unwavering point of focus. Practicing with traditional wooden recurve bows, Hem Jayanth develops consistent draw length, anchor point memory, and release smoothness.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <h5 className="text-sm font-serif font-bold text-gold-400 mb-1">Anchor Consistency</h5>
                  <p className="text-xs text-zinc-400">Locking the bowstring to the exact facial anchor point prior to release.</p>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <h5 className="text-sm font-serif font-bold text-gold-400 mb-1">Back Tension</h5>
                  <p className="text-xs text-zinc-400">Engaging rhomboids and lats rather than relying purely on forearm strength.</p>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <h5 className="text-sm font-serif font-bold text-gold-400 mb-1">Visual Discipline</h5>
                  <p className="text-xs text-zinc-400">Maintaining single-minded concentration on the target center ring.</p>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <h5 className="text-sm font-serif font-bold text-gold-400 mb-1">Patience & Cadence</h5>
                  <p className="text-xs text-zinc-400">Executing each arrow with methodical rhythm and reset.</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* TAB 4: SCHOOL ATHLETICS & BASKETBALL */}
        {activeTab === 'athletics' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
          >
            <div className="p-8 rounded-2xl bg-[#121216] border border-white/10">
              <span className="text-xs font-mono uppercase tracking-widest text-gold-400 font-semibold block mb-2">
                Sishya School Athletics Roll
              </span>
              <h3 className="text-2xl font-serif font-bold text-white mb-6">
                Verified School & Inter-House Sports Achievements
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-[10px] font-mono text-gold-400 block mb-1">2026-27 (Class XII)</span>
                  <h4 className="text-sm font-bold text-white">Basketball - Winners</h4>
                  <p className="text-xs text-zinc-400 mt-1">Kreedotsav 2026-27 Intramural Basketball Champion.</p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-[10px] font-mono text-zinc-400 block mb-1">2026-27 (Class XII)</span>
                  <h4 className="text-sm font-bold text-white">Marathon - Second Position</h4>
                  <p className="text-xs text-zinc-400 mt-1">Kreedotsav 2026-27 Long Distance Marathon (Silver).</p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-[10px] font-mono text-gold-400 block mb-1">2024-25 (Class X)</span>
                  <h4 className="text-sm font-bold text-white">Basketball - Winner</h4>
                  <p className="text-xs text-zinc-400 mt-1">Sishya School Annual Sports Day Basketball Champion.</p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-[10px] font-mono text-gold-400 block mb-1">2023-24 (Class IX)</span>
                  <h4 className="text-sm font-bold text-white">Discus Throw - First Place</h4>
                  <p className="text-xs text-zinc-400 mt-1">Annual Sports Meet Boys Discus Throw Champion.</p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-[10px] font-mono text-zinc-400 block mb-1">2023-24 (Class IX)</span>
                  <h4 className="text-sm font-bold text-white">Javelin Throw - Second Place</h4>
                  <p className="text-xs text-zinc-400 mt-1">Annual Sports Meet Boys Javelin Throw Runner-up.</p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-[10px] font-mono text-zinc-400 block mb-1">2023-24 (Class IX)</span>
                  <h4 className="text-sm font-bold text-white">Shot Put - Third Place</h4>
                  <p className="text-xs text-zinc-400 mt-1">Annual Sports Meet Boys Shot Put Bronze medalist.</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
}
