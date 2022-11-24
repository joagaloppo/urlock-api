const jwt = require('jsonwebtoken');
const { Token } = require('../database');

const login = async (req, res) => {
	const accessToken = jwt.sign(req.user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30s' });
	const refreshToken = jwt.sign(req.user, process.env.REFRESH_TOKEN_SECRET);
	await Token.create({ userId: req.user.id, token: refreshToken });

	return res.status(200).json({
		user: req.user,
		tokens: { access: accessToken, refresh: refreshToken },
	});
};

const register = async (req, res) => {
	return res.status(201).json({ msg: 'User created successfully', user: req.user });
};

const logout = async (req, res) => {
	const token = await Token.findOne({ where: { userId: req.body.id, token: req.body.token } });
	if (!token) return res.status(401).json({ msg: 'Refresh token does not exist in database' });
	await token.destroy();
	return res.status(200).json({ msg: 'Successfully logged out' });
};

const token = async (req, res) => {
	if (!req.body.token) return res.status(400).json({ msg: 'No refresh token was specified' });
	const token = await Token.findOne({ where: { userId: req.body.id, token: req.body.token } });
	if (!token) return res.status(401).json({ msg: 'Refresh token does not exist in database' });

	jwt.verify(req.body.token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
		if (err) return res.status(403).json({ msg: 'Refresh token is not valid' });
		const signableUser = { id: user.id, username: user.username };
		const accessToken = jwt.sign(signableUser, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30s' });
		return res.status(200).json({ tokens: { access: accessToken } });
	});
};

const getUser = async (req, res) => {
	return res.status(200).json({ user: req.user });
};

module.exports = { login, register, logout, token, getUser };
