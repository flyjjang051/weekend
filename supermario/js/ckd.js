let selIdx = 0;
let oldIdx = 0;
let old = null;
$("#gnb > ul > li").on("mouseenter",function() {
    selIdx = $(this).index();
    $(this).removeClass();
    if(selIdx-oldIdx>0){
        $(this).addClass("left");
        console.log(" 크다");
        if(old!=null){
            old.addClass("rightOff");
        }
    } else if(selIdx - oldIdx < 0) {
        $(this).addClass("right");
        console.log(" 작타");
        if(old!=null){
            old.addClass("leftOff");
        }
    } else {
        $(this).addClass("left");
        console.log(" 같타");
    }
    old= $(this);
    oldIdx = $(this).index();
});
$("#gnb").on("mouseleave",function() {
    old.removeClass();
    old.addClass("leftOff");
});