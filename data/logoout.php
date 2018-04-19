<?php
require("init.php");
session_start();
$_SESSION["uid"]=null;
 echo '{"code":1,"msg":"注销成功"}';
?>