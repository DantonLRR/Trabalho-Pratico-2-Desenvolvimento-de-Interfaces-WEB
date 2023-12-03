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
            console.log('Dados de Cachoeiras Carregados!');
        });

    const promiseDestaques = fetch(urlDestaques)
        .then(response => response.json())
        .then(function (dados) {
            Destaques = dados;
            console.log('Dados de Destaques Carregados!');
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

