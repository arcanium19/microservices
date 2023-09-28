require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const mainRoutes = require('./routes')
const server = express()


//middlewares:
server.use(morgan('dev'))
server.use(express.json())

//routes:
server.use('/', mainRoutes)


server.use('*', (req, res) => {
    res.status(404).send('Not found')
})

server.use((err, req, res, next) => {
    res.status(err.statusCode || 500).send({
        error: true,
        message: err.message
    })
})

module.exports = server
