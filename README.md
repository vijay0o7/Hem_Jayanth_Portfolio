<<<<<<< HEAD
# Hem Jayanth R. – Professional Portfolio Website & Downloadable Dossier

An editorial-grade, modern, and fully responsive personal portfolio website and downloadable PDF dossier for **Hem Jayanth R.**

Designed for presentation to university admissions committees, talent and modeling agencies, sports academies, and professional organizations.

---

## 1. Key Design Features & Visual Identity

- **Apple-Inspired Editorial Minimalism**: Generous whitespace, refined charcoal/black background (`#0a0a0c`), subtle warm metallic gold accents (`#d4af37`), and editorial serif typography.
- **Authentic Photographic Showcase**: Features original, unedited photographs of Hem Jayanth across fashion runways, competitive martial arts championships, 10m precision rifle shooting, recurve archery, and daily yoga practice.
- **Strictly Verified Achievements**: Every documented recognition is backed by original certificates with explicit distinction between 1st Place / Wins, State / National Podiums (Silver/Bronze), and Certified Participations.
- **Interactive Lightbox**: Fullscreen inspection modal with keyboard navigation (Esc, Arrow Left, Arrow Right), image zoom, metadata tags, and high-resolution viewing.
- **Standalone Downloadable PDF Dossier**: Formatted A4, 8-page high-resolution PDF (`public/Hem_Jayanth_R_Portfolio.pdf`) generated directly with embedded photographs, verified score tables, and signature blocks.
- **Live Editable Academic & Contact Fields**: The website features interactive fields for Educational Institution, Grade, Stream, Location, Email, and Social links with instant `localStorage` persistence.

---

## 2. Project Architecture & Technologies

