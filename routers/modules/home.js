const Router = require('express').Router()
const userAuth = require('../../model/userAuth')

Router.get('/', (req, res) => {
  res.render('index')
})

Router.post('/', async (req, res) => {
  const { email, password } = req.body
  const user = await userAuth(email, password)

  // can find user
  if (user) {
    console.log(user)
    return res.render('welcome', { user })
  } else {
    // can't find user
    const message = true
    res.render('index', { email, password, message })
  }
})

module.exports = Router
