<?php


$servidor = "localhost";
$usuario = "root";
$senha = "";
$banco = "cep";

$conn =  mysqli_connect($servidor, $usuario, $senha, $banco);

if (!$conn) die ("<h1>Falha na conexão com o Banco de Dados!</h1>");




if (isset($_POST['data']))
{
  $dados = $_POST["data"];
  echo $dados;
  echo " Sucesso";
} 
else 
{
  $dados = null;
  echo "Sem informações";
}  
?>