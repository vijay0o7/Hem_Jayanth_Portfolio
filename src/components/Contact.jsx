import React, { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin, Download, Send, CheckCircle, Edit3, Save, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Contact({ data, onDownloadPdf }) {
  // Load editable contact details from localStorage or use defaults
  const [contactInfo, setContactInfo] = useState(() => {
    const saved = localStorage.getItem('hem_contact_info');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return data.personal;
      }
    }
    return {
      email: data.personal.email,
      phone: data.personal.phone,
      location: data.personal.location,
      linkedin: data.personal.linkedin,
      instagram: data.personal.instagram,
      status: data.personal.status
    };
  });

  const [isEditing, setIsEditing] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Form State
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    organization: '',
    category: 'Admissions & Universities',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSaveContact = () => {
    localStorage.setItem('hem_contact_info', JSON.stringify(contactInfo));
    setIsEditing(false);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#d4af37', '#ffffff']
    });
    setTimeout(() => {
      setFormSubmitted(false);
      setFormState({
        name: '',
        email: '',
        organization: '',
        category: 'Admissions & Universities',
        message: ''
      });
    }, 5000);
  };

  const handleDownload = () => {
    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.5 },
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
    <section id="contact" className="py-24 bg-[#0a0a0c] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold-400 font-semibold">
            Inquiries & Representation
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">
            Connect & Collaborate
          </h2>
          <div className="w-16 h-0.5 bg-gold-500 mx-auto mt-4" />
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed pt-2">
            Open for inquiries regarding college admissions, sports academies, modeling agency portfolios, and professional evaluations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Editable Contact Card & Channels (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-[#121216] border border-gold-500/30 shadow-xl relative">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                <span className="text-xs font-mono uppercase tracking-widest text-gold-400 font-semibold">
                  Direct Contact Dossier
                </span>
                <div>
                  {saveSuccess && (
                    <span className="text-xs text-emerald-400 font-medium mr-2">Saved!</span>
                  )}
                  {isEditing ? (
                    <button
                      onClick={handleSaveContact}
                      className="inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold uppercase bg-gold-400 hover:bg-gold-300 text-black rounded-full transition-colors"
                    >
                      <Save className="w-3 h-3" />
                      <span>Save</span>
                    </button>
                  ) : (
                    <button
                      onClick={() => setIsEditing(true)}
                      className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium uppercase bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/10 rounded-full transition-colors"
                    >
                      <Edit3 className="w-3 h-3 text-gold-400" />
                      <span>Edit Fields</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Status Notice */}
              <div className="mb-6 p-3 rounded-lg bg-gold-500/10 border border-gold-500/20 text-xs text-gold-300 font-light leading-relaxed">
                <strong className="font-semibold block text-gold-200 mb-0.5">Availability Status:</strong>
                {isEditing ? (
                  <input
                    type="text"
                    value={contactInfo.status}
                    onChange={(e) => setContactInfo({ ...contactInfo, status: e.target.value })}
                    className="w-full mt-1 px-2 py-1 bg-black/60 border border-gold-500/40 rounded text-xs text-white"
                  />
                ) : (
                  <span>{contactInfo.status}</span>
                )}
              </div>

              {/* Contact Detail Rows */}
              <div className="space-y-4 text-sm">
                
                {/* Location */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gold-400 flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block">Location</span>
                    {isEditing ? (
                      <input
                        type="text"
                        value={contactInfo.location}
                        onChange={(e) => setContactInfo({ ...contactInfo, location: e.target.value })}
                        className="w-full mt-1 px-2 py-1 bg-black/60 border border-gold-500/40 rounded text-xs text-white"
                      />
                    ) : (
                      <span className="text-zinc-200 font-medium text-xs">{contactInfo.location}</span>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gold-400 flex-shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block">Email Address</span>
                    {isEditing ? (
                      <input
                        type="email"
                        value={contactInfo.email}
                        onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                        className="w-full mt-1 px-2 py-1 bg-black/60 border border-gold-500/40 rounded text-xs text-white"
                      />
                    ) : (
                      <a href={`mailto:${contactInfo.email}`} className="text-gold-400 hover:text-gold-300 transition-colors text-xs font-mono">
                        {contactInfo.email}
                      </a>
                    )}
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gold-400 flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block">Phone / Mobile</span>
                    {isEditing ? (
                      <input
                        type="text"
                        value={contactInfo.phone}
                        onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                        className="w-full mt-1 px-2 py-1 bg-black/60 border border-gold-500/40 rounded text-xs text-white"
                      />
                    ) : (
                      <span className="text-zinc-300 font-mono text-xs">{contactInfo.phone}</span>
                    )}
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gold-400 flex-shrink-0 mt-0.5">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block">LinkedIn Profile</span>
                    {isEditing ? (
                      <input
                        type="url"
                        value={contactInfo.linkedin}
                        onChange={(e) => setContactInfo({ ...contactInfo, linkedin: e.target.value })}
                        className="w-full mt-1 px-2 py-1 bg-black/60 border border-gold-500/40 rounded text-xs text-white"
                      />
                    ) : (
                      <a href={contactInfo.linkedin} target="_blank" rel="noreferrer" className="text-gold-400 hover:text-gold-300 text-xs">
                        linkedin.com/in/hemjayanth-r
                      </a>
                    )}
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gold-400 flex-shrink-0 mt-0.5">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block">Instagram</span>
                    {isEditing ? (
                      <input
                        type="url"
                        value={contactInfo.instagram}
                        onChange={(e) => setContactInfo({ ...contactInfo, instagram: e.target.value })}
                        className="w-full mt-1 px-2 py-1 bg-black/60 border border-gold-500/40 rounded text-xs text-white"
                      />
                    ) : (
                      <a href={contactInfo.instagram} target="_blank" rel="noreferrer" className="text-gold-400 hover:text-gold-300 text-xs">
                        @hemjayanth.r
                      </a>
                    )}
                  </div>
                </div>

              </div>

              {/* Download Action within Contact */}
              <div className="pt-6 mt-6 border-t border-white/10">
                <button
                  onClick={handleDownload}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-[#e5d1ad] via-[#d4af37] to-[#b38f2e] hover:from-white hover:to-gold-300 shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Verified PDF Portfolio</span>
                </button>
              </div>

              {/* Privacy Assurance */}
              <div className="flex items-center gap-2 text-[11px] text-zinc-500 mt-4">
                <ShieldCheck className="w-4 h-4 text-emerald-500/80 flex-shrink-0" />
                <span>Private personal numbers from old event ID badges are masked for privacy.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl bg-[#121216] border border-white/10 shadow-xl">
              <h3 className="text-xl font-serif font-bold text-white mb-1">
                Direct Inquiry Form
              </h3>
              <p className="text-xs text-zinc-400 mb-6">
                Send a formal inquiry for admissions consideration, athletic evaluations, or modeling agency portfolio requests.
              </p>

              {formSubmitted ? (
                <div className="p-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <CheckCircle className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="text-lg font-serif font-bold text-white">Inquiry Received</h4>
                  <p className="text-xs text-zinc-300 max-w-md mx-auto">
                    Thank you for your interest in Hem Jayanth R. A confirmation has been logged and the portfolio owner will be notified promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Dr. Jennifer Davis"
                        className="w-full px-4 py-2.5 rounded-lg bg-black/50 border border-white/10 text-white text-sm focus:outline-none focus:border-gold-500/70"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block mb-1">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="admissions@university.edu"
                        className="w-full px-4 py-2.5 rounded-lg bg-black/50 border border-white/10 text-white text-sm focus:outline-none focus:border-gold-500/70"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block mb-1">
                        Institution / Agency Name
                      </label>
                      <input
                        type="text"
                        value={formState.organization}
                        onChange={(e) => setFormState({ ...formState, organization: e.target.value })}
                        placeholder="University / Talent Agency"
                        className="w-full px-4 py-2.5 rounded-lg bg-black/50 border border-white/10 text-white text-sm focus:outline-none focus:border-gold-500/70"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block mb-1">
                        Inquiry Category *
                      </label>
                      <select
                        value={formState.category}
                        onChange={(e) => setFormState({ ...formState, category: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-black/50 border border-white/10 text-white text-sm focus:outline-none focus:border-gold-500/70"
                      >
                        <option value="Admissions & Universities">University Admissions</option>
                        <option value="Modeling Agency Representation">Modeling Agency Representation</option>
                        <option value="Sports & Martial Arts Academy">Sports / Martial Arts Academy</option>
                        <option value="Corporate / Collaborative Event">Corporate / Collaborative Event</option>
                        <option value="General Inquiry">General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block mb-1">
                      Message / Evaluation Details *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Please outline the nature of the evaluation, opportunity, or requested portfolio materials..."
                      className="w-full px-4 py-2.5 rounded-lg bg-black/50 border border-white/10 text-white text-sm focus:outline-none focus:border-gold-500/70"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-xs font-semibold uppercase tracking-wider text-black bg-gold-400 hover:bg-gold-300 transition-colors shadow-lg shadow-gold-900/20"
                  >
                    <Send className="w-4 h-4" />
                    <span>Transmit Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
