"use strict";

const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  email: {
    type: String,
    lowercase: true,
    trim: true,
    // unique: true,
    required: true
  },
  passwordHash: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ["Surfer", "Teacher"],
    default: "Surfer"
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("User", schema);