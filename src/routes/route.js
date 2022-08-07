const express = require('express');
const abc = require('../introduction/intro')

const int = require('../logger/logger')

const alldatetime = require ('../util/helper.js')

const uptoLow = require('../validator/formetter')
const router = express.Router();

router.get('/test-me', function (req, res) {
    // console.log('My batch is', abc.name)
    // abc.printName()
   
    int.myintro()

    alldatetime.date()
 alldatetime.month()
 alldatetime.year()
 alldatetime.getBatchInfo()

 uptoLow.trimi()
 uptoLow.toLower()
 uptoLow.upperto()
 res.send('My second ever api!')
});


// router.get('/test-you', function(req, res){
//     res.send('This is the second routes implementation')
// })

// router.get('/give-me-students-data',function(req, res){

// })
module.exports = router;
// adding this comment for no reason