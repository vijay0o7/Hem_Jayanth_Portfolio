import React, { useState, useEffect } from 'react';
import { BookOpen, GraduationCap, Award, Globe, Edit3, Save, Check, ExternalLink, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Education({ data, onOpenLightbox }) {
  // Load editable academic info from localStorage or fallback to data.academicInfo
  const [academicInfo, setAcademicInfo] = useState(() => {
    const saved = localStorage.getItem('hem_academic_info');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return data.academicInfo;
      }
    }
    return data.academicInfo;
  });

  const [isEditing, setIsEditing] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleSave = () => {
    localStorage.setItem('hem_academic_info', JSON.stringify(academicInfo));
    setIsEditing(false);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const handleChange = (field, val) => {
    setAcademicInfo(prev => ({ ...prev, [field]: val }));
  };

  return (
    <section id="education" className="py-24 bg-[#0a0a0c] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold-400 font-semibold">
            Knowledge, Leadership & Intellect
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">
            Education & Collaborative Activities
          </h2>
          <div className="w-16 h-0.5 bg-gold-500 mx-auto mt-4" />
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed pt-2">
            Academic standing at Sishya School, national youth leadership programs, environmental world records, and verified STEM talent assessments.
          </p>
        </div>

        {/* 1. Academic Profile Card with Live Inline Editing */}
        <div className="mb-16 p-8 rounded-2xl bg-[#121216] border border-white/10 relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-6 border-b border-white/10 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-white">
                  Academic Institution & Profile
                </h3>
                <p className="text-xs text-zinc-400">
                  Editable academic credentials for university and recruiter review
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {saveSuccess && (
                <span className="flex items-center gap-1 text-xs text-emerald-400 font-medium">
                  <Check className="w-3.5 h-3.5" /> Saved!
                </span>
              )}
              {isEditing ? (
                <button
                  onClick={handleSave}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-black bg-gold-400 hover:bg-gold-300 rounded-full transition-colors"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>Save Info</span>
                </button>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-colors"
                >
                  <Edit3 className="w-3.5 h-3.5 text-gold-400" />
                  <span>Edit Academic Fields</span>
                </button>
              )}
            </div>
          </div>

          {/* Fields Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <label className="text-[10px] font-mono uppercase tracking-widest text-gold-400 block mb-1.5">
                Educational Institution
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={academicInfo.institution}
                  onChange={(e) => handleChange('institution', e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-black/50 border border-gold-500/50 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-gold-400"
                />
              ) : (
                <p className="text-sm font-semibold text-white">{academicInfo.institution}</p>
              )}
            </div>

            <div>
              <label className="text-[10px] font-mono uppercase tracking-widest text-gold-400 block mb-1.5">
                Campus Location
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={academicInfo.campus}
                  onChange={(e) => handleChange('campus', e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-black/50 border border-gold-500/50 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-gold-400"
                />
              ) : (
                <p className="text-sm font-medium text-zinc-300">{academicInfo.campus}</p>
              )}
            </div>

            <div>
              <label className="text-[10px] font-mono uppercase tracking-widest text-gold-400 block mb-1.5">
                Board Affiliation
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={academicInfo.affiliation}
                  onChange={(e) => handleChange('affiliation', e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-black/50 border border-gold-500/50 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-gold-400"
                />
              ) : (
                <p className="text-sm font-medium text-zinc-300">{academicInfo.affiliation}</p>
              )}
            </div>

            <div>
              <label className="text-[10px] font-mono uppercase tracking-widest text-gold-400 block mb-1.5">
                Current Level / Qualification
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={academicInfo.currentGrade}
                  onChange={(e) => handleChange('currentGrade', e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-black/50 border border-gold-500/50 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-gold-400"
                />
              ) : (
                <p className="text-sm font-semibold text-white">{academicInfo.currentGrade}</p>
              )}
            </div>

            <div>
              <label className="text-[10px] font-mono uppercase tracking-widest text-gold-400 block mb-1.5">
                Focus Areas & Stream
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={academicInfo.fieldsOfStudy}
                  onChange={(e) => handleChange('fieldsOfStudy', e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-black/50 border border-gold-500/50 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-gold-400"
                />
              ) : (
                <p className="text-sm font-medium text-zinc-300">{academicInfo.fieldsOfStudy}</p>
              )}
            </div>

            <div>
              <label className="text-[10px] font-mono uppercase tracking-widest text-gold-400 block mb-1.5">
                Extracurricular Leadership
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={academicInfo.leadership}
                  onChange={(e) => handleChange('leadership', e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-black/50 border border-gold-500/50 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-gold-400"
                />
              ) : (
                <p className="text-sm font-medium text-zinc-300">{academicInfo.leadership}</p>
              )}
            </div>
          </div>
        </div>

        {/* 2. World Record & JCI Jasmine Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Virtue Book of World Records (5 Cols) */}
          <div className="lg:col-span-5 p-8 rounded-2xl bg-[#141418] border border-gold-500/30 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gold-500/20 text-gold-300 border border-gold-500/40">
                  Official World Record
                </span>
                <span className="text-xs text-zinc-400 font-mono">5 Jan 2026</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-2">
                Virtue Book of World Records
              </h3>
              <p className="text-xs font-mono text-gold-400 mb-4">
                "Largest Display of Bird Feeders Using Reused Products"
              </p>
              <p className="text-xs text-zinc-300 leading-relaxed font-light mb-6">
                Participated in creating a world record accomplished by 860 students who crafted and displayed over 1,870 bird feeders made from upcycled materials, arranging them into a giant human bird formation on National Bird Day at Sishya School.
              </p>
            </div>

            <div 
              onClick={() => onOpenLightbox && onOpenLightbox({
                image: "/assets/certificates/cert-world-record-bird-feeders-2026.jpg",
                title: "Virtue Book of World Records Certificate",
                category: "World Record",
                caption: "Official world record certificate honoring participation in the largest bird feeder installation using reused products."
              })}
              className="group cursor-pointer rounded-xl overflow-hidden border border-white/10 bg-black/50 p-2 flex items-center gap-4 hover:border-gold-500/50 transition-colors"
            >
              <img
                src="/assets/certificates/cert-world-record-bird-feeders-2026.jpg"
                alt="World record certificate"
                className="w-16 h-20 object-contain rounded"
              />
              <div>
                <p className="text-xs font-bold text-white group-hover:text-gold-300 transition-colors">
                  Inspect Official Certificate
                </p>
                <p className="text-[11px] text-zinc-400">Virtue World Records Registered</p>
              </div>
            </div>
          </div>

          {/* JCI Jasmine 2023 National Training (7 Cols) */}
          <div className="lg:col-span-7 p-8 rounded-2xl bg-[#121216] border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-300 border border-blue-500/30">
                  National Leadership & Speaking
                </span>
                <span className="text-xs text-zinc-400 font-mono">28–30 April 2023</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-2">
                JCI Jasmine 2023 National Student Training
              </h3>
              <p className="text-xs font-mono text-zinc-400 mb-3">
                Hosted by JCI Kottayam Angel City | Hotel Arcadia, Kottayam
              </p>
              <p className="text-xs text-zinc-300 leading-relaxed font-light mb-6">
                Selected participant representing Sishya School at Jaycee Academy of Smart Initiative for Empowerment (JASMINE 2023). Presented collaborative research on "The Future of Education" incorporating digital curricula and early coding case studies.
              </p>

              {/* Event Photos */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div 
                  onClick={() => onOpenLightbox && onOpenLightbox({
                    image: "/assets/events/jci-jasmine-2023-presentation-future-education.jpg",
                    title: "Presentation: The Future of Education",
                    category: "JCI Jasmine 2023",
                    caption: "Hem Jayanth with co-delegates standing before the presentation screen."
                  })}
                  className="cursor-pointer group aspect-video rounded-lg overflow-hidden border border-white/10 relative"
                >
                  <img
                    src="/assets/events/jci-jasmine-2023-presentation-future-education.jpg"
                    alt="Presentation"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <span className="absolute bottom-1.5 left-1.5 text-[9px] bg-black/70 text-white px-1.5 py-0.5 rounded">
                    Delegation Presentation
                  </span>
                </div>

                <div 
                  onClick={() => onOpenLightbox && onOpenLightbox({
                    image: "/assets/events/jci-jasmine-2023-hem-presentation-podium.jpg",
                    title: "Case Study Presentation at Podium",
                    category: "JCI Jasmine 2023",
                    caption: "Hem Jayanth addressing the conference on educational innovation."
                  })}
                  className="cursor-pointer group aspect-video rounded-lg overflow-hidden border border-white/10 relative"
                >
                  <img
                    src="/assets/events/jci-jasmine-2023-hem-presentation-podium.jpg"
                    alt="Podium speaking"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <span className="absolute bottom-1.5 left-1.5 text-[9px] bg-black/70 text-white px-1.5 py-0.5 rounded">
                    Podium Address
                  </span>
                </div>
              </div>
            </div>

            <div 
              onClick={() => onOpenLightbox && onOpenLightbox({
                image: "/assets/certificates/cert-jci-jasmine-2023-national-training.jpg",
                title: "JCI Jasmine 2023 National Certificate",
                category: "Leadership",
                caption: "Official certificate signed by JFS M.K. Karthikeyan (National President JCI India)."
              })}
              className="cursor-pointer flex items-center justify-between text-xs text-gold-400 font-medium pt-3 border-t border-white/5"
            >
              <span>View JCI India National Certificate</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </div>

        </div>

        {/* 3. Academic Competitions & STEM Olympiads (Exact Verified Data) */}
        <div>
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-gold-400 font-semibold block mb-1">
              Verified Assessments
            </span>
            <h3 className="text-2xl font-serif font-bold text-white">
              National Science Talent & Cyber Olympiad Records
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Exact marks, percentiles, and state/national ranks verified against official score sheets from Unified Council and Silverzone Foundation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.academicCompetitions.map(comp => (
              <div
                key={comp.id}
                onClick={() => onOpenLightbox && onOpenLightbox({
                  image: comp.certificate,
                  title: comp.title,
                  category: "Academic Assessment",
                  caption: `${comp.organization} | Score: ${comp.score} | ${comp.rank}`
                })}
                className="group cursor-pointer p-6 rounded-2xl bg-[#121216] border border-white/5 hover:border-gold-500/40 flex flex-col justify-between shadow-lg transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-zinc-400">{comp.date}</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-gold-300 border border-white/10">
                      {comp.classGrade}
                    </span>
                  </div>

                  <h4 className="text-base font-serif font-bold text-white group-hover:text-gold-300 transition-colors mb-1 leading-snug">
                    {comp.title}
                  </h4>
                  <p className="text-xs text-zinc-400 font-medium mb-4">
                    {comp.organization}
                  </p>

                  <div className="p-3 rounded-lg bg-black/40 border border-white/5 space-y-1 mb-4">
                    <div className="flex justify-between text-xs">
                      <span className="text-zinc-400">Score / Percentage:</span>
                      <strong className="text-gold-400 font-mono">{comp.score}</strong>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-zinc-400">Rank:</span>
                      <strong className="text-zinc-200 text-right text-[11px] font-mono">{comp.rank}</strong>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-gold-400 font-medium">
                  <span>View Verified Mark Sheet</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
