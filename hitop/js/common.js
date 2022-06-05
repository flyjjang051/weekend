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
  $(this).find(".depth02").stop().slideDown(250); // 제이쿼리에 사용되는 애니메이션은 queue 구조를 가진다.
  //메서드를 연결해서 쓰는 이러한 기법을 메서드 체이닝이라고 한다.
});
//queue  / stack
gnbList.on("mouseleave", function () {
  $(this).find(".depth02").stop().slideUp(250);
});

//let menuTop = null;
console.log($(".tab .menu").offset());
//let menuTop = null;
// if ($(".tab .menu").offset() === undefined) {
//   menuTop = null;
// } else {
//   menuTop = $(".tab .menu").offset().top - 120;
// }

// if ($(".tab .menu").offset() !== undefined) {
//   menuTop = $(".tab .menu").offset().top - 120;
// }

//prettier-ignore
const menuTop = $(".tab .menu").offset() === undefined?null : $(".tab .menu").offset().top - 120;

$(window).on("scroll", function (e) {
  const st = $(window).scrollTop();
  if (st > 100) {
    $("body").addClass("on");
  } else {
    $("body").removeClass("on");
  }
  if (menuTop !== null) {
    if (st > menuTop) {
      $(".tab").addClass("on");
    } else {
      $(".tab").removeClass("on");
    }
  }

  //console.log("스크롤 이벤트가 발생하였습니다.");
});
console.log("오류 뜹니다.");
//system에게 이벤트를 한번 일으켜달라고 부탁하는
$(window).trigger("scroll");
//$("#gnb > .list > li:nth-child(2)").trigger("mouseenter");
