'use strict'

// Define Path constructor
// Path holds each row's, column's, or diagonal's state and provides
//   convenient methods to determine if game is over, nearly won, etc.
// arrPathIndices is a 3-element array of indices from the linear game array;
//  e.g., [0, 1, 2] for the top row, [0,5,9] for a diagonal.
const Path = function (arrIndices, arrSquareStates) {
  // Init the coördinates
  // Consider validation & error recovery in future
  this.arrPathIndices = arrIndices

  // strState = string of placed marks.
  // empty at start of game
  // 'xxx' indicates a win by 'x'
  // 'xo' indicates a mark by each player and an empty spot
  // 'xx' indicates 2 x's in the path and an empty spot
  this.strState = ''
  // Update the state of the path. Assumes valid inputs!
  for (let i = 0; i < 3; i++) {
    this.strState += arrSquareStates[this.arrPathIndices[i]]
  }

  // .isTwoEqual = false if the path contains !=2 of the same marks.
  // ='x' or 'o' if the path contains 2 of the same marks AND an empty spot.
  // = true means 1 mark of x and one mark of o.

  // Assume there are not two equal marks to start...
  this.isTwoEqual = false

  // Are there just two marks?
  if (this._strState.length === 2) {
    // Yes. Are they identical, representing a potential win-in-one-move?
    switch (this._strState) {
      // Are they both 'x'
      case 'xx': {
        this.isTwoEqual = 'X'
        break
      }
      // …or 'o'
      case 'oo': {
        this.isTwoEqual = 'O'
        break
      }
      // …or 2 mixed marks
      case 'xo': {
        this.isTwoEqual = true
        break
      }
      case 'ox': this.isTwoEqual = true
    }
  }

  // .isFull = false if the path contains !=3 marks
  // ='X' or 'O' if the path contains 3 of the same marks
  // = true means a draw; e.g., xxo.

  // Assume false to start...
  this.isFull = false

  // Are there exactly 3 marks; i.e. path is full?
  if (this._strState.length === 3) {
    switch (this._strState) {
      // Are they all 'x'
      case 'xxx': {
        this.isFull = 'X'
        break
      }
      // …or 'o'
      case 'ooo': {
        this.isFull = 'O'
        break
      }
      // …or some mixed set of marks; e.g., xxo
      default: {
        this.isFull = true
      }
    }
  }
}

module.exports = Path
