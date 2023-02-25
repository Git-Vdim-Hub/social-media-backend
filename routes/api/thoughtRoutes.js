const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    createThought,
    deleteThought
} = require('../../controllers/thoughtController');

//http://localhost:3001/api/thoughts
router.route('/').get(getThoughts).post(createThought);

//http://localhost:3001/api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought).delete(deleteThought);

module.exports = router;