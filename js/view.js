import { handleClientRegister, handleClientLogin } from './controller'

elRegisterButton.onclick = onClickButtonRegister
elLoginButton.onclick = onClickButtonLogin

function onClickButtonRegister() {
  emailSignup.value = email
  passwordSignup.value = passwd
  repeatpasswordSignup.value = repeatpasswd
  firstnameSignup.value = firstName
  lastnameSignup.value = lastName
  if (passwd === repeatpasswd) {
    handleClientRegister(email, passwd, firstName, lastName)
  }
}

function onClickButtonLogin() {
  emailSignin.value = email
  passwordSignin.value = passwd
  handleClientLogin(email, passwd)
}
