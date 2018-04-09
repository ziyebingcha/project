$(()=>{
    $.ajax({
        type:"get",
        url:"header.html",
        success:function (html) {
            $("#header").html(html);
            layui.use('element', function(){
                //导航的hover效果、二级菜单等功能，需要依赖element模块
                var element = layui.element;
                element.on('nav(demo)', function(elem){
                    //console.log(elem)
                    layer.msg(elem.text());
                });
            });
        },
        error:function () {
            alert("网络错误");
        }
    })
})