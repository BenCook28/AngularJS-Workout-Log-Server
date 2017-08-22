var Sequelize = require('sequelize');

var sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://postgres:track1991@localhost:5432/workoutlog', {
    dialect: 'postgres'
});
// var sequelize = new Sequelize('workoutlog', 'postgres', 'track1991', {
// 	host: 'localhost',
// 	dialect: 'postgres'
// });

sequelize.authenticate().then(
	function() {
		console.log('connected to workoutlog postgres db');
	},
function(err){
	console.log(err);
	}
);

// var User = sequelize.import('models/users.js');
var User = sequelize.import('./models/users.js');
var Definition = sequelize.import('./models/definition.js')
var Log = sequelize.import('./models/log.js')
module.exports=sequelize;