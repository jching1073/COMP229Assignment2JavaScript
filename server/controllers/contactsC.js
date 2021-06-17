let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let Contacts = require('../models/contacts');

//Display Contact List Page
module.exports.displayContactList = (req, res, next) =>
{
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
    });
}
//Display Add Page
module.exports.displayAddPage = (req, res, next) =>
{
    res.render('contacts/add', {title: "Add Contact", page: "add"})
}

module.exports.processAddPage = (req, res, next) =>
{
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
}

module.exports.displayEditPage = (req, res, next) =>
{
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
}

module.exports.processEditPage = (req, res, next) =>
{
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
    });
}

module.exports.processDeletePage = (req, res, next) =>
{
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
}
