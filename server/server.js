
const express = require('express')
const path = require('path')
// const cors = require('cors')

const player = require('./routes/player.js')

const bodyParser = require('body-parser');

const app = express()

const PORT = 3000


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use("/", express.static(path.resolve(__dirname, "../dist/")));


app.get("/", (req, res) => {
    console.log("in home endpoint");
    res.status(200).sendFile(path.join(__dirname, "../dist/index.html"));
});



app.use("/player", player)


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