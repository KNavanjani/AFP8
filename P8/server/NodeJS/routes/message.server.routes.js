const express = require("express");
let Course = require("../models/course.model");
let Subject = require("../models/subject.model");
const Router = express.Router();

Router.get("/", function(req, res) {
  res.json({ message: "Welcome to  Course Management System" });
});

Router.route("/courses/").get(function(req, res) {
  Course.find(function(err, course) {
    if (err) {
      console.log(err);
    } else {
      res.json(course);
    }
  });
});

Router.route("/courses/add").post(function(req, res) {
  let course = new Course(req.body);
  course
    .save()
    .then(course => {
      res.status(200).json({ course: "Addded successfully" });
    })
    .catch(err => {
      res.status(400).send("Adding new course failed");
    });
});
/*
Router.route("/courses/:id").get(function(req, res) {
  let id = req.params.id;
  Course.findById(id, function(err, subject) {
    res.json(subject);
  });
});
*/

Router.get("/courses/:code", (req, res) => {
  Course.findOne({ code: req.params.code }).then(subject => res.json(subject));
});

Router.route("/subjects/").get(function(req, res) {
  Subject.find(function(err, subject) {
    if (err) {
      console.log(err);
    } else {
      res.json(subject);
    }
  });
});

Router.route("/subjects/add").post(function(req, res) {
  let subject = new Subject(req.body);
  subject
    .save()
    .then(subject => {
      res.status(200).json({ subject: "Addded successfully" });
    })
    .catch(err => {
      res.status(400).send("Adding new subject failed");
    });
});

module.exports = Router;
