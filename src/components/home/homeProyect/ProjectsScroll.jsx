// src/components/storytelling/ProjectsScroll.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsScroll({ children }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = containerRef.current.querySelectorAll(".project-card");

    gsap.fromTo(
      cards,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {children}
    </div>
  );
}
