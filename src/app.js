require('dotenv').config();

// ---------------
//   • SERVER •
// ---------------
const express = require('express');
const app = express();

// ---------------
// • MIDDLEWARES •
// ---------------
app.use(express.json());

// ---------------
//   • ROUTERS •
// ---------------
const routerIndex = require('./routes/index');
app.use(routerIndex);

// ---------------
//     • 404 •
// ---------------
app.use((req, res) => {
	res.status(404).json({ msg: 'Specified URL was not found' });
});

module.exports = app;
