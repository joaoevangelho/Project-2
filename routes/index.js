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


//Sign-Up
router.get("/about-us", (req, res, next) => {
  res.render("/about-us");
});





module.exports = router;