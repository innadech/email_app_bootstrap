import {
  clientAccount,
  clientLogin,
  clientRegister,
} from '../client/clientAccount.js'

function handleClientRegister(email, passwd, firstName, lastName) {
  clientRegister(email, passwd, firstName, lastName)
  window.location.href = 'sign_in.html'
}
function handleClientLogin(email, passwd) {
  clientLogin(email, passwd)
  window.location.href = 'all_email.html'
}

export { handleClientRegister, handleClientLogin }
