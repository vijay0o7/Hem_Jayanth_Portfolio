import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Achievements from './components/Achievements';
import Fashion from './components/Fashion';
import Sports from './components/Sports';
import Yoga from './components/Yoga';
import Education from './components/Education';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Lightbox from './components/Lightbox';
import { portfolioData } from './data/portfolioData';

export default function App() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [activeList, setActiveList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpenLightbox = (item, index = 0, list = null) => {
    setCurrentItem(item);
    if (list && list.length > 0) {
      setActiveList(list);
      setCurrentIndex(index);
    } else {
      setActiveList([item]);
      setCurrentIndex(0);
    }
    setLightboxOpen(true);
  };

  const handleNext = () => {
    if (activeList.length > 1 && currentIndex < activeList.length - 1) {
      const nextIdx = currentIndex + 1;
      setCurrentIndex(nextIdx);
      setCurrentItem(activeList[nextIdx]);
    }
  };

  const handlePrev = () => {
    if (activeList.length > 1 && currentIndex > 0) {
      const prevIdx = currentIndex - 1;
      setCurrentIndex(prevIdx);
      setCurrentItem(activeList[prevIdx]);
    }
  };

  const handleDownloadPdf = () => {
    const link = document.createElement('a');
    link.href = '/Hem_Jayanth_R_Portfolio.pdf';
    link.download = 'Hem_Jayanth_R_Portfolio.pdf';
    link.click();
  };

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-[#e5e5e5] font-sans selection:bg-gold-500 selection:text-black">
      {/* Editorial Navigation */}
      <Navbar onDownloadPdf={handleDownloadPdf} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Home / Introduction */}
        <Hero data={portfolioData} onDownloadPdf={handleDownloadPdf} />

        {/* 2. About Me */}
        <About data={portfolioData} onOpenLightbox={handleOpenLightbox} />

        {/* 3. Achievements & Recognition Timeline */}
        <Achievements data={portfolioData} onOpenLightbox={handleOpenLightbox} />

        {/* 4. Fashion & Runway Modeling Portfolio */}
        <Fashion data={portfolioData} onOpenLightbox={handleOpenLightbox} />

        {/* 5. Sports & Martial Arts */}
        <Sports data={portfolioData} onOpenLightbox={handleOpenLightbox} />

        {/* 6. Yoga & Flexibility */}
        <Yoga data={portfolioData} onOpenLightbox={handleOpenLightbox} />

        {/* 7. Education & Activities */}
        <Education data={portfolioData} onOpenLightbox={handleOpenLightbox} />

        {/* 8. Photographic & Certificate Gallery */}
        <Gallery data={portfolioData} onOpenLightbox={handleOpenLightbox} />

        {/* 9. Contact Section */}
        <Contact data={portfolioData} onDownloadPdf={handleDownloadPdf} />
      </main>

      {/* Footer */}
      <Footer onDownloadPdf={handleDownloadPdf} />

      {/* Fullscreen Editorial Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        currentItem={currentItem}
        onNext={handleNext}
        onPrev={handlePrev}
        hasNext={activeList.length > 1 && currentIndex < activeList.length - 1}
        hasPrev={activeList.length > 1 && currentIndex > 0}
      />
    </div>
  );
}
