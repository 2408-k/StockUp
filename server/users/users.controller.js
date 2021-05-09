const express = require('express');
const router = express.Router();
const userService = require('./user.service');

router.post('/authenticate', authenticate);
router.post('/signup',signup);
//router.get('/', getAll);

module.exports = router;

function authenticate(req, res, next) {
    
    const userProfile = require("../models/user");

    userProfile.find((err,users) => {
        userService.authenticate(req.body,users)
            .then(user => {
                res.json(user);
                })
            .catch(next);
    });
}

function signup(req,res,next) {
    
    const userProfile = require("../models/user");

    userProfile.findOne({username: req.body.username}, function(err,user){
        if(!user)
        {
            const u = new userProfile( {
                id: 7,
                username: req.body.username,
                password: req.body.password,
                firstName: 'Prateek',
                lastName: 'Sharma',
                wallet: 100,
                email: 'prateeksharma7599@gmail.com',
                stocks:[]
            });
            u.save((err,us) => {
                if(err)
                    console.log(err);
                else{
                    console.log("New User added!");
                }
            });

            //res.send(JSON.stringify(u));

        }else{
            console.log("Username already present!");
            //res.send(JSON.stringify(user));
        }
    })
    
    authenticate(req,res,next);

    /*
    const userProfile = require("../models/user");

    userProfile.find((err,users) => {
        userService.signup(req.body,users)
            .then(user => {
                res.json(user);
                })
            .catch(next);
    });
    */
}

/*
function getAll(req, res, next) {

    const userProfile = require("../models/user");

    userProfile.find((err,users) => {
        res.json(users);
    });
}
*/