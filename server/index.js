// require express
const express = require('express');
const app = express();

// run mongoose
var mongoose = require('mongoose');

// run middleware
require('./middleware')(app, express);

// run passport startegy
// require('./passport');

// run API
require('./routes')(app);

// run server
var port = process.env.PORT || 3000;
app.listen(port, test => {
	console.log(`listening on port ${port}`);
});
