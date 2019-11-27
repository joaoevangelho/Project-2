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




const routeGuard = require('./../middleware/route-guard');

router.get('/profile/:id', routeGuard, (req, res, next) => {
  console.log(req.params.id);
  

  res.render('user');
  //used to be private instead of user
});




module.exports = router;