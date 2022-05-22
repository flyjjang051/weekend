// $.ajax({
//     url:"gnb.json"
// })
// .done(function(res){
//     let gnb = res.gnb;
//     let banner = res.banner;
    
//     $("body").append("<nav id='gnb'><ul></ul></nav>");
//     $("body").append("<div id='banner'><ul></ul></div>");
//     $.each(gnb,function(idx,item){
//         console.log(idx,"====",item.txt);
//         let tempList = `<li><a href="${item.link}">${item.txt}</a></li>`;
//         $("#gnb> ul").append(tempList);
//     });
//     $.each(banner,function(idx,item){
//         let tempList = `<li><a href="${item.link}"><img src="${item.imgSrc}"></a></li>`;
//         $("#banner> ul").append(tempList);
//     });
// });



$(".tab .tabMenu li").on("click",function(){
    $.ajax({
        url:"banner0"+ ($(this).index()+1) +".json"
    })
    .done(function(res){
        let banner = res.banner;
        $(".tabContents").html("");
        $.each(banner,function(idx,item){
            let tempList = `<li>
                                <a href="${item.link}">
                                    <div class="imgBox"><img src="${item.imgSrc}"></div>
                                    <p>${item.txt}</p>
                                </a>
                            </li>`;
            $(".tabContents").append(tempList);
        });
        gsap.from(  $(".tabContents li"),{
            opacity:0,
            stagger:0.2
        });
    });
    $(this).addClass("on");
    $(this).siblings().removeClass("on");
    return false;
})
