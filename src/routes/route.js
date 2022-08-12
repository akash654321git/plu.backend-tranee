const express = require('express');
const router = express.Router();

let persons =[
    {
        name: "nand kumar ",
        age :29,
        votingstatus:false

    },
    {
        name: "sandip gupta",
        age :17,
        votingstatus:false

    },
    {
        name: "arindam dan",
        age :15,
        votingstatus:false

    },
    {
        name: "bikas mallik",
        age :55,
        votingstatus:false

    },
    {
        name: "pankaj singh",
        age :48,
        votingstatus:false

    },
    {
        name: "pintu sharma",
        age :36,
        votingstatus:false

    }
]
router.post('/anothervoter', function (req, res) {
    let emptyarray = [];
    
        let voteage = req.query.age;
           //LOGIC WILL COME HERE
           for( let person1 of persons){
             if(person1.age>voteage){
                person1.votingstatus = true;
                emptyarray.push(person1)

             }
            
           }
    
    //        players.push(lastplayer)
           res.json(emptyarray);
       })
    
 module.exports = router;