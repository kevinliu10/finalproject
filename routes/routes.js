const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');
const passport = require('passport');


router.get('/', controller.openLogin);
router.get('/home.ejs',controller.openHome);
router.get('/industryNews.ejs',controller.openIndustryNews);
router.get('/interviewSkills.ejs',controller.openInterviewSkills);
router.get('/jobOpportunities.ejs',controller.openJobOpportunities);
router.get('/resumeSkills.ejs',controller.openResumeSkills);
router.get('/sampleVideo.ejs',controller.openSampleVideo);
router.get('/login.ejs',controller.openLogin);
router.get('/register.ejs',controller.openRegister);
router.get('/dashboard.ejs',controller.openDashboard);
router.get('/logout', controller.logout);

router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/dashboard.ejs',
    failureRedirect: '/register.ejs',
    failureFlash: true
}));

router.post('/login', passport.authenticate('local-login', {
    successRedirect : '/dashboard.ejs',
    failureRedirect : '/login.ejs',
    failureFlash : true
}));


router.post('/news',controller.createNews);
router.get('/news',controller.findAllNews);
router.get('/news/:id',controller.findSingleNews);
router.post('/jobs',controller.createJobs);
router.get('/jobs',controller.findAllJobs);
router.get('/jobs/:id',controller.findSingleJobs);

module.exports = router;
