const server = require('./src/server')
const PORT = process.env.PORT

server.listen(PORT, () => {
    console.log(`Server DB running on PORT: ${PORT}`)
})