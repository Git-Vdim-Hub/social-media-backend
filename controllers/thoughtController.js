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
    },
    //create a thought
    createThought(req, res){
        Thought.create(req.body)
        .then((thought) => {
            return User.findOneAndUpdate(
                {_id: req.body.userId},
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
    // Delete a thought and associated reactions
    deleteThought(req, res){
        Thought.findOneAndDelete({_id: req.params.thoughtId})
        .then((thought) => {
            if(!thought){
                res.status(404).json({message: 'No thought with that ID'})
            } else {
                //Reaction.deleteMany({_id: { $in: thought.reactions}})
            }
        })
        .then(()=> res.json({message: 'Thought and associated reactions deleted!'}))
        .catch((err) => res.status(500).json(err))
    }
}