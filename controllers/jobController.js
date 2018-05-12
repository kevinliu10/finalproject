var mongoose = require('mongoose');
var Job = mongoose.model('Job');

//we said the username is unique and is identifier.
//we don't allow identical usernames in database.
var createJob = function(req,res){
    var Job = new Job({
        "Id":req.body.Id,
        "company":req.body.company,
        "position":req.body.position,
        "discipline":req.body.discipline,
        "uploadTime":req.body.uploadTime,
        "applicationDeadline":req.body.applicationDeadline,
        "description":req.body.description,
        "requirements":req.body.requirements,
        "duty":req.body.duty
    });
    Job.save(function(err,newJob){
        if(!err){
            res.send(newJob);
        }else{
            res.sendStatus(400);
        }
    });
};

var findAllJobs = function(req,res){
    Job.find(function(err,Job){
        if(!err){
            res.send(Job);
        }else{
            res.sendStatus(404);
        }
    });
};

var findJobByDiscipline = function(req,res){
    var discipline = req.params.discipline;
    Job.find({discipline:discipline},function(err,Job){
        if(!err){
            res.send(Job);
        }else{
            res.sendStatus(404);
        }
    });
};

var findOneJob = function(req,res){
    var jobId = req.params.Id;
    Job.findById(jobId,function(err,Job){
        if(!err){
            res.send(Job);
        }else{
            res.sendStatus(404);
        }
    });
};

module.exports.createJob = createJob;
module.exports.findAllJobs = findAllJobs;
module.exports.findOneJob = findOneJob;
module.exports.findJobByDiscipline = findJobByDiscipline;