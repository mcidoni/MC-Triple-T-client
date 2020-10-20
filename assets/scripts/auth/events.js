'use strict'
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')
let currentPlayer = 'X'

const onSignUp = e => {
  e.preventDefault()
  const form = e.target
  const data = getFormFields(form)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = e => {
  e.preventDefault()
  const form = e.target
  const formData = getFormFields(form)
  api.signIn(formData)
    .then(ui.signInSuccess)
    .then(() => {
      api.createGame()
        .then(ui.createGameSuccess)
        .catch(ui.createGameFailure)
    })
    .catch(ui.signInFailure)
}

const onChangePassword = e => {
  e.preventDefault()
  const form = e.target
  const formData = getFormFields(form)
  api.changePassword(formData)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = e => {
  e.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onCreateGame = e => {
  e.preventDefault()
  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

const onUpdateGame = e => {
  e.preventDefault()
  console.log('click')

  // Select the box that was clicked, event.target
  const box = $(e.target)
  const index = box.data("num")

  // only execute code below if empty square is clicked

  if (!box.text()) {
    // If the value at "index" in the gameBoard array ==="", I should "return" and do nothing 

    // Then set the text to the current player
    box.text(currentPlayer)
    api.updateGame(index, currentPlayer, false)
      .then(ui.updateGameSuccess)
      .catch(ui.updateGameFailure)

    // Change the current player
    currentPlayer = currentPlayer === 'O' ? 'X' : 'O'
  }

}


module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onCreateGame,
  onUpdateGame
}