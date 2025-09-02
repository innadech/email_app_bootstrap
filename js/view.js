import {
  handleClientRegister,
  handleClientLogin,
  handleClientReceiveIncoming,
  handleClientReceiveOutcoming,
  handleClientSend,
} from './controller.js'
import { clientAccount } from './model/client/clientAccount.js'
console.log('view gut')
elRegisterButton.onclick = onClickButtonRegister
elLoginButton.onclick = onClickButtonLogin
// elIncomeButton.onclick = onClickButtonIncome
// elOutcomeButton.onclick = onClickButtonOutcome

function onClickButtonRegister() {
  let email = emailSignup.value
  let passwd = passwordSignup.value
  let repeatpasswd = repeatpasswordSignup.value
  let firstName = firstnameSignup.value
  let lastName = lastnameSignup.value
  if (passwd === repeatpasswd) {
    handleClientRegister(email, passwd, firstName, lastName)
  }
}

function onClickButtonLogin() {
  let email = emailSignin.value
  let passwd = passwordSignin.value
  handleClientLogin(email, passwd, clientAccount)
}

function onClickButtonIncome() {
  handleClientReceiveIncoming()
}
function onClickButtonOutcome() {
  handleClientReceiveOutcoming()
}
function onClickButtonSend() {
  let recipient = elRecipient.value
  let subject = elSubject.value
  let text = elText.value
  handleClientSend(recipient, subject, text)
}
function onClickElDivContainerWrapEmail(e) {
  const id = e.target.getAttribute('id')
  handleEmailSheet(id)
}
function onClickClientCreateEmail() {
  handleClientCreateEmail(clientAccount)
}
function renderSignUpPage() {
  elSignUpPage.textContent = ''
  const elH = document.createElement('h2')
  elH.textContent = 'SignUp successful'
  elSignUpPage.appendChild(elH)
}
window.renderSignUpPage = renderSignUpPage
function renderSignInPage() {
  elSignInPage.textContent = ''
  const elH = document.createElement('h1')
  elH.textContent = 'LoginIn successful'
  elSignInPage.appendChild(elH)
}
function renderSendPage() {
  elSendPage.textContent = ''
  const elH = document.createElement('h2')
  elH.textContent = 'Email is sent successful'
  elSendPage.appendChild(elH)
}
window.renderSendPage = renderSendPage
window.renderMainPage = renderMainPage
window.generateAllEmailsPage = generateAllEmailsPage
window.generateAddress = generateAddress

function renderMainPage(accountEmail) {
  elMainPage.innerHTML = ''
  const elGenerateAllEmailsPage = generateAllEmailsPage(accountEmail)
  elMainPage.appendChild(elGenerateAllEmailsPage)
}

function renderEmailsList(emails) {
  elEmailsList.innerHTML = ''
  for (const email of emails) {
    const elGenerateEmail = generateEmail(email)
    elEmailsList.appendChild(elGenerateEmail)
  }
}
// function renderEmailsListOutcomeEmails(emails) {
//   elEmailsList.innerHTML = ''
//   for (const email of emails) {
//     const elGenerateOutcomeEmail = generateOutcomeEmail(email)
//     elEmailsList.appendChild(elGenerateOutcomeEmail)
//   }
// }

function renderEmailsListEmailSheet(email) {
  elEmailsList.innerHTML = ''
  const elGenerateEmailSheet = generateEmailSheet(email)
  elEmailsList.appendChild(elGenerateEmailSheet)
}
function renderelEmailsListCreateEmail(accountEmail) {
  elEmailsList.innerHTML = ''
  const elCreateEmailPage = generateCreateEmailPage(accountEmail)
  elEmailsList.appendChild(elCreateEmailPage)
}
function renderelEmailsListAddress(emails) {
  elEmailsList.innerHTML = ''
  for (const email of emails) {
    const elGenerateAddress = generateAddress(email)
    elEmailsList.appendChild(elGenerateAddress)
  }
}

