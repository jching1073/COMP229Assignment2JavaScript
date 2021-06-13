var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', page: "home"});
});

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About', page: "about"});
});

/* GET Product page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Products', page: "products"});
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services', page: "services"});
});

/* GET Contact page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact', page: "contact"});
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home', page: "home"});
});

/* GET Sign In  page. */
router.get('/signin', function(req, res, next) {
  res.render('index', { title: 'Sign In', page: "signin"});
});

module.exports = router;
