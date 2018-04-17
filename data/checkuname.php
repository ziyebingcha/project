<?php
require("init.php");
$uname=$_REQUEST["uname"];
$sql="select * from xh_user where uname='$uname' ";
//SELECT * FROM `xh_user` WHERE `uname`='qingfei'
$result=mysqli_query($conn,$sql);
//var_dump($result);
$row=mysqli_fetch_row($result);
//var_dump($row);
if($row){
		echo '{"code":1,"msg":"用户名已存在"}';
	}else{
		echo '{"code":-1,"msg":"提交失败"}';
	}
?>