var express = require('express')
var path = require('path')
var app = express()
var bodyParser = require('body-parser')
var index = require('./routes/index')
var user = require('./routes/user')
var donate = require('./routes/donate')
var request = require('./routes/request')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(function(req, res, next) {
	console.log(`$(req.method} request for '${req.url}' - ${JSON.stringify(req.body)}`);
	next();
});

app.use('/', user)
app.use('/', index)
app.use('/donate_pg.html', donate)
app.use('/request_pg.html', request)

app.listen(process.env.PORT || 8000 , function() {
	console.log("Listening on port 8000")
})