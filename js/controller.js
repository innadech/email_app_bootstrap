import {
  clientAccount,
  clientLogin,
  clientRegister,
} from '../client/clientAccount.js'

const elRegisterButton = document.querySelector('#signup')
const elLoginButton = document.querySelector('#signin')
elRegisterButton.onclick = onClickButtonRegister
elLoginButton.onclick = onClickButtonLogin

function onClickButtonRegister() {
  const elInputEmail = document.querySelector('#email')
  elInputEmail.value = email
  const elInputPassword = document.querySelector('#password')
  elInputPassword.value = passwd
  const elInputRepeatPassword = document.querySelector('#repeatpassword')
  elInputRepeatPassword.value = repeatpasswd
  const elInputName = document.querySelector('#firstname')
  elInputName.value = firstName
  const elInputLastName = document.querySelector('#lastname')
  elInputLastName.value = lastName
  if (passwd === repeatpasswd) {
    clientRegister(email, passwd, firstName, lastName)
  }
}
function onClickButtonLogin() {
  const elInputEmail = document.querySelector('#email')
  elInputEmail.value = email
  const elInputPassword = document.querySelector('#password')
  elInputPassword.value = passwd
  clientLogin(email, passwd)
}
