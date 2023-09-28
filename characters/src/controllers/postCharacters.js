const { response } = require("../utils")
const axios = require('axios')

module.exports = async (req, res) => {
        const newPost = req.body
        const created = (await axios.post("http://database:8004/Character", newPost)).data
        response(res, 200, created)
}