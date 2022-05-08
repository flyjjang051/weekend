console.log("hello javascript");
const cover = document.querySelector("#cover");
const btnReset = document.querySelector("#btnReset");
const human = document.querySelector("#human");
const humanItem = document.querySelectorAll("#human ul li");
const comItem = document.querySelectorAll("#computer ul li");
const resultList = document.querySelector("#resultList");
console.log("🚀 ~ file: main.js ~ line 4 ~ comItem", comItem);
console.log("🚀 ~ file: main.js ~ line 3 ~ humanItem", humanItem);

let comChoiceNum = 0;
const randomChoice = function () {
  // comItem[0].style.display = "none";
  // comItem[1].style.display = "none";
  // comItem[2].style.display = "none";
  for (let i = 0; i < 3; i++) {
    comItem[i].style.display = "none";
  }
  const selected = Math.floor(Math.random() * 3);
  comChoiceNum = selected;
  comItem[selected].style.display = "block";
};

//const comChoiceStop = setInterval(randomChoice, 20); // clearInterval(clearId)
const num = 100;
let comChoiceStop = null;
let gameStop = null;
let gameCount = 0;
function restart() {
  comChoiceStop = setInterval(randomChoice, 20);
  human.classList.remove("off");
}
console.log(comChoiceStop);
restart();
//
//randomChoice();
//
for (let i = 0; i < 3; i++) {
  humanItem[i].addEventListener("click", function () {
    console.log("comChoiceNum===", comChoiceNum);
    clearInterval(comChoiceStop);
    human.classList.add("off");
    let item = null;
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
      cover.style.display = "flex";
    }
    //resultList.innerHTML = resultList.innerHTML + item;
    resultList.innerHTML += item;
  });
}

// humanItem[0].addEventListener("click", function () {
//   console.log("바위");
// });
// humanItem[1].addEventListener("click", function () {
//   console.log("보");
// });
// humanItem[2].addEventListener("click", function () {
//   console.log("가위");
// });

btnReset.addEventListener("click", function () {
  cover.style.display = "none";
  gameCount = 0;
  resultList.innerHTML = "";
  restart();
});
