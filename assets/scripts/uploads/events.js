const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = (event) => {
  event.preventDefault()
  const formData = getFormFields(event.target)

  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)

  $('form').trigger('reset')
}

const onSignIn = (event) => {
  event.preventDefault()
  const formData = getFormFields(event.target)

  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)

  $('form').trigger('reset')
}

const onCreateUpload = function (event) {
  event.preventDefault()
  const imageData = new FormData(event.target)
  api.createUpload(imageData)
    .then(ui.createUploadSuccess)
    .catch(ui.failure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onCreateUpload
}
