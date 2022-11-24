const { User } = require('../database');
const registerFields = async (req, res, next) => {
	const { username, password } = req.body;

	if (!username) return res.status(400).json({ msg: 'Username is missing' });
	if (!password) return res.status(400).json({ msg: 'Password is missing' });

	const user = await User.create({ username, password });
	req.user = user;
	next();
};

module.exports = registerFields;
