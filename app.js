const url ='https://jsonserver-cachoeiras--dantonlucassaga.repl.co/Cachoeiras'
let Cachoeiras = []
fetch(url)
    .then(function(response) {return response.json()})
    .then(function(dados){
        Cachoeiras = dados
        console.log ('Dados Carregados!')
    })


$(document).ready(function(){
    let ulgaleriaDeFotos = $('#galeriaDeFotos');
    let strTextoHTML = "";
    for (let i = 0; i < Cachoeiras.length; i++) {
        let Cachoeira = Cachoeiras[i];

        strTextoHTML += ` <div class="col-md-4 mb-4">
        <div class="card h-100">
            <a href="detalhes.html">
                <img src="${Cachoeira.capa}" class="card-img-top" alt="Imagem 1"
                    style="max-height: 200px;">
            </a>
            <div class="card-body">
                <h2 class="card-title"><li>${Cachoeira.titulo}</li></h2>
                <h5<li>${Cachoeira.localizacao}</li></h2>
                <p class="card-text">${Cachoeira.descritivo}</p>
            </div>
        </div>
    </div>`;
  
    }
    ulgaleriaDeFotos.html(strTextoHTML);
});
