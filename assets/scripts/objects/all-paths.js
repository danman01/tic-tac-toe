'use strict'

const Path = require('./path')

// allPaths contains all 8 paths in tic-tac-toe:
// 3 columns
// 3 rows
// 2 diagonals

// Define allPaths constructor
const AllPaths = function () {
  this._arrAllPaths = [
    // array of all paths
    new Path(0, 1, 2),  // rows
    new Path(3, 4, 5),
    new Path(6, 7, 8),
    new Path(0, 3, 6),  // columns
    new Path(1, 4, 7),
    new Path(2, 5, 8),
    new Path(0, 4, 8),  // diagonals
    new Path(2, 4, 6)
  ]
}

// isDraw returns true if the game cannot be won; i.e.,
// every path has at least 1 'x' and 1 'o'
AllPaths.prototype.isDraw = function () {
  // Check every path
  for (let i = 0; i < 8; i++) {
    // If any path does not contain at least 1 'x' and 1 'o'
    // the game is not yet drawn.
    // TwoEqual returns true if there are 2 different marks
    // Full returns true if there are 3 mixed marks
    if (this._arrAllPaths[i].TwoEqual !== true ||
      this.arrAllPaths[i].Full !== true) {
      // Found a path where it is possible to win
      return false
    }
    return true
  }
}

// isWin returns either:
// • false: no winner (yet)
// * object containing:
//    strWinningMark: 'x' or 'y' wins,
//    arrWinningPaths: [ [0, 1, 2], [0, 4, 8]… ] arrays of 3 indices,
//      each indicating a winning path
AllPaths.prototype.isWin = function () {
  const arrWinningPaths = []
  let strWinningMark = ''
  // Check every path
  for (let i = 0; i < 8; i++) {
    switch (this.arrAllPaths[i].Full) {
      case 'x': {   // x won
        strWinningMark = 'x'
        arrWinningPaths.push(this.arrAllPaths[i].arrPathIndices)
        break
      }
      case 'o': {   // y won
        strWinningMark = 'y'
        arrWinningPaths.push(this.arrAllPaths[i].arrPathIndices)
        break
      }
    }
  }
  return {strWinningMark, arrWinningPaths}
}

module.exports = AllPaths
