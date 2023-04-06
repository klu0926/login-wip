const Router = require('express').Router()

Router.get('/:user_id', (req, res) => {

  if (res.locals.login) {
    return res.render('welcome')
  }

  res.redirect('/login')
})

module.exports = Router