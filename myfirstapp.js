var http = require('http');
var url = require('url');
var dt = require('./myfirstmodule');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});

  var query = url.parse(req.url, true).query;
  var querytxt = query.year + " " + query.month;

  res.write("The url is: " + req.url + "<br/>");
  res.write("As query params, we have a year and a month retrospectively: " + querytxt + "<br/>");
  res.write("The date and time are currently: " + dt.myDateTime());
  res.end();
}).listen(8080);
