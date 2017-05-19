'use strict'

// const api = require('./auth-api')
const objGameEvents = require('./game-ev')
const Player = require('../objects/player')

const signInSuccess = function (objResponse) {
  // API returns an object of form
  // {
  //   user: {
  //     email: "string",
  //     id: int,
  //     token: "string"
  //   }
  // }

  // Save player credentials
  const objPlayer = new Player(true,
    objResponse.user.email,
    objResponse.user.id,
    objResponse.user.token)
  // Load player space on screen
  $('#player').load('assets/html/player.html', function () {
    // When load completes, insert logged-in user name
    $('.player-name').html(objPlayer.name + ' logged in.')
  })

  // Load & start new game
  objGameEvents.onNewGame()
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

const signUpSuccess = function (objResponse) {
  // API returns an object of form
  // {
  //   user: {
  //     email: "string",
  //     id: int
  //   }
  // }

  // Post welcome announcement.
  $('.announcements').html('Welcome, ' + objResponse.user.email)

  // Log in user with cached credentials

}

const signUpFailure = function (objResponse) {
  // API returns an JSON containing one useful key-value pair:
  // responseText: {
  //   "email":["has already been taken"]
  // }
  console.log('Sign up failure. Return:', objResponse)
}
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
  signInFailure,
  // signOutSuccess,
  // signOutFailure,
  signUpSuccess,
  signUpFailure
}
