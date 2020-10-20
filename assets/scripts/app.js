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

  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];


  let currentPlayer = '✕'

  const gameBoard = ['','','','','','','','','']

  // Our box click event handler
  

  // function checkWin(currentPlayer) {

  // }
  // Select all of the squares, $('.box'), add an event listener so that `on`
  // every 'click' the `onSquareClick` event handler is called.

})





