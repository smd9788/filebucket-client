'use strict'
// const config = require('../config')
// const store = require('../store.js')
const store = require('../store')

const createUpload = function (imageData) {
  return $.ajax({
    contentType: false,
    url: 'http://localhost:4741/uploads',
    method: 'POST',
    processData: false,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: imageData
  })
}

module.exports = {
  createUpload
}
