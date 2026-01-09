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
];
