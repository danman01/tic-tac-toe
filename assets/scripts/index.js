'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

// Wait for document to be ready
$(() => {
  setAPIOrigin(location, config)

  // Hide the game grid and player regions.
  $('.game-grid, #playaer1, #player2').hide()
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
