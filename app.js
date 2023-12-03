const url ='https://replit.com/@dantonlucassaga/JSONServer-Cachoeiras#db.json'
let Cachoeiras = []
fetch(url)
    .then(function(response) {return response.json})
    .then(function(dados){
        Cachoeiras = dados
        console.log ('Dados Carregados!')
    })

// let Cachoeiras = [
//     {
//         "id": 1,
//         "capa": "img/Cachoeira das andorinhas.jpg",
//         "titulo": "Cachoeira das Andorinhas",
//         "localizacao": "Serra do Cipó, MG",
//         "descritivo": "De beleza natural singular, esta cachoeira tem uma queda-d’água de cerca de 10 metros de altura, situada no interior de uma formação rochosa que se assemelha a uma gruta.",
//         "location_coordinates": "-19.342292473194348, -43.557521457671086"
//     },
//     {
//         "id": 2,
//         "capa": "img/Cachoeira do Sucupira.jpg",
//         "titulo": "Cachoeira do Sucupira",
//         "localizacao": "Uberlândia, MG",
//         "descritivo": "A Cachoeira possui paisagem apaixonante e queda com 15 metros de altura. O acesso à cachoeira é fácil e seu paredão em 'meia-lua' de 30 metros de largura é de tirar o fôlego.",
//         "location_coordinates": "-18.988470622360314, -48.166443060897215"
//     },
//     {
//         "id": 3,
//         "capa": "img/cachoeira do tabuleiro.png",
//         "titulo": "Cachoeira dos Cristais",
//         "localizacao": "Rio Acima, MG",
//         "descritivo": "A Cachoeira do Tabuleiro com seus 273m de queda livre é a mais alta de Minas Gerais e a terceira mais alta do Brasil.",
//         "location_coordinates": "-20.092415294926937, -43.752585108769026"
//     },
//     {
//         "id": 4,
//         "capa": "img/Cachoeira grande cerra do sipo.jpg",
//         "titulo": "Cachoeira Grande Serra do Cipó",
//         "localizacao": "Serra do Cipó, MG",
//         "descritivo": " A extensão privilegiada e seus 10 metros de altura formam um poço idealpara banho. É uma belíssima cachoeira, sem dúvida e, em dias de sol, é possível se aventurar entre suas quedas.",
//         "location_coordinates": "-19.344543610303628, -43.64082291981264"
//     },
//     {
//         "id": 5,
//         "capa": "img/Cachoeirados garcias.jpg",
//         "titulo": "Cachoeira das Andorinhas",
//         "localizacao": "Aiuruoca - MG",
//         "descritivo": "Da cachoeira nasce o Ribeirão do Papagaio, que desagua no Rio Aiuruoca. Aos pés da cachoeira forma-se um tanque arredondado de 10 m de diâmetro",
//         "location_coordinates": "-22.02483900866189, -44.67398870056956"
//     },
//     {
//         "id": 6,
//         "capa": "img/cachoeira da fumaça.jp",
//         "titulo": "Cachoeira da Fumaça",
//         "localizacao": "Nova Ponte - MG, 38160-000",
//         "descritivo": "A Cachoeira da Fumaça está localizada no município de Rio Claro, e é considerada a maior vazão de água do Triângulo Mineiro. A cachoeira possui uma queda d´água de aproximadamente 60 metros de altura e 50 metros de largura",
//         "location_coordinates": "-19.052348475153277, -47.75611356282337"
//     }
    
// ];

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
