var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/abc', function (req, res) {
  res.send("foo1\nfoo2\nfoo3")
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
