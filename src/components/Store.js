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
            sign: 'aries'
        },
        g: {
            noteID: 'g',
            image: 'https://res.cloudinary.com/dvwvkt7iq/image/upload/v1591023493/zodiac%20images/scorpio.png',
            sign: 'scorpio'
        },
        d: {
            noteID: 'd',
            image: 'https://res.cloudinary.com/dvwvkt7iq/image/upload/v1591023555/zodiac%20images/gemini.png',
            sign: 'gemini'
        },
        a: {
            noteID: 'a',
            image: 'https://res.cloudinary.com/dvwvkt7iq/image/upload/v1591023492/zodiac%20images/capricorn.png',
            sign: 'capricorn'
        },
        e: {
            noteID: 'e',
            image: 'https://res.cloudinary.com/dvwvkt7iq/image/upload/v1591023493/zodiac%20images/leo.png',
            sign: 'leo'
        },
        b: {
            noteID: 'b',
            image: 'https://res.cloudinary.com/dvwvkt7iq/image/upload/v1591023493/zodiac%20images/pisces.png',
            sign: 'pisces'
        },
        gb: {
            noteID: 'gb',
            image: 'https://res.cloudinary.com/dvwvkt7iq/image/upload/v1591023493/zodiac%20images/libra.png',
            sign: 'libra'
        },
        db: {
            noteID: 'db',
            image: 'https://res.cloudinary.com/dvwvkt7iq/image/upload/v1591023493/zodiac%20images/taurus.png',
            sign: 'taurus'
        },
        ab: {
            noteID: 'ab',
            image: 'https://res.cloudinary.com/dvwvkt7iq/image/upload/v1591023493/zodiac%20images/sagittarius.png',
            sign: 'sagitarius'
        },
        eb: {
            noteID: 'eb',
            image: 'https://res.cloudinary.com/dvwvkt7iq/image/upload/v1591023492/zodiac%20images/cancer.png',
            sign: 'cancer'
        },
        bb: {
            noteID: 'bb',
            image: 'https://res.cloudinary.com/dvwvkt7iq/image/upload/v1591023492/zodiac%20images/aquarius.png',
            sign: 'aquarius'
        },
        f: {
            noteID: 'f',
            image: 'https://res.cloudinary.com/dvwvkt7iq/image/upload/v1591023493/zodiac%20images/virgo.png',
            sign: 'virgo'
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


