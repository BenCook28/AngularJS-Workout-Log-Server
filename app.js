require('dotenv').config();

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var sequelize = require('./db.js');
var User = sequelize.import('./models/users.js');

//mongo setup
// var mongoose = require('mongoose');
// var mongodb = require('./db_mongo');
// var Account = require('./models_mongo/user')(mongoose);

// mongoose.connect(mongodb.databaseUrl);

// mongoose.connection.on('connected', function(){
// 	console.log('connected to db ' + mongodb.databaseUrl)
// })

sequelize.sync();
// Warning: THIS WILL DROP THE USER TABLE
// // User.sync({force: true});
// User.sync();
app.use(bodyParser.json());
app.use(require('./middleware/headers.js'));
app.use(require('./middleware/validate-session.js'));
app.use('/api/user', require('./routes/user.js'));
//login route
// app.post('/api/user', function(req, res){
// 	var username = req.body.user.username;
// 	var pass = req.body.user.password;

// 	Account.register(username, pass);
// 	res.send(200);
// });

app.use('/api/login', require('./routes/session.js'));
app.use('/api/definition', require('./routes/definition.js'));
app.use('/api/log', require('./routes/log.js'));

app.use('/api/test', function(req, res){
	res.send("Hello World");
});

// app.listen(3000, function(){
// 	console.log("app is listening on 3000");

http.listen(process.env.PORT || 3000, function() {
	console.log('app is listening on a port');

});

//creates the table in postgres
//matches the model we defined
//Doesn't drop the db