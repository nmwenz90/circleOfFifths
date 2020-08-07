import React, { useContext } from 'react'
import { StoreContext } from './Store'


function NoteInput({ enteredNoteChange, enteredOctaveChange, handleSubmit, onNoteChange, onOctaveChange }) {

    const [state, setState] = useContext(StoreContext)

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Enter Note:
                    <input value={state.enteredNote} onChange={onNoteChange} type="text" maxLength="2" />
                </label>
                <label>
                    Enter Octave:
                    <input value={state.enteredOctave} onChange={onOctaveChange} type="text" maxLength="1" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default NoteInput;

