const express = require('express');
const underscore = require('underscore')
const router = express.Router();
const logger = require('../logger/logger')
const helper = require('../util/helper')
const formatter = require('../validator/formatter.js')
const lodash = require('lodash')


router.get('/test-me', function( req,res){
    let names = ['hariom', 'arpit','Akash','Sabhiha']
    //Module 1
    logger.printMessage('thorium')
    console.log(logger.url)
    logger.welcomeMessage()







//Module 2
helper.printCurrentDate()
helper.printCurrentMonth()
helper.printBatchInfo()


//Module 3

formatter.trim()
formatter.changeToUpperCase()
formatter.changetoLowerCase()


// by lodash function
let months=['jan','feb','march','april','may','june','july','aug','sept','oct','nov','dec']
let subArrays=lodash.chunk(months, 3)


console.log('seprated Months: ', subArrays)
let oddNumbers=[1,3,5,7,9,1,13,15,17,19]
let lastNumbers=lodash.tail(oddNumbers)
console.log('last 9 odd numbers:' , lastNumbers)




let arr1 =[1,2,3]
let arr2=[2,3,4]
let arr3=[4,5]
let arr4=[5,6,7]
let arr5=[7,8]
console.log('unique values are:', lodash.union( arr1,arr2,arr3,arr4,arr5))


    
let movie1 =['horror','The Shining']    
let movie2 =['drama','Titanic']    
let movie3 =['Thiller','Shutter Island']    
let movie4 =['fantasy','Pans Labyrinth']    
let movieObject=lodash.fromPairs([movie1,movie2,movie3,movie4])
console.log('Movies object:',movieObject)
res.send

 
});

router.get('/hello', function (req, res) {
    res.send('My first ever api!')
});

module.exports = router;