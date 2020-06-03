const mongoose = require('mongoose')

//https://cloud.mongodb.com/freemonitoring/cluster/6TZSHLQCJ77WKJAQHA2PEC5U2DMDIDFH",

const MONGO_URI = 'mongodb+srv://mongoDbPractice:rpZV5yvEzFjCfIf2@cluster0-2gzjt.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'player'
})
    .then(() => console.log('connected to Database'))
    .catch(err => console.log(err))

const Schema = mongoose.Schema;

const playerSchema = new Schema({
    tempo: Number,
    sequence: Array,
    currentNote: String,
    currentOctave: Number,
})

const Player = mongoose.model('player', playerSchema, 'player')

const photosSchema = new Schema({
    c: String,
    g: String,
    d: String,
    a: String,
    e: String,
    b: String,
    gb: String,
    db: String,
    ab: String,
    eb: String,
    bb: String,
    f: String,
})

const Photos = mongoose.model('photos', photosSchema, 'photos')

module.exports = {
    Player,
    Photos
}