const router = require('express').Router();

const userRoutes = require('./user-routes');
const favoriteRoutes = require('./favorites-routes');
const contactRoutes = require('./contact');

router.use('/users', userRoutes);
router.use('/favorites', favoriteRoutes);
router.use('/contact', contactRoutes);

module.exports = router;
