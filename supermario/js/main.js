$.ajax({ url: "../data/mario.json" }).done(function (data) {
  console.log(data.mario);
  const marioList = [...data.mario];
  let tempHtml = "";
  $.each(marioList, function (idx, item) {
    tempHtml += `<li>
      <div class="mario">
        <img src="${item.img}">
      </div>
      <div class="txt">
        <h2 class="title">${item.title}</h2>
        <p>${item.desc}</p>
        <a href="${item.link}">more</a>
      </div>
      <div class="bg" style="background-image:${item.bg}"></div>
    </li>`;
  });
  $(".marioList").append(tempHtml);

  $(".marioList li").each(function (idx, item) {
    $(this).css({
      transform: `translateZ(${-5000 * idx}px)`,
      zIndex: 99 - idx,
    });
  });
  let zAmount = 0;
  $(".marioList").on("mousewheel", function (e) {
    console.log(e.originalEvent.deltaY);
    const wheel = e.originalEvent.deltaY;
    if (wheel > 0) {
      zAmount += 100;
      $(".marioList li").each(function (idx, item) {
        $(this).css({
          transform: `translateZ(${-5000 * idx + zAmount}px)`,
        });
      });
    } else {
      zAmount -= 100;
      $(".marioList li").each(function (idx, item) {
        $(this).css({
          transform: `translateZ(${-5000 * idx + zAmount}px)`,
        });
      });
    }
  });

  // marioList.push("뒤에서 밀어넣고 있습니다.");
  // console.log("🚀 ~ file: main.js ~ line 5 ~ marioList", marioList);
  // console.log("🚀 ~ file: main.js ~ line 3 ~ data.mario", data.mario);
  // console.log(data.mario === marioList);
});
const fruits = ["banana", "kiwi", "apple"];
console.log([...fruits]);
// 데이터의 불변성
// const num = 10;
// const fruits = ["banana", "kiwi", "apple"];
// const animals = ["tiger", "lion", "rabbit"];
// const copyArray = fruits; // 얕은(shallow) 복사
// const sliceCopy = fruits.slice();
// const spreadCopy = ["plum", ...fruits];

// console.log("🚀 ~ file: main.js ~ line 15 ~ spreadCopy", spreadCopy);
// console.log("🚀 ~ file: main.js ~ line 14 ~ sliceCopy", sliceCopy);
// fruits.push("berry");
// console.log("🚀 ~ file: main.js ~ line 13 ~ copyArray", copyArray);
// console.log("🚀 ~ file: main.js ~ line 14 ~ sliceCopy", sliceCopy);
// console.log("🚀 ~ file: main.js ~ line 14 ~ fruits", fruits);
// console.log("🚀 ~ file: main.js ~ line 15 ~ spreadCopy", spreadCopy);

// let aa = 10;
// let bb = aa;
// aa = 100;
// console.log(bb);

// console.log(fruits[0]);
// fruits.push("berry");
// console.log(fruits[0]);
// fruits.unshift("orange");
// console.log(fruits[0]);
// const lastItem = fruits.pop();
// const firstItem = fruits.shift();
// console.log("🚀 ~ file: main.js ~ line 19 ~ firstItem", firstItem);
// console.log("🚀 ~ file: main.js ~ line 18 ~ lastItem", lastItem);
// console.log("🚀 ~ file: main.js ~ line 14 ~ fruits", fruits);
