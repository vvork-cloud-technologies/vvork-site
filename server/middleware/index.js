var path = require('path');
var passport = require('passport');
var bodyParser = require('body-parser');
const logger = require('morgan');

module.exports = function(app, express) {
	app.use(express.static(__dirname + '/../../dist'));
	app.use(bodyParser.json());
};
