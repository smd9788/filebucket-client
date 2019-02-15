'use strict'
const config = require('../config')
// const store = require('../store.js')

const signUp = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: formData
  })
}

const signIn = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: formData
  })
}

const createUpload = function (imageData) {
  return $.ajax({
    contentType: false,
    url: 'http://localhost:4741/uploads',
    method: 'POST',
    processData: false,
    data: imageData
  })
}

module.exports = {
  signUp,
  signIn,
  createUpload
}
