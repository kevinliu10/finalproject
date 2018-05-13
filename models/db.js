// Create database
var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:admin@ds119070.mlab.com:19070/idealoop',function(err){
    if(!err){
        console.log('Connected to mongo');
    }else{
        console.log('Failed to connect to mongo');
    }
});

require('./schema.js');
