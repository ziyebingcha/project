$(document).ready(function(){
    $("#jingling").mousedown(function(e){ //e鼠标事件
        $(this).css("cursor","move");//改变鼠标指针的形状
        var x=e.offsetX,y=e.offsetY;
        $(document).bind("mousemove.drag",function(ev){ //绑定鼠标的移动事件，因为光标在DIV元素外面也要有效果，所以要用doucment的事件，而不用DIV元素的事件
            // $("#jingling").stop();//加上这个之后
            var _x = ev.pageX - x;//获得X轴方向移动的值
            var _y = ev.pageY - y;//获得Y轴方向移动的值

            $("#jingling").css("cssText","top:"+_y+"px;left:"+_x+"px");
        });
    });
    document.getElementById("jingling").ondragstart  = function () {
        return false;
    }

    $(document).mouseup(function(){
        $(document).unbind("mousemove");
        // $("#jingling img").attr("src","img/ren.gif")
    });
});