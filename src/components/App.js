import React, { Component } from 'react'
import OctaveDisplay from './OctaveDisplay.js'
import ColorWheel from './ColorWheel.js'
import Transport from './Transport.js'

import * as Tone from 'tone'
import Axios from 'axios'
// import { Transport } from 'tone'

// import StartAudioContext from 'startaudiocontext'



class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            tempo: 120,
            octaves: [3, 4, 5],
            octaveIndex: 1,
            currentNote: 'C',
            notes: {
                c: 'c',
                g: 'g',
                d: 'd',
                a: 'a',
                e: 'e',
                b: 'b',
                gb: 'gb',
                db: 'db',
                ab: 'ab',
                eb: 'eb',
                bb: 'bb',
                f: 'f',
            },
            enteredNote: '',
            enteredOctave: '',
            sequence: [],
            isLooping: false
        }
        //functions


        this.octaveup = this.octaveup.bind(this)
        this.octavedown = this.octavedown.bind(this)
        this.playNote = this.playNote.bind(this);
        this.noteSelector = this.noteSelector.bind(this)
        this.playSequence = this.playSequence.bind(this)
        this.stopSequence = this.stopSequence.bind(this)

        this.onNoteChange = this.onNoteChange.bind(this)
        this.onOctaveChange = this.onOctaveChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.undo = this.undo.bind(this)


        this.synth = new Tone.Synth().toMaster()
        this.synthSequence = new Tone.Sequence((time, note) => {
            this.synth.triggerAttackRelease(note, '2n', time)
        }, this.state.sequence, '4n')
    }

    //function to get current note from database
    // getNote() {
    //     Axios.get('/player')
    // }
    //fucntion to get current octave from database
    //function to patch sequence array in database

    octaveup() {
        console.log('octave is up')
        if (this.state.octaveIndex >= 2) {
            this.setState({
                octaveIndex: 0
            })
        }
        else this.setState({

            octaveIndex: this.state.octaveIndex + 1
        })
    }



    octavedown() {
        console.log('octave is down')
        if (this.state.octaveIndex <= 0) {
            this.setState({
                octaveIndex: 2
            })
        }
        else this.setState({
            octaveIndex: this.state.octaveIndex - 1
        })
    }

    playNote() {
        console.log('note playing')
        this.synth.triggerAttackRelease("C4", '4n')
    }




    noteSelector(e) {
        //changes state of currentNote when clicked and plays note
        console.log('note selected!')
        console.log(typeof e.target.id)
        let noteId = e.target.id
        this.setState({ currentNote: noteId })
        this.synth.volume.value = -18
        this.synth.triggerAttackRelease(e.target.id + this.state.octaves[this.state.octaveIndex], '4n')
        // this.setState({currentNote: })
    }

    onNoteChange(e) {
        //set state to the targets value
        console.log(e.target.value)
        this.setState({ enteredNote: e.target.value })
    }

    onOctaveChange(e) {
        //set state to the targets value
        console.log(e.target.value)
        this.setState({ enteredOctave: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault()
        console.log('here is submitted text', this.state.enteredNote, this.state.enteredOctave)
        this.setState({ sequence: [...this.state.sequence, this.state.enteredNote + this.state.enteredOctave] })
        this.synthSequence = new Tone.Sequence((time, note) => {
            this.synth.triggerAttackRelease(note, '2n', time)
        }, this.state.sequence, '2n')
    }

    undo() { //pops off last element of sequence array
        console.log('popping off last note')//
        let undoneSequence = this.state.sequence.filter(((el, index) => index < this.state.sequence.length - 1))
        this.setState({ sequence: undoneSequence })
    }

    playSequence() {
        console.log('sequence starting, this is the sequence', this.state.sequence)
        this.synthSequence.start()
        Tone.Transport.start()
    }

    stopSequence() {
        console.log('sequence stopped')
        Tone.Transport.stop()
    }


    render() {
        return (
            <div>
                <OctaveDisplay sequence={this.state.sequence} octavedown={this.octavedown} octaveup={this.octaveup} currentNote={this.state.currentNote} currentOctave={this.state.octaves[this.state.octaveIndex]} />
                <ColorWheel noteSelector={this.noteSelector} />
                <Transport undo={this.undo} stopSequence={this.stopSequence} playSequence={this.playSequence} enteredNote={this.state.enteredNote} enteredOctave={this.state.enteredOctave} handleSubmit={this.handleSubmit} onNoteChange={this.onNoteChange} onOctaveChange={this.onOctaveChange} playNote={this.playNote} />
            </div>
        )
    }
}

export default App
