import { jsPDF } from 'jspdf';
import fs from 'fs';
import path from 'path';

function b64(relPath) {
  const full = path.join(process.cwd(), relPath);
  if (!fs.existsSync(full)) {
    console.warn('Missing file:', full);
    return null;
  }
  return 'data:image/jpeg;base64,' + fs.readFileSync(full).toString('base64');
}

export function generatePortfolioPdf() {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const totalPages = 8;
  const gold = [212, 175, 55];
  const darkGold = [176, 138, 67];
  const charcoal = [18, 18, 22];
  const lightGray = [245, 245, 247];
  const textDark = [35, 35, 38];
  const textMuted = [110, 110, 115];

  function addHeaderFooter(pageNum, sectionTitle) {
    if (pageNum === 1) return; // Skip cover
    // Header
    doc.setDrawColor(...gold);
    doc.setLineWidth(0.4);
    doc.line(15, 12, 195, 12);

    doc.setFont('times', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(...darkGold);
    doc.text('HEM JAYANTH R.', 15, 9);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...textMuted);
    doc.text(sectionTitle.toUpperCase(), 195, 9, { align: 'right' });

    // Footer
    doc.setDrawColor(220, 220, 225);
    doc.setLineWidth(0.3);
    doc.line(15, 285, 195, 285);

    doc.setFontSize(7.5);
    doc.setTextColor(...textMuted);
    doc.text('Verified Personal Portfolio | Hem Jayanth R.', 15, 290);
    doc.text(`Page ${pageNum} of ${totalPages}`, 195, 290, { align: 'right' });
  }

  // ==========================================
  // PAGE 1: COVER PAGE (Luxury Editorial)
  // ==========================================
  // Background
  doc.setFillColor(...charcoal);
  doc.rect(0, 0, 210, 297, 'F');

  // Outer decorative gold border
  doc.setDrawColor(...gold);
  doc.setLineWidth(0.8);
  doc.rect(10, 10, 190, 277);

  // Inner thin border
  doc.setDrawColor(80, 70, 50);
  doc.setLineWidth(0.2);
  doc.rect(13, 13, 184, 271);

  // Top Subtitle
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(...gold);
  doc.text('P R O F E S S I O N A L   P O R T F O L I O', 105, 32, { align: 'center' });

  // Main Name Title
  doc.setFont('times', 'bold');
  doc.setFontSize(32);
  doc.setTextColor(255, 255, 255);
  doc.text('HEM JAYANTH R.', 105, 48, { align: 'center' });

  // Accent divider line
  doc.setDrawColor(...gold);
  doc.setLineWidth(0.6);
  doc.line(75, 54, 135, 54);

  // Tagline
  doc.setFont('times', 'italic');
  doc.setFontSize(11);
  doc.setTextColor(215, 215, 220);
  doc.text('"An individual driven by creativity, discipline and continuous growth."', 105, 62, { align: 'center' });

  // Hero Photograph
  const heroImg = b64('public/assets/profile/profile-hero.jpg');
  if (heroImg) {
    // Gold frame behind photo
    doc.setDrawColor(...gold);
    doc.setLineWidth(0.5);
    doc.rect(59, 74, 92, 107);
    doc.addImage(heroImg, 'JPEG', 60, 75, 90, 105);
  }

  // Pillars / Badges on cover
  const badges = [
    'FASHION & RUNWAY',
    'MARTIAL ARTS CHAMPION',
    'TARGET SPORTS & ARCHERY',
    'YOGA & FLEXIBILITY',
    'ACADEMIC EXCELLENCE & WORLD RECORD'
  ];

  let badgeY = 198;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  badges.forEach((b, i) => {
    doc.setFillColor(28, 28, 35);
    doc.setDrawColor(...darkGold);
    doc.setLineWidth(0.3);
    doc.roundedRect(30, badgeY + (i * 9), 150, 7, 1.5, 1.5, 'FD');
    doc.setTextColor(240, 230, 210);
    doc.text(b, 105, badgeY + (i * 9) + 4.8, { align: 'center' });
  });

  // Cover footer info
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(170, 170, 175);
  doc.text('Sishya School | Hosur / Bengaluru | Verified Profile Document', 105, 266, { align: 'center' });
  doc.text('Prepared for Universities, Talent Agencies, Sports Academies & Corporate Organizations', 105, 272, { align: 'center' });

  // ==========================================
  // PAGE 2: EXECUTIVE SUMMARY & ABOUT ME
  // ==========================================
  doc.addPage();
  addHeaderFooter(2, 'Executive Profile & About Me');

  doc.setFont('times', 'bold');
  doc.setFontSize(20);
  doc.setTextColor(...textDark);
  doc.text('Personal Introduction & Vision', 15, 24);

  doc.setFont('times', 'italic');
  doc.setFontSize(11);
  doc.setTextColor(...darkGold);
  doc.text('Creativity on Stage  •  Rigorous Athletic Discipline  •  Lifelong Learning', 15, 30);

  // Biography text
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(...textDark);
  
  const bioP1 = "Hem Jayanth R. is a disciplined, multi-dimensional young talent with a demonstrated record of high performance across creative arts, physical disciplines, and academic activities. He maintains a rare combination of poised stage presence developed through premier fashion runway showcases and the mental endurance demanded by competitive Chinese Shaolin Kung Fu and Shotokan Karate.";
  const bioP2 = "His sporting engagement extends into precision marksmanship with 10m air rifle target shooting and traditional recurve archery, complemented by daily yoga practice emphasizing neuromuscular balance, spinal flexibility, and mental calm.";
  const bioP3 = "In addition to athletics, Hem Jayanth actively engages in school community and collaborative leadership. He was an official delegate and speaker at the JCI Jasmine National Student Training Program and contributed as a verified world record holder in an environmental initiative with 1,870 bird feeders.";

  doc.text(doc.splitTextToSize(bioP1, 180), 15, 38);
  doc.text(doc.splitTextToSize(bioP2, 180), 15, 54);
  doc.text(doc.splitTextToSize(bioP3, 180), 15, 70);

  // Key Statistics Callout Cards
  doc.setFont('times', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(...textDark);
  doc.text('Performance Highlights at a Glance', 15, 93);

  const statsCards = [
    { num: '6+', label: 'Championship Titles & State/National Podiums' },
    { num: '14+', label: 'Inter-School & Intramural Athletic Medals' },
    { num: '2', label: 'Premier Runway Showcases (JFW & Chennai Junior)' },
    { num: '1', label: 'Verified World Record (Virtue Book of World Records)' }
  ];

  statsCards.forEach((card, idx) => {
    const x = 15 + (idx * 46);
    doc.setFillColor(248, 248, 250);
    doc.setDrawColor(...gold);
    doc.setLineWidth(0.4);
    doc.roundedRect(x, 98, 42, 28, 2, 2, 'FD');

    doc.setFont('times', 'bold');
    doc.setFontSize(16);
    doc.setTextColor(...darkGold);
    doc.text(card.num, x + 21, 108, { align: 'center' });

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    doc.setTextColor(...textDark);
    doc.text(doc.splitTextToSize(card.label, 38), x + 21, 114, { align: 'center' });
  });

  // Secondary Photo & Pillars Section
  const martialPhoto = b64('public/assets/martial-arts/championship-2023-trophy-stage.jpg');
  if (martialPhoto) {
    doc.setDrawColor(...gold);
    doc.setLineWidth(0.4);
    doc.rect(15, 134, 75, 52);
    doc.addImage(martialPhoto, 'JPEG', 15, 134, 75, 52);
    doc.setFontSize(7);
    doc.setTextColor(...textMuted);
    doc.text('Championship stage ceremony with coaches and honors', 15, 189);
  }

  const yogaPhoto = b64('public/assets/yoga/yoga-vrikshasana-studio-smile.jpg');
  if (yogaPhoto) {
    doc.setDrawColor(...gold);
    doc.setLineWidth(0.4);
    doc.rect(95, 134, 38, 52);
    doc.addImage(yogaPhoto, 'JPEG', 95, 134, 38, 52);
    doc.setFontSize(7);
    doc.setTextColor(...textMuted);
    doc.text('Daily balance & flexibility', 95, 189);
  }

  const shootPhoto = b64('public/assets/sports/shooting-range-profile-focus.jpg');
  if (shootPhoto) {
    doc.setDrawColor(...gold);
    doc.setLineWidth(0.4);
    doc.rect(138, 134, 57, 52);
    doc.addImage(shootPhoto, 'JPEG', 138, 134, 57, 52);
    doc.setFontSize(7);
    doc.setTextColor(...textMuted);
    doc.text('Target shooting concentration', 138, 189);
  }

  // Core Disciplines Summary Box
  doc.setFillColor(250, 248, 242);
  doc.setDrawColor(...darkGold);
  doc.setLineWidth(0.3);
  doc.roundedRect(15, 196, 180, 80, 2, 2, 'FD');

  doc.setFont('times', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(...darkGold);
  doc.text('CORE VALUE PILLARS', 20, 204);

  const pillars = [
    { title: "Physical Mastery & Self-Control:", desc: "Years of structured training in Chinese Shaolin Kung Fu and Shotokan Karate emphasizing kata precision, breathing techniques, respect for tradition, and tournament readiness." },
    { title: "Stage Poise & Expressive Confidence:", desc: "High-visibility runway experience presenting designer youth apparel at prestigious venues like JW Marriott Bengaluru before industry judges, designers, and large audiences." },
    { title: "Focus & Neural Calm:", desc: "Cultivating patience and micro-alignment through 10m air rifle target shooting, traditional archery, and yogic asanas (Vrikshasana, Uttanasana)." },
    { title: "Intellectual Curiosity & Leadership:", desc: "Consistent participation in national STEM assessments (NSTSE, Silverzone Science Olympiad, Cyber Olympiad) and youth public speaking programs (JCI Jasmine)." }
  ];

  let pY = 212;
  pillars.forEach(p => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(...textDark);
    doc.text(p.title, 20, pY);
    doc.setFont('helvetica', 'normal');
    doc.text(doc.splitTextToSize(p.desc, 170), 20, pY + 4.5);
    pY += 16;
  });

  // ==========================================
  // PAGE 3: FASHION & MODELLING PORTFOLIO
  // ==========================================
  doc.addPage();
  addHeaderFooter(3, 'Fashion Runway & Modeling Portfolio');

  doc.setFont('times', 'bold');
  doc.setFontSize(20);
  doc.setTextColor(...textDark);
  doc.text('Fashion Runway & Modeling Showcase', 15, 24);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(...textMuted);
  doc.text('Professional runway experience presenting luxury and youth fashion collections.', 15, 30);

  // Runway photos grid
  const f1 = b64('public/assets/fashion/jfw-runway-hugo-boss.jpg');
  const f2 = b64('public/assets/fashion/jfw-runway-waving.jpg');
  const f3 = b64('public/assets/fashion/jfw-runway-group-walk.jpg');
  const f4 = b64('public/assets/fashion/jfw-runway-pose-flying-machine.jpg');

  if (f1) {
    doc.setDrawColor(...gold);
    doc.setLineWidth(0.4);
    doc.rect(15, 36, 42, 70);
    doc.addImage(f1, 'JPEG', 15, 36, 42, 70);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(...textDark);
    doc.text('Hugo Boss Runway Walk', 15, 110);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(6.5);
    doc.setTextColor(...textMuted);
    doc.text('JFW Autumn/Winter Showcase', 15, 114);
  }

  if (f2) {
    doc.setDrawColor(...gold);
    doc.setLineWidth(0.4);
    doc.rect(61, 36, 42, 70);
    doc.addImage(f2, 'JPEG', 61, 36, 42, 70);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(...textDark);
    doc.text('Audience Interaction Walk', 61, 110);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(6.5);
    doc.setTextColor(...textMuted);
    doc.text('Designer Collection Wave', 61, 114);
  }

  if (f3) {
    doc.setDrawColor(...gold);
    doc.setLineWidth(0.4);
    doc.rect(107, 36, 42, 70);
    doc.addImage(f3, 'JPEG', 107, 36, 42, 70);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(...textDark);
    doc.text('Grand Ensemble Walk', 107, 110);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(6.5);
    doc.setTextColor(...textMuted);
    doc.text('Formation with Peer Models', 107, 114);
  }

  if (f4) {
    doc.setDrawColor(...gold);
    doc.setLineWidth(0.4);
    doc.rect(153, 36, 42, 70);
    doc.addImage(f4, 'JPEG', 153, 36, 42, 70);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(...textDark);
    doc.text('Flying Machine Showcase', 153, 110);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(6.5);
    doc.setTextColor(...textMuted);
    doc.text('Stage Turn & Brand Pose', 153, 114);
  }

  // Fashion Details Box
  doc.setFillColor(248, 248, 250);
  doc.setDrawColor(220, 220, 225);
  doc.setLineWidth(0.3);
  doc.roundedRect(15, 122, 180, 80, 2, 2, 'FD');

  doc.setFont('times', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(...darkGold);
  doc.text('Documented Fashion Engagements', 20, 131);

  const fashionEngagements = [
    {
      title: "Junior's Fashion Week (JFW) – Bengaluru Showcase",
      date: "18 November 2018 | Venue: JW Marriott Hotel, Bengaluru",
      details: "Selected model for high-profile runway shows presenting youth autumn/winter collections for premier fashion brands including Hugo Boss (Kids Around), Flying Machine Boyzone, and U.S. Polo Assn. Kids. Demonstrated confident pacing, garment presentation, and runway etiquette."
    },
    {
      title: "Chennai Fashion Contest Junior – Master & Miss Kids 2019",
      date: "4 May 2019 | Venue: Chennai, Tamil Nadu",
      details: "Participated in the competitive regional junior modeling showcase, gaining experience in stage composure, photographic posing, and wardrobe coordination."
    }
  ];

  let fY = 140;
  fashionEngagements.forEach(f => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(...textDark);
    doc.text(f.title, 20, fY);
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(8);
    doc.setTextColor(...darkGold);
    doc.text(f.date, 20, fY + 4.5);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(...textDark);
    doc.text(doc.splitTextToSize(f.details, 170), 20, fY + 9);
    fY += 26;
  });

  // Certificate Thumbnails for Fashion
  const certJfw = b64('public/assets/fashion/jfw-bangalore-2018-certificate.jpg');
  const certChennai = b64('public/assets/fashion/chennai-fashion-contest-junior-2019-certificate.jpg');

  if (certJfw) {
    doc.setDrawColor(210, 210, 215);
    doc.rect(15, 208, 85, 68);
    doc.addImage(certJfw, 'JPEG', 15, 208, 85, 68);
    doc.setFontSize(7);
    doc.setTextColor(...textMuted);
    doc.text('Verified Certificate: Junior\'s Fashion Week 2018', 15, 280);
  }

  if (certChennai) {
    doc.setDrawColor(210, 210, 215);
    doc.rect(105, 208, 90, 68);
    doc.addImage(certChennai, 'JPEG', 105, 208, 90, 68);
    doc.setFontSize(7);
    doc.setTextColor(...textMuted);
    doc.text('Verified Certificate: Master & Miss Kids Chennai 2019', 105, 280);
  }

  // ==========================================
  // PAGE 4: SPORTS & MARTIAL ARTS PORTFOLIO
  // ==========================================
  doc.addPage();
  addHeaderFooter(4, 'Sports & Martial Arts Disciplines');

  doc.setFont('times', 'bold');
  doc.setFontSize(20);
  doc.setTextColor(...textDark);
  doc.text('Sports & Martial Arts Portfolio', 15, 24);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(...textMuted);
  doc.text('Competitive Kung Fu, Shotokan Karate, Target Sports, and Athletics.', 15, 30);

  // Top Martial Arts & Sports Photos
  const m1 = b64('public/assets/martial-arts/championship-2023-trophy-stage.jpg');
  const m2 = b64('public/assets/martial-arts/kungfu-team-outdoor-portrait.jpg');
  const s1 = b64('public/assets/sports/shooting-range-aim-full.jpg');
  const a1 = b64('public/assets/archery/archery-range-recurve-bow.jpg');

  if (m1) {
    doc.setDrawColor(...gold);
    doc.rect(15, 36, 85, 54);
    doc.addImage(m1, 'JPEG', 15, 36, 85, 54);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(...textDark);
    doc.text('3rd South India Level Championship Stage Ceremony', 15, 94);
  }

  if (m2) {
    doc.setDrawColor(...gold);
    doc.rect(105, 36, 42, 54);
    doc.addImage(m2, 'JPEG', 105, 36, 42, 54);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(...textDark);
    doc.text('Shaolin Kung Fu Team', 105, 94);
  }

  if (s1) {
    doc.setDrawColor(...gold);
    doc.rect(152, 36, 43, 26);
    doc.addImage(s1, 'JPEG', 152, 36, 43, 26);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7);
    doc.setTextColor(...textDark);
    doc.text('10m Air Rifle Shooting', 152, 65);
  }

  if (a1) {
    doc.setDrawColor(...gold);
    doc.rect(152, 69, 43, 21);
    doc.addImage(a1, 'JPEG', 152, 69, 43, 21);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7);
    doc.setTextColor(...textDark);
    doc.text('Recurve Archery Practice', 152, 94);
  }

  // Verified Championships Section
  doc.setFont('times', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(...darkGold);
  doc.text('Verified Martial Arts Tournament Achievements', 15, 104);

  const martialAchievements = [
    {
      title: "1st Place Winner – Weapon Kata (Colour / Black Belt)",
      event: "4th South India Level Kung-Fu, Karate & Taekwondo Open Championship 2024",
      date: "25 August 2024 | Venue: Adhiyamaan College Indoor Stadium, Hosur | Fit India Recognized",
      note: "Earned 1st place gold trophy in the 71 kg/age category showcasing weapon kata routines."
    },
    {
      title: "Second Place (Silver) – Under 18 Weapon Kata",
      event: "17th National Level Kung-Fu, Karate & Silambam Open Championship 2023",
      date: "20 August 2023 | Venue: Town Hall, Tirur, Kerala | Fit India & Ministry of Youth Affairs",
      note: "Secured Second Place in weapon kata within the 14-Years age category competing against national participants."
    },
    {
      title: "Second Place – Kumite (Below 20 Weight Category)",
      event: "13th All Style Open Championship 2018 (Shotokan Karate)",
      date: "2 December 2018 | Venue: New Macaulay English High School, Bangalore",
      note: "Secured Second Place silver in sparring (Kumite) organized by South India Karate-Do Association."
    },
    {
      title: "Second Place – Kata (Below 10 Yrs Category)",
      event: "13th All Style Open Championship 2018 (Shotokan Karate)",
      date: "2 December 2018 | Venue: Bangalore",
      note: "Secured Second Place silver in traditional forms (Kata)."
    }
  ];

  let mY = 112;
  martialAchievements.forEach(item => {
    doc.setFillColor(252, 252, 254);
    doc.setDrawColor(225, 225, 230);
    doc.roundedRect(15, mY, 180, 20, 1.5, 1.5, 'FD');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(...textDark);
    doc.text(item.title, 20, mY + 5);

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(7.5);
    doc.setTextColor(...darkGold);
    doc.text(item.event, 20, mY + 9.5);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(...textMuted);
    doc.text(item.date, 20, mY + 14);
    doc.text(item.note, 20, mY + 18);

    mY += 23;
  });

  // Sports & Athletics Summary Box
  doc.setFillColor(248, 248, 250);
  doc.setDrawColor(...gold);
  doc.roundedRect(15, 210, 180, 68, 2, 2, 'FD');

  doc.setFont('times', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(...darkGold);
  doc.text('Athletics & Target Sports Profile', 20, 218);

  const athleticsList = [
    { name: "Precision Rifle Shooting:", desc: "Regular training in 10m air rifle target sports focusing on breathing regulation, stillness, sight alignment, and trigger cadence." },
    { name: "Archery:", desc: "Recurve bow training focusing on upper back strength, anchor consistency, and mental focus down the shooting lane." },
    { name: "Basketball & Team Sports:", desc: "Winner in Kreedotsav 2026-27 (Class XII) and School Sports 2024-25 (Class X); Runner-up in 2023-24." },
    { name: "Track & Field (Throws & Distance):", desc: "First Place in Discus Throw (2023-24), Second Place in Javelin Throw (2023-24), Second Place in Marathon (2026-27), Second in Shot Put (2022-23), Third in Shot Put (2023-24)." },
    { name: "Agile Sports Academy Cricket Camps:", desc: "Participated in foundational sports development and cricket coaching camps in May 2017 and May 2018 at Andhivadi Stadium." }
  ];

  let aY = 224;
  athleticsList.forEach(a => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(...textDark);
    doc.text(a.name, 20, aY);
    doc.setFont('helvetica', 'normal');
    const lines = doc.splitTextToSize(a.desc, 170);
    doc.text(lines, 20, aY + 3.6);
    aY += 4.2 + (lines.length * 3.4);
  });

  // ==========================================
  // PAGE 5: YOGA & FLEXIBILITY
  // ==========================================
  doc.addPage();
  addHeaderFooter(5, 'Yoga & Physical Development');

  doc.setFont('times', 'bold');
  doc.setFontSize(20);
  doc.setTextColor(...textDark);
  doc.text('Yoga, Flexibility & Mind-Body Poise', 15, 24);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(...textMuted);
  doc.text('Disciplined daily practice integrating flexibility, core equilibrium, and meditative calm.', 15, 30);

  // 4 Yoga Photos Grid
  const y1 = b64('public/assets/yoga/yoga-vrikshasana-tree-pose-namaste.jpg');
  const y2 = b64('public/assets/yoga/yoga-uttanasana-forward-fold.jpg');
  const y3 = b64('public/assets/yoga/yoga-hasta-uttanasana-backbend.jpg');
  const y4 = b64('public/assets/yoga/yoga-ashwa-sanchalanasana-low-lunge.jpg');

  if (y1) {
    doc.setDrawColor(...gold);
    doc.rect(15, 36, 42, 68);
    doc.addImage(y1, 'JPEG', 15, 36, 42, 68);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(...textDark);
    doc.text('Vrikshasana (Tree Pose)', 15, 108);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(6.5);
    doc.setTextColor(...textMuted);
    doc.text('Single-leg balance & Namaste mudra', 15, 112);
  }

  if (y2) {
    doc.setDrawColor(...gold);
    doc.rect(61, 36, 42, 68);
    doc.addImage(y2, 'JPEG', 61, 36, 42, 68);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(...textDark);
    doc.text('Uttanasana (Forward Fold)', 61, 108);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(6.5);
    doc.setTextColor(...textMuted);
    doc.text('Hamstring extension & palm grounding', 61, 112);
  }

  if (y3) {
    doc.setDrawColor(...gold);
    doc.rect(107, 36, 42, 68);
    doc.addImage(y3, 'JPEG', 107, 36, 42, 68);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(...textDark);
    doc.text('Hasta Uttanasana', 107, 108);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(6.5);
    doc.setTextColor(...textMuted);
    doc.text('Raised hands arch & lung expansion', 107, 112);
  }

  if (y4) {
    doc.setDrawColor(...gold);
    doc.rect(153, 36, 42, 68);
    doc.addImage(y4, 'JPEG', 153, 36, 42, 68);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(...textDark);
    doc.text('Ashwa Sanchalanasana', 153, 108);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(6.5);
    doc.setTextColor(...textMuted);
    doc.text('Equestrian lunge & hip mobility', 153, 112);
  }

  // Philosophy Box
  doc.setFillColor(250, 248, 242);
  doc.setDrawColor(...darkGold);
  doc.roundedRect(15, 122, 180, 50, 2, 2, 'FD');

  doc.setFont('times', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(...darkGold);
  doc.text('The Role of Yoga in Overall Performance', 20, 131);

  const yogaPhilosophy = "Yoga provides the foundational alignment that protects joints, increases mobility for high kicks and martial arts stances, and promotes rapid muscle recovery. The discipline of holding challenging balance postures like Vrikshasana directly translates into stage confidence on the runway and stillness at the shooting range.";
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(...textDark);
  doc.text(doc.splitTextToSize(yogaPhilosophy, 170), 20, 138);

  const keyYogaBenefits = [
    "• Neuromuscular Coordination: Enhanced proprioception for rapid footwork and balanced transitions.",
    "• Breath Regulation (Pranayama): Vital for maintaining calm under pressure during competitive tournaments.",
    "• Postural Alignment: Core conditioning that prevents fatigue and projects upright confidence."
  ];

  let bY = 153;
  keyYogaBenefits.forEach(b => {
    doc.text(b, 20, bY);
    bY += 5.5;
  });

  // Additional Practice Photos (Meditation & Studio)
  const yMed = b64('public/assets/yoga/yoga-vrikshasana-meditation.jpg');
  const yStu = b64('public/assets/yoga/yoga-vrikshasana-studio-smile.jpg');

  if (yMed) {
    doc.setDrawColor(210, 210, 215);
    doc.rect(15, 180, 42, 90);
    doc.addImage(yMed, 'JPEG', 15, 180, 42, 90);
    doc.setFontSize(7);
    doc.setTextColor(...textMuted);
    doc.text('Dhyana (Meditation Focus)', 15, 274);
  }

  if (yStu) {
    doc.setDrawColor(210, 210, 215);
    doc.rect(61, 180, 42, 90);
    doc.addImage(yStu, 'JPEG', 61, 180, 42, 90);
    doc.setFontSize(7);
    doc.setTextColor(...textMuted);
    doc.text('Studio Practice Routine', 61, 274);
  }

  // Right summary callout
  doc.setFillColor(248, 248, 250);
  doc.setDrawColor(220, 220, 225);
  doc.roundedRect(107, 180, 88, 90, 2, 2, 'FD');

  doc.setFont('times', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(...textDark);
  doc.text('Key Asana Repertoire', 112, 190);

  const asanas = [
    { name: "Vrikshasana (Tree Pose):", desc: "Single-leg balance with foot tucked high into thigh, arms in Namaste, cultivating focus and ankle stability." },
    { name: "Uttanasana (Standing Forward Fold):", desc: "Deep hamstring and spinal stretch, increasing posterior chain flexibility." },
    { name: "Hasta Uttanasana (Raised Arms):", desc: "Upper body arch, expanding intercostal muscles and chest posture." },
    { name: "Ashwa Sanchalanasana (Lunge):", desc: "Deep hip flexor opener strengthening quadriceps and glutes." }
  ];

  let asY = 198;
  asanas.forEach(a => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(...darkGold);
    doc.text(a.name, 112, asY);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...textDark);
    doc.text(doc.splitTextToSize(a.desc, 80), 112, asY + 4);
    asY += 17;
  });

  // ==========================================
  // PAGE 6: VERIFIED ACHIEVEMENTS TIMELINE
  // ==========================================
  doc.addPage();
  addHeaderFooter(6, 'Verified Achievements & Timeline');

  doc.setFont('times', 'bold');
  doc.setFontSize(20);
  doc.setTextColor(...textDark);
  doc.text('Documented Achievements & Recognition', 15, 24);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(...textMuted);
  doc.text('Chronological record verified strictly against original certificates. Distinguishing 1st place/wins, podiums, and participation.', 15, 30);

  // Table Header
  doc.setFillColor(...charcoal);
  doc.rect(15, 35, 180, 8, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(...gold);
  doc.text('YEAR', 18, 40.5);
  doc.text('EVENT / CHAMPIONSHIP', 35, 40.5);
  doc.text('CATEGORY', 105, 40.5);
  doc.text('VERIFIED RESULT', 145, 40.5);

  const timelineRows = [
    { year: "2026", event: "Virtue Book of World Records", cat: "Environmental / Team", res: "WORLD RECORD HOLDER", type: "winner" },
    { year: "2026-27", event: "Kreedotsav 2026-27 Basketball", cat: "School Basketball", res: "WINNER (1st Place)", type: "winner" },
    { year: "2026-27", event: "Kreedotsav 2026-27 Marathon", cat: "Endurance Athletics", res: "SECOND POSITION (Silver)", type: "podium" },
    { year: "2024", event: "4th South India Level Championship", cat: "Martial Arts (71 kg)", res: "1st PLACE WINNER", type: "winner" },
    { year: "2024-25", event: "Annual Sports Basketball", cat: "School Basketball", res: "WINNER (1st Place)", type: "winner" },
    { year: "2023", event: "17th National Level Championship", cat: "Martial Arts (U-18)", res: "SECOND PLACE (Silver)", type: "podium" },
    { year: "2023", event: "3rd South India Level Championship", cat: "Kung Fu & Karate", res: "CHAMPIONSHIP TROPHY", type: "winner" },
    { year: "2023", event: "JCI Jasmine National Training", cat: "Leadership & Speaking", res: "CERTIFIED DELEGATE", type: "part" },
    { year: "2023-24", event: "Annual Sports Meet Discus Throw", cat: "Track & Field", res: "FIRST PLACE (Gold)", type: "winner" },
    { year: "2023-24", event: "Annual Sports Meet Javelin Throw", cat: "Track & Field", res: "SECOND PLACE (Silver)", type: "podium" },
    { year: "2023-24", event: "Annual Sports Meet Shot Put", cat: "Track & Field", res: "THIRD PLACE (Bronze)", type: "podium" },
    { year: "2023-24", event: "Annual Sports Meet Basketball", cat: "Team Athletics", res: "RUNNER UP", type: "podium" },
    { year: "2022-23", event: "Annual Sports Day Throwball", cat: "Team Athletics", res: "WINNER (1st Place)", type: "winner" },
    { year: "2022-23", event: "Annual Sports Day Shot Put", cat: "Track & Field", res: "SECOND PLACE (Silver)", type: "podium" },
    { year: "2022-23", event: "Annual Sports Day Hand Ball", cat: "Team Athletics", res: "RUNNER UP", type: "podium" },
    { year: "2019", event: "Chennai Fashion Contest Junior", cat: "Fashion Modeling", res: "RUNWAY PARTICIPANT", type: "part" },
    { year: "2018", event: "Junior's Fashion Week (JFW AW'18)", cat: "Fashion Runway", res: "RUNWAY SHOWCASE MODEL", type: "part" },
    { year: "2018", event: "13th All Style Open (Kumite)", cat: "Shotokan Karate", res: "SECOND PLACE (Silver)", type: "podium" },
    { year: "2018", event: "13th All Style Open (Kata)", cat: "Shotokan Karate", res: "SECOND PLACE (Silver)", type: "podium" },
    { year: "2018-19", event: "Intramural Sports Kho Kho", cat: "Team Athletics", res: "WINNERS (1st Place)", type: "winner" },
    { year: "2017-18", event: "Intramural Sports Potato Picking", cat: "Intramural", res: "3rd PLACE", type: "podium" },
    { year: "2018", event: "Agile Sports Academy Cricket Camp", cat: "Sports Coaching", res: "CERTIFIED PARTICIPANT", type: "part" },
    { year: "2017", event: "Agile Sports Academy Sports Camp", cat: "Sports Coaching", res: "CERTIFIED PARTICIPANT", type: "part" }
  ];

  let tY = 47;
  timelineRows.forEach((row, i) => {
    if (i % 2 === 0) {
      doc.setFillColor(248, 248, 250);
      doc.rect(15, tY - 3.5, 180, 8, 'F');
    }

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7);
    doc.setTextColor(...textDark);
    doc.text(row.year, 18, tY + 1.5);

    doc.setFont('helvetica', 'normal');
    doc.text(row.event, 35, tY + 1.5);
    doc.text(row.cat, 105, tY + 1.5);

    // Result color code
    if (row.type === 'winner') {
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(170, 120, 20); // Gold
    } else if (row.type === 'podium') {
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(90, 90, 130); // Silver/slate
    } else {
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(...textMuted);
    }
    doc.text(row.res, 145, tY + 1.5);

    tY += 8.2;
  });

  // Table note
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(7);
  doc.setTextColor(...textMuted);
  doc.text('Note: Complete certificate portfolio available with verification seals, stamps, and signatures in accompanying documentation.', 15, 276);

  // ==========================================
  // PAGE 7: EDUCATION, LEADERSHIP & ACTIVITIES
  // ==========================================
  doc.addPage();
  addHeaderFooter(7, 'Education & Collaborative Activities');

  doc.setFont('times', 'bold');
  doc.setFontSize(20);
  doc.setTextColor(...textDark);
  doc.text('Education, Leadership & World Record', 15, 24);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(...textMuted);
  doc.text('Academic background, youth leadership, environmental initiatives, and STEM competitions.', 15, 30);

  // Academic Profile Card
  doc.setFillColor(248, 248, 250);
  doc.setDrawColor(...gold);
  doc.setLineWidth(0.4);
  doc.roundedRect(15, 36, 180, 36, 2, 2, 'FD');

  doc.setFont('times', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(...darkGold);
  doc.text('EDUCATIONAL INSTITUTION & PROFILE', 20, 44);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(...textDark);
  doc.text('Institution: ', 20, 52);
  doc.setFont('helvetica', 'normal');
  doc.text('Sishya School (Affiliated to CBSE, New Delhi | Affiliation No: 1930142)', 40, 52);

  doc.setFont('helvetica', 'bold');
  doc.text('Campus: ', 20, 58);
  doc.setFont('helvetica', 'normal');
  doc.text('Mugalur Campus, D. Baranthur, Thally Road, Hosur - 635110, Tamil Nadu', 40, 58);

  doc.setFont('helvetica', 'bold');
  doc.text('Current Level: ', 20, 64);
  doc.setFont('helvetica', 'normal');
  doc.text('Senior Secondary Education (Class XII) | Student Leader in Sports & Collaborative Initiatives', 45, 64);

  // World Record & JCI Photos
  const wrCert = b64('public/assets/certificates/cert-world-record-bird-feeders-2026.jpg');
  const jciGroup = b64('public/assets/events/jci-jasmine-2023-presentation-future-education.jpg');

  if (wrCert) {
    doc.setDrawColor(210, 210, 215);
    doc.rect(15, 78, 55, 76);
    doc.addImage(wrCert, 'JPEG', 15, 78, 55, 76);
    doc.setFontSize(6.5);
    doc.setTextColor(...textMuted);
    doc.text('World Record Certificate (2026)', 15, 158);
  }

  if (jciGroup) {
    doc.setDrawColor(210, 210, 215);
    doc.rect(74, 78, 121, 55);
    doc.addImage(jciGroup, 'JPEG', 74, 78, 121, 55);
    doc.setFontSize(6.5);
    doc.setTextColor(...textMuted);
    doc.text('JCI Jasmine 2023: Presentation on "The Future of Education"', 74, 137);
  }

  // JCI Details text box
  doc.setFillColor(252, 252, 254);
  doc.setDrawColor(220, 220, 225);
  doc.roundedRect(74, 142, 121, 24, 1.5, 1.5, 'FD');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(...darkGold);
  doc.text('JCI India National Student Training Program (JASMINE 2023)', 78, 148);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(...textDark);
  const jciSummary = "Completed 3-day residential leadership academy in Kottayam, Kerala (April 2023). Presented case studies on digital education and early coding curricula before faculty and delegates.";
  doc.text(doc.splitTextToSize(jciSummary, 113), 78, 153);

  // Academic Competitions Table
  doc.setFont('times', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(...darkGold);
  doc.text('Documented STEM Talent & Olympiad Assessments', 15, 172);

  const olympiads = [
    { title: "International Olympiad of Science 2019", org: "Silverzone Olympiads, New Delhi", grade: "Class 5th", score: "51.56 / 100", rank: "State Rank: 655 | Class: 14th | Olympiad Rank: 9,281" },
    { title: "National Level Science Talent Search (NSTSE 2020)", org: "Unified Council, India", grade: "Class 5", score: "46.67%", rank: "State Rank: 1,381 | All India Rank: 13,511" },
    { title: "Unified Cyber Olympiad (UCO 2019)", org: "Unified Council, India", grade: "Class 5", score: "36.00%", rank: "All India Rank: 7,366" },
    { title: "National Level Science Talent Search (NSTSE 2019)", org: "Unified Council, India", grade: "Class 4", score: "41.67%", rank: "State Rank: 1,977 | All India Rank: 16,884" },
    { title: "International Olympiad of Science 2017", org: "Silverzone Foundation, New Delhi", grade: "Class 3rd", score: "47.56 / 100", rank: "State Rank: 441 | Class: 9th | Olympiad Rank: 7,209" },
    { title: "National Level Science Talent Search (NSTSE 2018)", org: "Unified Council, India", grade: "Class 3", score: "33.33%", rank: "State Rank: 2,336 | All India Rank: 22,161" }
  ];

  let oY = 179;
  olympiads.forEach((ol, i) => {
    doc.setFillColor(i % 2 === 0 ? 250 : 255, 250, 252);
    doc.setDrawColor(230, 230, 235);
    doc.roundedRect(15, oY, 180, 13, 1, 1, 'FD');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(...textDark);
    doc.text(ol.title, 20, oY + 5);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    doc.setTextColor(...textMuted);
    doc.text(`${ol.org} | ${ol.grade}`, 20, oY + 9.5);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(...darkGold);
    doc.text(`Score: ${ol.score}`, 120, oY + 5);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...textDark);
    doc.text(ol.rank, 120, oY + 9.5);

    oY += 15;
  });

  // ==========================================
  // PAGE 8: CONTACT INFORMATION & AUTHENTICITY
  // ==========================================
  doc.addPage();
  addHeaderFooter(8, 'Contact & Verification');

  doc.setFont('times', 'bold');
  doc.setFontSize(20);
  doc.setTextColor(...textDark);
  doc.text('Contact & Professional Engagement', 15, 24);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(...textMuted);
  doc.text('Available for university admissions, modeling agency representation, and sports academy inquiries.', 15, 30);

  // Key Certificates Matrix
  doc.setFont('times', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(...darkGold);
  doc.text('Selected Official Verification Documents', 15, 40);

  const c1 = b64('public/assets/certificates/cert-martial-arts-2024-4th-south-india-1st-place.jpg');
  const c2 = b64('public/assets/certificates/cert-martial-arts-2023-17th-national-2nd-place.jpg');
  const c3 = b64('public/assets/certificates/cert-sports-basketball-winners-2026-kreedotsav.jpg');
  const c4 = b64('public/assets/certificates/cert-jci-jasmine-2023-national-training.jpg');

  if (c1) {
    doc.setDrawColor(...gold);
    doc.rect(15, 45, 42, 32);
    doc.addImage(c1, 'JPEG', 15, 45, 42, 32);
    doc.setFontSize(6.5);
    doc.setTextColor(...textMuted);
    doc.text('2024 4th South India 1st Place', 15, 81);
  }

  if (c2) {
    doc.setDrawColor(...gold);
    doc.rect(61, 45, 42, 32);
    doc.addImage(c2, 'JPEG', 61, 45, 42, 32);
    doc.setFontSize(6.5);
    doc.setTextColor(...textMuted);
    doc.text('2023 17th National 2nd Place', 61, 81);
  }

  if (c3) {
    doc.setDrawColor(...gold);
    doc.rect(107, 45, 42, 32);
    doc.addImage(c3, 'JPEG', 107, 45, 42, 32);
    doc.setFontSize(6.5);
    doc.setTextColor(...textMuted);
    doc.text('Kreedotsav Basketball Winner', 107, 81);
  }

  if (c4) {
    doc.setDrawColor(...gold);
    doc.rect(153, 45, 42, 32);
    doc.addImage(c4, 'JPEG', 153, 45, 42, 32);
    doc.setFontSize(6.5);
    doc.setTextColor(...textMuted);
    doc.text('JCI Jasmine 2023 Training', 153, 81);
  }

  // Official Contact Channels Card
  doc.setFillColor(...charcoal);
  doc.roundedRect(15, 88, 180, 84, 3, 3, 'F');
  doc.setDrawColor(...gold);
  doc.setLineWidth(0.6);
  doc.roundedRect(15, 88, 180, 84, 3, 3, 'D');

  doc.setFont('times', 'bold');
  doc.setFontSize(14);
  doc.setTextColor(...gold);
  doc.text('CONNECT & INQUIRE', 105, 100, { align: 'center' });

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(220, 220, 225);
  doc.text('Inquiries for university admissions, modeling agency portfolios, and sports evaluations:', 105, 107, { align: 'center' });

  const contactLines = [
    { label: "Full Name:", val: "Hem Jayanth R." },
    { label: "Primary Location:", val: "Hosur, Tamil Nadu / Bengaluru Metropolitan Region, India" },
    { label: "Institution:", val: "Sishya School (Class XII Senior Secondary)" },
    { label: "Portfolio Web Link:", val: "https://hemjayanth-portfolio.web.app (or custom domain)" },
    { label: "Disciplines for Consideration:", val: "Fashion Runway | Martial Arts & Kata | Athletics & Basketball | Leadership" }
  ];

  let conY = 116;
  contactLines.forEach(cl => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(...gold);
    doc.text(cl.label, 25, conY);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(255, 255, 255);
    doc.text(cl.val, 80, conY);
    conY += 7.5;
  });

  // Statement of Authenticity Box
  doc.setFillColor(250, 250, 252);
  doc.setDrawColor(210, 210, 215);
  doc.roundedRect(15, 180, 180, 94, 2, 2, 'FD');

  doc.setFont('times', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(...darkGold);
  doc.text('STATEMENT OF AUTHENTICITY', 20, 192);

  const authP1 = "This portfolio compiles documented achievements, certified tournament results, runway showcase participation, and photographic evidence. All honors, certificates, and scores presented in this dossier are directly verifiable against school records, tournament merit rolls, and government-recognized martial arts federations.";
  const authP2 = "No achievements have been embellished or fabricated. All photographs feature Hem Jayanth R. in verified events, runway showcases, and sports academies.";

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(...textDark);
  doc.text(doc.splitTextToSize(authP1, 170), 20, 200);
  doc.text(doc.splitTextToSize(authP2, 170), 20, 218);

  // Signature Block
  doc.setDrawColor(...gold);
  doc.setLineWidth(0.5);
  doc.line(20, 252, 70, 252);

  doc.setFont('times', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(...textDark);
  doc.text('Hem Jayanth R.', 20, 258);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(...textMuted);
  doc.text('Candidate & Portfolio Owner', 20, 263);

  doc.line(130, 252, 185, 252);
  doc.setFont('times', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(...textDark);
  doc.text('Document Certified', 130, 258);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(...textMuted);
  doc.text('Date of Compilation: 2026', 130, 263);

  // Save PDF to public folder
  const outputPath = path.join(process.cwd(), 'public', 'Hem_Jayanth_R_Portfolio.pdf');
  doc.save(outputPath);
  console.log('Successfully generated Portfolio PDF at:', outputPath, 'Size:', fs.statSync(outputPath).size, 'bytes');
}

generatePortfolioPdf();
