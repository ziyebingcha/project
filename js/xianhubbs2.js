var pno,pagesize;
function laodpage(pno) {
    $.ajax({
        type:'get',
        url:'data/xianhubbs.php',
        data:{pno:pno,pageSize:5},
        success:function (data){
            console.log(data);
            var html="";
            for(var p of data.data){
                html+=`
                        <div class="wenda" >
                            <h2>${p.bid} ${p.title}</h2>
                            <div>
                                <p class="teacher" >老师回答 / 七月</p>
                                <p>${p.answer}
                                </p>
                            </div>
                            <p>网友：${p.nickname} <span>2018-04-10</span></p>
                        </div> 
               `
            }
            $(".article").html(html);
            // console.log( $(".accordion").children()[1]);

            // $( $(".accordion").children()[1] ).addClass("in");

            var html="";
            if(data.pno-1>0){html +=`<a class="ch ${data.pno<=1?'disabled':''}" href="${data.pno>1?data.pno-1:'#'}">上一页</a>`};
            if(data.pno-2>0){html +=`<a href="${data.pno-2}">${data.pno-2}</a>`};
            if(data.pno-1>0){html +=`<a href="${data.pno-1}">${data.pno-1}</a>`};
            html +=`<a class="act" href="${data.pno}">${data.pno}</a>`;
            if(data.pno+1<=data.pageCount){html +=`<a href="${data.pno+1}">${data.pno+1}</a>`};
            if(data.pno+2<=data.pageCount){html +=`<a href="${data.pno+2}">${data.pno+2}</a>`};
            if(data.pno+1<=data.pageCount){html +=`<a class="ch ${data.pno>=data.pageCount?'disabled':''}" href="${data.pno<data.pageCount?data.pno+1:'#'}">下一页</a>`};
            $("#lis").html(html);
        },error:function () {
            alert("网络错误，请检查！");
        }
    })
}
laodpage(pno);

//分页条的点击事件
$("#lis").on("click","a",function(e){
    e.preventDefault();
    var pno=$(this).html();
    laodpage($(this).attr('href'));
});