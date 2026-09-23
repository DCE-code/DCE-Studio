import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!dot || !ring || !finePointer.matches || reducedMotion.matches)
      return undefined;

    let frame = 0;
    let ringX = -40;
    let ringY = -40;
    let targetX = -40;
    let targetY = -40;

    const render = () => {
      ringX += (targetX - ringX) * 0.16;
      ringY += (targetY - ringY) * 0.16;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      frame = requestAnimationFrame(render);
    };
    const handleMove = (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
      dot.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
      document.body.classList.add("cursor-active");
      const target = event.target.closest("a, button, .project-card");
      ring.classList.toggle("cursor-hover", Boolean(target));
      ring.classList.toggle(
        "cursor-card",
        Boolean(target?.closest(".project-card")),
      );
      document.querySelectorAll("[data-magnetic]").forEach((element) => {
        const bounds = element.getBoundingClientRect();
        const distanceX = event.clientX - (bounds.left + bounds.width / 2);
        const distanceY = event.clientY - (bounds.top + bounds.height / 2);
        const within =
          Math.abs(distanceX) < bounds.width * 0.9 &&
          Math.abs(distanceY) < bounds.height * 1.5;
        element.style.setProperty(
          "--mag-x",
          within ? `${distanceX * 0.08}px` : "0px",
        );
        element.style.setProperty(
          "--mag-y",
          within ? `${distanceY * 0.08}px` : "0px",
        );
      });
    };
    const handleLeave = (event) => {
      if (event.relatedTarget) return;
      document.body.classList.remove("cursor-active");
      ring.classList.remove("cursor-hover", "cursor-card");
      document.querySelectorAll("[data-magnetic]").forEach((element) => {
        element.style.setProperty("--mag-x", "0px");
        element.style.setProperty("--mag-y", "0px");
      });
    };

    frame = requestAnimationFrame(render);
    window.addEventListener("pointermove", handleMove, { passive: true });
    window.addEventListener("pointerout", handleLeave);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerout", handleLeave);
      document.body.classList.remove("cursor-active");
    };
  }, []);

  return (
    <>
      <span ref={dotRef} className="custom-cursor__dot" aria-hidden="true" />
      <span ref={ringRef} className="custom-cursor__ring" aria-hidden="true" />
    </>
  );
}