function generateAllEmailsPage(accountEmail) {
  const elDivContainerWrap = document.createElement('div')
  const elDivContainerFirst = document.createElement('div')
  const elDivContainerSecond = document.createElement('div')
  const elDivContainerFirstRow = document.createElement('div')
  const elDivContainerSecondRow = document.createElement('div')
  const elDivContainerSecondRowLeftAllIcons = document.createElement('div')
  const elIncomeButton = document.createElement('div')
  const elOutcomeButton = document.createElement('div')
  const elDivContainerSecondRowRight = document.createElement('div')
  const elDivContainerSecondRowRightContainer = document.createElement('div')
  const elSeachEmailDiv = document.createElement('div')
  const elSeachEmailSpan = document.createElement('span')
  const elSeachEmailInput = document.createElement('input')
  const elDivCompose = document.createElement('div')
  const elDivAdress = document.createElement('div')
  const elDivGmail = document.createElement('div')
  const elDivLogOut = document.createElement('div')
  const elEmailsListDiv = document.createElement('div')

  elDivContainerWrap.classList.add('container-fluid')
  elDivContainerWrap.classList.add('mt-3')
  elDivContainerWrap.classList.add('min-vw-500')
  elDivContainerWrap.classList.add('bg-light-subtle')
  elDivContainerWrap.classList.add('border')
  elDivContainerWrap.classList.add('border-primary-subtle')
  elDivContainerWrap.classList.add('rounded-3')

  elDivContainerFirst.classList.add('container-fluid')
  elDivContainerFirst.classList.add('mt-3')
  elDivContainerFirst.classList.add('bg-light-subtle')
  elDivContainerFirst.classList.add('border')
  elDivContainerFirst.classList.add('border-primary-subtle')
  elDivContainerFirst.classList.add('rounded-3')
  elDivContainerFirst.setAttribute('height', '50px')

  elDivContainerSecond.classList.add('container-fluid')
  elDivContainerSecond.classList.add('mt-3')
  elDivContainerSecond.classList.add('bg-light-subtle')
  elDivContainerSecond.classList.add('border')
  elDivContainerSecond.classList.add('border-primary-subtle')
  elDivContainerSecond.classList.add('rounded-3')
  elDivContainerSecond.setAttribute('height', '600px')

  elDivContainerFirstRow.classList.add('row')
  elDivContainerFirstRow.classList.add('align-items-start')
  elDivContainerFirstRow.classList.add('text-center')
  elDivContainerFirstRow.classList.add('p-2')

  elDivContainerSecondRow.classList.add('row')
  elDivContainerSecondRow.classList.add('gx-5')
  elDivContainerSecondRow.setAttribute('height', '100%')

  elDivContainerSecondRowLeftAllIcons.classList.add('col-sm-3')
  elDivContainerSecondRowLeftAllIcons.classList.add('text-left')
  elIncomeButton.classList.add('p-2')
  elIncomeButton.classList.add('fs-5')
  elOutcomeButton.classList.add('p-2')
  elOutcomeButton.classList.add('fs-5')
  elIncomeButton.textContent = 'Income'
  elOutcomeButton.textContent = 'Outcome'
  elIncomeButton.onclick = onClickButtonIncome
  elOutcomeButton.onclick = onClickButtonOutcome

  elDivContainerSecondRowRight.classList.add('col-sm-9')
  elDivContainerSecondRowRight.classList.add('p-2')
  elDivContainerSecondRowRightContainer.classList.add('container')
  elDivContainerSecondRowRightContainer.classList.add('p-2')
  elDivContainerSecondRowRightContainer.setAttribute('height', '10%')
  elSeachEmailDiv.classList.add('input-group')
  elSeachEmailDiv.classList.add('mb-3')
  elSeachEmailSpan.classList.add('input-group-text')
  elSeachEmailSpan.textContent = 'Search Email'
  elSeachEmailInput.classList.add('form-control')
  elSeachEmailInput.setAttribute('type', 'text')
  elSeachEmailInput.setAttribute('id', 'elSearchEmail')

  elEmailsListDiv.classList.add('container')
  elEmailsListDiv.classList.add('p-2')
  elEmailsListDiv.classList.add('bg-primary-subtle')
  elEmailsListDiv.classList.add('border')
  elEmailsListDiv.classList.add('border-primary-subtle')
  elEmailsListDiv.classList.add('rounded-3')
  elEmailsListDiv.setAttribute('height', '90%')
  elEmailsListDiv.setAttribute('id', 'elEmailsList')

  elDivCompose.classList.add('col')
  elDivAdress.classList.add('col')
  elDivGmail.classList.add('col')
  elDivLogOut.classList.add('col')

  elDivCompose.onclick = onClickClientCreateEmail
  elDivCompose.textContent = 'Compose'
  elDivAdress.textContent = 'Adress'
  elDivGmail.textContent = accountEmail
  elDivLogOut.textContent = 'Log out'

  elDivContainerWrap.appendChild(elDivContainerFirst)
  elDivContainerWrap.appendChild(elDivContainerSecond)
  elDivContainerFirst.appendChild(elDivContainerFirstRow)
  elDivContainerFirstRow.appendChild(elDivCompose)
  elDivContainerFirstRow.appendChild(elDivAdress)
  elDivContainerFirstRow.appendChild(elDivGmail)
  elDivContainerFirstRow.appendChild(elDivLogOut)
  elDivContainerSecond.appendChild(elDivContainerSecondRow)
  elDivContainerSecondRow.appendChild(elDivContainerSecondRowLeftAllIcons)
  elDivContainerSecondRow.appendChild(elDivContainerSecondRowRight)
  elDivContainerSecondRowLeftAllIcons.appendChild(elIncomeButton)
  elDivContainerSecondRowLeftAllIcons.appendChild(elOutcomeButton)
  elDivContainerSecondRowRight.appendChild(
    elDivContainerSecondRowRightContainer
  )
  elDivContainerSecondRowRightContainer.appendChild(elSeachEmailDiv)
  elSeachEmailDiv.appendChild(elSeachEmailSpan)
  elSeachEmailDiv.appendChild(elSeachEmailInput)
  elDivContainerSecondRowRightContainer.appendChild(elEmailsListDiv)
  return elDivContainerWrap
}

