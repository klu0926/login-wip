

function checkCookie(req, res, next) {
  // get cookie
  const { user_id, user_name } = req.signedCookies

  res.locals.login = false

  if (user_id && user_name) {
    console.log('it has cookie')
    console.log('user_id:', user_id)
    console.log('user_name:', user_name)
    res.locals.login = true
    res.locals.user_id = user_id
    res.locals.user_name = user_name

  } else {
    console.log('it does not have cookie')
    res.locals.login = false
  }
  next()
}

module.exports = checkCookie

