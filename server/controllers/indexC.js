let express = require('express');
let router = express.Router();

module.exports.displayHomePage = (req, res, next) =>
{
    res.render('index', {title: 'Home', page: 'home'});
}

module.exports.displayAboutPage = (req, res, next) =>
{
    res.render('index', { title: 'About', page: "about"});
}

module.exports.displayProjectPage = (req, res, next) =>
{
    res.render('index', { title: 'projects', page: "Projects"});
}

module.exports.displayServicesPage = (req, res, next) =>
{
    res.render('index', { title: 'Services', page: "services"});
}

module.exports.displayContactPage = (req, res, next) =>
{
    res.render('index', { title: 'Contact', page: "contact"});
}

module.exports.displaySignInPage = (req, res, next) =>
{
    res.render('index', { title: 'Sign In', page: "signin"});
}
