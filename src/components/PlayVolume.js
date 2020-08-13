
import React from 'react';



function PlayVolume({ playSequence, stopSequence, undo }) {

    return (
        <div className="column">
            <button className="button is-rounded is-dark" onClick={playSequence}>
                <i class="fas fa-play-circle"></i>
            </button>
            <button className="button is-rounded is-dark" onClick={stopSequence}>
                <i class="fas fa-stop-circle"></i>
            </button>
            <button className="button is-rounded is-dark" onClick={undo}>
                <i class="fas fa-undo-alt"></i>
            </button>
        </div>
    )
}

export default PlayVolume;

