const _ = require('lodash')

module.exports = router => {

  router.get('/user-research/mvp/', (req, res) => {
    const data = req.session.data
    data.scenario = '1'
    data.mvp = 'true'
    res.redirect('/landing-pages/v3/qualifications')
  })
  router.get('/user-research/all-quals/', (req, res) => {
    const data = req.session.data
    data.scenario = '2'
    data.mvp = 'false'
    res.redirect('/landing-pages/v3/qualifications')
  })

  router.get('/user-research/all-induction/', (req, res) => {
    const data = req.session.data
    data.scenario = '3'
    data.mvp = 'induction'
    res.redirect('/landing-pages/v3/qualifications')
  })

router.get('/auth/return-to-service', (req, res) => {
  res.redirect(req.session.data.returnToService)
})

}
