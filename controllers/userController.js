var mongoose = require('mongoose');
var User = mongoose.model('User');

//we said the username is unique and is identifier.
//we don't allow identical usernames in database.
var createUser = function(req,res){
    var User = new User({
        "name":req.body.name,
        "emailAddress":req.body.emailAddress,
        "password":req.body.password,
        "age":req.body.age,
        "major":req.body.major,
        "experience":req.body.experience
    });
    User.save(function(err,newUser){
        if(!err){
            res.send(newUser);
        }else{
            res.sendStatus(400);
        }
    });
};

var findAllUsers = function(req,res){
    User.find(function(err,User){
        if(!err){
            res.send(User);
        }else{
            res.sendStatus(404);
        }
    });
};

var findOneUser = function(req,res){
    var userName = req.params.name;
    User.find({name:userName},function(err,User){
        if(!err){
            res.send(User);
        }else{
            res.sendStatus(404);
        }
    });
};

var deleteOneUser = function(req,res){
    var userName = req.params.name;
    User.remove({name:userName},function(err,User){
        if(!err){
            res.send("deletion successful");
        }else{
            res.sendStatus(404);
        }
    });
};

module.exports.createUser = createUser;
module.exports.findAllUsers = findAllUsers;
module.exports.findOneUser = findOneUser;
module.exports.deleteOneUser = deleteOneUser;