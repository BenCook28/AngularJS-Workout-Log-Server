// build a model in sequellize
module.exports = function(sequelize, DataTypes){
	return sequelize.define('logs', {
		description: DataTypes.STRING,
		result: DataTypes.STRING,
		owner: DataTypes.INTEGER,
		def: DataTypes.STRING
	},{
	})
};