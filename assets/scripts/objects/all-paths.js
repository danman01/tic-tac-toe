'use strict'

const Path = require('./path')

// allPaths contains all 8 paths in tic-tac-toe:
// 3 columns
// 3 rows
// 2 diagonals

// Define allPaths constructor
const AllPaths = function (arrSquareStates) {
  this._arrAllPaths = [
    // create array of all paths & set their state according to current game state
    new Path([0, 1, 2], arrSquareStates),  // rows
    new Path([3, 4, 5], arrSquareStates),
    new Path([6, 7, 8], arrSquareStates),
    new Path([0, 3, 6], arrSquareStates),  // columns
    new Path([1, 4, 7], arrSquareStates),
    new Path([2, 5, 8], arrSquareStates),
    new Path([0, 4, 8], arrSquareStates),  // diagonals
    new Path([2, 4, 6], arrSquareStates)
  ]

  // .isDraw = true if game is a draw; else false.
  // Check every path
  this.isDraw = true
  // Check each path until a potential empty path that could be won is found.
  for (let i = 0; (i < 8 && this.isDraw); i++) {
    // If the game is won, it isn't a draw
    if (this._arrAllPaths[i].isWin) {
      this.isDraw = false
    } else {
      // if this path has 2 marks, both the same, and a hole,
      // it could be won
      if (this.arrAllPaths[i].isTwoEqual) {
        this.isDraw = false
      } else {
        // if just 1 or no marks, game could be won
        if (this.arrAllPaths[i].intNrMarks <= 1) {
          this.isDraw = false
        }
      }
    }
  }

  // .isWin set as follows:
  // • false: no winner (yet)
  // * object containing:
  //    mark: 'x' or 'y' wins,
  //    paths: [ [0, 1, 2], [0, 4, 8]… ] arrays of 3 indices,
  //      each indicating a winning path
  //  The .isWin object is useful in updating the UI.
  const _arrWinningPaths = []
  let _strWinningMark = ''
  // Check every path
  for (let j = 0; j < 8; j++) {
    // Search for one or more winning paths
    // .Full returns false if a path is not full;
    //   otherwise returns the mark that won
    switch (this._arrAllPaths[j].isFull) {
      case 'X': {   // x won
        _strWinningMark = 'X'
        _arrWinningPaths.push(this._arrAllPaths[j].arrPathIndices)
        break
      }
      case 'O': {   // y won
        _strWinningMark = 'O'
        _arrWinningPaths.push(this._arrAllPaths[j].arrPathIndices)
        break
      }
    }
  }
  if (_strWinningMark === '') {
    this.isWin = false
  } else {
    this.isWin = {
      mark: _strWinningMark,
      paths: _arrWinningPaths
    }
  }
}

module.exports = AllPaths
