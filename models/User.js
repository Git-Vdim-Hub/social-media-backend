const { Schema, model} = require ('mongoose');

// Creating the User model with the mongoose Schema
const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Please provide a valid email address']

        },
        thoughts: [{
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }],
        friends: [{
            type: Schema.Types.ObjectId,
            ref: "User"
        }]
    },
    {
        toJSON:{
            virtuals: true,
        },
        id: false
    }
);
console.log("PIKACHU@35");
userSchema.virtual('friendCount').get(function(){
    return this.friends.length;
})

const User = model('User', userSchema);
//User.create([{username: 'test', email: 'test123@email.com'}])

module.exports = User