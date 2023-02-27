//base route for all API calls of this back-end framework. If a route is input that does not exist after /api, this index file will return a wrong route message

const router = require('express').Router();
const apiRoutes = require('./api');
//http://localhost:3001/api
router.use('/api', apiRoutes);

router.use((req, res) => {
  return res.send('Wrong route!');
});

module.exports = router;