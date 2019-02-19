
const api = require('./api')
const ui = require('./ui')

const onCreateUpload = function (event) {
  event.preventDefault()

  const imageData = new FormData(event.target)

  api.createUpload(imageData)
    .then(ui.createUploadSuccess)
    .catch(ui.failure)
}

module.exports = {
  onCreateUpload
}
