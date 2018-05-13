module.exports.openIndexPage = function(req, res){
    res.render('index.ejs', {});
};

module.exports.openIndustryNews = function(req, res){
    res.render('industryNews.ejs', {});
};
module.exports.openInterviewSkills = function(req, res){
    res.render('interviewSkills.ejs', {});
};
module.exports.openJobOpportunities = function(req, res){
    res.render('jobOpportunities.ejs', {});
};
module.exports.openResumeSkills = function(req, res){
    res.render('resumeSkills.ejs', {});
};
module.exports.openSampleVideo = function(req, res){
    res.render('sampleVideo.ejs', {});
};
module.exports.openHome = function(req, res){
    res.render('home.ejs', {});
};
module.exports.openLogin = function(req, res){
    res.render('login.ejs', {});
};
module.exports.openRegister = function(req, res){
    res.render('register.ejs', {});
};
module.exports.openDashboard = function(req, res){
    res.render('dashboard.ejs', {});
};

var mongoose = require('mongoose');
var News = mongoose.model('News');

var createNews = function(req,res){
    var news = new News({
        "title":req.body.title,
        "date":req.body.date,
        "author":req.body.author,
        "content":req.body.content
    });
    news.save(function(err,newNews){
        if(!err){
            res.send(newNews);
        }else{
            res.sendStatus(400);
        }
    });
};

var findAllNews = function(req,res){
    News.find(function(err,news){
        if(!err){
            res.send(news);
        }else{
            res.sendStatus(404);
        }
    });
};

var findSingleNews = function(req,res){
    var newsInx = req.params.id;
    News.findById(newsInx,function(err,news){
        if(!err){
            res.send(news);
        }else{
            res.sendStatus(404);
        }
    });
};

module.exports.displayNews = function(req, res) {
    res.render('industryNews', {news : News.findAllNews()})
}

module.exports.createNews = createNews;
module.exports.findAllNews = findAllNews;
module.exports.findSingleNews = findSingleNews;

