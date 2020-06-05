const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/StudentDB', { useNewUrlParser: true , useUnifiedTopology: true },(err) => {
    if(!err)
    {
        console.log('MongoDB Connected Successfully.');
    }else{
        console.log('MongoDB Connected Unsuccessfully.'+ err);
    }
});

require('./student.model');