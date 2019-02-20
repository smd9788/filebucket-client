'use strict'
const config = require('../config')
const store = require('../store')

const createUpload = function (imageData) {
  return $.ajax({
    contentType: false,
    url: config.apiUrl + '/uploads/',
    method: 'POST',
    processData: false,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: imageData
  })
}

const update = function (id, data) {
  return $.ajax({
    url: config.apiUrl + '/uploads/' + id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    method: 'PATCH',
    data: data
  })
const getUploads = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/uploads',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }})
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
  destroy,
  update,
  getUploads
}
