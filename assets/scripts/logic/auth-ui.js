'use strict'

// const api = require('./auth-api')
const onGridClick = require('./game-ev')
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

  $('#grid').load('assets/html/game-grid.html', function () {
    // When grid has loaded, add delegated event handler to grid.
    $('#grid').on('click', onGridClick)
    // and tell players to start.
    $('.announcements').html('X plays first.')
  })
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
