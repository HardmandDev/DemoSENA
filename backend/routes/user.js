const express = require('express');
const { create, login } = require('../controllers/user');

const router = express.Router();

router.post('/register', create);

router.post('/login', login);

module.exports = router;
