var express = require('express')
var path = require('path')
var app = express()
var bodyParser = require('body-parser')
var index = require('./routes/index')


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', index)
app.use(function(req, res, next) {
	console.log(`$(req.method} request for '${req.url}' - ${JSON.stringify(req.body)}`);
	next();
});

app.get('/login', function(req, res, next){
	res.sendFile(path.join(__dirname, '/public/stylesheets', 'login.html'))
})

app.listen(process.env.PORT || 8000 , function() {
	console.log("Listening on port 8000")
})