import {
  clientLogin,
  clientRegister,
  clientAccount,
} from './model/client/clientAccount.js'
import {
  clientReceive,
  clientSend,
  clientAllEmail,
} from './model/client/clientEmails.js'

import './view.js'

function handleClientRegister(email, passwd, firstName, lastName) {
  clientRegister(email, passwd, firstName, lastName)
}
function handleClientLogin(email, passwd) {
  clientLogin(email, passwd)
}
function handleClientReceive() {
  clientReceive()
}
// function handle() {
//   render
// }
function handleClientSend(recipient, subject, text) {
  clientSend(recipient, subject, text)
}

export {
  handleClientRegister,
  handleClientLogin,
  handleClientReceive,
  handleClientSend,
}
