// > 바로 밑에 있는 자식만 선택
const gnbList = $("#gnb .list > li");
//const depth02 = $("#gnb .list > li .depth02");
//console.log(depth02);
gnbList.on("mouseenter", function () {
  //console.log(this);
  // 선택자를 $(선택자) 쓰는거를 래핑(wrapping)한다고 한다.
  // 이렇게 하는 이유는
  // jquery에서 제공하는 api (즉 거의 대부분의 method)를 사용하기 위함이다.
  //   const depth02 = $(this).find(".depth02");
  //   depth02.slideDown(250);
  $(this).find(".depth02").slideDown(250);
  //메서드를 연결해서 쓰는 이러한 기법을 메서드 체이닝이라고 한다.
});
gnbList.on("mouseleave", function () {
  $(this).find(".depth02").slideUp(250);
});
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
new Swiper("#mainVisual", {
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
  },
});
