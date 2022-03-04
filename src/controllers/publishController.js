const publishmodel = require("../models/publishModel")


const Publisher = async function (req, res) {
    let published = req.body
    let authors = await publishmodel.create(published)
    res.send({ data: authors })
}



module.exports.Publisher = Publisher