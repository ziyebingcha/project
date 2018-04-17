<?php
require ("init.php");
$title=$_REQUEST["title"];
if(!$title){
	echo '{"msg":"用户名不正确"}';
	exit;
	}
$nickname=$_REQUEST["nickname"];
$sql="insert into xh_bbs (nickname,title,wtime)values('$nickname','$title',now())";
$result=mysqli_query($conn,$sql);
if($result){
		echo '{"code":1,"msg":"提交成功，工作人员3个工作日内给出回复"}';
	}else{
		echo '{"code":-1,"msg":"提交失败"}';
	}
?>