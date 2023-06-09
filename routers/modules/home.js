const Router = require('express').Router()

Router.get('/', (req, res) => {

  if (res.locals.login) {
    return res.redirect(`/user/${res.locals.user_name}`)
  }
  res.redirect('/login')
})

module.exports = Router