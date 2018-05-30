var path = require('path');

var errorHandler = require('../handlers/errorHandler');
var fallbackHandler = require('../handlers/fallbackHandler');

module.exports = function(app) {
  app.get('/', fallbackHandler);

  app.use(errorHandler);
};
