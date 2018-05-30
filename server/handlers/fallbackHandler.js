var path = require('path');

function fallbackHandler(req, res) {
  res.sendFile(path.join(__dirname, '../../dist', 'index.html'));
}

module.exports = fallbackHandler;
