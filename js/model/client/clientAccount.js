// сервер не трогаем без клиента.
// console.log(serverAccounts) // недоступен! и это хорошо!

import { loginAccount, registerAccount } from '../server/serverAccounts.js'

const clientAccount = { current: null }

function clientLogin(email, passwd) {
  logout()
  const loggedAccount = loginAccount(email, passwd)
  if (loggedAccount) {
    clientAccount.current = loggedAccount
    console.log('Вход успешный!', clientAccount.current.email)
    return true
  } else {
    console.log('Неправильный логин и/или пароль')
    return false
  }
}

function logout() {
  clientAccount.current = null
}

function clientRegister(email, passwd, firstName, lastName) {
  const signUp = registerAccount(email, passwd, firstName, lastName)
  if (signUp) {
    console.log('регистрация удалась!')
    return true
  } else {
    return false
  }
}

export { clientAccount, clientLogin, clientRegister }
