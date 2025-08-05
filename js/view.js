import {
  handleClientRegister,
  handleClientLogin,
  handleClientReceive,
} from './controller.js'
console.log('view gut')
elRegisterButton.onclick = onClickButtonRegister
elLoginButton.onclick = onClickButtonLogin
elIncomeButton.onclick = onClickButtonIncome
elOutcomeButton.onclick = onClickButtonOutcome
elSendButton.onclick = onClickButtonSend

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
function onClickButtonIncome() {
  handleClientReceive()
}
// function onClickButtonOutcome() {
//   handleClientSend(recipient, subject, text)
// }
function onClickButtonSend() {
  let recipient = elRecipient.value
  let subject = elSubject.value
  let text = elText.value
  handleClientSend(recipient, subject, text)
}

// window.location.href = 'sign_in.html'
// window.location.href = 'all_email.html'
