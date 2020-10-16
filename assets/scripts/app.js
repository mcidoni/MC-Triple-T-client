'use strict'
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
// use require without a reference to ensure a file is bundled
// require('./example')
const events = require('./auth/events')
$(() => {
  // your JS code goes here
  // POST sign-up
  $('#sign-up-form').on('submit', events.onSignUp)
  // POST sign-in
  $('#sign-in-form').on('submit', events.onSignIn)
  // PATCH change-password
  $('#change-password-form').on('submit', events.onChangePassword)
  // DELETE sign-out
  $('#sign-out').on('click', events.onSignOut)
})

