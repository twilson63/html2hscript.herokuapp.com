# HTML to hyperscript

hyperscript is a great way to write html in javascript!  This web-site allows you to take html snippets and paste them into a textarea then parse them to hyperscript.  I works great for twitter, facebook and other button widgets, or any other html snippet.

## Api

### POST /parse

``` json
{
  "html": "<h1>Hello World</h1>"
}
```

Response

``` json
{
    "html": "<h1>Beep</h1>",
    "hscript": "h(\"h1\", [ \"Beep\" ])"
}
```

## Run in Development Mode

``` js
npm install
npm install wzrd wtch garnish -g
npm run dev
```

## Support

If you have a problem post an issue

## Contributions

Pull Requests are welcome.

## License

MIT

## Thanks

[https://github.com/dominictarr](https://github.com/dominictarr) for creating hyperscript
[https://github.com/raynos](https://github.com/raynos) for creating virtual-hyperscript
