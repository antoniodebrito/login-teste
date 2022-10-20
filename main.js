const admin = {
  "admin": "admin@admin.com",
  "senha": "123456",
  }




localStorage.setItem("admin", JSON.stringify(admin));
const getAdmin = localStorage.getItem("admin");
const adminObject = JSON.parse(getAdmin);
const email = adminObject.admin
const senha = adminObject.senha
const inputEmail = document.querySelector('[name=email]');
const inputSenha = document.querySelector('[name=senha]');
const button = document.querySelector('.button');

button.addEventListener('click', () => {
  const emailValue = inputEmail.value
  const senhaValue = inputSenha.value

  if (emailValue === email && senhaValue === senha) {
    errorMessage('logado com sucesso') 
  } else if(emailValue === "" && senhaValue === ""){ 
    errorMessage('preencha todos os campos')
  } else {
    auth(emailValue, senhaValue)
  }
})


const auth = (emailValue, senhaValue) => {

  if (emailValue === "") {
    errorMessage('Insira seu email')
    return
  }

  if (emailValue != email) {
    errorMessage('Email incorreto')
    return 
  }

  if (senhaValue === "") {
    errorMessage('Insira sua senha')
    return
  }

  if (senhaValue != senha) {
    errorMessage('Senha incorreta')
    return
  }

}

const errorMessage = ( message) => {
  alert(message)
}

