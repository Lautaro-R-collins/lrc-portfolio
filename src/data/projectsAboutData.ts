export const projects = [
  {
    slug: "wedding-in-cartagena",
    titulo: "Wedding in Cartagena – Luxury Weddings",
    resumen:
      "End-to-end UX/UI and front-end development for a luxury wedding brand, from Figma concept to live, high-performance website.",

    imagen: "/img-projects/we.png",
    featured: true,

    design: {
      tools: ["Figma"],
      deliverables: [
        "Wireframes",
        "UI Design",
        "Design System",
        "Responsive Design",
        "Accessibility considerations",
      ],
    },

    development: [
      "Astro for static-first performance",
      "Tailwind CSS for scalable UI implementation",
      "Semantic HTML for accessibility & SEO",
      "Performance and SEO optimization",
    ],

    proceso: [
      "Discovery & requirements",
      "UX/UI design in Figma",
      "Component-based development",
      "CMS & content optimization",
      "Deployment & optimization",
    ],

    demo: "https://weddingincartagena.com/",
    codigo: "https://gitlab.com/uroboros2/weddingincartagena.com",

    figmaBranding:
      "https://www.figma.com/design/trBh9DnToIuwYcjzlc0Gnq/Le-Mariage-Branding",

    figmaWireframes:
      "https://www.figma.com/design/cqZ8FOHjUuEIlI78kx1JIH/Estructura-Weddingincartagena",
  },

  {
    slug: "divina-providencia",
    titulo: "Divina Providencia – Boutique Stay Experience",
    resumen:
      "UX/UI and front-end development for a boutique accommodation experience focused on trust, clarity, and conversion.",
    imagen: "/img-projects/div-pro.png",

    context: [
      "Divina Providencia is a boutique accommodation experience inspired by modern hospitality platforms.",
      "The goal was to create a trustworthy and clear interface that encourages booking and user confidence.",
    ],

    challenge: [
      "Build trust for first-time visitors",
      "Present information clearly without overwhelming users",
      "Optimize for SEO and local discovery",
    ],

    outcome: [
      "The result is a clean, conversion-focused interface inspired by Airbnb-style UX patterns.",
      "This project highlighted the importance of clarity and content hierarchy in hospitality products.",
    ],

    extraSection: {
      type: "figma-only",
      title: "Laundry App – UX Capstone Project",
      description: [
        "This project was developed as a UX capstone focused entirely on research, validation, and interface design.",
        "The process covers user research, personas, user flows, wireframes, and a complete high-fidelity prototype.",
      ],
      figmaUrl: "https://www.figma.com/design/S6LvB1Iv627YkWZpVnCZfK/Divina-providencia?node-id=0-1&t=tCS2qYmz8OE9DHXS-1",
    },

    figmaWireframes:
      "https://www.figma.com/design/S6LvB1Iv627YkWZpVnCZfK/Divina-providencia?node-id=0-1&t=tCS2qYmz8OE9DHXS-1",

    demo: "https://divina-providencia-v3.vercel.app/",
    codigo: "https://github.com/NicoAndDestroy/Divina-Providencia-v3",
  },

  {
  slug: "londri-ux-case-study",
  type: "ux-only",
      imagen: "/img-projects/londri.png",

  titulo: "Londri — Laundry Service UX Case Study",
  resumen:
    "End-to-end UX case study for a laundry service application, focused on research-driven decisions, service design, and iterative prototyping from low-fidelity to high-fidelity solutions.",

  context: [
    "Londri was developed as a UX capstone project focused exclusively on research, validation, and interface design.",
    "The goal was to design a digital service for a laundry business, starting from zero assumptions and building the product based on real-world analysis and user needs.",
  ],

  research: [
    "Competitive analysis of existing laundry service applications",
    "Service pricing models and operational flows research",
    "User interviews and stakeholder assumptions validation",
    "Market patterns and common friction points identification",
  ],

  uxProcess: [
    "User personas and stakeholder scenarios",
    "Service blueprint and use cases definition",
    "Card sorting and information architecture",
    "Brainstorming and ideation in Miro",
    "A/B testing for flow validation",
    "Heatmaps and interaction analysis",
  ],

  wireframes: [
    "Low-fidelity wireframes to validate service flow",
    "Mid-fidelity iterations to refine interaction and structure",
    "High-fidelity screens aligned with validated UX decisions",
  ],

  figmaStages: [
    {
      label: "Low-Fidelity Prototype — Service Flow Exploration",
      url: "https://www.figma.com/proto/JxoaqQsrfiQKamphSO35eU/Prototipo-pantalla-calendario",
      description:
        "Early low-fidelity prototype focused on defining the number of screens, scheduling logic, availability, garment types, and service flow.",
    },
    {
      label: "Mid-Fidelity Mobile Iteration",
      url: "https://www.figma.com/design/upP5I3CbJxJdARcbx0naKB/Londri",
      description:
        "Mid-stage iteration exploring mobile-first interactions and refining the service experience.",
    },
    {
      label: "Desktop UX — Early High-Fidelity",
      url: "https://www.figma.com/design/EKSHErSUEwDWeva6YDeLYA/Londri-Final-Figma",
      description:
        "Early high-fidelity desktop exploration consolidating research insights and service complexity.",
    },
    {
      label: "Desktop Iterations",
      url: "https://www.figma.com/design/fp5mppsH8S7HhMIB5ehDpa/Londri-desktop",
      description:
        "Iterative desktop designs refining layout, hierarchy, and interaction patterns.",
    },
    {
      label: "Final Mobile Design",
      url: "https://www.figma.com/design/qnIFrxGLFGT1ftPQ8nStIC/Londri-mobile",
      description:
        "Final mobile interface with validated flows and refined UI system.",
    },
    {
      label: "Final Desktop Design",
      url: "https://www.figma.com/design/K1iyedrXqy264RBLmDUDCj/Londri-Web-Final",
      description:
        "Final desktop solution consolidating all UX research and service design decisions.",
    },
  ],

  prototype: {
    label: "Interactive Figma Prototype",
    url: "https://www.figma.com/proto/K1iyedrXqy264RBLmDUDCj/Londri-Web-Final",
  },

  outcome: [
    "A fully validated UX solution covering both mobile and desktop experiences.",
    "Clear service flows for scheduling, pricing, availability, and garment selection.",
    "A research-driven design that demonstrates UX maturity beyond visual design.",
  ],
}

];
