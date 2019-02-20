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

const onDeleteUpload = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const id = data.upload.id
  api.destroy(id)
    .then(ui.onDeleteUploadSuccess)
    .catch(ui.onDeleteUploadFailure)
}

module.exports = {
  onCreateUpload,
  onDeleteUpload

}
