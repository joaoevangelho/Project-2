const {
    Router
} = require('express');
const router = new Router();
const User = require('./../models/user');
const bcrypt = require("bcrypt");

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    User.findById(id)
        .then(user => {
            res.render('user', {
                user
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