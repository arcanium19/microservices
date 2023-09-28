const { catchedAsync } = require('../utils')

module.exports = {
    getCharacters: catchedAsync(require('../controllers/getCharacters')),
    getCharactersById: catchedAsync(require('../controllers/getCharactersById')),
    postCharacters: catchedAsync(require('../controllers/postCharacters')),
}