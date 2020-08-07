
import React from 'react';



function PlayVolume({ playSequence, stopSequence, undo }) {

    return (
        <div>
            <button onClick={playSequence}>Play</button>
            <button onClick={stopSequence}>Stop</button>
            <button onClick={undo}>Undo</button>
        </div>
    )
}

export default PlayVolume;

