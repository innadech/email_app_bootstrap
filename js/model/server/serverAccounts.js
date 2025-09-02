import makeId from '../shared/makeId.js'

const serverAccounts = []

function createAccount(email, passwd, firstName, lastName) {
  return {
    id: makeId(),
    date: Date.now(),
    email: email,
    passwd: passwd,
    firstName: firstName,
    lastName: lastName,
    // isLoggedIn: false,
  }
}

function registerAccount(email, passwd, firstName, lastName) {
  const account = createAccount(email, passwd, firstName, lastName)
  const findedAccount = serverAccounts.find(a => a.email === email)
  if (findedAccount) {
    return false
  } else {
    serverAccounts.push(account)
    return true
  }

  // return true/false
}

function loginAccount(email, passwd) {
  const account = serverAccounts.find(
    a => a.email === email && a.passwd === passwd
  )
  return account
}

export { loginAccount, registerAccount }
