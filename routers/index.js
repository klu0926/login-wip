const Router = require('express').Router()
const homeRouter = require('./modules/home')
const loginRouter = require('./modules/login')
const logoutRouter = require('./modules/logout')
const userRouter = require('./modules/user')
const cookieParser = require('cookie-parser')
const checkCookie = require('../config/checkCookie')

Router.use(cookieParser('my secret'))
Router.use(checkCookie)
Router.use('/user', userRouter)
Router.use('/', homeRouter)
Router.use('/login', loginRouter)
Router.use('/logout', logoutRouter)

module.exports = Router
