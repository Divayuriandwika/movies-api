const express = require('express');
const router = express.Router();

const { getAll, findByID, create, login,googleLogin } = require('./controller');

router.get('/', getAll);
router.get('/find/:id', findByID);
router.post('/', create);
router.post('/login', login);
router.post('/login/google', googleLogin);

module.exports = router;