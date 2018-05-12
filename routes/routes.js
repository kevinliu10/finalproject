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

var userController = require('../controllers/userController.js');

router.post('/user',userController.createUser);
router.get('/user',userController.findAllUsers);
router.get('/user/name/:name',userController.findOneUser);
router.delete('/user',userController.deleteOneUser);

var messageController = require('../controllers/messageController.js');

router.post('/message', messageController.createMessage);
router.get('/message', messageController.findAllMessages);
router.get('/message/userName/:userName', messageController.findMessageByUser);
router.get('/message/Id/:Id', messageController.findOneMessage);
router.delete('/message', messageController.deleteOneMessage);

var jobController = require('../controllers/jobController.js');

router.post('/job', jobController.createJob);
router.get('/job', jobController.findAllJobs);
router.get('/job/discipline/:discipline', jobController.findJobByDiscipline);
router.get('/job/Id/:Id', jobController.findOneJob);

var interviewController = require('../controllers/interviewController.js');

router.post('/interview', interviewController.createInterview);
router.get('/interview', interviewController.findAllInterviews);
router.get('/interview/Id/:Id', interviewController.findOneInterview);

var resumeController = require('../controllers/resumeController.js');

router.post('/resume', resumeController.createResume);
router.get('/resume', resumeController.findAllResumes);
router.get('/resume/Id/:Id', resumeController.findOneResume);

var newsController = require('../controllers/newsController.js');

router.post('/news', newsController.createNews);
router.get('/news', newsController.findAllNews);
router.get('/news/Id/:Id', newsController.findOneNews);

module.exports = router;
