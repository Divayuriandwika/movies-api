const express = require('express');
const router = express.Router();

const { getAll, create,  getMovieByTitle, getMovieById, edit, deleteMovie } = require('./controller');

router.get('/', getAll);
router.post('/', create);
router.get('/:id', getMovieById);
router.get('/title/:title', getMovieByTitle);
router.put('/:id', edit);
router.delete('/:id', deleteMovie);


module.exports = router;