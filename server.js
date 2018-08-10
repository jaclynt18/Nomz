var express = require('express')
var path = require('path')
var app = express()
var bodyParser = require('body-parser')
var index = require('./routes/index')
//var user = require('./routes/user')
var donate = require('./routes/donate')
var request = require('./routes/request')
var server = require('http').createServer(app);

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(__dirname + '/public'));

var mongoose = require('mongoose');
mongoose.connect("mongodb://kmt2288:Mauipuprox18@ds113522.mlab.com:13522/nomzdata");
var db = mongoose.connection;

//route to login
app.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../nomz/public/nomzStuff', 'logIn.html'))
});

//post user name
var userSchema = new mongoose.Schema({
  name: String,
  lat: Number,
  lon: Number
});

var User = mongoose.model('User', userSchema);

app.post('/',function(req,res){
  console.log("posting?");
  var u = new User({
        name: req.body.uname,
        lat: null,
        lon: null
    });
  u.save(function(err){
    if(err)
      throw err;
    else
      console.log("user save successfully: ", u);
      res.redirect('/home/'+ u._id);
});
});

//post location;
app.post('/home/:id', function(req, res){
    var options = req.body;
    console.log("options: ", options);
    console.log("params:", req.params);
  
  User.findOneAndUpdate({'_id': req.params.id}, {$set:{lat: options.lat, lon: options.lon}}, {upsert:true}, function(err, doc){
    if (err) return res.status(500).send({ error: err });
    else console.log("doc: ", doc);
});
  console.log("successfully saved location");
});

//app.use('/', user)
app.use('/', index)
//app.use('/donate_pg.html', donate)
//app.use('/request_pg.html', request)

app.listen(process.env.PORT || 8000 , function() {
	console.log("Listening on port 8000")
})