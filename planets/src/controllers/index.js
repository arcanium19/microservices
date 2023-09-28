const { catchedAsync } = require('../utils')

module.exports = {
    getPlanets: catchedAsync(require('../controllers/getPlanets')),
    getPlanetsById: catchedAsync(require('../controllers/getPlanetsById')),
    postPlanets: catchedAsync(require('../controllers/postPlanets')),
}