const express = require('express');
const path = require('path');

const app = express();

app.use(express.static("views"));

const router = require('./controlls/viewControllers');


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.listen(3000, (req, res)=>{
    //console.log('sd');
});

app.use('/home', router);