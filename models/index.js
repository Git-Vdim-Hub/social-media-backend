//exports all models to be used in the controllers

const User = require('./User');
const Thought = require('./Thought');
const Reaction = require('./Reaction')

module.exports = (User, Thought, Reaction);