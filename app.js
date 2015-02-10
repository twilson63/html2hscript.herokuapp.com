require('./css');

var app = require('vbridge');
var parser = require('./parser');
var page = require('page');
var pageBodyParser = require('page-body-parser');

var state = app.state({
  title: 'Hello World'
});

page('/parse', function(ctx) {
  state.set('hscript', parser(ctx.body.html));
  page.redirect('/');
});

page();
pageBodyParser();

app(document.body, state, render);

function render(state) {
  var h = app.h;
  return h('div.container', [
    h('header', [
      h('h1.title', 'HTML2HyperScript')
    ]),
    h('.row', [
      h('form', { action: '/parse', method: 'post'}, [
        h('.twelve.columns', [
          h('textarea.u-full-width', {name: 'html', placeholder: 'Add HTML Snippet Here'})
        ]),
        h('.twelve.columns', [
          h('button.button.button-primary', ['Convert from HTML to HyperScript'])
        ])
      ])
    ]),
    h('.row', [
      h('.twelve.columns', [
        h('pre', [
          h('code', state.get('hscript'))
        ])
      ])
    ])
  ])
}