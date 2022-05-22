let moveX = 0;
let total = $("#history .list li").length;
console.log(total);
$("#history").on("mousewheel",function(e){
    let mw = e.originalEvent.wheelDeltaY;
    if(mw<0) {
        //흴을 아래로
        moveX-=100;
        if(moveX<=-1600*(total-1)) {
            moveX=-1600*(total-1);
        }
    } else {
        //흴을 위로
        moveX+=100;
        if(moveX>=0) {
            moveX=0;
        }
    }
    gsap.to($("#history .list"),{
            x:moveX,
            ease:"power3.out"
    });
    selIdx = oldIdx = gnbIdx = Math.abs(Math.round(moveX/1600));
    old = $(".pagination li").eq(oldIdx);
    $(".pagination li").eq(gnbIdx).addClass("on");
    $(".pagination li").eq(gnbIdx).siblings().removeClass("on");

});
let old = $(".pagination li").eq(0);
let gnbIdx = 0;
let selIdx = 0;
let oldIdx = 0;
$(".pagination li").on("click",function() {
    moveX = -$(this).index()*1600;
    $(this).addClass("on");
    $(this).siblings().removeClass("on");
    selIdx = $(this).index();
    oldIdx = old.index();
    gsap.to($("#history .list"),{
        x:moveX,
        duration:Math.abs( selIdx- oldIdx )*0.5,
        ease:"power3.out"
    });
    old = $(this);
    return false;
})
