// сервер не трогаем без клиента.
// console.log(serverAccounts) // недоступен! и это хорошо!

import { loginAccount, registerAccount } from './serverAccounts.js'
import { sendEmail, receiveEmails } from './serverEmails.js'
import makeId from './makeId.js'

let clientCurrent = null
let clientInbox = [] // всё что прилошло с сервера запихиваем сюда. а потом уже разгребаем
let clientAllEmail = []

function addToAllEmail(mail, type) {
  const formatted = formatMail(mail, type)
  clientAllEmail.push(formatted)
  return formatted
}

function formatMail(mail, type) {
  return {
    firstName: mail.firstName,
    lastName: mail.lastName,
    email: mail.email,
    date: mail.date,
    subject: '',
    text: '',
    id: makeId(),
    type: type,
  }
}

function clientLogin(email, passwd) {
  logout()
  const loggedAccount = loginAccount(email, passwd)
  if (loggedAccount) {
    clientCurrent = loggedAccount
    console.log('Вход успешный!')
  } else {
    console.log('Неправильный логин и/или пароль')
  }
}

function clientSend(recipient, subject, text) {
  if (clientCurrent) {
    const isOk = sendEmail(clientCurrent.email, recipient, subject, text)
    if (isOk) {
      console.log('Письмо успешно отправлено!')
    } else {
      console.log('Ошибка при отпавке!')
    }
  } else {
    console.log('Сначала залогиньтесь!')
  }
}

function clientReceive() {
  if (clientCurrent) {
    clientInbox = receiveEmails(clientCurrent.email)
    console.log('Письма успешно получны')
  } else {
    console.log('Сначала залогиньтесь!')
  }
}

function logout() {
  clientCurrent = null
  clientInbox = []
}

registerAccount('alex@foo.com', 'qwe123', 'Алексей', 'Алексеев')
logout()

clientLogin('alex@foo.com', 'qwe123')
console.log(clientCurrent)
clientSend('foo@bar.com', 'foo', 'bar')
clientSend('xela@bar.com', 'hello', 'Call me back')

registerAccount('xela@bar.com', 'ewq321', 'Женя', 'Женьев')
logout()

clientLogin('xela@bar.com', 'ewq321')

console.log(clientInbox)
clientReceive()
console.log(clientInbox)
