const express = require('express')
const mainRoutes = express.Router()
const controllers = require('../controllers')
const middlewares = require('../middlewares')

mainRoutes.get('/characters', controllers.getCharacters)
mainRoutes.get('/characters/:id', controllers.getCharactersById)
mainRoutes.post('/characters', middlewares.validateCharacter, controllers.postCharacters)

module.exports = mainRoutes