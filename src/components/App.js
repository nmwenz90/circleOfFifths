import React from 'react'
import OctaveDisplay from './OctaveDisplay.js'
import ColorWheel from './ColorWheel.js'
import TransportComponent from './TransportComponent.js'
import Header from './Header'
import Footer from './Footer'

import 'bulma/css/bulma.css'
import '../styleSheets/styles.css'
import Store from './Store'

const App = (props) => {
    return (
        <Store>
            <div class="column is-three-fifths is-offset-one-fifth bodyContainer">
                <Header />
                <ColorWheel />
                <div className="section ">
                    <div className="columns">
                        <OctaveDisplay className="column is-offset-4" />
                        <TransportComponent className="column is-4" />
                    </div>
                </div>
                <Footer />
            </div>
        </Store>
    )
}

export default App;


