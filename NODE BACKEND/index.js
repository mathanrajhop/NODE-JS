const express = require("express");
const app = express();
const mongoose = require("mongoose");
const getRouter = require("./router");


app.use(express.json());
app.use("/api" , getRouter);


app.listen(3000 , () => {
    console.log("Hi matt test");
});

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true , useUnifiedTopology: true },(err) => {
    if(!err)
    {
        console.log("DB CONNECTED");
    }
    else
    {
        console.log("DB NOT CONNECTED");
    }
});


