const { default: axios } = require("axios")
const { response } = require("../utils")

module.exports = async (req, res) => {
    const { id } = req.params
    const planet = (await axios.get(`http://database:8004/Planet/${id}`)).data
    response(res, 200, planet)
}