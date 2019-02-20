'use strict'
const store = require('../store')
const getUploadsTemplate = require('../templates/get-uploads.handlebars')

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
  console.log(apiResponse)
}

const createUploadFailure = function () {
  $('#display-image').html('Something went wrong. Please try again')
  $('#display-image').addClass('error')

  setTimeout(() => {
    $('#display-image').html('')
    $('#display-image').removeClass('error')
  }, 3000)
}

const getUploadsSuccess = (data) => {
  console.log('data is', data)
  const getUploadsHtml = getUploadsTemplate({
    uploads: data.uploads
  })
  $('#upload-cards').html(getUploadsHtml)
}

const onDeleteUploadSuccess = function () {
  $('#content').html('')
  $('#user-message').html('')
  $('#user-message').html('Delete Request Successful')
}

const onDeleteUploadFailure = function () {
  $('#user-message').html('Delete Request Failed, Please Try Again')
  $('#purchase-destroy input').val('')
}

const onUpdateUploadSuccess = function (response) {
  $('#content').html('')
  $('#user-message').html('Successfully Updated Purchase')
  $('#purchase-update input').val('')
  $('#edit-upload-modal').modal('hide')
}

const onUpdateUploadFailure = function (response) {
  $('#user-message').html('Update Request Failed, Please Try Again')
  $('#purchase-update input').val('')
}

const onGetUploadsAfterDeleteSuccess = function (data) {
  const getUploadsHtml = getUploadsTemplate({ uploads: data.uploads })
  $('#upload-cards').html(getUploadsHtml)
  $('#user-message').html('Delete Request Successful')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInFailure,
  onSignInSuccess,
  createUploadSuccess,
  createUploadFailure,
  getUploadsSuccess,
  onDeleteUploadSuccess,
  onDeleteUploadFailure,
  onUpdateUploadSuccess,
  onUpdateUploadFailure,
  onGetUploadsAfterDeleteSuccess
}
