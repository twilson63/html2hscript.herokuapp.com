require('./css');

var app = require('vbridge');
var parser = require('./parser');
var page = require('page');
var pageBodyParser = require('page-body-parser');

var state = app.state({
  title: 'Hello World'
});

page('/parse', function(ctx) {
  state.set('parsed', true);
  state.set('hscript', parser(ctx.body.html));
  page.redirect('/');
});

page();
pageBodyParser();

app(document.body, state, render);

function render(state) {
  var h = app.h;
  var container = [
    h('header', [
      h('h1.title', 'HTML2HyperScript')
    ]),
    h('.row', [
      h('form', { action: '/parse', method: 'post'}, [
        h('.eight.columns', [
          h('textarea.u-full-width', {name: 'html', placeholder: 'Add HTML Snippet Here'})
        ]),
        h('.three.columns', [
          h('a', {href: 'http://www.jackhq.com'}, [
            h('img.u-full-width', {src: '//www.jackhq.com/images/jackhq-logo.png'})
          ])
        ]),
        h('.twelve.columns', [
          h('button.button.button-primary', ['Convert from HTML to HyperScript'])
        ])
      ])
    ])
  ];
  if (state.get('parsed')) {
    container.push(h('.row', [
      h('.twelve.columns', [
        h('pre', [
          h('code', state.get('hscript'))
        ])
      ])
    ]))
  }
  return h('div.container', container);
}