//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here
require('./routes/account-flow')(router)
require('./routes/user-research')(router)

router.post('/recieved-data', (req, res) => {
    req.session.data['account-data'] = JSON.parse(req.body['account-data'])
    res.redirect('/user-research/all-induction/')
  }) 