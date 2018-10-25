const path = require('path');

module.exports = function (app) {
  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
}


//sends a particular html when a certain address is used. As this app only has one html file, there is only one page to direct to,
//the home page, represented by /.