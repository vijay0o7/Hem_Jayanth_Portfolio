export const portfolioData = {
  personal: {
    name: "Hem Jayanth R.",
    tagline: "An individual driven by creativity, discipline and continuous growth.",
    subtagline: "Versatile talent spanning Fashion Runway, Martial Arts Championships, Precision Sports, Yoga, and Academic Excellence.",
    status: "Open for Admissions, Modeling Agency Representation, Academy & Collegiate Opportunities",
    location: "Hosur, Tamil Nadu / Bengaluru Metropolitan Region, India",
    email: "hemjayanth.r@example.com", // Verified placeholder / editable
    phone: "+91 98XXX XXXXX", // Masked placeholder / editable
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    bio: [
      "Hem Jayanth R. represents a modern balance of creative poise, athletic rigor, and intellectual curiosity. From commanding major fashion runways at Junior's Fashion Week to earning top podium finishes at National and South India Level Martial Arts Championships, he embodies consistency and self-discipline.",
      "His athletic pursuit extends across martial arts forms (Kung Fu & Shotokan Karate), precision target shooting, traditional archery, and yoga flexibility. Beyond physical discipline, he has actively represented his institution in national youth leadership programs like JCI Jasmine and contributed to a world record environmental initiative."
    ]
  },

  academicInfo: {
    institution: "Sishya School",
    campus: "Mugalur Campus, Thally Road, Hosur, Tamil Nadu",
    affiliation: "Central Board of Secondary Education (CBSE), New Delhi",
    currentGrade: "Senior Secondary (Class XII)",
    fieldsOfStudy: "Science & Technology / Secondary Education",
    worldRecord: "Virtue Book of World Records Record-Holder (Largest Display of Bird Feeders Using Reused Products, 2026)",
    leadership: "Active Delegate & Speaker at JCI Jasmine National Student Leadership Program"
  },

  stats: [
    { label: "Championship Titles & Podiums", value: "6+" },
    { label: "School & Inter-School Trophies", value: "14+" },
    { label: "Fashion Week Runways", value: "2 Major Showcases" },
    { label: "World Record Distinction", value: "1 Verified" },
  ],

  disciplines: [
    {
      id: "fashion",
      title: "Fashion & Runway",
      subtitle: "Editorial Poise & Stage Presence",
      description: "Showcasing premier youth collections on national stages including Junior's Fashion Week and Chennai Fashion Contest Junior.",
      highlight: "Featured runway walker for international and premium brands such as Hugo Boss, Flying Machine, and U.S. Polo Assn. Kids.",
      image: "/assets/fashion/jfw-runway-hugo-boss.jpg",
      tags: ["Runway", "Editorial", "Junior's Fashion Week", "Brand Ambassador"]
    },
    {
      id: "martial-arts",
      title: "Martial Arts & Kung Fu",
      subtitle: "Discipline, Precision & Kata Mastery",
      description: "Extensive competitive training in Chinese Shaolin Kung Fu and Shotokan Karate with verified podium finishes across State and National levels.",
      highlight: "1st Place Winner in Weapon Kata at the 4th South India Level Championship 2024 and 2nd Place in the 17th National Championship 2023.",
      image: "/assets/martial-arts/championship-2023-trophy-stage.jpg",
      tags: ["Kung Fu", "Shotokan Karate", "Weapon Kata", "National Competitor"]
    },
    {
      id: "sports",
      title: "Target Sports & Athletics",
      subtitle: "Focus, Hand-Eye Coordination & Stamina",
      description: "Well-rounded sports portfolio including precision 10m target rifle shooting, traditional recurve archery, basketball, and track & field events.",
      highlight: "Consistently medaled across Javelin, Discus Throw, Shot Put, Marathon, and Basketball in annual athletic meets.",
      image: "/assets/sports/shooting-range-profile-focus.jpg",
      tags: ["Rifle Shooting", "Archery", "Basketball", "Track & Field"]
    },
    {
      id: "yoga",
      title: "Yoga & Flexibility",
      subtitle: "Mind-Body Alignment & Core Balance",
      description: "Daily commitment to yogic asanas, mental focus, spinal health, and flexibility development.",
      highlight: "Practicing complex balance postures including Vrikshasana (Tree Pose), Uttanasana, Hasta Uttanasana, and Ashwa Sanchalanasana.",
      image: "/assets/yoga/yoga-vrikshasana-studio-smile.jpg",
      tags: ["Asanas", "Flexibility", "Core Stability", "Meditation"]
    }
  ],

  fashionItems: [
    {
      id: "jfw-boss",
      title: "Junior's Fashion Week Runway – Hugo Boss",
      location: "JW Marriott, Bengaluru",
      date: "18 November 2018",
      image: "/assets/fashion/jfw-runway-hugo-boss.jpg",
      brand: "Hugo Boss (Kids Around)",
      caption: "Editorial runway walk presenting Hugo Boss navy knitwear and denim at Junior's Fashion Week Autumn/Winter Showcase.",
      type: "Runway Photograph"
    },
    {
      id: "jfw-waving",
      title: "Audience Walk & Wave – JFW Showcase",
      location: "JW Marriott, Bengaluru",
      date: "18 November 2018",
      image: "/assets/fashion/jfw-runway-waving.jpg",
      brand: "Junior's Fashion Week Collection",
      caption: "Charismatic runway presentation in printed shirt and denim, greeting the audience and fashion photographers.",
      type: "Runway Photograph"
    },
    {
      id: "jfw-group",
      title: "Runway Ensemble Showcase",
      location: "JW Marriott, Bengaluru",
      date: "18 November 2018",
      image: "/assets/fashion/jfw-runway-group-walk.jpg",
      brand: "Junior's Fashion Week Designers",
      caption: "Leading the runway formation alongside fellow junior models during the grand designer walk.",
      type: "Runway Photograph"
    },
    {
      id: "jfw-flying-machine",
      title: "Flying Machine Boyzone Showcase",
      location: "JW Marriott, Bengaluru",
      date: "18 November 2018",
      image: "/assets/fashion/jfw-runway-pose-flying-machine.jpg",
      brand: "Flying Machine Boyzone",
      caption: "Runway turn and pose showcasing Flying Machine youth apparel against the digital stage backdrop.",
      type: "Runway Photograph"
    },
    {
      id: "jfw-cert",
      title: "Junior's Fashion Week – Certificate of Participation",
      location: "Bengaluru",
      date: "18 November 2018",
      image: "/assets/fashion/jfw-bangalore-2018-certificate.jpg",
      brand: "U.S. Polo Assn. Kids / JFW",
      caption: "Official Certificate of Participation certifying spectacular showcase participation at Marriott Bengaluru.",
      type: "Official Certificate"
    },
    {
      id: "chennai-cert",
      title: "Chennai Fashion Contest Junior – Master & Miss Kids 2019",
      location: "Chennai",
      date: "4 May 2019",
      image: "/assets/fashion/chennai-fashion-contest-junior-2019-certificate.jpg",
      brand: "Chennai Fashion Contest Junior",
      caption: "Certificate of Participation in Master & Miss Kids 2019 organised by Chennai Fashion Contest Junior.",
      type: "Official Certificate"
    }
  ],

  martialArtsItems: [
    {
      id: "ma-championship-2023",
      title: "3rd South India Level Open Championship 2023",
      date: "5 November 2023",
      location: "Adhiyamaan College Indoor Stadium, Hosur",
      organizer: "Shaolin Dragon Wushu Kung Fu International & Starlee Dynamic Shotokan Karate School",
      image: "/assets/martial-arts/championship-2023-trophy-stage.jpg",
      caption: "Hem Jayanth holding the championship trophy and certificate on stage with coaches and fellow participants.",
      category: "Kung Fu & Martial Arts"
    },
    {
      id: "ma-team",
      title: "Shaolin Dragon Kung Fu Academy Team",
      date: "2023",
      location: "Academy Training Center",
      organizer: "Shaolin Dragon Kung Fu",
      image: "/assets/martial-arts/kungfu-team-outdoor-portrait.jpg",
      caption: "Team portrait with Grandmaster, instructor, and peers in traditional kung fu uniforms (Hem Jayanth on the right).",
      category: "Discipline & Team Training"
    },
    {
      id: "ma-podium",
      title: "Stage Presentation & Trophy Ceremony",
      date: "5 November 2023",
      location: "Hosur",
      organizer: "South India Martial Arts Council",
      image: "/assets/martial-arts/championship-2023-winners-podium.jpg",
      caption: "Award presentation celebrating dedication, agility, and kata performance on stage.",
      category: "Championship Podium"
    },
    {
      id: "ma-celebration",
      title: "Coach Mentorship & Appreciation",
      date: "5 November 2023",
      location: "Hosur",
      organizer: "Tournament Committee",
      image: "/assets/martial-arts/championship-2023-award-celebration.jpg",
      caption: "Moment of coach guidance and recognition following successful championship events.",
      category: "Mentorship"
    }
  ],

  sportsItems: [
    {
      id: "target-shooting-1",
      title: "10m Air Rifle Precision Target Shooting",
      category: "Target Sports",
      image: "/assets/sports/shooting-range-aim-full.jpg",
      caption: "Practicing marksmanship stance and trigger discipline with precision optic scoped rifle at 10m lane."
    },
    {
      id: "target-shooting-2",
      title: "Athletic Focus & Mental Concentration",
      category: "Target Sports",
      image: "/assets/sports/shooting-range-profile-focus.jpg",
      caption: "Profile view highlighting respiratory control and alignment on target."
    },
    {
      id: "archery-1",
      title: "Traditional Recurve Archery Practice",
      category: "Archery",
      image: "/assets/archery/archery-range-recurve-bow.jpg",
      caption: "Archery lane training evaluating target groupings and recurve draw posture."
    }
  ],

  yogaItems: [
    {
      id: "yoga-namaste",
      title: "Vrikshasana (Tree Pose) – Anjali Mudra",
      category: "Balance & Stillness",
      image: "/assets/yoga/yoga-vrikshasana-tree-pose-namaste.jpg",
      description: "One-legged standing balance improving stability, neuromuscular coordination, and postural awareness."
    },
    {
      id: "yoga-meditation",
      title: "Vrikshasana – Dhyana Meditation",
      category: "Mental Equanimity",
      image: "/assets/yoga/yoga-vrikshasana-meditation.jpg",
      description: "Internal focus and calm during tree pose posture with eyes closed."
    },
    {
      id: "yoga-smile",
      title: "Vrikshasana – Studio Routine",
      category: "Daily Practice",
      image: "/assets/yoga/yoga-vrikshasana-studio-smile.jpg",
      description: "Regular home studio practice alongside training equipment and tournament honors."
    },
    {
      id: "yoga-forward-fold",
      title: "Uttanasana (Standing Forward Fold)",
      category: "Hamstring & Spinal Flexibility",
      image: "/assets/yoga/yoga-uttanasana-forward-fold.jpg",
      description: "Deep hamstring stretch maintaining straight leg alignment and palms grounding into mat."
    },
    {
      id: "yoga-backbend",
      title: "Hasta Uttanasana (Raised Hands Backbend)",
      category: "Thoracic Extension",
      image: "/assets/yoga/yoga-hasta-uttanasana-backbend.jpg",
      description: "Chest expansion and spinal arch improving posture and lung capacity."
    },
    {
      id: "yoga-lunge",
      title: "Ashwa Sanchalanasana (Equestrian Lunge)",
      category: "Hip Mobility & Core",
      image: "/assets/yoga/yoga-ashwa-sanchalanasana-low-lunge.jpg",
      description: "Deep low lunge developing hip flexor mobility and lower body strength."
    }
  ],

  activities: [
    {
      id: "world-record-2026",
      title: "Virtue Book of World Records – Record Holder",
      organization: "Virtue Book of World Records",
      date: "5 January 2026",
      location: "Sishya School, Hosur",
      description: "Participated and created an official World Record for the 'Largest Display of Bird Feeders Using Reused Products' alongside 860 students, creating 1,870 bird feeders arranged into a giant bird formation on National Bird Day.",
      badge: "World Record",
      certificate: "/assets/certificates/cert-world-record-bird-feeders-2026.jpg"
    },
    {
      id: "jci-jasmine-2023",
      title: "JCI Jasmine 2023 – National Student Training Program",
      organization: "JCI India (Hosted by JCI Kottayam Angel City)",
      date: "28 – 30 April 2023",
      location: "Hotel Arcadia, Kottayam, Kerala",
      description: "Selected participant for Jaycee Academy of Smart Initiative for Empowerment (JASMINE 2023). Presented collaborative research paper on 'The Future of Education' including case studies on early coding curricula.",
      badge: "Leadership & Public Speaking",
      images: [
        "/assets/events/jci-jasmine-2023-presentation-future-education.jpg",
        "/assets/events/jci-jasmine-2023-hem-presentation-podium.jpg",
        "/assets/events/jci-jasmine-2023-valedictory-group.jpg"
      ],
      certificate: "/assets/certificates/cert-jci-jasmine-2023-national-training.jpg"
    }
  ],

  // VERIFIED TIMELINE & ACHIEVEMENTS: Strictly confirmed by certificates
  achievementsTimeline: [
    {
      year: "2026",
      date: "January 2026",
      title: "Virtue Book of World Records Record",
      category: "Environmental & Collaborative World Record",
      result: "Official World Record Holder",
      resultType: "winner",
      organization: "Virtue Book of World Records / Sishya School",
      details: "Created record for Largest Display of Bird Feeders Using Reused Products (1,870 feeders, 860 students).",
      certificateImage: "/assets/certificates/cert-world-record-bird-feeders-2026.jpg"
    },
    {
      year: "2026-27",
      date: "Academic Year 2026-27",
      title: "Kreedotsav 2026-27 – Basketball Tournament",
      category: "School Sports Championship",
      result: "Winner (1st Place)",
      resultType: "winner",
      organization: "Sishya School (Class XII)",
      details: "Led class team to championship victory in intramural basketball tournament.",
      certificateImage: "/assets/certificates/cert-sports-basketball-winners-2026-kreedotsav.jpg"
    },
    {
      year: "2026-27",
      date: "Academic Year 2026-27",
      title: "Kreedotsav 2026-27 – Marathon",
      category: "School Endurance Athletics",
      result: "Second Position (Silver)",
      resultType: "podium",
      organization: "Sishya School (Class XII)",
      details: "Secured 2nd position in senior boys distance marathon competition.",
      certificateImage: "/assets/certificates/cert-sports-marathon-2nd-2026-kreedotsav.jpg"
    },
    {
      year: "2024",
      date: "25 August 2024",
      title: "4th South India Level Kung-Fu, Karate, Taekwondo Championship",
      category: "Martial Arts Championship",
      result: "1st Place Winner",
      resultType: "winner",
      organization: "Shaolin Dragon Wushu Kung Fu / Starlee Dynamic Shotokan / Fit India",
      details: "Secured 1st Place in Colour Belt / Black Belt Weapon Kata (71 kg/age category) at Adhiyamaan Indoor Stadium.",
      certificateImage: "/assets/certificates/cert-martial-arts-2024-4th-south-india-1st-place.jpg"
    },
    {
      year: "2024-25",
      date: "Academic Year 2024-25",
      title: "Annual Sports Meet – Basketball Tournament",
      category: "School Sports Championship",
      result: "Winner (1st Place)",
      resultType: "winner",
      organization: "Sishya School (Class X)",
      details: "Secured 1st position in competitive basketball tournament.",
      certificateImage: "/assets/certificates/cert-sports-basketball-winner-2024-25.jpg"
    },
    {
      year: "2023",
      date: "20 August 2023",
      title: "17th National Level Kung-Fu, Karate & Silambam Championship",
      category: "National Martial Arts Championship",
      result: "Second Place (Under 18)",
      resultType: "podium",
      organization: "Chinese Shaolin Kung-Fu Children's Skill Development Center / Fit India",
      details: "Secured 2nd Place Under 18 in Weapon Kata (14-Years category) at Town Hall Tirur, Kerala.",
      certificateImage: "/assets/certificates/cert-martial-arts-2023-17th-national-2nd-place.jpg"
    },
    {
      year: "2023",
      date: "5 November 2023",
      title: "3rd South India Level Kung-Fu, Karate & Taekwondo Championship",
      category: "Regional Martial Arts Championship",
      result: "Championship Trophy & Merit",
      resultType: "winner",
      organization: "Shaolin Dragon Wushu Kung Fu International",
      details: "Competed and earned championship trophy at Adhiyamaan Indoor Stadium, Hosur.",
      certificateImage: "/assets/martial-arts/championship-2023-trophy-stage.jpg"
    },
    {
      year: "2023",
      date: "28–30 April 2023",
      title: "JCI Jasmine 2023 – National Student Training Program",
      category: "Leadership & Empowerment",
      result: "Certified Delegate & Speaker",
      resultType: "participation",
      organization: "JCI India (Jaycee Academy of Smart Initiative for Empowerment)",
      details: "Successfully completed intensive 3-day student empowerment program and presented educational case studies.",
      certificateImage: "/assets/certificates/cert-jci-jasmine-2023-national-training.jpg"
    },
    {
      year: "2023-24",
      date: "Academic Year 2023-24",
      title: "Annual Sports Meet – Discus Throw",
      category: "Track & Field",
      result: "1st Place (Gold)",
      resultType: "winner",
      organization: "Sishya School (Class IX)",
      details: "Clinched 1st place in boys discus throw competition.",
      certificateImage: "/assets/certificates/cert-sports-discus-throw-1st-2023-24.jpg"
    },
    {
      year: "2023-24",
      date: "Academic Year 2023-24",
      title: "Annual Sports Meet – Javelin Throw",
      category: "Track & Field",
      result: "Second Position (Silver)",
      resultType: "podium",
      organization: "Sishya School (Class IX)",
      details: "Secured 2nd position in boys javelin throw.",
      certificateImage: "/assets/certificates/cert-sports-javelin-throw-2nd-2023-24.jpg"
    },
    {
      year: "2023-24",
      date: "Academic Year 2023-24",
      title: "Annual Sports Meet – Shot Put",
      category: "Track & Field",
      result: "Third Position (Bronze)",
      resultType: "podium",
      organization: "Sishya School (Class IX)",
      details: "Secured 3rd position in boys shot put.",
      certificateImage: "/assets/certificates/cert-sports-shot-put-3rd-2023-24.jpg"
    },
    {
      year: "2023-24",
      date: "Academic Year 2023-24",
      title: "Annual Sports Meet – Basketball & Handball",
      category: "Team Athletics",
      result: "Runner Up (2nd)",
      resultType: "podium",
      organization: "Sishya School (Class IX)",
      details: "Secured Runner-up positions in both Basketball and Handball tournament finals.",
      certificateImage: "/assets/certificates/cert-sports-basketball-runner-2023-24.jpg"
    },
    {
      year: "2022-23",
      date: "Academic Year 2022-23",
      title: "Annual Sports Day – Throwball",
      category: "Team Athletics",
      result: "Winner (1st Place)",
      resultType: "winner",
      organization: "Sishya School (Class VIII - Rubies)",
      details: "Winner in intramural throwball championship.",
      certificateImage: "/assets/certificates/cert-sports-throwball-winner-2022-23.jpg"
    },
    {
      year: "2022-23",
      date: "Academic Year 2022-23",
      title: "Annual Sports Day – Shot Put & Handball",
      category: "Track & Field / Athletics",
      result: "Second Position / Runner",
      resultType: "podium",
      organization: "Sishya School (Class VIII)",
      details: "Secured 2nd in Shot Put and Runner position in Handball.",
      certificateImage: "/assets/certificates/cert-sports-shot-put-2nd-2022-23.jpg"
    },
    {
      year: "2019",
      date: "4 May 2019",
      title: "Chennai Fashion Contest Junior – Master & Miss Kids 2019",
      category: "Fashion & Modeling",
      result: "Official Runway Participant",
      resultType: "participation",
      organization: "Chennai Fashion Contest Junior",
      details: "Selected runway model in junior fashion category.",
      certificateImage: "/assets/fashion/chennai-fashion-contest-junior-2019-certificate.jpg"
    },
    {
      year: "2018",
      date: "18 November 2018",
      title: "Junior's Fashion Week (AW'18 Bengaluru)",
      category: "Fashion & Modeling",
      result: "Runway Showcase Model",
      resultType: "participation",
      organization: "Junior's Fashion Week / U.S. Polo Assn. Kids",
      details: "Selected runway model showcasing luxury international designer collections at JW Marriott Bengaluru.",
      certificateImage: "/assets/fashion/jfw-bangalore-2018-certificate.jpg"
    },
    {
      year: "2018",
      date: "2 December 2018",
      title: "13th All Style Open Championship 2018 (Kumite)",
      category: "Shotokan Karate Championship",
      result: "Second Place (Silver)",
      resultType: "podium",
      organization: "Sports Shotokan Karate-Do Federation / South India Karate-Do",
      details: "Secured Second Place in Kumite (Below 20 weight category) in Bangalore.",
      certificateImage: "/assets/certificates/cert-martial-arts-2018-shotokan-kumite-2nd.jpg"
    },
    {
      year: "2018",
      date: "2 December 2018",
      title: "13th All Style Open Championship 2018 (Kata)",
      category: "Shotokan Karate Championship",
      result: "Second Place (Silver)",
      resultType: "podium",
      organization: "Sports Shotokan Karate-Do Federation / South India Karate-Do",
      details: "Secured Second Place in Kata (Below 10 yrs category) in Bangalore.",
      certificateImage: "/assets/certificates/cert-martial-arts-2018-shotokan-kata-2nd.jpg"
    },
    {
      year: "2018-19",
      date: "Academic Year 2018-19",
      title: "Intramural Sports – Kho Kho",
      category: "Traditional Athletics",
      result: "Winners (1st Place)",
      resultType: "winner",
      organization: "Sishya School (Std IV-B)",
      details: "Winner in boys Kho Kho intramural championship.",
      certificateImage: "/assets/certificates/cert-sports-khokho-winner-2018-19.jpg"
    },
    {
      year: "2018",
      date: "May 2018",
      title: "Agile Sports Academy Cricket Training Camp",
      category: "Sports Development",
      result: "Camp Participant",
      resultType: "participation",
      organization: "Agile Sports Academy, Hosur",
      details: "Completed multi-week structured cricket coaching camp at ASA Andhivadi.",
      certificateImage: "/assets/certificates/cert-sports-cricket-camp-2018.jpg"
    },
    {
      year: "2017",
      date: "May 2017",
      title: "Agile Sports Academy Sports Camp",
      category: "Sports Development",
      result: "Camp Participant",
      resultType: "participation",
      organization: "Agile Sports Academy, Hosur",
      details: "Completed sports training camp at Andhivadi Stadium.",
      certificateImage: "/assets/certificates/cert-sports-cricket-camp-2017.jpg"
    }
  ],

  // ACADEMIC OLYMPIADS & TALENT EXAMINATIONS (Strictly sourced from Unified Council & Silverzone docs)
  academicCompetitions: [
    {
      id: "olympiad-science-2019",
      title: "International Olympiad of Science 2019",
      organization: "Silverzone Olympiads, New Delhi",
      classGrade: "Class 5th",
      score: "51.56 / 100",
      rank: "State Rank: 655 | Class Rank: 14th | Olympiad Rank: 9,281",
      date: "2019",
      certificate: "/assets/certificates/cert-academic-science-olympiad-2019.jpg"
    },
    {
      id: "nstse-2020",
      title: "National Level Science Talent Search Examination (NSTSE 2020)",
      organization: "Unified Council, India",
      classGrade: "Class 5",
      score: "46.67%",
      rank: "State Rank: 1,381 (Tamil Nadu) | All India Rank: 13,511",
      date: "4 December 2019",
      certificate: "/assets/certificates/cert-academic-nstse-2020.jpg"
    },
    {
      id: "uco-2019",
      title: "Unified Cyber Olympiad (UCO 2019)",
      organization: "Unified Council, India",
      classGrade: "Class 5",
      score: "36.00%",
      rank: "All India Rank: 7,366",
      date: "17 September 2019",
      certificate: "/assets/certificates/cert-academic-cyber-olympiad-2019.jpg"
    },
    {
      id: "nstse-2019",
      title: "National Level Science Talent Search Examination (NSTSE 2019)",
      organization: "Unified Council, India",
      classGrade: "Class 4",
      score: "41.67%",
      rank: "State Rank: 1,977 (Tamil Nadu) | All India Rank: 16,884",
      date: "7 December 2018",
      certificate: "/assets/certificates/cert-academic-nstse-2019.jpg"
    },
    {
      id: "olympiad-science-2017",
      title: "International Olympiad of Science 2017",
      organization: "Silverzone Foundation, New Delhi",
      classGrade: "Class 3rd",
      score: "47.56 / 100",
      rank: "State Rank: 441 | Class Rank: 9th | Olympiad Rank: 7,209",
      date: "January 2018",
      certificate: "/assets/certificates/cert-academic-science-olympiad-2017.jpg"
    },
    {
      id: "nstse-2018",
      title: "National Level Science Talent Search Examination (NSTSE 2018)",
      organization: "Unified Council, India",
      classGrade: "Class 3",
      score: "33.33%",
      rank: "State Rank: 2,336 | All India Rank: 22,161",
      date: "24 January 2018",
      certificate: "/assets/certificates/cert-academic-nstse-2018.jpg"
    },
    {
      id: "uco-2017",
      title: "Unified Cyber Olympiad (UCO 2017)",
      organization: "Unified Council, India",
      classGrade: "Class 3",
      score: "26.00%",
      rank: "National Level Participant",
      date: "11 October 2017",
      certificate: "/assets/certificates/cert-academic-cyber-olympiad-2017.jpg"
    }
  ],

  // ALL VERIFIED CERTIFICATES FOR GALLERY FILTER
  allCertificates: [
    { title: "Virtue Book of World Records Certificate", category: "World Record", year: "2026", image: "/assets/certificates/cert-world-record-bird-feeders-2026.jpg", badge: "World Record" },
    { title: "4th South India Championship - 1st Place Weapon Kata", category: "Martial Arts", year: "2024", image: "/assets/certificates/cert-martial-arts-2024-4th-south-india-1st-place.jpg", badge: "1st Place Winner" },
    { title: "17th National Championship - 2nd Place Weapon Kata", category: "Martial Arts", year: "2023", image: "/assets/certificates/cert-martial-arts-2023-17th-national-2nd-place.jpg", badge: "2nd Place Under 18" },
    { title: "13th All Style Championship - Kumite 2nd Place", category: "Martial Arts", year: "2018", image: "/assets/certificates/cert-martial-arts-2018-shotokan-kumite-2nd.jpg", badge: "2nd Place Silver" },
    { title: "13th All Style Championship - Kata 2nd Place", category: "Martial Arts", year: "2018", image: "/assets/certificates/cert-martial-arts-2018-shotokan-kata-2nd.jpg", badge: "2nd Place Silver" },
    { title: "JCI Jasmine National Training Program", category: "Events", year: "2023", image: "/assets/certificates/cert-jci-jasmine-2023-national-training.jpg", badge: "Student Delegate" },
    { title: "Junior's Fashion Week Bangalore Showcase", category: "Fashion", year: "2018", image: "/assets/certificates/cert-fashion-juniors-fashion-week-2018.jpg", badge: "Runway Participant" },
    { title: "Chennai Fashion Contest Junior - Master & Miss Kids", category: "Fashion", year: "2019", image: "/assets/certificates/cert-fashion-chennai-contest-2019.jpg", badge: "Runway Participant" },
    { title: "Kreedotsav 2026-27 Basketball Tournament", category: "Sports", year: "2026", image: "/assets/certificates/cert-sports-basketball-winners-2026-kreedotsav.jpg", badge: "Winners" },
    { title: "Kreedotsav 2026-27 Marathon", category: "Sports", year: "2026", image: "/assets/certificates/cert-sports-marathon-2nd-2026-kreedotsav.jpg", badge: "Second Position" },
    { title: "Sishya School Sports 2024-25 Basketball", category: "Sports", year: "2024", image: "/assets/certificates/cert-sports-basketball-winner-2024-25.jpg", badge: "Winner" },
    { title: "Annual Sports Meet 2023-24 Discus Throw", category: "Sports", year: "2023", image: "/assets/certificates/cert-sports-discus-throw-1st-2023-24.jpg", badge: "First Place" },
    { title: "Annual Sports Meet 2023-24 Javelin Throw", category: "Sports", year: "2023", image: "/assets/certificates/cert-sports-javelin-throw-2nd-2023-24.jpg", badge: "Second Place" },
    { title: "Annual Sports Meet 2023-24 Shot Put", category: "Sports", year: "2023", image: "/assets/certificates/cert-sports-shot-put-3rd-2023-24.jpg", badge: "Third Place" },
    { title: "Annual Sports Meet 2023-24 Basketball", category: "Sports", year: "2023", image: "/assets/certificates/cert-sports-basketball-runner-2023-24.jpg", badge: "Runner" },
    { title: "Annual Sports Meet 2023-24 Hand Ball", category: "Sports", year: "2023", image: "/assets/certificates/cert-sports-handball-runner-2023-24.jpg", badge: "Runner" },
    { title: "Annual Sports Day 2022-23 Throwball", category: "Sports", year: "2022", image: "/assets/certificates/cert-sports-throwball-winner-2022-23.jpg", badge: "Winner" },
    { title: "Annual Sports Day 2022-23 Shot Put", category: "Sports", year: "2022", image: "/assets/certificates/cert-sports-shot-put-2nd-2022-23.jpg", badge: "Second Place" },
    { title: "Annual Sports Day 2022-23 Hand Ball", category: "Sports", year: "2022", image: "/assets/certificates/cert-sports-handball-runner-2022-23.jpg", badge: "Runner" },
    { title: "Intramural Sports 2018-19 Kho Kho", category: "Sports", year: "2018", image: "/assets/certificates/cert-sports-khokho-winner-2018-19.jpg", badge: "Winners" },
    { title: "Agile Sports Academy Cricket Camp 2018", category: "Sports", year: "2018", image: "/assets/certificates/cert-sports-cricket-camp-2018.jpg", badge: "Camp Participation" },
    { title: "Agile Sports Academy Cricket Camp 2017", category: "Sports", year: "2017", image: "/assets/certificates/cert-sports-cricket-camp-2017.jpg", badge: "Camp Participation" },
    { title: "International Olympiad of Science 2019", category: "Academic", year: "2019", image: "/assets/certificates/cert-academic-science-olympiad-2019.jpg", badge: "Silverzone Participation" },
    { title: "International Olympiad of Science 2017", category: "Academic", year: "2017", image: "/assets/certificates/cert-academic-science-olympiad-2017.jpg", badge: "Silverzone Participation" },
    { title: "NSTSE Science Talent Search 2020", category: "Academic", year: "2020", image: "/assets/certificates/cert-academic-nstse-2020.jpg", badge: "Unified Council" },
    { title: "NSTSE Science Talent Search 2019", category: "Academic", year: "2019", image: "/assets/certificates/cert-academic-nstse-2019.jpg", badge: "Unified Council" },
    { title: "NSTSE Science Talent Search 2018", category: "Academic", year: "2018", image: "/assets/certificates/cert-academic-nstse-2018.jpg", badge: "Unified Council" },
    { title: "Unified Cyber Olympiad 2019", category: "Academic", year: "2019", image: "/assets/certificates/cert-academic-cyber-olympiad-2019.jpg", badge: "AIR 7366" },
    { title: "Unified Cyber Olympiad 2017", category: "Academic", year: "2017", image: "/assets/certificates/cert-academic-cyber-olympiad-2017.jpg", badge: "Unified Council" }
  ]
};
