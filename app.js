// const url = 'https://jsonserver-cachoeiras--dantonlucassaga.repl.co/Cachoeiras';
// let Cachoeiras = [];
// let Destaques = [];
// fetch(url)
//     .then(function (response) { return response.json() })
//     .then(function (dados) {
//         Cachoeiras = dados;
//         console.log('Dados de Cachoeiras Carregados!');

//         const urlDestaques = 'https://jsonserver-cachoeiras--dantonlucassaga.repl.co/Destaques';

//         fetch(urlDestaques)
//             .then(function (response) { return response.json() })
//             .then(function (dados) {
//                 Destaques = dados;
//                 console.log('Dados de Destaques Carregados!');
//             });
//     });


const urlCachoeiras = 'https://jsonserver-cachoeiras--dantonlucassaga.repl.co/Cachoeiras';
const urlDestaques = 'https://jsonserver-cachoeiras--dantonlucassaga.repl.co/Destaques';

let Cachoeiras = [];
let Destaques = [];

function carregarDados() {
    const promiseCachoeiras = fetch(urlCachoeiras)
        .then(response => response.json())
        .then(function (dados) {
            Cachoeiras = dados;
            // console.log('Dados de Cachoeiras Carregados!');
        });

    const promiseDestaques = fetch(urlDestaques)
        .then(response => response.json())
        .then(function (dados) {
            Destaques = dados;
            // console.log('Dados de Destaques Carregados!');
        });

    return Promise.all([promiseCachoeiras, promiseDestaques]);
}

carregarDados()
    .then(() => {
        console.log('Cachoeiras:', Cachoeiras);
        console.log('Destaques:', Destaques);
    })
    .catch(error => {
        console.error('Erro ao carregar dados:', error);
    });



function loadMap() {

    const urlBase = 'https://jsonserver-cachoeiras.dantonlucassaga.repl.co';
    const urlMapa = `${urlBase}/Cachoeiras`;

    fetch(urlMapa)
        .then(response => response.json())
        .then(json => {
            console.log('JSON do mapa:', json);
            json.forEach((item) => {

                var popup = new mapboxgl.Popup({ offset: 25 })
                    .setHTML(`<h5>
                    <a href="detalhe_album.html?id=${item.id}" target="_blank">
                    <img src="${item.capa}" class="card-img-top" alt="Imagem 1" style="object-fit: cover; height: 100px;">
                    ${item.titulo}
                    
                    </h5>
                    <br>
                              ${item.descritivo} <br>`);
                const marker = new mapboxgl.Marker({ color: "blue"})
                    .setLngLat(item.location_coordinates)
                    .setPopup(popup)
                    .addTo(map);

            })

        })
        .catch(error => {
            console.error('Erro ao obter JSON do mapa:', error);
        });
}

window.addEventListener("load", (ev) => {
    loadMap(ev)
})