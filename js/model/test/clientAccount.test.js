import {
  clientAccount,
  clientLogin,
  clientRegister,
} from '../client/clientAccount.js'
import {
  clientInbox,
  clientReceive,
  clientSend,
} from '../client/clientEmails.js'

clientRegister('xela@bar.com', 'qwe321', 'Женя', 'Евгеньев')
clientRegister('alex@foo.com', 'qwe123', 'Алексей', 'Алексеев')
clientLogin('alex@foo.com', 'qwe123')
console.log(clientAccount.current)

// clientLogin('xela@foo.com', 'qwe321')

clientSend('xela@bar.com', 'foo', 'hello world!')

clientReceive()
console.log(clientInbox)

clientLogin('xela@bar.com', 'qwe321')
clientReceive()
console.log(clientInbox)

// logout()
