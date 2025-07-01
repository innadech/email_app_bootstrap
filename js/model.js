const model = {
  id: 90210,
  currentUser: {
    name: '',
    lastname: '',
    email: '',
    password: '',
  },
  currentMail: {
    sender: 'vasy@gmail.com',
    recipient: 'inna@gmail.com',
    subject: 'visa',
    text: 'visa is good',
    date: '',
    id: '',
    type: type,
  },
  formatMail(mail, type) {
    return {
      firstName: mail.firstName,
      lastName: mail.lastName,
      email: mail.email,
      date: mail.date,
      subject: '',
      id: this.getNextId(),
      type: type,
    }
  },
  accounts: [],
  trash: [],

  signUp(userCurrent) {
    const exitingUser = this.users.find(
      user => user.name === userCurrent.name || user.email === userCurrent.email
    )
    if (!exitingUser) {
      this.users.push({
        name: userCurrent.name,
        lastname: userCurrent.lastname,
        email: userCurrent.email,
        password: userCurrent.password,
      })
      this.currentUser = {
        name: userCurrent.name,
        lastname: userCurrent.lastname,
        email: userCurrent.email,
        password: userCurrent.password,
      }
      return true
    } else {
      return false
    }
  },
  loginIn(userCurrent) {
    const user = this.users.find(
      user =>
        user.email === userCurrent.email &&
        user.password === userCurrent.password
    )
    if (user) {
      this.currentUser = {
        name: userCurrent.name,
        lastname: userCurrent.lastname,
        email: userCurrent.email,
        password: userCurrent.password,
      }
      return true
    } else {
      return false
    }
  },

  getNextId() {
    this.id += 1
    return this.id
  },

  addToAllEmail(mail, type) {
    const formatted = this.formatMail(mail, type)
    this.allEmails.push(formatted)
    return formatted
  },

  getMailById(id) {
    const findedMail = this.allEmails.find(mail => mail.id === id)
    return findedMail
  },
  removeMailById(id) {
    return (this.allEmails = this.allEmails.filter(mail => mail.id !== id))
  },

  moveToTrash(id) {
    const findedMail = this.getMailById(id)
    if (findedMail) {
      findedMail.type = 'trash'
    }
  },
  markAndAddToStarred(id) {
    const findedMail = this.getMailById(id)
    if (findedMail) {
      findedMail.type = 'inbox_starred'
    }
  },
  unmarkAndAddToAllMails(id) {
    const findedMail = this.getMailById(id)
    if (findedMail) {
      findedMail.type = 'inbox'
    }
  },
  filterByType(type) {
    return this.allEmails.filter(mail => mail.type === type)
  },

  //  unmarkAsStarredById(id) {
  //   const findedMail = this.getMailById(id)
  //   if (findedMail) {
  //     findedMail.isStarred = false
  //   }
  // },
  // markAsStarredById(id) {
  //   const findedMail = this.getMailById(id)
  //   if (findedMail) {
  //     findedMail.isStarred = true
  //   }
  // },
  // getTrash() {
  //   return this.allEmails.filter(mail => mail.type === 'trash')
  // },

  // getInbox() {
  //   return this.allEmails.filter(mail => mail.type === 'inbox')
  // },
  // getStarred() {
  //   return this.allEmails.filter(type === 'inbox_starred')
}

model.addToAllEmail(
  {
    firstName: 'Inna',
    lastName: 'Petrova',
    email: 'innap@gmail.com',
    date: '12:00',
  },
  'inbox'
)
model.addToAllEmail(
  {
    firstName: 'Ivan',
    lastName: 'Nestorov',
    email: 'ivan@gmail.com',
    date: '8:00',
  },
  'sent'
)
console.log(model.users)
console.log(
  model.signUp({
    name: 'inna',
    lastname: 'decheva',
    email: 'inna@gmail.com',
    password: '1111',
  })
)
console.log(model.users)
console.log(
  model.signUp({
    name: 'inna',
    lastname: 'decheva',
    email: 'inna@gmail.com',
    password: '1111',
  })
)
console.log(model.currentUser)
console.log(
  model.loginIn({
    name: 'inna',
    lastname: 'decheva',
    email: 'inna@gmail.com',
    password: '1111',
  })
)
console.log(
  model.loginIn({
    name: 'lena',
    lastname: 'decheva',
    email: 'inna@gmail.com',
    password: '1112',
  })
)

console.log(model.allEmails)
model.markAsStarredById(90201)
console.log(model.starred)

console.log(model.trash)
console.log(model.allEmails)
model.addToTrash(90201)
console.log(model.allEmails)
console.log(model.sent)
console.log(model.trash)
model.addToTrash(90202)
console.log(model.allEmails)
console.log(model.sent)

// addToAllEmail(mail,type) {
//   const formatted = this.formatMail(mail,type)
//   this.all_email.push(formatted)
//   return formatted
// },
// addToInbox(mail) {
//   const formatted = this.addToAllEmail(mail,'inbox')
//   this.inbox.push(formatted)
// },
// addToSent(mail) {
//   const formatted = this.addToAllEmail(mail,'sent')
//   this.sent.push(formatted)
// },
//  signUp(nickname){
//     if(!this.nicknames.includes(nickname)){
//       this.nicknames.push(nickname)
//       this.currentNickname = nickname
//       return true
//     }else{
//       return false
//     }
//   },
//   loginIn(nickname){
//     if(this.nicknames.includes(this.nickname)){
//       this.currentNickname = nickname
//       return true
//     }else{
//       return false
//     }
//   },
