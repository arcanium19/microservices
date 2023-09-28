require('dotenv').config()

console.log('URI: ', process.env.MONGODB_URI)

module.exports = {
    MONGO_URI: process.env.MONGODB_URI
}