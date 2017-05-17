'use strict'

const authEvents = require('./auth/events.js')
const config = require('./config')
const forms = require('./forms')
const setAPIOrigin = require('../../lib/set-api-origin')

// Wait for document to be ready
$(() => {
  setAPIOrigin(location, config)

  // Hide the game grid and player regions.
  $('.game-grid, #playaer1, #player2').hide()

  // Load player1's log-in/registration forms into UI
  $('#player1').html(forms.strLogIn)

  // Ready to receive events
  authEvents.addHandlers()
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
