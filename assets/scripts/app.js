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

  let currentPlayer = '✕'

  // Our box click event handler
  const onSquareClick = (event) => {
    console.log('click')

    // Select the box that was clicked, event.target
    const box = $(event.target)

    // Then set the text to the current player
    box.text(currentPlayer)

    // Change the current player
    currentPlayer = currentPlayer === 'O' ? '✕' : 'O'
  }

  // Select all of the boxes, $('.box'), add an event listener so that `on`
  // every 'click' the `onBoxClick` event handler is called.
  $('.square').on('click', onSquareClick)
})
