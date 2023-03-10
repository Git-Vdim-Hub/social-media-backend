const {Schema, model} = require('mongoose');
const Reaction = require('./Reaction');

// Creating the Thought model with the mongoose Schema
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280
        },
        createdAt: {
            type: Date, 
            default: Date.now
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [Reaction]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }
);
//counts the number of reactions that have been posted to a Thought
thoughtSchema.virtual('reactionCount').get(function(){
    return this.reactions.length
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;