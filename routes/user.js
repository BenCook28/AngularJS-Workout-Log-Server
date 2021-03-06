var router = require('express').Router();
var sequelize = require('../db.js');
var User = sequelize.import('../models/users.js');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

// new user
router.post('/', function(req, res){
	console.log("user.js says: " + req.body.user)
	//when we post to api user, it will want a user object in the body
	var username = req.body.user.username;
	var pass = req.body.user.password; //To do: hash this password - HASH= not human readable
	//Match the model we create above
	//Sequelize-take the user model and go out to the db and create this:
	console.log(username,pass);
	User.create({
		username: username,
		passwordhash: bcrypt.hashSync(pass, 10)
	}).then(
		//Sequelize is going to return the object it created from db.
		function createSuccess(user){
			//successful get this:
			var token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24});

			res.json({
				user: user,
				message: 'created',
				sessionToken: token
			});
		},
		function createError(err){
			res.send(500, err.message);
			console.log(err)
		}
	);
	//Need to create a user object and use 
	//sequelize to put that user into our database
});

module.exports = router;