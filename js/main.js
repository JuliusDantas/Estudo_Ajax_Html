function consultaCep(){
    $(".br-progress").show();
    $(".ex-image").hide();
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";
    
    $.ajax({
        url:url,
        type:"GET",
        success: function(response){
            console.log(response);
            $("#logradouro").html("Logradouro: " + response.logradouro);
            $("#bairro").html(response.bairro);
            $("#cidade").html(response.localidade);
            $("#uf").html(response.uf);
            $("#exibeCep").html("CEP: " + response.cep);
            $(".ex-image").show();
            $(".br-progress").hide();
            //document.getElementById("logradouro").innerHTML = response.logradouro;
            //document.getElementById("bairro").innerHTML = response.bairro;
            //document.getElementById("cidade").innerHTML = response.localidade;
            //alert("Rua: " + response.logradouro);
        }
    })

   
}

$(function(){
    $(".ex-image").hide();
    $(".br-progress").hide();
});