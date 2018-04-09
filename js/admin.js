//鼠标经过侧边栏 img箭头图片更换
$(".cebian").mouseover(()=>{
    $("#img-jiantou").attr("src","img/banner/right2.png")
})
$(".cebian").mouseleave(()=>{
    $("#img-jiantou").attr("src","img/banner/right.png")
})
//鼠标经过下边箭头 img箭头图片更换
$("#xiabian").mouseover(()=>{
    $("#img-xiajiantou").attr("src","img/banner/xia2.png");
})
$("#xiabian").mouseleave(()=>{
    $("#img-xiajiantou").attr("src","img/banner/xia.png")
})
//点击侧边箭头隐藏和实现位移加载动画 启动定时器 后隐藏gif
$(".cebian").click($(" #continer2"),(e)=>{
    $("#continer2").css("left","80%");
    adddiv();
    removediv;

})
//鼠标移除内容模块 实现位移回到原位 并加载gif动画
$("#continer2").mouseleave(()=>{
    $("#continer2").css("left","60%");
    adddiv();
});
//定义定时器任务 8秒后隐藏gif
var opacityval=1;
var removediv=setInterval(()=>{
        opacityval-=0.1;
       $(".gif").css("opacity",opacityval);
        if(opacityval<0.1){
            $(".gif").hide();
            opacityval=1;
        }
    },1500);


// 定义显示gif任务
var adddiv=function () {
    $(".gif").css("opacity",1);
    $(".gif").show();
}
//点击下箭头隐藏和实现位移加载动画 启动定时器 后隐藏gif
$("#xiabian").click($(" #middle"),(e)=>{
    $("#middle").css("top","600px");
    adddiv();
    removediv;
})
//鼠标移除内容模块 实现位移回到原位 并加载gif动画
$("#middle").mouseleave(()=>{
    $("#middle").css("top","300px");
    adddiv();
});


// 向上滚动的文本域
var speed = 50;
var n=$("#box").scrollTop();
n=0;
$("#con2").html($("#con1").html());
function scrollUp(){
    if(n >= $("#con1").height()) {
        n = 0;
    }else{
        n ++;
    }
    $("#box").scrollTop(n);
}
var myScroll = setInterval(scrollUp,speed);
$("#box").mouseover ($("#box>ul"),()=>{
    clearInterval(myScroll);
})
$("#box").mouseout (()=>{
    myScroll = setInterval(scrollUp,speed);
})
//下边轮播

$("#demo2").html($("#demo1").html());
var b=$("#lunbo").scrollLeft();b=0;
function Marquee() {
    if (b>=$("#demo1").width()){
        b=0;
    }else { b++;
        $("#lunbo").scrollLeft(b);
    }
}
var MyMar = setInterval(Marquee, speed);
$("#lunbo").mouseover(()=>{
    clearInterval(MyMar);
});
$("#lunbo").mouseout(()=>{
    MyMar = setInterval(Marquee, speed);
});