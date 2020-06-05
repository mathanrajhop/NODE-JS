const mongoose = require('mongoose');

var studentSchema = mongoose.Schema({
    Name:{
        type:String
    },
    Email:{
        type:String
    },
    Mobile:{
        type:String
    },
    Location:{
        type:String
    }
});

module.exports = mongoose.model('studentslists', studentSchema);