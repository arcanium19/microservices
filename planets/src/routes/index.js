const express = require('express')
const mainRoutes = express.Router()
const controllers = require('../controllers')
const middlewares = require('../middlewares')

mainRoutes.get('/planets', controllers.getPlanets)
mainRoutes.get('/planets/:id', controllers.getPlanetsById)
mainRoutes.post('/planets', middlewares.validatePlanet, controllers.postPlanets)

module.exports = mainRoutes