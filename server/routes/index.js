let express = require('express');
let router = express.Router();

let indexController = require('../controllers/indexC');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET About page. */
router.get('/about', indexController.displayAboutPage);

/* GET Project page. */
router.get('/projects', indexController.displayProjectPage);

/* GET Services page. */
router.get('/services', indexController.displayServicesPage);

/* GET Contact page. */
router.get('/contact', indexController.displayContactPage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET Sign In  page. */
router.get('/signin', indexController.displaySignInPage);

module.exports = router;
