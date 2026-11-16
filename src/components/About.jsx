import React from 'react';
import { Sparkles, Shield, Target, Compass, BookOpen, Heart, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About({ data, onOpenLightbox }) {
  const pillars = [
    {
      title: "Fashion & Runway Poise",
      icon: Sparkles,
      image: "/assets/fashion/jfw-runway-waving.jpg",
      desc: "Selected model for Junior's Fashion Week (JW Marriott Bengaluru) and Chennai Fashion Contest Junior, presenting collections for Hugo Boss, Flying Machine, and U.S. Polo Assn. Kids.",
      tag: "Runway & Presentation",
      link: "#fashion"
    },
    {
      title: "Martial Arts & Kung Fu",
      icon: Shield,
      image: "/assets/martial-arts/kungfu-team-outdoor-portrait.jpg",
      desc: "Years of training in Chinese Shaolin Kung Fu and Shotokan Karate. 1st Place Weapon Kata winner at the 4th South India Level Championship 2024 and 2nd Place at 17th National Level Championship 2023.",
      tag: "Discipline & Form",
      link: "#sports"
    },
    {
      title: "Precision Marksmanship",
      icon: Target,
      image: "/assets/sports/shooting-range-aim-full.jpg",
      desc: "Practicing 10m air rifle target sports focusing on breathing stability, posture alignment, and mental tranquility at the shooting lane.",
      tag: "Focus & Neural Calm",
      link: "#sports"
    },
    {
      title: "Archery & Coordination",
      icon: Compass,
      image: "/assets/archery/archery-range-recurve-bow.jpg",
      desc: "Traditional recurve bow training developing upper-body symmetry, shoulder stability, and hand-eye coordination.",
      tag: "Physical Development",
      link: "#sports"
    },
    {
      title: "Yoga & Flexibility",
      icon: Heart,
      image: "/assets/yoga/yoga-vrikshasana-meditation.jpg",
      desc: "Daily commitment to yogic postures including Vrikshasana (Tree Pose), Uttanasana (Forward Fold), and backbends for spinal agility, core balance, and focus.",
      tag: "Core & Balance",
      link: "#yoga"
    },
    {
      title: "Collaborative Leadership",
      icon: BookOpen,
      image: "/assets/events/jci-jasmine-2023-presentation-future-education.jpg",
      desc: "Active student delegate at the JCI Jasmine National Training Program in Kottayam and verified World Record participant for the Largest Display of Bird Feeders (2026).",
      tag: "Leadership & Impact",
      link: "#education"
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#0e0e11] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold-400 font-semibold">
            Personal Profile & Identity
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">
            Driven by Creativity, Discipline & Growth
          </h2>
          <div className="w-16 h-0.5 bg-gold-500 mx-auto mt-4" />
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed pt-2">
            A versatile journey shaped by physical training, artistic expression, and proactive participation in school and national initiatives.
          </p>
        </div>

        {/* Narrative & Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-center">
          
          {/* Left: Authentic Bio (6 Cols) */}
          <div className="lg:col-span-6 space-y-5 text-zinc-300 font-light leading-relaxed text-sm sm:text-base">
            <h3 className="text-2xl font-serif font-bold text-white">
              An Authentic Balance of Stage & Arena
            </h3>
            <p>
              Hem Jayanth R. represents an emerging generation of versatile individuals who refuse to be confined to a single dimension. In an age of specialization, his journey illustrates how the poise required to walk a premier fashion runway and the mental endurance demanded by competitive martial arts complement one another.
            </p>
            <p>
              Starting from youth runway showcases with <strong className="text-zinc-100 font-medium">Junior's Fashion Week</strong> and <strong className="text-zinc-100 font-medium">Chennai Fashion Contest Junior</strong>, Hem developed an instinctive presence in front of cameras, live audiences, and industry evaluators.
            </p>
            <p>
              Simultaneously, under the tutelage of respected martial arts masters, he dedicated years to <strong className="text-zinc-100 font-medium">Chinese Shaolin Kung Fu</strong> and <strong className="text-zinc-100 font-medium">Shotokan Karate</strong>, earning 1st Place in weapon kata at the South India Championship in 2024 and 2nd Place at the National Championship in 2023.
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs font-mono text-gold-400">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-400" /> Continuous Self-Improvement
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-400" /> Academic & Extracurricular Synergy
              </span>
            </div>
          </div>

          {/* Right: Featured Double Visual (6 Cols) */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div 
              onClick={() => onOpenLightbox && onOpenLightbox({ image: "/assets/profile/profile-martial-arts.jpg", title: "Championship Stage Award", category: "Martial Arts", caption: "Holding championship trophy and certificate with coaches on stage." })}
              className="group cursor-pointer rounded-2xl overflow-hidden border border-white/10 bg-[#16161c] relative h-80 sm:h-96"
            >
              <img
                src="/assets/profile/profile-martial-arts.jpg"
                alt="Championship Podium"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <span className="text-[10px] font-mono uppercase tracking-wider text-gold-400 font-bold">
                  Martial Arts
                </span>
                <p className="text-xs font-medium text-white">Championship Podium</p>
              </div>
            </div>

            <div 
              onClick={() => onOpenLightbox && onOpenLightbox({ image: "/assets/profile/profile-fashion.jpg", title: "Hugo Boss Runway Walk", category: "Fashion", caption: "Runway model at Junior's Fashion Week showcase." })}
              className="group cursor-pointer rounded-2xl overflow-hidden border border-white/10 bg-[#16161c] relative h-80 sm:h-96 mt-6 sm:mt-10"
            >
              <img
                src="/assets/profile/profile-fashion.jpg"
                alt="Runway Modeling"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <span className="text-[10px] font-mono uppercase tracking-wider text-gold-400 font-bold">
                  Fashion Runway
                </span>
                <p className="text-xs font-medium text-white">Hugo Boss Showcase</p>
              </div>
            </div>
          </div>

        </div>

        {/* 6 Visual Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="group relative rounded-2xl bg-[#141418] border border-white/5 hover:border-gold-500/40 overflow-hidden shadow-lg flex flex-col justify-between"
              >
                {/* Image Header */}
                <div 
                  onClick={() => onOpenLightbox && onOpenLightbox({ image: pillar.image, title: pillar.title, category: pillar.tag, caption: pillar.desc })}
                  className="relative h-48 overflow-hidden cursor-pointer"
                >
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141418] via-transparent to-transparent" />
                  <span className="absolute top-3 right-3 px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest bg-black/70 backdrop-blur-md text-gold-300 border border-gold-500/30 rounded-full">
                    {pillar.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 pt-2 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400 mb-3">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-lg font-serif font-bold text-white mb-2 group-hover:text-gold-300 transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between">
                    <a
                      href={pillar.link}
                      className="inline-flex items-center gap-1.5 text-xs text-gold-400 hover:text-gold-300 font-medium transition-colors"
                    >
                      <span>Explore Section</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
