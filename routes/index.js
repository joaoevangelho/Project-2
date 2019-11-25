"use strict";

const { Router } = require("express");
const router = new Router();

const User = require("./../models/user");
const bcrypt = require("bcrypt");

router.get("/", (req, res, next) => {
  res.render("index", {
    title: "Hello Dear Surfer!"
  });
});

//Sign-Up

router.get("/sign-up", (req, res, next) => {
  res.render("sign-up");
});

router.post("/sign-up", (req, res, next) => {
  const { username, email, password } = req.body;
  bcrypt
    .hash(password, 10)
    .then(hash => {
      return User.create({
        username,
        email,
        passwordHash: hash
      });
    })
    .then(user => {
      console.log("Created user", user);
      req.session.user = user._id;
      res.redirect("/");
    })
    .catch(error => {
      next(error);
    });
});

module.exports = router;
