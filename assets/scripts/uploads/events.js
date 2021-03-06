const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onCreateUpload = function (event) {
  event.preventDefault()

  const imageData = new FormData(event.target)

  api.createUpload(imageData)
    .then(ui.createUploadSuccess)
    .catch(ui.failure)

  $('form').trigger('reset')
}

const onGetUploads = (uploadData) => {
  event.preventDefault()
  api.getUploads(uploadData)
    .then(ui.getAllUploadsSuccess)
    .catch(ui.failure)
}

const onDeleteUpload = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const id = data.upload.id
  api.destroy(id)
    .then(ui.onDeleteUploadSuccess)
    .catch(ui.onDeleteUploadFailure)
}

const onGetUploadsAfterDelete = function () {
  api.getOwnerUploads()
    .then(ui.onGetUploadsAfterDeleteSuccess)
    .catch(ui.onGetUploadsFailure)
}

const onUpdateUpload = (event) => {
  event.preventDefault()

  const data = getFormFields(event.target)
  const id = event.target[3].dataset.id

  api.update(id, data, event)
    .then(ui.onUpdateUploadSuccess)
    .then(() => onGetUploadsAfterDelete())
    .catch(ui.onUpdateUploadFailure)

  $('form').trigger('reset')
}

const onHandlebarDelete = (event) => {
  event.preventDefault()
  const target = $(event.target).closest('section').data('id')
  api.destroy(target)
    .then(() => onGetUploadsAfterDelete())
    .catch(ui.onDeletePurchaseFailure)
}

const onGetMyStuff = (uploadData) => {
  event.preventDefault()
  api.getOwnerUploads(uploadData)
    .then(ui.getUploadsSuccess)
    .catch(ui.failure)
}

module.exports = {
  onCreateUpload,
  onDeleteUpload,
  onUpdateUpload,
  onGetUploads,
  onHandlebarDelete,
  onGetMyStuff
}
