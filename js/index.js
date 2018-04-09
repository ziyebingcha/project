// $(()=>{
    $("#tanchuceng").click($(" .squer"),(e)=>{
        // $(".squer").css("display","block");
        $(".squer").css("right","14px");
        $(".squer").css("transform"," rotateY(0)");
    })
    $(".squer").mouseleave(()=>{
        // $(".squer").css("display","none");
        $(".squer").css("right","300px");
        $(".squer").css("transform"," rotateY(90deg)");
    });


var area = $("#box");
var con1 = $("#con1");
var con2 = $("#con2");
var speed = 50;
area.scrollTop = 0;
con2.html(con1.html());
function scrollUp(){
    if(area.scrollTop >= con1.scrollHeight) {
        area.scrollTop = 0;
    }else{
        area.scrollTop ++;
    }
}
var myScroll = setInterval("scrollUp()",speed);
area.onmouseover = function(){
    clearInterval(myScroll);
}
area.onmouseout = function(){
    myScroll = setInterval("scrollUp()",speed);
}

// });

