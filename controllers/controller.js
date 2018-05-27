var mongoose = require('mongoose');
var News = mongoose.model('News');
var Jobs = mongoose.model('Jobs');


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
    res.render('login.ejs', { message: req.flash('loginMessage') });
};
module.exports.openRegister = function(req, res){
    res.render('register.ejs', { message: req.flash('signupMessage') });
};
module.exports.openDashboard = function(req, res){
    res.render('dashboard.ejs', {
        user : req.user // get the user out of session and pass to template
    });
};
module.exports.logout = function(req, res){
    req.logout();
    res.redirect('/');
};

// Makes sure a user is logged in
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/');
}

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
            res.render('industryNews', {news});
        }else{
            res.sendStatus(404);
        }
    });
};

var createJobs = function(req,res){
    var jobs = new Jobs({
        "title":req.body.title,
        "date":req.body.date,
        "author":req.body.author,
        "content":req.body.content
    });
    jobs.save(function(err,newJobs){
        if(!err){
            res.send(newJobs);
        }else{
            res.sendStatus(400);
        }
    });
};

var findAllJobs = function(req,res){
    Jobs.find(function(err,jobs){
        if(!err){
            res.send(jobs);
        }else{
            res.sendStatus(404);
        }
    });
};

var findSingleJobs = function(req,res){
    var jobsInx = req.params.id;
    Jobs.findById(jobsInx,function(err,jobs){
        if(!err){
            res.render('jobOpportunities', {jobs});
        }else{
            res.sendStatus(404);
        }
    });
};

function validateForm(){
    if (isEmpty(document.getElementById('data_1').value.trim())) {
        alert('Please enter your email!');
        return false;
    }
    if (!validateEmail(document.getElementById('data_1').value.trim())) {
        alert('EMAIL must be a valid email address!');
        return false;
    }
    alert('Hi, we will inform you via email as soon as we are available.' )
    return true;
};

function isEmpty(str){
    return (str.length === 0 || !str.trim());
};

function validateEmail(email){
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,15}(?:\.[a-z]{2})?)$/i;
    return isEmpty(email) || re.test(email);
}

module.exports.createNews = createNews;
module.exports.findAllNews = findAllNews;
module.exports.findSingleNews = findSingleNews;
module.exports.createJobs = createJobs;
module.exports.findAllJobs = findAllJobs;
module.exports.findSingleJobs = findSingleJobs;

