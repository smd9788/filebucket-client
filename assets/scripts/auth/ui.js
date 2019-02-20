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
  $('#user-message').text('Successfully Signed In')
  store.user = responseData.user
  $('#signin-modal').modal('hide')
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
