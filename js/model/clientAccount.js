// сервер не трогаем без клиента.
// console.log(serverAccounts) // недоступен! и это хорошо!

import { loginAccount, registerAccount } from './serverAccounts.js'
import { sendEmail, serverEmails } from './serverEmails.js'

let clientAccountA = null
let clientAccountB = null

function loginA(email, passwd) {
  clientAccountA = loginAccount(email, passwd)
}
function loginB(email, passwd) {
  clientAccountB = loginAccount(email, passwd)
}

registerAccount('alex@foo.com', 'qwe123', 'Алексей', 'Алексеев')
registerAccount('xela@bar.com', 'ewq321', 'Женя', 'Женьев')

console.log(clientAccountA)
loginA('alex@foo.com', 'qwe123')
console.log(clientAccountA)

console.log(clientAccountB)
loginB('xela@bar.com', 'ewq321')
console.log(clientAccountB)

sendEmail(clientAccountA.email, clientAccountB.email, 'hello', 'Call me back')
console.log(serverEmails)
