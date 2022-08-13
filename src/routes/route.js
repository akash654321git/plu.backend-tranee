const express = require('express');
const router = express.Router();
const bookModel = require("../models/userModel.js")
const bookController= require("../controllers/userController")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)


router.post("/createbook", bookController.createbook  )


router.get("/getbookData", bookController.getbooksData)



module.exports = router;