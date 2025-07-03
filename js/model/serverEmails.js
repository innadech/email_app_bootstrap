import makeId from './makeId.js'

const serverEmails = []

function createEmail(sender, recipient, subject, text) {
  return {
    id: makeId(),
    date: Date.now(),
    sender: sender,
    recipient: recipient,
    subject: subject,
    text: text,
  }
}

function sendEmail(sender, recipient, subject, text) {
  const email = createEmail(sender, recipient, subject, text)
  // проверить что аккаунт отправителя создан
  // проверить что аккаунт отправителя залогинен
  // проверить что аккаунт получателя создан
  // проверить письмо на уникальность
  serverEmails.push(email)
  return true // false // может лучше отправлять статус
}

function receiveEmails(email) {
  // проверить что аккаунт получателя создан
  // проверить что аккаунт получателя залогинен
  // удалить письма с сервера, которые получены получателем
  // либо можно пометить их как "полученные"
  return serverEmails.filter(se => se.recipient === email)
  // ??? return false
}

export { sendEmail, receiveEmails }

// sendEmail('inna@gmail.com', 'ivan@gmail.com', 'visa', 'visa is good')
// serverEmails
