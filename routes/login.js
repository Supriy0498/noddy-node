const express = require('express');
const router = express.Router();

const userCreds = {
    userId:'user123',
    name:'Supriy Jinturkar',
    email:'supriy@gmail.com',
    password:'abc12345'
};

var isUserLoggedIn = false;

router.get('/', function(req, res){
    if(isUserLoggedIn)
        res.render("profile",{name:userCreds.name});
    else
        res.render('login',{error:false});
});

router.post('/', function(req, res){
    const email = req.body.email;
    const pwd = req.body.pwd;

    if(email===userCreds.email && pwd===userCreds.password){
        isUserLoggedIn = true;
        res.render("profile",{name:userCreds.name});
    }
    else{{
        res.render("login",{error:true});
    }}
});

module.exports = router;