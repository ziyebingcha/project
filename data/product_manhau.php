<?php
require("init.php");
//header("Content-Type:application/json;charset=utf-8");
@$pno=$_REQUEST["pno"];
if($pno==null){
    $pno=1;
}else{
    $pno=intval($_REQUEST["pno"]);
    }
@$pageSize=$_REQUEST["pageSize"];
if(!$pageSize){
    $pageSize=1;
}else{
    $pageSize=intval($_REQUEST["pageSize"]);
}
$of=($pno-1)*$pageSize;
$sql=" select mid,sm,lg,scene,boyNO,girlNO,story from xh_manhua limit $of,$pageSize ";
$result=mysqli_query($conn,$sql);
$arr=mysqli_fetch_all($result,MYSQLI_ASSOC);
if(mysqli_error($conn)){
   echo mysqli_error($conn);
}
$sql=" select count(*) from xh_manhua ";
$result=mysqli_query($conn,$sql);
$row=mysqli_fetch_row($result);//总条数
$pageCount=ceil($row[0]/$pageSize);//总页数
$output=[
    "recordCount"=>$row[0],
    "pageCount"=>$pageCount,
    "pno"=>$pno,
    "pageSize"=>$pageSize,
    "data"=>$arr
    ];
echo json_encode($output);
?>