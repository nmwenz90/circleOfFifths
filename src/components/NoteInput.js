import React, { useContext } from 'react'
import { StoreContext } from './Store'


function NoteInput({ enteredNoteChange, enteredOctaveChange, handleSubmit, onNoteChange, onOctaveChange }) {

    const [state, setState] = useContext(StoreContext)

    return (
        <div className="column is-one-fifth">
            <form className="form" onSubmit={handleSubmit}>
                <label>
                    Enter Note+Octave:
                </label>
                <div id="noteInput">
                    <input className="input is-rounded" value={state.enteredNote} onChange={onNoteChange} type="text" maxLength="2" />
                    <input className="input is-rounded" value={state.enteredOctave} onChange={onOctaveChange} type="text" maxLength="1" />
                </div>
                <input className="button is-rounded is-dark" type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default NoteInput;

