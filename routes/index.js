var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Eagle Pointe HOA' });
});

//  Board
router.get('/board', function (req, res) {
  res.render('board', { title: 'HOA Board' });
});

//  Points of Interest
router.get('/interest', function (req, res) {
  res.render('interest', { title: 'Points of Interest' });
});

//  FAQ
router.get('/faq', function (req, res) {
  res.render('faq', { title: 'HOA Documents' });
});

//  Homes
router.get('/homes', function (req, res) {
  res.render('homes', { title: 'Homes for Sale' });
});

//  Sponsors
router.get('/sponsors', function (req, res) {
  res.render('sponsors', { title: 'Sponsors' });
});

//  Privacy
router.get('/privacy', function (req, res) {
  res.render('privacy', { title: 'Privacy Notice' });
});

module.exports = router;
