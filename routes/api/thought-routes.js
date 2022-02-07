const router = require('express').Router();
const {
  getAllThought,
  getThoughtById,
  addThought,
  updateThought,
  removeThought,
  addReaction,
  removeReaction
} = require('../../controllers/thought-controller');
// /api/thoughts
router.route('/')
  .get(getAllThought)
  .post(addThought);
// /api/thoughts/<Id>
router.route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(removeThought)

// /api/thoughts/:thoughtId/reaction
router.route('/:thoughtId/reactions')
  .post(addReaction)
  .delete(removeReaction);

module.exports = router;
