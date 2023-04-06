const Router = require('express').Router()

Router.post('/', (req, res) => {

  res.clearCookie('user_id')
  res.clearCookie('user_name')

  res.redirect('/')
})

module.exports = Router