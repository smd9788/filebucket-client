'use strict'
'use strict'
const uploadEvents = require('./uploads/events')
const authEvents = require('./auth/events')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // Background image on page load
  $('body').css('background-image', 'url("public/background.jpg")')

  $('.user-sign-in').hide()
  $('.main-container').hide()
  $('.dash-nav').hide()

  // Toggle Sign-up/in
  $('#toggle-sign-in-btn').on('click', function () {
    $('.user-sign-up').hide()
    $('.user-sign-in').show()
  })
  $('#toggle-sign-up-btn').on('click', function () {
    $('.user-sign-in').hide()
    $('.user-sign-up').show()
  })

  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out-button').on('click', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#get-uploads-button').on('click', uploadEvents.onGetUploads)
  $('body').on('click', '.delete', uploadEvents.onHandlebarDelete)
  $('body').on('submit', '.edit-upload-modal-form', uploadEvents.onUpdateUpload)
  $('#mystuff').on('click', uploadEvents.onGetMyStuff)
  $('#upload-form').on('submit', uploadEvents.onCreateUpload)
})
