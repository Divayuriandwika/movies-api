const express = require('express');
const router = express.Router();

const { getAll, create, edit, deleteMovie } = require('./controller');

router.get('/', getAll);
router.post('/', create);
router.put('/:id', edit);
router.delete('/:id', deleteMovie);

module.exports = router;