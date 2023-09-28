const { Schema } = require('mongoose')

const characterSchema = new Schema({
    _id: String,
    name: String,
    height: String,
    mass: String,
    hair_color: String,
    skin_color: String,
    eye_color: String,
    birth_year: String,
    gender: String,
    homeworld: {
        type: String,
        ref: "Planet"
    },
    films: [{
        type: String,
        ref: "Film"
    }]
})

characterSchema.statics.list = async function (){
    return await this.find()
    .populate('films', ['title', '_id'])
    .populate('homeworld', ['_id', 'name'])
}

characterSchema.statics.get = async function (id){
    return await this.findById(id)
    .populate('films', ['title', '_id'])
    .populate('homeworld', ['_id', 'name'])
}

characterSchema.statics.insert = async function (character){
    return await this.create(character)
}

module.exports = characterSchema