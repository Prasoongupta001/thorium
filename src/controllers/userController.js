
const UserModel= require("../models/UserModel")

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({UsersData: savedData})
}



module.exports.createUser= createUser

