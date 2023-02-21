const _ = require('lodash')

module.exports = router => {

  
  router.post(['/edit-details/name'], (req, res, next) => {
    const data = req.session.data
    data.editType = 'name'
    req.session.data['fullName'] = `${req.body['firstName']} ${req.body['lastName']}`
    data.alert = 'show'
    data.alertType = 'Name'
    data.nameLozenge = 'Show'
    res.redirect('/edit-details/evidence')
  })


  router.post(['/edit-details/date-of-birth'], (req, res, next) => {
    const data = req.session.data
    data.editType = 'dob'
    data.alert = 'show'
    data.dobLozenge = 'show'
    data.alertType = 'Date of birth'
    res.redirect('/edit-details/evidence')
  })


  router.post(['/edit-details/email'], (req, res, next) => {
    const data = req.session.data
    data.editType = 'email'
    data.alert = 'show'
    data.alertType = 'Email address'
    res.redirect('/edit-details/check-answers')
  })

  router.post(['/edit-details/phone'], (req, res, next) => {
    const data = req.session.data
    data.editType = 'phone'
    data.alert = 'show'
    data.alertType = 'Phone number'
    res.redirect('/edit-details/check-answers')
  })

  router.post('/edit-details/evidence', (req, res) => { res.redirect('/edit-details/check-answers') })
  router.post('/edit-details/check-answers', (req, res) => { res.redirect('/landing-pages/account-details') })



}
