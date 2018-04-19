<?php
require("init.php");
session_start();
$uname=$_REQUEST["uname"];
$upwd=$_REQUEST["upwd"];
$sql="select * from xh_user where( uname='$uname' and upwd='$upwd')or(email='$uname' and upwd='$upwd')or(phone='$uname' and upwd='$upwd')";
$result=mysqli_query($conn,$sql);
$row = mysqli_fetch_all($result,1);
//var_dump($row);
if(count($row)!=0){
	$_SESSION["uid"]=$row[0]["uid"];
//    echo $_SESSION["uid"];
    echo '{"code":1,"msg":"登录成功"}';
 }else{
	echo '{"code":-1,"msg":"用户名或密码错误"}';
 }
?>