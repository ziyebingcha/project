function loadpage(pno) {
    //请求后台数据
    $.ajax({
        type:'get',
        url:'data/product_manhau.php',
        data:{pno:pno,pageSize:1},
        success:function (data){
            console.log(data);
            // 动态加载漫画区域
            var html="";
            for(var p of data.data){
                html+=`
                        <div class="left gao">
                            <img  src="${p.lg}" >
                        </div>
                        <div class="right gao">
                            <div>
                                <img src="${p.sm}">
                            </div>
                            <div class="gushi">
                                <p><b>漫画场景：${p.scene}</b></p>
                                <p><b>男一号：</b>${p.boyNO}</p>
                                <p><b>女一号：</b>${p.girlNO}</p>
                                <p><b>大概情节：</b>${p.story}</p>
                            </div>
                        </div>
                     `
            }
            $("#manhu").html(html);
            //分页条加载
            var html="";
            if(data.pno-1>0){html +=`<a class="ch ${data.pno<=1?'disabled':''}" href="${data.pno>1?data.pno-1:'#'}">上一页</a>`};
            if(data.pno-2>0){html +=`<a href="${data.pno-2}">${data.pno-2}</a>`};
            if(data.pno-1>0){html +=`<a href="${data.pno-1}">${data.pno-1}</a>`};
            html +=`<a class="act" href="${data.pno}">${data.pno}</a>`;
            if(data.pno+1<=data.pageCount){html +=`<a href="${data.pno+1}">${data.pno+1}</a>`};
            if(data.pno+2<=data.pageCount){html +=`<a href="${data.pno+2}">${data.pno+2}</a>`};
            if(data.pno+1<=data.pageCount){html +=`<a class="ch ${data.pno>=data.pageCount?'disabled':''}" href="${data.pno<data.pageCount?data.pno+1:'#'}">下一页</a>`};
            $("#lis").html(html);
        },
        error:function () {alert("网络错误");}

    })
}
loadpage(1);
//分页条的点击事件
$("#lis").on("click","a",function(e){
    e.preventDefault();
    var pno=$(this).html();
    loadpage($(this).attr('href'));
    // loadpage(pno);
})