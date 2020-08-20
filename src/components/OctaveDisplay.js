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
        <div>
            <div className="columns" id="octaveControl">
                <div className="column is-offset-7"  >
                    <h5>Current Octave: {state.octaves[state.octaveIndex]} </h5>
                    <h5>Current Note: {state.currentNote} </h5>
                    <h5>Sequence: {state.sequence}</h5>
                </div>
                <div className="column is-1 is-offset-6"  >
                    <div id="upDownButton">
                        <button className="octaveButton button is-rounded is-dark" id="upbutton" onClick={octaveup}>
                            <i className="fas fa-arrow-alt-circle-up"></i>
                        </button>
                        <button className="octaveButton button is-rounded is-dark" id="downbutton" onClick={octavedown} >
                            <i className="fas fa-arrow-alt-circle-down"></i>
                        </button>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default OctaveDisplay;

