$.ajax({ url: "../data/typo.json" }).done(function (data) {
  const myWorks = data.typoList;
  let tempHtml = "";
  const imgFolder = data.imageFolder;
  //prettier-ignore
  $.each(myWorks, function (idx, item) {
    console.log(item);
    tempHtml += `<li class="item ${item.category}">
    <a href="${imgFolder + item.img}" data-fancybox="${item.category}" data-caption="${item.title}">
      <div class="imgBox"><img src="${imgFolder + item.img}" alt="" /></div>
      <div class="infoBox">
        <h2>${item.title}</h2>
        <p>${item.desc}</p>
        <p class="point">${item.point}</p>
      </div>
    </a>
  </li>`;
  });
  $("#works .grid").html(tempHtml);
  // const myLoaded = imagesLoaded(".grid", function () {
  //   const itemList = new Isotope(".grid", {
  //     itemSelector: ".item",
  //     layoutMode: "masonry",
  //   });
  // });
  // myLoaded.on("progress", function (instance, image) {
  //   console.log(image.isLoaded);
  // });
  const myLoaded = imagesLoaded(".grid");
  myLoaded.on("always", function () {
    const itemList = new Isotope(".grid", {
      itemSelector: ".item",
      layoutMode: "masonry",
    });
    $(".filter li").on("click", function (e) {
      //e.preventDefault();
      $(this).addClass("on").siblings().removeClass("on");
      const filtering = $(this).data("filter-word");
      itemList.arrange({ filter: `.${filtering}` });
      return false;
      //alert("aaaa");
    });
  });
});

$(window).on("mousemove", function (e) {
  gsap.to(".cursor", { duration: 0.1, left: e.clientX, top: e.clientY });
  gsap.to(".cursorFollower", {
    duration: 0.35,
    left: e.clientX,
    top: e.clientY,
  });
});
$(".filter li").on("mouseenter", function () {
  $(".cursor .txt").text("CLICK");
  gsap.to(".cursor", {
    width: 80,
    height: 80,
    ease: "elastic",
    duration: 1,
    backgroundColor: "#f00",
  });
});
$(".filter li").on("mouseleave", function () {
  $(".cursor .txt").text("");
  gsap.to(".cursor", {
    width: 10,
    height: 10,
    ease: "elastic",
    duration: 1,
    backgroundColor: "#fff",
  });
});

//이벤트 위임  (delegate)
$(".grid").on("mouseenter", "li", function () {
  $(".cursor .txt").text("VIEW");
  gsap.to(".cursor", {
    width: 80,
    height: 80,
    ease: "elastic",
    duration: 1,
    backgroundColor: "#f00",
  });
});
$(".grid").on("mouseleave", "li", function () {
  $(".cursor .txt").text("");
  gsap.to(".cursor", {
    width: 10,
    height: 10,
    ease: "elastic",
    duration: 1,
    backgroundColor: "#fff",
  });
});
