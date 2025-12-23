import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function StoryPin({ children }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const steps = gsap.utils.toArray(".story-step");

      gsap.set(steps, { opacity: 0, y: 40 });
      gsap.set(steps[0], { opacity: 1, y: 0 });

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

          steps.forEach((el, i) => {
            gsap.to(el, {
              opacity: i === index ? 1 : 0,
              y: i === index ? 0 : 40,
              duration: 0.4,
              ease: "power2.out",
            });
          });
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative flex h-screen items-center justify-center"
    >
      {children}
    </section>
  );
}
