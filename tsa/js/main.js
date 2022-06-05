Splitting();
const section01TL = gsap.timeline({
  scrollTrigger: {
    trigger: ".section01",
    markers: true,
    start: "top top",
    end: "bottom top",
    scrub: 1,
    pin: true,
  },
});
section01TL
  .from(".section01 .txt01 .char", {
    x: 100,
    opacity: 0,
    stagger: 0.1,
  })
  .from(".section01 .txt02 .char", {
    x: 100,
    opacity: 0,
    stagger: 0.1,
  })
  .from(".section01 .txt0301", {
    x: -100,
    opacity: 0,
  })
  .from(".section01 .txt0302", {
    x: 100,
    opacity: 0,
  })
  .from(".section01 .txt0303", {
    x: -100,
    opacity: 0,
  })
  .from(".section01 .txt04", {
    scale: 3,
    opacity: 0,
  });
