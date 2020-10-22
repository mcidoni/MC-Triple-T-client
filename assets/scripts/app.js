'use strict'

const events = require('./auth/events')
$(() => {

  // POST sign-up
  $('#sign-up-form').on('submit', events.onSignUp)
  // POST sign-in
  $('#sign-in-form').on('submit', events.onSignIn)
  // PATCH change-password
  $('#change-password-form').on('submit', events.onChangePassword)
  // DELETE sign-out
  $('#sign-out').on('click', events.onSignOut)

  $('#create-game').on('click', events.onCreateGame)
  
  $('.square').on('click', events.onUpdateGame)

  $('#show-games').on('click', events.onShowGamesPlayed)

})





