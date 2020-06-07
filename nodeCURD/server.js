require('./models/db');

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const HttpMsgs = require('http-msgs');
const StudentsController = require('./controllers/student.controller');
const studentSchema = require('./models/student.model');

var app = express();
const app2 = express()
const port = 3000
const port2 = 5555

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));


app2.use(express.static("views"));

app.listen(port, () => {
    console.log('Its Working fine');
}); 

//app2.use(cors());
//app2.get('/', (req, res) =>{ res.send('Hello World 2!') });
app2.listen(port2, () =>{ console.log(`Set a Port `+ port2) });

app2.set("view engine", "ejs");
app2.set("views",path.join(__dirname,"views"));
 
app2.use('/students', StudentsController);

//app.use('/add', StudentsController);

app.post("/ajaxdata", async (req, res) =>
{
    var data = new studentSchema({
        Name : req.body.Name,
        Email : req.body.Email,
        Mobile : req.body.Mobile,
        Location : req.body.Location
    });
     data.save((err, doc) => {
        if (!err){
            console.log(req.body);
            res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5555');
            HttpMsgs.sendJSON(req, res, { Output : 'Success' } );
        }
        else
        {
            console.log('Error during record insertion : ' + err);
        }
        });

});


