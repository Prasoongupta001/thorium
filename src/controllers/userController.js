const BookModel= require("../models/BookModel")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({data: savedData})
}

const getBooksData= async function (req, res) {
    let allBooks= await BookModel.find({AuthorName : "wilson"})
    res.send({ data : allBooks  })
}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData