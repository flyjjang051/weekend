$.ajax({
    url:"headphone.json"
})
.done(function(res){
    console.log(res);
    let mario = res.mario
    $.each(mario,function(idx,item){
        let tempList = `<li>
                <div class="mario">
                    <img src="${item.imgSrc}" alt="">
                </div>
                <div class="txtBox">
                    <h2>${item.title}</h2>
                    <p>
                        ${item.desc}
                    </p>
                </div>
                <div class="bg"></div>
            </li>`
        $("#main ul").append(tempList);
    });
    // 효과 시작
    let moveZ = 0;
    let gnbIdx = 0;
    let selIdx = 0;
    let oldIdx = 0;
    $(window).on("mousewheel",function(e){
        //console.log(e.originalEvent);
        let mw = e.originalEvent.wheelDeltaY;
        if(mw<0){
            //console.log("휠을 아래로");
            moveZ+=150;
            if(moveZ>=20000){
                moveZ=20000;
            }
        } else {
            //console.log("휠을 위로");
            moveZ-=150;
            if(moveZ<=0){
                moveZ=0;
            }
        }
        //console.log(moveZ);
        $("#main li").each(function(idx,item){
            //console.log(idx,"====",item);
            gsap.to($(this),{
                z:moveZ-5000*idx
            });
        });
        selIdx = oldIdx = gnbIdx = Math.round(moveZ/5000);
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
        moveZ=5000*selIdx;
        $("#main li").each(function(idx,item){
            //console.log(idx,"====",item);
            //0~4
            gsap.to($(this),{
                z:moveZ-5000*idx,
                duration:0.5*Math.abs(selIdx-oldIdx),
                ease:"power3"
            })
        });
        old = $(this);
        return false;
    });
})