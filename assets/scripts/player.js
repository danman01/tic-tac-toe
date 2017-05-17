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

Player.prototype.fnIsLoggedIn = function () {
  return this._isLoggedIn
}

// Although one could just pass in the object from the API,
// this approach decouples the API design from the internals
// of the client.
// Note: AuthN = authentication, as distinct from
// AuthZ = authorization (not used here).
Player.prototype.fnLogIn = function (strName, strId, strAuthNToken) {
  this._isLoggedIn = true
  this.name = strName
  this.id = strId
  this.authNToken = strAuthNToken
}

// Log out a player by changing _isLoggedIn and erasing credentials.
Player.prototype.fnLogOut = function () {
  this._isLoggedIn = false
  this.name = ''
  this.id = ''
  this.authNToken = ''
}

// Create two Players as an array
const arrPlayers = [
  new Player(),
  new Player()
]

module.exports = {
  arrPlayers
}
