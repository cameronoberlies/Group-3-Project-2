const router = require('express').Router();

const userRoutes = require('./user-routes');
const favoriteRoutes = require('./favorites-routes');

router.use('/users', userRoutes);
router.use('/favorites', favoriteRoutes);

module.exports = router;
