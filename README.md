# social-media-backend

## Description
- MongoDB, a NOSql database, is a popular choice for many different back-end use cases due to its speed with large amounts of data and flexibility with unstructured data. One such use case is a social network architecture. This app uses Mongoose, an Object Data Modeling (ODM) library for MongoDB.
- The biggest motivation for building this application is understanding the workings of Mongoose where a schema model is available to work with in the application. Additionally, an explicit relationship between the MongoDB documents and the Mongoose models.
- The biggest problem this application solves is allowing individuals to use this framework as a back-end architecture for a social media website.
- During this project, my biggest take-aways are working with a back-end architecture in Mongoose and getting a lot of practice understanding the documentation.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
After cloning repo, please make sure you have nodejs installed then run the following command:
```
npm i
```
Make sure you have MongoDB installed. If you do not, please follow [MongDB install guide](https://coding-boot-camp.github.io/full-stack/mongodb/how-to-install-mongodb)

Additionally, please install [insomnia](https://insomnia.rest/) to test out the API calls with the application


## Usage
- Click link to view repo: [Github Repo](https://github.com/Git-Vdim-Hub/social-media-backend)
- Walk through [video](https://drive.google.com/file/d/15jU1MrGeF4dpf2An86DNT9d3NQvzlEEl/view)

If you would like to reproduce all of the steps I performed in the video, follow the below guide:

Once everything is set up dmentioned in installation, run the following command to get started:
```
npm run start
```
or to use nodemon
```
npm run dev
```


Then once the application is running in your local environment, use the following API routes to demo:

- POST Bob 
- http://localhost:3001/api/users/

```
{
  "username": "Bob",
  "email": "bob@email.com"
}
```
- POST Steve
- http://localhost:3001/api/users/

```
{
  "username": "Steve",
  "email": "steve@email.com"
}
```

- POST Bobs Thought
- http://localhost:3001/api/thoughts/

```
{
  "thoughtText": "I like turtles",
  "username": "Bob"
}
```

- POST Steves Thought
- http://localhost:3001/api/thoughts/

```
{
  "thoughtText": "Rabits are better",
  "username": "Steve"
}
```

- POST Steve to Bobs friends
- http://localhost:3001/api/users/:userId/friends/:friendId

```
{}
```
- POST Reaction to Steves Thought
- http://localhost:3001/api/thoughts/:thoughtId/reactions

```
{
    "reactionBody" : "No Way!",
    "username" : "Steve"
}
```
- POST Reaction to Bobs Thought
- http://localhost:3001/api/thoughts/:thoughtId/reactions

```
{
    "reactionBody" : "I like Rabits too",
    "username" : "Bob"
}
```

- GET users
- http://localhost:3001/api/users/
- GET Bob
- http://localhost:3001/api/users/:userId
- PUT Bob
- http://localhost:3001/api/users/:userId

```
{
  "username": "BobCHANGED",
  "email": "bob321@email.com" 
}
```
- GET Thoughts
- http://localhost:3001/api/thoughts/
- GET First Thought
- http://localhost:3001/api/thoughts/:thoughtId
- PUT First Thought

```
{
  "thoughtText": "I like turtles AND sunflowers",
  "username": "Bob"
}
```
- DELETE Reaction to Bobs Thought
- http://localhost:3001/api/thoughts/:thoughtId/reactions/:reactionId
- DELETE Bob (show associated thought is deleted)
- http://localhost:3001/api/users/:userId
- DELETE Steves Thought
- http://localhost:3001/api/thoughts/:thoughtId

## Credits
This application was built with the use of [nodejs](https://nodejs.dev/en/) and the following npm dependencies: 
[mongoose](https://www.npmjs.com/package/mongoose),  
[nodemon](https://www.npmjs.com/package/nodemon), 
[express](https://www.npmjs.com/package/express)
## License

[MIT](https://choosealicense.com/)
