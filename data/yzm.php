<?php
      session_start();
      require("init.php");
      $yzm=$_REQUEST["yzm"];
      $code=$_SESSION["code"];
      if($code!=$yzm){
          echo '{"code":-1,"msg":"验证码不正确"}';
          exit;
      }else{echo '{"code":1,"msg":"验证码通过"}';}