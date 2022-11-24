const { Link } = require('..');

module.exports = async () => {
	let a = await Link.create({
		slug: 'abc',
		type: 'youtube',
		actionUrl: 'youtube.com',
		finalUrl: 'google.com',
		userId: 1,
	});
	let b = await Link.create({
		slug: 'xyz',
		type: 'tiktok',
		actionUrl: 'tiktok.com',
		finalUrl: 'google.com',
		userId: 1,
	});
	let c = await Link.create({
		slug: 'jki',
		type: 'twitter',
		actionUrl: 'twitter.com',
		finalUrl: 'google.com',
		userId: 2,
	});
};
