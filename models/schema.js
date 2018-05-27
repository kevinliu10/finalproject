var mongoose = require('mongoose');
var newsSchema = mongoose.Schema(
    {
        "title":String,
        "date":String,
        "author":String,
        "content":String,
        "next":String
    }
);
var jobSchema = mongoose.Schema(
    {
        "title":String,
        "date":String,
        "author":String,
        "content":String,
        "next":String
    }
);

mongoose.model('News',newsSchema);
mongoose.model('Jobs',jobSchema);