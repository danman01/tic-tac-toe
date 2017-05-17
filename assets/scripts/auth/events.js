'use strict'

const getFormFields = require('../../../lib/get-form-fields')

// Grab the related API & UI methods for authentication.
const api = require('./api')
const ui = require('./ui')

// // event.target must be an HTML form
// const onSignUp = function (event) {
//   // prefer coding 'event.target' rather than 'this'
//   // ALWAYS preventDefault first!
//   event.preventDefault()
//
//   const objSignUp = getFormFields(event.target)
//   console.log('Event onSignUp invoked with data:', objSignUp)
//
//   // use AJAX to initiate HTTP request, defined in api module, for sign-up
//   api.signUp(objSignUp)
//     // Promise .then waits for the async operation
//     // Mandatory to avoid race conditions introduced by network delays
//     .then(ui.signUpSuccess)
//     // subsequent .then will pass the return from the previous .then as the
//     // first argument to the callback function.
//     .catch(ui.signUpFailure)
// }
//
const onSignIn = function (event) {
  event.preventDefault()
  const objSignIn = getFormFields(event.target)
  console.log('Event onSignIn invoked with data:', objSignIn)
  // api.signIn(objSignIn)
  //   .then(ui.signInSuccess)
  //   .catch(ui.signInFailure)
}
//
// const onSignOut = function (event) {
//   event.preventDefault()
//   console.log('Event onSignOut for objUserAuthNToken:', api.objUserAuthNToken)
//   api.signOut()
//     .then(ui.signOutSuccess)
//     .catch(ui.signOutFailure)
// }
//
// const onChangePassword = function (event) {
//   event.preventDefault()
//   const objPasswordsOldNew = getFormFields(event.target)
//   console.log('Event onChangePassword invoked with data', objPasswordsOldNew)
//   console.log('and on objUserAuthNToken', api.objUserAuthNToken)
//   api.changePassword(objPasswordsOldNew)
//     .then(ui.changePasswordSuccess)
//     .catch(ui.changePasswordFailure)
// }

const addHandlers = () => {
  // on gives the callback an event (provided by the browser) as first argument
  // forms fire 'submit' events. Do not listen for click on the input button, as
  // we will not received data from the form.
  // $('#change-password').on('submit', onChangePassword)
  $('#sign-in').on('submit', onSignIn)
  // $('#sign-out').on('submit', onSignOut)
  // $('#sign-up').on('submit', onSignUp)
}

module.exports = {
  addHandlers
}
