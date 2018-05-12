const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.static('public'));
app.use("/styles",express.static(__dirname + "/styles"));
app.use("/controllers",express.static(__dirname + "/controllers"));
app.set('view engine', 'ejs');

const router = require('./routes/routes');

app.use(router);

app.listen(PORT, function() {
    console.log('Express listening on port '+PORT);
});