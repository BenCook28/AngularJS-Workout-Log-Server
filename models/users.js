// build a user model in sequelize
	// var User = sequelize.define('user', {
	// 	username: Sequelize.STRING,
	// 	passwordhash: Sequelize.STRING,
	// });
//user model crated using sequelize
//talks to the table user
module.exports = function(sequelize, DataTypes){
	var User = sequelize.define('user',{
		username: DataTypes.STRING,
		passwordhash: DataTypes.STRING
	});
	return User;
};