function generateCreateEmailPage(accountEmail) {
  const elDivSendPage = document.createElement('div')
  const elDivWrap = document.createElement('div')
  const elDiv = document.createElement('div')
  const elDivInputFirst = document.createElement('div')
  const elDivInputFirstSpan = document.createElement('span')
  const elDivInputFirstInput = document.createElement('input')
  const elDivInputSecond = document.createElement('div')
  const elDivInputSecondSpan = document.createElement('span')
  const elDivInputSecondSpanSpan = document.createElement('span')
  const elDivInputThird = document.createElement('div')
  const elDivInputThirdSpan = document.createElement('span')
  const elDivInputThirdInput = document.createElement('input')

  const elDivWrapTextarea = document.createElement('div')
  const elDivContainerTextarea = document.createElement('div')
  const elTextarea = document.createElement('textarea')
  const elTextareaLabel = document.createElement('label')

  const elDivWrapButtonSend = document.createElement('div')
  const elDivContainerButtonSend = document.createElement('div')
  const elDivRowButtonSend = document.createElement('div')
  const elDivColButtonSend = document.createElement('div')
  const elSend = document.createElement('div')

  elDivSendPage.classList.add('container')
  elDivSendPage.classList.add('p-4')
  elDivSendPage.classList.add('bg-light-subtle')
  elDivSendPage.classList.add('border')
  elDivSendPage.classList.add('border-primary-subtle')
  elDivSendPage.classList.add('rounded-3')
  elDivSendPage.setAttribute('height', '500px')
  elDivSendPage.setAttribute('id', 'elSendPage')

  elDivWrap.setAttribute('height', '150px')

  elDivInputFirst.classList.add('input-group')
  elDivInputFirstSpan.classList.add('input-group-text')
  elDivInputFirstSpan.textContent = 'To'
  elDivInputFirstInput.classList.add('form-control')
  elDivInputFirstInput.setAttribute('type', 'text')
  elDivInputFirstInput.setAttribute('placeholder', 'Username')
  elDivInputFirstInput.setAttribute('id', 'elRecipient')
  elDivInputSecond.classList.add('input-group')
  elDivInputSecondSpan.classList.add('input-group-text')
  elDivInputSecondSpan.textContent = 'from'
  elDivInputSecondSpanSpan.classList.add('form-control')
  elDivInputSecondSpanSpan.setAttribute('id', 'elAccountEmail')
  elDivInputSecondSpanSpan.textContent = accountEmail
  elDivInputThird.classList.add('input-group')
  elDivInputThirdSpan.classList.add('input-group-text')
  elDivInputThirdSpan.textContent = 'Subject'
  elDivInputThirdInput.classList.add('form-control')
  elDivInputThirdInput.setAttribute('type', 'text')
  elDivInputThirdInput.setAttribute('id', 'elSubject')

  elDivWrapTextarea.setAttribute('height', '250px')
  elDivWrapTextarea.setAttribute('width', '100%')
  elDivContainerTextarea.classList.add('form-floating')
  elTextarea.classList.add('form-control')
  elTextarea.setAttribute('placeholder', 'Leave message')
  elTextarea.setAttribute('id', 'elText')
  elTextarea.setAttribute('height', '200px')
  elTextareaLabel.setAttribute('for', 'textarea')
  elTextareaLabel.textContent = 'Message'

  elDivWrapButtonSend.setAttribute('height', '100px')
  elDivWrapButtonSend.setAttribute('width', '20%')
  elDivContainerButtonSend.classList.add('container')
  elDivContainerButtonSend.classList.add('overflow-hidden')
  elDivContainerButtonSend.classList.add('text-center')
  elDivRowButtonSend.classList.add('row')
  elDivRowButtonSend.classList.add('gx-5')
  elDivColButtonSend.classList.add('col')
  elSend.classList.add('p-2')
  elSend.classList.add('bg-light-subtle')
  elSend.classList.add('border')
  elSend.classList.add('border-primary-subtle')
  elSend.classList.add('rounded-3')
  elSend.textContent = 'Send'
  elSend.setAttribute('id', 'elSendButton')

  elSend.onclick = onClickButtonSend

  elDivSendPage.appendChild(elDivWrap)
  elDivWrap.appendChild(elDiv)
  elDiv.appendChild(elDivInputFirst)
  elDiv.appendChild(elDivInputSecond)
  elDiv.appendChild(elDivInputThird)
  elDivInputFirst.appendChild(elDivInputFirstSpan)
  elDivInputFirst.appendChild(elDivInputFirstInput)
  elDivInputSecond.appendChild(elDivInputSecondSpan)
  elDivInputSecond.appendChild(elDivInputSecondSpanSpan)
  elDivInputThird.appendChild(elDivInputThirdSpan)
  elDivInputThird.appendChild(elDivInputThirdInput)
  elDivSendPage.appendChild(elDivWrapTextarea)
  elDivWrapTextarea.appendChild(elDivContainerTextarea)
  elDivContainerTextarea.appendChild(elTextarea)
  elDivContainerTextarea.appendChild(elTextareaLabel)
  elDivSendPage.appendChild(elDivWrapButtonSend)
  elDivWrapButtonSend.appendChild(elDivContainerButtonSend)
  elDivContainerButtonSend.appendChild(elDivRowButtonSend)
  elDivRowButtonSend.appendChild(elDivColButtonSend)
  elDivColButtonSend.appendChild(elSend)

  return elDivSendPage
}

