import urbanStyle from "../assets/img-projects/we.png";
import imgNote from "../assets/img-projects/div-pro.png";

export const projects = [
  {
    titulo: "Wedding in Cartagena – Luxury Weddings",
    descripcion: "This landing page is optimized to showcase the exclusive experiences, events, and luxury weddings organized by our client in Cartagena. Designed in Astro for maximum speed, it focuses on converting visitors into clients through an elegant, visually appealing, and engaging design.",
    imagen: urbanStyle.src,
    tecnologias: ["React", "Tailwind", "Astro", "JavaScript"],
    demo: "https://weddingincartagena.com/",
    codigo: "https://gitlab.com/uroboros2/weddingincartagena.com",
   featured: true
  },
  {
    titulo: "Divina Providencia – Airbnb landing page",
    imagen: imgNote.src,
    tecnologias: ["Astro", "CSS", "Boostrap", "JavaScript"],
    demo: "https://divina-providencia-v3.vercel.app/",
    codigo: "https://github.com/NicoAndDestroy/Divina-Providencia-v3",
  },
  {
    titulo: "Eccommerce landing page",
    imagen: imgNote.src,
    tecnologias: ["astro", "CSS", "HTNL", "Bootstrap"],
    demo: "https://front-react-todo.onrender.com",
    codigo: "https://github.com/Lautaro-R-collins/Front-react-todo",
  },
  {
    titulo: "Eccommerce landing page",
    imagen: "https://miro.medium.com/1*47S4iWVwTicFkFL4-Z4uAA.png",
    tecnologias: ["astro", "CSS", "HTNL", "Bootstrap"],
    demo: "https://back-express-todo.onrender.com",
    codigo: "https://github.com/Lautaro-R-collins/Back-express-todo.git",
  },
];
