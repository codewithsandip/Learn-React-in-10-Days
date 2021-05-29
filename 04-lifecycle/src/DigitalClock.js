import React, {Component} from 'react';

import { pad } from './utils';
import Reminder from './Reminder';

import './DigitalClock.css'

class DigitalClock extends Component {

    constructor(props) {
        super(props);

        console.log('constructor');

        this.state = {
            time: this.getTimeString(new Date()),
            showReminder: false
        };

        this.tickInterval = null;
    }

    componentDidMount() {
        console.log('mount');
        this.tickInterval = setInterval(() => {
            this.setState({
                time: this.getTimeString(new Date())
            })
        }, 1000);
    }

    componentWillUnmount() {
        console.log('unmount');
        clearInterval(this.tickInterval);
    }

    componentDidUpdate() {
        console.log('update');
        const currentTime = this.getTimeString(new Date());
        const reminderTime = this.props.reminder.time;
        if (currentTime === reminderTime) {
            if (!this.state.showReminder) {
                this.setState({
                    showReminder: true
                });
            }
        }
    }

    getTimeString(time) {
        const hr = time.getHours();
        const min = time.getMinutes();
        const sec = time.getSeconds();
        return `${pad(hr)}:${pad(min)}:${pad(sec)}`;
    }

    render() {
        console.log('render');
        return (
            <div>
                <div className="clock">{this.state.time}</div>
                {
                    this.state.showReminder && 
                        <Reminder data={this.props.reminder} />
                }
            </div>
            
        )
    }
}

export default DigitalClock;