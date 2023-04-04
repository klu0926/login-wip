const db = require('../config/mongoose')
const UserModel = require('./userModel')
const userData = require('./data/users.json')

db.once('open', () => {
  console.log('creating users seed from json data...')

  UserModel.create(userData)
    .then(() => {
      console.log('user seed created!')
    })
    .catch(error => console.log(error))
})
