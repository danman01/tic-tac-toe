'use strict'

const authEvents = require('./auth/events')
const config = require('./config')
// const registerHTML = require('../html/register-html')
// const signInHTML = require('../html/sign-in-html')
const setAPIOrigin = require('../../lib/set-api-origin')

// Wait for document to be ready
$(() => {
  setAPIOrigin(location, config)

  // Load player1's log-in/registration forms into UI
  // Wait for the load to complete before continuing (synchronous, but
  // needed to be sure form is ready to fire event).
  $('#player0').load('assets/html/sign-in-register.html', function () {
    authEvents.addHandlers()
  })
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
