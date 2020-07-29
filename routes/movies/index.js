const express = require('express');
const router = express.Router();

const { getAll, create, getMovieById, edit, deleteMovie } = require('./controller');

router.get('/', getAll);
router.post('/', create);
router.get('/:id', getMovieById);
router.put('/:id', edit);
router.delete('/:id', deleteMovie);

module.exports = router;