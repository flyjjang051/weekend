let moveX = 0;
let gnbIdx = 0;
let selIdx = 0;
let oldIdx = 0;
$(window).on("mousewheel",function(e){
    //console.log(e);
    let mw = e.originalEvent.wheelDeltaY;
    if(mw<0) {
        //흴을 아래로
        moveX-=100;
        if(moveX<=-1200*4) {
            moveX=-1200*4;
        }
    } else {
        //흴을 위로
        moveX+=100;
        if(moveX>=0) {
            moveX=0;
        }
    }
    console.log("moveX=====",moveX);
    $("#main li").each(function(idx,item){
        //console.log(idx,"====",item);
        gsap.to($(this),{
            x:moveX+1200*idx,
            ease:"power3"
        });
    });
    selIdx = oldIdx = gnbIdx = Math.abs(Math.round(moveX/1200));
    old = $("#gnb li").eq(oldIdx);
    $("#gnb li").eq(gnbIdx).addClass("on");
    $("#gnb li").eq(gnbIdx).siblings().removeClass("on");
});

let old = $("#main li").eq(0);
$("#gnb li").on("click",function(){
    $(this).addClass("on");
    $(this).siblings().removeClass("on");
    selIdx = $(this).index();
    oldIdx = old.index();
    moveX=1200*selIdx;
    $("#main li").each(function(idx,item){
        //console.log(idx,"====",item);
        //0~4
        gsap.to($(this),{
            x:-moveX+1200*idx,
            duration:0.5*Math.abs(selIdx-oldIdx),
            ease:"power3"
        })
    });
    old = $(this);
    return false;
})
