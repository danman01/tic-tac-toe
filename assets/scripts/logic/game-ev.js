'use strict'

const Game = require('../objects/game')
let objGame = {}

// Instantiate a new game
const onNewGame = function () {
  objGame = new Game()
  $('.announcements').html('X plays first.')
}

// Click on the grid
const onGridClick = function (e) {
  // Process the click in the game grid.
  // Returns true if game is over.
  if (objGame.addMove(e.target.id)) {
    // Remove grid's event handler
    $('#grid').off('click')
    // Store the game at the server.
    // Play another?
  }
}

module.exports = {
  onNewGame,
  onGridClick
}
