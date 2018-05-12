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

function isEmpty(str){
    return (str.length === 0 || !str.trim());
};

function validateEmail(email){
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,15}(?:\.[a-z]{2})?)$/i;
    return isEmpty(email) || re.test(email);
}