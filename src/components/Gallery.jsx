import React, { useState } from 'react';
import { Eye, ExternalLink, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Gallery({ data, onOpenLightbox }) {
  const [activeFilter, setActiveFilter] = useState('all');

  // Curated, 100% de-duplicated master gallery list
  const galleryItems = [
    // Fashion
    { id: 'g-f-1', image: '/assets/fashion/jfw-runway-hugo-boss.jpg', title: "Hugo Boss Runway Walk", category: 'Fashion', year: '2018', caption: "Runway model walking for Hugo Boss at Junior's Fashion Week, JW Marriott Bengaluru." },
    { id: 'g-f-2', image: '/assets/fashion/jfw-runway-waving.jpg', title: "Audience Interaction Walk", category: 'Fashion', year: '2018', caption: "Waving to audience during Junior's Fashion Week showcase." },
    { id: 'g-f-3', image: '/assets/fashion/jfw-runway-group-walk.jpg', title: "Grand Ensemble Walk", category: 'Fashion', year: '2018', caption: "Junior models group formation on JFW runway." },
    { id: 'g-f-4', image: '/assets/fashion/jfw-runway-pose-flying-machine.jpg', title: "Flying Machine Stage Pose", category: 'Fashion', year: '2018', caption: "Showcase turn and pose for Flying Machine Boyzone collection." },
    { id: 'g-f-5', image: '/assets/fashion/jfw-bangalore-2018-certificate.jpg', title: "Junior's Fashion Week Certificate", category: 'Fashion', year: '2018', caption: "Official Certificate of Participation awarded at Marriott Bengaluru." },
    { id: 'g-f-6', image: '/assets/fashion/chennai-fashion-contest-junior-2019-certificate.jpg', title: "Chennai Fashion Contest Junior Certificate", category: 'Fashion', year: '2019', caption: "Master & Miss Kids 2019 Certificate of Participation." },

    // Martial Arts
    { id: 'g-m-1', image: '/assets/martial-arts/championship-2023-trophy-stage.jpg', title: "3rd South India Championship Trophy Ceremony", category: 'Martial Arts', year: '2023', caption: "Holding championship trophy and certificate on stage with coaches." },
    { id: 'g-m-2', image: '/assets/martial-arts/kungfu-team-outdoor-portrait.jpg', title: "Shaolin Kung Fu Team Portrait", category: 'Martial Arts', year: '2023', caption: "Outdoor portrait with Grandmaster, coach, and fellow kung fu practitioners." },
    { id: 'g-m-3', image: '/assets/martial-arts/championship-2023-winners-podium.jpg', title: "Championship Award Presentation", category: 'Martial Arts', year: '2023', caption: "Honoring kata discipline and tournament performance." },
    { id: 'g-m-4', image: '/assets/martial-arts/championship-2023-award-celebration.jpg', title: "Coach Appreciation & Mentorship", category: 'Martial Arts', year: '2023', caption: "Moment of guidance following successful championship rounds." },

    // Sports & Target Shooting & Archery
    { id: 'g-s-1', image: '/assets/sports/shooting-range-aim-full.jpg', title: "10m Air Rifle Precision Shooting", category: 'Sports', year: '2023', caption: "Stance and sight alignment down the 10m shooting range." },
    { id: 'g-s-2', image: '/assets/sports/shooting-range-profile-focus.jpg', title: "Athletic Marksmanship Concentration", category: 'Sports', year: '2023', caption: "Micro-alignment and respiratory control at the shooting lane." },
    { id: 'g-s-3', image: '/assets/archery/archery-range-recurve-bow.jpg', title: "Traditional Recurve Archery Practice", category: 'Sports', year: '2023', caption: "Archery lane training evaluating target groupings and recurve draw posture." },

    // Yoga
    { id: 'g-y-1', image: '/assets/yoga/yoga-vrikshasana-tree-pose-namaste.jpg', title: "Vrikshasana (Tree Pose) – Namaste Mudra", category: 'Yoga', year: '2023', caption: "One-legged standing balance improving stability and neuromuscular control." },
    { id: 'g-y-2', image: '/assets/yoga/yoga-vrikshasana-meditation.jpg', title: "Vrikshasana – Dhyana Meditation", category: 'Yoga', year: '2023', caption: "Stillness and internal composure with eyes closed." },
    { id: 'g-y-3', image: '/assets/yoga/yoga-vrikshasana-studio-smile.jpg', title: "Vrikshasana – Studio Routine", category: 'Yoga', year: '2023', caption: "Daily practice routine alongside tournament honors and athletic gear." },
    { id: 'g-y-4', image: '/assets/yoga/yoga-uttanasana-forward-fold.jpg', title: "Uttanasana (Forward Fold)", category: 'Yoga', year: '2023', caption: "Deep hamstring stretch maintaining straight leg alignment and grounding palms." },
    { id: 'g-y-5', image: '/assets/yoga/yoga-hasta-uttanasana-backbend.jpg', title: "Hasta Uttanasana (Raised Hands Backbend)", category: 'Yoga', year: '2023', caption: "Chest expansion and thoracic extension improving posture and breathing." },
    { id: 'g-y-6', image: '/assets/yoga/yoga-ashwa-sanchalanasana-low-lunge.jpg', title: "Ashwa Sanchalanasana (Equestrian Lunge)", category: 'Yoga', year: '2023', caption: "Deep low lunge developing hip flexor mobility and lower body strength." },

    // Events
    { id: 'g-e-1', image: '/assets/events/jci-jasmine-2023-presentation-future-education.jpg', title: "JCI Jasmine: Presentation on Future of Education", category: 'Events', year: '2023', caption: "Presenting collaborative research at the Jaycee Academy of Smart Initiative in Kottayam." },
    { id: 'g-e-2', image: '/assets/events/jci-jasmine-2023-hem-presentation-podium.jpg', title: "JCI Jasmine: Podium Case Study Address", category: 'Events', year: '2023', caption: "Addressing delegates on school coding curricula and innovation." },
    { id: 'g-e-3', image: '/assets/events/jci-jasmine-2023-valedictory-group.jpg', title: "JCI Jasmine 2023 Valedictory Ceremony", category: 'Events', year: '2023', caption: "Valedictory gathering of delegates, trainers, and organizers holding certificates." },

    // Selected Verified Certificates
    { id: 'g-c-1', image: '/assets/certificates/cert-martial-arts-2024-4th-south-india-1st-place.jpg', title: "4th South India Championship - 1st Place Weapon Kata", category: 'Certificates', year: '2024', caption: "Secured 1st Place in Weapon Kata (71 kg/age category) at Adhiyamaan Indoor Stadium." },
    { id: 'g-c-2', image: '/assets/certificates/cert-martial-arts-2023-17th-national-2nd-place.jpg', title: "17th National Championship - 2nd Place Weapon Kata", category: 'Certificates', year: '2023', caption: "Secured Second Place Under 18 in weapon kata at Town Hall Tirur, Kerala." },
    { id: 'g-c-3', image: '/assets/certificates/cert-world-record-bird-feeders-2026.jpg', title: "Virtue Book of World Records Certificate", category: 'Certificates', year: '2026', caption: "World Record for Largest Display of Bird Feeders Using Reused Products (1,870 bird feeders)." },
    { id: 'g-c-4', image: '/assets/certificates/cert-sports-basketball-winners-2026-kreedotsav.jpg', title: "Kreedotsav 2026-27 Basketball Winner", category: 'Certificates', year: '2026', caption: "Sishya School Kreedotsav Class XII Basketball Tournament Winner." },
    { id: 'g-c-5', image: '/assets/certificates/cert-sports-marathon-2nd-2026-kreedotsav.jpg', title: "Kreedotsav 2026-27 Marathon - 2nd Position", category: 'Certificates', year: '2026', caption: "Sishya School Kreedotsav Class XII Marathon 2nd Position." },
    { id: 'g-c-6', image: '/assets/certificates/cert-sports-discus-throw-1st-2023-24.jpg', title: "Annual Sports Meet - Discus Throw 1st Place", category: 'Certificates', year: '2023', caption: "First Place in Boys Discus Throw (Class IX)." },
    { id: 'g-c-7', image: '/assets/certificates/cert-sports-javelin-throw-2nd-2023-24.jpg', title: "Annual Sports Meet - Javelin Throw 2nd Place", category: 'Certificates', year: '2023', caption: "Second Place in Boys Javelin Throw (Class IX)." },
    { id: 'g-c-8', image: '/assets/certificates/cert-sports-shot-put-3rd-2023-24.jpg', title: "Annual Sports Meet - Shot Put 3rd Place", category: 'Certificates', year: '2023', caption: "Third Place in Boys Shot Put (Class IX)." },
    { id: 'g-c-9', image: '/assets/certificates/cert-sports-basketball-winner-2024-25.jpg', title: "School Sports 2024-25 - Basketball Winner", category: 'Certificates', year: '2024', caption: "Sishya School Class X Basketball Winner." },
    { id: 'g-c-10', image: '/assets/certificates/cert-martial-arts-2018-shotokan-kumite-2nd.jpg', title: "13th All Style Open - 2nd Place Kumite", category: 'Certificates', year: '2018', caption: "Shotokan Karate Second Place in Kumite (Below 20 weight category) in Bangalore." },
    { id: 'g-c-11', image: '/assets/certificates/cert-martial-arts-2018-shotokan-kata-2nd.jpg', title: "13th All Style Open - 2nd Place Kata", category: 'Certificates', year: '2018', caption: "Shotokan Karate Second Place in Kata (Below 10 yrs category) in Bangalore." },
    { id: 'g-c-12', image: '/assets/certificates/cert-jci-jasmine-2023-national-training.jpg', title: "JCI Jasmine 2023 National Certificate", category: 'Certificates', year: '2023', caption: "Jaycee Academy of Smart Initiative for Empowerment student delegate certificate." },
    { id: 'g-c-13', image: '/assets/certificates/cert-academic-science-olympiad-2019.jpg', title: "International Olympiad of Science 2019", category: 'Certificates', year: '2019', caption: "Silverzone Foundation Olympiad of Science score certificate (Class 5)." },
    { id: 'g-c-14', image: '/assets/certificates/cert-academic-nstse-2020.jpg', title: "NSTSE Science Talent Search 2020", category: 'Certificates', year: '2020', caption: "Unified Council National Level Science Talent Search score sheet." }
  ];

  const filterTabs = [
    { id: 'all', label: 'All Assets' },
    { id: 'Fashion', label: 'Fashion' },
    { id: 'Martial Arts', label: 'Martial Arts' },
    { id: 'Sports', label: 'Sports & Archery' },
    { id: 'Yoga', label: 'Yoga' },
    { id: 'Events', label: 'Events' },
    { id: 'Certificates', label: 'Certificates' }
  ];

  const filteredItems = galleryItems.filter(item => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  return (
    <section id="gallery" className="py-24 bg-[#0a0a0c] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold-400 font-semibold">
            Visual Portfolio Archive
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">
            Editorial Photo & Document Gallery
          </h2>
          <div className="w-16 h-0.5 bg-gold-500 mx-auto mt-4" />
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed pt-2">
            Explore authentic, high-resolution photographs and verified certificates across all disciplines.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map(tab => {
            const count = tab.id === 'all' 
              ? galleryItems.length 
              : galleryItems.filter(i => i.category === tab.id).length;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-200 flex items-center gap-2 ${
                  activeFilter === tab.id
                    ? 'bg-gold-500 text-black font-semibold shadow-md shadow-gold-500/20'
                    : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                  activeFilter === tab.id ? 'bg-black/20 text-black' : 'bg-white/10 text-zinc-400'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Editorial Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                onClick={() => onOpenLightbox && onOpenLightbox(item, index, filteredItems)}
                className="group cursor-pointer rounded-2xl bg-[#121216] border border-white/5 hover:border-gold-500/50 overflow-hidden shadow-lg flex flex-col justify-between transition-colors"
              >
                <div className="relative aspect-[4/3] bg-black/50 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
                  
                  {/* Category Pill */}
                  <span className="absolute top-3 left-3 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider bg-black/75 backdrop-blur-md text-gold-300 border border-gold-500/30 rounded">
                    {item.category}
                  </span>

                  {/* Year Tag */}
                  <span className="absolute top-3 right-3 px-2 py-0.5 text-[10px] font-mono text-zinc-400 bg-black/75 rounded">
                    {item.year}
                  </span>

                  {/* Hover icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="w-10 h-10 rounded-full bg-gold-500/90 text-black flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                      <Eye className="w-5 h-5" />
                    </span>
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-sm font-serif font-bold text-white group-hover:text-gold-300 transition-colors line-clamp-1 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-zinc-400 font-light line-clamp-2 leading-relaxed">
                      {item.caption}
                    </p>
                  </div>
                  <div className="pt-3 mt-2 border-t border-white/5 flex items-center justify-between text-xs text-gold-400 font-medium">
                    <span>Inspect</span>
                    <ExternalLink className="w-3 h-3" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
