'use strict'

const getUploadsTemplate = require('../templates/get-uploads.handlebars')
const getAllUploadsTemplate = require('../templates/get-all-uploads.handlebars')

const createUploadSuccess = function (apiResponse) {
  $('.alert').alert('close')

  $('#upload-cards').html(`<img src='${apiResponse.upload.url}'/>`)
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

const getAllUploadsSuccess = (data) => {
  console.log('data is', data)
  const getUploadsHtml = getAllUploadsTemplate({
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

const onUpdateUploadSuccess = function (id, data, event) {
  $('#content').html('')
  $('#user-message').html('Successfully Updated Purchase')
  $('.modal').modal('hide')
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
}

const onUpdateUploadFailure = function (response) {
  $('#user-message').html('Update Request Failed, Please Try Again')
  $('#purchase-update input').val('')
}

const onGetUploadsAfterDeleteSuccess = function (data) {
  const getUploadsHtml = getUploadsTemplate({ uploads: data.uploads })
  $('#upload-cards').html(getUploadsHtml)
  $('#user-message').html('Delete Request Successful')
  $('.modal').modal('hide')
}

module.exports = {
  createUploadSuccess,
  createUploadFailure,
  getUploadsSuccess,
  onDeleteUploadSuccess,
  onDeleteUploadFailure,
  onUpdateUploadSuccess,
  onUpdateUploadFailure,
  onGetUploadsAfterDeleteSuccess,
  getAllUploadsSuccess
}
