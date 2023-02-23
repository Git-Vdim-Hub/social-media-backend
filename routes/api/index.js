const router = require('express').Router();
//const reactionRoutes = require('./reactionRoutes');
const userRoutes = require('./userRoutes');
//const thoughtRoutes = require('./thoughtRoutes');

//http://localhost:3001/api/reactions
//router.use('/reactions', reactionRoutes);
//http://localhost:3001/api/users
router.use('/users', userRoutes);
//http://localhost:3001/api/thoughts
//router.use('/thoughts', thoughtRoutes);

module.exports = router;