'use strict'

// const api = require('./api')
const p = require('../player')
const arrPlayers = p.arrPlayers

const signInSuccess = function (objResponse) {
  // API returns an object of form
  // {
  //   user: {
  //     email: "string",
  //     id: int,
  //     token: "string"
  //   }
  // }

  // Save player credentials in whichever player isn't logged in.
  const intPlayerIndex = arrPlayers[0].fnIsLoggedIn() ? 1 : 0
  arrPlayers[intPlayerIndex].fnLogIn(objResponse.user.email, objResponse.user.id, objResponse.user.token)

}

const signInFailure = function (objResponse) {
  console.log('Log in failure. Return:', objResponse)
  // API returns a 401 (Unauthorized) failure with object containing:
  // statusText: "Unauthorized"
}

// const signOutSuccess = function (objResponse) {
//   console.log('Log out success. Return:', objResponse)
//   // API returns undefined.
// }
//
// const signOutFailure = function (objResponse) {
//   console.log('Log out failure. Return:', objResponse)
//   // Usually this is a token value problem.
// }
//
// const signUpSuccess = function (objResponse) {
//   // API returns an object of form
//   // {
//   //   user: {
//   //     email: "string",
//   //     id: int
//   //   }
//   // }
//   console.log('Sign up success. Return:', objResponse)
// }
//
// const signUpFailure = function (objResponse) {
//   // API returns an JSON containing one useful key-value pair:
//   // responseText: {
//   //   "email":["has already been taken"]
//   // }
//   console.log('Sign up failure. Return:', objResponse)
// }
//
// const changePasswordSuccess = function (objResponse) {
//   console.log('Change password success. Return:', objResponse)
//   // API returns undefined.
// }
//
// const changePasswordFailure = function (objResponse) {
//   console.log('Change password failure. Return:', objResponse)
//   // Mostly likely failure scenario is wrong old password.
// }

module.exports = {
  // changePasswordSuccess,
  // changePasswordFailure,
  signInSuccess,
  signInFailure
  // signOutSuccess,
  // signOutFailure,
  // signUpSuccess,
  // signUpFailure
}
