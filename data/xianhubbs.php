<?php
require("init.php");
@$pno=$_REQUEST["pno"];
if($pno==null){
    $pno=1;
}else{
    $pno=intval($_REQUEST["pno"]);
    }
@$pageSize=$_REQUEST["pageSize"];
if(!$pageSize){
    $pageSize=7;
}else{
    $pageSize=intval($_REQUEST["pageSize"]);
}
$of=($pno-1)*$pageSize;
$sql=" select bid,title,nickname,answer,wtime from xh_bbs order by wtime desc limit $of,$pageSize";
$result=mysqli_query($conn,$sql);
$arr=mysqli_fetch_all($result,MYSQLI_ASSOC);
if(mysqli_error($conn)){
   echo mysqli_error($conn);
}
$sql=" select count(*) from xh_bbs ";
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