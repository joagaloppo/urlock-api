const express = require('express');
const router = express.Router();

// ---------------
// • CONTROLLERS •
// ---------------
const { login, register, logout, token, getUser } = require('../controllers/auth');

// ---------------
// • MIDDLEWARES •
// ---------------
const loginFields = require('../middlewares/loginFields');
const registerFields = require('../middlewares/registerFields');
const authenticateToken = require('../middlewares/authenticateToken');

// ---------------
//  • ENDPOINTS •
// ---------------
router.post('/login', loginFields, login);
router.post('/register', registerFields, register);
router.delete('/logout', logout);
router.post('/token', token);
router.post('/', authenticateToken, getUser);

module.exports = router;
