import React, { useContext } from 'react'
import { StoreContext } from './Store'


function NoteInput({ enteredNoteChange, enteredOctaveChange, handleSubmit, onNoteChange, onOctaveChange }) {

    const [state, setState] = useContext(StoreContext)

    return (
        <div>
            <form className="form columns" onSubmit={handleSubmit}>
                {/* <label className="column is-offset-2">
                    Enter Note+Octave:
                </label> */}
                <div id="noteInput" className="is-4 column">
                    <input className="input is-rounded" value={state.enteredNote} onChange={onNoteChange} type="text" maxLength="2" />
                    <input className="input is-rounded" value={state.enteredOctave} onChange={onOctaveChange} type="text" maxLength="1" />
                </div>
                <div className="column">
                    <input className=" button is-rounded is-dark" type="submit" value="Submit" />
                </div>
            </form>
        </div>
    )
}

export default NoteInput;

