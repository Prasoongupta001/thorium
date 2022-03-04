const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema({
    name :  String,
    price : Number,
    ratings:  Number,
    //isHardCover : {type:Boolean , default:false},
    author_id: { type: ObjectId, ref: "authors" },


    publish_id: { type: ObjectId, ref: "publisher" }

}, { timestamps: true });


module.exports = mongoose.model('bookModel', bookSchema)
