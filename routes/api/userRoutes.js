const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    deleteUser
  } = require('../../controllers/userController');
  
  //http://localhost:3001/api/users
  router.route('/').get(getUsers).post(createUser);
  
  //http://localhost:3001/api/users/:userId
  router.route('/:userId').get(getSingleUser).delete(deleteUser);
  
  module.exports = router;