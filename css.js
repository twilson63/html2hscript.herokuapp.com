// css

var fs = require('fs');
var insertCss = require('insert-css');
var normalize = fs.readFileSync(__dirname + '/bower_components/skeleton/css/normalize.css');
var skeleton = fs.readFileSync(__dirname + '/bower_components/skeleton/css/skeleton.css');

insertCss(normalize);
insertCss(skeleton);
insertCss('.button-bar .button { margin-right: 3px; }');