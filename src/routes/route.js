const express = require('express');
const router = express.Router();

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})

//1.This api will fetch all movies from array

router.get('/movies', function(req,res){
    let a =["kick","antim","radhe","singham","dhamall"]
    res.send(a)
});

//2. This api fetch data from index

router.get('/movies/:movieID', function(req,res){
    mov=["kick","antim","radhe","singham","dhamall"]
    let x = req.params.movieID
    if(x>mov.length-1){
        res.send("movie does not exists")
    }else{
        res.send(mov[x])
    }
})


//3. write the get api to fetch the data from all the array of object


router.get('/movii',function(req,res){
    let z=[{id:1, name:"sarkar"},{id:2, name:"sarkar1"},{id:3, name:"sarkar2"}]
    res.send(z)
})


//4. This API will Fetch all movies from array of object by indexid

router.get('/moviii/:id',function(req,res){
    let zz=[{id:1, name:"sarkar"},{id:2, name:"sahu"},{id:3, name:"Dhol"}]
    let aa= req.params.id
    for(let i=0; i<zz.length; i++){
        if(zz[i].id==aa){
            res.send(zz[i])
        }
    }
})










module.exports = router;
