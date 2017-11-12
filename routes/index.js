var express = require('express');
var router = express.Router();
var path = require('path');

/* GET users listing. */

/*router.get('/nomzHome.html', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/nomzStuff', 'nomzHome.html'))
});*/

router.get('/img/nomzTitle.png', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/nomzStuff/img', 'nomzTitle.png'))
});

router.get('/img/nomzBowl.png', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/nomzStuff/img', 'nomzBowl.png'))
});

router.get('/img/donate.png', function(req, res, next) {
  console.log("got it")
  res.sendFile(path.join(__dirname, '../public/nomzStuff/img/donate.png'))
});

router.get('/img/request.png', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/nomzStuff/img/request.png'))
});

router.get('/request_pg.html', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/nomzStuff', 'request_pg.html'))
});

module.exports = router;
