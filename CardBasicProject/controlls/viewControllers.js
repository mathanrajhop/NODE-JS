const express = require('express');

const router = express.Router();

router.get('/', (req, res)=>{
    res.render("mainlayouts", { 
        title:'Card Basic Projects',
        question:'Content',
        name:'Logo'
    });
});

module.exports = router;