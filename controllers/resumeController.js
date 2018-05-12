var mongoose = require('mongoose');
var Resume = mongoose.model('Resume');

//we said the username is unique and is identifier.
//we don't allow identical usernames in database.
var createResume = function(req,res){
    var Resume = new Resume({
        "Id":req.body.Id,
        "skill":req.body.skill,
        "presenterName":req.body.presenterName,
        "uploadTime":req.body.uploadTime,
        "description":req.body.description,
        "image":req.body.image,
        "videoURL":req.body.videoURL
    });
    Resume.save(function(err,newResume){
        if(!err){
            res.send(newResume);
        }else{
            res.sendStatus(400);
        }
    });
};

var findAllResumes = function(req,res){
    Resume.find(function(err,Resume){
        if(!err){
            res.send(Resume);
        }else{
            res.sendStatus(404);
        }
    });
};

var findOneResume = function(req,res){
    var resumeId = req.params.Id;
    Resume.findById(resumeId,function(err,Resume){
        if(!err){
            res.send(Resume);
        }else{
            res.sendStatus(404);
        }
    });
};

module.exports.createResume = createResume;
module.exports.findAllResumes = findAllResumes;
module.exports.findOneResume = findOneResume;