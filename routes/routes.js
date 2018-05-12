const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');


router.get('/', controller.openHome);

router.get('/home.ejs',controller.openHome);
router.get('/industryNews.ejs',controller.openIndustryNews);
router.get('/interviewSkills.ejs',controller.openInterviewSkills);
router.get('/jobOpportunities.ejs',controller.openJobOpportunities);
router.get('/resumeSkills.ejs',controller.openResumeSkills);
router.get('/sampleVideo.ejs',controller.openSampleVideo);
router.get('/login.ejs',controller.openLogin);
router.get('/register.ejs',controller.openRegister);
router.get('/dashboard.ejs',controller.openDashboard);

module.exports = router;