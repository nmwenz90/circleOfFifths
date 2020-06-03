const express = require('express')
const playerController = require('../controllers/playerController.js')

const route = express.Router()

route.get("/", (req, res) => {
    res.sendStatus(200)
})

route.get("/select", playerController.selectNote, (req, res) => {
    res.sendStatus(200)
})

// route.put("/update", (req, res) => {
//     res.sendStatus(200)
// }


module.exports = route