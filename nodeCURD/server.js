require('./models/db');

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const HttpMsgs = require('http-msgs');
const StudentsController = require('./controllers/student.controller');
const studentSchema = require('./models/student.model');


var app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static("views"));

app.listen(3000, () => {
    console.log('Its Working fine');
}); 
 
app.use('/students', StudentsController);

app.post("/ajaxdata", async (req, res) =>
{
    var data = new studentSchema({
        Name : req.body.Name,
        Email : req.body.Email,
        mobile : req.body.mobile,
        Location : req.body.Location
    });
    await data.save((err, doc) => {
        if (!err){
            console.log(req.body);
            HttpMsgs.sendJSON(req, res, { Output : req.body.Name } );
        }
        else
        {
            console.log('Error during record insertion : ' + err);
        }
        });

});


