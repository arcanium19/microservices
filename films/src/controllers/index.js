const { catchedAsync } = require('../utils')

module.exports = {
    getFilms: catchedAsync(require('./getFilms')),
    getFilmsById: catchedAsync(require('./getFilmsById')),
    postFilms: catchedAsync(require('./postFilms')),
}