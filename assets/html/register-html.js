// Register HTML
const strRegister = "<div class='player1 col-xs-3'> \
    <form id=\"sign-up\"> \
      <fieldset> \
        <p>…or register:<p> \
  \
        <input type='text' \
        name='credentials[email]' placeholder='username'> \
  \
        <input type='password' \
        name='credentials[password]' placeholder='password'> \
   \
        <input type='password' \
        name='credentials[password_confirmation]' placeholder='confirm password'> \
   \
        <input type=\"submit\" name=\"submit\" value=\"Sign up!\"> \
      </fieldset> \
    </form> \
  </div> \
  "

module.exports = {
  strRegister
}
