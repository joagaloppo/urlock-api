const { User } = require('../database');
const loginFields = async (req, res, next) => {
	const { username, password } = req.body;

	if (!username) return res.status(400).json({ msg: 'Username is missing' });
	if (!password) return res.status(400).json({ msg: 'Password is missing' });

	const user = await User.findOne({ where: { username } });
	if (!user) return res.status(400).json({ msg: 'User with that name does not exist' });

	const passwordIsCorrect = user.password === password;
	if (!passwordIsCorrect) return res.status(400).json({ msg: 'Password is incorrect' });

	req.user = { id: user.id, username: user.username };
	next();
};

module.exports = loginFields;
