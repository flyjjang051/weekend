Splitting();

// 자바스크립트에서 this는 누가 호출하느냐에 따라 결정된다.
let person = {
  name: "장성호",
  age: 30,
  consoleThis: function () {
    console.log(this);
    console.log(this === person);
    console.log(this === window);
  },
};

//console.log(person.consoleThis());
const printThis = person.consoleThis;
//printThis();

// 생성자 함수
const mainVisualSlider = new Swiper("#mainVisual", {
  loop: true,
  speed: 1000,
  initialSlide: 2,
  effect: "slide", // cube,fade, card
  navigation: {
    nextEl: "#mainVisual .btnNext",
    prevEl: "#mainVisual .btnPrev",
  },
  pagination: {
    el: "#mainVisual .pagination .bullets",
    type: "bullets",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

const btnPause = $("#mainVisual .autoBox .pause");
const btnAuto = $("#mainVisual .autoBox .auto");

btnPause.on("click", function () {
  mainVisualSlider.autoplay.stop();
  btnPause.css({ display: "none" });
  btnAuto.css({ display: "block" });
});

btnAuto.on("click", function () {
  mainVisualSlider.autoplay.start();
  btnPause.css({ display: "block" });
  btnAuto.css({ display: "none" });
});

new Swiper("#news .listBox", {
  slidesPerView: 3, // 화면에 보여지는 갯수
  spaceBetween: 30, // margin-right
  slidesPerGroup: 3, // swipe 한번에 지나가는 갯수
  loop: true,
  mousewheel: true,
});

// const txt = "my name is jjang \r\n age 10 \r\n fkjdkjsf";
// console.log(txt.split("\r\n").join(""));
// 문자열 찢기

/*
gsap.from("#mainVisual .slogan .main .char", {
  y: 100,
  opacity: 0,
  stagger: 0.05,
  ease: "power4",
  duration: 1,
});
gsap.from("#mainVisual .slogan .sub .char", {
  x: 100,
  opacity: 0,
  stagger: 0.02,
  ease: "power4",
  duration: 1,
});
*/
const mainVisualTL = gsap.timeline();
//prettier-ignore
mainVisualTL
  .from("#mainVisual .slogan .main .char", {
    y: 100,
    opacity: 0,
    stagger: 0.05,
    ease: "power4",
    duration: 1,
    delay:1
  })
  .from("#mainVisual .slogan .sub .char", {
    x: 100,
    opacity: 0,
    stagger: 0.02,
    ease: "power4",
    duration: 1,
  });
// script  브라우져 환경에 최상위 객체는 window
// state(상태)에 의한 변경이 이루어질때는 한곳에 쓰는게 좋다.
