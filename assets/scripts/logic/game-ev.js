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
  // Try to add marker to grid
  // By design of grid HTML, e.target.id is the index
  objGame.addMove(e.target.id)
}

module.exports = {
  onNewGame,
  onGridClick
}
