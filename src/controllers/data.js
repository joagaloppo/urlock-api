const { Link } = require('../database');
const slugGenerator = require('../helpers/slugGenerator');
const getUserLinks = async (req, res) => {
	const userLinks = await Link.findAll({ where: { userId: req.user.id } });
	if (!userLinks) return res.status(200).json({ msg: 'You have not created any links yet' });
	return res.status(200).json({ userLinks });
};

const createUserLink = async (req, res) => {
	const { type, actionUrl, finalUrl } = req.body;
	if (!type || !actionUrl || !finalUrl) return res.status(400).json({ msg: 'Required data is missing' });

	let slug = slugGenerator();
	let isRepeated = await Link.findOne({ where: { slug } });

	while (!!isRepeated) {
		slug = slugGenerator();
		isRepeated = await Link.findOne({ where: { slug } });
	}

	const link = await Link.create({ slug, type, actionUrl, finalUrl, userId: req.user.id });
	return res.status(201).json({ link });
};

const getLink = async (req, res) => {
	const { slug } = req.query;
	const link = await Link.findOne({ where: { slug } });
	return res.status(200).json({ link });
};

module.exports = { getUserLinks, createUserLink, getLink };
