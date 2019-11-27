const {
    Router
} = require('express');
const router = new Router();
const User = require('./../models/user');
const bcrypt = require("bcrypt");


const routeGuard = require('./../middleware/route-guard');

// router.get('/profile/:id', routeGuard, (req, res, next) => {
//   console.log(req.params.id);
//   res.render('user');
//   //used to be private instead of user
// });


router.get('/:id', routeGuard, (req, res, next) => {
    const id = req.params.id;
    const loggedUser = req.user;
    console.log("dentro do get:id", req.params.id);
    User.findById(id)
        .then(user => {
            console.log("check if its the params user -> ", user);
            res.render('user', {
                user,
                loggedUser
            });
        })
        .catch(error => {
            next(error);
        });
});

router.post('/edit/:id', (req, res, next) => {
    const id = req.params.id;
    const {
        name,
        email,
        role
    } = req.body;
    User.findByIdAndUpdate(id, {
            name,
            email,
            role
        })
        .then(user => {
            res.redirect('/profile/' + user._id);
        })
        .catch(error => {
            next(error);
        });
});
module.exports = router;