'use strict'
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')
const { currentPlayer } = require('../store')
const gameBoard = ['','','','','','','','','']
let gameOver = false

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

  // Select the box that was clicked, event.target
  const box = $(e.target)
  const index = box.data("num")

  // only execute code below if empty square is clicked

  // If the value at "index" in the gameBoard array ==="", I should "return" and do nothing 
  if (!box.text() && !gameOver) {
    checkWin(index)
    // Then set the text to the current player
    box.text(store.currentPlayer)
    api.updateGame(index, store.currentPlayer, gameOver)
      .then(ui.updateGameSuccess)
      .catch(ui.updateGameFailure)
      gameOver = false
  }
}

const onShowGamesPlayed = e => {
  e.preventDefault()
  api.viewGamesPlayed()
  .then(ui.viewGamesSuccess)
  .catch(ui.viewGamesFailure)
}

const checkWin = (index) => {
  console.log(store.currentPlayer)
  const gameBoard = store.game.cells
  console.log(gameBoard)
  gameBoard[index] = store.currentPlayer
  if (
    (gameBoard[0] === store.currentPlayer && gameBoard[1] === store.currentPlayer && gameBoard[2] === store.currentPlayer) ||

    (gameBoard[3] === store.currentPlayer && gameBoard[4] === store.currentPlayer && gameBoard[5] === store.currentPlayer) ||

    (gameBoard[6] === store.currentPlayer && gameBoard[7] === store.currentPlayer && gameBoard[8] === store.currentPlayer) ||

    (gameBoard[0] === store.currentPlayer && gameBoard[3] === store.currentPlayer && gameBoard[6] === store.currentPlayer) ||

    (gameBoard[1] === store.currentPlayer && gameBoard[4] === store.currentPlayer && gameBoard[7] === store.currentPlayer) ||

    (gameBoard[2] === store.currentPlayer && gameBoard[5] === store.currentPlayer && gameBoard[8] === store.currentPlayer) ||

    (gameBoard[0] === store.currentPlayer && gameBoard[4] === store.currentPlayer && gameBoard[8] === store.currentPlayer) ||

    (gameBoard[2] === store.currentPlayer && gameBoard[4] === store.currentPlayer && gameBoard[6] === store.currentPlayer)
  )
  {
    gameOver = true
  }
}



module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onCreateGame,
  onUpdateGame,
  onShowGamesPlayed,
  checkWin
}