function generateEmailSheet(email) {
  const elDivReceivedPage = document.createElement('div')
  const elDivWrapFirst = document.createElement('div')
  const elDivWrapFirstWrapDelivery = document.createElement('div')
  const elDivWrapFirstPDelivery = document.createElement('p')
  const elDivWrapFirstWrapFrom = document.createElement('div')
  const elSpanWrapFrom = document.createElement('span')
  const elSpanWrapFromSpanFirst = document.createElement('span')
  const elSpanWrapFromSpanSecond = document.createElement('span')
  const elDivWrapSecond = document.createElement('div')
  const elDivWrapSecondP = document.createElement('p')
  const elDivWrapThird = document.createElement('div')
  const elDivThird = document.createElement('div')
  const elDivThirdRow = document.createElement('div')
  const elDivThirdRowColFirst = document.createElement('div')
  const elDivThirdRowColFirstDiv = document.createElement('div')
  const elDivThirdRowColSecond = document.createElement('div')
  const elDivThirdRowColSecondDiv = document.createElement('div')

  elDivReceivedPage.classList.add('container')
  elDivReceivedPage.classList.add('p-4')
  elDivReceivedPage.classList.add('bg-light-subtle')
  elDivReceivedPage.classList.add('border')
  elDivReceivedPage.classList.add('border-primary-subtle')
  elDivReceivedPage.classList.add('rounded-3')
  elDivReceivedPage.setAttribute('height', '500px')

  elDivWrapFirst.setAttribute('height', '100px')
  elDivWrapFirst.setAttribute('width', '50%')
  elDivWrapFirstPDelivery.classList.add('fs-2')
  elDivWrapFirstPDelivery.textContent = email.subject
  elSpanWrapFrom.textContent = 'From'
  elSpanWrapFromSpanFirst = email.sender
  elSpanWrapFromSpanSecond = email.name

  elDivWrapSecond.setAttribute('height', '300px')
  elDivWrapSecond.setAttribute('width', '100%')
  elDivWrapSecondP.classList.add('fs-3')
  elDivWrapSecondP.textContent = email.text

  elDivWrapThird.setAttribute('height', '100px')
  elDivWrapFirst.setAttribute('width', '50%')
  elDivThird.classList.add('container')
  elDivThird.classList.add('overflow-hidden')
  elDivThird.classList.add('text-center')
  elDivThirdRow.classList.add('row')
  elDivThirdRow.classList.add('gx-5')
  elDivThirdRowColFirst.classList.add('col')
  elDivThirdRowColFirstDiv.classList.add('p-2')
  elDivThirdRowColFirstDiv.classList.add('bg-light-subtle')
  elDivThirdRowColFirstDiv.classList.add('border')
  elDivThirdRowColFirstDiv.classList.add('border-primary-subtle')
  elDivThirdRowColFirstDiv.classList.add('rounded-3')
  elDivThirdRowColFirstDiv.textContent = 'Answer'
  elDivThirdRowColSecond.classList.add('col')
  elDivThirdRowColSecondDiv.classList.add('p-2')
  elDivThirdRowColSecondDiv.classList.add('bg-light-subtle')
  elDivThirdRowColSecondDiv.classList.add('border')
  elDivThirdRowColSecondDiv.classList.add('border-primary-subtle')
  elDivThirdRowColSecondDiv.classList.add('rounded-3')
  elDivThirdRowColSecondDiv.textContent = 'Forward'

  elDivReceivedPage.appendChild(elDivWrapFirst)
  elDivReceivedPage.appendChild(elDivWrapFirst)
  elDivWrapFirst.appendChild(elDivWrapFirstWrapDelivery)
  elDivWrapFirstWrapDelivery.appendChild(elDivWrapFirstPDelivery)
  elDivWrapFirst.appendChild(elDivWrapFirstWrapFrom)
  elDivWrapFirstWrapFrom.appendChild(elSpanWrapFromSpanFirst)
  elDivWrapFirstWrapFrom.appendChild(elSpanWrapFromSpanSecond)
  elDivReceivedPage.appendChild(elDivWrapSecond)
  elDivWrapSecond.appendChild(elDivWrapSecondP)
  elDivReceivedPage.appendChild(elDivWrapThird)
  elDivWrapThird.appendChild(elDivThird)
  elDivThird.appendChild(elDivThirdRow)
  elDivThirdRow.appendChild(elDivThirdRowColFirst)
  elDivThirdRowColFirst.appendChild(elDivThirdRowColFirstDiv)
  elDivThirdRow.appendChild(elDivThirdRowColSecond)
  elDivThirdRowColSecond.appendChild(elDivThirdRowColSecondDiv)

  return elDivReceivedPage
}

