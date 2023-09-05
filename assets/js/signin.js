function entrar() {
  let email = document.querySelector("#email")
  let email_label = document.querySelector("#email_label")

  let senha = document.querySelector("#senha")
  let senha_label = document.querySelector("#senha_label")

  let msgError = document.querySelector("#msgError")
  let listaUser = []

  UserValid = {
    nome: "null",
    email: "null",
    senha: "null"
  }

  listaUser = JSON.parse(localStorage.getItem('listaUser'))

  listaUser?.forEach((item) => {
    if (email.value == item.email && senha.value == item.senha) {
      UserValid = {
        nome: item.nome,
        email: item.email,
        senha: item.senha
      }
    }
  })

  if (email.value == UserValid.email && senha.value == UserValid.senha) {
    window.location.href = "/index.html"

    let token = Math.random().toString(16).substr(2) + Math.random().toString(16).substr(2)
    
    localStorage.setItem("token", token)
    localStorage.setItem("userLogado", JSON.stringify(UserValid));

  } else {
    email_label.setAttribute('style', 'color: red')
    email.setAttribute('style', 'border-color: red')
    senha_label.setAttribute('style', 'color: red')
    senha.setAttribute('style', 'border-color: red')
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = "Usuário ou Senha incorretos"
    email.focus();
  }
}