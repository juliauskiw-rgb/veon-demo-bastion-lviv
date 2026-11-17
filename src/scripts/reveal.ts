// Adds .is-visible to [data-reveal] and .is-drawn to [data-draw] when they enter the viewport (once).
// Content stays visible without JS and with prefers-reduced-motion.
const reveal = document.querySelectorAll<HTMLElement>("[data-reveal]");
const draw = document.querySelectorAll<HTMLElement>("[data-draw]");
const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const done = (el: Element): void => el.classList.add(el.hasAttribute("data-draw") ? "is-drawn" : "is-visible");
if (reduce || !("IntersectionObserver" in window)) {
  reveal.forEach(done);
  draw.forEach(done);
} else {
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        done(e.target);
        io.unobserve(e.target);
      }
    }
  }, { rootMargin: "0px 0px -10% 0px", threshold: 0.2 });
  reveal.forEach((el) => io.observe(el));
  draw.forEach((el) => io.observe(el));
}
