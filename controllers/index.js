const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

//cookies
// var cookieParser = require('cookie-parser')
// app.use(cookieParser());
// cookies

module.exports = router;
