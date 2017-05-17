'use strict'

const config = require('../config')
const objUserAuthNToken = {
  strId: '',
  strAuthNToken: ''
}
const serverAddress = config.apiOrigins.development

// const store = require('../store')

// Invokes sign-up API
// const signUp = function (objSignUp) {
//   // per API documentation, objSignUp must be of form:
//   // {
//   //   credentials: {
//   //     email: "string",
//   //     password: "string",
//   //     password_confirmation: "string"
//   //   }
//   // }
//   console.log('api.signUp invoked with ', objSignUp)
//   return $.ajax({
//     // local test back end version
//     url: 'http://localhost:4741/sign-up',
//     // production version
//     // url: '$(config.apiOrigin}/sign-up/',
//     method: 'POST',
//     data: objSignUp
//   })
// }

const signIn = function (objSignIn) {
  // per API documentation, objSignIn must be of form:
  // {
  //   credentials: {
  //     email: "string",
  //     password: "string"
  //   }
  // }
  return $.ajax({
    url: serverAddress + '/sign-in',
    method: 'POST',
    data: objSignIn
  })
}

// const signOut = function () {
//   console.log('api.signOut invoked for ', objUserAuthNToken)
//
//   return $.ajax({
//     url: 'http://localhost:4741/sign-out/' + objUserAuthNToken.strId,
//     method: 'DELETE',
//     headers: {
//       'Authorization': 'Token token=' + objUserAuthNToken.strAuthNToken
//     }
//   })
// }

// const changePassword = function (objPasswordsOldNew) {
//   console.log('api.changePassword invoked with data', objPasswordsOldNew)
//   console.log('and on objUserAuthNToken', objUserAuthNToken)
//   return $.ajax({
//     url: 'http://localhost:4741/change-password/' + objUserAuthNToken.strId,
//     method: 'PATCH',
//     headers: {
//       'Authorization': 'Token token=' + objUserAuthNToken.strAuthNToken
//     },
//     data: objPasswordsOldNew
//   })
// }

module.exports = {
  objUserAuthNToken,
  // changePassword,
  signIn
  // signOut,
  // signUp
}

// Can be used to debug random error handling
// new Promise(function (resolve, reject) {
//   if (Math.random() > 0.5) {
//     resolve('in signUp')
//   } else {
//     const error = new Error('Random')
//     error.data = data
//     reject(error)
//   }

// .then((response) => {
//   console.log('api.signUp AJAX response:', response)
  // store.userToken = response.user.token
  // return store.userToken
// })
