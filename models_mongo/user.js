var bcrypt = require('bcryptjs');

module.exports = function(mongoose){
  
  var UserSchema = new mongoose.Schema({
    username: {type: String},
    password: {type: String}
});

var User = mongoose.model('User', UserSchema);

var registerCallback = function(err) {
    if (err) {
      return console.log(err);
    };
    return console.log('Account was created');
  };

  var register = function(username, password) {
    var user = new User({
      username: username,
      password: bcrypt.hashSync(password, 10)
    });
    user.save(registerCallback);
    console.log('Save command was sent');
  }

  return {
    User: User,
    register: register
  }
}