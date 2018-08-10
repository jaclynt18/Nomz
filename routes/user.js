var express = require('express')
var router = express.Router()
var path = require('path')
var bodyParser = require('body-parser')
//var MongoClient = require('mongodb').MongoClient
//var url = "mongodb://kmt2288:Mauipuprox18@ds113522.mlab.com:13522/nomzdata"
//var db
//var userid

/*var mongoose = require('mongoose');
mongoose.connect("mongodb://kmt2288:Mauipuprox18@ds113522.mlab.com:13522/nomzdata");
var db = mongoose.connection;
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: false }))

*/
/*MongoClient.connect(url, function(err, database) {
    if (err) throw err
    else
        db = database
        console.log("connected to mongo database: ", database);
});*/

/* GET home page. 
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/nomzStuff', 'logIn.html'))
});

var userSchema = new mongoose.Schema({
  name: String
});

var User = mongoose.model('User', userSchema);

router.post('/addname', function(req, res) {
  console.log("posting?");
  var u = new User({
        name: request.body.uname
    });
  u.save(function(err){
    if(err)
      throw err;
    else
      console.log("user save successfully: ", u);
  });*/
  /*console.log("req, res", req, res)
    db.collection("users").findOne({"username" : req.body.uname}, function(err, answer) {
      console.log("answer:", answer);
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
                userid = answer._id
            }
        }
    })
   // res.sendFile(path.join(__dirname, '../public/nomzStuff', 'nomzHome.html'))
});

*/
router.post('/latlong', function(req, res, next) {
    console.log("loc: " + req.body.latlong + " userid: " + userid)
    db.collection("users").updateOne({_id : userid}, 
                                     { $set: 
                                        {"location" : req.body.latlong}
                                     }),
    function(err, result) {
        if (err)
            console.log('Error')
        else
            console.log('Success');
    }
})
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