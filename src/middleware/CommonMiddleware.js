const router = require("../routes/route")
const Middleware=function(req,res,next){
    let TimeAndDate=new Date().toISOString().replace(/T/, ' ').replace(/\..+/,'')

    let IP = req.ip
    console.log(TimeAndDate ,",",IP)

     next()

}

module.exports.Middleware=Middleware