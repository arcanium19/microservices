require('dotenv').config()
const express = require('express')
const server = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const { Character, Film, Planet } = require('./database/index')

//middlewares:
server.use(morgan('dev'))
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: false }))

//routes:
server.use(require('./routes'))

module.exports = server