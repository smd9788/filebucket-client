'use strict'
const store = require('../store')

const onSignUpSuccess = (responseData) => {
  $('#user-message').text('Successfully Signed Up')
  $('#signup-modal').modal('hide')
}

const onSignUpFailure = () => {
  $('#user-message').text('Error on Sign Up')
}

const onSignInSuccess = (responseData) => {
  $('#user-message').text('Successfully Signed In')
  store.user = responseData.user
  $('#signin-modal').modal('hide')
}

const onSignInFailure = () => {
  $('#user-message').text('Error on Sign In')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInFailure,
  onSignInSuccess
}
