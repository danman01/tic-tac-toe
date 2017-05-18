'use strict'

const AllPaths = require('./all-paths')

// Define Game constructor
const Game = function () {
  // linear array of game state beginning r1c1, r1c2... r3c2, r3c3
  // expected values: 'x', 'o', ''
  this._arrSquareStates = ['', '', '', '', '', '', '', '', '']
  this._intMoveNr = 1
}

// AddMove attempts to add the next move at the specified
// grid square.
// Returns false if the grid square is occupied.
// If grid square is free:
// • updates the displayed game grid
// • updates the announcements window
// • updates the server after each move
// • Returns null if game continues
// • Returns true if game is over (draw or win)
Game.prototype.AddMove = function (intSquareIndex) {
  // Can this square be marked?
  if (this._arrSquareStates[intSquareIndex] !== '') {
    // No. Ignore move & post advice
    $('.announcements').html('Sorry: you cannnot change an occupied square.')
    // Return false
    return false
  }

  // Mark the square in memory & on DOM
  // Odd moves are 'x'
  let strMark = this._intMove % 2 ? 'O' : 'X'
  this._arrSquareStates[intSquareIndex] = strMark
  $('#' + intSquareIndex).html(strMark)

  // Instantiate an AllPaths to evaluate the state of play
  const objAllPaths = new AllPaths(this._arrSquareStates)

  // If game is a draw…
  if (objAllPaths.isDraw) {
    // Tell server game is over
    // Post announcement
    $('.announcements').html('Game is a draw.')

    // Return true
    return true
  }
  if (objAllPaths.isWin) {
  // If game is won
    // Tell server game is over
    // Highlight winning paths
    // Post announcement
    $('.announcements').html(strMark + 'won!')

    // Refresh player win total
    // Return true
    return true
  }

  // Else games continues
  // Update server with move

  // Increment move counter
  this._intMoveNr++

  // Post announcement: who plays next
  let strMessage = this._intMove % 2 ? 'O' : 'X'
  strMessage += '\'s turn…'
  // ... and does he have to be careful?
  // ... or is he doomed?
  $('.announcements').html(strMessage)
  // Return null
  return null
}

module.exports = Game
