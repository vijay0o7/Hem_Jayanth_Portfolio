import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ExternalLink, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Lightbox({ isOpen, onClose, currentItem, onNext, onPrev, hasNext, hasPrev }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNext && hasNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev && hasPrev) onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onNext, onPrev, hasNext, hasPrev, onClose]);

  if (!isOpen || !currentItem) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-md">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-white/10 hover:bg-gold-500 hover:text-black text-white transition-colors duration-200"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Previous Button */}
        {hasPrev && (
          <button
            onClick={onPrev}
            className="absolute left-3 sm:left-6 z-50 p-2.5 rounded-full bg-white/10 hover:bg-gold-500 hover:text-black text-white transition-colors duration-200"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Next Button */}
        {hasNext && (
          <button
            onClick={onNext}
            className="absolute right-3 sm:right-6 z-50 p-2.5 rounded-full bg-white/10 hover:bg-gold-500 hover:text-black text-white transition-colors duration-200"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="relative max-w-5xl max-h-[92vh] w-full flex flex-col md:flex-row bg-[#141418] border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Image Container */}
          <div className="flex-1 flex items-center justify-center bg-black/60 p-2 sm:p-4 min-h-[300px] max-h-[60vh] md:max-h-[85vh] overflow-hidden">
            <img
              src={currentItem.image || currentItem.certificateImage || currentItem.certificate}
              alt={currentItem.title || "Portfolio photograph"}
              className="max-w-full max-h-[58vh] md:max-h-[80vh] object-contain rounded-lg"
            />
          </div>

          {/* Details Sidebar */}
          <div className="w-full md:w-80 lg:w-96 p-6 flex flex-col justify-between border-t md:border-t-0 md:border-l border-white/10 bg-[#16161c] overflow-y-auto max-h-[35vh] md:max-h-[85vh]">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-1 text-xs font-semibold uppercase tracking-wider bg-gold-500/10 text-gold-400 border border-gold-500/30 rounded-full">
                  {currentItem.category || currentItem.type || "Verified Asset"}
                </span>
                {currentItem.year && (
                  <span className="text-xs text-zinc-400 font-mono">
                    {currentItem.year}
                  </span>
                )}
              </div>

              <h3 className="text-xl font-serif font-bold text-white mb-2 leading-snug">
                {currentItem.title}
              </h3>

              {currentItem.result && (
                <div className="flex items-center gap-2 text-gold-400 font-medium text-sm mb-3">
                  <Award className="w-4 h-4 flex-shrink-0" />
                  <span>{currentItem.result}</span>
                </div>
              )}

              {currentItem.date && (
                <p className="text-xs text-zinc-400 mb-2">
                  <strong className="text-zinc-300">Date:</strong> {currentItem.date}
                </p>
              )}

              {currentItem.location && (
                <p className="text-xs text-zinc-400 mb-2">
                  <strong className="text-zinc-300">Location / Venue:</strong> {currentItem.location}
                </p>
              )}

              {currentItem.organization && (
                <p className="text-xs text-zinc-400 mb-2">
                  <strong className="text-zinc-300">Organization:</strong> {currentItem.organization}
                </p>
              )}

              {currentItem.brand && (
                <p className="text-xs text-zinc-400 mb-2">
                  <strong className="text-zinc-300">Brand / Showcase:</strong> {currentItem.brand}
                </p>
              )}

              <p className="text-sm text-zinc-300 mt-3 leading-relaxed border-t border-white/5 pt-3">
                {currentItem.caption || currentItem.description || currentItem.details}
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between">
              <span className="text-xs text-zinc-500 font-mono">
                Verified Document
              </span>
              <a
                href={currentItem.image || currentItem.certificateImage || currentItem.certificate}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-gold-400 hover:text-gold-300 transition-colors"
              >
                <span>View Full Resolution</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
