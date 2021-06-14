let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to our Contacts
let Contacts = require('../models/contacts');

/*GET Router for the contact list */
router.get('/', (req, res, next) => {
    Contacts.find((err,ContactsList) =>{
        if(err)
        {
            return console.error(err);
        }
        else
        {
           // console.log(ContactsList);
           res.render('contact', { title: 'contact-list', page: "ContactsList", ContactsList: ContactsList});
        }
    })
    
});

module.exports = router;