// Log-in HTML
const strSignIn = " \
  <div class='player1 col-xs-offset-1 col-xs-3'> \
    <form id=\"sign-in\"> \
      <fieldset> \
        <p>Log in:</p> \
        \
        <input type='text' \
        name='credentials[email]' placeholder='player name'> \
        <br> \
        \
        <input type='password' \
        name='credentials[password]' placeholder='password'> \
        <br> \
        \
        <input type=\"submit\" name=\"submit\" value=\"Log in\"> \
      </fieldset> \
    </form> \
  </div> \
  "

module.exports = {
  strSignIn
}
