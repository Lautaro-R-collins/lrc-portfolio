import { useEffect } from "react";

export default function ClickSpark({
  color = "#d4a373",
  count = 6,
  radius = 10,
}) {
  useEffect(() => {
    const handleClick = (e) => {
      // DEBUG: confirma que entra aquí
      console.log("ClickSpark fired");

      const container = document.createElement("div");
      container.style.position = "fixed";
      container.style.left = `${e.clientX}px`;
      container.style.top = `${e.clientY}px`;
      container.style.pointerEvents = "none";
      container.style.zIndex = "9999";
      document.body.appendChild(container);

      for (let i = 0; i < count; i++) {
        const spark = document.createElement("span");
        const angle = Math.random() * Math.PI * 4;
        const distance = radius + Math.random() * radius;

        spark.style.position = "absolute";
        spark.style.width = "2px";
        spark.style.height = "2px";
        spark.style.borderRadius = "30%";
        spark.style.background = color;
        spark.style.opacity = "0.9";
        spark.style.transform = "translate(-50%, -50%)";

        container.appendChild(spark);

        spark.animate(
          [
            { transform: "translate(0, 0)", opacity: 1 },
            {
              transform: `translate(${Math.cos(angle) * distance}px, ${
                Math.sin(angle) * distance
              }px)`,
              opacity: 0,
            },
          ],
          {
            duration: 450,
            easing: "ease-out",
          }
        );
      }

      setTimeout(() => {
        container.remove();
      }, 500);
    };

    // 🔑 IMPORTANTE: usa window
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [color, count, radius]);

  return null;
}
