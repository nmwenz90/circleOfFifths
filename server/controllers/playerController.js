const models = require('../models/playermodels.js')

const playerController = {}

playerController.selectNote = (req, res, next) => {
    console.log('selecting note in', models.Player)
    models.Player.findOne({}).exec()
        .then(result => {
            console.log(result)
            res.locals.currentNote = result.currentNote
            return next()
        })
        .catch(() => next({
            log: 'playerController.populateCharacterPhotos : ERROR: Invalid or unfound required data on res.locals.newCharacters object. ',
            message: { err: 'playerController: ERROR: Check server logs for details' },
        }))
}

playerController.selectOctave = (req, res, next) => {
    console.log('selecting octave in', models.Player)
    models.Player.findOne({}).exec()
        .then(result => {
            res.locals.currentOctave = result.currentOctave
            return next()
        })
        .catch(err => next(err))
}

playerController.displaySequence = (req, res, next) => {
    console.log('displaying sequence array in', models.Player)
    models.Player.findOne({}).exec()
        .then(result => {
            console.log(result)
            res.locals.displaySequence = result.sequence
            return next()
        })
        .catch(err => next(err))
}

playerController.updateNote = (req, res, next) => {
    console.log('updating note')
    console.log('request body: ', req.body.currentNote)
    const currentNote = req.body.currentNote
    models.Player.updateOne({ currentNote: currentNote })
        .then(result => {
            console.log('heres the result', result)
            return next()
        })
        .catch(err => next(err))
}


playerController.updateOctave = (req, res, next) => {
    console.log('updating octave')
    const currentOctave = req.body.currentOctave
    models.Player.updateOne({ currentOctave: currentOctave })
        .then(result => {
            console.log('heres the result', result)
            return next()
        })
        .catch(err => next(err))
}

playerController.pushSequence = (req, res, next) => {
    console.log('pushing note + octave to sequence array')
    console.log(req.body.currentNote)
    const currentNote = req.body.currentNote
    const currentOctave = req.body.currentOctave
    models.Player.updateOne({}, {
        $push: {
            sequence: currentNote + currentOctave
        }
    })
        .then(result => {
            console.log('heres the result', result)
            return next()
        })
        .catch(err => next(err))
}

playerController.popSequence = (req, res, next) => {
    console.log('popping note from squence array')
    models.Player.updateOne({}, {
        $pop: {
            sequence: 1
        }
    })
        .then(result => {
            return next()
        })
        .catch(err => next(err))
}


module.exports = playerController