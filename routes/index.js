var express = require('express');
var router = express.Router();
var path = require('path');

/* GET users listing. */

router.get('/home/:id', function(req, res){
  res.sendFile(path.join(__dirname, '../public/nomzStuff', 'nomzHome.html'));
});

router.get('/styles.css', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../styles.css'))
});

router.get('/home/img/nomzTitle.png', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/nomzStuff/img', 'nomzTitle.png'))
});

router.get('/img/nomzTitle.png', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/nomzStuff/img', 'nomzTitle.png'))
});

router.get('/home/img/googlemap.png', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/nomzStuff/img', 'googlemap.png'))
});

router.get('/img/grains.png', function(req, res, next) {
	res.sendFile(path.join(__dirname, '../public/nomzStuff/img/grains.png'))
});

router.get('/img/colorfoods.png', function(req, res, next) {
	res.sendFile(path.join(__dirname, '../public/nomzStuff/img/colorfoods.png'))
});

router.get('/img/bkg-corn.png', function(req, res, next) {
	res.sendFile(path.join(__dirname, '../public/nomzStuff/img/bkg-corn.png'))
});

router.get('/img/nomzBowl.png', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/nomzStuff/img', 'nomzBowl.png'))
});

router.get('/home/img/donate.png', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/nomzStuff/img/donate.png'))
});

router.get('/home/img/request.png', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/nomzStuff/img/request.png'))
});

router.get('/bagRed.png', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/nomzStuff', 'bagRed.png'))
});

router.get('/bowlRed.png', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/nomzStuff', 'bowlRed.png'))
});

module.exports = router;
