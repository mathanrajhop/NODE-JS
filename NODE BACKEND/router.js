const express = require('express');
const router = express.Router();
const infoSchema = require("./infoSchema");

//create
router.post("/create" , async (req,res) => {
    //console.log(res.body);
    var data = new infoSchema({
        Name:req.body.Name,
        Age:req.body.Age,
        Email:req.body.Email
    });
    await data.save();
    res.json(data);
});
//GetAll
router.all("/getAll" , async (req,res) => {
    var infoFind = await infoSchema.find();
    res.json(infoFind);
});
router.get('/' , (req,res) => {
    res.send('Hi Mathan');
});
module.exports = router;