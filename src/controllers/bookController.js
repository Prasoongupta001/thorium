const mongoose = require('mongoose');
const bookModels = require("../models/bookModels")




//-----VALIDATION
const isValid = function (value) {
    if (typeof value === 'undefined' || value === null) return false//it cheks is there value is null or undefined
    if (typeof value === 'string' && value.trim().length === 0) return false//it checks the value conAtain only space or not 
    return true;
}

//------------------ISVALIDOBJECTID FUNCTION
const isValidObjectId = function (objectId) {
    return mongoose.Types.ObjectId.isValid(objectId)
}


const createBook = async function (req, res) {
    const{author_id , publish_id}=req.body
    if (!isValid(author_id)) {
       return res.send({ message: "please provide author id" })
    }
    if (!isValidObjectId(author_id)) {
       return res.send({ message: "please provide valid author id" })
    }

    if (!isValid(publish_id)) {
       return  res.send({ message: "please provide publish id" })
    }
    if (!isValidObjectId(publish_id)) {
       return  res.send({ message: "please provide valid publish id" })
    }
    let book = req.body
    let bookCreated = await bookModels.create(book)
   return res.send({ data: bookCreated })
}



const getBooks= async function (req, res) {
    
    let books = await bookModels.find().populate('author_id publish_id')  
      res.send({data: books})
}


const updateit= async function (req, res) {
    
    let books = await bookModels.find()
    
    console.log(books)
    
     res.send({data: books})
}




module.exports.updateit = updateit
module.exports.createBook = createBook
module.exports.getBooks = getBooks

