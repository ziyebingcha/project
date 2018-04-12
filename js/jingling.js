$("#jingling ").mousemove(()=>{
    $("#jingling img").attr("src","img/timg.gif")
});
$("#jingling ").mouseout(()=>{
    $("#jingling img").attr("src","img/ren.gif")
});

$("#jingling ").dblclick(()=>{
    $("#tanchu").css("display","block");
});
$("#close").click(()=>{
    $("#tanchu").css("display","none");

})