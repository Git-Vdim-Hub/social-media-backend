# social-media-backend

## Description



## Tests
- start app server
- POST Bob 
http://localhost:3001/api/users/
{
  "username": "Bob",
  "email": "bob@email.com"
}
- POST Steve
http://localhost:3001/api/users/
{
  "username": "Steve",
  "email": "steve@email.com"
}
- POST Bobs Thought
http://localhost:3001/api/thoughts/
{
  "thoughtText": "I like turtles",
  "username": "Bob"
}

- POST Steves Thought
http://localhost:3001/api/thoughts/
{
  "thoughtText": "Rabits are better",
  "username": "Steve"
}
- POST Steve to Bobs friends
http://localhost:3001/api/users/:userId/friends/:friendId
{}
- POST Reaction to Steves Thought
http://localhost:3001/api/thoughts/:thoughtId/reactions
{
    "reactionBody" : "No Way!",
    "username" : "Steve"
}
- POST Reaction to Bobs Thought
http://localhost:3001/api/thoughts/:thoughtId/reactions
{
    "reactionBody" : "I like Rabits too",
    "username" : "Bob"
}

- GET users
http://localhost:3001/api/users/
- GET Bob
http://localhost:3001/api/users/:userId
- PUT Bob
http://localhost:3001/api/users/:userId
{
  "username": "BobCHANGED",
  "email": "bob321@email.com" 
}
- GET Thoughts
http://localhost:3001/api/thoughts/
- GET First Thought
http://localhost:3001/api/thoughts/:thoughtId
- PUT First Thought
{
  "thoughtText": "I like turtles AND sunflowers",
  "username": "Bob"
}
- DELETE Reaction to Bobs Thought
//http://localhost:3001/api/thoughts/:thoughtId/reactions/:reactionId
- DELETE Bob (show associated thought is deleted)
http://localhost:3001/api/users/:userId
- DELETE Steves Thought
http://localhost:3001/api/thoughts/:thoughtId