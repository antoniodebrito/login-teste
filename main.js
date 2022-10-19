const admin = {
  "admin": "exemplo@email.com",
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
  auth()
})


const auth = () => {
  const inputEmailValue = inputEmail.value.trim();
  const inputSenhaValue = inputSenha.value.trim();

  if (inputEmailValue === "") {
    errorValidation('Insira seu email')
  }

  if (inputSenhaValue === "") {
    errorValidation('Insira sua senha')
  }

}

const errorValidation = ( message) => {
  alert(message)
  signIn()
}


const signIn = () => {
  let isEmailOk = email === inputEmail.value
  let isPasswordOk = senha === inputSenha.value

  if (isEmailOk && isPasswordOk) {
    alert('Logado com sucesso')
  }
}


