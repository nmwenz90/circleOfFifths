import React, { Component } from 'react'

class ColorWheel extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }


    render() {

        return (
            <div>
                <img></img>
                <button id="C" onClick={this.props.noteSelector} >C</button>
                <button id="G" onClick={this.props.noteSelector} >G</button>
                <button id="D" onClick={this.props.noteSelector} >D</button>
                <button id="A" onClick={this.props.noteSelector} >A</button>
                <button id="E" onClick={this.props.noteSelector} >E</button>
                <button id="B" onClick={this.props.noteSelector} > B</button>
                <button id="Gb" onClick={this.props.noteSelector} >Gb</button>
                <button id="Db" onClick={this.props.noteSelector} >Db</button>
                <button id="Ab" onClick={this.props.noteSelector} >Ab</button>
                <button id="Eb" onClick={this.props.noteSelector} >Eb</button>
                <button id="Bb" onClick={this.props.noteSelector} >Bb</button>
                <button id="F" onClick={this.props.noteSelector} >F</button>
            </div>
        )
    }
}

export default ColorWheel
