var mongoose = require('mongoose');
var Message = mongoose.model('Message');

//we said the username is unique and is identifier.
//we don't allow identical usernames in database.
var createMessage = function(req,res){
    var Message = new Message({
        "Id":req.body.id,
        "userName":req.body.userName,
        "createTime":req.body.createTime,
        "content":req.body.content,
    });
    Message.save(function(err,newMessage){
        if(!err){
            res.send(newMessage);
        }else{
            res.sendStatus(400);
        }
    });
};

var findAllMessages = function(req,res){
    Message.find(function(err,Message){
        if(!err){
            res.send(Message);
        }else{
            res.sendStatus(404);
        }
    });
};

var findMessageByUser = function(req,res){
    var userName = req.params.userName;
    Message.find({userName:userName},function(err,Message){
        if(!err){
            res.send(Message);
        }else{
            res.sendStatus(404);
        }
    });
};

var findOneMessage = function(req,res){
    var messageInx = req.params.Id;
    Message.findById(messageInx,function(err,Message){
        if(!err){
            res.send(Message);
        }else{
            res.sendStatus(404);
        }
    });
};

var deleteOneMessage = function(req,res){
    var messageId = req.params.Id;
    Message.remove({Id:messageId},function(err,Message){
        if(!err){
            res.send("deletion successful");
        }else{
            res.sendStatus(404);
        }
    });
};

module.exports.createMessage = createMessage;
module.exports.findAllMessages = findAllMessages;
module.exports.findOneMessage = findOneMessage;
module.exports.deleteOneMessage = deleteOneMessage;
module.exports.findMessageByUser = findMessageByUser;