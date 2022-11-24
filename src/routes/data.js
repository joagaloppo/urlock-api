const express = require('express');
const router = express.Router();

// ---------------
// • CONTROLLERS •
// ---------------
const { getUserLinks, createUserLink, getLink } = require('../controllers/data');

// ---------------
// • MIDDLEWARES •
// ---------------
const authenticateToken = require('../middlewares/authenticateToken');

// -------------
// • ENDPOINTS •
// -------------
router.get('/links', authenticateToken, getUserLinks);
router.get('/link', getLink);
router.post('/link', authenticateToken, createUserLink);

module.exports = router;
