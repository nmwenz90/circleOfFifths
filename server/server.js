
const express = require('express')
const path = require('path')

const player = require('./routes/player.js')

const bodyParser = require('body-parser');

const app = express()

const PORT = 3000


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, '../dist/')))

app.use("/player", player)

// app.use("/", (req, res) => {
//     console.log('get request initialized')
//     res.status(200).
// })


app.use((req, res) => {
    res.sendStatus(404)
})

app.use((err, req, res, next) => {
    const defaultErr = {
        log: 'Express error handler caught unknown middleware error',
        status: 400,
        message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => console.log(`running on port ${PORT}`))

module.exports = app