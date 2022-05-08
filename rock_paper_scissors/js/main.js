console.log("hello javascript");
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
function restart() {
  comChoiceStop = setInterval(randomChoice, 20);
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
    let item = null;
    if (i === comChoiceNum) {
      console.log("비겼습니다.");
      item = `<li class="draw">D</li>`;
    } else if (i === 0 && comChoiceNum === 2) {
      console.log("이겼습니다.");
      item = `<li class="win">W</li>`;
    } else if (i === 1 && comChoiceNum === 0) {
      console.log("이겼습니다.");
      item = `<li class="win">W</li>`;
    } else if (i === 2 && comChoiceNum === 1) {
      console.log("이겼습니다.");
      item = `<li class="win">W</li>`;
    } else {
      console.log("졌습니다.");
      item = `<li class="lose">L</li>`;
    }
    setTimeout(restart, 1000);
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
