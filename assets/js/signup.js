let nome = document.querySelector("#nome");
let label_nome = document.querySelector("#label_nome");
let validNome = false;

let email = document.querySelector("#email");
let label_email = document.querySelector("#label_email");
let validEmail = false;

let nascimento = document.querySelector("#nascimento");
let label_nascimento = document.querySelector("#label_nascimento");
let validNascimento = false;

let telefone = document.querySelector("#telefone");
let label_telefone = document.querySelector("#label_telefone");
let validTelefone = false;

let senha = document.querySelector("#senha");
let label_senha = document.querySelector("#label_senha");
let validSenha = false;

let confirmarSenha = document.querySelector("#confirmarSenha");
let label_confirmarSenha = document.querySelector("#label_confirmarSenha");
let validConfirmarSenha = false;

let msgError = document.querySelector("#msgError");
let msgSucess = document.querySelector("#msgSucess");

nome.addEventListener('keyup', () =>{
    if(nome.value.length <= 3){
        label_nome.setAttribute('style', 'color: red')
      label_nome.innerHTML = 'Nome *Insira no mínimo 4 caracteres'
      nome.setAttribute('style', 'border-color: red')
      validNome = false;
    }else{
      label_nome.setAttribute('style', 'color: greenyellow')
      label_nome.innerHTML = 'Nome'
      nome.setAttribute('style', 'border-color: green')
      validNome = true;
    }
})

email.addEventListener('keyup', () =>{
    if(email.value.length <= 6){
        label_email.setAttribute('style', 'color: red')
      email.setAttribute('style', 'border-color: red')
      validEmail = false;
    }else{
      label_email.setAttribute('style', 'color: greenyellow')
      email.setAttribute('style', 'border-color: green')
      validEmail = true;
    }
})

nascimento.addEventListener('keyup', () =>{
    if(nascimento.value.length <= 8){
        label_nascimento.setAttribute('style', 'color: red')
      nascimento.setAttribute('style', 'border-color: red')
      validNascimento = false;
    }else{
      label_nascimento.setAttribute('style', 'color: greenyellow')
      nascimento.setAttribute('style', 'border-color: green')
      validNascimento = true;
    }
})

telefone.addEventListener('keyup', () =>{
    if(telefone.value.length <= 10){
        label_telefone.setAttribute('style', 'color: red')
      label_telefone.innerHTML = 'Celular *Insira no mínimo 12 caracteres'
      telefone.setAttribute('style', 'border-color: red')
      validTelefone = false;
    }else{
      label_telefone.setAttribute('style', 'color: greenyellow')
      label_telefone.innerHTML = 'Celular'
      telefone.setAttribute('style', 'border-color: green')
      validTelefone = true;
    }
})

senha.addEventListener('keyup', () =>{
    if(senha.value.length <= 5){
        label_senha.setAttribute('style', 'color: red')
      label_senha.innerHTML = 'Senha *Insira no mínimo 6 caracteres'
      senha.setAttribute('style', 'border-color: red')
      validSenha = false;
    }else{
      label_senha.setAttribute('style', 'color: greenyellow')
      label_senha.innerHTML = 'Senha'
      senha.setAttribute('style', 'border-color: green')
      validSenha = true;
    }
})

confirmarSenha.addEventListener('keyup', () => {
    if (senha.value != confirmarSenha.value) {
        label_confirmarSenha.setAttribute('style', 'color: red')
        label_confirmarSenha.innerHTML = 'As Senhas não conferem'
        confirmarSenha.setAttribute('style', 'border-color: red')
        validConfirmarSenha = false;
    } else {
        label_confirmarSenha.setAttribute('style', 'color: greenyellow')
        label_confirmarSenha.innerHTML = 'Senha Confirma'
        confirmarSenha.setAttribute('style', 'border-color: green')
      validConfirmarSenha = true;
    }
})

function cadastrar() {
if(validNome && validEmail && validNascimento && validTelefone && validSenha && validConfirmarSenha){
  let lista_user = JSON.parse(localStorage.getItem('lista_user') || '[]')
  
  lista_user.push(
    {
      nome: nome.value,
      email: email.value,
      nascimento: nascimento.value,
      telefone: telefone.value,
      senha: senha.value
    }
  )
  
  localStorage.setItem('listaUser',JSON.stringify(lista_user))
  //FICA NO FRONT
  msgSucess.setAttribute('style', 'display: block')
  msgSucess.innerHTML = '<strong> Show! Cadastrando Usuário ... </strong>'
  msgError.setAttribute('style', 'display: none')
  msgError.innerHTML = ''
  
  setTimeout(()=>{
    window.location.href = "/assets/html/signin.html"
  }, 3000)
  
  //FICA NO FRONT
}else{
  msgError.setAttribute('style', 'display: block')
  msgError.innerHTML = '<strong> Ops! Preencha todos os campos </strong>'
  msgSucess.setAttribute('style', 'display: none')
  msgSucess.innerHTML = ''
}
}