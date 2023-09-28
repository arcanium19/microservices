module.exports = (req, res, next) => {
    const { model } = req.params
    if(model === 'Character'){
        const { name, height, mass, hair_color, eye_color, birth_year, gender } = req.body
        if(!name || !height || !mass || !hair_color || !eye_color || !birth_year || !gender){
            throw new Error('Some inputs are missing')
        }else{
            return next()
        }
    }
    if(model === 'Film'){
        const { title, opening_crawl, director, producer, release_date } = req.body
        if(!title || !opening_crawl || !director || !producer || !release_date){
            throw new Error('Some inputs are missing')
        }else{
            return next()
        }
    }
    if(model === 'Planet'){
        const { name, rotation_period, diameter, climate, gravity, terrain, surface_water } = req.body
        if(!name || !rotation_period || !diameter || !climate || !gravity || !terrain || !surface_water){
            throw new Error('Some inputs are missing')
        }else{
            return next()
        }
    }else{
        throw new Error('Invalid model')
    }
}