var pkg = require('./package.json');
var http = require('http');
var ecstatic = require('ecstatic');
var h = require('hyperscript');
var jsonBody = require('body/json');
var sendJson = require('send-data/json');
var parser = require('html2hscript');


http.createServer(function(req, res) {
  if (req.url === '/parse' && req.method.toUpperCase() === 'POST') {
    jsonBody(req, res, function(err, body) {
      parser(body.html, function(err, hscript) {
        sendJson(req, res, { html: body.html, hscript: hscript});
      });
    });
    return;
  }
  //
  function renderHome() {
    res.writeHead(200, {'content-type': 'text/html'});
    res.end(index());
  }
  ecstatic(pkg.env.ecstatic)(req, res, renderHome);
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
      h("script", { "src": "/bundle.js" }),
      h("script", [
        "(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){",
        "(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),",
        "m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)",
        "})(window,document,'script','//www.google-analytics.com/analytics.js','ga');",
        "ga('create', 'UA-9459466-6', 'auto');",
        "ga('send', 'pageview');"
      ])
    ])
  ]).outerHTML;
}
