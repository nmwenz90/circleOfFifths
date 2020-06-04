import React, { Component } from 'react'



class PlayVolume extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <button onClick={this.props.playSequence}>Play Sequence</button>
                <button onClick={this.props.stopSequence}>Stop</button>
                <button onClick={this.props.undo}>Undo</button>
            </div>
        )
    }
}

export default PlayVolume
