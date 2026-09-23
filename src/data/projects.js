const projectsData = [
  {
    id: "opportunity-hub",
    title: "Opportunity Hub",
    category: "Web Apps",
    description:
      "A focused platform for discovering and applying to opportunities through a clearer browsing experience.",
    techStack: ["Flask", "Database", "Auth"],
    image: "/file_00000000c5d481f49cd38da8c8ed5f27.png",
    featured: true,
    liveUrl: "https://opportunity-hub-zeta.vercel.app/",
    caseStudy: {
      overview:
        "Opportunity Hub brings opportunity discovery and applications into one focused web experience.",
      problem:
        "Opportunity listings can be difficult to scan and act on when information is spread across disconnected pages.",
      role: "Frontend development and project work across the interface, flows, and responsive presentation.",
      features: [
        "Opportunity browsing",
        "Application-oriented flows",
        "Responsive layouts",
        "Authentication and data-backed screens",
      ],
      challenges:
        "The main challenge was keeping a growing set of opportunity details understandable while supporting a complete application journey.",
      solution:
        "The interface was organized around clear content hierarchy, reusable screens, and responsive layouts that keep the next action visible.",
      result:
        "A working platform concept that makes opportunities easier to explore and move through.",
    },
  },
  {
    id: "ministore",
    title: "MiniStore",
    category: "E-Commerce",
    description:
      "A compact shopping experience with direct product discovery, responsive layouts, and a simple purchase flow.",
    techStack: ["React", "E-Commerce", "Responsive UI"],
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    liveUrl: "https://final-ministore.netlify.app/",
    caseStudy: {
      overview:
        "MiniStore is a small e-commerce experience built to keep browsing and product decisions direct.",
      problem:
        "A compact store still needs to make products, choices, and the next step easy to understand on small screens.",
      role: "Frontend development, responsive UI implementation, and interaction work.",
      features: [
        "Product discovery",
        "Responsive product layouts",
        "Clear shopping flow",
        "Reusable interface patterns",
      ],
      challenges:
        "The interface needed to balance product detail with a lightweight, uncluttered browsing experience.",
      solution:
        "Content was given a strong hierarchy with responsive components that preserve the shopping path across screen sizes.",
      result:
        "A clear, approachable store interface that demonstrates practical React frontend work.",
    },
  },
  {
    id: "urbrannest",
    title: "Urbrannest",
    category: "Web Apps",
    description:
      "A real estate browsing experience designed to help people explore properties with less friction.",
    techStack: ["HTML", "CSS3", "JavaScript"],
    image: "/pexels-md-nadim-mahmud-2158301177-35385546.jpg",
    featured: true,
    liveUrl: "https://dce-real-esteta-damo-2.vercel.app/",
    caseStudy: {
      overview:
        "Urbrannest presents real estate properties through a straightforward, visual browsing experience.",
      problem:
        "Property browsing needs enough visual context to build confidence without overwhelming the visitor.",
      role: "Frontend development and responsive presentation of property-focused content.",
      features: [
        "Property browsing",
        "Visual listing presentation",
        "Responsive layout",
        "Clear calls to action",
      ],
      challenges:
        "The challenge was making visual property content feel rich while keeping the page easy to scan.",
      solution:
        "A structured layout, clear spacing, and deliberate image treatment keep attention on the properties and their next actions.",
      result:
        "A polished real estate interface concept with a simple path from discovery to interest.",
    },
  },
  {
    id: "dodge-word",
    title: "Dodge Word",
    category: "Interactive Web",
    description:
      "A browser-based word game that turns quick decisions and vocabulary into an engaging interaction.",
    techStack: ["JavaScript", "HTML", "CSS"],
    image: "/images (8).jpeg",
    liveUrl: "https://dodge-word.netlify.app/",
  },
  {
    id: "st-luke-lab",
    title: "St. Luke Lab",
    category: "Interactive Web",
    description:
      "A collection of practical JavaScript experiments exploring interaction design and browser APIs.",
    techStack: ["JavaScript", "DOM APIs", "HTML & CSS"],
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://dce-code.github.io/JS-project/",
  },
  {
    id: "skyport",
    title: "SkyPort",
    category: "UI/UX",
    description:
      "An aviation interface concept combining confident visual direction with clear travel information.",
    techStack: ["JavaScript", "UI/UX", "Responsive Design"],
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://dce-code.github.io/SkyPort",
  },
];

export default projectsData;
