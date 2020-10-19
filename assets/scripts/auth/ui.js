'use strict'
const store = require('../store')
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
}
const signOutFailure = err => {
  $("#message").text('Sign out failed, try again')
}

const createGameSuccess = res => {
  store.game = res.game
}

const createGameFailure = err => {
  alert('Catastrophic failure, self-destruct initiated')
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
  createGameFailure
}