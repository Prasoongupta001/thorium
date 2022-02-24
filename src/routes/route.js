const express = require('express');
const router = express.Router();

let players =[];
router.post("/players",function(req,res){
    let player=req.body;
    let playerName = player.name
    for (let i=0; i<players.length; i++){
        if(players[i].name==playerName){
           return res.send('player already exists')
        }

    }
    players.push(player);
    console.log("here is the player from request", players)
    res.send(players)
});

router.post('/players/:playerName/bookings/:bookingId',function(req,res){
    let name = req.params.playerName
    let isPlayerPresent= false
    for(let i=0; i<players.length; i++){
        if(players[i].name==name){
            isPlayerPresent =true
        }
    }

    if(!isPlayerPresent){
       return res.send('Player Not Present')
    }
    
    let booking=req.body
    let bookingId=req.params.bookingId
    for(let i=0; i<playerName; i++){
        if (players[i].name == name){
            let isbookingPresent =false
            for(let j=0; j<player[i].bookings.length; j++){
                if(players[i].bookings[j].bookingNumber== bookingId){
                    return res.send('booking with this id is already exists for the player')

                }
            }
            players[i].bookings.push(booking)
        }
    }

    res.send(players)

});













router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})

router.get("/random" , function(req, res) {
    res.send("hi there")
})


router.get("/test-api" , function(req, res) {
    res.send("hi FunctionUp")
})


router.get("/test-api-2" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API")
})


router.get("/test-api-3" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's ")
})


router.get("/test-api-4" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})



router.get("/test-api-5" , function(req, res) {
    res.send("hi FunctionUp5. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})

router.get("/test-api-6" , function(req, res) {
    res.send({a:56, b: 45})
})

router.post("/test-post", function(req, res) {
    res.send([ 23, 45 , 6])
})


router.post("/test-post-2", function(req, res) {
    res.send(  { msg: "hi" , status: true }  )
})

router.post("/test-post-3", function(req, res) {
    // let id = req.body.user
    // let pwd= req.body.password

    // console.log( id , pwd)

    console.log( req.body )

    res.send(  { msg: "hi" , status: true }  )
})



router.post("/test-post-4", function(req, res) {
    let arr= [ 12, "functionup"]
    let ele= req.body.element
    arr.push(ele)
    res.send(  { msg: arr , status: true }  )
})

//take marks in a req.query variable named"marks" and send "pass ", if >40 else "fail"

router.get("/get-query-2",function(req,res){
    let marks= req.query.marks
    let result 
    if(marks>40){
        result = "pass"
    }else{
        result="fail"
    }

    res.send({ result : result , status:true})
})


let myarr=[23,32,45,6,85,98,55,25,46,74,98]
router.post("/postquery5", function(req,res){
    let input=req.query.input
    let finalarr=""
    for(let i=0; i<myarr.length; i++){
    if(myarr[i]> input){ finalarr+= " " +myarr[i]}
    }
    res.send({ result : finalarr , status:true})

})





router.get("/get-query-1", function(req,res){
    let data = req.query
    console.log(data)
    res.send({ data : data , status:true})
})








module.exports = router;