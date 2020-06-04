import React, { Component } from 'react'

import NoteInput from './NoteInput'
import PlayVolume from './PlayVolume'

class Transport extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <NoteInput enteredNote={this.props.enteredNote} enteredOctave={this.props.enteredOctave} handleSubmit={this.props.handleSubmit} onNoteChange={this.props.onNoteChange} onOctaveChange={this.props.onOctaveChange} />
                <PlayVolume undo={this.props.undo} stopSequence={this.props.stopSequence} playSequence={this.props.playSequence} playNote={this.props.playNote} />
            </div>
        )
    }
}

export default Transport
