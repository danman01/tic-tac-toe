'use strict'

// Define Game constructor
const Game = function () {
  // linear array of game state beginning r1c1, r1c2... r3c2, r3c3
  // expected values: 'x', 'o', ''
  const this._arrSquareStates = ['', '', '', '', '', '', '', '', '']
  const this._intMoveNr = 1
}

// AddMove attempts to add the next move at the specified
// grid square.
// Returns false if the grid square is occupied.
// If grid square is free:
// • updates the displayed game grid
// • updates the announcements window
// • updates the server after each move
// • Returns null if game continues
// • Returns true if game is over
Game.prototype.AddMove = function (intSquareIndex) {
  // Can this square be marked?
  if (this._arrSquareStates[intSquareIndex] !== '') {
    // No. Ignore move & post advice
    // Return false
    return false
  }

  // Mark the square; Odd moves are 'x'
  const strMark = intMove % 2 ? 'o' : 'x'

  // Instantiate an AllPaths to evaluate the state of play
  const objAllPaths = new AllPaths(this._arrSquareStates)
  // If game is a drawn
    // Tell server game is over
    // Post announcement
    // Return true
  // If game is won
    // Tell server game is over
    // Highlight winning paths
    // Post announcement
    // Refresh player win total
    // Return true
  // Else games continues
    // Update server with move
    // Increment move counter
    // Post announcement: who plays next
    // Return null
}

module.exports = Game
