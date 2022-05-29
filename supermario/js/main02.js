const zDistance = 5000;
const step = 20;
const zSpeed = zDistance / step;
$.ajax({ url: "../data/mario.json" }).done(function (data) {
  console.log(data.mario);
  const marioList = [...data.mario];
  let tempHtml = "";
  const total = marioList.length;
  $.each(marioList, function (idx, item) {
    tempHtml += `<li class="swiper-slide">
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
  new Swiper("#main", {
    slidesPerView: "auto",
    effect: "coverflow",
    loop: true,
    coverflowEffect: {
      rotate: 0,
      slideShadows: false,
      depth: 500,
      stretch: 0,
    },
    mousewheel: true,
  });
});
