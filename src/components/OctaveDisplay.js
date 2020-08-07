import React, { useContext, useState } from 'react'
import { StoreContext } from './Store'

function OctaveDisplay(props) {
    const [state, setState] = useContext(StoreContext)

    function octaveup() {
        console.log('octave is up')
        if (state.octaveIndex >= 2) setState(state => ({ ...state, octaveIndex: 0 }));
        else setState(state => ({ ...state, octaveIndex: state.octaveIndex + 1 }));
    }

    function octavedown() {
        console.log('octave is down')
        if (state.octaveIndex <= 0) setState(state => ({ ...state, octaveIndex: 2 }));
        else setState(state => ({ ...state, octaveIndex: state.octaveIndex - 1 }));
    }

    return (
        <>
            <div id="octaveControl">
                <h5>Current Octave: {state.octaves[state.octaveIndex]} </h5>
                <div id="upDownButton">
                    <button className="octaveButton" id="upbutton" onClick={octaveup}>up</button>
                    <button className="octaveButton" id="downbutton" onClick={octavedown} >down</button>
                </div>
            </div>
            <h5>Current Note: {state.currentNote} </h5>
            <h5>Sequence: {state.sequence}</h5>
        </>
    )
}

export default OctaveDisplay;

