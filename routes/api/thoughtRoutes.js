//routes for all thought calls, including reactions to thoughts

const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thoughtController');

//http://localhost:3001/api/thoughts
router.route('/').get(getThoughts).post(createThought);

//http://localhost:3001/api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);
//http://localhost:3001/api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addReaction)
//http://localhost:3001/api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;