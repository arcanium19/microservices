const { Router } = require('express')
const store = require('../database')
const { validateModel, validateInsert } = require('../middlewares')

const router = Router()

router.get('/:model', validateModel, async (req, res) => {
    const { model } = req.params
    const data = await store[model].list()
    res.status(200).json(data)
})

router.get('/:model/:id', validateModel, async (req, res) => {
    const { model, id } = req.params
    const data = await store[model].get(id)
    res.status(200).json(data)
})

router.post('/:model', validateInsert,async (req, res) => {
    const { model } = req.params
    const newPost = req.body
    const { _id } = req.body
    const idFound = await store[model].get(_id)
    if(idFound){
        throw new Error('Id already exists')
    }else{
        const data = await store[model].insert(newPost)
        res.status(200).json(data)
    }
})


module.exports = router