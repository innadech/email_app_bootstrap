const emailsAll = []
const recipientInbox = []
function sendEmail(sender, recipient, subject, text) {
  const emailSend = createEmail(sender, recipient, subject, text, 'send')
  const emailrecipientInbox = createEmail(
    sender,
    recipient,
    subject,
    text,
    'inbox'
  )
  emailsAll.push(emailSend)
  recipientInbox.push(emailrecipientInbox)
}
function createEmail(sender, recipient, subject, text, type) {
  return {
    sender: sender,
    recipient: recipient,
    subject: subject,
    text: text,
    date: Date.now(),
    id: Math.trunc(Math.random() * 10_000_000_000),
    type: type,
  }
}

sendEmail('inna@gmail.com', 'ivan@gmail.com', 'visa', 'visa is good')
emailsAll
recipientInbox
