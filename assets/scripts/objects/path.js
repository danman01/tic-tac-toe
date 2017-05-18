'use strict'

// Define Path constructor
// Path holds each row's, column's, or diagonal's state and provides
//   convenient methods to determine if game is over, nearly won, etc.
// arrPathIndices is a 3-element array of indices from the linear game array;
//  e.g., [0, 1, 2] for the top row, [0,5,9] for a diagonal.
const Path = function (arrPathIndices, arrSquareStates) {
  // _strState = string of placed marks.
  // empty at start of game
  // 'xxx' indicates a win by 'x'
  // 'xo' indicates a mark by each player and an empty spot
  // 'xx' indicates 2 x's in the path and an empty spot
  // No marks at instantiation
  this._strState = this._updatePath(arrSquareStates)

  // Init the coördinates
  // Consider validation & error recovery
  this.arrPathIndices = arrPathIndices
}

// Returns false if the path contains !=2 of the same marks
// ='x' or 'o' if the path contains 2 of the same marks AND an empty spot
// true means 1 mark of x and one mark of o
Path.prototype.TwoEqual = function () {
  // Are there just two marks?
  if (this._strState.length === 2) {
    switch (this._strState) {
      // Are they both 'x'
      case 'xx': return 'x'
      // …or 'o'
      case 'oo': return 'o'
      // …or 2 mixed marks
      case 'xo': return true
      case 'ox': return true
    }
  } else return false
}

// Returns false if the path contains !=3 marks
// ='x' or 'o' if the path contains 3 of the same marks
// true means a draw; e.g., xxo.
Path.prototype.Full = function () {
  // Are there exactly 3 marks; i.e. path is full?
  if (this._strState.length === 3) {
    switch (this._strState) {
      // Are they all 'x'
      case 'xxx': return 'x'
      // …or 'o'
      case 'ooo': return 'o'
      // …or some mixed set of marks; e.g., xxo
      default: return true
    }
  } else return false
}

// updatePath method
// • updates the Path's properties from the supplied array of square states
Path.prototype._updatePath = function (arrSquareStates) {
  let strState = ''
  // Update the state of the path. Assumes valid inputs!
  for (let i = 0; i < 3; i++) {
    strState += arrSquareStates[this.arrPathIndices[i]]
  }
  return strState
}

module.exports = Path
