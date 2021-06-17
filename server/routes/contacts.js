let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let contactsController = require('../controllers/contactsC');
//connect to our Contacts
let Contacts = require('../models/contacts');

/*GET Router for the contact list page*/
router.get('/', contactsController.displayContactList);

/*GET Router for displaying the Add Page  Create Operation*/
router.get('/add', contactsController.displayAddPage);

/*Post Router for the Add Page - Create Operation*/
router.post('/add', contactsController.processAddPage);

/*GET Router for displaying the edit page - Update Operation*/
router.get('/edit/:id', contactsController.displayEditPage);

/*Post Router for the edit page - Update Operation*/
router.post('/edit/:id', contactsController.processEditPage);

/*GET to perform Deletion Delete Operation*/
router.get('/delete/:id', contactsController.processDeletePage);

module.exports = router;