const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
	sequelize.define('Link', {
		slug: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		type: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		actionUrl: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		finalUrl: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	});
};
