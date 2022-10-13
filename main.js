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



const auth = () => {
  let isEmailOk = email === inputEmail.value
  let isPasswordOk = senha === inputSenha.value

  if (isEmailOk && isPasswordOk) {
    alert('Logado com sucesso')
  } else {
    alert("e-mail ou senha incorretos");
  }
}