- **Frontend Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/) with custom editorial colors and glassmorphism
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Iconography**: [Lucide React](https://lucide.dev/)
- **Celebration Effects**: [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)
- **PDF Generation**: [jsPDF](https://github.com/parallax/jsPDF)

---

## 3. Asset Directory Organization

All supplied photographs and multi-page certificate scans have been organized into the required folder structure with upright orientation:

```
public/
  Hem_Jayanth_R_Portfolio.pdf      <- Downloadable 8-page A4 PDF portfolio
  assets/
    profile/                       <- Curated profile portraits (Hero, Athletic, Fashion, Yoga)
    fashion/                       <- Junior's Fashion Week (Hugo Boss, FM) & Chennai Contest
    martial-arts/                  <- South India & National championships, stage & team photos
    sports/                        <- 10m Precision Air Rifle Shooting range photography
    archery/                       <- Recurve bow lane training photography
    yoga/                          <- Vrikshasana, Uttanasana, Hasta Uttanasana, Ashwa Sanchalanasana
    events/                        <- JCI Jasmine 2023 presentation & valedictory photographs
    certificates/                  <- 30 verified scans (World Record, Martial Arts, Sports, Olympiads)
```

> **Note on Original Files**: All original uploaded documents and scans in `assets/` remain 100% preserved and untouched.

---

## 4. How to Run Locally

### Prerequisites
- Node.js (v18+)
- npm or pnpm

### Quick Start
```bash
# 1. Install dependencies
npm install

# 2. Start the local development server
npm run dev

# 3. Open in browser
# Navigate to: http://localhost:5173
```

### Production Build
```bash
# Compile optimized static bundle into dist/
npm run build

# Preview production build locally
npm run preview
```

---

## 5. How to Regenerate the PDF Portfolio

The PDF portfolio is built programmatically to guarantee crisp typography, exact A4 margins, and high-resolution image embeddings without relying on fragile browser screenshot tools.

To regenerate or update the PDF:
```bash
node scripts/generatePdf.js
```
The script will output the updated PDF directly to `public/Hem_Jayanth_R_Portfolio.pdf`.

---

## 6. How to Update Content & Achievements

### Updating Achievements, Events, or Certifications
Edit `src/data/portfolioData.js`:
- `personal`: Name, tagline, bio, contact details.
- `academicInfo`: School, CBSE affiliation, grade, leadership.
- `achievementsTimeline`: Chronological achievements list. Each item supports:
  - `year`: e.g. `"2024"`
  - `date`: e.g. `"25 August 2024"`
  - `title`: Event name
  - `category`: Category tag
  - `result`: Outcome text
  - `resultType`: `"winner"` (Gold), `"podium"` (Silver/Bronze), or `"participation"`
  - `certificateImage`: Path in `/assets/certificates/`
- `academicCompetitions`: Scores, state ranks, percentiles for Olympiads and NSTSE exams.

### Adding New Photographs
1. Place the new photograph in the appropriate subdirectory inside `public/assets/` (e.g., `public/assets/sports/`).
2. Add the reference in `src/data/portfolioData.js`.
3. If you want it included in the PDF, update `scripts/generatePdf.js` and run `node scripts/generatePdf.js`.

---

## 7. Deployment Instructions

The production build in `dist/` is completely static and can be deployed anywhere in minutes:

### Option A: Vercel (Recommended)
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project root.
3. Accept defaults. Deploys with instant global CDN and custom domain support.

### Option B: Netlify
1. Drag and drop the `dist/` folder onto [Netlify Drop](https://app.netlify.com/drop).
2. Or connect your GitHub repository and set:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`

### Option C: GitHub Pages
1. In `vite.config.js`, set `base: '/<repository-name>/'` (if not using custom domain).
2. Run `npm run build`.
3. Push `dist/` to the `gh-pages` branch.

### Option D: Firebase Hosting
1. Run `npm i -g firebase-tools`
2. Run `firebase login` and `firebase init hosting`
3. Specify `dist` as the public directory, configure as a single-page app (`y`).
4. Run `firebase deploy`.

---

## 8. Verified Achievement Roll

| Year | Event / Honor | Category | Verified Result |
| :--- | :--- | :--- | :--- |
| **2026** | **Virtue Book of World Records** | Environmental / Group | **World Record Holder** |
| **2026-27** | **Kreedotsav 2026-27 Basketball** | School Athletics | **Winner (1st Place)** |
| **2026-27** | **Kreedotsav 2026-27 Marathon** | Long Distance Athletics | **Second Position (Silver)** |
| **2024** | **4th South India Level Open Championship** | Martial Arts (Weapon Kata) | **1st Place Winner** |
| **2024-25** | **Annual Sports Meet Basketball** | School Athletics | **Winner (1st Place)** |
| **2023** | **17th National Level Open Championship** | Martial Arts (Weapon Kata, U-18) | **Second Place (Silver)** |
| **2023** | **3rd South India Level Open Championship** | Martial Arts | **Championship Trophy** |
| **2023** | **JCI Jasmine 2023 National Training** | Leadership & Public Speaking | **Certified Delegate** |
| **2023-24** | **Annual Sports Meet Discus Throw** | Track & Field | **First Place (Gold)** |
| **2023-24** | **Annual Sports Meet Javelin Throw** | Track & Field | **Second Place (Silver)** |
| **2023-24** | **Annual Sports Meet Shot Put** | Track & Field | **Third Place (Bronze)** |
| **2023-24** | **Annual Sports Meet Basketball & Handball** | Team Athletics | **Runner-up (Silver)** |
| **2022-23** | **Annual Sports Day Throwball** | Team Athletics | **Winner (1st Place)** |
| **2022-23** | **Annual Sports Day Shot Put & Handball** | Track & Field / Athletics | **Second Place / Runner** |
| **2019** | **Chennai Fashion Contest Junior** | Fashion & Runway | **Runway Participant** |
| **2018** | **Junior's Fashion Week (AW'18 Bengaluru)** | Fashion Runway | **Runway Showcase Model** |
| **2018** | **13th All Style Open Championship** | Shotokan Karate (Kumite) | **Second Place (Silver)** |
| **2018** | **13th All Style Open Championship** | Shotokan Karate (Kata) | **Second Place (Silver)** |
| **2018-19** | **Intramural Sports Kho Kho** | School Athletics | **Winners (1st Place)** |
| **2017–18** | **Agile Sports Academy Cricket Camps** | Sports Coaching | **Certified Participant** |

---
*Dossier compiled with verified original documents. All rights reserved.*
=======
# Hem_Jayanth_Portfolio
Personal &amp; Professional Portfolio
>>>>>>> 02c9774b1696d707d44d0605d76d3406930e5299
