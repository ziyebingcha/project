<?php
   require("init.php");
   $uname=$_REQUEST["uname"];
   $upwd=$_REQUEST["upwd"];
   $email=$_REQUEST["email"];
   $phone=$_REQUEST["phone"];
    if(!$uname){
      echo '{"msg":"请输入用户名"}';
      exit;
   }else if(!$upwd){
      echo '{"msg":"请输入密码"}';
      exit;
   }
   $sql="insert into xh_user(uname,upwd,email,phone) values('$uname','$upwd','$email',$phone)";
   $result=mysqli_query($conn,$sql);
   if($result){
       echo '{"code":1,"msg":"注册成功"}';
   }else{
       echo '{"code":-1,"msg":"注册失败"}';
   }
?>