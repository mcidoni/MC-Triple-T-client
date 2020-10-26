'use strict'

const store = require('../store')
const events = require('./events')
const signUpSuccess = res => {
  $("#message").text('Thanks for signing up ' + res.user.email)
  $('#sign-up-form').trigger('reset')
}

const signUpFailure = err => {
  $("#message").text('Sign up failed, try again')
}

const signInSuccess = res => {
  $("#message").text('Successfully signed in ' + res.user.email)
  store.user = res.user
  $('#sign-in-form').trigger('reset')
  $('#change-password-section').css('display', 'block')
  $('#sign-out-section').css('display', 'block')
  $('#sign-up-section').css('display', 'none')
  $('#sign-in-section').css('display', 'none')
  $('#gameboard').css('display', 'flex')
  $('#create-game').show()
  $('#sign-out').show()
  $('#show-games').show()
  $('#show-games').show()
}

const signInFailure = err => {
  $("#message").text('Sign in failed, try again')
}

const changePasswordSuccess = () => {
  $("#message").text('Successfully changed password for ' + store.user.email)
  $('#change-password-form').trigger('reset')
}

const changePasswordFailure = err => {
  $("#message").text('Password change failed, try again')
}

const signOutSuccess = () => {
  $("#message").text('Successfully signed out ' + store.user.email)
  delete store.user
  $('#change-password-section').css('display', 'none')
  $('#sign-out-section').css('display', 'none')
  $('#sign-up-section').css('display', 'block')
  $('#sign-in-section').css('display', 'block')
  $('#gameboard').hide()
  $('#create-game').hide()
  $('#show-games').hide()
}

const signOutFailure = err => {
  $("#message").text('Sign out failed, try again')
}

const createGameSuccess = res => {
  store.game = res.game
  $('#message').text('New game has begun!')
  $('.square').text('')
  $('.square').on('click', events.onUpdateGame)
  store.currentPlayer = 'X'
  console.log(res)
  $('#gameboard').show()
}

const createGameFailure = err => {
  $('#message').text('Failed to create new game')
}

const updateGameSuccess = res => {
  store.game = res.game
  if (
    res.game.over === true
  ){
    $('#message').text('Game Over! ' + store.currentPlayer + ' wins!' )
    // $('.square').off('click')
    $('#gameboard').hide()
  }
  console.log(res)
  store.currentPlayer = store.currentPlayer === 'O' ? 'X' : 'O'

}

const updateGameFailure = res => {
  $('#message').text('Failed to update game')
}

const viewGamesSuccess = res => {
  $('#message').text(`You have played ${res.games.length} games`)
}

const viewGamesFailure = err => {
  $('#message').text('Could not display total games played')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  createGameSuccess,
  createGameFailure,
  updateGameSuccess,
  updateGameFailure,
  viewGamesSuccess,
  viewGamesFailure
}