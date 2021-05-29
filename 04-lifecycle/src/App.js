import React, { Component } from 'react';

import DigitalClock from './DigitalClock';

const reminder = { time: '15:35:50', task: 'Take a break!' };

class App extends Component {
    
    state = {
        showClock: true
    }

    render() {
        return (
            <div>
                {
                    this.state.showClock && 
                    <DigitalClock reminder={reminder} />
                }
                <button onClick={
                    ()=>this.setState({
                        showClock: !this.state.showClock
                    })
                }>Toggle Clock</button>
            </div>
        );
    }
}

export default App;