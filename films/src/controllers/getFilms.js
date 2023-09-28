const { response } = require('../utils')
const { default: axios } = require("axios")

module.exports = async (req, res) => {
        const films = (await axios.get(`http://database:8004/Film`)).data
        response(res, 200, films)
}