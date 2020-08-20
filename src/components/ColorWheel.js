import React, { useContext, useEffect, useRef, useState } from 'react'
import { Synth } from 'tone';
import { StoreContext } from './Store'
import axios from 'axios';
import { get } from 'mongoose';

function ColorWheel() {

    const [state, setState] = useContext(StoreContext)
    const [zodiacObj, setZodiacObj] = useState({})
    // let searchResult = 'temp';
    const dynamicSign = useRef('aries')

    const synth = new Synth().toMaster()
    console.log(dynamicSign.current)
    function noteSelector(e) {
        //changes state of currentNote when clicked and plays note
        console.log('note selected!')
        let selectedID = e.target.id //'d'
        //when note button is clicked
        //we patch our database's current note
        //set state to be
        setState(state => ({ ...state, currentNote: selectedID }))
        console.log('currrent note ', state.currentNote)
        synth.volume.value = -6
        synth.triggerAttackRelease(selectedID + state.octaves[state.octaveIndex], '4n')

        dynamicSign.current = state.notes[selectedID].sign
        console.log('dynamicsign --> ', dynamicSign)
    }

    // let URL = `https://aztro.sameerkumar.website/?sign=${dynamicSign.current}&day=today`;
    // async function fetchReq() {
    //     try {
    //         let data = await axios.post(URL)
    //         console.log(data)
    //         setZodiacObj(data)
    //     } catch (err) {
    //         return { err }
    //     }
    // }

    useEffect(() => {
        // fetchReq()
        console.log('dynamic sign in useeffect', dynamicSign)
        let URL = `https://aztro.sameerkumar.website/?sign=${dynamicSign.current}&day=today`;
        // console.log(URL)
        fetch(URL, {
            method: 'POST'
        }).then(response => response.json())
            .then(data => setZodiacObj(data))
            .catch(err => console.log(err))


    }, [state.currentNote])



    const colorWheelButtons = Object.keys(state.notes).map((key, i) =>
        <button className="button is-rounded colorWheelButtons circle-item" style={{ backgroundColor: state.notes[key].color }} id={key} key={i} onClick={noteSelector} >{key.toUpperCase()}</button>
    )

    return (
        <div className="section" >
            <div className="column section is-three-fifths is-offset-one-fifth" >
                <img className="image is-250x250" src={state.notes[state.currentNote].image} /><br />
            </div>
            <div className="circle">
                {colorWheelButtons}
            </div>
            <div className="columns">
                <div className="column content is-one-fifth is-offset-one-fifth" style={{ color: 'ghostwhite' }} >{zodiacObj.current_date} - </div>
                <p className=" is-two-fifths column " style={{ color: 'ghostwhite' }}>{zodiacObj.description}</p>
            </div>
        </div>
    )
}

export default ColorWheel;
