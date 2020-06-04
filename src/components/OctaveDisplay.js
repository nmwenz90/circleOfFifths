import React, { Component } from 'react'

class OctaveDisplay extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h5>Current Octave: {this.props.currentOctave} </h5>
                <h5>Current Note: {this.props.currentNote} </h5>
                <h5>Sequence: {this.props.sequence}</h5>
                <button className="octaveButton" id="upbutton" onClick={this.props.octaveup}>up</button>
                <button className="octaveButton" id="downbutton" onClick={this.props.octavedown} >down</button>
            </div>
        )
    }
}

export default OctaveDisplay
