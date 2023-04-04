// 使用者驗證
const userModel = require('./userModel')

function userAuth (email, password) {
  console.log('finding user...')

  return userModel.findOne({ email, password })
    .lean()
    .then(user => {
      if (user !== null) {
        return user
      } else {
        return false
      }
    })
    .catch(error => {
      console.log(error)
      return false
    })
}

module.exports = userAuth
