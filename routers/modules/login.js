const Router = require('express').Router()
const userAuth = require('../../model/userAuth')



Router.use

Router.get('/', (req, res) => {
  if (res.locals.login) {
    return res.redirect('/')
  }
  res.render('login')
})

Router.post('/', async (req, res) => {
  const { email, password } = req.body
  // 直接用 userAuth data 來找使用者
  const user = await userAuth(email, password)

  // 登入成功
  if (user) {
    console.log('user:', user)

    // 幫使用者加入cookie
    res.cookie('user_id', '1', { maxAge: 3600000, signed: true })
    res.cookie('user_name', user.firstName, { maxAge: 3600000, signed: true })

    console.log('cookie set')
    return res.redirect('/')

  } else {
    // 登入失敗
    const message = true
    res.render('login', { email, password, message })
  }
})

module.exports = Router
