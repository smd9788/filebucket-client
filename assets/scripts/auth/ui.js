'use strict'
const store = require('../store')

const onSignUpSuccess = (responseData) => {
  $('.alert').alert('close')
  $('#user-message').text('Successfully Signed Up')
  $('#signup-modal').modal('hide')
}

const onSignUpFailure = () => {
  $('.alert').alert('close')
  $('#user-message').text('Error on Sign Up')
}

const onSignInSuccess = (responseData) => {
  $('.alert').alert('close')
  $('body').css('background-image', '')
  $('.home-container').hide()
  $('.jumbotron').hide()
  $('body').append('<div class="alert alert-success" role="alert">Signed In!</div>')

  $('.main-container').show()
  store.user = responseData.user
}

const onSignInFailure = () => {
  $('.alert').alert('close')
  $('#user-message').text('Error on Sign In')
}

const onChangePasswordSuccess = () => {
  $('.alert').alert('close')
  $('body').append('<div class="alert alert-success">Password changed successfuly</div>')
  $('#change-password-modal').modal('hide')
}

const onChangePasswordFailure = () => {
  $('.alert').alert('close')
  $('#change-password-modal').append('<div class="alert alert-danger">Failed to change password. Please try again.</div>')
}

const onSignOutSuccess = () => {
  $('.alert').alert('close')
  $('.main-container').hide()
  $('body').css('background-image', 'url("public/background.jpg")')
  $('.home-container').show()
  $('.jumbotron').show()

  $('body').append('<div class="alert alert-warning" role="alert">Signed Out.</div>')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInFailure,
  onSignInSuccess,
  onChangePasswordFailure,
  onChangePasswordSuccess,
  onSignOutSuccess
}
