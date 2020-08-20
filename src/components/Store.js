import React, { useState } from 'react';

const musicData = {
    tempo: 120,
    octaves: [3, 4, 5],
    octaveIndex: 1,
    currentNote: 'c',
    notes: {
        c: {
            noteID: 'c',
            image: 'https://res.cloudinary.com/dvwvkt7iq/image/upload/v1591023492/zodiac%20images/aries.png',
            sign: 'aries',
            color: '#C80000',
        },
        g: {
            noteID: 'g',
            image: 'https://res.cloudinary.com/dvwvkt7iq/image/upload/v1591023493/zodiac%20images/scorpio.png',
            sign: 'scorpio',
            color: '#00AE68',
        },
        d: {
            noteID: 'd',
            image: 'https://res.cloudinary.com/dvwvkt7iq/image/upload/v1591023555/zodiac%20images/gemini.png',
            sign: 'gemini',
            color: '#FF5600',
        },
        a: {
            noteID: 'a',
            image: 'https://res.cloudinary.com/dvwvkt7iq/image/upload/v1591023492/zodiac%20images/capricorn.png',
            sign: 'capricorn',
            color: '#431AA0',
        },
        e: {
            noteID: 'e',
            image: 'https://res.cloudinary.com/dvwvkt7iq/image/upload/v1591023493/zodiac%20images/leo.png',
            sign: 'leo',
            color: '#A3AD0B',
        },
        b: {
            noteID: 'b',
            image: 'https://res.cloudinary.com/dvwvkt7iq/image/upload/v1591023493/zodiac%20images/pisces.png',
            sign: 'pisces',
            color: '#BC008D',
        },
        gb: {
            noteID: 'gb',
            image: 'https://res.cloudinary.com/dvwvkt7iq/image/upload/v1591023493/zodiac%20images/libra.png',
            sign: 'libra',
            color: '#00CC00',
        },
        db: {
            noteID: 'db',
            image: 'https://res.cloudinary.com/dvwvkt7iq/image/upload/v1591023493/zodiac%20images/taurus.png',
            sign: 'taurus',
            color: '#FF0700',
        },
        ab: {
            noteID: 'ab',
            image: 'https://res.cloudinary.com/dvwvkt7iq/image/upload/v1591023493/zodiac%20images/sagittarius.png',
            sign: 'sagittarius',
            color: '#1A1D9F',
        },
        eb: {
            noteID: 'eb',
            image: 'https://res.cloudinary.com/dvwvkt7iq/image/upload/v1591023492/zodiac%20images/cancer.png',
            sign: 'cancer',
            color: '#AF980B',
        },
        bb: {
            noteID: 'bb',
            image: 'https://res.cloudinary.com/dvwvkt7iq/image/upload/v1591023492/zodiac%20images/aquarius.png',
            sign: 'aquarius',
            color: '#C10087',
        },
        f: {
            noteID: 'f',
            image: 'https://res.cloudinary.com/dvwvkt7iq/image/upload/v1591023493/zodiac%20images/virgo.png',
            sign: 'virgo',
            color: '#7CA60A',
        },
    },
    enteredNote: '',
    enteredOctave: '',
    sequence: [],

    isLooping: false
}

export const StoreContext = React.createContext([{}, () => { }])

function Store({ children }) {
    const [state, setState] = useState(musicData)
    return (
        <StoreContext.Provider value={[state, setState]}>
            {children}
        </StoreContext.Provider>
    )
}

export default Store;


