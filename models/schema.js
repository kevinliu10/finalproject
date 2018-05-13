var mongoose = require('mongoose');
var newsSchema = mongoose.Schema(
    {
        "title":String,
        "date":String,
        "author":String,
        "content":String
    }
);
mongoose.model('News',newsSchema);
