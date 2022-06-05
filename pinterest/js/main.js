$.ajax({ url: "../data/typo.json" }).done(function (data) {
  const myWorks = data.typoList;
  let tempHtml = "";
  const imgFolder = data.imageFolder;
  $.each(myWorks, function (idx, item) {
    console.log(item);
    tempHtml += `<li class="item">
    <a href="">
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
  imagesLoaded(".grid", function () {
    const itemList = new Isotope(".grid", {
      itemSelector: ".item",
      layoutMode: "masonry",
    });
  });
});