window.renderEmailsList = renderEmailsList
window.generateEmail = generateEmail
// const email = {
//   recipient: 'inna@gmail',
//   subject: 'hello',
//   data: 1754769038,
//   id: 1,
// }
function generateEmail(email) {
  const elDivContainerWrap = document.createElement('div')
  const elDivContainer = document.createElement('div')
  const elDivRow = document.createElement('div')
  const elDivCol = document.createElement('div')
  const elDivColSecond = document.createElement('div')
  const elDivColThird = document.createElement('div')
  const elDivFormCheck = document.createElement('div')
  const elDivFormCheckInput = document.createElement('input')
  const elDivFormCheckLabel = document.createElement('label')

  elDivContainerWrap.onclick = onClickElDivContainerWrapEmail

  elDivContainerWrap.classList.add('shadow-none')
  elDivContainerWrap.classList.add('p-2')
  elDivContainerWrap.classList.add('mb-1')
  elDivContainerWrap.classList.add('rounded')
  elDivContainerWrap.classList.add('bg-body-tertiary')
  elDivContainerWrap.setAttribute('id', email.id)

  elDivContainer.classList.add('container')
  elDivContainer.classList.add('text-center')

  elDivRow.classList.add('row')
  elDivRow.classList.add('align-items-center')

  elDivCol.classList.add('col')
  elDivColSecond.classList.add('col')
  elDivColThird.classList.add('col')

  elDivFormCheck.classList.add('form-check')
  elDivFormCheckInput.classList.add('form-check-input')
  elDivFormCheckInput.setAttribute('type', 'checkbox')
  elDivFormCheckInput.setAttribute('id', email.id)
  elDivFormCheckLabel.classList.add('form-check-label')
  // elDivFormCheckLabel.setAttribute('for', 'checkDefault')

  elDivColSecond.textContent = email.subject
  elDivColThird.textContent = email.date
  elDivFormCheckLabel.textContent = email.recipient
  elDivContainerWrap.appendChild(elDivContainer)
  elDivContainer.appendChild(elDivRow)
  elDivRow.appendChild(elDivCol)
  elDivRow.appendChild(elDivColSecond)
  elDivRow.appendChild(elDivColThird)
  elDivCol.appendChild(elDivFormCheck)
  elDivFormCheck.appendChild(elDivFormCheckInput)
  elDivFormCheck.appendChild(elDivFormCheckLabel)

  return elDivContainerWrap
}
function generateAddress(email) {
  const elDivContainerWrap = document.createElement('div')
  const elDivContainer = document.createElement('div')
  const elDivRow = document.createElement('div')
  const elDivCol = document.createElement('div')
  const elDivColSecond = document.createElement('div')
  // const elDivColThird = document.createElement('div')
  const elDivFormCheck = document.createElement('div')
  const elDivFormCheckInput = document.createElement('input')
  const elDivFormCheckLabel = document.createElement('label')

  elDivContainerWrap.classList.add('shadow-none')
  elDivContainerWrap.classList.add('p-2')
  elDivContainerWrap.classList.add('mb-1')
  elDivContainerWrap.classList.add('rounded')
  elDivContainerWrap.classList.add('bg-body-tertiary')

  elDivContainer.classList.add('container')
  elDivContainer.classList.add('text-center')

  elDivRow.classList.add('row')
  elDivRow.classList.add('align-items-center')

  elDivCol.classList.add('col')
  elDivColSecond.classList.add('col')
  // elDivColThird.classList.add('col')

  elDivFormCheck.classList.add('form-check')
  elDivFormCheckInput.classList.add('form-check-input')
  elDivFormCheckInput.setAttribute('type', 'checkbox')
  // elDivFormCheckInput.setAttribute('id', email.id)
  elDivFormCheckLabel.classList.add('form-check-label')
  // elDivFormCheckLabel.setAttribute('for', 'checkDefault')

  elDivColSecond.textContent = email.firstName + '' + email.lastName
  if (email.recipient === 'recipient') {
    elDivFormCheckLabel.textContent = email.recipient
  } else elDivFormCheckLabel.textContent = email.sender

  // elDivColThird.textContent = email.date

  elDivContainerWrap.appendChild(elDivContainer)
  elDivContainer.appendChild(elDivRow)
  elDivRow.appendChild(elDivCol)
  elDivRow.appendChild(elDivColSecond)
  // elDivRow.appendChild(elDivColThird)
  elDivCol.appendChild(elDivFormCheck)
  elDivFormCheck.appendChild(elDivFormCheckInput)
  elDivFormCheck.appendChild(elDivFormCheckLabel)

  return elDivContainerWrap
}
// function generateEmailOutcome(email) {
//   const elDivContainerWrap = document.createElement('div')
//   const elDivContainer = document.createElement('div')
//   const elDivRow = document.createElement('div')
//   const elDivCol = document.createElement('div')
//   const elDivColSecond = document.createElement('div')
//   const elDivColThird = document.createElement('div')
//   const elDivFormCheck = document.createElement('div')
//   const elDivFormCheckInput = document.createElement('input')
//   const elDivFormCheckLabel = document.createElement('label')

