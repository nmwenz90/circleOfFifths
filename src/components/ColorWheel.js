import React, { useContext, useEffect, useRef } from 'react'
import { Synth } from 'tone';
import { StoreContext } from './Store'
import axios from 'axios';
import { get } from 'mongoose';

function ColorWheel() {

    const [state, setState] = useContext(StoreContext)

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
        // axios({
        //     request: 'GET',
        //     url: `https://ohmanda.com/api/horoscope/aries`,
        //     headers: {
        //         'Access-Control-Allow-Origin': '*',
        //         'Content-Type': 'application/json',
        //         'Allow': '*',
        //         "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
        //     },

        //     // })
        //     // axios.get('https://ohmanda.com/api/horoscope/aries')
        // })
        // fetch(`http://ohmanda.com/api/horoscope/aries`, { mode: "no-cors" })
        //     .then((data) => data.json())
        //     .then(result => console.log('result', result))
        //     .catch(err => console.log('error -->', err))

    }

    // let fetchZodiac = async () => {
    //     let result = await axios.get('https://json.astrologyapi.com/v1/sun_sign_prediction/daily/:aries')
    //     console.log(result)
    // }
    useEffect(() => {

        console.log('dynamic sign in useeffect', dynamicSign.current)
        let URL = `https://aztro.sameerkumar.website/?sign=${dynamicSign.current}&day=today`;
        console.log(URL)
        fetch(URL, {
            method: 'POST'
        }).then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))


    })



    const colorWheelButtons = Object.keys(state.notes).map((key, i) =>
        <button id={key} key={i} onClick={noteSelector} >{key.toUpperCase()}</button>
    )

    return (
        <div>
            <img id="zodiac-image" src={state.notes[state.currentNote].image} /><br />
            {colorWheelButtons}
            <p>placeholder</p>
        </div>
    )
}

export default ColorWheel;
