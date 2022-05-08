console.log("hello javascript");
const humanItem = document.querySelectorAll("#human ul li");
const comItem = document.querySelectorAll("#computer ul li");
console.log("🚀 ~ file: main.js ~ line 4 ~ comItem", comItem);
console.log("🚀 ~ file: main.js ~ line 3 ~ humanItem", humanItem);

let comChoiceNum = 0;
const randomChoice = function () {
  comItem[0].style.display = "none";
  comItem[1].style.display = "none";
  comItem[2].style.display = "none";
  const selected = Math.floor(Math.random() * 3);
  comChoiceNum = selected;
  comItem[selected].style.display = "block";
};

const comChoiceStop = setInterval(randomChoice, 20); // clearInterval(clearId)

//randomChoice();

for (let i = 0; i < 3; i++) {
  humanItem[i].addEventListener("click", function () {
    console.log("comChoiceNum===", comChoiceNum);
    clearInterval(comChoiceStop);
    if (i === comChoiceNum) {
      console.log("비겼습니다.");
    } else if (i === 0 && comChoiceNum === 2) {
      console.log("이겼습니다.");
    } else if (i === 1 && comChoiceNum === 0) {
      console.log("이겼습니다.");
    } else if (i === 2 && comChoiceNum === 1) {
      console.log("이겼습니다.");
    } else {
      console.log("졌습니다.");
    }
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
