Splitting();

gsap.defaults({ ease: "power4", duration: 1 });

const droneTL = gsap.timeline();
droneTL
  .from(".right", { width: 0, duration: 1.5 })
  .from("#product img", { scale: 0, ease: "elastic" })
  .from(".logo", { backgroundColor: "transparent" }, "-=0.5")
  .from(".logo .char", { x: 20, opacity: 0, stagger: 0.02 })
  .from(".next", { x: 20, opacity: 0 })
  .from(".product-title .char", { y: 50, opacity: 0, stagger: 0.05 }, "<")
  .from(".desc .char", { x: 50, opacity: 0, stagger: 0.02 }, "<")
  .from("#price", { x: 50, opacity: 0 })
  .from(".btn", { backgroundColor: "transparent" }, "btn")
  .from(".btn", { color: "transparent" })
  .from(".watch", { x: 100, opacity: 0 })
  .from(".cart", { opacity: 0 })
  .from(".right-sidebar li", { opacity: 0, x: 50, stagger: 0.1 })
  .from(".media li", { opacity: 0, x: 50, stagger: 0.1 })
  .from(".left-bottom .char", { opacity: 0, x: 50, stagger: 0.1 }, "btn+=0.5");
