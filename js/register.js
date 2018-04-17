
	 $("#uname").blur(()=>{
	 	 if($.trim($("#uname").val())==""||$.trim($("#uname").val())==null){
     		$("#uname").siblings().find(".err").css("visibility","visible");
     		$("#uname").parents().children(":last-child").children("span").html("用户名不能为空");
   		}       
	})
	  $("#upwd").blur(()=>{
	 	 if($.trim($("#upwd").val())==""||$.trim($("#upwd").val())==null){
     		$("#upwd").siblings().find(".err").css("visibility","visible");
     		$("#upwd").parents().children(":last-child").children("span").html("密码不能为空");
   		}       
	})
	  $("#cpwd").blur(()=>{
	 	var cpwd=$.trim( $("#cpwd").val());
	 	if(cpwd==""||cpwd==null){
	 	 	$("#cpwd").siblings().find(".err").css("visibility","visible");
	 	}	      
	})
	  $("#setyzm").click(()=>{ $("#setyzm").attr("src","data/03_code_gg.php");})       

  
	$("#yzm").blur(()=>{
		var yzm=$("#yzm").val();
		var yzmRge=/^[a-z]{4}$/i;
		if(yzm==""||yzm==null){
			$("#yzm").parents().children(":last-child").children("span").html("验证码不能为空");
   		}else if(!yzmRge.test(yzm)){$("#yzm").parents().children(":last-child").children("span").html("验证码格式不正确");} 
   		else {		
   			$.ajax({
        		type:'post',
	            url:'data/yzm.php',
	            data:{yzm:yzm},
	            success:function (data){
	            	console.log(data);
	            	if(data.code==-1){  
		        		$("#yzm").parents().children(":last-child").children("span").html(data.msg);	
		            }else{
		            	$("#yzm").parents().children(":last-child").children("span").html("");
		            	// console.log(123455);
		            }
	            }
        	})
   		
   		}
	})

		
    $("#uname").keyup(()=>{
        var uname=$.trim( $("#uname").val());
        var uReg=/^[A-Za-z0-9_\-\u4e00-\u9fa5]{4,8}$/; 
        if(!uReg.test(uname)){
        	$("#uname").siblings().find(".err").css("visibility","visible");
        	$("#uname").parents().children(":last-child").children("span").html("用户名4-8个汉字、字母、数字组合").css("color","red");
        }else if(uReg.test(uname)){
        	 $("#uname").siblings().find(".err").css("visibility","hidden");
		     $("#uname").siblings().find(".ok").css("visibility","visible");
		     $("#uname").parents().children(":last-child").children("span").html("用户名可用").css("color","green");
        	$.ajax({
        		type:'post',
	            url:'data/checkuname.php',
	            data:{uname:uname},
	            success:function (data){
	            	console.log(data);
	            	if(data.code==1){
	            		console.log(1);
			            $("#uname").siblings().find(".err").css("visibility","visible");
		        		$("#uname").parents().children(":last-child").children("span").html(data.msg);	
		            }
	            },
	            error:function(){
	            	  alert("网络故障");
	            }
        	})
        }    
   
    })
    $("#upwd").keyup(()=>{
        var upwd=$.trim( $("#upwd").val());
        var pReg=/^[A-Za-z0-9_\-]{4,8}$/; 
        if(!pReg.test(upwd)){
        	$("#upwd").siblings().find(".err").css("visibility","visible");
        	$("#upwd").parents().children(":last-child").children("span").html("用户名4-8个字母、数字组合").css("color","red");
        }else if(pReg.test(upwd)){
        	 $("#upwd").siblings().find(".err").css("visibility","hidden");
		     $("#upwd").siblings().find(".ok").css("visibility","visible");
		     $("#upwd").parents().children(":last-child").children("span").html("密码名可用").css("color","green");
        }   
    })
    $("#cpwd").keyup(()=>{
        var upwd=$.trim( $("#upwd").val());
	 	var cpwd=$.trim( $("#cpwd").val());
       if(cpwd!==upwd){
	 		// console.log(upwd,cpwd);
	 		$("#cpwd").siblings().find(".err").css("visibility","visible");
	 		$("#cpwd").parents().children(":last-child").children("span").html("两次密码不一致").css("color","red");
	 	}else {
	 		// console.log(upwd,cpwd);
	 		$("#cpwd").siblings().find(".err").css("visibility","hidden");
	 		$("#cpwd").siblings().find(".ok").css("visibility","visible");
	 		$("#cpwd").parents().children(":last-child").children("span").html("通过").css("color","green");
	 	}   		
   
    })
	$("#email").keyup(()=>{
	    var email=$("#email").val();	
	    var eReg=/^\w{1,15}[@]\w{1,6}[.](com|cn)$/;  
	    if(!eReg.test(email)){
	       $("#email").siblings().find(".err").css("visibility","visible");
	       $("#email").parents().children(":last-child").children("span").html("电子邮箱格式不正确").css("color","red");
	       console.log(1111);
	    }else{
	        $("#email").siblings().find(".err").css("visibility","hidden");   
	        $("#email").siblings().find(".ok").css("visibility","visible"); 
	         $("#email").parents().children(":last-child").children("span").html("通过").css("color","green");
	    }
	});
	$("#phone").keyup(()=>{
	   var phone=$("#phone").val();	  
	   var pReg=/^(\+86|0086)?\s*1[34578]\d{9}$/;
	    if(!pReg.test(phone)){
	       $("#phone").siblings().find(".err").css("visibility","visible");
	       $("#phone").parents().children(":last-child").children("span").html("手机号码格式不正确").css("color","red");
	      
	    }else{
	        $("#phone").siblings().find(".err").css("visibility","hidden");   
	        $("#phone").siblings().find(".ok").css("visibility","visible"); 
	        $("#phone").parents().children(":last-child").children("span").html("通过").css("color","green");
	    }
	});
	$("#tiaoyue").click(()=>{
		var check=$("#tiaoyue").attr("src");
		var no="img/no.png";
		var yes="img/yes.png";
		if(check==no){
			$("#tiaoyue").attr("src","img/yes.png")
		}else if(check==yes){
			$("#tiaoyue").attr("src","img/no.png")
		}
	})

	$("#btn").click(()=>{
		var check=$("#tiaoyue").attr("src");
		var no="img/no.png";		
		if(check==no){ alert ("请勾选闲乎条款") ;}else{
		var uname=$.trim( $("#uname").val());
		var upwd=$.trim( $("#upwd").val());
		var email=$("#email").val();
		var phone=$("#phone").val();
		$.ajax({
            type:'post',
            url:'data/register.php',
            data:{uname:uname,upwd:upwd,email:email,phone:phone},
            success:function (data){
            	if(data.code==1){
            		alert(data.msg);
                    location.replace("admin.html");
				}
			},error:function () {
            	alert("网络故障");
            }
		})

		}
	})
	