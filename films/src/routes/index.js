const express = require('express')
const mainRoutes = express.Router()
const controllers = require('../controllers')
const middlewares = require('../middlewares')

mainRoutes.get('/films', controllers.getFilms)
mainRoutes.get('/films/:id', controllers.getFilmsById)
mainRoutes.post('/films', middlewares.validateFilm, controllers.postFilms)

module.exports = mainRoutes