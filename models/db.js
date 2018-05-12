// Create database
var mongoose = require('mongoose');
mongoose.connect('mongodb://yujiaw3:Luck1010@ds119800.mlab.com:19800/opportunities',function(err){
    if(!err){
        console.log('Connected to mongo');
    }else{
        console.log('Failed to connect to mongo');
    }
});

require('./schema.js');
