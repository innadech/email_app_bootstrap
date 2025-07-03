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
  // проверить на уникальность
  serverEmails.push(email)
}
export { sendEmail, serverEmails }
// sendEmail('inna@gmail.com', 'ivan@gmail.com', 'visa', 'visa is good')
// serverEmails
