import { handleClientRegister, handleClientLogin } from './controller.js'
console.log('view gut')
elRegisterButton.onclick = onClickButtonRegister
elLoginButton.onclick = onClickButtonLogin

function onClickButtonRegister() {
  let email = emailSignup.value
  let passwd = passwordSignup.value
  let repeatpasswd = repeatpasswordSignup.value
  let firstName = firstnameSignup.value
  let lastName = lastnameSignup.value
  if (passwd === repeatpasswd) {
    handleClientRegister(email, passwd, firstName, lastName)
  }
  emailSignup.value = ''
}

function onClickButtonLogin() {
  let email = emailSignin.value
  let passwd = passwordSignin.value
  handleClientLogin(email, passwd)
}
