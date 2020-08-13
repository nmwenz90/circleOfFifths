import React from 'react'
import OctaveDisplay from './OctaveDisplay.js'
import ColorWheel from './ColorWheel.js'
import TransportComponent from './TransportComponent.js'

import 'bulma/css/bulma.css'
import '../styleSheets/styles.css'
import Store from './Store'

const App = (props) => {
    return (
        <Store >
            <OctaveDisplay />
            <ColorWheel />
            <TransportComponent />
        </Store>
    )
}

export default App;


