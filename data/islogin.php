<?php
require("init.php");
session_start();
@$uid=$_SESSION["uid"];
if($uid){
    $sql="select uname from xh_user where uid=$uid";
		$result=mysqli_query($conn,$sql);
		$user=mysqli_fetch_all($result,1);
		$output=["ok"=>1,"uname"=>$user[0]["uname"]];
	}
	echo json_encode($output);
?>