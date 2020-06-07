const express = require('express');


const studentSchema = require('../models/student.model');

const path = require('path');

var router = express.Router();

router.get("/", function (req, res) {   
    studentSchema.find({}, function (err, allDetails) {
        if (err) {
            console.log(err);
        } else {
            res.render("mainLayouts", { details: allDetails });
        }
    });
    });


module.exports = router;
