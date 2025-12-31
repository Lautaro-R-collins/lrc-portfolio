import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function StoryPin({ children }) {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const steps = gsap.utils.toArray(".story-step");
      const dots = gsap.utils.toArray(".story-dot");

      if (!steps.length) return;

      gsap.set(steps, { opacity: 0, y: 40 });
      gsap.set(steps[0], { opacity: 1, y: 0 });

      // Inicializa dots si existen
      if (dots.length) {
        gsap.set(dots, { opacity: 0.35, scale: 1 });
        gsap.set(dots[0], { opacity: 1, scale: 1.25 });
      }

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: `+=${steps.length * 100}%`,
        pin: true,
        scrub: true,
        onUpdate: (self) => {
  const index = Math.min(
    steps.length - 1,
    Math.floor(self.progress * steps.length)
  );

  setActiveIndex(index);

  steps.forEach((el, i) => {
    const isActive = i === index;

    gsap.to(el, {
      opacity: isActive ? 1 : 0,
      y: isActive ? 0 : 40,
      duration: 0.35,
      ease: "power2.out",
      overwrite: true,
    });

    // --- Breathing SVG orgánico ---
    const organic = el.querySelector(".story-svg--org");

    if (organic) {
      // Limpia animaciones previas
      gsap.killTweensOf(organic);

      if (isActive) {
        gsap.fromTo(
          organic,
          { scale: 1, rotate: -6 },
          {
            scale: 1.06,
            rotate: -3,
            duration: 3.5,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
          }
        );
      } else {
        gsap.to(organic, {
          scale: 1,
          rotate: -6,
          duration: 0.4,
          ease: "power2.out",
        });
      }
    }
  });

  // --- Indicador narrativo ---
  if (dots.length) {
    dots.forEach((d, i) => {
      gsap.to(d, {
        opacity: i === index ? 1 : 0.35,
        scale: i === index ? 1.25 : 1,
        duration: 0.25,
        ease: "power2.out",
        overwrite: true,
      });
    });
  }
}

      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative flex h-screen items-center justify-center overflow-hidden"
      aria-roledescription="scroll-driven storytelling"
      aria-label="Storytelling section"
      data-active-step={activeIndex}
    >
      {children}
    </section>
  );
}
