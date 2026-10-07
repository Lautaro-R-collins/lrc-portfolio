import imgNote from "../assets/img-projects/note-app.png";
import urbanStyle from "../assets/img-projects/urbanStyle.png";
import legalWeb from "../assets/img-projects/legalweb.webp";
import mediCare from "../assets/img-projects/medicare.jpg";
import astroFit from "../assets/img-projects/Astrofit.jpg";
import Verbenas from "../assets/img-projects/challenge-newyze.png";
import ReactEcommerce from "../assets/img-projects/ecommers.jpg";
import PortfolioDev from "../assets/img-projects/PortfolioDev.jpg";
import VintageTone from "../assets/img-projects/vintageToneApp.jpg";
import AstroEcommers from "../assets/img-projects/astroEcommers.jpg";
import CvBuilder from "../assets/img-projects/CvBuilder.png";
import ChatAi from "../assets/img-projects/ChatAI.png";
import ProductivityApp from "../assets/img-projects/productivityApp.png";
import AutomotoresFront from "../assets/img-projects/automotoresFront.jpg";
import TrackerSubscription from "../assets/img-projects/img-substracker.png";
import LectorPdf from "../assets/img-projects/lectorPDF.png";

export const proyectos = [
  {
    titulo: "Vintage Tone",
    descripcion:
      "Comercio electrónico completo con carrito de compras, autenticación de usuarios jwt, panel de Admin, Blog, y mas. Stack: Vue.Js - Node.js - Express - MongoDB - Tailwind - Cloudinary.",
    imagen: VintageTone.src,
    tecnologias: ["Vue.js", "Tailwind", "Express", "MongoDB"],
    demo: "https://vintage-tone-front-vue.vercel.app",
    codigo: "https://github.com/Lautaro-R-collins/VintageTone-Front-Vue.git",
    categoria: "fullstack",
  },
  {
    titulo: "React Tiendita",
    descripcion:
      "E-commerce full stack desarrollado con React, Node.js y MongoDB. Incluye autenticación, carrito de compras, búsqueda, categorías, reseñas, etc.",
    imagen: ReactEcommerce.src,
    tecnologias: ["React", "Tailwind", "Express", "MongoDB"],
    demo: "https://react-e-commerce-three-phi.vercel.app",
    codigo: "https://github.com/Lautaro-R-collins/React-E-commerce.git",
    categoria: "fullstack",
  },
    {
    titulo: "Biblioteca online",
    descripcion:
      "Aplicación web para visualizar y guardar libros en formato PDF. Incluye un modo de lectura con Pomodoro, resaltador, notas y otras herramientas, además de una biblioteca personal con persistencia local y sincronización en la nube.",
    imagen: LectorPdf.src,
    tecnologias: ["React", "Tailwind", "Express", "MongoDB"],
    demo: "https://lector-pdf-online.vercel.app",
    codigo: "https://github.com/Lautaro-R-collins/lector-pdf-online.git",
    categoria: "fullstack",
  },
  {
    titulo: "Productivity App",
    descripcion:
      "Aplicación de productividad desarrollada con React, Node.js y MongoDB. Incluye autenticación segura, calendario con eventos, tareas (todo list), Pomodoro timer, un asistente de IA y panel de administración con metricas.",
    imagen: ProductivityApp.src,
    tecnologias: ["React", "Tailwind", "Express", "MongoDB"],
    demo: "https://productivity-app-tau-virid.vercel.app",
    codigo: "https://github.com/Lautaro-R-collins/productivity-App.git",
    categoria: "fullstack",
  },

  {
    titulo: "Chat AI",
    descripcion:
      "Aplicación de chatbot impulsada por inteligencia artificial para proporcionar asistencia automatizada.",
    imagen: ChatAi.src,
    tecnologias: ["React", "Node.js", "Express", "MongoDB"],
    demo: "https://multi-model-ai-chat-platform.vercel.app",
    codigo:
      "https://github.com/Lautaro-R-collins/Multi-Model-AI-Chat-Platform.git",
    categoria: "fullstack",
  },
  {
    titulo: "Tracker Subscription",
    descripcion:
      "Aplicación de seguimiento de suscripciones para gestionar y controlar tus suscripciones mensuales.",
    imagen: TrackerSubscription.src,
    tecnologias: ["React", "tailwind"],
    demo: "https://subscriptions-tracker-chi.vercel.app",
    codigo: "https://github.com/Lautaro-R-collins/Subscriptions-Tracker.git",
    categoria: "frontend",
  },
  {
    titulo: "Automotores Frontend",
    descripcion:
      "Pagina de Automotores desarrollada con React, Tailwind y diseño responsivo.",
    imagen: AutomotoresFront.src,
    tecnologias: ["React", "Tailwind", "daisyUI"],
    demo: "https://automotores-frontend.vercel.app",
    codigo: "https://github.com/Lautaro-R-collins/Automotores-Frontend.git",
    categoria: "frontend",
  },
  {
    titulo: "Astro Ecommerce",
    descripcion:
      "E-commerce frontend desarrollado con Astro y React. Incluye carrito de compras, categorías, y diseño responsivo.",
    imagen: AstroEcommers.src,
    tecnologias: ["React", "Astro", "Tailwind", "daisyUI"],
    demo: "https://e-commer-astro.vercel.app",
    codigo: "https://github.com/Lautaro-R-collins/E-commer-Astro.git",
    categoria: "frontend",
  },
  {
    titulo: "App organizacion",
    descripcion:
      "App full-stack con funciones CRUD, creacion de tableros y listas, autentificacion de usuarios, desarrollada con MERN stack.",
    imagen: imgNote.src,
    tecnologias: ["React", "Tailwind", "Express", "MongoDB"],
    demo: "https://front-react-todo.onrender.com",
    codigo: "https://github.com/Lautaro-R-collins/Front-react-todo",
    categoria: "fullstack",
  },
  {
    titulo: "CV Builder",
    descripcion:
      "Generador de Currículum multi-idioma profesional siguiendo el formato recomendado por Harvard y amigable con los ATS. ",
    imagen: CvBuilder.src,
    tecnologias: ["React", "contextAPI", "tailwind", "i18n"],
    demo: "https://cv-builder-pi-three.vercel.app",
    codigo: "https://github.com/Lautaro-R-collins/CV-Builder.git",
    categoria: "frontend",
  },
  {
    titulo: "E-commerce Urban Style",
    descripcion:
      "E-commerce funcional de ropa y accesorios, con carrito de compras categorias y pasarela de pago desarrollado en React.",
    imagen: urbanStyle.src,
    tecnologias: ["React", "Tailwind", "Firebase"],
    demo: "https://proyecto-final-rodriguez-sable.vercel.app/",
    codigo: "https://github.com/Lautaro-R-collins/ProyectoFinal-Rodriguez.git",
    categoria: "fullstack",
  },

  {
    titulo: "Traker Ingresos-Gastos",
    descripcion:
      "App que realiza operaciones CRUD para agregar, ver, editar y eliminar ingresos/gastos.",
    imagen:
      "https://i.pinimg.com/736x/a4/85/c4/a485c4da3e78f4f518ddbcdb6637bacf.jpg",
    tecnologias: ["React", "contextAPI"],
    demo: "https://traker-gastos-ingresos.onrender.com/",
    codigo: "https://github.com/Lautaro-R-collins/Traker-Gastos-Ingresos",
    categoria: "frontend",
  },
  {
    titulo: "App-clima",
    descripcion:
      "Aplicación hecha con React que utiliza una API para mostrar el clima en tiempo real.",
    imagen:
      "https://i.pinimg.com/736x/10/6e/cd/106ecd1bfe5ed1c3defb83ea0f87a334.jpg",
    tecnologias: ["React", "contextAPI", "tailwind"],
    demo: "https://app-clima-om19.onrender.com/",
    codigo: "https://github.com/Lautaro-R-collins/app-clima",
    categoria: "frontend",
  },
  {
    titulo: "Portfolio developers astro",
    descripcion:
      "This is a modern, responsive developer portfolio built with Astro and Tailwind CSS.",
    imagen: PortfolioDev.src,
    tecnologias: ["Astro", "tailwind", "JavaScript"],
    demo: "https://portfolio-developers-astro.vercel.app/",
    codigo:
      "https://github.com/Lautaro-R-collins/Portfolio-developers-astro.git",
    categoria: "frontend",
  },

  {
    titulo: "Legal Staff",
    descripcion:
      "Web desarrollada con Astro y Tailwind, embudo de marketing para estudios jurídicos.",
    imagen: legalWeb.src,
    tecnologias: ["Astro", "tailwind", "JavaScript"],
    demo: "https://legal-staff.vercel.app/",
    codigo: "https://github.com/Lautaro-R-collins/legal-staff",
    categoria: "frontend",
  },
  {
    titulo: "Medicare",
    descripcion:
      "Web desarrollada con Astro y Tailwind, embudo de marketing para Obras Sociales.",
    imagen: mediCare.src,
    tecnologias: ["Astro", "tailwind", "JavaScript"],
    demo: "https://obra-social-landing.vercel.app/",
    codigo: "https://github.com/Lautaro-R-collins/obra-social-landing.git",
    categoria: "frontend",
  },
  {
    titulo: "AstroFit",
    descripcion:
      "Web desarrollada con Astro y Tailwind, embudo de marketing para asesorias fitness.",
    imagen: astroFit.src,
    tecnologias: ["Astro", "tailwind", "JavaScript"],
    demo: "https://gym-page-sandy.vercel.app/",
    codigo: "https://github.com/Lautaro-R-collins/GymPage.git",
    categoria: "frontend",
  },
  {
    titulo: "API REST para Ecommerce",
    descripcion:
      "API RESTful construida con Node.js, Express y MongoDB para gestionar tareas con operaciones CRUD, Registro de usuarios y login con JWT.",
    imagen: "https://miro.medium.com/1*47S4iWVwTicFkFL4-Z4uAA.png",
    tecnologias: ["Express", "Node.js", "MongoDB", "Mongoose"],
    demo: "https://react-e-commerce-three-phi.vercel.app",
    codigo: "https://github.com/Lautaro-R-collins/ApiRest-Ecommerce.git",
    categoria: "backend",
  },
  {
    titulo: "API REST Vintage Tone App",
    descripcion:
      "API RESTful construida con Node.js, Express y MongoDB para gestionar tareas con operaciones CRUD, Registro de usuarios y login con JWT.",
    imagen: "https://miro.medium.com/1*47S4iWVwTicFkFL4-Z4uAA.png",
    tecnologias: ["Express", "Node.js", "MongoDB", "Cloudinary"],
    demo: "https://vintage-tone-front-vue.vercel.app",
    codigo: "https://github.com/Lautaro-R-collins/VintageTone-API-REST.git",
    categoria: "backend",
  },
  {
    titulo: "API REST",
    descripcion:
      "API RESTful construida con Express y MongoDB para gestionar tareas con operaciones CRUD, Registro de usuarios y login con JWT.",
    imagen: "https://miro.medium.com/1*47S4iWVwTicFkFL4-Z4uAA.png",
    tecnologias: ["Express", "Node.js", "MongoDB", "Mongoose"],
    demo: "https://back-express-todo.onrender.com",
    codigo: "https://github.com/Lautaro-R-collins/Back-express-todo.git",
    categoria: "backend",
  },
  {
    titulo: "API Chat AI",
    descripcion:
      "API RESTful construida con Express y MongoDB con Registro de usuarios y login con JWT.",
    imagen: "https://miro.medium.com/1*47S4iWVwTicFkFL4-Z4uAA.png",
    tecnologias: ["Express", "Node.js", "MongoDB", "Mongoose"],
    demo: "https://multi-model-ai-chat-platform.vercel.app",
    codigo:
      "https://github.com/Lautaro-R-collins/Multi-Model-AI-Chat-Platform/tree/main/backend",
    categoria: "backend",
  },
  {
    titulo: "API REST",
    descripcion:
      "API RESTful construida con Express y MongoDB con Registro de usuarios y login con JWT.",
    imagen: "https://miro.medium.com/1*47S4iWVwTicFkFL4-Z4uAA.png",
    tecnologias: ["Express", "Node.js", "MongoDB", "Mongoose"],
    demo: "https://productivity-app-tau-virid.vercel.app",
    codigo:
      "https://github.com/Lautaro-R-collins/productivity-App/tree/main/back",
    categoria: "backend",
  },
  {
    titulo: "PlaniFy",
    descripcion:
      "App Web para organizar tus proyectos, hecha con React + Vite, TypeScript y Tailwind para los estilos.",
    imagen:
      "https://i.pinimg.com/736x/8f/f0/bb/8ff0bbd0e5844ed254bede44522c8338.jpg",
    tecnologias: ["React", "Vite", "TypeScript", "Tailwind"],
    demo: "https://planify-1tu6.onrender.com/",
    codigo: "https://github.com/Lautaro-R-collins/PlaniFy-organization-app",
    categoria: "frontend",
  },
  {
    titulo: "Tienda Artesana",
    descripcion:
      "Ecommerce Full-Stack para ver, comprar y vender tus productos, con login para usuarios y vendedores.",
    imagen:
      "https://i.pinimg.com/736x/c9/70/bf/c970bfbc24489e39418b2c1b1f8f74ef.jpg",
    tecnologias: ["React", "Node", "Express", "MongoDB"],
    demo: "https://c21-05-ft-node-react-mirror-frontend-64qbwssi2-muyvisual.vercel.app/",
    codigo: "https://github.com/No-Country-simulation/c21-05-ft-node-react",
    categoria: "fullstack",
  },
  {
    titulo: "Verbenas Paisajes",
    descripcion:
      "Pagina estatica desarrollada con Astro y tailwind como reto para una startup.",
    imagen: Verbenas.src,
    tecnologias: ["Astro", "Tailwind", "JavaScript"],
    demo: "https://challenge-neowyze.onrender.com/",
    codigo: "https://github.com/Lautaro-R-collins/challenge-Neowyze.git",
    categoria: "frontend",
  },

  {
    titulo: "100 days coding in Js",
    descripcion: "100 proyectos, realizados con HTML, CSS y JavaScript.",
    imagen:
      "https://i.pinimg.com/736x/3b/4f/4e/3b4f4e170fcb1795b88f4941f49df0a2.jpg",
    tecnologias: ["Next.js", "Tailwind", "GraphQL"],
    demo: "https://one00-proyects-web.onrender.com/",
    codigo: "https://github.com/Lautaro-R-collins/100-days-of-coding-in-JS",
    categoria: "frontend",
  },
];
