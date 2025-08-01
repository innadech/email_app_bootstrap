// сервер не трогаем без клиента.
// console.log(serverAccounts) // недоступен! и это хорошо!

import { loginAccount, registerAccount } from '../server/serverAccounts.js'
console.log('yes')
const clientAccount = { current: null }

function clientLogin(email, passwd) {
  logout()
  const loggedAccount = loginAccount(email, passwd)
  if (loggedAccount) {
    clientAccount.current = loggedAccount
    console.log('Вход успешный!', clientAccount.current.email)
  } else {
    console.log('Неправильный логин и/или пароль')
  }
}

function logout() {
  clientAccount.current = null
}

function clientRegister(email, passwd, firstName, lastName) {
  registerAccount(email, passwd, firstName, lastName)
  console.log('регистрация удалась!')
}

export { clientAccount, clientLogin, clientRegister }
