const _ = require('lodash')

module.exports = router => {

  router.get('/user-research/scenario-3/', (req, res) => {
    const data = req.session.data
    data.identityServiceName = 'Access your teaching profile'
    data.onwardContinue = 'to access your teaching profile'
    data.returnToService = '/account/account-details'
    data.scenario = '3'
    data.hasIdentity = false
    res.redirect('/landing-pages/interstitial')
  })

router.get('/auth/return-to-service', (req, res) => {
  res.redirect(req.session.data.returnToService)
})

}
