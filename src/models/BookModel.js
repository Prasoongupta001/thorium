const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    BookName :String,
    AuthorName:String,
    Sales : Number,
    PublishedInYear: Number},
    {timestamps:true});

    
    
    

module.exports = mongoose.model('Book', bookSchema) 



