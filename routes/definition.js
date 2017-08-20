var router = require('express').Router();
var sequelize = require('../db.js');
var Log = sequelize.import('../models/log.js')
var User = sequelize.import('../models/users.js');
var Definition = sequelize.import('../models/definition.js')

	router.post('/', function(req, res){
		//variables
		//console.log(req.user.id)

		var description = req.body.definition.desc;
		var logType = req.body.definition.type;
		var owner = req.user.id;
		//methods
		Definition
			.create({
				description: description,
				logType: logType,
				owner: owner
			})
			.then(
				//createSuccess function
				function createSuccess(definition){
					//send a response as json
					res.json({
						definition: definition, 
						response: "Hey, it worked!"
					});
				},
				//createError function
				function createError(err){
					res.send(500, err.message);
				}
			);
	});
	router.get('/', function(req, res){
		//user variable

		var userid = req.user.id;
		Definition
		//findAll by owner method
		.findAll({
			where: { owner: userid }
		})

		.then(
			//success
			function findAllSuccess(data){
				console.log(req.user.id);
				res.json(data);
			},
			//error
			function findAllError(err) {
				res.status(500).send(err.message);
				console.log(err);
			}
		);
	});

	module.exports = router;