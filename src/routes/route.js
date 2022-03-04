const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const publishController= require("../controllers/publishController")
const bookController=require("../controllers/bookController")



//---------FIRST API FOR CREATE AUTHOR
router.post("/createAuthor", authorController.createAuthor  )

//---------SECOND API FOR CREATE PUBLISHER
router.post("/createPublishers", publishController.Publisher)

//---------THIRD API FOR CREATE BOOK WITH AUTHOR AND PUBLISHER DETAIL
router.post("/createBook", bookController.createBook  )

//---------FOURTH API FOR GET DATA OF AUTHORS AND PUBLISHER-ID
router.get("/getBooks",bookController.getBooks)



//-----------FIFTH API FOR UPDATE VALUES OF KEYS

router.put("/updatevalue",bookController.updateit)






module.exports = router;