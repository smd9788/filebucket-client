'use strict'
const config = require('../config')
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

const destroy = function (id) {
  return $.ajax({
    url: config.apiUrl + '/uploads/' + id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    method: 'DELETE'
  })
}

module.exports = {
  createUpload,
  destroy
}
