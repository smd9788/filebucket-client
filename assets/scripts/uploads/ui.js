'use strict'
const store = require('../store')

const onSignUpSuccess = (responseData) => {
  $('#user-message').text('Successfully Signed Up')
}

const onSignUpFailure = () => {
  $('#user-message').text('Error on Sign Up')
}

const onSignInSuccess = (responseData) => {
  $('#user-message').text('Successfully Signed In')
  store.user = responseData.user
}

const onSignInFailure = () => {
  $('#user-message').text('Error on Sign In')
}

const createUploadSuccess = function (apiResponse) {
  $('#display-image').html(`<img src='${apiResponse.upload.url}'/>`)
}

const createUploadFailure = function () {
  $('#display-image').html('Something went wrong. Please try again')
  $('#display-image').addClass('error')

  setTimeout(() => {
    $('#display-image').html('')
    $('#display-image').removeClass('error')
  }, 3000)
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInFailure,
  onSignInSuccess,
  createUploadSuccess,
  createUploadFailure
}
