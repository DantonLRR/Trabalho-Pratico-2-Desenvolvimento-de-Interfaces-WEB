const url = 'https://jsonserver-cachoeiras--dantonlucassaga.repl.co/Cachoeiras';
let Cachoeiras = [];
let Destaques = [];
fetch(url)
    .then(function (response) { return response.json() })
    .then(function (dados) {
        Cachoeiras = dados;
        console.log('Dados de Cachoeiras Carregados!');

        const urlDestaques = 'https://jsonserver-cachoeiras--dantonlucassaga.repl.co/Destaques';

        fetch(urlDestaques)
            .then(function (response) { return response.json() })
            .then(function (dados) {
                Destaques = dados;
                console.log('Dados de Destaques Carregados!');
            });
    });

$(document).ready(function () {
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


$(document).ready(function () {
    let ulFotosDestaque = $('#CarrousselDeFotos');
    let strImagemDestaque = "";
    for (let i = 0; i < Destaques.length; i++) {
        let Destaque = Destaques[i];

        strImagemDestaque += ` <div>   
        <a href="">
        <img src="${Destaque.image}" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
            <h5>${Destaque.titulo}</h5>
            <p>${Destaque.localizacao} </p>

            </p>
        </div>
    </a>
    </div> `
            ;

    }
    ulFotosDestaque.html(strImagemDestaque);
});
