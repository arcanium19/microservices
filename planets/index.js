const server = require('./src/server')
const PORT = process.env.PORT || 3003

server.listen(PORT, () => {
    console.log(`Server PLANETS running on port: ${PORT}`)
})