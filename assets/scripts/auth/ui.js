'use strict'
const store = require('../store')

const onSignUpSuccess = (responseData) => {
  $('.alert').alert('close')
  $('.jumbotron').append('<div class="alert alert-success" role="alert">You\'ve successfully signed-up! Sign in to get started.</div>')
}

const onSignUpFailure = () => {
  $('.alert').alert('close')
  $('.jumbotron').append('<div class="alert alert-warning" role="alert">Something went wrong while signing you up. Please check your network connection and try again.</div>')
}

const onSignInSuccess = (responseData) => {
  $('.alert').alert('close')
  $('body').css('background-image', '')
  $('.home-container').hide()
  $('.jumbotron').hide()
  $('body').append('<div class="alert alert-success" role="alert">Signed In!<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>')
  $('.dash-nav').show()
  $('.main-container').show()
  store.user = responseData.user

  setTimeout(() => {
    $('.alert').alert('close')
  }, 3000)
}

const onSignInFailure = () => {
  $('.alert').alert('close')
  $('.jumbotron').append('<div class="alert alert-danger" role="alert">Something went wrong while signing you in. Please check your network connection and try again.</div>')
}

const onChangePasswordSuccess = () => {
  $('#change-password-modal').modal('hide')
  $('body').append('<div class="alert alert-success">Password changed successfuly</div>')
  setTimeout(function () { $('.alert').alert('close') }, 3000)
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
  $('.dash-nav').hide()
  $('.jumbotron').show()
  $('#upload-cards').empty()

  $('.jumbotron').append('<div class="alert alert-warning" role="alert">Signed Out.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>')
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
