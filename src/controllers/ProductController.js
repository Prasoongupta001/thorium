const ProductModel= require("../models/ProductModel")

const createProduct= async function (req, res) {
    let data= req.body
    let savedData= await ProductModel.create(data)
    // console.log(req.newAtribute)
    res.send({ProductDetails: savedData})
}



module.exports.createProduct= createProduct
