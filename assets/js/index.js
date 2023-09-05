let Login = document.querySelector("#login");
let Cad = document.querySelector("#cad");
let Sair = document.querySelector("#sair")

if (localStorage.getItem('token') == null) {
    // alert('Você precisa estar logado para acessar essa página')
    // window.location.href = "../assets/html/signin.html"
    Login.setAttribute('style', 'display: flex')

} else {
    let userLogado = JSON.parse(localStorage.getItem('userLogado'))

    let logado = document.querySelector('#logado')
    logado.innerHTML = 'Olá, ' + userLogado.nome + '!';

    Sair.setAttribute('style', 'display: flex')
    Cad.setAttribute('style', 'display: flex')
}


// Listar Games
let listaGames = JSON.parse(localStorage.getItem('listaGames'))

let game = document.querySelector('#game')
let genero = document.querySelector('#genero')
let dev = document.querySelector('#dev')
let release = document.querySelector('#release')
let plataforma = document.querySelector('#plataforma')

game.innerHTML = listaGames[0].game;
genero.innerHTML = "Gênero: " + listaGames[0].genero;
dev.innerHTML = "Desenvolvedora: " + listaGames[0].dev;
release.innerHTML = "Data de Lançamento: " + listaGames[0].release;
plataforma.innerHTML = "Plataformas: " + listaGames[0].plataforma;
img.setAttribute('src', listaGames[0].link);

function sair() {
    localStorage.removeItem('token')
    localStorage.removeItem('userLogado')
    window.location.reload(true);
    alert("Logout realizado! Volte Sempre!")
}
