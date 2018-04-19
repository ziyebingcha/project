$(()=>{
     layui.use('element', function(){
     //导航的hover效果、二级菜单等功能，需要依赖element模块
         var element = layui.element;
         element.on('nav(demo)', function(elem){
                    //console.log(elem)
             layer.msg(elem.text());
         });
     });


    $.ajax({
        type: "get",
        url: "data/islogin.php",
        success:function (data) {
            $("#login").css("display","none");
            $("#welcom").css("display","block");
            $("#welcom .kuan").html("欢迎:"+data.uname);
            //注销
            $("#bye").click(()=>{
                $.ajax({
                    type: "get",
                    url: "data/logoout.php",
                    success:function (data) {
                        console.log(data.msg);
                        $("#welcom").css("display","none");
                        $("#login").css("display","block");
                    }
                })
            })
        }
    })



})

