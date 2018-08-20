var mongoose = require('mongoose');
var User = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
    },
    loginAs: {
        type: String,
        required: true
    }
});

var User = mongoose.model('User', User);

module.exports.createUser = function (user, callback) {
    User.create(user, callback);
};

module.exports.getUser=function(callback,limit){
    User.find(callback).limit(limit);
};

module.exports.findUser=function(username,callback){
    var query = { username: username };
    User.find(query,callback);
};