const models = require('../models/playermodels.js')

const playerController = {}

playerController.selectNote = (req, res, next) => {
    console.log('selecting note in', models.Player)
    models.Player.find({}).exec()
        .then(result => {
            console.log(result)
            next()
        })
        .catch(() => next({
            log: 'playerController.populateCharacterPhotos : ERROR: Invalid or unfound required data on res.locals.newCharacters object. ',
            message: { err: 'playerController: ERROR: Check server logs for details' },
        }))
}

playerController.updateNote = (req, res, next) => {
    next()
}


module.exports = playerController