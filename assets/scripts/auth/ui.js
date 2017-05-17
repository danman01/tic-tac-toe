'use strict'

// const api = require('./api')
const arrPlayers = require('../objects/player')
const authEvents = require('./events')

const signInSuccess = function (objResponse) {
  // API returns an object of form
  // {
  //   user: {
  //     email: "string",
  //     id: int,
  //     token: "string"
  //   }
  // }

  // Save player credentials in first player that isn't logged in.
  const intPlayerIndex = !arrPlayers[0].fnIsLoggedIn() ? 0 : 1
  arrPlayers[intPlayerIndex].fnIsLoggedIn(true, objResponse.user.email, objResponse.user.id, objResponse.user.token)

  // Load player space. Let an event handler fill in the spaces.
  // ...form the player ID dynamically (for clarity)
  const idPlayer = '#player' + intPlayerIndex
  // load the space...
  $(idPlayer).load('assets/html/player.html', function () {
    // when the space is loaded, populate the name field.
    $(idPlayer).children('.player-name').children('p').load(arrPlayers[intPlayerIndex].name)
  })

  // If both players are logged in, load game grid.
  // Else load 2nd player log-in/registration
  // if (arrPlayers[0].fnIsLoggedIn() && arrPlayers[1].fnIsLoggedIn()) {
  //   // $('#grid').load('assets/html/game-grid.html', function () {
  //     // stuff to start play
  //   // })
  // } else {
  //   $('#player1').load('assets/html/sign-in-register.html', function () {
  //     authEvents.addHandlers()
  //   })
  // }
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
