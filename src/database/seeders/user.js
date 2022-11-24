const { User } = require('..');

module.exports = async () => {
	let joaquin = await User.create({ username: 'joaquin', password: '123456' });
	let julian = await User.create({ username: 'julian', password: '123456' });
	let mariano = await User.create({ username: 'mariano', password: '123456' });
};
