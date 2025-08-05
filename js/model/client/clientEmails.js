import { clientAccount } from './clientAccount.js'
import { sendEmail, receiveEmails } from '../server/serverEmails.js'
import makeId from '../shared/makeId.js'

let clientInbox = [] // всё что прилошло с сервера запихиваем сюда. а потом уже разгребаем
let clientAllEmail = []

function createEmail(recipient, subject, text) {
  return {
    id: makeId(),
    date: Date.now(),
    recipient: recipient,
    subject: subject,
    text: text,
  }
}
function clientSendToAllEmail(recipient, subject, text) {
  const email = createEmail(recipient, subject, text)
  clientAllEmail.push(email)
}

function clientSend(recipient, subject, text) {
  if (clientAccount.current) {
    const isOk = sendEmail(
      clientAccount.current.email,
      recipient,
      subject,
      text
    )
    if (isOk) {
      clientSendToAllEmail(recipient, subject, text)
      console.log('Письмо успешно отправлено!')
    } else {
      console.log('Ошибка при отпавке!')
    }
  } else {
    console.log('Сначала залогиньтесь!')
  }
}

function clientReceive() {
  if (clientAccount.current) {
    clientInbox = receiveEmails(clientAccount.current.email)
    console.log('Письма успешно получны')
    console.log(clientInbox)
  } else {
    console.log('Сначала залогиньтесь!')
  }
}

export { clientInbox, clientSend, clientReceive, clientAllEmail }

// function addToAllEmail(mail, type) {
//   const formatted = formatMail(mail, type)
//   clientAllEmail.push(formatted)
//   return formatted
// }

// function formatMail(mail, type) {
//   return {
//     firstName: mail.firstName,
//     lastName: mail.lastName,
//     email: mail.email,
//     date: mail.date,
//     subject: '',
//     text: '',
//     id: makeId(),
//     type: type,
//   }
// }
