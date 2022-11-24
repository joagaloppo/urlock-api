const express = require('express');
const router = express.Router();

const authRouter = require('./auth');
const dataRouter = require('./data');
router.use('/auth', authRouter);
router.use('/data', dataRouter);

router.get('/', (req, res) => res.json({ msg: 'Hello world' }));
module.exports = router;
