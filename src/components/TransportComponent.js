

import React, { useContext, useState, useEffect, useRef } from 'react';
import NoteInput from './NoteInput'
import PlayVolume from './PlayVolume'
import { Synth, Transport, Sequence } from 'tone';
import { StoreContext } from './Store'

function TransportComponent() {

    const [state, setState] = useContext(StoreContext)

    const synthesizer = useRef(null)
    //useEffects persists the state of the synth sequence array when undo is called
    useEffect(() => {
        synthesizer.current = new Synth().toMaster()
    })

    let synthSequence = new Sequence((time, note) => {
        synthesizer.current.triggerAttackRelease(note, '2n', time)
    }, state.sequence, '4n')

    const handleSubmit = (e) => {
        e.preventDefault()
        setState(state => ({
            ...state,
            sequence: [...state.sequence, state.enteredNote + state.enteredOctave],
            enteredNote: '',
            enteredOctave: '',
        }))
        synthSequence = new Sequence((time, note) => {
            synthesizer.current.triggerAttackRelease(note, '2n', time)
        }, state.sequence, '2n')
        console.log('current sequence array --> ', state.sequence)
    }



    function onNoteChange(e) {
        //set state to the targets value
        console.log(e.target.value)
        const value = e.target.value
        setState(state => ({ ...state, enteredNote: value }))
    }

    function onOctaveChange(e) {
        //set state to the targets value
        console.log(e.target.value)
        const value = e.target.value
        setState(state => ({ ...state, enteredOctave: value }))
    }

    function undo() { //pops off last element of sequence array
        console.log('popping off last note')//
        let undoneSequence = state.sequence.filter(((el, index) => index < state.sequence.length - 1))
        console.log('undoneSequence looks like -->', undoneSequence)
        setState(state => ({ ...state, sequence: undoneSequence }))
        console.log('undone sequence is --> ', state.sequence)
    }

    function playSequence() {
        console.log('sequence starting, this is the sequence', state.sequence)
        synthSequence.start()
        Transport.start()
    }

    function stopSequence() {
        console.log('sequence stopped')
        Transport.stop()
    }

    return (
        <div className="section">

            <div className="columns">
                <NoteInput handleSubmit={handleSubmit} onNoteChange={onNoteChange} onOctaveChange={onOctaveChange} />
                <PlayVolume playSequence={playSequence} stopSequence={stopSequence} undo={undo} />
            </div>
        </div>
    )
}

export default TransportComponent;

