const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
	sequelize.define(
		'User',
		{
			username: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			updatedAt: false,
		}
	);
};
