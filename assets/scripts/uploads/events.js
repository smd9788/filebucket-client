const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onCreateUpload = function (event) {
  event.preventDefault()
  const imageData = new FormData(event.target)
  api.createUpload(imageData)
    .then(ui.createUploadSuccess)
    .catch(ui.failure)
}

const onGetUploads = (uploadData) => {
  event.preventDefault()
  console.log(uploadData)
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
  console.log('event is', event)
  const data = getFormFields(event.target)
  const id = event.target[3].dataset.id
  console.log('data is', data)
  api.update(id, data, event)
    .then(ui.onUpdateUploadSuccess)
    .then(() => onGetUploadsAfterDelete())
    .catch(ui.onUpdateUploadFailure)
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
  console.log(uploadData)
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
