const express = require('express');
const logger = require('morgan');		// Cannot find module 'morgan'
const bodyParser = require('body-parser');

// set up the express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/abc', function (req, res) {
  res.send("foo1\nfoo2\nfoo3");
});

app.get('/foo', function (req, res) {
	res.send();
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

module.exports = app;
