import { clientLogin, clientRegister } from './model/client/clientAccount.js'
import {
  clientReceiveIncoming,
  clientReceiveOutcoming,
  clientSend,
  clientInbox,
  clientOutbox,
  getEmailById,
} from './model/client/clientEmails.js'

import './view.js'
import {
  renderEmailsList,
  renderSignUpPage,
  renderSignInPage,
  renderSendPage,
} from './view.js'

import { clientAccount } from './model/client/clientAccount.js'

function handleClientRegister(email, passwd, firstName, lastName) {
  const isOk = clientRegister(email, passwd, firstName, lastName)
  if (isOk) {
    renderSignUpPage()
  }
}
function handleClientLogin(email, passwd) {
  const isOk = clientLogin(email, passwd)
  if (isOk) {
    renderSignInPage()
    renderMainPage(clientAccount)
    renderEmailsList(clientInbox)
    renderEmailsList(clientOutbox)
  }
}
function handleClientReceiveIncoming() {
  clientReceiveIncoming()
  renderEmailsList(clientInbox)
}
function handleClientReceiveOutcoming() {
  clientReceiveOutcoming()
  renderEmailsList(clientOutbox)
}
function handleClientSend(recipient, subject, text) {
  clientSend(recipient, subject, text)
  renderSendPage()
}
function handleEmailSheet(id) {
  const email = getEmailById(id, clientInbox)
  renderEmailsListEmailSheet(email)
}
function handleClientCreateEmail() {
  renderelEmailsListCreateEmail(clientAccount)
}

export {
  handleClientRegister,
  handleClientLogin,
  handleClientReceiveIncoming,
  handleClientReceiveOutcoming,
  handleClientSend,
  handleClientCreateEmail,
  handleEmailSheet,
}
