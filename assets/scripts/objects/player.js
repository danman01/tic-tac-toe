'use strict'

// Although one could just pass in the authentication object from the API sign-in,
// the following approach decouples the API design from the internals
// of the client.

// Note: AuthN = authentication, as distinct from
// AuthZ = authorization (not used here).

// Define Player constructor
const Player = function (bool, strName, strId, strAuthNToken) {
  this._setLogInStatus(bool, strName, strId, strAuthNToken)
}

// Define private function used both for constructor and as a method.
// Three forms of this function:
// __setLogInStatus(true, strName, strId, strAuthNToken) to record a log-in &
//    returns true.
// __setLogInStatus(false) logs out the player; returns false
Player.prototype._setLogInStatus = function (bool, strName, strId, strAuthNToken) {
  if (arguments.length > 0 && bool) {
    // Accept proffered credentials
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
  return this._isLoggedIn
}

// Three forms of fnIsLoggedIn method:
// fnIsLoggedIn() returns true if logged in, false if not.
// fnIsLoggedIn(true, strName, strId, strAuthNToken) to record a log-in &
//    returns true.
// fnIsLoggedIn(false) logs out the player; returns false
Player.prototype.fnIsLoggedIn = function (bool, strName, strId, strAuthNToken) {
  return this._setLogInStatus(bool, strName, strId, strAuthNToken)
}

module.exports = Player
