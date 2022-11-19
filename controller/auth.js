module.exports = function auth(req, res, next) {
    if (req.session.name) {
      next()
    } else {
      res.render('page.ejs', {
        log: 'ログインしてください。'
      })
    }
}