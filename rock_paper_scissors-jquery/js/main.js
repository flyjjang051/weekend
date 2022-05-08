//jquery
console.log("hello javascript");
//
//jQuery== alias   $
const cover = $("#cover");
const btnReset = $("#btnReset");
const human = $("#human");
const humanItem = $("#human ul li");
//const comItem = document.querySelectorAll("#computer ul li");
const comItem = $("#computer ul li");
const resultList = $("#resultList");

let comChoiceNum = 0;
const randomChoice = function () {
  // for (let i = 0; i < 3; i++) {
  //   comItem[i].style.display = "none";
  // }
  // comItem.css(display, "none");
  // comItem.css(marginTop, 300);
  comItem.css({ display: "none", marginTop: 100 });
  const selected = Math.floor(Math.random() * 3);
  comChoiceNum = selected;
  //$(comItem[selected]).css({ display: "block" });
  comItem.eq(selected).css({ display: "block" });
};

//const comChoiceStop = setInterval(randomChoice, 20); // clearInterval(clearId)
const num = 100;
let comChoiceStop = null;
let gameStop = null;
let gameCount = 0;
function restart() {
  comChoiceStop = setInterval(randomChoice, 20);
  //human.classList.remove("off");
  human.removeClass("off");
}
console.log(comChoiceStop);
restart();
//
//randomChoice();
//
humanItem.on("click", function () {
  console.log("comChoiceNum===", comChoiceNum);
  clearInterval(comChoiceStop);
  human.addClass("off");
  let item = null;
  let i = $(this).index();
  if (i === comChoiceNum) {
    console.log("비겼습니다.");
    item = `<li class="draw">D</li>`;
  } else if (
    (i === 0 && comChoiceNum === 2) ||
    (i === 1 && comChoiceNum === 0) ||
    (i === 2 && comChoiceNum === 1)
  ) {
    console.log("이겼습니다.");
    item = `<li class="win">W</li>`;
  } else {
    console.log("졌습니다.");
    item = `<li class="lose">L</li>`;
  }
  gameCount++;
  gameStop = setTimeout(restart, 1000);
  if (gameCount === 3) {
    clearTimeout(gameStop);
    cover.css({ display: "flex" });
  }
  //resultList.innerHTML = resultList.innerHTML + item;
  //resultList.innerHTML += item;
  resultList.html(resultList.html() + item);
});

// humanItem[0].addEventListener("click", function () {
//   console.log("바위");
// });
// humanItem[1].addEventListener("click", function () {
//   console.log("보");
// });
// humanItem[2].addEventListener("click", function () {
//   console.log("가위");
// });

btnReset.on("click", function () {
  cover.css({ display: "none" });
  gameCount = 0;
  resultList.html("");
  restart();
});
