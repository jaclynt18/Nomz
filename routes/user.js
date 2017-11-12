var express = require('express')
var router = express.Router()
var path = require('path')
var bodyParser = require('body-parser')
var MongoClient = require('mongodb').MongoClient
var url = "mongodb://jaclyn:nomz@ds023530.mlab.com:23530/nomz"
var db
var userid

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))

MongoClient.connect(url, function(err, database) {
	if (err) throw err
	else
		db = database
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/nomzStuff', 'logIn.html'))
});


router.post('/', function(req, res, next) {
	db.collection("users").findOne({"username" : req.body.uname}, function(err, answer) {
		if (err)
			console.log('Error')
		else {
			if (!answer) {
				db.collection("users").insertOne({ "username" : req.body.uname, 
													"password" : req.body.psw}, 
					function(err, result) {
					if (err)
			     		console.log('Error')
			  		else {
			    		console.log('Success');
			    		userid = result.insertedId
			    		console.log('inserted id: ' + userid)
			    		module.exports.userid = result.insertedId;
			    	}})
			}
		    else {
		    	console.log("id: " + answer._id)
		    	module.exports.userid = answer._id
		    }
  		}
	})
	res.sendFile(path.join(__dirname, '../public/nomzStuff', 'nomzHome.html'))
});
	/*router.get('/', function(req, res, next) {
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
	})*/

module.exports = router;