//   elDivContainerWrap.classList.add('shadow-none')
//   elDivContainerWrap.classList.add('p-2')
//   elDivContainerWrap.classList.add('mb-1')
//   elDivContainerWrap.classList.add('rounded')
//   elDivContainerWrap.classList.add('bg-body-tertiary')

//   elDivContainer.classList.add('container')
//   elDivContainer.classList.add('text-center')

//   elDivRow.classList.add('row')
//   elDivRow.classList.add('align-items-center')

//   elDivCol.classList.add('col')
//   elDivColSecond.classList.add('col')
//   elDivColThird.classList.add('col')

//   elDivFormCheck.classList.add('form-check')
//   elDivFormCheckInput.classList.add('form-check-input')
//   elDivFormCheckInput.setAttribute('type', 'checkbox')
//   elDivFormCheckInput.setAttribute('id', email.id)
//   elDivFormCheckLabel.classList.add('form-check-label')
//   // elDivFormCheckLabel.setAttribute('for', 'checkDefault')

//   elDivColSecond.textContent = email.subject
//   elDivColThird.textContent = email.date
//   elDivFormCheckLabel.textContent = email.recipient
//   elDivContainerWrap.appendChild(elDivContainer)
//   elDivContainer.appendChild(elDivRow)
//   elDivRow.appendChild(elDivCol)
//   elDivRow.appendChild(elDivColSecond)
//   elDivRow.appendChild(elDivColThird)
//   elDivCol.appendChild(elDivFormCheck)
//   elDivFormCheck.appendChild(elDivFormCheckInput)
//   elDivFormCheck.appendChild(elDivFormCheckLabel)

//   return elDivContainerWrap
// }
export {
  renderEmailsList,
  renderSignUpPage,
  renderSignInPage,
  renderSendPage,
  renderMainPage,
}

// window.location.href = 'sign_in.html'
// window.location.href = 'all_email.html'
