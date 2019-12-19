/* indent size: 1 */

module.exports = app => {
	const DataTypes = app.Sequelize;

	const Model = app.model.define('category', {
		category_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		created_at: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: '2019-12-19 09:11:23'
		},
		updated_at: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: '2019-12-19 09:11:23'
		}
	}, {
		tableName: 'category',
		timestamps: false,
		freezeTableName: true
	});

	Model.associate = function() {

	}

	return Model;
};
