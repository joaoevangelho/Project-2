"use strict";

const {
    Router
} = require("express");
const router = new Router();

const User = require("./../models/user");
const bcrypt = require("bcrypt");



router.get("/", (req, res, next) => {
    res.render("index", {
        title: "Hello Surfer!"
    });
});

//Sign-Up
router.get("/sign-up", (req, res, next) => {
    res.render("authentication/sign-up");
});

router.post("/sign-up", (req, res, next) => {
    // console.(req.body);
    const {
        name,
        email,
        password,
        role
    } = req.body;
    bcrypt
        .hash(password, 10)
        .then(hash => {
            return User.create({
                name,
                email,
                role,
                passwordHash: hash
            });
        })
        .then(user => {
            // console.log("Created user", user);
            req.session.user = user._id;
            res.redirect("/");
        })
        .catch(error => {
            next(error);
        });
});


// Sign-in
router.get('/sign-in', (req, res, next) => {
    res.render('authentication/sign-in');
});

router.post('/sign-in', (req, res, next) => {
    let userId;
    const {
        email,
        password
    } = req.body;

    User.findOne({
            email
        })
        .then(user => {
            if (!user) {

                return Promise.reject(new Error("There's no user with that email."));
            } else {

                userId = user._id;
                return bcrypt.compare(password, user.passwordHash);
            }
        })
        .then(result => {
            if (result) {
                req.session.user = userId;
                res.redirect('/');
            } else {
                return Promise.reject(new Error('Wrong password.'));
            }
        })
        .catch(error => {
            next(error);
        });
});



// Sign Out
router.get('/sign-out', (req, res, next) => {
    req.session.destroy();
    res.redirect('/');
});



const routeGuard = require('./../middleware/route-guard');

router.get('/user', routeGuard, (req, res, next) => {
    res.render('user');
    //used to be private instead of user
});

module.exports = router;