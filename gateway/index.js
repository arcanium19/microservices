require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const app = express()
const PORT = process.env.PORT
const { createProxyMiddleware } = require('http-proxy-middleware')

//middlewares:
app.use(morgan('dev'))

//routes:
app.use('/characters', createProxyMiddleware ({
    target: 'http://characters:8001',
    changeOrigin: true
}))

app.use('/films', createProxyMiddleware ({
    target: 'http://films:8002',
    changeOrigin: true
}))

app.use('/planets', createProxyMiddleware ({
    target: 'http://planets:8003',
    changeOrigin: true
}))


//Server is up
app.listen(PORT, () => {
    console.log(`Gateway on port: ${PORT}`)
})