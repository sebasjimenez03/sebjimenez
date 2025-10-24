import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Sebastián Jiménez — Full Stack & Front-End Developer",
  author: "Sebastián Jiménez Benavides",
  description:
    "Full Stack & Front-End Developer based in Barcelona. I build performant, scalable web apps with Angular, Node.js, and GCP. 7+ years experience delivering dashboards, exports, and clean UX.",
  lang: "en",
  siteLogo: "/sebas-small.jpg", // update path if needed
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/sebasjimenezb" },
    { text: "Github", href: "https://github.com/sebasjimenez03" },
  ],
  socialImage: "/og.png", // update path if needed
  canonicalURL: "https://portfolio.example.com",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Sebastián Jiménez",
    specialty: "Full Stack Developer · Front-End Specialist",
    summary:
      "I specialize in Angular, Node.js and GCP, building modular, high-performance apps with great UX.",
    email: "sebtec12@gmail.com",
  },

  twoCol: {
    title: "Based in ",
    subtitle: "Barcelona",
    description:
      "I am passionate about developing scalable web applications that prioritize user experience and performance. With expertise in Angular, Node.js, and cloud platforms like GCP, I deliver solutions that meet both business and user needs. My approach emphasizes clean code, modular architecture, and responsive design to ensure maintainability and adaptability in a rapidly evolving tech landscape.",
    image: "/barcelona.jpg",
  },

  experience: [
    {
      company: "IP Network S.A.",
      position: "Front-End & Full-Stack Developer (Remote)",
      startDate: "Oct 2023",
      endDate: "Today",
      summary: [
        "Delivered full-cycle web projects: custom dashboards, data export tools (CSV/PDF), and responsive corporate sites.",
        "IAR-Med: built CSV & PDF reporting for a wildlife rescue platform, with background jobs and SQL fors datasets.",
        "IAR Incident Report Map: multilingual UI (ES/EN), Google Maps API, OAuth2, and REST microservices.",
        "KML Generator (PHP): dynamic KML exports with geolocation/date/species filters for Google Earth/GIS.",
      ],
      stack: [ "Angular 9","Angular Material", "Ruby on Rails", "PHP", "Node.js", "MySQL", "PostgreSQL", "Bootstrap", "REST APIs", "Google Maps API", "Git/GitHub CI/CD", "Prawn"
    ]
    },
    {
      company: "VoyJaleas (Digital Consulting Platform)",
      position: "Founder & Front-End Developer — Barcelona",
      startDate: "Oct 2023",
      endDate: "Aug 2024",
      summary: [
        "Built a modular Angular webapp, backend and REST APIs for client document flows, notifications, and premium content.",
        "Integrated Shopify API for payments",
        "Built a modular Angular dashboard CRM"
      ],
      stack: [
        "Angular 9", "PHP", "MySQL", "Shopify API", "Bootstrap", "Cloudflare","Workers","Hono", "Hostinger", "Git/GitHub CI/CD","GitHub Actions"
      ]
    },
    {
      company: "Sngular · BBVA — Madrid",
      position: "Front End Developer",
      startDate: "Otc 2018",
      endDate: "Sept 2023",
      summary: [
        "Developed the Global Outsourcing System, optimized components for production performance.",
        "Active in requirements, code reviews, and deployments within a SCRUM team using JIRA.",
      ],
      stack: [
        "AngularJS", "Java","Bitbucket", "Google Cloud Platform (GCP)", "Jenkins", "SonarQube", "JIRA", "Agile/SCRUM"
      ]
    },
    {
      company: "Bitz — Amsterdam (Remote)",
      position: "Junior Full Stack Developer",
      startDate: "2018",
      endDate: "",
      summary: [
        "Built a React Native + Expo mobile app; integrated Ethereum blockchain for payments and orders.",
      ],
      stack: []
    },
    {
      company: "Logicalis @ Banco Santander — Madrid",
      position: "Business Intelligence Administrator",
      startDate: "2017",
      endDate: "",
      summary: [
        "Provided technical support and database maintenance in a financial environment.",
        "Tools: Qlik Sense, Cognos, SpeechMiner, PowerCenter.",
      ],
      stack: []
    },
  ],

  projects: [
    {
      name: "IAR-Med Exports (Rails)",
      summary:
        "CSV & PDF export modules with Prawn, optimized SQL, and background jobs for a wildlife rescue platform.",
      linkPreview: "https://iarcr-med.app/",
      linkSource: "", // add repo if public,
      ref: "iar-med-exports",
      image: "/projects/iar-med-exports.png",
    },
    {
      name: "Wildlife Incident Reporter",
      summary:
        "Incident reporting web app with multilingual UI, Google Maps API, OAuth2, and REST microservices.",
      linkPreview: "/",
      linkSource: "", // add repo if public
      image: "/projects/iar-incident-map.png",
    },
    {
      name: "Dynamic KML Generator (PHP)",
      summary:
        "Generates KML files from geolocated incidents with filters by species, type, date range and location for GIS/Google Earth.",
      linkPreview: "/",
      linkSource: "", // add repo if public
      image: "/projects/kml-generator.png",
    },
    {
      name: "VoyJaleas Admin & Client Dashboard",
      summary:
        "Angular 9 admin and client portal with document uploads, notifications, Shopify payments, and role-based auth.",
      linkPreview: "/",
      linkSource: "", // add repo if public
      image: "/projects/voyjaleas-dashboard.png",
    },
    {
      name: "CAVU Architecture — Corporate Site",
      summary:
        "Responsive, accessibility-minded website aligned to brand guidelines; deployed with CI/CD.",
      linkPreview: "/",
      linkSource: "", // add repo if public
      image: "/projects/cavu.png",
    },
  ],

  about: {
    description: `
      Hi, I’m Sebastián Jiménez, a passionate Full Stack Developer and digital consultant dedicated to creating modern, scalable web applications. With experience across front-end and back-end technologies — including Angular, PHP, Node.js, and Ruby on Rails — I specialize in building efficient, user-centered solutions that blend solid engineering with clean design. Over the past years, I’ve worked on diverse projects ranging from data-driven dashboards and interactive maps to digital platforms that help businesses and users connect globally. My focus is always on crafting reliable, high-performance systems that deliver real impact.
    `,
    image: "/sebas-big.jpg", // update path if needed
  },
};
