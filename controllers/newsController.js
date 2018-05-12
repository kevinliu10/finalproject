var mongoose = require('mongoose');
var News = mongoose.model('News');

//we said the username is unique and is identifier.
//we don't allow identical usernames in database.
var createNews = function(req,res){
    var News = new News({
        "Id":req.body.Id,
        "title":req.body.title,
        "writer":req.body.writer,
        "uploadTime":req.body.uploadTime,
        "brief":req.body.brief,
        "image":req.body.image,
        "content":req.body.content
    });
    News.save(function(err,newNews){
        if(!err){
            res.send(newNews);
        }else{
            res.sendStatus(400);
        }
    });
};

var findAllNews = function(req,res){
    News.find(function(err,News){
        if(!err){
            res.send(News);
        }else{
            res.sendStatus(404);
        }
    });
};

var findOneNews = function(req,res){
    var newsId = req.params.Id;
    News.findById(newsId,function(err,News){
        if(!err){
            res.send(News);
        }else{
            res.sendStatus(404);
        }
    });
};

module.exports.createNews = createNews;
module.exports.findAllNews = findAllNews;
module.exports.findOneNews = findOneNews;