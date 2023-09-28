const server = require('./src/server')
const PORT = process.env.PORT || 8004

server.listen(PORT, () => {
    console.log(`Server DB running on PORT: ${PORT}`)
})