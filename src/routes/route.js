const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const ProductController= require("../controllers/ProductController")
const Middleware = require("../middleware/Middleware")
const UserController= require("../controllers/UserController")
const OrderController=require("../controllers/OrderController")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createProduct", ProductController.createProduct  )



router.post("/createUser",Middleware.headerValidation, UserController.createUser )


router.post("/createOrder", Middleware.headerValidation, OrderController.createOrder )



module.exports = router;