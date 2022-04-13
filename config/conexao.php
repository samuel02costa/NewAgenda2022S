<?php
  try{
     DEFINE('HOST','localhost');
     DEFINE('BD','bd_Agenda');
     DEFINE('USER','root');
     DEFINE('PASS','bdjmf');
     $conect = new PDO('mysql:host='.HOST.';dbname='.BD,USER,PASS);
     $conect -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

 }catch(PDOException $erro){
     echo "<strong>ERRO DE PDO = </strong>".$erro->getMessage();

  }