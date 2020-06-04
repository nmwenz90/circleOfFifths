const express = require('express')
const playerController = require('../controllers/playerController.js')

const route = express.Router()

route.get("/", (req, res) => {
    console.log('inside player')
    res.sendStatus(200)
})

route.get("/selectNote", playerController.selectNote, (req, res) => {
    res.status(200).json(res.locals.currentNote)
})

route.patch("/updateNote", playerController.updateNote, playerController.selectNote, (req, res) => {
    res.status(201).json(res.locals.currentNote)
})

route.get("/selectOctave", playerController.selectOctave, (req, res) => {
    res.status(201).json(res.locals.currentOctave)
})

route.patch("/updateOctave", playerController.updateOctave, playerController.selectOctave, (req, res) => {
    res.status(201).json(res.locals.currentOctave)
})

// route.put("/update", (req, res) => {
//     res.sendStatus(200)
// }


module.exports = route