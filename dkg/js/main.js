Splitting();

$("#gnb .list > li").on("mouseenter", function () {
  $("#header").addClass("on");
  const tx = $(this).offset().left + $(this).width() / 2;
  gsap.to("#gnb .circle", { left: tx, duration: 0.5, ease: "power4.out" });
});
$("#gnb .list > li").on("mouseleave", function () {
  $("#header").removeClass("on");
});

const mainVisualLine = CSSRulePlugin.getRule(
  "#mainVisual .txtBox strong:after"
);

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
  )
  .from(mainVisualLine, {
    cssRule: {
      scaleX: 0,
    },
  });

const businessTL = gsap.timeline();
const businessLine = CSSRulePlugin.getRule("#business .txtBox strong:after");

businessTL.pause();
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
    businessLine,
    {
      cssRule: {
        scale: 0,
      },
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
const portfolioTL = gsap.timeline();
const portfolioLine = CSSRulePlugin.getRule("#portfolio .txtBox strong:after");

portfolioTL.pause();
portfolioTL
  .from("#portfolio .txtBox h2 .char", {
    x: 100,
    opacity: 0,
    ease: "power4",
    duration: 1,
    stagger: 0.05,
  })
  .from(
    "#portfolio .txtBox p .char",
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
    portfolioLine,
    {
      cssRule: {
        scale: 0,
      },
    },
    "-=1"
  )
  .from(
    "#portfolio .more",
    {
      scale: 0,
      opacity: 0,
      ease: "power4",
      duration: 1,
      stagger: 0.1,
    },
    "-=1"
  )
  .from(
    "#portfolio .portfolioBox li",
    {
      y: 100,
      opacity: 0,
      ease: "power4",
      duration: 1,
      stagger: 0.1,
    },
    "-=1"
  );
const communityTL = gsap.timeline();
const communityLine = CSSRulePlugin.getRule("#community .txtBox strong:after");

communityTL.pause();
communityTL
  .from("#community .txtBox h2 .char", {
    x: 100,
    opacity: 0,
    ease: "power4",
    duration: 1,
    stagger: 0.05,
  })
  .from(
    "#community .txtBox p .char",
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
    communityLine,
    {
      cssRule: {
        scale: 0,
      },
    },
    "-=1"
  )
  .from(
    "#community .communityBox li",
    {
      y: 100,
      opacity: 0,
      ease: "power4",
      duration: 1,
      stagger: 0.1,
    },
    "-=1"
  );
new fullpage("#main", {
  // cards: true,
  // cardsOptions: { perspective: 100, fadeContent: true, fadeBackground: true },
  onLeave: function (origin, destination, direction, trigger) {
    //console.log("leave===", origin, "===", destination);
  },
  onLeave: function (origin, destination, direction, trigger) {
    //console.log("afterLoad===", origin, "===", destination);
    //console.log(destination.index);

    // if (destination.index === 1) {
    //   businessTL.restart();
    // }
    switch (destination.index) {
      case 0:
        mainVisualTL.restart();
        break;
      case 1:
        businessTL.restart();
        break;
      case 2:
        portfolioTL.restart();
        break;
      case 3:
        communityTL.restart();
        break;
    }
  },
});
