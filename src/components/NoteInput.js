import React, { Component } from 'react'

class NoteInput extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <label>
                        Enter Note:
                        <input value={this.props.enteredNote} onChange={this.props.onNoteChange} type="text" maxLength="2" />
                    </label>
                    <label>
                        Enter Octave:
                        <input value={this.props.enteredOctave} onChange={this.props.onOctaveChange} type="text" maxLength="1" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default NoteInput
