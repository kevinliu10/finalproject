var mongoose = require('mongoose');
var Interview = mongoose.model('Interview');

//we said the username is unique and is identifier.
//we don't allow identical usernames in database.
var createInterview = function(req,res){
    var Interview = new Interview({
        "Id":req.body.Id,
        "skill":req.body.skill,
        "presenterName":req.body.presenterName,
        "uploadTime":req.body.uploadTime,
        "description":req.body.description,
        "image":req.body.image,
        "videoURL":req.body.videoURL
    });
    Interview.save(function(err,newInterview){
        if(!err){
            res.send(newInterview);
        }else{
            res.sendStatus(400);
        }
    });
};

var findAllInterviews = function(req,res){
    Interview.find(function(err,Interview){
        if(!err){
            res.send(Interview);
        }else{
            res.sendStatus(404);
        }
    });
};

var findOneInterview = function(req,res){
    var interviewId = req.params.Id;
    Interview.findById(interviewId,function(err,Interview){
        if(!err){
            res.send(Interview);
        }else{
            res.sendStatus(404);
        }
    });
};

module.exports.createInterview = createInterview;
module.exports.findAllInterviews = findAllInterviews;
module.exports.findOneInterview = findOneInterview;