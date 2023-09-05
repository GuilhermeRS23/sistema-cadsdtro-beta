if (localStorage.getItem('token') == null) {
    alert('Você precisa estar logado para acessar essa página')
    window.location.href = "./signin.html"
    }
    
let game = document.querySelector("#game");
let label_game = document.querySelector("#label_game");
let validGame = false;

let genero = document.querySelector("#genero");
let label_genero = document.querySelector("#label_genero");
let validGenero = false;

let dev = document.querySelector("#dev");
let label_dev = document.querySelector("#label_dev");
let validDev = false;

let release = document.querySelector("#release");
let label_release = document.querySelector("#label_release");
let validRelease = false;

let plataforma = document.querySelector("#plataforma");
let label_plataforma = document.querySelector("#label_plataforma");
let validPlataforma = false;

let link = document.querySelector("#link");
let label_link = document.querySelector("#label_link");
let validlink = false;

let msgError = document.querySelector("#msgError");
let msgSucess = document.querySelector("#msgSucess");

game.addEventListener('keyup', () => {
    if (game.value.length <= 3) {
        label_game.setAttribute('style', 'color: red')
        game.setAttribute('style', 'border-color: red')
        validGame = false;
    } else {
        label_game.setAttribute('style', 'color: greenyellow')
        label_game.innerHTML = 'Game'
        game.setAttribute('style', 'border-color: green')
        validGame = true;
    }
})

genero.addEventListener('keyup', () => {
    if (genero.value.length <= 2) {
        label_genero.setAttribute('style', 'color: red')
        genero.setAttribute('style', 'border-color: red')
        validGenero = false;
    } else {
        label_genero.setAttribute('style', 'color: greenyellow')
        genero.setAttribute('style', 'border-color: green')
        validGenero = true;
    }
})

dev.addEventListener('keyup', () => {
    if (dev.value.length <= 2) {
        label_dev.setAttribute('style', 'color: red')
        dev.setAttribute('style', 'border-color: red')
        validDev = false;
    } else {
        label_dev.setAttribute('style', 'color: greenyellow')
        dev.setAttribute('style', 'border-color: green')
        validDev = true;
    }
})

release.addEventListener('keyup', () => {
    if (release.value.length <= 8) {
        label_release.setAttribute('style', 'color: red')
        release.setAttribute('style', 'border-color: red')
        validRelease = false;
    } else {
        label_release.setAttribute('style', 'color: greenyellow')
        release.setAttribute('style', 'border-color: green')
        validRelease = true;
    }
})

plataforma.addEventListener('keyup', () => {
    if (plataforma.value.length <= 1) {
        label_plataforma.setAttribute('style', 'color: red')
        senha.setAttribute('style', 'border-color: red')
        validPlataforma = false;
    } else {
        label_plataforma.setAttribute('style', 'color: greenyellow')
        plataforma.setAttribute('style', 'border-color: green')
        validPlataforma = true;
    }
})

link.addEventListener('keyup', () => {
    if (link.value.length <= 3) {
        label_link.setAttribute('style', 'color: red')
        link.setAttribute('style', 'border-color: red')
        validlink = false;
    } else {
        label_link.setAttribute('style', 'color: greenyellow')
        link.setAttribute('style', 'border-color: green')
        validlink = true;
    }
})
//FRONT
function cadastrar() {
    if (validGame && validGenero && validDev && validRelease && validPlataforma && validlink) {
        let game_list = JSON.parse(localStorage.getItem('game_list') || '[]')

        game_list.push(
            {
                game: game.value,
                genero: genero.value,
                dev: dev.value,
                release: release.value,
                plataforma: plataforma.value,
                link: link.value
            }
        )

        localStorage.setItem('listaGames', JSON.stringify(game_list))
        
        msgSucess.setAttribute('style', 'display: block')
        msgSucess.innerHTML = '<strong> GG! Carregando Game ... </strong>'
        msgError.setAttribute('style', 'display: none')
        msgError.innerHTML = ''

        setTimeout(() => {
            window.location.href = "/index.html"
        }, 3000)

    } else {
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = '<strong> Game Over! Preencha todos os campos </strong>'
        msgSucess.setAttribute('style', 'display: none')
        msgSucess.innerHTML = ''
    }
}