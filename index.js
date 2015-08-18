// index.js
var falcorExpress = require('falcor-express');
var Router = require('falcor-router');

var express = require('express');
var app = express();

app.use('/model.json', falcorExpress.dataSourceRoute(function (req, res) {
  // create a Virtual JSON resource with single key ("greeting")
  return new Router([
    {
      // match a request for the key "greeting"
      route: "greeting",
      // respond with a PathValue with the value of "Hello World."
      get: function() {
        return {path:["greeting"], value: "Serving content as JSON Graph"};
      }
    }
  ]);
}));

app.get("/versions", function(req, res) {
  res.send("respond");
});

// serve static files from current directory
app.use(express.static(__dirname + '/'));

var server = app.listen(4000);
