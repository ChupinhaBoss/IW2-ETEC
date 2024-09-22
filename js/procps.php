<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
   <link rel="stylesheet" type="text/css" href="css/style.css">
   <script src="js/redireciona.js"></script>
   <title>Concluído</title>
</head>
<body>
      <div>
         <p></p>
      </div>
</body>
</html>

<?php

  include('banco.php');
  // variaveis vinda na url
  $nome = $_GET['nome'];
  $data = $_GET['data'];
  $email = $_GET['email'];
  $telefone = $_GET['telefone'];
  $assunto = $_GET['assunto'];
  $mensage = $_GET['mensage'];
  $senha = $_GET['senha'];
  $cpf = $_GET['cpf'];
  $rg = $_GET['rg'];


   // fazer um string sql 

   $sql = " INSERT INTO TB_PESSOAL (
               NOME,
               DATANASC,
               EMAIL,
               TELEFONE,
               ASSUNTO,
               MENSAGEM,
               SENHA,
               CPF,
               RG
               )
               VALUES(
                  '$nome',
                  '$data',
                  '$email',
                  '$telefone',
                  '$assunto' ,
                  '$mensage ',
                  '$senha',
                  '$cpf',
                  '$rg'
               )

                   ";
    
    // executa o sql
    
   if(mysqli_query($conn, $sql)){
      echo "
      <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
      <div class='row'>
         <div class='col'>
         </div>
         <div class='col'>
            <div class='container d-flex justify-content-center fundon border-bottom border-5 border-light-subtle shadow-lg'>
               <p class='mt-1'>Registro concluído com sucesso!! Redirecionando emㅤ</p> <p class='mt-1' id=\"segundos\"><b>5</b></p> <p class='mt-1'>ㅤsegundos. </p>
            </div>
         </div>
         <div class='col'>
         </div>
      </div>
      ";
   }else{
       echo "Não! Escola não é lugar de dormir!!!";
   }



   //
   mysqli_close($conn);
?>

