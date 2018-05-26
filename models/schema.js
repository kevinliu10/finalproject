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
mongoose.model('News',newsSchema);