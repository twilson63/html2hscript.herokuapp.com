//require('harp').server(__dirname + '/public', { port: process.env.PORT || 3000 })
var http = require('http');
var ecstatic = require('ecstatic');
var h = require('hyperscript');

http.createServer(function(req, res) {
  ecstatic({
    root: __dirname + '/public',
    cache: 3600,
    gzip: true,
    handleError: false,
    showDir: false
  })(req, res, function() {
    res.writeHead(200, {'content-type': 'text/html'});
    res.end(index());
  });

}).listen(process.env.PORT || 3000);


function index() {
  return h("html", [
    h("head", [
      h("meta", { 
        "charset": "utf-8"
      }),
      h("title", [ "Html2HyperScript" ]),
      h("meta", { 
        "name": "viewport",
        "content": "width=device-width, initial-scale=1"
      }),
      h("link", { 
        "href": "//fonts.googleapis.com/css?family=Raleway:400,300,600",
        "rel": "stylesheet",
        "type": "text/css"
      })
    ]),
    h("body", [
      h("script", { "src": "/bundle.js" })
    ])
  ]).outerHTML;
}