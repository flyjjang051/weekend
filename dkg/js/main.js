Splitting();

$("#gnb .list > li").on("mouseenter", function () {
  $("#header").addClass("on");
  const tx = $(this).offset().left + $(this).width() / 2;
  gsap.to("#gnb .circle", { left: tx, duration: 0.5, ease: "power4.out" });
});
$("#gnb .list > li").on("mouseleave", function () {
  $("#header").removeClass("on");
});

const mainVisualTL = gsap.timeline();
mainVisualTL
  .from("#mainVisual .txtBox h2 .char", {
    x: 100,
    opacity: 0,
    ease: "power4",
    duration: 1,
    stagger: 0.05,
  })
  .from(
    "#mainVisual .txtBox p .char",
    {
      x: 100,
      opacity: 0,
      ease: "power4",
      duration: 1,
      stagger: 0.05,
    },
    "-=1"
  );

const businessTL = gsap.timeline();
businessTL
  .from("#business .txtBox h2 .char", {
    x: 100,
    opacity: 0,
    ease: "power4",
    duration: 1,
    stagger: 0.05,
  })
  .from(
    "#business .txtBox p .char",
    {
      x: 100,
      opacity: 0,
      ease: "power4",
      duration: 1,
      stagger: 0.05,
    },
    "-=1"
  )
  .from(
    "#business .iconBox li",
    {
      y: 100,
      opacity: 0,
      ease: "power4",
      duration: 1,
      stagger: 0.1,
    },
    "-=1"
  );

new fullpage("#main", {});
