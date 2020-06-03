const mongoose = require('mongoose');

const infoSchema = mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Age:{
        type:Number,
        required:true
    },
    Email:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model("Student",infoSchema);