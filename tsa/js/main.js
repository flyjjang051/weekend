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

const section02TL = gsap.timeline({
  scrollTrigger: {
    trigger: ".section02",
    markers: true,
    start: "top top",
    end: "bottom top",
    scrub: 1,
    pin: true,
  },
});
section02TL
  .from(".section02 .title .char", {
    x: 100,
    opacity: 0,
    stagger: 0.1,
  })
  .from(".section02 .mainTxt01", {
    x: 100,
    opacity: 0,
  })
  .from(".section02 .mainTxt02", {
    x: -100,
    opacity: 0,
  })
  .from(".section02 .mainTxt03", {
    x: 100,
    opacity: 0,
  })
  .from(".section02 .circleList li", {
    scale: 0,
    opacity: 0,
    stagger: 0.2,
  })
  .from(".section02 .cduBox", {
    scale: 3,
    opacity: 0,
  });
const section03TL = gsap.timeline({
  scrollTrigger: {
    trigger: ".section03",
    markers: true,
    start: "top top",
    end: "bottom top",
    scrub: 1,
    pin: true,
  },
});
section03TL
  .from(".section03 .title .char", {
    x: 100,
    opacity: 0,
    stagger: 0.1,
  })
  .from(".section03 .mainTxt .char", {
    x: 100,
    opacity: 0,
  })
  .from(".section03 .list > li", {
    scale: 0,
    opacity: 0,
    stagger: 0.2,
  })
  .from(".section03 .airplane", {
    scale: 3,
    opacity: 0,
  });
