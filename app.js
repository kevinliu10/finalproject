const express = require('express');
const app = express();
var bodyParser = require('body-parser');
var passport = require('passport');
var flash = require('connect-flash');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');

const PORT = process.env.PORT || 3002;

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser());

require('./models/db.js');
require('./config/passport')(passport);

app.use(express.static('public'));
app.use("/styles",express.static(__dirname + "/styles"));
app.use("/controllers",express.static(__dirname + "/controllers"));
app.use("/config",express.static(__dirname + "/config"));
app.set('view engine', 'ejs');

// Passport setup
app.use(session({ secret: 'idealoopidealink' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// Routes setup
const router = require('./routes/routes');


app.use(router);

app.listen(PORT, function() {
    console.log('Express listening on port '+PORT);
});