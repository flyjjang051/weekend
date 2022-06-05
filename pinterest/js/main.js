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
