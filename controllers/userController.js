const User = require('../models/User');
const Thought = require('../models/Thought');

module.exports = {
  // Get all users
  getUsers(req, res) {
    User.find()
      .populate('thoughts')
      .populate('friends')//{ path: 'thoughts', select: '-__v' })
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  // Get a single user
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      .populate('thoughts')
      .populate('friends')
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  // update a user
  updateUser(req, res) {
    User.findOneAndUpdate(
      {_id: req.params.userId},
      {$set: req.body},
      {runValidators: true, new: true}
    )
    .then((user) =>
    !user
    ? res.status(404).json({message: 'No user with this id!'})
    : res.json(user)
    )
    .catch((err) => res.status(500).json(err));
  },
  // Delete a user and associated thoughts
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : Thought.deleteMany({ _id: { $in: user.thoughts } })
      )
      .then(() => res.json({ message: 'User and associated thoughts deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
   //add a friend to the user
  addFriend(req, res) {
    console.log('You are adding a friend');
    //console.log(req);
    User.findOneAndUpdate(
      {_id: req.params.userId},
      {$addToSet: {friends: req.params.friendId}},
      {runValidators: true, new: true}
    )
      .then((user) =>
      !user
        ? res
          .status(404)
          .json({message: 'No user found with this ID'})
          : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
  },
  //delete a friend from a user
  deleteFriend(req, res){
    console.log('You are removing a friend');
    User.findOneAndUpdate(
      {_id: req.params.userId},
      {$pull: {friends: req.params.friendId}},
      {runValidators: true, new: true}
    )
    .then((user) =>
    !user
    ? res.status(404).json({
      message: 'No user found with this ID'
    })
    : res.json({message: 'Friend successfully removed'})
    )
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    })
  }
};