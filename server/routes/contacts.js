let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to our Contacts
let Contacts = require('../models/contacts');

/*GET Router for the contact list page*/
router.get('/', (req, res, next) => {
    Contacts.find((err,contactsList) =>{
        if(err)
        {
            return console.error(err);
        }
        else
        {
           // console.log(ContactsList);
           res.render('contacts/list', { title: 'Contact List', page: "ContactsList", ContactsList: contactsList});
        }
    })
});

/*GET Router for displaying the Add Page  Create Operation*/
router.get('/add', (req, res, next) => {    
    res.render('contacts/add', {title: "Add Contact", page: "add"})
});

/*Post Router for the Add Page - Create Operation*/
router.post('/add', (req, res, next) => {
    let newContact = Contacts({
        "FirstName":req.body.FirstName,
        "LastName":req.body.LastName,
        "Email":req.body.Email,
        "ContactNumber":req.body.ContactNumber
    });
    Contacts.create(newContact, (err, Contacts) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh the contact list
            res.redirect('/contact-list');
        }
    })
});

/*GET Router for displaying the edit page - Update Operation*/
router.get('/edit/:id', (req, res, next) => {
    let id = req.params.id;
    Contacts.findById(id, (err, contactToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('contacts/edit', {title: "Edit Contact", page: "ceditontact", contact: contactToEdit });
        }
    });
});
/*Post Router for the edit page - Update Operation*/
router.post('/edit/:id', (req, res, next) => {
    let id = req.params.id;

    let updateContact = new Contacts({
        "_id": id,
        "FirstName":req.body.FirstName,
        "LastName":req.body.LastName,
        "Email":req.body.Email,
        "ContactNumber":req.body.ContactNumber
    });

    Contacts.updateOne({_id: id}, updateContact, {}, (err) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh the contact list
            res.redirect('/contact-list');
        }
    })
});
/*GET to perform Deletion Delete Operation*/
router.get('/delete/:id', (req, res, next) => {
    let id = req.params.id;

    Contacts.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh the contact list
            res.redirect('/contact-list');
        }
    })

});
module.exports = router;