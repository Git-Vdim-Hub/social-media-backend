const { Schema, model} = require ('mongoose');

// Creating the User model with the mongoose Schema
const userSchema = new Schema(
    {
        username: {type: String,
                   unique: true,
                   required: true,
                   
                   }
    },
)