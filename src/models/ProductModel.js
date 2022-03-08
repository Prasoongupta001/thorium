const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const ProductSchema = new mongoose.Schema({
        id:{ type:ObjectId},
        name: String,
        category:String,
        price: Number
},
     { timestamps: true });

     
module.exports = mongoose.model('Product', ProductSchema) 



// String, Number
// Boolean, Object/json, array