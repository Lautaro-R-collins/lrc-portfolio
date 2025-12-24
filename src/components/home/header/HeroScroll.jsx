import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroScroll({ children }) {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(heroRef.current, {
        opacity: 0,
        y: -40,
        ease: "power2.out",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom 20%",
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return <div ref={heroRef}>{children}</div>;
}
