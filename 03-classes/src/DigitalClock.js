import React, {Component} from 'react';

import './DigitalClock.css'

class DigitalClock extends Component {

    constructor(props) {
        super(props);

        this.state = {
            time: this.getTimeString(new Date())
        };

        setInterval(() => {
            this.setState({
                time: this.getTimeString(new Date())
            })
        }, 1000);
    }

    getTimeString(time) {
        return `
            ${time.getHours()}:
            ${time.getMinutes()}:
            ${time.getSeconds()}
        `;
    }

    render() {
        return (
            <div className="clock">{this.state.time}</div>
        )
    }
}

export default DigitalClock;