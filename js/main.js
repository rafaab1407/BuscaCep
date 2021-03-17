

$("#buscar").on("click", function(){

    var numCep = $("#cep").val();
    alert(numCep);
    var url = "https://viacep.com.br/ws/"+numCep+"/json";
    

    $.get(url, function(dados){

      var cepInformacoes = JSON.stringify(dados);
      

      $.ajax({
        url: 'http://localhost/buscaCep/conexao/conexao.php',
        type: 'POST',
        data:  {data:cepInformacoes},
        dataType:'json',
        
        success: function(result){
          
        },
        error: function(jqXHR, textStatus, errorThrown) {
          
        }
      });
      
      console.log("enviado");

    })

      
      
    
   

    

    

}) 