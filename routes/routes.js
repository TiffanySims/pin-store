const express = require("express");
const jwt = require("jwt-simple");
const config = require("../config");
const User = require("../models/User");

function tokenForUser(user) {
  const timestamp = new Date().getTime();

  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signin = function(req, res, next) {
  res.send({ token: tokenForUser(req.user) });
};

exports.signup = function(req, res, next) {
  const { email, password, firstname, lastname } = req.body;
  if (!email || !password || !firstname || !lastname) {
    res.send(400).json({ msg: "Please enter all fields" });
  }
  User.findOne({ email }).then(user => {
    if (user) return res.status(409).json({ msg: "Email already in use" });
  });

  const newUser = new User({
    email,
    password,
    firstname,
    lastname
  });
  newUser.save(function(err) {
    if (err) {
      return next(err);
    }
    res.json({ token: tokenForUser(newUser) });
  });
};
