const server = require('./src/server')
const PORT = process.env.PORT || 3002

server.listen(PORT, () => {
    console.log(`Server FILMS running on port: ${PORT}`)
})