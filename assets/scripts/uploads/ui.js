'use strict'

const getUploadsTemplate = require('../templates/get-uploads.handlebars')
const getAllUploadsTemplate = require('../templates/get-all-uploads.handlebars')

const createUploadSuccess = function (apiResponse) {
  $('.alert').alert('close')

  $('#upload-cards').html(`<img src='${apiResponse.upload.url}'/>`)
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
  const getUploadsHtml = getUploadsTemplate({
    uploads: data.uploads
  })
  $('#upload-cards').html(getUploadsHtml)
}

const getAllUploadsSuccess = (data) => {
  const getUploadsHtml = getAllUploadsTemplate({
    uploads: data.uploads
  })
  $('#upload-cards').html(getUploadsHtml)
}

const onDeleteUploadSuccess = function () {
  $('#content').html('')
  $('body').append('<div class="alert alert-danger">Delete Success</div>')

  setTimeout(function () { $('.alert').alert('close') }, 3000)
}

const onDeleteUploadFailure = function () {
  $('#user-message').html('Delete Request Failed, Please Try Again')
  $('#purchase-destroy input').val('')
  setTimeout(function () { $('#user-message').html('') }, 3000)
}

const onUpdateUploadSuccess = function (id, data, event) {
  $('#content').html('')
  $('#user-message').html('Successfully Updated')
  $('.modal').modal('hide')
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()

  setTimeout(function () { $('#user-message').html('') }, 3000)
}

const onUpdateUploadFailure = function (response) {
  $('#user-message').html('Update Request Failed, Please Try Again')
  $('#purchase-update input').val('')
  setTimeout(function () { $('#user-message').html('') }, 3000)
}

const onGetUploadsAfterDeleteSuccess = function (data) {
  const getUploadsHtml = getUploadsTemplate({ uploads: data.uploads })
  $('#upload-cards').html(getUploadsHtml)

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
