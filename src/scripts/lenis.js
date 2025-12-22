import Lenis from "@studio-freight/lenis";

const lenis = new Lenis({
  lerp: 0.08,        // suavidad natural (no exagerada)
  smoothWheel: true,
  smoothTouch: false,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);