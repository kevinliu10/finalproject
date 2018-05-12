var mongoose = require('mongoose');
var userSchema = mongoose.Schema(
    {
        "name":String,
        "emailAddress":String,
        "password":String,
        "age":Number,
        "major":String,
        "experience":String
    }
);

var messageSchema = mongoose.Schema(
    {
        "id":String,
        "userName":String,
        "createTime":Date,
        "content":String,
    }
);

var jobSchema = mongoose.Schema(
    {
        "Id":String,
        "company":String,
        "position":String,
        "discipline":String,
        "uploadTime":Date,
        "applicationDeadline":Date,
        "description":String,
        "requirements":String,
        "duty":String
    }
);

var interviewSchema = mongoose.Schema(
    {
        "Id":String,
        "skill":String,
        "presenterName":String,
        "uploadTime":Date,
        "description":String,
        "image":String,
        "videoURL":String
    }
);

var resumeSchema = mongoose.Schema(
    {
        "Id":String,
        "skill":String,
        "presenterName":String,
        "uploadTime":Date,
        "description":String,
        "image":String,
        "videoURL":String
    }
);

var newsSchema = mongoose.Schema(
    {
        "Id":String,
        "title":String,
        "writer":String,
        "uploadTime":Date,
        "brief":String,
        "image":String,
        "content":String
    }
);



mongoose.model('User',userSchema);
mongoose.model('Message',messageSchema);
mongoose.model('Job',jobSchema);
mongoose.model('Interview',interviewSchema);
mongoose.model('Resume',resumeSchema);
mongoose.model('News',newsSchema);

