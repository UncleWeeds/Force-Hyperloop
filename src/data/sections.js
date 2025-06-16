export const hero = {
  title: "Pushing the Boundaries of High-Speed Travel",
  subtitle: "Our student-led team is designing the next generation of Hyperloop pods.",
  ctaText: "Learn More",
  ctaLink: "#about",
  backgroundImage: "/images/hero-bg.jpg", // place your image in public/images/
};

export const aboutUs = {
  heading: "About Our Team",
  text: `Force Hyperloop is a multidisciplinary, student-led R&D team at NIT Tiruchirappalli dedicated to advancing affordable, energy-efficient hyperloop transit through hands-on experimentation, innovative design and collaboration across Mechanical, Electrical, Electronics and Computer Science disciplines. By continually refining our pod architectures and subsystems and showcasing our technical and business strengths at events like the Global Hyperloop Competition at IIT Madras, we strive to develop a scalable, sustainable high-speed transport solution—and we welcome passionate students and industry partners to join us in shaping the future of rapid mobility.`,
  imageUrl: "/images/about-us.jpg" // put your image in public/images/
};


// src/data/sections.js

export const achievements = [
  {
    title: "GHC (Global Hyperloop Competition)",
    description: "At the 2025 Global Hyperloop Competition at IIT Madras, Force Hyperloop earned top honors in both the Hyperloop Network and Business & Social Impact categories—testament to our dedication to pioneering research, practical implementation, and the evolution of high‐speed transit. We gratefully acknowledge the support and funding from our institute, RECAL, and alumni from the 1986, 1990, and 1999 batches, as well as Scient, whose generosity has been instrumental in driving our success.",
    image: "/images/gallery/p4.jpg",
  },
  {
    title: "Parivahan: The Global Hyperloop Conference",
    description: "Our team secured First Place for case study competition at the Parivaahan Hyperloop Conference 2024, organized by IIT Madras. Competing against top engineering institutions across India, our team stood out for its innovative system design and feasibility analysis of Hyperloop infrastructure tailored to Indian conditions.",
    image: "/images/work-ghc.jpg",
  },
  // …any additional items…
];


// src/data/sections.js

export const teamMembers = [

  {
    name: "Aatman Patel",
    role: "President",
  },
  {
    name: "Sohan Chakraborty",
    role: "Vice President",
  }, 
  {
    name: "Yeswanth Naidu",
    role: "Treasurer",
  },
];



// src/data/sections.js
export const galleryItems = [
  { src: "/images/gallery/p1.jpg", alt: "" },
  { src: "/images/gallery/p2.jpg", alt: "" },
  { src: "/images/gallery/p3.jpg", alt: "" },
  { src: "/images/gallery/p4.jpg", alt: "" },
  { src: "/images/gallery/p5.jpg", alt: "" },
  { src: "/images/gallery/p6.jpg", alt: "" },
  // …add as many as you like
];


export const recentWorksList = [
  {
    id: 'work1',
    title: "Pod Aerodynamics Study",
    description: "CFD analysis on nose cone geometries to reduce drag.",
  },
  {
    id: 'work2',
    title: "MagLev Test Rig Report",
    description: "Design and results of our magnetic levitation proof-of-concept.",
  },
  // …
];


export const recentWork = [
  {
    title: "GHC (Global Hyperloop Competition)",
    description: "From 21–24 February 2025, our team represented NIT Trichy at the Global Hyperloop Competition (GHC) held at IIT Madras, showcasing our technical expertise, creative design solutions, and strategic problem-solving skills on a national stage.",
    imageUrl: "/images/work-ghc.jpg",
  },
  {
    title: "The Hyperloop Effect – Parivahan: The Global Hyperloop Conference",
    description: "At Parivahan (The Global Hyperloop Conference) on 20 April 2024, Force Hyperloop presented feasibility studies on geopolymer tunnel composites and solar-powered vacuum pumps, winning Best Poster and Case Presentation among 1,100+ teams.",
    imageUrl: "/images/work-parivahan.jpg",
  },
];
