let mongoose = require('mongoose');

//create a model class
let contactModel = mongoose.Schema( //Our Structure
{
    FirstName: String,
    LastName: String,
    Email: String,
    ContactNumber: String
},
{
    collection: "contacts" // the table
});

module.exports = mongoose.model('Contacts', contactModel);