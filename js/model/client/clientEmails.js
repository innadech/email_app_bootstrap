import { clientAccount } from '../client/clientAccount.js'
import { sendEmail, receiveEmails } from '../server/serverEmails.js'

let clientInbox = [] // всё что прилошло с сервера запихиваем сюда. а потом уже разгребаем
let clientAllEmail = []

function clientSend(recipient, subject, text) {
  if (clientAccount.current) {
    const isOk = sendEmail(
      clientAccount.current.email,
      recipient,
      subject,
      text
    )
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
  if (clientAccount.current) {
    clientInbox = receiveEmails(clientAccount.current.email)
    console.log('Письма успешно получны')
  } else {
    console.log('Сначала залогиньтесь!')
  }
}

export { clientInbox, clientSend, clientReceive }

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
