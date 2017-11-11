var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser')
var MongoClient = require('mongodb').MongoClient
var url = "mongodb://jaclyn:nomz@ds023530.mlab.com:23530/nomz"
var db

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))

MongoClient.connect(url, function(err, database) {
	if (err) throw err
	else
		db = database

	db.createCollection("users", function (err, res) {
		if (err) throw err
			console.log("Collection created!!!")
	})


/* GET home page. */
	router.get('/', function(req, res, next) {
	  res.render('index', { title: 'Express' })
	})

	router.get('/first', function(req, res) {
	  var query = { firstname : req.query.first}
	  console.log(query)
		db.collection("users").find(query).toArray(function(err, result) {
			if (err) throw err
			console.log(result)
		})
	})

	router.post('/', function (req, res) {
		db.collection("users").insert({ "firstname" : req.body.fname, "lastname" : req.body.lname, "emotion" : req.body.emotion }, function(err, result) {
			if (err)
	     		console.log('Error')
	  		else
	    		console.log('Success');
		})
	})
})


module.exports = router;
