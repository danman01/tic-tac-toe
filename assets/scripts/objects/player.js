'use strict'

// Define Player constructor
const Player = function () {
  // is Player logged in?
  this._isLoggedIn = false

  // Player credentials
  this.name = ''
  this.id = ''
  this.authNToken = ''
}

// Although one could just pass in the authentication object from the API sign-in,
// the following approach decouples the API design from the internals
// of the client.

// Note: AuthN = authentication, as distinct from
// AuthZ = authorization (not used here).

// Three forms of this call:
// fnIsLoggedIn() returns true if logged in, false if not.
// fnIsLoggedIn(true, strName, strId, strAuthNToken) to record a log-in &
//    returns true.
// fnIsLoggedIn(false) logs out the player; returns false
Player.prototype.fnIsLoggedIn = function (bool, strName, strId, strAuthNToken) {
  if (arguments.length > 0) {
    if (bool) {
      this._isLoggedIn = true
      this.name = strName
      this.id = strId
      this.authNToken = strAuthNToken
    } else {
    // Log out a player by changing _isLoggedIn and erasing credentials.
      this._isLoggedIn = false
      this.name = ''
      this.id = ''
      this.authNToken = ''
    }
  }
  return this._isLoggedIn
}

// Create two Players as an array
const arrPlayers = [
  new Player(),
  new Player()
]

module.exports = arrPlayers
