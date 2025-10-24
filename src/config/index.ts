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
        "IAR-Med: built CSV & PDF reporting for a wildlife rescue platform (Ruby on Rails, PostgreSQL, Prawn), with background jobs and optimized SQL for large datasets.",
        "IAR Incident Report Map: multilingual UI (ES/EN), Google Maps API, OAuth2, and REST microservices.",
        "KML Generator (PHP): dynamic KML exports with geolocation/date/species filters for Google Earth/GIS.",
      ],
      stack: [ "Angular 9", "Ruby on Rails", "PHP", "Node.js", "MySQL", "PostgreSQL", "Bootstrap", "REST APIs", "Google Maps API", "Git/GitHub CI/CD"
    ]
    },
    {
      company: "VoyJaleas (Digital Consulting Platform)",
      position: "Founder & Front-End Developer — Barcelona",
      startDate: "Oct 2023",
      endDate: "Aug 2024",
      summary: [
        "Built a modular Angular webapp with PHP/MySQL backend and REST APIs for client document flows, notifications, and premium content.",
        "Integrated Shopify API for payments, Firebase for sync; secured and cached via Cloudflare; CI/CD with GitHub Actions.",
        "Built a modular Angular dashboard CRM with PHP/MySQL backend and REST APIs."
      ],
      stack: [
        "Angular 9", "PHP", "MySQL", "Shopify API", "Bootstrap", "Cloudflare","Workers","Hono", "Hostinger"
      ]
    },
    {
      company: "Sngular · BBVA — Madrid",
      position: "Front End Developer",
      startDate: "Otc 2018",
      endDate: "Sept 2023",
      summary: [
        "Developed the Global Outsourcing System (AngularJS, GCP), optimized components for production performance.",
        "Active in requirements, code reviews, and deployments within a SCRUM team using JIRA.",
      ],
      stack: [
        "AngularJS", "Java","Bitbucket", "Google Cloud Platform", "Jenkins", "SonarQube", "JIRA", "Agile/SCRUM"
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
I’m a Full Stack & Front-End Developer with 7+ years of experience building scalable, user-centric applications. I work across Angular (v9–17), Node.js/Express, and Ruby on Rails, with strong skills in RxJS, modular architectures, REST integrations, and CI/CD.

I thrive in SCRUM teams and also ship fast in freelance settings—owning UX, performance, and clean code. Comfortable across MySQL/PostgreSQL/Firebase, and deployments on GCP, Cloudflare, Vercel, and Hostinger.

**Education**
- Master’s in Digital Marketing & E-commerce Management — University of Barcelona (Oct 2024 – Sept 2025)
- Full Stack Developer Bootcamp — Upgrade Hub (2019)
- BSc in Computer Engineering — University of Alcalá (2013 – 2019)

**Languages**
- Spanish: Native
- English: C1 (Professional Working Proficiency)

**Technical Skills**
- **Frontend:** Angular (v9–17), TypeScript, JS (ES6+), HTML5, CSS3/SCSS/SASS, Bootstrap, Angular Material, RxJS, Responsive Design
- **Backend/APIs:** Node.js, PHP, Express.js, Ruby on Rails, REST APIs
- **Databases:** MySQL, PostgreSQL, Firebase, MongoDB
- **DevOps/Cloud:** GCP, Hostinger, Cloudflare, Vercel, Jenkins, GitHub Actions, Nginx, Docker (basic)
- **Version Control:** Git (GitHub, Bitbucket)
- **Testing:** Jasmine, Karma, Cypress (basic)
- **Methods/Tools:** Agile/SCRUM, Kanban, CI/CD, JIRA, Confluence, Notion, Figma, Postman, Chrome DevTools
    `,
    image: "/alejandro-big.jpg", // update path if needed
  },
};
