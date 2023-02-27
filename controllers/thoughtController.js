const Thought = require('../models/Thought');
const User = require('../models/User');

module.exports = {
    // get all thoughts
    getThoughts(req, res) {
        Thought.find()
        .then((thoughts) => res.json(thoughts))
        .catch((err) => res.status(500).json(err));
    },
    //get a single thought
    getSingleThought(req, res) {
        Thought.findOne({_id: req.params.thoughtId})
        .select('-__v')
        .then((thought) =>
        !thought
        ? res.status(404).json({message: 'No thought with that ID'})
        : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
    },
    //create a thought
    createThought(req, res){
        Thought.create(req.body)
        .then((thought) => {
            return User.findOneAndUpdate(
                {username: req.body.username},
                { $addToSet: { thoughts: thought._id}},
                {new: true}
            );
        })
        .then((username) =>
        !username
            ? res
            .status(404)
            .json({message: 'Thought created, but found no User with that ID'})
            : res.json('Created the thought 🎉')
        ).catch((err) =>{
            console.log(err);
            res.status(500).json(err);
        })
    },
    //Update a thought 
    updateThought(req, res){
        Thought.findOneAndUpdate(
            {_id: req.params.thoughtId},
            {$set: req.body},
            {runValidators: true, new: true}
        )
        .then((thought) =>
        !thought
        ? res.status(404).json({message: 'No thought with this id!'})
        : res.json(thought)
        )
        .catch((err) => res.status(500).json(err))
    },
    // Delete a thought and associated reactions
    deleteThought(req, res){
        Thought.findOneAndDelete({_id: req.params.thoughtId})
        .then((thought) => {
            if(!thought){
                res.status(404).json({message: 'No thought with that ID'})
            } else {
                Reaction.deleteMany({_id: { $in: thought.reactions}})
            }
        })
        .then(()=> res.json({message: 'Thought and associated reactions deleted!'}))
        .catch((err) => res.status(500).json(err))
    },
    //Create a reaction to a thought
    addReaction(req, res) {
        console.log("Adding a reaction");
        Thought.findOneAndUpdate(
            {_id: req.params.thoughtId},
            {$addToSet: { reactions: req.body}},
            {runValidators: true, new: true}
        )
          .then((thought) =>
          !thought
            ? res.status(404).json({message: 'No thought with this id!' })
            : res.json(thought)
          )
          .catch((err) => res.status(500).json(err));
    },
    //Remove/Delete a reaction to a thought
    deleteReaction(req, res) {
        console.log("Removing a reaction");
        Thought.findOneAndUpdate(
            {_id: req.params.thoughtId},
            {$pull: {reactions:{reactionId: req.params.reactionId}}},
            {runValidators: true, new: true}
        )
        .then((thought) =>
        ! thought
            ? res.status(404).json({ message: 'No thought found with this ID'
        })
        : res.json(thought)
        )
        .catch((err) =>{
            console.log(err);
            res.status(500).json(err);
        })
    }
}