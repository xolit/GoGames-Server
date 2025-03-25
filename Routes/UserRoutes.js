
const express = require('express');
const router = express.Router();
const { signup, login, getGame } = require('../Controller/UserController');

router.post('/signup', signup);
router.post('/login', login);
router.get('/game', getGame);

module.exports = router;
